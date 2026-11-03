#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""集合竞价数据 (v6.9.0 / B3.1, PRD FR-6.9.1)

四个 Fuyao 能力（T2 周边）：
- 竞价快照    `/api/a-share/auction/snapshot`
- 竞价机会    `/api/a-share/special-data/auction-stock-opportunities`
- 可选日期    `/api/a-share/special-data/auction-opportunity-dates`
- 短线风向标  `/api/a-share/auction/short-term-benchmark`

纪律：
- 非竞价时段刷新放宽到 30 min，竞价窗口（09:15–09:30）加密到 60 s
- 非竞价时段语义为「非竞价时段」，不是"无数据"（PRD FR-6.9.1 验收）
- 能力关闭 / 未配置 / 接口失败 → available=False + reason，绝不用空表冒充
"""

import logging
from datetime import datetime, timedelta, timezone

logger = logging.getLogger(__name__)

#: 竞价窗口（Asia/Shanghai）：09:15–09:30 与尾盘 14:57–15:00 加密
_FAST_WINDOWS = ((9 * 60 + 15, 9 * 60 + 30), (14 * 60 + 57, 15 * 60))
_FAST_TTL = 60
_SLOW_TTL = 1800

_cache = {}


def _now_cst():
    return datetime.now(tz=timezone(timedelta(hours=8)))


def in_auction_window(now=None):
    now = now or _now_cst()
    hm = now.hour * 60 + now.minute
    return any(a <= hm <= b for a, b in _FAST_WINDOWS)


def ttl_seconds(now=None):
    return _FAST_TTL if in_auction_window(now) else _SLOW_TTL


def _cache_get(key, now=None):
    item = _cache.get(key)
    if not item:
        return None
    ts, val = item
    if (datetime.now().timestamp() - ts) > ttl_seconds(now):
        _cache.pop(key, None)
        return None
    return val


def _cache_set(key, val):
    _cache[key] = (datetime.now().timestamp(), val)


def reset_cache():
    _cache.clear()


def _client():
    """返回 (client, reason)。"""
    try:
        from data_sources import data_source_manager
        if not data_source_manager.fuyao_capability_enabled('special'):
            return None, 'capability_disabled'
        client = data_source_manager.fuyao_client()
        if client is None:
            return None, 'not_configured'
        return client, None
    except Exception as e:  # noqa: BLE001 — 分层模块不可用时不阻断竞价页
        return None, '%s: %s' % (type(e).__name__, str(e)[:60])


def _get(cap, path, params, cache_key):
    cached = _cache_get(cache_key)
    if cached is not None:
        return cached
    client, why = _client()
    if client is None:
        return {'available': False, 'reason': why}
    r = client.get(cap, path, params)
    if not r.get('ok'):
        return {'available': False, 'reason': r.get('reason') or 'fetch_failed',
                'detail': r.get('detail')}
    out = {'available': True, 'data': r.get('data') or {}, 'source': 'fuyao'}
    _cache_set(cache_key, out)
    return out


def fetch_snapshot(thscodes):
    """竞价快照（单/多只）。thscodes: '600519.SH,000001.SZ' 或 code 列表。"""
    if isinstance(thscodes, (list, tuple)):
        thscodes = ','.join(thscodes)
    if not thscodes:
        return {'available': False, 'reason': 'no_thscodes'}
    out = _get('auction.snapshot', '/api/a-share/auction/snapshot',
               {'thscodes': thscodes}, 'snapshot:%s' % thscodes)
    if not out.get('available'):
        return out
    items = (out['data'] or {}).get('item') or []
    return {'available': True, 'source': 'fuyao', 'rows': items, 'count': len(items),
            'auction_window': in_auction_window(),
            'note': None if in_auction_window() else '非竞价时段（展示最近一次竞价结果）'}


def fetch_opportunities(date=None, page=1, size=20):
    params = {'page': max(1, int(page)), 'size': max(1, min(int(size or 20), 100))}
    if date:
        params['date'] = str(date)[:10]
    out = _get('auction.stock-opportunities',
               '/api/a-share/special-data/auction-stock-opportunities',
               params, 'opps:%s:%s:%s' % (params.get('date'), params['page'], params['size']))
    if not out.get('available'):
        return out
    d = out['data'] or {}
    items = d.get('item') or []
    return {'available': True, 'source': 'fuyao', 'rows': items, 'count': len(items),
            'pagination': d.get('pagination') or {},
            'date': params.get('date'),
            'note': '机会为上游筛选结果，含 warn_name（如"竞价砸盘"）与 grade；仅供参考，不构成建议'}


def fetch_dates():
    out = _get('auction.opportunity-dates',
               '/api/a-share/special-data/auction-opportunity-dates', {}, 'dates')
    if not out.get('available'):
        return out
    d = out['data'] or {}
    return {'available': True, 'source': 'fuyao',
            'dates': d.get('dates') or [],
            'latest_date': d.get('latest_date')}


def fetch_benchmark():
    out = _get('auction.short-term-benchmark',
               '/api/a-share/auction/short-term-benchmark', {}, 'benchmark')
    if not out.get('available'):
        return out
    items = (out['data'] or {}).get('item') or []
    return {'available': True, 'source': 'fuyao', 'rows': items, 'count': len(items),
            'note': '短线风向标竞价基准（同花顺口径）'}


def auction_bundle(codes=None, date=None, page=1, size=20):
    """聚合端点：一次返回快照/机会/日期/基准，减少前端请求数。"""
    snap = fetch_snapshot(codes) if codes else {'available': False, 'reason': 'no_codes'}
    opps = fetch_opportunities(date, page, size)
    dates = fetch_dates()
    bench = fetch_benchmark()
    any_ok = any(x.get('available') for x in (snap, opps, dates, bench))
    return {
        'available': any_ok,
        'in_auction_window': in_auction_window(),
        'ttl_seconds': ttl_seconds(),
        'snapshot': snap,
        'opportunities': opps,
        'dates': dates,
        'benchmark': bench,
        'reason': None if any_ok else (snap.get('reason') or opps.get('reason') or 'unavailable'),
    }
