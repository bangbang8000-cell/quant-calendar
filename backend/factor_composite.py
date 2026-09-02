#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""quant-calendar: 多因子合成 (factor_composite) — T-5.1.14 / FR-5.1.1.4

三种合成方式 (纯函数, 可单测):
  1. 等权 (equal weight): 各因子 z-score 后算术平均 — 稳健起点
  2. IC 加权: 按 IC 均值权重归一 (负 IC 权重截 0, 保守不反向押注)
  3. ICIR 加权: 按 ICIR (IC均值/IC标准差) 权重 — 考虑稳定性

输入: 因子值为 pd.Series, index = MultiIndex(date, symbol), 已标准化。
合成后必须重新评价 (composite_after_eval 复用 factor_ic.evaluate_ic_series)。
"""
from typing import Dict, List, Optional

import numpy as np
import pandas as pd


def _validate_aligned(*factors: pd.Series) -> None:
    """校验所有因子索引对齐, 不一致抛 ValueError。"""
    if len(factors) < 2:
        return
    ref = factors[0].index
    for f in factors[1:]:
        if not f.index.equals(ref):
            raise ValueError('因子索引未对齐: 合成要求 MultiIndex(date,symbol) 完全一致')


def _normalize_weights(weights: List[float]) -> List[float]:
    """负权重截 0; 全非正 → 等权回退; 归一化到和为 1。"""
    pos = [max(0.0, float(w)) for w in weights]
    total = sum(pos)
    if total <= 0:
        n = len(pos)
        return [1.0 / n] * n if n else []
    return [w / total for w in pos]


def composite_equal_weight(factors: List[pd.Series]) -> pd.Series:
    """等权合成: 各因子算术平均。"""
    if not factors:
        raise ValueError('factors 不能为空')
    _validate_aligned(*factors)
    out = factors[0].astype(float).copy()
    for f in factors[1:]:
        out = out + f.astype(float)
    return out / len(factors)


def composite_ic_weight(factors: List[pd.Series],
                        ics: List[float]) -> pd.Series:
    """IC 加权合成: w_i = max(ic_i, 0) / sum(max(ic, 0)); 全非正 → 等权。"""
    if not factors:
        raise ValueError('factors 不能为空')
    if len(factors) != len(ics):
        raise ValueError('factors 与 ics 长度不一致')
    _validate_aligned(*factors)
    weights = _normalize_weights(ics)
    out = factors[0].astype(float) * weights[0]
    for f, w in zip(factors[1:], weights[1:]):
        out = out + f.astype(float) * w
    return out


def composite_icir_weight(factors: List[pd.Series],
                          icirs: List[float]) -> pd.Series:
    """ICIR 加权合成: w_i = max(icir_i, 0) / sum; 全非正 → 等权。"""
    if not factors:
        raise ValueError('factors 不能为空')
    if len(factors) != len(icirs):
        raise ValueError('factors 与 icirs 长度不一致')
    _validate_aligned(*factors)
    weights = _normalize_weights(icirs)
    out = factors[0].astype(float) * weights[0]
    for f, w in zip(factors[1:], weights[1:]):
        out = out + f.astype(float) * w
    return out


def composite_after_eval(composite: pd.Series,
                         panel: List[Dict],
                         window: str = 'n5') -> Dict:
    """合成后重新评价: 复用 factor_ic 的 IC 序列 + 三档标注。

    panel: 与因子研究一致的结构 [{date, stocks: [{code, factor_value, future_return:{nX}}]}]
           — 这里用合成因子值替换 stocks 的 factor_value 重新算 IC。
    """
    from factor_ic import compute_ic_series, evaluate_ic_series

    # 构造以 composite 为因子值的 panel
    eval_panel = []
    for day in panel:
        stocks = []
        for s in day.get('stocks', []):
            code = s.get('code')
            date = day.get('date')
            try:
                fv = float(composite.loc[(date, code)])
            except (KeyError, TypeError):
                fv = None
            stocks.append({
                'code': code,
                'factor_value': fv,
                'future_return': s.get('future_return'),
            })
        eval_panel.append({'date': day.get('date'), 'stocks': stocks})
    ics = compute_ic_series(eval_panel, window=window)
    return evaluate_ic_series([x['ic'] for x in ics])


def build_composite_report(factors: List[pd.Series],
                           ics: List[float],
                           icirs: List[float]) -> Dict:
    """三种合成方式对比报告 → {equal/ic/icir: {weights, factor}}。

    空输入返回 {}。
    """
    if not factors:
        return {}
    weights_equal = [1.0 / len(factors)] * len(factors)
    weights_ic = _normalize_weights(ics)
    weights_icir = _normalize_weights(icirs)
    return {
        'equal': {'weights': [round(w, 4) for w in weights_equal],
                  'factor': composite_equal_weight(factors)},
        'ic': {'weights': [round(w, 4) for w in weights_ic],
               'factor': composite_ic_weight(factors, ics)},
        'icir': {'weights': [round(w, 4) for w in weights_icir],
                 'factor': composite_icir_weight(factors, icirs)},
    }
