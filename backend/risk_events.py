#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""V5.3 T-5.3.5: 风险预警接入事件总线 (risk_events.py)

把风控规则触发结果转换为事件总线事件 (V5.4 通知中心消费)。
- risk_alerts_to_events(rule_results): 触发规则 → [{type:'risk', title, date, severity, action, name}]
- build_risk_alerts(rule_results): 汇总 {events, count}
- RiskEventProvider: event_alert 兼容 provider (name='risk', available=True,
  fetch_events() 从当前用户持仓评估规则 → 触发事件; 无持仓/数据不可达返回 [])
- register_risk_provider(username): 注册到事件总线 (幂等)

测试: tests/test_risk_events.py。
"""
import logging
from datetime import date

logger = logging.getLogger(__name__)

_risky_providers = {}


def risk_alerts_to_events(rule_results, today=None):
    """规则评估结果 → 事件总线事件 (仅 triggered)。"""
    events = []
    for r in rule_results or []:
        if not r.get("triggered"):
            continue
        events.append({
            "type": "risk",
            "title": f"[{r.get('type', 'rule')}] {r.get('message', '')}".strip(),
            "date": today or date.today().isoformat(),
            "name": r.get("name", "组合"),
            "severity": r.get("severity", "high"),
            "action": r.get("action", ""),
        })
    return events


def build_risk_alerts(rule_results, today=None):
    events = risk_alerts_to_events(rule_results, today)
    return {"events": events, "count": len(events)}


def _evaluate_portfolio_rules(username, days=60):
    """从持仓构建组合状态并评估默认风控规则 → (rule_results, state)。
    数据不可达优雅降级: 有持仓但无行情时权重/波动为空, 规则不误触发。"""
    import db
    from rules import evaluate_rules, make_rule
    positions = db.portfolio_get_positions(username)
    if not positions:
        return [], {}
    # 市值权重 / 浮亏 / 日收益 (尽力而为)
    weights, losses, mv_total = {}, {}, 0.0
    from data_sources import data_source_manager
    for p in positions:
        try:
            q = data_source_manager.get_daily_basic(p["stock_code"])
            close = q.get("close") if q else None
            if close is None:
                q = data_source_manager.get_kline_data(p["stock_code"], "daily", 2)
                bars = q.get("data") if isinstance(q, dict) else q
                if bars:
                    close = float(bars[-1][2])
        except Exception:
            close = None
        if close is None:
            continue
        qty = float(p["quantity"] or 0)
        cost = float(p["cost_price"] or 0)
        mv = close * qty
        mv_total += mv
        if cost > 0:
            loss_pct = (close - cost) / cost
            if loss_pct < 0:
                losses[p["stock_code"]] = round(loss_pct, 6)
    if mv_total > 0:
        weights = {p["stock_code"]: round((float(
            (data_source_manager.get_daily_basic(p["stock_code"]) or {}).get("close")
            or 0) * float(p["quantity"] or 0)) / mv_total, 4) if (data_source_manager.get_daily_basic(p["stock_code"]) or {}).get("close") else 0.0
            for p in positions}
        weights = {k: v for k, v in weights.items() if v > 0}
    # 净值 (近 days 日市值序列, 归一化)
    equity = [1.0]
    try:
        from api.v1.portfolio import _portfolio_values
        _, values, _ = _portfolio_values(days, username)
        if values and values[0]:
            equity = [v / values[0] for v in values]
    except Exception:
        pass
    state = {"weights": weights, "sector_weights": {}, "day_return": 0.0,
             "equity": equity, "losses": losses}
    rules = [
        make_rule("r1", "concentration", max_stock_weight=0.2, max_sector_weight=0.3),
        make_rule("r2", "stop_loss", single_loss_threshold=0.08, day_loss_threshold=0.03),
        make_rule("r3", "take_profit", day_profit_threshold=0.05),
        make_rule("r4", "drawdown_circuit", trigger=0.1, action="reduce"),
    ]
    results = evaluate_rules(state, rules)
    import os
    if os.environ.get("RISK_DEBUG"):
        print("RISK_DEBUG state:", {"weights": weights, "losses": losses,
                                    "equity": equity[:4]}, flush=True)
        print("RISK_DEBUG results:", results, flush=True)
    return results, state


class RiskEventProvider:
    """事件总线兼容的风险事件源 (组合级规则触发)。"""

    name = "risk"
    available = True
    reason = ""

    def __init__(self, username="default"):
        self.username = username

    def fetch_events(self, code=None):
        try:
            results, _ = _evaluate_portfolio_rules(self.username)
        except Exception as e:
            logger.warning("risk_events fetch 失败: %s", e)
            return []
        return risk_alerts_to_events(results)


def register_risk_provider(username="default", force=False):
    """注册/更新风险事件 provider (幂等, 每个用户名一个)。"""
    from event_alert import EVENT_PROVIDERS, register_event_provider
    key = f"risk:{username}"
    existing = _risky_providers.get(key)
    if existing is not None and not force:
        return existing
    provider = RiskEventProvider(username)
    _risky_providers[key] = provider
    register_event_provider(provider)
    return provider
