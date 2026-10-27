#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""6.1.2 (B5): 数据表新鲜度 — 表级五指标 (纯函数, health_metrics 注入可测)

每表输出: {key, label, source(主源), last_success, rows(尽力), expected_hours, stale}
- source/last_success 取自 data_sources._health 的源级记录 (主源近似)
- rows 经 rows_fn 尽力获取 (无法获取 → None)
"""
from datetime import date, datetime, timedelta
import logging

DEFAULT_EXPECTED_HOURS = 24

logger = logging.getLogger(__name__)

# 6.4.1 (FR-642a, D3): 数据陈旧阈值 — 交易日口径，全系统单一来源。
# 该值可被 data/data_refresh_config.json 的 stale_trading_days 覆盖（默认同值）。
STALE_TRADING_DAYS = 5

# 核心数据表清单 (label / 主源 / 期望刷新间隔小时 / 行数获取函数)
# rows_fn: 无参 callable → int | None; 由调用方注入 (避免模块级 import 副作用)
TABLES = [
    {"key": "strategy_holdings", "label": "策略持仓", "primary_source": "sxsc_tushare", "expected_hours": 24, "rows_fn": None},
    {"key": "zt_pool", "label": "涨停池", "primary_source": "sxsc_tushare", "expected_hours": 24, "rows_fn": None},
    {"key": "dt_pool", "label": "跌停池", "primary_source": "sxsc_tushare", "expected_hours": 24, "rows_fn": None},
    {"key": "zha_ban", "label": "炸板池", "primary_source": "sxsc_tushare", "expected_hours": 24, "rows_fn": None},
    {"key": "lhb", "label": "龙虎榜", "primary_source": "sxsc_tushare", "expected_hours": 24, "rows_fn": None},
    {"key": "sector_flow", "label": "板块资金", "primary_source": "sxsc_tushare", "expected_hours": 8, "rows_fn": None},
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
            # v6.4 (FR-6.4.5): 区分"从未成功采集"与"曾经成功但已过期"
            "never_succeeded": last is None,
            "data_age_hours": age,
            "rows": _safe_rows(rows_fn),
            "expected_hours": t["expected_hours"],
            "stale": stale,
        })
    return out


# ─── 6.4.1 (FR-642): 陈旧判定单一来源 + 决策护栏 ───

def stale_threshold() -> int:
    """当前陈旧阈值（交易日）。配置可覆盖，非法回退 STALE_TRADING_DAYS。"""
    try:
        from data_refresh_config import load_config
        raw = (load_config() or {}).get("stale_trading_days")
        if raw is not None:
            n = int(raw)
            if n > 0:
                return n
    except Exception:
        logger.debug("陈旧阈值配置读取失败, 回退默认值 %s", STALE_TRADING_DAYS, exc_info=True)
    return STALE_TRADING_DAYS


def _parse_date(value):
    if isinstance(value, datetime):
        return value.date()
    if isinstance(value, date):
        return value
    if not isinstance(value, str):
        return None
    v = value.strip()
    for fmt in ("%Y-%m-%d", "%Y%m%d", "%Y/%m/%d"):
        try:
            return datetime.strptime(v, fmt).date()
        except ValueError:
            continue
    return None


def _count_weekdays(start: date, end: date) -> int:
    """(start, end] 之间的工作日数（不含 start、含 end）。"""
    if end <= start:
        return 0
    n = 0
    d = start + timedelta(days=1)
    while d <= end:
        if d.weekday() < 5:
            n += 1
        d += timedelta(days=1)
    return n


def trading_day_lag(latest_date, expected=None, now=None) -> int:
    """数据日期相对期望最新交易日的滞后（交易日数）。无法解析返回 -1。"""
    latest = _parse_date(latest_date)
    if latest is None:
        return -1
    if expected is None:
        try:
            from reliability.freshness import expected_latest_date
            expected = expected_latest_date(now=now)
        except Exception:
            expected = (now or datetime.now()).date()
    exp = _parse_date(expected)
    if exp is None:
        return -1
    return _count_weekdays(latest, exp)


def is_data_stale(latest_date, expected=None, now=None, threshold: int = None) -> bool:
    """滞后超过阈值即陈旧。无数据日期视为陈旧（-1 不参与比较，直接 True）。"""
    lag = trading_day_lag(latest_date, expected=expected, now=now)
    limit = stale_threshold() if threshold is None else int(threshold)
    if lag < 0:
        return True
    return lag > limit


def latest_data_date() -> str | None:
    """全局最新数据日期：优先视图聚合层，回退 data_parser。"""
    try:
        from views_aggregator import views_aggregator as _va
        dates = getattr(_va, "all_dates", None) or []
        if dates:
            return dates[-1]
    except Exception:
        logger.debug("视图聚合层最新日期读取失败, 回退 data_parser", exc_info=True)
    try:
        from data_parser import parser as _dp
        dates = _dp.get_available_dates() or []
        return dates[-1] if dates else None
    except Exception:
        logger.debug("data_parser 最新日期读取失败, 返回 None", exc_info=True)
        return None


def stale_guard(latest_date=None, now=None) -> dict:
    """结论页/导出/AI 共用的陈旧护栏载荷（不阻断，只提示）。

    返回 {latest_date, expected_date, lag_trading_days, threshold, stale, message, annotation}
    - message: 置灰条文案（stale 时非空）
    - annotation: 结果标注短语（导出与 AI 复用）
    """
    now = now or datetime.now()
    latest = latest_date
    if latest is None:
        latest = latest_data_date()
    expected = None
    try:
        from reliability.freshness import expected_latest_date
        expected = expected_latest_date(now=now).strftime("%Y-%m-%d")
    except Exception:
        expected = now.strftime("%Y-%m-%d")
    lag = trading_day_lag(latest, expected=expected, now=now)
    limit = stale_threshold()
    stale = True if lag < 0 else lag > limit
    if latest is None:
        message = "暂无可用数据，无法判断新鲜度"
        annotation = "无可用数据"
    elif stale:
        message = "数据截至 %s，已滞后 %d 个交易日（阈值 %d）" % (latest, max(lag, 0), limit)
        annotation = "输入数据截至 %s，结论仅供参考" % latest
    else:
        message = ""
        annotation = ""
    return {
        "latest_date": latest,
        "expected_date": expected,
        "lag_trading_days": lag,
        "threshold": limit,
        "stale": stale,
        "message": message,
        "annotation": annotation,
        "generated_at": now.strftime("%Y-%m-%d %H:%M:%S"),
    }
