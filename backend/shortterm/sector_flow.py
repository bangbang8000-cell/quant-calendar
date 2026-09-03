#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""V5.2.0 (T-5.2.05): 板块资金流(行业/概念)数据抓取

- fetch_sector_flow(indicator, sector_type): 东财 stock_sector_fund_flow_rank
- 列名随 indicator(今日/5日/10日)动态映射; 只映射已知列, 未知列忽略(源改列不炸)
- 数据诚实性: 失败 available=False + [⚠️] 信封; 空榜合法。仅当日实时口径(历史无收盘口径)。
"""
import logging

from .fetchers import _to_float

logger = logging.getLogger(__name__)

_SECTOR_TYPES = ('行业资金流', '概念资金流', '地域资金流')
_INDICATORS = ('今日', '5日', '10日')


def _build_flow_map(indicator: str) -> dict:
    """indicator → 列名映射(名称 + 主力/超大单/大单/中单/小单 净额与占比)"""
    return {
        '名称': 'name',
        f'{indicator}涨跌幅': 'pct_chg',
        f'{indicator}主力净流入-净额': 'main_net_inflow',
        f'{indicator}主力净流入-净占比': 'main_net_inflow_ratio',
        f'{indicator}超大单净流入-净额': 'super_net_inflow',
        f'{indicator}大单净流入-净额': 'large_net_inflow',
        f'{indicator}中单净流入-净额': 'mid_net_inflow',
        f'{indicator}小单净流入-净额': 'small_net_inflow',
    }


def normalize_sector_df(df, column_map: dict) -> list:
    if df is None or len(df) == 0:
        return []
    rows = []
    for _, row in df.iterrows():
        raw = dict(row)
        out = {}
        for zh, en in column_map.items():
            v = raw.get(zh)
            if en == 'name':
                out[en] = None if v is None or (isinstance(v, float) and v != v) else v
            else:
                out[en] = _to_float(v)
        rows.append(out)
    return rows


def fetch_sector_flow(indicator: str = '今日', sector_type: str = '行业资金流') -> dict:
    """板块资金流排名。indicator ∈ {今日,5日,10日}, sector_type ∈ {行业,概念,地域}资金流。"""
    if indicator not in _INDICATORS:
        return {'available': False, 'reason': f'[⚠️ 板块资金流｜indicator 非法: {indicator}]'}
    if sector_type not in _SECTOR_TYPES:
        return {'available': False, 'reason': f'[⚠️ 板块资金流｜sector_type 非法: {sector_type}]'}
    try:
        import akshare as ak
        df = ak.stock_sector_fund_flow_rank(indicator=indicator, sector_type=sector_type)
        rows = normalize_sector_df(df, _build_flow_map(indicator))
        return {'available': True, 'source': 'akshare.eastmoney',
                'indicator': indicator, 'sector_type': sector_type, 'rows': rows}
    except Exception as exc:  # noqa: BLE001 — 数据源异常统一降级信封
        logger.warning('板块资金流抓取失败(%s/%s): %s', indicator, sector_type, exc)
        return {'available': False,
                'reason': f'[⚠️ 板块资金流｜{indicator}/{sector_type} 数据获取失败已降级：{exc}]'}


def fetch_sector_flow_today() -> dict:
    """今日行业 + 概念资金流(合并, 便捷入口)"""
    industry = fetch_sector_flow('今日', '行业资金流')
    concept = fetch_sector_flow('今日', '概念资金流')
    return {'available': industry.get('available') or concept.get('available'),
            'industry': industry, 'concept': concept}
