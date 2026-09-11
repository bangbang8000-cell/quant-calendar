#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""V6.8.1 (PRD F-6.8.1): 行情日线批量缓存 — 按交易日聚合 + 增量拉取 + 血缘失效

目标: 全市场策略执行不再逐股逐日重复请求数据源, 提升执行效率 (12min → ≤3min 的缓存基础)。

设计:
- 缓存键 `kline_daily:{ts_code}` → { "trade_date": row, ... } (复用 cache.py 两级缓存)
- TTL 与交易日历联动: 当日至下一交易日收盘后失效, 避免盘中旧数据污染
- 增量拉取: `incremental_daily(code, needed_dates, fetch_fn)` 仅拉缺失交易日
- 一致性: 写入前经 `lineage.record_batch(kind='kline_daily')` 记录批次;
          读取前以 `cache.is_data_stale('kline_daily')` 校验, 数据刷新后自动失效 (PIT 守护)
- 零外部依赖; 数据源不可达优雅返回已缓存 (降级)

用法 (示例):
    rows = incremental_daily("600519.SH", ["2026-09-10", "2026-09-11"], fetch_fn)
"""
import logging
import time

import cache
import lineage
import stock_calendar

logger = logging.getLogger(__name__)

NS = "kline_daily"
_NS_SEP = ":"
DEFAULT_TTL = 12 * 3600        # 默认 12h (交易日历不可用时兜底)
DAILY_CACHE_TTL = DEFAULT_TTL
_EOF_HOUR = 22                 # 当日收盘数据就绪时间点 (与 20:00 策略任务/22:00 拉取对齐)


def _key(ts_code):
    return NS + _NS_SEP + ts_code


def _next_trade_date_ttl():
    """下一交易日 22:00 距当前的秒数 (交易日历联动 TTL); 日历不可用回退默认。"""
    try:
        from datetime import date, datetime
        today = date.today()
        probe = today
        for _ in range(14):  # 最多探测 14 天
            if stock_calendar.is_trade_day(probe):
                nxt = datetime(probe.year, probe.month, probe.day, _EOF_HOUR)
                now = datetime.now()
                if nxt > now:
                    return max(60, int((nxt - now).total_seconds()))
                # 已过今日 22:00 → 下一个交易日
            probe = date.fromordinal(probe.toordinal() + 1)
    except Exception as e:  # pragma: no cover
        logger.warning("market_cache 交易日历 TTL 计算失败: %s", e)
    return DEFAULT_TTL


def get_daily(ts_code):
    """返回 {trade_date: row} 或 None; 血缘 stale 时自动失效并返回 None。"""
    if cache.is_data_stale(NS):
        cache.invalidate_by_namespace(NS)
        return None
    return cache.get(_key(ts_code))


def set_daily(ts_code, rows_by_date):
    """写入缓存并记录血缘批次 (数据版本联动)。"""
    if not rows_by_date:
        return
    cache.set(_key(ts_code), rows_by_date, ttl=_next_trade_date_ttl())
    cache.mark_data_version(NS)


def _missing_dates(ts_code, needed_dates):
    existing = get_daily(ts_code) or {}
    return [d for d in needed_dates if d not in existing]


def incremental_daily(ts_code, needed_dates, fetch_fn):
    """增量拉取: 仅请求缺失交易日, 合并返回 {trade_date: row}。

    fetch_fn(trade_date) -> list[dict]  (该交易日多行则取合并/首行, 由调用方保证口径)
    数据源不可达时保留已缓存部分 (优雅降级)。
    """
    existing = get_daily(ts_code) or {}
    missing = _missing_dates(ts_code, needed_dates)
    if not missing:
        return existing
    for d in missing:
        try:
            rows = fetch_fn(d) or []
            if rows:
                # 同交易日多行 (可能多个市场) 取合并字典, 首行作代表 + 记录 counts
                existing[d] = rows[0]
        except Exception as e:  # pragma: no cover
            logger.warning("market_cache 拉取 %s %s 失败: %s", ts_code, d, e)
            # 保留已缓存, 不阻塞整体
    if existing:
        set_daily(ts_code, existing)
    return existing


def daily_counts(ts_code):
    """缓存内交易日数量与最新日期 (供健康/指标观测)。"""
    data = get_daily(ts_code) or {}
    if not data:
        return {"count": 0, "latest": None}
    latest = max(data.keys())
    return {"count": len(data), "latest": latest}


# ─── 全市场按交易日批量缓存 (V4.7 批量面板路径) ─────────────
# 缓存键 kline_daily:market_{trade_date} → { ts_code: row } (JSON 可序列化)
def get_market_daily(trade_date):
    """全市场某交易日 K 线行缓存; 血缘 stale 时自动失效返回 None。"""
    if cache.is_data_stale(NS):
        cache.invalidate_by_namespace(NS)
        return None
    return cache.get(_key("market_" + trade_date))


def set_market_daily(trade_date, rows_by_code):
    """写入全市场某交易日缓存并标记血缘版本。"""
    if not rows_by_code:
        return
    cache.set(_key("market_" + trade_date), rows_by_code, ttl=_next_trade_date_ttl())
    cache.mark_data_version(NS)


def clear_ns():
    cache.invalidate_by_namespace(NS)


def next_refresh_in_seconds():
    """距下次自动失效的秒数 (观测/文案用)。"""
    return _next_trade_date_ttl()
