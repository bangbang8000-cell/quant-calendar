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
})((typeof globalThis !== 'undefined' ? globalThis : (typeof window !== 'undefined' ? window : (typeof self !== 'undefined' ? self : this))), function () {
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
    // V5.3.0 (T-5.3.3.3): 板块/策略域分派
    if (item.type === 'sector') return { action: 'sector', name: item.name };
    if (item.type === 'strategy') return { action: 'strategy', id: item.id, name: item.name };
    if (item.type === 'stock' || (item.code && item.name)) return { action: 'stock', code: item.code, name: item.name };
    return null;
  }

  // ─── 默认指令定义（命令面板与全局搜索共享，TC-11.4）──
  // V5.3.0 (T-5.3.3.1 / FR-5.3.3.1): 指令集扩展 — 覆盖全部子页入口 + 高频动作
  const DEFAULT_COMMANDS = [
    { key: 'refresh', label: '刷新当前页数据', icon: '🔄', keywords: 'reload refresh 刷新' },
    { key: 'export', label: '导出当前 CSV', icon: '📥', keywords: 'csv export 导出' },
    { key: 'batch', label: '批量 AI 评估', icon: '🤖', keywords: 'batch eval 批量 评估' },
    { key: 'ai', label: '打开 AI 问股', icon: '💬', keywords: 'chat ask 问股' },
    { key: 'sidebar', label: '折叠/展开侧边栏', icon: '📁', keywords: 'sidebar nav 侧边栏' },
    { key: 'today', label: '今日一屏', icon: '📅', keywords: 'today 今日 一屏 看板' },
    { key: 'add-portfolio', label: '加入组合', icon: '📊', keywords: 'portfolio 组合 加入 持仓' },
    { key: 'open-system', label: '打开系统设置', icon: '🖥', keywords: 'system 系统 设置 配置' },
    { key: 'refresh-data-source', label: '刷新数据源', icon: '📡', keywords: 'datasource 数据源 刷新 tushare akshare' },
    { key: 'open-shortterm', label: '打开短线复盘', icon: '⚡', keywords: 'shortterm 短线 复盘 涨停' },
    { key: 'open-research', label: '打开策略研究', icon: '🔬', keywords: 'research 策略 研究 回测' },
    { key: 'open-calendar', label: '打开量化日历', icon: '🗓', keywords: 'calendar 日历 股票池' },
  ];

  // ─── V5.0.6 T-5.0.63: 注册制 + 全局快捷键 ─────────────────────
  // 快捷键组合规范: "Ctrl+K" / "Shift+Alt+A" / "F5"; 修饰键 Ctrl/Alt/Shift/Meta(Cmd/Win)
  var MOD_ALIASES = {
    ctrl: ['ctrl', 'control', '⌃'],
    alt: ['alt', 'option', '⌥'],
    shift: ['shift', '⇧'],
    meta: ['meta', 'cmd', 'command', 'win', '⌘', '⊞'],
  };

  function parseKeyCombo(combo) {
    if (!combo || typeof combo !== 'string') return null;
    var parts = combo.split('+').map(function (s) { return s.trim(); }).filter(Boolean);
    if (!parts.length) return null;
    var key = parts.pop().toLowerCase();
    if (!key) return null;
    var mods = { ctrl: false, alt: false, shift: false, meta: false };
    parts.forEach(function (m) {
      var l = m.toLowerCase();
      if (MOD_ALIASES.ctrl.indexOf(l) !== -1) mods.ctrl = true;
      else if (MOD_ALIASES.alt.indexOf(l) !== -1) mods.alt = true;
      else if (MOD_ALIASES.shift.indexOf(l) !== -1) mods.shift = true;
      else if (MOD_ALIASES.meta.indexOf(l) !== -1) mods.meta = true;
    });
    return { ctrl: mods.ctrl, alt: mods.alt, shift: mods.shift, meta: mods.meta, key: key };
  }

  function matchShortcut(parsed, ev) {
    if (!parsed || !ev) return false;
    var k = String(ev.key || ev.code || '').toLowerCase();
    if (parsed.key !== k) return false;
    return parsed.ctrl === !!ev.ctrlKey
        && parsed.alt === !!ev.altKey
        && parsed.shift === !!ev.shiftKey
        && parsed.meta === !!ev.metaKey;
  }

  function canonicalCombo(parsed) {
    if (!parsed) return '';
    var mods = [];
    if (parsed.ctrl) mods.push('Ctrl');
    if (parsed.alt) mods.push('Alt');
    if (parsed.shift) mods.push('Shift');
    if (parsed.meta) mods.push('Meta');
    mods.push(parsed.key.toUpperCase());
    return mods.join('+');
  }

  // 命令注册表: key 全局唯一
  function createCommandRegistry() {
    var map = {};
    return {
      register: function (def) {
        if (!def || !def.key) throw new Error('命令 key 必填');
        if (map[def.key]) throw new Error('命令重复注册: ' + def.key);
        map[def.key] = Object.assign({}, def);
        return def.key;
      },
      list: function () { return Object.keys(map).map(function (k) { return map[k]; }); },
      get: function (key) { return map[key] || null; },
      remove: function (key) { delete map[key]; },
      has: function (key) { return !!map[key]; },
      count: function () { return Object.keys(map).length; },
    };
  }

  // 快捷键注册表: 同一组合唯一 + 同一 action 唯一
  function createShortcutRegistry() {
    var map = {};
    var byAction = {};
    return {
      register: function (combo, action, description) {
        var parsed = parseKeyCombo(combo);
        if (!parsed) throw new Error('无效快捷键: ' + combo);
        var canon = canonicalCombo(parsed);
        if (map[canon]) throw new Error('快捷键冲突: ' + combo);
        if (action != null && byAction[action] !== undefined) {
          throw new Error('动作重复绑定: ' + action);
        }
        map[canon] = { combo: combo, action: action, description: description || '', parsed: parsed };
        byAction[action] = canon;
        return canon;
      },
      resolve: function (ev) {
        for (var c in map) {
          if (matchShortcut(map[c].parsed, ev)) return map[c].action;
        }
        return null;
      },
      list: function () { return Object.keys(map).map(function (c) { return map[c]; }); },
      unregister: function (combo) {
        var canon = canonicalCombo(parseKeyCombo(combo));
        if (map[canon]) { delete byAction[map[canon].action]; delete map[canon]; }
      },
      count: function () { return Object.keys(map).length; },
    };
  }

  // 默认快捷键: 命令面板 Ctrl+K + 常用 (刷新 F5 / 侧边栏 Ctrl+B / AI 问股 Ctrl+J)
  function createDefaultShortcuts() {
    var reg = createShortcutRegistry();
    reg.register('Ctrl+K', 'toggle-palette', '打开命令面板');
    reg.register('F5', 'refresh', '刷新当前页');
    reg.register('Ctrl+B', 'toggle-sidebar', '折叠/展开侧边栏');
    reg.register('Ctrl+J', 'open-ai', '打开 AI 问股');
    // V5.3.0 (T-5.3.3.1 / FR-5.3.3.1): 高频动作快捷键
    reg.register('Ctrl+D', 'open-today', '今日一屏');
    reg.register('Ctrl+E', 'batch-eval', '批量 AI 评估');
    reg.register('Ctrl+G', 'add-portfolio', '加入组合');
    return reg;
  }

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
    parseKeyCombo: parseKeyCombo,
    matchShortcut: matchShortcut,
    canonicalCombo: canonicalCombo,
    createCommandRegistry: createCommandRegistry,
    createShortcutRegistry: createShortcutRegistry,
    createDefaultShortcuts: createDefaultShortcuts,
  };
});

// V4.8.1 (UMD 修复): UMD 被 Rollup 转 CJS 后走 module.exports 分支,
// window.QuantCommandPanel 挂载被跳过 → keys.js/command-panel.js 取不到。
// 修复: main.js 显式 import 本模块 (拿 factory 结果) 并挂载 window.QuantCommandPanel。
// (本文件保持 UMD 结构, 供 Node require 单测; ESM 构建时 export 由 Rollup 从 module.exports 提取)
