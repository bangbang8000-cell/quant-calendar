# -*- coding: utf-8 -*-
"""V6.8.1 (PRD F-6.8.1 / TEST-PLAN TC-6.8.1.x): 行情日线批量缓存 — 增量拉取/血缘失效/交易日历 TTL

零外部依赖; 缓存/血缘/交易日历全部隔离到 tmp_path 与 monkeypatch。
"""
import os
import sys

import pytest

BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(BASE, "backend"))


@pytest.fixture
def mc(tmp_path, monkeypatch):
    import cache
    import lineage
    import market_cache
    monkeypatch.setattr(cache, "CACHE_FILE", str(tmp_path / "cache.json"))
    monkeypatch.setattr(lineage, "LINEAGE_FILE", str(tmp_path / "lineage.json"))
    cache._mem.clear(); cache._order.clear(); cache.clear()
    lineage.reset_lineage()
    market_cache.DAILY_CACHE_TTL = 3600
    return market_cache


# ─── 基础存取 ─────────────────────────────────────────────

def test_set_get_roundtrip(mc):
    mc.set_daily("600519.SH", {"2026-09-10": {"close": 1700.0}})
    got = mc.get_daily("600519.SH")
    assert got == {"2026-09-10": {"close": 1700.0}}


def test_get_miss_none(mc):
    assert mc.get_daily("000001.SZ") is None


# ─── 增量拉取 ─────────────────────────────────────────────

def test_incremental_fetches_only_missing(mc):
    calls = []
    def fetch_fn(d):
        calls.append(d)
        return [{"trade_date": d, "close": 1.0}]
    mc.set_daily("600519.SH", {"2026-09-10": {"close": 1.0}})
    result = mc.incremental_daily("600519.SH", ["2026-09-10", "2026-09-11"], fetch_fn)
    assert calls == ["2026-09-11"], "仅应拉取缺失交易日"
    assert set(result.keys()) == {"2026-09-10", "2026-09-11"}


def test_incremental_all_cached_no_fetch(mc):
    calls = []
    mc.set_daily("600519.SH", {"2026-09-10": {"close": 1.0}})
    result = mc.incremental_daily("600519.SH", ["2026-09-10"], lambda d: calls.append(d) or [])
    assert calls == [], "全部命中缓存不应触发拉取"
    assert "2026-09-10" in result


def test_incremental_degrades_on_fetch_error(mc):
    mc.set_daily("600519.SH", {"2026-09-10": {"close": 1.0}})
    def fetch_fn(d):
        raise RuntimeError("source down")
    result = mc.incremental_daily("600519.SH", ["2026-09-10", "2026-09-11"], fetch_fn)
    assert "2026-09-10" in result, "数据源不可达应保留已缓存部分 (优雅降级)"


# ─── 血缘失效 (PIT/前视守护) ─────────────────────────────

def test_stale_invalidation_via_lineage(mc, tmp_path, monkeypatch):
    import cache
    import lineage
    # 写入 (set_daily 内部已 mark_data_version, 记录当前批次版本)
    mc.set_daily("600519.SH", {"2026-09-10": {"close": 1.0}})
    assert mc.get_daily("600519.SH") is not None
    # 模拟数据刷新 → begin/finish 新批次 → stale → 自动失效
    bid = lineage.begin_batch(kind="kline_daily", trigger="test", detail="refresh")
    lineage.finish_batch(bid, status="success", rows_fetched=10)
    assert cache.is_data_stale("kline_daily") is True
    assert mc.get_daily("600519.SH") is None, "数据刷新后缓存应自动失效"


def test_daily_counts(mc):
    assert mc.daily_counts("600519.SH")["count"] == 0
    mc.set_daily("600519.SH", {"2026-09-10": {"close": 1.0}, "2026-09-11": {"close": 2.0}})
    c = mc.daily_counts("600519.SH")
    assert c["count"] == 2 and c["latest"] == "2026-09-11"


# ─── 交易日历 TTL ────────────────────────────────────────

def test_next_refresh_in_seconds_positive(mc):
    assert mc.next_refresh_in_seconds() > 0, "TTL 应大于 0"


def test_clear_ns(mc):
    mc.set_daily("600519.SH", {"2026-09-10": {"close": 1.0}})
    mc.clear_ns()
    assert mc.get_daily("600519.SH") is None


# ─── 全市场按交易日批量缓存 ─────────────────────────────

def test_market_daily_set_get(mc):
    assert mc.get_market_daily("2026-09-10") is None
    mc.set_market_daily("2026-09-10", {"600519.SH": {"close": 1700.0}, "000001.SZ": {"close": 12.0}})
    got = mc.get_market_daily("2026-09-10")
    assert got["600519.SH"]["close"] == 1700.0
    assert set(got.keys()) == {"600519.SH", "000001.SZ"}


def test_market_daily_empty_not_set(mc):
    mc.set_market_daily("2026-09-10", {})
    assert mc.get_market_daily("2026-09-10") is None


def test_market_daily_stale_invalidates(mc):
    import cache
    import lineage
    mc.set_market_daily("2026-09-10", {"600519.SH": {"close": 1.0}})
    assert mc.get_market_daily("2026-09-10") is not None
    bid = lineage.begin_batch(kind="kline_daily", trigger="test", detail="refresh")
    lineage.finish_batch(bid, status="success", rows_fetched=10)
    assert mc.get_market_daily("2026-09-10") is None, "数据刷新后按交易日缓存应自动失效"
