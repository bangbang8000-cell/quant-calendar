# -*- coding: utf-8 -*-
"""V6.3 (TEST-PLAN 6.3 TC-6.3.2.5 / DEV-PLAN M4): 配置入口「界面与导航」 — L2 门禁"""
import os
import re

BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
FRONTEND = os.path.join(BASE, "frontend")
LOCALES = os.path.join(FRONTEND, "js", "locales")

REQUIRED_KEYS = [
    "navMode.subnav", "navMode.tree", "navMode.toptab", "tabsEnabled.hint",
]


def _read(path):
    with open(path, encoding="utf-8") as f:
        return f.read()


def test_i18n_keys_all_locales():
    """TC-6.3.2.5: navMode.* / tabsEnabled.* 在 5 语语言包中均存在 (5 语 key 严格对齐守卫)"""
    for name in ("zh-CN", "en", "ja", "ko", "zh-TW"):
        src = _read(os.path.join(LOCALES, name + ".js"))
        keys = set(re.findall(r"'([a-zA-Z0-9._-]+)':", src))
        missing = [k for k in REQUIRED_KEYS if k not in keys]
        assert not missing, f"{name} 语言包缺少界面与导航 key: {missing}"
        for k in REQUIRED_KEYS:
            m = re.search(r"'%s':\s*'([^']+)'" % k, src)
            assert m and m.group(1).strip(), f"{name} 的 {k} 值不应为空"


def test_feature_page_has_nav_section():
    """M4.1: 功能配置页含「界面与导航」区块 + 形态下拉 + 页签开关"""
    src = _read(os.path.join(FRONTEND, "js", "components", "system-page.js"))
    assert "🧭 界面与导航" in src, "功能配置页应含「界面与导航」区块"
    assert ":model-value=\"navMode\"" in src, "形态下拉应绑定 navMode"
    assert ":model-value=\"tabsEnabled\"" in src, "页签开关应绑定 tabsEnabled"
    # 三形态选项
    for opt in ('value="subnav"', 'value="tree"', 'value="toptab"'):
        assert opt in src, f"形态下拉缺少选项 {opt}"
    # toptab 下页签开关禁用 + 提示
    assert ':disabled="navMode === \'toptab\'"' in src, "toptab 下页签开关应 disabled"
    assert "t('tabsEnabled.hint')" in src, "toptab 下应显示页签不可用提示"


def test_feature_page_wired_to_state():
    """M4.2: 变更接线 → setNavMode/setTabsEnabled (即时生效 + writePrefs 持久化)"""
    sys_src = _read(os.path.join(FRONTEND, "js", "components", "system-page.js"))
    assert "function onNavModeChange(v) { if (state.setNavMode) state.setNavMode(v); }" in sys_src
    assert "function onTabsEnabledChange(v) { if (state.setTabsEnabled) state.setTabsEnabled(v); }" in sys_src
    assert "onNavModeChange, onTabsEnabledChange," in sys_src, "setup return 应导出接线函数"
    # 状态层: setNavMode/setTabsEnabled 写 localStorage (刷新保持)
    app = _read(os.path.join(FRONTEND, "js", "app-logic.js"))
    assert "function setNavMode" in app and "writePrefs" in app, \
        "setNavMode 应经 navModeCore.writePrefs 持久化"
    assert "function setTabsEnabled" in app and "writePrefs" in app, \
        "setTabsEnabled 应经 navModeCore.writePrefs 持久化"
