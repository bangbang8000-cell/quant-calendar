// quant-calendar: v7.25 FR-6 行情刷新状态机纯函数
// 纯函数便于单测 (UMD: Node require / 浏览器 QuantMarketRefreshCore)
//
// 背景 (PRD 7.24 G3 / FR-6): 旧实现仅在 "进入页面时恰处交易时段" 才挂 10 分钟定时器,
// 收盘后缓存钉到次日 9:25, 数据源失败静默返回随机 mock。本模块把
// 「阶段判定 / 刷新间隔 / 当日终值确认 / 模拟数据标识」收敛为纯函数,
// 由 app-logic/market.js 消费, 便于确定性回归。
(function (root, factory) {
  if (typeof module === 'object' && module.exports) {
    module.exports = factory();
  } else {
    root.QuantMarketRefreshCore = factory();
  }
})(typeof self !== 'undefined' ? self : this, function () {
  'use strict';

  // 交易时段刷新间隔 (PRD: 15–30 秒)
  var TRADING_INTERVAL_MS = 20000;
  // 收盘确认窗口 / 刚收盘 15:00–15:05 的短 TTL 重试
  var POST_CLOSE_RETRY_MS = 60000;

  // 分钟级阶段 (相对 A 股交易时段)
  var T_0930 = 9 * 60 + 30;
  var T_1130 = 11 * 60 + 30;
  var T_1300 = 13 * 60;
  var T_1500 = 15 * 60;
  var T_1505 = 15 * 60 + 5;

  function toDate(now) {
    return now instanceof Date ? now : new Date(now);
  }

  function pad2(n) {
    return (n < 10 ? '0' : '') + n;
  }

  /**
   * 阶段判定（仅按时分，不含交易日判断）
   * @param {Date|number} now
   * @returns {string} pre_open|trading|lunch|closing|after_close
   */
  function phaseOf(now) {
    var d = toDate(now);
    var t = d.getHours() * 60 + d.getMinutes();
    if (t < T_0930) return 'pre_open';
    if (t <= T_1130) return 'trading';
    if (t < T_1300) return 'lunch';
    if (t <= T_1500) return 'trading';
    if (t < T_1505) return 'closing';
    return 'after_close';
  }

  function isTradingDay(now, opt) {
    var o = opt || {};
    if (typeof o.isTradingDay === 'boolean') return o.isTradingDay;
    var d = toDate(now);
    var wd = d.getDay();
    return wd >= 1 && wd <= 5;
  }

  /**
   * 是否已确认当日终值：所有非 mock 指数 trade_date 均为今日 (YYYYMMDD)。
   * 收盘确认窗口内据此决定是否继续短 TTL 重试。
   */
  function isConfirmed(data, now) {
    if (!data) return false;
    var d = toDate(now);
    var today = '' + d.getFullYear() + pad2(d.getMonth() + 1) + pad2(d.getDate());
    var indices = data.indices || [];
    var real = indices.filter(function (it) { return it && !it.is_mock; });
    if (!real.length) return false;
    return real.every(function (it) { return String(it.trade_date || '') === today; });
  }

  /**
   * 计算一次刷新计划。
   * @param {object} data /api/market/overview 响应
   * @param {Date|number} now
   * @returns {{phase:string,isTradingDay:boolean,confirmed:boolean,intervalMs:number,nextAt:number|null,reason:string}}
   *   intervalMs=0 表示不自动轮询（进入页面时已刷一次，或已确认当日终值）
   */
  function refreshPlan(data, now) {
    var d = toDate(now);
    var tradingDay = isTradingDay(d, { isTradingDay: data ? data.is_trading_day : undefined });
    var phase = tradingDay ? phaseOf(d) : 'holiday';
    var confirmed = isConfirmed(data, d);
    var intervalMs = 0;

    if (tradingDay) {
      if (phase === 'trading') {
        intervalMs = TRADING_INTERVAL_MS;
      } else if (phase === 'closing') {
        intervalMs = POST_CLOSE_RETRY_MS;
      } else if (phase === 'after_close') {
        // 15:05 起短 TTL 重试，确认当日 trade_date 后停止
        intervalMs = confirmed ? 0 : POST_CLOSE_RETRY_MS;
      }
      // pre_open / lunch：进入页面补刷一次即可，不自动轮询
    }

    return {
      phase: phase,
      isTradingDay: tradingDay,
      confirmed: confirmed,
      intervalMs: intervalMs,
      nextAt: intervalMs > 0 ? d.getTime() + intervalMs : null,
      reason: phase,
    };
  }

  /** 回到前台（visible）立即刷新一次 */
  function shouldRefreshOnVisible(state) {
    return state === 'visible';
  }

  /** 模拟数据标识文案（无 mock 时为空串） */
  function mockBadge(data) {
    if (!data) return '';
    if (data.is_mock) return '模拟数据';
    var indices = data.indices || [];
    for (var i = 0; i < indices.length; i++) {
      if (indices[i] && indices[i].is_mock) return '模拟数据';
    }
    return '';
  }

  /** 数据源文案：顶层 data_source 优先，否则由各指数来源汇总 */
  function sourceText(data) {
    if (!data) return '';
    var top = data.data_source;
    if (top && top !== 'unknown') return top;
    var seen = {};
    var keys = [];
    var indices = data.indices || [];
    for (var i = 0; i < indices.length; i++) {
      var s = indices[i] && indices[i].data_source;
      if (s && !seen[s]) { seen[s] = 1; keys.push(s); }
    }
    if (keys.length === 1) return keys[0];
    if (keys.length > 1) return 'mixed';
    return '';
  }

  return {
    TRADING_INTERVAL_MS: TRADING_INTERVAL_MS,
    POST_CLOSE_RETRY_MS: POST_CLOSE_RETRY_MS,
    phaseOf: phaseOf,
    isTradingDay: isTradingDay,
    isConfirmed: isConfirmed,
    refreshPlan: refreshPlan,
    shouldRefreshOnVisible: shouldRefreshOnVisible,
    mockBadge: mockBadge,
    sourceText: sourceText,
  };
});
