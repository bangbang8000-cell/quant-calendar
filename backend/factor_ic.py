#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
因子有效性检验 (FR-3.18.7 / T7) — 因子对未来 N 日收益的横截面 IC/ICIR/胜率

- spearman_corr / compute_cross_section_ic: 纯函数可单测
- compute_ic_series: 多日 IC 时序
- evaluate_ic_series: IC 均值/ICIR/胜率 + 有效/失效/不稳定/样本不足 三档标注
- build_factor_ic_report: 多因子多窗口报告
- get_factor_ic_report: 数据获取（沙箱数据不可达时优雅降级为空报告）
"""
import logging
from typing import Dict, List, Optional

logger = logging.getLogger(__name__)

# 三档标注阈值
ICIR_EFFECTIVE = 0.5      # |ICIR| >= 0.5 视为显著
WIN_RATE_MIN = 0.55       # 胜率(IC>0 占比) >= 0.55 视为一致
MIN_IC_SAMPLES = 3        # 最少有效 IC 样本数
TRACK_WINDOWS = ('n5', 'n10', 'n20')


# ==================== Spearman 秩相关 (纯函数) ====================

def _rank(values: List[float]) -> List[float]:
    """平均秩 (并列取平均), 输入已过滤非法值"""
    n = len(values)
    order = sorted(range(n), key=lambda i: values[i])
    ranks = [0.0] * n
    i = 0
    while i < n:
        j = i
        while j + 1 < n and values[order[j + 1]] == values[order[i]]:
            j += 1
        avg = (i + j) / 2.0 + 1
        for k in range(i, j + 1):
            ranks[order[k]] = avg
        i = j + 1
    return ranks


def _pearson(x: List[float], y: List[float]) -> Optional[float]:
    n = len(x)
    if n < 2:
        return None
    mx = sum(x) / n
    my = sum(y) / n
    num = sum((a - mx) * (b - my) for a, b in zip(x, y))
    dx = (sum((a - mx) ** 2 for a in x)) ** 0.5
    dy = (sum((b - my) ** 2 for b in y)) ** 0.5
    if dx == 0 or dy == 0:
        return None
    return num / (dx * dy)


def spearman_corr(x: List[float], y: List[float]) -> Optional[float]:
    """Spearman 秩相关系数 (对秩做 Pearson); 长度 <2 → None"""
    if len(x) != len(y) or len(x) < 2:
        return None
    return _pearson(_rank(x), _rank(y))


# ==================== 横截面 IC ====================

def compute_cross_section_ic(factor_values: List[Optional[float]],
                             future_returns: List[Optional[float]]) -> Optional[float]:
    """单日横截面 IC: 因子值与未来 N 日收益的 Spearman 相关 (FR-3.18.7)

    - None/NaN/非法值剔除; 有效对 <2 → None (无法计算)
    """
    xs, ys = [], []
    for fv, r in zip(factor_values, future_returns):
        try:
            x = float(fv)
            y = float(r)
        except (TypeError, ValueError):
            continue
        if x != x or y != y:  # NaN
            continue
        xs.append(x)
        ys.append(y)
    if len(xs) < 2:
        return None
    return spearman_corr(xs, ys)


def compute_ic_series(panel: List[Dict], window: str = 'n5') -> List[Dict]:
    """对 panel 每个交易日的横截面计算 IC → [{date, ic}]

    panel: [{date, stocks: [{code, factor_value, future_return: {n5/n10/n20}}]}]
    """
    series = []
    for day in panel:
        fv = [s.get('factor_value') for s in day.get('stocks', [])]
        fr = [
            (s.get('future_return') or {}).get(window)
            if isinstance(s.get('future_return'), dict) else s.get('future_return')
            for s in day.get('stocks', [])
        ]
        ic = compute_cross_section_ic(fv, fr)
        series.append({'date': day.get('date'), 'ic': ic})
    return series


# ==================== 三档标注 ====================

def evaluate_ic_series(ics: List[Optional[float]]) -> Dict:
    """由 IC 时序计算 {count, ic_mean, ic_std, icir, win_rate, grade}

    标注 (FR-3.18.7): IC 均值/ICIR/胜率 → 有效/失效/不稳定/样本不足
    """
    valid = [ic for ic in ics if ic is not None]
    n = len(valid)
    if n == 0:
        return {'count': 0, 'ic_mean': None, 'ic_std': None,
                'icir': None, 'win_rate': None, 'grade': '样本不足'}
    mean = sum(valid) / n
    std = (sum((ic - mean) ** 2 for ic in valid) / n) ** 0.5 if n > 1 else 0.0
    icir = (mean / std) if (std and std > 0) else None
    win_rate = sum(1 for ic in valid if ic > 0) / n
    if n < MIN_IC_SAMPLES:
        grade = '样本不足'
    elif icir is None:
        grade = '不稳定'
    elif icir >= ICIR_EFFECTIVE and win_rate >= WIN_RATE_MIN:
        grade = '有效'
    elif icir <= -ICIR_EFFECTIVE and win_rate <= (1 - WIN_RATE_MIN):
        grade = '失效'
    else:
        grade = '不稳定'
    return {
        'count': n,
        'ic_mean': round(mean, 2),
        'ic_std': round(std, 2),
        'icir': round(icir, 2) if icir is not None else None,
        'win_rate': round(win_rate, 2),
        'grade': grade,
    }


# ==================== 报告组装 ====================

def build_factor_ic_report(factor_panels: Dict[str, Dict[str, List[Dict]]]) -> Dict:
    """由 {factor_key: {window: [panel]}} 组装报告。

    返回 {factor_key: {window: {count, ic_mean, icir, win_rate, grade}}}。
    """
    report: Dict[str, Dict[str, Dict]] = {}
    for fkey, windows in factor_panels.items():
        report[fkey] = {}
        for wkey, panel in windows.items():
            ics = compute_ic_series(panel, window=wkey)
            report[fkey][wkey] = evaluate_ic_series([x['ic'] for x in ics])
    return report


def get_factor_ic_report() -> Dict:
    """获取因子 IC 报告 (FR-3.18.7)。

    数据获取: 需多股票多日期因子值 + 未来收益 (横截面), 依赖数据源;
    数据不可达 → 返回空报告 {} (优雅降级, 不抛错)。
    """
    try:
        from data_sources import data_source_manager
        # 简化数据获取: 沙箱不可达时返回空; 接入真实横截面数据后填充 factor_panels
        _ = data_source_manager
        # TODO(FR-3.18.7): 接入真实多股票因子值+未来收益横截面数据
        return {}
    except Exception as e:
        logger.warning('因子 IC 报告数据获取失败 (降级): %s', e)
        return {}
