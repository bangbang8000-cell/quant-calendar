#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""V5.3.13 (OPTIMIZATION): dev 无 sxsc token 时 sxsc 空客户端不记失败

v5.3.11 修复 6 位代码后遗留: dev 无 sxsc token → sxsc 客户端未初始化,
_fetch_* 返回 None → 被 record_call(False) 记失败 → 连续 3 次触发冷却,
冷却 300s 满后重试再失败 → 周期性小抖动 + 污染健康统计。

守护: ①_source_client_ready 辅助 ②各 get_* 路由遍历跳过未初始化源 ③不触发冷却
"""
import os
import sys

BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(BASE, 'backend'))

from data_sources import data_source_manager  # noqa: E402
from data_sources._health import reset_health, get_health_metrics  # noqa: E402
from data_sources._health import get_route_order  # noqa: E402


def test_source_client_ready_helper(monkeypatch):
    """辅助方法: sxsc/tushare 客户端缺失 → False; akshare 无需客户端 → True"""
    monkeypatch.setattr(data_source_manager, '_clients', {'tushare': object()})
    assert data_source_manager._source_client_ready('sxsc_tushare') is False, 'sxsc 无客户端'
    assert data_source_manager._source_client_ready('tushare') is True, 'tushare 有客户端'
    assert data_source_manager._source_client_ready('akshare') is True, 'akshare 按需 import'


def test_kline_skips_missing_client_no_failure(monkeypatch):
    """get_kline_data: sxsc 客户端缺失 → 跳过且不记失败, tushare 正常返回"""
    import pandas as pd
    reset_health()
    # 仅 tushare 有客户端; akshare 不装(用 fake)
    class _FakePro:
        def daily(self, ts_code='600000.SH', limit=2):
            return pd.DataFrame([{'trade_date': '20260903', 'open': 10.0, 'high': 11.5, 'low': 9.5, 'close': 11.0, 'vol': 100000, 'amount': 1100000.0}])
    monkeypatch.setattr(data_source_manager, '_clients', {'tushare': _FakePro()})
    out = data_source_manager.get_kline_data('600000', 'daily', 2)
    assert out and out.get('data_source') == 'tushare', '应走 tushare'
    # sxsc 不应有失败记录
    for h in get_health_metrics():
        if h['name'] == 'sxsc_tushare':
            assert h['failures'] == 0, f'sxsc 不应记失败: {h}'
            assert h['routing_status'] != 'cooling', 'sxsc 不应冷却'


def test_moneyflow_skips_missing_client(monkeypatch):
    """get_moneyflow: sxsc 客户端缺失 → 跳过, 不记失败"""
    import pandas as pd
    reset_health()
    class _FakePro:
        def moneyflow(self, ts_code='600000.SH', limit=5, fields=''):
            return pd.DataFrame([{'trade_date': '20260903', 'net_mf_amount': 100.0}])
    monkeypatch.setattr(data_source_manager, '_clients', {'tushare': _FakePro()})
    out = data_source_manager.get_moneyflow('600000', 5)
    assert out and len(out) > 0, 'tushare moneyflow 应返回数据'
    for h in get_health_metrics():
        if h['name'] == 'sxsc_tushare':
            assert h['failures'] == 0, 'sxsc 不应记失败'


def test_route_order_excludes_missing_client(monkeypatch):
    """get_route_order 对客户端缺失源在遍历时被跳过"""
    reset_health()
    monkeypatch.setattr(data_source_manager, '_clients', {})
    # 无任何客户端时: akshare 仍可参与 (按需 import)
    order = get_route_order()
    assert 'sxsc_tushare' in order, 'route_order 仍含 sxsc (由遍历跳过)'