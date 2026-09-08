"""V5.0 T-5.0.6: 可靠性 API 测试 (heal-history / source-health)

安全门禁: 匿名 401; 登录 200 且结构完整; 空数据不抛错。
"""
from datetime import date, datetime


class TestHealHistoryApi:
    def test_anonymous_rejected(self):
        from main_new import app
        from fastapi.testclient import TestClient
        c = TestClient(app)
        assert c.get("/api/reliability/heal-history").status_code in (401, 403)

    def test_admin_can_read_history(self):
        from main_new import app
        from auth import create_access_token
        from fastapi.testclient import TestClient
        token = create_access_token({"sub": "admin", "role": "admin"})
        c = TestClient(app)
        c.headers.update({"Authorization": "Bearer " + token})
        r = c.get("/api/reliability/heal-history")
        assert r.status_code == 200, r.text
        assert isinstance(r.json()["data"], list)

    def test_limit_clamped(self):
        from main_new import app
        from auth import create_access_token
        from fastapi.testclient import TestClient
        token = create_access_token({"sub": "admin", "role": "admin"})
        c = TestClient(app)
        c.headers.update({"Authorization": "Bearer " + token})
        r = c.get("/api/reliability/heal-history?limit=9999")
        assert r.status_code == 200
        assert len(r.json()["data"]) <= 100

    def test_history_reflects_persisted_records(self):
        """写入自愈记录后 API 能读到 (经 conftest 重定向的数据目录)"""
        from main_new import app
        from auth import create_access_token
        from fastapi.testclient import TestClient
        from reliability import heal
        heal.persist([{"ts": "2026-09-01 12:00:00", "action": "rebuild_views",
                       "summary": "重建视图", "asset_id": "calendar_views",
                       "target": "stale", "dry_run": False, "ok": True,
                       "detail": "", "resolved": True}])
        token = create_access_token({"sub": "admin", "role": "admin"})
        c = TestClient(app)
        c.headers.update({"Authorization": "Bearer " + token})
        data = c.get("/api/reliability/heal-history").json()["data"]
        assert any(r["action"] == "rebuild_views" for r in data)


class TestSourceHealthApi:
    def test_anonymous_rejected(self):
        from main_new import app
        from fastapi.testclient import TestClient
        c = TestClient(app)
        assert c.get("/api/reliability/source-health").status_code in (401, 403)

    def test_admin_can_read_source_health(self):
        from main_new import app
        from auth import create_access_token
        from fastapi.testclient import TestClient
        token = create_access_token({"sub": "admin", "role": "admin"})
        c = TestClient(app)
        c.headers.update({"Authorization": "Bearer " + token})
        r = c.get("/api/reliability/source-health")
        assert r.status_code == 200, r.text
        body = r.json()
        assert isinstance(body["data_sources"], list)
        assert isinstance(body["alerts"], list)
