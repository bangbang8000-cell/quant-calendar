#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""V5.4.0 (T-5.4.0.10 / FR-5.4.9): 重点跟踪股票入池历史回溯 (focus_pool_history)

按日入池口径: 从 views_aggregator 的 daily_data(每交易日池股票集合) 回溯
某股票的历史在池状态 — 首次入池日/最后在池日/入池区间(连续在池日合并,
间断另起新段)/最新交易日是否在池。纯函数 compute_pool_history + 加载器
load_pool_history, 供重点跟踪弹窗展示"自选/入池状态 + 入池时间/出池时间"。
"""
import logging

logger = logging.getLogger(__name__)

# views_aggregator 惰性注入 (模块级引用, 测试可 monkeypatch)
views_aggregator = None


def _iter_dates(all_dates):
    return sorted(all_dates or [])


def _code_of(stock):
    """池记录中的代码字段兼容 (stock/code/ts_code)。"""
    if not isinstance(stock, dict):
        return ''
    return stock.get('stock') or stock.get('code') or stock.get('ts_code') or ''


def compute_pool_history(daily_data, all_dates, stock_code):
    """纯函数: 回溯股票入池历史 (按日入池)。

    daily_data: {date: [stock dicts]}
    all_dates: 交易日列表
    返回 {stock_code, first_appear, last_appear, pooled_days, is_current,
          pool_entries: [{start, end, days}]}
    """
    daily_data = daily_data or {}
    dates = _iter_dates(all_dates)
    pooled_dates = []
    for d in dates:
        stocks = daily_data.get(d) or []
        if any(_code_of(s) == stock_code for s in stocks):
            pooled_dates.append(d)
    pooled_set = set(pooled_dates)
    first = pooled_dates[0] if pooled_dates else None
    last = pooled_dates[-1] if pooled_dates else None
    # 入池区间: 连续在池日合并 (按日期序列连续性), 间断另起新段
    entries = []
    i = 0
    n = len(pooled_dates)
    while i < n:
        start = pooled_dates[i]
        j = i + 1
        # 寻找连续段: 相邻交易日都在池 (按 dates 序列连续性)
        while j < n and pooled_dates[j - 1] in dates and                 _next_of(pooled_dates[j - 1], dates) == pooled_dates[j]:
            j += 1
        entries.append({'start': start, 'end': pooled_dates[j - 1],
                        'days': j - i})
        i = j
    is_current = bool(dates) and bool(last) and last == dates[-1]
    return {
        'stock_code': stock_code,
        'first_appear': first,
        'last_appear': last,
        'pooled_days': len(pooled_dates),
        'is_current': is_current,
        'pool_entries': entries,
        'pooled_dates': pooled_dates,
    }


def _next_of(d, dates):
    """d 在 dates 中的下一个交易日 (无则 None)。"""
    try:
        idx = dates.index(d)
        return dates[idx + 1] if idx + 1 < len(dates) else None
    except ValueError:
        return None


def load_pool_history(stock_code):
    """从 views_aggregator 加载 daily_data/all_dates 后回溯。数据缺失返回空结构。"""
    global views_aggregator
    try:
        if views_aggregator is None:
            from views_aggregator import views_aggregator as _singleton
            views_aggregator = _singleton
    except Exception as e:  # noqa: BLE001
        logger.warning("[focus] views_aggregator 不可用: %s", e)
        return _empty(stock_code)
    try:
        daily_data = getattr(views_aggregator, 'daily_data', {}) or {}
        all_dates = getattr(views_aggregator, 'all_dates', []) or []
        if not all_dates:
            return _empty(stock_code)
        return compute_pool_history(daily_data, all_dates, stock_code)
    except Exception as e:  # noqa: BLE001
        logger.warning("[focus] 入池历史加载失败 %s: %s", stock_code, e)
        return _empty(stock_code)


def _empty(stock_code):
    return {'stock_code': stock_code, 'first_appear': None, 'last_appear': None,
            'pooled_days': 0, 'is_current': False, 'pool_entries': [],
            'pooled_dates': []}
