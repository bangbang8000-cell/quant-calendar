# -*- coding: utf-8 -*-
"""v7.25 FR-6 (TC-725-1-2/1-3): 行情 TTL 与收盘确认、节假日不缓存错误日期"""
import os
import sys
from datetime import date, datetime, timedelta

import pytest

BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(BASE, "backend"))

import market_data as md  # noqa: E402


class _RealDs:
    """数据源替身：返回今日（或指定）trade_date 的真实数据"""

    def __init__(self, trade_date="20261127"):
        self.trade_date = trade_date
        self.calls = 0

    def get_index_daily(self, ts_code, trade_date=None):
        self.calls += 1
        return {
            "ts_code": ts_code,
            "trade_date": self.trade_date,
            "close": 4000.0,
            "pct_chg": 0.5,
            "change": 20.0,
            "vol": 1.0,
            "amount": 1.0,
            "data_source": "tushare",
        }


@pytest.fixture
def iso(tmp_path, monkeypatch):
    monkeypatch.setattr(md, "CACHE_FILE", str(tmp_path / "market_cache.json"))
    old = md.market_data.cache
    md.market_data.cache = {}
    yield md.market_data
    md.market_data.cache = old


def _set_clock(monkeypatch, value):
    monkeypatch.setattr(md, "_now", lambda: value)


# ─── 交易时段刷新间隔 ───────────────────────────────────────

def test_trading_interval_within_15_30s(monkeypatch):
    monkeypatch.setattr(md, "is_trading_day", lambda d=None: True)
    monkeypatch.setattr(md, "is_trading_hours", lambda now=None: True)
    assert 15 <= md.get_cache_duration(datetime(2026, 11, 27, 10, 0)) <= 30


# ─── 收盘确认窗口 ──────────────────────────────────────────

def test_after_close_retries_until_confirmed(monkeypatch):
    monkeypatch.setattr(md, "is_trading_day", lambda d=None: True)
    monkeypatch.setattr(md, "is_trading_hours", lambda now=None: False)
    monkeypatch.setattr(md, "_next_trade_date", lambda d: date(2026, 11, 30))
    now = datetime(2026, 11, 27, 15, 10)
    # 未确认当日终值 → 短 TTL 重试
    assert md.get_cache_duration(now, confirmed=False) <= 120
    # 确认后 → 长 TTL（至下一交易日 9:25）
    assert md.get_cache_duration(now, confirmed=True) > 3600


def test_stale_close_cache_triggers_refetch(iso, monkeypatch):
    """15:05 后缓存还是昨日收盘 → 失效并重新拉取，拿到当日后转长 TTL"""
    now = datetime(2026, 11, 27, 15, 10)
    _set_clock(monkeypatch, now)
    monkeypatch.setattr(md, "is_trading_day", lambda d=None: True)
    monkeypatch.setattr(md, "is_trading_hours", lambda now=None: False)
    monkeypatch.setattr(md, "_next_trade_date", lambda d: date(2026, 11, 30))

    key = "index_000001.SH_latest"
    iso.cache[key] = {
        "fetch_time": (now - timedelta(seconds=120)).isoformat(),
        "data": {"trade_date": "20261126", "data_source": "tushare"},
    }
    assert iso._is_cache_valid(key) is False, "昨日收盘不应命中缓存"

    ds = _RealDs("20261127")
    monkeypatch.setattr(iso, "ds_manager", ds)
    data = iso.get_index_daily("000001.SH")
    assert data["trade_date"] == "20261127"
    assert ds.calls == 1
    # 确认当日后缓存重新有效
    assert iso._is_cache_valid(key) is True


# ─── 节假日 ────────────────────────────────────────────────

def test_holiday_ttl_jumps_to_next_trade_day(monkeypatch):
    """国庆节 2026-10-01 不是交易日；TTL 跳到下一交易日 9:25，不缓存到错误日期"""
    monkeypatch.setattr(md, "is_trading_day", lambda d=None: False)
    monkeypatch.setattr(md, "_next_trade_date", lambda d: date(2026, 10, 9))
    now = datetime(2026, 10, 1, 12, 0)
    dur = md.get_cache_duration(now)
    expected = int((datetime(2026, 10, 9, 9, 25) - now).total_seconds())
    assert abs(dur - expected) <= 1
    assert dur > 7 * 86400, "长假期间应缓存到节后首个交易日"


def test_is_trading_day_delegates_to_calendar(monkeypatch):
    """交易日判断统一走 stock_calendar（非简化的 weekday）"""
    monkeypatch.setattr(md.stock_calendar, "is_trade_day", lambda d: False)
    assert md.is_trading_day(datetime(2026, 11, 27, 10, 0)) is False
    monkeypatch.setattr(md.stock_calendar, "is_trade_day", lambda d: True)
    assert md.is_trading_day(datetime(2026, 11, 27, 10, 0)) is True


# ─── 强制刷新（调度任务用） ────────────────────────────────

def test_refresh_market_indices_bypasses_cache(iso, monkeypatch):
    now = datetime(2026, 11, 27, 15, 10)
    _set_clock(monkeypatch, now)
    monkeypatch.setattr(md, "is_trading_day", lambda d=None: True)
    monkeypatch.setattr(md, "is_trading_hours", lambda now=None: False)
    monkeypatch.setattr(md, "_next_trade_date", lambda d: date(2026, 11, 30))

    # 预置一份旧的、看似有效的缓存，验证强制刷新会绕过
    iso.cache["index_000001.SH_latest"] = {
        "fetch_time": now.isoformat(),
        "data": {"trade_date": "19990101", "data_source": "tushare"},
    }
    ds = _RealDs("20261127")
    monkeypatch.setattr(iso, "ds_manager", ds)
    ok, detail = iso.refresh_market_indices()
    assert ok is True
    assert ds.calls == len(md.INDEX_CONFIG)
    assert "确认当日终值" in detail


def test_scheduler_registers_market_index_refresh():
    core_path = os.path.join(BASE, "backend", "scheduler", "_core.py")
    health_path = os.path.join(BASE, "backend", "scheduler", "_core_health.py")
    with open(core_path, encoding="utf-8") as f:
        core_src = f.read()
    with open(health_path, encoding="utf-8") as f:
        health_src = f.read()
    assert "async def market_index_refresh_task" in health_src, "任务应实现于健康类 Mixin"
    assert "market_index_refresh_task" in core_src, "指数刷新任务需在 start() 注册"
    assert 'market_daily' in health_src, "指数刷新需接入 freshness"
