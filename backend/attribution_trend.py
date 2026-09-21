#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""6.1.6 (F5): 入池/出池归因趋势 — 批次聚合 (纯函数)

records: [{direction: 'in'|'out', factors: [..], strategy?, date?}]
输出:
  factor_in / factor_out  因子命中计数
  strategy_in / strategy_out 策略贡献计数
  inconsistent            同一因子既入池又出池 (一致性异常提示)
  total / in_count / out_count
"""
from collections import Counter


def _norm_direction(direction):
    d = (direction or "").strip().lower()
    if d in ("in", "入池", "入"):
        return "in"
    if d in ("out", "出池", "出"):
        return "out"
    return ""


def build_trend(records):
    if not records:
        return {"factor_in": {}, "factor_out": {}, "strategy_in": {}, "strategy_out": {},
                "inconsistent": [], "total": 0, "in_count": 0, "out_count": 0}
    factor_in = Counter()
    factor_out = Counter()
    strategy_in = Counter()
    strategy_out = Counter()
    in_count = 0
    out_count = 0
    for r in records:
        d = _norm_direction(r.get("direction"))
        factors = r.get("factors") or []
        if isinstance(factors, str):
            factors = [factors]
        strat = str(r.get("strategy") or "未知")
        if d == "in":
            in_count += 1
            strategy_in[strat] += 1
            for f in factors:
                if f:
                    factor_in[str(f)] += 1
        elif d == "out":
            out_count += 1
            strategy_out[strat] += 1
            for f in factors:
                if f:
                    factor_out[str(f)] += 1
    inconsistent = sorted(set(factor_in) & set(factor_out))
    return {
        "factor_in": dict(factor_in),
        "factor_out": dict(factor_out),
        "strategy_in": dict(strategy_in),
        "strategy_out": dict(strategy_out),
        "inconsistent": inconsistent,
        "total": in_count + out_count,
        "in_count": in_count,
        "out_count": out_count,
    }
