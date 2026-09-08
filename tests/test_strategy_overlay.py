# -*- coding: utf-8 -*-
"""
V4.0 M3 完全体闭环测试: show_in_calendar 开关 + 引擎持仓 overlay 进日历
"""
import os
import sys

sys.path.insert(0, os.path.join(os.path.dirname(__file__), '..', 'backend'))
sys.path.insert(0, os.path.join(os.path.dirname(__file__), '..'))

import pytest


def _write_holdings(data_dir, date, name, stocks):
    """写一份引擎持仓矩阵(与 qresult 同格式: 表头=股票代码, 行=日期, 值=1)"""
    d = os.path.join(data_dir, 'holdings', date)
    os.makedirs(d, exist_ok=True)
    path = os.path.join(d, name + '持仓.csv')
    with open(path, 'w', encoding='utf-8-sig', newline='') as f:
        f.write(',' + ','.join(stocks) + '\n')
        f.write(date + ',' + ','.join(['1'] * len(stocks)) + '\n')
    return path


def test_governance_show_in_calendar_default_true():
    """内置策略 show_in_calendar 默认 True(完全体闭环)"""
    import strategy_governance as gov
    state = gov.get_state()
    for sid in gov.BUILTIN_SIDS:
        assert state[sid].get('show_in_calendar', False) is True, sid


def test_governance_save_state_keeps_show_in_calendar():
    """save_state 白名单保留 show_in_calendar 字段"""
    import strategy_governance as gov
    st = gov.get_state()
    st['multi_factor']['show_in_calendar'] = False
    saved = gov.save_state(st)
    assert saved['multi_factor']['show_in_calendar'] is False
    assert gov.get_state()['multi_factor']['show_in_calendar'] is False
    # 恢复默认
    st2 = gov.get_state()
    st2['multi_factor']['show_in_calendar'] = True
    gov.save_state(st2)


def test_parser_overlay_includes_engine_holdings():
    """show_in_calendar=True(内置默认) → 引擎持仓进入日历视图"""
    import paths
    data_dir = paths.DATA_DIR
    _write_holdings(data_dir, '2026-08-19', '多因子策略', ['600519.SH', '000001.SZ'])
    from data_parser import DataParser
    parser = DataParser()
    holdings = parser.get_holdings_by_date('2026-08-19', strategy='multifactor')
    stocks = holdings.get('multifactor', {}).get('stocks', [])
    codes = [s.get('code') if isinstance(s, dict) else s for s in stocks]
    assert '600519.SH' in codes, f"引擎持仓应进入日历: {codes}"


def test_parser_overlay_excludes_when_show_in_calendar_false():
    """show_in_calendar=False → 引擎持仓不进日历"""
    import strategy_governance as gov
    st = gov.get_state()
    st['multi_factor']['show_in_calendar'] = False
    gov.save_state(st)
    try:
        from data_parser import DataParser
        parser = DataParser()
        holdings = parser.get_holdings_by_date('2026-08-19', strategy='multifactor')
        stocks = holdings.get('multifactor', {}).get('stocks', [])
        codes = [s.get('code') if isinstance(s, dict) else s for s in stocks]
        assert '600519.SH' not in codes, "关闭开关后引擎持仓不应进日历"
    finally:
        st2 = gov.get_state()
        st2['multi_factor']['show_in_calendar'] = True
        gov.save_state(st2)
