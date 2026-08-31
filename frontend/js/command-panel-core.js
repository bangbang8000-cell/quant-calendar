// quant-calendar: Command Panel core logic (v3.11 / FR-3.11.1)
// 纯逻辑模块（三域检索 + 键盘索引 + 开关 state），UMD 导出：
//   - 浏览器: window.QuantCommandPanel
//   - Node:   require(...)（供 pytest 调 node 单元测试 TC-11.1/11.2/11.3）
// 不含 DOM/Vue 依赖，Vue 组件 (components/command-panel.js) 仅做薄壳渲染。
(function (root, factory) {
  if (typeof module === 'object' && module.exports) {
    module.exports = factory();
  } else {
    root.QuantCommandPanel = factory();
  }
})(typeof self !== 'undefined' ? self : this, function () {
  'use strict';

  // ─── 工具 ─────────────────────────────────────────
  function normalize(query) {
    return String(query || '').trim().toLowerCase();
  }

  // 简单包含匹配（支持多关键词空格分隔，全部命中才算）
  function matches(needle, haystack) {
    if (!needle) return true;
    const parts = needle.split(/\s+/).filter(Boolean);
    if (!parts.length) return true;
    const text = String(haystack || '').toLowerCase();
    return parts.every(function (p) { return text.indexOf(p) !== -1; });
  }

  // ─── 开关 state (TC-11.1) ──────────────────────────
  function createPaletteState() {
    return { visible: false, query: '', activeIndex: 0 };
  }

  // open=true 强制打开, false 强制关闭, 缺省取反
  function toggleVisible(state, open) {
    if (open === undefined) open = !state.visible;
    state.visible = open;
    if (open) {
      state.query = '';
      state.activeIndex = 0;
    }
    return state.visible;
  }

  // ─── 菜单检索 (TC-11.2) ───────────────────────────
  // menuDefs: [{ key, name, icon, subPages:[] }]
  // subPageNames: { subPageKey: '中文名' }
  // 匹配 name / key / 任一子页中文名；返回扁平化 menu 条目
  function searchMenus(query, menuDefs, subPageNames) {
    const q = normalize(query);
    if (!menuDefs || !menuDefs.length) return [];
    const out = [];
    menuDefs.forEach(function (m) {
      const pageHit = matches(q, m.name) || matches(q, m.key);
      const subs = (m.subPages || []).filter(function (sp) {
        const label = (subPageNames && subPageNames[sp]) || sp;
        return matches(q, label) || matches(q, sp);
      });
      if (pageHit) {
        out.push({
          type: 'menu', menuKey: m.key, subPage: m.subPages && m.subPages[0] || '',
          label: m.name, subLabel: '页面', icon: m.icon || '📄',
        });
      }
      subs.forEach(function (sp) {
        out.push({
          type: 'menu', menuKey: m.key, subPage: sp,
          label: (subPageNames && subPageNames[sp]) || sp,
          subLabel: m.name, icon: m.icon || '📄',
        });
      });
    });
    // 菜单优先（页面项在前），最多取 8
    return out.slice(0, 8);
  }

  // ─── 指令检索 (TC-11.2) ───────────────────────────
  // commandDefs: [{ key, label, keywords:''(可选), icon }]
  // 匹配 label / key / keywords
  function searchCommands(query, commandDefs) {
    const q = normalize(query);
    if (!commandDefs || !commandDefs.length) return [];
    return commandDefs
      .filter(function (c) {
        if (!q) return true;
        if (matches(q, c.label) || matches(q, c.key)) return true;
        if (c.keywords && matches(q, c.keywords)) return true;
        return false;
      })
      .slice(0, 8);
  }

  // ─── 股票本地过滤 (TC-11.2) ────────────────────────
  // stockList: [{ code, name }]（来自本地缓存/已加载列表）
  // 匹配 code / name；空 query 返回空（股票域必须有关键字）
  function filterStocksLocal(query, stockList) {
    const q = normalize(query);
    if (!q || !stockList || !stockList.length) return [];
    return stockList
      .filter(function (s) {
        return matches(q, s.code) || matches(q, s.name);
      })
      .slice(0, 8)
      .map(function (s) {
        return { type: 'stock', code: s.code, name: s.name, label: s.name, subLabel: s.code, icon: '📈' };
      });
  }

  // ─── 合并三域 + 扁平索引 (TC-11.2/11.3) ────────────
  // 返回 { groups: [{key,label,items}], flat: [...统一条目] }
  function mergeResults(menus, commands, stocks) {
    const groups = [];
    const flat = [];
    if (stocks && stocks.length) {
      groups.push({ key: 'stock', label: '📈 股票', items: stocks });
      flat.push.apply(flat, stocks);
    }
    if (menus && menus.length) {
      groups.push({ key: 'menu', label: '🧭 菜单', items: menus });
      flat.push.apply(flat, menus);
    }
    if (commands && commands.length) {
      groups.push({ key: 'command', label: '⚡ 指令', items: commands });
      flat.push.apply(flat, commands);
    }
    return { groups: groups, flat: flat };
  }

  // ─── 键盘移动索引 (TC-11.3) ────────────────────────
  // dir: -1 上 / +1 下；循环到头尾；total<=0 返回 0
  function moveIndex(current, total, dir) {
    if (total <= 0) return 0;
    const next = ((current || 0) + dir) % total;
    if (next < 0) return total - 1;
    return next;
  }

  // ─── 全局搜索建议构建 (TC-11.4) ─────────────────────
  // 菜单 + 指令域同步构建；股票域结果异步，由调用方拼接。
  // 返回 [{ type:'menu',... } | { type:'command',... }]
  function buildSearchSuggestions(query, menuDefs, subPageNames, commandDefs) {
    const menus = searchMenus(query, menuDefs, subPageNames).map(function (m) {
      return {
        type: 'menu', menuKey: m.menuKey, subPage: m.subPage,
        label: m.label, subLabel: m.subLabel, icon: m.icon,
        value: m.icon + ' ' + m.label + ' · ' + m.subLabel,
      };
    });
    const commands = searchCommands(query, commandDefs || []).map(function (c) {
      return {
        type: 'command', key: c.key, label: c.label, icon: c.icon, subLabel: '指令',
        value: c.icon + ' ' + c.label,
      };
    });
    return menus.concat(commands);
  }

  // ─── 搜索选中分派 (TC-11.4) ────────────────────────
  // 返回 { action: 'menu'|'stock'|'command'|null, ...payload }；由调用方执行对应动作。
  function dispatchSearchSelection(item) {
    if (!item) return null;
    if (item.type === 'menu') return { action: 'menu', menuKey: item.menuKey, subPage: item.subPage };
    if (item.type === 'command') return { action: 'command', key: item.key };
    if (item.type === 'stock' || (item.code && item.name)) return { action: 'stock', code: item.code, name: item.name };
    return null;
  }

  // ─── 默认指令定义（命令面板与全局搜索共享，TC-11.4）──
  const DEFAULT_COMMANDS = [
    { key: 'refresh', label: '刷新当前页数据', icon: '🔄', keywords: 'reload refresh 刷新' },
    { key: 'export', label: '导出当前 CSV', icon: '📥', keywords: 'csv export 导出' },
    { key: 'batch', label: '批量 AI 评估', icon: '🤖', keywords: 'batch eval 批量 评估' },
    { key: 'ai', label: '打开 AI 问股', icon: '💬', keywords: 'chat ask 问股' },
    { key: 'sidebar', label: '折叠/展开侧边栏', icon: '📁', keywords: 'sidebar nav 侧边栏' },
  ];

  return {
    normalize: normalize,
    createPaletteState: createPaletteState,
    toggleVisible: toggleVisible,
    searchMenus: searchMenus,
    searchCommands: searchCommands,
    filterStocksLocal: filterStocksLocal,
    mergeResults: mergeResults,
    moveIndex: moveIndex,
    buildSearchSuggestions: buildSearchSuggestions,
    dispatchSearchSelection: dispatchSearchSelection,
    DEFAULT_COMMANDS: DEFAULT_COMMANDS,
  };
});
