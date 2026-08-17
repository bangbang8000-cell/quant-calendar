# -*- coding: utf-8 -*-
"""
FR-3.17.15 (开放 API v2) 测试
- API Key 签发/吊销/list、明文不落库（仅哈希）、常数时间校验
- 过期/禁用 Key 拒绝、无 Key/坏 Key 401、只读端点返回格式（含 degraded）
- Key 维度限流 429、Swagger 开关（开→/docs 200；关→404）
- Webhook 订阅增删、dispatch 正确 URL/事件、失败不崩、事件名校验
"""
import importlib
import json

import pytest
from fastapi import FastAPI
from fastapi.testclient import TestClient

import db


# ─── 共享工具 ─────────────────────────────────────────────────

def _api_key_fixture():
    """生成一个新的 API Key (明文, record)"""
    import api_keys
    return api_keys.generate_api_key(name="pytest-key", role="read", expire_days=365)


@pytest.fixture(autouse=True)
def _reset_openapi_limiter():
    """每个测试后重置开放 API Key 维度限流计数 (避免跨测试污染)"""
    from api.v1 import openapi as opmod
    opmod._openapi_limiter.reset()
    yield
    opmod._openapi_limiter.reset()


@pytest.fixture
def openapi_app():
    """独立 FastAPI app: 仅挂载开放 API 路由 + 覆盖 admin 鉴权 (不触网)"""
    from api.v1.openapi import router
    from auth import get_admin_user

    app = FastAPI()
    app.include_router(router)
    app.dependency_overrides[get_admin_user] = lambda: {"username": "admin", "role": "admin"}
    return app


@pytest.fixture
def client(openapi_app):
    return TestClient(openapi_app)


# ─── A. API Key 生成/吊销/list (单元) ──────────────────────────

class TestApiKeyUnit:
    def test_generate_returns_plaintext_once(self):
        """generate_api_key 返回明文 key + 元数据 record (前缀为 secret 前 8 位)"""
        import api_keys
        plain, record = _api_key_fixture()
        assert plain.startswith("qc_")
        assert len(plain) > 20
        assert record["prefix"] == plain.split("_", 1)[1][:8]
        assert record["enabled"] is True
        assert record["name"] == "pytest-key"
        assert record["role"] == "read"

    def test_list_api_keys(self):
        """list_api_keys 返回全部 Key 元数据 (按 id 倒序)"""
        import api_keys
        api_keys.generate_api_key(name="a")
        api_keys.generate_api_key(name="b")
        keys = api_keys.list_api_keys()
        assert len(keys) >= 2
        names = [k["name"] for k in keys]
        assert "a" in names and "b" in names
        assert keys[0]["id"] > keys[1]["id"]  # 倒序

    def test_revoke_api_key(self):
        """revoke_api_key 置 enabled=0 (软吊销)"""
        import api_keys
        _plain, record = _api_key_fixture()
        assert api_keys.get_api_key(record["id"])["enabled"] is True
        assert api_keys.revoke_api_key(record["id"]) is True
        assert api_keys.get_api_key(record["id"])["enabled"] == 0

    def test_revoke_nonexistent_key_returns_false(self):
        import api_keys
        assert api_keys.revoke_api_key(999999) is False

    def test_plaintext_not_stored_in_db(self):
        """库中只存 sha256 哈希, 断言整表 dump 不含明文"""
        import api_keys
        plain, record = _api_key_fixture()
        with db._db_lock:
            conn = db.get_conn()
            row = conn.execute("SELECT key_hash FROM api_keys WHERE id=?", (record["id"],)).fetchone()
            all_rows = conn.execute("SELECT * FROM api_keys").fetchall()
            conn.close()
        assert row["key_hash"] == api_keys.hash_key(plain)
        assert row["key_hash"] != plain
        assert plain not in row["key_hash"]
        dump = json.dumps([dict(r) for r in all_rows], ensure_ascii=False)
        assert plain not in dump, "库中不得出现明文 key"

    def test_list_api_keys_no_hash_no_plaintext(self):
        """list 不返回 key_hash / 明文"""
        import api_keys
        plain, _record = _api_key_fixture()
        keys = api_keys.list_api_keys()
        dump = json.dumps(keys, ensure_ascii=False)
        assert "key_hash" not in dump
        assert plain not in dump

    def test_verify_valid_key(self):
        import api_keys
        plain, record = _api_key_fixture()
        got = api_keys.verify_api_key(plain)
        assert got is not None
        assert got["id"] == record["id"]

    def test_verify_wrong_key_none(self):
        import api_keys
        _plain, _record = _api_key_fixture()
        assert api_keys.verify_api_key("qc_wrongwrongwrongwrongwrongwrongwrong") is None

    def test_verify_empty_key_none(self):
        import api_keys
        assert api_keys.verify_api_key("") is None
        assert api_keys.verify_api_key(None) is None

    def test_constant_time_compare_used(self):
        """verify 使用常数时间比较 (hmac.compare_digest)"""
        import api_keys
        plain, record = _api_key_fixture()
        # 构造与存储哈希一致的场景; 验证不同输入长度也安全返回
        assert api_keys._constant_time_eq("abc", "abc") is True
        assert api_keys._constant_time_eq("abc", "abd") is False
        assert api_keys._constant_time_eq("abc", "a") is False
        assert api_keys.verify_api_key(plain)["id"] == record["id"]

    def test_expired_key_rejected(self):
        """expires_at 在过去 → verify 返回 None"""
        import api_keys
        plain, record = _api_key_fixture()
        with db._db_lock:
            conn = db.get_conn()
            conn.execute("UPDATE api_keys SET expires_at='2020-01-01 00:00:00' WHERE id=?", (record["id"],))
            conn.commit()
            conn.close()
        assert api_keys.verify_api_key(plain) is None

    def test_disabled_key_rejected(self):
        """enabled=0 → verify 返回 None"""
        import api_keys
        plain, record = _api_key_fixture()
        api_keys.revoke_api_key(record["id"])
        assert api_keys.verify_api_key(plain) is None

    def test_touch_last_used(self):
        """touch_last_used 更新 last_used_at"""
        import api_keys
        plain, record = _api_key_fixture()
        assert api_keys.get_api_key(record["id"])["last_used_at"] is None
        api_keys.touch_last_used(record["id"])
        assert api_keys.get_api_key(record["id"])["last_used_at"] is not None

    def test_verify_updates_last_used(self):
        import api_keys
        plain, record = _api_key_fixture()
        api_keys.verify_api_key(plain)
        assert api_keys.get_api_key(record["id"])["last_used_at"] is not None


# ─── B. 开放 API 端点 (只读 + 鉴权 + degraded + 限流) ───────────

class TestOpenApiEndpoints:
    def test_no_key_401(self, client):
        r = client.get("/openapi/health")
        assert r.status_code == 401

    def test_bad_key_401(self, client):
        r = client.get("/openapi/health", headers={"X-API-Key": "qc_badkey"})
        assert r.status_code == 401

    def test_revoked_key_401(self, client):
        """吊销后同 Key 调用 → 401"""
        import api_keys
        plain, record = _api_key_fixture()
        api_keys.revoke_api_key(record["id"])
        r = client.get("/openapi/health", headers={"X-API-Key": plain})
        assert r.status_code == 401

    def test_health_ok_format(self, client):
        """有效 Key → 200 且响应含 success/data/degraded"""
        import api_keys
        plain, _record = _api_key_fixture()
        r = client.get("/openapi/health", headers={"X-API-Key": plain})
        assert r.status_code == 200
        body = r.json()
        assert body["success"] is True
        assert "data" in body
        assert "degraded" in body
        assert body["data"]["status"] == "ok"

    def test_quotes_degraded(self, client, monkeypatch):
        """行情数据源不可达 → degraded=true + 空 data"""
        import api_keys
        plain, _record = _api_key_fixture()
        monkeypatch.setattr("market_data.get_kline_data", lambda *a, **k: None)
        r = client.get("/openapi/quotes", params={"code": "000001.SZ"},
                       headers={"X-API-Key": plain})
        assert r.status_code == 200
        body = r.json()
        assert body["success"] is True
        assert body["degraded"] is True
        assert body["data"] in ([], {})

    def test_quotes_success(self, client, monkeypatch):
        """行情数据可达 → degraded=false + data 含 latest"""
        import api_keys
        plain, _record = _api_key_fixture()
        monkeypatch.setattr(
            "market_data.get_kline_data",
            lambda *a, **k: [{"date": "2026-08-14", "close": 12.8}, {"date": "2026-08-15", "close": 13.0}])
        r = client.get("/openapi/quotes", params={"code": "000001.SZ"},
                       headers={"X-API-Key": plain})
        assert r.status_code == 200
        body = r.json()
        assert body["success"] is True
        assert body["degraded"] is False
        assert body["data"]["code"] == "000001.SZ"
        assert body["data"]["latest"]["close"] == 13.0

    def test_calendar_format(self, client):
        """/calendar 返回统一格式"""
        import api_keys
        plain, _record = _api_key_fixture()
        r = client.get("/openapi/calendar", headers={"X-API-Key": plain})
        assert r.status_code == 200
        body = r.json()
        assert body["success"] is True
        assert "data" in body and "degraded" in body

    def test_watchlist_format(self, client):
        import api_keys
        plain, _record = _api_key_fixture()
        r = client.get("/openapi/watchlist", headers={"X-API-Key": plain})
        assert r.status_code == 200
        body = r.json()
        assert body["success"] is True and isinstance(body["data"], list)

    def test_evaluations_format(self, client):
        import api_keys
        plain, _record = _api_key_fixture()
        r = client.get("/openapi/evaluations", params={"limit": 5},
                       headers={"X-API-Key": plain})
        assert r.status_code == 200
        body = r.json()
        assert body["success"] is True
        assert isinstance(body["data"], list)

    def test_key_rate_limit_429(self, client, monkeypatch):
        """Key 维度限流: 超限返回 429"""
        import api_keys
        from api.v1 import openapi as opmod
        plain, _record = _api_key_fixture()
        monkeypatch.setattr(opmod, "OPENAPI_LIMIT_PER_MINUTE", 3)
        for _ in range(3):
            r = client.get("/openapi/health", headers={"X-API-Key": plain})
            assert r.status_code == 200
        r = client.get("/openapi/health", headers={"X-API-Key": plain})
        assert r.status_code == 429

    def test_read_only_no_write_endpoints(self, openapi_app):
        """开放 API 仅只读: 公开端点无 POST/PUT/DELETE"""
        from api.v1.openapi import router as openapi_router
        methods = set()
        public_paths = {"/openapi/quotes", "/openapi/calendar",
                        "/openapi/watchlist", "/openapi/evaluations", "/openapi/health"}
        for r in openapi_router.routes:
            if getattr(r, "path", "") in public_paths:
                methods |= set(getattr(r, "methods", None) or [])
        assert methods == {"GET"}


# ─── C. 管理端点: API Key (JWT admin) ──────────────────────────

class TestApiKeyAdmin:
    def test_admin_create_key_returns_plaintext_once(self, client):
        """签发响应一次性返回明文 api_key"""
        r = client.post("/openapi/keys", json={"name": "t", "role": "read", "expire_days": 30})
        assert r.status_code == 200
        body = r.json()
        assert body["success"] is True
        assert body["api_key"].startswith("qc_")
        assert body["data"]["prefix"] == body["api_key"].split("_", 1)[1][:8]

    def test_admin_list_no_plaintext(self, client):
        """签发后 list 不含明文"""
        r = client.post("/openapi/keys", json={"name": "t2", "role": "read"})
        plain = r.json()["api_key"]
        r = client.get("/openapi/keys")
        dump = json.dumps(r.json(), ensure_ascii=False)
        assert plain not in dump
        assert "key_hash" not in dump

    def test_admin_invalid_role_400(self, client):
        r = client.post("/openapi/keys", json={"name": "x", "role": "write"})
        assert r.status_code == 400

    def test_admin_revoke_then_public_401(self, client, openapi_app):
        """吊销 Key → 公开端点 401"""
        import api_keys
        plain, record = _api_key_fixture()
        r = client.delete(f"/openapi/keys/{record['id']}")
        assert r.status_code == 200
        r2 = TestClient(openapi_app).get("/openapi/health", headers={"X-API-Key": plain})
        assert r2.status_code == 401

    def test_admin_revoke_nonexistent_404(self, client):
        r = client.delete("/openapi/keys/999999")
        assert r.status_code == 404


# ─── D. Webhook 订阅 + dispatch ────────────────────────────────

class TestWebhook:
    @pytest.fixture(autouse=True)
    def _clean_webhooks(self):
        """每例清空 webhook 订阅表 (conftest 临时库 session 共享, 需隔离)"""
        import webhook
        webhook._ensure_table()
        with db._db_lock:
            conn = db.get_conn()
            conn.execute("DELETE FROM webhook_subscriptions")
            conn.commit()
            conn.close()
        yield
        with db._db_lock:
            conn = db.get_conn()
            conn.execute("DELETE FROM webhook_subscriptions")
            conn.commit()
            conn.close()

    def test_add_subscription(self):
        import webhook
        sub_id = webhook.add_subscription("https://example.com/hook", ["evaluate_done"])
        assert sub_id > 0
        subs = webhook.list_subscriptions()
        assert any(s["id"] == sub_id for s in subs)

    def test_list_subscriptions_events_parsed(self):
        import webhook
        sub_id = webhook.add_subscription("https://example.com/hook2",
                                          ["evaluate_done", "review_ready"])
        subs = webhook.list_subscriptions()
        item = next(s for s in subs if s["id"] == sub_id)
        assert item["events"] == ["evaluate_done", "review_ready"]
        assert item["enabled"] is True

    def test_delete_subscription(self):
        import webhook
        sub_id = webhook.add_subscription("https://example.com/hook3", ["market_review_ready"])
        assert webhook.delete_subscription(sub_id) is True
        assert webhook.delete_subscription(sub_id) is False  # 已删除
        assert all(s["id"] != sub_id for s in webhook.list_subscriptions())

    def test_dispatch_correct_url_and_event(self):
        """dispatch 命中订阅 → 注入 poster 收到正确 url + event + payload"""
        import webhook
        captured = []
        webhook.add_subscription("https://a.example.com/h", ["evaluate_done"])
        webhook.add_subscription("https://b.example.com/h", ["review_ready"])
        webhook.add_subscription("https://c.example.com/h", ["evaluate_done"])

        def poster(url, payload):
            captured.append((url, payload))
            return True

        result = webhook.dispatch("evaluate_done", {"n": 1}, poster=poster)
        assert result["total"] == 2
        assert result["ok"] == 2
        assert result["failed"] == 0
        urls = [u for u, _p in captured]
        # list_subscriptions 按 id 倒序, 只断言集合
        assert set(urls) == {"https://a.example.com/h", "https://c.example.com/h"}
        for _u, payload in captured:
            assert payload["event"] == "evaluate_done"
            assert payload["payload"] == {"n": 1}
        assert "b.example.com" not in urls  # 未订阅该事件

    def test_dispatch_failure_no_crash(self):
        """poster 抛异常/返回 False → 不崩, failed 计数正确"""
        import webhook
        webhook.add_subscription("https://f.example.com/h", ["evaluate_done"])

        def boom(url, payload):
            raise RuntimeError("网络不可达")

        result = webhook.dispatch("evaluate_done", {}, poster=boom)
        assert result["total"] == 1
        assert result["ok"] == 0
        assert result["failed"] == 1

    def test_dispatch_unknown_event(self):
        import webhook
        result = webhook.dispatch("no_such_event", {})
        assert result["total"] == 0
        assert result["ok"] == 0

    def test_dispatch_disabled_subscription_skipped(self):
        import webhook
        sub_id = webhook.add_subscription("https://d.example.com/h", ["evaluate_done"])
        webhook.set_subscription_enabled(sub_id, False)
        called = []
        result = webhook.dispatch("evaluate_done", {},
                                  poster=lambda url, payload: called.append(url) or True)
        assert result["total"] == 0
        assert called == []

    def test_dispatch_no_subscription(self):
        """无订阅 → total=0, 不抛错"""
        import webhook
        result = webhook.dispatch("evaluate_done", {})
        assert result["total"] == 0

    def test_admin_create_webhook_invalid_event_400(self, client):
        r = client.post("/openapi/webhooks",
                        json={"url": "https://example.com/h", "events": ["bad_event"]})
        assert r.status_code == 400

    def test_admin_create_list_delete_webhook(self, client):
        r = client.post("/openapi/webhooks",
                        json={"url": "https://example.com/h", "events": ["evaluate_done"], "enabled": True})
        assert r.status_code == 200
        sub_id = r.json()["data"]["id"]
        r = client.get("/openapi/webhooks")
        assert any(s["id"] == sub_id for s in r.json()["data"])
        r = client.delete(f"/openapi/webhooks/{sub_id}")
        assert r.status_code == 200
        r = client.get("/openapi/webhooks")
        assert all(s["id"] != sub_id for s in r.json()["data"])


# ─── E. Swagger 开关 ───────────────────────────────────────────

def test_swagger_enabled_docs_200():
    """OPENAPI_ENABLED=True (默认) → /docs 200"""
    import main_new
    client = TestClient(main_new.app)
    r = client.get("/docs")
    assert r.status_code == 200


def test_swagger_disabled_docs_404(monkeypatch):
    """OPENAPI_ENABLED=False → /docs /redoc /openapi.json 404"""
    import config
    import main_new
    monkeypatch.setattr(config.settings, "OPENAPI_ENABLED", False)
    app = importlib.reload(main_new).app
    try:
        client = TestClient(app)
        assert client.get("/docs").status_code == 404
        assert client.get("/redoc").status_code == 404
        assert client.get("/openapi.json").status_code == 404
        # 开放 API 端点本身仍可用 (开关只影响 Swagger 文档)
        import api_keys
        plain, _record = api_keys.generate_api_key("swagger-off")
        r = client.get("/api/openapi/health", headers={"X-API-Key": plain})
        assert r.status_code == 200
    finally:
        # 恢复默认
        monkeypatch.setattr(config.settings, "OPENAPI_ENABLED", True)
        importlib.reload(main_new)


def test_config_has_openapi_enabled():
    """config 提供 OPENAPI_ENABLED 开关 (默认 True)"""
    import config
    assert hasattr(config.settings, "OPENAPI_ENABLED")
    assert config.settings.OPENAPI_ENABLED is True
