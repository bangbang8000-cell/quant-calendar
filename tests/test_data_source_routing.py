"""
数据源健康自动路由测试 (FR-3.18.4 / T1)

覆盖:
- get_route_order: 健康 → 全量; 冷却中源被跳过; 全部冷却 → 兜底返回
- record_call 联动: 连续失败达阈值自动暂停(写切换记录 + 审计告警); 成功恢复(回切)
- 429 限流不计失败 → 不判死源
- 计数阈值边界: 达阈值才暂停
- 健康面板指标含 routing_status/last_switch_at/switch_reason
- 集成: 主源故障 → 自动切备用且服务无感; 恢复后回切
"""
import time

import pytest

import data_sources as ds


@pytest.fixture(autouse=True)
def _clean():
    ds.reset_health()
    ds.clear_alerts()
    yield
    ds.reset_health()
    ds.clear_alerts()


# ==================== get_route_order ====================


def test_route_order_healthy_all_active():
    assert ds.get_route_order() == ['sxsc_tushare', 'tushare', 'akshare']


def test_route_order_skips_cooling_source():
    ds._pause_source('sxsc_tushare', '连续失败')
    order = ds.get_route_order()
    assert 'sxsc_tushare' not in order
    assert order == ['tushare', 'akshare']


def test_route_order_all_cooling_fallback():
    for src in ds.SOURCE_ORDER:
        ds._pause_source(src, 'down')
    # 全部冷却 → 兜底仍返回, 避免空路由
    assert ds.get_route_order() == ds.SOURCE_ORDER


def test_route_order_cooldown_expiry_recovers():
    ds._pause_source('sxsc_tushare', 'down')
    assert 'sxsc_tushare' not in ds.get_route_order()
    with ds._route_lock:
        ds._route_state['sxsc_tushare']['paused_until'] = time.time() - 1
    assert 'sxsc_tushare' in ds.get_route_order()


# ==================== record_call 联动 ====================


def test_auto_pause_after_consecutive_failures():
    for _ in range(ds.ROUTE_FAIL_THRESHOLD):
        ds.record_call('tushare', False, 50.0)
    assert 'tushare' not in ds.get_route_order()
    m = {x['name']: x for x in ds.get_health_metrics()}['tushare']
    assert m['routing_status'] == 'cooling'
    assert m['last_switch_at']
    assert m['switch_reason']
    assert any(a['source'] == 'tushare' for a in ds.get_alerts())


def test_threshold_boundary_not_paused():
    for _ in range(ds.ROUTE_FAIL_THRESHOLD - 1):
        ds.record_call('akshare', False, 50.0)
    assert 'akshare' in ds.get_route_order()
    m = {x['name']: x for x in ds.get_health_metrics()}['akshare']
    assert m['routing_status'] == 'active'


def test_rate_limited_not_counted_as_failure():
    for _ in range(ds.ROUTE_FAIL_THRESHOLD * 2):
        ds.record_call('tushare', False, 50.0, rate_limited=True)
    m = {x['name']: x for x in ds.get_health_metrics()}['tushare']
    assert m['consecutive_failures'] == 0
    assert m['routing_status'] == 'active'
    assert 'tushare' in ds.get_route_order()


def test_success_revives_and_records_switch():
    for _ in range(ds.ROUTE_FAIL_THRESHOLD):
        ds.record_call('sxsc_tushare', False, 50.0)
    assert 'sxsc_tushare' not in ds.get_route_order()
    ds.record_call('sxsc_tushare', True, 30.0)
    assert 'sxsc_tushare' in ds.get_route_order()
    m = {x['name']: x for x in ds.get_health_metrics()}['sxsc_tushare']
    assert m['consecutive_failures'] == 0
    assert m['routing_status'] == 'active'


# ==================== 集成: 主源故障自动切备用 ====================


def _make_manager(monkeypatch):
    mgr = ds.DataSourceManager()
    monkeypatch.setattr(mgr, '_get_source_config', lambda s: {'enabled': True})
    # V5.3.13: 客户端就绪 (failover 是接口失败场景, 非客户端缺失)
    monkeypatch.setattr(mgr, '_clients', {'sxsc_tushare': object(), 'tushare': object()})

    def fake_fetch(src, code, date=None):
        if src == 'sxsc_tushare':
            raise RuntimeError('sxsc down')
        return {'close': 1.0, 'trade_date': '20260101', 'src': src}

    monkeypatch.setattr(mgr, '_fetch_index_daily', fake_fetch)
    return mgr


def test_failover_to_backup_after_threshold(monkeypatch):
    mgr = _make_manager(monkeypatch)
    for _ in range(ds.ROUTE_FAIL_THRESHOLD):
        r = mgr.get_index_daily('000001.SH')
        # 主源挂 → 备用源兜底, 请求始终有结果(服务无感)
        assert r is not None and r['data_source'] == 'tushare'
    # 主源已冷却 → 路由跳过
    assert 'sxsc_tushare' not in ds.get_route_order()
    # 此后请求不再尝试主源, 直接命中备用
    assert mgr.get_index_daily('000001.SH')['data_source'] == 'tushare'
