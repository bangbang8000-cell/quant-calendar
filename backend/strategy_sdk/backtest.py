#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
策略持仓矩阵回测器 (FR: 策略研究 P0)
输入: generate_signals 产出的持仓矩阵 + (可选)个股日收益面板
复用 backtest.py 绩效纯函数: compute_period_metrics / 样本内外 / 敏感性 / 过拟合
防前视: t 日收益 × t-1 日持仓(信号次日生效)
"""
import logging
from typing import Dict, List, Optional

import pandas as pd

from backtest import (compute_period_metrics, overfitting_assessment,
                      sensitivity_analysis, split_insample_outsample,
                      compute_profit_factor, kelly_fraction)
from cost_model import CostConfig, CostModel

logger = logging.getLogger(__name__)


def backtest_holdings(holdings: pd.DataFrame,
                      returns: Optional[pd.DataFrame] = None,
                      start_date: Optional[str] = None,
                      end_date: Optional[str] = None,
                      commission_rate: float = 0.0003,
                      slippage: float = 0.001,
                      annual_trading_days: int = 252,
                      risk_free_rate: float = 0.03,
                      cost_model: Optional[CostModel] = None,
                      benchmark_returns: Optional[List[float]] = None,
                      industry_map: Optional[Dict] = None,
                      timing_exposure: Optional[Dict[str, float]] = None,
                      prices: Optional[Dict[str, Dict[str, dict]]] = None,
                      initial_capital: float = 1_000_000.0) -> Dict:
    """回测持仓矩阵, 返回绩效结果 dict(与 BacktestResult 字段对齐)

    Args:
        holdings: index=日期, columns=股票代码, 值=目标权重(t 日收盘生成)
        returns: index=日期, columns=股票代码, 值=日收益率; 缺省时退化为等权市场平均模拟
        prices: v7.24 FR-2: {code: {date: {open/close/...}}}; 提供时走 T+1 开盘撮合
    """
    if holdings is None or holdings.empty:
        return {"success": False, "message": "持仓矩阵为空, 无法回测"}
    # v7.24 FR-2: 有完整价格面板 → 统一撮合层（T+1 开盘、涨跌停、停牌、整手、成本）
    if prices:
        from backtest_execution import ExecutionConfig, run_execution
        sig = {}
        for d in holdings.index:
            row = holdings.loc[d]
            key = str(d).replace('-', '').replace('/', '')[:8]
            sig[key] = {str(c): float(v) for c, v in row.items() if pd.notna(v) and float(v) > 0}
        exec_res = run_execution(sig, prices, ExecutionConfig(
            initial_capital=float(initial_capital),
            commission_rate=commission_rate, slippage=slippage))
        out = {
            "success": exec_res.success,
            "total_return": exec_res.metrics.get("total_return"),
            "annual_return": exec_res.metrics.get("annual_return"),
            "annual_return_reason": exec_res.metrics.get("annual_return_reason", ""),
            "max_drawdown": exec_res.metrics.get("max_drawdown"),
            "volatility": exec_res.metrics.get("volatility"),
            "sharpe_ratio": exec_res.metrics.get("sharpe_ratio"),
            "win_rate": exec_res.metrics.get("win_rate"),
            "equity_curve": [e["equity"] for e in exec_res.equity_curve],
            "total_days": exec_res.metrics.get("total_days", 0),
            "sample_months": exec_res.metrics.get("sample_months", 0.0),
            "trades": exec_res.trades,
            "trade_history": exec_res.trades,
            "rejected": exec_res.rejected,
            "warnings": exec_res.warnings,
            "engine_version": "7.24.0",
            "adjust_mode": "qfq",
            "execution_mode": "T+1_open",
            "lookahead_policy": "T 日收盘信号 → T+1 开盘成交",
            "message": exec_res.message,
        }
        from credibility_guard import evaluate_backtest_credibility
        out["credibility"] = evaluate_backtest_credibility(out)
        return out

    # 对齐日期 (统一 YYYYMMDD 无横线格式比较与索引, 兼容 YYYYMMDD / YYYY-MM-DD)
    def _norm(d):
        return str(d).replace('-', '').replace('/', '')[:8]
    _s = _norm(start_date) if start_date else None
    _e = _norm(end_date) if end_date else None
    # 归一化 holdings/returns 索引, 后续用归一化日期访问
    holdings = holdings.copy()
    holdings.index = [_norm(d) for d in holdings.index]
    # v7.5 FR-7.5-1: 择时 Overlay 注入仓位系数, 共用单一回测引擎(信号次日生效)
    if timing_exposure:
        from timing.overlay import apply_exposure_series
        holdings = apply_exposure_series(holdings, pd.Series(timing_exposure, dtype=float))
    if returns is not None:
        returns = returns.copy()
        returns.index = [_norm(d) for d in returns.index]
    dates = sorted(holdings.index)
    if _s:
        dates = [d for d in dates if d >= _s]
    if _e:
        dates = [d for d in dates if d <= _e]
    if len(dates) < 2:
        return {"success": False, "message": f"有效回测日期不足 (需>=2, 实际 {len(dates)})"}

    # 成本模型需在循环前就绪: 成本必须与"真正产出收益的交易日"逐日配对 — V5.0.2 成本模型 2.0
    if cost_model is None:
        cost_model = CostModel(CostConfig(commission_rate=commission_rate,
                                          slippage=slippage))
    turnover_costs = _estimate_turnover_cost(holdings, dates, cost_model)

    # 组合日收益: t 日收益 × t-1 日权重(信号次日生效, 防前视)
    # v7.10 修复两处口径缺陷(见 ACCEPTANCE-v7.10.0):
    #   a) 原实现用"当日"权重 w 乘当日收益, 与模块声明的 t-1 口径相反(构成前视),
    #      现改为使用 prev_weights;
    #   b) 原实现把按全量日期算出的成本列表 zip 到已过滤的收益列表, 一旦某日无收益
    #      即整体错位, 现改为逐日按索引配对。
    daily_returns: List[float] = []
    net_costs: List[float] = []
    eff_dates: List[str] = []
    prev_weights = None
    for idx, d in enumerate(dates):
        w = holdings.loc[d]
        if returns is not None and d in returns.index and prev_weights is not None:
            r = returns.loc[d]
            # 仅在 t-1 日权重>0 且 t 日有有效收益的标的上计算
            common = [c for c in prev_weights.index
                      if c in r.index and prev_weights[c] > 0 and pd.notna(r[c])]
            if common:
                ret = float((prev_weights[common] * r[common]).sum()
                            / prev_weights[common].sum())
                daily_returns.append(ret)
                net_costs.append(turnover_costs[idx])
                eff_dates.append(d)
        prev_weights = w

    if len(daily_returns) < 2:
        return {"success": False, "message": "行情收益数据不足, 无法计算绩效"}

    net_returns = [r - c for r, c in zip(daily_returns, net_costs)]

    # 绩效指标 + 样本内外 + 敏感性 + 过拟合
    # v7.24 FR-1: 回测结果年化受 18 个月样本门槛约束
    metrics = compute_period_metrics(net_returns, annual_trading_days, risk_free_rate,
                                     dates=eff_dates, require_min_sample=True)
    in_rets, out_rets = split_insample_outsample(net_returns, out_ratio=0.2)
    in_metrics = compute_period_metrics(in_rets, annual_trading_days, risk_free_rate)
    out_metrics = compute_period_metrics(out_rets, annual_trading_days, risk_free_rate)
    _sens_base = metrics["annual_return"]
    if _sens_base is None:
        _sens_base = metrics["total_return"]
    sens = sensitivity_analysis(_sens_base, lambda pct: _sens_base * (1 + pct))
    overfit = overfitting_assessment(in_metrics, out_metrics, sens)

    # v7.4 FR-7.4-5: 金额口径 profit_factor + Kelly 建议仓位
    pf = compute_profit_factor(net_returns)
    wins = [r for r in net_returns if r > 0]
    losses = [r for r in net_returns if r < 0]
    avg_win = sum(wins) / len(wins) if wins else 0.0
    avg_loss = sum(losses) / len(losses) if losses else 0.0
    kelly = kelly_fraction(metrics.get("win_rate", 0.0), avg_win, avg_loss)

    # 净值曲线(累计净值, 供前端图表) — V4.0 M1-4 回测统一
    equity_curve = []
    _acc = 1.0
    for _r in net_returns:
        _acc *= (1.0 + _r)
        equity_curve.append(round(_acc, 6))

    result = {
        "success": True,
        "total_return": metrics["total_return"],
        "annual_return": metrics["annual_return"],
        "max_drawdown": metrics["max_drawdown"],
        "volatility": metrics["volatility"],
        "sharpe_ratio": metrics["sharpe_ratio"],
        "win_rate": metrics["win_rate"],
        "equity_curve": equity_curve,
        "total_days": len(net_returns),
        "sample_months": metrics.get("sample_months", 0.0),
        "annual_return_reason": metrics.get("annual_return_reason", ""),
        "engine_version": "7.24.0",
        "adjust_mode": "qfq",
        "execution_mode": "close_approx",
        "warnings": ([metrics["annual_return_reason"]]
                     if metrics.get("annual_return") is None else []),
        "insample_total_return": in_metrics["total_return"],
        "outsample_total_return": out_metrics["total_return"],
        "out_sample_ratio": 0.2,
        "parameter_sensitivity": sens,
        "overfit_warning": overfit.get("overfit", False),
        "overfit_reason": overfit.get("reason", ""),
        # v7.4 回测口径校准
        "profit_factor": pf,
        "kelly_suggestion": kelly,
        "lookahead_policy": "T-1 持仓 × t 日收益(信号次日生效)",
        "message": "回测完成",
    }
    # V5.0.2 T-5.0.22: 基准对比 (超额/IR/alpha/beta)
    if benchmark_returns is not None:
        from benchmark import attach_benchmark
        attach_benchmark(result, list(benchmark_returns),
                         strategy_returns=net_returns, benchmark_name="自定义基准")
    # V5.0.2 T-5.0.25: 行业归因 + 瀑布图数据 (industry_map: {代码: 行业})
    if industry_map is not None:
        from attribution import industry_attribution, build_waterfall
        try:
            ind = industry_attribution(holdings, returns, industry_map)
            items = ([{"label": x["industry"], "value": x["contribution"]}
                      for x in ind["industries"]]
                     + [{"label": "组合总收益", "value": ind["total"], "is_total": True}])
            result["attribution"] = {"industries": ind["industries"],
                                     "total": ind["total"],
                                     "waterfall": build_waterfall(items)}
        except Exception as exc:
            logger.warning("行业归因失败: %s", exc)
    from credibility_guard import evaluate_backtest_credibility
    result["credibility"] = evaluate_backtest_credibility(result)
    return result


def _estimate_turnover_cost(holdings: pd.DataFrame, dates: List[str],
                            cost_model: CostModel) -> List[float]:
    """逐日换手成本近似: |权重变化| 之和 × 换手成本率 (V5.0.2 成本模型 2.0)"""
    costs: List[float] = []
    prev = None
    rate = cost_model.turnover_rate()
    for d in dates:
        w = holdings.loc[d]
        if prev is not None:
            change = float((w - prev).abs().sum())
            costs.append(min(change * rate, 0.05))  # 单日成本上限 5%
        else:
            costs.append(0.0)
        prev = w
    return costs
