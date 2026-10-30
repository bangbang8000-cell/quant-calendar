// quant-calendar: 自选实时报价 WS 生命周期纯函数 (v6.6 / T-6.6.5, T-6.6.6, T-6.6.7)
// 纯函数便于单测 (UMD: Node require / 浏览器 __quantModules.realtimeLifecycleCore)
//
// 背景 (EVAL-v6.6 §3.1.1 / PRD FR-6.6.2): 现场「登录后自选列表价格一直显示 --」。
// 根因是 connectRealtimeQuotes() 只在应用启动时调用一次 (realtime.js 末尾 500ms 定时器)，
// 表单登录/访客登录发生在启动之后 → 整页不刷新就永远连不上，且没有任何文案提示。
// 本模块把「状态文案 / 退避 / 看门狗」这些判定收敛成纯函数，便于确定性回归。
(function (root, factory) {
  if (typeof module === 'object' && module.exports) {
    module.exports = factory();
  } else {
    root.QuantRealtimeLifecycleCore = factory();
  }
})(typeof self !== 'undefined' ? self : this, function () {
  'use strict';

  // 四态：idle(未连接) / connecting(连接中) / open(已连接) / offline(离线)
  var WS_STATES = ['idle', 'connecting', 'open', 'offline'];

  var DEFAULT_BACKOFF_BASE_MS = 5000;
  var DEFAULT_BACKOFF_MAX_MS = 30000;
  var DEFAULT_MAX_ATTEMPTS = 3;
  var DEFAULT_WATCHDOG_MS = 8000;

  /**
   * 状态文案（四态 + 降级原因细分）。用户永远能看到「现在到底连上没有」。
   * @param {string} state idle|connecting|open|offline
   * @param {object} [opt] { degraded, reason }
   * @returns {string}
   */
  function stateText(state, opt) {
    var o = opt || {};
    var reason = o.reason || '';
    if (state === 'open') return '实时已连接';
    if (state === 'connecting') return '连接中…';
    if (state === 'offline') {
      if (reason === 'non_trading_hours') return '非交易时段，暂不推送';
      if (reason === 'upstream_unreachable') return '上游数据源不可达';
      if (o.degraded) return '实时不可用，不刷新';
      return '连接已断开，正在重连…';
    }
    return '未连接';  // idle
  }

  /**
   * 指数退避（5000 → 10000 → 20000 → 封顶 30000）。
   * @param {number} attempt 第几次重连（从 1 开始）
   * @param {number} [baseMs]
   * @param {number} [maxMs]
   * @returns {number} 毫秒
   */
  function nextBackoff(attempt, baseMs, maxMs) {
    var base = (baseMs > 0) ? baseMs : DEFAULT_BACKOFF_BASE_MS;
    var cap = (maxMs > 0) ? maxMs : DEFAULT_BACKOFF_MAX_MS;
    var n = Number(attempt);
    if (!isFinite(n) || n < 1) return base;
    var delay = base * Math.pow(2, Math.floor(n) - 1);
    return Math.min(delay, cap);
  }

  /**
   * 是否还允许继续重连（超过上限 → 保持降级占位，不再打扰）。
   */
  function shouldReconnect(attempt, maxAttempts) {
    var n = Number(attempt);
    var max = (maxAttempts === undefined || maxAttempts === null) ? DEFAULT_MAX_ATTEMPTS : Number(maxAttempts);
    if (!isFinite(n) || !isFinite(max)) return false;
    return n < max;
  }

  /**
   * 看门狗：连接发起后超过时限仍未 open → 判定卡死（不再无声等待）。
   * @param {number} startedAt 发起时刻 ms
   * @param {number} now 当前时刻 ms
   * @param {number} [limitMs]
   * @returns {boolean}
   */
  function watchdogExpired(startedAt, now, limitMs) {
    var s = Number(startedAt);
    var t = Number(now);
    var limit = (limitMs > 0) ? limitMs : DEFAULT_WATCHDOG_MS;
    if (!isFinite(s) || !isFinite(t) || s <= 0) return false;
    return (t - s) >= limit;
  }

  /**
   * 是否需要在标的集合变化时重发订阅。
   */
  function shouldResubscribe(state) {
    return state === 'open';
  }

  return {
    WS_STATES: WS_STATES,
    DEFAULT_BACKOFF_BASE_MS: DEFAULT_BACKOFF_BASE_MS,
    DEFAULT_BACKOFF_MAX_MS: DEFAULT_BACKOFF_MAX_MS,
    DEFAULT_MAX_ATTEMPTS: DEFAULT_MAX_ATTEMPTS,
    DEFAULT_WATCHDOG_MS: DEFAULT_WATCHDOG_MS,
    stateText: stateText,
    nextBackoff: nextBackoff,
    shouldReconnect: shouldReconnect,
    watchdogExpired: watchdogExpired,
    shouldResubscribe: shouldResubscribe,
  };
});

// 6.6: 统一注册到 __quantModules（与其它 core 模块一致）
if (typeof window !== 'undefined') {
  if (!window.__quantModules) window.__quantModules = {};
  var _rtLifecycle = (typeof module === 'object' && module.exports)
    ? module.exports
    : (typeof self !== 'undefined' && self.QuantRealtimeLifecycleCore)
      ? self.QuantRealtimeLifecycleCore
      : (window.QuantRealtimeLifecycleCore || null);
  if (_rtLifecycle) window.__quantModules.realtimeLifecycleCore = _rtLifecycle;
}
