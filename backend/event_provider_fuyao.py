#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Fuyao 事件源 provider (v6.9.0 / B3.3, PRD FR-6.9.4)

补齐 `event_alert` 自述的空白（原文：沙箱与多数免费源无稳定公告接口）：
- 个股分时新闻 `/api/news/stock/timeline-list`（按股票，游标 offset=first）
- 市场快讯     `/api/news/flash/list`（全局，按 tag_id + seq 游标）

纪律：
- 事件标题/摘要**原文透出**，不改写；跳转链接只作"原文"标识，不在服务端代理渲染
- 同一事件按 `id` 去重（快讯分页轮询会造成重复）
- 能力关闭/未配置/接口失败 → available=False + reason，绝不伪造事件
"""

import logging
from datetime import datetime, timedelta, timezone

logger = logging.getLogger(__name__)

#: 市场快讯默认栏目（实测可用 tag_id）
DEFAULT_FLASH_TAG = 21103

_MAX_ITEMS = 20


def _cst_date(ms):
    try:
        dt = datetime.fromtimestamp(int(ms) / 1000, tz=timezone(timedelta(hours=8)))
        return dt.strftime('%Y-%m-%d')
    except (TypeError, ValueError, OSError):
        return ''


def _client():
    try:
        from data_sources import data_source_manager
        if not data_source_manager.fuyao_capability_enabled('news'):
            return None, 'capability_disabled'
        client = data_source_manager.fuyao_client()
        if client is None:
            return None, 'not_configured'
        return client, None
    except Exception as e:  # noqa: BLE001
        return None, '%s: %s' % (type(e).__name__, str(e)[:60])


class FuyaoEventProvider:
    """按股票拉取「分时新闻」事件；另提供市场快讯（全局）入口。"""

    name = 'fuyao'

    def __init__(self, max_items=_MAX_ITEMS):
        self.max_items = max_items
        self._seen = set()

    # -- event_alert 协议 -----------------------------------------------------
    @property
    def available(self):
        client, _ = _client()
        return client is not None

    @property
    def reason(self):
        client, why = _client()
        return None if client is not None else why

    def fetch_events(self, code: str) -> list:
        """返回 [{type,title,date,name}]；失败返回 []（由上层标注不可达）。"""
        client, why = _client()
        if client is None:
            logger.debug('fuyao 事件源不可用(%s)', why)
            return []
        thscode = str(code or '').strip()
        if not thscode:
            return []
        if '.' not in thscode and len(thscode) == 6:
            thscode = thscode + ('.SH' if thscode[0] == '6' else '.SZ')
        r = client.get('news.stock-timeline', '/api/news/stock/timeline-list',
                       {'thscode': thscode, 'offset': 'first', 'size': self.max_items})
        if not r.get('ok'):
            logger.info('fuyao 分时新闻未取到 %s: %s', thscode, r.get('reason'))
            return []
        items = (r.get('data') or {}).get('items') or []
        out = []
        for it in items:
            eid = str(it.get('id') or '')
            if not eid or eid in self._seen:
                continue
            self._seen.add(eid)
            out.append({
                'type': 'news',
                'title': it.get('title') or '',
                'date': _cst_date(it.get('publish_time_ms')),
                'name': None,  # 由 event_alert 用 stock_info 补全
                'summary': (it.get('summary') or '')[:200],
                'url': it.get('jump_url') or '',
                'author': it.get('author') or it.get('source') or '',
            })
        return out

    # -- 市场快讯（全局，供事件流页面使用） -------------------------------------
    def fetch_flash(self, tag_id=None, seq='0', limit=_MAX_ITEMS):
        client, why = _client()
        if client is None:
            return {'available': False, 'reason': why}
        r = client.get('news.flash', '/api/news/flash/list',
                       {'tag_id': tag_id or DEFAULT_FLASH_TAG, 'seq': str(seq or '0')})
        if not r.get('ok'):
            return {'available': False, 'reason': r.get('reason') or 'fetch_failed'}
        items = (r.get('data') or {}).get('items') or []
        rows = []
        for it in items[:limit]:
            rows.append({
                'id': str(it.get('id') or ''),
                'type': 'flash',
                'title': it.get('title') or '',
                'date': _cst_date(it.get('create_time_ms')),
                'summary': (it.get('summary') or '')[:200],
                'url': it.get('encoded_url') or '',
                'tags': [t.get('name') for t in (it.get('tags') or []) if isinstance(t, dict)],
            })
        return {
            'available': True, 'source': 'fuyao', 'rows': rows, 'count': len(rows),
            'tag_id': tag_id or DEFAULT_FLASH_TAG,
            'note': '快讯为原文摘要 + 原文跳转；不内嵌正文渲染（PRD D19）',
        }

    def reset_dedupe(self):
        self._seen.clear()


#: 单例，事件源注册用
fuyao_event_provider = FuyaoEventProvider()
