#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
五维评分引擎 (v7.4 FR-7.4-3, 移植自 KHunter stock_score_models.py)
技术/资金/基本/板块/事件加权(默认 35/35/10/10/10, 可配置) + 一票否决。
注: KHunter 源码 SCORE_WEIGHTS=35/35/10/10/10, 但注释写 0.25/0.30/0.15/0.15/0.15(旧值且和不等1);
    本引擎以实际权重为准并强制和=1, 体现 PRD "权重参数化+可诊断" 要求(L3/L4)。
"""
from typing import Any, Dict, Optional

SCORE_DIMENSIONS = ("technical", "moneyflow", "fundamental", "sector", "event")
DEFAULT_WEIGHTS = {
    "technical": 0.35, "moneyflow": 0.35, "fundamental": 0.10,
    "sector": 0.10, "event": 0.10,
}
VETO_SCORE = -100

# 等级边界(≥80 强烈推荐 / ≥60 推荐 / ≥40 中性 / ≥20 谨慎 / <20 回避 / -100 淘汰)
_LEVELS = [(80, "强烈推荐"), (60, "推荐"), (40, "中性"), (20, "谨慎")]


class ScoreEngine:
    """可配置的五维评分引擎: 权重和必须为 1, 一票否决直接 -100。"""

    def __init__(self, weights: Optional[Dict[str, float]] = None,
                 veto_enabled: bool = True):
        w = dict(DEFAULT_WEIGHTS) if weights is None else dict(weights)
        if set(w.keys()) != set(SCORE_DIMENSIONS):
            raise ValueError(f"权重必须恰好覆盖五维 {SCORE_DIMENSIONS}, 收到 {set(w.keys())}")
        if any(not isinstance(v, (int, float)) or v < 0 for v in w.values()):
            raise ValueError("权重必须为非负数")
        if abs(sum(w.values()) - 1.0) > 1e-6:
            raise ValueError(f"权重之和必须为 1, 收到 {sum(w.values())}")
        # 归一化消除浮点误差
        total = sum(w.values())
        self.weights = {k: v / total for k, v in w.items()}
        self.veto_enabled = veto_enabled

    @staticmethod
    def level_of(score: float) -> str:
        if abs(score - VETO_SCORE) < 1e-9:
            return "淘汰"
        for threshold, label in _LEVELS:
            if score >= threshold:
                return label
        return "回避"

    def calculate(self, dimension_scores: Dict[str, Optional[float]],
                  veto: bool = False, veto_reason: str = "",
                  details: Optional[Dict[str, Any]] = None) -> Dict[str, Any]:
        """计算综合评分。

        Args:
            dimension_scores: {维度: 分数 or None}; None=缺数(诚实标注 unknown, 不写0)
            veto: 是否一票否决
        Returns:
            dict(total_score, level, veto_flag, veto_reason, dimensions, missing_dimensions, weighted_breakdown)
        """
        missing = [d for d in SCORE_DIMENSIONS
                   if d not in dimension_scores or dimension_scores[d] is None]
        dims: Dict[str, Any] = {}
        total = 0.0
        for d in SCORE_DIMENSIONS:
            s = dimension_scores.get(d)
            if s is None:
                dims[d] = {"score": None, "weight": self.weights[d],
                           "weighted_score": None, "status": "unknown"}
            else:
                ws = float(s) * self.weights[d]
                total += ws
                dims[d] = {"score": float(s), "weight": self.weights[d],
                           "weighted_score": round(ws, 2), "status": "ok"}

        do_veto = bool(veto and self.veto_enabled)
        if do_veto:
            final = VETO_SCORE
        else:
            final = round(total, 1)
        return {
            "total_score": final,
            "level": self.level_of(final),
            "veto_flag": do_veto,
            "veto_reason": veto_reason if do_veto else "",
            "dimensions": dims,
            "missing_dimensions": missing,
            "weighted_breakdown": {d: dims[d]["weighted_score"] for d in SCORE_DIMENSIONS},
            "details": details or {},
        }

    def to_holdings(self, scores: Dict[str, Dict[str, Any]], top_n: int = 10,
                    min_score: float = 40.0) -> Dict[str, Any]:
        """评分→TopN 选股(借鉴 multi_factor.py:111-122 score→TopN 等权先例)。
        仅对非 veto 且达 min_score 的股票排序取 TopN; 返回 {symbol: weight}。
        """
        valid = []
        for sym, res in scores.items():
            ts = res.get("total_score") if isinstance(res, dict) else None
            if ts is None or res.get("veto_flag") or ts < min_score:
                continue
            valid.append((sym, ts))
        valid.sort(key=lambda x: -x[1])
        picks = valid[:max(1, int(top_n))]
        if not picks:
            return {}
        w = 1.0 / len(picks)
        return {sym: w for sym, _ in picks}
