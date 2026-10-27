# -*- coding: utf-8 -*-
"""
6.5.8 (批次 C): 字号阶梯 + 角色层门禁

背景 (EVAL-VISUAL-TOKENS-6.5.5.md):
- 现状 10 档 (12/13/14/16/18/20/22/32/36/40): 12↔13↔14 相邻不可辨, lg2 为补丁名,
  icon(40) 混在字号阶梯里, 2xl(32) < 3xl(36) < icon(40) 命名与数值不同向;
- 卡片标题 18px/600 用字重建层级, 与正文 14px 仅差字重, 在数据密集页抢注意力。

断言:
T1 阶梯值收敛为 6 档且相邻差 >= 2px
T2 --qc-font-size-lg2 不存在
T3 --qc-font-size-icon 不存在 (已改名 --qc-icon-size)
T4 角色层 5 个令牌存在且可解析为具体 px
T5 frontend/css 中裸 font-size: <数字>px = 0
T6 .card-title 为 18px / 500
"""
import glob
import os
import re
import sys

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))

import color_gate as g  # noqa: E402

FRONTEND = g.FRONTEND
CSS_DIR = os.path.join(FRONTEND, "css")

LADDER = (
    "--qc-font-size-xs", "--qc-font-size-sm", "--qc-font-size-base",
    "--qc-font-size-md", "--qc-font-size-lg", "--qc-font-size-xl",
    "--qc-font-size-2xl", "--qc-font-size-3xl",
)
EXPECTED = [12, 14, 16, 18, 22, 28]

ROLES = (
    "--font-role-page-title", "--font-role-card-title", "--font-role-data-value",
    "--font-role-label", "--font-role-caption",
)


def _defs():
    return g.css_defs()["root"]


def _css_text():
    raw = "\n".join(open(p, encoding="utf-8").read() for p in sorted(glob.glob(os.path.join(CSS_DIR, "*.css"))))
    return re.sub(r"/\*.*?\*/", "", raw, flags=re.S)


def _px(value, defs, depth=0):
    """把 var()/px 值解析成数值 px, 解析失败返回 None。"""
    if value is None or depth > 6:
        return None
    v = value.strip()
    m = re.fullmatch(r"var\(\s*(--[a-zA-Z0-9-]+)\s*(?:,\s*([^)]*))?\)", v)
    if m:
        return _px(defs.get(m.group(1)) or m.group(2), defs, depth + 1)
    m = re.fullmatch(r"([0-9.]+)px", v)
    return float(m.group(1)) if m else None


def test_t1_six_step_ladder():
    defs = _defs()
    vals = []
    for token in LADDER:
        px = _px(defs.get(token), defs)
        assert px is not None, "字号令牌缺失或不可解析: %s" % token
        vals.append(int(px))
    distinct = sorted(set(vals))
    assert len(distinct) == 6, "字号阶梯必须收敛为 6 档, 实为 %s (来自 %s)" % (distinct, vals)
    assert distinct == EXPECTED, "字号阶梯必须为 %s, 实为 %s" % (EXPECTED, distinct)
    gaps = [b - a for a, b in zip(distinct, distinct[1:])]
    assert all(gap >= 2 for gap in gaps), "相邻档位差必须 >= 2px, 实为 %s" % gaps


def test_t2_no_lg2():
    assert "--qc-font-size-lg2" not in _css_text(), "--qc-font-size-lg2 必须删除 (补丁名, 已并入 xl/base)"


def test_t3_no_icon_in_scale():
    css = _css_text()
    assert "--qc-font-size-icon" not in css, "--qc-font-size-icon 必须改名为 --qc-icon-size (脱离字号阶梯)"
    assert "--qc-icon-size" in css, "缺少 --qc-icon-size (图标尺寸令牌)"


def test_t4_role_tokens():
    defs = _defs()
    for token in ROLES:
        px = _px(defs.get(token), defs)
        assert px is not None, "角色层令牌缺失或不可解析: %s" % token


def test_t5_no_bare_px_font_size():
    bare = re.findall(r"font-size\s*:\s*[0-9.]+px", _css_text())
    assert not bare, "存在裸 px 字号 (必须走令牌): %s" % bare


def _card_title_rule():
    src = open(os.path.join(CSS_DIR, "themes.css"), encoding="utf-8").read()
    src = re.sub(r"/\*.*?\*/", "", src, flags=re.S)
    for m in re.finditer(r"(?m)^\s*\.card-title\s*\{([^}]*)\}", src):
        return m.group(1)
    return None


def test_t6_card_title_size_weight():
    body = _card_title_rule()
    assert body is not None, "未找到 .card-title 规则"
    defs = _defs()
    m = re.search(r"font-size\s*:\s*([^;]+);", body)
    assert m, ".card-title 必须显式声明 font-size"
    assert _px(m.group(1), defs) == 18, ".card-title 字号必须为 18px, 实为 %s" % m.group(1).strip()
    m = re.search(r"font-weight\s*:\s*([^;]+);", body)
    assert m, ".card-title 必须显式声明 font-weight"
    weight = _px(m.group(1).strip().replace("var(--font-weight", ""), defs)
    raw = m.group(1).strip()
    mm = re.fullmatch(r"var\(\s*(--[a-zA-Z0-9-]+)\s*\)", raw)
    weight = defs.get(mm.group(1)) if mm else raw
    assert str(weight).strip() == "500", ".card-title 字重必须为 500, 实为 %s" % raw
