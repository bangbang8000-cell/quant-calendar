// quant-calendar: 自选/评估历史域模块 6.3.0 (T-6.3.0.8) 结构分治片段 —— realtime
// 由 frontend/js/watchlist.js 的 create(deps) 逐字符下沉; 经 create(ctx) 装配。
(function () {
  if (!window.__quantModules) window.__quantModules = {};
  window.__quantModules.watchlist = window.__quantModules.watchlist || {};
  window.__quantModules.watchlist.realtime = {
    create: function (ctx) {
      const {
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
      } = ctx;

// ─── v3.17.7 实时化 (FR-3.17.7): 自选实时报价（WS 接入 + 预警 + 优雅降级）──
// 纯函数/常量统一收口于 core.js（node 可测）；本域负责 WS 生命周期与状态。
const __coreRT = (window.__quantModules && window.__quantModules.core)
  ? window.__quantModules.core : {};
const REALTIME_WS_PATH = __coreRT.REALTIME_WS_PATH || '/api/market/ws/quotes';
const REALTIME_DEGRADED_TEXT = __coreRT.REALTIME_DEGRADED_TEXT || '数据不可达';
const REALTIME_FALLBACK_TEXT = __coreRT.REALTIME_FALLBACK_TEXT || '实时不可用，不刷新';
const WARN_RISE_SPEED_THRESHOLD = (__coreRT.WARN_RISE_SPEED_THRESHOLD != null)
  ? __coreRT.WARN_RISE_SPEED_THRESHOLD : 1.0;
const WARN_VOLUME_RATIO_THRESHOLD = (__coreRT.WARN_VOLUME_RATIO_THRESHOLD != null)
  ? __coreRT.WARN_VOLUME_RATIO_THRESHOLD : 2.5;
const quoteFmt = __coreRT.quoteFmt || {
  price: v => (v == null ? '--' : Number(v).toFixed(2)),
  pct: v => (v == null ? '--' : Number(v).toFixed(2) + '%'),
  num: v => (v == null ? '--' : Number(v).toFixed(2)),
  color: q => '',
};
const REALTIME_RETRY_MAX = 3;         // 连续重连上限（超限保持降级占位，不打扰）
const REALTIME_RETRY_BASE_MS = 5000;  // 重连退避基数

const realtimeQuotes = ref({});        // code -> {price, change_pct, volume_ratio, rise_speed}
const realtimeDegraded = ref(false);   // 数据源不可达 → 显示"数据不可达"占位
const realtimeWsState = ref('idle');   // idle|connecting|open|offline
let realtimeWs = null;
let realtimeRetryTimer = null;
let realtimeRetryCount = 0;

// 预警判定（纯函数，委托 core.checkQuoteWarning）
function checkQuoteWarning(quote) {
  return __coreRT.checkQuoteWarning ? __coreRT.checkQuoteWarning(quote) : null;
}
// 返回某自选股当前预警文案（涨速/跌速/放量），无则 null
function quoteWarningFor(code) {
  return checkQuoteWarning(realtimeQuotes.value[code]);
}
function realtimeQuoteColor(code) {
  return quoteFmt.color(realtimeQuotes.value[code]);
}
function realtimePriceText(code) {
  return quoteFmt.price(realtimeQuotes.value[code] && realtimeQuotes.value[code].price);
}
function realtimePctText(code) {
  return quoteFmt.pct(realtimeQuotes.value[code] && realtimeQuotes.value[code].change_pct);
}
function realtimeRatioText(code, field) {
  return quoteFmt.num(realtimeQuotes.value[code] && realtimeQuotes.value[code][field]);
}
function _realtimeToken() {
  try { return localStorage.getItem('quant_token') || ''; } catch (e) { return ''; }
}
function _realtimeSendSubscribe() {
  if (!realtimeWs || realtimeWs.readyState !== 1) return;
  const codes = (watchlist.value || []).map(s => s.code);
  if (codes.length === 0) return;  // 空订阅不推送
  realtimeWs.send(JSON.stringify({ subscribe: codes }));
}
function disconnectRealtimeQuotes() {
  if (realtimeRetryTimer) { clearTimeout(realtimeRetryTimer); realtimeRetryTimer = null; }
  if (realtimeWs) {
    try {
      realtimeWs.onopen = null; realtimeWs.onmessage = null;
      realtimeWs.onerror = null; realtimeWs.onclose = null;
      realtimeWs.close();
    } catch (e) { /* ignore */ }
    realtimeWs = null;
  }
  realtimeQuotes.value = {};
  realtimeDegraded.value = false;
  realtimeWsState.value = 'idle';
}
function connectRealtimeQuotes() {
  const token = _realtimeToken();
  if (!token || !__coreRT.buildRealtimeWsUrl) return;  // 未登录/无 WS 能力 → 降级不刷新
  if (realtimeWsState.value === 'open' || realtimeWsState.value === 'connecting') return;
  let url;
  try {
    url = __coreRT.buildRealtimeWsUrl() + '?token=' + encodeURIComponent(token);
  } catch (e) { realtimeWsState.value = 'offline'; realtimeDegraded.value = true; return; }
  realtimeWsState.value = 'connecting';
  let ws = null;
  try {
    ws = new WebSocket(url);  // 原生 WebSocket API，零构建
  } catch (e) {
    // CSP/构造失败 → 优雅降级占位，不报错
    realtimeWsState.value = 'offline';
    realtimeDegraded.value = true;
    return;
  }
  realtimeWs = ws;
  ws.onopen = function () {
    realtimeWsState.value = 'open';
    realtimeRetryCount = 0;
    _realtimeSendSubscribe();
  };
  ws.onmessage = function (evt) {
    let msg = null;
    try { msg = JSON.parse(evt.data || '{}'); } catch (e) { return; }
    if (!msg || msg.type !== 'quotes') return;
    realtimeDegraded.value = !!msg.degraded;
    if (msg.degraded || !Array.isArray(msg.data)) {
      realtimeQuotes.value = {};  // degraded → 空报价，占位"数据不可达"
      return;
    }
    const map = {};
    msg.data.forEach(function (q) {
      if (q && q.code) map[q.code] = q;
    });
    realtimeQuotes.value = map;
  };
  ws.onerror = function () {
    realtimeWsState.value = 'offline';
    realtimeDegraded.value = true;
  };
  ws.onclose = function () {
    realtimeWsState.value = 'offline';
    if (realtimeRetryCount < REALTIME_RETRY_MAX) {
      realtimeRetryCount++;
      realtimeRetryTimer = setTimeout(function () {
        if (realtimeWsState.value !== 'open') connectRealtimeQuotes();
      }, REALTIME_RETRY_BASE_MS * realtimeRetryCount);
    } else {
      realtimeDegraded.value = true;  // 重连上限 → 保持降级占位，不阻塞其它功能
    }
  };
}
// 自选变化 → 重发订阅（打开连接后有效）
watch(watchlist, function () {
  if (realtimeWsState.value === 'open') _realtimeSendSubscribe();
});
// 创建即尝试连接（已登录时）：WS 不可用/数据不可达均自动降级
if (_realtimeToken()) {
  setTimeout(connectRealtimeQuotes, 500);
}
      return {
        REALTIME_DEGRADED_TEXT, REALTIME_FALLBACK_TEXT, realtimeQuotes, realtimeDegraded, realtimeWsState, quoteWarningFor, realtimeQuoteColor, realtimePriceText, realtimePctText, realtimeRatioText, disconnectRealtimeQuotes, connectRealtimeQuotes,
      };
    },
  };
})();
