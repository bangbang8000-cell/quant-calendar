#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""V5.3.14 (T-SP.P0.1): 多策略并集/交集对比 API 修复守护测试

根因: /calendar/{date}/compare 的 stock_sets = {s: set(data['stocks'])}, 而
get_holdings_by_date 返回 stocks 为 [{code,name}] dict 列表, set(dict) 不可哈希 → TypeError.
守护: compare 返回 200 且交集/并集/独有计数正确; 空策略不 500; 结构完整; 无重复对.
"""
import os
import sys
sys.path.insert(0, os.path.join(os.path.dirname(__file__), '..', 'backend'))
import pytest
from fastapi import FastAPI
from fastapi.testclient import TestClient

from auth import get_current_active_user
from api.v1.calendar import router as calendar_router


def _make_client(monkeypatch, holdings):
    """挂 calendar 路由 + 替换 calendar 模块内的 parser 引用"""
    fake = type('FakeParser', (), {
        'get_holdings_by_date': lambda *a, **k: holdings,
    })()
    monkeypatch.setattr('api.v1.calendar.parser', fake)
    app = FastAPI()
    app.include_router(calendar_router, prefix='/api')
    app.dependency_overrides[get_current_active_user] = \
        lambda: {'username': 'admin', 'role': 'admin'}
    return TestClient(app)


def _holdings(sets_by_strategy):
    """策略名 → 股票代码集合 → holdings 结构 [{code,name}]"""
    out = {}
    for sid, codes in sets_by_strategy.items():
        out[sid] = {'name': sid, 'stocks': [{'code': c, 'name': c} for c in sorted(codes)]}
    return out


class TestCompareStrategies:
    def test_returns_200_with_correct_sets(self, monkeypatch):
        """4 策略正常: 200 + 交集/并集/独有计数正确"""
        holdings = _holdings({
            'multifactor': {'600000.SH', '600004.SH', '600519.SH'},
            'industry_rotation': {'600000.SH', '002371.SZ'},
            'index_enhance': {'600000.SH', '600004.SH'},
            'money_flow': {'600000.SH', '000858.SZ'},
        })
        c = _make_client(monkeypatch, holdings)
        r = c.get('/api/calendar/2026-09-04/compare')
        assert r.status_code == 200, r.text
        comp = r.json()['comparison']
        assert comp['all_intersection'] == ['600000.SH']
        k = 'multifactor_vs_industry_rotation'
        assert comp[k]['intersection'] == ['600000.SH']
        assert comp[k]['intersection_count'] == 1
        assert comp[k]['only_s1'] == ['600004.SH', '600519.SH']
        assert comp[k]['only_s1_count'] == 2
        assert comp[k]['only_s2'] == ['002371.SZ']
        assert comp[k]['only_s2_count'] == 1
        assert comp[k]['union'] == ['002371.SZ', '600000.SH', '600004.SH', '600519.SH']
        assert comp[k]['union_count'] == 4

    def test_empty_strategy_no_500(self, monkeypatch):
        """某策略当日无数据(空 stocks): 不抛 500, 空交集为空列表"""
        holdings = _holdings({
            'multifactor': {'600000.SH'},
            'industry_rotation': set(),
        })
        c = _make_client(monkeypatch, holdings)
        r = c.get('/api/calendar/2026-09-04/compare')
        assert r.status_code == 200, r.text
        comp = r.json()['comparison']
        assert comp['all_intersection'] == []
        k = 'multifactor_vs_industry_rotation'
        assert comp[k]['intersection'] == []
        assert comp[k]['union'] == ['600000.SH']

    def test_structure_complete(self, monkeypatch):
        """每个两两 key 含全部 8 个字段"""
        holdings = _holdings({
            'multifactor': {'600000.SH'},
            'industry_rotation': {'600000.SH', '002371.SZ'},
            'index_enhance': {'600519.SH'},
        })
        c = _make_client(monkeypatch, holdings)
        r = c.get('/api/calendar/2026-09-04/compare')
        comp = r.json()['comparison']
        keys = [k for k in comp if k != 'all_intersection']
        assert len(keys) == 3  # C(3,2)
        for k in keys:
            for f in ('intersection', 'intersection_count', 'only_s1', 'only_s1_count',
                      'only_s2', 'only_s2_count', 'union', 'union_count'):
                assert f in comp[k], f'{k} 缺 {f}'

    def test_no_duplicate_pairs(self, monkeypatch):
        """s1_vs_s2 只出现一次(不反向重复)"""
        holdings = _holdings({
            'a': {'600000.SH'},
            'b': {'600004.SH'},
            'c': {'600519.SH'},
        })
        c = _make_client(monkeypatch, holdings)
        r = c.get('/api/calendar/2026-09-04/compare')
        comp = r.json()['comparison']
        pairs = [k for k in comp if k != 'all_intersection']
        assert 'a_vs_b' in pairs and 'b_vs_a' not in pairs
        assert len(pairs) == 3

    def test_single_strategy_all_intersection_empty(self, monkeypatch):
        """仅 1 策略: comparison 为空 dict(不调用 set.intersection 空参)"""
        holdings = _holdings({'multifactor': {'600000.SH'}})
        c = _make_client(monkeypatch, holdings)
        r = c.get('/api/calendar/2026-09-04/compare')
        assert r.status_code == 200, r.text
        assert r.json()['comparison'] == {}
