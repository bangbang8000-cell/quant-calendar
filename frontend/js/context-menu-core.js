// quant-calendar: context-menu-core 6.1.4 (D4) — 右键菜单核心 (纯逻辑, node 可测)
// 能力: 视口内定位(边缘翻转) + 默认动作清单 + 长按触发判定
(function (root, factory) {
  if (typeof module === 'object' && module.exports) {
    module.exports = factory();
  } else {
    root.QuantContextMenu = factory();
  }
})(typeof self !== 'undefined' ? self : this, function () {
  'use strict';

  var MARGIN = 8;

  // 定位: 触发点 + 菜单尺寸 + 视口 → 调整后坐标 (超界翻转, 边界留 margin)
  function positionMenu(x, y, menuW, menuH, viewportW, viewportH, margin) {
    var m = margin == null ? MARGIN : margin;
    var left = x;
    var top = y;
    if (left + menuW > viewportW - m) left = Math.max(m, viewportW - m - menuW);
    if (top + menuH > viewportH - m) top = Math.max(m, viewportH - m - menuH);
    return { left: Math.round(left), top: Math.round(top) };
  }

  // 默认动作清单 (按上下文裁剪由调用方决定)
  var ACTIONS = [
    { key: 'detail', label: '查看详情' },
    { key: 'add-watch', label: '加入自选' },
    { key: 'copy', label: '复制代码' },
    { key: 'export', label: '导出' },
    { key: 'delete', label: '删除' },
  ];

  function getActions() {
    return ACTIONS.map(function (a) { return { key: a.key, label: a.label }; });
  }

  // 6.3.1 (T-6.3.1.6): 按列表上下文裁剪动作
  // watchlist: 已在自选中 → 去掉「加入自选」、露出「删除(移出自选)」
  // 其余上下文(history/pool/consensus/...): 可用「加入自选」, 隐藏「删除」
  // 不传 context 时保持 5 项默认清单 (向后兼容 getActions)
  function getActionsFor(context) {
    var ctx = context || '';
    if (!ctx) return getActions();
    return ACTIONS.filter(function (a) {
      if (a.key === 'add-watch') return ctx !== 'watchlist';
      if (a.key === 'delete') return ctx === 'watchlist';
      return true;
    }).map(function (a) { return { key: a.key, label: a.label }; });
  }

  // 长按判定: 事件对 (down, up) → 是否长按 (默认 500ms)
  function isLongPress(downTime, upTime, thresholdMs) {
    var t = thresholdMs == null ? 500 : thresholdMs;
    if (!downTime || !upTime) return false;
    return (upTime - downTime) >= t;
  }

  return { positionMenu: positionMenu, getActions: getActions, getActionsFor: getActionsFor, isLongPress: isLongPress };
});
