#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""V5.2.0 (T-5.2.06): 交易日历 + 定稿判据

借鉴 vibe-astock trade_calendar:
- 交易日列表默认走 data_source_manager.get_trade_dates(tushare trade_cal)
- 数据源不可用时降级为工作日推断(节假日不精确, 由调用方取数失败自然跳过)
- is_settled: 交易日且已收盘(历史日恒定稿; 今日需收盘后, 借鉴"实时行情不能冒充收盘")
日期统一 'YYYY-MM-DD' 输出(应用惯例), 输入兼容 YYYYMMDD。
"""
import logging
from datetime import datetime, date, timedelta

logger = logging.getLogger(__name__)

# 可注入的交易日来源(测试注入; 默认 data_source_manager.get_trade_dates)
_trade_date_source = None

_FETCH_WINDOW_DAYS = 90  # 前后查询窗口(交易日推导够用)


def set_trade_date_source(fn):
    """注入交易日来源 fn(start, end) -> [YYYYMMDD, ...](测试用)"""
    global _trade_date_source
    _trade_date_source = fn


def _to_ymd(d) -> str:
    """'2026-09-02' / '20260902' → '2026-09-02'"""
    s = str(d).replace('-', '')
    return f"{s[0:4]}-{s[4:6]}-{s[6:8]}" if len(s) == 8 else str(d)


def _to_compact(d) -> str:
    return str(d).replace('-', '')


def _weekday_dates(start: date, end: date) -> list:
    """工作日(周一到周五)降级"""
    out = []
    d = start
    while d <= end:
        if d.weekday() < 5:
            out.append(d.strftime('%Y-%m-%d'))
        d += timedelta(days=1)
    return out


def open_dates_between(start: str, end: str) -> list:
    """[start, end] 开市日列表('YYYY-MM-DD'), 来源失败降级工作日"""
    s_comp, e_comp = _to_compact(start), _to_compact(end)
    if _trade_date_source is not None:
        try:
            raw = _trade_date_source(s_comp, e_comp)
            if raw:
                # 防御性过滤到请求窗口(来源实现可能不遵守区间)
                return sorted(x for x in (_to_ymd(v) for v in raw)
                              if s_comp <= x.replace('-', '') <= e_comp)
        except Exception as e:  # noqa: BLE001
            logger.warning('交易日来源失败, 降级工作日: %s', e)
    s = datetime.strptime(s_comp, '%Y%m%d').date()
    e = datetime.strptime(e_comp, '%Y%m%d').date()
    return _weekday_dates(s, e)


def _window(d: str) -> tuple:
    """查询日期 d 的前后窗口 (start, end)"""
    base = datetime.strptime(_to_compact(d), '%Y%m%d').date()
    return ((base - timedelta(days=_FETCH_WINDOW_DAYS)).strftime('%Y-%m-%d'),
            (base + timedelta(days=_FETCH_WINDOW_DAYS)).strftime('%Y-%m-%d'))


def is_trade_day(d: str) -> bool:
    """是否交易日"""
    d = _to_ymd(d)
    s, e = _window(d)
    return d in set(open_dates_between(s, e))


def prev_trade_date(d: str):
    """前一交易日('YYYY-MM-DD'), 无则 None"""
    d = _to_ymd(d)
    s, e = _window(d)
    dates = open_dates_between(s, e)
    for x in reversed(dates):
        if x < d:
            return x
    return None


def next_trade_date(d: str):
    """次一交易日('YYYY-MM-DD'), 无则 None"""
    d = _to_ymd(d)
    s, e = _window(d)
    dates = open_dates_between(s, e)
    for x in dates:
        if x > d:
            return x
    return None


def last_trade_dates(n: int, end: str = None) -> list:
    """截至 end(默认最近已收盘场次)的最近 n 个交易日, 新→旧"""
    end = end or latest_session()
    s, e = _window(end)
    dates = open_dates_between(s, e)
    prev = [x for x in dates if x <= end]
    return prev[-n:][::-1]


def _market_closed(now: datetime) -> bool:
    """上海时区 15:05 后视为已收盘(给数据源发布留余量)"""
    return now.hour > 15 or (now.hour == 15 and now.minute >= 5)


def latest_session(today: str = None, now: datetime = None) -> str:
    """最近已收盘交易日。

    - 今天是交易日且已收盘 → 今天
    - 否则 → 上一交易日
    """
    now = now or datetime.now()
    today = today or now.strftime('%Y-%m-%d')
    today = _to_ymd(today)
    if is_trade_day(today):
        if _market_closed(now):
            return today
        return prev_trade_date(today) or today
    return prev_trade_date(today) or today


def is_settled(d: str, today: str = None, now: datetime = None) -> bool:
    """该交易日是否已定稿(收盘且数据可落盘)。

    - 非交易日 → False
    - 历史日 → True(恒定稿)
    - 今日 → 需已收盘
    """
    d = _to_ymd(d)
    if not is_trade_day(d):
        return False
    now = now or datetime.now()
    today = _to_ymd(today or now.strftime('%Y-%m-%d'))
    if d < today:
        return True
    return d == today and _market_closed(now)
