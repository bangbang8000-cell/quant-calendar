#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""V5.2.0 (T-5.2.04): 龙虎榜数据抓取 + 席位/资金性质归类

- fetch_lhb(start, end): 全市场龙虎榜明细(akshare 东财 → tushare top_list 兜底)
- classify_reading(解读): 从东财「解读」字段抽取 机构/游资/主力 信号(客观归类, 非推荐)
- 数据诚实性: 失败 available=False + [⚠️] 信封; 空榜是合法结果。
- V5.2.3-fix: 东财「上榜日」返回 datetime.date → 转 ISO 字符串, 否则 API 序列化 500。
"""
import datetime
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


def _as_serializable(v):
    """date/datetime → ISO 字符串(防 API 序列化 500); NaN → None"""
    if isinstance(v, (datetime.date, datetime.datetime)):
        return v.isoformat()
    if isinstance(v, float) and v != v:
        return None
    return v


def _normalize_lhb_row(raw: dict) -> dict:
    out = {}
    for zh, en in _LHB_COLUMN_MAP.items():
        v = raw.get(zh)
        if en == 'ts_code':
            out[en] = _zero_pad(v)
        elif en in _FLOAT_KEYS:
            out[en] = _to_float(v)
        else:
            out[en] = _as_serializable(v)
    out['board'] = board_of(out.get('ts_code') or '', out.get('name') or '')
    out['tags'] = classify_reading(out.get('reading'))
    return out


def normalize_lhb_df(df) -> list:
    if df is None or len(df) == 0:
        return []
    return [_normalize_lhb_row(dict(row)) for _, row in df.iterrows()]


# tushare top_list 列 → 统一英文键 (东财反爬兜底源, 单日)
_TUSHARE_LHB_MAP = {
    'ts_code': 'ts_code', 'name': 'name', 'pct_change': 'pct_chg',
    'close': 'close', 'amount': 'amount', 'turnover_rate': 'turnover_rate',
    'net_amount': 'net_buy', 'l_buy': 'buy_amount', 'l_sell': 'sell_amount',
    'reason': 'reason',
}


def _normalize_tushare_row(raw: dict) -> dict:
    out = {}
    for src, en in _TUSHARE_LHB_MAP.items():
        v = raw.get(src)
        if en == 'ts_code':
            out[en] = _zero_pad(v)
        elif en in _FLOAT_KEYS:
            out[en] = _to_float(v)
        else:
            out[en] = None if v is None or (isinstance(v, float) and v != v) else v
    out['board'] = board_of(out.get('ts_code') or '', out.get('name') or '')
    out['tags'] = []   # tushare 无「解读」字段, 不编造资金性质
    return out


def _fetch_tushare_lhb(start_date: str, end_date: str, s: str) -> dict:
    """tushare top_list 兜底(单日, 需 2000+ 积分; 无 token/权限 → 抛错交上层降级)"""
    import tushare as ts
    from config import settings
    token = getattr(settings, 'TUSHARE_TOKEN', '') or ''
    if not token:
        raise RuntimeError('未配置 TUSHARE_TOKEN, tushare 兜底不可用')
    pro = ts.pro_api(token)
    df = pro.top_list(trade_date=s)
    rows = []
    for _, r in df.iterrows():
        rows.append(_normalize_tushare_row(dict(r)))
    return {'available': True, 'source': 'tushare',
            'start_date': str(start_date), 'end_date': str(end_date), 'rows': rows}


def _fetch_sxsc_lhb(start_date: str, end_date: str, s: str) -> dict:
    """V5.3.10: sxsc(山证Tushare)龙虎榜 — top_list (与 tushare 同协议, 含 reason)

    优先级最高(券商网关, 功能和实效性更高)。dev 无 sxsc token → 客户端缺失 → 抛错回落。
    """
    from data_sources import data_source_manager
    api = data_source_manager._clients.get('sxsc_tushare')
    if api is None:
        raise RuntimeError('sxsc 客户端未初始化(dev 未配置 SXSC_TUSHARE_TOKEN)')
    df = api.query('top_list', trade_date=s)
    rows = []
    for _, r in df.iterrows():
        rows.append(_normalize_tushare_row(dict(r)))
    return {'available': True, 'source': 'sxsc_tushare',
            'start_date': str(start_date), 'end_date': str(end_date), 'rows': rows}


# ==================== v6.8.0 (B2.3): Fuyao 龙虎榜（T2 周边，优先源） ====================

_FUYAO_LHB_PATH = '/api/a-share/special-data/dragon-tiger-list'


def _fuyao_ready():
    """返回 (client, reason)。reason 区分 capability_disabled / not_configured / error。"""
    try:
        from data_sources import data_source_manager
        if not data_source_manager.fuyao_capability_enabled('special'):
            return None, 'capability_disabled'
        client = data_source_manager.fuyao_client()
        if client is None:
            return None, 'not_configured'
        return client, None
    except Exception as e:  # noqa: BLE001 — 分层/开关不可用时不阻断龙虎榜链路
        logger.debug('龙虎榜 fuyao 不可用: %s', e)
        return None, f'{type(e).__name__}: {str(e)[:60]}'


def normalize_fuyao_lhb_items(items):
    """Fuyao 龙虎榜 → 项目内部行结构（保留题材串与资金性质）。

    实测字段（2026-11-03）：thscode/ticker/name/change/concept_list/net_value/
    net_rate/hot_rank/buy_value/sell_value/limit_reason/range_days/org_net_value/
    hot_money_net_value
    """
    rows = []
    for it in items or []:
        if not isinstance(it, dict):
            continue
        code = str(it.get('ticker') or it.get('thscode') or '').split('.')[0]
        concepts = [c.get('name') for c in (it.get('concept_list') or []) if isinstance(c, dict)]
        tags = []
        if (it.get('org_net_value') or 0) > 0:
            tags.append('机构')
        if (it.get('hot_money_net_value') or 0) > 0:
            tags.append('游资')
        rows.append({
            'ts_code': _zero_pad(code),
            'name': it.get('name'),
            'trade_date': str(it.get('trade_date') or ''),
            'pct_chg': _to_float(it.get('change')) and round(_to_float(it.get('change')) * 100, 2),
            'net_buy': _to_float(it.get('net_value')),
            'net_buy_ratio': _to_float(it.get('net_rate')) and round(_to_float(it.get('net_rate')) * 100, 2),
            'buy_amount': _to_float(it.get('buy_value')),
            'sell_amount': _to_float(it.get('sell_value')),
            'reason': it.get('limit_reason'),
            'concepts': concepts,
            'tags': tags,
            'org_net_value': _to_float(it.get('org_net_value')),
            'hot_money_net_value': _to_float(it.get('hot_money_net_value')),
            'range_days': it.get('range_days'),
            'board': board_of(code, it.get('name') or ''),
            'field_source': 'fuyao',
        })
    return rows


def fetch_lhb_fuyao(date: str, board_type: str = 'all'):
    """单日 Fuyao 龙虎榜；**默认只纳入 range_days=1**，避免 1 日榜与 3 日榜重复计额。

    返回 (rows, meta)；不可用返回 (None, meta with reason)。
    """
    client, why = _fuyao_ready()
    if client is None:
        return None, {'available': False, 'reason': why or 'not_configured'}
    compact = _norm_date(date)
    # 实测：dragon-tiger-list 的 date 必须是 yyyy-MM-dd（传 yyyyMMdd 会被判 1001 参数错）
    iso = '%s-%s-%s' % (compact[0:4], compact[4:6], compact[6:8]) if len(compact) == 8 else compact
    r = client.get('special.dragon-tiger-list', _FUYAO_LHB_PATH,
                   {'board_type': board_type, 'date': iso})
    if not r.get('ok'):
        return None, {'available': False, 'reason': r.get('reason') or 'fetch_failed'}
    d = r.get('data') or {}
    trade_date = str(d.get('trade_date') or '')
    items = d.get('stock_items') or []
    rows = normalize_fuyao_lhb_items(items)
    for row in rows:
        row['trade_date'] = row['trade_date'] or trade_date
    raw_n = len(rows)
    rows = [x for x in rows if int(x.get('range_days') or 1) == 1]
    for x in rows:
        x['board'] = x.get('board') or board_of(x['ts_code'], x.get('name') or '')
    meta = {
        'available': True,
        'source': 'fuyao',
        'trade_date': trade_date,
        'board_type': board_type,
        'raw_count': raw_n,
        'range_days_1_count': len(rows),
        'excluded_multi_day': raw_n - len(rows),
        'hot_money_count': len(d.get('hot_money_items') or []),
        'note': '默认只纳入 range_days=1（避免 1 日榜与 3 日榜重复计额）',
    }
    return rows, meta


def fetch_lhb(start_date: str, end_date: str) -> dict:
    """全市场龙虎榜明细。日期 YYYY-MM-DD / YYYYMMDD。

    V5.2.2-fix: 源链东财 → tushare top_list 兜底; 全失败 [⚠️] 信封。
    """
    s, e = _norm_date(start_date), _norm_date(end_date)
    # v6.8.0 (B2.3): 单日查询优先走 Fuyao（T2 周边）；多日区间仍走原链路
    if s == e:
        rows, meta = fetch_lhb_fuyao(s)
        if rows is not None:
            return {'available': True, 'source': 'fuyao',
                    'start_date': str(start_date), 'end_date': str(end_date),
                    'rows': rows, 'meta': meta}
        logger.info('龙虎榜 fuyao 不可用(%s)，回退本地链路', meta.get('reason'))
    errs = []
    try:
        return _fetch_sxsc_lhb(start_date, end_date, s)
    except Exception as exc:  # noqa: BLE001
        errs.append(f'sxsc_tushare: {type(exc).__name__}: {str(exc)[:80]}')
        logger.warning('龙虎榜 sxsc 失败(%s~%s), 试东财: %s', s, e, exc)
    try:
        import akshare as ak
        df = ak.stock_lhb_detail_em(start_date=s, end_date=e)
        rows = normalize_lhb_df(df)
        return {'available': True, 'source': 'akshare.eastmoney',
                'start_date': str(start_date), 'end_date': str(end_date),
                'rows': rows}
    except Exception as exc:  # noqa: BLE001
        errs.append(f'akshare.eastmoney: {type(exc).__name__}: {str(exc)[:80]}')
        logger.warning('龙虎榜东财失败(%s~%s), 试 tushare: %s', s, e, exc)
    try:
        return _fetch_tushare_lhb(start_date, end_date, s)
    except Exception as exc:  # noqa: BLE001
        errs.append(f'tushare: {type(exc).__name__}: {str(exc)[:80]}')
        logger.warning('龙虎榜 tushare 兜底失败(%s~%s): %s', s, e, exc)
    return {'available': False,
            'reason': f'[⚠️ 龙虎榜｜{start_date}~{end_date} 数据获取失败已降级：{"；".join(errs)}]'}
