#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""V5.3.10: 个股业绩预告/快报 API (sxsc forecast/express) 守护"""
import asyncio
import os
import sys

BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(BASE, 'backend'))


def test_performance_api_no_sxsc_graceful(monkeypatch):
    """sxsc 客户端缺失 → 返回空 forecast/express, 不崩溃"""
    from data_sources import data_source_manager
    class _NoSxsc:
        _clients = {}
    monkeypatch.setattr(data_source_manager, '_clients', {})
    from api.v1 import market
    r = asyncio.run(market.get_performance('600000.SH', {'role': 'admin'}))
    assert r['success'] is True
    assert r['forecast'] == [] and r['express'] == []


def test_performance_api_with_data(monkeypatch):
    """sxsc 有数据 → 返回 forecast/express 列表"""
    import pandas as pd
    from data_sources import data_source_manager
    class _FakeApi:
        def query(self, name, **kw):
            if name == 'forecast':
                return pd.DataFrame([{'ann_date': 20260825, 'end_date': 20260630, 'type': '预增',
                                      'p_change_min': 10.0, 'p_change_max': 30.0,
                                      'net_profit_min': 1.0, 'net_profit_max': 1.3, 'last_parent_net': 0.9}])
            return pd.DataFrame([{'ann_date': 20260825, 'end_date': 20260630, 'revenue': 100.0,
                                  'operate_profit': 20.0, 'total_profit': 21.0, 'n_income': 18.0}])
    monkeypatch.setattr(data_source_manager, '_clients', {'sxsc_tushare': _FakeApi()})
    from api.v1 import market
    r = asyncio.run(market.get_performance('600000.SH', {'role': 'admin'}))
    assert r['success'] is True
    assert len(r['forecast']) == 1
    assert r['forecast'][0]['type'] == '预增'
    assert r['forecast'][0]['ann_date'] == '2026-08-25', '日期应格式化为 YYYY-MM-DD'
    assert len(r['express']) == 1 and r['express'][0]['n_income'] == 18.0