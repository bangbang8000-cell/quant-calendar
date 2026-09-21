# -*- coding: utf-8 -*-
"""6.1.6 (F5): 入池/出池归因趋势测试 (attribution_trend.py)"""
from attribution_trend import build_trend


def test_empty_records():
    out = build_trend([])
    assert out["total"] == 0 and out["inconsistent"] == []


def test_factor_distribution():
    records = [
        {"direction": "in", "factors": ["动量", "质量"], "strategy": "多因子"},
        {"direction": "in", "factors": ["动量"], "strategy": "多因子"},
        {"direction": "out", "factors": ["质量"], "strategy": "行业轮动"},
    ]
    out = build_trend(records)
    assert out["factor_in"] == {"动量": 2, "质量": 1}
    assert out["factor_out"] == {"质量": 1}
    assert out["strategy_in"] == {"多因子": 2}
    assert out["in_count"] == 2 and out["out_count"] == 1


def test_inconsistent_factor_detected():
    records = [
        {"direction": "in", "factors": ["动量"]},
        {"direction": "out", "factors": ["动量"]},
    ]
    out = build_trend(records)
    assert out["inconsistent"] == ["动量"]


def test_direction_aliases():
    records = [
        {"direction": "入池", "factors": ["估值"]},
        {"direction": "出", "factors": ["估值"]},
    ]
    out = build_trend(records)
    assert out["in_count"] == 1 and out["out_count"] == 1


def test_factor_string_coerced():
    records = [{"direction": "in", "factors": "资金流"}]
    out = build_trend(records)
    assert out["factor_in"] == {"资金流": 1}


def test_unknown_direction_ignored():
    records = [{"direction": "?", "factors": ["x"]}]
    out = build_trend(records)
    assert out["total"] == 0
