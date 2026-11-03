#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""异动解读 (v6.9.0 / B3.2b, PRD FR-6.9.3)

Fuyao 能力（T2 周边）：
- 当日异动解读列表  `/api/a-share/special-data/anomaly-analysis-list`（单日可达 461 条 → **必须分页**）
- 按股票查询        `/api/a-share/special-data/anomaly-analysis-stock`

纪律（PRD FR-6.9.3 + 调研 §4.2 禁称清单）：
- `analysis_content` 为同花顺 AI 生成内容，**原文展示，不改写、不删减**
- 必须随内容保留免责声明与来源标注
- 分页与 `total` 必须一致；空列表**可能代表服务降级**，不得断言"期间无异动"
"""

import logging
from datetime import datetime, timedelta, timezone

logger = logging.getLogger(__name__)

DEFAULT_PAGE_SIZE = 20
_MAX_PAGE_SIZE = 100
_TTL = 600  # 异动解读 10 分钟
_cache = {}

#: 必须在展示层一起呈现的免责声明（上游原文已含，这里做兜底标注）
DISCLAIMER_HINT = '内容由同花顺 AI 基于公开信息生成，仅供参考，不构成投资建议'


def _cst_now():
    return datetime.now(tz=timezone(timedelta(hours=8)))


def iso_date(value):
    if value is None:
        return None
    s = str(value).strip().replace('/', '-')
    if not s:
        return None
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


def reset_cache():
    _cache.clear()


def _cache_get(key):
    item = _cache.get(key)
    if not item:
        return None
    ts, val = item
    if (datetime.now().timestamp() - ts) > _TTL:
        _cache.pop(key, None)
        return None
    return val


def fetch_anomaly_list(page=1, size=DEFAULT_PAGE_SIZE, tag=None):
    """当日异动解读（分页）。tag 可选：按异动标签过滤。"""
    page = max(1, int(page or 1))
    size = max(1, min(int(size or DEFAULT_PAGE_SIZE), _MAX_PAGE_SIZE))
    key = 'list:%s:%s:%s' % (page, size, tag)
    cached = _cache_get(key)
    if cached is not None:
        return cached
    client, why = _client()
    if client is None:
        return {'available': False, 'reason': why}
    params = {'page': page, 'size': size}
    if tag:
        params['tag'] = tag
    r = client.get('special.anomaly-analysis-list',
                   '/api/a-share/special-data/anomaly-analysis-list', params)
    if not r.get('ok'):
        return {'available': False, 'reason': r.get('reason') or 'fetch_failed'}
    d = r.get('data') or {}
    items = d.get('item') or []
    pag = d.get('pagination') or {}
    out = {
        'available': True, 'source': 'fuyao',
        'rows': items, 'count': len(items), 'page': page, 'size': size,
        'total': pag.get('total'),
        'pages': pag.get('pages'),
        'has_next': bool(pag.get('has_next')) if pag.get('has_next') is not None
        else (bool(pag.get('pages')) and page < int(pag['pages'])),
        'note': '每行含 analysis_content（同花顺 AI 生成，原文展示不改写）；空列表可能为上游降级',
        'disclaimer': DISCLAIMER_HINT,
    }
    _cache[key] = (datetime.now().timestamp(), out)
    return out


def fetch_anomaly_by_stock(thscodes):
    """按股票批量查询当日异动原因。thscodes: '600519.SH,000001.SZ' 或列表。"""
    if isinstance(thscodes, (list, tuple)):
        thscodes = ','.join(str(x) for x in thscodes)
    if not thscodes:
        return {'available': False, 'reason': 'no_thscodes'}
    client, why = _client()
    if client is None:
        return {'available': False, 'reason': why}
    r = client.get('special.anomaly-analysis-stock',
                   '/api/a-share/special-data/anomaly-analysis-stock',
                   {'thscodes': thscodes})
    if not r.get('ok'):
        return {'available': False, 'reason': r.get('reason') or 'fetch_failed'}
    items = (r.get('data') or {}).get('item') or []
    empty_codes = [c for c in str(thscodes).split(',')
                   if c and not any(x.get('thscode') == c for x in items)]
    return {
        'available': True, 'source': 'fuyao', 'rows': items, 'count': len(items),
        'empty_codes': empty_codes,
        'note': '无记录仅表示当日未披露异动原因，不代表该股无异常',
        'disclaimer': DISCLAIMER_HINT,
    }
