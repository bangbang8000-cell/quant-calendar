# -*- coding: utf-8 -*-
"""6.2.0 (F1): 字体系统落地门禁 — Inter 自托管

背景: 字体栈声明 'Inter' 但从未加载, 跨平台回退微软雅黑/苹方, 数字与西文观感不一致。
方案: @fontsource/inter 自托管 (latin 400/500/600/700), 经构建入口 main.js 打包进 dist。
"""
import json
import os
import re

BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
FRONTEND = os.path.join(BASE, "frontend")


def _read(rel, root=FRONTEND):
    with open(os.path.join(root, rel), encoding="utf-8") as f:
        return f.read()


def test_main_js_imports_inter_fonts():
    """v7.18 (FR-802/TC-40): 字体改走 /static/fonts 稳定路径 —
    main.js 不再 import fontsource (会生成第 3 个阻塞 CSS), @font-face 固化进 tokens.css"""
    main = _read("src/main.js")
    assert "@fontsource/inter/latin-" not in main, "main.js 不应再 import fontsource (产生阻塞 CSS)"
    tokens = _read("css/tokens.css")
    for w in ("400", "500", "600", "700"):
        assert f"/static/fonts/inter-latin-{w}-normal.woff2" in tokens, f"tokens.css 应声明 Inter {w} @font-face"
        assert "font-display: swap" in tokens, "font-display 必须 swap"


def test_font_stack_leads_with_inter():
    """字体栈应以 'Inter' 打头 (tokens.css --qc-font-sans)"""
    tokens = _read("css/tokens.css")
    m = re.search(r"--qc-font-sans:\s*'([^']+)'", tokens)
    assert m and m.group(1) == "Inter", f"字体栈应以 Inter 打头: {m.group(1) if m else '未找到'}"


def test_inter_is_declared_dependency():
    """package.json 依赖应含 @fontsource/inter"""
    pkg = json.loads(_read("package.json"))
    deps = {**pkg.get("dependencies", {}), **pkg.get("devDependencies", {})}
    assert "@fontsource/inter" in deps, "package.json 应声明 @fontsource/inter"
    assert deps["@fontsource/inter"].startswith("^"), "依赖应为 ^ 版本范围"


def test_dist_contains_inter_woff2():
    """v7.18: Inter 字体文件固化在 frontend/fonts 稳定路径 (经 /static/fonts 服务)"""
    fonts_dir = os.path.join(FRONTEND, "fonts")
    names = os.listdir(fonts_dir) if os.path.isdir(fonts_dir) else []
    w2 = [n for n in names if n.startswith("inter-latin-") and n.endswith(".woff2")]
    assert len(w2) == 4, "frontend/fonts 应含 4 个 Inter woff2 (400/500/600/700), 实测 %d" % len(w2)


def test_animations_css_not_truncated():
    """animations.css 括号配平 — 修复 S5 截断缺陷 (prefers-reduced-motion 块完整)"""
    src = _read("css/animations.css")
    assert src.count("{") == src.count("}"), "animations.css 大括号未配平"
    assert "animation-duration: 0.01ms !important" in src, "prefers-reduced-motion 降级规则应完整"
