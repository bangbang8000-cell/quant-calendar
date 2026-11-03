#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""数据分层守卫测试 (v6.7.0 / B1.7, TC-FY-G-17~20)

守护目标：**Fuyao 永不得进入核心行情链路**（PRD D21 / FR-6.7.8）。
即使未来有人把 fuyao 加进 SOURCE_ORDER 或给 T1 方法传 preferred='fuyao'，
核心链路也必须自动剔除或直接抛错。
"""
import pytest

import data_tier


def test_tier_membership():
    assert data_tier.tier_of('kline_daily') == data_tier.TIER_CORE
    assert data_tier.tier_of('limit_pools') == data_tier.TIER_PERIPHERAL
    assert data_tier.tier_of('dwh_parquet') == data_tier.TIER_ACCEL
    assert data_tier.tier_of('nonexistent') is None


def test_fuyao_is_forbidden_in_core():
    assert 'fuyao' in data_tier.T1_FORBIDDEN
    assert data_tier.is_forbidden_in_core('fuyao') is True
    assert data_tier.is_forbidden_in_core('tushare') is False
    assert data_tier.is_forbidden_in_core(None) is False


def test_filter_preserves_order_and_drops_fuyao():
    """TC-FY-G-20: 强行把 fuyao 插到首位，T1 过滤后仍必须剔除且顺序稳定"""
    injected = ['fuyao', 'sxsc_tushare', 'tushare', 'akshare']
    assert data_tier.filter_t1_sources(injected) == ['sxsc_tushare', 'tushare', 'akshare']

    mid = ['sxsc_tushare', 'fuyao', 'tushare']
    assert data_tier.filter_t1_sources(mid) == ['sxsc_tushare', 'tushare']

    assert data_tier.filter_t1_sources([]) == []
    assert data_tier.filter_t1_sources(None) == []


def test_preferred_fuyao_raises():
    """TC-FY-G-18: T1 方法传 preferred='fuyao' 必须抛错，不得静默降级"""
    with pytest.raises(ValueError) as ei:
        data_tier.assert_preferred_allowed('fuyao')
    assert 'fuyao' in str(ei.value)

    # 正常源不受影响
    assert data_tier.assert_preferred_allowed('tushare') == 'tushare'
    assert data_tier.assert_preferred_allowed(None) is None


def test_arbitrate_field_semantics():
    """T1 恒取现值（Fuyao 不覆盖）；T2 取新值；未知层级保守取现值"""
    assert data_tier.arbitrate_field(data_tier.TIER_CORE, 'tushare_close', 'fuyao_close') == 'tushare_close'
    assert data_tier.arbitrate_field(data_tier.TIER_PERIPHERAL, 'eastmoney', 'fuyao') == 'fuyao'
    assert data_tier.arbitrate_field(data_tier.TIER_ACCEL, 'old', 'new') == 'new'
    assert data_tier.arbitrate_field(None, 'keep', 'drop') == 'keep'


def test_contract_snapshot_shape():
    snap = data_tier.contract_snapshot()
    assert set(snap) == {'t1_core', 't2_peripheral', 't3_accel', 't1_forbidden'}
    assert snap['t1_forbidden'] == ['fuyao']
    assert 'kline_minute' in snap['t1_core']


def test_minute_priority_fallback_excludes_forbidden(monkeypatch):
    """TC-FY-G-19: minute.priority 缺配置时回退不得包含 fuyao"""
    import data_sources._manager_fetch as mf
    import data_sources._manager as mgr

    # 构造：SOURCE_ORDER 被误改为含 fuyao，且配置无 minute.priority
    monkeypatch.setattr(mf, 'SOURCE_ORDER', ['fuyao', 'sxsc_tushare', 'tushare', 'akshare'],
                        raising=False)

    class FakeManager:
        config = {}

    got = mf.DataSourceFetchMixin._minute_priority(FakeManager())
    assert 'fuyao' not in got
    assert got == ['sxsc_tushare', 'tushare', 'akshare']
    assert mgr is not None  # 防止 import 被优化移除
