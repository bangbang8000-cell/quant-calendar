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
    """构建入口应副作用导入 @fontsource/inter (latin 400/500/600/700)"""
    main = _read("src/main.js")
    for w in ("400", "500", "600", "700"):
        assert f"@fontsource/inter/latin-{w}.css" in main, f"main.js 应引入 Inter latin-{w}"


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
    """构建产物应含 Inter 字体文件 (woff2 随 assets 输出)"""
    dist_assets = os.path.join(FRONTEND, "dist", "assets")
    if not os.path.isdir(dist_assets):
        return  # 未构建时跳过 (构建冒烟另行断言)
    names = os.listdir(dist_assets)
    fonts = [n for n in names if "inter" in n.lower() or "Inter" in n]
    assert fonts, "dist/assets 应包含 Inter 字体文件 (woff2)"


def test_animations_css_not_truncated():
    """animations.css 括号配平 — 修复 S5 截断缺陷 (prefers-reduced-motion 块完整)"""
    src = _read("css/animations.css")
    assert src.count("{") == src.count("}"), "animations.css 大括号未配平"
    assert "animation-duration: 0.01ms !important" in src, "prefers-reduced-motion 降级规则应完整"
