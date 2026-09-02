#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""quant-calendar: 组合构建 (portfolio_builder) — T-5.1.31 / FR-5.1.3.1

由合成因子逐期选 top N 构建组合:
  - select_top_n: 每期按因子值选前 N (NaN 剔除)
  - build_weights: 等权 / 市值加权 (缺失市值等权回退)
  - portfolio_nav: 由持仓权重 + 逐期收益计算组合净值
  - build_portfolio: 综合报告 (权重/净值/总收益)

纯函数可测, 输入为 date×symbol 的因子/收益矩阵。
"""
from typing import Dict, List, Optional

import numpy as np
import pandas as pd


def select_top_n(factor_df: pd.DataFrame, n: int, as_of: str) -> List[str]:
    """某期按因子值选前 N 符号 (降序, NaN 剔除)。"""
    row = factor_df.loc[as_of].dropna()
    if row.empty:
        return []
    return list(row.sort_values(ascending=False).head(n).index)


def build_weights(factor_df: pd.DataFrame, n: int, as_of: str,
                  method: str = 'equal',
                  market_cap: Optional[Dict[str, float]] = None) -> Dict[str, float]:
    """构建某期权重: equal 等权 / mcap 市值加权 (缺失市值等权回退)。"""
    top = select_top_n(factor_df, n, as_of)
    if not top:
        return {}
    if method == 'equal':
        w = 1.0 / len(top)
        return {s: w for s in top}
    if method == 'mcap':
        mcap = market_cap or {}
        # 缺失市值的符号剔除 (无法加权); 全部缺失 → 等权回退
        capped = {s: float(mcap[s]) for s in top if s in mcap and mcap.get(s)}
        if capped:
            total = sum(capped.values())
            return {s: capped[s] / total for s in capped}
        w = 1.0 / len(top)
        return {s: w for s in top}
    raise ValueError('method 必须为 equal 或 mcap, 收到 %r' % method)


def portfolio_nav(weights: Dict[str, float],
                  returns: Dict[str, List[float]]) -> List[float]:
    """由固定权重 + 各符号逐期收益计算组合净值 (期初权重不变, 简单复利)。

    returns: {symbol: [period1_ret, period2_ret, ...]}
    返回净值序列 [nav1, nav2, ...] (每期末)。
    """
    if not weights or not returns:
        return []
    # 取最长收益序列长度
    n_periods = max(len(v) for v in returns.values()) if returns else 0
    navs = []
    equity = 1.0
    for i in range(n_periods):
        period_ret = 0.0
        for sym, w in weights.items():
            if i < len(returns.get(sym, [])):
                period_ret += w * returns[sym][i]
        equity *= (1 + period_ret)
        navs.append(equity)
    return navs


def build_portfolio(factor_df: pd.DataFrame, returns_df: pd.DataFrame,
                    n: int, method: str = 'equal',
                    market_cap: Optional[Dict[str, float]] = None) -> Dict:
    """组合构建报告: {weights, nav, total_return, top, method}。

    用最后一期因子选股构建静态组合, 用收益矩阵回放净值。
    """
    if factor_df.empty or returns_df.empty:
        return {'weights': None, 'nav': [], 'total_return': 0.0,
                'top': [], 'method': method, 'message': '无数据'}
    as_of = factor_df.index[-1]
    weights = build_weights(factor_df, n, as_of, method, market_cap)
    if not weights:
        return {'weights': None, 'nav': [], 'total_return': 0.0,
                'top': [], 'method': method, 'message': '因子值不足'}
    # 用全期收益 (按日期顺序)
    ret_map = {sym: [float(v) for v in returns_df[sym].tolist()]
               for sym in weights if sym in returns_df.columns}
    nav = portfolio_nav(weights, ret_map)
    total_return = (nav[-1] - 1.0) if nav else 0.0
    return {
        'weights': {k: round(v, 4) for k, v in weights.items()},
        'nav': [round(x, 6) for x in nav],
        'total_return': round(total_return, 4),
        'top': list(weights.keys()),
        'method': method,
        'as_of': as_of,
    }


# ─── V5.1.3 T-5.1.35: 容量/流动性提示 (小票成交量 1% 参与度限仓) ───

# 单标的最大成交量参与度 (限仓假设: 日成交额 × 1% 可参与)
PARTICIPATION_RATE = 0.01


def _cap_for_symbol(weight, daily_amount, total_capital):
    """单标的限仓后权重: min(原权重, 日成交额×参与度/总资金)。"""
    if daily_amount is None or daily_amount <= 0:
        return 0.0 if daily_amount == 0 else weight  # 0 成交额 → 0; 缺失 → 保持
    cap = float(daily_amount) * PARTICIPATION_RATE / total_capital if total_capital > 0 else 0.0
    return min(float(weight), cap)


def liquidity_cap_weights(weights: Dict[str, float],
                          daily_amounts: Dict[str, float],
                          total_capital: float) -> Dict[str, float]:
    """按成交量 1% 参与度限仓。

    weights: {symbol: 目标权重}; daily_amounts: {symbol: 日成交额};
    缺失成交额 → 保持原权重 (无法判断则不惩罚); 0 成交额 → 0。
    """
    return {s: _cap_for_symbol(w, daily_amounts.get(s), total_capital)
            for s, w in weights.items()}


def liquidity_report(weights: Dict[str, float],
                     daily_amounts: Dict[str, float],
                     total_capital: float) -> Dict:
    """容量/流动性报告: 限仓后权重 + 受限标的提示列表。"""
    capped = liquidity_cap_weights(weights, daily_amounts, total_capital)
    notes = []
    for s, w in weights.items():
        if s in daily_amounts and daily_amounts.get(s, 0) > 0:
            cap = float(daily_amounts[s]) * PARTICIPATION_RATE / total_capital if total_capital > 0 else 0.0
            if w > cap:
                notes.append('%s 日成交额不足, 1%% 参与度限仓 %.1f%% → %.1f%%'
                             % (s, w * 100, cap * 100))
        elif s in daily_amounts and daily_amounts[s] == 0:
            notes.append('%s 无成交, 无法建仓 (权重归零)' % s)
    return {'weights': capped, 'capped': [s for s in weights if capped[s] < weights[s]],
            'notes': notes, 'participation_rate': PARTICIPATION_RATE}
