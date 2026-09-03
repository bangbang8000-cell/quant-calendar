#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""V5.2.0 (T-5.2.04): 龙虎榜数据抓取 + 资金性质归类测试"""
import sys
import pandas as pd

from shortterm.lhb import normalize_lhb_df, classify_reading, fetch_lhb


# ---------- 解读归类 ----------

def test_classify_institution():
    tags = classify_reading('1家机构卖出，成功率20.22%')
    assert '机构' in tags


def test_classify_hot_money():
    tags = classify_reading('知名游资买入，成功率45.10%')
    assert '游资' in tags


def test_classify_main_force():
    tags = classify_reading('主力做T，成功率9.07%')
    assert '主力' in tags


def test_classify_empty_and_unknown():
    assert classify_reading('') == []
    assert classify_reading(None) == []
    assert classify_reading('日跌幅偏离值达到7%的前5只证券') == []


def test_classify_dedup():
    tags = classify_reading('机构买入，机构卖出，游资跟风')
    assert tags == ['机构', '游资']


# ---------- 标准化 ----------

def _lhb_df():
    return pd.DataFrame([{
        '序号': 1, '代码': '11', '名称': '深物业A', '上榜日': '2026-09-01',
        '解读': '1家机构卖出，成功率20.22%', '收盘价': 9.16, '涨跌幅': -9.04,
        '龙虎榜净买额': -46085510.86, '龙虎榜买入额': 5.36e7, '龙虎榜卖出额': 9.97e7,
        '龙虎榜成交额': 1.53e8, '市场总成交额': 5.08e8, '净买额占总成交比': -9.07,
        '成交额占总成交比': 30.14, '换手率': 10.46, '流通市值': 5.0e9,
        '上榜原因': '日跌幅偏离值达到7%的前5只证券',
        '上榜后1日': -5.13, '上榜后2日': None, '上榜后5日': None, '上榜后10日': None,
    }])


def test_normalize_lhb_df():
    rows = normalize_lhb_df(_lhb_df())
    assert len(rows) == 1
    r = rows[0]
    assert r['ts_code'] == '000011'          # 代码补零
    assert r['name'] == '深物业A'
    assert r['trade_date'] == '2026-09-01'
    assert r['net_buy'] == -46085510.86
    assert r['board'] == '10cm'
    assert r['tags'] == ['机构']
    assert r['next_2d'] is None


def test_normalize_lhb_empty():
    assert normalize_lhb_df(pd.DataFrame()) == []


# ---------- 抓取 ----------

class _FakeAk:
    def __init__(self, df=None, exc=None):
        self._df, self._exc = df, exc
        self.calls = []

    def stock_lhb_detail_em(self, start_date, end_date):
        self.calls.append((start_date, end_date))
        if self._exc:
            raise self._exc
        return self._df


def test_fetch_lhb_ok(monkeypatch):
    fake = _FakeAk(df=_lhb_df())
    monkeypatch.setitem(sys.modules, 'akshare', fake)
    out = fetch_lhb('2026-09-01', '2026-09-02')
    assert out['available'] is True
    assert len(out['rows']) == 1
    assert fake.calls == [('20260901', '20260902')]


def test_fetch_lhb_failure_envelope(monkeypatch):
    from shortterm import lhb as lhb_mod
    fake = _FakeAk(exc=RuntimeError('boom'))
    monkeypatch.setitem(sys.modules, 'akshare', fake)
    monkeypatch.setattr(lhb_mod, '_fetch_tushare_lhb',
                        lambda s, e, c: (_ for _ in ()).throw(RuntimeError('也无权限')))
    out = fetch_lhb('2026-09-01', '2026-09-02')
    assert out['available'] is False
    assert out['reason'].startswith('[⚠️')


def test_fetch_lhb_empty_is_legal(monkeypatch):
    fake = _FakeAk(df=pd.DataFrame(columns=list(_lhb_df().columns)))
    monkeypatch.setitem(sys.modules, 'akshare', fake)
    out = fetch_lhb('2026-09-01', '2026-09-02')
    assert out['available'] is True
    assert out['rows'] == []


# ---------- V5.2.2-fix: 东财 → tushare top_list 兜底 ----------

def test_fetch_lhb_falls_back_to_tushare(monkeypatch):
    from shortterm import lhb as lhb_mod
    fake = _FakeAk(exc=RuntimeError('东财反爬'))
    monkeypatch.setitem(sys.modules, 'akshare', fake)
    monkeypatch.setattr(lhb_mod, '_fetch_tushare_lhb',
                        lambda s, e, c: {'available': True, 'source': 'tushare',
                                         'start_date': s, 'end_date': e,
                                         'rows': [{'ts_code': '000011', 'name': '深物业A',
                                                   'tags': [], 'board': '10cm'}]})
    out = fetch_lhb('2026-09-01', '2026-09-02')
    assert out['available'] is True and out['source'] == 'tushare'


def test_tushare_lhb_normalization():
    from shortterm import lhb as lhb_mod
    row = lhb_mod._normalize_tushare_row(
        {'ts_code': '000011.SZ', 'name': '深物业A', 'pct_change': 10.0,
         'close': 10.0, 'net_amount': 1.2e8, 'l_buy': 2e8, 'l_sell': 0.8e8,
         'reason': '日涨幅偏离值达7%', 'amount': 3e8, 'turnover_rate': 5.0})
    assert row['ts_code'] == '000011'
    assert row['net_buy'] == 1.2e8
    assert row['buy_amount'] == 2e8 and row['sell_amount'] == 0.8e8
    assert row['tags'] == []          # 不编造资金性质
    assert row['board'] == '10cm'


def test_fetch_lhb_all_sources_fail(monkeypatch):
    from shortterm import lhb as lhb_mod
    fake = _FakeAk(exc=RuntimeError('东财不可达'))
    monkeypatch.setitem(sys.modules, 'akshare', fake)
    monkeypatch.setattr(lhb_mod, '_fetch_tushare_lhb',
                        lambda s, e, c: (_ for _ in ()).throw(RuntimeError('积分不足')))
    out = fetch_lhb('2026-09-01', '2026-09-02')
    assert out['available'] is False
    assert 'tushare' in out['reason'] and 'akshare.eastmoney' in out['reason']
