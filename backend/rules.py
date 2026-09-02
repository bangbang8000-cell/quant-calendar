#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""V5.0.3 T-5.0.33: 风控规则引擎 (rules.py)

集中度/止损止盈/回撤熔断: 规则声明 + 边界触发评估 (刚触线/未触线/已禁用)。
- make_rule(rule_id, type, enabled, **params): 规则声明
- check_*: 单项检查 (纯函数, 边界: >= 阈值即触发)
- evaluate_rules(portfolio_state, rules): 批量评估 → [{rule_id, type, triggered,
  severity, action, message}]

portfolio_state: {weights, sector_weights, day_return, equity, losses}
测试: tests/test_risk_rules.py (TEST-PLAN 4.2 边界覆盖)。
"""
import logging

logger = logging.getLogger(__name__)


def make_rule(rule_id, rule_type, enabled=True, **params):
    return {"rule_id": rule_id, "type": rule_type, "enabled": bool(enabled),
            "params": params or {}}


def check_concentration(weights, sector_weights, max_stock_weight=0.2,
                        max_sector_weight=0.3):
    """集中度: 单标的 >= max_stock 或 单行业 >= max_sector → 减仓。边界: 刚好触线即触发。"""
    stock_hit = None
    _EPS = 1e-9
    for code, w in (weights or {}).items():
        if float(w) >= float(max_stock_weight) - _EPS:
            stock_hit = f"{code}: {w:.1%}"
            break
    sector_hit = None
    for sec, w in (sector_weights or {}).items():
        if float(w) >= float(max_sector_weight) - _EPS:
            sector_hit = f"{sec}: {w:.1%}"
            break
    triggered = stock_hit is not None or sector_hit is not None
    return {"triggered": triggered, "action": "reduce",
            "message": ("集中度超限: " + " / ".join(x for x in [stock_hit, sector_hit] if x))
            if triggered else ""}


def check_stop_loss(day_return, losses, day_loss_threshold=0.03,
                    single_loss_threshold=0.08):
    """止损: 单日亏损 >= 阈值 或 单持仓亏损 >= 阈值 → 停手/平仓。"""
    d = float(day_return or 0.0)
    hit = None
    _EPS = 1e-9
    if d <= -float(day_loss_threshold) + _EPS:
        hit = f"单日亏损 {d:.1%}"
    else:
        for code, loss in (losses or {}).items():
            if float(loss) <= -float(single_loss_threshold) + _EPS:
                hit = f"{code} 亏损 {float(loss):.1%}"
                break
    triggered = hit is not None
    return {"triggered": triggered, "action": "stop",
            "message": f"止损触发: {hit}" if triggered else ""}


def check_take_profit(day_return, day_profit_threshold=0.05):
    """止盈: 单日收益 >= 阈值 → 止盈。"""
    d = float(day_return or 0.0)
    _EPS = 1e-9
    triggered = d >= float(day_profit_threshold) - _EPS
    return {"triggered": triggered, "action": "take_profit",
            "message": f"止盈触发: 单日 {d:.1%}" if triggered else ""}


def check_drawdown_circuit(equity, trigger=0.1, action="reduce"):
    """回撤熔断: 净值从高点回撤 >= trigger → reduce/stop。"""
    eq = [float(e) for e in (equity or [])]
    if not eq:
        return {"triggered": False, "action": action, "message": ""}
    peak = eq[0]
    dd = 0.0
    for e in eq:
        peak = max(peak, e)
        if peak > 0:
            dd = min(dd, (e - peak) / peak)
    triggered = dd <= -float(trigger) + 1e-9
    return {"triggered": triggered, "action": action,
            "message": f"回撤熔断触发: 回撤 {dd:.1%} (阈值 {float(trigger):.0%})"
            if triggered else ""}


def evaluate_rules(portfolio_state, rules):
    """批量评估规则 → 结果列表 (禁用规则跳过, 未知类型跳过)。"""
    state = portfolio_state or {}
    results = []
    for rule in rules or []:
        rtype = rule.get("type")
        if not rule.get("enabled"):
            results.append({"rule_id": rule.get("rule_id"), "type": rtype,
                            "triggered": False, "severity": "info", "action": "",
                            "message": "规则已禁用"})
            continue
        p = rule.get("params", {})
        try:
            if rtype == "concentration":
                res = check_concentration(state.get("weights") or {},
                                          state.get("sector_weights") or {},
                                          p.get("max_stock_weight", 0.2),
                                          p.get("max_sector_weight", 0.3))
                sev = "high" if res["triggered"] else "info"
            elif rtype == "stop_loss":
                res = check_stop_loss(state.get("day_return", 0.0),
                                      state.get("losses") or {},
                                      p.get("day_loss_threshold", 0.03),
                                      p.get("single_loss_threshold", 0.08))
                sev = "high" if res["triggered"] else "info"
            elif rtype == "take_profit":
                res = check_take_profit(state.get("day_return", 0.0),
                                        p.get("day_profit_threshold", 0.05))
                sev = "medium" if res["triggered"] else "info"
            elif rtype == "drawdown_circuit":
                res = check_drawdown_circuit(state.get("equity") or [1.0],
                                             p.get("trigger", 0.1),
                                             p.get("action", "reduce"))
                sev = "high" if res["triggered"] else "info"
            else:
                logger.debug("rules: 未知规则类型 %s 跳过", rtype)
                continue
        except Exception as exc:
            logger.warning("规则 %s 评估失败: %s", rule.get("rule_id"), exc)
            res = {"triggered": False, "action": "", "message": ""}
            sev = "error"
        results.append({"rule_id": rule.get("rule_id"), "type": rtype,
                        "triggered": res["triggered"], "severity": sev,
                        "action": res.get("action", ""), "message": res.get("message", "")})
    return results
