#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""V5.3.11 (BUGFIX): K线/多因子 6 位代码无后缀 → sxsc/tushare 空数据

根因 (v5.3.10 实测): 涨停池/龙虎榜 ts_code 经 _zero_pad 去后缀为 6 位,
sxsc/tushare 的 daily/daily_basic/moneyflow 等接口要求带 .SH/.SZ 后缀,
6 位无后缀 → 返回 0 行 → 被记失败 → 连续 3 次三源冷却 → K线/多因子全无数据。

守护: ①_normalize_ts_code 6位→带后缀 ②K线 sxsc/tushare 分支规范化
③daily_basic/moneyflow/financial 分支规范化 ④多因子对 6 位代码有数据
"""
import os
import sys

BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(BASE, 'backend'))


def test_normalize_ts_code():
    """6 位无后缀 → 自动补 .SH/.SZ; 已带后缀不变"""
    from data_sources._mapping import _normalize_ts_code
    assert _normalize_ts_code('600000') == '600000.SH', '60 开头 → SH'
    assert _normalize_ts_code('000001') == '000001.SZ', '00 开头 → SZ'
    assert _normalize_ts_code('300750') == '300750.SZ', '30 开头 → SZ'
    assert _normalize_ts_code('688981') == '688981.SH', '68 开头 → SH'
    assert _normalize_ts_code('600000.SH') == '600000.SH', '已带后缀不变'
    assert _normalize_ts_code('000001.SZ') == '000001.SZ', '已带后缀不变'
    assert _normalize_ts_code('000001.SH') == '000001.SH', '指数后缀不变'
    assert _normalize_ts_code('399001.SZ') == '399001.SZ', '深成指后缀不变'


def test_fetch_kline_normalizes_code(monkeypatch):
    """sxsc/tushare K线: 6 位代码自动补后缀, 不再返回空"""
    import pandas as pd
    from data_sources import data_source_manager
    called = {}
    class _FakeApi:
        def query(self, name, **kw):
            called['name'] = name
            called['ts_code'] = kw.get('ts_code')
            return pd.DataFrame([{'trade_date': '20260903', 'open': 10.0, 'close': 11.0}])
    monkeypatch.setattr(data_source_manager, '_clients', {'sxsc_tushare': _FakeApi(), 'tushare': None})
    df = data_source_manager._fetch_kline('sxsc_tushare', '600000', 'daily', 60)
    assert df is not None and len(df) == 1, 'sxsc K线应返回数据'
    assert called['ts_code'] == '600000.SH', f'sxsc 收到规范化代码: {called}'


def test_daily_basic_and_moneyflow_normalize(monkeypatch):
    """daily_basic/moneyflow sxsc 分支 6 位代码规范化"""
    import pandas as pd
    from data_sources import data_source_manager
    called = []
    class _FakeApi:
        def query(self, name, **kw):
            called.append((name, kw.get('ts_code')))
            if name == 'moneyflow':
                return pd.DataFrame([{'trade_date': '20260903', 'net_mf_amount': 100.0}])
            return pd.DataFrame([{'trade_date': '20260903', 'pe': 10.0, 'pb': 1.0}])
    monkeypatch.setattr(data_source_manager, '_clients', {'sxsc_tushare': _FakeApi(), 'tushare': None})
    mf = data_source_manager._fetch_moneyflow('sxsc_tushare', '600000', 5)
    assert mf and len(mf) > 0, 'moneyflow 应返回数据'
    db = data_source_manager._fetch_daily_basic('sxsc_tushare', '600000', 5)
    assert db is not None and len(db) > 0, 'daily_basic 应返回数据'
    for name, code in called:
        assert code == '600000.SH', f'{name} 收到 {code}, 应为 600000.SH'


def test_factors_6digit_has_data(monkeypatch):
    """多因子: 6 位代码不再因 sxsc 空数据导致 0 因子"""
    import pandas as pd
    from data_sources import data_source_manager
    from factor_engine import build_factor_panel
    class _FakeApi:
        def query(self, name, **kw):
            code = kw.get('ts_code', '600000.SH')
            if name == 'moneyflow':
                return pd.DataFrame([{'trade_date': '20260903', 'net_mf_amount': 100.0}])
            if name == 'daily_basic':
                return pd.DataFrame([{'trade_date': '20260903', 'pe': 10.0, 'pb': 1.0, 'turnover_rate': 5.0, 'volume_ratio': 1.2}])
            return pd.DataFrame([{'trade_date': '20260903', 'open': 10.0, 'close': 11.0, 'vol': 1000, 'amount': 5000}])
    monkeypatch.setattr(data_source_manager, '_clients', {'sxsc_tushare': _FakeApi(), 'tushare': None})
    panel = build_factor_panel('600000', data_source=data_source_manager, stock_info=None)
    factors = panel.get('factors', []) if isinstance(panel, dict) else []
    assert len(factors) > 0, f'6 位代码因子应 > 0, 实际 {len(factors)}'