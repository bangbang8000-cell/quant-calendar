"""V5.4 T-5.4.4: WS 行情 2.0 测试 (TEST-PLAN 5.1 test_ws_v2.py)

订阅管理/增量推送/心跳/断线清理/重连。
"""
import os
import sys
import time

import pytest

sys.path.insert(0, os.path.join(os.path.dirname(__file__), '..', 'backend'))

import config
config.settings.SECRET_KEY = 'test-secret-ws2'
config.settings.ALGORITHM = 'HS256'

from auth import create_access_token  # noqa: E402
from api.v1 import market_ws  # noqa: E402
from realtime_quotes import RealtimeQuoteSource  # noqa: E402
from ws_v2 import (ConnectionManager, compute_quote_delta, build_frame,  # noqa: E402
                   should_heartbeat, heartbeat_frame)


# ─── ConnectionManager: 订阅管理 ────────────────────────────────────

class TestConnectionManager:
    def test_register_unregister(self):
        m = ConnectionManager()
        m.register("c1", "alice")
        assert m.active_count() == 1
        m.unregister("c1")
        assert m.active_count() == 0

    def test_user_tracked(self):
        m = ConnectionManager()
        m.register("c1", "alice")
        assert m.user_of("c1") == "alice"

    def test_set_and_get_subscription(self):
        m = ConnectionManager()
        m.register("c1", "alice")
        m.set_subscription("c1", ["600519.SH", "000001.SZ"])
        assert m.subscription_of("c1") == ["600519.SH", "000001.SZ"]

    def test_unregister_clears_subscription(self):
        m = ConnectionManager()
        m.register("c1", "alice")
        m.set_subscription("c1", ["600519.SH"])
        m.unregister("c1")
        assert m.subscription_of("c1") is None

    def test_multiple_clients(self):
        m = ConnectionManager()
        m.register("c1", "alice")
        m.register("c2", "bob")
        m.set_subscription("c1", ["600519.SH"])
        m.set_subscription("c2", ["000001.SZ"])
        assert m.active_count() == 2
        assert m.subscription_of("c1") == ["600519.SH"]
        assert m.subscription_of("c2") == ["000001.SZ"]


# ─── 增量推送: compute_quote_delta ──────────────────────────────────

def _payload(code, price, volume=100):
    return {"type": "quotes", "data": [{"code": code, "price": price,
                                        "volume": volume}]}


class TestDelta:
    def test_no_change_empty(self):
        p = _payload("600519.SH", 1500.0)
        assert compute_quote_delta(p, p) == []

    def test_price_change_delta(self):
        old = _payload("600519.SH", 1500.0)
        new = _payload("600519.SH", 1510.0)
        d = compute_quote_delta(old, new)
        assert len(d) == 1 and d[0]["code"] == "600519.SH"
        assert d[0]["price"] == 1510.0

    def test_added_code_delta(self):
        old = _payload("600519.SH", 1500.0)
        new = {"type": "quotes", "data": [
            {"code": "600519.SH", "price": 1500.0, "volume": 100},
            {"code": "000001.SZ", "price": 10.0, "volume": 100}]}
        d = compute_quote_delta(old, new)
        assert [x["code"] for x in d] == ["000001.SZ"]

    def test_removed_code_ignored(self):
        old = {"type": "quotes", "data": [
            {"code": "600519.SH", "price": 1500.0, "volume": 100},
            {"code": "000001.SZ", "price": 10.0, "volume": 100}]}
        new = _payload("600519.SH", 1500.0)
        assert compute_quote_delta(old, new) == []

    def test_none_prev_full_delta(self):
        new = _payload("600519.SH", 1500.0)
        assert len(compute_quote_delta(None, new)) == 1  # 首帧=全量


# ─── 帧构建 / 心跳 ──────────────────────────────────────────────────

class TestFrames:
    def test_build_frame_shape(self):
        f = build_frame("quotes", [1, 2], full=True)
        assert f["type"] == "quotes" and f["data"] == [1, 2]
        assert f.get("full") is True

    def test_build_frame_delta_flag(self):
        f = build_frame("quotes", [], delta=True)
        assert f.get("delta") is True

    def test_heartbeat_frame(self):
        f = heartbeat_frame()
        assert f["type"] == "ping"

    def test_should_heartbeat(self):
        assert should_heartbeat(0.0, 30.0) is False
        assert should_heartbeat(30.0, 30.0) is True
        assert should_heartbeat(35.0, 30.0) is True
        assert should_heartbeat(10.0, 5.0) is True

    def test_should_heartbeat_zero_interval(self):
        assert should_heartbeat(10.0, 0) is False  # 0 = 禁用心跳


# ─── WS 端点: 订阅/增量/心跳/清理/重连 (TestClient) ────────────────

@pytest.fixture
def ws_app():
    from fastapi import FastAPI
    from starlette.testclient import TestClient

    app = FastAPI()
    app.include_router(market_ws.router, prefix="/api")
    market_ws.QUOTE_PUSH_INTERVAL = 0.05
    market_ws.HEARTBEAT_INTERVAL = 0.03
    market_ws._connection_manager = ConnectionManager()
    market_ws._quote_source = RealtimeQuoteSource(fetcher=lambda codes: ({}, True))
    with TestClient(app) as c:
        yield c
    market_ws.QUOTE_PUSH_INTERVAL = 15.0
    market_ws.HEARTBEAT_INTERVAL = 30.0
    market_ws._quote_source = RealtimeQuoteSource()


def _token():
    return create_access_token({'sub': 'admin', 'role': 'admin'})


def test_ws_subscribe_pushes_snapshot(ws_app):
    """订阅 → 首个推送为快照 (full=true), 字段完整"""
    market_ws._quote_source = RealtimeQuoteSource(fetcher=lambda codes: (
        {"600519.SH": {"price": 1500.0, "pre_close": 1480.0,
                       "prev_price": 1490.0, "volume": 1000,
                       "avg_volume_5d": 500}}, False))
    with ws_app.websocket_connect(f'/api/market/ws/quotes?token={_token()}') as ws:
        ws.send_json({'subscribe': ['600519']})
        first = ws.receive_json()
        assert first["type"] == "quotes"
        assert first.get("full") is True
        assert first["data"] and first["data"][0]["code"] == "600519.SH"


def test_ws_incremental_delta_push(ws_app):
    """价格变化 → 二次推送仅含变化条目 (delta=true)"""
    state = {"price": 1500.0}
    def fetcher(codes):
        return ({"600519.SH": {"price": state["price"], "pre_close": 1480.0,
                               "prev_price": 1490.0, "volume": 1000,
                               "avg_volume_5d": 500}}, False)
    market_ws._quote_source = RealtimeQuoteSource(fetcher=fetcher)
    with ws_app.websocket_connect(f'/api/market/ws/quotes?token={_token()}') as ws:
        ws.send_json({'subscribe': ['600519']})
        first = ws.receive_json()
        assert first.get("full") is True
        state["price"] = 1510.0  # 第二次拉取价格变化
        second = ws.receive_json()
        assert second["type"] == "quotes"
        assert second.get("delta") is True
        assert [d["code"] for d in second["data"]] == ["600519.SH"]
        assert second["data"][0]["price"] == 1510.0


def test_ws_no_change_no_delta(ws_app):
    """价格未变 → 二次推送空 delta (data=[])"""
    market_ws._quote_source = RealtimeQuoteSource(fetcher=lambda codes: (
        {"600519.SH": {"price": 1500.0, "pre_close": 1480.0,
                       "prev_price": 1490.0, "volume": 1000,
                       "avg_volume_5d": 500}}, False))
    with ws_app.websocket_connect(f'/api/market/ws/quotes?token={_token()}') as ws:
        ws.send_json({'subscribe': ['600519']})
        ws.receive_json()  # 快照
        second = ws.receive_json()
        assert second.get("delta") is True and second["data"] == []


def test_ws_heartbeat_ping(ws_app):
    """心跳: 收到 ping 帧"""
    market_ws._quote_source = RealtimeQuoteSource(fetcher=lambda codes: ({}, True))
    with ws_app.websocket_connect(f'/api/market/ws/quotes?token={_token()}') as ws:
        ws.send_json({'subscribe': ['600519']})
        seen = set()
        for _ in range(5):
            msg = ws.receive_json()
            seen.add(msg["type"])
            if "ping" in seen:
                break
        assert "ping" in seen


def test_ws_disconnect_cleanup(ws_app):
    """断线 → ConnectionManager 清理, active_count 归零"""
    market_ws._quote_source = RealtimeQuoteSource(fetcher=lambda codes: ({}, True))
    with ws_app.websocket_connect(f'/api/market/ws/quotes?token={_token()}') as ws:
        ws.send_json({'subscribe': ['600519']})
    # 连接关闭后管理器中不再有该连接
    assert market_ws._connection_manager.active_count() == 0


def test_ws_reconnect_fresh_snapshot(ws_app):
    """重连: 新连接重新订阅 → 再次收到全量快照 (重连语义)"""
    market_ws._quote_source = RealtimeQuoteSource(fetcher=lambda codes: (
        {"600519.SH": {"price": 1500.0, "pre_close": 1480.0,
                       "prev_price": 1490.0, "volume": 1000,
                       "avg_volume_5d": 500}}, False))
    for _ in range(2):
        with ws_app.websocket_connect(f'/api/market/ws/quotes?token={_token()}') as ws:
            ws.send_json({'subscribe': ['600519']})
            first = ws.receive_json()
            assert first["type"] == "quotes" and first.get("full") is True


def test_ws_resubscribe_updates_subscription(ws_app):
    """中途更新订阅 → 按新订阅推送"""
    state = {"price": 1500.0}
    def fetcher(codes):
        q = {}
        if "600519.SH" in codes:
            q["600519.SH"] = {"price": state["price"], "pre_close": 1480.0,
                              "prev_price": 1490.0, "volume": 1000,
                              "avg_volume_5d": 500}
        if "000001.SZ" in codes:
            q["000001.SZ"] = {"price": 10.0, "pre_close": 9.9,
                              "prev_price": 9.95, "volume": 1000,
                              "avg_volume_5d": 500}
        return (q, False)
    market_ws._quote_source = RealtimeQuoteSource(fetcher=fetcher)
    with ws_app.websocket_connect(f'/api/market/ws/quotes?token={_token()}') as ws:
        ws.send_json({'subscribe': ['600519']})
        first = ws.receive_json()
        assert [d["code"] for d in first["data"]] == ["600519.SH"]
        ws.send_json({'subscribe': ['000001']})
        # 快照随订阅切换 → 下一推送为新订阅内容
        got = None
        for _ in range(4):
            msg = ws.receive_json()
            if msg["type"] == "quotes" and msg["data"]:
                got = msg
                break
        assert got is not None
        assert got["data"][0]["code"] == "000001.SZ"
