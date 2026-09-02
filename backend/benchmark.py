#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""V5.0.2 T-5.0.22: 基准对比 (benchmark.py)

沪深300/中证500/中证1000/自定义基准 + 超额收益 + IR + alpha/beta/跟踪误差。
- BENCHMARKS: 内置指数注册表
- compare_with_benchmark(strat, bench): 纯函数绩效对比 (可注入/测试)
- fetch_benchmark_series(code, start, end, fetcher): 基准日收益序列 (fetcher 可注入)
- attach_benchmark(result, bench_returns, ...): 结果 dict 附加基准对比字段

测试: tests/test_backtest_benchmark.py。
"""
import logging
import math

import numpy as np

logger = logging.getLogger(__name__)

ANNUAL_DAYS = 252

BENCHMARKS = {
    "hs300": {"code": "000300.SH", "label": "沪深300"},
    "zz500": {"code": "000905.SH", "label": "中证500"},
    "zz1000": {"code": "000852.SH", "label": "中证1000"},
}


def benchmark_label(key):
    """基准显示名: 注册表返回 label, 未知按自定义代码原样返回。"""
    b = BENCHMARKS.get(key)
    return b["label"] if b else str(key)


def _resolve_code(code_or_key):
    b = BENCHMARKS.get(code_or_key)
    return b["code"] if b else code_or_key


def compare_with_benchmark(strat_returns, bench_returns):
    """策略 vs 基准绩效对比 (纯函数, 截断到共同长度)。

    返回: {benchmark_total, benchmark_annual, excess_total(复利), excess_annual,
           alpha, beta, tracking_error, information_ratio, correlation}
    """
    if not strat_returns or not bench_returns:
        return {"benchmark_total": None, "benchmark_annual": None,
                "excess_total": None, "excess_annual": None,
                "alpha": None, "beta": None, "tracking_error": None,
                "information_ratio": None, "correlation": None}
    n = min(len(strat_returns), len(bench_returns))
    s = np.asarray(list(strat_returns)[:n], dtype=float)
    b = np.asarray(list(bench_returns)[:n], dtype=float)
    excess = s - b
    cum_s = float(np.prod(1.0 + s) - 1.0)
    cum_b = float(np.prod(1.0 + b) - 1.0)
    excess_total = ((1.0 + cum_s) / (1.0 + cum_b) - 1.0
                    if (1.0 + cum_b) != 0 else None)
    excess_annual = float(excess.mean() * ANNUAL_DAYS)
    te = float(excess.std(ddof=0) * math.sqrt(ANNUAL_DAYS)) if n > 1 else 0.0
    ir = (float(excess.mean() * ANNUAL_DAYS) / te) if te > 1e-12 else (
        0.0 if float(np.abs(excess).max()) < 1e-12 else None)
    var_b = float(b.var(ddof=0))
    beta = float(np.cov(s, b)[0, 1] / var_b) if var_b > 1e-12 else None
    alpha = (float(s.mean()) - (beta * float(b.mean())) if beta is not None
             else None)
    if alpha is not None:
        alpha = alpha * ANNUAL_DAYS
    corr = (float(np.corrcoef(s, b)[0, 1]) if n > 1 else None)
    return {"benchmark_total": cum_b, "benchmark_annual": cum_b,
            "excess_total": excess_total, "excess_annual": excess_annual,
            "alpha": alpha, "beta": beta,
            "tracking_error": te, "information_ratio": ir,
            "correlation": corr}


def fetch_benchmark_series(code_or_key, start_date, end_date, fetcher=None):
    """基准日收益序列。fetcher(code, start, end) -> list[float] 可注入 (测试/离线)。

    默认经 DataPortal 取指数 K 线计算日收益 (升序日期的 pct_change)。
    """
    code = _resolve_code(code_or_key)
    if fetcher is not None:
        return list(fetcher(code, start_date, end_date))
    try:
        from data_portal2 import get_portal
        rows = get_portal().fetch("kline", code, period="daily",
                                  adjust="qfq", limit=500)
        rows = sorted(rows, key=lambda r: r.get("trade_date", ""))
        closes = [r["close"] for r in rows if r.get("close") is not None]
        rets = []
        prev = None
        for c in closes:
            if prev is not None and prev > 0:
                rets.append(float(c) / float(prev) - 1.0)
            prev = c
        return rets
    except Exception as e:
        logger.warning("基准序列获取失败 %s: %s", code, e)
        return []


def attach_benchmark(result, bench_returns, strategy_returns=None,
                     benchmark_name="自定义基准"):
    """结果 dict 附加基准对比字段 (benchmark_returns 为空则跳过)。"""
    if not bench_returns:
        return result
    if strategy_returns is None:
        eq = result.get("equity_curve")
        if not eq:
            return result
        strategy_returns = ([eq[0] - 1.0] +
                            [eq[i] / eq[i - 1] - 1.0 for i in range(1, len(eq))])
    cmp = compare_with_benchmark(strategy_returns, bench_returns)
    cmp["benchmark_name"] = benchmark_name
    result["benchmark"] = cmp
    return result


# ==================== 分年度报告 (T-5.1.26 / FR-5.1.2.6) ====================

def yearly_returns(dates, daily_returns) -> Dict[str, float]:
    """分年度复利收益: {year: 累计收益}。

    dates: 与 daily_returns 等长的日期列表 (YYYY-MM-DD 或 YYYYMMDD)。
    """
    yearly: Dict[str, float] = {}
    for d, r in zip(dates, daily_returns):
        try:
            year = str(d)[:4]
        except (TypeError, ValueError):
            continue
        if r is None:
            continue
        yearly.setdefault(year, 1.0)
        yearly[year] *= (1 + float(r))
    return {y: v - 1.0 for y, v in yearly.items()}


def yearly_excess(dates, strategy_returns, bench_returns) -> Dict[str, float]:
    """分年度超额收益: 策略年收益 - 基准年收益。"""
    s = yearly_returns(dates, strategy_returns)
    b = yearly_returns(dates, bench_returns)
    years = sorted(set(s) | set(b))
    return {y: s.get(y, 0.0) - b.get(y, 0.0) for y in years}


def yearly_benchmark_report(dates, strategy_returns, bench_returns,
                            benchmark_name="基准") -> Dict:
    """分年度报告: [{year, strategy, benchmark, excess}] + best/worst 年份。"""
    s = yearly_returns(dates, strategy_returns)
    b = yearly_returns(dates, bench_returns)
    years = sorted(set(s) | set(b))
    rows = []
    for y in years:
        rows.append({
            'year': y,
            'strategy': round(s.get(y, 0.0) * 100, 2),
            'benchmark': round(b.get(y, 0.0) * 100, 2),
            'excess': round(s.get(y, 0.0) - b.get(y, 0.0), 4),
        })
    if not rows:
        return {'years': [], 'best_year': None, 'worst_year': None}
    best = max(rows, key=lambda r: r['excess'])
    worst = min(rows, key=lambda r: r['excess'])
    return {
        'years': rows,
        'best_year': best['year'],
        'worst_year': worst['year'],
        'benchmark_name': benchmark_name,
    }
