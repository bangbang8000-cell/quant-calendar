// quant-calendar: session-restore-core 6.1.4 (D5) — 会话恢复 (sessionStorage, 纯逻辑 node 可测)
// 语义: 页面/子页/筛选状态随会话保存, 刷新后恢复 (跨会话用 localStorage 由调用方处理)
(function (root, factory) {
  if (typeof module === 'object' && module.exports) {
    module.exports = factory();
  } else {
    root.QuantSessionRestore = factory();
  }
})(typeof self !== 'undefined' ? self : this, function () {
  'use strict';

  var KEY = 'qc_session_restore';

  function _storage() {
    if (typeof sessionStorage !== 'undefined' && sessionStorage) return sessionStorage;
    return null;
  }

  function save(payload) {
    var s = _storage();
    if (!s || !payload) return false;
    try {
      s.setItem(KEY, JSON.stringify(payload));
      return true;
    } catch (e) { return false; }
  }

  function restore() {
    var s = _storage();
    if (!s) return null;
    try {
      var raw = s.getItem(KEY);
      return raw ? JSON.parse(raw) : null;
    } catch (e) { return null; }
  }

  function clear() {
    var s = _storage();
    if (!s) return;
    try { s.removeItem(KEY); } catch (e) { /* 忽略 */ }
  }

  return { save: save, restore: restore, clear: clear, KEY: KEY };
});
