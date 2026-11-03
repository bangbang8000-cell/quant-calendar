#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Fuyao 源注册与三级开关测试 (v6.7.0 / B1.2, TC-FY-G-11/12/15 + TC-FY-6.7-05)

守护目标：
- SOURCE_ORDER 末位注册，且 T1 核心路由永不包含 fuyao
- 三级开关 L2 能力域热读（不重启生效）
- 空 Key → 按未启用处理，不报错、不进告警
- 状态快照结构稳定
"""
import pytest

import data_sources
from data_sources._constants import DEFAULT_CONFIG, FUYAO_CAPABILITIES, SOURCE_ORDER
from data_sources._manager import DataSourceManager


@pytest.fixture()
def manager(monkeypatch):
    """隔离的 DataSourceManager 实例（避免单例与真实 .env 污染）"""
    monkeypatch.setenv('FUYAO_API_KEY', 'sk-fuyao-test-key-123456')
    old_instance = DataSourceManager._instance
    DataSourceManager._instance = None
    mgr = DataSourceManager()
    yield mgr
    DataSourceManager._instance = old_instance


def test_source_order_has_fuyao_last():
    """TC-FY-G-15: fuyao 必须末位（第一道防线）"""
    assert SOURCE_ORDER[-1] == 'fuyao'
    assert SOURCE_ORDER[:3] == ['sxsc_tushare', 'tushare', 'akshare']


def test_default_config_declares_fuyao_switches():
    cfg = DEFAULT_CONFIG['sources']['fuyao']
    assert cfg['enabled'] is True
    assert set(cfg['capabilities']) == set(FUYAO_CAPABILITIES)
    assert cfg['quota']['daily_limit'] == 3000


def test_client_registered_with_key(manager):
    assert manager.fuyao_client() is not None
    assert manager._source_client_ready('fuyao') is True


def test_t1_route_excludes_fuyao(manager):
    """TC-FY-G-17: 核心路由过滤后不含 fuyao（即使 SOURCE_ORDER 里有）"""
    assert 'fuyao' in SOURCE_ORDER
    assert 'fuyao' not in manager.t1_route()
    assert manager.t1_route(['fuyao', 'tushare']) == ['tushare']


def test_capability_hot_read(manager):
    """TC-FY-6.7-05: L2 开关热读，改配置后下一次判定立即生效（无需重启）"""
    assert manager.fuyao_capability_enabled('special') is True
    manager.config['sources']['fuyao']['capabilities']['special'] = False
    assert manager.fuyao_capability_enabled('special') is False
    # 其余能力不受影响
    assert manager.fuyao_capability_enabled('prices') is True


def test_capability_snapshot_matrix(manager):
    snap = manager.fuyao_capabilities_snapshot()
    assert set(snap) == set(FUYAO_CAPABILITIES)
    assert all(snap.values())
    manager.config['sources']['fuyao']['capabilities']['news'] = False
    assert manager.fuyao_capabilities_snapshot()['news'] is False


def test_empty_key_means_not_enabled_not_error(monkeypatch):
    """TC-FY-G-12: 空 Key → 未启用语义，不抛错、不写 error"""
    monkeypatch.delenv('FUYAO_API_KEY', raising=False)
    monkeypatch.delenv('HITHINK_FINANCE_API_KEY', raising=False)
    old = DataSourceManager._instance
    DataSourceManager._instance = None
    try:
        mgr = DataSourceManager()
        assert mgr.fuyao_client() is None
        assert mgr._source_client_ready('fuyao') is False
        assert mgr.fuyao_capability_enabled('prices') is False
        assert 'fuyao' not in (mgr._errors or {})
    finally:
        DataSourceManager._instance = old


def test_kline_never_uses_fuyao(manager, monkeypatch):
    """TC-FY-G-17: 即使 fuyao 客户端就绪，核心 K 线路由也不得调用它"""
    seen = []

    def fake_fetch(src_name, ts_code, period, limit):
        seen.append(src_name)
        return None

    monkeypatch.setattr(manager, '_fetch_kline', fake_fetch, raising=False)
    manager._kline_cache.clear()
    manager.get_kline_data('600519.SH', 'daily', 5)
    assert seen, '应当尝试过其他源'
    assert 'fuyao' not in seen


def test_preferred_fuyao_rejected_on_core(manager):
    """TC-FY-G-18: 核心方法传 preferred='fuyao' 抛错（不静默降级）"""
    manager._kline_cache.clear()
    with pytest.raises(ValueError):
        manager.get_kline_data('600519.SH', 'daily', 5, preferred='fuyao')
    assert data_sources is not None
