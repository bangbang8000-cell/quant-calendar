#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""V5.4.0 (FR-5.4.8): 分钟级 K线支持 (15/30/60min)

守护: _fetch_kline 对分钟 period 的路由 —
  tushare 走 pro_bar(freq=60min/30min/15min),
  sxsc 走 stk_mins(freq=60min...),
  akshare 走 stock_zh_a_hist_min_em(period='60'/'30'/'15')。
分钟级 = 打开股票弹窗按需加载, 不预加载 (懒加载由前端触发)。
"""
import os
import sys

BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(BASE, 'backend'))

import pandas as pd


def _minute_df():
    return pd.DataFrame({
        'trade_time': ['2026-09-08 10:00:00', '2026-09-08 10:30:00'],
        'open': [10.0, 10.2], 'high': [10.5, 10.4], 'low': [9.9, 10.0],
        'close': [10.2, 10.3], 'vol': [100, 120], 'amount': [1000, 1200],
    })


def test_minute_periods_supported():
    """分钟 period 清单 15min/30min/60min 必须在 MINUTE_PERIODS 白名单"""
    from data_sources import _manager as m
    assert hasattr(m, 'MINUTE_PERIODS')
    for p in ('15min', '30min', '60min'):
        assert p in m.MINUTE_PERIODS, '分钟周期应被识别: ' + p


def test_tushare_fetch_kline_minute_uses_pro_bar(monkeypatch):
    """tushare 分钟线走模块级 pro_bar(freq=period) — 不再落到 daily 兜底"""
    import tushare as ts
    from data_sources import _manager as m
    mgr = m.DataSourceManager.__new__(m.DataSourceManager)
    mgr._clients = {'tushare': object()}  # 客户端对象存在即可, 分钟线走 ts.pro_bar
    calls = []
    def fake_pro_bar(**kw):
        calls.append(kw)
        return _minute_df()
    monkeypatch.setattr(ts, 'pro_bar', fake_pro_bar)
    df = mgr._fetch_kline('tushare', '600519.SH', '60min', 5)
    assert df is not None and len(df) == 2
    assert calls, '应调用 pro_bar'
    assert calls[0]['freq'] == '60min', 'pro_bar freq 应为 60min, 实得 %r' % calls[0].get('freq')


def test_sxsc_fetch_kline_minute_uses_stk_mins(monkeypatch):
    """sxsc(券商版) 分钟线走 stk_mins — 不再落到 daily 兜底"""
    from data_sources import _manager as m
    mgr = m.DataSourceManager.__new__(m.DataSourceManager)
    mgr._clients = {}
    calls = []
    class FakeSxsc:
        def query(self, api_name, **kw):
            calls.append((api_name, kw))
            return _minute_df()
    mgr._clients['sxsc_tushare'] = FakeSxsc()
    df = mgr._fetch_kline('sxsc_tushare', '600519.SH', '30min', 5)
    assert df is not None and len(df) == 2
    assert calls, '应调用 query'
    assert calls[0][0] == 'stk_mins', 'sxsc 分钟线应调 stk_mins, 实得 %r' % calls[0][0]
    assert calls[0][1].get('freq') == '30min'


def test_akshare_fetch_kline_minute_uses_min_em(monkeypatch):
    """akshare 分钟线走 stock_zh_a_hist_min_em(period='60'/'30'/'15')"""
    import akshare as ak
    from data_sources import _manager as m
    mgr = m.DataSourceManager.__new__(m.DataSourceManager)
    mgr._clients = {}
    calls = {}
    def fake_min_em(**kw):
        calls.update(kw)
        return _minute_df()
    monkeypatch.setattr(ak, 'stock_zh_a_hist_min_em', fake_min_em)
    df = mgr._fetch_kline('akshare', '600519.SH', '15min', 5)
    assert df is not None and len(df) == 2
    assert calls.get('period') == '15', 'akshare 分钟 period 应为 15, 实得 %r' % calls.get('period')


def test_daily_period_unaffected():
    """日线仍走原路径 (tushare pro.daily) — 不回归"""
    from data_sources import _manager as m
    mgr = m.DataSourceManager.__new__(m.DataSourceManager)
    mgr._clients = {}
    called = []
    class FakePro:
        def daily(self, **kw):
            called.append('daily')
            return pd.DataFrame({'trade_date': ['2026-09-08'], 'close': [10.0]})
    mgr._clients['tushare'] = FakePro()
    df = mgr._fetch_kline('tushare', '600519.SH', 'daily', 5)
    assert df is not None and len(df) == 1
    assert called == ['daily'], '日线应走 pro.daily'
