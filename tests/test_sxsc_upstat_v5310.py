#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""V5.3.10: sxsc up_stat 'X/Y' 解析守护"""
import os
import sys

BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(BASE, 'backend'))


def test_zt_up_stat_parsed(monkeypatch):
    """U 类 up_stat 'X/Y' → boards=X, break_times 保留"""
    import pandas as pd
    from shortterm import fetchers
    df = pd.DataFrame([
        {'trade_date': '20260903', 'ts_code': '000001.SZ', 'name': '平安银行',
         'up_stat': '4/4', 'limit': 'U', 'industry': '银行', 'close': 12.0, 'pct_chg': 10.0},
        {'trade_date': '20260903', 'ts_code': '000002.SZ', 'name': '万科A',
         'up_stat': '1/1', 'limit': 'U', 'industry': '地产', 'close': 8.0, 'pct_chg': 9.9},
    ])
    from data_sources import data_source_manager
    class _FakeApi:
        def query(self, name, **kw):
            return df
    data_source_manager._clients['sxsc_tushare'] = _FakeApi()
    out = fetchers._fetch_sxsc_limit_list('zt', '20260903', '2026-09-03')
    rows = {r['ts_code']: r for r in out['rows']}
    assert rows['000001']['boards'] == 4, "'4/4' → boards=4"
    assert rows['000002']['boards'] == 1, "'1/1' → boards=1"


def test_zt_up_stat_nan_kept_none(monkeypatch):
    """up_stat 为 NaN → boards=None (诚实保留)"""
    import pandas as pd
    from shortterm import fetchers
    df = pd.DataFrame([
        {'trade_date': '20260903', 'ts_code': '000003.SZ', 'name': 'B股',
         'up_stat': float('nan'), 'limit': 'U', 'industry': 'xx', 'close': 5.0, 'pct_chg': 5.0},
    ])
    from data_sources import data_source_manager
    class _FakeApi:
        def query(self, name, **kw):
            return df
    data_source_manager._clients['sxsc_tushare'] = _FakeApi()
    out = fetchers._fetch_sxsc_limit_list('zt', '20260903', '2026-09-03')
    assert out['rows'][0]['boards'] is None