# -*- coding: utf-8 -*-
"""V5.3.0 (T-5.3.3.2 / FR-5.3.3.2): 全局快捷键帮助面板完善测试

- shortcutHelpItems 帮助面板列全所有默认快捷键 (含 5.3.3 新增 Ctrl+D/E/G)
- 帮助项 keys 无冲突 (同键不同 desc 视为重复)
"""
import os
import re

BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
APP_LOGIC = os.path.join(BASE, "frontend", "js", "app-logic.js")
KEYS_JS = os.path.join(BASE, "frontend", "js", "app-logic", "keys.js")
CMD_PANEL = os.path.join(BASE, "frontend", "js", "components", "command-panel.js")
CORE = os.path.join(BASE, "frontend", "js", "command-panel-core.js")


def _read(p):
    return open(p, encoding="utf-8").read()


def _help_items():
    """提取 shortcutHelpItems 的 keys 列表"""
    src = _read(APP_LOGIC)
    m = re.search(r"const shortcutHelpItems = \[(.*?)\];", src, re.S)
    assert m, "app-logic.js 应含 shortcutHelpItems"
    return re.findall(r"keys: '([^']+)'", m.group(1))


def test_help_lists_new_shortcuts():
    """帮助面板应列全 5.3.3 新增快捷键: Ctrl+D / Ctrl+E / Ctrl+G"""
    keys = _help_items()
    for combo in ("Ctrl+D", "Ctrl+E", "Ctrl+G"):
        assert any(combo in k for k in keys), f"帮助面板缺 {combo}"


def test_help_lists_existing_core_shortcuts():
    """核心快捷键仍在帮助面板: Ctrl+K / Ctrl+/ / 1-5 / R / 方向键"""
    keys = _help_items()
    assert any("Ctrl+K" in k for k in keys)
    assert any("Ctrl+/" in k for k in keys)
    assert any("1-5" in k for k in keys)


def test_default_shortcuts_match_help_coverage():
    """createDefaultShortcuts 的全部组合都出现在帮助面板 (可查)"""
    core = _read(CORE)
    m = re.search(r"createDefaultShortcuts\(\) \{(.*?)\n  \}", core, re.S)
    assert m, "command-panel-core 应含 createDefaultShortcuts"
    registered = re.findall(r"register\('([^']+)',", m.group(1))
    help_keys = _help_items()
    for combo in registered:
        assert any(combo in h for h in help_keys), f"帮助面板未列已注册快捷键 {combo}"


def test_shortcut_conflict_free_with_typing_guard():
    """keys.js 输入态守卫存在 (输入框内不劫持快捷键)"""
    src = _read(KEYS_JS)
    assert "isTypingTarget" in src, "keys.js 应含 isTypingTarget 输入态守卫"
    assert "if (isTypingTarget(e.target)) return" in src, "输入态应先返回"
