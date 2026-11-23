#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""v7.16 FR-10: normalize 边界回归 (92→BJ / ETF→SH / 前缀 / 一致性)。"""
import os
import sys
sys.path.insert(0, os.path.join(os.path.dirname(__file__), '..', 'backend'))


def test_normalize_authoritative_boundaries():
    from data_sources._mapping import _normalize_ts_code as norm
    assert norm('920082') == '920082.BJ', '92 开头必须归 BJ(历史被 SH 分支截获)'
    assert norm('430047') == '430047.BJ'
    assert norm('510300') == '510300.SH', 'ETF 51 开头归 SH'
    assert norm('588000') == '588000.SH'
    assert norm('600519') == '600519.SH'
    assert norm('000001') == '000001.SZ'
    assert norm('300750') == '300750.SZ'
    assert norm('113008') == '113008.SH'  # 可转债


def test_normalize_already_suffixed_unchanged():
    from data_sources._mapping import _normalize_ts_code as norm
    assert norm('600519.SH') == '600519.SH'
    assert norm('000001.SZ') == '000001.SZ'
    assert norm('920082.BJ') == '920082.BJ'


def test_stock_scope_delegates():
    from stock_scope import normalize_code
    assert normalize_code('920082') == '920082.BJ'
    assert normalize_code('510300') == '510300.SH'


def test_realtime_quotes_delegates():
    from realtime_quotes import _normalize_code
    assert _normalize_code('920082') == '920082.BJ'
    assert _normalize_code('510300') == '510300.SH'
    assert _normalize_code('000001') == '000001.SZ'
