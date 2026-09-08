#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""V5.4.0 (T-5.4.0.2 / FR-5.4.1): 重点跟踪清单计算 (focus_list)

动态清单 = 用户自选(watchlist 表) ∪ 每日新入池(日历视图 status=new)。
纯函数 compute_focus_list + 加载器 load_focus_list; 单一来源, 前端不重复计算。
"""
import logging
from datetime import date as _date

import db

logger = logging.getLogger(__name__)

VALID_SCOPES = ('all', 'watchlist', 'new_pool')


def compute_focus_list(watchlist_codes, new_pool_codes, scope='all'):
    """纯函数: 并集/去重/来源标注。scope: all|watchlist|new_pool。"""
    if scope not in VALID_SCOPES:
        raise ValueError('scope 必须为 all|watchlist|new_pool, 实际 %r' % (scope,))
    wl = set(c for c in (watchlist_codes or []) if c)
    np_ = set(c for c in (new_pool_codes or []) if c)
    codes = set()
    if scope in ('all', 'watchlist'):
        codes |= wl
    if scope in ('all', 'new_pool'):
        codes |= np_
    members = []
    for c in sorted(codes):
        src = []
        if c in wl:
            src.append('watchlist')
        if c in np_:
            src.append('new_pool')
        members.append({'code': c, 'sources': src,
                        'source': 'both' if len(src) == 2 else src[0]})
    return {'scope': scope, 'total': len(members), 'members': members,
            'watchlist_count': len(wl), 'new_pool_count': len(np_)}


def load_watchlist_codes(username):
    """用户自选代码集合 (watchlist 表)。"""
    rows = db.watchlist_get(username) or []
    return [r.get('stock_code') for r in rows if r.get('stock_code')]


def load_all_watchlist_codes():
    """全用户自选代码集合 (匿名视角: 全用户自选 ∪ 新入池)。"""
    rows = db.watchlist_all() or []
    codes = set()
    for r in rows:
        c = r.get('stock_code') if isinstance(r, dict) else r[1] if r else None
        if c:
            codes.add(c)
    return sorted(codes)


def load_new_pool_codes(date):
    """当日新入池 (日历视图 status=new)。数据缺失时返回空集合, 不抛错。"""
    try:
        result = views_aggregator.get_day_view(date)
    except Exception as e:
        logger.warning("[focus] 日视图加载失败 %s: %s", date, e)
        return set()
    codes = set()
    for s in result.get('stocks', []):
        code = s.get('code', '')
        if not code:
            continue
        try:
            if views_aggregator.calculate_status(code, date, 'day') == 'new':
                codes.add(code)
        except Exception:
            continue
    return codes


def load_focus_list(username, date, scope='all'):
    """登录用户视角: 本人自选 ∪ 当日新入池。"""
    wl = load_watchlist_codes(username)
    np_ = load_new_pool_codes(date)
    return compute_focus_list(wl, np_, scope)


def load_focus_list_anonymous(date, scope='all'):
    """匿名视角: 全用户自选 ∪ 当日新入池。"""
    wl = load_all_watchlist_codes()
    np_ = load_new_pool_codes(date)
    return compute_focus_list(wl, np_, scope)


def today_str():
    return _date.today().isoformat()


# 延迟导入避免循环依赖 (views_aggregator 较重)
from views_aggregator import views_aggregator  # noqa: E402
