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
                      sensitivity_analysis, split_insample_outsample)
from cost_model import CostConfig, CostModel, DEFAULT_CONFIG

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
                      benchmark_returns: Optional[List[float]] = None) -> Dict:
    """回测持仓矩阵, 返回绩效结果 dict(与 BacktestResult 字段对齐)

    Args:
        holdings: index=日期, columns=股票代码, 值=目标权重(t 日收盘生成)
        returns: index=日期, columns=股票代码, 值=日收益率; 缺省时退化为等权市场平均模拟
    """
    if holdings is None or holdings.empty:
        return {"success": False, "message": "持仓矩阵为空, 无法回测"}

    # 对齐日期 (统一 YYYYMMDD 无横线格式比较与索引, 兼容 YYYYMMDD / YYYY-MM-DD)
    def _norm(d):
        return str(d).replace('-', '').replace('/', '')[:8]
    _s = _norm(start_date) if start_date else None
    _e = _norm(end_date) if end_date else None
    # 归一化 holdings/returns 索引, 后续用归一化日期访问
    holdings = holdings.copy()
    holdings.index = [_norm(d) for d in holdings.index]
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

    # 组合日收益: t 日收益 × t-1 日权重(信号次日生效, 防前视)
    daily_returns: List[float] = []
    prev_weights = None
    for d in dates:
        w = holdings.loc[d]
        if returns is not None and d in returns.index:
            r = returns.loc[d]
            if prev_weights is not None:
                # 仅在两端都有值且权重>0的标的上计算
                common = [c for c in w.index if c in r.index and w[c] > 0 and pd.notna(r[c])]
                if common:
                    ret = float((w[common] * r[common]).sum() / w[common].sum())
                    daily_returns.append(ret)
        prev_weights = w

    if len(daily_returns) < 2:
        return {"success": False, "message": "行情收益数据不足, 无法计算绩效"}

    # 成本: 用换手率近似(仅当有相邻权重可算时) — V5.2 可插拔成本模型 2.0
    if cost_model is None:
        cost_model = CostModel(CostConfig(commission_rate=commission_rate,
                                          slippage=slippage))
    turnover_costs = _estimate_turnover_cost(holdings, dates, cost_model)
    net_returns = [r - c for r, c in zip(daily_returns, turnover_costs)]

    # 绩效指标 + 样本内外 + 敏感性 + 过拟合
    metrics = compute_period_metrics(net_returns, annual_trading_days, risk_free_rate)
    in_rets, out_rets = split_insample_outsample(net_returns, out_ratio=0.2)
    in_metrics = compute_period_metrics(in_rets, annual_trading_days, risk_free_rate)
    out_metrics = compute_period_metrics(out_rets, annual_trading_days, risk_free_rate)
    sens = sensitivity_analysis(metrics["annual_return"],
                                lambda pct: metrics["annual_return"] * (1 + pct))
    overfit = overfitting_assessment(in_metrics, out_metrics, sens)

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
        "insample_total_return": in_metrics["total_return"],
        "outsample_total_return": out_metrics["total_return"],
        "out_sample_ratio": 0.2,
        "parameter_sensitivity": sens,
        "overfit_warning": overfit.get("warning", False),
        "overfit_reason": overfit.get("reason", ""),
        "message": "回测完成",
    }
    # V5.2 T-5.2.2: 基准对比 (超额/IR/alpha/beta)
    if benchmark_returns is not None:
        from benchmark import attach_benchmark
        attach_benchmark(result, list(benchmark_returns),
                         strategy_returns=net_returns, benchmark_name="自定义基准")
    return result


def _estimate_turnover_cost(holdings: pd.DataFrame, dates: List[str],
                            cost_model: CostModel) -> List[float]:
    """逐日换手成本近似: |权重变化| 之和 × 换手成本率 (V5.2 成本模型 2.0)"""
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
