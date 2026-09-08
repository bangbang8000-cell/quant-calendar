#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""V5.0.5 T-5.0.53: 报表订阅 (report_subscribe.py)

定时生成 + 通知中心投递闭环:
- create/list/delete/set_enabled: 订阅 CRUD (SQLite report_subscriptions, 按用户隔离)
- is_due(schedule, date): daily 每天 / weekly 周一
- generate_and_dispatch(sub, date, providers, channel_factory): 生成报表 + 多通道投递 +
  记录 last_run_date (同日幂等)
- run_due_subscriptions(today, providers, channel_factory): 扫描所有到期订阅 → 投递

测试: tests/test_report_subscribe.py (TEST-PLAN 6.1 定时生成+通知中心投递闭环)。
"""
import json
import logging
import time

from db import get_conn

logger = logging.getLogger(__name__)

VALID_SCHEDULES = ("daily", "weekly")
DEFAULT_BLOCKS = ("period", "strategy", "evaluate")
DEFAULT_CHANNELS = ("feishu",)
DEFAULT_RECIPIENTS = ()


def _ts():
    return time.strftime("%Y-%m-%d %H:%M:%S", time.localtime())


def _row_to_sub(row):
    return {"id": row["id"], "user": row["user"], "schedule": row["schedule"],
            "blocks": json.loads(row["blocks"] or "[]"),
            "channels": json.loads(row["channels"] or "[]"),
            "recipients": json.loads(row["recipients"] or "[]"),
            "enabled": bool(row["enabled"]),
            "last_run_date": row["last_run_date"],
            "created_at": row["created_at"]}


# ─── CRUD ────────────────────────────────────────────────────────

def create_report_subscription(user, schedule, blocks=None, channels=None,
                               recipients=None, enabled=True):
    schedule = (schedule or "daily").lower()
    if schedule not in VALID_SCHEDULES:
        raise ValueError(f"未知调度: {schedule}")
    blocks = list(blocks) if blocks else list(DEFAULT_BLOCKS)
    channels = list(channels) if channels else list(DEFAULT_CHANNELS)
    recipients = list(recipients) if recipients else []
    conn = get_conn()
    try:
        cur = conn.execute(
            "INSERT INTO report_subscriptions (user, schedule, blocks, channels, recipients, enabled, last_run_date, created_at) "
            "VALUES (?,?,?,?,?,?,NULL,?)",
            (user, schedule, json.dumps(blocks), json.dumps(channels),
             json.dumps(recipients), 1 if enabled else 0, _ts()))
        conn.commit()
        row = conn.execute("SELECT * FROM report_subscriptions WHERE id=?",
                           (cur.lastrowid,)).fetchone()
        return _row_to_sub(row)
    finally:
        conn.close()


def _sub_by_id(sub_id):
    if sub_id is None:
        return None
    conn = get_conn()
    try:
        row = conn.execute("SELECT * FROM report_subscriptions WHERE id=?",
                           (sub_id,)).fetchone()
        return _row_to_sub(row) if row else None
    finally:
        conn.close()


def list_report_subscriptions(user):
    conn = get_conn()
    try:
        rows = conn.execute(
            "SELECT * FROM report_subscriptions WHERE user=? ORDER BY id DESC",
            (user,)).fetchall()
        return [_row_to_sub(r) for r in rows]
    finally:
        conn.close()


def _all_subscriptions():
    conn = get_conn()
    try:
        rows = conn.execute("SELECT * FROM report_subscriptions").fetchall()
        return [_row_to_sub(r) for r in rows]
    finally:
        conn.close()


def delete_report_subscription(sub_id):
    conn = get_conn()
    try:
        cur = conn.execute("DELETE FROM report_subscriptions WHERE id=?",
                           (sub_id,))
        conn.commit()
        return cur.rowcount > 0
    finally:
        conn.close()


def set_subscription_enabled(sub_id, enabled):
    conn = get_conn()
    try:
        conn.execute("UPDATE report_subscriptions SET enabled=? WHERE id=?",
                     (1 if enabled else 0, sub_id))
        conn.commit()
    finally:
        conn.close()


# ─── 调度判定 ────────────────────────────────────────────────────

def is_due(schedule, date):
    """daily: 每天; weekly: 周一。未知调度 → False。"""
    schedule = (schedule or "").lower()
    if schedule == "daily":
        return True
    if schedule == "weekly":
        import datetime
        return datetime.datetime.strptime(date, "%Y-%m-%d").weekday() == 0
    return False


# ─── 生成 + 投递 ─────────────────────────────────────────────────

def _build_channel(name, channel_factory):
    if channel_factory is not None:
        return channel_factory(name)
    from notify import build_channel
    return build_channel(name, {})


def generate_and_dispatch(sub, date=None, providers=None, channel_factory=None):
    """生成报表 (report_center) → 多通道投递 (notify) → 记录 last_run_date。

    同日幂等: 已在该 date 生成过 → 不再投递。从 DB 重读订阅保证幂等性。
    """
    sub = _sub_by_id(sub.get("id")) or sub  # 重读, 拿到最新 last_run_date/enabled
    if not sub.get("enabled"):
        return {"dispatched": 0, "reason": "disabled"}
    if not date:
        import datetime
        date = datetime.date.today().isoformat()
    if sub.get("last_run_date") == date:
        return {"dispatched": 0, "reason": "already-run"}

    from report_center import render_report
    title = "量化选股" + ("周报" if sub.get("schedule") == "weekly" else "日报")
    out = render_report(title, sub.get("blocks") or list(DEFAULT_BLOCKS),
                        date, providers or {})
    channels = [c for c in (sub.get("channels") or list(DEFAULT_CHANNELS))]
    recipients = sub.get("recipients") or [""]
    dispatched = 0
    errors = []
    for ch_name in channels:
        try:
            ch = _build_channel(ch_name, channel_factory)
        except Exception as e:
            errors.append(f"{ch_name}: {e}")
            continue
        for r in recipients:
            from notify import send_notification
            res = send_notification(ch, r, title, out["content"])
            if res.get("ok"):
                dispatched += 1
            else:
                errors.append(f"{ch_name}: {res.get('error')}")

    # 记录当日已生成 (无论投递成败, 避免重复触发)
    conn = get_conn()
    try:
        conn.execute("UPDATE report_subscriptions SET last_run_date=? WHERE id=?",
                     (date, sub["id"]))
        conn.commit()
    finally:
        conn.close()
    return {"dispatched": dispatched, "date": date, "errors": errors,
            "report_blocks": len(sub.get("blocks") or [])}


def run_due_subscriptions(today=None, providers=None, channel_factory=None):
    """扫描所有到期订阅 → 生成投递。返回 {dispatched, total, results}。"""
    if not today:
        import datetime
        today = datetime.date.today().isoformat()
    total = 0
    dispatched = 0
    results = []
    for sub in _all_subscriptions():
        if not sub.get("enabled"):
            continue
        if not is_due(sub.get("schedule"), today):
            continue
        total += 1
        r = generate_and_dispatch(sub, date=today, providers=providers,
                                  channel_factory=channel_factory)
        dispatched += r.get("dispatched", 0)
        results.append({"sub_id": sub["id"], **r})
    return {"dispatched": dispatched, "total": total, "results": results}
