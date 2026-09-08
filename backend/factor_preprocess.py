#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""quant-calendar: 截面处理三步 (factor_preprocess) — T-5.1.11 / FR-5.1.1.1

对单因子横截面做三步预处理, 顺序固定, 纯函数可复现:
  1. 去极值 (MAD winsorize 或分位数 winsorize)
  2. 中性化 (行业哑变量 + 对数市值 横截面回归取残差)
  3. 标准化 (z-score)

输入约定 (与 strategy_sdk 研究面板一致):
  factor : pd.Series, index = MultiIndex (date, symbol)
  industry : pd.DataFrame, index 同 factor, 每列一个行业哑变量 (0/1)
  market_cap : pd.Series, index 同 factor, 原始市值 (内部取对数)

输出:
  处理后的 factor (同索引), 或 preprocess_with_report 附加统计。
"""
from typing import Optional, Tuple, Dict

import numpy as np
import pandas as pd


# ==================== 1. 去极值 ====================

def mad_winsorize(values: pd.Series, n_sigma: float = 3.0) -> pd.Series:
    """MAD 去极值: 中位数 ± n*1.4826*MAD 之外拉回边界。

    NaN 保留; 常数/退化序列原样返回 (不抛错)。
    """
    vals = values.astype(float)
    med = vals.median()
    mad = (vals - med).abs().median()
    if pd.isna(mad) or mad <= 0:
        return vals.copy()
    scale = 1.4826 * mad
    lo, hi = med - n_sigma * scale, med + n_sigma * scale
    return vals.clip(lower=lo, upper=hi)


def winsorize(values: pd.Series, limits: Tuple[float, float] = (0.01, 0.01)) -> pd.Series:
    """分位数 winsorize: 低于下分位拉到下分位, 高于上分位拉到上分位。

    limits = (lower_pct, upper_pct), 默认 1%/99% 各剪 1% 尾。
    """
    vals = values.astype(float)
    if vals.dropna().empty:
        return vals.copy()
    lo_q = vals.quantile(limits[0])
    hi_q = vals.quantile(1.0 - limits[1])
    return vals.clip(lower=lo_q, upper=hi_q)


# ==================== 2. 标准化 ====================

def zscore(values: pd.Series) -> pd.Series:
    """z-score 标准化: (x - mean) / std。常数序列返回全 0, NaN 保留。"""
    vals = values.astype(float)
    valid = vals.dropna()
    if valid.empty:
        return vals.copy()
    std = valid.std(ddof=0)
    if pd.isna(std) or std <= 0:
        out = vals.copy()
        out[valid.index] = 0.0
        return out
    return (vals - valid.mean()) / std


# ==================== 3. 中性化回归 ====================

def neutralize(factor: pd.Series,
               industry: pd.DataFrame,
               market_cap: Optional[pd.Series] = None,
               log_mcap: bool = True) -> pd.Series:
    """行业 + 市值中性化: 逐期横截面 OLS 回归, 取残差。

    模型: factor ~ 行业哑变量 + log(market_cap)
    行业哑变量全为 1 的一列 (截距项) 会被回归器自动处理; 单行业时仅留截距等价去均值。

    Raises:
      ValueError: factor 与 industry/market_cap 索引不对齐。
    """
    if not isinstance(factor.index, pd.MultiIndex):
        raise ValueError('factor index 必须是 MultiIndex(date, symbol)')
    if not isinstance(industry.index, pd.MultiIndex):
        raise ValueError('industry index 必须是 MultiIndex(date, symbol)')
    if market_cap is not None and not market_cap.index.equals(factor.index):
        raise ValueError('market_cap 索引与 factor 不对齐')
    if not industry.index.equals(factor.index):
        raise ValueError('industry 索引与 factor 不对齐')

    common = factor.index
    f = factor.astype(float)
    ind = industry.astype(float)
    mcap = None
    if market_cap is not None:
        mcap = market_cap.astype(float).copy()
        if log_mcap:
            mcap = mcap.where(mcap <= 0, np.log(np.maximum(mcap, 1e-9)))

    out = pd.Series(np.nan, index=common, dtype=float)
    dates = factor.index.get_level_values(0).unique()
    for d in dates:
        mask = factor.index.get_level_values(0) == d
        f_d = f[mask]
        ind_d = ind.loc[mask] if isinstance(ind.index, pd.MultiIndex) else ind[mask]
        if not isinstance(ind_d, pd.DataFrame):
            ind_d = ind_d.to_frame().T
        # 行对齐
        f_valid = f_d
        x_cols = []
        for col in ind_d.columns:
            x_cols.append(ind_d[col])
        if mcap is not None:
            mc_d = mcap[mask]
            x_cols.append(mc_d)
        # 只保留 f_valid 非 NaN 且所有 x 非 NaN 的行
        valid_mask = f_valid.notna()
        for x in x_cols:
            valid_mask = valid_mask & x.notna()
        y = f_valid[valid_mask]
        if len(y) < 2:
            continue
        X = np.column_stack([np.ones(len(y))] +
                            [x[valid_mask].values for x in x_cols])
        # 去共线: 若 X 秩不足 (单行业+市值也够), 用 pinv 求最小二乘残差
        try:
            beta, _, _, _ = np.linalg.lstsq(X, y.values, rcond=None)
            resid = y.values - X @ beta
        except np.linalg.LinAlgError:
            continue
        out.loc[y.index] = resid
    return out


# ==================== 4. 流水线 ====================

def preprocess_pipeline(factor: pd.Series,
                        industry: pd.DataFrame,
                        market_cap: Optional[pd.Series] = None,
                        do_mad: bool = True,
                        do_winsorize: bool = False,
                        do_neutralize: bool = True,
                        do_zscore: bool = True,
                        mad_sigma: float = 3.0,
                        winsorize_limits: Tuple[float, float] = (0.01, 0.01)) -> pd.Series:
    """三步串联: 去极值 → 中性化 → 标准化。顺序固定, 各步可选。"""
    out = factor.astype(float)
    if do_mad:
        out = out.groupby(level=0, group_keys=False).apply(lambda s: mad_winsorize(s, mad_sigma))
    if do_winsorize:
        out = out.groupby(level=0, group_keys=False).apply(lambda s: winsorize(s, winsorize_limits))
    if do_neutralize:
        out = neutralize(out, industry, market_cap)
    if do_zscore:
        out = out.groupby(level=0, group_keys=False).apply(lambda s: zscore(s))
    return out


# ==================== 5. 报告 ====================

def preprocess_with_report(factor: pd.Series,
                           industry: pd.DataFrame,
                           market_cap: Optional[pd.Series] = None,
                           mad_sigma: float = 3.0) -> Dict:
    """预处理并输出统计报告 (覆盖度/极端值数/均值/标准差)。"""
    n_total = int(factor.notna().sum())
    raw_valid = factor.dropna()
    # 极端值判定 (MAD 3σ 之外)
    med = raw_valid.median() if not raw_valid.empty else float('nan')
    mad = (raw_valid - med).abs().median() if not raw_valid.empty else float('nan')
    n_extreme = 0
    if not pd.isna(mad) and mad > 0:
        scale = 1.4826 * mad
        lo, hi = med - mad_sigma * scale, med + mad_sigma * scale
        n_extreme = int(((raw_valid < lo) | (raw_valid > hi)).sum())

    out = preprocess_pipeline(factor, industry, market_cap,
                              do_mad=True, do_neutralize=True, do_zscore=True,
                              mad_sigma=mad_sigma)
    out_valid = out.dropna()
    return {
        'n': n_total,
        'coverage': float(n_total / len(factor)) if len(factor) else 0.0,
        'n_extreme': n_extreme,
        'factor_mean': float(out_valid.mean()) if not out_valid.empty else None,
        'factor_std': float(out_valid.std(ddof=0)) if not out_valid.empty else None,
        'n_after': int(out_valid.notna().sum()),
    }
