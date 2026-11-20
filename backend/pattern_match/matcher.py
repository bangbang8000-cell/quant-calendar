#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""B1 四维加权 DTW 匹配器 (v7.6 FR-7.6-2) — 移植 KHunter pattern_matcher

改造点: 权重强制和 1 / 缺维诚实标注 neutral 与 missing_dimensions /
fastdtw 优先且保留可复现降级路径 / 输出 total_score 与四项 breakdown(百分制)。
产物是分数, 默认走研究实验通道; 物化持仓矩阵需用户确认阈值与 TopN。
"""
from typing import Dict, List

import numpy as np

try:
    from fastdtw import fastdtw
    from scipy.spatial.distance import euclidean
    HAS_FASTDTW = True
except ImportError:
    HAS_FASTDTW = False

DIMENSIONS = ("trend_structure", "kdj_state", "volume_pattern", "price_shape")

DEFAULT_WEIGHTS: Dict[str, float] = {
    "trend_structure": 0.30,
    "kdj_state": 0.20,
    "volume_pattern": 0.25,
    "price_shape": 0.25,
}
DEFAULT_TOLERANCES: Dict[str, float] = {
    "trend_ratio": 0.10,
    "price_bias": 10.0,
    "trend_spread": 10.0,
    "j_value": 30.0,
    "drawdown": 15.0,
}


def _clamp(value: float) -> float:
    return float(max(0.0, min(1.0, value)))


class PatternMatcher:
    """四维加权匹配器: 输入两组 extract() 特征, 输出可解释相似度"""

    def __init__(self, weights: Dict[str, float] = None,
                 tolerances: Dict[str, float] = None):
        raw = dict(DEFAULT_WEIGHTS)
        if weights:
            raw.update(weights)
        total = float(sum(raw.values()))
        if total <= 0:
            raise ValueError("权重之和必须 > 0")
        normalized = {k: round(v / total, 6) for k, v in raw.items()}
        # 末项吸收 6 位舍入残差, 保证权重和精确为 1
        last_key = list(normalized)[-1]
        normalized[last_key] = round(
            1.0 - sum(v for k, v in normalized.items() if k != last_key), 6)
        self.weights = normalized
        self.tolerances = dict(DEFAULT_TOLERANCES)
        if tolerances:
            self.tolerances.update(tolerances)

    def match(self, candidate: Dict, case: Dict) -> Dict:
        """返回 {total_score, breakdown, weights, missing_dimensions, engine}"""
        if not candidate or not case:
            return {"total_score": 0.0, "breakdown": {}, "weights": self.weights,
                    "missing_dimensions": list(DIMENSIONS), "engine": "none"}
        scores: Dict[str, float] = {}
        missing: List[str] = []
        calculators = {
            "trend_structure": self._trend,
            "kdj_state": self._kdj,
            "volume_pattern": self._volume,
            "price_shape": self._shape,
        }
        for dim, calc in calculators.items():
            cand_part = candidate.get(dim) or {}
            case_part = case.get(dim) or {}
            if not cand_part or not case_part:
                scores[dim] = 0.5  # 缺维取中性, 不猜数
                missing.append(dim)
            else:
                scores[dim] = _clamp(calc(cand_part, case_part))
        total = sum(scores[d] * self.weights[d] for d in DIMENSIONS)
        return {
            "total_score": round(total * 100, 2),
            "breakdown": {d: round(scores[d] * 100, 2) for d in DIMENSIONS},
            "weights": dict(self.weights),
            "missing_dimensions": missing,
            "engine": "fastdtw" if HAS_FASTDTW else "simple_dtw",
        }

    def _trend(self, cand: Dict, case: Dict) -> float:
        sims: List[float] = []
        ratio_tol = self.tolerances["trend_ratio"]
        bias_tol = self.tolerances["price_bias"]
        spread_tol = self.tolerances["trend_spread"]
        if "short_vs_bullbear" in cand and "short_vs_bullbear" in case:
            diff = abs(cand["short_vs_bullbear"] - case["short_vs_bullbear"])
            sims.append(max(0.0, 1 - diff / ratio_tol))
        if "short_slope" in cand and "short_slope" in case:
            same = (cand["short_slope"] > 0) == (case["short_slope"] > 0)
            diff = abs(cand["short_slope"] - case["short_slope"])
            sims.append(max(0.7, 1 - diff / 10) if same else max(0.0, 0.3 - diff / 20))
        if "is_in_bowl" in cand and "is_in_bowl" in case:
            sims.append(1.0 if cand["is_in_bowl"] == case["is_in_bowl"] else 0.2)
        sims.append(max(0.0, 1 - abs(cand.get("price_vs_short_pct", 0) - case.get("price_vs_short_pct", 0)) / bias_tol))
        sims.append(max(0.0, 1 - abs(cand.get("trend_spread_pct", 0) - case.get("trend_spread_pct", 0)) / spread_tol))
        if "price_bias_pct" in cand and "price_bias_pct" in case:
            sims.append(max(0.0, 1 - abs(cand["price_bias_pct"] - case["price_bias_pct"]) / bias_tol))
        return float(np.mean(sims)) if sims else 0.5

    def _kdj(self, cand: Dict, case: Dict) -> float:
        sims: List[float] = []
        if "j_position" in cand and "j_position" in case:
            sims.append(1.0 if cand["j_position"] == case["j_position"] else 0.4)
        if "j_value" in cand and "j_value" in case:
            diff = abs(cand["j_value"] - case["j_value"])
            sims.append(max(0.0, 1 - diff / self.tolerances["j_value"]))
        if "k_cross_d" in cand and "k_cross_d" in case:
            sims.append(1.0 if cand["k_cross_d"] == case["k_cross_d"] else 0.6)
        if "j_rebound" in cand and "j_rebound" in case:
            sims.append(1.0 if cand["j_rebound"] == case["j_rebound"] else 0.7)
        return float(np.mean(sims)) if sims else 0.5

    def _volume(self, cand: Dict, case: Dict) -> float:
        sims: List[float] = []
        if "avg_volume_ratio" in cand and "avg_volume_ratio" in case:
            sims.append(max(0.0, 1 - abs(cand["avg_volume_ratio"] - case["avg_volume_ratio"]) / 1.5))
        if "shrink_then_expand" in cand and "shrink_then_expand" in case:
            sims.append(1.0 if cand["shrink_then_expand"] == case["shrink_then_expand"] else 0.5)
        if "key_candles_count" in cand and "key_candles_count" in case:
            sims.append(max(0.0, 1 - abs(cand["key_candles_count"] - case["key_candles_count"]) / 3))
        if "volume_trend" in cand and "volume_trend" in case:
            sims.append(1.0 if cand["volume_trend"] == case["volume_trend"] else 0.6)
        if "max_volume_ratio" in cand and "max_volume_ratio" in case:
            sims.append(max(0.0, 1 - abs(cand["max_volume_ratio"] - case["max_volume_ratio"]) / 3))
        return float(np.mean(sims)) if sims else 0.5

    def _shape(self, cand: Dict, case: Dict) -> float:
        sims: List[float] = []
        c1 = np.asarray(cand.get("normalized_curve") or [], dtype=float)
        c2 = np.asarray(case.get("normalized_curve") or [], dtype=float)
        if len(c1) and len(c2):
            if HAS_FASTDTW:
                try:
                    distance, _ = fastdtw(c1, c2, dist=euclidean)
                    max_dist = max(len(c1), len(c2))
                    sims.append(max(0.0, 1 - distance / max_dist) if max_dist else 0.0)
                except Exception:
                    sims.append(self._simple_dtw(c1, c2))
            else:
                sims.append(self._simple_dtw(c1, c2))
        if "max_drawdown" in cand and "max_drawdown" in case:
            diff = abs(cand["max_drawdown"] - case["max_drawdown"])
            sims.append(max(0.0, 1 - diff / self.tolerances["drawdown"]))
        if "breakout_strength" in cand and "breakout_strength" in case:
            sims.append(max(0.0, 1 - abs(cand["breakout_strength"] - case["breakout_strength"]) / 5))
        if "overall_trend" in cand and "overall_trend" in case:
            sims.append(1.0 if cand["overall_trend"] == case["overall_trend"] else 0.5)
        if "consolidation_days" in cand and "consolidation_days" in case:
            sims.append(max(0.0, 1 - abs(cand["consolidation_days"] - case["consolidation_days"]) / 10))
        return float(np.mean(sims)) if sims else 0.5

    @staticmethod
    def _simple_dtw(seq1: np.ndarray, seq2: np.ndarray) -> float:
        """fastdtw 缺失时的确定性降级: 线性插值对齐 + 欧氏距离"""
        n, m = len(seq1), len(seq2)
        if n == 0 or m == 0:
            return 0.0
        target = max(n, m)
        if n < target:
            seq1 = np.interp(np.linspace(0, n - 1, target), np.arange(n), seq1)
        if m < target:
            seq2 = np.interp(np.linspace(0, m - 1, target), np.arange(m), seq2)
        distance = float(np.sqrt(np.sum((seq1 - seq2) ** 2)))
        max_dist = float(np.sqrt(target))
        return max(0.0, 1 - distance / max_dist) if max_dist > 0 else 0.0
