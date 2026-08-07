// quant-calendar: App 逻辑层 (v3.6.0-T8 / FR-3.6.2)
// 原 index.html 主 script setup() body 提取至此, 通过 window.createAppLogic() 调用
(function () {
  window.createAppLogic = function () {
    const { ref, computed, onMounted, onUnmounted, watch, nextTick } = Vue;
                console.log('[DEBUG] setup() started');
                // ===== 导航菜单 =====
                                // ===== 市场行情数据 =====
                const marketData = ref({ indices: [], market_sentiment: null });
                // ===== v1.10: 全局搜索 =====
                const searchQuery = ref('');
                async function searchStocks(queryString, cb) {
                    if (!queryString || queryString.trim().length < 1) { cb([]); return; }
                    try {
                        const res = await fetch('/api/search?q=' + encodeURIComponent(queryString));
                        const data = await res.json();
                        if (data.success && data.results) {
                            const results = data.results.map(function(r) { return { value: r.code + ' ' + r.name, code: r.code, name: r.name }; });
                            cb(results);
                        } else { cb([]); }
                    } catch(e) { console.warn('[searchStocks] fetch failed:', e); cb([]); }
                }
                function onSearchSelect(item) {
                    searchQuery.value = '';
                    if (typeof showStockDetail === 'function') {
                        showStockDetail(item.code, item.name);
                    }
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

                // ===== v2.4: AI 问股 =====
                const chatSessions = ref([]);
                const chatHistoryView = ref('date');
                const selectedChatIds = ref([]);
                const expandedChatDates = ref([]);
                const expandedChatMonths = ref([]);
                const expandedChatStocks = ref([]);

                const allChatSessionsFlat = computed(() => {
                    const flat = [];
                    for (const s of chatSessions.value) {
                        if (s.messages) {
                            flat.push({
                                id: s.id,
                                stock_code: s.stock_code,
                                stock_name: s.stock_name,
                                first_msg: s.messages[0]?.content?.substring(0, 50) || '',
                                msg_count: s.messages.length,
                                created_at: s.created_at,
                                date: (s.created_at || '').substring(0, 10),
                                month: (s.created_at || '').substring(0, 7),
                                messages: s.messages,
                            });
                        }
                    }
                    return flat;
                });

                const chatGroupedByDate = computed(() => {
                    const g = {};
                    for (const s of allChatSessionsFlat.value) {
                        const d = s.date || '未知';
                        if (!g[d]) g[d] = [];
                        g[d].push(s);
                    }
                    // Sort by date desc
                    const sorted = {};
                    Object.keys(g).sort((a,b) => b.localeCompare(a)).forEach(k => sorted[k] = g[k]);
                    return sorted;
                });

                const chatGroupedByMonth = computed(() => {
                    const g = {};
                    for (const s of allChatSessionsFlat.value) {
                        const m = s.month || '未知';
                        if (!g[m]) g[m] = [];
                        g[m].push(s);
                    }
                    const sorted = {};
                    Object.keys(g).sort((a,b) => b.localeCompare(a)).forEach(k => sorted[k] = g[k]);
                    return sorted;
                });

                const chatGroupedByStock = computed(() => {
                    const g = {};
                    for (const s of allChatSessionsFlat.value) {
                        const k = `${s.stock_name}(${s.stock_code})`;
                        if (!g[k]) g[k] = [];
                        g[k].push(s);
                    }
                    return g;
                });

                function toggleSelectChat(id) {
                    const idx = selectedChatIds.value.indexOf(id);
                    if (idx >= 0) selectedChatIds.value.splice(idx, 1);
                    else selectedChatIds.value.push(id);
                }
                function toggleSelectChatDate(date) {
                    const sessions = chatGroupedByDate.value[date] || [];
                    const allSelected = sessions.every(s => selectedChatIds.value.includes(s.id));
                    if (allSelected) {
                        selectedChatIds.value = selectedChatIds.value.filter(id => !sessions.some(s => s.id === id));
                    } else {
                        for (const s of sessions) {
                            if (!selectedChatIds.value.includes(s.id)) selectedChatIds.value.push(s.id);
                        }
                    }
                }
                function toggleSelectChatMonth(month) {
                    const sessions = chatGroupedByMonth.value[month] || [];
                    const allSelected = sessions.every(s => selectedChatIds.value.includes(s.id));
                    if (allSelected) {
                        selectedChatIds.value = selectedChatIds.value.filter(id => !sessions.some(s => s.id === id));
                    } else {
                        for (const s of sessions) {
                            if (!selectedChatIds.value.includes(s.id)) selectedChatIds.value.push(s.id);
                        }
                    }
                }
                function toggleSelectChatStock(code) {
                    const sessions = chatGroupedByStock.value[code] || [];
                    const allSelected = sessions.every(s => selectedChatIds.value.includes(s.id));
                    if (allSelected) {
                        selectedChatIds.value = selectedChatIds.value.filter(id => !sessions.some(s => s.id === id));
                    } else {
                        for (const s of sessions) {
                            if (!selectedChatIds.value.includes(s.id)) selectedChatIds.value.push(s.id);
                        }
                    }
                }
                function toggleChatDateExpand(date) {
                    const i = expandedChatDates.value.indexOf(date);
                    if (i >= 0) expandedChatDates.value.splice(i, 1);
                    else expandedChatDates.value.push(date);
                }
                function toggleChatMonthExpand(month) {
                    const i = expandedChatMonths.value.indexOf(month);
                    if (i >= 0) expandedChatMonths.value.splice(i, 1);
                    else expandedChatMonths.value.push(month);
                }
                function toggleChatStockExpand(code) {
                    const i = expandedChatStocks.value.indexOf(code);
                    if (i >= 0) expandedChatStocks.value.splice(i, 1);
                    else expandedChatStocks.value.push(code);
                }
                function selectAllChatSessions() {
                    if (selectedChatIds.value.length === allChatSessionsFlat.value.length) {
                        selectedChatIds.value = [];
                    } else {
                        selectedChatIds.value = allChatSessionsFlat.value.map(s => s.id);
                    }
                }
                async function deleteSelectedChatSessions() {
                    for (const id of [...selectedChatIds.value]) {
                        await deleteChatSession(id);
                    }
                    selectedChatIds.value = [];
                }
                function viewChatSession(session) {
                    stockDetail.value = { stock: session.stock_code, name: session.stock_name };
                    stockDetailVisible.value = true;
                    stockDetailTab.value = 'chat';
                    stockKlineLoaded.value = false;
                    if (stockKlineChart) { stockKlineChart.dispose(); stockKlineChart = null; }
                    stockChatMessages.value = session.messages?.map(m => ({role: m.role, content: m.content})) || [];
                }

                // Stock detail chat
                const stockChatInput = ref('');
                const stockChatMessages = ref([]);
                const stockChatLoading = ref(false);
                const stockChatError = ref('');

                async function askStockSend() {
                    const msg = stockChatInput.value.trim();
                    if (!msg || stockChatLoading.value) return;
                    stockChatError.value = '';
                    stockChatMessages.value.push({ role: 'user', content: msg });
                    stockChatInput.value = '';
                    stockChatLoading.value = true;
                    // Add placeholder for streaming response
                    const aiIdx = stockChatMessages.value.length;
                    stockChatMessages.value.push({ role: 'assistant', content: '' });
                    try {
                        const token = localStorage.getItem('quant_token');
                        const headers = { 'Content-Type': 'application/json' };
                        if (token) headers['Authorization'] = 'Bearer ' + token;
                        const res = await fetch('/api/ai/chat/stream', {
                            method: 'POST', headers,
                            body: JSON.stringify({ stock_code: stockDetail.value?.stock || '', message: msg })
                        });
                        const reader = res.body.getReader();
                        const decoder = new TextDecoder();
                        let buffer = '';
                        while (true) {
                            const { done, value } = await reader.read();
                            if (done) break;
                            buffer += decoder.decode(value, { stream: true });
                            const lines = buffer.split('\n');
                            buffer = lines.pop() || '';
                            for (const line of lines) {
                                if (line.startsWith('data: ')) {
                                    try {
                                        const data = JSON.parse(line.slice(6));
                                        if (data.token) {
                                            stockChatMessages.value[aiIdx].content += data.token;
                                        } else if (data.done) {
                                            console.log('Stream done:', data.session_id);
                                        } else if (data.error) {
                                            stockChatError.value = data.error;
                                        }
                                    } catch(e) { console.warn('SSE parse error:', e); }
                                }
                            }
                        }
                    } catch (e) {
                        if (!stockChatMessages.value[aiIdx].content)
                            stockChatMessages.value[aiIdx].content = '网络错误: ' + e.message;
                    }
                    stockChatLoading.value = false;
                }

                async function askStockQuick(mode) {
                    stockChatError.value = '';
                    stockChatLoading.value = true;
                    const msgs = { trend: '帮我做一下技术趋势分析', fundamental: '帮我看看基本面情况', comprehensive: '帮我做个综合分析' };
                    stockChatMessages.value.push({ role: 'user', content: msgs[mode] || msgs.comprehensive });
                    try {
                        const token = localStorage.getItem('quant_token');
                        const headers = { 'Content-Type': 'application/json' };
                        if (token) headers['Authorization'] = 'Bearer ' + token;
                        const res = await fetch('/api/ai/chat/quick', {
                            method: 'POST', headers,
                            body: JSON.stringify({ stock_code: stockDetail.value?.stock || '', mode })
                        });
                        if (res.ok) {
                            const data = await res.json();
                            stockChatMessages.value.push({ role: 'assistant', content: data.reply || '无回复' });
                        }
                    } catch (e) {
                        stockChatError.value = '网络错误: ' + e.message;
                    }
                    stockChatLoading.value = false;
                }

                async function loadChatHistory() {
                    try {
                        const token = localStorage.getItem('quant_token');
                        const headers = token ? { 'Authorization': 'Bearer ' + token } : {};
                        const res = await fetch('/api/ai/chat/history?view=date', { headers });
                        if (res.ok) {
                            const groups = await res.json();
                            const sessions = [];
                            for (const group of groups) {
                                for (const s of (group.items || [])) {
                                    try {
                                        const dres = await fetch('/api/ai/chat/history/' + s.id, { headers });
                                        if (dres.ok) { const d = await dres.json(); s.messages = d.messages || []; }
                                    } catch { }
                                    sessions.push(s);
                                }
                            }
                            chatSessions.value = sessions;
                        }
                    } catch (e) { console.error(e); }
                }

                async function deleteChatSession(id) {
                    try {
                        const token = localStorage.getItem('quant_token');
                        await fetch('/api/ai/chat/history/' + id, {
                            method: 'DELETE',
                            headers: token ? { 'Authorization': 'Bearer ' + token } : {}
                        });
                        chatSessions.value = chatSessions.value.filter(s => s.id !== id);
                    } catch (e) { console.error('deleteChatSession:', e); }
                }

                function renderMarkdown(md) {
                    if (!md) return '';
                    let html = md
                        .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
                        .replace(/^### (.+)$/gm, '<h4>$1</h4>')
                        .replace(/^## (.+)$/gm, '<h3>$1</h3>')
                        .replace(/^# (.+)$/gm, '<h2>$1</h2>')
                        .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
                        .replace(/\*(.+?)\*/g, '<em>$1</em>')
                        .replace(/`([^`]+)`/g, '<code>$1</code>')
                        .replace(/^- (.+)$/gm, '<li>$1</li>')
                        .replace(/(<li>.*<\/li>\n?)+/g, '<ul>$&</ul>')
                        .replace(/\n/g, '<br>');
                    return html;
                }

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
                const stockDetailVisible = ref(false);
                const stockDetailTab = ref('kline');  // 'kline' | 'ai'
                const stockDetail = ref(null);
                // 策略列表
                const strategyList = ref([
                    { key: 'multifactor', name: '多因子策略' },
                    { key: 'smartbeta', name: 'SmartBeta' },
                    { key: 'momentum', name: '动量策略' },
                    { key: 'meanreversion', name: '均值回归' },
                    { key: 'technical', name: '技术指标' },
                    { key: 'value', name: '价值投资' }
                ]);

                // ===== AI评估配置 =====
                const aiLoading = ref(false);
                const aiEvalStage = ref('');  // '', 'fetching', 'calculating', 'analyzing'
                const showBatchEvaluate = ref(false);
                const batchStocks = ref('');
                const batchRunning = ref(false);
                const batchTotal = ref(0);
                const batchCompleted = ref(0);
                const batchCurrent = ref('');
                const batchStatuses = ref({});
                const batchResults = ref({});  // v1.10: 批量结果详情
                const aiConfig = ref({
                    provider: 'codingplan',
                    apiKey: '',
                    endpoint: '',
                    model: 'gpt-3.5-turbo'
                });
                const selectedPreset = ref('manual');
                const providerInfo = computed(() => {
                    const presets = {
                        deepseek: { name: 'DeepSeek', endpoint: 'https://api.deepseek.com/v1', model: 'deepseek-chat', website: 'https://platform.deepseek.com' },
                        qwen: { name: '通义千问', endpoint: 'https://dashscope.aliyuncs.com/compatible-mode/v1', model: 'qwen-plus', website: 'https://help.aliyun.com/zh/dashscope' },
                        glm: { name: '智谱 GLM', endpoint: 'https://open.bigmodel.cn/api/paas/v4', model: 'glm-4-plus', website: 'https://open.bigmodel.cn' },
                        ernie: { name: '百度文心 ERNIE', endpoint: 'https://aip.baidubce.com/rpc/2.0/ai_custom/v1/wenxinworkshop/chat', model: 'ernie-4.0-8k-latest', website: 'https://yiyan.baidu.com' },
                        siliconflow: { name: '硅基流动', endpoint: 'https://api.siliconflow.cn/v1', model: 'Qwen/Qwen2.5-72B-Instruct', website: 'https://siliconflow.cn' },
                        volcengine: { name: '火山引擎', endpoint: 'https://ark.cn-beijing.volces.com/api/v3', model: 'ep-20250101000000-xxxxx', website: 'https://console.volcengine.com/ark' },
                        custom: { name: '自定义 API', endpoint: '', model: '', website: '' }
                    };
                    return presets[aiConfig.value.provider] || presets.custom;
                });
                const aiPresets = {
                    deepseek: { name: 'DeepSeek', endpoint: 'https://api.deepseek.com/v1', model: 'deepseek-chat' },
                    qwen: { name: '通义千问', endpoint: 'https://dashscope.aliyuncs.com/compatible-mode/v1', model: 'qwen-plus' },
                    glm: { name: '智谱GLM', endpoint: 'https://open.bigmodel.cn/api/paas/v4', model: 'glm-4-plus' },
                    ernie: { name: '百度文心', endpoint: 'https://aip.baidubce.com/rpc/2.0/ai_custom/v1/wenxinworkshop/chat', model: 'ernie-4.0' },
                    siliconflow: { name: '硅基流动', endpoint: 'https://api.siliconflow.cn/v1', model: 'Qwen/Qwen2.5-72B-Instruct' },
                    volcengine: { name: '火山引擎', endpoint: 'https://ark.cn-beijing.volces.com/api/v3', model: 'ep-20250101000000-xxxxx' }
                };
                function applyPreset(presetKey) {
                    if (presetKey === 'manual') return;
                    const preset = aiPresets[presetKey];
                    if (preset) {
                        aiConfig.value.endpoint = preset.endpoint;
                        aiConfig.value.model = preset.model;
                        configChanged.value = true;
                    }
                }
                function onProviderChange() {
                    configChanged.value = true;
                    // 选择预设时自动填充 endpoint 和 model
                    if (aiConfig.value.provider !== 'codingplan' && aiConfig.value.provider !== 'custom') {
                        const info = providerInfo.value;
                        if (info) {
                            aiConfig.value.endpoint = info.endpoint;
                            aiConfig.value.model = info.model;
                        }
                    } else if (aiConfig.value.provider === 'codingplan') {
                        if (!aiConfig.value.endpoint) {
                            aiConfig.value.endpoint = 'https://ark.cn-beijing.volces.com/api/coding/v3';
                        }
                        if (!aiConfig.value.model) {
                            aiConfig.value.model = 'ark-code-latest';
                        }
                    }
                }

                // ===== 用户管理 =====
                const userList = ref([]);
                const userSearch = ref('');
                const groupFilter = ref('');
                const userPageTab = ref('users');
                const expandedGroups = ref({});
                const addMemberGroupMap = ref({});
                const filteredUsers = computed(() => {
                    let list = userList.value;
                    if (groupFilter.value) {
                        list = list.filter(u => (u.group || u.role) === groupFilter.value);
                    }
                    if (!userSearch.value) return list;
                    const kw = userSearch.value.toLowerCase();
                    return list.filter(u => u.username.toLowerCase().includes(kw));
                });
                function toggleGroupExpand(gid) {
                    expandedGroups.value = { ...expandedGroups.value, [gid]: !expandedGroups.value[gid] };
                }
                async function removeMemberFromGroupInline(username, gid) {
                    try {
                        const token = localStorage.getItem('quant_token');
                        const res = await fetch('/api/groups/' + gid + '/members/' + username, {
                            method: 'DELETE',
                            headers: { 'Authorization': 'Bearer ' + token }
                        });
                        const data = await res.json();
                        if (data.success) {
                            await loadUsers();
                            await loadAllGroups();
                        } else {
                            ElementPlus.ElMessage.error(data.message);
                        }
                    } catch(e) { ElementPlus.ElMessage.error('移除失败'); }
                }
                async function addMemberToGroupInline(gid) {
                    const username = addMemberGroupMap.value[gid];
                    if (!username) return;
                    try {
                        const token = localStorage.getItem('quant_token');
                        const res = await fetch('/api/groups/' + gid + '/members', {
                            method: 'POST',
                            headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + token },
                            body: JSON.stringify({ username })
                        });
                        const data = await res.json();
                        if (data.success) {
                            await loadUsers();
                            await loadAllGroups();
                            addMemberGroupMap.value = { ...addMemberGroupMap.value, [gid]: '' };
                        } else {
                            ElementPlus.ElMessage.error(data.message);
                        }
                    } catch(e) { ElementPlus.ElMessage.error('添加失败'); }
                }
                async function changeUserGroup(user, newGroup) {
                    try {
                        const token = localStorage.getItem('quant_token');
                        const res = await fetch('/api/users/' + user.username, {
                            method: 'PUT',
                            headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + token },
                            body: JSON.stringify({ group: newGroup })
                        });
                        const data = await res.json();
                        if (data.success) {
                            await loadUsers();
                        } else {
                            ElementPlus.ElMessage.error(data.message);
                        }
                    } catch(e) { ElementPlus.ElMessage.error('分组变更失败'); }
                }
                const showAddUser = ref(false);
                const editingUser = ref(null);
                const userForm = ref({ username: '', password: '', role: 'user', theme: 'tech-blue' });
                const savingUser = ref(false);

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

                // ===== 股票池 =====
                // 策略过滤函数（复用，兼容 strategies 和 strategy_names 字段）
                function applyStrategyFilter(stocks) {
                    const selected = strategyFilter.value.selected;
                    if (!selected || selected.length === 0) return stocks;
                    const mode = strategyFilter.value.mode;
                    // 同时检查 strategies 和 strategy_names 两个字段
                    return stocks.filter(item => {
                        const names = item.strategy_names || item.strategies || [];
                        return mode === 'union'
                            ? selected.some(s => names.includes(s))
                            : selected.every(s => names.includes(s));
                    });
                }
                const statusCounts = computed(() => {
                    const filtered = applyStrategyFilter(consensus.value || []);
                    return {
                        all: filtered.length,
                        newCount: filtered.filter(s => s.status === 'new').length,
                        current: filtered.filter(s => s.status === 'current').length,
                        out: filtered.filter(s => s.status === 'out').length,
                    };
                });
                const stockPool = computed(() => {
                    let result = consensus.value || [];
                    // 本地按状态过滤
                    if (statusFilter.value !== 'all') {
                        result = result.filter(item => item.status === statusFilter.value);
                    }
                    // 策略过滤
                    result = applyStrategyFilter(result);
                    // 搜索过滤
                    if (searchKeyword.value) {
                        const keyword = searchKeyword.value.toLowerCase();
                        result = result.filter(item =>
                            item.code.toLowerCase().includes(keyword) ||
                            (item.name && item.name.toLowerCase().includes(keyword))
                        );
                    }
                    return result;
                });
                // 各策略股票分布（饼图用）
                const strategyDistribution = computed(() => {
                    const stocks = consensus.value || [];
                    const map = {};
                    // 先建 code→name 映射
                    const nameMap = {};
                    for (const s of stocks) {
                        if (s.code && s.name) nameMap[s.code] = s.name;
                    }
                    for (const s of stocks) {
                        const snames = s.strategy_names || s.strategies || [];
                        for (const sn of snames) {
                            if (!map[sn]) map[sn] = { strategy: sn, count: 0, codes: [], names: [] };
                            map[sn].count++;
                            if (!map[sn].codes.includes(s.code)) {
                                map[sn].codes.push(s.code);
                                map[sn].names.push({ code: s.code, name: nameMap[s.code] || s.code });
                            }
                        }
                    }
                    return Object.values(map).sort((a, b) => b.count - a.count);
                });
                // 策略筛选预览计数（按4个视图分别计算）
                const strategyPreviewCount = computed(() => {
                    const selected = strategyFilter.value.selected;
                    const mode = strategyFilter.value.mode;
                    const counts = {};
                    for (const [view, stocks] of Object.entries(strategyFilterCounts.value)) {
                        const all = stocks || [];
                        if (!selected || selected.length === 0) {
                            counts[view] = all.length;
                        } else if (mode === 'union') {
                            counts[view] = all.filter(s => s.strategies && selected.some(sel => s.strategies.includes(sel))).length;
                        } else {
                            counts[view] = all.filter(s => s.strategies && selected.every(sel => s.strategies.includes(sel))).length;
                        }
                    }
                    return counts;
                });
                function saveStrategyFilter() {
                    localStorage.setItem('quant_strategy_filter_selected', JSON.stringify(strategyFilter.value.selected));
                    localStorage.setItem('quant_strategy_filter_mode', strategyFilter.value.mode);
                    // 策略筛选配置已静默保存
                }
                // v1.8: 策略回测（已移除 backtest 相关代码）
                // 策略总览共识度排行也按策略过滤
                const filteredConsensusRank = computed(() => {
                    const rank = (dashboardData.value || {}).consensus_rank || [];
                    return applyStrategyFilter(rank);
                });
                // 当前在池股票（过滤后）
                const currentPoolSize = computed(() => {
                    const dayStocks = consensus.value || strategyFilterCounts.value.day || [];
                    return applyStrategyFilter(dayStocks).length;
                });
                // 各策略选股数量（过滤后）
                const filteredStrategyCounts = computed(() => {
                    const raw = (dashboardData.value || {}).strategy_counts || [];
                    const dayStocks = consensus.value || strategyFilterCounts.value.day || [];
                    // 没有共识数据时显示原始统计
                    if (dayStocks.length === 0) return raw;
                    const filtered = applyStrategyFilter(dayStocks);
                    // 统计过滤后的每个策略出现的次数
                    const counts = {};
                    filtered.forEach(s => {
                        const names = s.strategy_names || s.strategies || [];
                        names.forEach(n => { counts[n] = (counts[n] || 0) + 1; });
                    });
                    const total = filtered.length || 1;
                    // 保持原始策略顺序和名称
                    return raw.map(item => {
                        const chineseName = item.strategy_name || item.strategy_id;
                        const cnt = counts[chineseName] || 0;
                        return { ...item, count: cnt, percentage: Math.round(cnt / total * 1000) / 10 };
                    });
                });

                // ===== v1.11: 策略总览增强 =====
                // 池子趋势徽标
                const poolChangeBadge = computed(() => {
                    const changes = (dashboardData.value || {}).pool_changes || {};
                    const net = (changes.new_count || 0) - (changes.out_count || 0);
                    if (net > 0) return { dir: 'up', text: '↑' + net };
                    if (net < 0) return { dir: 'down', text: '↓' + Math.abs(net) };
                    return { dir: 'flat', text: '→0' };
                });
                // 时间覆盖进度条百分比
                const timeBarPercent = computed(() => {
                    const cov = (dashboardData.value || {}).time_coverage || {};
                    const start = new Date(cov.start_date);
                    const end = new Date(cov.end_date);
                    const now = new Date();
                    if (!start.getTime() || !end.getTime()) return 100;
                    if (now >= end) return 100;
                    if (now <= start) return 0;
                    const total = end - start;
                    const elapsed = now - start;
                    return Math.round(elapsed / total * 100);
                });
                // 上次刷新时间文字
                const lastRefreshTime = ref(null);
                const timeSinceRefresh = computed(() => {
                    if (!lastRefreshTime.value) return '';
                    const sec = Math.floor((Date.now() - lastRefreshTime.value) / 1000);
                    if (sec < 60) return sec + '秒前刷新';
                    if (sec < 3600) return Math.floor(sec/60) + '分钟前刷新';
                    return Math.floor(sec/3600) + '小时前刷新';
                });
                // 点击策略跳转日历筛选
                function navigateToStrategyFilter(strategyName) {
                    // 设置策略筛选为仅该策略
                    strategyFilter.value.selected = [strategyName];
                    strategyFilter.value.mode = 'union';
                    localStorage.setItem('quant_strategy_filter_selected', JSON.stringify([strategyName]));
                    localStorage.setItem('quant_strategy_filter_mode', 'union');
                    // 跳转到日历页
                    currentPage.value = 'calendar';
                    currentSubPage.value = 'daily';
                }

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
                    // 客户端缓存命中 → 直接渲染，不显示 loading
                    if (viewCache.has(cacheKey)) {
                        consensus.value = viewCache.get(cacheKey);
                        return;
                    }
                    loading.value = true;
                    loadingView.value = {day:'日', week:'周', month:'月', year:'年'}[currentView.value] || currentView.value;
                    try {
                        // 调用多视图 API（始终获取全量数据，前端做状态过滤+计数）
                        const res = await fetch(`/api/view/${currentView.value}/${selectedDate.value}?status=all`);
                        const data = await res.json();
                        consensus.value = data.stocks || [];
                        viewCache.set(cacheKey, data.stocks || []);  // 写入客户端缓存
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
                }

                // v3.7.11: 获取入池/出池 AI 解读
                async function fetchPoolSignals() {
                    const items = consensus.value || [];
                    const targets = items.filter(i => i.status === 'new' || i.status === 'out');
                    for (const item of targets) {
                        if (poolSignals.value[item.code]) continue; // 已有缓存
                        try {
                            const res = await fetch('/api/calendar/pool-signal', {
                                method: 'POST',
                                headers: { 'Content-Type': 'application/json' },
                                body: JSON.stringify({ stock_code: item.code, stock_name: item.name, event_type: item.status === 'new' ? 'enter' : 'exit' })
                            });
                            const data = await res.json();
                            if (data.success && data.signal) {
                                poolSignals.value = { ...poolSignals.value, [item.code]: data.signal };
                            }
                        } catch (e) {
                            // 静默失败
                        }
                    }
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

                async function loadLastEvaluation(stockCode) {
                    try {
                        const token = localStorage.getItem('quant_token');
                        const headers = token ? { 'Authorization': `Bearer ${token}` } : {};
                        const res = await fetch(`/api/ai/history/last/${encodeURIComponent(stockCode)}`, { headers });
                        const data = await res.json();
                        if (data.success && data.data) {
                            aiResult.value = data.data;
                            lastEvalTime.value = data.data.evaluate_time;
                            // 加载历史对比
                            updateEvalComparison(stockCode, data.data);
                            // 生成操作检查清单
                            updateChecklist(data.data);
                        }
                    } catch(e) {
                        // 静默失败
                    }
                }

                // 评估历史对比：比较本次与上次同一股票的评分
                async function updateEvalComparison(stockCode, currentResult) {
                    try {
                        const token = localStorage.getItem('quant_token');
                        const headers = token ? { 'Authorization': `Bearer ${token}` } : {};
                        const res = await fetch(`/api/ai/history?stock=${encodeURIComponent(stockCode)}&limit=2`, { headers });
                        const data = await res.json();
                        if (data.success && data.data && data.data.length >= 2) {
                            const prev = data.data[1];  // 第二新的记录
                            const currScore = currentResult.result?.total_score || 0;
                            const prevScore = prev.result?.total_score || 0;
                            if (currScore > 0 && prevScore > 0) {
                                evalHistoryComparison.value = {
                                    prevScore, currScore,
                                    diff: currScore - prevScore
                                };
                            }
                        }
                    } catch(e) { console.warn('[refreshStrategyData] autoPoll failed:', e); }
                }

                // 操作检查清单：根据评估维度生成 ✅⚠️❌
                function updateChecklist(result) {
                    const dims = result.result?.dimensions || {};
                    const items = [];
                    const rules = [
                        { key: '趋势强度', label: '趋势强度', good: 70, warn: 50 },
                        { key: '均线排列', label: '均线排列', good: 70, warn: 50 },
                        { key: '成交量', label: '量能配合', good: 70, warn: 50 },
                        { key: '动能风险', label: '动能风险', good: 70, warn: 40 },
                        { key: '指标共振', label: '指标共振', good: 70, warn: 50 },
                        { key: '稳定性', label: '持仓稳定', good: 70, warn: 50 },
                    ];
                    for (const rule of rules) {
                        const score = dims[rule.key];
                        if (score !== undefined) {
                            items.push({
                                icon: score >= rule.good ? '●' : score >= rule.warn ? '▲' : '✕',
                                label: `${rule.label} ${Math.round(score)}分`
                            });
                        }
                    }
                    checklistItems.value = items;
                }

                // ===== AI评估 =====
                const aiResult = ref(null);
                const lastEvalTime = ref('');
                const evalHistoryComparison = ref(null);  // {prevScore, currScore, diff}
                const checklistItems = ref([]);  // [{icon, label}]
                const aiHistory = ref([]);
                const selectedHistoryIds = ref([]);
                const expandedDates = ref([]);  // 已展开的日期 (YYYY-MM-DD)
                const expandedMonths = ref([]);  // 已展开的月份 (YYYY-MM)
                const expandedStocks = ref([]);  // 已展开的股票代码
                const poolSignals = ref({});  // v3.7.11: 入池信号解读缓存

                // 切换月份展开
                function toggleMonthExpand(month) {
                    const idx = expandedMonths.value.indexOf(month);
                    if (idx >= 0) expandedMonths.value.splice(idx, 1);
                    else expandedMonths.value.push(month);
                }
                const aiHistoryView = ref('date');  // date 或 stock
                const selectedWatchlistCodes = ref([]);
                const showAutoEvaluateSettings = ref(false);
                const savingConfig = ref(false);
                const autoEvaluateScope = ref('watchlist');  // v1.8.0: 默认自选

                // ─── AI 模型管理 ──────────────────────────────────
                const aiModels = ref([]);
                const aiModelsError = ref('');
                const testingAllModels = ref(false);
                const savingAiModels = ref(false);

                async function loadAiModels() {
                    try {
                        aiModelsError.value = '';
                        const token = localStorage.getItem('quant_token');
                        const headers = token ? { 'Authorization': `Bearer ${token}` } : {};
                        const res = await fetch('/api/ai/models', { headers });
                        if (res.status === 401) {
                            aiModelsError.value = '请先登录后再查看模型配置';
                            return;
                        }
                        if (!res.ok) {
                            aiModelsError.value = `服务器错误 (${res.status})`;
                            return;
                        }
                        const data = await res.json();
                        if (data.success) {
                            aiModels.value = (data.data || []).map(m => ({ ...m, _expanded: false, _testing: false, testResult: undefined }));
                            aiModelsError.value = '';
                        } else {
                            aiModelsError.value = data.message || '加载失败';
                        }
                    } catch(e) {
                        aiModelsError.value = '网络错误: ' + e.message;
                    }
                }

                function onModelToggle(model) {
                    // 仅更新优先级，不重新排序（避免 v-for 渲染混乱）
                    const enabled = aiModels.value.filter(m => m.enabled);
                    enabled.forEach((m, i) => m.priority = i);
                    const disabled = aiModels.value.filter(m => !m.enabled);
                    disabled.forEach((m, i) => m.priority = enabled.length + i);
                    // 排序延迟到保存时执行
                }

                async function testModel(model) {
                    model._testing = true;
                    try {
                        const token = localStorage.getItem('quant_token');
                        const headers = token ? { 'Authorization': `Bearer ${token}` } : {};
                        const res = await fetch(`/api/ai/models/test/${encodeURIComponent(model.id)}`, {
                            method: 'POST', headers
                        });
                        const data = await res.json();
                        model.testResult = data;
                    } catch(e) {
                        model.testResult = { success: false, message: e.message };
                    }
                    model._testing = false;
                }

                async function testAllModels() {
                    testingAllModels.value = true;
                    for (const m of aiModels.value) {
                        if (m.api_key) {
                            await testModel(m);
                        } else {
                            m.testResult = { success: false, message: '未配置 API Key' };
                        }
                    }
                    testingAllModels.value = false;
                    ElementPlus.ElMessage.success('全部探测完成');
                }

                async function saveAiModels() {
                    savingAiModels.value = true;
                    try {
                        const token = localStorage.getItem('quant_token');
                        const headers = { 'Content-Type': 'application/json' };
                        if (token) headers['Authorization'] = `Bearer ${token}`;
                        // Re-prioritize before save
                        aiModels.value.forEach((m, i) => m.priority = i);
                        const res = await fetch('/api/ai/models', {
                            method: 'POST',
                            headers,
                            body: JSON.stringify({ models: aiModels.value.map(m => {
                                const { _expanded, _testing, testResult, ...clean } = m;
                                return clean;
                            })})
                        });
                        const data = await res.json();
                        if (data.success) {
                    // 模型配置已静默保存
                        } else {
                            ElementPlus.ElMessage.error(data.message || '保存失败');
                        }
                    } catch(e) {
                        ElementPlus.ElMessage.error('保存失败: ' + e.message);
                    }
                    savingAiModels.value = false;
                }

                function addModel() {
                    const newId = 'new-model-' + Date.now();
                    aiModels.value.push({
                        id: newId,
                        provider: '',
                        model: '',
                        base_url: '',
                        api_key: '',
                        enabled: false,
                        priority: aiModels.value.length,
                        timeout: 60,
                        max_tokens: 4096,
                        _expanded: false,
                        _testing: false,
                        testResult: undefined
                    });
                    ElementPlus.ElMessage.success('模型已添加');
                }

                function deleteModel(idx) {
                    const m = aiModels.value[idx];
                    if (!m) return;
                    if (confirm('确定删除模型 "' + m.id + '"？')) {
                        aiModels.value.splice(idx, 1);
                        ElementPlus.ElMessage.success('已删除，请点击保存生效');
                    }
                }
                const autoEvaluateConfig = ref({
                    enabled: false,
                    schedule_type: 'daily',
                    schedule_time: '09:00',
                    selected_strategies: [],
                    selected_stocks: [],
                    push_to_feishu: true,
                    feishu_webhook: ''
                });
                // v1.8.0: 自选股
                const quickEvalStock = ref('');  // v1.10: 快捷评股下拉
                const evalStrategy = ref('default');  // v1.10: 评估策略
                const watchlistSort = ref('default');  // v1.10: 自选排序
                const watchlist = ref([]);
                const watchlistCodes = computed(() => new Set(watchlist.value.map(s => s.code)));
                // v1.10: 排序后的自选列表
                const sortedWatchlist = computed(() => {
                    const list = [...watchlist.value];
                    if (watchlistSort.value === 'name') {
                        list.sort((a, b) => a.name.localeCompare(b.name, 'zh'));
                    } else if (watchlistSort.value === 'added') {
                        list.sort((a, b) => (b.added_at || '').localeCompare(a.added_at || ''));
                    } else if (watchlistSort.value === 'score') {
                        list.sort((a, b) => {
                            const sa = getLatestScore(a.code);
                            const sb = getLatestScore(b.code);
                            return sb - sa;
                        });
                    }
                    return list;
                });
                // v1.10: 获取某股票最近评分和颜色
                function getWatchlistScore(code) {
                    const records = aiHistory.value.filter(r => r.stock_code === code);
                    if (records.length === 0) return null;
                    const latest = records.reduce((a, b) => (a.evaluate_time > b.evaluate_time) ? a : b);
                    return { score: latest.result.total_score, color: latest.result.level_color };
                }
                function getLatestScore(code) {
                    const s = getWatchlistScore(code);
                    return s ? s.score : 0;
                }
                // v1.10: 搜索结果添加（提取模板逻辑）
                function addSearchResult(r) {
                    addToWatchlist(r.code, r.name);
                    watchlistResults.value = watchlistResults.value.filter(x => x.code !== r.code);
                    watchlistSearch.value = '';
                }
                // 已评估股票集合（来自AI历史）
                const evaluatedCodes = computed(() => new Set(aiHistory.value.map(r => r.stock_code)));
                // K线已加载集合（当前session）
                const klineLoadedCodes = ref(new Set());
                function markKlineLoaded(code) { klineLoadedCodes.value.add(code); }
                const watchlistSearch = ref('');
                const watchlistResults = ref([]);
                const watchlistSearching = ref(false);
                
                // v1.8.0: 数据刷新配置
                const dataRefreshConfig = ref({
                    scheduled_enabled: false,
                    scheduled_time: '22:00',
                    watch_enabled: false,
                    last_refresh: null,
                    last_refresh_status: null
                });
                const dataRefreshReloading = ref(false);
                const dataRefreshSaving = ref(false);

                async function doAiEvaluate() {
                    if (!stockDetail.value) return;
                    aiLoading.value = true;
                    aiResult.value = null;
                    
                    // 阶段动画 — 模拟前后端分离的进度
                    const STAGE_DELAY = 1800;  // ms per stage
                    
                    aiEvalStage.value = 'fetching';
                    const stageTimer1 = setTimeout(() => {
                        if (aiLoading.value) aiEvalStage.value = 'calculating';
                    }, STAGE_DELAY);
                    const stageTimer2 = setTimeout(() => {
                        if (aiLoading.value) aiEvalStage.value = 'analyzing';
                    }, STAGE_DELAY * 2);
                    
                    try {
                        const token = localStorage.getItem('quant_token');
                        const res = await fetch('/api/ai/evaluate', {
                            method: 'POST',
                            headers: {'Content-Type': 'application/json', 'Authorization': `Bearer ${token}`},
                            body: JSON.stringify({
                                stock_code: stockDetail.value.stock,
                                stock_name: stockDetail.value.name || stockDetail.value.stock,
                                strategy: evalStrategy.value
                            })
                        });
                        const data = await res.json();
                        if (data.success) {
                            aiResult.value = data.data;
                            stockDetailTab.value = 'ai';  // auto-switch to AI tab
                            loadAiHistory();
                        } else {
                            ElementPlus.ElMessage.error(data.message || '评估失败');
                        }
                    } catch (e) {
                        ElementPlus.ElMessage.error('评估失败');
                    } finally {
                        clearTimeout(stageTimer1);
                        clearTimeout(stageTimer2);
                        aiLoading.value = false;
                        aiEvalStage.value = '';
                    }
                }

                async function loadAiHistory() {
                    try {
                        const token = localStorage.getItem('quant_token');
                        if (!token) { aiHistory.value = []; return; }
                        const headers = { 'Authorization': `Bearer ${token}` };
                        const res = await fetch('/api/ai/history', { headers });
                        if (res.status === 401) {
                            // token 过期，清除登录状态
                            console.warn('[loadAiHistory] 401, clearing session');
                            localStorage.removeItem('quant_user');
                            localStorage.removeItem('quant_token');
                            currentUser.value = null;
                            return;
                        }
                        const data = await res.json();
                        if (data.success) {
                            aiHistory.value = data.data;
                        }
                    } catch (e) { console.error('[loadAiHistory] error:', e); }
                }

                // 删除单条记录
                async function deleteSingleHistory(id) {
                    try {
                        await ElementPlus.ElMessageBox.confirm(
                            '确定要删除这条评估记录吗？',
                            '确认删除',
                            {
                                confirmButtonText: '确定',
                                cancelButtonText: '取消',
                                type: 'warning'
                            }
                        );
                        const token = localStorage.getItem('quant_token');
                        const res = await fetch(`/api/ai/history/${id}`, {
                            method: 'DELETE',
                            headers: { 'Authorization': `Bearer ${token}` }
                        });
                        const data = await res.json();
                        if (data.success) {
                            ElementPlus.ElMessage.success('删除成功');
                            loadAiHistory();
                            // 从选中列表中移除
                            const idx = selectedHistoryIds.value.indexOf(id);
                            if (idx >= 0) selectedHistoryIds.value.splice(idx, 1);
                        } else {
                            ElementPlus.ElMessage.error(data.message || '删除失败');
                        }
                    } catch (e) {
                        // 用户取消
                    }
                }

                // 切换选择历史记录
                function toggleSelectHistory(id) {
                    const idx = selectedHistoryIds.value.indexOf(id);
                    if (idx >= 0) {
                        selectedHistoryIds.value.splice(idx, 1);
                    } else {
                        selectedHistoryIds.value.push(id);
                    }
                }

                // 清空选择
                function clearSelection() {
                    selectedHistoryIds.value = [];
                }
                function clearWatchlistSelection() {
                    selectedWatchlistCodes.value = [];
                }

                async function batchReevaluateHistory() {
                    const ids = selectedHistoryIds.value;
                    if (ids.length === 0) return;
                    const stocks = aiHistory.value.filter(h => ids.includes(h.id)).map(h => h.stock_code);
                    showBatchEvaluate.value = true;
                    batchStocks.value = [...new Set(stocks)].join(',');
                }
                async function batchAddToWatchlist() {
                    const ids = selectedHistoryIds.value;
                    if (ids.length === 0) return;
                    const stocks = aiHistory.value.filter(h => ids.includes(h.id));
                    const unique = [...new Map(stocks.map(s => [s.stock_code, s])).values()];
                    let added = 0;
                    for (const s of unique) {
                        if (!watchlistCodes.value.has(s.stock_code)) {
                            await addToWatchlist(s.stock_code, s.stock_name || s.stock_code);
                            added++;
                        }
                    }
                    if (added > 0) ElementPlus.ElMessage.success(`已加入 ${added} 只股票到自选`);
                    else ElementPlus.ElMessage.info('所选股票已在自选中');
                }

                async function batchRemoveWatchlist() {
                    if (selectedWatchlistCodes.value.length === 0) return;
                    try {
                        await ElementPlus.ElMessageBox.confirm(
                            `确定移除选中的 ${selectedWatchlistCodes.value.length} 只股票？`, '提示', { type: 'warning' }
                        );
                        for (const code of selectedWatchlistCodes.value) {
                            await removeFromWatchlist(code);
                        }
                        selectedWatchlistCodes.value = [];
                        ElementPlus.ElMessage.success('已移除');
                    } catch (e) { if (e && e.message !== 'cancel') console.warn('batchRemoveWatchlist:', e); }
                }
                function toggleSelectWatchlist(code) {
                    const idx = selectedWatchlistCodes.value.indexOf(code);
                    if (idx >= 0) selectedWatchlistCodes.value.splice(idx, 1);
                    else selectedWatchlistCodes.value.push(code);
                }
                function selectAllHistory() {
                    if (selectedHistoryIds.value.length === aiHistory.value.length) {
                        selectedHistoryIds.value = [];
                    } else {
                        selectedHistoryIds.value = aiHistory.value.map(h => h.id);
                    }
                }
                function selectAllWatchlist() {
                    if (selectedWatchlistCodes.value.length === watchlist.value.length) {
                        selectedWatchlistCodes.value = [];
                    } else {
                        selectedWatchlistCodes.value = watchlist.value.map(s => s.code);
                    }
                }

                // 批量删除选中记录
                async function deleteSelectedHistory() {
                    if (selectedHistoryIds.value.length === 0) return;
                    try {
                        await ElementPlus.ElMessageBox.confirm(
                            `确定要删除选中的 ${selectedHistoryIds.value.length} 条记录吗？`,
                            '确认批量删除',
                            {
                                confirmButtonText: '确定删除',
                                cancelButtonText: '取消',
                                type: 'warning'
                            }
                        );
                        const token = localStorage.getItem('quant_token');
                        const res = await fetch('/api/ai/history/batch-delete', {
                            method: 'POST',
                            headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` },
                            body: JSON.stringify({ids: selectedHistoryIds.value})
                        });
                        const data = await res.json();
                        if (data.success) {
                            ElementPlus.ElMessage.success(data.message);
                            selectedHistoryIds.value = [];
                            loadAiHistory();
                        } else {
                            ElementPlus.ElMessage.error(data.message || '删除失败');
                        }
                    } catch (e) {
                        // 用户取消
                    }
                }

                // 加载自动评股配置
                async function loadAutoEvaluateConfig() {
                    try {
                        const res = await fetch('/api/ai/auto-config');
                        const data = await res.json();
                        if (data.success) {
                            autoEvaluateConfig.value = data.data;
                            if (data.data.evaluate_scope) autoEvaluateScope.value = data.data.evaluate_scope;
                        }
                    } catch (e) { console.warn('loadAutoEvaluateConfig failed:', e); }
                }

                // 保存自动评股配置
                async function saveAutoEvaluateConfig() {
                    savingConfig.value = true;
                    try {
                        // 同步 scope 到配置
                        autoEvaluateConfig.value.evaluate_scope = autoEvaluateScope.value;
                        const res = await fetch('/api/ai/auto-config', {
                            method: 'POST',
                            headers: {'Content-Type': 'application/json'},
                            body: JSON.stringify(autoEvaluateConfig.value)
                        });
                        const data = await res.json();
                        if (data.success) {
                            ElementPlus.ElMessage.success('自动评股配置已保存');
                            showAutoEvaluateSettings.value = false;
                        } else {
                            ElementPlus.ElMessage.error(data.message || '保存失败');
                        }
                    } catch (e) {
                        ElementPlus.ElMessage.error('保存失败');
                    } finally {
                        savingConfig.value = false;
                    }
                }

                // v1.8.0: 自选股 CRUD
                async function loadWatchlist() {
                    try {
                        const token = localStorage.getItem('quant_token');
                        const res = await fetch('/api/watchlist', { headers: { 'Authorization': `Bearer ${token}` } });
                        const data = await res.json();
                        if (data.success) watchlist.value = data.stocks || [];
                    } catch (e) { console.warn('loadWatchlist failed:', e); }
                }
                async function addToWatchlist(code, name) {
                    try {
                        const token = localStorage.getItem('quant_token');
                        const res = await fetch('/api/watchlist', {
                            method: 'POST',
                            headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` },
                            body: JSON.stringify({ code, name })
                        });
                        const data = await res.json();
                        if (data.success) {
                            if (!data.existed) watchlist.value.push({ code, name, added_at: new Date().toISOString() });
                            return true;
                        }
                    } catch (e) { console.warn('addToWatchlist failed:', e); }
                    return false;
                }
                async function removeFromWatchlist(code) {
                    try {
                        const token = localStorage.getItem('quant_token');
                        await fetch(`/api/watchlist/${encodeURIComponent(code)}`, {
                            method: 'DELETE', headers: { 'Authorization': `Bearer ${token}` }
                        });
                        watchlist.value = watchlist.value.filter(s => s.code !== code);
                    } catch (e) { console.warn('removeFromWatchlist failed:', e); }
                }
                async function clearWatchlist() {
                    try {
                        await ElementPlus.ElMessageBox.confirm('确定清空所有自选股？', '提示', { type: 'warning' });
                        const token = localStorage.getItem('quant_token');
                        await fetch('/api/watchlist', {
                            method: 'DELETE', headers: { 'Authorization': `Bearer ${token}` }
                        });
                        watchlist.value = [];
                        ElementPlus.ElMessage.success('自选已清空');
                    } catch (e) { console.warn('clearWatchlist failed:', e); }
                }
                async function toggleWatchlist(code, name) {
                    if (watchlistCodes.value.has(code)) {
                        await removeFromWatchlist(code);
                        ElementPlus.ElMessage.info('已移除自选');
                    } else {
                        const ok = await addToWatchlist(code, name);
                        if (ok) ElementPlus.ElMessage.success('已加入自选');
                    }
                }
                async function showStockKline(code, name) {
                    // v1.8.0: 先获取完整股票详情（含今日行情+均线+评分）
                    const today = new Date().toISOString().split('T')[0];
                    const date = selectedDate.value || today;
                    try {
                        const res = await fetch(`/api/calendar/stock/${encodeURIComponent(code)}?date=${date}`);
                        stockDetail.value = await res.json();
                    } catch(e) {
                        stockDetail.value = { stock: code, name, total_days: 0 };
                    }
                    stockKlineLoaded.value = false;
                    stockDetailVisible.value = true;
                    nextTick(() => animateScoreEntrance());
                    await nextTick();
                    await loadStockKline('daily');
                    refreshStockScore();
                }
                const preloadingKline = ref(false);
                async function preloadWatchlistKline() {
                    if (watchlist.value.length === 0) return;
                    preloadingKline.value = true;
                    try {
                        const token = localStorage.getItem('quant_token');
                        const headers = token ? { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` } : { 'Content-Type': 'application/json' };
                        const res = await fetch('/api/watchlist/kline/preload', { method: 'POST', headers });
                        const data = await res.json();
                        if (data.success && data.loaded > 0) {
                            // 标记已加载K线的股票
                            (data.details?.loaded || []).forEach(item => klineLoadedCodes.value.add(item.code));
                            // v1.8.0: 静默预加载, 不弹提示
                        } else if (data.loaded === 0 && data.total > 0) {
                            ElementPlus.ElMessage.warning('K线预加载: 全部失败, 请检查数据源');
                        }
                    } catch(e) {
                        console.error('预加载K线失败:', e);
                    } finally {
                        preloadingKline.value = false;
                    }
                }
                async function watchlistEvaluate(code, name) {
                    // v1.10: 始终触发新评估，弹窗展示完整结果
                    aiLoading.value = true;
                    aiResult.value = null;
                    stockKlineLoaded.value = false;
                    if (stockKlineChart) { stockKlineChart.dispose(); stockKlineChart = null; }
                    const today = new Date().toISOString().split('T')[0];
                    const date = selectedDate.value || today;
                    try {
                        const res = await fetch(`/api/calendar/stock/${encodeURIComponent(code)}?date=${date}`);
                        stockDetail.value = await res.json();
                    } catch(e) {
                        stockDetail.value = { stock: code, name, total_days: 0 };
                    }
                    stockDetailTab.value = 'ai';
                    stockDetailVisible.value = true;
                    await nextTick();
                    // 触发新评估
                    try {
                        const token = localStorage.getItem('quant_token');
                        const evalRes = await fetch('/api/ai/evaluate', {
                            method: 'POST',
                            headers: {'Content-Type': 'application/json', 'Authorization': `Bearer ${token}`},
                            body: JSON.stringify({ stock_code: code, stock_name: name })
                        });
                        const evalData = await evalRes.json();
                        if (evalData.success) {
                            aiResult.value = evalData.data;
                            loadAiHistory();
                        } else {
                            ElementPlus.ElMessage.error(evalData.message || '评估失败');
                        }
                    } catch(e) {
                        ElementPlus.ElMessage.error('评估失败');
                    } finally {
                        aiLoading.value = false;
                    }
                    // 加载K线
                    setTimeout(async () => { await loadStockKline('daily'); refreshStockScore(); }, 500);
                }
                async function batchEvaluateWatchlist() {
                    if (watchlist.value.length === 0) return;
                    showBatchEvaluate.value = true;
                    batchStocks.value = watchlist.value.map(s => s.code).join(',');
                }
                async function batchEvaluateSelected() {
                    if (selectedWatchlistCodes.value.length === 0) return;
                    showBatchEvaluate.value = true;
                    batchStocks.value = selectedWatchlistCodes.value.join(',');
                }
                async function searchStockForWatchlist() {
                    if (!watchlistSearch.value.trim()) { watchlistResults.value = []; return; }
                    watchlistSearching.value = true;
                    try {
                        const token = localStorage.getItem('quant_token');
                        const res = await fetch(`/api/watchlist/stock/search?q=${encodeURIComponent(watchlistSearch.value)}`, { headers: { 'Authorization': `Bearer ${token}` } });
                        const data = await res.json();
                        watchlistResults.value = (data.results || []).filter(r => !watchlistCodes.value.has(r.code));
                    } catch (e) { console.warn('searchStockForWatchlist failed:', e); } finally { watchlistSearching.value = false; }
                }

                // v1.8.0: 加载数据刷新配置
                async function loadDataRefreshConfig() {
                    try {
                        const res = await fetch('/api/data-refresh/config');
                        const data = await res.json();
                        dataRefreshConfig.value = data;
                    } catch (e) {
                        console.error('加载数据刷新配置失败:', e);
                    }
                }

                // v1.8.0: 保存数据刷新配置
                async function saveDataRefreshConfig() {
                    dataRefreshSaving.value = true;
                    try {
                        const token = localStorage.getItem('quant_token');
                        const headers = token
                            ? { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` }
                            : { 'Content-Type': 'application/json' };
                        const res = await fetch('/api/data-refresh/config', {
                            method: 'POST',
                            headers,
                            body: JSON.stringify(dataRefreshConfig.value)
                        });
                        const data = await res.json();
                        if (data.success) {
                            ElementPlus.ElMessage.success('数据刷新配置已保存');
                        } else {
                            ElementPlus.ElMessage.error('保存失败');
                        }
                    } catch (e) {
                        ElementPlus.ElMessage.error('保存失败');
                    } finally {
                        dataRefreshSaving.value = false;
                    }
                }

                // v1.8.0: 手动触发数据重载
                async function triggerDataReload() {
                    dataRefreshReloading.value = true;
                    try {
                        const res = await fetch('/api/data-refresh/reload', { method: 'POST' });
                        const data = await res.json();
                        if (data.success) {
                            ElementPlus.ElMessage.success(`数据刷新成功: ${data.parser_stats?.dates_count || 0}交易日`);
                            viewCache.clear();  // 清空客户端视图缓存
                            await loadDataRefreshConfig();
                        } else {
                            ElementPlus.ElMessage.error(data.error || '刷新失败');
                        }
                    } catch (e) {
                        ElementPlus.ElMessage.error('刷新请求失败');
                    } finally {
                        dataRefreshReloading.value = false;
                    }
                }

                // 按日期聚合的计算属性
                const groupedByDate = computed(() => {
                    const groups = {};
                    for (const item of aiHistory.value) {
                        const date = (item.evaluate_time || '').split('T')[0];  // ISO format: 2026-05-29T02:07:28
                        if (!groups[date]) groups[date] = [];
                        groups[date].push(item);
                    }
                    // 每组内按时间倒序
                    for (const d in groups) {
                        groups[d].sort((a, b) => b.evaluate_time.localeCompare(a.evaluate_time));
                    }
                    return groups;
                });

                // 按股票聚合
                const aiHistoryByStock = computed(() => {
                    const groups = {};
                    for (const item of aiHistory.value) {
                        const code = item.stock_code;
                        if (!groups[code]) groups[code] = [];
                        groups[code].push(item);
                    }
                    for (const code in groups) {
                        groups[code].sort((a, b) => b.evaluate_time.localeCompare(a.evaluate_time));
                    }
                    return groups;
                });

                // 按月聚合
                const groupedByMonth = computed(() => {
                    const groups = {};
                    for (const item of aiHistory.value) {
                        const month = (item.evaluate_time || '').split('T')[0].slice(0, 7);  // YYYY-MM
                        if (!groups[month]) groups[month] = [];
                        groups[month].push(item);
                    }
                    for (const m in groups) {
                        groups[m].sort((a, b) => b.evaluate_time.localeCompare(a.evaluate_time));
                    }
                    return groups;
                });

                const aiHistoryStockCount = computed(() => Object.keys(aiHistoryByStock.value).length);

                // v1.10: 评分分布（用于 Overview 仪表盘）
                const scoreDistribution = computed(() => {
                    const total = aiHistory.value.length;
                    if (total === 0) return [];
                    const bins = [
                        { label: '90+', min: 90, max: 100, color: 'var(--el-success)' },
                        { label: '80-89', min: 80, max: 89, color: '#67c23a' },
                        { label: '70-79', min: 70, max: 79, color: '#b3e19d' },
                        { label: '60-69', min: 60, max: 69, color: 'var(--el-warning)' },
                        { label: '<60', min: 0, max: 59, color: 'var(--el-danger)' },
                    ];
                    return bins.map(b => {
                        const count = aiHistory.value.filter(r => r.result.total_score >= b.min && r.result.total_score <= b.max).length;
                        return { ...b, count, pct: Math.round(count / total * 100) };
                    });
                });

                // v1.10: 快捷评股
                async function quickEvaluate() {
                    if (!quickEvalStock.value) return;
                    const stock = watchlist.value.find(s => s.code === quickEvalStock.value);
                    if (!stock) return;
                    aiLoading.value = true;
                    aiResult.value = null;
                    try {
                        stockDetail.value = { stock: stock.code, name: stock.name, total_days: 0 };
                        stockDetailVisible.value = true;
                        stockDetailTab.value = 'ai';
                        await nextTick();
                        // 借用 doAiEvaluate 逻辑
                        const token = localStorage.getItem('quant_token');
                        const res = await fetch('/api/ai/evaluate', {
                            method: 'POST',
                            headers: {'Content-Type': 'application/json', 'Authorization': `Bearer ${token}`},
                            body: JSON.stringify({ stock_code: stock.code, stock_name: stock.name, strategy: evalStrategy.value })
                        });
                        const data = await res.json();
                        if (data.success) {
                            aiResult.value = data.data;
                            loadAiHistory();
                            quickEvalStock.value = '';
                        } else {
                            ElementPlus.ElMessage.error(data.message || '评估失败');
                        }
                    } catch (e) {
                        ElementPlus.ElMessage.error('评估失败');
                    } finally {
                        aiLoading.value = false;
                    }
                }

                // 切换日期展开
                function toggleDateExpand(date) {
                    const idx = expandedDates.value.indexOf(date);
                    if (idx >= 0) expandedDates.value.splice(idx, 1);
                    else expandedDates.value.push(date);
                }

                // 切换某日全部记录的选中状态
                function toggleSelectDate(date) {
                    const records = groupedByDate.value[date] || [];
                    const ids = records.map(r => r.id);
                    const allSelected = ids.every(id => selectedHistoryIds.value.includes(id));
                    if (allSelected) {
                        selectedHistoryIds.value = selectedHistoryIds.value.filter(id => !ids.includes(id));
                    } else {
                        ids.forEach(id => {
                            if (!selectedHistoryIds.value.includes(id)) selectedHistoryIds.value.push(id);
                        });
                    }
                }

                // 切换某月全部记录的选中状态
                function toggleSelectMonth(month) {
                    const records = groupedByMonth.value[month] || [];
                    const ids = records.map(r => r.id);
                    const allSelected = ids.every(id => selectedHistoryIds.value.includes(id));
                    if (allSelected) {
                        selectedHistoryIds.value = selectedHistoryIds.value.filter(id => !ids.includes(id));
                    } else {
                        ids.forEach(id => {
                            if (!selectedHistoryIds.value.includes(id)) selectedHistoryIds.value.push(id);
                        });
                    }
                }

                function toggleStockExpand(code) {
                    const idx = expandedStocks.value.indexOf(code);
                    if (idx >= 0) expandedStocks.value.splice(idx, 1);
                    else expandedStocks.value.push(code);
                }

                // 切换某股票全部记录的选中状态
                function toggleSelectStock(code) {
                    const records = aiHistoryByStock.value[code] || [];
                    const ids = records.map(r => r.id);
                    const allSelected = ids.every(id => selectedHistoryIds.value.includes(id));
                    if (allSelected) {
                        selectedHistoryIds.value = selectedHistoryIds.value.filter(id => !ids.includes(id));
                    } else {
                        ids.forEach(id => {
                            if (!selectedHistoryIds.value.includes(id)) selectedHistoryIds.value.push(id);
                        });
                    }
                }

                // v3.7.14: 评估历史趋势图
                const _trendChartCache = {};
                function registerTrendChart(el, code, records) {
                    if (!el) return; // dispose
                    if (_trendChartCache[code] === el) return; // same element
                    // dispose old instance if exists
                    Object.keys(_trendChartCache).forEach(key => {
                        if (_trendChartCache[key] && _trendChartCache[key] !== el) {
                            try { _trendChartCache[key].dispose(); } catch (e) { /* ignore */ }
                            delete _trendChartCache[key];
                        }
                    });
                    const sorted = [...records].sort((a, b) => a.evaluate_time.localeCompare(b.evaluate_time));
                    const dates = sorted.map(r => (r.evaluate_time || '').split('T')[0]);
                    const scores = sorted.map(r => r.result?.total_score ?? null);
                    const levels = sorted.map(r => r.result?.level ?? '');
                    // find significant changes (>20 pts between consecutive evals)
                    const markPoints = [];
                    for (let i = 1; i < scores.length; i++) {
                        if (scores[i] != null && scores[i - 1] != null && Math.abs(scores[i] - scores[i - 1]) >= 15) {
                            markPoints.push({ name: '大幅变化', coord: [dates[i], scores[i]], value: (scores[i] - scores[i - 1] > 0 ? '↑' : '↓') + Math.abs(scores[i] - scores[i - 1]), symbol: 'pin', symbolSize: 32, itemStyle: { color: scores[i] - scores[i - 1] > 0 ? '#67c23a' : '#f56c6c' } });
                        }
                    }
                    const chart = echarts.init(el);
                    chart.setOption({
                        tooltip: { trigger: 'axis', formatter: function (params) {
                            const idx = params[0]?.dataIndex;
                            const level = idx != null ? levels[idx] : '';
                            return dates[idx] + '<br/>得分: ' + scores[idx] + (level ? ' (' + level + ')' : '');
                        }},
                        grid: { left: 40, right: 16, top: 16, bottom: 24 },
                        xAxis: { type: 'category', data: dates, axisLabel: { fontSize: 10, rotate: 30 }, boundaryGap: false },
                        yAxis: { type: 'value', min: 0, max: 100, axisLabel: { fontSize: 10 } },
                        series: [{
                            data: scores, type: 'line', smooth: true,
                            lineStyle: { color: '#409EFF', width: 2 },
                            itemStyle: { color: '#409EFF' },
                            areaStyle: { color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{ offset: 0, color: 'rgba(64,158,255,0.3)' }, { offset: 1, color: 'rgba(64,158,255,0.02)' }]) },
                            markPoint: markPoints.length > 0 ? { data: markPoints } : undefined,
                        }],
                    });
                    _trendChartCache[code] = chart;
                }

                async function viewAiResult(item) {
                    // 查看历史评估记录
                    aiResult.value = item;
                    stockKlineLoaded.value = false;
                    if (stockKlineChart) {
                        stockKlineChart.dispose();
                        stockKlineChart = null;
                    }
                    try {
                        const res = await fetch(`/api/calendar/stock/${item.stock_code}?date=${selectedDate.value}`);
                        stockDetail.value = await res.json();
                    } catch (e) {
                        stockDetail.value = {
                            stock: item.stock_code,
                            name: item.stock_name || item.stock_code,
                            total_days: 0,
                            history: []
                        };
                    }
                    stockDetailVisible.value = true;
                    stockDetailTab.value = 'ai';
                    // 弹窗打开后加载K线
                    setTimeout(async () => {
                        await loadStockKline('daily');
                        refreshStockScore();
                    }, 500);
                }

                async function doBatchEvaluate() {
                    if (!batchStocks.value.trim()) {
                        ElementPlus.ElMessage.warning('请输入股票代码');
                        return;
                    }
                    const stockCodes = batchStocks.value.split(/[,，\s]+/).filter(s => s.trim());
                    if (stockCodes.length === 0) return;
                    
                    batchRunning.value = true;
                    batchTotal.value = stockCodes.length;
                    batchCompleted.value = 0;
                    batchCurrent.value = '';
                    batchStatuses.value = {};
                    batchResults.value = {};
                    stockCodes.forEach(c => { batchStatuses.value[c] = 'pending'; batchResults.value[c] = null; });
                    
                    const token = localStorage.getItem('quant_token');
                    // v1.10: 使用后端批量API并发评估
                    try {
                        const res = await fetch('/api/ai/batch-evaluate', {
                            method: 'POST',
                            headers: {'Content-Type': 'application/json', 'Authorization': `Bearer ${token}`},
                            body: JSON.stringify({ stock_codes: stockCodes })
                        });
                        const data = await res.json();
                        if (data.success && data.data) {
                            for (const r of data.data) {
                                batchCompleted.value++;
                                batchCurrent.value = r.stock_code;
                                if (r.success) {
                                    batchStatuses.value[r.stock_code] = 'success';
                                    batchResults.value[r.stock_code] = r;
                                } else {
                                    batchStatuses.value[r.stock_code] = 'error';
                                }
                            }
                        } else {
                            // 降级：单只逐个评估
                            for (const code of stockCodes) {
                                batchCurrent.value = code;
                                batchStatuses.value[code] = 'running';
                                try {
                                    const sr = await fetch('/api/ai/evaluate', {
                                        method: 'POST',
                                        headers: {'Content-Type': 'application/json', 'Authorization': `Bearer ${token}`},
                                        body: JSON.stringify({ stock_code: code.trim(), stock_name: code.trim() })
                                    });
                                    const sd = await sr.json();
                                    if (sd.success) {
                                        batchStatuses.value[code] = 'success';
                                        batchResults.value[code] = sd.data;
                                    } else {
                                        batchStatuses.value[code] = 'error';
                                    }
                                } catch (e) {
                                    batchStatuses.value[code] = 'error';
                                }
                                batchCompleted.value++;
                            }
                        }
                    } catch (e) {
                        // 网络失败：标记全部为错误
                        stockCodes.forEach(c => {
                            batchStatuses.value[c] = 'error';
                            batchCompleted.value++;
                        });
                    }
                    
                    batchCurrent.value = '';
                    await loadAiHistory();
                    
                    const successCount = Object.values(batchStatuses.value).filter(s => s === 'success').length;
                    setTimeout(() => {
                        ElementPlus.ElMessage.success(`评估完成 ${successCount}/${stockCodes.length}`);
                        batchRunning.value = false;
                    }, 500);
                }

                // ===== 分组管理 =====
                const editingGroup = ref(null);
                const menuConfigDialog = ref(false);
                const memberDialog = ref(false);
                const groupEditForm = ref({ name: '', description: '', visible_menus: {}, visible_sub_pages: {} });
                const subPageCache = ref({});  // cache sub-page states when parent is toggled off
                const showAddGroup = ref(false);
                const addGroupForm = ref({ group_id: '', name: '', description: '' });
                const savingGroup = ref(false);
                const groupMembers = ref([]);
                const addMemberUsername = ref('');
                const selectedMemberGroup = ref('');
                const subPageSectionExpanded = ref({});
                
                function toggleSubPageSection(key) {
                    subPageSectionExpanded.value = { ...subPageSectionExpanded.value, [key]: !subPageSectionExpanded.value[key] };
                }
                
                function getGroupMemberCount(gid) {
                    if (!userList.value || !userList.value.length) return 0;
                    return userList.value.filter(u => (u.group || u.role) === gid).length;
                }
                
                function getMenuEnabledCount(g) {
                    const menus = g?.visible_menus || {};
                    return Object.values(menus).filter(Boolean).length;
                }
                
                const groupCount = computed(() => Object.keys(allGroups.value).length);
                
                // ===== 成员管理 =====
                async function openMemberManager(gid) {
                    selectedMemberGroup.value = gid;
                    memberDialog.value = true;
                    await loadGroupMembers(gid);
                }
                
                async function loadGroupMembers(gid) {
                    try {
                        const token = localStorage.getItem('quant_token');
                        const res = await fetch('/api/groups/' + gid + '/members', {
                            headers: { 'Authorization': 'Bearer ' + token }
                        });
                        const data = await res.json();
                        if (data.success) groupMembers.value = data.members || [];
                    } catch(e) { groupMembers.value = []; console.error('[loadGroupMembers]', e); }
                }
                
                async function addMemberToGroup() {
                    if (!addMemberUsername.value || !selectedMemberGroup.value) return;
                    savingGroup.value = true;
                    try {
                        const token = localStorage.getItem('quant_token');
                        const res = await fetch('/api/groups/' + selectedMemberGroup.value + '/members', {
                            method: 'POST',
                            headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + token },
                            body: JSON.stringify({ username: addMemberUsername.value })
                        });
                        const data = await res.json();
                        if (data.success) {
                            await loadGroupMembers(selectedMemberGroup.value);
                            await loadUsers();
                            addMemberUsername.value = '';
                        } else {
                            ElementPlus.ElMessage.error(data.message);
                        }
                    } catch(e) { ElementPlus.ElMessage.error('添加失败'); }
                    finally { savingGroup.value = false; }
                }
                
                async function removeMemberFromGroup(username) {
                    try {
                        const token = localStorage.getItem('quant_token');
                        const res = await fetch('/api/groups/' + selectedMemberGroup.value + '/members/' + username, {
                            method: 'DELETE',
                            headers: { 'Authorization': 'Bearer ' + token }
                        });
                        const data = await res.json();
                        if (data.success) {
                            await loadGroupMembers(selectedMemberGroup.value);
                            await loadUsers();
                        } else {
                            ElementPlus.ElMessage.error(data.message);
                        }
                    } catch(e) { ElementPlus.ElMessage.error('移除失败'); }
                }
                
                const availableUsersForGroup = computed(() => {
                    if (!userList.value) return [];
                    const currentMembers = new Set(groupMembers.value.map(m => m.username));
                    return userList.value.filter(u => 
                        u.username !== 'admin' && u.username !== 'guest' && !currentMembers.has(u.username)
                    );
                });
                
                function onParentToggle(mk) {
                    const val = groupEditForm.value.visible_menus[mk];
                    const menu = allMenuDefs.find(m => m.key === mk);
                    if (!menu) return;
                    if (!val) {
                        // Turning OFF: save current state to cache, set all sub-pages off
                        const cached = {};
                        menu.subPages.forEach(sp => {
                            const fullKey = mk + '.' + sp;
                            cached[sp] = groupEditForm.value.visible_sub_pages[fullKey];
                            groupEditForm.value.visible_sub_pages[fullKey] = false;
                        });
                        subPageCache.value[mk] = cached;
                    } else {
                        // Turning ON: restore from cache, or default all true
                        const cached = subPageCache.value[mk] || {};
                        menu.subPages.forEach(sp => {
                            const fullKey = mk + '.' + sp;
                            groupEditForm.value.visible_sub_pages[fullKey] = cached[sp] !== undefined ? cached[sp] : true;
                        });
                    }
                }
                
                function openMenuConfig(gid) {
                    editingGroup.value = gid;
                    const g = allGroups.value[gid] || {};
                    groupEditForm.value = {
                        name: g.name || gid,
                        description: g.description || '',
                        visible_menus: { ...(g.visible_menus || {}) },
                        visible_sub_pages: { ...(g.visible_sub_pages || {}) }
                    };
                    // Init cache from current state
                    subPageCache.value = {};
                    allMenuDefs.forEach(m => {
                        const cached = {};
                        m.subPages.forEach(sp => {
                            cached[sp] = groupEditForm.value.visible_sub_pages[m.key + '.' + sp];
                        });
                        subPageCache.value[m.key] = cached;
                    });
                    menuConfigDialog.value = true;
                }
                
                async function saveMenuConfig() {
                    savingGroup.value = true;
                    try {
                        const token = localStorage.getItem('quant_token');
                        const res = await fetch('/api/groups/' + editingGroup.value, {
                            method: 'PUT',
                            headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + token },
                            body: JSON.stringify(groupEditForm.value)
                        });
                        const data = await res.json();
                        if (data.success) {
                            menuConfigDialog.value = false;
                            editingGroup.value = null;
                            await loadAllGroups();
                            await loadGroupConfig();
                        } else {
                            ElementPlus.ElMessage.error(data.message || '保存失败');
                        }
                    } catch(e) { ElementPlus.ElMessage.error('保存失败'); }
                    finally { savingGroup.value = false; }
                }
                
                async function deleteGroupConfig(gid) {
                    try {
                        if (!confirm('确定删除分组「' + (allGroups.value[gid]?.name || gid) + '」吗？')) return;
                        const token = localStorage.getItem('quant_token');
                        const res = await fetch('/api/groups/' + gid, {
                            method: 'DELETE',
                            headers: { 'Authorization': 'Bearer ' + token }
                        });
                        const data = await res.json();
                        if (data.success) {
                            await loadAllGroups();
                        } else {
                            ElementPlus.ElMessage.error(data.message);
                        }
                    } catch(e) { ElementPlus.ElMessage.error('删除失败'); }
                }
                
                async function createGroup() {
                    if (!addGroupForm.value.group_id) return;
                    savingGroup.value = true;
                    try {
                        const token = localStorage.getItem('quant_token');
                        const res = await fetch('/api/groups', {
                            method: 'POST',
                            headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + token },
                            body: JSON.stringify(addGroupForm.value)
                        });
                        const data = await res.json();
                        if (data.success) {
                            showAddGroup.value = false;
                            addGroupForm.value = { group_id: '', name: '', description: '' };
                            await loadAllGroups();
                        } else {
                            ElementPlus.ElMessage.error(data.message);
                        }
                    } catch(e) { ElementPlus.ElMessage.error('创建失败'); }
                    finally { savingGroup.value = false; }
                }

                // ===== AI配置保存（带后端同步+错误处理）=====
                const configSaving = ref(false);
                const configChanged = ref(false);
                // v1.3.0: 全局配置变更跟踪
                const globalConfigDirty = ref(false);
                const lastSavedTime = ref(null);
                const feishuConfigOriginal = ref(null);
                const aiConfigOriginal = ref(null);
                const tushareConfigOriginal = ref(null);
                // v1.3.0: Tushare 配置
                const tushareConfig = ref({ token: '', endpoint: 'http://api.tushare.pro', timeout: 30 });
                const tushareStatus = ref('disconnected');
                // v1.8.0: 多数据源配置
                const datasourceConfig = ref({
                    sxsc_tushare: { enabled: true, token: '', timeout: 30 },
                    tushare: { enabled: true, token: '', endpoint: 'http://api.tushare.pro', timeout: 30 },
                    akshare: { enabled: true }
                });
                const datasourceStatus = ref({
                    sxsc_tushare: 'unknown',
                    tushare: 'unknown',
                    akshare: 'unknown'
                });
                const syncingData = ref(false);
                const stockCount = ref(null);
                const tradeDateCount = ref(null);
                const aiStatus = ref('pending');
                const appVersion = ref('...'); // v1.12: 从 /api/health 动态获取
                const showImportDialog = ref(false);
                const rateLimitConfig = ref({ api_limit: 600 });
                const rateLimitDirty = ref(false);
                const rateLimitSaving = ref(false);
                async function loadRateLimit() {
                    try {
                        const res = await fetch('/api/system/rate-limit');
                        const data = await res.json();
                        if (data.success) rateLimitConfig.value = data.data;
                    } catch (e) { console.warn('loadRateLimit failed:', e); }
                }
                async function saveRateLimit() {
                    rateLimitSaving.value = true;
                    try {
                        const token = localStorage.getItem('quant_token');
                        const headers = token ? { 'Authorization': `Bearer ${token}`, 'Content-Type': 'application/json' } : {};
                        const res = await fetch('/api/system/rate-limit', {
                            method: 'POST', headers,
                            body: JSON.stringify(rateLimitConfig.value)
                        });
                        const data = await res.json();
                        if (data.success) {
                            rateLimitDirty.value = false;
                            ElementPlus.ElMessage.success('限流配置已更新');
                        } else {
                            ElementPlus.ElMessage.error(data.message || '保存失败');
                        }
                    } catch (e) {
                        ElementPlus.ElMessage.error('保存失败');
                    } finally {
                        rateLimitSaving.value = false;
                    }
                }
                
                // 监听配置变化
                watch(() => [aiConfig.value.provider, aiConfig.value.apiKey, aiConfig.value.endpoint, aiConfig.value.model], () => {
                    configChanged.value = true;
                }, { deep: true });

                async function saveAiConfig() {
                    configSaving.value = true;
                    try {
                        // 1. 本地存储（立即生效）
                        localStorage.setItem('quant_ai_config', JSON.stringify(aiConfig.value));
                        
                        // 2. 后端同步
                        const token = localStorage.getItem('quant_token');
                        const headers = token ? { 'Authorization': `Bearer ${token}`, 'Content-Type': 'application/json' } : { 'Content-Type': 'application/json' };
                        const res = await fetch('/api/ai/config', {
                            method: 'POST',
                            headers,
                            body: JSON.stringify(aiConfig.value)
                        });
                        const data = await res.json();
                        
                        if (data.success) {
                            configChanged.value = false;
                            ElementPlus.ElMessage.success('AI配置已保存');
                        } else {
                            ElementPlus.ElMessage.warning('已保存到本地，同步失败');
                        }
                    } catch (e) {
                        localStorage.setItem('quant_ai_config', JSON.stringify(aiConfig.value));
                        ElementPlus.ElMessage.warning('已保存到本地（离线）');
                        console.error('保存配置失败:', e);
                    } finally {
                        configSaving.value = false;
                    }
                }

                async function testAiApi() {
                    aiLoading.value = true;
                    try {
                        const token = localStorage.getItem('quant_token');
                        const headers = token ? { 'Authorization': `Bearer ${token}` } : {};
                        const res = await fetch('/api/ai/test', { headers });
                        const data = await res.json();
                        if (data.success) {
                            ElementPlus.ElMessage.success(data.message || 'API连接正常');
                        } else {
                            ElementPlus.ElMessage.error(data.message || '测试失败');
                        }
                    } catch (e) {
                        ElementPlus.ElMessage.error('连接失败');
                    } finally {
                        aiLoading.value = false;
                    }
                }

                // ===== 配置导出 =====
                function exportConfig() {
                    const allConfig = {
                        ai: aiConfig.value,
                        feishu: feishuConfig.value,
                        theme: currentTheme.value,
                        export_time: new Date().toISOString()
                    };
                    const blob = new Blob([JSON.stringify(allConfig, null, 2)], { type: 'application/json' });
                    const url = URL.createObjectURL(blob);
                    const a = document.createElement('a');
                    a.href = url;
                    a.download = `quant-calendar-config-${new Date().toISOString().slice(0,10)}.json`;
                    a.click();
                    URL.revokeObjectURL(url);
                    ElementPlus.ElMessage.success('配置已导出');
                }

                // ===== 配置导入 =====
                function importConfig(event) {
                    const file = event.target.files[0];
                    if (!file) return;
                    const reader = new FileReader();
                    reader.onload = async (e) => {
                        try {
                            const config = JSON.parse(e.target.result);
                            if (config.ai) {
                                aiConfig.value = { ...aiConfig.value, ...config.ai };
                                await saveAiConfig();
                            }
                            if (config.feishu) {
                                Object.assign(feishuConfig.value, config.feishu);
                                // 保存到后端
                                await fetch('/api/feishu/config', {
                                    method: 'POST',
                                    headers: { 'Content-Type': 'application/json' },
                                    body: JSON.stringify(config.feishu)
                                });
                            }
                            if (config.theme) {
                                currentTheme.value = config.theme;
                                changeTheme(config.theme);
                            }
                            ElementPlus.ElMessage.success('配置已导入');
                        } catch (err) {
                            ElementPlus.ElMessage.error('导入失败：格式错误');
                        }
                    };
                    reader.readAsText(file);
                    event.target.value = '';
                }

                // ===== 用户管理 (v1.9.2: 用户组支持) =====
                const allGroups = ref({});
                async function loadAllGroups() {
                    try {
                        const token = localStorage.getItem('quant_token');
                        if (!token) return;
                        const res = await fetch('/api/groups', { headers: { 'Authorization': 'Bearer ' + token } });
                        if (res.ok) {
                            const data = await res.json();
                            allGroups.value = data.groups || {};
                        }
                    } catch(e) { console.warn('loadAllGroups:', e); }
                }
                
                function getGroupName(groupId) {
                    return allGroups.value[groupId]?.name || groupId || '--';
                }
                
                async function loadUsers() {
                    try {
                        const token = localStorage.getItem('quant_token');
                        if (!token) { userList.value = []; return; }
                        const headers = { 'Authorization': `Bearer ${token}` };
                        const res = await fetch('/api/users', { headers });
                        if (res.status === 401) {
                            console.warn('[loadUsers] 401, clearing session');
                            localStorage.removeItem('quant_user');
                            localStorage.removeItem('quant_token');
                            currentUser.value = null;
                            return;
                        }
                        const data = await res.json();
                        userList.value = data.users || [];
                    } catch (e) { userList.value = []; console.error('[loadUsers] error:', e); }
                }

                function editUser(user) {
                    editingUser.value = user;
                    userForm.value = {
                        username: user.username,
                        password: '',
                        role: user.role,
                        theme: user.theme || 'tech-blue',
                        group: user.group || user.role
                    };
                    showAddUser.value = true;
                }

                async function saveUser() {
                    if (!userForm.value.username) return;
                    savingUser.value = true;
                    try {
                        const token = localStorage.getItem('quant_token');
                        const method = editingUser.value ? 'PUT' : 'POST';
                        const url = editingUser.value
                            ? `/api/users/${userForm.value.username}`
                            : '/api/users';
                        const res = await fetch(url, {
                            method,
                            headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` },
                            body: JSON.stringify(userForm.value)
                        });
                        const data = await res.json();
                        if (data.success) {
                            ElementPlus.ElMessage.success('保存成功');
                            // 如果编辑的是当前用户且主题变更，同步更新本地状态
                            if (currentUser.value && userForm.value.username === currentUser.value.username) {
                                const newTheme = userForm.value.theme;
                                if (newTheme && newTheme !== currentUser.value.theme) {
                                    currentUser.value.theme = newTheme;
                                    localStorage.setItem('quant_user', JSON.stringify(currentUser.value));
                                    applyTheme(newTheme);
                                }
                            }
                            showAddUser.value = false;
                            editingUser.value = null;
                            await loadUsers();
                        } else {
                            ElementPlus.ElMessage.error(data.message);
                        }
                    } catch (e) {
                        ElementPlus.ElMessage.error('操作失败');
                    } finally {
                        savingUser.value = false;
                    }
                }

                async function deleteUser(username) {
                    try {
                        await ElementPlus.ElMessageBox.confirm('确定删除该用户?', '提示', {
                            confirmButtonText: '确定',
                            cancelButtonText: '取消',
                            type: 'warning'
                        });
                        const token = localStorage.getItem('quant_token');
                        const res = await fetch(`/api/users/${username}`, {
                            method: 'DELETE',
                            headers: { 'Authorization': `Bearer ${token}` }
                        });
                        const data = await res.json();
                        if (data.success) {
                            ElementPlus.ElMessage.success('删除成功');
                            await loadUsers();
                        }
                    } catch(e) { console.error('[deleteUser]', e); }
                }

                async function toggleUserEnabled(user) {
                    try {
                        const token = localStorage.getItem('quant_token');
                        const res = await fetch(`/api/users/${user.username}/toggle-enabled`, {
                            method: 'POST',
                            headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` },
                            body: JSON.stringify({ enabled: user.enabled })
                        });
                        const data = await res.json();
                        if (data.success) {
                            ElementPlus.ElMessage.success('状态已更新');
                        } else {
                            ElementPlus.ElMessage.error(data.message || '操作失败');
                        }
                    } catch (e) {
                        ElementPlus.ElMessage.error('操作失败');
                    }
                }

                async function resetUserPassword(user) {
                    try {
                        const { value: newPassword } = await ElementPlus.ElMessageBox.prompt(
                            `请输入用户 "${user.username}" 的新密码`,
                            '重置密码',
                            { confirmButtonText: '确定', cancelButtonText: '取消', inputType: 'password' }
                        );
                        if (newPassword) {
                            const token = localStorage.getItem('quant_token');
                            const res = await fetch(`/api/users/${user.username}/reset-password`, {
                                method: 'POST',
                                headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` },
                                body: JSON.stringify({ new_password: newPassword })
                            });
                            const data = await res.json();
                            if (data.success) {
                                ElementPlus.ElMessage.success('密码已重置');
                            } else {
                                ElementPlus.ElMessage.error(data.message || '重置失败');
                            }
                        }
                    } catch (e) { /* 用户取消 */ }
                }

                // ===== 系统配置页函数 =====
                async function saveAllConfig() {
                    configSaving.value = true;
                    const token = localStorage.getItem('quant_token');
                    const headers = token ? { 'Authorization': `Bearer ${token}` } : {};

                    // v1.12: 并行保存，容错不中断
                    const saves = [
                        fetch('/api/user/config', {
                            method: 'POST',
                            headers: { 'Content-Type': 'application/json', ...headers },
                            body: JSON.stringify({ config: {
                                tushare: tushareConfig.value,
                                feishu: feishuConfig.value,
                                ai: aiConfig.value,
                                rate_limit: rateLimitConfig.value,
                                auto_evaluate: autoEvaluateConfig.value,
                                theme: currentTheme.value,
                                icon_system: iconSystem.value,
                                research_menu_enabled: researchMenuEnabled.value
                            }})
                        }).then(r => ['userConfig', r.ok]),
                        fetch('/api/market/tushare/config', {
                            method: 'POST',
                            headers: { 'Content-Type': 'application/json', ...headers },
                            body: JSON.stringify(tushareConfig.value)
                        }).then(r => ['tushare', r.ok]),
                        fetch('/api/market/datasource/config', {
                            method: 'POST',
                            headers: { 'Content-Type': 'application/json', ...headers },
                            body: JSON.stringify({ sources: datasourceConfig.value })
                        }).then(r => ['datasource', r.ok]),
                        fetch('/api/feishu/config', {
                            method: 'POST',
                            headers: { 'Content-Type': 'application/json', ...headers },
                            body: JSON.stringify(feishuConfig.value)
                        }).then(r => ['feishu', r.ok]),
                        fetch('/api/ai/config', {
                            method: 'POST',
                            headers: { 'Content-Type': 'application/json', ...headers },
                            body: JSON.stringify(aiConfig.value)
                        }).then(r => ['ai', r.ok]),
                        fetch('/api/system/rate-limit', {
                            method: 'POST',
                            headers: { 'Content-Type': 'application/json', ...headers },
                            body: JSON.stringify(rateLimitConfig.value)
                        }).then(r => ['rateLimit', r.ok]),
                        saveAiModels().then(() => ['aiModels', true], () => ['aiModels', false])
                    ];

                    const results = await Promise.allSettled(saves);
                    const ok = results.filter(r => r.status === 'fulfilled' && r.value[1]).length;
                    const fail = results.filter(r => r.status === 'rejected' || (r.status === 'fulfilled' && !r.value[1])).length;

                    rateLimitDirty.value = false;
                    // 策略筛选保存到 localStorage
                    localStorage.setItem('quant_strategy_filter_selected', JSON.stringify(strategyFilter.value.selected));
                    localStorage.setItem('quant_strategy_filter_mode', strategyFilter.value.mode);
                    // 主题同步到用户后端
                    if (currentUser.value) {
                        fetch(`/api/users/${currentUser.value.username}`, {
                            method: 'PUT',
                            headers: { 'Content-Type': 'application/json', ...headers },
                            body: JSON.stringify({ theme: currentTheme.value })
                        }).catch(() => {});
                    }

                    globalConfigDirty.value = false;
                    lastSavedTime.value = new Date().toLocaleString('zh-CN');
                    configSaving.value = false;
                    // v1.12: 静默保存（仅在状态栏体现，不弹 toast）
                    if (fail > 0) {
                        console.error(`[saveAllConfig] ${ok}/${ok+fail} 项保存成功，${fail} 项失败`);
                    }
                }
                async function resetAllConfig() {
                    // v1.12: 真正从后端重新加载配置
                    try {
                        const token = localStorage.getItem('quant_token');
                        const headers = token ? { 'Authorization': `Bearer ${token}` } : {};
                        const res = await fetch('/api/user/config', { headers });
                        const data = await res.json();
                        if (data.success && data.config) {
                            const c = data.config;
                            if (c.tushare) tushareConfig.value = { ...tushareConfig.value, ...c.tushare };
                            if (c.feishu) feishuConfig.value = { ...feishuConfig.value, ...c.feishu };
                            if (c.ai) aiConfig.value = { ...aiConfig.value, ...c.ai };
                            if (c.rate_limit) rateLimitConfig.value = { ...rateLimitConfig.value, ...c.rate_limit };
                            if (c.auto_evaluate) autoEvaluateConfig.value = { ...autoEvaluateConfig.value, ...c.auto_evaluate };
                            // Only apply config theme if user hasn't manually selected one
                            if (c.theme && !localStorage.getItem('quant_theme')) applyTheme(c.theme);
                            if (c.icon_system) { iconSystem.value = c.icon_system; localStorage.setItem('icon_system', c.icon_system); }
                            if (c.research_menu_enabled !== undefined) { researchMenuEnabled.value = c.research_menu_enabled; localStorage.setItem('research_menu_enabled', c.research_menu_enabled ? '1' : '0'); }
                        }
                        globalConfigDirty.value = false;
                        rateLimitDirty.value = false;
                    } catch (e) {
                        console.error('[resetAllConfig] 重新加载配置失败:', e);
                        globalConfigDirty.value = false;
                    }
                }
                async function testTushareConnection() {
                    tushareStatus.value = 'testing';
                    try {
                        const token = localStorage.getItem('quant_token');
                        const headers = token ? { 'Authorization': `Bearer ${token}` } : {};
                        const res = await fetch('/api/market/tushare/test', { method: 'POST', headers });
                        const data = await res.json();
                        tushareStatus.value = data.success ? 'connected' : 'disconnected';
                        if (data.success) {
                            const detail = data.data_count ? ` (获取到 ${data.data_count} 条数据)` : '';
                            ElementPlus.ElMessage.success('Tushare 连接成功' + detail);
                        } else {
                            ElementPlus.ElMessage.error(data.message || '连接失败');
                        }
                    } catch (e) {
                        tushareStatus.value = 'disconnected';
                        ElementPlus.ElMessage.error('连接失败');
                    }
                }
                // 静默检测 Tushare 连接（不弹提示）
                async function checkTushareConnection() {
                    try {
                        const token = localStorage.getItem('quant_token');
                        const headers = token ? { 'Authorization': `Bearer ${token}` } : {};
                        const res = await fetch('/api/market/tushare/test', { method: 'POST', headers });
                        const data = await res.json();
                        tushareStatus.value = data.success ? 'connected' : 'disconnected';
                    } catch (e) {
                        tushareStatus.value = 'disconnected';
                    }
                }
                async function syncStockData() {
                    syncingData.value = true;
                    try {
                        const token = localStorage.getItem('quant_token');
                        const headers = token ? { 'Authorization': `Bearer ${token}`, 'Content-Type': 'application/json' } : { 'Content-Type': 'application/json' };
                        const res = await fetch('/api/market/tushare/sync', { method: 'POST', headers });
                        const data = await res.json();
                        if (data.success) {
                            stockCount.value = parseInt(data.message.match(/\d+/)?.[0] || '0');
                            ElementPlus.ElMessage.success(data.message);
                        } else {
                            ElementPlus.ElMessage.error(data.message || '同步失败');
                        }
                    } catch (e) {
                        ElementPlus.ElMessage.error('同步失败');
                    } finally {
                        syncingData.value = false;
                    }
                }
                async function loadTushareConfig() {
                    try {
                        const token = localStorage.getItem('quant_token');
                        const headers = token ? { 'Authorization': `Bearer ${token}` } : {};
                        const res = await fetch('/api/market/tushare/config', { headers });
                        const data = await res.json();
                        if (data.success && data.config) {
                            tushareConfig.value = { ...tushareConfig.value, ...data.config };
                        }
                    } catch (e) { console.warn('loadTushareConfig failed:', e); }
                }
                // v1.8.0: 多数据源配置
                async function loadDatasourceConfig() {
                    try {
                        const token = localStorage.getItem('quant_token');
                        const headers = token ? { 'Authorization': `Bearer ${token}` } : {};
                        const res = await fetch('/api/market/datasource/config', { headers });
                        const data = await res.json();
                        if (data.success && data.config && data.config.sources) {
                            const srcs = data.config.sources;
                            datasourceConfig.value = {
                                sxsc_tushare: { ...datasourceConfig.value.sxsc_tushare, ...(srcs.sxsc_tushare || {}) },
                                tushare: { ...datasourceConfig.value.tushare, ...(srcs.tushare || {}) },
                                akshare: { ...datasourceConfig.value.akshare, ...(srcs.akshare || {}) }
                            };
                        }
                        // 同时获取状态
                        try {
                            const sr = await fetch('/api/market/datasource/status');
                            const sd = await sr.json();
                            if (sd.success && sd.status) {
                                for (const [k, v] of Object.entries(sd.status)) {
                                    datasourceStatus.value[k] = v.connected ? 'connected' : 'disconnected';
                                }
                            }
                        } catch (e2) {}
                    } catch (e) { console.warn('loadDatasourceConfig failed:', e); }
                }
                async function saveDatasourceConfig() {
                    try {
                        const token = localStorage.getItem('quant_token');
                        const headers = token
                            ? { 'Authorization': `Bearer ${token}`, 'Content-Type': 'application/json' }
                            : { 'Content-Type': 'application/json' };
                        await fetch('/api/market/datasource/config', {
                            method: 'POST',
                            headers,
                            body: JSON.stringify({ sources: datasourceConfig.value })
                        });
                        globalConfigDirty.value = true;
                    } catch (e) { console.warn('saveDatasourceConfig failed:', e); }
                }
                async function testDatasource(source) {
                    datasourceStatus.value[source] = 'testing';
                    try {
                        const token = localStorage.getItem('quant_token');
                        const headers = token ? { 'Authorization': `Bearer ${token}` } : {};
                        const res = await fetch(`/api/market/datasource/test/${source}`, { method: 'POST', headers });
                        const data = await res.json();
                        datasourceStatus.value[source] = data.success ? 'connected' : 'disconnected';
                        if (data.success) {
                            ElementPlus.ElMessage.success(`${source} 连接成功`);
                        } else {
                            ElementPlus.ElMessage.error(`${source}: ${data.message}`);
                        }
                    } catch (e) {
                        datasourceStatus.value[source] = 'disconnected';
                        ElementPlus.ElMessage.error(`${source} 连接失败`);
                    }
                }
                async function loadFeishuConfig() {
                    try {
                        const token = localStorage.getItem('quant_token');
                        const headers = token ? { 'Authorization': `Bearer ${token}` } : {};
                        const res = await fetch('/api/feishu/config', { headers });
                        const data = await res.json();
                        if (data && typeof data === 'object') {
                            feishuConfig.value = { ...feishuConfig.value, ...data };
                            feishuConfigOriginal.value = JSON.parse(JSON.stringify(feishuConfig.value));
                        }
                    } catch (e) { console.warn('loadFeishuConfig failed:', e); }
                }
                async function loadAiConfig() {
                    try {
                        const token = localStorage.getItem('quant_token');
                        const headers = token ? { 'Authorization': `Bearer ${token}` } : {};
                        const res = await fetch('/api/ai/config', { headers });
                        const data = await res.json();
                        if (data.success && data.data) {
                            aiConfig.value = { ...aiConfig.value, ...data.data };
                        } else {
                            const savedAi = localStorage.getItem('quant_ai_config');
                            if (savedAi) aiConfig.value = JSON.parse(savedAi);
                        }
                    } catch (e) {
                        const savedAi = localStorage.getItem('quant_ai_config');
                        if (savedAi) aiConfig.value = JSON.parse(savedAi);
                    }
                }
                // v1.5.7: 从用户专属端点加载所有配置
                async function loadUserConfig() {
                    try {
                        const token = localStorage.getItem('quant_token');
                        const headers = token ? { 'Authorization': `Bearer ${token}` } : {};
                        const res = await fetch('/api/user/config', { headers });
                        const data = await res.json();
                        if (data.success && data.config) {
                            const c = data.config;
                            if (c.tushare) tushareConfig.value = { ...tushareConfig.value, ...c.tushare };
                            if (c.datasource && c.datasource.sources) {
                                datasourceConfig.value = {
                                    sxsc_tushare: { ...datasourceConfig.value.sxsc_tushare, ...(c.datasource.sources.sxsc_tushare || {}) },
                                    tushare: { ...datasourceConfig.value.tushare, ...(c.datasource.sources.tushare || {}) },
                                    akshare: { ...datasourceConfig.value.akshare, ...(c.datasource.sources.akshare || {}) }
                                };
                            }
                            if (c.feishu) {
                                feishuConfig.value = { ...feishuConfig.value, ...c.feishu };
                                feishuConfigOriginal.value = JSON.parse(JSON.stringify(feishuConfig.value));
                            }
                            if (c.ai) aiConfig.value = { ...aiConfig.value, ...c.ai };
                            if (c.rate_limit) rateLimitConfig.value = { ...rateLimitConfig.value, ...c.rate_limit };
                            if (c.theme && !localStorage.getItem('quant_theme')) applyTheme(c.theme);
                            if (c.auto_evaluate) autoEvaluateConfig.value = { ...autoEvaluateConfig.value, ...c.auto_evaluate };
                            if (c.icon_system) { iconSystem.value = c.icon_system; localStorage.setItem('icon_system', c.icon_system); }
                            if (c.research_menu_enabled !== undefined) { researchMenuEnabled.value = c.research_menu_enabled; localStorage.setItem('research_menu_enabled', c.research_menu_enabled ? '1' : '0'); }
                        }
                    } catch (e) {
                        console.warn('加载用户配置失败，使用本地缓存', e);
                    }
                }

                // v1.3.0: 加载系统状态
                async function loadSystemStatus() {
                    try {
                        const token = localStorage.getItem('quant_token');
                        const headers = token ? { 'Authorization': `Bearer ${token}` } : {};
                        // 股票数据数量（从概览接口获取）
                        const infoRes = await fetch('/api/dashboard');
                        const infoData = await infoRes.json();
                        const dashInfo = infoData.success ? infoData.data : infoData;
                        stockCount.value = dashInfo?.stats?.total_stocks_covered || null;
                        // 交易日数量
                        const datesRes = await fetch('/api/dates');
                        const datesData = await datesRes.json();
                        tradeDateCount.value = datesData?.data?.total || datesData?.data?.dates?.length || null;
                        // AI状态
                        const aiRes = await fetch('/api/ai/history', { headers });
                        const aiData = await aiRes.json();
                        aiStatus.value = 'ok';
                    } catch (e) {
                        aiStatus.value = 'pending';
                    }
                }
                async function loadDashboardData() {
                    try {
                        const res = await fetch('/api/dashboard');
                        const dashResp = await res.json();
                        dashboardData.value = dashResp.success ? dashResp.data : dashResp;
                        lastRefreshTime.value = Date.now();
                    } catch (e) {
                        console.error('加载总览数据失败', e);
                    }
                }

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
                        await loadDashboardData();
                        // 启动5分钟静默轮询
                        strategyPollTimer = setInterval(() => {
                            loadDashboardData().catch(() => {});
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
                                    await withTimeout(loadDashboardData(), 2000, 'dashboard');
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
