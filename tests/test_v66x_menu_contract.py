# -*- coding: utf-8 -*-
"""V6.6.1 (PRD F-6.6.10): 菜单结构契约测试 — 菜单定义 ↔ 图标映射/i18n/页面分支/hash重定向/SYSTEM_GROUPS 一致性守护。
菜单层重构后(日历视图合并/组合持仓入口/策略管理合并/通知中心拆子页), 任何联动遗漏都在此暴露。
"""
import os
import re

BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
FRONTEND = os.path.join(BASE, "frontend")
LOCALES = os.path.join(FRONTEND, "js", "locales")
LOCALE_NAMES = ["zh-CN", "en", "ja", "ko", "zh-TW"]


import page_source
def _read_f(rel):
    _b = page_source.bundle(rel)
    if _b is not None:
        return _b
    p = os.path.join(FRONTEND, *rel.split("/"))
    with open(p, encoding="utf-8") as f:
        return f.read()


def _read_locale(name):
    with open(os.path.join(LOCALES, name + ".js"), encoding="utf-8") as f:
        return f.read()


def test_menu_defs_restructured():
    """TC-6.6.1.x (6.5.4 重订): 菜单结构契约读 nav-merge-core 的按业务域段 —
    日历视图合并 / 组合持仓入口 / 策略管理合并 / 评估历史拆分等历史重构结果在成员表中保持"""
    core = _read_f("js/nav-merge-core.js")
    # 段起点用一级声明签名 (成员键 'calendar' 会先命中 split, 不能只用 key: 'calendar')
    cal = core.split("key: 'calendar', name: '量化日历'")[1].split("key: 'shortterm', name:")[0]
    # 日历: 4 视图合并为 calendar+pool 两成员
    assert "page: 'calendar', sub: 'calendar'" in cal, "日历应合并为 calendar 成员"
    assert "page: 'calendar', sub: 'pool'" in cal, "日历应含 pool 成员"
    assert "sub: 'week'" not in cal and "sub: 'month'" not in cal and "sub: 'year'" not in cal, \
        "日历 4 视图合并不应还原"
    # 智能评估: 含 portfolio 成员 (组合持仓入口), 位于 chat_history 前
    m = re.search(r"key: '[a-z-]+', page: 'ai', sub: 'portfolio'\s*\},\s*\{\s*key: 'chat_history'", core)
    assert m, "ai 成员 chat_history 前应为 portfolio (组合持仓入口)"
    # 策略研究: strategy-write/custom-write 合并为 strategy-manage
    research = core.split("key: 'research'")[1].split("key: 'ops'")[0]
    assert "sub: 'strategy-manage'" in research, "research 成员应含 strategy-manage"
    assert "sub: 'strategy-write'" not in research and "sub: 'custom-write'" not in research, \
        "旧 strategy-write/custom-write 拆分子页不应还原"
    # 系统配置: 含 notification 成员
    system = core.split("key: 'system'")[1]
    assert "sub: 'notification'" in system, "system 成员应含 notification"


def test_sub_page_names_covered():
    """TC-6.6.1.x: subPageNames 覆盖新增/更名 key"""
    src = _read_f("js/app-logic.js")
    for key in ("'calendar'", "'portfolio'", "'strategy-manage'", "'notification'"):
        assert key in src.split("const subPageNames =")[1].split("};")[0], f"subPageNames 缺 {key}"
    # 更名后的显示名
    assert "'market': '大盘行情'" in src, "subPageNames market 应更名大盘行情"
    assert "'market-review': '每日复盘'" in src, "subPageNames market-review 应更名每日复盘"
    assert "'autoeval': 'AI 服务'" in src, "subPageNames autoeval 应更名 AI 服务"
    assert "'usage': '用量统计'" in src, "subPageNames usage 应更名用量统计"


def test_subnav_and_toptab_icons_sync():
    """TC-6.6.1.x: SubNav/TopTabs 图标映射覆盖新 subPage key (双层映射一致)"""
    subnav = _read_f("src/components/SubNav.vue")
    toptab = _read_f("src/components/TopTabs.vue")
    for fname, src in (("SubNav.vue", subnav), ("TopTabs.vue", toptab)):
        icons_block = src.split("const SUB_ICONS =")[1].split("}")[0] if "const SUB_ICONS =" in src else ""
        assert "'calendar': 'calendar'" in src, f"{fname} 图标应含 calendar 主视图"
        assert "'strategy-manage': 'layers'" in src, f"{fname} 图标应含 strategy-manage"
        assert "'portfolio': 'bar-chart-3'" in src, f"{fname} 图标应含 portfolio"


def test_system_groups_consistent():
    """TC-6.6.2.8 (6.5.0 重订): FR-653 后 ops/system 为独立一级 (方案A 跨页分组随 IA 退役) —
    契约改为成员全量覆盖 + 方案A 顺序遗产: 运行监控 guard 在 execution 前, 组织管理不含 execution"""
    core = _read_f("js/nav-merge-core.js")
    ops = re.findall(r"\{ key: '[a-z-]+', page: 'ops', sub: '([a-z-]+)' \}", core)
    sysm = re.findall(r"\{ key: '[a-z-]+', page: 'system', sub: '([a-z-]+)' \}", core)
    for key in ("status", "health", "schedule", "usage", "guard", "datadict", "execution"):
        assert key in ops, f"ops 成员缺 {key}"
    for key in ("config", "feature", "autoeval", "datasource", "user", "notification", "about"):
        assert key in sysm, f"system 成员缺 {key}"
    # 方案A 顺序遗产: 运行监控组内 guard 在 execution 前; 组织管理 (system) 不含 execution
    assert ops.index("guard") < ops.index("execution"), "运行监控 guard 应在 execution 前"
    assert "execution" not in sysm, "组织管理 (system) 不应再含 execution"


def test_i18n_keys_parity_all_locales():
    """TC-6.6.1.x: 5 语言包均含新增/更名 sub.* key (i18n 缺词守卫覆盖)"""
    required = ["'sub.calendar'", "'sub.portfolio'", "'sub.strategy-manage'",
                "'sub.notification'", "'sub.autoeval'", "'sub.market'", "'sub.market-review'"]
    for name in LOCALE_NAMES:
        src = _read_locale(name)
        for k in required:
            assert k in src, f"{name}.js 缺 {k}"


def test_page_branches_cover_new_subpages():
    """TC-6.6.1.x: 页面组件 currentSubPage 分支覆盖新子页"""
    research = _read_f("js/components/research-page.js")
    assert "currentSubPage === 'strategy-manage'" in research, "research-page 应含 strategy-manage 分支"
    ai = _read_f("js/components/ai-page.js")
    assert "currentSubPage === 'portfolio'" in ai, "ai-page 应含 portfolio 分支"
    system = _read_f("js/components/system-page.js")
    assert "currentSubPage === 'notification'" in system, "system-page 应含 notification 分支"


def test_hash_redirects_exist():
    """TC-6.6.1.x: 旧深链重定向存在 (日历视图/策略编写合并)"""
    lifecycle = _read_f("js/app-logic/lifecycle.js")
    assert "calViewMap" in lifecycle, "lifecycle 应有日历视图重定向映射"
    assert "strategy-write" in lifecycle and "custom-write" in lifecycle, "lifecycle 应有策略编写重定向"


def test_calendar_uses_currentview_not_subpage():
    """TC-6.6.1.x: 日历视图由 currentView 驱动 (页内切换), 不再依赖 4 个子页"""
    cal = _read_f("js/components/calendar-page.js")
    assert "currentSubPage !== 'pool'" in cal, "日历页仍以 subPage 区分视图/股票池"
    assert "switchViewLocal" in cal, "日历页应有页内视图切换"
    gh = _read_f("js/components/global-header.js")
    assert "currentView === 'day'" in gh, "Header 日期选择器应由 currentView 驱动"


def test_no_legacy_calendar_subpage_jumps():
    """TC-6.6.1.x: 无残留的 daily/weekly/monthly/yearly 子页跳转 (K线周期值除外)"""
    # 跳转子页赋值应为 'calendar' (非 daily)
    pool = _read_f("js/stock-pool.js")
    assert "currentSubPage.value = 'calendar'" in pool, "股票池跳转应为 calendar 主视图"
