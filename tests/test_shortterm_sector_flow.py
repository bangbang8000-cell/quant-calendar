#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""V5.2.0 (T-5.2.05): 板块资金流数据抓取测试"""
import sys
import pandas as pd

from shortterm.sector_flow import (normalize_sector_df, _build_flow_map,
                                   fetch_sector_flow, fetch_sector_flow_today)


def _today_df():
    return pd.DataFrame([{
        '序号': 1, '名称': '银行', '今日涨跌幅': 1.23,
        '今日主力净流入-净额': 1.5e9, '今日主力净流入-净占比': 8.1,
        '今日超大单净流入-净额': 2.0e9, '今日大单净流入-净额': -0.5e9,
        '今日中单净流入-净额': float('nan'), '今日小单净流入-净额': -1.0e9,
    }])


def test_build_flow_map_dynamic():
    m = _build_flow_map('5日')
    assert m['5日涨跌幅'] == 'pct_chg'
    assert m['5日主力净流入-净额'] == 'main_net_inflow'


def test_normalize_sector_df():
    rows = normalize_sector_df(_today_df(), _build_flow_map('今日'))
    assert len(rows) == 1
    r = rows[0]
    assert r['name'] == '银行'
    assert r['pct_chg'] == 1.23
    assert r['main_net_inflow'] == 1.5e9
    assert r['mid_net_inflow'] is None      # NaN → None
    assert r['main_net_inflow_ratio'] == 8.1


def test_normalize_sector_unknown_columns_ignored():
    df = pd.DataFrame([{'名称': 'X', '不存在的列': 999, '今日涨跌幅': 2.0}])
    rows = normalize_sector_df(df, _build_flow_map('今日'))
    assert rows[0]['name'] == 'X'
    assert '不存在的列' not in rows[0]


def test_normalize_sector_empty():
    assert normalize_sector_df(pd.DataFrame(), _build_flow_map('今日')) == []


class _FakeAk:
    def __init__(self, df=None, exc=None):
        self._df, self._exc = df, exc
        self.calls = []

    def stock_sector_fund_flow_rank(self, indicator, sector_type):
        self.calls.append((indicator, sector_type))
        if self._exc:
            raise self._exc
        return self._df


def test_fetch_sector_flow_ok(monkeypatch):
    fake = _FakeAk(df=_today_df())
    monkeypatch.setitem(sys.modules, 'akshare', fake)
    out = fetch_sector_flow('今日', '行业资金流')
    assert out['available'] is True
    assert len(out['rows']) == 1
    assert fake.calls == [('今日', '行业资金流')]


def test_fetch_sector_flow_failure_envelope(monkeypatch):
    fake = _FakeAk(exc=RuntimeError('boom'))
    monkeypatch.setitem(sys.modules, 'akshare', fake)
    out = fetch_sector_flow('今日', '行业资金流')
    assert out['available'] is False
    assert out['reason'].startswith('[⚠️')


def test_fetch_sector_flow_invalid_params():
    assert fetch_sector_flow('上午', '行业资金流')['available'] is False
    assert fetch_sector_flow('今日', '货币资金流')['available'] is False


def test_fetch_sector_flow_today(monkeypatch):
    fake = _FakeAk(df=_today_df())
    monkeypatch.setitem(sys.modules, 'akshare', fake)
    out = fetch_sector_flow_today()
    assert out['available'] is True
    assert out['industry']['rows'][0]['name'] == '银行'
    assert out['concept']['available'] is True


# ---------- V5.2.2-fix: 东财 → 同花顺行业资金流兜底 ----------

def test_fetch_sector_falls_back_to_ths(monkeypatch):
    from shortterm import sector_flow as sf
    fake = _FakeAk(exc=RuntimeError('东财反爬'))
    monkeypatch.setitem(sys.modules, 'akshare', fake)
    monkeypatch.setattr(sf, '_fetch_ths_industry_flow',
                        lambda i, st: {'available': True, 'source': 'akshare.tonghuashun',
                                       'indicator': '今日', 'sector_type': '行业资金流',
                                       'rows': [{'name': '银行', 'pct_chg': 1.23,
                                                 'main_net_inflow': 1.5e9}]})
    out = fetch_sector_flow('今日', '行业资金流')
    assert out['available'] is True and out['source'] == 'akshare.tonghuashun'


def test_sector_ths_only_for_industry_today(monkeypatch):
    from shortterm import sector_flow as sf
    fake = _FakeAk(exc=RuntimeError('东财反爬'))
    monkeypatch.setitem(sys.modules, 'akshare', fake)
    monkeypatch.setattr(sf, '_fetch_ths_industry_flow',
                        lambda i, st: {'available': True, 'rows': []})
    # 概念资金流无同花顺兜底 → 降级
    out = fetch_sector_flow('今日', '概念资金流')
    assert out['available'] is False
    # 非今日窗口也无兜底 → 降级
    out5 = fetch_sector_flow('5日', '行业资金流')
    assert out5['available'] is False


def test_ths_industry_column_mapping():
    """同花顺列 → 统一英文键映射正确"""
    from shortterm import sector_flow as sf
    assert sf._THS_INDUSTRY_MAP['行业'] == 'name'
    assert sf._THS_INDUSTRY_MAP['净额'] == 'main_net_inflow'
    assert sf._THS_INDUSTRY_MAP['行业-涨跌幅'] == 'pct_chg'
