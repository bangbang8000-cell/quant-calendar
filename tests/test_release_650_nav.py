# -*- coding: utf-8 -*-
"""6.5.0 (FR-653/FR-654) 引入, 6.5.4 (FR-654) 摊平为 7 业务域

纯逻辑用例经 node 直接 require UMD 模块 ``frontend/js/nav-merge-core.js``
（module.exports 双写, 与浏览器 window.QuantNavMerge 同一实现）:

  TC-653-01 一级恰为 7 业务域, 键序固定, 单个业务域成员 ≤7
  TC-653-02 全部旧二级页 100% 可达 (normalize/legacyToNew/hash round-trip)
  TC-653-03 hash 新旧格式互转 (默认成员写裸 hash)
  TC-653-04 可见性读时迁移等价 (旧配置 vs 迁移后逐成员/逐一级判定一致)
  TC-653-05 二级 ≤7 拆分 (splitMore)
  TC-653-06 memberLabel 兜底不露 raw key
  TC-653-07 导航漏斗接线 (shell/runtime/lifecycle/main 走 core)
  TC-653-08 顶栏/中栏二级 ≤7 + 「更多」兜底
  TC-654-01 页面唯一 h1 + 面包屑 (FR-654.1/FR-653.4)
  TC-654-02 i18n 7 个一级键在 5 语包齐备
  TC-654-03 qcState 暴露 currentSubName
"""
import json
import os
import re
import shutil
import subprocess

import pytest

BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
FRONTEND = os.path.join(BASE, "frontend")


def _read(rel):
    with open(os.path.join(FRONTEND, *rel.split("/")), encoding="utf-8") as f:
        return f.read()


CORE = os.path.join(FRONTEND, "js", "nav-merge-core.js")

# node 内一次加载 core 并跑全部纯逻辑断言 (JSON 只回传 case → 结果, 函数不出沙箱)
_NODE_SUITE = r"""
const NC = require(process.argv[1]);
const out = {};
function case_(name, fn) {
  try { fn(); out[name] = 'pass'; } catch (e) { out[name] = 'FAIL: ' + (e && e.message || e); }
}
function assert(cond, msg) { if (!cond) throw new Error(msg); }

case_('TC-653-01', function () {
  assert(NC.NEW_NAV.length === 7, '一级应恰为 7 业务域, 实际 ' + NC.NEW_NAV.length);
  const keys = NC.NEW_NAV.map(function (p) { return p.key; });
  assert(JSON.stringify(keys) === JSON.stringify(
    ['strategies', 'calendar', 'shortterm', 'ai', 'research', 'ops', 'system']),
    '一级键序应为 strategies/calendar/shortterm/ai/research/ops/system, 实际 ' + keys.join(','));
  const total = NC.NEW_NAV.reduce(function (n, p) { return n + p.members.length; }, 0);
  assert(total === 38, '38 个旧二级页应全部登记, 实际 ' + total);
  NC.NEW_NAV.forEach(function (p) {
    assert(p.members.length <= 7, p.key + ' 单个业务域二级应 ≤7, 实际 ' + p.members.length);
  });
});

case_('TC-653-02', function () {
  const fails = [];
  NC.NEW_NAV.forEach(function (p) {
    p.members.forEach(function (m) {
      const norm = NC.normalize(m.page, m.sub);
      if (!norm || norm.page !== m.page || norm.sub !== m.sub) fails.push(p.key + '/' + m.key + ' normalize');
      const leg = NC.legacyToNew(m.page, m.sub);
      if (!leg || leg.primary !== p.key) fails.push(p.key + '/' + m.key + ' legacyToNew');
      const h = NC.toHash(m.page, m.sub);
      const parts = h.slice(1).split('/');
      const fh = NC.fromHash(parts[0], parts[1] || '');
      if (!fh || fh.page !== m.page || fh.sub !== m.sub) fails.push(p.key + '/' + m.key + ' hash=' + h);
    });
  });
  assert(fails.length === 0, '旧深链/新键互通失败: ' + fails.join('; '));
});

case_('TC-653-03', function () {
  // 默认成员写裸 hash, 非默认成员带二级键
  assert(NC.toHash('ai', 'overview') === '#ai', '默认成员应写裸 hash, 实际 ' + NC.toHash('ai', 'overview'));
  assert(NC.toHash('strategies', 'merrill') === '#strategies/merrill',
    '非默认成员应写 #strategies/merrill, 实际 ' + NC.toHash('strategies', 'merrill'));
  // 旧格式一级直入: fromHash('strategies', 'overview') 解析到策略总览首成员
  const legacy = NC.fromHash('strategies', 'overview');
  assert(legacy && legacy.page === 'strategies' && legacy.sub === 'overview',
    '旧格式 hash 应可解析, 实际 ' + JSON.stringify(legacy));
  // 6.5.0~6.5.3 合并深链仍可用: #workbench/strategies-merrill → (strategies, merrill)
  const merged = NC.fromHash('workbench', 'strategies-merrill');
  assert(merged && merged.page === 'strategies' && merged.sub === 'merrill',
    '合并期深链应重定向到业务域坐标, 实际 ' + JSON.stringify(merged));
  assert(NC.fromHash('workbench', '') && NC.fromHash('workbench', '').page === 'strategies',
    '裸 #workbench 应落到策略总览首成员');
  // 未知二级不静默改写
  assert(NC.legacyToNew('strategies', 'nope') === null, '未知二级应返回 null (上层 404 兜底)');
});

case_('TC-653-04', function () {
  const cfg = { g1: {
    visible_menus: { strategies: true, calendar: false, ai: true, system: true },
    visible_sub_pages: { 'strategies.overview': false, 'shortterm.lhb': false, 'system.config': true },
  } };
  const mg = NC.migrateVisibility(cfg);
  // 逐一级等价
  NC.NEW_NAV.forEach(function (p) {
    assert(NC.primaryVisible(cfg.g1, p.key) === NC.primaryVisible(mg.g1, p.key),
      '一级可见性迁移不等价: ' + p.key);
  });
  // 键即新键, 值原样保留 (strategies true / calendar false)
  assert(NC.primaryVisible(mg.g1, 'strategies') === true, 'strategies 应为可见');
  assert(NC.primaryVisible(mg.g1, 'calendar') === false, 'calendar 应隐藏');
  // 未配置的域默认可见
  assert(NC.primaryVisible(mg.g1, 'shortterm') === true, '未配置域应默认可见');
  // 6.5.x 合并期配置兼容: workbench=false 展开到三个业务域 → 全部隐藏
  const cfg2 = NC.migrateVisibility({ g2: { visible_menus: { workbench: false } } });
  ['strategies', 'calendar', 'shortterm'].forEach(function (k) {
    assert(NC.primaryVisible(cfg2.g2, k) === false, 'workbench=false 应展开隐藏 ' + k);
  });
  // workbench=true 时三个业务域均可见
  const cfg3 = NC.migrateVisibility({ g3: { visible_menus: { workbench: true, ai: false } } });
  assert(NC.primaryVisible(cfg3.g3, 'shortterm') === true, 'workbench=true 应展开可见 shortterm');
  assert(NC.primaryVisible(cfg3.g3, 'ai') === false, 'ai=false 应保持隐藏');
  // 逐成员等价
  NC.NEW_NAV.forEach(function (p) {
    p.members.forEach(function (m) {
      const a = NC.memberVisible(cfg.g1, p.key, m);
      const b = NC.memberVisible(mg.g1, p.key, m);
      assert(a === b, '成员可见性迁移不等价: ' + p.key + '.' + m.key + ' old=' + a + ' new=' + b);
    });
  });
  assert(NC.memberVisible(mg.g1, 'strategies',
    { key: 'overview', page: 'strategies', sub: 'overview' }) === false,
    'strategies.overview=false 应保持隐藏');
  assert(NC.memberVisible(mg.g1, 'system',
    { key: 'config', page: 'system', sub: 'config' }) === true, 'system.config=true 应保持');
});

case_('TC-653-05', function () {
  assert(NC.MAX_VISIBLE_SUBS === 7, 'MAX_VISIBLE_SUBS 应为 7 (单业务域上限)');
  const list = []; for (let i = 0; i < 7; i++) list.push(i);
  const r = NC.splitMore(list);
  assert(r.visible.length === 7 && r.more.length === 0, '7 成员应全铺开 (more 为空)');
  assert(NC.splitMore([1, 2]).more.length === 0, '不超上限时 more 应为空');
  const big = []; for (let i = 0; i < 9; i++) big.push(i);
  const rb = NC.splitMore(big);
  assert(rb.visible.length === 7 && rb.more.length === 2, '超上限时「更多」兜底仍生效');
});

case_('TC-653-06', function () {
  // t() 缺词返回 key 本身 → 应回退 MEMBER_LABELS, 不露 raw key
  const t = function (k) { return k; };
  assert(NC.memberLabel({ key: 'merrill', page: 'strategies', sub: 'merrill' }, t) === '美林时钟',
    'merrill 成员应兜底中文显示名');
  // 同名子页在不同业务域含义不同 (overview): 兜底表按 page.sub 索引
  // 6.5.5: 一级收敛为业务域名词后, 各域首成员统一显示「概览」(不再与一级名重复)
  assert(NC.memberLabel({ key: 'overview', page: 'shortterm', sub: 'overview' }, t) === '概览',
    'shortterm.overview 应显示为概览');
  assert(NC.memberLabel({ key: 'overview', page: 'strategies', sub: 'overview' }, t) === '概览',
    'strategies.overview 应显示为概览');
  assert(NC.memberLabel({ key: 'calendar', page: 'calendar', sub: 'calendar' }, t) === '日历视图',
    'calendar.calendar 应显示为日历视图 (与一级「量化日历」区分)');
  // 无 i18n、无兜底时回退 sub (仍不露 member.key)
  assert(NC.memberLabel({ key: 'unknown-key', page: 'x', sub: 'zzz' }) === 'zzz',
    '未知成员应回退 sub');
});

process.stdout.write(JSON.stringify(out));
"""


def _run_node_suite():
    if shutil.which("node") is None:
        pytest.skip("node 不可用")
    proc = subprocess.run(["node", "-e", _NODE_SUITE, CORE],
                          capture_output=True, text=True, timeout=60)
    assert proc.returncode == 0, "node 执行失败: %s" % proc.stderr
    return json.loads(proc.stdout)


def test_nav_core_pure_logic_suite():
    """TC-653-01~06: nav-merge-core 纯逻辑套件 (node require UMD)"""
    results = _run_node_suite()
    bad = {k: v for k, v in results.items() if v != "pass"}
    assert not bad, "nav-merge-core 纯逻辑用例失败: %s" % bad


def test_nav_funnel_wired_to_core():
    """TC-653-07: 三级导航漏斗 (shell/runtime/lifecycle) 与装配序均走 core 单一来源"""
    shell = _read("js/app-logic/shell.js")
    assert "QuantNavMerge" in shell and "normalize" in shell, \
        "shell.js navigateTo/菜单应经 QuantNavMerge 归一"
    runtime = _read("js/app-logic/runtime.js")
    assert "QuantNavMerge" in runtime and "normalize" in runtime, \
        "__quantGoPage 应经 QuantNavMerge 归一 (懒加载先于切页)"
    lifecycle = _read("js/app-logic/lifecycle.js")
    assert "QuantNavMerge" in lifecycle and "fromHash" in lifecycle, \
        "hash 解析/启动恢复应经 QuantNavMerge.fromHash (旧深链兼容)"
    main = _read("src/main.js")
    assert main.index("../js/nav-merge-core.js") < main.index("../js/core.js"), \
        "nav-merge-core 应先于 core.js 装配 (菜单派生依赖)"


def test_sub_tabs_more_cap():
    """TC-653-08: 顶栏 TopTabs / Header 二级标签 ≤7 (单业务域上限), 超出收「更多」"""
    toptabs = _read("src/components/TopTabs.vue")
    assert "MAX_VISIBLE" in toptabs and "moreTabs" in toptabs, "TopTabs 应有 ≤7 拆分与更多下拉"
    header = _read("js/components/global-header.js")
    assert "sub-nav-more" in header and "slice(0, 7)" in header, \
        "Header 二级标签应 slice(0,7) 且渲染 sub-nav-more 更多项"
    subnav = _read("src/components/SubNav.vue")
    assert "qc-subnav-column" in subnav, "SubNav 根类必须为 qc-subnav-column (中栏定位/宽度依赖)"
    assert "qc-subnav-divider" in subnav, "SubNav 跨页成员处应渲染分组分隔线"


def test_page_unique_h1_and_breadcrumb():
    """TC-654-01 (FR-654.1/FR-653.4): index.html 工作区含页面头 — 唯一 h1 + 面包屑"""
    idx = _read("index.html")
    assert idx.count("<h1") == 1, "全站业务骨架应恰有一个 h1 (页面标题), 实际 %d" % idx.count("<h1")
    assert "qc-page-head" in idx and "qc-breadcrumb" in idx and "qc-page-h1" in idx, \
        "应含 qc-page-head/qc-breadcrumb/qc-page-h1 页面头结构"
    assert "currentSubName" in idx, "h1/面包屑应绑定 currentSubName (二级显示名)"
    assert "currentPageName" in idx, "面包屑一级应绑定 currentPageName"


def test_i18n_nav_keys_all_locales():
    """TC-654-02: 5 语包均含 7 个一级键 (t() 缺词返回 key, 菜单会露 raw key)"""
    keys = ("strategies", "calendar", "shortterm", "ai", "research", "ops", "system")
    for f in ("zh-CN", "zh-TW", "en", "ja", "ko"):
        loc = _read("js/locales/%s.js" % f)
        for k in keys:
            assert "'nav.%s'" % k in loc, "%s 语言包缺 nav.%s" % (f, k)


def test_qcstate_exposes_current_sub_name():
    """TC-654-03: app-logic.js 解构与 setup return 均透出 currentSubName (组件可绑定)"""
    app = _read("js/app-logic.js")
    assert "currentPageName, currentSubName, lazyTick, pageComp, showUserMenu," in app, \
        "workspace 域解构应含 currentSubName"
    assert "currentPageName, currentSubName, subPageNames, searchQuery, searchStocks, onSearchSelect," in app, \
        "setup return 应透出 currentSubName"


# ─── 6.5.4 (FR-654) 布局与空间收敛 ───────────────────────────

def test_top_tabs_space_budget():
    """TC-654-04: 顶栏空间预算 — 搜索基宽压到 240px 把宽度让给二级标签区"""
    header_css = _read("css/header.css")
    assert "flex: 0 1 240px" in header_css, "搜索框基宽应压到 240px (让出 120px 给标签区)"
    assert "flex: 0 1 360px" not in header_css, "旧 360px 基宽应已移除"


def test_top_tabs_more_not_duplicated():
    """TC-654-05: 「更多」兜底按整块可见判定 — 半裁切标签不得同时出现在可见区与下拉"""
    toptabs = _read("src/components/TopTabs.vue")
    assert "r.right <= rect.right - 20" in toptabs, \
        "溢出判定应要求右缘完整可见 (否则「更多」重复列出已可见项)"


def test_subnav_column_structure():
    """TC-654-06: 中栏结构完整 — 栏头(业务域名) + 滚动体(成员列表)"""
    subnav = _read("src/components/SubNav.vue")
    assert "qc-subnav-column-header" in subnav and "qc-subnav-column-body" in subnav, \
        "中栏应含 header/body 两段 (栏头固定, 成员区滚动)"
    assert "qc-subnav-current-label" in subnav, "栏头应显示当前业务域名"
    nav_css = _read("css/nav.css")
    assert ".qc-subnav-column {" in nav_css and "position: fixed" in nav_css, \
        "中栏定位规则应挂在 qc-subnav-column"
