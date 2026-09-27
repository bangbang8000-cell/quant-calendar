// 6.3.0 (T-6.3.0.10): App 逻辑层 — 页面运行时域（全局切页 / 页面切换 watch / 初始化与卸载接线）
// 自 frontend/js/app-logic.js 按域逐字符切出（保留原缩进）；装配见 app-logic.js 的 create 调用
// ctx 依赖: watch/onMounted/onUnmounted + 页面与各域加载入口 + 生命周期装配
(function () {
  window.__quantAppLogic = window.__quantAppLogic || {};
  window.__quantAppLogic.runtime = {
    create: function (ctx) {
      const { watch, onMounted, onUnmounted, lazyTick, currentPage, currentSubPage, hapticFeedback,
        allMenuDefs, saveSessionState, _onTabKeydown, handleGlobalKeydown, runOnMounted,
        startAutoRefresh, loadMerrillTimeline, cancelPoolSignals, loadDashboardCached,
        selectedDate, loadConsensusData, loadStrategyRecommendations, loadAiUsage,
        loadAiHistory, strategyFilterCounts, consensus, currentUser, loadUsers,
        loadFeishuConfig, loadTushareConfig, loadSystemStatus, loadAiConfig,
        loadRateLimit, checkTushareConnection } = ctx;
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
                    // V6.9.4 (FIX): 组件补注册后 tick 强制 pageComp 重算 —
                    // 启动恢复/hashchange 同页赋值不触发响应, 需依赖 lazyTick 让 <component :is> 重新解析到新注册组件
                    if (lazyTick) lazyTick.value++;
                    currentPage.value = page;
                    if (sub) currentSubPage.value = sub;
                };

                // ===== 监听页面切换（护栏: 页面切换 watch 全仓唯一）=====
                // v1.11: 策略总览定时刷新（每5分钟）
                let strategyPollTimer;
                watch(currentPage, async (page) => {
                    hapticFeedback('light');
                    saveSessionState();
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
                    window.removeEventListener('keydown', _onTabKeydown);
                });
    },
  };
})();
