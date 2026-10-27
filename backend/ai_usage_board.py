#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""6.4.4 (FR-650 第 4 条): AI 用量与成本看板 — 纯函数

输入: 调用明细 [{ts, model, success, latency_ms}] (由 ai_evaluator._usage["recent"] 落库)
输出: 近 7/30 天调用数、成功率、平均耗时、按模型成本估算、失败率告警

成本口径: calls × 平均 tokens × 每 1K tokens 单价 (估算, 非账单); 模型单价缺省用 DEFAULT_RATE。
零外部依赖。
"""
from datetime import datetime, timedelta
from typing import Dict, List, Optional

# 每 1K tokens 估算单价 (美元); 未登记模型用 DEFAULT_RATE
DEFAULT_RATE = 0.002
MODEL_RATES: Dict[str, float] = {
    # 已知模型可在配置中覆盖; 此处仅内置常见档位示例
    "gpt-4o-mini": 0.0006,
    "deepseek-chat": 0.0014,
}
AVG_TOKENS_PER_CALL = 2000

ALERT_FAILURE_RATE = 0.20  # 失败率 >20% 给提示 (PRD FR-650 第 4 条)


def _parse_ts(ts) -> Optional[datetime]:
    if isinstance(ts, datetime):
        return ts
    try:
        return datetime.fromisoformat(str(ts))
    except (TypeError, ValueError):
        return None


def estimate_cost(calls: int, rate: float = DEFAULT_RATE,
                  avg_tokens: int = AVG_TOKENS_PER_CALL) -> float:
    """成本估算 = 调用数 × 平均 tokens / 1000 × 单价, 保留 4 位。"""
    if calls <= 0:
        return 0.0
    return round(calls * avg_tokens / 1000.0 * (rate if rate > 0 else DEFAULT_RATE), 4)


def summarize(records: List[Dict], now: Optional[datetime] = None) -> Dict:
    """近 7/30 天用量汇总 + 按模型成本估算 + 失败率告警。"""
    ref = now or datetime.now()
    cutoff7 = ref - timedelta(days=7)
    cutoff30 = ref - timedelta(days=30)

    win7: List[Dict] = []
    win30: List[Dict] = []
    for r in records or []:
        ts = _parse_ts(r.get("ts"))
        if ts is None:
            continue
        if ts >= cutoff7:
            win7.append(r)
        if ts >= cutoff30:
            win30.append(r)

    def _window_stats(items: List[Dict]) -> Dict:
        total = len(items)
        ok = sum(1 for r in items if r.get("success"))
        lat = [float(r["latency_ms"]) for r in items
               if isinstance(r.get("latency_ms"), (int, float))]
        return {
            "calls": total,
            "success": ok,
            "failure_rate": round((total - ok) / total, 3) if total else 0.0,
            "avg_latency_ms": round(sum(lat) / len(lat)) if lat else None,
        }

    by_model: Dict[str, Dict] = {}
    for r in win30:
        m = str(r.get("model") or "unknown")
        g = by_model.setdefault(m, {"model": m, "calls": 0, "success": 0,
                                    "latency_sum": 0.0, "latency_n": 0})
        g["calls"] += 1
        if r.get("success"):
            g["success"] += 1
        if isinstance(r.get("latency_ms"), (int, float)):
            g["latency_sum"] += float(r["latency_ms"])
            g["latency_n"] += 1
    models = []
    for g in by_model.values():
        models.append({
            "model": g["model"],
            "calls": g["calls"],
            "success_rate": round(g["success"] / g["calls"], 3) if g["calls"] else None,
            "avg_latency_ms": round(g["latency_sum"] / g["latency_n"]) if g["latency_n"] else None,
            "cost_estimate": estimate_cost(g["calls"], MODEL_RATES.get(g["model"], DEFAULT_RATE)),
        })
    models.sort(key=lambda x: -x["calls"])

    s30 = _window_stats(win30)
    alert = None
    if s30["calls"] >= 5 and s30["failure_rate"] > ALERT_FAILURE_RATE:
        alert = {
            "kind": "high_failure_rate",
            "failure_rate": s30["failure_rate"],
            "message": "近 30 天失败率 %.0f%%，超过 %d%% 阈值，请检查模型配置或网络" % (
                s30["failure_rate"] * 100, ALERT_FAILURE_RATE * 100),
        }

    return {
        "days7": _window_stats(win7),
        "days30": s30,
        "by_model": models,
        "cost_total_30d": round(sum(m["cost_estimate"] for m in models), 4),
        "alert": alert,
        "note": "成本为估算值 (调用数 × %d tokens × 模型单价)，非账单数据" % AVG_TOKENS_PER_CALL,
    }


def merge_recent(existing: List[Dict], entry: Dict, cap: int = 500) -> List[Dict]:
    """追加一条调用明细并按时间倒序截断 (落库用, 最多保留 cap 条)。"""
    out = [entry] + list(existing or [])
    return out[:cap]
