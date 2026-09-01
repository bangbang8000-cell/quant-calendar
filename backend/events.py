#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""V5.4 T-5.4.2: 事件引擎 2.0 (events.py)

事件→订阅→通道 闭环 + 重试/去重 + 投递日志:
- make_event: 事件构造 (id/dedup_key/created_at)
- 订阅 CRUD (SQLite event_subscriptions 表, 按用户隔离)
- EventEngine.publish: 去重窗口 → 匹配订阅 → 逐通道投递 (notify.dispatch) →
  写 event_delivery_log; 单通道故障不影响其他
- 去重: event_dedup 表 (dedup_key, delivered_at), 窗口 DEFAULT_DEDUP_WINDOW 秒内跳过

测试: tests/test_event_engine.py (TEST-PLAN 5.1/5.2)。
"""
import hashlib
import json
import logging
import time
import uuid

from db import get_conn

logger = logging.getLogger(__name__)

DEFAULT_DEDUP_WINDOW = 3600  # 秒: 同 dedup_key 窗口内只投一次
DEFAULT_CHANNELS = {}


def _now():
    return time.time()


def _ts():
    return time.strftime("%Y-%m-%d %H:%M:%S", time.localtime(_now()))


def make_event(event_type, title, content, payload=None, dedup_key=None):
    """构造事件: {id, type, title, content, payload, created_at, dedup_key}"""
    event_id = uuid.uuid4().hex
    if not dedup_key:
        raw = f"{event_type}|{title}|{content}"
        dedup_key = hashlib.sha1(raw.encode("utf-8")).hexdigest()
    return {"id": event_id, "type": event_type, "title": title,
            "content": content, "payload": payload or {},
            "created_at": _ts(), "dedup_key": dedup_key}


# ─── 订阅 CRUD (SQLite) ──────────────────────────────────────

def _sub_from_row(row):
    return {"id": row["id"], "user": row["user"], "event_type": row["event_type"],
            "channels": json.loads(row["channels"] or "[]"),
            "recipients": json.loads(row["recipients"] or "[]"),
            "enabled": bool(row["enabled"]), "created_at": row["created_at"]}


def create_subscription(user, event_type, channels, recipients, enabled=True):
    conn = get_conn()
    try:
        cur = conn.execute(
            "INSERT INTO event_subscriptions (user, event_type, channels, recipients, enabled, created_at) "
            "VALUES (?,?,?,?,?,?)",
            (user, event_type, json.dumps(channels or []),
             json.dumps(recipients or []), 1 if enabled else 0, _ts()))
        conn.commit()
        row = conn.execute("SELECT * FROM event_subscriptions WHERE id=?",
                           (cur.lastrowid,)).fetchone()
        return _sub_from_row(row)
    finally:
        conn.close()


def list_subscriptions(user):
    conn = get_conn()
    try:
        rows = conn.execute(
            "SELECT * FROM event_subscriptions WHERE user=? ORDER BY id DESC",
            (user,)).fetchall()
        return [_sub_from_row(r) for r in rows]
    finally:
        conn.close()


def update_subscription(sub_id, channels=None, recipients=None, event_type=None):
    conn = get_conn()
    try:
        if channels is not None:
            conn.execute("UPDATE event_subscriptions SET channels=? WHERE id=?",
                         (json.dumps(channels), sub_id))
        if recipients is not None:
            conn.execute("UPDATE event_subscriptions SET recipients=? WHERE id=?",
                         (json.dumps(recipients), sub_id))
        if event_type is not None:
            conn.execute("UPDATE event_subscriptions SET event_type=? WHERE id=?",
                         (event_type, sub_id))
        conn.commit()
        row = conn.execute("SELECT * FROM event_subscriptions WHERE id=?",
                           (sub_id,)).fetchone()
        return _sub_from_row(row) if row else None
    finally:
        conn.close()


def set_subscription_enabled(sub_id, enabled):
    conn = get_conn()
    try:
        conn.execute("UPDATE event_subscriptions SET enabled=? WHERE id=?",
                     (1 if enabled else 0, sub_id))
        conn.commit()
    finally:
        conn.close()


def delete_subscription(sub_id):
    conn = get_conn()
    try:
        cur = conn.execute("DELETE FROM event_subscriptions WHERE id=?", (sub_id,))
        conn.commit()
        return cur.rowcount > 0
    finally:
        conn.close()


def _is_deduped(dedup_key, window):
    conn = get_conn()
    try:
        row = conn.execute("SELECT delivered_at FROM event_dedup WHERE dedup_key=?",
                           (dedup_key,)).fetchone()
        if not row:
            return False
        try:
            delivered = float(row["delivered_at"])
        except (TypeError, ValueError):
            delivered = 0.0
        return (_now() - delivered) < window
    finally:
        conn.close()


def _mark_delivered(dedup_key):
    conn = get_conn()
    try:
        conn.execute(
            "INSERT OR REPLACE INTO event_dedup (dedup_key, delivered_at) VALUES (?,?)",
            (dedup_key, str(_now())))
        conn.commit()
    finally:
        conn.close()


def _clear_dedup():
    conn = get_conn()
    try:
        conn.execute("DELETE FROM event_dedup")
        conn.commit()
    finally:
        conn.close()


class EventEngine:
    """事件引擎: 去重 → 匹配订阅 → 投递 → 日志。"""

    def __init__(self, db_store=True, dedup_window=DEFAULT_DEDUP_WINDOW):
        self.db_store = db_store
        self.dedup_window = dedup_window
        self._channels = dict(DEFAULT_CHANNELS)

    def register_channel(self, name, factory):
        self._channels[name] = factory

    def _build_channel(self, name):
        from notify import build_channel
        if name in self._channels:
            return self._channels[name]({})
        return build_channel(name, {})

    def _matches(self, sub, event):
        return (sub.get("enabled") and
                sub.get("event_type") == event["type"])

    def publish(self, event, user=None, retries=3, base_delay=0.1):
        """发布事件 → 匹配订阅 (user 过滤可选) → 投递 + 日志。

        返回投递结果列表 [{ok, attempts, error, channel, recipient, sub_id}]。
        去重: 同 dedup_key 窗口内第二次发布直接跳过 (不投递)。
        """
        subs = list_subscriptions(user) if user else self._all_subs()
        matched = [s for s in subs if self._matches(s, event)]
        if not matched:
            return []
        if self.db_store and _is_deduped(event["dedup_key"], self.dedup_window):
            logger.debug("事件去重跳过: %s", event["dedup_key"])
            return []
        results = []
        for sub in matched:
            for ch_name in sub.get("channels") or []:
                try:
                    ch = self._build_channel(ch_name)
                except Exception as e:
                    logger.warning("通道 %s 构造失败: %s", ch_name, e)
                    continue
                for recipient in sub.get("recipients") or [""]:
                    from notify import send_notification
                    r = send_notification(ch, recipient, event["title"],
                                          event["content"], retries=retries,
                                          base_delay=base_delay)
                    results.append({**r, "sub_id": sub["id"],
                                    "event_type": event["type"]})
                    self._log_delivery(event, ch_name, recipient, r)
        if self.db_store:
            _mark_delivered(event["dedup_key"])
        return results

    def _all_subs(self):
        conn = get_conn()
        try:
            rows = conn.execute("SELECT * FROM event_subscriptions").fetchall()
            return [_sub_from_row(r) for r in rows]
        finally:
            conn.close()

    def _log_delivery(self, event, channel, recipient, result):
        if not self.db_store:
            return
        conn = get_conn()
        try:
            conn.execute(
                "INSERT INTO event_delivery_log (event_id, event_type, title, channel, recipient, ok, attempts, error, created_at) "
                "VALUES (?,?,?,?,?,?,?,?,?)",
                (event["id"], event["type"], event["title"], channel,
                 recipient, 1 if result.get("ok") else 0,
                 result.get("attempts", 1), result.get("error"), _ts()))
            conn.commit()
        except Exception as e:
            logger.warning("投递日志写入失败: %s", e)
        finally:
            conn.close()

    def delivery_log(self, limit=50):
        conn = get_conn()
        try:
            rows = conn.execute(
                "SELECT * FROM event_delivery_log ORDER BY id DESC LIMIT ?",
                (limit,)).fetchall()
            return [dict(r) for r in rows]
        finally:
            conn.close()
