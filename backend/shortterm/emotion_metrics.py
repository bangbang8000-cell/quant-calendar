#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""V5.2.1 (T-5.2.11~13): 派生情绪指标 — 赚钱效应/晋级率/连板溢价/情绪周期

数据诚实性(借鉴 vibe-astock duanxian/emotion_metrics.py):
- **定稿记录优先**: 昨日涨停股当日表现走 `stock_zt_pool_previous_em`(落盘缓存),
  任何历史日可算; 实时行情仅"目标日=最近已收盘场次"时兜底
- **覆盖率闸门**: <50% 整体不可用, <90% 标 partial(prompt/UI 提示样本不全)
- **情绪周期是"十日窗口相对读数"**, 无绝对含义; 炸板率"越高越冷"取反再平均
- 空数据 ≠ 0; 判据 is not None
"""
import logging
from statistics import mean, median

from . import store
from .fetchers import _norm_date, _zero_pad, _to_float, _to_int
from .trade_calendar import prev_trade_date, last_trade_dates

logger = logging.getLogger(__name__)

_COVERAGE_MIN = 0.5      # < 此: 不可用, 如实说取不到
_COVERAGE_PARTIAL = 0.9  # < 此: 可用但标 partial
_PREV_ZT_LOOKBACK = 90   # 昨日涨停池缓存窗口(与 fetchers 一致)


def _coverage(sample: int, expected: int) -> dict:
    """样本覆盖情况。expected=本该拿到的只数。"""
    rate = round(sample / expected, 3) if expected else None
    return {'sample': sample, 'expected_sample': expected,
            'coverage_rate': rate,
            'partial': bool(rate is not None and rate < _COVERAGE_PARTIAL)}


# ---------- 定稿记录: 昨日涨停股当日表现 ----------

# akshare stock_zt_pool_previous_em 列名 → 统一英文键
_PREV_POOL_MAP = {
    '代码': 'ts_code', '名称': 'name', '涨跌幅': 'ret', '最新价': 'close',
    '涨停价': 'limit_price', '成交额': 'amount', '流通市值': 'float_mv',
    '总市值': 'total_mv', '换手率': 'turnover_rate', '振幅': 'amplitude',
    '昨日连板数': 'prev_boards', '涨停统计': 'zt_stat', '所属行业': 'industry',
}


def fetch_prev_pool(date: str) -> dict:
    """昨日涨停股在 `date` 的表现(定稿记录)。缓存于 shortterm_pools(prev_zt)。

    返回 {available, date, rows, source} 或降级信封 {available:False, reason}。
    """
    cached = store.load_pool(date, 'prev_zt')
    if cached is not None:
        return {'available': True, 'date': str(date), 'rows': cached, 'source': 'cached'}
    compact = _norm_date(date)
    try:
        import akshare as ak
        df = ak.stock_zt_pool_previous_em(date=compact)
        rows = []
        for _, r in df.iterrows():
            row = {}
            for zh, en in _PREV_POOL_MAP.items():
                v = r.get(zh)
                if en == 'ts_code':
                    row[en] = _zero_pad(v)
                elif en == 'prev_boards':
                    row[en] = _to_int(v)
                elif en in ('ret', 'close', 'limit_price', 'amount', 'float_mv',
                            'total_mv', 'turnover_rate', 'amplitude'):
                    row[en] = _to_float(v)
                else:
                    row[en] = None if v is None or (isinstance(v, float) and v != v) else v
            rows.append(row)
        store.save_pool(date, 'prev_zt', rows)
        return {'available': True, 'date': str(date), 'rows': rows,
                'source': 'akshare.eastmoney'}
    except Exception as e:  # noqa: BLE001 — 数据源异常统一降级信封
        logger.warning('昨日涨停池抓取失败(%s): %s', date, e)
        return {'available': False,
                'reason': f'[⚠️ 昨日涨停池｜{date} 数据获取失败已降级：{e}]'}


def _stats_from_prev_rows(rows: list, today_codes=None) -> dict:
    """从定稿记录算赚钱效应。样本=记录本身, 无覆盖率问题。

    limit_up_again 用「今日涨停池是否含该股」判定(比阈值糊弄更可靠)。
    """
    vals = [r['ret'] for r in rows if r.get('ret') is not None]
    if not vals:
        return {}
    again = [r for r in rows if r.get('ret') is not None
             and today_codes and r.get('ts_code') in today_codes]
    return {
        'available': True, 'sample': len(vals), 'coverage': len(vals),
        'coverage_rate': 1.0, 'partial': False,
        'avg': round(mean(vals), 2), 'median': round(median(vals), 2),
        'positive_rate': round(sum(1 for v in vals if v > 0) / len(vals), 3),
        'limit_up_again_rate': round(len(again) / len(vals), 3) if today_codes else None,
        'source': 'settled',
    }


def _spot_pct_map() -> dict:
    """全市场实时涨跌幅 {代码: pct_chg}(实时兜底用; 失败抛错交上层降级)"""
    import akshare as ak
    df = ak.stock_zh_a_spot_em()
    out = {}
    for _, r in df.iterrows():
        c = _zero_pad(r.get('代码'))
        p = _to_float(r.get('涨跌幅'))
        if c:
            out[c] = p
    return out


def _money_effect_realtime(date, prev) -> dict:
    """实时兜底: 仅"目标日=最近已收盘场次"可用(实时不冒充定稿)"""
    from .trade_calendar import is_settled, latest_session
    if not (str(date) == latest_session() and is_settled(date)):
        return {'available': False,
                'reason': '非最近已收盘场次, 实时行情不冒充定稿记录'}
    prev_zt = store.load_pool(prev, 'zt')
    if prev_zt is None:
        return {'available': False, 'reason': f'{prev} 涨停池未入库'}
    codes = [r['ts_code'] for r in prev_zt if r.get('ts_code')]
    if not codes:
        return {'available': False, 'reason': f'{prev} 涨停池为空'}
    pct = _spot_pct_map()
    vals = [pct[c] for c in codes if c in pct and pct[c] is not None]
    cov = _coverage(len(vals), len(codes))
    if not vals or (cov['coverage_rate'] is not None and cov['coverage_rate'] < _COVERAGE_MIN):
        return {'available': False,
                'reason': f'实时行情覆盖率不足({len(vals)}/{len(codes)}), 样本不足以代表全体', **cov}
    today_zt = store.load_pool(date, 'zt')
    today_codes = {r['ts_code'] for r in today_zt} if today_zt else None
    return {
        'available': True, 'prev_date': prev, 'date': str(date), 'source': 'realtime', **cov,
        'avg': round(mean(vals), 2), 'median': round(median(vals), 2),
        'positive_rate': round(sum(1 for v in vals if v > 0) / len(vals), 3),
        'limit_up_again_rate': round(
            sum(1 for c in codes if today_codes and c in today_codes) / len(vals), 3)
        if today_codes else None,
    }


def money_effect(date: str, prev: str = None) -> dict:
    """赚钱效应: 昨日涨停股在目标日的表现。定稿记录优先, 实时兜底。"""
    prev = prev or prev_trade_date(date)
    settled = fetch_prev_pool(date)
    if settled.get('available') and settled['rows']:
        today_zt = store.load_pool(date, 'zt')
        today_codes = {r['ts_code'] for r in today_zt} if today_zt else None
        stats = _stats_from_prev_rows(settled['rows'], today_codes)
        if stats:
            return {**stats, 'prev_date': prev, 'date': str(date),
                    'source': 'settled'}
    return _money_effect_realtime(date, prev)


def promotion_rates(date: str, prev: str = None) -> dict:
    """晋级率: 昨日各档连板中今日仍涨停比例(1进2/2进3/3板+)。

    只比对两天池子, 不需实时行情; 任意历史日可算。
    """
    prev = prev or prev_trade_date(date)
    prev_zt = store.load_pool(prev, 'zt')
    today_zt = store.load_pool(date, 'zt')
    if prev_zt is None or today_zt is None:
        return {'available': False, 'reason': f'涨停池缺失({prev} 或 {date})'}
    today_codes = {r['ts_code'] for r in today_zt}
    buckets = {'1进2': [], '2进3': [], '3板以上晋级': []}
    for r in prev_zt:
        b = r.get('boards')
        if b is None:
            continue
        key = '1进2' if b == 1 else ('2进3' if b == 2 else '3板以上晋级')
        buckets[key].append(r['ts_code'] in today_codes)
    tiers = {k: {'base': len(v), 'promoted': sum(v),
                 'rate': round(sum(v) / len(v), 3) if v else None}
             for k, v in buckets.items()}
    tb = sum(t['base'] for t in tiers.values())
    tp = sum(t['promoted'] for t in tiers.values())
    return {
        'available': True, 'prev_date': prev, 'tiers': tiers,
        'overall': {'base': tb, 'promoted': tp,
                    'rate': round(tp / tb, 3) if tb else None},
        'limit_up_count': len(today_codes), 'prev_limit_up_count': len(prev_zt),
    }


def consec_premium(date: str, prev: str = None) -> dict:
    """连板溢价: 昨日 2 板以上个股今日平均涨幅 = 高标承接度。定稿记录优先。"""
    prev = prev or prev_trade_date(date)
    settled = fetch_prev_pool(date)
    if settled.get('available') and settled['rows']:
        rows = [r for r in settled['rows']
                if (r.get('prev_boards') or 0) >= 2 and r.get('ret') is not None]
        if rows:
            return {'available': True, 'prev_date': prev, 'date': str(date),
                    'source': 'settled', 'sample': len(rows),
                    'avg': round(mean([r['ret'] for r in rows]), 2),
                    'median': round(median([r['ret'] for r in rows]), 2)}
        return {'available': True, 'prev_date': prev, 'date': str(date),
                'sample': 0, 'avg': None, 'median': None,
                'note': '昨日无 2 板以上个股'}
    return {'available': False, 'reason': '定稿记录不可用'}


# ---------- 情绪周期 (十日窗口相对读数) ----------

def _day_emotion(date: str):
    """单日情绪分输入: 涨停家数/最高连板/炸板率(从 store 池子算, 不现抓)"""
    zt = store.load_pool(date, 'zt')
    zb = store.load_pool(date, 'zb')
    if zt is None:
        return None
    boards = [r['boards'] for r in zt if r.get('boards') is not None]
    limit_up = len(zt)
    highest = max(boards) if boards else 0
    zt_n = len(zt)
    zb_n = len(zb) if zb is not None else 0
    broken_rate = round(zb_n / (zt_n + zb_n), 3) if (zt_n + zb_n) else None
    return {'date': date, 'limit_up': limit_up, 'highest_consec': highest,
            'broken_rate': broken_rate}


def _minmax(vals) -> list:
    """窗口内归一化到 0~1; 全等时一律 0.5(避免除零, 也避免假装有差异)"""
    lo, hi = min(vals), max(vals)
    return [0.5] * len(vals) if hi == lo else [(v - lo) / (hi - lo) for v in vals]


def _recent_trend(scores, eps: float = 0.03) -> str:
    """最近走向(只看尾部斜率)。与"相对窗口低点位置"是两件事, 分开输出。"""
    if len(scores) < 3:
        return '样本不足'
    d1, d2 = scores[-1] - scores[-2], scores[-2] - scores[-3]
    if d1 > eps and d2 > eps:
        return '连续两日走强'
    if d1 < -eps and d2 < -eps:
        return '连续两日转弱'
    if d1 > eps:
        return '今日走强'
    if d1 < -eps:
        return '今日转弱'
    return '基本走平'


def sentiment_cycle(date: str, lookback: int = 10) -> dict:
    """近 lookback 日情绪分曲线(涨停家数/最高连板/炸板率 minmax 三分取均)。

    炸板率"越高越冷"取反后再平均; 缺失天按窗口均值补。
    口径: 十日窗口相对读数, 无绝对含义。
    """
    dates = last_trade_dates(lookback, date) or [date]
    if len(dates) < 3:
        return {'available': False, 'note': '十日窗口相对读数',
                'reason': f'可用交易日不足 3 天({len(dates)})'}
    series = []
    for d in dates:
        s = _day_emotion(d)
        if s:
            series.append(s)
    if len(series) < 3:
        return {'available': False, 'note': '十日窗口相对读数',
                'reason': f'涨停池可用天数不足({len(series)}/3)'}
    n_zt = _minmax([float(s['limit_up']) for s in series])
    n_hc = _minmax([float(s['highest_consec']) for s in series])
    brs = [s['broken_rate'] for s in series]
    known = [b for b in brs if b is not None]
    fill = sum(known) / len(known) if known else 0.5
    n_br = _minmax([float(b if b is not None else fill) for b in brs])
    for i, s in enumerate(series):
        s['score'] = round((n_zt[i] + n_hc[i] + (1 - n_br[i])) / 3, 3)
    trough = min(series, key=lambda s: s['score'])
    idx = [s['date'] for s in series].index(trough['date'])
    day_n = len(series) - idx
    return {
        'available': True, 'window': len(series),
        'note': '十日窗口相对读数, 无绝对含义',
        'trough_date': trough['date'], 'trough_score': trough['score'],
        'current_score': series[-1]['score'], 'day_n': day_n,
        'rising': series[-1]['score'] > trough['score'],
        'trend': _recent_trend([s['score'] for s in series]),
        'pctile': (round((series[-1]['score'] - trough['score'])
                         / (max(s['score'] for s in series) - trough['score']), 3)
                   if max(s['score'] for s in series) > trough['score'] else None),
        'series': series,
    }


def build_metrics(date: str, prev: str = None) -> dict:
    """派生指标一起算(共用同一前一交易日 + 池子缓存)。"""
    prev = prev or prev_trade_date(date)
    return {
        'date': str(date), 'prev_date': prev,
        'money_effect': money_effect(date, prev),
        'promotion': promotion_rates(date, prev),
        'consec_premium': consec_premium(date, prev),
        'sentiment_cycle': sentiment_cycle(date),
    }
