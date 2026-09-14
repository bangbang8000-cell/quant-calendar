# -*- coding: utf-8 -*-
"""V5.15 (PRD-v5.15 F2): 用户组配置先于首屏页面恢复 — 组隐藏菜单不得作为初始页。

覆盖 TC-5.15.11~.12:
- lifecycle.js 在「恢复用户最后选择」块之前先 await loadGroupConfig
- app-logic.js 含 ensureVisiblePage + 对 menus/groupsConfig 的 watch 兜底
"""
import os

BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
FRONTEND = os.path.join(BASE, "frontend")


def _read_f(rel):
    p = os.path.join(FRONTEND, *rel.split("/"))
    with open(p, encoding="utf-8") as f:
        return f.read()


def test_group_config_loaded_before_page_restore():
    """TC-5.15.11: lifecycle.js 中 loadGroupConfig 调用应先于「恢复用户最后选择」块"""
    src = _read_f("js/app-logic/lifecycle.js")
    # 至少两处调用点: 早期 await + 后期 fire-and-forget (兜底)
    assert src.count('loadGroupConfig(') >= 2, "应存在早期 await loadGroupConfig 与后期兜底调用"
    # 早期调用点必须在页面恢复块之前
    restore_marker = "恢复用户最后选择"
    assert restore_marker in src, "应存在页面恢复块标记"
    first_call = src.find("loadGroupConfig(")
    restore_idx = src.find(restore_marker)
    assert first_call != -1 and restore_idx != -1 and first_call < restore_idx,         "loadGroupConfig 应早于页面恢复块执行 (组配置先行)"


def test_ensure_visible_page_guard():
    """TC-5.15.12: app-logic.js 含 ensureVisiblePage + menus watch 兜底"""
    src = _read_f("js/app-logic.js")
    assert "ensureVisiblePage" in src, "应定义 ensureVisiblePage"
    assert "watch(menus" in src or "watch(groupsConfig" in src, "应对 menus/groupsConfig 建立 watch 兜底"
    # 语义: 当前页不在可见菜单时重定向到首个可见菜单
    assert "menus.value" in src, "应读取过滤后 menus"


def test_mobile_nav_unchanged():
    """TC-5.15.13: 移动导航不受影响 (回归护栏)"""
    src = _read_f("src/components/MobileNav.vue")
    assert "menus" in src and "goTab" in src, "移动导航逻辑保持"
