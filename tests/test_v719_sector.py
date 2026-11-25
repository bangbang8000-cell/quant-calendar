#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""v7.19 (FR-5): 板块资金 —— 接口改名适配 + 错误分级 + 健康度 + 快照降级"""
import sys
from types import SimpleNamespace

import pandas as pd
import pytest

from shortterm import sector_flow as sf


def _df():
    return pd.DataFrame([{
        '名称': '银行', '今日涨跌幅': 1.2,
        '今日主力净流入-净额': 1e9, '今日主力净流入-净占比': 8.0,
    }])


class _AkNew:
    """只有新接口名的 akshare 桩"""

    def stock_fund_flow_sector_rank_em(self, indicator, sector_type):
        return _df()

    def stock_fund_flow_industry_ths(self, symbol):
        return pd.DataFrame([{'行业': '银行', '行业-涨跌幅': 1.2, '净额': 1e9}])


class _AkOld:
    """只有旧接口名的 akshare 桩（1.20.45 之前）"""

    def stock_sector_fund_flow_rank(self, indicator, sector_type):
        return _df()

    def stock_fund_flow_industry(self, symbol):
        return pd.DataFrame([{'行业': '银行', '行业-涨跌幅': 1.2, '净额': 1e9}])


class _AkBroken:
    def __getattr__(self, name):
        def _boom(**kwargs):
            raise AttributeError(f'{name} 已改名')
        return _boom


class _AkThsOnly:
    """东财两个名字都不可用，只有同花顺新名可用"""

    def stock_fund_flow_sector_rank_em(self, **kwargs):
        raise RuntimeError('东财新名不可用')

    def stock_sector_fund_flow_rank(self, **kwargs):
        raise RuntimeError('东财旧名不可用')

    def stock_fund_flow_industry_ths(self, symbol):
        return pd.DataFrame([{'行业': '银行', '行业-涨跌幅': 1.2, '净额': 1e9}])


def test_uses_new_eastmoney_api_name(monkeypatch):
    monkeypatch.setitem(sys.modules, 'akshare', _AkNew())
    out = sf.fetch_sector_flow('今日', '行业资金流')
    assert out['available'] is True
    assert out['error_code'] == 'ok'
    assert out['source_used'] == 'stock_fund_flow_sector_rank_em'
    assert out['rows'][0]['name'] == '银行'


def test_falls_back_to_old_api_name(monkeypatch):
    monkeypatch.setitem(sys.modules, 'akshare', _AkOld())
    out = sf.fetch_sector_flow('今日', '行业资金流')
    assert out['available'] is True
    assert out['source_used'] == 'stock_sector_fund_flow_rank'


def test_ths_new_name_used_when_em_fails(monkeypatch):
    monkeypatch.setitem(sys.modules, 'akshare', _AkThsOnly())
    out = sf.fetch_sector_flow('今日', '行业资金流')
    assert out['available'] is True
    assert out['source'] == 'akshare.tonghuashun'


def test_all_fail_gives_data_unavailable_with_trace(monkeypatch):
    monkeypatch.setitem(sys.modules, 'akshare', _AkBroken())
    out = sf.fetch_sector_flow('今日', '概念资金流')
    assert out['available'] is False
    assert out['error_code'] == 'data_unavailable'
    assert out['reason'].startswith('[⚠️')
    assert any('stock_fund_flow_sector_rank_em' in t for t in out['tried'])
    assert any('stock_sector_fund_flow_rank' in t for t in out['tried'])


def test_health_degrades_after_three_failures(monkeypatch):
    monkeypatch.setitem(sys.modules, 'akshare', _AkBroken())
    for _ in range(3):
        sf.fetch_sector_flow('今日', '概念资金流')
    health = sf.get_health()
    assert health['channels']['em']['consecutive_failures'] >= 3
    assert health['channels']['em']['degraded'] is True
    assert health['channels']['em']['last_error']


# ---------- API 层：cache / stale / data_unavailable 三态 ----------

def test_api_returns_stale_snapshot_when_source_down(monkeypatch):
    import asyncio
    from api.v1 import shortterm as api
    monkeypatch.setattr(api.store, 'latest_sector_flow',
                        lambda *a, **k: {'captured_at': '2026-09-07T10:00:00',
                                         'rows': [{'name': '老快照', 'pct_chg': 0.1}]})
    monkeypatch.setattr(api.sector_flow, 'fetch_sector_flow',
                        lambda *a, **k: {'available': False, 'error_code': 'data_unavailable',
                                         'reason': '[⚠️ 数据源不可用]', 'tried': ['x']})
    out = asyncio.run(api.get_sector_flow('今日', '行业资金流', user={'username': 'admin'}))
    assert out['available'] is True
    assert out['error_code'] == 'stale'
    assert out['captured_at'] == '2026-09-07T10:00:00'
    assert out['rows'][0]['name'] == '老快照'


def test_api_returns_data_unavailable_without_snapshot(monkeypatch):
    import asyncio
    from api.v1 import shortterm as api
    monkeypatch.setattr(api.store, 'latest_sector_flow', lambda *a, **k: None)
    monkeypatch.setattr(api.sector_flow, 'fetch_sector_flow',
                        lambda *a, **k: {'available': False, 'error_code': 'data_unavailable',
                                         'reason': '[⚠️ 双源失败]', 'tried': []})
    out = asyncio.run(api.get_sector_flow('今日', '行业资金流', user={'username': 'admin'}))
    assert out['available'] is False
    assert out['error_code'] == 'data_unavailable'
