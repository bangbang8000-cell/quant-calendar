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


def _read_f(rel):
    p = os.path.join(FRONTEND, *rel.split("/"))
    with open(p, encoding="utf-8") as f:
        return f.read()


def _read_locale(name):
    with open(os.path.join(LOCALES, name + ".js"), encoding="utf-8") as f:
        return f.read()


def test_menu_defs_restructured():
    """TC-6.6.1.x: allMenuDefs 反映 6.6.1 重构 (日历合并/组合持仓/策略管理/通知中心)"""
    src = _read_f("js/app-logic.js")
    # 日历: 4 视图合并为 ['calendar','pool']
    assert "subPages: ['calendar', 'pool']" in src, "calendar 应合并为 ['calendar','pool']"
    # 智能评估: 含 portfolio 入口
    m = re.search(r"subPages: \['overview', 'focus', 'watchlist', 'history', 'evaluation-analysis', '([^']+)', 'chat_history'\]", src)
    assert m and m.group(1) == "portfolio", "ai.subPages 应含 portfolio (组合持仓入口)"
    # 策略研究: strategy-write/custom-write 合并为 strategy-manage
    assert "subPages: ['research-overview', 'quant-research', 'strategy-manage', 'backtest', 'backtest-history']" in src, \
        "research.subPages 应含 strategy-manage"
    # 系统配置: 含 notification
    assert "'notification'" in src.split("'system'")[1].split("guestSubPages")[0], "system.subPages 应含 notification"


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
    """TC-6.6.2.8: SYSTEM_GROUPS 覆盖全部 system.subPages key, 且分组符合方案A"""
    subnav = _read_f("src/components/SubNav.vue")
    groups = subnav.split("const SYSTEM_GROUPS =")[1].split("export default")[0]
    for key in ("status", "health", "schedule", "guard", "execution",   # 运行监控
                "autoeval", "usage",                                     # 智能服务
                "datasource", "feature", "datadict", "notification",     # 平台设置
                "user", "about"):                                        # 组织管理
        assert "'" + key + "'" in groups, f"SYSTEM_GROUPS 缺 {key}"
    # 方案A: execution 与 guard 归位运行监控; 组织管理不再含 execution
    # 运行监控组内顺序: status/health/schedule/guard/execution
    run_group = groups.split("运行监控")[1].split("}]}")[0]
    assert run_group.index("guard") < run_group.index("execution"), "运行监控组 guard 应在 execution 前"
    org_group = groups.split("组织管理")[1].split("}]}")[0]
    assert "execution" not in org_group, "组织管理组不应再含 execution"
    # 平台设置组含 notification
    plat_group = groups.split("平台设置")[1].split("}]}")[0]
    assert "notification" in plat_group, "平台设置组应含 notification"


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
