# -*- coding: utf-8 -*-
"""V6.9.1 (PRD F-6.9.1 / TEST-PLAN TC-6.9.1.1): AI 评估校准分析 — 纯函数测试"""
import os
import sys

import pytest

BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(BASE, "backend"))


def _samples(n, direction=1, hit=True, provider="deepseek", level=None):
    return [{
        "direction": direction, "provider": provider,
        "level": level or ("看多" if direction > 0 else "看空"),
        "hit_n5": hit, "hit_n10": hit, "hit_n20": hit,
    } for _ in range(n)]


def test_insufficient_sample():
    import calibration
    res = calibration.compute_calibration(_samples(10))
    assert res["available"] is False
    assert "样本不足" in res["note"]


def test_sufficient_high_accuracy():
    import calibration
    res = calibration.compute_calibration(_samples(60, direction=1, hit=True))
    assert res["available"] is True
    assert res["sample_count"] == 60
    assert len(res["buckets"]) >= 1
    top = res["buckets"][0]
    assert top["hit_rate"] == 100.0
    assert res["overconfidence"] == [], "高命中率不应误报过度自信"


def test_overconfidence_detected():
    import calibration
    # 大量看多评级但实际多数未命中 → 过度乐观
    records = _samples(60, direction=1, hit=False) + _samples(10, direction=1, hit=True)
    res = calibration.compute_calibration(records)
    assert res["available"] is True
    kinds = [o["kind"] for o in res["overconfidence"]]
    assert "过度乐观" in kinds, "看多但命中率低应提示过度乐观"


def test_model_calibration():
    import calibration
    records = _samples(40, provider="a") + _samples(30, provider="b", hit=False)
    out = calibration.compute_model_calibration(records)
    models = {m["model"]: m for m in out}
    assert models["a"]["hit_rate"] == 100.0
    assert models["b"]["hit_rate"] == 0.0
    assert out[0]["total"] >= out[1]["total"], "应按样本量降序"


def test_bad_window_falls_back():
    import calibration
    res = calibration.compute_calibration(_samples(60), window="n99")
    assert res["window"] == "n5", "非法窗口应回退 n5"
