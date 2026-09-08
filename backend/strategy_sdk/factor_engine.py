#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
横截面因子研究引擎 (FR: 策略研究 P1-F8)
流水线(遵循多因子研究标准): 因子计算 → MAD去极值 → 截面z标准化 → 合成打分 → IC评价 → 分层回测
"""
import logging
from typing import Dict, List, Optional

import numpy as np
import pandas as pd

logger = logging.getLogger(__name__)


# ---------- 横截面处理 (每期必做: 去极值 → 标准化) ----------

def mad_winsorize(values: pd.Series, n_sigma: float = 3.0) -> pd.Series:
    """MAD 去极值: 中位数 ± n*1.4826*MAD 之外的极端值拉回边界"""
    vals = values.astype(float)
    med = vals.median()
    mad = (vals - med).abs().median()
    if mad is None or pd.isna(mad) or mad <= 0:
        return vals
    scale = 1.4826 * mad
    lo, hi = med - n_sigma * scale, med + n_sigma * scale
    return vals.clip(lower=lo, upper=hi)


def zscore_normalize(values: pd.Series) -> pd.Series:
    """横截面 z-score 标准化: (x - mean) / std"""
    vals = values.astype(float)
    std = vals.std(ddof=0)
    if std is None or pd.isna(std) or std <= 0:
        return vals * 0.0
    return (vals - vals.mean()) / std


def _winsorize_then_zscore(df: pd.DataFrame) -> pd.DataFrame:
    """对 DataFrame 逐行(逐期截面) 去极值 → 标准化"""
    out = df.copy()
    for date, row in df.iterrows():
        clean = mad_winsorize(row.dropna())
        norm = zscore_normalize(clean)
        out.loc[date, norm.index] = norm
    return out


# ---------- 因子计算 ----------

def compute_cross_section_factors(panel: pd.DataFrame,
                                  specs: List) -> Dict[str, pd.DataFrame]:
    """由面板计算各因子横截面值。

    支持因子类型 (按 FactorSpec.inputs 推导):
      - momentum: 过去 lookback 日收益率, 剔除最近 skip 日 (A股短期反转)
      - valuation: inputs 直接取字段, direction=low 时取负 (低估值更好)
      - turnover: 过去 lookback 日均换手 (volume/float_mv)
      - capital_flow: 过去 lookback 日资金净流入均值
      - raw: 面板字段原样 (按 direction 翻转)
    Returns: {factor_name: DataFrame(rows=date, cols=symbol)}
    """
    results: Dict[str, pd.DataFrame] = {}
    if panel is None or panel.empty:
        return results
    for spec in specs:
        params = spec.params or {}
        direction = params.get('direction', 'high')
        try:
            vals = _compute_single_factor(panel, spec, params)
            if vals is not None and not vals.empty:
                # direction=low: 取负使'低更好'变成'高分更好'
                if direction == 'low':
                    vals = -vals
                results[spec.name] = vals
        except Exception as e:
            logger.warning('因子 %s 计算失败: %s', spec.name, e)
    return results


def _compute_single_factor(panel: pd.DataFrame, spec, params: Dict):
    inputs = spec.inputs or []
    # 动量: 过去 N 日收益率 (剔除最近 skip 日)
    if spec.category == 'technical' and inputs and inputs[0] == 'close':
        lookback = int(params.get('lookback', 20))
        skip = int(params.get('skip', 5))
        close = panel['close'].unstack('symbol')
        return close.pct_change(lookback).shift(skip + 1)
    # 换手: volume / float_mv
    if spec.category == 'sentiment' and 'volume' in inputs:
        lookback = int(params.get('lookback', 20))
        vol = panel['volume'].unstack('symbol')
        if 'float_mv' in panel.columns:
            fmv = panel['float_mv'].unstack('symbol')
            ratio = vol / fmv.replace(0, np.nan)
        else:
            ratio = vol
        return ratio.rolling(lookback).mean()
    # 资金流: 净流入均值
    if spec.category == 'capital' and 'main_net_inflow' in inputs:
        lookback = int(params.get('lookback', 10))
        inflow = panel['main_net_inflow'].unstack('symbol')
        return inflow.rolling(lookback).mean()
    # 面板字段原样 (valuation / raw)
    if inputs:
        field = inputs[0]
        if field in panel.columns:
            return panel[field].unstack('symbol')
    # 退化: 用 close 动量
    if 'close' in panel.columns:
        close = panel['close'].unstack('symbol')
        return close.pct_change(20).shift(6)
    return None


# ---------- 合成打分 ----------

def synthesize_score(factor_values: Dict[str, pd.DataFrame],
                     specs: List) -> pd.DataFrame:
    """等权合成多因子打分: 各因子截面标准化后等权叠加。

    Returns: DataFrame(rows=date, cols=union symbols), 高=更优
    """
    all_symbols = sorted({s for df in factor_values.values() for s in df.columns})
    scores = pd.DataFrame(0.0, index=_union_dates(factor_values), columns=all_symbols)
    n = len(factor_values)
    if n == 0:
        return scores
    for name, df in factor_values.items():
        norm = _winsorize_then_zscore(df)
        for date in scores.index:
            if date in norm.index:
                row = norm.loc[date]
                scores.loc[date, row.dropna().index] += row.dropna().values / n
    return scores


def _union_dates(factor_values: Dict[str, pd.DataFrame]) -> List[str]:
    dates = set()
    for df in factor_values.values():
        dates.update(df.index)
    return sorted(dates)


# ---------- IC 评价 (复用 factor_ic 口径) ----------

def compute_ic_series(factor_df: pd.DataFrame, returns_df: pd.DataFrame) -> Dict[str, list]:
    """逐日横截面 IC: 因子值与次日收益的 Spearman 相关 → {window_label: [ic...]}"""
    from factor_ic import compute_cross_section_ic
    series: Dict[str, list] = {}
    dates = sorted(set(factor_df.index) & set(returns_df.index))
    for d in dates:
        fv = factor_df.loc[d]
        rt = returns_df.loc[d]
        common = [c for c in fv.index if c in rt.index and pd.notna(fv[c]) and pd.notna(rt[c])]
        if len(common) < 2:
            continue
        ic = compute_cross_section_ic([float(fv[c]) for c in common],
                                      [float(rt[c]) for c in common])
        series.setdefault('n1', []).append(ic)
    return series


def evaluate_factor_ic(factor_values: pd.DataFrame, returns: pd.DataFrame,
                       window_labels: Optional[Dict[str, str]] = None) -> Dict:
    """对因子值矩阵做 IC 评价 → {date_label: {ic_series, ic_mean, icir, win_rate, grade}}"""
    from factor_ic import evaluate_ic_series
    window_labels = window_labels or {}
    ic_map = compute_ic_series(factor_values, returns)
    report: Dict = {}
    for wkey, ics in ic_map.items():
        label = window_labels.get(wkey, wkey)
        ev = evaluate_ic_series(ics)
        report[label] = dict(ev)
        report[label]['ic_series'] = ics
    return report


# ---------- 分层回测 ----------

def layer_backtest(factor_df: pd.DataFrame, returns_df: pd.DataFrame,
                   n_layers: int = 5) -> Dict:
    """按因子值分 n 层, 每层等权持有, 计算各层累计收益 → 单调性判断。"""
    dates = sorted(set(factor_df.index) & set(returns_df.index))
    if len(dates) < 2:
        return {'layers': [], 'monotonic': False, 'spread': 0.0}
    layer_returns: List[List[float]] = [[] for _ in range(n_layers)]
    for d in dates:
        fv = factor_df.loc[d].dropna()
        rt = returns_df.loc[d]
        if fv.empty:
            continue
        qcut = pd.qcut(fv.rank(method='first'), n_layers, labels=False)
        for stock, layer in qcut.items():
            if stock in rt.index and pd.notna(rt[stock]):
                layer_returns[int(layer)].append(float(rt[stock]))
    layers = []
    for li, rets in enumerate(layer_returns):
        if not rets:
            layers.append({'layer': li + 1, 'return': 0.0, 'count': 0})
            continue
        eq = 1.0
        for r_ in rets:
            eq *= (1 + r_)
        layers.append({'layer': li + 1, 'return': round((eq - 1) * 100, 2), 'count': len(rets)})
    top = layers[-1]['return']
    bottom = layers[0]['return']
    spread = round(top - bottom, 2)
    monotonic = top > bottom
    return {'layers': layers, 'monotonic': monotonic, 'spread': spread}
