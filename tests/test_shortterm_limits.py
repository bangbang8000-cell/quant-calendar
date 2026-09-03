#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""V5.2.0 (T-5.2.02): 涨跌幅制度判定纯函数测试
单一实现: 复用 scan_engine._limit_ratio/_is_limit_day, 本模块只做板别映射与封装。"""
from shortterm.limits import board_of, limit_pct, is_limit_up, is_limit_down


def test_board_main_10cm():
    assert board_of('002909', '集泰股份') == '10cm'


def test_board_chinext_star_20cm():
    assert board_of('300001', 'X') == '20cm'
    assert board_of('688001', 'X') == '20cm'
    assert board_of('301001', 'X') == '20cm'
    assert board_of('689001', 'X') == '20cm'


def test_board_bse_30cm():
    assert board_of('830001', 'X') == '30cm(bj)'
    assert board_of('430001', 'X') == '30cm(bj)'
    assert board_of('920001', 'X') == '30cm(bj)'


def test_board_st_5cm():
    assert board_of('600000', '*ST某某') == '5cm(st)'
    assert board_of('600000', 'ST某某') == '5cm(st)'


def test_limit_pct():
    assert limit_pct('600000', 'X') == 0.10
    assert limit_pct('300001', 'X') == 0.20
    assert limit_pct('830001', 'X') == 0.30
    assert limit_pct('600000', 'ST某某') == 0.05


def test_is_limit_up():
    assert is_limit_up(9.98, '600000', 'X') is True
    assert is_limit_up(10.05, '600000', 'X') is True
    assert is_limit_up(5.0, '600000', 'X') is False
    assert is_limit_up(20.02, '300001', 'X') is True
    assert is_limit_up(19.5, '300001', 'X') is False


def test_is_limit_down():
    assert is_limit_down(-9.9, '600000', 'X') is True
    assert is_limit_down(-5.0, '600000', 'X') is False


def test_is_limit_none():
    assert is_limit_up(None, '600000', 'X') is False
    assert is_limit_down(None, '600000', 'X') is False


def test_board_wired_into_pool_normalization():
    """涨停池标准化行带 board 标签(10cm/20cm/30cm(bj)/5cm(st))"""
    import pandas as pd
    from shortterm.fetchers import normalize_pool_df, _ZT_COLUMN_MAP
    df = pd.DataFrame([{'代码': '300001', '名称': '创业板票', '连板数': 2}])
    rows = normalize_pool_df(df, _ZT_COLUMN_MAP)
    assert rows[0]['board'] == '20cm'
