#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""V5.2 T-5.2.4: 参数稳定性分析 (param_stability.py)

参数高原可视化数据 + SENSITIVITY_SPREAD_RATIO 过拟合诊断。
- plateau_analysis: 一维参数扫描中, 落在最优值 ±tolerance 内的参数区间 (高原)
- sensitivity_spread_ratio: 最优参数被扰动后的性能衰减比 (越大越易过拟合)
- overfit_diagnosis: 用最优参数两侧相邻点扰动, 综合判定 robust / overfit / unknown

测试: tests/test_param_stability.py。前端研究页消费 plateau_ratio/verdict 做高原可视化。
"""
import logging

logger = logging.getLogger(__name__)

# 过拟合判定阈值: spread_ratio ≥ 0.5 → 尖峰/过拟合 (SENSITIVITY_SPREAD_RATIO)
SENSITIVITY_SPREAD_RATIO = 0.5


def sensitivity_spread_ratio(best_perf, perturbed_perf):
    """性能衰减比 = (best - perturbed)/|best|; 扰动后更优 → 0 (不判过拟合)。"""
    if best_perf is None or best_perf == 0:
        return 0.0
    drop = (best_perf - perturbed_perf) / abs(best_perf)
    return max(0.0, drop)


def plateau_analysis(results, param_key, perf_key="annual_return", tolerance=0.2):
    """参数高原: 一维参数扫描中性能不低于 best×(1-tolerance) 的参数区间。

    results: [{params: {param_key: v}, perf_key: perf}, ...]
    返回 {best_param, best_perf, plateau_min, plateau_max, plateau_width,
          plateau_ratio, within_tolerance}
    """
    pairs = [(r.get("params", {}).get(param_key), r.get(perf_key))
             for r in results if r.get("params", {}).get(param_key) is not None
             and r.get(perf_key) is not None]
    if not pairs:
        return {"best_param": None, "best_perf": None, "plateau_min": None,
                "plateau_max": None, "plateau_width": 0, "plateau_ratio": 0.0,
                "within_tolerance": []}
    best_perf = max(f for _, f in pairs)
    best_params = [p for p, f in pairs if f == best_perf]
    best_param = sorted(best_params)[len(best_params) // 2]  # 高原中点
    floor = best_perf * (1.0 - tolerance)
    in_plat = [p for p, f in pairs if f >= floor]
    pmin, pmax = min(in_plat), max(in_plat)
    scan_vals = [p for p, _ in pairs]
    span = max(scan_vals) - min(scan_vals)
    ratio = (pmax - pmin) / span if span > 1e-12 else 1.0
    return {"best_param": best_param, "best_perf": best_perf,
            "plateau_min": pmin, "plateau_max": pmax,
            "plateau_width": pmax - pmin, "plateau_ratio": round(ratio, 4),
            "within_tolerance": in_plat}


def overfit_diagnosis(sweep_results, param_key, perf_key="annual_return",
                      pct=0.2, threshold=SENSITIVITY_SPREAD_RATIO):
    """过拟合诊断: 取最优参数相邻两个参数点的最差表现做扰动。

    返回 {verdict: robust|overfit|unknown, spread_ratio, best_param,
          plateau_ratio, neighbor_count}
    """
    pairs = [(r.get("params", {}).get(param_key), r.get(perf_key))
             for r in sweep_results if r.get("params", {}).get(param_key) is not None
             and r.get(perf_key) is not None]
    plat = plateau_analysis(sweep_results, param_key, perf_key)
    if plat["best_param"] is None or len(pairs) < 2:
        return {"verdict": "unknown", "spread_ratio": None,
                "best_param": plat["best_param"], "plateau_ratio": plat["plateau_ratio"],
                "neighbor_count": 0}
    best_idx = next(i for i, (p, f) in enumerate(pairs)
                    if p == plat["best_param"] and f == plat["best_perf"])
    neighbors = []
    if best_idx > 0:
        neighbors.append(pairs[best_idx - 1][1])
    if best_idx < len(pairs) - 1:
        neighbors.append(pairs[best_idx + 1][1])
    if not neighbors:
        return {"verdict": "unknown", "spread_ratio": None,
                "best_param": plat["best_param"], "plateau_ratio": plat["plateau_ratio"],
                "neighbor_count": 0}
    worst_neighbor = min(neighbors)
    ratio = sensitivity_spread_ratio(plat["best_perf"], worst_neighbor)
    verdict = "overfit" if ratio >= threshold else "robust"
    return {"verdict": verdict, "spread_ratio": round(ratio, 4),
            "best_param": plat["best_param"], "plateau_ratio": plat["plateau_ratio"],
            "neighbor_count": len(neighbors)}
