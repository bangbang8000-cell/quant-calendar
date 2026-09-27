// 6.3.0 (T-6.3.0.10): App 逻辑层 — 详情/K线域（K线状态与编排 / 健康指标 / 外部股票目标 / 档位色映射）
// 自 frontend/js/app-logic.js 按域逐字符切出（保留原缩进）；装配见 app-logic.js 的 create 调用
// ctx 依赖: ref/computed/nextTick/stockDetail*/getIsMobile/getIndexDetail/getIndexDetailVisible/getMarkKlineLoaded/getAiResult/getLoadLastEvaluation/getSelectedDateRef/getRefreshStockScore/getAnimateScoreEntrance
(function () {
  window.__quantAppLogic = window.__quantAppLogic || {};
  window.__quantAppLogic.detail = {
    create: function (ctx) {
      const { ref, computed, nextTick, stockDetail, stockDetailTab, stockDetailVisible,
        stockDetailLoading, rememberDialogTrigger, getIsMobile, getIndexDetail, getIndexDetailVisible,
        getMarkKlineLoaded, getAiResult, getLoadLastEvaluation, getSelectedDateRef,
        getRefreshStockScore, getAnimateScoreEntrance } = ctx;
                // ===== v3.16 (16.4): K线渲染状态与编排（护栏片段保留: onLegend 回调接线）=====
                // V5.4.1 (用户要求): 分钟级K线默认隐藏 — kline_show_minutes 偏好控制
                // (hide/show), 系统设置可开启; 后端分钟能力保留 (MINUTE_PERIODS/stk_mins 可用)。
                const klineShowMinutes = ref((function () {
                    try {
                        const __p = (window.__quantModules && window.__quantModules.preferences)
                            ? window.__quantModules.preferences.getLocal() : {};
                        return __p.kline_show_minutes === 'show';
                    } catch (e) { return false; }
                })());
                function toggleKlineShowMinutes(v) {
                    klineShowMinutes.value = !!v;
                    try {
                        if (window.__quantModules && window.__quantModules.preferences) {
                            window.__quantModules.preferences.setPreference('kline_show_minutes', v ? 'show' : 'hide');
                        }
                    } catch (e) { /* 偏好持久化不可用则仅本会话生效 */ }
                }
                const klinePeriods = computed(() => {
                    const base = [
                        {label: '日线', value: 'daily'},
                        {label: '周线', value: 'weekly'},
                        {label: '月线', value: 'monthly'},
                        {label: '季线', value: 'quarterly'},
                        {label: '年线', value: 'yearly'}
                    ];
                    if (!klineShowMinutes.value) return base;
                    return [
                        {label: '60分钟', value: '60min'},
                        {label: '30分钟', value: '30min'},
                        {label: '15分钟', value: '15min'},
                        ...base
                    ];
                });
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
                // V5.4.1 (R1): 分钟数据降级日线提示 (degraded_from)
                const klineDegradeNote = ref('');
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
                        // V5.4.1 (R1): 分钟数据降级日线 → 展示提示 (degraded_from)
                        klineDegradeNote.value = data.degraded_from
                            ? ('分钟数据(' + data.degraded_from + ')暂不可用, 已降级展示日线') : '';
                        getMarkKlineLoaded()(stockDetail.value.stock);
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
                            isMobile: getIsMobile().value,
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
                            klineDegradeNote.value = '';
                            // V4.2 (FR-4.2.6): 失败态显示原因, 支持重试
                            ElementPlus.ElMessage.error('K线加载失败: ' + (e && e.message ? e.message : '数据源不可达，请重试'));
                        }
                        return false;
                    } finally {
                        klineLoading.value = false;
                    }
                }
                async function loadIndexKline(period) {
                    if (!getIndexDetail().value) return;
                    indexKlineLoading.value = true;
                    currentKlinePeriod.value = period;
                    try {
                        const res = await fetch(`/api/market/kline/${getIndexDetail().value.code}?period=${period}&limit=60`);
                        const data = await res.json();
                        if (!data.success || !data.data) throw new Error(data.message || '数据获取失败');
                        indexKlineLoaded.value = true;
                        await nextTick();
                        // v3.16 (16.4): 实例生命周期/图例联动/主题重绘缓存下沉 charts.js
                        window.__quantModules.charts.renderKlineTo('indexKlineChart', data.data, period, true, {
                            isMobile: getIsMobile().value,
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
                    const chart = (stockDetailVisible.value ? window.__quantModules.charts.getKlineChart('stockKlineChart') : null) || (getIndexDetailVisible().value ? window.__quantModules.charts.getKlineChart('indexKlineChart') : null);
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

                // ===== 外部显式股票目标 (全局搜索直开个股) =====
                // 页面「双栏自动打开首条」watch 据此抑制覆盖: 搜索目标未决时不自动开首条,
                // 正展示外部目标时不回退首条 (搜索股未必在当日股票池, 否则会被首条覆盖)
                let _externalStock = null;  // { code, ts }
                function markExternalStock(code) {
                    _externalStock = { code: code, ts: Date.now() };
                }
                function externalStockActive(code) {
                    return !!(_externalStock && (Date.now() - _externalStock.ts) < 4000
                        && (code == null || _externalStock.code === code));
                }

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
                    getAiResult().value = null;
                    currentKlinePeriod.value = 'daily';
                    stockKlineLoaded.value = false;
                    stockDetailTab.value = 'kline';
                    stockDetail.value = null;
                    stockDetailLoading.value = true;
                    // 先销毁旧图表（实例生命周期下沉 charts.js）
                    window.__quantModules.charts.disposeKline('stockKlineChart');
                    stockDetailVisible.value = true;
                    nextTick(() => getAnimateScoreEntrance()());
                    try {
                        const res = await fetch(`/api/calendar/stock/${stockCode}?date=${getSelectedDateRef().value}`);
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
                        getRefreshStockScore()();
                    }, 500);
                    getLoadLastEvaluation()(stockCode);
                }
                // v3.16 (16.6): 详情弹窗关闭后焦点归还触发器（watch 注册已下沉 js/app-logic/watch.js）

                // ===== V5.7.2 (UX-09): AI 评估档位 → 语义色 token 映射 (替代服务端 level_color hex 内联) =====
                const LEVEL_COLOR_MAP = {
                  // V5.31: 档位文字色改用语义「文字色」令牌 (原 --el-warning #f59e0b 在浅底仅 2.07:1)
                  '强烈推荐': 'var(--danger-text)', '推荐': 'var(--success-text)',
                  '谨慎推荐': 'var(--warning-text)', '中性': 'var(--info-text)',
                  '观望': 'var(--text-tertiary)', '买入': 'var(--success-text)',
                  '持有': 'var(--warning-text)', '减仓': 'var(--danger-text)',
                  '卖出': 'var(--danger-text)',
                };
                const LEVEL_BG_MAP = {
                  '强烈推荐': 'var(--badge-danger-bg)', '推荐': 'var(--badge-success-bg)',
                  '谨慎推荐': 'var(--badge-warning-bg)', '中性': 'var(--badge-info-bg)',
                  '观望': 'var(--bg-hover)', '买入': 'var(--badge-success-bg)',
                  '持有': 'var(--badge-warning-bg)', '减仓': 'var(--badge-danger-bg)',
                  '卖出': 'var(--badge-danger-bg)',
                };
                function levelColor(level) { return LEVEL_COLOR_MAP[level] || 'var(--text-tertiary)'; }
                function levelBg(level) { return LEVEL_BG_MAP[level] || 'var(--bg-hover)'; }

return {
        klineShowMinutes, toggleKlineShowMinutes, klinePeriods, currentKlinePeriod,
        klineLoading, klineDegradeNote, indexKlineLoading, stockKlineLoaded,
        klineMaVisible, MA_LINES, indexKlineLoaded,
        loadStockKline, loadIndexKline, switchKlinePeriod, switchIndexKlinePeriod,
        toggleKlineMa, resetKlineMaVisible, loadIndexKlineWithPeriod,
        loadHealthMetrics, markExternalStock, externalStockActive,
        showStockDetail, levelColor, levelBg,
      };
    },
  };
})();
