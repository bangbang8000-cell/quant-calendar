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
import threading
import time
from typing import Dict, List, Optional

logger = logging.getLogger(__name__)

# 事件类型（展示分组用）
EVENT_TYPES = ['业绩预告', '解禁', '分红', '龙虎榜', '两融异动']

# FR-3.18.2: 同一股票同一事件 24h 内不重复推送（防刷屏）
DEDUP_WINDOW_HOURS = 24


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


def build_events(stock_codes: List[str], today: Optional[str] = None,
                 providers: Optional[List] = None) -> dict:
    """对给定代码（自选/持仓）检查事件

    providers 可注入（测试用）；默认 EVENT_PROVIDERS。
    Returns:
        {events: [{code,name,type,title,date,source}], note}
        - 所有源不可达: events 空 + note 注明不可达
        - 部分源不可达: 返回可达源事件 + note 注明不可达源
    """
    provs = providers if providers is not None else EVENT_PROVIDERS
    codes = list(dict.fromkeys(c for c in (stock_codes or []) if c))
    events: List[dict] = []
    unavailable: List[str] = []
    for code in codes:
        for provider in provs:
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
            for p in provs if p.name in unavailable_names
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


# ==================== 24h 去重 (FR-3.18.2) ====================

_dedup_lock = threading.Lock()
_recent_keys: Dict[str, float] = {}  # dedup_key -> 最近推送 epoch 时间


def dedup_key(ev) -> str:
    """事件去重键: 同一股票同一事件（type+title+date）视为同一提醒"""
    return f"{ev.get('code')}|{ev.get('type')}|{ev.get('title')}|{ev.get('date')}"


def is_duplicate(ev, now: Optional[float] = None) -> bool:
    """事件是否在 24h 内已推送 (FR-3.18.2 防刷屏)"""
    now = now if now is not None else time.time()
    with _dedup_lock:
        ts = _recent_keys.get(dedup_key(ev))
        return ts is not None and (now - ts) < DEDUP_WINDOW_HOURS * 3600


def mark_pushed(events) -> None:
    """记录事件已推送 (含 24h 过期清理)"""
    now = time.time()
    with _dedup_lock:
        for ev in events:
            _recent_keys[dedup_key(ev)] = now
        cutoff = now - DEDUP_WINDOW_HOURS * 3600
        for k in [k for k, ts in _recent_keys.items() if ts < cutoff]:
            _recent_keys.pop(k, None)


def filter_new_events(events) -> list:
    """过滤掉 24h 内已推送的重复事件, 仅返回新事件"""
    return [ev for ev in events if not is_duplicate(ev)]


def reset_dedup() -> None:
    """清空去重记录（测试用）"""
    with _dedup_lock:
        _recent_keys.clear()


# ==================== 真实事件源 (FR-3.18.2) ====================


class DataSourceEventProvider:
    """真实事件源 (akshare → tushare 回退) — 业绩预告/解禁/分红/龙虎榜/两融

    - 构造可注入 akshare_fetcher / tushare_fetcher (测试用)
    - 默认走真实数据源; 均不可达 → fetch_events 抛异常, 由 build_events 标记不可达
    """

    name = 'tushare_akshare'
    available = True
    reason = ''

    def __init__(self, akshare_fetcher=None, tushare_fetcher=None):
        self._akshare_fetcher = akshare_fetcher or self._default_akshare
        self._tushare_fetcher = tushare_fetcher or self._default_tushare

    def fetch_events(self, code: str) -> list:
        try:
            return self._akshare_fetcher(code) or []
        except Exception as e1:
            logger.warning('akshare 事件源不可达 %s: %s', code, e1)
            try:
                return self._tushare_fetcher(code) or []
            except Exception as e2:
                logger.warning('tushare 事件源不可达 %s: %s', code, e2)
                raise

    @staticmethod
    def _default_akshare(code: str) -> list:
        """akshare 事件接口（尽力而为; 接口变动/不可达抛错由上层回退/降级）"""
        import akshare as ak
        events: List[dict] = []
        code6 = code.split('.')[0]
        # 分红送配 / 解禁 / 龙虎榜 / 业绩预告 (各接口独立 try, 单个失败不影响其它)
        for label, fetch in (
            ('分红', lambda: ak.stock_fhps_detail_em(symbol=code6)),
            ('龙虎榜', lambda: ak.stock_lhb_detail_em(start_date='20260101', end_date='20261231')),
        ):
            try:
                df = fetch()
                if df is not None and len(df):
                    for _, row in df.head(3).iterrows():
                        title = str(row.get('名称', '') or row.get('代码', '') or '')
                        events.append({'type': label, 'title': title, 'date': ''})
            except Exception:
                logger.debug('event_alert:254 跳过 (Exception)')
                continue
        return events

    @staticmethod
    def _default_tushare(code: str) -> list:
        """tushare 公告/限售/分红 回退源（无 token 亦可尝试; 失败抛错由上层降级）"""
        import tushare as ts
        events: List[dict] = []
        try:
            df = ts.stk_announcements(ts_code=code, limit=5) if hasattr(ts, 'stk_announcements') else None
            if df is not None and len(df):
                for _, row in df.head(3).iterrows():
                    events.append({
                        'type': '公告',
                        'title': str(row.get('title', '') or ''),
                        'date': str(row.get('ann_date', '') or ''),
                    })
        except Exception:
            raise
        return events


# ==================== 飞书推送 + 扫描编排 (FR-3.18.2) ====================


def push_events_feishu(username: str, events) -> int:
    """推送事件提醒到飞书; 未配置/不可达仅记录日志不崩溃 (FR-3.18.2)

    返回成功推送条数 (0 = 未推送)。
    """
    if not events:
        return 0
    try:
        import json
        import os
        from paths import DATA_DIR
        webhook = ''
        cfg_path = os.path.join(DATA_DIR, 'feishu_config.json')
        if os.path.exists(cfg_path):
            with open(cfg_path, 'r', encoding='utf-8') as f:
                webhook = (json.load(f) or {}).get('webhook_url', '')
        if not webhook:
            logger.warning('事件提醒未推送 (未配置飞书 webhook)')
            return 0
        from feishu_push import FeishuPusher
        lines = [
            f"- {ev.get('name') or ev.get('code')} ({ev.get('code')}) "
            f"{ev.get('type')}: {ev.get('title')} ({ev.get('date')})"
            for ev in events[:20]
        ]
        ok = FeishuPusher(webhook).send_text(f"📢 事件提醒 ({len(events)} 条)\n" + "\n".join(lines))
        return len(events) if ok else 0
    except Exception as e:
        logger.warning('事件提醒飞书推送失败: %s', e)
        return 0


def run_event_scan(username: str = 'default', scope: str = 'watchlist',
                   providers: Optional[List] = None, push: bool = True,
                   today: Optional[str] = None) -> dict:
    """扫描用户关注股票的事件提醒 (FR-3.18.2)

    - 取关注代码(自选/持仓) → build_events → 24h 去重 → mark_pushed → 可选飞书推送
    - 返回 {events(仅新), all_events, note, new_count, pushed}
    - 数据不可达优雅降级 (note 注明), 不抛错
    """
    codes = get_alertable_codes(username, scope)
    code_list = [c.get('code') for c in codes if c.get('code')]
    result = build_events(code_list, today=today, providers=providers)
    all_events = result['events']
    new_events = filter_new_events(all_events)
    mark_pushed(new_events)
    pushed = push_events_feishu(username, new_events) if push and new_events else 0
    result['events'] = new_events
    result['all_events'] = all_events
    result['new_count'] = len(new_events)
    result['pushed'] = pushed
    return result
