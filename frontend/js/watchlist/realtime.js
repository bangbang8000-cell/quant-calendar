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
const REALTIME_RETRY_MAX = (__coreRT.REALTIME_RETRY_MAX != null) ? __coreRT.REALTIME_RETRY_MAX : 3;
const REALTIME_RETRY_BASE_MS = 5000;  // 重连退避基数
// 6.6 (T-6.6.6/T-6.6.7): 状态文案/退避/看门狗判定统一收口到 realtime-lifecycle-core.js
const __coreLC = (window.__quantModules && window.__quantModules.realtimeLifecycleCore) || {};
const _lcStateText = __coreLC.stateText || function (s) {
  return s === 'open' ? '实时已连接' : s === 'connecting' ? '连接中…'
    : s === 'offline' ? '连接已断开，正在重连…' : '未连接';
};
const _lcNextBackoff = __coreLC.nextBackoff || function (n) { return REALTIME_RETRY_BASE_MS * n; };
const _lcShouldReconnect = __coreLC.shouldReconnect || function (n, max) { return n < (max == null ? 3 : max); };
const _lcWatchdogExpired = __coreLC.watchdogExpired || function (s, t, limit) {
  return s > 0 && (t - s) >= (limit || 8000);
};
const REALTIME_WATCHDOG_MS = __coreLC.DEFAULT_WATCHDOG_MS || 8000;

const realtimeQuotes = ref({});        // code -> {price, change_pct, volume_ratio, rise_speed}
const realtimeDegraded = ref(false);   // 数据源不可达 → 显示"数据不可达"占位
// v6.4 (FR-6.4.2): 降级原因码 (upstream_unreachable | non_trading_hours)，由后端帧带回
const realtimeDegradedReason = ref('');
const realtimeWsState = ref('idle');   // idle|connecting|open|offline

// v6.4 (FR-6.4.2): 把 WS 状态广播到全局，供顶栏降级细条消费（不侵入各业务页）
function _emitRealtime() {
  try {
    window.dispatchEvent(new CustomEvent('qc:realtime', {
      detail: {
        state: realtimeWsState.value,
        degraded: realtimeDegraded.value,
        reason: realtimeDegradedReason.value,
      },
    }));
  } catch (e) { /* 无 CustomEvent 环境静默 */ }
}
let realtimeWs = null;
let realtimeRetryTimer = null;
let realtimeRetryCount = 0;
let realtimeWatchdogTimer = null;
let realtimeConnectStartedAt = 0;

// 6.6 (T-6.6.6): 四态可读文案 —— 用户必须能看出「没连上」而不是只看到一排 --。
// 供模板直接渲染（PRD FR-6.6.2「WS 四态文案」）。
function realtimeWsStateText() {
  return _lcStateText(realtimeWsState.value, {
    degraded: realtimeDegraded.value,
    reason: realtimeDegradedReason.value,
  });
}

// 6.6 (T-6.6.6): 看门狗 —— 发起连接后 8s 仍未 open 就判定卡死，落到 offline 并允许重试，
// 避免「连接中…」无限挂起（现场表现就是价格永远是 --，且没有任何提示）。
function _realtimeClearWatchdog() {
  if (realtimeWatchdogTimer) { clearTimeout(realtimeWatchdogTimer); realtimeWatchdogTimer = null; }
}
function _realtimeArmWatchdog() {
  _realtimeClearWatchdog();
  realtimeConnectStartedAt = Date.now();
  realtimeWatchdogTimer = setTimeout(function () {
    realtimeWatchdogTimer = null;
    if (realtimeWsState.value !== 'open'
        && _lcWatchdogExpired(realtimeConnectStartedAt, Date.now(), REALTIME_WATCHDOG_MS)) {
      realtimeWsState.value = 'offline';
      realtimeDegraded.value = true;
      _emitRealtime();
      _realtimeScheduleRetry();
    }
  }, REALTIME_WATCHDOG_MS);
}

// 6.6 (T-6.6.7): 指数退避重连（5s → 10s → 20s，封顶 30s），超上限保持降级占位
function _realtimeScheduleRetry() {
  if (realtimeRetryTimer) { clearTimeout(realtimeRetryTimer); realtimeRetryTimer = null; }
  if (!_lcShouldReconnect(realtimeRetryCount, REALTIME_RETRY_MAX)) {
    realtimeDegraded.value = true;  // 达上限 → 保持降级占位，不再打扰
    _emitRealtime();
    return;
  }
  realtimeRetryCount++;
  const delay = _lcNextBackoff(realtimeRetryCount, REALTIME_RETRY_BASE_MS, 30000);
  realtimeRetryTimer = setTimeout(function () {
    realtimeRetryTimer = null;
    if (realtimeWsState.value !== 'open') connectRealtimeQuotes();
  }, delay);
}

// 预警判定（纯函数，委托 core.checkQuoteWarning）
// v6.4 (FR-6.4.2): 降级文案按原因区分，不再统一"数据不可达"
function realtimeDegradedText() {
  if (realtimeDegradedReason.value === 'non_trading_hours') return '非交易时段，暂不推送';
  if (realtimeDegradedReason.value === 'upstream_unreachable') return '上游数据源不可达';
  return REALTIME_DEGRADED_TEXT;
}

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
  _realtimeClearWatchdog();
  realtimeConnectStartedAt = 0;
  realtimeRetryCount = 0;
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
  realtimeDegradedReason.value = '';
  realtimeWsState.value = 'idle';
}
function connectRealtimeQuotes() {
  const token = _realtimeToken();
  if (!token || !__coreRT.buildRealtimeWsUrl) return;  // 未登录/无 WS 能力 → 降级不刷新
  if (realtimeWsState.value === 'open' || realtimeWsState.value === 'connecting') return;
  let url;
  try {
    url = __coreRT.buildRealtimeWsUrl() + '?token=' + encodeURIComponent(token);
  } catch (e) { realtimeWsState.value = 'offline'; realtimeDegraded.value = true; _emitRealtime(); return; }
  realtimeWsState.value = 'connecting';
  _emitRealtime();
  _realtimeArmWatchdog();
  let ws = null;
  try {
    ws = new WebSocket(url);  // 原生 WebSocket API，零构建
  } catch (e) {
    // CSP/构造失败 → 优雅降级占位，不报错
    realtimeWsState.value = 'offline';
    realtimeDegraded.value = true;
    _emitRealtime();
    return;
  }
  realtimeWs = ws;
  ws.onopen = function () {
    realtimeWsState.value = 'open';
    realtimeRetryCount = 0;
    _realtimeClearWatchdog();
    _emitRealtime();
    _realtimeSendSubscribe();
  };
  ws.onmessage = function (evt) {
    let msg = null;
    try { msg = JSON.parse(evt.data || '{}'); } catch (e) { return; }
    if (!msg || msg.type !== 'quotes') return;
    realtimeDegraded.value = !!msg.degraded;
    realtimeDegradedReason.value = msg.reason || (msg.degraded ? 'upstream_unreachable' : '');
    _emitRealtime();
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
    _emitRealtime();
  };
  ws.onclose = function () {
    realtimeWsState.value = 'offline';
    _realtimeClearWatchdog();
    _emitRealtime();
    _realtimeScheduleRetry();  // 6.6 (T-6.6.7): 指数退避，超上限保持降级占位
  };
}
// 自选变化 → 重发订阅（打开连接后有效）
watch(watchlist, function () {
  if (realtimeWsState.value === 'open') _realtimeSendSubscribe();
});
// 6.6 (T-6.6.5, PRD FR-6.6.2): 认证态驱动连接/断开。
// 现场根因 = 连接只在「应用启动」时尝试一次，而表单登录/访客登录发生在启动之后，
// 整页不刷新就永远连不上（价格一直 --）。改为监听认证态变化 + 存储跨标签同步，
// 覆盖所有登录路径（含未来新增），不再依赖「启动瞬间是否已登录」。
function _onAuthChanged() {
  // token 由登录成功先落盘、再派发事件，故此刻读到的就是最新态
  if (_realtimeToken()) {
    realtimeRetryCount = 0;
    connectRealtimeQuotes();
  } else {
    disconnectRealtimeQuotes();
  }
}
if (typeof window !== 'undefined') {
  window.addEventListener('qc:auth-changed', function () { setTimeout(_onAuthChanged, 0); });
  window.addEventListener('storage', function (e) {
    if (e && (e.key === 'quant_token' || e.key === null)) _onAuthChanged();
  });
}
// 创建即尝试连接（已登录时）：WS 不可用/数据不可达均自动降级
if (_realtimeToken()) {
  setTimeout(connectRealtimeQuotes, 500);
}
      return {
        REALTIME_DEGRADED_TEXT, REALTIME_FALLBACK_TEXT, realtimeQuotes, realtimeDegraded, realtimeDegradedReason, realtimeWsState, quoteWarningFor, realtimeDegradedText, realtimeQuoteColor, realtimePriceText, realtimePctText, realtimeRatioText, disconnectRealtimeQuotes, connectRealtimeQuotes, realtimeWsStateText,
      };
    },
  };
})();
