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
    """暗色浮层应为半透明玻璃 (非 surface-raised 实底; 6.5.7 B4: 透明度 0.82→0.88 对齐 raised 档)"""
    themes = _read("css/themes.css")
    m = re.search(r"--glass-bg:\s*rgba\([^)]*,\s*([\d.]+)\)", themes)
    assert m, "暗色浮层应定义 --glass-bg 且为半透明"
    alpha = float(m.group(1))
    assert 0.6 < alpha < 1.0, "暗色浮层应半透明且保持层次 (alpha=%s)" % alpha


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


def test_dark_glass_layer_separation():
    """6.5.7 (B4): 暗色玻璃叠底后相对画布 >= 1.25:1 (层级可辨)"""
    import sys
    sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
    import color_gate as g

    glass = g.parse_color(g.css_defs()["dark"].get("--glass-bg"))
    assert glass is not None, "暗色 --glass-bg 不可解析"
    for hue in (45, 220):
        canvas = g.color("dark", hue, "--surface-canvas")
        assert canvas is not None, "暗色画布令牌缺失 (hue=%s)" % hue
        comp = g.blend(glass, canvas[:3])
        ratio = g.contrast(comp, canvas[:3])
        assert ratio >= 1.25, "暗色玻璃/画布 %.2f < 1.25 (hue=%s)" % (ratio, hue)
