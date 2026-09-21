# -*- coding: utf-8 -*-
"""V6.10 (配色专项·D): 语义令牌契约 (原 V5.3.0 FR-5.3.2.2)

V6.10 的语义收敛把原先「三套并行」的定义统一为唯一语义槽位:
- --state-{success,warning,danger,info}-{text,tint,solid,on-solid}
- --market-{up,down}-{fill,text}   (填充档 >=3:1 于卡片; 文字档 >=4.5:1)
- --sem-opportunity / --sem-risk  (机会/风险 语义别名, 仍别名到行情涨跌)
组件层只允许引用上述槽位; 旧的 --qc-state-* 已降级为 --state-* 的别名。
"""
import os
import re

BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
FRONTEND = os.path.join(BASE, "frontend")
TOKENS = os.path.join(FRONTEND, "css", "tokens.css")

DEF_RE = re.compile(r"(?<![\w-])(--[a-zA-Z0-9-]+)\s*:\s*([^;]+);")
STATES = ("success", "warning", "danger", "info")
VARIANTS = ("text", "tint", "solid", "on-solid")


def _tokens():
    src = open(TOKENS, encoding="utf-8").read()
    return dict(DEF_RE.findall(src))


def test_state_slots_complete():
    """四个语义 × 四个变体 必须齐备 (唯一语义槽位)。"""
    t = _tokens()
    missing = [f"--state-{k}-{v}" for k in STATES for v in VARIANTS if f"--state-{k}-{v}" not in t]
    assert not missing, f"缺语义槽位: {missing}"


def test_state_values_come_from_badge_tokens():
    """取值来源唯一: --state-*-text/tint/solid 必须别名到 --badge-* (已按明暗适配的那一套)。"""
    t = _tokens()
    for k in STATES:
        badge = "danger" if k == "danger" else k
        assert t[f"--state-{k}-text"].strip() == f"var(--badge-{badge}-text)", \
            f"--state-{k}-text 应别名到 --badge-{badge}-text"
        assert t[f"--state-{k}-tint"].strip() == f"var(--badge-{badge}-bg)", \
            f"--state-{k}-tint 应别名到 --badge-{badge}-bg"


def test_legacy_state_family_removed_or_alias_only():
    """旧 --qc-state-* 不得再以字面色值出现 —— V6.10 起已删除(或保留为别名), 否则语义又会分叉。"""
    t = _tokens()
    literal = [f"--qc-state-{k}" for k in STATES
               if f"--qc-state-{k}" in t and not t[f"--qc-state-{k}"].strip().startswith("var(")]
    assert not literal, f"以下旧语义令牌仍为字面量定义, 应删除或别名化: {literal}"


def test_market_fill_and_text_defined():
    """行情涨跌拆分为「填充档 / 文字档」两套。"""
    t = _tokens()
    for name in ("--market-up-fill", "--market-down-fill", "--market-up-text", "--market-down-text"):
        assert name in t, f"缺行情令牌 {name}"
    assert t["--color-up"].strip() == "var(--market-up-fill)"
    assert t["--color-down"].strip() == "var(--market-down-fill)"


def test_semantic_aliases_defined():
    """机会/风险语义别名仍存在且指向行情涨跌。"""
    t = _tokens()
    assert t.get("--sem-opportunity", "").strip() in ("var(--color-up)", "var(--market-up-fill)")
    assert t.get("--sem-risk", "").strip() in ("var(--color-down)", "var(--market-down-fill)")
