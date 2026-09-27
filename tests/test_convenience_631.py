# -*- coding: utf-8 -*-
"""6.3.1 (T-6.3.1.6): 便捷性补齐门禁 — 命令/快捷键/右键菜单与页面一一对应

覆盖四类「注册了却用不了」的空洞:
1. 一级菜单全部子页均有命令面板直达入口 (navigateTo 覆盖)
2. DEFAULT_COMMANDS 每条指令在 runCommand 中均有分支 (无死指令)
3. createDefaultShortcuts 每个动作在 runShortcut 中均有分支 (无死快捷键)
4. 右键菜单完整链路 (组件已挂载 / 事件有消费者 / 列表行已标注上下文)
"""
import io
import os
import re

BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
FRONTEND = os.path.join(BASE, "frontend")


def _read(rel):
    with io.open(os.path.join(BASE, rel), encoding="utf-8") as f:
        return f.read()


PANEL_JS = "frontend/js/components/command-panel.js"
CORE_JS = "frontend/js/command-panel-core.js"
SHELL_JS = "frontend/js/app-logic/shell.js"
CTX_JS = "frontend/js/components/context-menu.js"
INDEX_HTML = "frontend/index.html"


def _menu_subpages():
    """从 allMenuDefs 提取 {(menuKey, subPage)} 集合"""
    src = _read(SHELL_JS)
    pairs = set()
    pat = re.compile(r"\{\s*key:\s*'(\w+)'[^\n]*?subPages:\s*\[([^\]]*)\]")
    for m in pat.finditer(src):
        menu_key = m.group(1)
        for sp in re.findall(r"'([^']+)'", m.group(2)):
            pairs.add((menu_key, sp))
    return pairs


def _navigate_pairs():
    """从 command-panel.js 提取 navigateTo('x', 'y') 直达对"""
    src = _read(PANEL_JS)
    return set(re.findall(r"navigateTo\(\s*'([^']+)'\s*,\s*'([^']+)'\s*\)", src))


def test_all_menu_subpages_have_command():
    """门禁一: 7 个一级页的全部子页均有一条命令可直达 (命令集与页面一一对应)"""
    pairs = _menu_subpages()
    assert pairs, "应能提取 allMenuDefs 的 subPages"
    navs = _navigate_pairs()
    missing = sorted(p for p in pairs if p not in navs)
    assert not missing, f"以下子页无命令面板直达入口: {missing}"


def test_all_default_commands_have_branch():
    """门禁二: DEFAULT_COMMANDS 每条指令在 runCommand 中均有分支 (无「点了没反应」)"""
    core = _read(CORE_JS)
    m = re.search(r"const DEFAULT_COMMANDS = \[(.*?)\n  \];", core, re.S)
    assert m, "DEFAULT_COMMANDS 定义缺失"
    keys = re.findall(r"\{\s*key:\s*'([^']+)'", m.group(1))
    assert len(keys) >= 40, f"指令集应 >= 40 条, 实际 {len(keys)}"
    panel = _read(PANEL_JS)
    missing = sorted(k for k in keys if ("key === '%s'" % k) not in panel)
    assert not missing, f"以下指令在 runCommand 中无分支: {missing}"


def test_all_default_shortcuts_have_branch():
    """门禁三: createDefaultShortcuts 每个动作在 runShortcut 中均有分支 (无死快捷键)"""
    core = _read(CORE_JS)
    m = re.search(r"function createDefaultShortcuts\(\) \{(.*?)\n  \}", core, re.S)
    assert m, "createDefaultShortcuts 定义缺失"
    actions = re.findall(r"reg\.register\(\s*'[^']+'\s*,\s*'([^']+)'", m.group(1))
    assert actions, "应能提取默认快捷键动作"
    panel = _read(PANEL_JS)
    missing = sorted(a for a in actions if ("action === '%s'" % a) not in panel)
    assert not missing, f"以下快捷键动作在 runShortcut 中无分支: {missing}"


def test_context_menu_fully_wired():
    """门禁四: 右键菜单链路完整 — 组件已挂载 / 事件有消费者 / 列表行已标注上下文"""
    index = _read(INDEX_HTML)
    assert "<qc-context-menu" in index, "index.html 未挂载 qc-context-menu (右键/长按无菜单)"

    ctx = _read(CTX_JS)
    assert "addEventListener('qc:context-action'" in ctx, \
        "context-menu.js 未消费 qc:context-action (菜单项点击后无动作)"
    assert "data-ctx-code" in ctx, "context-menu.js 未读取 data-ctx-* 上下文"

    # 至少 3 个列表源文件标注了右键上下文
    marked = 0
    for dirpath, dirnames, filenames in os.walk(os.path.join(FRONTEND, "js")):
        dirnames[:] = [d for d in dirnames if d not in ("node_modules", "vendor")]
        for fn in filenames:
            if not fn.endswith(".js"):
                continue
            try:
                with io.open(os.path.join(dirpath, fn), encoding="utf-8") as f:
                    if "data-ctx-code" in f.read():
                        marked += 1
            except (OSError, UnicodeDecodeError):
                continue
    # js/ 下 context-menu.js 自身 + 至少 2 个列表页标注
    assert marked >= 3, f"仅 {marked} 处标注 data-ctx-code, 右键菜单覆盖不足"

    # SFC 侧 (StockList.vue) 亦需标注
    vue = _read("frontend/src/components/common/StockList.vue")
    assert "data-ctx-code" in vue, "StockList.vue 未标注 data-ctx-* (策略/共识/池列表无右键菜单)"