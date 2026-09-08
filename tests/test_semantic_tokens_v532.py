# -*- coding: utf-8 -*-
"""V5.3.0 (T-5.3.2.2): 语义配色令牌测试 (FR-5.3.2.2)

- 机会/风险/中性/警示 语义令牌 (--sem-*) 存在且语义化别名到行情涨跌
- 涨跌强弱分档 (--color-up-strong/weak, --color-down-strong/weak)
- DESIGN-SYSTEM.md 已登记语义令牌
"""
import os
import re

BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
FRONTEND = os.path.join(BASE, "frontend")
TOKENS = os.path.join(FRONTEND, "css", "tokens.css")
DESIGN_SYSTEM = os.path.join(BASE, "docs", "DESIGN-SYSTEM.md")

DEF_RE = re.compile(r"(--[a-zA-Z0-9-]+)\s*:\s*([^;]+);")


def _tokens():
    src = open(TOKENS, encoding="utf-8").read()
    return dict(DEF_RE.findall(src))


def test_semantic_opportunity_risk_neutral_warning_defined():
    """FR-5.3.2.2: 机会/风险/中性/警示语义令牌齐备"""
    t = _tokens()
    for name in ("--sem-opportunity", "--sem-risk", "--sem-neutral", "--sem-warning"):
        assert name in t, f"缺语义令牌 {name}"


def test_semantic_alias_matches_market_updown():
    """语义令牌别名到行情涨跌: 机会=涨(红), 风险=跌(绿), 中性=中性"""
    t = _tokens()
    # 机会对应用户机会感知 → 涨; 风险 → 跌
    assert t.get("--sem-opportunity", "").strip() == "var(--color-up)", \
        "机会语义应别名到 --color-up (红涨)"
    assert t.get("--sem-risk", "").strip() == "var(--color-down)", \
        "风险语义应别名到 --color-down (绿跌)"
    assert t.get("--sem-warning", "").strip() == "var(--color-warning)", \
        "警示语义应别名到 --color-warning"


def test_updown_strength_tiers_defined():
    """涨跌强弱分档: strong/weak 四档令牌存在"""
    t = _tokens()
    for name in ("--color-up-strong", "--color-up-weak",
                 "--color-down-strong", "--color-down-weak"):
        assert name in t, f"缺涨跌强弱分档令牌 {name}"


def test_strength_tiers_differ_from_base():
    """强弱档与基础涨跌色不同 (视觉可区分)"""
    t = _tokens()
    base_up = t.get("--color-up", "").strip()
    base_down = t.get("--color-down", "").strip()
    assert t.get("--color-up-strong", "").strip() != base_up
    assert t.get("--color-up-weak", "").strip() != base_up
    assert t.get("--color-down-strong", "").strip() != base_down
    assert t.get("--color-down-weak", "").strip() != base_down


def test_design_system_registers_semantic_tokens():
    """DESIGN-SYSTEM.md 已登记语义令牌章节"""
    src = open(DESIGN_SYSTEM, encoding="utf-8").read()
    assert "--sem-opportunity" in src or "--sem-risk" in src, \
        "DESIGN-SYSTEM.md 应登记语义令牌"
    assert "机会" in src and "风险" in src, "DESIGN-SYSTEM 应含机会/风险语义说明"
