#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""V5.2.0 (T-5.2.01): 短线三池(涨停/炸板/跌停)数据抓取与标准化

数据诚实性(借鉴 vibe-astock):
- 取数失败 → available=False + [⚠️] 信封, 绝不返回 0 家
- 空池是合法结果(available=True, rows=[]), 判据必须 is not None / available
- 代码 6 位补零, NaN→None, 封板时间归一 HH:MM:SS
"""
import logging

from .limits import board_of

logger = logging.getLogger(__name__)

# 涨停/炸板/跌停池 列名映射 (akshare 东财中文列 → 统一英文键)
_ZT_COLUMN_MAP = {
    '代码': 'ts_code', '名称': 'name', '涨跌幅': 'pct_chg', '最新价': 'price',
    '成交额': 'amount', '流通市值': 'float_mv', '总市值': 'total_mv',
    '换手率': 'turnover_rate', '封板资金': 'seal_amount',
    '首次封板时间': 'first_seal_time', '最后封板时间': 'last_seal_time',
    '炸板次数': 'break_times', '涨停统计': 'zt_stat', '连板数': 'boards',
    '所属行业': 'industry',
}
_ZB_COLUMN_MAP = {
    '代码': 'ts_code', '名称': 'name', '涨跌幅': 'pct_chg', '最新价': 'price',
    '涨停价': 'limit_price', '成交额': 'amount', '流通市值': 'float_mv',
    '总市值': 'total_mv', '换手率': 'turnover_rate', '涨速': 'speed',
    '首次封板时间': 'first_seal_time', '炸板次数': 'break_times',
    '涨停统计': 'zt_stat', '振幅': 'amplitude', '所属行业': 'industry',
}
_DT_COLUMN_MAP = {
    '代码': 'ts_code', '名称': 'name', '涨跌幅': 'pct_chg', '最新价': 'price',
    '成交额': 'amount', '流通市值': 'float_mv', '总市值': 'total_mv',
    '动态市盈率': 'pe_ttm', '换手率': 'turnover_rate', '封单资金': 'seal_amount',
    '最后封板时间': 'last_seal_time', '板上成交额': 'on_board_amount',
    '连续跌停': 'consec_dt', '开板次数': 'break_times', '所属行业': 'industry',
}

_POOL_MAP = {'zt': _ZT_COLUMN_MAP, 'zb': _ZB_COLUMN_MAP, 'dt': _DT_COLUMN_MAP}
_AKSHARE_POOL_FUNC = {
    'zt': 'stock_zt_pool_em',
    'zb': 'stock_zt_pool_zbgc_em',
    'dt': 'stock_zt_pool_dtgc_em',
}
_POOL_LABEL = {'zt': '涨停池', 'zb': '炸板池', 'dt': '跌停池'}


def _norm_time(v):
    """'092500' → '09:25:00'; None/NaN → None; 已带冒号原样返回"""
    if v is None:
        return None
    s = str(v).strip()
    if not s or s.lower() in ('nan', 'none'):
        return None
    if ':' in s:
        return s
    s = s.zfill(6)
    return f"{s[0:2]}:{s[2:4]}:{s[4:6]}" if len(s) == 6 else s


def _to_float(v):
    if v is None:
        return None
    try:
        f = float(v)
    except (TypeError, ValueError):
        return None
    if f != f:  # NaN
        return None
    return f


def _to_int(v):
    if v is None:
        return None
    try:
        f = float(v)
    except (TypeError, ValueError):
        return None
    if f != f:  # NaN
        return None
    return int(f)


def _zero_pad(code):
    """代码 6 位补零: '2909' → '002909'"""
    if code is None:
        return None
    s = str(code).strip().split('.')[0]
    return s.zfill(6) if s.isdigit() else s


def _norm_date(date):
    """'2026-09-02' → '20260902' (akshare 东财要求 YYYYMMDD)"""
    return str(date).replace('-', '')


def _normalize_row(raw: dict, column_map: dict) -> dict:
    out = {}
    for zh, en in column_map.items():
        v = raw.get(zh)
        if en == 'ts_code':
            out[en] = _zero_pad(v)
        elif en in ('boards', 'break_times', 'consec_dt'):
            out[en] = _to_int(v)
        elif en in ('first_seal_time', 'last_seal_time'):
            out[en] = _norm_time(v)
        elif en in ('pct_chg', 'price', 'amount', 'float_mv', 'total_mv',
                    'turnover_rate', 'seal_amount', 'speed', 'amplitude',
                    'limit_price', 'pe_ttm', 'on_board_amount'):
            out[en] = _to_float(v)
        else:
            out[en] = None if v is None or (isinstance(v, float) and v != v) else v
    # 涨跌幅制度标签(复用 scan_engine 单一实现)
    out['board'] = board_of(out.get('ts_code') or '', out.get('name') or '')
    return out


def normalize_pool_df(df, column_map: dict) -> list:
    """标准化三池 DataFrame → list[dict]"""
    if df is None or len(df) == 0:
        return []
    rows = []
    for _, row in df.iterrows():
        rows.append(_normalize_row(dict(row), column_map))
    return rows


def _fetch_pool(pool_type: str, date: str) -> dict:
    """抓取三池之一。date 接受 YYYY-MM-DD / YYYYMMDD。"""
    compact = _norm_date(date)
    label = _POOL_LABEL[pool_type]
    try:
        import akshare as ak
        func = getattr(ak, _AKSHARE_POOL_FUNC[pool_type])
        df = func(compact)
        rows = normalize_pool_df(df, _POOL_MAP[pool_type])
        return {'available': True, 'source': 'akshare.eastmoney',
                'date': str(date), 'rows': rows}
    except Exception as e:  # noqa: BLE001 — 数据源异常统一降级信封
        logger.warning('短线 %s 抓取失败(%s): %s', label, compact, e)
        return {'available': False,
                'reason': f'[⚠️ {label}｜{date} 数据获取失败已降级：{e}]'}


def fetch_zt_pool(date: str) -> dict:
    """涨停池"""
    return _fetch_pool('zt', date)


def fetch_zb_pool(date: str) -> dict:
    """炸板池"""
    return _fetch_pool('zb', date)


def fetch_dt_pool(date: str) -> dict:
    """跌停池"""
    return _fetch_pool('dt', date)
