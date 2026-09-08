# -*- coding: utf-8 -*-
"""V5.3.0 (T-5.3.5.1 / FR-5.3.5.1): AI 评估归因

- _build_attribution 基于 market_data 纯计算命中/未命中因子清单
- 空数据诚实降级 (available=False + [⚠️] 提示)
- record 含 attribution 字段
"""
import os
import sys

import pytest

BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(BASE, "backend"))

from ai_eval import AIEvaluator  # noqa: E402


def _md(**kw):
    md = {
        "has_kline": True,
        "latest": {"close": 12.5, "pct_chg": 2.1, "ma5": 12.0, "ma10": 11.5, "ma20": 11.0},
        "rsi": 45.0,
        "macd": {"dif": 0.3, "dea": 0.1, "hist": 0.2},
        "ma_alignment": "多头排列",
        "price_range": {"max60": 14.0, "min60": 9.0, "close": 12.5},
        "volume_analysis": {"vol_ratio": 1.8},
    }
    md.update(kw)
    return md


def test_attribution_structured_hits_and_misses():
    a = AIEvaluator._build_attribution(_md(), {"level": "看涨"})
    assert a["available"] is True
    assert isinstance(a["hits"], list) and isinstance(a["misses"], list)
    signals = {h["signal"] for h in a["hits"]} | {m["signal"] for m in a["misses"]}
    assert "opportunity" in signals or "risk" in signals or "neutral" in signals
    # 多头排列 + MACD金叉 + 放量 → 应有 opportunity
    assert any(h["signal"] == "opportunity" for h in a["hits"]), "多头数据应有机会因子"


def test_attribution_risk_factors():
    a = AIEvaluator._build_attribution(_md(rsi=85.0, ma_alignment="空头排列",
                                           macd={"dif": -0.1, "dea": 0.2, "hist": -0.3}),
                                       {"level": "看跌"})
    assert any(m["signal"] == "risk" for m in a["misses"]), "过热/空头应有风险因子"


def test_attribution_empty_data_honest_degrade():
    a = AIEvaluator._build_attribution({}, {"level": "看涨"})
    assert a["available"] is False
    assert "⚠️" in a["consistency_note"], "空数据应诚实降级"


def test_attribution_consistency_note_present():
    a = AIEvaluator._build_attribution(_md(), {"level": "看涨"})
    assert a["consistency_note"], "应有一致性提示"
    assert "一致" in a["consistency_note"] or "分歧" in a["consistency_note"] or "中性" in a["consistency_note"]


def test_attribution_available_flag():
    a = AIEvaluator._build_attribution(_md(), {})
    assert a["available"] is True
