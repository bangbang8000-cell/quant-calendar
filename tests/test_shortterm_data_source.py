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
    # 钉住单源链, 隔离 tushare 兜底(避免测试打真实网络)
    monkeypatch.setattr(fetchers, '_SOURCE_CHAINS', {'zt': ['akshare.eastmoney']})
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


# ---------- 源链 fallback (东财 → tushare, FR-5.2.0.1 三源兜底) ----------

def _tushare_df():
    """tushare limit_list_d 返回形状 (涨停 2 行)"""
    return pd.DataFrame([
        {'ts_code': '002909.SZ', 'name': '集泰股份', 'pct_chg': 9.97, 'close': 7.28,
         'amount': 1.9e8, 'float_mv': 2.77e9, 'total_mv': 2.84e9, 'turnover_ratio': 6.94,
         'limit_amount': 7.4e7, 'first_time': '092500', 'last_time': '092500',
         'open_times': 0, 'up_stat': 3, 'industry': '化学制品', 'limit': 'U'},
        {'ts_code': '600000.SH', 'name': '浦发银行', 'pct_chg': 10.01, 'close': 9.0,
         'amount': 5e7, 'float_mv': 1e9, 'total_mv': 1.1e9, 'turnover_ratio': 1.2,
         'limit_amount': 1e7, 'first_time': '093000', 'last_time': '093000',
         'open_times': 1, 'up_stat': 1, 'industry': '银行', 'limit': 'U'},
    ])


def test_tushare_zt_normalization():
    """tushare limit_list_d 行 → 统一英文键(去后缀补零/时间归一/连板数 int)"""
    rows = fetchers.normalize_pool_df(_tushare_df(), fetchers._TUSHARE_MAP['zt'])
    assert len(rows) == 2
    r = rows[0]
    assert r['ts_code'] == '002909'          # 去 .SZ 后缀 + 补零
    assert r['boards'] == 3
    assert r['first_seal_time'] == '09:25:00'
    assert r['seal_amount'] == 7.4e7
    assert r['board'] == '10cm'              # 制度标签(单一实现)


def test_fetch_zt_falls_back_to_tushare(monkeypatch):
    """东财失败 → tushare 兜底成功, source=tushare"""
    monkeypatch.setitem(sys.modules, 'akshare', _FakeAk(exc=RuntimeError('反爬')))
    fake_ts = {'available': True, 'source': 'tushare', 'date': '2026-09-02',
               'rows': [{'ts_code': '002909', 'name': '集泰股份'}]}
    monkeypatch.setattr(fetchers, '_fetch_tushare_limit_list',
                        lambda pt, c, ds: fake_ts)
    out = fetchers.fetch_zt_pool('2026-09-02')
    assert out['available'] is True
    assert out['source'] == 'tushare'


def test_fetch_all_sources_fail_envelope(monkeypatch):
    """东财 + tushare 全失败 → [⚠️] 信封, 且原因含两源"""
    monkeypatch.setitem(sys.modules, 'akshare', _FakeAk(exc=RuntimeError('东财不可达')))
    monkeypatch.setattr(fetchers, '_fetch_tushare_limit_list',
                        lambda pt, c, ds: (_ for _ in ()).throw(RuntimeError('积分不足')))
    out = fetchers.fetch_zt_pool('2026-09-02')
    assert out['available'] is False
    assert out['reason'].startswith('[⚠️')
    assert 'akshare.eastmoney' in out['reason'] and 'tushare' in out['reason']


def test_fetch_zb_single_source_no_tushare_fallback(monkeypatch):
    """炸板池无 tushare 源 → 东财失败即降级, 不尝试 tushare"""
    monkeypatch.setattr(fetchers, '_SOURCE_CHAINS', {'zb': ['akshare.eastmoney']})
    monkeypatch.setitem(sys.modules, 'akshare', _FakeAk(exc=RuntimeError('东财不可达')))
    out = fetchers.fetch_zb_pool('2026-09-02')
    assert out['available'] is False
    assert 'tushare' not in out['reason']


def test_fetch_tushare_no_token_degrades(monkeypatch):
    """tushare 兜底无 token → 抛错 → 整体降级信封"""
    monkeypatch.setitem(sys.modules, 'akshare', _FakeAk(exc=RuntimeError('东财不可达')))
    import types
    fake_mod = types.ModuleType('tushare')
    def fake_pro_api(token):
        raise RuntimeError('未配置 TUSHARE_TOKEN, tushare 兜底不可用')
    fake_mod.pro_api = fake_pro_api
    monkeypatch.setitem(sys.modules, 'tushare', fake_mod)
    monkeypatch.setattr('config.settings', types.SimpleNamespace(TUSHARE_TOKEN=''))
    out = fetchers.fetch_zt_pool('2026-09-02')
    assert out['available'] is False
    assert out['reason'].startswith('[⚠️')
