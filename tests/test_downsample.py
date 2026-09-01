# -*- coding: utf-8 -*-
"""V5.7 (T-5.7.4): 分块 + 降采样测试 (TEST-PLAN 8.1 test_downsample.py)

全市场 K 线/因子分块 (chunked/chunk_tasks) + 长序列降采样 (LTTB/tail) +
年视图基准守护 (year_view_budget)。纯 Python 逻辑, 不触数据源。
"""
import os
import sys
import time

import pytest

BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(BASE, "backend"))

import downsample  # noqa: E402


# ─── 分块 ────────────────────────────────────────────────────

def test_chunked_basic():
    out = list(downsample.chunked(list(range(10)), 3))
    assert out == [[0, 1, 2], [3, 4, 5], [6, 7, 8], [9]]


def test_chunked_single():
    out = list(downsample.chunked([1, 2], 5))
    assert out == [[1, 2]]


def test_chunked_empty():
    assert list(downsample.chunked([], 3)) == []


def test_chunk_tasks_groups():
    tasks = downsample.chunk_tasks(list(range(10)), 4)
    assert len(tasks) == 3
    assert tasks[0]["items"] == [0, 1, 2, 3]
    assert tasks[2]["items"] == [8, 9]


# ─── LTTB 降采样 ─────────────────────────────────────────────

def test_lttb_keeps_first_last():
    values = [float(i) for i in range(100)]
    idx = downsample.lttb_indices(values, 10)
    assert idx[0] == 0 and idx[-1] == 99


def test_lttb_point_count_bounded():
    values = [float(i * i % 97) for i in range(1000)]
    idx = downsample.lttb_indices(values, 50)
    assert len(idx) == 50


def test_lttb_small_input_full():
    values = [1.0, 2.0, 3.0]
    assert downsample.lttb_indices(values, 10) == [0, 1, 2]


def test_lttb_max_points_min():
    values = [float(i) for i in range(20)]
    assert downsample.lttb_indices(values, 2) == list(range(20))


def test_lttb_monotonic_spread():
    values = [float(i) for i in range(200)]
    idx = downsample.lttb_indices(values, 20)
    # 单调序列降采样应大致均匀覆盖
    diffs = [idx[i + 1] - idx[i] for i in range(len(idx) - 1)]
    assert min(diffs) >= 1


# ─── 序列/表格降采样 ─────────────────────────────────────────

def test_downsample_series_bounded():
    values = list(range(500))
    out = downsample.downsample_series(values, 40)
    assert len(out) == 40
    assert out[0] == 0 and out[-1] == 499


def test_downsample_kline_keeps_ends():
    rows = [{"trade_date": "d%d" % i, "close": float(i)} for i in range(300)]
    out = downsample.downsample_kline(rows, 60)
    assert len(out) == 60
    assert out[0]["trade_date"] == "d0"
    assert out[-1]["trade_date"] == "d299"


def test_downsample_kline_small_passthrough():
    rows = [{"close": 1.0}, {"close": 2.0}]
    assert downsample.downsample_kline(rows, 10) == rows


def test_downsample_kline_no_max():
    rows = [{"close": 1.0}] * 5
    assert downsample.downsample_kline(rows, None) == rows


def test_downsample_tail_keeps_latest():
    rows = [{"trade_date": "d%d" % i} for i in range(100)]
    out = downsample.downsample_tail(rows, 10)
    assert len(out) == 10
    assert out[-1]["trade_date"] == "d99"


def test_downsample_tail_passthrough():
    rows = [{"x": 1}, {"x": 2}]
    assert downsample.downsample_tail(rows, 10) == rows


# ─── 年视图基准守护 ──────────────────────────────────────────

def test_year_view_budget_ok():
    rows = [{"trade_date": "d%d" % i, "close": float(i)} for i in range(1000)]
    r = downsample.year_view_budget(rows, max_points=250)
    assert r["original"] == 1000
    assert r["kept"] <= 250
    assert r["ok"] is True


def test_year_view_budget_small_ok():
    rows = [{"close": 1.0}] * 100
    r = downsample.year_view_budget(rows, max_points=250)
    assert r["ok"] is True and r["kept"] == 100


def test_year_view_budget_bad_ok_false():
    """LTTB 不可用 (max_points<3 → 回退全量) 时超过预算 → ok=False (守护红)"""
    rows = [{"close": 1.0}] * 300
    r = downsample.year_view_budget(rows, max_points=2)
    assert r["ok"] is False
    assert r["kept"] == 300


def test_lttb_perf_100k():
    """10 万点 LTTB < 500ms (性能基准)"""
    import random
    random.seed(7)
    values = [random.random() for _ in range(100000)]
    t0 = time.time()
    idx = downsample.lttb_indices(values, 1000)
    elapsed = (time.time() - t0) * 1000
    assert len(idx) == 1000
    assert elapsed < 500, f"LTTB 10万点耗时 {elapsed:.1f}ms"


# ─── 接入 market_data ────────────────────────────────────────

def test_market_data_kline_downsample(monkeypatch):
    """market_data.get_kline_data(max_points) 生效"""
    import market_data
    big = [{"trade_date": "d%d" % i, "close": float(i)} for i in range(500)]

    def fake_manager_get(ts_code, period, limit):
        return {"data": big}

    monkeypatch.setattr("data_sources.data_source_manager.get_kline_data", fake_manager_get)
    out = market_data.get_kline_data("600000.SH", "daily", 500, max_points=100)
    assert len(out) == 100
    assert out[0]["trade_date"] == "d0"
    assert out[-1]["trade_date"] == "d499"


def test_market_data_kline_without_max(monkeypatch):
    import market_data
    big = [{"trade_date": "d%d" % i, "close": float(i)} for i in range(10)]

    def fake_manager_get(ts_code, period, limit):
        return {"data": big}

    monkeypatch.setattr("data_sources.data_source_manager.get_kline_data", fake_manager_get)
    out = market_data.get_kline_data("600000.SH", "daily", 10)
    assert len(out) == 10
