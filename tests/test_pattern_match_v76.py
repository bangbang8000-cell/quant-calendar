#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""v7.6 形态匹配核心测试 (FR-7.6-1/2)"""
import os, sys
sys.path.insert(0, os.path.join(os.path.dirname(__file__), '..', 'backend'))

import numpy as np
import pandas as pd
import pytest

from pattern_match import PatternFeatureExtractor, PatternMatcher


def _panel(n=160, seed=3, drift=0.04):
    rng = np.random.default_rng(seed)
    dates = pd.bdate_range("2025-01-01", periods=n).strftime("%Y-%m-%d")
    close = 20 + np.linspace(0, n * drift, n) + rng.normal(0, 0.4, n)
    close = np.maximum(close, 1)
    return pd.DataFrame({
        "date": dates,
        "open": close * rng.uniform(0.99, 1.01, n),
        "high": close * rng.uniform(1.01, 1.04, n),
        "low": close * rng.uniform(0.96, 0.99, n),
        "close": close,
        "volume": rng.uniform(1e6, 3e6, n),
    })


def test_extract_four_dimensions():
    """FR-7.6-1: 四维特征均产出且非空"""
    features = PatternFeatureExtractor().extract(_panel())
    assert set(features) == {"trend_structure", "kdj_state", "volume_pattern", "price_shape"}
    assert all(isinstance(v, dict) and v for v in features.values())
    assert len(features["price_shape"]["normalized_curve"]) == 25


def test_ma114_warmup_fixed():
    """超越 KHunter: 25 日窗口不得让 MA114 多空线退化成 NaN"""
    f = PatternFeatureExtractor().extract(_panel())
    trend = f["trend_structure"]
    assert trend["short_vs_bullbear"] > 0
    assert np.isfinite(trend["trend_spread_pct"])
    assert np.isfinite(trend["price_bias_pct"])


def test_extract_insufficient_data_honest():
    """数据不足返回空四维, 不造特征"""
    f = PatternFeatureExtractor().extract(_panel(30))
    assert all(v == {} for v in f.values())


def test_identical_features_perfect_score():
    """FR-7.6-2: 自匹配=100, 四项 breakdown 全 100"""
    f = PatternFeatureExtractor().extract(_panel())
    r = PatternMatcher().match(f, f)
    assert r["total_score"] == 100.0
    assert all(v == 100.0 for v in r["breakdown"].values())
    assert r["missing_dimensions"] == []


def test_weights_normalized_to_one():
    """权重可配置且强制和为 1"""
    m = PatternMatcher(weights={"trend_structure": 3, "kdj_state": 1,
                                "volume_pattern": 1, "price_shape": 1})
    assert abs(sum(m.weights.values()) - 1.0) < 1e-6
    assert m.weights["trend_structure"] == pytest.approx(0.5)


def test_reject_nonpositive_weights():
    with pytest.raises(ValueError):
        PatternMatcher(weights={"trend_structure": 0, "kdj_state": 0,
                                "volume_pattern": 0, "price_shape": 0})


def test_missing_dimension_neutral_and_labeled():
    """缺维诚实标注: 中性 0.5 + missing_dimensions, 不猜数"""
    a = PatternFeatureExtractor().extract(_panel())
    b = dict(a)
    b["kdj_state"] = {}
    r = PatternMatcher().match(a, b)
    assert "kdj_state" in r["missing_dimensions"]
    assert r["breakdown"]["kdj_state"] == 50.0
    assert 0 <= r["total_score"] <= 100


def test_different_features_lower_score():
    a = PatternFeatureExtractor().extract(_panel(seed=3, drift=0.04))
    b = PatternFeatureExtractor().extract(_panel(seed=9, drift=-0.06))
    r = PatternMatcher().match(a, b)
    assert 0 <= r["total_score"] < 100
    assert r["engine"] in ("fastdtw", "simple_dtw")


def test_simple_dtw_fallback():
    """fastdtw 降级路径确定性且落在 0-1"""
    same = PatternMatcher._simple_dtw(np.array([0.0, 0.5, 1.0]),
                                      np.array([0.0, 0.5, 1.0]))
    diff = PatternMatcher._simple_dtw(np.array([0.0, 0.0, 0.0]),
                                      np.array([1.0, 1.0, 1.0]))
    assert same == pytest.approx(1.0)
    assert 0 <= diff < same
    assert PatternMatcher._simple_dtw(np.array([]), np.array([1.0])) == 0.0


def test_result_has_no_holdings_matrix():
    """评估铁律: 匹配产物是分数, 不产持仓矩阵"""
    f = PatternFeatureExtractor().extract(_panel())
    r = PatternMatcher().match(f, f)
    assert "holdings" not in r and "matrix" not in r
    assert "breakdown" in r and "total_score" in r
