#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""V5.1 T-5.1.2: 数据质量规则引擎 (data_quality.py)

规则集: 缺数 / 异常值 / 复权一致 / 停牌 / 交易日对齐。
- check_series(rows, expected_trade_dates) -> issues (每项: rule/severity/detail/date)
- score_series(...) -> {score 0-100, grade A-D, issues, ...}
- score_symbol(symbol, kind) -> 经 DataPortal 2.0 统一取数后评分 (与 5.0 告警联动)

严重度权重: high=5 / medium=3 / low=1; 质量分 = max(0, 100 - Σ)。
API: GET /api/quality/score (需登录, 入 deny-by-default 门禁)。
"""
import logging

logger = logging.getLogger(__name__)

WEIGHT = {"high": 5, "medium": 3, "low": 1}

_RULES = [
    {"name": "missing", "label": "缺数", "desc": "实际交易日较预期缺失"},
    {"name": "anomaly", "label": "异常值", "desc": "OHLC 关系/负价/极端回报"},
    {"name": "adjustment", "label": "复权一致", "desc": "adj_factor 无公告跳变"},
    {"name": "suspension", "label": "停牌", "desc": "连续零成交/横盘"},
    {"name": "alignment", "label": "交易日对齐", "desc": "日期归属交易日历"},
]


class DataQualityError(Exception):
    pass


def _make(rule, severity, detail, date=None):
    return {"rule": rule, "severity": severity, "detail": detail,
            "date": date or None}


# ─── 规则实现 ───

def _rule_missing(rows, expected):
    if not expected:
        return []
    actual = {str(r.get("trade_date", ""))[:10] for r in rows if r.get("trade_date")}
    missing = [d for d in expected if d not in actual]
    if not missing:
        return []
    ratio = len(missing) / len(expected)
    severity = "high" if ratio > 0.2 else ("medium" if ratio > 0.05 else "low")
    head = ", ".join(sorted(missing)[:3])
    return [_make("missing", severity,
                  f"缺失 {len(missing)}/{len(expected)} 个交易日 (e.g. {head})")]


def _rule_anomaly(rows):
    issues = []
    prev_close = None
    for r in rows:
        d = str(r.get("trade_date", ""))[:10]
        try:
            o, h, lo, c = (float(r["open"]), float(r["high"]),
                          float(r["low"]), float(r["close"]))
        except (KeyError, TypeError, ValueError):
            continue
        if h < lo:
            issues.append(_make("anomaly", "medium", f"high({h}) < low({lo})", d))
        if c < lo or c > h:
            issues.append(_make("anomaly", "medium", f"close({c}) 超出 [low,high]", d))
        if min(o, h, lo, c) < 0:
            issues.append(_make("anomaly", "high", "存在负价格", d))
        if c == 0:
            issues.append(_make("anomaly", "high", "收盘价为 0", d))
        if prev_close and prev_close > 0:
            ret = c / prev_close - 1
            if abs(ret) > 0.2:
                issues.append(_make("anomaly", "medium",
                                    f"单日回报 {ret:+.1%} 超 ±20%", d))
        prev_close = c
    return issues


def _rule_adjustment(rows):
    issues = []
    prev = None
    prev_date = None
    for r in rows:
        if "adj_factor" not in r:
            continue
        try:
            cur = float(r["adj_factor"])
        except (TypeError, ValueError):
            continue
        d = str(r.get("trade_date", ""))[:10]
        if prev is not None and prev > 0:
            ratio = cur / prev
            if abs(ratio - 1) > 0.1:
                issues.append(_make("adjustment", "medium",
                                    f"adj_factor 跳变 {prev:.4f}→{cur:.4f} (ratio {ratio:.2f})",
                                    prev_date))
        prev, prev_date = cur, d
    return issues


def _rule_suspension(rows):
    issues = []
    zero_run = 0
    flat_run = 0
    prev_close = None
    for r in rows:
        d = str(r.get("trade_date", ""))[:10]
        try:
            vol = float(r.get("volume", -1))
            c = float(r["close"])
        except (TypeError, ValueError):
            continue
        if vol == 0:
            zero_run += 1
        else:
            if zero_run >= 3:
                issues.append(_make("suspension", "medium",
                                    f"连续 {zero_run} 日零成交", d))
            zero_run = 0
        if prev_close is not None and c == prev_close:
            flat_run += 1
        else:
            if flat_run >= 5:
                issues.append(_make("suspension", "low", f"连续 {flat_run} 日横盘", d))
            flat_run = 0
        prev_close = c
    if zero_run >= 3:
        issues.append(_make("suspension", "medium", f"尾部连续 {zero_run} 日零成交"))
    if flat_run >= 5:
        issues.append(_make("suspension", "low", f"尾部连续 {flat_run} 日横盘"))
    return issues


def _rule_alignment(rows, expected):
    issues = []
    if expected:
        exp_set = set(expected)
        for r in rows:
            d = str(r.get("trade_date", ""))[:10]
            if d and d not in exp_set:
                issues.append(_make("alignment", "medium", f"{d} 不在预期交易日历中", d))
    else:
        from datetime import date
        for r in rows:
            d = str(r.get("trade_date", ""))[:10]
            if not d:
                continue
            try:
                wd = date.fromisoformat(d).weekday()
            except ValueError:
                continue
            if wd >= 5:
                issues.append(_make("alignment", "medium", f"{d} 为周末(非交易日)", d))
    return issues


# ─── 组合 ───

def check_series(rows, expected_trade_dates=None):
    rows = rows or []
    issues = []
    issues += _rule_missing(rows, expected_trade_dates)
    issues += _rule_anomaly(rows)
    issues += _rule_adjustment(rows)
    issues += _rule_suspension(rows)
    issues += _rule_alignment(rows, expected_trade_dates)
    return issues


def grade_of(score):
    if score >= 90:
        return "A"
    if score >= 75:
        return "B"
    if score >= 60:
        return "C"
    return "D"


def score_series(rows, expected_trade_dates=None):
    issues = check_series(rows, expected_trade_dates)
    if not rows:
        return {"score": 0, "grade": "D", "issues": [], "checked_rows": 0,
                "total_issues": 0}
    penalty = sum(WEIGHT.get(i["severity"], 1) for i in issues)
    score = max(0, 100 - penalty)
    return {"score": score, "grade": grade_of(score), "issues": issues,
            "checked_rows": len(rows), "total_issues": len(issues)}


def score_symbol(symbol, kind="kline", **kw):
    """经 DataPortal 2.0 统一取数 → 质量评分 (取数失败抛 DataQualityError)。"""
    from data_portal2 import get_portal, DataPortalError
    try:
        rows = get_portal().fetch(kind, symbol, **kw)
    except DataPortalError as e:
        raise DataQualityError(f"取数失败无法评分 {symbol}: {e}") from e
    return score_series(rows)
