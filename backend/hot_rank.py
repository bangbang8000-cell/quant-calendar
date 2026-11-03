#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""同花顺热榜 (v6.9.0 / B3.2, PRD FR-6.9.2)

四个 Fuyao 能力（T2 周边）：
- 热股榜        `/api/a-share/special-data/hot-stock-list`（`period ∈ {day, hour}`）
- 历史热股榜    `/api/a-share/special-data/hot-stock-list-history`（按自然日 `yyyy-MM-dd`）
- 个股排名趋势  `/api/a-share/special-data/hot-stock-rank-trend`（`start_date`/`end_date` = `yyyy-MM-dd`）
- 飙升榜        `/api/a-share/special-data/skyrocket-list`

实测易错点（2026-11-03）：
- `period` 只接受 **day / hour**，传 `24h` / `1h` 会被上游判 `1002` 参数错
- 排名趋势的日期必须是 `yyyy-MM-dd`（传 `yyyyMMdd` → `1002`）

口径纪律：
- `hot-stock-list` 默认最多 30 条（上限 100），**Top30 截断不等于全市场排名**
- `rank-trend` 返回的是个股完整排名走势，不做 Top30 截断，两者不可混用
- 日榜与小时榜不可混用（价格/排名口径不同）
"""

import logging
from datetime import datetime, timedelta, timezone

logger = logging.getLogger(__name__)

#: 榜单周期合法枚举（实测：不是 24h/1h）
VALID_PERIODS = ('day', 'hour')

#: 周期中文名（前端展示与口径标注）
PERIOD_LABEL = {'day': '24 小时榜', 'hour': '小时榜'}

_TTL = 300  # 榜单 5 分钟
_cache = {}


def normalize_period(period):
    """校验/归一榜单周期。非法值抛 ValueError（不静默兜底成 day）。"""
    p = str(period or 'day').strip().lower()
    if p in ('24h', 'd', 'daily'):
        raise ValueError("period 只接受 day/hour；24 小时榜请传 day（上游不接受 24h）")
    if p in ('1h', 'h', 'hourly'):
        raise ValueError("period 只接受 day/hour；小时榜请传 hour（上游不接受 1h）")
    if p not in VALID_PERIODS:
        raise ValueError('period 必须是 day 或 hour，收到 %r' % (period,))
    return p


def _cst_now():
    return datetime.now(tz=timezone(timedelta(hours=8)))


def iso_date(value):
    """把 'YYYYMMDD' / 'yyyy-MM-dd' / 毫秒 统一成 'yyyy-MM-dd'（上游要求）。"""
    if value is None:
        return None
    if isinstance(value, (int, float)):
        dt = datetime.fromtimestamp(float(value) / 1000, tz=timezone(timedelta(hours=8)))
        return dt.strftime('%Y-%m-%d')
    s = str(value).strip()
    if not s:
        return None
    s = s.replace('/', '-')
    if len(s) == 8 and s.isdigit():
        return '%s-%s-%s' % (s[0:4], s[4:6], s[6:8])
    return s[:10]


def _client():
    try:
        from data_sources import data_source_manager
        if not data_source_manager.fuyao_capability_enabled('special'):
            return None, 'capability_disabled'
        client = data_source_manager.fuyao_client()
        if client is None:
            return None, 'not_configured'
        return client, None
    except Exception as e:  # noqa: BLE001
        return None, '%s: %s' % (type(e).__name__, str(e)[:60])


def _cache_get(key):
    item = _cache.get(key)
    if not item:
        return None
    ts, val = item
    if (datetime.now().timestamp() - ts) > _TTL:
        _cache.pop(key, None)
        return None
    return val


def _get(cap, path, params, key):
    cached = _cache_get(key)
    if cached is not None:
        return cached
    client, why = _client()
    if client is None:
        return {'available': False, 'reason': why}
    r = client.get(cap, path, params)
    if not r.get('ok'):
        return {'available': False, 'reason': r.get('reason') or 'fetch_failed'}
    out = {'available': True, 'source': 'fuyao', 'data': r.get('data') or {}}
    _cache[key] = (datetime.now().timestamp(), out)
    return out


def reset_cache():
    _cache.clear()


def fetch_hot_list(period='day', limit=30):
    """热股榜。period=day(24h) / hour(小时榜)；limit 1–100。"""
    p = normalize_period(period)
    limit = max(1, min(int(limit or 30), 100))
    out = _get('special.hot-stock-list', '/api/a-share/special-data/hot-stock-list',
               {'period': p, 'limit': limit}, 'hot:%s:%s' % (p, limit))
    if not out.get('available'):
        return out
    items = (out['data'] or {}).get('item') or []
    return {
        'available': True, 'source': 'fuyao', 'period': p,
        'period_label': PERIOD_LABEL[p], 'rows': items, 'count': len(items),
        'truncated': len(items) >= limit,
        'note': '榜单为 Top%d 截断，不等于全市场排名；日榜与小时榜不可混用' % limit,
    }


def fetch_hot_history(date):
    """历史热股榜（按自然日）。"""
    d = iso_date(date)
    out = _get('special.hot-stock-list-history',
               '/api/a-share/special-data/hot-stock-list-history',
               {'date': d} if d else {}, 'hot_hist:%s' % d)
    if not out.get('available'):
        return out
    items = (out['data'] or {}).get('item') or []
    return {'available': True, 'source': 'fuyao', 'date': d, 'rows': items, 'count': len(items)}


def fetch_rank_trend(thscode, start_date, end_date):
    """个股热榜排名趋势（完整走势，不做 Top30 截断）。"""
    s, e = iso_date(start_date), iso_date(end_date)
    if not thscode or not s or not e:
        return {'available': False, 'reason': 'invalid_param'}
    out = _get('special.hot-stock-rank-trend',
               '/api/a-share/special-data/hot-stock-rank-trend',
               {'thscode': thscode, 'start_date': s, 'end_date': e},
               'trend:%s:%s:%s' % (thscode, s, e))
    if not out.get('available'):
        return out
    items = (out['data'] or {}).get('item') or []
    ranks = [it.get('rank') for it in items if it.get('rank') is not None]
    return {
        'available': True, 'source': 'fuyao', 'thscode': thscode,
        'start_date': s, 'end_date': e, 'rows': items, 'count': len(items),
        'best_rank': min(ranks) if ranks else None,
        'worst_rank': max(ranks) if ranks else None,
        'note': '完整排名走势（非 Top30 榜单），名次越小越热',
    }


def fetch_skyrocket(period='day', limit=30):
    """飙升榜。"""
    p = normalize_period(period)
    limit = max(1, min(int(limit or 30), 100))
    out = _get('special.skyrocket-list', '/api/a-share/special-data/skyrocket-list',
               {'period': p, 'limit': limit}, 'sky:%s:%s' % (p, limit))
    if not out.get('available'):
        return out
    items = (out['data'] or {}).get('item') or []
    return {'available': True, 'source': 'fuyao', 'period': p,
            'period_label': PERIOD_LABEL[p], 'rows': items, 'count': len(items)}
