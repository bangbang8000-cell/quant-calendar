// quant-calendar: 自选列表渲染策略纯函数 (v6.6 / T-6.6.1, T-6.6.2, T-6.6.3, T-6.6.4)
// 纯函数便于单测 (UMD: Node require / 浏览器 __quantModules.watchlistRenderCore)
//
// 背景 (EVAL-v6.6 §3.1.5 / PRD FR-6.6.1): 现场出现「标题显示共 13 只，但列表区域
// 一个 DOM 行都没有、无红色报错、硬刷新无效」。本机 30+ 组合无法复现，故按
// 「防御性三分支」落地：
//   ① 小数据量退化为普通渲染 (13 只不需要虚拟滚动) —— 从根上消除虚拟列表空渲染；
//   ② 「有计数无行」自检 —— 绝不允许静默空白，必须出现可诊断面板；
//   ③ 启动组件/版本自检 —— 把包体不一致这类问题显性化。
(function (root, factory) {
  if (typeof module === 'object' && module.exports) {
    module.exports = factory();
  } else {
    root.QuantWatchlistRenderCore = factory();
  }
})(typeof self !== 'undefined' ? self : this, function () {
  'use strict';

  // 数据量 ≤ 该阈值时直接普通渲染 (真实 DOM 行: 可计数/可 Ctrl+F/可整页滚动)
  var PLAIN_THRESHOLD = 50;

  // 自选页关键组件 —— 缺失即说明包体/注册异常, 必须在启动时报警而非静默空白
  var REQUIRED_COMPONENTS = [
    'AiPage',
    'DetailSplit',
    'StockDetailDialog',
    'StatePanel',
    'VirtualList',
    'WatchGroupsDialog',
  ];

  function toFiniteNumber(v) {
    var n = Number(v);
    return isFinite(n) ? n : null;
  }

  /**
   * 是否退化为普通渲染。
   * @param {number} count 数据条数
   * @param {number} [threshold] 阈值; 缺省 PLAIN_THRESHOLD; <=0 表示禁用退化(永远虚拟化)
   * @returns {boolean}
   */
  function shouldRenderPlain(count, threshold) {
    var th = (threshold === undefined || threshold === null) ? PLAIN_THRESHOLD : toFiniteNumber(threshold);
    if (th === null || !(th > 0)) return false;
    var n = toFiniteNumber(count);
    if (n === null || n <= 0) return false;
    return n <= th;
  }

  /**
   * 是否必须显示「渲染守卫」降级面板。
   * 只处理「有数据却一行没渲染」这种病态情况; 部分渲染不硬降级, 避免误伤。
   * @param {number} expected 期望行数 (= 数据条数)
   * @param {number} rendered 实测渲染行数
   * @returns {boolean}
   */
  function shouldShowRenderGuard(expected, rendered) {
    var e = toFiniteNumber(expected);
    var r = toFiniteNumber(rendered);
    if (e === null || r === null) return false;
    if (e <= 0) return false;
    return r === 0;
  }

  /**
   * 检出缺失的必需组件 (稳定排序, 便于断言与展示)。
   * @param {object} registered 已注册组件表 (window.__quantComponents)
   * @returns {string[]}
   */
  function missingComponents(registered) {
    var reg = registered || {};
    var miss = [];
    for (var i = 0; i < REQUIRED_COMPONENTS.length; i++) {
      var k = REQUIRED_COMPONENTS[i];
      if (!reg[k]) miss.push(k);
    }
    return miss.sort();
  }

  /**
   * 组装「诊断此页」导出载荷 —— 与现场探针同构, 下次同类问题可一击定位。
   * 任何入参缺失都不得抛异常 (诊断工具本身不能成为故障点)。
   */
  function buildDiagPayload(input) {
    var o = input || {};
    var v = (o.version === undefined || o.version === null) ? '' : String(o.version);
    var sv = (o.serverVersion === undefined || o.serverVersion === null) ? '' : String(o.serverVersion);
    var comps = o.components || {};

    return {
      dom: {
        hint: o.hint === undefined ? null : o.hint,
        rowCount: toFiniteNumber(o.rowCount),
        itemCount: toFiniteNumber(o.itemCount),
        vlistPresent: o.vlistPresent === undefined ? null : !!o.vlistPresent,
        listPanePresent: o.listPanePresent === undefined ? null : !!o.listPanePresent,
      },
      state: {
        expected: toFiniteNumber(o.expected),
        splitWidth: o.splitWidth === undefined ? null : o.splitWidth,
        detailMode: o.detailMode === undefined ? null : o.detailMode,
      },
      version: {
        client: v,
        server: sv,
        mismatch: !!(v && sv && v !== sv),
      },
      components: {
        registered: Object.keys(comps).sort(),
        missing: missingComponents(comps),
      },
      capturedAt: (o.capturedAt === undefined ? new Date().toISOString() : o.capturedAt),
    };
  }

  return {
    PLAIN_THRESHOLD: PLAIN_THRESHOLD,
    REQUIRED_COMPONENTS: REQUIRED_COMPONENTS,
    shouldRenderPlain: shouldRenderPlain,
    shouldShowRenderGuard: shouldShowRenderGuard,
    missingComponents: missingComponents,
    buildDiagPayload: buildDiagPayload,
  };
});

// 6.6: 统一注册到 __quantModules (与 nav-mode-core/tabs-core 一致; UMD 默认挂 window.QuantWatchlistRenderCore)
if (typeof window !== 'undefined') {
  if (!window.__quantModules) window.__quantModules = {};
  var _wlRenderCore = (typeof module === 'object' && module.exports)
    ? module.exports
    : (typeof self !== 'undefined' && self.QuantWatchlistRenderCore)
      ? self.QuantWatchlistRenderCore
      : (window.QuantWatchlistRenderCore || null);
  if (_wlRenderCore) window.__quantModules.watchlistRenderCore = _wlRenderCore;
}
