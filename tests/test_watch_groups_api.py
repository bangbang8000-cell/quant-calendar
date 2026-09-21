# -*- coding: utf-8 -*-
"""6.1.2 (B3): 自选分组 API 测试 (GET/PUT/move/rename/color/delete)"""
import pytest
from fastapi import FastAPI
from fastapi.testclient import TestClient

from api.v1.watchlist import router
from auth import get_current_active_user
from watch_groups import DEFAULT_GROUP


@pytest.fixture()
def client(tmp_path, monkeypatch, isolated_watchlist_store):
    import api.v1.watchlist as wl_mod
    monkeypatch.setattr(wl_mod, "BASE_USERS_DIR", str(tmp_path / "users"))
    app = FastAPI()
    app.include_router(router, prefix="/api")
    app.dependency_overrides[get_current_active_user] = lambda: {"username": "tester"}
    return TestClient(app)


def test_get_groups_default(client):
    r = client.get("/api/watchlist/groups")
    data = r.json()
    assert data["success"] is True
    assert data["groups"][0]["name"] == DEFAULT_GROUP
    assert data["mapping"] == {}


def test_put_groups_normalizes(client):
    r = client.put("/api/watchlist/groups", json={
        "groups": [{"name": "科技", "color": "#2563eb"}],
        "mapping": {"600036": "科技"},
    })
    data = r.json()
    names = [g["name"] for g in data["groups"]]
    assert names[0] == DEFAULT_GROUP and "科技" in names
    assert data["mapping"]["600036"] == "科技"


def test_move_stock_to_group(client):
    client.put("/api/watchlist/groups", json={
        "groups": [{"name": "科技"}], "mapping": {},
    })
    r = client.post("/api/watchlist/groups/move", json={"code": "600036", "group": "科技"})
    assert r.json()["mapping"]["600036"] == "科技"
    r2 = client.post("/api/watchlist/groups/move", json={"code": "600036", "group": "不存在"})
    assert r2.json()["mapping"]["600036"] == DEFAULT_GROUP


def test_rename_group_syncs_mapping(client):
    client.put("/api/watchlist/groups", json={
        "groups": [{"name": "科技"}], "mapping": {"600036": "科技"},
    })
    r = client.post("/api/watchlist/groups/rename", json={"old": "科技", "new": "半导体"})
    data = r.json()
    assert data["mapping"]["600036"] == "半导体"
    r2 = client.post("/api/watchlist/groups/rename", json={"old": "科技", "new": "半导体"})
    assert r2.status_code == 400  # 分组已存在


def test_set_color_valid_and_invalid(client):
    client.put("/api/watchlist/groups", json={"groups": [{"name": "科技"}]})
    r = client.post("/api/watchlist/groups/color", json={"name": "科技", "color": "#16a34a"})
    assert r.json()["groups"][1]["color"] == "#16a34a"
    r2 = client.post("/api/watchlist/groups/color", json={"name": "科技", "color": "#bad"})
    assert r2.status_code == 400


def test_delete_group_merges_to_default(client):
    client.put("/api/watchlist/groups", json={
        "groups": [{"name": "科技"}], "mapping": {"600036": "科技"},
    })
    r = client.delete("/api/watchlist/groups/科技")
    data = r.json()
    assert not any(g["name"] == "科技" for g in data["groups"])
    assert data["mapping"]["600036"] == DEFAULT_GROUP
    r2 = client.delete(f"/api/watchlist/groups/{DEFAULT_GROUP}")
    assert r2.status_code == 400
