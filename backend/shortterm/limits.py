#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""V5.2.0 (T-5.2.02): 涨跌幅制度判定 — 板别映射 + 涨停/跌停判定

单一实现: 复用 scan_engine._limit_ratio / _is_limit_day(容差 LIMIT_TOLERANCE),
本模块只做板别标签映射与便捷封装, 禁止第二套口径(测试锁住)。
"""
from scan_engine import _limit_ratio, _is_limit_day, LIMIT_TOLERANCE

# 涨停幅度 → 板别标签
_BOARD_BY_RATIO = {0.05: '5cm(st)', 0.10: '10cm', 0.20: '20cm', 0.30: '30cm(bj)'}


def board_of(ts_code: str = '', name: str = '') -> str:
    """涨跌幅制度标签: 10cm / 20cm / 30cm(bj) / 5cm(st)"""
    return _BOARD_BY_RATIO.get(_limit_ratio(ts_code, name), '10cm')


def limit_pct(ts_code: str = '', name: str = '') -> float:
    """涨停幅度比例(0.05/0.10/0.20/0.30)"""
    return _limit_ratio(ts_code, name)


def is_limit_up(pct_chg, ts_code: str = '', name: str = '') -> bool:
    """是否触及涨停(按每只票的制度判定; None 一律 False)"""
    if pct_chg is None:
        return False
    return _is_limit_day(float(pct_chg), _limit_ratio(ts_code, name),
                         LIMIT_TOLERANCE, up=True)


def is_limit_down(pct_chg, ts_code: str = '', name: str = '') -> bool:
    """是否触及跌停(按每只票的制度判定; None 一律 False)"""
    if pct_chg is None:
        return False
    return _is_limit_day(float(pct_chg), _limit_ratio(ts_code, name),
                         LIMIT_TOLERANCE, up=False)
