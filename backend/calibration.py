#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""V6.9.1 (PRD F-6.9.1): AI 评估校准分析 — 评级 vs 实际涨跌的校准曲线/分模型校准/过度自信诊断

数据基础: eval_track 记录 { direction, hit_n5, hit_n10, hit_n20, provider?, level? }
- direction > 0 表示评级看多 (买入/增持), < 0 看空, = 0 中性
- hit_nX = True/False/None (该窗口内实际涨跌方向是否与预测一致)

产出:
- 校准表: 各评级档 { 样本数, 看多占比, 实际命中率 }
- 过度自信诊断: 看多评级实际命中率 < 50% 视为过度乐观; 看空命中率 < 50% 视为过度悲观
- 总体偏差: 预测看多占比 vs 实际看多占比
纯函数, 零外部依赖; 样本不足 (< MIN_SAMPLE) 时 available=False。
"""
from typing import Dict, List, Optional

MIN_SAMPLE = 50
WINDOWS = ("n5", "n10", "n20")


def _actual_up_ratio(records: List[Dict], window: str) -> Optional[float]:
    """实际看涨比例: 命中且方向为多 = 上涨; 命中且方向为空 = 下跌。
    简化口径: 命中率即"预测方向与实际一致"比例, 校准关注"看多时实际上涨的比例",
    以 hit=True 且 direction>0 的样本中实际为正的比例近似 (数据源为 hit 时已隐含方向一致)。"""
    pos = [r for r in records if (r.get("direction") or 0) > 0 and r.get("hit_" + window) is not None]
    if not pos:
        return None
    hits = sum(1 for r in pos if r.get("hit_" + window))
    return round(hits / len(pos) * 100, 1)


def compute_calibration(records: List[Dict], window: str = "n5") -> Dict:
    """按评级档分组计算校准。

    records: 含 direction/hit_{window}/level/provider 的样本列表。
    返回 { available, window, sample_count, buckets, overconfidence, overall_bias, note }
    """
    win = window if window in WINDOWS else "n5"
    usable = [r for r in records if r.get("hit_" + win) is not None]
    total = len(usable)
    if total < MIN_SAMPLE:
        return {
            "available": False, "window": win, "sample_count": total,
            "buckets": [], "overconfidence": [], "overall_bias": None,
            "note": f"样本不足 (需 ≥{MIN_SAMPLE}, 当前 {total})",
        }

    groups: Dict[str, List[Dict]] = {}
    for r in usable:
        level = str(r.get("level") or ("看多" if (r.get("direction") or 0) > 0 else
                                        ("看空" if (r.get("direction") or 0) < 0 else "中性")))
        groups.setdefault(level, []).append(r)

    buckets = []
    for level, items in sorted(groups.items(), key=lambda kv: -len(kv[1])):
        hits = sum(1 for r in items if r.get("hit_" + win))
        rate = round(hits / len(items) * 100, 1)
        up_ratio = round(sum(1 for r in items if (r.get("direction") or 0) > 0) / len(items) * 100, 1)
        buckets.append({
            "level": level, "total": len(items),
            "hit_rate": rate, "up_ratio": up_ratio,
            "predicted": "看多" if up_ratio > 50 else ("看空" if up_ratio < 50 else "中性"),
        })

    overconfidence = []
    for b in buckets:
        if b["up_ratio"] >= 60 and b["hit_rate"] < 50 and b["total"] >= MIN_SAMPLE // 2:
            overconfidence.append({
                "level": b["level"], "kind": "过度乐观",
                "detail": f"评级看多占比 {b['up_ratio']}% 但实际命中率仅 {b['hit_rate']}%",
            })
        elif b["up_ratio"] <= 40 and b["hit_rate"] < 50 and b["total"] >= MIN_SAMPLE // 2:
            overconfidence.append({
                "level": b["level"], "kind": "过度悲观",
                "detail": f"评级看空占比 {100 - b['up_ratio']}% 但实际命中率仅 {b['hit_rate']}%",
            })

    overall_bias = {
        "predicted_up_ratio": round(sum(1 for r in usable if (r.get("direction") or 0) > 0) / total * 100, 1),
        "actual_hit_rate": round(sum(1 for r in usable if r.get("hit_" + win)) / total * 100, 1),
        "window": win,
    }
    return {
        "available": True, "window": win, "sample_count": total,
        "buckets": buckets, "overconfidence": overconfidence,
        "overall_bias": overall_bias, "note": None,
    }


def compute_model_calibration(records: List[Dict], window: str = "n5") -> List[Dict]:
    """分模型校准: 各 provider 的校准摘要。"""
    win = window if window in WINDOWS else "n5"
    by_model: Dict[str, List[Dict]] = {}
    for r in records:
        if r.get("hit_" + win) is None:
            continue
        by_model.setdefault(r.get("provider") or "unknown", []).append(r)
    out = []
    for model, items in by_model.items():
        hits = sum(1 for r in items if r.get("hit_" + win))
        up = sum(1 for r in items if (r.get("direction") or 0) > 0)
        out.append({
            "model": model, "total": len(items),
            "hit_rate": round(hits / len(items) * 100, 1),
            "up_ratio": round(up / len(items) * 100, 1) if items else None,
        })
    out.sort(key=lambda x: -x["total"])
    return out
