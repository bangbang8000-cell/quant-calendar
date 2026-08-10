"""
数据源健康监控测试 (v3.10 / FR-3.10.3)

覆盖:
- record_call / get_health_metrics / reset_health 基础行为
- 连续失败达阈值 → degraded=True；成功重置连续失败
- get_index_daily 集成：成功记录 success，异常/空记录 failure
- /api/system/metrics (get_metrics) 输出 data_sources 健康指标
"""
import pytest

import data_sources as ds


@pytest.fixture(autouse=True)
def _clean_health():
    ds.reset_health()
    yield
    ds.reset_health()


def test_record_success_and_failure():
    ds.record_call('akshare', True, 100.0)
    ds.record_call('akshare', False, 200.0)
    h = {m['name']: m for m in ds.get_health_metrics()}
    a = h['akshare']
    assert a['calls'] == 2
    assert a['successes'] == 1
    assert a['failures'] == 1
    assert a['success_rate'] == 50.0
    assert a['avg_latency_ms'] == 150.0
    assert a['last_success'] and a['last_failure']


def test_degraded_after_consecutive_failures():
    for _ in range(3):
        ds.record_call('tushare', False, 50.0)
    h = {m['name']: m for m in ds.get_health_metrics()}
    assert h['tushare']['degraded'] is True
    assert h['tushare']['consecutive_failures'] == 3


def test_below_threshold_not_degraded():
    for _ in range(2):
        ds.record_call('akshare', False, 50.0)
    h = {m['name']: m for m in ds.get_health_metrics()}
    assert h['akshare']['degraded'] is False


def test_success_resets_consecutive_failures():
    for _ in range(3):
        ds.record_call('akshare', False, 50.0)
    ds.record_call('akshare', True, 30.0)
    h = {m['name']: m for m in ds.get_health_metrics()}
    assert h['akshare']['degraded'] is False
    assert h['akshare']['consecutive_failures'] == 0
    assert h['akshare']['success_rate'] == 25.0


def test_timed_record_reraises_and_records():
    def boom():
        raise ValueError('boom')

    with pytest.raises(ValueError):
        ds.timed_record('akshare', boom)
    h = {m['name']: m for m in ds.get_health_metrics()}
    assert h['akshare']['failures'] == 1
    # 成功路径
    ds.timed_record('akshare', lambda: 42)
    h = {m['name']: m for m in ds.get_health_metrics()}
    assert h['akshare']['successes'] == 1


def test_get_index_daily_records_success(monkeypatch):
    mgr = ds.DataSourceManager()
    monkeypatch.setattr(mgr, '_get_source_config', lambda s: {'enabled': True})
    monkeypatch.setattr(mgr, '_fetch_index_daily',
                        lambda src, code, date: {'close': 1.0, 'trade_date': '20260101'})
    result = mgr.get_index_daily('000001.SH')
    assert result['data_source'] == 'sxsc_tushare'  # SOURCE_ORDER 第一个源成功
    h = {m['name']: m for m in ds.get_health_metrics()}
    assert h['sxsc_tushare']['successes'] == 1
    assert h['sxsc_tushare']['calls'] == 1


def test_get_index_daily_all_fail_degraded(monkeypatch):
    def down(src, code, date):
        raise RuntimeError('source down')

    mgr = ds.DataSourceManager()
    monkeypatch.setattr(mgr, '_get_source_config', lambda s: {'enabled': True})
    monkeypatch.setattr(mgr, '_fetch_index_daily', down)
    assert mgr.get_index_daily('000001.SH') is None
    h = {m['name']: m for m in ds.get_health_metrics()}
    for src in ('sxsc_tushare', 'tushare', 'akshare'):
        assert h[src]['failures'] == 1
        assert h[src]['calls'] == 1
        assert h[src]['degraded'] is False  # 尚未达阈值


def test_merrill_clock_records_akshare_health(monkeypatch, tmp_path):
    """merrill_clock 采集链路：AKShare 降级(返回 None)时记录失败"""
    import merrill_clock as mc
    # 重定向数据文件到临时目录，避免命中/污染真实缓存
    monkeypatch.setattr(mc, 'CACHE_FILE', str(tmp_path / 'cache.json'))
    monkeypatch.setattr(mc, 'HISTORY_FILE', str(tmp_path / 'history.json'))
    monkeypatch.setattr(mc, 'SNAPSHOT_FILE', str(tmp_path / 'snapshot.json'))
    clock = mc.MerrillClock()
    monkeypatch.setattr(clock, '_fetch_real_macro_data', lambda: None)
    clock.get_economic_indicators()
    h = {m['name']: m for m in ds.get_health_metrics()}
    assert h['akshare']['calls'] == 1
    assert h['akshare']['failures'] == 1


def test_metrics_api_includes_data_sources():
    from api.v1 import system
    ds.record_call('akshare', True, 10.0)
    metrics = system.get_metrics()
    assert 'data_sources' in metrics
    names = {m['name'] for m in metrics['data_sources']}
    assert 'akshare' in names
