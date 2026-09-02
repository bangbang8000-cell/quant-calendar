"""V5.0.4 T-5.0.45: 通知中心 API 测试 (投递历史/通道状态/静默)

- history: 当前用户投递历史
- channels: 通道状态列表
- silence: 静默设置/查询/取消 + evaluate 静默期内不投递
- 敏感清单: 通知中心端点匿名必须 401/403 (test_no_unauthed_sensitive 另测)
"""
import json
import os
import sys
import tempfile
import time

import pytest

sys.path.insert(0, os.path.join(os.path.dirname(__file__), '..', 'backend'))

import config
config.settings.SECRET_KEY = 'test-secret-alerts'
config.settings.ALGORITHM = 'HS256'

from api.v1 import alerts as alerts_api
from fastapi import FastAPI
from starlette.testclient import TestClient
from auth import create_access_token
from db import get_conn


@pytest.fixture(autouse=True)
def clean_db():
    import db
    from user_manager import user_manager as um
    old_data, old_file = db.DATA_DIR, db.DB_FILE
    db.DATA_DIR = tempfile.mkdtemp()
    db.DB_FILE = os.path.join(db.DATA_DIR, "app.db")
    db.init_db()
    db.migrate()
    um.add_user("alice", "pw123")
    um.add_user("bob", "pw123")
    yield
    db.DATA_DIR, db.DB_FILE = old_data, old_file


@pytest.fixture
def app():
    from fastapi import FastAPI
    from starlette.testclient import TestClient
    a = FastAPI()
    a.include_router(alerts_api.router, prefix="/api")
    with TestClient(a) as c:
        yield c


def _auth():
    return {"Authorization": f"Bearer {create_access_token({'sub': 'alice', 'role': 'user'})}"}


class TestHistory:
    def test_history_empty(self, app):
        r = app.get("/api/alerts/history", headers=_auth())
        assert r.status_code == 200
        assert r.json()["success"] is True
        assert r.json()["history"] == []

    def test_history_records_delivery(self, app, clean_db):
        # 通过事件引擎投递一条, 写入 user=alice 的日志
        from events import EventEngine, make_event, create_subscription
        create_subscription("alice", "risk", ["fake"], ["alice"])
        eng = EventEngine(db_store=True)
        eng.register_channel("fake", lambda cfg: _FakeCh())
        eng.publish(make_event("risk", "标题", "内容", dedup_key=f"t{time.time()}"),
                    user="alice")
        r = app.get("/api/alerts/history", headers=_auth())
        hist = r.json()["history"]
        assert hist and hist[0]["user"] == "alice"
        assert hist[0]["title"] == "标题"

    def test_history_user_isolation(self, app, clean_db):
        from events import EventEngine, make_event, create_subscription
        create_subscription("bob", "risk", ["fake"], ["bob"])
        eng = EventEngine(db_store=True)
        eng.register_channel("fake", lambda cfg: _FakeCh())
        eng.publish(make_event("risk", "标题", "内容", dedup_key=f"t{time.time()}"),
                    user="bob")
        r = app.get("/api/alerts/history", headers=_auth())
        assert r.json()["history"] == []  # alice 看不到 bob 的投递

    def test_history_limit(self, app):
        r = app.get("/api/alerts/history?limit=5", headers=_auth())
        assert r.status_code == 200


class TestChannels:
    def test_channels_list(self, app):
        r = app.get("/api/alerts/channels", headers=_auth())
        body = r.json()
        assert body["success"] is True
        names = [c["name"] for c in body["channels"]]
        assert "feishu" in names and "webhook" in names and "email" in names
        assert "fake" not in names  # 测试通道不展示

    def test_channel_fields(self, app):
        r = app.get("/api/alerts/channels", headers=_auth())
        for c in r.json()["channels"]:
            assert {"name", "configured", "available"} <= set(c)


class TestSilence:
    def test_default_not_silenced(self, app):
        r = app.get("/api/alerts/silence", headers=_auth())
        assert r.json()["silenced"] is False

    def test_set_silence(self, app):
        r = app.post("/api/alerts/silence", json={"minutes": 60}, headers=_auth())
        assert r.json()["silenced"] is True
        assert r.json()["until"] is not None

    def test_silence_user_isolation(self, app):
        app.post("/api/alerts/silence", json={"minutes": 60}, headers=_auth())
        other = {"Authorization": f"Bearer {create_access_token({'sub': 'bob', 'role': 'user'})}"}
        r = app.get("/api/alerts/silence", headers=other)
        assert r.json()["silenced"] is False

    def test_clear_silence(self, app):
        app.post("/api/alerts/silence", json={"minutes": 60}, headers=_auth())
        r = app.post("/api/alerts/silence", json={"minutes": 0}, headers=_auth())
        assert r.json()["silenced"] is False

    def test_silence_expiry(self, app, monkeypatch):
        app.post("/api/alerts/silence", json={"minutes": 0.001}, headers=_auth())
        base = time.time()
        monkeypatch.setattr(time, "time", lambda: base + 3600)
        r = app.get("/api/alerts/silence", headers=_auth())
        assert r.json()["silenced"] is False

    def test_invalid_minutes_400(self, app):
        r = app.post("/api/alerts/silence", json={"minutes": "abc"}, headers=_auth())
        assert r.status_code == 400

    def test_evaluate_silenced_does_not_publish(self, app, clean_db):
        from events import EventEngine, make_event, create_subscription
        create_subscription("alice", "alert", ["fake"], ["alice"])
        app.post("/api/alerts/silence", json={"minutes": 60}, headers=_auth())
        r = app.post("/api/alerts/evaluate", json={"quotes": {"600519.SH": {"price": 1520.0}}},
                     headers=_auth())
        body = r.json()
        assert body["silenced"] is True and body["published"] == 0


class _FakeCh:
    """记录式假通道 (避免 notify.FakeChannel 依赖注册表)。"""
    def __init__(self):
        self.sent = []

    def send(self, recipient, title, content):
        self.sent.append((recipient, title, content))
        return True
