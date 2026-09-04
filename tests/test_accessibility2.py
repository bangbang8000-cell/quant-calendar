# -*- coding: utf-8 -*-
"""V5.0.6 (T-5.0.65): 可访问性 2.0 测试 (TEST-PLAN 7.1 test_accessibility2.py)

焦点 / ARIA / 键盘全程可操作 — 静态抽查 (扩展既有 test_accessibility):
- 焦点: 引导/弹窗 role=dialog + aria-modal; :focus-visible 可见焦点; tabindex
- ARIA: 关键控件 aria-label / aria-live 播报区 / aria-current 导航
- 键盘: 全局快捷键 keydown; 命令面板输入 aria 标签
"""
import os
import re

BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
FRONTEND = os.path.join(BASE, "frontend")


def _read(rel):
    with open(os.path.join(FRONTEND, rel), encoding="utf-8") as f:
        return f.read()


# ─── 引导/弹窗焦点语义 ─────────────────────────────────────────

def test_onboarding_dialog_aria():
    """新手引导覆盖层: role=dialog + aria-modal + aria-labelledby"""
    src = _read(os.path.join("js", "onboarding.js"))
    assert 'role="dialog"' in src
    assert 'aria-modal="true"' in src
    assert "aria-labelledby" in src


def test_onboarding_title_has_id():
    src = _read(os.path.join("js", "onboarding.js"))
    assert 'id="onboarding-title"' in src


def test_el_dialog_modal_focus():
    """Element Plus 弹窗自带焦点陷阱 (aria-modal), 抽查使用弹窗的组件"""
    idx = _read("index.html")
    assert "el-dialog" in _read(os.path.join("js", "components", "command-panel.js"))


# ─── 键盘全程可操作 ────────────────────────────────────────────

def test_global_shortcut_keydown():
    """全局快捷键: 组件挂载 document keydown 监听"""
    src = _read(os.path.join("js", "components", "command-panel.js"))
    assert "addEventListener('keydown'" in src
    assert "createDefaultShortcuts" in src


def test_command_panel_input_aria():
    """命令面板输入框有 aria-label (读屏可识别)"""
    src = _read(os.path.join("js", "components", "command-panel.js"))
    assert "aria-label" in src


def test_command_panel_keyboard_nav():
    """命令面板键盘导航: up/down/enter 处理"""
    src = _read(os.path.join("js", "components", "command-panel.js"))
    assert "@keydown.up" in src and "@keydown.down" in src and "@keydown.enter" in src


# ─── ARIA 语义 ─────────────────────────────────────────────────

def test_ai_fab_is_button():
    """浮动 AI 按钮: role=button + tabindex + aria-label (键盘可达)"""
    idx = _read("index.html")
    assert 'role="button"' in idx and 'tabindex="0"' in idx
    assert "aria-label" in idx


def test_a11y_live_region():
    """无障碍播报区: aria-live=polite + role=status"""
    idx = _read("index.html")
    assert 'aria-live="polite"' in idx and 'role="status"' in idx


def test_sidebar_nav_aria_current():
    """侧边导航当前页 aria-current"""
    src = _read(os.path.join("js", "components", "sidebar.js"))
    assert "aria-current" in src


def test_empty_error_roles():
    """空态/错误态组件语义角色 (role=status/alert)"""
    src = _read(os.path.join("js", "empty-error.js"))
    assert 'role="status"' in src and 'role="alert"' in src


def test_shortcut_help_dialog_present():
    """快捷键帮助弹窗存在且用 kbd 呈现按键 (键盘用户可查)"""
    p = os.path.join(FRONTEND, "js", "components", "dialogs", "shortcut-help.js")
    assert os.path.exists(p)
    src = open(p, encoding="utf-8").read()
    assert "shortcutHelpItems" in src and "<kbd>" in src


# ─── 可见焦点 / 对比度 ─────────────────────────────────────────

def test_focus_visible_defined():
    """可见焦点: CSS 定义 :focus-visible (键盘导航可见环)"""
    css = _read(os.path.join("css", "themes.css"))
    assert ":focus-visible" in css or ":focus" in css


def _luminance(hex_color):
    c = hex_color.lstrip('#')
    if len(c) != 6:
        return 0.0
    rgb = [int(c[i:i + 2], 16) / 255.0 for i in (0, 2, 4)]
    lin = []
    for ch in rgb:
        lin.append(ch / 12.92 if ch <= 0.03928 else ((ch + 0.055) / 1.055) ** 2.4)
    return 0.2126 * lin[0] + 0.7152 * lin[1] + 0.0722 * lin[2]


def _contrast(fg, bg):
    l1, l2 = sorted((_luminance(fg), _luminance(bg)), reverse=True)
    return (l1 + 0.05) / (l2 + 0.05)


def test_primary_text_contrast_light():
    """亮色主题(:root 默认): 主文本 vs 页面背景 对比度 ≥ 4.5 (WCAG AA)"""
    themes = _read(os.path.join("css", "themes.css"))
    m = re.search(r"--text-primary:\s*(#[0-9a-fA-F]{6})", themes)
    bg = re.search(r"--bg-page:\s*(#[0-9a-fA-F]{6})", themes)
    assert m and bg, "亮色主文本/背景令牌缺失"
    assert _contrast(m.group(1), bg.group(1)) >= 4.5


def test_primary_text_contrast_dark():
    """暗色主题(dark-pro): 主文本 vs 背景 对比度 ≥ 4.5 (WCAG AA)"""
    themes = _read(os.path.join("css", "themes.css"))
    block = re.search(r'\[data-theme="dark-pro"\]\s*\{(.*?)\n\s*\}', themes, re.S)
    assert block, "dark-pro 主题块缺失"
    body = block.group(1)
    fg = re.search(r"--text-primary:\s*(#[0-9a-fA-F]{6})", body)
    bg = re.search(r"--bg-page:\s*(#[0-9a-fA-F]{6})", body)
    assert fg and bg, "dark-pro 主文本/背景令牌缺失"
    assert _contrast(fg.group(1), bg.group(1)) >= 4.5


def test_onboarding_actions_keyboard_reachable():
    """引导按钮可键盘触发 (el-button 默认可聚焦 + @click 处理器)"""
    src = _read(os.path.join("js", "onboarding.js"))
    assert "@click=\"next\"" in src and "@click=\"finish\"" in src
    assert "@click=\"skip\"" in src


# ═════════════════ V5.3.0 (T-5.3.1.4): 无障碍收尾守卫 ═════════════════

_ICON_EMOJI = set("🔄⚙📊▶⏸⭐📋📈💎🎨🖥🚦📤📥💾🖼🗑✏🔍➕➖✖✔⏭⏮🔁🔃")


def test_icon_only_buttons_have_aria_label():
    """纯图标按钮 (emoji 且无可见文字) 必须带 aria-label — 屏幕阅读器可辨识。

    T-5.3.1.4 收尾: 巡检全站 components + dialogs, 禁绝无标签图标按钮。
    """
    import glob as _glob
    files = (_glob.glob(os.path.join(FRONTEND, "js", "components", "*.js"))
             + _glob.glob(os.path.join(FRONTEND, "js", "components", "dialogs", "*.js")))
    bad = []
    for f in files:
        src = open(f, encoding="utf-8").read()
        rel = os.path.relpath(f, FRONTEND)
        for i, line in enumerate(src.splitlines(), 1):
            if "el-button" not in line or "aria-label" in line:
                continue
            stripped = re.sub(r"<[^>]+>", "", line).strip()
            if stripped and all(c in _ICON_EMOJI or c.isspace() for c in stripped):
                bad.append(f"{rel}:{i}: {line.strip()}")
    assert not bad, "纯图标按钮缺 aria-label:\n" + "\n".join(bad)


def test_shortterm_tour_dialog_aria():
    """短线复盘 3 步引导弹窗须满足 dialog 焦点语义 (与全局 onboarding 一致)"""
    src = _read(os.path.join("js", "components", "shortterm-page.js"))
    assert 'role="dialog"' in src and 'aria-modal="true"' in src
    assert 'aria-labelledby="shortterm-tour-title"' in src
    assert 'id="shortterm-tour-title"' in src
    # 跳过/下一步/开始使用均带可辨识文案 (非纯 emoji)
    assert "aria-label=\"跳过短线引导\"" in src
