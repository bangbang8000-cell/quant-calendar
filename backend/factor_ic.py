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
            logger.debug('factor_ic:77 跳过 ((TypeError, ValueError))')
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


def _future_return_matrix(close, window: int):
    """由收盘价矩阵生成未来 N 日收益矩阵 (shift(-window) 前瞻, 供 IC 研究用)

    注意: 仅用于因子研究展示 (研究口径), 不回测/实盘决策。
    """
    fwd = close.shift(-window) / close - 1.0
    return fwd


def get_factor_ic_report() -> Dict:
    """获取因子 IC 报告 (FR-3.18.7 / V4.7.4 落地真实数据)。

    数据链路: registry 内置多因子策略 factor_specs → DataPortal.get_panel 全市场面板
              → compute_cross_section_factors 因子矩阵 → close 生成 n5/n10/n20 未来收益
              → 逐日横截面 IC → 三档标注。
    数据不可达 → 返回空报告 {} (优雅降级, 不抛错)。
    """
    try:
        import pandas as pd
        from strategy_sdk.registry import registry
        from strategy_sdk.data_portal import RealDataPortal
        from strategy_sdk.factor_engine import compute_cross_section_factors

        strategy = registry.get('multi_factor')
        specs = list(getattr(strategy, 'factor_specs', []) or [])
        if not specs:
            logger.warning('因子 IC 报告: multi_factor 无 factor_specs, 返回空')
            return {}
        universe = list(getattr(strategy, 'universe', []) or [])
        if not universe:
            logger.warning('因子 IC 报告: multi_factor 无 universe, 返回空')
            return {}
        # 汇总所有因子输入字段 + close (未来收益基准)
        fields = ['close']
        for s in specs:
            for f in (s.inputs or []):
                if f not in fields:
                    fields.append(f)
        # 近 120 个自然日窗口 (足够 n20 未来收益 + 因子 lookback)
        import datetime as _dt
        end = _dt.date.today().isoformat()
        start = (_dt.date.today() - _dt.timedelta(days=120)).isoformat()
        portal = RealDataPortal()
        panel = portal.get_panel(fields, start=start, end=end, universe=universe)
        if panel is None or panel.empty or 'close' not in panel.columns:
            logger.warning('因子 IC 报告: 面板数据为空, 降级空报告')
            return {}
        factor_values = compute_cross_section_factors(panel, specs)
        if not factor_values:
            logger.warning('因子 IC 报告: 因子计算无有效值, 降级空报告')
            return {}
        close = panel['close'].unstack('symbol')
        report: Dict[str, Dict] = {}
        for fkey, fdf in factor_values.items():
            # 因子矩阵全 NaN (数据源字段不可达) → 跳过, 报告不含该因子
            if fdf.empty or int(fdf.notna().sum().sum()) == 0:
                logger.warning('因子 IC 报告: 因子 %s 无有效值, 跳过', fkey)
                continue
            report[fkey] = {}
            for wkey in TRACK_WINDOWS:
                window = int(wkey[1:])
                fwd = _future_return_matrix(close, window)
                ics = []
                for d in sorted(set(fdf.index) & set(fwd.index)):
                    fv = fdf.loc[d]
                    rt = fwd.loc[d]
                    common = [c for c in fv.index if c in rt.index
                              and pd.notna(fv[c]) and pd.notna(rt[c])]
                    if len(common) < 2:
                        continue
                    ic = compute_cross_section_ic(
                        [float(fv[c]) for c in common],
                        [float(rt[c]) for c in common])
                    ics.append(ic)
                report[fkey][wkey] = evaluate_ic_series(ics)
        return report
    except Exception as e:
        logger.warning('因子 IC 报告数据获取失败 (降级): %s', e)
        return {}


# ==================== IC 衰减分析 (T-5.1.12 / FR-5.1.1.2) ====================

def compute_ic_decay(panel: List[Dict],
                     windows: tuple = ('n1', 'n5', 'n10', 'n20')) -> Dict[str, List[Dict]]:
    """对多个持有期窗口计算横截面 IC 序列 → {window: [{date, ic}]}

    panel: 同 compute_ic_series (每期 stocks 含 factor_value + future_return.{nX})。
    IC 衰减曲线: 短窗口 IC 强、长窗口 IC 弱 → 最优持有期取 |IC| 最强窗口。
    """
    if not panel:
        return {}
    decay: Dict[str, List[Dict]] = {}
    for wkey in windows:
        decay[wkey] = compute_ic_series(panel, window=wkey)
    return decay


def ic_decay_summary(decay: Dict[str, List[Dict]]) -> Dict:
    """由衰减曲线计算 {windows: [{window, ic_mean, icir}], optimal_window, decay_rate}。

    optimal_window: |IC| 均值最强窗口 (平局取短窗口);
    decay_rate: 最长/最短窗口 |IC| 之比 (1.0=不衰减, <1=衰减, 0=长窗无信号)。
    """
    rows = []
    for wkey, ics in decay.items():
        valid = [x['ic'] for x in ics if x.get('ic') is not None]
        if not valid:
            rows.append({'window': wkey, 'ic_mean': None, 'icir': None, 'abs_ic': 0.0})
            continue
        mean = sum(valid) / len(valid)
        std = (sum((ic - mean) ** 2 for ic in valid) / len(valid)) ** 0.5 if len(valid) > 1 else 0.0
        icir = (mean / std) if (std and std > 0) else None
        rows.append({
            'window': wkey,
            'ic_mean': round(mean, 2),
            'icir': round(icir, 2) if icir is not None else None,
            'abs_ic': abs(mean),
        })
    if not rows:
        return {'windows': [], 'optimal_window': None, 'decay_rate': None}
    # 窗口数值排序 (n1 < n5 < n10 < n20)
    def _wnum(w):
        try:
            return int(w[1:])
        except (ValueError, IndexError):
            return 999
    rows_sorted = sorted(rows, key=lambda r: _wnum(r['window']))
    # 最优 = |IC| 最强; 平局取最短窗口 (abs_ic 降序, 再按窗口数升序)
    best = min(rows_sorted, key=lambda r: (-r['abs_ic'], _wnum(r['window'])))
    short_abs = best['abs_ic']
    long_row = max(rows_sorted, key=lambda r: _wnum(r['window']))
    decay_rate = (long_row['abs_ic'] / short_abs) if short_abs > 0 else None
    return {
        'windows': [{'window': r['window'], 'ic_mean': r['ic_mean'], 'icir': r['icir']}
                    for r in rows_sorted],
        'optimal_window': best['window'],
        'decay_rate': round(decay_rate, 2) if decay_rate is not None else None,
    }


def build_ic_decay_report(factor_panels: Dict[str, Dict[str, List[Dict]]]) -> Dict:
    """由 {factor_key: {window: [panel]}} 组装 IC 衰减报告。

    返回 {factor_key: {windows, optimal_window, decay_rate}}。
    """
    report: Dict[str, Dict] = {}
    for fkey, windows in factor_panels.items():
        # 重建衰减结构: 用各窗口的 panel
        decay: Dict[str, List[Dict]] = {}
        for wkey, panel in windows.items():
            decay[wkey] = compute_ic_series(panel, window=wkey)
        report[fkey] = ic_decay_summary(decay)
    return report


# ==================== 换手率分析 (T-5.1.13 / FR-5.1.1.3) ====================

def layer_membership(panel: List[Dict]) -> Dict[str, Dict[int, List[str]]]:
    """提取逐期分层成分 → {date: {layer: [codes]}}。

    panel: [{date, layers: [{layer, stocks: [code]}]}]
    """
    out: Dict[str, Dict[int, List[str]]] = {}
    for day in panel:
        layers = day.get('layers')
        if not layers:
            continue
        out[day.get('date')] = {int(l.get('layer')): list(l.get('stocks', []))
                                for l in layers}
    return out


def single_side_turnover(panel: List[Dict], layer: int = 1) -> float:
    """单边换手率 (相邻两期成分重叠度): 换手 = 1 - 交集/并集占比。

    定义: 换手率 = (size_{t-1} + size_t - 2*|intersection|) / (size_{t-1} + size_t)
    完全不变 → 0; 完全换 → 1。
    """
    members = layer_membership(panel)
    dates = sorted(members.keys())
    if len(dates) < 2:
        return 0.0
    total_union = 0.0
    total_denom = 0.0
    for i in range(1, len(dates)):
        prev = set(members[dates[i - 1]].get(layer, []))
        cur = set(members[dates[i]].get(layer, []))
        if not prev and not cur:
            continue
        inter = len(prev & cur)
        denom = len(prev) + len(cur)
        total_union += (denom - 2 * inter)
        total_denom += denom
    return (total_union / total_denom) if total_denom else 0.0


def annualized_turnover(panel: List[Dict], layer: int = 1,
                        rebalance_days: int = 5, trading_days: int = 250) -> float:
    """年化换手 = 单次换手 × (trading_days / rebalance_days)。"""
    once = single_side_turnover(panel, layer=layer)
    if once <= 0 or rebalance_days <= 0:
        return 0.0
    return once * (trading_days / rebalance_days)


def turnover_cost_drag(annual_turnover: float, cost_rate: float) -> float:
    """年化成本拖累 = 年化换手 × 单边成本 × 2 (双边)。"""
    return annual_turnover * cost_rate * 2.0


def turnover_analysis(panel: List[Dict], layer: int = 1, rebalance_days: int = 5,
                      cost_rate: float = 0.001, trading_days: int = 250) -> Dict:
    """换手分析报告: 单次换手 / 年化换手 / 成本拖累(绝对值与百分比)。"""
    once = single_side_turnover(panel, layer=layer)
    ann = annualized_turnover(panel, layer=layer,
                              rebalance_days=rebalance_days, trading_days=trading_days)
    drag = turnover_cost_drag(ann, cost_rate)
    return {
        'layer': layer,
        'single_turnover': round(once, 4),
        'annual_turnover': round(ann, 2),
        'rebalance_days': rebalance_days,
        'cost_rate': cost_rate,
        'cost_drag': round(drag, 4),
        'cost_drag_pct': round(drag * 100, 2),
    }
