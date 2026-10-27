# -*- coding: utf-8 -*-
"""
6.5.7 (批次 B): 按钮单一体系 + 控件尺寸归一 门禁

背景 (EVAL-VISUAL-TOKENS-6.5.5.md):
- 主按钮已由 themes.css 的 !important 覆盖为「品牌 soft 浅底 + 彩字」，但同时保留整套实心令牌
  (--btn-primary-bg/color/hover-*/active-*) → 实心组无任何 CSS 消费方 (死令牌), 且双源覆盖易打架;
- 暗色实心档 hsl(h,85,65) 相对卡片 4.09–10.46:1, 是屏上最亮元素 (过曝);
- .el-button 的高度/字号/圆角散落在多处, 与输入框 (--qc-radius-medium) 不一致。

断言 (先红后绿):
B1 每个 --btn-primary-* / --primary-solid 令牌在 frontend/css 中至少 1 处 var() 消费
B2 主按钮无双源: 不含 .is-plain/.is-text 的 .el-button--primary 规则中 !important <= 3
B3 .el-button 显式 height: var(--qc-ctrl-h*)
B4 .el-button 的 font-size 只允许 var(--qc-font-size-base)
B5 .el-button 的 border-radius 只允许 var(--qc-radius-medium)
B6 暗色 soft 主按钮文字对比落在 [4.5, 8.0] (防过曝)
B7 暗色实底档相对卡片 1.8 ~ 4.0 (去高亮, 且仍可辨)
"""
import os
import re
import sys

import pytest

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))

import color_gate as g  # noqa: E402

CSS_DIR = os.path.join(g.FRONTEND, "css")
THEMES_JS = os.path.join(g.FRONTEND, "js", "themes.js")

SOFT_MIN, SOFT_MAX = 4.5, 8.0
SOLID_MIN, SOLID_MAX = 1.8, 4.0


def _css_files():
    return sorted(
        os.path.join(CSS_DIR, n) for n in os.listdir(CSS_DIR) if n.endswith(".css")
    )


def _all_text():
    parts = [open(p, encoding="utf-8").read() for p in _css_files()]
    parts.append(open(THEMES_JS, encoding="utf-8").read())
    return "\n".join(parts)


def _css_text():
    raw = "\n".join(open(p, encoding="utf-8").read() for p in _css_files())
    return re.sub(r"/\*.*?\*/", "", raw, flags=re.S)


def _defined_tokens():
    return set(re.findall(r"(?<![\w-])(--[a-zA-Z0-9-]+)\s*:", _all_text()))


def _var_uses(text, token):
    return len(re.findall(r"var\(\s*" + re.escape(token) + r"\b", text))


def _rules(text):
    """返回 [(selector, body)] — 仅顶层简单块 (不含 @media 嵌套的深层组合)。"""
    out = []
    for m in re.finditer(r"([^{}]+)\{([^{}]*)\}", text):
        sel = m.group(1).strip()
        if sel.startswith(("@", "/*")) or not sel:
            continue
        out.append((sel, m.group(2)))
    return out


def _button_rules(text, base=".el-button"):
    """选择器包含 .el-button (且不是 .el-button--xxx 的纯变体) 的规则。"""
    out = []
    for sel, body in _rules(text):
        for part in sel.split(","):
            p = part.strip()
            if re.search(re.escape(base) + r"(?![\w-])", p):
                out.append((p, body))
    return out


# ───────────────────────── B1 死令牌 ─────────────────────────

def test_b1_no_dead_button_tokens():
    css = _css_text()
    names = {t for t in _defined_tokens() if t.startswith("--btn-primary-") or t == "--primary-solid"}
    assert names, "未找到按钮令牌定义"
    dead = sorted(t for t in names if _var_uses(css, t) == 0)
    assert not dead, "存在无 CSS 消费方的按钮令牌 (死令牌): %s" % dead


# ───────────────────────── B2 无双源覆盖 ─────────────────────────

def test_b2_primary_button_single_source():
    css = _css_text()
    hits = []
    for sel, body in _rules(css):
        if ".el-button--primary" not in sel:
            continue
        if any(k in sel for k in (".is-plain", ".is-text", ".is-link")):
            continue
        hits.append((sel, body.count("!important")))
    total = sum(n for _, n in hits)
    assert total <= 3, "主按钮 !important 覆盖过多 (双源): %s" % hits


# ───────────────────────── B3 高度 ─────────────────────────

def test_b3_button_height_tokenized():
    css = _css_text()
    ok = any(
        re.search(r"height\s*:\s*var\(\s*--qc-ctrl-h", body)
        for sel, body in _button_rules(css)
        if sel.strip() == ".el-button"
    )
    assert ok, ".el-button 必须显式 height: var(--qc-ctrl-h*)"


# ───────────────────────── B4 字号 ─────────────────────────

def test_b4_button_font_size_base():
    css = _css_text()
    for sel, body in _button_rules(css):
        for m in re.finditer(r"font-size\s*:\s*([^;]+);", body):
            val = m.group(1).strip()
            assert val == "var(--qc-font-size-base)", \
                "%s 的 font-size 必须统一为 var(--qc-font-size-base), 实为 %s" % (sel, val)


# ───────────────────────── B5 圆角 ─────────────────────────

def test_b5_button_radius_medium():
    css = _css_text()
    for sel, body in _button_rules(css):
        for m in re.finditer(r"border-radius\s*:\s*([^;]+);", body):
            val = m.group(1).strip()
            assert val == "var(--qc-radius-medium)", \
                "%s 的 border-radius 必须统一为 var(--qc-radius-medium), 实为 %s" % (sel, val)


# ───────────────────────── B6/B7 暗色对比 ─────────────────────────

@pytest.mark.parametrize("hue", g.HUES, ids=lambda h: "hue%s" % h)
def test_b6_dark_soft_button_contrast(hue):
    ratio = g.pair("dark", hue, "--brand-soft-text", "--brand-soft-bg")
    assert ratio is not None, "暗色 soft 按钮令牌缺失 (hue=%s)" % hue
    assert SOFT_MIN <= ratio <= SOFT_MAX, \
        "暗色主按钮文字对比 %.2f 超出 [%.1f, %.1f] (hue=%s)" % (ratio, SOFT_MIN, SOFT_MAX, hue)


@pytest.mark.parametrize("hue", g.HUES, ids=lambda h: "hue%s" % h)
def test_b7_dark_solid_fill_not_glaring(hue):
    ratio = g.pair("dark", hue, "--primary-solid", "--surface-card")
    assert ratio is not None, "暗色实底档缺失 (hue=%s)" % hue
    assert SOLID_MIN <= ratio <= SOLID_MAX, \
        "暗色实底档相对卡片 %.2f 超出 [%.1f, %.1f] (hue=%s)" % (ratio, SOLID_MIN, SOLID_MAX, hue)
