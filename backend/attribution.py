#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""V5.2 T-5.2.5: 绩效归因 (attribution.py)

行业归因 (权重×收益汇总) + Brinson 归因 (配置/选择/交互) + 因子归因 + 瀑布图数据。
- industry_attribution: 逐日 Σ 权重×收益, 按行业分组 (含"未分类")
- brinson_attribution: 超额收益分解 = 配置 + 选择(基准权重) + 交互 (标准 Brinson)
- factor_attribution: 组合收益 ≈ Σ 暴露×因子收益 + 残差 (R² 拟合优度)
- build_waterfall: ECharts 瀑布图 {label, offset, value} 数据

测试: tests/test_attribution.py。前端归因看板消费 (瀑布图)。
"""
import logging

import pandas as pd

logger = logging.getLogger(__name__)


def _align(holdings_df, returns_df):
    stocks = sorted(set(holdings_df.columns) & set(returns_df.columns))
    dates = holdings_df.index.intersection(returns_df.index)
    return (holdings_df.loc[dates, stocks], returns_df.loc[dates, stocks],
            stocks, dates)


def industry_attribution(holdings_df, returns_df, industry_map):
    """行业归因: 每行业 权重(均值) + 贡献(Σ 权重×收益) + 贡献占比。"""
    w, r, stocks, _ = _align(holdings_df, returns_df)
    contrib = (w * r).sum(axis=0)   # 每股总贡献
    weights = w.mean(axis=0)
    total = float(contrib.sum())
    grouped = {}
    for s in stocks:
        ind = industry_map.get(s, "未分类")
        g = grouped.setdefault(ind, {"weight": 0.0, "contribution": 0.0})
        g["weight"] += float(weights[s])
        g["contribution"] += float(contrib[s])
    industries = [{"industry": ind, "weight": d["weight"],
                   "contribution": d["contribution"],
                   "contribution_pct": (d["contribution"] / total) if total != 0 else 0.0}
                  for ind, d in grouped.items()]
    industries.sort(key=lambda x: -x["contribution"])
    return {"industries": industries, "total": total}


def brinson_attribution(holdings_df, bench_holdings_df, returns_df,
                        bench_returns_df):
    """Brinson 归因: 超额 = 配置 + 选择(基准权重) + 交互。"""
    stocks = sorted(set(holdings_df.columns) & set(bench_holdings_df.columns)
                    & set(returns_df.columns) & set(bench_returns_df.columns))
    dates = (holdings_df.index.intersection(bench_holdings_df.index)
             .intersection(returns_df.index).intersection(bench_returns_df.index))
    wp = holdings_df.loc[dates, stocks]
    wb = bench_holdings_df.loc[dates, stocks]
    rp = returns_df.loc[dates, stocks]
    rb = bench_returns_df.loc[dates, stocks]
    alloc = float(((wp - wb) * rb).sum().sum())
    sel = float((wb * (rp - rb)).sum().sum())
    inter = float(((wp - wb) * (rp - rb)).sum().sum())
    return {"allocation": alloc, "selection": sel, "interaction": inter,
            "excess": alloc + sel + inter}


def factor_attribution(portfolio_returns, exposures, factor_returns):
    """因子归因: 组合收益 ≈ Σ 暴露×因子收益 + 残差。

    portfolio_returns: Series[date]; exposures/因子收益: DF[date × factor]
    返回 {factor_contributions: {factor: Σ e×f}, residual_total, explained(R²), r2}
    """
    idx = portfolio_returns.index
    f_ret = factor_returns.reindex(index=idx).fillna(0.0)
    expos = exposures.reindex(index=idx).fillna(0.0)
    contrib = expos * f_ret
    per_factor = {str(k): float(v) for k, v in contrib.sum(axis=0).to_dict().items()}
    port = pd.Series(portfolio_returns, index=idx).fillna(0.0)
    modeled = contrib.sum(axis=1)
    residual = port - modeled
    residual_total = float(residual.sum())
    var_port = float(port.var()) if len(port) > 1 else 0.0
    var_resid = float(residual.var()) if len(residual) > 1 else 0.0
    if var_port > 1e-12:
        explained = 1.0 - var_resid / var_port
    else:
        explained = 1.0 if var_resid < 1e-12 else 0.0
    return {"factor_contributions": per_factor, "residual_total": residual_total,
            "explained": float(explained), "r2": float(explained)}


def build_waterfall(items):
    """瀑布图数据: [{label, offset, value, is_total}] — offset=累计起点 (ECharts 差值堆叠)。"""
    out = []
    running = 0.0
    for it in items:
        label = it.get("label", "")
        value = float(it.get("value", 0.0))
        if it.get("is_total"):
            out.append({"label": label, "offset": 0.0, "value": value, "is_total": True})
        else:
            out.append({"label": label, "offset": running, "value": value, "is_total": False})
            running += value
    return out
