// quant-calendar: undo-core 6.1.1 (A3) — 可撤销操作注册栈 (纯逻辑, node 可测)
// 模式: 破坏性操作成功 → register(fn, label, timeoutMs) 获得 id → UI 展示「撤销」按钮
//       → 5s 内 undo(id) 执行恢复; 超时自动移除 (不可再撤销)
// 与 UI 解耦: 本模块不依赖 Vue/ElementPlus, 由调用方负责 toast/按钮渲染
(function (root, factory) {
  if (typeof module === 'object' && module.exports) {
    module.exports = factory();
  } else {
    root.QuantUndoCore = factory();
  }
})(typeof self !== 'undefined' ? self : this, function () {
  'use strict';

  function createUndoStack() {
    var items = {};   // id -> { fn, label, timer, active }
    var seq = 0;

    function register(fn, label, timeoutMs) {
      if (typeof fn !== 'function') return '';
      var id = 'undo-' + (++seq);
      var rec = { fn: fn, label: label || '', timer: null, active: true };
      items[id] = rec;
      if (timeoutMs && timeoutMs > 0) {
        rec.timer = setTimeout(function () { remove(id); }, timeoutMs);
      }
      return id;
    }

    // 执行撤销; 返回是否成功 (已超时/已撤销返回 false)
    function undo(id) {
      var rec = items[id];
      if (!rec || !rec.active) return false;
      if (rec.timer) clearTimeout(rec.timer);
      delete items[id];
      rec.active = false;
      try { rec.fn(); } catch (e) { /* 恢复失败由调用方提示 */ }
      return true;
    }

    function remove(id) {
      var rec = items[id];
      if (!rec) return;
      if (rec.timer) clearTimeout(rec.timer);
      delete items[id];
      rec.active = false;
    }

    function activeCount() {
      var n = 0;
      for (var k in items) { if (Object.prototype.hasOwnProperty.call(items, k)) n++; }
      return n;
    }

    return { register: register, undo: undo, remove: remove, activeCount: activeCount };
  }

  return { createUndoStack: createUndoStack };
});
