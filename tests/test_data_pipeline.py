"""
数据管线自动化测试 (v3.12 / FR-3.12.1)

覆盖:
- run_daily_pull: 按股票池拉取日线 → 快照落盘 / 统计正确
- run_daily_pull: 失败容错 (单股失败不影响整体)
- load_daily_snapshot: 快照读取 / 无文件返回空
- pull_should_run: daily 每天触发, weekly 按周几触发
- run_financial_pull (12.2): 财务指标拉取 → 快照落盘 / 字段映射 (TC-12.3)
- get_financial_data: fallback + _safe_float 健壮性 (TC-12.3)
"""
import os
import pytest

import data_pipeline as dp


# ── run_daily_pull ─────────────────────────────────────────────

class FakeDataSource:
    """模拟 data_sources.data_source_manager"""

    def __init__(self, data_map, fin_map=None):
        self.data_map = data_map  # ts_code -> kline dict
        self.fin_map = fin_map or {}  # ts_code -> financial dict

    def get_kline_data(self, ts_code, period='daily', limit=60):
        if ts_code in self.data_map:
            return self.data_map[ts_code]
        return {'data': []}  # 无数据

    def get_financial_data(self, ts_code):
        return self.fin_map.get(ts_code)


def _kline(date, close, pct_chg=0.5):
    return {
        'data': [{'trade_date': date, 'close': close, 'pct_chg': pct_chg}],
        'data_source': 'tushare',
    }


def _fin(ts_code, roe=12.5):
    return {
        'ts_code': ts_code, 'roe': roe, 'netprofit_yoy': 8.1,
        'grossprofit_margin': 30.0, 'debt_to_assets': 45.0,
        'data_source': 'tushare',
    }


def _patch_source_manager(monkeypatch, ds):
    import data_sources as ds_mod
    monkeypatch.setattr(ds_mod, 'data_source_manager', ds, raising=False)
    # v3.12 (FR-3.12.3): 重试退避 sleep 置空, 避免空数据股票触发真实等待
    monkeypatch.setattr(dp, 'PULL_RETRY_SLEEP', lambda _s: None, raising=False)


def test_run_daily_pull_success(monkeypatch, tmp_path):
    ds = FakeDataSource({
        '000001.SZ': _kline('2026-08-11', 10.5),
        '600000.SH': _kline('2026-08-11', 8.2, -0.3),
    })
    _patch_source_manager(monkeypatch, ds)
    # 快照落盘到 tmp
    monkeypatch.setattr(dp, 'DAILY_SNAPSHOT_FILE', str(tmp_path / 'snap.json'))

    stats = dp.run_daily_pull(pool=['000001.SZ', '600000.SH'], date='2026-08-11')

    assert stats['total'] == 2
    assert stats['pulled'] == 2
    assert stats['failed'] == 0
    assert stats['latest_date'] == '2026-08-11'
    # 快照落盘且内容正确
    snap = dp.load_daily_snapshot()
    assert snap['stocks']['000001.SZ']['close'] == 10.5
    assert snap['stocks']['600000.SH']['data_source'] == 'tushare'


def test_run_daily_pull_partial_failure(monkeypatch, tmp_path):
    ds = FakeDataSource({'000001.SZ': _kline('2026-08-11', 10.5)})
    _patch_source_manager(monkeypatch, ds)
    monkeypatch.setattr(dp, 'DAILY_SNAPSHOT_FILE', str(tmp_path / 'snap.json'))

    stats = dp.run_daily_pull(pool=['000001.SZ', '999999.XS'], date='2026-08-11')

    assert stats['pulled'] == 1
    assert stats['failed'] == 1
    assert any('999999.XS' in e for e in stats['errors'])
    # 部分失败仍落盘成功部分
    snap = dp.load_daily_snapshot()
    assert '000001.SZ' in snap['stocks']


def test_run_daily_pull_empty_pool(monkeypatch, tmp_path):
    import stock_info as si_mod
    monkeypatch.setattr(dp, 'DAILY_SNAPSHOT_FILE', str(tmp_path / 'snap.json'))
    # 空池且 stock_manager 为空 → resolve 返回空 → 早退
    monkeypatch.setattr(si_mod, 'stock_manager', type('SM', (), {'stock_map': {}})(), raising=False)
    stats = dp.run_daily_pull(pool=[])
    assert stats['total'] == 0
    assert stats['message'] == '股票池为空'


def test_resolve_stock_pool_prefers_explicit(monkeypatch):
    pool = dp.resolve_stock_pool(['000001.SZ'])
    assert pool == ['000001.SZ']
    assert pool != ['000001.SZ', 'something-else']  # 不透传额外项


def test_resolve_stock_pool_full_from_stock_info(monkeypatch):
    import stock_info as si_mod
    class FakeSM:
        stock_map = {'000001.SZ': {}, '600000.SH': {}}
    monkeypatch.setattr(si_mod, 'stock_manager', FakeSM(), raising=False)
    monkeypatch.setattr(dp, 'stock_info', si_mod, raising=False)
    pool = dp.resolve_stock_pool([])
    assert set(pool) == {'000001.SZ', '600000.SH'}


def test_load_snapshot_missing_file(tmp_path):
    monkeypatch = pytest.MonkeyPatch()
    monkeypatch.setattr(dp, 'DAILY_SNAPSHOT_FILE', str(tmp_path / 'nope.json'))
    try:
        assert dp.load_daily_snapshot() == {}
    finally:
        monkeypatch.undo()


# ── pull_should_run (FR-3.12.1 频率) ───────────────────────────

def test_pull_should_run_daily_every_day():
    from data_refresh_config import pull_should_run
    from datetime import datetime
    cfg = {'pull_enabled': True, 'pull_frequency': 'daily'}
    assert pull_should_run(cfg, datetime(2026, 8, 11)) is True   # 周二
    assert pull_should_run(cfg, datetime(2026, 8, 17)) is True   # 周一


def test_pull_should_run_weekly_only_configured_weekday():
    from data_refresh_config import pull_should_run
    from datetime import datetime
    # ISO weekday: 周一=1 ... 周日=7; pull_weekday 是 0=周一
    cfg = {'pull_enabled': True, 'pull_frequency': 'weekly', 'pull_weekday': '0'}
    assert pull_should_run(cfg, datetime(2026, 8, 17)) is True   # 周一
    assert pull_should_run(cfg, datetime(2026, 8, 18)) is False  # 周二
    assert pull_should_run(cfg, datetime(2026, 8, 16)) is False  # 周日


def test_pull_should_run_disabled():
    from data_refresh_config import pull_should_run
    from datetime import datetime
    assert pull_should_run({'pull_enabled': False}, datetime(2026, 8, 11)) is False


def test_get_stock_pool_from_config():
    from data_refresh_config import get_stock_pool
    assert get_stock_pool({'stock_pool': ['000001.SZ']}) == ['000001.SZ']
    assert get_stock_pool({'stock_pool': []}) == []


# ── run_financial_pull (12.2 / TC-12.3) ────────────────────────

def test_run_financial_pull_maps_fields(monkeypatch, tmp_path):
    ds = FakeDataSource({}, fin_map={'000001.SZ': _fin('000001.SZ')})
    _patch_source_manager(monkeypatch, ds)
    monkeypatch.setattr(dp, 'FINANCIAL_SNAPSHOT_FILE', str(tmp_path / 'fin.json'))

    stats = dp.run_financial_pull(pool=['000001.SZ'])

    assert stats['pulled'] == 1
    assert stats['failed'] == 0
    snap = dp.load_financial_snapshot()
    assert snap['stocks']['000001.SZ']['roe'] == 12.5
    assert snap['stocks']['000001.SZ']['netprofit_yoy'] == 8.1
    assert 'grossprofit_margin' in snap['stocks']['000001.SZ']


def test_run_financial_pull_partial_failure(monkeypatch, tmp_path):
    ds = FakeDataSource({}, fin_map={'000001.SZ': _fin('000001.SZ')})
    _patch_source_manager(monkeypatch, ds)
    monkeypatch.setattr(dp, 'FINANCIAL_SNAPSHOT_FILE', str(tmp_path / 'fin.json'))

    stats = dp.run_financial_pull(pool=['000001.SZ', '999999.XS'])
    assert stats['pulled'] == 1
    assert stats['failed'] == 1
    assert any('999999.XS' in e for e in stats['errors'])


def test_load_financial_snapshot_missing(tmp_path):
    monkeypatch = pytest.MonkeyPatch()
    monkeypatch.setattr(dp, 'FINANCIAL_SNAPSHOT_FILE', str(tmp_path / 'nope.json'))
    try:
        assert dp.load_financial_snapshot() == {}
    finally:
        monkeypatch.undo()


# ── get_financial_data fallback + _safe_float (TC-12.3) ────────

def test_safe_float_nan_and_bad_values():
    from data_sources import _safe_float
    assert _safe_float(12.5) == 12.5
    assert _safe_float('8.1') == 8.1
    assert _safe_float(float('nan')) is None
    assert _safe_float('abc') is None
    assert _safe_float(None) is None
    assert _safe_float('abc', default=0) == 0


def test_get_financial_data_fallback_success(monkeypatch):
    """第一个源失败 → 第二个源成功 → 返回 + 健康记录"""
    import data_sources as ds_mod
    from data_sources import data_source_manager as mgr
    ds_mod.reset_health()

    real_fetch = mgr._fetch_financial
    def fake_fetch(src, ts_code):
        if src == 'sxsc_tushare':
            return None  # 第一源无数据
        if src == 'tushare':
            return {'ts_code': ts_code, 'roe': 15.0, 'data_source': src}
        return None  # akshare 不支持
    monkeypatch.setattr(mgr, '_fetch_financial', fake_fetch)

    result = mgr.get_financial_data('000001.SZ')
    assert result is not None
    assert result['roe'] == 15.0
    assert result['data_source'] == 'tushare'
    h = {m['name']: m for m in ds_mod.get_health_metrics()}
    # 记录过 sxsc_tushare 失败 + tushare 成功
    assert h['sxsc_tushare']['failures'] >= 1
    assert h['tushare']['successes'] >= 1
    monkeypatch.undo()
