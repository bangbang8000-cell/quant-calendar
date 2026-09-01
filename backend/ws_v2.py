#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""V5.4 T-5.4.4: WS 行情 2.0 组件 (ws_v2.py)

- ConnectionManager: 多客户端订阅管理 (注册/注销/订阅读写/计数)
- compute_quote_delta: 增量计算 (仅返回变化的条目)
- build_frame / heartbeat_frame / should_heartbeat: 帧与心跳

纯函数/同步组件, 端点层 (api/v1/market_ws.py) 组合使用。
测试: tests/test_ws_v2.py。
"""
import time


class ConnectionManager:
    """WS 连接注册表: conn_id → {user, subscription}。"""

    def __init__(self):
        self._conns = {}

    def register(self, conn_id, user):
        self._conns[conn_id] = {"user": user, "subscription": None}

    def unregister(self, conn_id):
        self._conns.pop(conn_id, None)

    def active_count(self):
        return len(self._conns)

    def user_of(self, conn_id):
        c = self._conns.get(conn_id)
        return c["user"] if c else None

    def set_subscription(self, conn_id, codes):
        c = self._conns.get(conn_id)
        if c:
            c["subscription"] = list(codes)

    def subscription_of(self, conn_id):
        c = self._conns.get(conn_id)
        return c["subscription"] if c else None


def compute_quote_delta(prev_payload, new_payload):
    """增量: 返回 new_payload.data 中相对 prev_payload 变化的条目 (按 code 比较 price/volume)。

    prev_payload 为 None → 全部视为变化 (首帧快照)。
    """
    if prev_payload is None:
        return list((new_payload or {}).get("data") or [])
    prev_by_code = {}
    for item in (prev_payload.get("data") or []):
        prev_by_code[item.get("code")] = item
    delta = []
    for item in (new_payload.get("data") or []):
        code = item.get("code")
        prev = prev_by_code.get(code)
        if prev is None:
            delta.append(item)
            continue
        changed = (prev.get("price") != item.get("price") or
                   prev.get("volume") != item.get("volume"))
        if changed:
            delta.append(item)
    return delta


def build_frame(msg_type, data, full=False, delta=False):
    frame = {"type": msg_type, "data": data}
    if full:
        frame["full"] = True
    if delta:
        frame["delta"] = True
    return frame


def heartbeat_frame():
    return {"type": "ping"}


def should_heartbeat(elapsed, interval):
    """间隔 elapsed 秒是否应发心跳。interval<=0 → 禁用心跳。"""
    if not interval or interval <= 0:
        return False
    return elapsed >= interval
