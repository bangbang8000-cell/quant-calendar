#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""V5.4 T-5.4.3: 自定义预警规则 (rules_alert.py)

价格突破/跌破/涨跌幅/异动(量比)/入池 命中评估 + CRUD (SQLite alert_rules 表, 按用户隔离):
- validate_rule: 规则合法性
- check_rule(rule, quote): 纯函数命中判定 (边界 >= 命中)
- create/list/update/delete_alert_rule: CRUD
- evaluate_alerts(user, quotes_map): 检查用户启用的规则 → 命中列表
- hit_to_event: 命中 → 事件引擎事件 (V5.4 T-5.4.2 消费)

测试: tests/test_alert_rules.py。
"""
import json
import logging
import time

from db import get_conn

logger = logging.getLogger(__name__)

ALERT_TYPES = ("price_above", "price_below", "pct_change", "volume_surge",
               "new_pool")


def _ts():
    return time.strftime("%Y-%m-%d %H:%M:%S", time.localtime())


def validate_rule(rule_type, threshold):
    """规则合法性 → None(合法) / 错误信息。"""
    if rule_type not in ALERT_TYPES:
        return f"未知规则类型: {rule_type}"
    if rule_type == "new_pool":
        return None
    try:
        float(threshold)
    except (TypeError, ValueError):
        return f"阈值必须为数值: {threshold!r}"
    return None


def check_rule(rule, quote):
    """单规则命中判定 (纯函数, 边界 >= 命中)。quote: {price, pct_chg, volume, avg_volume_5d, in_pool}"""
    rtype = rule.get("rule_type")
    thr = rule.get("threshold")
    if rtype == "price_above":
        try:
            return float(quote.get("price")) >= float(thr)
        except (TypeError, ValueError):
            return False
    if rtype == "price_below":
        try:
            return float(quote.get("price")) <= float(thr)
        except (TypeError, ValueError):
            return False
    if rtype == "pct_change":
        try:
            pct = float(quote.get("pct_chg"))
            # 负阈值 = 跌幅超阈值 (pct <= thr); 正阈值 = 涨幅超阈值 (pct >= thr)
            return pct <= float(thr) if float(thr) < 0 else pct >= float(thr)
        except (TypeError, ValueError):
            return False
    if rtype == "volume_surge":
        try:
            avg = float(quote.get("avg_volume_5d") or 0)
            vol = float(quote.get("volume") or 0)
            if avg <= 0:
                return False
            return vol / avg >= float(thr)
        except (TypeError, ValueError):
            return False
    if rtype == "new_pool":
        return bool(quote.get("in_pool"))
    return False


def _row_to_rule(row):
    return {"id": row["id"], "user": row["user"], "stock_code": row["stock_code"],
            "rule_type": row["rule_type"], "threshold": row["threshold"],
            "enabled": bool(row["enabled"]), "created_at": row["created_at"]}


def create_alert_rule(user, stock_code, rule_type, threshold=None, enabled=True):
    err = validate_rule(rule_type, threshold)
    if err:
        raise ValueError(err)
    conn = get_conn()
    try:
        cur = conn.execute(
            "INSERT INTO alert_rules (user, stock_code, rule_type, threshold, enabled, created_at) "
            "VALUES (?,?,?,?,?,?)",
            (user, stock_code, rule_type,
             float(threshold) if threshold is not None else None,
             1 if enabled else 0, _ts()))
        conn.commit()
        row = conn.execute("SELECT * FROM alert_rules WHERE id=?",
                           (cur.lastrowid,)).fetchone()
        return _row_to_rule(row)
    finally:
        conn.close()


def list_alert_rules(user):
    conn = get_conn()
    try:
        rows = conn.execute(
            "SELECT * FROM alert_rules WHERE user=? ORDER BY id DESC",
            (user,)).fetchall()
        return [_row_to_rule(r) for r in rows]
    finally:
        conn.close()


def update_alert_rule(rule_id, threshold=None, enabled=None, stock_code=None,
                      rule_type=None):
    conn = get_conn()
    try:
        if threshold is not None:
            conn.execute("UPDATE alert_rules SET threshold=? WHERE id=?",
                         (float(threshold), rule_id))
        if enabled is not None:
            conn.execute("UPDATE alert_rules SET enabled=? WHERE id=?",
                         (1 if enabled else 0, rule_id))
        if stock_code is not None:
            conn.execute("UPDATE alert_rules SET stock_code=? WHERE id=?",
                         (stock_code, rule_id))
        if rule_type is not None:
            conn.execute("UPDATE alert_rules SET rule_type=? WHERE id=?",
                         (rule_type, rule_id))
        conn.commit()
        row = conn.execute("SELECT * FROM alert_rules WHERE id=?",
                           (rule_id,)).fetchone()
        return _row_to_rule(row) if row else None
    finally:
        conn.close()


def delete_alert_rule(rule_id):
    conn = get_conn()
    try:
        cur = conn.execute("DELETE FROM alert_rules WHERE id=?", (rule_id,))
        conn.commit()
        return cur.rowcount > 0
    finally:
        conn.close()


def evaluate_alerts(user, quotes_map):
    """检查用户启用的规则 → 命中列表 [{stock_code, rule_type, threshold, triggered, quote}]。"""
    rules = [r for r in list_alert_rules(user) if r.get("enabled")]
    hits = []
    for rule in rules:
        quote = (quotes_map or {}).get(rule["stock_code"])
        if quote is None:
            continue
        triggered = check_rule(rule, quote)
        hits.append({"stock_code": rule["stock_code"],
                     "rule_type": rule["rule_type"],
                     "threshold": rule["threshold"], "triggered": triggered,
                     "quote": quote})
    return hits


def hit_to_event(hit):
    """命中 → 事件引擎事件 (type=alert)。"""
    code = hit.get("stock_code", "")
    rtype = hit.get("rule_type", "")
    thr = hit.get("threshold")
    title = f"预警 {code} {rtype}"
    content = f"规则 {rtype} 阈值 {thr} 已触发"
    from events import make_event
    return make_event("alert", title, content,
                      payload={"stock_code": code, "rule_type": rtype,
                               "threshold": thr},
                      dedup_key=f"alert:{code}:{rtype}:{thr}")
