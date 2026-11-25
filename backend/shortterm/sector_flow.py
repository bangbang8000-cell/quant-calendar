#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""V5.2.0 (T-5.2.05): 板块资金流(行业/概念)数据抓取

v7.19 (FR-5) AKShare 1.20.45 更名适配 + 错误分级 + 健康度：
- 东财：stock_fund_flow_sector_rank_em(新) → stock_sector_fund_flow_rank(旧, 回退)
- 同花顺：stock_fund_flow_industry_ths(新) → stock_fund_flow_industry(旧, 回退)
- 返回体统一带 error_code（本层只产 ok / data_unavailable；cache / stale 由 API 层判定）
- 进程内健康度：最近成功时间 + 连续失败次数（连续 ≥3 供系统状态页标红）
- 数据诚实性：失败 available=False + [⚠️] 信封；空榜合法。仅当日实时口径。
"""
import logging
import time

from .fetchers import _to_float

logger = logging.getLogger(__name__)

_SECTOR_TYPES = ('行业资金流', '概念资金流', '地域资金流')
_INDICATORS = ('今日', '5日', '10日')

# v7.19 (FR-5): 接口改名适配表 —— 新名在前，旧名兜底（滚动升级期双轨）
_EM_FUNCS = ('stock_fund_flow_sector_rank_em', 'stock_sector_fund_flow_rank')
_THS_FUNCS = ('stock_fund_flow_industry_ths', 'stock_fund_flow_industry')

# 健康度（进程内，重启归零）
_HEALTH = {
    'em': {'last_success_at': None, 'consecutive_failures': 0, 'last_error': ''},
    'ths': {'last_success_at': None, 'consecutive_failures': 0, 'last_error': ''},
}


def _now_iso() -> str:
    return time.strftime('%Y-%m-%dT%H:%M:%S')


def _mark(channel: str, ok: bool, err: str = '') -> None:
    h = _HEALTH[channel]
    if ok:
        h['last_success_at'] = _now_iso()
        h['consecutive_failures'] = 0
        h['last_error'] = ''
    else:
        h['consecutive_failures'] += 1
        h['last_error'] = str(err)[:160]


def get_health() -> dict:
    """数据源健康度（FR-5.4：连续失败 ≥3 由系统状态页标红）"""
    channels = {}
    for key, h in _HEALTH.items():
        channels[key] = {
            'last_success_at': h['last_success_at'],
            'consecutive_failures': h['consecutive_failures'],
            'degraded': h['consecutive_failures'] >= 3,
            'last_error': h['last_error'],
        }
    return {'available': any(v['last_success_at'] for v in channels.values()),
            'channels': channels}


def _call_with_fallback(module, names, kwargs, channel: str, tried: list):
    """按候选名顺序调用；记录尝试轨迹；全失败抛最后一个异常。"""
    last = None
    for name in names:
        fn = getattr(module, name, None)
        if not callable(fn):
            tried.append(f'{channel}.{name}: 不存在')
            continue
        try:
            return fn(**kwargs), name
        except Exception as exc:  # noqa: BLE001
            last = exc
            tried.append(f'{channel}.{name}: {type(exc).__name__}: {str(exc)[:80]}')
    if last is None:
        last = RuntimeError(f'{channel}: 无可用接口 {names}')
    raise last


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


# 同花顺行业资金流列 → 统一英文键 (东财反爬兜底, 仅行业/今日)
_THS_INDUSTRY_MAP = {
    '行业': 'name', '行业-涨跌幅': 'pct_chg', '净额': 'main_net_inflow',
    '流入资金': 'inflow', '流出资金': 'outflow', '公司家数': 'stock_count',
}


def _fetch_ths_industry_flow(indicator: str, sector_type: str, tried: list = None) -> dict:
    """同花顺行业资金流兜底（即时口径）。仅 sector_type=行业资金流 且 indicator=今日。"""
    import akshare as ak
    tried = [] if tried is None else tried
    df, used = _call_with_fallback(ak, _THS_FUNCS, {'symbol': '即时'}, 'ths', tried)
    rows = []
    for _, row in df.iterrows():
        raw = dict(row)
        out = {}
        for zh, en in _THS_INDUSTRY_MAP.items():
            v = raw.get(zh)
            out[en] = _to_float(v) if en != 'name' else (
                None if v is None or (isinstance(v, float) and v != v) else v)
        rows.append(out)
    _mark('ths', True)
    return {'available': True, 'error_code': 'ok', 'source': 'akshare.tonghuashun',
            'source_used': used, 'indicator': '今日', 'sector_type': '行业资金流',
            'note': '同花顺即时口径兜底(东财不可达时)', 'rows': rows, 'tried': tried}


def fetch_sector_flow(indicator: str = '今日', sector_type: str = '行业资金流') -> dict:
    """板块资金流排名。indicator ∈ {今日,5日,10日}, sector_type ∈ {行业,概念,地域}资金流。

    v7.19: 源链 东财新名 → 东财旧名 → 同花顺新名 → 同花顺旧名(仅行业/今日)；
    全失败 available=False + error_code=data_unavailable + [⚠️] 信封（含每条尝试原因）。
    """
    if indicator not in _INDICATORS:
        return {'available': False, 'error_code': 'data_unavailable',
                'reason': f'[⚠️ 板块资金流｜indicator 非法: {indicator}]', 'tried': []}
    if sector_type not in _SECTOR_TYPES:
        return {'available': False, 'error_code': 'data_unavailable',
                'reason': f'[⚠️ 板块资金流｜sector_type 非法: {sector_type}]', 'tried': []}
    tried = []
    try:
        import akshare as ak
        df, used = _call_with_fallback(
            ak, _EM_FUNCS, {'indicator': indicator, 'sector_type': sector_type}, 'em', tried)
        rows = normalize_sector_df(df, _build_flow_map(indicator))
        _mark('em', True)
        return {'available': True, 'error_code': 'ok', 'source': 'akshare.eastmoney',
                'source_used': used, 'indicator': indicator, 'sector_type': sector_type,
                'rows': rows, 'tried': tried}
    except Exception as exc:  # noqa: BLE001
        _mark('em', False, exc)
        logger.warning('板块资金流东财失败(%s/%s), 试同花顺: %s', indicator, sector_type, exc)
    # 同花顺兜底: 仅行业/今日
    if sector_type == '行业资金流' and indicator == '今日':
        try:
            return _fetch_ths_industry_flow(indicator, sector_type)
        except Exception as exc:  # noqa: BLE001
            _mark('ths', False, exc)
            tried.append(f'akshare.tonghuashun: {type(exc).__name__}: {str(exc)[:80]}')
    return {'available': False, 'error_code': 'data_unavailable',
            'reason': f'[⚠️ 板块资金流｜{indicator}/{sector_type} 数据获取失败已降级：{"；".join(tried)}]',
            'tried': tried}


def fetch_sector_flow_today() -> dict:
    """今日行业 + 概念资金流(合并, 便捷入口)"""
    industry = fetch_sector_flow('今日', '行业资金流')
    concept = fetch_sector_flow('今日', '概念资金流')
    return {'available': industry.get('available') or concept.get('available'),
            'industry': industry, 'concept': concept}
