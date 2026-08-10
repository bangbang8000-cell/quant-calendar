// quant-calendar: Virtual List core logic (v3.11 / FR-3.11.3, TC-11.6)
// 固定行高虚拟滚动的纯计算模块（可视区窗口计算），UMD 导出：
//   - 浏览器: window.QuantVirtualList
//   - Node:   require(...)（供 pytest 调 node 单元测试 TC-11.6）
// 不含 DOM/Vue 依赖，Vue 组件 (components/virtual-list.js) 仅做薄壳渲染。
(function (root, factory) {
  if (typeof module === 'object' && module.exports) {
    module.exports = factory();
  } else {
    root.QuantVirtualList = factory();
  }
})(typeof self !== 'undefined' ? self : this, function () {
  'use strict';

  var DEFAULT_BUFFER = 8; // 上下预渲染行缓冲

  // ─── 可视区窗口计算 (TC-11.6) ─────────────────────
  // scrollTop 下渲染 [startIndex, endIndex)，两端各多 buffer 行预渲染
  function computeVisibleRange(scrollTop, viewportH, rowHeight, total, buffer) {
    var h = rowHeight > 0 ? rowHeight : 1;
    var buf = (typeof buffer === 'number' && buffer >= 0) ? buffer : DEFAULT_BUFFER;
    var totalN = Math.max(0, total);
    var top = Math.max(0, scrollTop);
    var vp = Math.max(0, viewportH);
    var startIndex = Math.max(0, Math.floor(top / h) - buf);
    var endIndex = Math.min(totalN, Math.ceil((top + vp) / h) + buf);
    return { startIndex: startIndex, endIndex: endIndex };
  }

  // 总高 = 行数 × 行高（撑起滚动条）
  function computeTotalHeight(count, rowHeight) {
    return Math.max(0, count || 0) * (rowHeight > 0 ? rowHeight : 0);
  }

  // 一步拿到渲染切片 + 窗口
  function sliceVisible(items, scrollTop, viewportH, rowHeight, buffer) {
    var list = items || [];
    var range = computeVisibleRange(scrollTop, viewportH, rowHeight, list.length, buffer);
    var visible = list.slice(range.startIndex, range.endIndex);
    return {
      visible: visible,
      startIndex: range.startIndex,
      endIndex: range.endIndex,
      offsetY: range.startIndex * (rowHeight > 0 ? rowHeight : 1),
      totalHeight: computeTotalHeight(list.length, rowHeight),
    };
  }

  // 行 key：code → id → ts_code → 索引兜底
  function getRowKey(item, index) {
    if (item) {
      if (item.code != null) return item.code;
      if (item.id != null) return item.id;
      if (item.ts_code != null) return item.ts_code;
    }
    return index;
  }

  return {
    DEFAULT_BUFFER: DEFAULT_BUFFER,
    computeVisibleRange: computeVisibleRange,
    computeTotalHeight: computeTotalHeight,
    sliceVisible: sliceVisible,
    getRowKey: getRowKey,
  };
});
