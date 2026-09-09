// quant-calendar: 动态页签状态机纯函数 (V6.1 / PRD-6.1 F8)
// 按一级页面分组的页签表, 会话级内存态; 纯函数便于单测 (UMD: Node require / 浏览器 __quantModules.tabsCore)
// 规则 (PRD 2.7):
//   - 打开: 组内已有同 subPage 仅激活; 否则追加并激活
//   - 上限: 每组最多 8 个, 超出淘汰最早的非默认页签 (首个为默认页签, 不可被淘汰)
//   - 关闭: 激活页签被关 → 激活右侧相邻, 无右侧则左侧; 组空由调用方重建默认页签
(function (root, factory) {
  if (typeof module === 'object' && module.exports) {
    module.exports = factory();
  } else {
    root.QuantTabsCore = factory();
  }
})(typeof self !== 'undefined' ? self : this, function () {
  'use strict';

  var MAX_TABS = 8;

  function keyOf(page, subPage) {
    return page + '/' + subPage;
  }

  // groups: { [page]: [{ subPage, title }] }
  // 打开页签, 返回 { groups, activeKey }
  function openTab(groups, page, subPage, title) {
    var g = groups[page] || [];
    var idx = g.findIndex(function (t) { return t.subPage === subPage; });
    if (idx !== -1) {
      return { groups: groups, activeKey: keyOf(page, subPage) };
    }
    var next = g.concat([{ subPage: subPage, title: title }]);
    if (next.length > MAX_TABS) {
      next = evictOldest(next);
    }
    var nextGroups = Object.assign({}, groups, (_defineProperty({}, page, next)));
    return { groups: nextGroups, activeKey: keyOf(page, subPage) };
  }

  function _defineProperty(obj, key, value) {
    obj[key] = value;
    return obj;
  }

  // 淘汰最早的非默认页签 (首个为默认页签保留); 若组内仅有默认页签+全部为默认时回退淘汰最末
  function evictOldest(tabs) {
    if (tabs.length <= MAX_TABS) return tabs;
    // 淘汰第一个非首位的页签 (最早打开的非默认页签)
    var dropIndex = tabs.length > 1 ? 1 : 0;
    return tabs.filter(function (_, i) { return i !== dropIndex; });
  }

  // 关闭页签, 返回 { groups, nextActive } (nextActive 为 null 表示组空或无需切子页)
  function closeTab(groups, page, subPage, activeSubPage) {
    var g = groups[page] || [];
    var idx = g.findIndex(function (t) { return t.subPage === subPage; });
    if (idx === -1) {
      return { groups: groups, nextActive: null };
    }
    var next = g.filter(function (t) { return t.subPage !== subPage; });
    var nextGroups = Object.assign({}, groups, (_defineProperty({}, page, next)));
    var nextActive = null;
    if (subPage === activeSubPage) {
      if (next[idx]) nextActive = next[idx].subPage;      // 右侧相邻
      else if (next[idx - 1]) nextActive = next[idx - 1].subPage;  // 左侧
      else nextActive = null;                             // 组空
    }
    return { groups: nextGroups, nextActive: nextActive };
  }

  // 一级默认页签 (首个子页)
  function getDefaultTab(subPages) {
    return subPages && subPages.length ? subPages[0] : '';
  }

  // 某级当前页签列表
  function tabsOf(groups, page) {
    return groups[page] || [];
  }

  return {
    MAX_TABS: MAX_TABS,
    openTab: openTab,
    closeTab: closeTab,
    getDefaultTab: getDefaultTab,
    tabsOf: tabsOf,
    evictOldest: evictOldest,
    keyOf: keyOf,
  };
});
// V6.1: 统一注册到 __quantModules (与其它前端模块一致; UMD 默认挂 window.QuantTabsCore)
if (typeof window !== 'undefined') {
  if (!window.__quantModules) window.__quantModules = {};
  var _tabsCore = (typeof module === 'object' && module.exports)
    ? module.exports
    : (typeof self !== 'undefined' && self.QuantTabsCore)
      ? self.QuantTabsCore
      : (window.QuantTabsCore || null);
  if (_tabsCore) window.__quantModules.tabsCore = _tabsCore;
}
