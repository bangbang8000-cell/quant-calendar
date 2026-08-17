#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Webhook 订阅与投递 (FR-3.17.15 / 开放 API v2)
- 订阅表 webhook_subscriptions (url, events JSON 数组, enabled)
- 支持事件: evaluate_done / review_ready / anomaly_scan_done / market_review_ready
- dispatch(event, payload, poster=None) 纯函数可测: 注入 poster 即可 mock 投递,
  真实投递默认用标准库 urllib (POST JSON, 超时/失败仅 logging, 不崩溃)
"""
import json
import logging
import urllib.request
from datetime import datetime

import db

logger = logging.getLogger(__name__)

# 开放 API 支持订阅的事件
WEBHOOK_EVENTS = ("evaluate_done", "review_ready", "anomaly_scan_done", "market_review_ready")

# 单次投递超时 (秒)
WEBHOOK_TIMEOUT = 5

_WEBHOOK_SCHEMA = """
CREATE TABLE IF NOT EXISTS webhook_subscriptions (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    url TEXT NOT NULL,
    events TEXT NOT NULL DEFAULT '[]',
    enabled INTEGER NOT NULL DEFAULT 1,
    created_at TEXT NOT NULL
);
CREATE INDEX IF NOT EXISTS idx_webhook_subscriptions_enabled
    ON webhook_subscriptions(enabled);
"""


def _ensure_table() -> None:
    """幂等建表 (生产由 db.migrate 建; 测试/旧库兜底)"""
    try:
        with db._db_lock:
            conn = db.get_conn()
            conn.executescript(_WEBHOOK_SCHEMA)
            conn.commit()
            conn.close()
    except Exception as e:
        logger.warning("webhook 建表失败: %s", e)


def add_subscription(url: str, events: list, enabled: bool = True) -> int:
    """订阅事件, 返回订阅 id"""
    _ensure_table()
    events = [e for e in (events or []) if e in WEBHOOK_EVENTS]
    with db._db_lock:
        conn = db.get_conn()
        cur = conn.execute(
            "INSERT INTO webhook_subscriptions (url, events, enabled, created_at) VALUES (?,?,?,?)",
            (url.strip(), json.dumps(events, ensure_ascii=False),
             1 if enabled else 0, datetime.now().strftime("%Y-%m-%d %H:%M:%S"))
        )
        conn.commit()
        new_id = cur.lastrowid
        conn.close()
    logger.info("Webhook 订阅已添加 id=%s url=%s events=%s", new_id, url, events)
    return new_id


def list_subscriptions() -> list:
    """列出全部订阅 (events 解析为 list)"""
    _ensure_table()
    try:
        with db._db_lock:
            conn = db.get_conn()
            rows = conn.execute(
                "SELECT id, url, events, enabled, created_at "
                "FROM webhook_subscriptions ORDER BY id DESC"
            ).fetchall()
            conn.close()
        result = []
        for r in rows:
            item = dict(r)
            item["enabled"] = bool(item.get("enabled"))
            try:
                item["events"] = json.loads(r["events"]) if r["events"] else []
            except (ValueError, TypeError):
                item["events"] = []
            result.append(item)
        return result
    except Exception as e:
        logger.warning("list_subscriptions 失败: %s", e)
        return []


def delete_subscription(sub_id: int) -> bool:
    """删除订阅"""
    _ensure_table()
    try:
        with db._db_lock:
            conn = db.get_conn()
            cur = conn.execute("DELETE FROM webhook_subscriptions WHERE id=?", (sub_id,))
            conn.commit()
            ok = cur.rowcount > 0
            conn.close()
        if ok:
            logger.info("Webhook 订阅已删除 id=%s", sub_id)
        return ok
    except Exception as e:
        logger.warning("delete_subscription 失败: %s", e)
        return False


def set_subscription_enabled(sub_id: int, enabled: bool) -> bool:
    """启用/停用订阅"""
    _ensure_table()
    try:
        with db._db_lock:
            conn = db.get_conn()
            cur = conn.execute(
                "UPDATE webhook_subscriptions SET enabled=? WHERE id=?",
                (1 if enabled else 0, sub_id)
            )
            conn.commit()
            ok = cur.rowcount > 0
            conn.close()
        return ok
    except Exception as e:
        logger.warning("set_subscription_enabled 失败: %s", e)
        return False


def _post_json(url: str, payload: dict, timeout: float = WEBHOOK_TIMEOUT) -> bool:
    """真实投递: 标准库 urllib POST JSON 到 url; 失败/超时返回 False (不抛)"""
    try:
        data = json.dumps(payload, ensure_ascii=False).encode("utf-8")
        req = urllib.request.Request(
            url, data=data,
            headers={"Content-Type": "application/json"},
            method="POST"
        )
        with urllib.request.urlopen(req, timeout=timeout) as resp:
            return resp.status < 400
    except Exception as e:
        logger.warning("Webhook 投递失败 %s: %s", url, e)
        return False


def dispatch(event: str, payload: dict, poster=None) -> dict:
    """对订阅该事件的启用 Webhook 逐个投递 (纯函数, 可注入 poster 测试)

    Args:
        event: 事件名 (须在 WEBHOOK_EVENTS)
        payload: 投递内容 (包装为 {"event": ..., "payload": ...})
        poster: callable(url, payload) -> bool; 缺省用 _post_json (urllib)

    Returns:
        {"event", "total", "ok", "failed", "delivered": [url, ...]}
        未知事件 / 无订阅: total=0, 不抛错
    """
    if event not in WEBHOOK_EVENTS:
        logger.warning("未知 webhook 事件: %s", event)
        return {"event": event, "total": 0, "ok": 0, "failed": 0, "delivered": []}
    post = poster or _post_json
    rows = [r for r in list_subscriptions()
            if r.get("enabled") and event in (r.get("events") or [])]
    ok = 0
    delivered = []
    for r in rows:
        try:
            success = post(r["url"], {"event": event, "payload": payload})
        except Exception as e:
            logger.warning("Webhook 投递异常 %s: %s", r["url"], e)
            success = False
        if success:
            ok += 1
            delivered.append(r["url"])
    return {"event": event, "total": len(rows), "ok": ok,
            "failed": len(rows) - ok, "delivered": delivered}
