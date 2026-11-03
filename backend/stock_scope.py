#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""自选股范围异动增强 (v7.2.0 / B6.6, PRD FR-7.2.4)

在原有「公告/财报事件」之外，为自选股补一条**当日异动**通道：
- 数据来源：Fuyao `anomaly-analysis-stock`（批量 ≤100 只）
- 语义：**只做"这只票当天有没有被披露异动原因"的提示**，不做买卖判断
- 与 `event_alert` 解耦（事件源是时间线新闻，这里是异动解释），避免重复告警

纪律：
- 未披露 ≠ 无异常（`empty_codes` 独立返回）
- 能力关闭/未配置 → available=False + reason
"""

import logging

logger = logging.getLogger(__name__)

BATCH = 100


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


def normalize_code(code):
    s = str(code or '').strip()
    if '.' in s:
        return s
    if len(s) != 6 or not s.isdigit():
        return s
    if s.startswith('92') or s[0] in ('4', '8'):
        return s + '.BJ'
    if s[0] == '6':
        return s + '.SH'
    return s + '.SZ'


def scan(watch_codes, client=None):
    """扫描自选股当日异动披露。返回 {available, rows, empty_codes, ...}。"""
    codes = [normalize_code(c) for c in (watch_codes or []) if c]
    if not codes:
        return {'available': False, 'reason': 'no_codes', 'rows': [], 'empty_codes': []}
    if client is None:
        client, why = _client()
        if client is None:
            return {'available': False, 'reason': why, 'rows': [], 'empty_codes': []}
    rows, failed = [], []
    for i in range(0, len(codes), BATCH):
        chunk = codes[i:i + BATCH]
        r = client.get('special.anomaly-analysis-stock',
                       '/api/a-share/special-data/anomaly-analysis-stock',
                       {'thscodes': ','.join(chunk)})
        if not r.get('ok'):
            failed.append({'codes': chunk[:3], 'reason': r.get('reason') or 'fetch_failed'})
            continue
        for item in (r.get('data') or {}).get('item') or []:
            rows.append({
                'thscode': item.get('thscode'),
                'stock_name': item.get('stock_name') or item.get('name'),
                'tag_name': item.get('tag_name'),
                'content': item.get('analysis_content') or '',
                'ts': item.get('timestamp') or item.get('warn_timestamp'),
            })
    seen = {x.get('thscode') for x in rows}
    empty = [c for c in codes if c not in seen]
    return {
        'available': bool(rows) or not failed,
        'source': 'fuyao',
        'requested': len(codes),
        'rows': rows,
        'count': len(rows),
        'empty_codes': empty,
        'failed_batches': failed,
        'note': '未披露异动原因不代表该股无异常；本通道只做提示，不做买卖判断',
        'disclaimer': '内容由同花顺 AI 基于公开信息生成，仅供参考，不构成投资建议',
    }
