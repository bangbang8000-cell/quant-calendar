#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""V5.2.0 (T-5.2.04): 龙虎榜数据抓取 + 席位/资金性质归类

- fetch_lhb(start, end): 全市场龙虎榜明细(akshare 东财)
- classify_reading(解读): 从东财「解读」字段抽取 机构/游资/主力 信号(客观归类, 非推荐)
- 数据诚实性: 失败 available=False + [⚠️] 信封; 空榜是合法结果。
"""
import logging

from .fetchers import _zero_pad, _to_float, _norm_date
from .limits import board_of

logger = logging.getLogger(__name__)

_LHB_COLUMN_MAP = {
    '代码': 'ts_code', '名称': 'name', '上榜日': 'trade_date', '解读': 'reading',
    '收盘价': 'close', '涨跌幅': 'pct_chg', '龙虎榜净买额': 'net_buy',
    '龙虎榜买入额': 'buy_amount', '龙虎榜卖出额': 'sell_amount',
    '龙虎榜成交额': 'amount', '市场总成交额': 'total_amount',
    '净买额占总成交比': 'net_buy_ratio', '成交额占总成交比': 'amount_ratio',
    '换手率': 'turnover_rate', '流通市值': 'float_mv', '上榜原因': 'reason',
    '上榜后1日': 'next_1d', '上榜后2日': 'next_2d',
    '上榜后5日': 'next_5d', '上榜后10日': 'next_10d',
}

_FLOAT_KEYS = ('close', 'pct_chg', 'net_buy', 'buy_amount', 'sell_amount',
               'amount', 'total_amount', 'net_buy_ratio', 'amount_ratio',
               'turnover_rate', 'float_mv', 'next_1d', 'next_2d',
               'next_5d', 'next_10d')

# 「解读」字段关键词 → 资金性质标签(客观归类)
_READING_KEYWORDS = [
    ('机构', '机构'), ('游资', '游资'), ('主力', '主力'),
    ('敢死队', '游资'), ('知名游资', '游资'),
]


def classify_reading(reading):
    """从东财解读文本抽取资金性质标签 → list[str](去重保序)"""
    if not reading:
        return []
    s = str(reading)
    tags = []
    for kw, tag in _READING_KEYWORDS:
        if kw in s and tag not in tags:
            tags.append(tag)
    return tags


def _normalize_lhb_row(raw: dict) -> dict:
    out = {}
    for zh, en in _LHB_COLUMN_MAP.items():
        v = raw.get(zh)
        if en == 'ts_code':
            out[en] = _zero_pad(v)
        elif en in _FLOAT_KEYS:
            out[en] = _to_float(v)
        else:
            out[en] = None if v is None or (isinstance(v, float) and v != v) else v
    out['board'] = board_of(out.get('ts_code') or '', out.get('name') or '')
    out['tags'] = classify_reading(out.get('reading'))
    return out


def normalize_lhb_df(df) -> list:
    if df is None or len(df) == 0:
        return []
    return [_normalize_lhb_row(dict(row)) for _, row in df.iterrows()]


def fetch_lhb(start_date: str, end_date: str) -> dict:
    """全市场龙虎榜明细。日期 YYYY-MM-DD / YYYYMMDD。"""
    s, e = _norm_date(start_date), _norm_date(end_date)
    try:
        import akshare as ak
        df = ak.stock_lhb_detail_em(start_date=s, end_date=e)
        rows = normalize_lhb_df(df)
        return {'available': True, 'source': 'akshare.eastmoney',
                'start_date': str(start_date), 'end_date': str(end_date),
                'rows': rows}
    except Exception as exc:  # noqa: BLE001 — 数据源异常统一降级信封
        logger.warning('龙虎榜抓取失败(%s~%s): %s', s, e, exc)
        return {'available': False,
                'reason': f'[⚠️ 龙虎榜｜{start_date}~{end_date} 数据获取失败已降级：{exc}]'}
