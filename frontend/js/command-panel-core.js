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
  // menuDefs: [{ key, name, icon, subPages:[] }] 或 6.5.2 起含 members:[{key,page,sub}]
  // subPageNames: { subPageKey: '中文名' }
  // 匹配 name / key / 任一子页中文名；返回扁平化 menu 条目
  // 6.5.2 (FR-653): members 优先 — menuKey/subPage 输出成员旧坐标 (page/sub),
  // 与 pick 处 navigateTo(旧键, 旧sub) 对齐; 无 members 时退回旧 subPages 路径 (单测兼容)
  function searchMenus(query, menuDefs, subPageNames) {
    const q = normalize(query);
    if (!menuDefs || !menuDefs.length) return [];
    const NC = (typeof window !== 'undefined' && window.QuantNavMerge) || null;
    const out = [];
    menuDefs.forEach(function (m) {
      const pageHit = matches(q, m.name) || matches(q, m.key);
      const members = Array.isArray(m.members) && m.members.length ? m.members : null;
      const subs = members
        ? members.map(function (mm) {
            return {
              page: mm.page, sub: mm.sub,
              label: (NC && NC.memberLabel) ? NC.memberLabel(mm) : ((subPageNames && subPageNames[mm.sub]) || mm.sub),
            };
          })
        : (m.subPages || []).map(function (sp) {
            return { page: m.key, sub: sp, label: (subPageNames && subPageNames[sp]) || sp };
          });
      const hitSubs = subs.filter(function (x) {
        return matches(q, x.label) || matches(q, x.sub);
      });
      if (pageHit) {
        const first = hitSubs[0] || subs[0];
        out.push({
          type: 'menu', menuKey: first ? first.page : m.key, subPage: first ? first.sub : '',
          label: m.name, subLabel: '页面', icon: m.icon || 'file-text',
        });
      }
      hitSubs.forEach(function (x) {
        out.push({
          type: 'menu', menuKey: x.page, subPage: x.sub,
          label: x.label, subLabel: m.name, icon: m.icon || 'file-text',
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
        return { type: 'stock', code: s.code, name: s.name, label: s.name, subLabel: s.code, icon: 'trending-up' };
      });
  }

  // ─── 合并三域 + 扁平索引 (TC-11.2/11.3) ────────────
  // 返回 { groups: [{key,label,items}], flat: [...统一条目] }
  function mergeResults(menus, commands, stocks) {
    const groups = [];
    const flat = [];
    if (stocks && stocks.length) {
      groups.push({ key: 'stock', label: '股票', items: stocks });
      flat.push.apply(flat, stocks);
    }
    if (menus && menus.length) {
      groups.push({ key: 'menu', label: '菜单', items: menus });
      flat.push.apply(flat, menus);
    }
    if (commands && commands.length) {
      groups.push({ key: 'command', label: '指令', items: commands });
      flat.push.apply(flat, commands);
    }
    return { groups: groups, flat: flat };
  }

  // ─── 6.4.2 (FR-645): 六类实体分组检索 ──────────────
  // 固定分组顺序: 股票 → 板块 → 策略 → 页面 → 指令 → 记录(AI历史/数据字典)
  var ENTITY_GROUPS = [
    { key: 'stock', label: '股票' },
    { key: 'sector', label: '板块' },
    { key: 'strategy', label: '策略' },
    { key: 'menu', label: '页面' },
    { key: 'command', label: '指令' },
    { key: 'record', label: '记录' },
  ];

  // 通用实体过滤: fields 为参与匹配的属性名; 空 query 返回空 (实体域必须有关键字)
  function filterEntities(query, list, fields, type, opts) {
    var q = normalize(query);
    if (!q || !list || !list.length) return [];
    opts = opts || {};
    var max = opts.max || 8;
    return list.filter(function (it) {
      for (var i = 0; i < fields.length; i++) {
        if (matches(q, it[fields[i]])) return true;
      }
      return false;
    }).slice(0, max).map(function (it) {
      return Object.assign({}, it, { type: type });
    });
  }

  // 把各域结果按固定顺序组装为 groups/flat (丢弃空域; 记录域 label 可自定义)
  function mergeEntityGroups(buckets) {
    buckets = buckets || {};
    var groups = [];
    var flat = [];
    ENTITY_GROUPS.forEach(function (g) {
      var items = buckets[g.key];
      if (!items || !items.length) return;
      groups.push({
        key: g.key,
        label: buckets[g.key + '_label'] || g.label,
        items: items.slice(),
      });
      flat.push.apply(flat, items);
    });
    return { groups: groups, flat: flat };
  }

  // 扁平索引 → 所属分组下标 / 组内下标
  function locateIndex(groups, index) {
    if (!groups || !groups.length) return { groupIndex: -1, itemIndex: -1 };
    var offset = 0;
    for (var i = 0; i < groups.length; i++) {
      var n = (groups[i].items || []).length;
      if (index < offset + n) return { groupIndex: i, itemIndex: index - offset };
      offset += n;
    }
    return { groupIndex: -1, itemIndex: -1 };
  }

  function flatIndexOfGroup(groups, groupIndex) {
    if (!groups || groupIndex < 0 || groupIndex >= groups.length) return 0;
    var offset = 0;
    for (var i = 0; i < groupIndex; i++) offset += (groups[i].items || []).length;
    return offset;
  }

  // Tab / Shift+Tab 切组: 循环; 返回目标组的首个扁平下标
  function groupIndexAfterKey(groups, currentFlatIndex, back) {
    if (!groups || !groups.length) return 0;
    var loc = locateIndex(groups, currentFlatIndex);
    var gi = loc.groupIndex < 0 ? 0 : loc.groupIndex;
    var n = groups.length;
    gi = back ? (gi - 1 + n) % n : (gi + 1) % n;
    return flatIndexOfGroup(groups, gi);
  }

  // ─── 6.4.2 (FR-645): 最近访问 (任意实体类型) ───────
  var RECENT_LIMIT = 8;

  function addRecentItem(list, item, max) {
    var cap = max || RECENT_LIMIT;
    if (!item) return (list || []).slice();
    var out = (list || []).filter(function (x) {
      return !(x && x.type === item.type && String(x.id || x.code || x.label) === String(item.id || item.code || item.label));
    });
    out.unshift(Object.assign({}, item, { recentAt: Date.now() }));
    return out.slice(0, cap);
  }

  function parseRecent(json) {
    if (!json || typeof json !== 'string') return [];
    try {
      var arr = JSON.parse(json);
      if (!Array.isArray(arr)) return [];
      return arr.filter(function (x) { return x && x.type && (x.label || x.name); }).slice(0, RECENT_LIMIT);
    } catch (e) {
      return [];
    }
  }

  function serializeRecent(list) {
    try {
      return JSON.stringify((list || []).slice(0, RECENT_LIMIT));
    } catch (e) {
      return '[]';
    }
  }

  function buildRecentSuggestions(list) {
    return (list || []).map(function (it) {
      return Object.assign({}, it, { subLabel: (it.subLabel || '最近访问') });
    });
  }

  // ─── 6.4.2 (FR-645): 无结果时的替代建议 ───────────
  function _editDistance(a, b) {
    a = String(a || ''); b = String(b || '');
    var m = a.length, n = b.length;
    if (!m) return n;
    if (!n) return m;
    var prev = [];
    for (var j = 0; j <= n; j++) prev[j] = j;
    for (var i = 1; i <= m; i++) {
      var cur = [i];
      for (var k = 1; k <= n; k++) {
        cur[k] = Math.min(prev[k] + 1, cur[k - 1] + 1,
          prev[k - 1] + (a.charAt(i - 1) === b.charAt(k - 1) ? 0 : 1));
      }
      prev = cur;
    }
    return prev[n];
  }

  // 拼写/输入偏差时给 3 条以内相近词, 阈值 = max(2, len/3)
  function suggestAlternatives(query, labels, max) {
    var q = normalize(query);
    if (!q || !labels || !labels.length) return [];
    var limit = max || 3;
    return labels.map(function (l) {
      return { label: l, dist: _editDistance(q, normalize(l)) };
    }).filter(function (x) {
      return x.dist <= Math.max(2, Math.ceil(q.length / 3));
    }).sort(function (a, b) { return a.dist - b.dist; })
      .slice(0, limit)
      .map(function (x) { return x.label; });
  }

  // ─── 6.4.2 (FR-645): 输入法组合期保护 ─────────────
  function isComposing(ev) {
    if (!ev) return false;
    return !!(ev.isComposing || ev.keyCode === 229);
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
        label: m.label, subLabel: m.subLabel, icon: m.icon, iconName: m.icon,
        value: m.icon + ' ' + m.label + ' · ' + m.subLabel,
      };
    });
    const commands = searchCommands(query, commandDefs || []).map(function (c) {
      return {
        type: 'command', key: c.key, label: c.label, icon: c.icon, iconName: c.icon, subLabel: '指令',
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
    // 6.4.2 (FR-645): 记录域 — 数据字典字段 / AI 评估历史
    if (item.type === 'dict') return { action: 'dict', field: item.field, name: item.label || item.field };
    if (item.type === 'eval') return { action: 'eval', code: item.code, name: item.name || item.label };
    if (item.type === 'stock' || (item.code && item.name)) return { action: 'stock', code: item.code, name: item.name };
    return null;
  }

  // ─── 默认指令定义（命令面板与全局搜索共享，TC-11.4）──
  // V5.3.0 (T-5.3.3.1 / FR-5.3.3.1): 指令集扩展 — 覆盖全部子页入口 + 高频动作
  const DEFAULT_COMMANDS = [
    { key: 'refresh', label: '刷新当前页数据', icon: 'refresh', keywords: 'reload refresh 刷新' },
    { key: 'export', label: '导出当前 CSV', icon: 'download', keywords: 'csv export 导出' },
    { key: 'batch', label: '批量 AI 评估', icon: 'bot', keywords: 'batch eval 批量 评估' },
    { key: 'ai', label: '打开 AI 问股', icon: 'message-circle', keywords: 'chat ask 问股' },
    { key: 'sidebar', label: '折叠/展开侧边栏', icon: 'folder', keywords: 'sidebar nav 侧边栏' },
    { key: 'today', label: '今日一屏', icon: 'calendar', keywords: 'today 今日 一屏 看板' },
    // 6.1.1 (A2): 新手引导可回看
    { key: 'onboarding', label: '新手引导（重新查看）', icon: 'sparkles', keywords: 'guide tour onboarding 引导 新手 帮助' },
    { key: 'add-portfolio', label: '加入组合', icon: 'bar-chart-3', keywords: 'portfolio 组合 加入 持仓' },
    { key: 'open-system', label: '打开系统设置', icon: 'cpu', keywords: 'system 系统 设置 配置' },
    { key: 'refresh-data-source', label: '刷新数据源', icon: 'radio-tower', keywords: 'datasource 数据源 刷新 tushare akshare' },
    { key: 'open-shortterm', label: '打开短线复盘', icon: 'zap', keywords: 'shortterm 短线 复盘 涨停' },
    { key: 'open-eval-history', label: '打开评估历史', icon: 'history', keywords: 'history 评估历史 历史 命中率' },
    { key: 'open-research', label: '打开策略研究', icon: 'flask-conical', keywords: 'research 策略 研究 回测' },
    { key: 'open-calendar', label: '打开量化日历', icon: 'calendar-days', keywords: 'calendar 日历 股票池' },
    // 6.1.4 (D1): 命令面板扩展 — 全部子页导航 + 主题切换 (共 40+ 条)
    { key: 'open-watchlist', label: '打开我的自选', icon: 'star', keywords: 'watchlist 自选 收藏' },
    { key: 'manage-groups', label: '管理自选分组', icon: 'folder-open', keywords: 'groups 分组 自选 管理 归类' },
    { key: 'open-focus', label: '打开重点跟踪', icon: 'target', keywords: 'focus 重点 跟踪 盯盘' },
    { key: 'open-portfolio', label: '打开模拟组合', icon: 'wallet', keywords: 'portfolio 组合 持仓 净值' },
    { key: 'open-backtest', label: '打开回测工作台', icon: 'line-chart', keywords: 'backtest 回测 净值 收益' },
    { key: 'open-market-review', label: '打开每日复盘', icon: 'book-open', keywords: 'review 复盘 市场 收盘' },
    { key: 'open-shortterm-sectors', label: '打开板块资金', icon: 'pie-chart', keywords: 'sector 板块 资金 行业' },
    { key: 'open-shortterm-intraday', label: '打开盘中核验', icon: 'clock', keywords: 'intraday 盘中 核验 验证' },
    { key: 'open-status', label: '打开系统状态', icon: 'activity', keywords: 'ops status 状态 运行 健康' },
    { key: 'open-health', label: '打开数据源健康', icon: 'database', keywords: 'health 数据源 健康 源状态' },
    { key: 'open-schedule', label: '打开调度任务', icon: 'clock', keywords: 'schedule 调度 任务 定时' },
    { key: 'open-guard', label: '打开AI事实护栏', icon: 'shield', keywords: 'guard 护栏 事实 校验' },
    { key: 'open-usage', label: '打开用量统计', icon: 'bar-chart-3', keywords: 'usage 用量 统计 调用量' },
    { key: 'open-datadict', label: '打开数据字典', icon: 'book-open', keywords: 'datadict 数据字典 字段' },
    { key: 'open-notification', label: '打开通知中心', icon: 'bell', keywords: 'notification 通知 消息' },
    { key: 'open-users', label: '打开用户与权限', icon: 'users', keywords: 'users 用户 权限 rbac 角色' },
    { key: 'open-autoeval', label: '打开AI服务配置', icon: 'bot', keywords: 'autoeval 自动评估 AI 服务 模型' },
    { key: 'open-feature', label: '打开基础配置', icon: 'settings', keywords: 'feature 基础 配置 功能' },
    { key: 'open-config', label: '打开配置保存', icon: 'save', keywords: 'config 配置 保存 备份' },
    // 6.3.1 (T-6.3.1.6): 命令集与页面一一对应 — 补齐 7 个一级页的全部子页入口 (共 15 条新增;
    // open-eval-history 已由 V6.7.1 高频直达提供, 不重复注册)
    { key: 'open-strategies-overview', label: '打开策略概览', icon: 'layout-dashboard', keywords: 'strategies overview 策略 概览 总览' },
    { key: 'open-merrill', label: '打开美林时钟', icon: 'clock', keywords: 'merrill 美林 时钟 周期 投资钟' },
    { key: 'open-strategies-market', label: '打开大盘行情', icon: 'line-chart', keywords: 'market 大盘 行情 指数 大盘行情' },
    { key: 'open-consensus', label: '打开策略共识榜', icon: 'trophy', keywords: 'consensus 共识 榜单 一致预期' },
    { key: 'open-pool', label: '打开股票池', icon: 'database', keywords: 'pool 股票池 选池 日历' },
    { key: 'open-ai-overview', label: '打开评估概览', icon: 'bot', keywords: 'ai overview 评估 概览 看板' },
    { key: 'open-eval-analysis', label: '打开评估分析', icon: 'bar-chart-3', keywords: 'analysis 评估分析 分布 维度' },
    { key: 'open-chat-history', label: '打开问股历史', icon: 'message-circle', keywords: 'chat history 问股 历史 对话' },
    { key: 'open-quant-research', label: '打开量化研究', icon: 'flask-conical', keywords: 'quant research 量化 研究 注册表' },
    { key: 'open-strategy-manage', label: '打开策略管理', icon: 'layers', keywords: 'manage 策略 管理 微调 母本' },
    { key: 'open-backtest-history', label: '打开回测记录', icon: 'history', keywords: 'backtest 回测 记录 历史 净值' },
    { key: 'open-ztpool', label: '打开涨停复盘', icon: 'trending-up', keywords: 'ztpool 涨停 复盘 池' },
    { key: 'open-lhb', label: '打开龙虎榜', icon: 'list', keywords: 'lhb 龙虎榜 席位 资金' },
    { key: 'open-execution', label: '打开执行看板', icon: 'activity', keywords: 'execution 执行 看板 流水线 任务' },
    { key: 'open-about', label: '打开关于', icon: 'info', keywords: 'about 关于 版本 说明' },
    { key: 'theme-gold', label: '金色主题', icon: 'palette', keywords: 'theme gold 金色 主题 颜色' },
    { key: 'theme-blue', label: '蓝色主题', icon: 'palette', keywords: 'theme blue 蓝色 主题' },
    { key: 'theme-red', label: '红色主题', icon: 'palette', keywords: 'theme red 红色 主题' },
    { key: 'theme-green', label: '绿色主题', icon: 'palette', keywords: 'theme green 绿色 主题' },
    { key: 'theme-purple', label: '紫色主题', icon: 'palette', keywords: 'theme purple 紫色 主题' },
    { key: 'theme-pink', label: '粉色主题', icon: 'palette', keywords: 'theme pink 粉色 主题' },
    { key: 'theme-dark', label: '暗色主题', icon: 'moon', keywords: 'theme dark 暗色 深色 夜间' },
    { key: 'theme-light', label: '亮色主题', icon: 'sun', keywords: 'theme light 亮色 浅色 日间' },
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
    // V6.7.1 (PRD F-6.7.2): 高频直达快捷键
    reg.register('Ctrl+H', 'open-eval-history', '打开评估历史');
    reg.register('Ctrl+Shift+S', 'open-shortterm', '打开短线复盘');
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
    // 6.4.2 (FR-645)
    ENTITY_GROUPS: ENTITY_GROUPS,
    filterEntities: filterEntities,
    mergeEntityGroups: mergeEntityGroups,
    locateIndex: locateIndex,
    flatIndexOfGroup: flatIndexOfGroup,
    groupIndexAfterKey: groupIndexAfterKey,
    RECENT_LIMIT: RECENT_LIMIT,
    addRecentItem: addRecentItem,
    parseRecent: parseRecent,
    serializeRecent: serializeRecent,
    buildRecentSuggestions: buildRecentSuggestions,
    suggestAlternatives: suggestAlternatives,
    isComposing: isComposing,
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

// V6.6 (PRD-6.6): 强制浏览器全局挂载 — 无论 Rollup 是否走 module.exports 分支,
// 若 window.QuantCommandPanel 未被 UMD 挂载, 则从 module.exports 补挂
(function (root) {
  'use strict';
  if (root && !root.QuantCommandPanel) {
    try {
      var m = (typeof module !== 'undefined' && module.exports) ? module.exports : null;
      if (m) root.QuantCommandPanel = m;
    } catch (e) { /* ignore */ }
  }
})((typeof window !== 'undefined' ? window : (typeof globalThis !== 'undefined' ? globalThis : null)));
