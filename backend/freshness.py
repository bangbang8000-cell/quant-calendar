#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""6.1.2 (B5): 数据表新鲜度 — 表级五指标 (纯函数, health_metrics 注入可测)

每表输出: {key, label, source(主源), last_success, rows(尽力), expected_hours, stale}
- source/last_success 取自 data_sources._health 的源级记录 (主源近似)
- rows 经 rows_fn 尽力获取 (无法获取 → None)
"""
from datetime import datetime

DEFAULT_EXPECTED_HOURS = 24

# 核心数据表清单 (label / 主源 / 期望刷新间隔小时 / 行数获取函数)
# rows_fn: 无参 callable → int | None; 由调用方注入 (避免模块级 import 副作用)
TABLES = [
    {"key": "strategy_holdings", "label": "策略持仓", "primary_source": "sxsc-tushare", "expected_hours": 24, "rows_fn": None},
    {"key": "zt_pool", "label": "涨停池", "primary_source": "sxsc-tushare", "expected_hours": 24, "rows_fn": None},
    {"key": "dt_pool", "label": "跌停池", "primary_source": "sxsc-tushare", "expected_hours": 24, "rows_fn": None},
    {"key": "zha_ban", "label": "炸板池", "primary_source": "sxsc-tushare", "expected_hours": 24, "rows_fn": None},
    {"key": "lhb", "label": "龙虎榜", "primary_source": "sxsc-tushare", "expected_hours": 24, "rows_fn": None},
    {"key": "sector_flow", "label": "板块资金", "primary_source": "sxsc-tushare", "expected_hours": 8, "rows_fn": None},
    {"key": "stock_info", "label": "股票信息", "primary_source": "tushare", "expected_hours": 168, "rows_fn": None},
    {"key": "kline", "label": "K线数据", "primary_source": "tushare", "expected_hours": 8, "rows_fn": None},
    {"key": "evaluation_history", "label": "评估历史", "primary_source": "tushare", "expected_hours": 24, "rows_fn": None},
    {"key": "chat_history", "label": "问股历史", "primary_source": "tushare", "expected_hours": 24, "rows_fn": None},
    {"key": "market_review", "label": "每日复盘", "primary_source": "tushare", "expected_hours": 24, "rows_fn": None},
    {"key": "factor_data", "label": "因子数据", "primary_source": "tushare", "expected_hours": 24, "rows_fn": None},
    {"key": "backtest_result", "label": "回测结果", "primary_source": "tushare", "expected_hours": 168, "rows_fn": None},
    {"key": "portfolio", "label": "模拟组合", "primary_source": "tushare", "expected_hours": 168, "rows_fn": None},
    {"key": "watchlist", "label": "自选股", "primary_source": "tushare", "expected_hours": 168, "rows_fn": None},
]


def _age_hours(iso_ts, now=None):
    if not iso_ts:
        return None
    try:
        dt = datetime.fromisoformat(iso_ts)
    except (TypeError, ValueError):
        return None
    now = now or datetime.now()
    return round((now - dt).total_seconds() / 3600.0, 1)


def _safe_rows(rows_fn):
    if rows_fn is None:
        return None
    try:
        v = rows_fn()
        return int(v) if v is not None else None
    except Exception:
        return None


def build_freshness(health_metrics, now=None, rows_overrides=None):
    """表级新鲜度清单。health_metrics: data_sources._health.get_health_metrics() 输出。
    rows_overrides: {key: rows_fn} 覆盖 TABLES 中的 rows_fn (便于注入)。"""
    by_source = {m.get("name"): m for m in (health_metrics or [])}
    overrides = rows_overrides or {}
    out = []
    for t in TABLES:
        src = by_source.get(t["primary_source"]) or {}
        last = src.get("last_success")
        age = _age_hours(last, now)
        stale = age is None or age > t["expected_hours"]
        rows_fn = overrides.get(t["key"], t.get("rows_fn"))
        out.append({
            "key": t["key"],
            "label": t["label"],
            "source": t["primary_source"],
            "last_success": last,
            "data_age_hours": age,
            "rows": _safe_rows(rows_fn),
            "expected_hours": t["expected_hours"],
            "stale": stale,
        })
    return out
