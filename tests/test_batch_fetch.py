"""V4.7: 按交易日全市场批量取数测试

覆盖 data_sources 批量接口与 data_portal 批量面板路径:
- get_trade_dates: 交易日历
- get_market_daily_batch / get_market_daily_basic_batch / get_market_moneyflow_batch
- data_portal _get_batch_panel: 日期归一 + net_mf_amount 映射
- get_panel 大 universe 走批量分支
"""
import sys
import types

import pandas as pd
import pytest

import data_sources as ds


class _FakePro:
    """tushare pro 风格 client: 各接口按名字返回 DataFrame"""

    def __init__(self):
        self.calls = []

    def __getattr__(self, name):
        def _call(**kw):
            self.calls.append((name, kw))
            if name == "trade_cal":
                return pd.DataFrame({"cal_date": ["20260817", "20260818", "20260819"]})
            if name == "daily":
                return pd.DataFrame({
                    "ts_code": ["000001.SZ", "600519.SH"],
                    "trade_date": ["20260817", "20260817"],
                    "close": [11.5, 1500.0],
                    "vol": [1000, 200],
                    "open": [11.2, 1490.0],
                    "high": [11.6, 1505.0],
                    "low": [11.1, 1485.0],
                    "amount": [1e7, 2e8],
                })
            if name == "daily_basic":
                return pd.DataFrame({
                    "ts_code": ["000001.SZ", "600519.SH"],
                    "trade_date": ["20260817", "20260817"],
                    "pe": [8.0, 30.0], "pb": [1.2, 8.0],
                    "turnover_rate": [1.0, 0.5],
                    "total_mv": [1e11, 2e12], "circ_mv": [9e10, 1.8e12],
                    "float_mv": [9e10, 1.8e12],
                })
            if name == "moneyflow":
                return pd.DataFrame({
                    "ts_code": ["000001.SZ", "600519.SH"],
                    "trade_date": ["20260817", "20260817"],
                    "net_mf_amount": [100.0, -50.0],
                    "buy_lg_amount": [300.0, 20.0],
                    "sell_lg_amount": [200.0, 70.0],
                })
            return pd.DataFrame()
        return _call


@pytest.fixture
def mgr():
    m = ds.DataSourceManager()
    m._clients = {"tushare": _FakePro()}
    m._errors = {}
    m._kline_cache = {}
    return m


def test_get_trade_dates(mgr, monkeypatch):
    monkeypatch.setattr(mgr, "_get_source_config", lambda s: {"enabled": True})
    dates = mgr.get_trade_dates("2026-08-01", "2026-08-31")
    assert dates == ["20260817", "20260818", "20260819"]


def test_get_market_daily_batch(mgr, monkeypatch):
    monkeypatch.setattr(mgr, "_get_source_config", lambda s: {"enabled": True})
    df = mgr.get_market_daily_batch("20260817")
    assert df is not None and len(df) == 2
    assert "volume" in df.columns  # vol → volume 归一
    assert df["close"].tolist() == [11.5, 1500.0]


def test_get_market_daily_basic_batch(mgr, monkeypatch):
    monkeypatch.setattr(mgr, "_get_source_config", lambda s: {"enabled": True})
    df = mgr.get_market_daily_basic_batch("20260817")
    assert df is not None and len(df) == 2
    assert "float_mv" in df.columns


def test_get_market_moneyflow_batch(mgr, monkeypatch):
    monkeypatch.setattr(mgr, "_get_source_config", lambda s: {"enabled": True})
    df = mgr.get_market_moneyflow_batch("20260817")
    assert df is not None and len(df) == 2
    assert "net_mf_amount" in df.columns


def test_batch_panel_maps_net_mf_amount():
    """批量面板: net_mf_amount → main_net_inflow 映射 + 日期归一 YYYYMMDD → YYYY-MM-DD"""
    from strategy_sdk.data_portal import RealDataPortal
    portal = RealDataPortal.__new__(RealDataPortal)
    portal.source = types.SimpleNamespace(
        get_trade_dates=lambda s, e: ["20260817"],
        get_market_daily_batch=lambda td: pd.DataFrame({
            "ts_code": ["000001.SZ", "600519.SH"],
            "close": [11.5, 1500.0], "volume": [1000, 200],
        }),
        get_market_daily_basic_batch=lambda td: pd.DataFrame({
            "ts_code": ["000001.SZ", "600519.SH"], "pe": [8.0, 30.0],
        }),
        get_market_moneyflow_batch=lambda td: pd.DataFrame({
            "ts_code": ["000001.SZ", "600519.SH"], "net_mf_amount": [100.0, -50.0],
        }),
    )
    panel = portal._get_batch_panel(
        ["close", "volume", "pe", "main_net_inflow"],
        "2026-08-17", "2026-08-17", [],
        ["close", "volume"], ["pe"], ["main_net_inflow"],
    )
    assert panel is not None and not panel.empty
    assert panel.index.names == ["date", "symbol"]
    # 日期归一
    assert str(panel.index[0][0]) == "2026-08-17"
    # main_net_inflow 来自 net_mf_amount
    row = panel.loc[("2026-08-17", "000001.SZ")]
    assert abs(row["main_net_inflow"] - 100.0) < 1e-6
    assert abs(row["close"] - 11.5) < 1e-6


def test_get_panel_large_universe_uses_batch(monkeypatch):
    """universe >500 走批量分支; 批量失败回退逐股"""
    from strategy_sdk.data_portal import RealDataPortal
    portal = RealDataPortal.__new__(RealDataPortal)
    portal.source = types.SimpleNamespace(
        get_trade_dates=lambda s, e: [],
        get_market_daily_batch=lambda td: None,
        get_market_daily_basic_batch=lambda td: None,
        get_market_moneyflow_batch=lambda td: None,
    )
    portal.requests = []
    big = [f"6000{i:02d}.SH" for i in range(600)]
    # 批量失败(交易日历空) → 回退逐股: 逐股无 source.get_kline_data 会报错, 捕获后返回空
    panel = portal.get_panel(["close"], "2026-08-17", "2026-08-17", universe=big)
    assert panel is not None  # 不抛异常即可
    assert portal.requests[0]["universe"] == big
