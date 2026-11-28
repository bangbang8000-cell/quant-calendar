# -*- coding: utf-8 -*-
"""v7.25 FR-6 (TC-725-1-4): 数据源全失败 → is_mock=true 且不写持久缓存"""
import json
import os
import sys
from datetime import datetime

import pytest

BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(BASE, "backend"))

import market_data as md  # noqa: E402


class _EmptyDs:
    def get_index_daily(self, ts_code, trade_date=None):
        return None


class _RealDs:
    def get_index_daily(self, ts_code, trade_date=None):
        return {
            "ts_code": ts_code,
            "trade_date": "20261127",
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
    monkeypatch.setattr(md, "_now", lambda: datetime(2026, 11, 27, 10, 0))
    monkeypatch.setattr(md, "is_trading_day", lambda d=None: True)
    monkeypatch.setattr(md, "is_trading_hours", lambda now=None: True)
    yield md.market_data
    md.market_data.cache = old


def test_all_sources_fail_returns_mock_and_no_cache(iso, monkeypatch):
    monkeypatch.setattr(iso, "ds_manager", _EmptyDs())
    overview = iso.get_market_overview()

    assert overview["is_mock"] is True
    assert all(i["is_mock"] is True for i in overview["indices"])
    assert all(i["data_source"] == "mock" for i in overview["indices"])
    # mock 不写内存缓存
    assert iso.cache == {}, "模拟数据不得写入持久缓存"
    # 也不落盘
    assert not os.path.exists(md.CACHE_FILE) or json.loads(
        open(md.CACHE_FILE, encoding="utf-8").read() or "{}"
    ) == {}


def test_mock_payload_explicit_flag(iso, monkeypatch):
    monkeypatch.setattr(iso, "ds_manager", _EmptyDs())
    data = iso.get_index_daily("000001.SH")
    assert data["is_mock"] is True
    assert data["data_source"] == "mock"
    assert data["mock_reason"]


def test_real_source_clears_mock_flag(iso, monkeypatch):
    monkeypatch.setattr(iso, "ds_manager", _RealDs())
    overview = iso.get_market_overview()
    assert overview["is_mock"] is False
    assert all(i["is_mock"] is False for i in overview["indices"])
    assert overview["data_source"] == "tushare"
    assert overview["confirmed"] is True
    assert os.path.exists(md.CACHE_FILE), "真实数据应写持久缓存"


def test_overview_exposes_refresh_metadata(iso, monkeypatch):
    monkeypatch.setattr(iso, "ds_manager", _RealDs())
    overview = iso.get_market_overview()
    assert overview["next_refresh_seconds"] >= 15
    assert overview["data_source"]
    assert "confirmed" in overview
