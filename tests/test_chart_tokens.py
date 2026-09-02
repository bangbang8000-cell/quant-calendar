# -*- coding: utf-8 -*-
"""V5.0.5 (T-5.0.54): 图表规范与语义配色令牌测试 (TEST-PLAN 6.1/6.3)

- 令牌门禁: 图表语义令牌 (--color-accent/--chart-*) 均定义; 前端 getCSSVar 读取的
  令牌均定义 (补 var() 门禁之外的运行时读取缺口)
- 暗色联动: dark-pro 主题块覆盖图表令牌且值与亮色不同
- 语义配色: charts.js chartPalette 语义角色 → 令牌映射, series 8 序列色
- 视觉规范: echarts-theme 画布背景使用 --chart-bg (主题切换图表联动)
"""
import os
import re

BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
FRONTEND = os.path.join(BASE, "frontend")


def _css_all():
    parts = []
    for rel in ("css/tokens.css", "css/themes.css"):
        p = os.path.join(FRONTEND, rel)
        if os.path.exists(p):
            parts.append(open(p, encoding="utf-8").read())
    return "\n".join(parts)


def _js(path):
    return open(os.path.join(FRONTEND, path), encoding="utf-8").read()


CSS = _css_all()
CHARTS_JS = _js("js/charts.js")
THEME_JS = _js("js/echarts-theme.js")


def _defs():
    return set(re.findall(r"(--[a-zA-Z0-9-]+)\s*:", CSS))


def _extract_dark_block(css, theme):
    m = re.search(r'\[data-theme="' + theme + r'"\]\s*\{(.*?)\n\s*\}',
                  css, re.S)
    return m.group(1) if m else ""


def _token_value(block, token):
    m = re.search(re.escape(token) + r"\s*:\s*([^;]+);", block)
    return m.group(1).strip() if m else None


# ─── 令牌门禁 ─────────────────────────────────────────────────────

def test_accent_token_defined():
    assert "--color-accent" in _defs(), "--color-accent 未定义"


def test_chart_tokens_defined():
    for t in ("--chart-split", "--chart-axis", "--chart-bg"):
        assert t in _defs(), f"{t} 未定义"


def test_getcssvar_usage_defined():
    """扩展令牌门禁: 前端 JS 中 getCSSVar('--x') 读取的令牌必须已定义。"""
    undefined = []
    for rel in ("js/charts.js", "js/echarts-theme.js", "js/backtest.js"):
        src = _js(rel)
        for m in re.finditer(r"getCSSVar\('(--[a-zA-Z0-9-]+)'\)", src):
            tok = m.group(1)
            if tok not in _defs() and not tok.startswith("--el-"):
                undefined.append((rel, tok))
    assert not undefined, "getCSSVar 读取未定义令牌: " + repr(undefined)


# ─── 暗色联动 ─────────────────────────────────────────────────────

def test_dark_pro_overrides_chart_bg():
    block = _extract_dark_block(CSS, "dark-pro")
    dark = _token_value(block, "--chart-bg")
    light = _token_value(_defs_block(), "--chart-bg")
    assert dark and light, "chart-bg 明暗缺失"
    assert dark != light, "dark-pro 未覆盖 --chart-bg"


def _defs_block():
    # 亮色默认在 tokens.css :root, 取 tokens.css 内容中的定义
    return _css_all()


def test_dark_pro_overrides_chart_axis():
    block = _extract_dark_block(CSS, "dark-pro")
    assert _token_value(block, "--chart-axis") != _token_value(
        _css_all(), "--chart-axis")


# ─── 语义配色 ─────────────────────────────────────────────────────

def test_chart_palette_semantic_roles():
    for role in ("up", "down", "neutral", "accent", "risk", "warn",
                 "success", "grid", "axis", "bg", "series"):
        assert role + ":" in CHARTS_JS, f"chartPalette 缺语义角色 {role}"


def test_chart_palette_series_8():
    m = re.search(r"series:\s*\[((?:(?!\];).)*?)\]", CHARTS_JS, re.S)
    assert m, "chartPalette series 数组未找到"
    entries = re.findall(r"--[a-z-]+|'#[0-9A-Fa-f]{6}'", m.group(1))
    assert len(entries) >= 8, f"series 序列色不足 8 个: {len(entries)}"


def test_chart_palette_maps_up_to_color_up():
    assert "getCSSVar('--color-up')" in CHARTS_JS
    assert "getCSSVar('--color-down')" in CHARTS_JS


# ─── 视觉规范 ─────────────────────────────────────────────────────

def test_echarts_theme_uses_chart_bg():
    assert "--chart-bg" in THEME_JS, "echarts-theme 未使用 --chart-bg"


def test_echarts_theme_has_accent():
    assert "--color-accent" in THEME_JS
