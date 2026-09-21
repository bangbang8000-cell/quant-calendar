# -*- coding: utf-8 -*-
"""6.2.2 (F12): 玻璃特效增强门禁 — 浮层真玻璃 + 结构层禁 blur

方案: 浮层(dialog/dropdown/date-picker/message) 统一 backdrop-filter blur(12px) saturate(140%);
暗色浮层改半透明暗玻璃; 结构层(.qc-card/.card)禁真 blur (实测 -75% 帧率红线);
不支持 backdrop-filter / 减动效 → 降级半透明实底。
"""
import os
import re

BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
FRONTEND = os.path.join(BASE, "frontend")


def _read(rel):
    with open(os.path.join(FRONTEND, rel), encoding="utf-8") as f:
        return f.read()


def test_glass_blur_tokens_defined():
    """tokens 应定义玻璃 blur/saturate 参数"""
    tokens = _read("css/tokens.css")
    assert "--glass-blur: 12px" in tokens, "应有 blur 12px"
    assert "--glass-saturate: saturate(140%)" in tokens, "应有 saturate"


def test_dark_glass_semi_transparent():
    """暗色浮层应为半透明玻璃 (非 surface-raised 实底)"""
    themes = _read("css/themes.css")
    assert "--glass-bg: rgba(28, 27, 24, 0.82)" in themes, "暗色浮层应半透明"


def test_overlay_backdrop_blur_enabled():
    """浮层应启用 backdrop-filter (blur+saturate)"""
    layout = _read("css/layout.css")
    assert "backdrop-filter: var(--glass-blur) var(--glass-saturate)" in layout, "浮层应 blur"
    assert "-webkit-backdrop-filter: var(--glass-blur) var(--glass-saturate)" in layout


def test_structural_layers_no_blur():
    """结构层 (.qc-card/.card) 禁真 blur — 守住 -75% 帧率红线"""
    components = _read("css/components.css")
    m = re.search(r"\.qc-card\s*\{[^}]*\}", components)
    assert m and "backdrop-filter" not in m.group(0), ".qc-card 不应含 backdrop-filter"


def test_reduced_motion_degrades():
    """减动效/不支持时浮层降级 (无 blur)"""
    layout = _read("css/layout.css")
    assert "prefers-reduced-motion: reduce" in layout
    assert "backdrop-filter: none" in layout, "降级路径应关闭 blur"


def test_glass_tokens_symmetry():
    """明暗玻璃 token 对称契约 — dark 侧由 themes.css 覆盖 (非缺失)"""
    tokens = _read("css/tokens.css")
    themes = _read("css/themes.css")
    assert "--glass-bg" in tokens and "--glass-bg" in themes, "明暗两侧均应定义 --glass-bg"
