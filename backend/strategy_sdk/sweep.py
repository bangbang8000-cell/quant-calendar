#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
参数网格扫描 (V4.0 M2-1: 策略实验室 — 参数扫描/网格搜索)

对策略参数网格(param_grid)的笛卡尔积逐组: 生成信号 → SDK 回测 → 绩效表
按指定 metric 降序返回, 供"参数假设 → 验证"研究闭环使用。
"""
import itertools
import logging
from typing import Any, Dict, List, Optional

logger = logging.getLogger(__name__)

_DEFAULT_METRIC = "annual_return"


def param_sweep(strategy, param_grid: Dict[str, List[Any]],
                portal, start_date: str, end_date: str,
                metric: str = _DEFAULT_METRIC,
                max_combos: int = 50,
                universe: Optional[List[str]] = None) -> List[Dict[str, Any]]:
    """参数网格扫描: 返回 [{params, total_return, annual_return, max_drawdown,
    sharpe_ratio, win_rate, overfit_warning}, ...] 按 metric 降序。

    - param_grid: {param_key: [候选值, ...]}, 取笛卡尔积(截断 max_combos)
    - 每组: StrategyContext(as_of=end_date) → generate_signals → backtest_holdings(真实收益)
    - 无效组合(参数校验失败/持仓为空/回测失败)跳过
    """
    from strategy_sdk.base import StrategyContext
    from strategy_sdk.backtest import backtest_holdings

    keys = [k for k in param_grid if k in {s.key for s in strategy.param_specs}]
    if not keys:
        return []
    combos = list(itertools.product(*[param_grid[k] for k in keys]))
    combos = combos[:max_combos]
    results: List[Dict[str, Any]] = []
    # 收益面板只取一次(所有组合共用)
    close_panel = None
    try:
        close_panel = portal.get_panel(["close"], start_date, end_date, universe=universe)
    except Exception as e:
        logger.info("扫描收益面板取数失败: %s", e)

    for combo in combos:
        params = dict(zip(keys, combo))
        try:
            validated = strategy.validate_params(params)
        except Exception:
            continue
        try:
            ctx = StrategyContext(portal=portal, params=validated, as_of=end_date)
            holdings = strategy.generate_signals(ctx)
            if holdings is None or holdings.empty:
                continue
            returns = None
            if close_panel is not None and not close_panel.empty and "close" in close_panel.columns:
                try:
                    returns = close_panel["close"].unstack("symbol").sort_index().pct_change()
                except Exception:
                    returns = None
            bt = backtest_holdings(holdings, returns=returns,
                                   start_date=start_date, end_date=end_date)
            if bt.get("success"):
                results.append({
                    "params": validated,
                    "total_return": bt["total_return"],
                    "annual_return": bt["annual_return"],
                    "max_drawdown": bt["max_drawdown"],
                    "sharpe_ratio": bt["sharpe_ratio"],
                    "win_rate": bt.get("win_rate", 0.0),
                    "overfit_warning": bt.get("overfit_warning", False),
                })
        except Exception as e:
            logger.info("参数组合 %s 扫描失败: %s", params, e)
    results.sort(key=lambda r: r.get(metric, -999.0), reverse=True)
    return results
