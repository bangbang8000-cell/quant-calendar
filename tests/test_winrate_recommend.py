# -*- coding: utf-8 -*-
"""6.1.6 (F2): 评估胜率闭环 — 推荐模型组合 (纯规则)"""
from eval_track import recommend_models, compute_stats


def _stats_by_model(by_model):
    return {"overall": {}, "by_model": by_model, "by_level": {}}


def test_recommend_orders_by_rate():
    stats = _stats_by_model({
        "modelA": {"n5": {"hit": 8, "total": 10, "rate": 80.0}},
        "modelB": {"n5": {"hit": 5, "total": 10, "rate": 50.0}},
    })
    out = recommend_models(stats)
    assert [r["model"] for r in out["recommendations"]] == ["modelA", "modelB"]


def test_recommend_flags_low_sample():
    stats = _stats_by_model({
        "modelA": {"n5": {"hit": 8, "total": 10, "rate": 80.0}},
        "modelB": {"n5": {"hit": 30, "total": 40, "rate": 75.0}},
    })
    out = recommend_models(stats, min_samples=20)
    a = next(r for r in out["recommendations"] if r["model"] == "modelA")
    b = next(r for r in out["recommendations"] if r["model"] == "modelB")
    assert a["confident"] is False and b["confident"] is True


def test_recommend_empty_stats():
    out = recommend_models({})
    assert out["recommendations"] == []
    assert "暂无评估样本" in out["note"]


def test_recommend_respects_top_n():
    stats = _stats_by_model({
        "m1": {"n5": {"hit": 9, "total": 10, "rate": 90.0}},
        "m2": {"n5": {"hit": 8, "total": 10, "rate": 80.0}},
        "m3": {"n5": {"hit": 7, "total": 10, "rate": 70.0}},
        "m4": {"n5": {"hit": 6, "total": 10, "rate": 60.0}},
    })
    out = recommend_models(stats, top_n=2)
    assert len(out["recommendations"]) == 2


def test_recommend_ignores_none_rate():
    stats = _stats_by_model({
        "modelA": {"n5": {"hit": 0, "total": 0, "rate": None}},
        "modelB": {"n5": {"hit": 5, "total": 10, "rate": 50.0}},
    })
    out = recommend_models(stats)
    assert out["recommendations"][0]["model"] == "modelB"
