# -*- coding: utf-8 -*-
"""V5.8 (T-5.8.4): Python SDK 测试 (TEST-PLAN 9.1 test_sdk.py)

- 单元: FakeTransport 注入验证请求构造/错误码映射/分页透传
- e2e: 若 uvicorn 可用, 起临时服务跑真实 登录+v3 调用 (跳过需显式原因)
"""
import json
import os
import sys
import threading

import pytest

BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SDK_DIR = os.path.join(BASE, "sdk")
sys.path.insert(0, SDK_DIR)

from quant_calendar_client import QuantCalendarClient, QuantCalendarError  # noqa: E402


class FakeTransport:
    """记录请求 + 按脚本返回 (status, json)。"""

    def __init__(self, script=None):
        self.script = list(script or [])
        self.calls = []
        self._i = 0

    def request(self, method, url, body=None, headers=None, timeout=15):
        self.calls.append({"method": method, "url": url, "body": body, "headers": headers})
        if self._i < len(self.script):
            item = self.script[self._i]
            self._i += 1
            return item
        return 404, {"error": {"code": "NOT_FOUND", "message": "no script", "status": 404}}


def _mk(data):
    return 200, {"success": True, "data": data}


# ─── 请求构造 ───────────────────────────────────────────────

def test_login_sets_token_and_payload():
    # 真实契约: data 内嵌 Token 对象
    t = FakeTransport([(200, {"success": True,
                              "data": {"access_token": "abc", "token_type": "bearer", "username": "alice", "role": "user"},
                              "user": {"username": "alice"}})])
    c = QuantCalendarClient("http://x", transport=t)
    info = c.login("alice", "pw")
    assert info["data"]["username"] == "alice"
    assert c.token == "abc"
    call = t.calls[0]
    assert call["method"] == "POST" and call["url"] == "http://x/api/login"
    assert call["body"] == {"username": "alice", "password": "pw"}


def test_auth_header_sent():
    t = FakeTransport([_mk({})])
    c = QuantCalendarClient("http://x", token="tok", transport=t)
    c.get_roles()
    h = t.calls[0]["headers"]
    assert h["Authorization"] == "Bearer tok"


def test_watchlist_pagination_query():
    t = FakeTransport([_mk({"items": [], "page": 2, "page_size": 10, "total": 0, "pages": 0})])
    c = QuantCalendarClient("http://x", token="t", transport=t)
    d = c.get_watchlist(page=2, page_size=10)
    assert "page=2" in t.calls[0]["url"] and "page_size=10" in t.calls[0]["url"]
    assert d["page"] == 2


def test_watchlist_q_filter_query():
    t = FakeTransport([_mk({})])
    c = QuantCalendarClient("http://x", token="t", transport=t)
    c.get_watchlist(q="茅台")
    assert "q=%E8%8C%85%E5%8F%B0" in t.calls[0]["url"]


def test_add_watchlist_body():
    t = FakeTransport([_mk({"code": "600519.SH"})])
    c = QuantCalendarClient("http://x", token="t", transport=t)
    c.add_watchlist("600519.SH", "贵州茅台")
    assert t.calls[0]["body"] == {"code": "600519.SH", "name": "贵州茅台"}


def test_evaluations_filters():
    t = FakeTransport([_mk({})])
    c = QuantCalendarClient("http://x", token="t", transport=t)
    c.get_evaluations(level="强烈推荐", code="600000.SH")
    url = t.calls[0]["url"]
    assert "level=%E5%BC%BA%E7%83%88%E6%8E%A8%E8%8D%90" in url
    assert "code=600000.SH" in url


# ─── 错误码映射 ─────────────────────────────────────────────

def test_error_envelope_raises_code():
    t = FakeTransport([(404, {"success": False, "error": {"code": "NOT_FOUND", "message": "不存在", "status": 404}})])
    c = QuantCalendarClient("http://x", token="t", transport=t)
    with pytest.raises(QuantCalendarError) as ei:
        c.remove_watchlist("999999.SZ")
    assert ei.value.code == "NOT_FOUND"
    assert ei.value.status == 404


def test_error_legacy_detail_mapping():
    t = FakeTransport([(403, {"detail": "权限不足"})])
    c = QuantCalendarClient("http://x", token="t", transport=t)
    with pytest.raises(QuantCalendarError) as ei:
        c.get_roles()
    assert ei.value.status == 403


def test_error_message_in_str():
    e = QuantCalendarError("FORBIDDEN", "无权", 403)
    assert "FORBIDDEN" in str(e) and "403" in str(e)


# ─── RBAC / 运维 ────────────────────────────────────────────

def test_get_roles_payload():
    t = FakeTransport([_mk({"count": 5, "roles": {}})])
    c = QuantCalendarClient("http://x", token="t", transport=t)
    assert c.get_roles()["count"] == 5


def test_get_my_permissions_payload():
    t = FakeTransport([_mk({"role": "user", "scope": "own", "permissions": ["watchlist.read"]})])
    c = QuantCalendarClient("http://x", token="t", transport=t)
    d = c.get_my_permissions()
    assert d["role"] == "user" and "watchlist.read" in d["permissions"]


def test_health_payload():
    t = FakeTransport([(200, {"status": "ok", "version": "5.8.0"})])
    c = QuantCalendarClient("http://x", transport=t)
    assert c.health()["version"] == "5.8.0"


# ─── e2e (真实服务, uvicorn 可用时) ─────────────────────────

def _uvicorn_available():
    try:
        import uvicorn  # noqa: F401
        return True
    except Exception:
        return False


@pytest.mark.skipif(not _uvicorn_available(), reason="需要 uvicorn 起临时服务")
def test_e2e_live_server(tmp_path):
    """真实 uvicorn + 真实 API: 登录 → v3 自选 → RBAC → 错误码"""
    import db
    import socket
    from user_manager import user_manager as um
    from fastapi import FastAPI
    import uvicorn

    old_data, old_file = db.DATA_DIR, db.DB_FILE
    db.DATA_DIR = str(tmp_path)
    db.DB_FILE = os.path.join(str(tmp_path), "app.db")
    db.init_db(); db.migrate()
    um.add_user("sdk_user", "pw", role="user")

    from api.v1.router import api_router
    app = FastAPI()
    app.include_router(api_router)

    @app.get("/api/health")
    async def _health():
        return {"status": "ok", "version": "5.8.0"}

    # 空闲端口
    with socket.socket() as s:
        s.bind(("127.0.0.1", 0))
        port = s.getsockname()[1]

    server = uvicorn.Server(uvicorn.Config(app, host="127.0.0.1", port=port, log_level="error"))
    th = threading.Thread(target=server.run, daemon=True)
    th.start()
    try:
        import time
        deadline = time.time() + 15
        alive = False
        while time.time() < deadline and not alive:
            try:
                c = QuantCalendarClient("http://127.0.0.1:%d" % port)
                c.health()
                alive = True
            except Exception:
                time.sleep(0.2)
        assert alive, "服务未在超时内就绪"
        c.login("sdk_user", "pw")
        wl = c.get_watchlist()
        assert wl["total"] == 0
        c.add_watchlist("600519.SH", "贵州茅台")
        assert c.get_watchlist()["total"] == 1
        perms = c.get_my_permissions()
        assert perms["role"] == "user"
        # 越权 → FORBIDDEN (user 不能建角色)
        from quant_calendar_client import QuantCalendarError
        with pytest.raises(QuantCalendarError) as ei:
            c._request("POST", "/api/rbac/roles", body={"role_id": "x", "permissions": []})
        assert ei.value.status == 403
    finally:
        server.should_exit = True
        th.join(timeout=5)
        db.DATA_DIR, db.DB_FILE = old_data, old_file
