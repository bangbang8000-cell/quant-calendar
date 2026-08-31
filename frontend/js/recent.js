// quant-calendar: 最近查看模块 (v3.17.10 / FR-3.17.10)
// 记录用户最近看过的股票（本地 localStorage，上限 10，去重，最近在前），
// 供命令面板/首页展示"最近查看"直达入口。
// 纯逻辑模块，UMD 导出：浏览器 window.__quantModules.recent / Node require(...)。
(function (root, factory) {
  if (typeof module === 'object' && module.exports) {
    module.exports = factory();
  } else {
    root.QuantRecent = factory();
  }
})(typeof self !== 'undefined' ? self : this, function () {
  'use strict';

  const RECENT_VIEWED_KEY = 'quant_recent_viewed';
  const RECENT_MAX = 10;

  function _read() {
    if (typeof localStorage === 'undefined') return [];
    try {
      const raw = localStorage.getItem(RECENT_VIEWED_KEY);
      if (!raw) return [];
      const arr = JSON.parse(raw);
      return Array.isArray(arr) ? arr : [];
    } catch (e) {
      return [];
    }
  }

  function _write(list) {
    if (typeof localStorage === 'undefined') return;
    try {
      localStorage.setItem(RECENT_VIEWED_KEY, JSON.stringify(list));
    } catch (e) { /* 存储不可用则静默降级 */ }
  }

  // 记录一次查看：按 code 去重（重复项提前并更新名称），最近在前，上限 RECENT_MAX
  function recordViewed(code, name) {
    if (!code) return false;
    let list = _read().filter(function (r) { return r.code !== code; });
    list.unshift({ code: code, name: (name || '').toString().slice(0, 32), ts: Date.now() });
    if (list.length > RECENT_MAX) list = list.slice(0, RECENT_MAX);
    _write(list);
    return true;
  }

  function getRecentViewed() {
    return _read().slice(0, RECENT_MAX);
  }

  function removeRecent(code) {
    _write(_read().filter(function (r) { return r.code !== code; }));
  }

  function clearRecent() {
    _write([]);
  }

  const api = {
    RECENT_VIEWED_KEY: RECENT_VIEWED_KEY,
    RECENT_MAX: RECENT_MAX,
    recordViewed: recordViewed,
    getRecentViewed: getRecentViewed,
    removeRecent: removeRecent,
    clearRecent: clearRecent,
  };

  if (typeof window !== 'undefined') {
    if (!window.__quantModules) window.__quantModules = {};
    window.__quantModules.recent = api;
  }

  return api;
});
