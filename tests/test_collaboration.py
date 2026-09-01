# -*- coding: utf-8 -*-
"""V5.8 (T-5.8.2): 协作测试 (TEST-PLAN 9.1 test_collaboration.py)

共享自选组 (owner/member view|edit) + 评估备注 + 组合可见性 +
组内角色门控 + 并发一致性 (原子写不损坏) + RBAC 权限门控。
COLLAB_FILE monkeypatch 到 tmp_path; 不触真实 data/。
"""
import json
import os
import sys
import threading

import pytest

BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(BASE, "backend"))

import collaboration as C  # noqa: E402


@pytest.fixture
def env(tmp_path, monkeypatch):
    monkeypatch.setattr(C, "COLLAB_FILE", str(tmp_path / "collab.json"))
    C.reset_collab()
    yield C
    C.reset_collab()


# ─── 共享组生命周期 ─────────────────────────────────────────

def test_create_group(env):
    ok, gid = env.create_group("量化组", "alice")
    assert ok and gid.startswith("G")
    g = env.get_group(gid, "alice")
    assert g["owner"] == "alice"
    assert g["my_role"] == "edit"
    assert g["name"] == "量化组"


def test_create_group_empty_name(env):
    ok, msg = env.create_group("", "alice")
    assert not ok


def test_list_my_groups(env):
    ok, g1 = env.create_group("A", "alice")
    env.create_group("B", "bob")
    mine = env.list_groups_for("alice")
    assert len(mine) == 1 and mine[0]["gid"] == g1


def test_list_groups_includes_member(env):
    ok, g = env.create_group("A", "alice")
    env.add_member(g, "alice", "bob")
    assert len(env.list_groups_for("bob")) == 1


def test_get_group_non_member(env):
    ok, g = env.create_group("A", "alice")
    assert env.get_group(g, "bob") is None


def test_get_group_missing(env):
    assert env.get_group("G-nope", "alice") is None


# ─── 成员管理 ───────────────────────────────────────────────

def test_add_member_view(env):
    ok, g = env.create_group("A", "alice")
    ok, msg = env.add_member(g, "alice", "bob", "view")
    assert ok
    assert env.member_role(g, "bob") == "view"


def test_add_member_edit(env):
    ok, g = env.create_group("A", "alice")
    env.add_member(g, "alice", "bob", "edit")
    assert env.member_role(g, "bob") == "edit"


def test_add_member_non_owner_denied(env):
    ok, g = env.create_group("A", "alice")
    env.add_member(g, "alice", "bob", "edit")
    ok, msg = env.add_member(g, "bob", "carol")
    assert not ok and "组主" in msg


def test_add_member_bad_role(env):
    ok, g = env.create_group("A", "alice")
    ok, msg = env.add_member(g, "alice", "bob", "super")
    assert not ok and "view/edit" in msg


def test_remove_member(env):
    ok, g = env.create_group("A", "alice")
    env.add_member(g, "alice", "bob")
    ok, msg = env.remove_member(g, "alice", "bob")
    assert ok
    assert env.member_role(g, "bob") is None


def test_remove_owner_denied(env):
    ok, g = env.create_group("A", "alice")
    ok, msg = env.remove_member(g, "alice", "alice")
    assert not ok and "组主" in msg


def test_remove_member_non_owner_denied(env):
    ok, g = env.create_group("A", "alice")
    env.add_member(g, "alice", "bob", "edit")
    ok, msg = env.remove_member(g, "bob", "carol")
    assert not ok


def test_delete_group_owner_only(env):
    ok, g = env.create_group("A", "alice")
    env.add_member(g, "alice", "bob")
    ok, msg = env.delete_group(g, "bob")
    assert not ok and "组主" in msg
    ok, msg = env.delete_group(g, "alice")
    assert ok
    assert env.get_group(g, "alice") is None


# ─── 股票共享 + 组内角色门控 ────────────────────────────────

def test_owner_add_stock(env):
    ok, g = env.create_group("A", "alice")
    ok, msg = env.add_stock(g, "alice", "600000.SH", "浦发")
    assert ok
    stocks = env.get_group(g, "alice")["stocks"]
    assert stocks[0]["code"] == "600000.SH"
    assert stocks[0]["name"] == "浦发"


def test_edit_member_add_stock(env):
    ok, g = env.create_group("A", "alice")
    env.add_member(g, "alice", "bob", "edit")
    ok, msg = env.add_stock(g, "bob", "000001.SZ")
    assert ok


def test_view_member_cannot_add_stock(env):
    ok, g = env.create_group("A", "alice")
    env.add_member(g, "alice", "bob", "view")
    ok, msg = env.add_stock(g, "bob", "000001.SZ")
    assert not ok and "edit" in msg


def test_non_member_cannot_add_stock(env):
    ok, g = env.create_group("A", "alice")
    ok, msg = env.add_stock(g, "stranger", "000001.SZ")
    assert not ok


def test_add_duplicate_stock_idempotent(env):
    ok, g = env.create_group("A", "alice")
    env.add_stock(g, "alice", "600000.SH")
    env.add_stock(g, "alice", "600000.SH")
    assert len(env.get_group(g, "alice")["stocks"]) == 1


def test_remove_stock_edit_only(env):
    ok, g = env.create_group("A", "alice")
    env.add_stock(g, "alice", "600000.SH")
    env.add_member(g, "alice", "bob", "view")
    ok, msg = env.remove_stock(g, "bob", "600000.SH")
    assert not ok
    ok, msg = env.remove_stock(g, "alice", "600000.SH")
    assert ok
    assert env.get_group(g, "alice")["stocks"] == []


def test_shared_group_stocks_visible_to_members(env):
    ok, g = env.create_group("A", "alice")
    env.add_stock(g, "alice", "600000.SH")
    env.add_member(g, "alice", "bob", "view")
    assert len(env.get_group(g, "bob")["stocks"]) == 1


# ─── 评估备注 ───────────────────────────────────────────────

def test_add_and_list_notes(env):
    ok, msg = env.add_note("alice", "600000.SH", "长期看好")
    assert ok
    ok, msg = env.add_note("bob", "600000.SH", "短期回调")
    assert ok
    notes = env.list_notes("600000.SH")
    assert len(notes) == 2
    assert notes[0]["user"] == "bob"  # 倒序


def test_add_note_empty_rejected(env):
    ok, msg = env.add_note("alice", "600000.SH", "   ")
    assert not ok and "备注" in msg


def test_notes_per_stock_isolated(env):
    env.add_note("alice", "600000.SH", "a")
    env.add_note("alice", "000001.SZ", "b")
    assert len(env.list_notes("600000.SH")) == 1
    assert len(env.list_notes("000001.SZ")) == 1


# ─── 组合可见性 ─────────────────────────────────────────────

def test_visibility_default_none(env):
    assert env.get_portfolio_visibility("alice") == "none"


def test_set_visibility(env):
    ok, msg = env.set_portfolio_visibility("alice", "group")
    assert ok
    assert env.get_portfolio_visibility("alice") == "group"


def test_visibility_bad_value(env):
    ok, msg = env.set_portfolio_visibility("alice", "public")
    assert not ok and "none/group/all" in msg


def test_visibility_per_user(env):
    env.set_portfolio_visibility("alice", "all")
    assert env.get_portfolio_visibility("bob") == "none"


# ─── 并发一致性 ─────────────────────────────────────────────

def test_concurrent_writes_no_corruption(env, tmp_path):
    """多线程并发写: 文件始终合法 JSON, 不丢数据"""
    ok, g = env.create_group("A", "alice")

    def _writer(i):
        try:
            env.add_note("u%d" % i, "600000.SH", "note-%d" % i)
        except Exception:
            pass

    threads = [threading.Thread(target=_writer, args=(i,)) for i in range(20)]
    for th in threads:
        th.start()
    for th in threads:
        th.join()
    data = json.load(open(str(tmp_path / "collab.json"), encoding="utf-8"))
    notes = data["notes"]["600000.SH"]
    assert len(notes) == 20
    users = {n["user"] for n in notes}
    assert len(users) == 20


def test_corrupt_file_degrade(env, tmp_path):
    (tmp_path / "collab.json").write_text("{bad", encoding="utf-8")
    assert env.list_groups_for("alice") == []
    assert env.list_notes("600000.SH") == []


# ─── RBAC 门控 (真实 API) ───────────────────────────────────

def _api_env(tmp_path, monkeypatch):
    """返回 (client, headers_by_user, auth_token_fn) 的小型真实 API 环境"""
    import db
    from user_manager import user_manager as um
    from fastapi import FastAPI
    from starlette.testclient import TestClient
    from auth import create_access_token
    from api.v1.collab import router
    from api.v1.rbac import router as rbac_router

    monkeypatch.setattr(C, "COLLAB_FILE", str(tmp_path / "collab.json"))
    C.reset_collab()
    old_data, old_file = db.DATA_DIR, db.DB_FILE
    db.DATA_DIR = str(tmp_path / "db")
    os.makedirs(db.DATA_DIR, exist_ok=True)
    db.DB_FILE = os.path.join(db.DATA_DIR, "app.db")
    db.init_db(); db.migrate()
    um.add_user("alice", "pw", role="admin")
    um.add_user("bob", "pw", role="user")
    app = FastAPI()
    app.include_router(router, prefix="/api")
    app.include_router(rbac_router, prefix="/api")

    def _h(u):
        return {"Authorization": "Bearer " + create_access_token({"sub": u, "role": um.get_user(u)["role"]})}

    class _Cls:
        pass
    ctx = _Cls()
    ctx.c = TestClient(app)
    ctx.h = _h
    ctx._restore = lambda: setattr(db, "DATA_DIR", old_data) or setattr(db, "DB_FILE", old_file)
    return ctx


def test_api_group_lifecycle(tmp_path, monkeypatch):
    ctx = _api_env(tmp_path, monkeypatch)
    try:
        c, h = ctx.c, ctx.h
        r = c.post("/api/collab/groups", json={"name": "研究组"}, headers=h("alice"))
        assert r.status_code == 200
        gid = r.json()["data"]["gid"]
        # bob 是 user 角色 (collab.read), 能看组 (成员) 但 admin alice 先加他
        r = c.post(f"/api/collab/groups/{gid}/members", json={"username": "bob", "role": "view"}, headers=h("alice"))
        assert r.status_code == 200
        r = c.get("/api/collab/groups/my", headers=h("bob"))
        assert r.status_code == 200 and r.json()["data"]["count"] == 1
    finally:
        ctx._restore()
        C.reset_collab()


def test_api_non_member_403(tmp_path, monkeypatch):
    ctx = _api_env(tmp_path, monkeypatch)
    try:
        c, h = ctx.c, ctx.h
        gid = c.post("/api/collab/groups", json={"name": "A"}, headers=h("alice")).json()["data"]["gid"]
        # carol 不存在, 用匿名 → 401; 非成员 bob → 404 (get_group None)
        assert c.get(f"/api/collab/groups/{gid}", headers=h("bob")).status_code == 404
        assert c.get(f"/api/collab/groups/{gid}").status_code == 401
    finally:
        ctx._restore()
        C.reset_collab()


def test_api_viewer_cannot_write_notes(tmp_path, monkeypatch):
    ctx = _api_env(tmp_path, monkeypatch)
    try:
        c, h = ctx.c, ctx.h
        # bob 是 user 角色, 无 collab.write → notes POST 403
        assert c.post("/api/collab/notes/600000.SH", json={"note": "x"}, headers=h("bob")).status_code == 403
        # alice admin 可以
        assert c.post("/api/collab/notes/600000.SH", json={"note": "x"}, headers=h("alice")).status_code == 200
    finally:
        ctx._restore()
        C.reset_collab()


def test_api_unauth_denied(tmp_path, monkeypatch):
    ctx = _api_env(tmp_path, monkeypatch)
    try:
        c = ctx.c
        assert c.get("/api/collab/groups/my").status_code == 401
        assert c.get("/api/collab/notes/600000.SH").status_code == 401
        assert c.put("/api/collab/portfolio-visibility", json={"visible_to": "all"}).status_code == 401
    finally:
        ctx._restore()
        C.reset_collab()
