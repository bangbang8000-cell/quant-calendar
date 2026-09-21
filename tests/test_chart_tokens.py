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

def test_chart_bg_follows_surface_card():
    """V6.10 (C) 口径修订: --chart-bg 不再各自硬编码, 而是别名到同模式的卡片表面。

    原断言只检查 dark-pro 块里有 `--chart-bg` 字面量, V6.10 起改为 `var(--surface-card)`
    (修的就是「暗色图表画布是海军蓝、卡片是暖中性」的双面族缺陷), 因此改为断言**解析后的契约**。
    """
    import os as _os
    import sys as _sys
    _sys.path.insert(0, _os.path.dirname(_os.path.abspath(__file__)))
    import color_gate as _g
    for mode, hue in (("light", 45), ("dark", 45), ("dark", 270), ("light", -1)):
        r = _g.resolved(mode, hue)
        assert r["--chart-bg"] == r["--surface-card"], \
            "%s/%s: --chart-bg(%s) 应等于 --surface-card(%s)" % (mode, hue, r["--chart-bg"], r["--surface-card"])


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


def test_echarts_categorical_palette():
    """V6.10 (C) 口径修订: 图表分类色板改为「跨色相定性色板」。

    原为同一色相的 6 个明度档 (--qc-primary-400..700 + 中性灰), 多序列区分度差;
    现按固定色相序列生成、与品牌色相解耦、明度随模式取值。断言: 
    - 色板由 CATEGORICAL_HUES 生成且色相数量 >= 6
    - 不再引用旧 accent
    - 每个色相对图表画布 >= 3:1 (图形对象)
    """
    assert "CATEGORICAL_HUES" in THEME_JS, "echarts-theme 应使用跨色相分类色板"
    assert "--color-accent" not in THEME_JS, "echarts-theme 不应再引用旧 accent"
    m = re.search(r"CATEGORICAL_HUES\s*=\s*\[([^\]]+)\]", THEME_JS)
    assert m, "缺少 CATEGORICAL_HUES 定义"
    hues = [int(x) for x in re.findall(r"\d+", m.group(1))]
    assert len(hues) >= 6, f"分类色板至少 6 色, 当前 {len(hues)}"
    assert len(set(hues)) == len(hues), f"分类色板色相重复: {hues}"

    # 画布对比度: 用与运行期一致的生成规则复算
    import colorsys
    import os as _os
    import sys as _sys
    _sys.path.insert(0, _os.path.dirname(_os.path.abspath(__file__)))
    import color_gate as _g

    def hsl(h, s, l):
        r, g, b = colorsys.hls_to_rgb((h % 360) / 360.0, l / 100.0, s / 100.0)
        return (r * 255, g * 255, b * 255, 1.0)

    for mode, sat, lig in (("light", 58, 40), ("dark", 62, 62)):
        canvas = _g.color(mode, 45, "--chart-bg")
        worst = min(_g.contrast(hsl(h, sat, lig), canvas) for h in hues)
        assert worst >= 3.0, f"{mode} 分类色板对图表画布最低 {worst:.2f} < 3.0"
