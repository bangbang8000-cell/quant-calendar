#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
盘中增强：事件提醒（离线日线级）— FR-3.17.7 离线部分

事件类型：业绩预告 / 解禁 / 分红 / 龙虎榜 / 两融异动。
沙箱与多数免费源无稳定公告接口，设计为可扩展 provider 机制：
- EVENT_PROVIDERS: 事件源列表，每个 provider 提供 fetch_events(code) 接口
  （name / available / reason / fetch_events）
- 默认 provider 返回空并标记不可达（available=False），未来接入真实源
  只需调用 register_event_provider() 追加 provider
- 数据不可达优雅降级：events 为空 + note 注明哪些源不可达，不报错
"""
import logging
from typing import Dict, List, Optional

logger = logging.getLogger(__name__)

# 事件类型（展示分组用）
EVENT_TYPES = ['业绩预告', '解禁', '分红', '龙虎榜', '两融异动']


class _UnavailableEventProvider:
    """默认事件源占位：标记不可达，返回空事件列表"""
    name = 'default'
    available = False
    reason = '事件数据源未接入（沙箱/免费源无稳定公告接口）'

    def fetch_events(self, code: str) -> list:
        return []


EVENT_PROVIDERS: List[object] = [_UnavailableEventProvider()]


def register_event_provider(provider) -> None:
    """注册事件源 provider（扩展点：未来接入真实公告接口）

    provider 需提供:
    - name: 源标识
    - available: 是否可达（布尔）
    - reason: 不可达原因（可选）
    - fetch_events(code) -> [{'type','title','date','name'}, ...]
    """
    if provider not in EVENT_PROVIDERS:
        EVENT_PROVIDERS.append(provider)
        logger.info('注册事件源: %s', getattr(provider, 'name', provider))


def _stock_name(code: str, name: str = '') -> str:
    """股票中文名（事件自带名称优先，否则回退 stock_info）"""
    if name:
        return str(name)
    try:
        from stock_info import stock_manager
        n = stock_manager.get_name(code)
        return n if n and n != code else code
    except Exception:
        return code


def build_events(stock_codes: List[str], today: Optional[str] = None) -> dict:
    """对给定代码（自选/持仓）检查事件

    Returns:
        {events: [{code,name,type,title,date,source}], note}
        - 所有源不可达: events 空 + note 注明不可达
        - 部分源不可达: 返回可达源事件 + note 注明不可达源
    """
    codes = list(dict.fromkeys(c for c in (stock_codes or []) if c))
    events: List[dict] = []
    unavailable: List[str] = []
    for code in codes:
        for provider in EVENT_PROVIDERS:
            name = getattr(provider, 'name', str(provider))
            if not getattr(provider, 'available', True):
                unavailable.append(name)
                continue
            try:
                found = provider.fetch_events(code) or []
            except Exception as e:
                logger.warning('事件源 %s 拉取失败 %s: %s', name, code, e)
                unavailable.append(name)
                continue
            for ev in found:
                if isinstance(ev, dict) and ev.get('type'):
                    events.append({
                        'code': code,
                        'name': _stock_name(code, ev.get('name')),
                        'type': ev.get('type'),
                        'title': ev.get('title', ''),
                        'date': ev.get('date') or (today or ''),
                        'source': name,
                    })

    note = None
    unavailable_names = sorted(set(unavailable))
    if unavailable_names:
        reasons = [
            f"{p.name}（{getattr(p, 'reason', p.name)}）"
            for p in EVENT_PROVIDERS if p.name in unavailable_names
        ]
        prefix = '部分事件源暂不可达' if events else '事件数据源暂不可达'
        note = prefix + '：' + '；'.join(reasons)
    elif not events:
        note = '近期无事件'
    return {'events': events, 'note': note}


def _watchlist_from_json(username: str) -> List[dict]:
    """从 JSON 文件读取自选（SQLite 不可用时的回退）"""
    try:
        import json
        import os
        from paths import DATA_DIR
        path = os.path.join(DATA_DIR, 'users', username, 'watchlist.json')
        if os.path.exists(path):
            with open(path, 'r', encoding='utf-8') as f:
                data = json.load(f)
            return [
                {'code': s.get('code'), 'name': s.get('name') or s.get('code')}
                for s in data.get('stocks', []) if s.get('code')
            ]
    except Exception as e:
        logger.warning('watchlist JSON 读取失败 %s: %s', username, e)
    return []


def get_alertable_codes(username: str, scope: str = 'watchlist') -> List[dict]:
    """取用户关注代码（自选 watchlist / 组合持仓 portfolio）

    Returns:
        [{code, name}]；数据读取异常时优雅降级为空列表（不报错）
    """
    codes: List[dict] = []
    try:
        import db
        if scope == 'portfolio':
            positions = db.portfolio_get_positions(username)
            codes = [
                {'code': p.get('stock_code'), 'name': p.get('stock_name') or p.get('stock_code')}
                for p in positions
            ]
        else:
            rows = db.watchlist_get(username) if db.schema_ok() else []
            if rows:
                codes = [
                    {'code': r['stock_code'], 'name': (r.get('name') or '').strip() or r['stock_code']}
                    for r in rows
                ]
            else:
                codes = _watchlist_from_json(username)
    except Exception as e:
        logger.warning('获取用户 %s 关注代码失败: %s', username, e)
        return []
    return codes
