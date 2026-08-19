#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
三源 DataPortal 测试 (FR: 策略研究数据层)
字段映射 / 面板组装 / 防前视 / 优雅降级
"""
import sys, os
sys.path.insert(0, os.path.join(os.path.dirname(__file__), '..', 'backend'))
import pytest
import pandas as pd


class StubSource:
    """注入的假数据源: 每只股票返回固定 K 线 + 估值 + 资金流"""

    def __init__(self):
        self.calls = []

    def get_kline_data(self, ts_code, period='daily', limit=60):
        self.calls.append(('kline', ts_code))
        dates = ["2026-06-01", "2026-06-02", "2026-06-03", "2026-06-04"]
        data = []
        base = 10.0
        for i, d in enumerate(dates):
            data.append([d, base + i, base + i + 0.1, base + i, base + i + 0.2,
                         1000 + i * 100])
        return {"data": data, "data_source": "stub"}

    def get_daily_basic(self, ts_code, limit=5):
        self.calls.append(('basic', ts_code))
        return [{"trade_date": "2026-06-04", "pe": 15.0, "pb": 2.0, "circ_mv": 3.0e6}]

    def get_moneyflow(self, ts_code, limit=10):
        self.calls.append(('moneyflow', ts_code))
        return [{"trade_date": "2026-06-04", "main_net_inflow": 5.0e6}]

    def get_financial_data(self, ts_code):
        return []


def _stub_source_module():
    """构造一个 data_sources 模块替身(供 data_portal 导入)"""
    import types
    mod = types.ModuleType('data_sources')
    mod.data_source_manager = StubSource()
    return mod


def test_get_panel_builds_multiindex():
    """get_panel 返回 MultiIndex(date, symbol) 面板, 含请求字段"""
    from strategy_sdk.data_portal import RealDataPortal
    portal = RealDataPortal(source=_stub_source_module().data_source_manager)
    panel = portal.get_panel(["close", "volume"], start="2026-06-01", end="2026-06-04",
                             universe=["000001.SZ", "600000.SH"])
    assert panel is not None and not panel.empty
    assert panel.index.names == ["date", "symbol"]
    assert "close" in panel.columns and "volume" in panel.columns
    # 2 股 × 4 日
    assert len(panel.index.get_level_values(0).unique()) == 4
    assert len(panel.index.get_level_values(1).unique()) == 2


def test_get_panel_requests_universe():
    """只请求 universe 内的股票"""
    from strategy_sdk.data_portal import RealDataPortal
    src = StubSource()
    portal = RealDataPortal(source=src)
    portal.get_panel(["close"], start="2026-06-01", end="2026-06-04",
                     universe=["000001.SZ"])
    codes = [c for kind, c in src.calls if kind == 'kline']
    assert codes == ["000001.SZ"]


def test_get_panel_valuations_field():
    """pe/pb 字段从 daily_basic 取"""
    from strategy_sdk.data_portal import RealDataPortal
    src = StubSource()
    portal = RealDataPortal(source=src)
    panel = portal.get_panel(["pe", "pb"], start="2026-06-01", end="2026-06-04",
                             universe=["000001.SZ"])
    assert "pe" in panel.columns and "pb" in panel.columns
    assert panel["pe"].notna().any()


def test_get_panel_moneyflow_field():
    """main_net_inflow 从 moneyflow 取"""
    from strategy_sdk.data_portal import RealDataPortal
    src = StubSource()
    portal = RealDataPortal(source=src)
    panel = portal.get_panel(["main_net_inflow"], start="2026-06-01", end="2026-06-04",
                             universe=["000001.SZ"])
    assert "main_net_inflow" in panel.columns
    assert panel["main_net_inflow"].notna().any()


def test_get_panel_empty_on_source_failure():
    """数据源抛错/无数据 → 返回空面板(不抛异常, 优雅降级)"""
    class FailingSource:
        def get_kline_data(self, *a, **k):
            raise RuntimeError("network down")
    from strategy_sdk.data_portal import RealDataPortal
    portal = RealDataPortal(source=FailingSource())
    panel = portal.get_panel(["close"], start="2026-06-01", end="2026-06-04",
                             universe=["000001.SZ"])
    assert panel is None or panel.empty


def test_float_mv_mapped_from_circ_mv():
    """v3.21 (P0-8): float_mv(流通市值) 由 daily_basic 的 circ_mv 映射, 供换手因子使用"""
    from strategy_sdk.data_portal import RealDataPortal
    portal = RealDataPortal(source=StubSource())
    panel = portal.get_panel(["float_mv", "circ_mv"], start="2026-06-01", end="2026-06-04",
                             universe=["000001.SZ"])
    assert "float_mv" in panel.columns, list(panel.columns)
    assert panel["float_mv"].notna().any(), "float_mv 不应全空"


def test_get_panel_concurrent_matches_serial():
    """v3.21 (遗留1): 并发取数结果与串行一致 (max_workers>1)"""
    from strategy_sdk.data_portal import RealDataPortal
    portal = RealDataPortal(source=StubSource())
    symbols = ["000001.SZ", "000002.SZ", "000006.SZ"]
    ser = portal.get_panel(["close"], start="2026-06-01", end="2026-06-04",
                           universe=symbols)
    par = portal.get_panel(["close"], start="2026-06-01", end="2026-06-04",
                           universe=symbols, max_workers=3)
    assert ser is not None and par is not None
    assert sorted(ser.index.get_level_values("symbol").unique()) == sorted(par.index.get_level_values("symbol").unique())
    assert (ser["close"].sort_index() == par["close"].sort_index()).all()


def test_get_panel_concurrent_limited_rate():
    """并发模式尊重限流: 每股仍只取数 1 次"""
    from strategy_sdk.data_portal import RealDataPortal
    src = StubSource()
    portal = RealDataPortal(source=src)
    symbols = ["000001.SZ", "000002.SZ", "000006.SZ"]
    portal.get_panel(["close"], start="2026-06-01", end="2026-06-04",
                     universe=symbols, max_workers=3)
    kline_calls = [c for c in src.calls if c[0] == "kline"]
    assert len(kline_calls) == 3, f"每股取数1次, got {len(kline_calls)}"
