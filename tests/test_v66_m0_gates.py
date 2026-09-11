# -*- coding: utf-8 -*-
"""V6.6 (TEST-PLAN 6.6 TC-6.6.1.x): AppIcon 回退 + 状态图标 + 暗色收尾 — L1 门禁"""
import os
import re

BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
FRONTEND = os.path.join(BASE, "frontend")


def _read_f(rel):
    p = os.path.join(FRONTEND, *rel.split("/"))
    with open(p, encoding="utf-8") as f:
        return f.read()


def test_appicon_fallback_default_icon():
    """TC-6.6.1.1: AppIcon 非白名单 name 回退默认图标 circle-dot, 无文本回退分支"""
    src = _read_f("src/components/common/AppIcon.vue")
    assert "ICON_MAP[props.name] || ICON_MAP['circle-dot']" in src, \
        "comp() 应回退 circle-dot"
    assert "qc-icon-fallback" not in src, "模板不应再有文本回退分支"
    assert "{{ name }}" not in src.split("<template>")[1], "模板不应渲染 name 文本"


def test_appicon_whitelist_extended_v66():
    """TC-6.6.1.2: AppIcon 白名单含 V6.6 新增 name"""
    src = _read_f("src/components/common/AppIcon.vue")
    for name in ("star-off", "upload", "gem", "folder-open", "link", "save",
                 "trash-2", "pause", "help-circle", "play-circle", "pencil",
                 "folder", "code"):
        assert f"'{name}':" in src, f"AppIcon 白名单缺 {name}"


def test_status_icons_use_lucide():
    """TC-6.6.1.4: system-page 状态指示 ✓/✗ 文本替换为 check/x 图标"""
    src = _read_f("js/components/system-page.js")
    assert "h.ok ? 'check' : 'x'" in src, "self-heal 状态应为 check/x 图标"
    assert "m.testResult.success ? 'check' : 'x'" in src, \
        "AI 模型测试结果应为 check/x 图标"
    # 不再有裸文本 ✓/✗ 状态渲染
    assert "{{ h.ok ? '✓' : '✗' }}" not in src, "不应再渲染 ✓/✗ 文本"


def test_dark_semantic_colors_aligned():
    """TC-6.6.1.5: dark-pro 语义色对齐 el-*; muted 提亮"""
    src = _read_f("css/themes.css")
    dark = src.split('[data-theme="dark-pro"]')[1].split("}")[0]
    assert "--color-success: var(--el-success)" in dark, "dark-pro 语义色应对齐 el-success"
    assert "--qc-muted-foreground: #a0aec8" in dark, "dark-pro muted 应提亮"


def test_dark_dialog_opaque():
    """TC-6.6.1.6: dark-pro 弹窗/下拉背景实底 (--qc-card)"""
    src = _read_f("css/themes.css")
    dark = src.split('[data-theme="dark-pro"]')[1].split("}")[0]
    assert "--el-dialog-bg-color" in dark, "dark-pro 应覆盖弹窗背景"
    assert "--el-dropdown-bg-color" in dark, "dark-pro 应覆盖下拉背景"
