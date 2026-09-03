#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""V5.2.0 (T-5.2.01): 短线三池(涨停/炸板/跌停)数据抓取与标准化测试
数据诚实性: 取数失败 available=False(绝不返回 0 家); 空池是合法结果(available=True, rows=[])。"""
import sys
import pandas as pd

from shortterm import fetchers


# ---------- 纯函数: 时间/数值/代码归一 ----------

def test_norm_time_hhmmss():
    assert fetchers._norm_time('092500') == '09:25:00'


def test_norm_time_none_and_nan():
    assert fetchers._norm_time(None) is None
    assert fetchers._norm_time(float('nan')) is None


def test_norm_time_already_colon():
    assert fetchers._norm_time('09:25:00') == '09:25:00'


def test_to_int_parses():
    assert fetchers._to_int('3') == 3
    assert fetchers._to_int(3.0) == 3


def test_to_int_nan_none():
    assert fetchers._to_int(float('nan')) is None
    assert fetchers._to_int(None) is None


def test_zero_pad_code():
    assert fetchers._zero_pad('2909') == '002909'
    assert fetchers._zero_pad('002909') == '002909'
    assert fetchers._zero_pad('600000') == '600000'


def test_norm_date_dash_to_compact():
    assert fetchers._norm_date('2026-09-02') == '20260902'
    assert fetchers._norm_date('20260902') == '20260902'


# ---------- 纯函数: 涨停池标准化 ----------

def _zt_df():
    return pd.DataFrame([{
        '序号': 1, '代码': '2909', '名称': '集泰股份', '涨跌幅': 9.97, '最新价': 7.28,
        '成交额': 192248850, '流通市值': 2.77e9, '总市值': 2.84e9, '换手率': 6.94,
        '封板资金': 74416742, '首次封板时间': '092500', '最后封板时间': '092500',
        '炸板次数': 0, '涨停统计': '3/3', '连板数': 3, '所属行业': '化学制品',
    }])


def test_normalize_zt_pool_df():
    rows = fetchers.normalize_pool_df(_zt_df(), fetchers._ZT_COLUMN_MAP)
    assert len(rows) == 1
    r = rows[0]
    assert r['ts_code'] == '002909'          # 代码补零
    assert r['name'] == '集泰股份'
    assert r['boards'] == 3                  # int
    assert r['first_seal_time'] == '09:25:00'
    assert r['break_times'] == 0             # 0 保留(合法)
    assert r['industry'] == '化学制品'


def test_normalize_pool_nan_to_none():
    df = pd.DataFrame([{'代码': '1', '名称': 'X', '涨跌幅': float('nan'),
                        '首次封板时间': float('nan'), '连板数': float('nan')}])
    rows = fetchers.normalize_pool_df(df, fetchers._ZT_COLUMN_MAP)
    r = rows[0]
    assert r['pct_chg'] is None
    assert r['first_seal_time'] is None
    assert r['boards'] is None


def test_normalize_pool_unknown_columns_ignored():
    df = pd.DataFrame([{'代码': '1', '名称': 'X', '不存在列': 123}])
    rows = fetchers.normalize_pool_df(df, fetchers._ZT_COLUMN_MAP)
    assert rows[0]['ts_code'] == '000001'
    assert '不存在列' not in rows[0]


# ---------- 抓取: 成功 / 失败信封 / 空池合法 ----------

class _FakeAk:
    def __init__(self, df=None, exc=None):
        self._df = df
        self._exc = exc
        self.calls = []

    def stock_zt_pool_em(self, date):
        self.calls.append(date)
        if self._exc:
            raise self._exc
        return self._df

    def stock_zt_pool_zbgc_em(self, date):
        return self.stock_zt_pool_em(date)

    def stock_zt_pool_dtgc_em(self, date):
        return self.stock_zt_pool_em(date)


def test_fetch_zt_pool_ok(monkeypatch):
    fake = _FakeAk(df=_zt_df())
    monkeypatch.setitem(sys.modules, 'akshare', fake)
    out = fetchers.fetch_zt_pool('2026-09-02')
    assert out['available'] is True
    assert out['source'] == 'akshare.eastmoney'
    assert len(out['rows']) == 1
    assert fake.calls == ['20260902']   # 日期转 YYYYMMDD


def test_fetch_zt_pool_failure_envelope(monkeypatch):
    fake = _FakeAk(exc=RuntimeError('boom'))
    monkeypatch.setitem(sys.modules, 'akshare', fake)
    out = fetchers.fetch_zt_pool('2026-09-02')
    assert out['available'] is False
    assert out['reason'].startswith('[⚠️')


def test_fetch_zt_pool_empty_is_legal(monkeypatch):
    fake = _FakeAk(df=pd.DataFrame(columns=list(_zt_df().columns)))
    monkeypatch.setitem(sys.modules, 'akshare', fake)
    out = fetchers.fetch_zt_pool('2026-09-02')
    assert out['available'] is True
    assert out['rows'] == []


def test_fetch_all_pool_types(monkeypatch):
    getters = [fetchers.fetch_zt_pool, fetchers.fetch_zb_pool, fetchers.fetch_dt_pool]
    for getter in getters:
        fake = _FakeAk(df=_zt_df())
        monkeypatch.setitem(sys.modules, 'akshare', fake)
        out = getter('2026-09-02')
        assert out['available'] is True
        assert out['rows'][0]['ts_code'] == '002909'
