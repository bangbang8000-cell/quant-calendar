#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""V5.0.4 T-5.0.43: 自定义预警规则 (rules_alert.py)

价格突破/跌破/涨跌幅/异动(量比)/入池 命中评估 + CRUD (SQLite alert_rules 表, 按用户隔离):
- validate_rule: 规则合法性
- check_rule(rule, quote): 纯函数命中判定 (边界 >= 命中)
- create/list/update/delete_alert_rule: CRUD
- evaluate_alerts(user, quotes_map): 检查用户启用的规则 → 命中列表
- hit_to_event: 命中 → 事件引擎事件 (V5.0.4 T-5.0.42 消费)

测试: tests/test_alert_rules.py。
"""
import logging
import time

from db import get_conn

logger = logging.getLogger(__name__)

ALERT_TYPES = ("price_above", "price_below", "pct_change", "volume_surge",
               "new_pool", "price_range")

# 6.1.2 (B4): 预警模板库 — 6 类常用规则, 一键套用 (threshold 为示例值)
ALERT_TEMPLATES = [
    {"key": "new_high_break", "label": "新高突破", "rule_type": "price_above",
     "threshold": "0", "description": "价格突破指定价位 (示例: 前高)", "params": "threshold"},
    {"key": "volume_surge_up", "label": "放量上涨", "rule_type": "volume_surge",
     "threshold": "2", "description": "量比放大 (示例: ≥2 倍) 且上涨", "params": "threshold"},
    {"key": "sharp_drop", "label": "急跌预警", "rule_type": "pct_change",
     "threshold": "-3", "description": "单日跌幅超阈值 (示例: ≤-3%)", "params": "threshold"},
    {"key": "pool_in", "label": "入池提醒", "rule_type": "new_pool",
     "threshold": "", "description": "股票新进入策略选股池", "params": ""},
    {"key": "position_stop", "label": "持仓止盈止损", "rule_type": "price_range",
     "threshold": "0,0", "description": "价格突破区间上沿或跌破下沿", "params": "low,high"},
    {"key": "ladder_open", "label": "连板打开", "rule_type": "pct_change",
     "threshold": "-9", "description": "连板股打开 (示例: 跌幅 ≤-9%)", "params": "threshold"},
]


def get_alert_templates():
    """返回模板清单 (副本, 防外部篡改)"""
    return [dict(t) for t in ALERT_TEMPLATES]


def _ts():
    return time.strftime("%Y-%m-%d %H:%M:%S", time.localtime())


def validate_rule(rule_type, threshold):
    """规则合法性 → None(合法) / 错误信息。"""
    if rule_type not in ALERT_TYPES:
        return f"未知规则类型: {rule_type}"
    if rule_type == "new_pool":
        return None
    if rule_type == "price_range":
        # 区间规则: threshold = "low,high"
        try:
            parts = [p.strip() for p in str(threshold).split(",")]
            if len(parts) != 2:
                return f"区间规则需要 low,high 两个值: {threshold!r}"
            float(parts[0])
            float(parts[1])
        except (TypeError, ValueError):
            return f"区间阈值必须为数值: {threshold!r}"
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
    if rtype == "price_range":
        # 6.1.2 (B4): 区间规则 — 价格突破上沿或跌破下沿即命中 (threshold="low,high")
        try:
            parts = [p.strip() for p in str(thr or "0,0").split(",")]
            low, high = float(parts[0]), float(parts[1])
            price = float(quote.get("price"))
            if low > 0 and price < low:
                return True
            if high > 0 and price > high:
                return True
        except (TypeError, ValueError, IndexError):
            return False
        return False
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
