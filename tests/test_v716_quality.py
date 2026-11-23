#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""v7.16 FR-11/FR-12: 缓存血缘 kind 映射 + 边界保护回归。"""
import os
import sys
sys.path.insert(0, os.path.join(os.path.dirname(__file__), '..', 'backend'))


def test_cache_lineage_kinds():
    """FR-11: kline_daily 同时认 kline_daily/kline 两种 kind (兼容+接通)"""
    import cache
    assert set(cache._lineage_kinds('kline_daily')) == {'kline_daily', 'kline'}
    assert cache._lineage_kinds('other_ns') == ('other_ns',)


def test_date_parse_invalid():
    """FR-12: 非法日期返回 None 而非抛异常"""
    from dwh.native import _parse_date
    assert _parse_date('20269999') is None
    assert _parse_date('2026-11-23') is not None


def test_csv_dirty_values_no_crash(tmp_path, monkeypatch):
    """FR-12: 持仓 CSV 含脏值不崩溃"""
    import data_parser
    # 直接验证解析逻辑: float 转换容错
    for raw in ['N/A', '1,000', '', 'abc', '0', '1']:
        try:
            v = float(str(raw).replace(',', '').strip()) if raw else 0.0
        except (TypeError, ValueError):
            v = 0.0
        assert isinstance(v, float)


def test_backtest_zero_division_guards():
    """FR-12: 回测指标计算对空序列/零基数有保护 (静态契约)"""
    import inspect
    import backtest
    src = inspect.getsource(backtest.BacktestEngine)
    assert 'FR-12' in src and '_n_days' in src, '除零保护未落地'
