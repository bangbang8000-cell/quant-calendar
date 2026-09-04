#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""V5.3.8 (BUG-FIX-1): 个股弹窗 K线加载失败守护

根因: data_sources/_constants.py 的 __all__ 漏 _SINA_STOCK_COLUMN_MAP,
导致 _manager.py 的 `from ._constants import *` 无法导入新浪源列映射,
akshare 新浪源 fallback 路径抛 NameError → 三源全失败 → K线无法加载。
"""
import os
import sys

BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(BASE, 'backend'))


def test_sina_column_map_in_all():
    """__all__ 必须含 _SINA_STOCK_COLUMN_MAP (新浪源 fallback 依赖)"""
    src = open(os.path.join(BASE, 'backend', 'data_sources', '_constants.py'), encoding='utf-8').read()
    assert '_SINA_STOCK_COLUMN_MAP' in src
    assert '_SINA_STOCK_COLUMN_MAP' in src.split('__all__')[1], '应列入 __all__'


def test_wildcard_import_exposes_sina_map():
    """from ._constants import * 后 _SINA_STOCK_COLUMN_MAP 可用"""
    import importlib
    import data_sources._manager as m
    assert hasattr(m, '_SINA_STOCK_COLUMN_MAP'), 'wildcard import 后应可见'


def test_kline_get_returns_rows(monkeypatch):
    """K线 API 在源失败时经新浪源 fallback 仍能返回数据"""
    from data_sources import data_source_manager
    # stub 新浪源: 前两源抛异常, akshare 返回小 df
    import pandas as pd
    from data_sources import _manager
    df = pd.DataFrame({'trade_date': ['2026-09-01', '2026-09-02'],
                       'open': [10.0, 10.2], 'high': [10.5, 10.4], 'low': [9.9, 10.0],
                       'close': [10.2, 10.3], 'vol': [100, 120], 'amount': [1000, 1200],
                       'pct_chg': [2.0, 1.0]})
    def fake_fetch(src, code, period, limit):
        if src in ('sxsc_tushare', 'tushare'):
            raise RuntimeError('token invalid')
        return df
    monkeypatch.setattr(_manager, 'get_route_order', lambda: ['sxsc_tushare', 'tushare', 'akshare'])
    monkeypatch.setattr(data_source_manager, '_fetch_kline', fake_fetch)
    r = data_source_manager.get_kline_data('600000.SH', 'daily', 5)
    assert r and r.get('data'), '应经 fallback 返回数据'