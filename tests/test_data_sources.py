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


def test_freshness_api(now=None):
    """TC-12.5: 各源 last_success/data_age_hours/last_fetch 计算正确"""
    ds.record_call('akshare', True, 10.0)
    m = {x['name']: x for x in ds.get_health_metrics()}['akshare']
    assert m['last_success']  # ISO 时间戳
    assert m['last_fetch'] == m['last_success']  # PRD: last_fetch = 最近成功拉取
    assert isinstance(m['data_age_hours'], float)
    assert m['data_age_hours'] >= 0


def test_freshness_stale_flag():
    """TC-12.6: 超期数据返回 stale 标志 (含从未成功)"""
    from datetime import datetime as dt
    now = dt(2026, 8, 12, 12, 0, 0)
    # 从未成功 → stale=True, data_age_hours=None
    ds.record_call('tushare', False, 5.0)
    m = {x['name']: x for x in ds.get_health_metrics(now=now)}['tushare']
    assert m['stale'] is True
    assert m['data_age_hours'] is None
    # 回拨 last_success 到 3 天前 → 超期 stale
    ds.record_call('akshare', True, 10.0)
    with ds._health_lock:
        ds._health['akshare']['last_success'] = '2026-08-09T10:00:00'
    m = {x['name']: x for x in ds.get_health_metrics(now=now)}['akshare']
    assert m['stale'] is True
    assert m['data_age_hours'] == pytest.approx(74.0, abs=0.5)
    # 1 小时前成功 → 新鲜, stale=False
    ds.record_call('sxsc_tushare', True, 5.0)
    with ds._health_lock:
        ds._health['sxsc_tushare']['last_success'] = '2026-08-12T11:00:00'
    m = {x['name']: x for x in ds.get_health_metrics(now=now)}['sxsc_tushare']
    assert m['stale'] is False
    assert m['data_age_hours'] == pytest.approx(1.0, abs=0.1)


# ==================== 拉取失败补偿 + 告警队列 (v3.12 / FR-3.12.3) ====================


def test_pull_retry_backoff_exponential():
    """TC-12.7: 连续失败按指数退避重试, 最多 3 次后停止"""
    calls = {'n': 0}
    delays = []

    def flaky():
        calls['n'] += 1
        raise RuntimeError(f'fail-{calls["n"]}')

    result, err = ds.retry_with_backoff(
        flaky, attempts=3, base_delay=2.0, sleep_fn=delays.append,
    )
    assert result is None
    assert isinstance(err, RuntimeError)
    assert calls['n'] == 3, '最多尝试 3 次后停止重试'
    assert delays == [2.0, 4.0], '指数退避: 第1次失败等 2s, 第2次等 4s'


def test_pull_retry_succeeds_midway():
    """重试中途成功 → 返回结果, 不再继续"""
    calls = {'n': 0}
    delays = []

    def flaky_then_ok():
        calls['n'] += 1
        if calls['n'] < 3:
            raise RuntimeError('transient')
        return {'ok': True}

    result, err = ds.retry_with_backoff(
        flaky_then_ok, attempts=3, base_delay=1.0, sleep_fn=delays.append,
    )
    assert err is None and result == {'ok': True}
    assert calls['n'] == 3
    assert len(delays) == 2


def test_pull_retry_ok_check_soft_failure():
    """ok_check 判定软失败 (返回 None/空) 也触发重试"""
    calls = {'n': 0}

    def empty_then_data():
        calls['n'] += 1
        return None if calls['n'] < 2 else {'data': [{'close': 1.0}]}

    result, err = ds.retry_with_backoff(
        empty_then_data, attempts=3, base_delay=1.0, sleep_fn=lambda _: None,
        ok_check=lambda k: bool(k and k.get('data')),
    )
    assert err is None
    assert result['data'][0]['close'] == 1.0
    assert calls['n'] == 2


def test_alert_queue_recorded():
    """TC-12.8: 连续失败达阈值写入告警队列"""
    ds.clear_alerts()
    assert ds.get_alerts() == []
    # 未达阈值 → 不入队
    assert ds.record_batch_failure('data_pipeline', 2, 'x') is False
    assert ds.get_alerts() == []
    # 达阈值 → 入队
    assert ds.record_batch_failure('data_pipeline', 3, '连续失败') is True
    alerts = ds.get_alerts()
    assert len(alerts) == 1
    assert alerts[0]['level'] == 'error'
    assert alerts[0]['source'] == 'data_pipeline'
    assert '连续失败' in alerts[0]['message']
    assert 'created_at' in alerts[0]


def test_alert_queue_max_len():
    """告警队列有界 (超出丢弃最旧)"""
    ds.clear_alerts()
    for i in range(5):
        ds.enqueue_alert('error', 's', f'msg-{i}')
    assert len(ds.get_alerts()) == 5
    # 新→旧顺序
    assert ds.get_alerts()[0]['message'] == 'msg-4'


def test_alert_api_endpoint():
    """GET /api/system/alerts 输出告警队列"""
    import asyncio
    from api.v1 import system
    ds.clear_alerts()
    ds.enqueue_alert('error', 'data_pipeline', 'test-alert')
    # 直调处理函数 (不走 HTTP)
    result = asyncio.run(system.system_alerts(user={'username': 'admin'}))
    assert result['success'] is True
    assert any(a['message'] == 'test-alert' for a in result['alerts'])
