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


def load_new_pool_codes(date, agg=None):
    """当日新入池 (日历视图 status=new)。数据缺失时返回空集合, 不抛错。

    V5.4.3: agg 可注入 (测试/复用), 缺省用全局 views_aggregator 单例。
    """
    _agg = agg if agg is not None else views_aggregator
    try:
        result = _agg.get_day_view(date)
    except Exception as e:
        logger.warning("[focus] 日视图加载失败 %s: %s", date, e)
        return set()
    codes = set()
    for s in result.get('stocks', []):
        code = s.get('code', '')
        if not code:
            continue
        try:
            if _agg.calculate_status(code, date, 'day') == 'new':
                codes.add(code)
        except Exception:
            continue
    return codes


# ─── V5.4.3 (FR-5.4.3): 评估范围"新入池基准日"解析 ──────────────────
#
# 背景 (2026-09-10 线上实测): 当日持仓矩阵由 20:00 策略任务生成, 在此之前当日
# daily_data 与上一交易日相同 (继承日) → load_new_pool_codes(当日) 恒为空集 →
# 盘前 09:00 评估只算了自选, 完全漏掉"昨晚 20:00 算好的新入池"。
#
# 规范:
#   - after_close (20:00): 新入池基准 = 当日 (当日矩阵已生成时); 未就绪回退最近已完成日
#   - pre_open / intraday_*: 新入池基准 = date 之前最近一个"已生成矩阵"的交易日
#     (= 前一交易日 20:00 算好的新入池)
# 解析在评估执行时进行 (动态范围), 不做快照缓存。

def is_pool_ready(date, agg=None):
    """指定交易日的持仓矩阵是否"已生成" (非继承日且当日有持仓)。

    继承日 = daily_data[date] 与上一交易日完全相同 → 新入池/出池恒为 0。
    数据缺失 / 未知日期 → False (保守)。
    """
    _agg = agg if agg is not None else views_aggregator
    try:
        dates = list(getattr(_agg, 'all_dates', None) or [])
        if date not in dates:
            return False
        if not (_agg.daily_data.get(date) or []):
            return False
        return not _agg.is_inherited_day(date)
    except Exception:
        return False


def resolve_base_date(date, session, agg=None):
    """解析评估所用"新入池"基准日。返回 (base_date, reason)。

    reason: today (盘后当日矩阵已就绪) | last_completed (回退最近已完成日) | none (无数据)
    """
    _agg = agg if agg is not None else views_aggregator
    if session == 'after_close' and is_pool_ready(date, agg=_agg):
        return date, 'today'
    try:
        dates = list(getattr(_agg, 'all_dates', None) or [])
    except Exception:
        dates = []
    try:
        idx = dates.index(date)
    except ValueError:
        idx = len(dates)
    for j in range(idx - 1, -1, -1):
        d = dates[j]
        if is_pool_ready(d, agg=_agg):
            return d, 'last_completed'
    return date, 'none'


def load_focus_list_for_session(username, date, session, scope='all', agg=None,
                                watchlist_fn=None):
    """评估用清单 (V5.4.3): 自选 ∪ 基准日新入池, 基准日按时点动态解析。

    与 load_focus_list 的差异: 新入池取自"最近一次已完成生成的池"
    (盘前 = 前一交易日 20:00 算好的; 盘后 = 当天), 而非 date 当日。
    结果额外带 base_date / base_reason 供落库与前端提示。
    """
    _agg = agg if agg is not None else views_aggregator
    base, reason = resolve_base_date(date, session, agg=_agg)
    if watchlist_fn is not None:
        wl = list(watchlist_fn() or [])
    elif username:
        wl = load_watchlist_codes(username)
    else:
        wl = load_all_watchlist_codes()
    np_ = load_new_pool_codes(base, agg=_agg)
    result = _enrich_member_names(compute_focus_list(wl, np_, scope))
    result['base_date'] = base
    result['base_reason'] = reason
    return result


def load_focus_list(username, date, scope='all'):
    """登录用户视角: 本人自选 ∪ 当日新入池 (成员补真实中文名)。"""
    wl = load_watchlist_codes(username)
    np_ = load_new_pool_codes(date)
    return _enrich_member_names(compute_focus_list(wl, np_, scope))


def load_focus_list_anonymous(date, scope='all'):
    """匿名视角: 全用户自选 ∪ 当日新入池 (成员补真实中文名)。"""
    wl = load_all_watchlist_codes()
    np_ = load_new_pool_codes(date)
    return _enrich_member_names(compute_focus_list(wl, np_, scope))


def _enrich_member_names(result):
    """V5.4.1 (fix): 给清单成员补真实中文名 (stock_info 单例, 缺失回退代码)。

    用户反馈: 重点跟踪今日概览只有股票代码无中文名 — 根因是
    compute_focus_list 的 member 无 name 字段, 导致评估落库 stock_name 回退为代码。
    在此 (加载器层) 补名, 保持 compute_focus_list 纯函数不变。
    """
    for m in result.get('members', []):
        code = m.get('code', '')
        m['name'] = stock_manager.get_name(code) if code else ''
    return result


def today_str():
    return _date.today().isoformat()


# 延迟导入避免循环依赖 (views_aggregator 较重)
from views_aggregator import views_aggregator  # noqa: E402
from stock_info import stock_manager  # noqa: E402  (V5.4.1: 成员中文名来源)
