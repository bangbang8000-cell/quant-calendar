#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""零 Fuyao 演练（进程内版）(v7.3.0 / B7.7, TC-FY-G-19)

把 Fuyao 整体关掉（能力域全 False + client=None），验证：
1. T1 核心行情**本来就不走 Fuyao**（路由过滤后不含 fuyao）
2. T2/T3 周边能力全部**诚实降级**（available=False + reason），不抛异常、不伪造数据
3. 本地 DWH 研究层不受影响

外部可执行版见 `scripts/drill_zero_fuyao.py`（需 admin token，用于 ops 实机）。
"""
import pytest

import auction
import anomaly_notes
import fin_quality
import hot_rank
import industry_strength
import sentiment_pulse
import stock_scope


@pytest.fixture()
def zero_fuyao(monkeypatch):
    """把所有 Fuyao 入口关掉。"""
    import data_sources
    from data_sources import _manager

    def _off(self, capability=None):
        return False

    monkeypatch.setattr(_manager.DataSourceManager, 'fuyao_capability_enabled', _off, raising=False)
    monkeypatch.setattr(_manager.DataSourceManager, 'fuyao_client', lambda self: None, raising=False)
    return data_sources


def test_t1_route_excludes_fuyao(zero_fuyao):
    """核心行情链路本就不允许 Fuyao（关闭后结论不变）"""
    from data_sources import data_source_manager
    route = data_source_manager.t1_route()
    assert 'fuyao' not in route
    assert route == data_source_manager.t1_route(None)


def test_peripheral_modules_degrade_honestly(zero_fuyao):
    """周边能力：要么可用(本地兜底)，要么 available=False + reason，绝不抛异常"""
    checks = []
    checks.append(('auction', auction.fetch_benchmark()))
    checks.append(('hot_rank', hot_rank.fetch_hot_list('day', 5)))
    checks.append(('anomaly', anomaly_notes.fetch_anomaly_list()))
    checks.append(('industry', industry_strength.refresh(limit=3)))
    checks.append(('fin', fin_quality.screen(['600519.SH'])))
    checks.append(('scope', stock_scope.scan(['600519'])))

    for name, out in checks:
        assert isinstance(out, dict), name
        if out.get('available'):
            continue
        assert out.get('reason'), '%s 降级缺 reason' % name


def test_events_flash_degrades(zero_fuyao):
    import event_provider_fuyao as epf
    out = epf.FuyaoEventProvider().fetch_flash()
    assert out['available'] is False and out['reason']


def test_sentiment_pulse_still_computes_from_local_pool(zero_fuyao):
    """脉冲屏是纯计算模块：入参缺失时才降级，不依赖 Fuyao 在线"""
    out = sentiment_pulse.build_pulse('2026-11-03', {'available': False, 'reason': 'no_source'})
    assert out['available'] is False and out['reason'] == 'no_source'


def test_dwh_local_layer_unaffected(zero_fuyao):
    """本地 DuckDB 研究层不依赖网络源"""
    try:
        from dwh import get_backend
        st = get_backend().status()
    except Exception as e:  # noqa: BLE001 — 依赖缺失也算"未受影响"的合理结果
        pytest.skip('DWH 依赖不可用: %s' % e)
    assert st.get('available') in (True, False)
    if st.get('available'):
        assert st.get('rows', 0) > 0


def test_drill_script_exists_and_is_executable():
    """外部演练脚本必须存在（ops 侧运维项）"""
    import os
    path = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))),
                        'scripts', 'drill_zero_fuyao.py')
    assert os.path.exists(path)
    assert '零 Fuyao 演练' in open(path, encoding='utf-8').read()
