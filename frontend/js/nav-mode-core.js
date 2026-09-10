// quant-calendar: 导航形态与页签开关状态机纯函数 (V6.3 / PRD-6.3 F3/F4)
// 纯函数便于单测 (UMD: Node require / 浏览器 __quantModules.navModeCore)
// 形态 (PRD 3.1):
//   - subnav: 中栏二级常驻 (默认, 即 V6.1+ 现状)
//   - tree:   侧栏树状二级 (1+2 级树展开, 中栏隐藏)
//   - toptab: 顶部二级横向标签 (中栏隐藏, 动态页签隐藏, 二级 tab 承担定位)
// 页签开关 (PRD 3.2):
//   - 仅 subnav / tree 形态生效; toptab 形态强制隐藏 (D2 语义: 二级 tab 承担页签职责)
(function (root, factory) {
  if (typeof module === 'object' && module.exports) {
    module.exports = factory();
  } else {
    root.QuantNavModeCore = factory();
  }
})(typeof self !== 'undefined' ? self : this, function () {
  'use strict';

  var NAV_MODES = ['subnav', 'tree', 'toptab'];
  var DEFAULT_NAV_MODE = 'subnav';
  var KEY_NAV_MODE = 'nav_mode';
  var KEY_TABS_ENABLED = 'tabs_enabled';

  // 非法/缺失值归一化为默认形态 subnav
  function normalizeNavMode(v) {
    return NAV_MODES.indexOf(v) !== -1 ? v : DEFAULT_NAV_MODE;
  }

  // 页签可见性: subnav/tree 且 tabsEnabled=true; toptab 强制隐藏
  function tabsVisible(navMode, tabsEnabled) {
    var mode = normalizeNavMode(navMode);
    if (mode === 'toptab') return false;
    return !!tabsEnabled;
  }

  // 是否显示中栏 SubNav: 仅 subnav 形态
  function subnavVisible(navMode) {
    return normalizeNavMode(navMode) === 'subnav';
  }

  // 是否显示侧栏树状二级: 仅 tree 形态
  function treeChildrenVisible(navMode) {
    return normalizeNavMode(navMode) === 'tree';
  }

  // 是否显示顶部二级标签: 仅 toptab 形态
  function topTabsVisible(navMode) {
    return normalizeNavMode(navMode) === 'toptab';
  }

  function _storage() {
    return (typeof window !== 'undefined' && window.localStorage) ? window.localStorage : null;
  }

  // 读偏好: 无值/非法一律归一化, 不抛错
  function readPrefs() {
    var s = _storage();
    var navMode = DEFAULT_NAV_MODE;
    var tabsEnabled = true;
    if (s) {
      try {
        navMode = normalizeNavMode(s.getItem(KEY_NAV_MODE));
        var t = s.getItem(KEY_TABS_ENABLED);
        tabsEnabled = t === null ? true : t !== '0';
      } catch (e) { /* localStorage 不可用则用默认 */ }
    }
    return { navMode: navMode, tabsEnabled: tabsEnabled };
  }

  // 写偏好 (仅写合法值)
  function writePrefs(prefs) {
    var s = _storage();
    if (!s || !prefs) return;
    try {
      if (prefs.navMode !== undefined) s.setItem(KEY_NAV_MODE, normalizeNavMode(prefs.navMode));
      if (prefs.tabsEnabled !== undefined) s.setItem(KEY_TABS_ENABLED, prefs.tabsEnabled ? '1' : '0');
    } catch (e) { /* 写入失败不阻塞 */ }
  }

  return {
    NAV_MODES: NAV_MODES,
    DEFAULT_NAV_MODE: DEFAULT_NAV_MODE,
    normalizeNavMode: normalizeNavMode,
    tabsVisible: tabsVisible,
    subnavVisible: subnavVisible,
    treeChildrenVisible: treeChildrenVisible,
    topTabsVisible: topTabsVisible,
    readPrefs: readPrefs,
    writePrefs: writePrefs,
  };
});
// V6.3: 统一注册到 __quantModules (与其它前端模块一致; UMD 默认挂 window.QuantNavModeCore)
if (typeof window !== 'undefined') {
  if (!window.__quantModules) window.__quantModules = {};
  var _navModeCore = (typeof module === 'object' && module.exports)
    ? module.exports
    : (typeof self !== 'undefined' && self.QuantNavModeCore)
      ? self.QuantNavModeCore
      : (window.QuantNavModeCore || null);
  if (_navModeCore) window.__quantModules.navModeCore = _navModeCore;
}
