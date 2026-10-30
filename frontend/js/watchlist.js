// quant-calendar: 自选/评估历史域模块 (v3.11 / FR-3.11.2)
// 从 app-logic.js 拆出：自选股管理、快捷评估、批量评估、评估历史分组/选择、数据刷新配置。
// 工厂模式：window.__quantModules.watchlist.create(deps) → 该域全部状态与函数。
// deps（共享依赖）:
//   currentUser selectedDate stockDetail stockDetailTab stockDetailVisible
//   stockKlineLoaded viewCache animateScoreEntrance loadStockKline refreshStockScore
//   AI 域状态: aiHistory aiLoading aiEvalStage autoEvaluateConfig autoEvaluateScope
//   batchStocks batchRunning batchTotal batchCompleted batchCurrent batchStatuses batchResults
//   expandedDates expandedStocks savingConfig selectedHistoryIds selectedWatchlistCodes
//   showAutoEvaluateSettings showBatchEvaluate
(function () {
  if (!window.__quantModules) window.__quantModules = {};

  // V5.7.2 (UX-09): 评估档位 → 语义色 token (替代服务端 level_color hex, 暗色自适应)
  const LEVEL_COLOR = {
    '强烈推荐': 'var(--danger-text)', '推荐': 'var(--success-text)',
    '谨慎推荐': 'var(--warning-text)', '中性': 'var(--info-text)',
    '观望': 'var(--text-tertiary)', '买入': 'var(--success-text)',
    '持有': 'var(--warning-text)', '减仓': 'var(--danger-text)',
    '卖出': 'var(--danger-text)',
  };
  const LEVEL_BG = {
    '强烈推荐': 'var(--badge-danger-bg)', '推荐': 'var(--badge-success-bg)',
    '谨慎推荐': 'var(--badge-warning-bg)', '中性': 'var(--badge-info-bg)',
    '观望': 'var(--bg-hover)', '买入': 'var(--badge-success-bg)',
    '持有': 'var(--badge-warning-bg)', '减仓': 'var(--badge-danger-bg)',
    '卖出': 'var(--badge-danger-bg)',
  };
  function levelVar(l) { return LEVEL_COLOR[l] || 'var(--text-tertiary)'; }
  function levelBgVar(l) { return LEVEL_BG[l] || 'var(--bg-hover)'; }

  // 6.1.1 (A3): 可撤销操作 — 破坏性操作成功后 5s 内可撤销 (undo-core 注册栈 + toast 撤销按钮)
  const UC = window.QuantUndoCore;
  const undoStack = UC ? UC.createUndoStack() : null;
  function showUndoMessage(text, undoId) {
    if (!undoStack || !window.Vue || !window.Vue.h) return;
    const h = window.Vue.h;
    ElementPlus.ElMessage.success({
      message: h('span', null, [
        text,
        h('a', {
          style: 'margin-left:8px;color:var(--primary-text);cursor:pointer;text-decoration:underline',
          onClick: () => { if (undoStack.undo(undoId)) ElementPlus.ElMessage.success('已撤销'); },
        }, '撤销'),
      ]),
      duration: 5000,
    });
  }

  window.__quantModules.watchlist = window.__quantModules.watchlist || {};
  window.__quantModules.watchlist.create = function create(deps) {
      const { ref, computed, watch } = Vue;
      const { currentUser, selectedDate, stockDetail, stockDetailTab, stockDetailVisible, stockDetailLoading,
               stockKlineLoaded, viewCache, animateScoreEntrance, loadStockKline, refreshStockScore, disposeStockKline,
               aiHistory, aiLoading, aiEvalStage, aiEvalElapsed, aiEvalError, aiResult, loadLastEvaluation, autoEvaluateConfig, autoEvaluateScope,
               batchStocks, batchRunning, batchTotal, batchCompleted, batchCurrent, batchStatuses,
               batchResults, batchEvalErrors, expandedDates, expandedStocks, savingConfig, selectedHistoryIds,
               selectedWatchlistCodes, showAutoEvaluateSettings, showBatchEvaluate } = deps;

// v3.15 (15.4): 运行时读 CSS 令牌 — ECharts canvas 无法解析 var(), 令牌优先字面量兜底
// qc-allow-hardcode: 以下 #hex 为显式运行时兜底, 非静态硬编码
const getCSSVar = (n) => (getComputedStyle(document.documentElement).getPropertyValue(n) || '').trim();

const quickEvalStock = ref('');  // v1.10: 快捷评估下拉
const evalStrategy = ref('default');  // v1.10: 评估策略
const watchlistSort = ref('default');  // v1.10: 自选排序
const watchlist = ref([]);
const watchlistCodes = computed(() => new Set(watchlist.value.map(s => s.code)));

// ===== 6.6 (T-6.6.2/T-6.6.3, PRD FR-6.6.1) 自选渲染守卫 =====
// 现场故障 (EVAL §3.1.5): 标题显示「共 13 只」, 但列表区零 DOM 行、无报错、刷新无效。
// 本守卫的作用: 把「静默空白」变成「可诊断的降级面板」, 并提供一键诊断导出。
const watchlistRenderGuard = ref(null);  // null | {expected, rendered, at}

function _wlRenderCore() {
    return (typeof window !== 'undefined'
        && window.__quantModules
        && window.__quantModules.watchlistRenderCore)
        || (typeof window !== 'undefined' && window.QuantWatchlistRenderCore)
        || null;
}

// 渲染后自检: 有数据却 0 行 → 置守卫; 否则清除
function auditWatchlistRender() {
    if (typeof document === 'undefined') return;
    const core = _wlRenderCore();
    const expected = sortedWatchlist.value.length;
    let rendered = 0;
    try {
        rendered = document.querySelectorAll('.watchlist-vlist .watchlist-item').length;
    } catch (e) {
        rendered = 0;
    }
    const fire = core && typeof core.shouldShowRenderGuard === 'function'
        ? core.shouldShowRenderGuard(expected, rendered)
        : (expected > 0 && rendered === 0);
    watchlistRenderGuard.value = fire
        ? { expected: expected, rendered: rendered, at: new Date().toISOString() }
        : null;
}

function dismissWatchlistRenderGuard() {
    watchlistRenderGuard.value = null;
}

// 6.6 (T-6.6.2): 守卫面板的「重新加载页面」动作（模板不便直接访问 window）
function reloadPage() {
    if (typeof window !== 'undefined' && window.location) window.location.reload();
}

// 诊断导出: DOM 结构 + 关键状态 + 版本 + 组件清单 (与现场探针同构)
function exportPageDiagnostics() {
    const core = _wlRenderCore();
    if (!core || typeof core.buildDiagPayload !== 'function') {
        console.warn('[diagnostics] watchlistRenderCore 未加载');
        return null;
    }
    const hintEl = document.querySelector('.card-title-hint');
    let vlistPresent = false;
    let listPanePresent = false;
    try {
        vlistPresent = !!document.querySelector('.watchlist-vlist, .qc-virtual-list');
        listPanePresent = !!document.querySelector('.detail-split-list');
    } catch (e) { /* 诊断本身不能抛错 */ }

    let splitWidth = '';
    let detailMode = null;
    try {
        splitWidth = getComputedStyle(document.documentElement).getPropertyValue('--split-w').trim();
        detailMode = localStorage.getItem('qc_detail_mode');
    } catch (e) { /* ignore */ }

    const payload = core.buildDiagPayload({
        hint: hintEl ? (hintEl.textContent || '').trim() : null,
        rowCount: document.querySelectorAll('.qc-vrow').length,
        itemCount: document.querySelectorAll('.watchlist-item').length,
        expected: sortedWatchlist.value.length,
        vlistPresent: vlistPresent,
        listPanePresent: listPanePresent,
        splitWidth: splitWidth || null,
        detailMode: detailMode,
        version: (window.__appVersion || (window.qcState && window.qcState.appVersion
            ? window.qcState.appVersion.value : '')) || '',
        serverVersion: window.__serverVersion || '',
        components: (window.__quantComponents || {}),
    });
    try {
        const blob = new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json' });
        const ts = new Date().toISOString().replace(/[:.]/g, '-').slice(0, 19);
        const a = document.createElement('a');
        a.href = URL.createObjectURL(blob);
        a.download = `qc-diag-${ts}.json`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        setTimeout(() => URL.revokeObjectURL(a.href), 2000);
    } catch (e) {
        console.warn('[diagnostics] 下载失败, 载荷如下:');
        console.log(JSON.stringify(payload, null, 2));
    }
    return payload;
}

// 6.6 (T-6.6.2/T-6.6.3): 诊断句柄 —— 远程支持/自动化可用一行命令触发自检与导出。
//   window.__qcWatchlistAudit()        重新执行渲染自检（有计数无行 → 弹出降级面板）
//   window.__qcExportDiagnostics()     导出诊断 JSON（返回载荷，同时触发下载）
// 只暴露只读/诊断能力，不提供任何改数据的入口。
if (typeof window !== 'undefined') {
    window.__qcWatchlistAudit = function () { try { return auditWatchlistRender(); } catch (e) { return null; } };
    window.__qcExportDiagnostics = function () { try { return exportPageDiagnostics(); } catch (e) { return null; } };
}

// v3.16 (16.7): 评估历史加载/错误态（供 ai-page 统一错误态可重试）
const aiHistoryLoading = ref(false);
const aiHistoryError = ref(false);
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
    return { score: latest.result.total_score, color: levelVar(latest.result.level), bg: levelBgVar(latest.result.level) };
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
    last_refresh_status: null,
    // v3.12 (FR-3.12.1): 定时拉取配置
    pull_enabled: false,
    pull_time: '22:30',
    pull_frequency: 'daily',
    pull_weekday: '0',
    stock_pool: [],
    // 6.4.1 (FR-641e): 首启限量与引导派生字段（后端 config_view 计算）
    first_run_confirmed: false,
    first_run_completed: false,
    first_run_days: 5,
    pool_empty: true,
    first_run_pending: false,
    effective_first_run_days: 5,
    guide_code: '',
    guide_message: ''
});
// 上次已落盘的配置快照 — 用于判断「是否由关变开」，避免关闭开关时误弹二次确认
const dataRefreshSaved = ref({ scheduled_enabled: false, pull_enabled: false });
const dataRefreshReloading = ref(false);
const dataRefreshSaving = ref(false);
// ===== 6.3.0 (T-6.3.0.8): 逻辑域装配 — 自选/评估历史下沉 js/watchlist/ =====
// 片段以 create(ctx) 工厂装配（片段须先于本文件加载，见 src/main.js）
const _wlListRef = { v: null };  // 延迟绑定: history → list（list 反向依赖 history.loadAiHistory）
const __history = window.__quantModules.watchlist.history.create({
    ref, computed, watch, currentUser, selectedDate, stockDetail, stockDetailTab,
    stockDetailVisible, stockDetailLoading, stockKlineLoaded, viewCache, animateScoreEntrance,
    loadStockKline, refreshStockScore, disposeStockKline, aiHistory, aiLoading, aiEvalStage,
    aiEvalElapsed, aiEvalError, aiResult, loadLastEvaluation, autoEvaluateConfig,
    autoEvaluateScope, batchStocks, batchRunning, batchTotal, batchCompleted, batchCurrent,
    batchStatuses, batchResults, batchEvalErrors, expandedDates, expandedStocks, savingConfig,
    selectedHistoryIds, selectedWatchlistCodes, showAutoEvaluateSettings, showBatchEvaluate,
    getCSSVar, quickEvalStock, evalStrategy, watchlistSort, watchlist, watchlistCodes,
    aiHistoryLoading, aiHistoryError, sortedWatchlist, getWatchlistScore, getLatestScore,
    addSearchResult, evaluatedCodes, klineLoadedCodes, markKlineLoaded, watchlistSearch,
    watchlistResults, watchlistSearching, dataRefreshConfig, dataRefreshReloading,
    dataRefreshSaving, levelVar, levelBgVar, undoStack, showUndoMessage,
    addToWatchlist: function (code, nm) { return _wlListRef.v.addToWatchlist(code, nm); },
    removeFromWatchlist: function (code) { return _wlListRef.v.removeFromWatchlist(code); }
  });
const { doAiEvaluate, aiHistoryTotal, aiHistoryLoadingMore, hasMoreAiHistory, loadAiHistory,
  loadMoreAiHistory, deleteSingleHistory, toggleSelectHistory, clearSelection,
  clearWatchlistSelection, batchReevaluateHistory, batchAddToWatchlist, batchAddToPortfolio,
  batchRemoveWatchlist, toggleSelectWatchlist, selectAllHistory, selectAllWatchlist,
  deleteSelectedHistory, loadAutoEvaluateConfig, saveAutoEvaluateConfig } = __history;
const __list = window.__quantModules.watchlist.list.create({
    ref, computed, watch, currentUser, selectedDate, stockDetail, stockDetailTab,
    stockDetailVisible, stockDetailLoading, stockKlineLoaded, viewCache, animateScoreEntrance,
    loadStockKline, refreshStockScore, disposeStockKline, aiHistory, aiLoading, aiEvalStage,
    aiEvalElapsed, aiEvalError, aiResult, loadLastEvaluation, autoEvaluateConfig,
    autoEvaluateScope, batchStocks, batchRunning, batchTotal, batchCompleted, batchCurrent,
    batchStatuses, batchResults, batchEvalErrors, expandedDates, expandedStocks, savingConfig,
    selectedHistoryIds, selectedWatchlistCodes, showAutoEvaluateSettings, showBatchEvaluate,
    getCSSVar, quickEvalStock, evalStrategy, watchlistSort, watchlist, watchlistCodes,
    aiHistoryLoading, aiHistoryError, sortedWatchlist, getWatchlistScore, getLatestScore,
    addSearchResult, evaluatedCodes, klineLoadedCodes, markKlineLoaded, watchlistSearch,
    watchlistResults, watchlistSearching, dataRefreshConfig, dataRefreshReloading,
    dataRefreshSaving, dataRefreshSaved, levelVar, levelBgVar, undoStack, showUndoMessage,
    loadAiHistory
  });
const { watchlistLoading, loadWatchlist, addToWatchlist, removeFromWatchlist, clearWatchlist,
  toggleWatchlist, showStockKline, preloadingKline, preloadWatchlistKline, watchlistEvaluate,
  batchEvaluateWatchlist, batchEvaluateSelected, searchStockForWatchlist, loadDataRefreshConfig,
  saveDataRefreshConfig, triggerDataReload, dataPullRunning, triggerDataPull,
  loadExamplePool, removeExamplePool } = __list;
_wlListRef.v = __list;
const __analytics = window.__quantModules.watchlist.analytics.create({
    ref, computed, watch, currentUser, selectedDate, stockDetail, stockDetailTab,
    stockDetailVisible, stockDetailLoading, stockKlineLoaded, viewCache, animateScoreEntrance,
    loadStockKline, refreshStockScore, disposeStockKline, aiHistory, aiLoading, aiEvalStage,
    aiEvalElapsed, aiEvalError, aiResult, loadLastEvaluation, autoEvaluateConfig,
    autoEvaluateScope, batchStocks, batchRunning, batchTotal, batchCompleted, batchCurrent,
    batchStatuses, batchResults, batchEvalErrors, expandedDates, expandedStocks, savingConfig,
    selectedHistoryIds, selectedWatchlistCodes, showAutoEvaluateSettings, showBatchEvaluate,
    getCSSVar, quickEvalStock, evalStrategy, watchlistSort, watchlist, watchlistCodes,
    aiHistoryLoading, aiHistoryError, sortedWatchlist, getWatchlistScore, getLatestScore,
    addSearchResult, evaluatedCodes, klineLoadedCodes, markKlineLoaded, watchlistSearch,
    watchlistResults, watchlistSearching, dataRefreshConfig, dataRefreshReloading,
    dataRefreshSaving, levelVar, levelBgVar, undoStack, showUndoMessage, loadAiHistory
  });
const { groupedByDate, aiHistoryByStock, groupedByMonth, aiHistoryStockCount, scoreDistribution,
  quickEvaluate, toggleDateExpand, toggleSelectDate, toggleSelectMonth, toggleStockExpand,
  toggleSelectStock, registerTrendChart, viewAiResult, doBatchEvaluate } = __analytics;
const __realtime = window.__quantModules.watchlist.realtime.create({
    ref, computed, watch, currentUser, selectedDate, stockDetail, stockDetailTab,
    stockDetailVisible, stockDetailLoading, stockKlineLoaded, viewCache, animateScoreEntrance,
    loadStockKline, refreshStockScore, disposeStockKline, aiHistory, aiLoading, aiEvalStage,
    aiEvalElapsed, aiEvalError, aiResult, loadLastEvaluation, autoEvaluateConfig,
    autoEvaluateScope, batchStocks, batchRunning, batchTotal, batchCompleted, batchCurrent,
    batchStatuses, batchResults, batchEvalErrors, expandedDates, expandedStocks, savingConfig,
    selectedHistoryIds, selectedWatchlistCodes, showAutoEvaluateSettings, showBatchEvaluate,
    getCSSVar, quickEvalStock, evalStrategy, watchlistSort, watchlist, watchlistCodes,
    aiHistoryLoading, aiHistoryError, sortedWatchlist, getWatchlistScore, getLatestScore,
    addSearchResult, evaluatedCodes, klineLoadedCodes, markKlineLoaded, watchlistSearch,
    watchlistResults, watchlistSearching, dataRefreshConfig, dataRefreshReloading,
    dataRefreshSaving, levelVar, levelBgVar, undoStack, showUndoMessage
  });
const { REALTIME_DEGRADED_TEXT, REALTIME_FALLBACK_TEXT, realtimeQuotes, realtimeDegraded,
  realtimeWsState, quoteWarningFor, realtimeQuoteColor, realtimePriceText, realtimePctText,
  realtimeRatioText, disconnectRealtimeQuotes, connectRealtimeQuotes,
  // 6.6 (T-6.6.6): 四态文案 —— 此白名单漏接会导致模板 TypeError 并整块不渲染
  realtimeWsStateText } = __realtime;

// ===== v3.11(11.3): 系统配置域 — 逻辑移至 js/system.js 模块 =====

      return {
        quickEvalStock, evalStrategy, watchlistSort, watchlist, watchlistCodes, sortedWatchlist,
        getWatchlistScore, getLatestScore, addSearchResult, evaluatedCodes, klineLoadedCodes,
        markKlineLoaded, watchlistSearch, watchlistResults, watchlistSearching,
        dataRefreshConfig, dataRefreshReloading, dataRefreshSaving, dataRefreshSaved,
        aiHistoryLoading, aiHistoryError,
        aiHistoryTotal, aiHistoryLoadingMore, hasMoreAiHistory, loadMoreAiHistory,
        watchlistLoading,
        // 6.6 (T-6.6.2, PRD FR-6.6.1): 渲染守卫 —— 「有计数无行」必须显式降级, 不允许静默空白
        watchlistRenderGuard, auditWatchlistRender, dismissWatchlistRenderGuard, exportPageDiagnostics, reloadPage,
        doAiEvaluate, loadAiHistory, deleteSingleHistory, toggleSelectHistory, clearSelection,
        clearWatchlistSelection, batchReevaluateHistory, batchAddToWatchlist, batchAddToPortfolio, batchRemoveWatchlist,
        toggleSelectWatchlist, selectAllHistory, selectAllWatchlist, deleteSelectedHistory,
        loadAutoEvaluateConfig, saveAutoEvaluateConfig, loadWatchlist, addToWatchlist,
        removeFromWatchlist, clearWatchlist, toggleWatchlist, showStockKline, preloadingKline,
        preloadWatchlistKline, watchlistEvaluate, batchEvaluateWatchlist, batchEvaluateSelected,
        searchStockForWatchlist, loadDataRefreshConfig, saveDataRefreshConfig, triggerDataReload,
        triggerDataPull, dataPullRunning,
        // 6.4.2 (FR-644): 示例组合一键载入/删除
        loadExamplePool, removeExamplePool,
        groupedByDate, aiHistoryByStock, groupedByMonth, aiHistoryStockCount, scoreDistribution,
        quickEvaluate, toggleDateExpand, toggleSelectDate, toggleSelectMonth, toggleStockExpand,
        toggleSelectStock, registerTrendChart, viewAiResult, doBatchEvaluate,
        // v3.17.7 实时化 (FR-3.17.7): 自选实时报价
        realtimeQuotes, realtimeDegraded, realtimeWsState, connectRealtimeQuotes,
        disconnectRealtimeQuotes, quoteWarningFor, realtimeQuoteColor,
        realtimePriceText, realtimePctText, realtimeRatioText, realtimeWsStateText,
        REALTIME_DEGRADED_TEXT, REALTIME_FALLBACK_TEXT,
      };
  };
})();
