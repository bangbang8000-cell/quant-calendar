#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""V5.9 (T-5.9.3): 代码/列名映射辅助 (拆自 data_sources.py)"""
from ._constants import *  # noqa: F401,F403


def _safe_float(value, default=None):
    """安全转 float, 无法转换返回 default"""
    try:
        if value is None or (isinstance(value, float) and value != value):  # NaN
            return default
        return float(value)
    except (TypeError, ValueError):
        return default

def _ts_code_to_akshare_index(ts_code):
    """tushare指数代码 → akshare 指数符号
    000001.SH → sh000001, 399001.SZ → sz399001
    """
    code, exchange = ts_code.split('.')
    prefix = 'sh' if exchange == 'SH' else 'sz'
    return f"{prefix}{code}"

def _ts_code_to_akshare_stock(ts_code):
    """tushare股票代码 → akshare 股票符号
    000001.SZ → 000001 (去后缀)
    """
    return ts_code.split('.')[0]

def _ts_code_to_sina_symbol(ts_code):
    """tushare代码 → 新浪符号: 600519.SH → sh600519, 000001.SZ → sz000001 (v3.20.1)"""
    code = ts_code.split('.')[0]
    suffix = ts_code.split('.')[-1].upper()
    prefix = 'sh' if suffix == 'SH' else 'sz' if suffix == 'SZ' else ''
    return prefix + code

def _is_index_code(ts_code):
    """判断是否为指数代码"""
    if ts_code.endswith('.SH'):
        return ts_code.startswith('000') or ts_code.startswith('0000')
    if ts_code.endswith('.SZ'):
        return ts_code.startswith('399')
    return False

def _map_akshare_columns(df, column_map):
    """映射 akshare DataFrame 列名为 tushare 标准列名"""
    df = df.rename(columns={k: v for k, v in column_map.items() if k in df.columns})
    # 保留映射后存在的列
    keep_cols = [v for v in column_map.values() if v in df.columns]
    return df[keep_cols]
