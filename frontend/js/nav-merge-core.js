// quant-calendar: 导航结构单一来源 (6.5.0 FR-653 引入 / 6.5.4 FR-654 摊平为 7 业务域)
// 纯逻辑 (无 DOM): 新一级结构 / 旧深链兼容映射 / 用户组可见性迁移 / 二级 ≤7 拆分
// UMD: 浏览器 window.QuantNavMerge / Node require(...) (pytest 可单测)
//
// 设计要点 (6.5.4 FR-654 定稿):
// - 一级 7: 策略 / 量化日历 / 短线复盘 / 智能评估 / 策略研究 / 运行监控 / 平台设置
//   (6.5.4 按业务域摊平; 6.5.5 一级收敛为业务域名词, 首成员统一「概览」, 不再与一级重复)
// - 一级键 = 渲染内部页键, 二级键 = 内部子页键 —— 懒加载 chunk / pageComp / 子页 watch
//   与 hash 深链零改动
// - 6.5.x 合并深链 100% 兼容: '#workbench/strategies-merrill' → (strategies, merrill)
// - 用户组可见性配置读时迁移 (旧 key / 合并 key → 新 key), 迁移前后可见性一致
(function (root, factory) {
  var api = factory();
  if (typeof module === 'object' && module.exports) module.exports = api;
  if (root) root.QuantNavMerge = api;
})((typeof globalThis !== 'undefined' ? globalThis : (typeof window !== 'undefined' ? window : (typeof self !== 'undefined' ? self : null))), function () {
  'use strict';

  // ── 一级导航 (7) — 6.5.4 (FR-654): 按业务域摊平 ──
  // 一级键 = 旧页面内部键 (strategies/calendar/shortterm/ai/research/ops/system),
  // member: {key(二级键), page(页面内部键), sub(子页内部键)} — 二级键与旧子页键同名,
  // 因此 '#strategies/overview' 这类历史深链天然有效, 无需重定向表。
  var NEW_NAV = [
    {
      key: 'strategies', name: '策略', iconName: 'pie-chart', group: 'research',
      members: [
        { key: 'overview', page: 'strategies', sub: 'overview' },
        { key: 'merrill', page: 'strategies', sub: 'merrill' },
        { key: 'market', page: 'strategies', sub: 'market' },
        { key: 'consensus', page: 'strategies', sub: 'consensus' },
      ],
    },
    {
      key: 'calendar', name: '量化日历', iconName: 'calendar', group: 'research',
      members: [
        { key: 'calendar', page: 'calendar', sub: 'calendar' },
        { key: 'pool', page: 'calendar', sub: 'pool' },
      ],
    },
    {
      key: 'shortterm', name: '短线复盘', iconName: 'trending-up', group: 'research',
      members: [
        { key: 'overview', page: 'shortterm', sub: 'overview' },
        { key: 'market-review', page: 'shortterm', sub: 'market-review' },
        { key: 'ztpool', page: 'shortterm', sub: 'ztpool' },
        { key: 'lhb', page: 'shortterm', sub: 'lhb' },
        { key: 'sector', page: 'shortterm', sub: 'sector' },
        { key: 'intraday', page: 'shortterm', sub: 'intraday' },
      ],
    },
    {
      key: 'ai', name: '智能评估', iconName: 'bot', group: 'research',
      members: [
        { key: 'overview', page: 'ai', sub: 'overview' },
        { key: 'focus', page: 'ai', sub: 'focus' },
        { key: 'watchlist', page: 'ai', sub: 'watchlist' },
        { key: 'history', page: 'ai', sub: 'history' },
        { key: 'evaluation-analysis', page: 'ai', sub: 'evaluation-analysis' },
        { key: 'portfolio', page: 'ai', sub: 'portfolio' },
        { key: 'chat_history', page: 'ai', sub: 'chat_history' },
      ],
    },
    {
      key: 'research', name: '策略研究', iconName: 'flask-conical', group: 'research',
      members: [
        { key: 'research-overview', page: 'research', sub: 'research-overview' },
        { key: 'quant-research', page: 'research', sub: 'quant-research' },
        { key: 'strategy-manage', page: 'research', sub: 'strategy-manage' },
        { key: 'backtest', page: 'research', sub: 'backtest' },
        { key: 'backtest-history', page: 'research', sub: 'backtest-history' },
      ],
    },
    {
      key: 'ops', name: '运行监控', iconName: 'activity', group: 'platform',
      members: [
        { key: 'status', page: 'ops', sub: 'status' },
        { key: 'health', page: 'ops', sub: 'health' },
        { key: 'schedule', page: 'ops', sub: 'schedule' },
        { key: 'usage', page: 'ops', sub: 'usage' },
        { key: 'guard', page: 'ops', sub: 'guard' },
        { key: 'datadict', page: 'ops', sub: 'datadict' },
        { key: 'execution', page: 'ops', sub: 'execution' },
      ],
    },
    {
      key: 'system', name: '平台设置', iconName: 'settings', group: 'platform',
      guestSubPages: ['config', 'about'],
      members: [
        { key: 'config', page: 'system', sub: 'config' },
        { key: 'feature', page: 'system', sub: 'feature' },
        { key: 'autoeval', page: 'system', sub: 'autoeval' },
        { key: 'datasource', page: 'system', sub: 'datasource' },
        { key: 'user', page: 'system', sub: 'user' },
        { key: 'notification', page: 'system', sub: 'notification' },
        { key: 'about', page: 'system', sub: 'about' },
      ],
    },
  ];

  // 6.5.4: 一级键 = 旧页面键, 故不再需要旧→新一级映射 (保留空对象维护 API 形状)
  var LEGACY_PRIMARY = {};

  // 6.5.0~6.5.3 的合并键兼容: 'workbench/<成员键>' → 拆分后的业务域坐标
  var MERGED_SUB = {
    'workbench.strategies-overview': ['strategies', 'overview'],
    'workbench.strategies-merrill': ['strategies', 'merrill'],
    'workbench.strategies-market': ['strategies', 'market'],
    'workbench.strategies-consensus': ['strategies', 'consensus'],
    'workbench.calendar-calendar': ['calendar', 'calendar'],
    'workbench.calendar-pool': ['calendar', 'pool'],
    'workbench.shortterm-overview': ['shortterm', 'overview'],
    'workbench.shortterm-market-review': ['shortterm', 'market-review'],
    'workbench.shortterm-ztpool': ['shortterm', 'ztpool'],
    'workbench.shortterm-lhb': ['shortterm', 'lhb'],
    'workbench.shortterm-sector': ['shortterm', 'sector'],
    'workbench.shortterm-intraday': ['shortterm', 'intraday'],
  };
  // 旧合并一级键 → 拆分后的多个新一级 (可见性配置读时迁移: 1 旧键展开为 3 新键)
  var MERGED_PRIMARY_EXPAND = {
    'workbench': ['strategies', 'calendar', 'shortterm'],
  };

  // 6.5.4: 二级键 = 旧子页键 (原 LEGACY_SUB 重定向表已无必要)
  var LEGACY_SUB = {};

  // 二级中文兜底名 — 键为 '页面键.子页键' (同名子页在不同页面含义不同, 不能扁平化)
  var MEMBER_LABELS = {
    'strategies.overview': '概览',
    'strategies.merrill': '美林时钟',
    'strategies.market': '大盘行情',
    'strategies.consensus': '策略共识榜',
    'calendar.calendar': '日历视图',
    'calendar.pool': '股票池',
    'shortterm.overview': '概览',
    'shortterm.market-review': '每日复盘',
    'shortterm.ztpool': '涨停复盘',
    'shortterm.lhb': '龙虎榜',
    'shortterm.sector': '板块资金',
    'shortterm.intraday': '盘中核验',
    'ai.overview': '概览',
    'ai.focus': '重点跟踪',
    'ai.watchlist': '我的自选',
    'ai.history': '评估历史',
    'ai.evaluation-analysis': '评估分析',
    'ai.portfolio': '组合持仓',
    'ai.chat_history': '问股历史',
    'research.research-overview': '概览',
    'research.quant-research': '量化研究',
    'research.strategy-manage': '策略管理',
    'research.backtest': '策略回测',
    'research.backtest-history': '回测记录',
    'ops.status': '系统状态',
    'ops.health': '数据源健康',
    'ops.schedule': '调度任务',
    'ops.usage': '用量统计',
    'ops.guard': 'AI 事实校验',
    'ops.datadict': '数据字典',
    'ops.execution': '执行看板',
    'system.config': '系统配置',
    'system.feature': '基础配置',
    'system.autoeval': 'AI 服务',
    'system.datasource': '数据源',
    'system.user': '用户与权限',
    'system.notification': '通知中心',
    'system.about': '关于',
  };

  // 二级上限 7 — 一级摊平后单个业务域最多 7 个成员, 顶栏一行可容纳, 「更多」仅作兜底
  var MAX_VISIBLE_SUBS = 7;

  function nav() {
    // 深拷贝防调用方改写共享结构
    return JSON.parse(JSON.stringify(NEW_NAV));
  }

  function primaryByKey(key) {
    for (var i = 0; i < NEW_NAV.length; i++) {
      if (NEW_NAV[i].key === key) return NEW_NAV[i];
    }
    return null;
  }

  // 新 (一级, 二级键) → 内部渲染坐标 {page, sub} (旧键)
  function toInternal(primary, subKey) {
    var p = primaryByKey(primary);
    if (!p) return null;
    if (!subKey) {
      var first = p.members[0];
      return first ? { page: first.page, sub: first.sub } : null;
    }
    for (var i = 0; i < p.members.length; i++) {
      if (p.members[i].key === subKey) {
        return { page: p.members[i].page, sub: p.members[i].sub };
      }
    }
    return null;
  }

  // 旧 (一级, 二级) → 新坐标 {primary, subKey} (旧深链兼容; 未知返回 null)
  function legacyToNew(page, sub) {
    // 6.5.0~6.5.3 合并键还原: 'workbench/<成员键>' → 所属业务域
    var merged = MERGED_SUB[page + '.' + sub];
    if (merged) { page = merged[0]; sub = merged[1]; }
    else if (page === 'workbench' && !sub) { page = 'strategies'; sub = 'overview'; }
    var primary = LEGACY_PRIMARY[page] || page;
    var p = primaryByKey(primary);
    if (!p) return null;
    var subKey = sub;
    var qualified = page + '.' + sub;
    if (LEGACY_SUB[qualified]) subKey = LEGACY_SUB[qualified];
    for (var i = 0; i < p.members.length; i++) {
      if (p.members[i].key === subKey) return { primary: primary, subKey: subKey };
    }
    if (!sub) return { primary: primary, subKey: p.members[0].key };
    return null; // 二级不存在 → 上层按 404 兜底 (不静默改写)
  }

  // 导航漏斗: 接受新键或旧键, 一律归一为内部渲染坐标
  // 返回 null 表示无法解析 (调用方保持原状)
  function normalize(page, sub) {
    if (!page) return null;
    if (primaryByKey(page)) return toInternal(page, sub || '');
    var legacy = legacyToNew(page, sub || '');
    if (!legacy) return null;
    return toInternal(legacy.primary, legacy.subKey);
  }

  // 内部坐标 → 规范 hash (新格式); calendar 主视图写裸 hash 避免冗余
  function toHash(page, sub) {
    var legacy = legacyToNew(page, sub || '');
    if (!legacy) return '#' + page;
    var def = toInternal(legacy.primary, '');
    var isDefault = def && def.page === page && def.sub === (sub || '');
    if (isDefault) return '#' + legacy.primary;
    return '#' + legacy.primary + '/' + legacy.subKey;
  }

  // hash (新/旧格式均可) → 内部坐标; 解析失败返回 null (上层保持原状)
  function fromHash(primary, subKey) {
    if (primaryByKey(primary)) return toInternal(primary, subKey || '');
    return normalize(primary, subKey || '');
  }

  // 用户组可见性配置读时迁移: 旧 key → 新 key (值不变; 新旧同时存在以新为准)
  // groupsConfig: { [groupId]: { visible_menus: {...}, visible_sub_pages: {...} } }
  function migrateVisibility(groupsConfig) {
    var out = {};
    var cfg = groupsConfig || {};
    Object.keys(cfg).forEach(function (gid) {
      var g = cfg[gid] || {};
      var migrated = {};
      // visible_menus: 旧一级键 → 新一级键 (6.5.x 合并键 'workbench' 展开为三个业务域)
      // 新键直写优先; 同一新键收到多个旧值时任一 true 即 true (与读时判定语义一致)
      var vm = {};
      var oldVals = {};   // newKey → [旧键值...]
      Object.keys(g.visible_menus || {}).forEach(function (oldKey) {
        var targets = MERGED_PRIMARY_EXPAND[oldKey] || [LEGACY_PRIMARY[oldKey] || oldKey];
        var val = g.visible_menus[oldKey];
        targets.forEach(function (newKey) {
          if (newKey === oldKey) { vm[newKey] = val; }
          else { (oldVals[newKey] = oldVals[newKey] || []).push(val); }
        });
      });
      Object.keys(oldVals).forEach(function (newKey) {
        if (newKey in vm) return; // 新旧同时存在以新为准
        vm[newKey] = oldVals[newKey].every(function (v) { return v === false; }) ? false : true;
      });
      // visible_sub_pages: 旧 '一级.二级' → 新 '新一级.新二级键'
      var vsp = {};
      Object.keys(g.visible_sub_pages || {}).forEach(function (oldQ) {
        var dot = oldQ.indexOf('.');
        var op = dot >= 0 ? oldQ.slice(0, dot) : oldQ;
        var os = dot >= 0 ? oldQ.slice(dot + 1) : '';
        var legacy = legacyToNew(op, os);
        var newQ = legacy ? (legacy.primary + '.' + legacy.subKey)
                          : ((LEGACY_PRIMARY[op] || op) + '.' + os);
        if (!(newQ in vsp)) vsp[newQ] = g.visible_sub_pages[oldQ];
      });
      migrated = { visible_menus: vm, visible_sub_pages: vsp };
      Object.keys(g).forEach(function (k) {
        if (k !== 'visible_menus' && k !== 'visible_sub_pages') migrated[k] = g[k];
      });
      out[gid] = migrated;
    });
    return out;
  }

  // 一级可见性判定 (读时迁移): 新键值优先; 否则若配置含旧键,
  // 任一旧键为 true 即可见, 全部为 false 才隐藏 (迁移前后可见性一致)
  function primaryVisible(group, primaryKey) {
    if (!group) return true;
    var vm = group.visible_menus || {};
    if (primaryKey in vm) return vm[primaryKey] !== false;
    // 6.5.x 未迁移配置: 'workbench' 同时代表 strategies/calendar/shortterm
    var mergedOwner = Object.keys(MERGED_PRIMARY_EXPAND).filter(function (k) {
      return MERGED_PRIMARY_EXPAND[k].indexOf(primaryKey) >= 0;
    });
    var mergedHit = mergedOwner.filter(function (k) { return k in vm; });
    if (mergedHit.length) {
      return mergedHit.some(function (k) { return vm[k] !== false; });
    }
    var legacyKeys = Object.keys(LEGACY_PRIMARY).filter(function (k) {
      return LEGACY_PRIMARY[k] === primaryKey;
    });
    var present = legacyKeys.filter(function (k) { return k in vm; });
    if (present.length) {
      return present.some(function (k) { return vm[k] !== false; });
    }
    return true;
  }

  // 成员可见性判定: 新键直查 + 旧键回查 (旧配置迁移前也一致)
  function memberVisible(group, primary, member) {
    if (!group) return true;
    var vm = group.visible_menus || {};
    if (primary in vm && vm[primary] === false) return false;
    var vsp = group.visible_sub_pages || {};
    var newQ = primary + '.' + member.key;
    if (newQ in vsp) return vsp[newQ] !== false;
    var oldQ = member.page + '.' + member.sub;
    if (oldQ in vsp) return vsp[oldQ] !== false;
    return true;
  }

  // 二级拆分 (6.5.4: 阈值 12→7, 单个业务域成员 ≤7 直接铺开, 「更多」仅兜底)
  // 返回 {visible: members[0..6], more: members[7..]}
  function splitMore(members, max) {
    var cap = max || MAX_VISIBLE_SUBS;
    var list = members || [];
    return { visible: list.slice(0, cap), more: list.slice(cap) };
  }

  // 成员显示名: 优先调用方传入的 t() 结果, 缺失回退中文兜底 (不露 raw key)
  function memberLabel(member, t) {
    if (typeof t === 'function') {
      var q = t('sub.' + member.page + '.' + member.sub);
      if (q && q !== ('sub.' + member.page + '.' + member.sub)) return q;
      var p = t('sub.' + member.sub);
      if (p && p !== ('sub.' + member.sub)) return p;
    }
    // 6.5.4: 兜底表按 '页面键.子页键' 索引 — 同名子页(overview)在不同页面含义不同
    return MEMBER_LABELS[member.page + '.' + member.sub] || MEMBER_LABELS[member.key] || member.sub;
  }

  return {
    NEW_NAV: NEW_NAV,
    LEGACY_PRIMARY: LEGACY_PRIMARY,
    LEGACY_SUB: LEGACY_SUB,
    MEMBER_LABELS: MEMBER_LABELS,
    MAX_VISIBLE_SUBS: MAX_VISIBLE_SUBS,
    nav: nav,
    primaryByKey: primaryByKey,
    toInternal: toInternal,
    legacyToNew: legacyToNew,
    normalize: normalize,
    toHash: toHash,
    fromHash: fromHash,
    migrateVisibility: migrateVisibility,
    primaryVisible: primaryVisible,
    memberVisible: memberVisible,
    splitMore: splitMore,
    memberLabel: memberLabel,
  };
});
