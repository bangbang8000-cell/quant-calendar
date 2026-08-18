"""
数据源管理器存量拉取路径测试 (FR-3.18.13 / T13 覆盖率攻坚)

覆盖 data_sources.py 此前未覆盖的拉取适配器/配置/连接测试路径:
- get_kline_data: 正常拉取 + 内存 TTL 缓存命中 + 季/年线聚合
- _build_kline_response: DataFrame → K线数组 + MA
- _fetch_index_daily / _fetch_kline / _fetch_daily_basic / _fetch_financial / _fetch_moneyflow (三源适配)
- test_connection 各源
- _load_config / save_config / _save_config
"""
import sys
import types

import pandas as pd
import pytest

import data_sources as ds


class _FakeApi:
    """sxsc-tushare 风格 client: .query(name, **kw) -> df"""

    def __init__(self, df):
        self._df = df

    def query(self, name, **kw):
        return self._df


class _FakePro:
    """tushare pro 风格 client: .daily(...)/.index_daily(...) 等 -> df"""

    def __init__(self, df):
        self._df = df

    def __getattr__(self, name):
        def _call(**kw):
            return self._df
        return _call


def _df(index=False, rows=3):
    dates = ['20260810', '20260811', '20260812']
    data = {
        'trade_date': dates[-rows:],
        'open': [10.0, 10.2, 10.5],
        'close': [10.1, 10.4, 10.6],
        'high': [10.3, 10.6, 10.8],
        'low': [9.9, 10.1, 10.3],
        'vol': [1000, 1100, 1200],
        'pct_chg': [1.0, 3.0, 1.9],
    }
    return pd.DataFrame(data).tail(rows)


@pytest.fixture
def mgr():
    m = ds.DataSourceManager()
    m._clients = {}
    m._kline_cache = {}
    m._errors = {}
    yield m
    m._kline_cache = {}


@pytest.fixture
def fake_akshare(monkeypatch):
    ak = types.SimpleNamespace(
        stock_zh_index_daily=lambda symbol: _df(),
        stock_zh_a_hist=lambda symbol, period='daily', adjust='qfq': _df(),
        stock_zh_a_spot_em=lambda: _df().assign(**{'代码': ['600519', '000001'], '名称': ['贵州茅台', '平安银行'], '最新价': [1500.0, 12.0], '涨跌幅': [1.5, 0.5], '量比': [2.0, 1.0], '涨速': [0.3, 0.1], '昨收': [1477.0, 11.9]}),
        stock_individual_info_em=lambda symbol: pd.DataFrame({'item': ['市盈率', '市净率', '总市值'], 'value': [20.0, 3.0, 1e11]}),
    )
    monkeypatch.setitem(sys.modules, 'akshare', ak)
    return ak


def _mgr_clients(mgr, source='sxsc_tushare'):
    mgr._clients[source] = _FakeApi(_df())


# ==================== get_kline_data + 缓存 ====================


def test_get_kline_data_builds_response(mgr, monkeypatch):
    mgr._clients['sxsc_tushare'] = _FakeApi(_df())
    monkeypatch.setattr(mgr, '_get_source_config', lambda s: {'enabled': True})
    r = mgr.get_kline_data('000001.SZ', period='daily', limit=3)
    assert r and r['data_source'] == 'sxsc_tushare'
    assert len(r['data']) == 3
    assert r['data'][0][1] is not None  # open
    assert r['data'][0][2] is not None  # close


def test_get_kline_data_cache_hit(mgr, monkeypatch):
    calls = {'n': 0}
    mgr._clients['sxsc_tushare'] = _FakeApi(_df())
    monkeypatch.setattr(mgr, '_get_source_config', lambda s: {'enabled': True})
    orig = mgr._fetch_kline

    def counting(src, code, period, limit):
        calls['n'] += 1
        return orig(src, code, period, limit)
    monkeypatch.setattr(mgr, '_fetch_kline', counting)
    r1 = mgr.get_kline_data('000001.SZ', limit=3)
    r2 = mgr.get_kline_data('000001.SZ', limit=3)
    assert r1 == r2
    assert calls['n'] == 1, '缓存命中不应重复拉取'


def test_get_kline_data_resampled(mgr, monkeypatch):
    monkeypatch.setattr(mgr, '_get_resampled_kline',
                        lambda code, period, limit: {'data': [['20260801', 10, 11, 9.5, 11.5, 3000, None, None, None, None, None]], 'data_source': 'monthly_resampled'})
    r = mgr.get_kline_data('000001.SZ', period='quarterly', limit=5)
    assert r and r['data_source'] == 'monthly_resampled'


# ==================== _fetch_* 三源适配 ====================


def test_fetch_index_daily_sxsc_and_tushare(mgr):
    mgr._clients['sxsc_tushare'] = _FakeApi(_df())
    row = mgr._fetch_index_daily('sxsc_tushare', '000001.SH', '20260812')
    assert row and 'trade_date' in row
    mgr._clients['tushare'] = _FakePro(_df())
    row2 = mgr._fetch_index_daily('tushare', '000001.SH', '20260812')
    assert row2 and 'trade_date' in row2


def test_fetch_index_daily_missing_client_returns_none(mgr):
    assert mgr._fetch_index_daily('sxsc_tushare', '000001.SH', 'x') is None
    assert mgr._fetch_index_daily('tushare', '000001.SH', 'x') is None


def test_fetch_index_daily_akshare(mgr, fake_akshare):
    row = mgr._fetch_index_daily('akshare', '000001.SH', '20260812')
    assert row and row.get('ts_code') == '000001.SH'


def test_fetch_kline_adapters(mgr, fake_akshare):
    mgr._clients['sxsc_tushare'] = _FakeApi(_df())
    assert len(mgr._fetch_kline('sxsc_tushare', '000001.SH', 'daily', 3)) == 3
    mgr._clients['tushare'] = _FakePro(_df())
    assert len(mgr._fetch_kline('tushare', '000001.SZ', 'daily', 3)) == 3
    assert len(mgr._fetch_kline('tushare', '000001.SH', 'weekly', 3)) == 3
    assert len(mgr._fetch_kline('akshare', '000001.SH', 'daily', 3)) == 3
    assert len(mgr._fetch_kline('akshare', '000001.SZ', 'daily', 3)) == 3


def test_fetch_daily_basic_sxsc_tushare(mgr):
    mgr._clients['sxsc_tushare'] = _FakeApi(_df().assign(trade_date='20260812', pe=6.5, pb=0.8, turnover_rate=1.2, total_mv=2e11))
    assert mgr._fetch_daily_basic('sxsc_tushare', '000001.SZ', 5).get('pe') == 6.5
    mgr._clients['tushare'] = _FakePro(_df().assign(trade_date='20260812', pe=7.0, pb=0.9))
    assert mgr._fetch_daily_basic('tushare', '000001.SZ', 5).get('pe') == 7.0


def test_fetch_daily_basic_akshare(mgr, fake_akshare):
    r = mgr._fetch_daily_basic('akshare', '000001.SZ', 5)
    assert r and r['pe'] == 20.0 and r['pb'] == 3.0


def test_fetch_financial_tushare(mgr):
    df = _df().assign(ann_date='20260801', end_date='20260630', roe=12.5, netprofit_yoy=20.0, grossprofit_margin=45.0, debt_to_assets=40.0, eps=1.5, bps=8.0)
    mgr._clients['tushare'] = _FakePro(df)
    r = mgr._fetch_financial('tushare', '000001.SZ')
    assert r and r['roe'] == 12.5 and r['netprofit_yoy'] == 20.0


def test_fetch_financial_akshare_returns_none(mgr):
    assert mgr._fetch_financial('akshare', '000001.SZ') is None


def test_fetch_moneyflow_tushare(mgr):
    df = _df().assign(net_mf_amount=[100.0, 200.0, 300.0])
    mgr._clients['tushare'] = _FakePro(df)
    rows = mgr._fetch_moneyflow('tushare', '000001.SZ', 3)
    assert rows and rows[-1]['net_mf_amount'] == 300.0
    assert mgr._fetch_moneyflow('akshare', '000001.SZ', 3) is None


# ==================== test_connection ====================


def test_test_connection_sxsc(mgr):
    mgr._clients['sxsc_tushare'] = _FakeApi(_df())
    r = mgr.test_connection('sxsc_tushare')
    assert r['success'] is True


def test_test_connection_tushare(mgr):
    mgr._clients['tushare'] = _FakePro(_df())
    r = mgr.test_connection('tushare')
    assert r['success'] is True


def test_test_connection_akshare(mgr, fake_akshare):
    mgr._clients['akshare'] = True
    r = mgr.test_connection('akshare')
    assert r['success'] is True


def test_test_connection_disabled_or_missing(mgr):
    mgr._clients = {}
    r = mgr.test_connection('tushare')
    assert r['success'] is False


# ==================== 配置读写 ====================


def test_save_config_roundtrip(mgr, monkeypatch, tmp_path):
    monkeypatch.setattr(ds, 'DATASOURCE_CONFIG_FILE', str(tmp_path / 'datasource_config.json'))
    cfg = {'sources': {'tushare': {'enabled': True, 'token': ''}}}
    mgr.save_config(cfg)
    assert ds.DATASOURCE_CONFIG_FILE.endswith('datasource_config.json')
    mgr2 = ds.DataSourceManager()
    assert mgr2.get_config()['sources']['tushare']['enabled'] is True


def test_load_config_fallback_on_bad_file(monkeypatch, tmp_path):
    bad = tmp_path / 'bad.json'
    bad.write_text('{not json', encoding='utf-8')
    monkeypatch.setattr(ds, 'DATASOURCE_CONFIG_FILE', str(bad))
    assert ds.DataSourceManager()._load_config() == ds.DEFAULT_CONFIG
