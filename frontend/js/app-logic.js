// quant-calendar: App 逻辑层 (v3.6.0-T8 / FR-3.6.2)
// 原 index.html 主 script setup() body 提取至此, 通过 window.createAppLogic() 调用
(function () {
  window.createAppLogic = function () {
    const { ref, computed, onMounted, onUnmounted, watch, nextTick } = Vue;
                console.log('[DEBUG] setup() started');
                // ===== v3.11(11.3): 共享配置脏标记（AI 配置段与系统配置域共用，提前声明避免 TDZ）=====
                const configChanged = ref(false);
                // ===== 导航菜单 =====
                                // ===== 市场行情数据 =====
                const marketData = ref({ indices: [], market_sentiment: null });
                // ===== v1.10 / v3.11(11.2): 全局搜索 =====
                // v3.11: 升级为三域检索——菜单跳页 / 指令动作 / 股票直达详情（复用 command-panel-core 纯逻辑）
                const searchQuery = ref('');
                async function searchStocks(queryString, cb) {
                    if (!queryString || queryString.trim().length < 1) { cb([]); return; }
                    const QCP = window.QuantCommandPanel;
                    let localHits = [];
                    if (QCP && menus.value) {
                        localHits = QCP.buildSearchSuggestions(queryString, menus.value, subPageNames, QCP.DEFAULT_COMMANDS);
                    }
                    try {
                        const res = await fetch('/api/search?q=' + encodeURIComponent(queryString));
                        const data = await res.json();
                        if (data.success && data.results) {
                            const stocks = data.results.map(function(r) {
                                return { value: r.code + ' ' + r.name, type: 'stock', code: r.code, name: r.name, label: r.name, subLabel: r.code, icon: '📈' };
                            });
                            cb(localHits.concat(stocks));
                        } else { cb(localHits); }
                    } catch(e) { console.warn('[searchStocks] fetch failed:', e); cb(localHits); }
                }
                function onSearchSelect(item) {
                    searchQuery.value = '';
                    const QCP = window.QuantCommandPanel;
                    const d = QCP ? QCP.dispatchSearchSelection(item) : null;
                    if (!d) return;
                    if (d.action === 'menu') { navigateTo(d.menuKey, d.subPage); return; }
                    if (d.action === 'command') { runGlobalCommand(d.key); return; }
                    if (d.action === 'stock' && typeof showStockDetail === 'function') {
                        showStockDetail(d.code, d.name);
                    }
                }
                function runGlobalCommand(key) {
                    if (key === 'refresh') {
                        const p = currentPage.value;
                        if (p === 'strategies') loadDashboardData().catch(function(){});
                        else if (p === 'calendar') refreshCalendarData().catch(function(){});
                        else if (p === 'ai') loadAiHistory().catch(function(){});
                    } else if (key === 'export') { exportCSV(); }
                    else if (key === 'batch') { showBatchEvaluate.value = true; }
                    else if (key === 'ai') { openAiFab(); }
                    else if (key === 'sidebar') { toggleSidebar(); }
                }
                // ===== 指数详情 =====
                const indexDetailVisible = ref(false);
                const indexDetail = ref(null);
                const indexAiResult = ref(null);
                const indexAiLoading = ref(false);
                
                // ===== K线图数据 =====
                const klinePeriods = [
                    {label: '日线', value: 'daily'},
                    {label: '周线', value: 'weekly'},
                    {label: '月线', value: 'monthly'},
                    {label: '季线', value: 'quarterly'},
                    {label: '年线', value: 'yearly'}
                ];
                const currentKlinePeriod = ref('daily');
                const klineLoading = ref(false);
                const indexKlineLoading = ref(false);
                const stockKlineLoaded = ref(false);
                // v1.9.2: 评分动画
                const scoreAnimating = ref(false);
                const scoreDelta = ref(null);  // { value: +3, dir: 'up' } or null
                const scorePulse = ref(false);  // triggers CSS pulse
                let lastScoreValue = null;  // tracks previous score for comparison
                const indexKlineLoaded = ref(false);
                let stockKlineChart = null;
                let indexKlineChart = null;
                // v3.11(11.3): 供 ai-chat 域安全释放 K 线实例（避免跨域直接引用 setup 局部变量）
                function disposeStockKline() {
                    if (stockKlineChart) { stockKlineChart.dispose(); stockKlineChart = null; }
                }
                const isMobile = ref(window.innerWidth <= 768);
                
                // 监听窗口大小变化
                window.addEventListener('resize', () => {
                    isMobile.value = window.innerWidth <= 768;
                    if (stockKlineChart) stockKlineChart.resize();
                    if (indexKlineChart) indexKlineChart.resize();
                });

                // v3.8.11: 触觉反馈
                function hapticFeedback(style = 'light') {
                    if (typeof navigator !== 'undefined' && navigator.vibrate) {
                        if (style === 'light') navigator.vibrate(10);
                        else if (style === 'medium') navigator.vibrate(20);
                        else if (style === 'heavy') navigator.vibrate([10, 30, 10]);
                    }
                }

                // 触摸手势：左右滑动切换页面（仅移动端）
                const touchStartX = ref(0);
                const touchStartY = ref(0);
                function onTouchStart(e) {
                    if (!isMobile.value) return;
                    touchStartX.value = e.touches[0].clientX;
                    touchStartY.value = e.touches[0].clientY;
                }
                function onTouchEnd(e) {
                    if (!isMobile.value) return;
                    const diffX = touchStartX.value - e.changedTouches[0].clientX;
                    const diffY = touchStartY.value - e.changedTouches[0].clientY;
                    // 仅水平滑动有效（|diffX| > |diffY| 且 |diffX| > 80px）
                    if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 80) {
                        const menuKeys = menus.value.map(function(m) { return m.key; });
                        const idx = menuKeys.indexOf(currentPage.value);
                        if (diffX > 0 && idx < menuKeys.length - 1) {
                            currentPage.value = menuKeys[idx + 1];
                            currentSubPage.value = '';
                        } else if (diffX < 0 && idx > 0) {
                            currentPage.value = menuKeys[idx - 1];
                            currentSubPage.value = '';
                        }
                    }
                }

                // 窗口关闭前确认（防止未保存配置丢失）
                window.addEventListener('beforeunload', (e) => {
                    if (configChanged.value) {
                        e.preventDefault();
                        e.returnValue = '您有未保存的配置变更，确定要离开吗？';
                        return e.returnValue;
                    }
                });
                
                // v3.0: 美林时钟模块 - 从 merrill.js 加载
                const merrill = useMerrillClock();
                const { merrillData, merrillStagesConfig, showMerrillDetail, merrillDetailData, merrillClockConfig, merrillClockLastUpdated, merrillReevalResult, merrillReevalLoading, stages, indicatorList, dimensionScoreList, detailDimensionScoreList, confidenceColor, timelineStages, clockPosition, merrillProgressStyle, FULL_CYCLE_MONTHS, getStageAngle, getCycleProgress, getCurrentStageMonths, getStageTotalMonths, isStageCompleted, getCharLabel, getAssetName, getRankColor, fetchMerrillStages, fetchMerrillClock, showStageDetail, saveMerrillClockConfig, doMerrillReevaluate, startAutoRefresh, stopAutoRefresh } = merrill;
                // ===== 飞书配置数据 =====
                const feishuConfig = ref({
                    webhook_url: '',
                    notify_type: 'webhook',
                    format: 'card',
                    enabled: false,
                    daily_push: false,
                    view_change_push: false,
                    ai_evaluate_push: false
                });
                const feishuTestStatus = ref('idle');
                const feishuTestMessage = ref('');
                
                // 定时器引用
                let marketRefreshTimer = null;
                
                // ===== 市场行情API =====
                async function fetchMarketData() {
                    try {
                        const res = await fetch('/api/market/overview');
                        const data = await res.json();
                        marketData.value = data;
                        
                        // 智能设置下次更新时间
                        scheduleNextMarketRefresh(data);
                    } catch (e) { console.error('获取市场行情失败:', e); }
                }
                
                // ===== 智能设置行情刷新 =====
                function scheduleNextMarketRefresh(data) {
                    if (marketRefreshTimer) clearInterval(marketRefreshTimer);
                    // 交易时间内：每10分钟刷新一次
                    if (data && data.in_trading_hours) {
                        marketRefreshTimer = setInterval(fetchMarketData, 600000);
                    }
                }
                
                // ===== 显示指数详情 =====
                function showIndexDetail(indexData) {
                    indexDetail.value = indexData;
                    indexAiResult.value = null;
                    currentKlinePeriod.value = 'daily';
                    // 自动加载今日缓存评估
                    loadCachedIndexEval(indexData.code);
                    // 先销毁旧图表
                    if (indexKlineChart) {
                        indexKlineChart.dispose();
                        indexKlineChart = null;
                    }
                    indexDetailVisible.value = true;
                    // 弹窗打开动画需要时间，等待500ms确保DOM完全渲染
                    setTimeout(async () => {
                        await loadIndexKline('daily');
                    }, 500);
                }
                
                // ===== 加载缓存的指数评估 =====
                async function loadCachedIndexEval(indexCode) {
                    try {
                        const token = localStorage.getItem('quant_token');
                        const headers = token ? { 'Authorization': 'Bearer ' + token } : {};
                        const res = await fetch('/api/ai/index-eval/' + indexCode, { headers });
                        const data = await res.json();
                        if (data.success && data.data) {
                            indexAiResult.value = data.data;
                        }
                    } catch(e) { console.warn('[getIndexAiScore] cache check failed:', e); }
                }

                // ===== 指数AI智能评股 =====
                async function doIndexAiEvaluate() {  // 技术指标评估（内置引擎）
                    if (!indexDetail.value) return;
                    indexAiLoading.value = true;
                    try {
                        const token = localStorage.getItem('quant_token');
                        const headers = token
                            ? { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` }
                            : { 'Content-Type': 'application/json' };
                        const res = await fetch('/api/ai/evaluate-index', {
                            method: 'POST',
                            headers,
                            body: JSON.stringify({
                                index_code: indexDetail.value.code,
                                index_name: indexDetail.value.name,
                                current_price: indexDetail.value.close,
                                pct_chg: indexDetail.value.pct_chg
                            })
                        });
                        const data = await res.json();
                        if (data.success) {
                            indexAiResult.value = data.data;
                            // AI指数评估结果已在弹窗展示
                        } else {
                            ElementPlus.ElMessage.error(data.message || '评估失败');
                        }
                    } catch (e) {
                        ElementPlus.ElMessage.error('评估失败，请稍后重试');
                    } finally {
                        indexAiLoading.value = false;
                    }
                }
                
                // ===== K线图渲染函数 =====
                function renderKlineChart(chart, data, period, isIndex = false) {
                    // v3.2.0-T17: 已提取到 js/charts.js 模块
                    window.__quantModules.charts.renderKlineChart(chart, data, period, isIndex, isMobile.value);
                }

                // 时间范围快捷缩放
                function zoomKlineRange(tradingDays) {
                    if (!stockKlineChart) return;
                    if (tradingDays <= 0) {
                        // 全部
                        stockKlineChart.dispatchAction({ type: 'dataZoom', start: 0, end: 100 });
                    } else {
                        const total = 60; // 总数据点数
                        const end = 100;
                        const start = Math.max(0, ((total - tradingDays) / total) * 100);
                        stockKlineChart.dispatchAction({ type: 'dataZoom', start: Math.round(start), end: end });
                    }
                }

                // ===== 🔧 通用K线加载 =====
                async function loadKlineData(tsCode, chartVar, chartKey, loadingVar, loadedVar) {
                    if (!tsCode) return;
                    loadingVar.value = true;
                    try {
                        const res = await fetch(`/api/market/kline/${tsCode}?period=${currentKlinePeriod.value}&limit=60`);
                        const data = await res.json();
                        if (!data.success || !data.data) throw new Error(data.message || '数据获取失败');
                        loadedVar.value = true;
                        await nextTick();
                        const el = document.getElementById(chartKey);
                        if (!el) throw new Error('无法找到图表容器');
                        if (el.offsetWidth < 50) { el.style.minWidth = '600px'; el.style.minHeight = '300px'; }
                        if (chartVar.value) { chartVar.value.dispose(); chartVar.value = null; }
                        chartVar.value = echarts.init(el, null, { renderer: 'canvas' });
                        chartVar.value.setOption(window.__quantModules.echartsTheme.getEChartsTheme());
                        renderKlineChart(chartVar.value, data.data, currentKlinePeriod.value, chartKey === 'indexKlineChart');
                    } catch (e) {
                        ElementPlus.ElMessage.error('K线加载失败');
                    } finally {
                        loadingVar.value = false;
                    }
                }
                async function loadStockKline(period) {
                    if (!stockDetail.value) return;
                    klineLoading.value = true;
                    currentKlinePeriod.value = period;
                    try {
                        const res = await fetch(`/api/market/kline/${stockDetail.value.stock}?period=${period}&limit=60`);
                        const data = await res.json();
                        if (!data.success || !data.data) throw new Error(data.message || '数据获取失败');
                        stockKlineLoaded.value = true;
                        markKlineLoaded(stockDetail.value.stock);
                        await nextTick();
                        const el = document.getElementById('stockKlineChart');
                        if (!el) return;
                        // v3.8.1: 切周期复用实例, 仅首次创建时 init + 主题
                        if (!stockKlineChart) {
                            stockKlineChart = echarts.init(el);
                            stockKlineChart.setOption(window.__quantModules.echartsTheme.getEChartsTheme());
                        }
                        renderKlineChart(stockKlineChart, data.data, period);
                    } catch (e) {
                        ElementPlus.ElMessage.error('K线加载失败');
                    } finally {
                        klineLoading.value = false;
                    }
                }
                // v1.9.2: 评分脉冲动画（每次刷新都触发）
                function triggerScorePulse() {
                    scorePulse.value = true;
                    setTimeout(() => { scorePulse.value = false; }, 600);
                }
                // v1.9.2: 评分计数动画（仅分数变化时触发）
                function animateScoreChange(from, to) {
                    if (from === to) { triggerScorePulse(); return; }
                    const duration = 800; // ms
                    const start = performance.now();
                    const delta = to - from;
                    scoreAnimating.value = true;
                    scoreDelta.value = { value: delta, dir: delta > 0 ? 'up' : 'down' };
                    scorePulse.value = true;
                    setTimeout(() => { scorePulse.value = false; }, 600);
                    setTimeout(() => { scoreDelta.value = null; }, 2300);
                    function step(now) {
                        const elapsed = now - start;
                        const progress = Math.min(elapsed / duration, 1);
                        const eased = 1 - Math.pow(1 - progress, 3);
                        const current = Math.round(from + delta * eased);
                        if (stockDetail.value && stockDetail.value.score_data) {
                            stockDetail.value.score_data.score = current;
                        }
                        if (progress < 1) {
                            requestAnimationFrame(step);
                        } else {
                            if (stockDetail.value && stockDetail.value.score_data) {
                                stockDetail.value.score_data.score = to;
                            }
                            scoreAnimating.value = false;
                            lastScoreValue = to;
                        }
                    }
                    requestAnimationFrame(step);
                }
                // v1.9.2: 对话框打开时入场动画
                function animateScoreEntrance() {
                    if (!stockDetail.value || !stockDetail.value.score_data) return;
                    const score = stockDetail.value.score_data.score;
                    if (score == null) return;
                    // Count up from 0
                    const duration = 600;
                    const start = performance.now();
                    scorePulse.value = true;
                    setTimeout(() => { scorePulse.value = false; }, 600);
                    function step(now) {
                        const progress = Math.min((now - start) / duration, 1);
                        const eased = 1 - Math.pow(1 - progress, 3);
                        const current = Math.round(score * eased);
                        if (stockDetail.value && stockDetail.value.score_data) {
                            stockDetail.value.score_data.score = current;
                        }
                        if (progress < 1) {
                            requestAnimationFrame(step);
                        } else {
                            if (stockDetail.value && stockDetail.value.score_data) {
                                stockDetail.value.score_data.score = score;
                            }
                        }
                    }
                    requestAnimationFrame(step);
                }
                // v1.9.2: K线加载后刷新评分
                async function refreshStockScore() {
                    if (!stockDetail.value || !stockDetail.value.stock) return;
                    const code = stockDetail.value.stock;
                    const oldScore = stockDetail.value.score_data?.score;
                    try {
                        const today = new Date().toISOString().split('T')[0];
                        const date = selectedDate.value || today;
                        const res = await fetch(`/api/calendar/stock/${encodeURIComponent(code)}/score?date=${date}`);
                        const data = await res.json();
                        if (data.success && data.score_data) {
                            const newScore = data.score_data.score;
                            if (stockDetail.value) {
                                stockDetail.value.score_data = data.score_data;
                            }
                            if (oldScore != null && newScore !== oldScore) {
                                animateScoreChange(oldScore, newScore);
                            } else {
                                // 分数未变但依然脉冲，表示"已刷新"
                                triggerScorePulse();
                            }
                        } else {
                            triggerScorePulse();
                        }
                    } catch (e) {
                        console.warn('[refreshStockScore] failed:', e);
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
                        const el = document.getElementById('indexKlineChart');
                        if (!el) throw new Error('无法找到指数K线容器');
                        // v3.8.1: 切周期复用实例, 仅首次创建时 init + 主题
                        if (!indexKlineChart) {
                            indexKlineChart = echarts.init(el);
                            indexKlineChart.setOption(window.__quantModules.echartsTheme.getEChartsTheme());
                        }
                        renderKlineChart(indexKlineChart, data.data, period, true);
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
                
                // ===== 指数K线周期切换 =====
                async function loadIndexKlineWithPeriod(period) {
                    currentKlinePeriod.value = period;
                    await loadIndexKline(period);
                }
                // ===== 测试飞书Webhook =====
                async function testFeishuWebhook() {
                    if (!feishuConfig.value.webhook_url) {
                        feishuTestMessage.value = '请先输入Webhook地址';
                        return;
                    }
                    feishuTestStatus.value = 'testing';
                    feishuTestMessage.value = '';
                    try {
                        const token = localStorage.getItem('quant_token');
                        const headers = token ? { 'Authorization': `Bearer ${token}`, 'Content-Type': 'application/json' } : { 'Content-Type': 'application/json' };
                        const res = await fetch('/api/feishu/test', {
                            method: 'POST',
                            headers,
                            body: JSON.stringify({ webhook_url: feishuConfig.value.webhook_url })
                        });
                        const data = await res.json();
                        if (data.success || data.status === 'ok') {
                            feishuTestMessage.value = '测试消息已发送，请查看飞书';
                            ElementPlus.ElMessage.success('测试消息已发送');
                        } else {
                            feishuTestMessage.value = (data.message || '测试失败');
                            ElementPlus.ElMessage.error(feishuTestMessage.value);
                        }
                    } catch (e) {
                        feishuTestMessage.value = '连接失败';
                        ElementPlus.ElMessage.error('飞书连接失败');
                    }
                    feishuTestStatus.value = 'idle';
                }
                
                // ===== 保存飞书配置 =====
                async function saveFeishuConfig() {
                    try {
                        const token = localStorage.getItem('quant_token');
                        const headers = token ? { 'Authorization': `Bearer ${token}`, 'Content-Type': 'application/json' } : { 'Content-Type': 'application/json' };
                        const res = await fetch('/api/feishu/config', {
                            method: 'POST',
                            headers,
                            body: JSON.stringify(feishuConfig.value)
                        });
                        const result = await res.json();
                        // 保存结果在UI展示
                    } catch (e) { ElementPlus.ElMessage.error('保存失败'); }
                }

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

                const researchMenuEnabled = ref(localStorage.getItem('research_menu_enabled') === '1');
                function toggleResearchMenu(val) {
                    researchMenuEnabled.value = val;
                    localStorage.setItem('research_menu_enabled', val ? '1' : '0');
                }

// v1.9.2: 用户组配置（菜单可见性由此驱动）
                const groupsConfig = ref(null);

const allMenuDefs = [
                    { key: 'strategies', name: '策略总览', icon: '📈', subPages: ['overview', 'merrill', 'market', 'consensus'] },
                    { key: 'calendar', name: '量化日历', icon: '🗓️', subPages: ['daily', 'weekly', 'monthly', 'yearly', 'pool'] },
                    { key: 'ai', name: '智能评股', icon: '🤖', subPages: ['overview', 'watchlist', 'history', 'chat_history'] },
                    { key: 'research', name: '策略研究', icon: '🔬', subPages: ['quant-research', 'strategy-write', 'backtest', 'backtest-history'] },
                    { key: 'system', name: '系统配置', icon: '⚙️', subPages: ['status', 'autoeval', 'datasource', 'feature', 'user', 'about'], guestSubPages: ['status', 'about'] }
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
                        const item = { ...m, icon: icons[m.key] || m.icon };
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
                        const res = await fetch('/api/groups/my', { headers: { 'Authorization': 'Bearer ' + token } });
                        if (res.ok) {
                            const data = await res.json();
                            groupsConfig.value = { [data.group_id]: data.group };
                        }
                    } catch(e) { console.warn('loadGroupConfig:', e); }
                }
                const currentPage = ref('strategies');
                const shortcutHelpVisible = ref(false);
                const shortcutHelpItems = [
                    { keys: 'Ctrl+K', desc: '打开命令面板 (股票搜索)' },
                    { keys: 'Ctrl+/', desc: '显示/隐藏快捷键帮助' },
                    { keys: '1-5', desc: '切换导航页面 (非输入态)' },
                    { keys: 'R', desc: '刷新当前页面数据 (非输入态)' },
                ];
                const commandPaletteVisible = ref(false);
                function isTypingTarget(el) {
                    if (!el) return false;
                    const tag = el.tagName;
                    return tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT' || el.isContentEditable;
                }
                function handleGlobalKeydown(e) {
                    if (isTypingTarget(e.target)) return;
                    const k = e.key.toLowerCase();
                    if (e.ctrlKey && k === 'k') { e.preventDefault(); commandPaletteVisible.value = true; return; }
                    if (e.ctrlKey && k === '/') { e.preventDefault(); shortcutHelpVisible.value = !shortcutHelpVisible.value; return; }
                    if (e.ctrlKey || e.metaKey || e.altKey) return;
                    if (k >= '1' && k <= '5') {
                        const idx = parseInt(k) - 1;
                        const page = menus.value[idx];
                        if (page) navigateTo(page.key, page.subPages[0] || '');
                        return;
                    }
                    if (k === 'r') { refreshCurrentPage(); }
                }
                function refreshCurrentPage() {
                    const page = currentPage.value;
                    if (page === 'strategies') loadDashboardData().catch(() => {});
                    else if (page === 'calendar') refreshCalendarData().catch(() => {});
                    else if (page === 'ai') loadAiHistory().catch(() => {});
                }
                // v3.8.2: 统一导航入口
                function navigateTo(page, subPage = '') {
                    hapticFeedback('light');
                    currentPage.value = page;
                    currentSubPage.value = subPage;
                    localStorage.setItem('quant_last_subpage', subPage);
                }
                // v3.2.0-T13: 浮动 AI 按钮 → 跳转智能评股页并聚焦问股
                const aiFabHidden = ref(false);
                function openAiFab() {
                    navigateTo('ai', 'chat_history');
                    aiFabHidden.value = true;
                    nextTick(() => {
                        const input = document.querySelector('input[placeholder*="输入问题"]');
                        if (input) input.focus();
                    });
                }
                // v3.5.0-T5/T6: 策略推荐 + AI 用量
                const strategyRecommendations = ref([]);
                const aiUsage = ref({});
                async function loadStrategyRecommendations() {
                    try {
                        const res = await fetch('/api/ai/recommend-strategies', {
                            headers: { 'Authorization': `Bearer ${localStorage.getItem('quant_token')}` }
                        });
                        const data = await res.json();
                        if (data.success) strategyRecommendations.value = data.recommendations || [];
                    } catch (e) { console.warn('[loadStrategyRecommendations] failed:', e); }
                }
                async function loadAiUsage() {
                    try {
                        const res = await fetch('/api/ai/usage-stats', {
                            headers: { 'Authorization': `Bearer ${localStorage.getItem('quant_token')}` }
                        });
                        const data = await res.json();
                        if (data.success) aiUsage.value = data;
                    } catch (e) { console.warn('loadAiUsage failed:', e); }
                }
                // v3.4.0-T4/T7: 系统监控 + 页面热度
                const sysMonitor = ref({});
                const analyticsRank = ref([]);
                const analyticsDays = ref(7);
                async function loadSysMonitor() {
                    try {
                        const res = await fetch('/api/system/monitor', {
                            headers: { 'Authorization': `Bearer ${localStorage.getItem('quant_token')}` }
                        });
                        const data = await res.json();
                        if (data.success) sysMonitor.value = data;
                    } catch (e) { console.warn('loadSysMonitor failed:', e); }
                }
                async function loadAnalytics() {
                    try {
                        const res = await fetch(`/api/analytics/rank?days=${analyticsDays.value}`, {
                            headers: { 'Authorization': `Bearer ${localStorage.getItem('quant_token')}` }
                        });
                        const data = await res.json();
                        if (data.success) analyticsRank.value = data.rank || [];
                    } catch (e) { console.warn('loadAnalytics failed:', e); }
                }
                // v3.3.0-T8: 数据备份与恢复
                const backups = ref([]);
                const backupCreating = ref(false);
                async function loadBackups() {
                    try {
                        const res = await fetch('/api/backup/list', {
                            headers: { 'Authorization': `Bearer ${localStorage.getItem('quant_token')}` }
                        });
                        const data = await res.json();
                        if (data.success) backups.value = data.backups || [];
                    } catch (e) { console.error('加载备份列表失败', e); }
                }
                async function createBackup() {
                    backupCreating.value = true;
                    try {
                        const res = await fetch('/api/backup/create', {
                            method: 'POST',
                            headers: { 'Authorization': `Bearer ${localStorage.getItem('quant_token')}` }
                        });
                        const data = await res.json();
                        if (data.success) {
                            ElementPlus.ElMessage.success(data.message || '备份成功');
                            loadBackups();
                        } else {
                            ElementPlus.ElMessage.error(data.message || '备份失败');
                        }
                    } catch (e) { ElementPlus.ElMessage.error('备份失败'); }
                    finally { backupCreating.value = false; }
                }
                async function restoreBackup(name) {
                    try {
                        await ElementPlus.ElMessageBox.confirm(
                            `确定要从备份 ${name} 恢复吗？当前数据将被覆盖。`,
                            '⚠️ 恢复确认',
                            { type: 'warning', confirmButtonText: '恢复', cancelButtonText: '取消' }
                        );
                    } catch (e) { console.warn('[restoreBackup] confirm cancelled:', e); return; }
                    try {
                        const res = await fetch('/api/backup/restore', {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json',
                                'Authorization': `Bearer ${localStorage.getItem('quant_token')}`
                            },
                            body: JSON.stringify({ name })
                        });
                        const data = await res.json();
                        if (data.success) {
                            ElementPlus.ElMessage.success(data.message || '恢复成功');
                            setTimeout(() => location.reload(), 1000);
                        } else {
                            ElementPlus.ElMessage.error(data.message || '恢复失败');
                        }
                    } catch (e) { ElementPlus.ElMessage.error('恢复失败'); }
                }
                // v3.2.0-T22: 首次使用引导
                const tourVisible = ref(false);
                const tourStep = ref(0);
                const tourSteps = [
                    { icon: '🗓️', title: '认识量化日历', desc: '日历页展示每日策略选股结果，支持日/周/月/年视图切换。红色=新增入选，蓝色=当前持有，灰色=已出池。' },
                    { icon: '🤖', title: 'AI 智能评股', desc: '在智能评股页可对股票发起多模型 AI 评估；点击右下角 🤖 按钮可随时快速问股。' },
                    { icon: '📮', title: '设置推送与反馈', desc: '在系统配置页可设置飞书推送、数据源和 AI 模型；关于页可提交问题反馈。' },
                ];
                function maybeShowTour() {
                    if (localStorage.getItem('quant_tour_done') === '1') return;
                    setTimeout(() => { tourStep.value = 0; tourVisible.value = true; }, 800);
                }
                function skipTour() { tourVisible.value = false; localStorage.setItem('quant_tour_done', '1'); }
                function finishTour() { tourVisible.value = false; localStorage.setItem('quant_tour_done', '1'); }
                const feedbackText = ref('');
                const feedbackSubmitting = ref(false);
                async function submitFeedback() {
                    if (!feedbackText.value || !feedbackText.value.trim()) {
                        ElementPlus.ElMessage.warning('请输入反馈内容');
                        return;
                    }
                    feedbackSubmitting.value = true;
                    try {
                        const res = await fetch('/api/feedback', {
                            method: 'POST',
                            headers: { 'Content-Type': 'application/json' },
                            body: JSON.stringify({
                                content: feedbackText.value.trim(),
                                page: currentPage.value + '/' + currentSubPage.value,
                                user_agent: navigator.userAgent.slice(0, 200),
                                app_version: 'v' + (window.__appVersion || '3.2.0'),
                            }),
                        });
                        if (res.ok) {
                            feedbackText.value = '';
                            ElementPlus.ElMessage.success('反馈已提交，感谢你的支持！');
                        } else {
                            ElementPlus.ElMessage.error('提交失败，请稍后重试');
                        }
                    } catch (e) {
                        ElementPlus.ElMessage.error('提交失败，请稍后重试');
                    } finally {
                        feedbackSubmitting.value = false;
                    }
                }
                // v3.2.0-T21: 策略回测
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
                        const res = await fetch('/api/backtest/' + backtestStrategy.value, {
                            method: 'POST',
                            headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + token },
                            body: JSON.stringify(params),
                        });
                        if (!res.ok) {
                            const err = await res.json().catch(() => ({}));
                            throw new Error(err.detail || '回测失败');
                        }
                        const data = await res.json();
                        if (!data.success) throw new Error(data.message || '回测失败');
                        // 归一化 summary 字段
                        const s = data.summary || {};
                        backtestResult.value = {
                            total_return_pct: (s.total_return_pct ?? s.total_return ?? 0).toFixed(2),
                            annual_return_pct: (s.annual_return_pct ?? s.annual_return ?? 0).toFixed(2),
                            max_drawdown_pct: (s.max_drawdown_pct ?? s.max_drawdown ?? 0).toFixed(2),
                            sharpe_ratio: (s.sharpe_ratio ?? 0).toFixed(2),
                            message: data.message || '',
                        };
                        renderBacktestChart(data.equity_curve);
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
                            lineStyle: { width: 2, color: getComputedStyle(document.documentElement).getPropertyValue('--primary-color').trim() || '#667eea' },
                            areaStyle: { opacity: 0.1 },
                        }],
                    });
                }
                const currentSubPage = ref('overview');
                const currentPageName = computed(() => {
                    const menu = allMenuDefs.find(m => m.key === currentPage.value);
                    return menu ? menu.name : currentPage.value;
                });
                const showUserMenu = ref(false);
                const dashboardData = ref({});
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
                const loginForm = ref({ username: '', password: '' });
                const logining = ref(false);
                const guestLogining = ref(false);  // v1.8.0: 访客登录

                // ===== v1.5.0: 修改密码 =====
                const showChangePassword = ref(false);
                const changePasswordForm = ref({ oldPassword: '', newPassword: '', confirmPassword: '' });
                const changingPassword = ref(false);

                // ===== v2.2: 初始化向导 =====
                const showSetupWizard = ref(false);
                const setupForm = ref({ newPassword: '', aiKey: '', aiProvider: 'deepseek', aiModel: 'deepseek-chat', aiEndpoint: 'https://api.deepseek.com/v1', tushareToken: '' });
                const setupStep = ref(1);

                // ===== v3.11(11.3): AI 问股域 — 逻辑移至 js/ai-chat.js 模块 =====
                // stockDetail* 为共享状态（前置，供 ai-chat 域 deps 与后续 K线/评分/自选段引用）
                const stockDetailVisible = ref(false);
                const stockDetailTab = ref('kline');  // 'kline' | 'ai'
                const stockDetail = ref(null);
                const __aiChatDomain = (window.__quantModules && window.__quantModules['ai-chat'])
                    ? window.__quantModules['ai-chat'].create({ stockKlineLoaded, stockDetailVisible, stockDetailTab, stockDetail, disposeStockKline })
                    : {};
                const { chatSessions, chatHistoryView, selectedChatIds, expandedChatDates, expandedChatMonths, expandedChatStocks,
                        allChatSessionsFlat, chatGroupedByDate, chatGroupedByMonth, chatGroupedByStock,
                        toggleSelectChat, toggleSelectChatDate, toggleSelectChatMonth, toggleSelectChatStock,
                        toggleChatDateExpand, toggleChatMonthExpand, toggleChatStockExpand,
                        selectAllChatSessions, deleteSelectedChatSessions, viewChatSession,
                        loadChatHistory, deleteChatSession, renderMarkdown,
                        stockChatInput, stockChatMessages, stockChatLoading, stockChatError,
                        askStockSend, askStockQuick } = __aiChatDomain;
                // ===== v1.5.0: subPageNames 映射 =====
                const subPageNames = {
                    'overview': '概览', 'merrill': '美林时钟', 'market': '市场行情', 'consensus': '策略共识榜',
                    'daily': '日视图', 'weekly': '周视图', 'monthly': '月视图', 'yearly': '年视图', 'pool': '股票池',
                    'watchlist': '我的自选', 'history': '评估历史', 'chat_history': '问股历史',
                    'quant-research': '量化研究', 'strategy-write': '策略编写', 'backtest': '策略回测', 'backtest-history': '回测记录',
                    'status': '系统状态', 'autoeval': '自动评股', 'datasource': '数据源', 'feature': '功能配置', 'user': '用户与权限', 'about': '关于'
                };

                // ===== 主题 =====
                const themes = ref({});
                const currentTheme = ref('tech-blue');

                // ===== 数据 =====
                const loading = ref(false);
                const loadingView = ref('');  // 当前加载中的视图名称
                const viewCache = new Map();   // 客户端视图缓存: key="view_date" → data
                const dates = ref([]);
                const selectedDate = ref('');
                const lastLoadTime = ref('');  // 上次数据加载时间
                const consensus = ref([]);
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

                // ===== 策略筛选过滤 =====
                const strategyFilter = ref({
                    selected: JSON.parse(localStorage.getItem('quant_strategy_filter_selected') || '["\u591A\u56E0\u5B50\u7B56\u7565","\u884C\u4E1A\u8F6E\u52A8\u7B56\u7565","\u6307\u6570\u589E\u5F3A\u7B56\u7565","\u8D44\u91D1\u6D41\u7B56\u7565"]'),
                    mode: localStorage.getItem('quant_strategy_filter_mode') || 'union',
                });
                const strategyFilterOptions = ['多因子策略', '行业轮动策略', '指数增强策略', '资金流策略'];
                const strategyFilterCounts = ref({ day: [], week: [], month: [], year: [] });
                // v1.8.0: 股票分布展开/折叠
                const expandedStrategies = ref({});
                // 自动保存策略筛选配置
                watch(strategyFilter, (val) => {
                    localStorage.setItem('quant_strategy_filter_selected', JSON.stringify(val.selected));
                    localStorage.setItem('quant_strategy_filter_mode', val.mode);
                }, { deep: true });

                // ===== v3.11(11.3): 股票池域 — 逻辑移至 js/stock-pool.js 模块 =====
                const __stockPoolDomain = (window.__quantModules && window.__quantModules['stock-pool'])
                    ? window.__quantModules['stock-pool'].create({ consensus, currentPage, currentSubPage, dashboardData, searchKeyword, statusFilter, strategyFilter, strategyFilterCounts })
                    : {};
                const { applyStrategyFilter, statusCounts, stockPool, strategyDistribution, strategyPreviewCount,
                        saveStrategyFilter, filteredConsensusRank, currentPoolSize, filteredStrategyCounts,
                        poolChangeBadge, timeBarPercent, lastRefreshTime, timeSinceRefresh,
                        navigateToStrategyFilter } = __stockPoolDomain;

                // ===== 主题切换 =====
                function applyTheme(theme) {
                    currentTheme.value = theme;
                    document.documentElement.setAttribute('data-theme', theme);
                    localStorage.setItem('quant_theme', theme);
                }

                function changeTheme(theme) {
                    applyTheme(theme);
                    if (currentUser.value) {
                        const token = localStorage.getItem('quant_token');
                        fetch(`/api/users/${currentUser.value.username}`, {
                            method: 'PUT',
                            headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` },
                            body: JSON.stringify({ theme })
                        });
                        currentUser.value.theme = theme;
                        localStorage.setItem('quant_user', JSON.stringify(currentUser.value));
                    }
                }

                // ===== v2.2: 初始化向导 =====
                async function checkSetupWizard() {
                    try {
                        const res = await fetch('/api/setup/status', {
                            headers: { 'Authorization': `Bearer ${localStorage.getItem('quant_token')}` }
                        });
                        const data = await res.json();
                        if (data.needed) {
                            setupForm.value = { newPassword: '', aiKey: '', aiProvider: 'deepseek', aiModel: 'deepseek-chat', aiEndpoint: 'https://api.deepseek.com/v1', tushareToken: '' };
                            setupStep.value = 1;
                            showSetupWizard.value = true;
                        }
                    } catch (e) { console.warn('[checkSetupWizard] failed:', e); }
                }

                async function completeSetupWizard() {
                    try {
                        const body = {
                            new_password: setupForm.value.newPassword,
                            ai_key: setupForm.value.aiKey,
                            ai_provider: setupForm.value.aiProvider,
                            ai_model: setupForm.value.aiModel,
                            ai_endpoint: setupForm.value.aiEndpoint,
                            tushare_token: setupForm.value.tushareToken
                        };
                        const res = await fetch('/api/setup/complete', {
                            method: 'POST',
                            headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${localStorage.getItem('quant_token')}` },
                            body: JSON.stringify(body)
                        });
                        const data = await res.json();
                        if (data.success) {
                            showSetupWizard.value = false;
                            ElementPlus.ElMessage.success('初始化完成');
                            await loadUserConfig();
                        } else {
                            ElementPlus.ElMessage.error(data.message || '保存失败');
                        }
                    } catch (e) {
                        ElementPlus.ElMessage.error('保存失败');
                    }
                }

                async function resetSetupWizard() {
                    try {
                        const res = await fetch('/api/setup/reset', { method: 'POST' });
                        const data = await res.json();
                        if (data.success) {
                            showSetupWizard.value = true;
                        }
                    } catch (e) {
                        ElementPlus.ElMessage.error('重置失败');
                    }
                }

                // ===== 登录登出 =====
                async function handleLogin() {
                    if (!loginForm.value.username || !loginForm.value.password) {
                        ElementPlus.ElMessage.warning('请输入用户名和密码');
                        return;
                    }
                    logining.value = true;
                    try {
                        const res = await fetch('/api/login', {
                            method: 'POST',
                            headers: { 'Content-Type': 'application/json' },
                            body: JSON.stringify(loginForm.value)
                        });
                        const data = await res.json();
                        if (data.success) {
                            currentUser.value = data.user;
                            localStorage.setItem('quant_user', JSON.stringify(data.user));
                    localStorage.setItem('quant_token', data.data.access_token);
                            applyTheme(data.user.theme || 'tech-blue');
                            await loadUserConfig();
                            await loadDates();
                            await loadDashboardData();
                            await loadConsensusData();
                            ElementPlus.ElMessage.success('登录成功');
                            // v3.2.0-T22: 首次使用引导 (所有角色首次登录显示)
                            maybeShowTour();
                            // v2.2: 检查是否需要初始化向导
                            if (data.user.role === 'admin') {
                                setTimeout(checkSetupWizard, 500);
                            }
                        } else {
                            ElementPlus.ElMessage.error(data.message || '登录失败');
                        }
                    } catch (e) {
                        ElementPlus.ElMessage.error('登录失败');
                    } finally {
                        logining.value = false;
                    }
                }

                // v1.8.0: 访客登录
                async function handleGuestLogin() {
                    guestLogining.value = true;
                    try {
                        const res = await fetch('/api/login', {
                            method: 'POST',
                            headers: { 'Content-Type': 'application/json' },
                            body: JSON.stringify({ username: 'guest', password: 'guest' })
                        });
                        const data = await res.json();
                        if (data.success) {
                            currentUser.value = data.user;
                            localStorage.setItem('quant_user', JSON.stringify(data.user));
                            localStorage.setItem('quant_token', data.data.access_token);
                            applyTheme(data.user.theme || 'tech-blue');
                            await loadUserConfig();
                            await loadDates();
                            await loadDashboardData();
                            await loadConsensusData();
                            ElementPlus.ElMessage.success('访客登录成功');
                        } else {
                            ElementPlus.ElMessage.error(data.message || '登录失败');
                        }
                    } catch (e) {
                        ElementPlus.ElMessage.error('登录失败');
                    } finally {
                        guestLogining.value = false;
                    }
                }

                function handleLogout() {
                    ElementPlus.ElMessageBox.confirm('确定要退出登录吗？', '确认退出', {
                        confirmButtonText: '退出',
                        cancelButtonText: '取消',
                        type: 'warning'
                    }).then(() => {
                        currentUser.value = null;
                        localStorage.removeItem('quant_user');
                    }).catch(() => {});
                }

                // ===== v1.5.0: 修改密码 =====
                async function doChangePassword() {
                    if (!changePasswordForm.value.oldPassword) {
                        ElementPlus.ElMessage.warning('请输入当前密码');
                        return;
                    }
                    if (!changePasswordForm.value.newPassword || changePasswordForm.value.newPassword.length < 6) {
                        ElementPlus.ElMessage.warning('新密码至少6位');
                        return;
                    }
                    if (changePasswordForm.value.newPassword !== changePasswordForm.value.confirmPassword) {
                        ElementPlus.ElMessage.warning('两次输入的新密码不一致');
                        return;
                    }
                    changingPassword.value = true;
                    try {
                        const token = localStorage.getItem('quant_token');
                        const res = await fetch('/api/auth/change-password', {
                            method: 'POST',
                            headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` },
                            body: JSON.stringify({
                                old_password: changePasswordForm.value.oldPassword,
                                new_password: changePasswordForm.value.newPassword
                            })
                        });
                        const data = await res.json();
                        if (res.ok) {
                            ElementPlus.ElMessage.success('密码修改成功，请重新登录');
                            showChangePassword.value = false;
                            changePasswordForm.value = { oldPassword: '', newPassword: '', confirmPassword: '' };
                            handleLogout();
                        } else {
                            ElementPlus.ElMessage.error(data.detail || '修改失败');
                        }
                    } catch (e) {
                        ElementPlus.ElMessage.error('修改失败，请检查网络连接');
                    } finally {
                        changingPassword.value = false;
                    }
                }

                // ===== 视图切换 =====
                const viewUnit = computed(() => {
                    const map = { day: '天', week: '周', month: '月', year: '年' };
                    return map[currentView.value] || '天';
                });

                const datePickerType = computed(() => {
                    const map = { day: 'date', week: 'week', month: 'month', year: 'year' };
                    return map[currentView.value] || 'date';
                });

                const dateFormat = computed(() => {
                    const map = { day: 'YYYY-MM-DD', week: 'YYYY 第w周', month: 'YYYY-MM', year: 'YYYY' };
                    return map[currentView.value] || 'YYYY-MM-DD';
                });

                const canNavPrev = computed(() => {
                    if (!selectedDate.value || !dates.value || dates.value.length === 0) return false;
                    return selectedDate.value > dates.value[0];
                });

                const canNavNext = computed(() => {
                    if (!selectedDate.value || !dates.value || dates.value.length === 0) return false;
                    return selectedDate.value < dates.value[dates.value.length - 1];
                });

                function switchView(view) {
                    hapticFeedback('light');
                    currentView.value = view;
                    // 确保日期为同期首个交易日（而非 -01/-01-01 硬编码）
                    let currentDate = selectedDate.value || dates.value[dates.value.length - 1];
                    if (view === 'year') {
                        const yearPrefix = currentDate.substring(0, 4);
                        const firstDate = dates.value.find(d => d.startsWith(yearPrefix));
                        selectedDate.value = firstDate || currentDate;
                    } else if (view === 'month') {
                        const monthPrefix = currentDate.substring(0, 7);
                        const firstDate = dates.value.find(d => d.startsWith(monthPrefix));
                        selectedDate.value = firstDate || currentDate;
                    }
                    setTimeout(loadConsensusData, 50);
                }

                function navigateDate(direction) {
                    hapticFeedback('light');
                    const current = selectedDate.value;
                    const allDates = dates.value;
                    const idx = allDates.indexOf(current);
                    
                    if (idx < 0) return;
                    
                    // 统一按交易日步长移动
                    let step = 1;  // 日视图
                    if (currentView.value === 'week') step = 5;   // 一周约5个交易日
                    if (currentView.value === 'month') step = 22; // 一月约22个交易日
                    if (currentView.value === 'year') step = 250; // 一年约250个交易日
                    
                    const newIdx = idx + direction * step;
                    if (newIdx >= 0 && newIdx < allDates.length) {
                        const newDate = allDates[newIdx];
                        // 月/年视图需要对齐到同月/年首个交易日（而非 -01/-01-01 硬编码）
                        if (currentView.value === 'month') {
                            const monthPrefix = newDate.substring(0, 7);
                            const firstDate = allDates.find(d => d.startsWith(monthPrefix));
                            selectedDate.value = firstDate || newDate;
                        } else if (currentView.value === 'year') {
                            const yearPrefix = newDate.substring(0, 4);
                            const firstDate = allDates.find(d => d.startsWith(yearPrefix));
                            selectedDate.value = firstDate || newDate;
                        } else {
                            selectedDate.value = newDate;
                        }
                        loadConsensusData();
                    }
                }

                function disabledDate(time) {
                    // 禁用非交易日
                    if (!dates.value || dates.value.length === 0) return false;
                    const year = time.getFullYear();
                    const month = String(time.getMonth() + 1).padStart(2, '0');
                    const day = String(time.getDate()).padStart(2, '0');
                    const dateStr = `${year}-${month}-${day}`;
                    return !dates.value.includes(dateStr);
                }

                function onDateChange(val) {
                    // 周/月/年选择器可能返回特殊格式，确保是YYYY-MM-DD
                    if (val && val.length > 10) {
                        // 周选择器可能返回额外信息
                        selectedDate.value = val.substring(0, 10);
                    }
                    loadConsensusData();
                }

                // ===== v3.11 (FR-3.11.4): 数据缓存与静默刷新 =====
                // 请求级 TTL 缓存（同参数短 TTL）+ 后台静默刷新 + 变更提示
                const __core11 = window.__quantModules.core || {};
                const qcCache = (typeof __core11.createTtlCache === 'function') ? __core11.createTtlCache(15000) : null;
                let _lastDataToast = 0;
                function notifyDataChanged() {
                    const now = Date.now();
                    if (now - _lastDataToast < 5000) return;   // 5s 内去重，避免重复进入/多页刷屏
                    _lastDataToast = now;
                    ElementPlus.ElMessage.success('有新数据，已更新');
                }
                // 后台静默刷新：命中缓存后仍悄悄拉取最新，数据有变才提示
                function backgroundRefresh(url, cacheKey, extract, apply) {
                    if (!qcCache || !cacheKey || typeof __core11.silentRefresh !== 'function') return;
                    __core11.silentRefresh({
                        cache: qcCache,
                        key: cacheKey,
                        fetchFn: async () => {
                            const res = await fetch(url);
                            if (!res.ok) throw new Error('HTTP ' + res.status);
                            const data = await res.json();
                            return extract ? extract(data) : data;
                        },
                        ttl: qcCache.defaultTtl,
                        apply,
                        onChanged: notifyDataChanged,
                        onError: () => {},
                    });
                }
                // 同一请求在途去重：首次进入日历 page/sub 双触发时只拉取一次
                const _consensusInflight = new Set();

                // ===== 数据加载 =====
                async function loadDates() {
                    try {
                        const res = await fetch('/api/dates');
                        const data = await res.json();
                        dates.value = data.data?.dates || data.dates || [];
                        if (dates.value.length > 0) {
                            selectedDate.value = dates.value[dates.value.length - 1];
                        }
                        lastLoadTime.value = new Date().toLocaleTimeString();
                    } catch (e) { console.error(e); }
                }

                async function refreshCalendarData() {
                    // 触发后端数据刷新，然后重新加载日历数据
                    try {
                        await fetch('/api/data-refresh/reload', { method: 'POST' });
                        lastLoadTime.value = '刷新中...';
                        viewCache.clear();
                        await loadDates();
                        await loadConsensusData();
                        lastLoadTime.value = new Date().toLocaleTimeString();
                    } catch(e) {
                        console.error('数据刷新失败', e);
                    }
                }

                function exportCSV() {
                    if (!selectedDate.value) return;
                    const view = currentView.value || 'day';
                    const url = '/api/view/' + view + '/' + selectedDate.value + '?status=' + (statusFilter.value || 'all') + '&format=csv';
                    window.open(url, '_blank');
                }

                async function loadConsensusData() {
                    if (!selectedDate.value) return;
                    const cacheKey = `${currentView.value}_${selectedDate.value}`;
                    // v3.11 (11.6): 同一 key 请求在途时跳过重复拉取（首次进入 page/sub 双触发去重）
                    if (_consensusInflight.has(cacheKey)) return;
                    _consensusInflight.add(cacheKey);
                    const viewUrl = `/api/view/${currentView.value}/${selectedDate.value}?status=all`;
                    // v3.11 (11.6): 请求级缓存键（method|url|params，与传参顺序无关）
                    const reqKey = (qcCache && typeof __core11.makeCacheKey === 'function')
                        ? __core11.makeCacheKey('GET', `/api/view/${currentView.value}/${selectedDate.value}`, { status: 'all' })
                        : null;
                    const applyStocks = (stocks) => {
                        consensus.value = stocks;
                        viewCache.set(cacheKey, stocks);
                    };
                    // 客户端缓存命中 → 直接渲染不闪烁，再后台静默刷新（有变才提示）
                    if (viewCache.has(cacheKey)) {
                        applyStocks(viewCache.get(cacheKey));
                        backgroundRefresh(viewUrl, reqKey, (d) => d.stocks || [], applyStocks);
                        _consensusInflight.delete(cacheKey);
                        return;
                    }
                    // v3.11 (11.6): 命中请求级 TTL 缓存 → 不闪烁 + 后台刷新
                    const cached = (reqKey && qcCache) ? qcCache.get(reqKey) : undefined;
                    if (cached !== undefined) {
                        applyStocks(cached);
                        backgroundRefresh(viewUrl, reqKey, (d) => d.stocks || [], applyStocks);
                        _consensusInflight.delete(cacheKey);
                        return;
                    }
                    loading.value = true;
                    loadingView.value = {day:'日', week:'周', month:'月', year:'年'}[currentView.value] || currentView.value;
                    try {
                        // 调用多视图 API（始终获取全量数据，前端做状态过滤+计数）
                        const res = await fetch(viewUrl);
                        const data = await res.json();
                        const stocks = data.stocks || [];
                        applyStocks(stocks);
                        if (qcCache && reqKey) qcCache.set(reqKey, stocks);  // 写入请求级 TTL 缓存
                    } catch (e) {
                        // 降级到旧API
                        try {
                            const res = await fetch(`/api/calendar/${selectedDate.value}/consensus`);
                            const data = await res.json();
                            consensus.value = (data.consensus || []).map(item => ({
                                ...item,
                                code: item.stock,
                                status: 'current'
                            }));
                        } catch (e2) {
                            ElementPlus.ElMessage.error('数据加载失败');
                        }
                    } finally {
                        loading.value = false;
                    }
                    // v3.7.11: 异步加载入池出池信号
                    fetchPoolSignals();
                    _consensusInflight.delete(cacheKey);
                }

                // v3.11 (11.6): 总览页缓存 + 静默刷新（包装 system 域 loadDashboardData）
                // 重复进入"策略总览"命中缓存不闪烁；后台拉到新数据自动更新并提示
                async function loadDashboardCached() {
                    const reqKey = (qcCache && typeof __core11.makeCacheKey === 'function')
                        ? __core11.makeCacheKey('GET', '/api/dashboard', null)
                        : '/api/dashboard';
                    if (qcCache) {
                        const hit = qcCache.get(reqKey);
                        if (hit !== undefined) {
                            dashboardData.value = hit;
                            backgroundRefresh('/api/dashboard', reqKey, (d) => d.data || d, (data) => {
                                dashboardData.value = data;
                                lastRefreshTime.value = Date.now();
                            });
                            return;
                        }
                    }
                    await loadDashboardData();
                    if (qcCache) qcCache.set(reqKey, dashboardData.value);
                }

                async function showStockDetail(stockCode) {
                    try {
                        const res = await fetch(`/api/calendar/stock/${stockCode}?date=${selectedDate.value}`);
                        stockDetail.value = await res.json();
                        aiResult.value = null;
                        currentKlinePeriod.value = 'daily';
                        stockKlineLoaded.value = false;
                        stockDetailTab.value = 'kline';
                        // 先销毁旧图表
                        if (stockKlineChart) {
                            stockKlineChart.dispose();
                            stockKlineChart = null;
                        }
                        stockDetailVisible.value = true;
                        nextTick(() => animateScoreEntrance());
                        // 弹窗打开后加载K线
                        setTimeout(async () => {
                            await loadStockKline('daily');
                            refreshStockScore();
                        }, 500);
                        loadLastEvaluation(stockCode);
                    } catch (e) {
                        ElementPlus.ElMessage.error('加载失败');
                    }
                }

                // ===== v3.11(11.3): AI 评估域 — 逻辑移至 js/ai.js 模块 =====
                const __aiDomain = (window.__quantModules && window.__quantModules.ai)
                    ? window.__quantModules.ai.create({ configChanged, consensus })
                    : {};
                const { aiResult, lastEvalTime, evalHistoryComparison, checklistItems,
                        aiHistory, selectedHistoryIds, expandedDates, expandedMonths, expandedStocks,
                        poolSignals, toggleMonthExpand, aiHistoryView, selectedWatchlistCodes,
                        showAutoEvaluateSettings, savingConfig, autoEvaluateScope,
                        aiModels, aiModelsError, testingAllModels, savingAiModels,
                        loadAiModels, onModelToggle, testModel, testAllModels, saveAiModels,
                        addModel, deleteModel, autoEvaluateConfig,
                        // v3.11: AI 评估配置（原 app-logic 前段并入本域）
                        aiLoading, aiEvalStage, showBatchEvaluate, batchStocks, batchRunning,
                        batchTotal, batchCompleted, batchCurrent, batchStatuses, batchResults,
                        aiConfig, selectedPreset, providerInfo, aiPresets,
                        applyPreset, onProviderChange,
                        // v3.11: 数据加载域（原 app-logic 数据加载段并入）
                        fetchPoolSignals, loadLastEvaluation } = __aiDomain;
                // ===== v3.11(11.3): 自选/评估历史域 — 逻辑移至 js/watchlist.js 模块 =====
                const __watchlistDomain = (window.__quantModules && window.__quantModules.watchlist)
                    ? window.__quantModules.watchlist.create({ currentUser, selectedDate, stockDetail, stockDetailTab, stockDetailVisible, stockKlineLoaded, viewCache, animateScoreEntrance, loadStockKline, refreshStockScore, aiHistory, aiLoading, aiEvalStage, autoEvaluateConfig, autoEvaluateScope, batchStocks, batchRunning, batchTotal, batchCompleted, batchCurrent, batchStatuses, batchResults, expandedDates, expandedStocks, savingConfig, selectedHistoryIds, selectedWatchlistCodes, showAutoEvaluateSettings, showBatchEvaluate })
                    : {};
                const { quickEvalStock, evalStrategy, watchlistSort, watchlist, watchlistCodes, sortedWatchlist,
                        getWatchlistScore, getLatestScore, addSearchResult, evaluatedCodes, klineLoadedCodes,
                        markKlineLoaded, watchlistSearch, watchlistResults, watchlistSearching,
                        dataRefreshConfig, dataRefreshReloading, dataRefreshSaving,
                        doAiEvaluate, loadAiHistory, deleteSingleHistory, toggleSelectHistory, clearSelection,
                        clearWatchlistSelection, batchReevaluateHistory, batchAddToWatchlist, batchRemoveWatchlist,
                        toggleSelectWatchlist, selectAllHistory, selectAllWatchlist, deleteSelectedHistory,
                        loadAutoEvaluateConfig, saveAutoEvaluateConfig, loadWatchlist, addToWatchlist,
                        removeFromWatchlist, clearWatchlist, toggleWatchlist, showStockKline, preloadingKline,
                        preloadWatchlistKline, watchlistEvaluate, batchEvaluateWatchlist, batchEvaluateSelected,
                        searchStockForWatchlist, loadDataRefreshConfig, saveDataRefreshConfig, triggerDataReload,
                        groupedByDate, aiHistoryByStock, groupedByMonth, aiHistoryStockCount, scoreDistribution,
                        quickEvaluate, toggleDateExpand, toggleSelectDate, toggleSelectMonth, toggleStockExpand,
                        toggleSelectStock, registerTrendChart, viewAiResult, doBatchEvaluate } = __watchlistDomain;
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
                        syncStockData, loadTushareConfig, loadDatasourceConfig, saveDatasourceConfig, testDatasource,
                        loadFeishuConfig, loadAiConfig, loadUserConfig, loadSystemStatus, loadDashboardData } = __systemDomain;

                // ===== 监听变化 =====
                watch([currentView, statusFilter], (newVal, oldVal) => {
                    if (newVal[0] !== oldVal[0]) {
                        loadConsensusData();
                    }
                });

                // 监听页面切换
                watch(currentPage, async (page) => {
                    hapticFeedback('light');
                    // v1.10
                    localStorage.setItem('quant_last_page', page);
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
                    }
                });

                // ===== 初始化 =====
                onMounted(async () => {
                    // v3.2.0-T11: 注册全局快捷键
                    window.addEventListener('keydown', handleGlobalKeydown);
                    // v1.8: 并行加载优化

                    // 超时保护的 Promise 包装器（防阻塞渲染）
                    const withTimeout = (promise, ms = 3000, label = '') => {
                        const timer = new Promise((_, reject) =>
                            setTimeout(() => reject(new Error('timeout')), ms));
                        return Promise.race([promise, timer]).catch(e => {
                            console.warn(`[init] ${label || 'task'} failed:`, e.message);
                        });
                    };

                    // 恢复本地主题
                    const savedTheme = localStorage.getItem('quant_theme');
                    if (savedTheme) applyTheme(savedTheme);

                    // v1.10: 恢复用户最后选择
                    (function() {
                        var p = localStorage.getItem('quant_last_page');
                        if (p && menus.value.some(function(m) { return m.key === p; })) currentPage.value = p;
                        var s = localStorage.getItem('quant_last_subpage');
                        if (s) currentSubPage.value = s;
                        var d = localStorage.getItem('quant_last_date');
                        if (d) selectedDate.value = d;
                        var v = localStorage.getItem('quant_last_view');
                        if (v) currentView.value = v;
                    })();

                    // v1.12: 加载服务版本号
                    fetch('/api/health').then(r => r.json()).then(d => {
                        if (d.version) appVersion.value = d.version;
                    }).catch(() => {});

                    // ===== 第1波: 不依赖用户身份的并行加载 =====
                    const p1 = Promise.all([
                        withTimeout(
                            fetch('/api/themes').then(r => r.json()).then(d => { themes.value = d.themes || []; }),
                            2000, 'themes'
                        ),
                        withTimeout(fetchMarketData(), 3000, 'marketData'),
                        withTimeout(fetchMerrillStages(), 2000, 'merrillStages'),
                    ]).then(() => {
                        // 阶段配置加载完成后，再加载时钟数据
                        withTimeout(fetchMerrillClock(), 3000, 'merrillClock');
                    });
                    loadAiConfig();
                    loadAiModels();

                    // ===== 第2波: 恢复登录（需要第1波完成后的主题） =====
                    await p1;
                    const savedUser = localStorage.getItem('quant_user');
                    const savedToken = localStorage.getItem('quant_token');
                    if (savedUser && savedToken) {
                        // 验证 token 是否仍然有效
                        let tokenValid = false;
                        try {
                            const verifyRes = await fetch('/api/users/me', {
                                headers: { 'Authorization': `Bearer ${savedToken}` }
                            });
                            tokenValid = verifyRes.ok;
                        } catch (e) {
                            tokenValid = false;
                        }
                        if (!tokenValid) {
                            // token 已过期，清除登录状态
                            console.warn('[init] token expired, clearing session');
                            localStorage.removeItem('quant_user');
                            localStorage.removeItem('quant_token');
                        } else {
                            try {
                                currentUser.value = JSON.parse(savedUser);
                                // 优先用 localStorage 主题（用户主动选择的），其次用后端记录，最后默认
                                applyTheme(savedTheme || currentUser.value.theme || 'tech-blue');
                                await withTimeout(loadUserConfig(), 2000, 'userConfig');
                                // auto_evaluate_config 必须在 loadUserConfig 之后加载
                                // 否则会被 BASE_CONFIG_DEFAULTS 的 enabled:false 覆盖
                                loadAutoEvaluateConfig().catch(() => {});
                                // v1.9.2: 加载用户组菜单配置
                                loadGroupConfig().catch(() => {});
                                await withTimeout(loadDates(), 2000, 'dates');
                                if (currentPage.value === 'strategies') {
                                    await withTimeout(loadDashboardCached(), 2000, 'dashboard');
                                } else {
                                    await withTimeout(loadConsensusData(), 2000, 'consensus');
                                }
                                await withTimeout(loadUsers(), 2000, 'users');
                                loadAllGroups().catch(() => {});
                                await withTimeout(loadAiHistory(), 2000, 'aiHistory');
                            } catch (e) {
                                console.warn('[init] user data load failed:', e.message);
                            }
                        }
                    }
                    console.log('[DEBUG] onMounted complete');
                });
                
                // v1.11: 策略总览定时刷新（每5分钟）
                let strategyPollTimer;
                
                // v3.0: 美林时钟自动刷新（由 merrill.js 模块管理）
                startAutoRefresh();
                
                onUnmounted(() => {
                    if (strategyPollTimer) clearInterval(strategyPollTimer);
                    window.removeEventListener('keydown', handleGlobalKeydown);
                });

                // 监听设置页
                watch(currentPage, async (val) => {
                    if (val === 'system' && currentUser.value?.role === 'admin') {
                        await loadUsers();
                        await loadFeishuConfig();
                        await loadTushareConfig();
                        await loadSystemStatus();
                        await loadAiConfig();
                        await loadRateLimit();
                        // 进入配置页时检测 Tushare 连接，并启动定时检测
                        checkTushareConnection();
                        if (!window._tushareCheckTimer) {
                            window._tushareCheckTimer = setInterval(checkTushareConnection, 3600000);
                        }
                    }
                });

                // ===== v1.5.0: 子页面切换同步 =====
                watch([currentPage, currentSubPage], ([page, sub]) => {
                    // 保存当前子页
                    if (sub) localStorage.setItem('quant_last_subpage', sub);
                    // 自动设置子页默认值（首次进入时 sub 可能为空）
                    if (!sub && menus.value.find(m => m.key === page)) {
                        const menu = menus.value.find(m => m.key === page);
                        if (menu && menu.subPages.length > 0) {
                            currentSubPage.value = menu.subPages[0];
                        }
                    }
                    // 日历页：同步 currentSubPage → currentView
                    if (page === 'calendar' && ['daily','weekly','monthly','yearly'].includes(sub)) {
                        const viewMap = { daily: 'day', weekly: 'week', monthly: 'month', yearly: 'year' };
                        if (viewMap[sub] && currentView.value !== viewMap[sub]) {
                            currentView.value = viewMap[sub];
                            if (dates.value.length > 0) {
                                selectedDate.value = dates.value[dates.value.length - 1] || '';
                            }
                            setTimeout(loadConsensusData, 50);
                        }
                    }
                    // 日历页 pool：确保共识数据已加载
                    if (page === 'calendar' && sub === 'pool') {
                        if (!consensus.value || consensus.value.length === 0) {
                            if (dates.value.length > 0 && !selectedDate.value) {
                                selectedDate.value = dates.value[dates.value.length - 1] || '';
                            }
                            setTimeout(loadConsensusData, 50);
                        }
                    }
                    // 策略总览子页切换
                    if (page === 'strategies') {
                        if (sub === 'merrill') fetchMerrillClock();
                        if (sub === 'market') fetchMarketData();
                        if (sub === 'consensus') {
                            if (!consensus.value || consensus.value.length === 0) {
                                setTimeout(loadConsensusData, 50);
                            }
                        }
                    }
                    // AI 子页切换
                    if (page === 'ai') {
                        if (sub === 'watchlist') { loadWatchlist(); loadAiHistory(); setTimeout(preloadWatchlistKline, 500); }
                        if (sub === 'history') loadAiHistory();
                        if (sub === 'overview') { loadAiHistory(); loadWatchlist(); }
                        if (sub === 'chat_history') loadChatHistory();
                    }
                    // 系统配子页切换
                    if (page === 'system' && currentUser.value?.role === 'admin') {
                        if (sub === 'status') { loadSystemStatus(); checkTushareConnection(); loadSysMonitor(); loadAnalytics(); }
                        if (sub === 'autoeval') loadAutoEvaluateConfig();
                        if (sub === 'datasource') loadDatasourceConfig();
                        if (sub === 'feature') { loadFeishuConfig(); loadAiConfig(); loadRateLimit(); loadDataRefreshConfig(); loadBackups(); }
                        if (sub === 'user') { loadAllGroups(); loadUsers(); }
                    }
                });

                // K线标签切换时自动加载
                watch(stockDetailTab, (tab, oldTab) => {
                    if (tab === 'kline' && oldTab && oldTab !== 'kline' && stockDetailVisible.value) {
                        stockKlineLoaded.value = false;
                        setTimeout(() => loadStockKline('daily'), 50);
                    }
                });

                // 美林时钟弹窗关闭时恢复背景滚动
                watch(showMerrillDetail, (val) => {
                    if (!val) {
                        document.documentElement.style.overflow = '';
                        document.body.style.overflow = '';
                    }
                });

                // v3.8.1: 通用数值格式化 (弹窗展示用, 最多保留 digits 位小数, null/NaN 回退 '--')
                function fmtNum(v, digits = 2) {
                    if (v == null || v === '' || isNaN(Number(v))) return '--';
                    return Number(v).toFixed(digits);
                }

                // v3.6.0: 整个 setup 状态对象提升为 qcState, provide 给所有子组件 (T4+: System/Strategies/Calendar/AI 共用)
                const qcState = {
                    currentPage, currentSubPage, sidebarCollapsed, menus,
                    fmtNum,
                    currentUser, iconSystem, allMenuDefs,
                    currentPageName, subPageNames, searchQuery, searchStocks, onSearchSelect,
                    selectedDate, onDateChange, disabledDate, refreshCalendarData, exportCSV,
                    loading, lastLoadTime, resetSetupWizard, showChangePassword,
                    themes, currentTheme, changeTheme, handleLogout,

                    marketData, merrillData, feishuConfig, feishuTestStatus, feishuTestMessage,
                    shortcutHelpVisible, shortcutHelpItems, commandPaletteVisible,
                    tourVisible, tourStep, tourSteps, skipTour, finishTour,
                    backups, backupCreating, loadBackups, createBackup, restoreBackup,
                    sysMonitor, analyticsRank, analyticsDays, loadSysMonitor, loadAnalytics,
                    strategyRecommendations, aiUsage, loadStrategyRecommendations, loadAiUsage,
                    aiFabHidden, openAiFab,
                    feedbackText, feedbackSubmitting, submitFeedback,
                    backtestStrategies, backtestStrategy, backtestRange, backtestCapital,
                    backtestRunning, backtestResult, runBacktest,
                    fetchMarketData, fetchMerrillClock, testFeishuWebhook, saveFeishuConfig,
                    // v2.0: 美林时钟配置
                    merrillClockConfig, merrillClockLastUpdated, merrillReevalResult, merrillReevalLoading,
                    saveMerrillClockConfig, doMerrillReevaluate,
                    // v1.8.0: 数据刷新配置
                    dataRefreshConfig, dataRefreshReloading, dataRefreshSaving,
                    loadDataRefreshConfig, saveDataRefreshConfig, triggerDataReload,
                    indexDetailVisible, indexDetail, indexAiResult, indexAiLoading, loadCachedIndexEval,
                    showIndexDetail, doIndexAiEvaluate,
                    klinePeriods, currentKlinePeriod, klineLoading, indexKlineLoading, stockKlineLoaded, indexKlineLoaded,
                    loadStockKline, switchKlinePeriod, loadIndexKline, switchIndexKlinePeriod,
                    zoomKlineRange,
                    // v1.9.2: 评分动画
                    scoreAnimating, scoreDelta, scorePulse, refreshStockScore, animateScoreEntrance,
                    stockKlineChart, indexKlineChart,
                    showMerrillDetail, merrillDetailData, showStageDetail, getCharLabel, getAssetName, getRankColor,
                    timelineStages, getStageAngle, getCycleProgress, getCurrentStageMonths, getStageTotalMonths, isStageCompleted,
                    stages, indicatorList, dimensionScoreList, confidenceColor,
                    menus, currentPage,
                    views, currentView, statusFilter,
                    currentUser, loginForm, logining, guestLogining,
                    themes, currentTheme,
                    dashboardData,
                    // v1.10
                    searchQuery, searchStocks, onSearchSelect,
                    loading, loadingView, dates, selectedDate, lastLoadTime, consensus, searchKeyword,
                    stockDetailVisible, stockDetailTab, stockDetail,
                    aiLoading, aiEvalStage, showBatchEvaluate, batchStocks, batchRunning, batchTotal, batchCompleted, batchCurrent, batchStatuses, batchResults, aiConfig,
                    userList, showAddUser, editingUser, userForm, savingUser,
                    userSearch, filteredUsers, groupFilter, userPageTab, expandedGroups, addMemberGroupMap,
                    toggleGroupExpand, removeMemberFromGroupInline, addMemberToGroupInline, changeUserGroup,
                    statusCounts, stockPool, poolSignals, aiResult, aiHistory, groupedByDate, groupedByMonth, expandedDates,
                    expandedMonths, aiHistoryByStock, aiHistoryStockCount, expandedStocks, aiHistoryView,
                    scoreDistribution, quickEvalStock, evalStrategy, checklistItems, evalHistoryComparison, quickEvaluate,
                    selectedHistoryIds, showAutoEvaluateSettings, savingConfig, autoEvaluateConfig, autoEvaluateScope, strategyList,
                    toggleDateExpand, toggleMonthExpand, toggleSelectDate, toggleSelectMonth, toggleSelectStock, toggleStockExpand, registerTrendChart,
                    selectedWatchlistCodes, clearWatchlistSelection, toggleSelectWatchlist,
                    selectAllHistory, selectAllWatchlist,
                    batchRemoveWatchlist, batchEvaluateSelected, batchReevaluateHistory, batchAddToWatchlist,
                    viewUnit, datePickerType, dateFormat, canNavPrev, canNavNext,
                    handleLogin, handleGuestLogin, handleLogout, changeTheme, switchView, onDateChange, navigateDate, disabledDate, navigateTo,
                    loadDashboardData, loadConsensusData, refreshCalendarData, exportCSV, showStockDetail,
                    doAiEvaluate, doBatchEvaluate, loadAiHistory, loadLastEvaluation, lastEvalTime, viewAiResult, saveAiConfig, testAiApi, exportConfig, importConfig, configSaving, configChanged,
                    // v1.8.0: 自选股
                    watchlist, watchlistCodes, watchlistSearch, watchlistResults, watchlistSearching,
                    watchlistSort, sortedWatchlist, getWatchlistScore, addSearchResult,
                    evaluatedCodes, klineLoadedCodes, markKlineLoaded,
                    loadWatchlist, addToWatchlist, removeFromWatchlist, clearWatchlist,
                    searchStockForWatchlist, toggleWatchlist, batchEvaluateWatchlist, watchlistEvaluate, showStockKline,
                    preloadWatchlistKline, preloadingKline,
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
                    // AI 模型管理
                    aiModels, aiModelsError, testingAllModels, savingAiModels,
                    loadAiModels, onModelToggle, testModel, testAllModels, saveAiModels, addModel, deleteModel,
                    checkTushareConnection,
                    // v1.8.0: 多数据源
                    datasourceConfig, datasourceStatus,
                    loadDatasourceConfig, saveDatasourceConfig, testDatasource,
                    strategyFilter, strategyFilterOptions, strategyFilterCounts, strategyPreviewCount, saveStrategyFilter,
                    filteredConsensusRank, currentPoolSize, filteredStrategyCounts, strategyDistribution,
                    expandedStrategies,
                    // v1.11: 策略总览增强
                    poolChangeBadge, timeBarPercent, timeSinceRefresh, navigateToStrategyFilter,
                    // v1.5.0
                    currentSubPage, currentPageName, showUserMenu, subPageNames,
                    // v1.9.2: 图标系统
                    iconSystem, switchIconSystem, ICON_MAPS,
                    // v3.0: 侧边栏折叠
                    sidebarCollapsed, toggleSidebar,
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
                    subPageCache, onParentToggle, allMenuDefs,
                    openMenuConfig, saveMenuConfig, deleteGroupConfig, createGroup,
                    showChangePassword, changePasswordForm, changingPassword, doChangePassword,
                    // v2.2: 初始化向导
                    showSetupWizard, setupForm, setupStep, checkSetupWizard, completeSetupWizard, resetSetupWizard,
                    // v2.4: AI 问股
                    chatSessions, chatHistoryView, selectedChatIds,
                    expandedChatDates, expandedChatMonths, expandedChatStocks,
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
