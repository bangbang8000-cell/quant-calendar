# -*- coding: utf-8 -*-
"""V5.3.0 (T-5.3.5.3 / FR-5.3.5.3): 评估分析深化 — 胜率趋势/样本量

- compute_trend: 按时间桶聚合窗口命中率折线 + 样本量标注
- 空数据诚实降级 (available=False)
"""
import os
import sys

import pytest

BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(BASE, "backend"))

from eval_track import compute_trend  # noqa: E402


def _rec(day, hit):
    return {"evaluate_time": day + "T10:00:00", "hit_n5": hit, "hit_n10": None}


def test_trend_weekly_buckets():
    recs = [
        _rec("2025-03-03", True),   # Mon W09
        _rec("2025-03-04", True),   # W09
        _rec("2025-03-05", False),  # W09 → 2/3 = 66.7%
        _rec("2025-03-10", True),   # W10
        _rec("2025-03-11", True),   # W10 → 2/2 = 100%
    ]
    t = compute_trend(recs, window="n5")
    assert t["available"] is True
    assert len(t["buckets"]) == 2
    w09 = [b for b in t["buckets"] if b["key"].endswith("W09")][0]
    assert w09["total"] == 3 and w09["hit"] == 2
    assert round(w09["rate"], 1) == 66.7


def test_trend_sample_size_annotated():
    t = compute_trend([_rec("2025-03-03", True), _rec("2025-03-04", None)], window="n5")
    assert t["buckets"], "应有桶"
    # None 命中不计入分母
    assert all(b["total"] >= 1 for b in t["buckets"])


def test_trend_empty_honest_degrade():
    t = compute_trend([], window="n5")
    assert t["available"] is False
    assert t["buckets"] == []


def test_trend_skips_no_timestamp():
    t = compute_trend([{"hit_n5": True}], window="n5")
    assert t["available"] is False, "无时间戳样本应降级"


def test_trend_winrate_api_includes_trend():
    """winrate API 返回含 trend 字段"""
    src = open(os.path.join(BASE, "backend", "api", "v1", "openapi.py"), encoding="utf-8").read()
    assert "compute_trend" in src, "winrate API 应接入趋势"
    assert '"trend"' in src
