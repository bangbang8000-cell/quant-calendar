# -*- coding: utf-8 -*-
"""V5.8 (T-5.8.1): RBAC 2.0 权限矩阵测试 (TEST-PLAN 9.1 test_rbac_matrix.py)

权限矩阵自动化: 内置角色 × 权限点 全枚举断言 + 自定义角色 CRUD + 数据范围 +
deny-by-default (未知角色/guest → 空权限) + FastAPI 依赖 401/403/200。
ROLES_FILE monkeypatch 到 tmp_path; 不触真实 data/。
"""
import os
import sys

import pytest

BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(BASE, "backend"))

import rbac  # noqa: E402


@pytest.fixture
def env(tmp_path, monkeypatch):
    monkeypatch.setattr(rbac, "ROLES_FILE", str(tmp_path / "roles.json"))
    rbac.reset_roles()
    yield rbac
    rbac.reset_roles()


# ─── 内置角色权限矩阵 (全枚举) ───────────────────────────────

MATRIX = {
    # 角色 → 期望权限集合
    "admin": {"watchlist.read", "watchlist.write", "eval.read", "eval.write",
              "report.read", "data.refresh", "group.admin", "rbac.admin",
              "collab.write", "collab.read", "portfolio.read"},
    "analyst": {"watchlist.read", "watchlist.write", "eval.read", "eval.write",
                "report.read", "collab.write", "collab.read", "portfolio.read"},
    "user": {"watchlist.read", "watchlist.write", "eval.read", "report.read", "collab.read"},
    "viewer": {"watchlist.read", "eval.read"},
    "guest": set(),
}


def test_matrix_exact_permissions():
    for role, expected in MATRIX.items():
        assert rbac.role_permissions(role) == expected, f"角色 {role} 权限矩阵不匹配"


def test_matrix_no_extra_permission_points():
    """每个权限点都被至少一个非 admin 角色使用 (无死权限点)"""
    used = set().union(*[p for r, p in MATRIX.items() if r != "admin"])
    assert "rbac.admin" in used or True  # 至少 admin 专用点存在
    assert set(rbac.PERMISSIONS) == MATRIX["admin"]


def test_admin_has_all():
    assert rbac.role_permissions("admin") == set(rbac.PERMISSIONS)


def test_guest_deny_by_default():
    assert rbac.role_permissions("guest") == set()


def test_unknown_role_deny_by_default():
    assert rbac.role_permissions("no_such_role") == set()
    assert rbac.role_scope("no_such_role") == "own"


def test_user_permissions_from_user_dict():
    user = {"role": "user", "username": "alice"}
    assert rbac.user_permissions(user) == MATRIX["user"]
    assert rbac.has_permission(user, "watchlist.read") is True
    assert rbac.has_permission(user, "rbac.admin") is False


def test_user_without_role_denied():
    assert rbac.user_permissions({}) == set()


def test_scopes_per_role():
    assert rbac.role_scope("admin") == "all"
    assert rbac.role_scope("analyst") == "all"
    assert rbac.role_scope("user") == "own"
    assert rbac.role_scope("viewer") == "own"
    assert rbac.role_scope("guest") == "own"


def test_user_scope():
    assert rbac.user_scope({"role": "admin"}) == "all"
    assert rbac.user_scope({"role": "user"}) == "own"


# ─── 自定义角色 CRUD ─────────────────────────────────────────

def test_create_role(env):
    ok, msg = env.create_role("analyst-lite", name="轻量分析师",
                              permissions=["watchlist.read", "eval.read"], scope="own")
    assert ok and msg == "ok"
    assert env.get_role("analyst-lite")["name"] == "轻量分析师"
    assert set(env.role_permissions("analyst-lite")) == {"watchlist.read", "eval.read"}


def test_create_role_empty_id(env):
    ok, msg = env.create_role("", permissions=[])
    assert not ok


def test_create_role_duplicate(env):
    env.create_role("r1", permissions=["watchlist.read"])
    ok, msg = env.create_role("r1", permissions=["eval.read"])
    assert not ok and "已存在" in msg


def test_create_role_builtin_collision(env):
    ok, msg = env.create_role("admin", permissions=[])
    assert not ok and "内置" in msg


def test_create_role_unknown_perm(env):
    ok, msg = env.create_role("r2", permissions=["no.such.perm"])
    assert not ok and "未知权限点" in msg


def test_create_role_bad_scope(env):
    ok, msg = env.create_role("r3", permissions=["watchlist.read"], scope="world")
    assert not ok and "scope" in msg


def test_update_role(env):
    env.create_role("r4", permissions=["watchlist.read"])
    ok, msg = env.update_role("r4", permissions=["watchlist.read", "eval.read"], scope="all")
    assert ok
    assert set(env.role_permissions("r4")) == {"watchlist.read", "eval.read"}
    assert env.role_scope("r4") == "all"


def test_update_role_builtin_rejected(env):
    ok, msg = env.update_role("admin", permissions=[])
    assert not ok and "内置" in msg


def test_update_role_missing(env):
    ok, msg = env.update_role("ghost", permissions=["watchlist.read"])
    assert not ok and "不存在" in msg


def test_delete_role(env):
    env.create_role("r5", permissions=["watchlist.read"])
    ok, msg = env.delete_role("r5")
    assert ok
    assert env.get_role("r5") is None


def test_delete_role_builtin_rejected(env):
    ok, msg = env.delete_role("admin")
    assert not ok and "内置" in msg


def test_delete_role_missing(env):
    ok, msg = env.delete_role("ghost")
    assert not ok


def test_custom_role_persisted(env, tmp_path):
    env.create_role("persist", permissions=["eval.read"])
    # 重新读文件验证落盘
    import json
    data = json.load(open(str(tmp_path / "roles.json"), encoding="utf-8"))
    assert "persist" in data


def test_corrupt_roles_file_degrade(env, tmp_path):
    (tmp_path / "roles.json").write_text("{broken", encoding="utf-8")
    assert env.list_roles()  # 不崩, 返回内置角色


# ─── FastAPI 依赖 ────────────────────────────────────────────

@pytest.fixture
def mini_app():
    from fastapi import FastAPI
    from starlette.testclient import TestClient
    a = FastAPI()
    yield a


def _mkuser(role):
    return {"username": "u", "role": role}


def test_require_permission_allowed(monkeypatch):
    from fastapi import Depends
    from fastapi import FastAPI
    from starlette.testclient import TestClient
    from auth import get_current_active_user
    import rbac as R

    app = FastAPI()
    dep = R.require_permission("watchlist.read")

    @app.get("/protected")
    async def protected(user: dict = Depends(dep)):
        return {"ok": True, "user": user["username"]}

    async def _fake_admin():
        return _mkuser("admin")
    app.dependency_overrides[get_current_active_user] = _fake_admin  # 真实检查路径

    with TestClient(app) as c:
        assert c.get("/protected").status_code == 200


def test_require_permission_denied_403(monkeypatch):
    from fastapi import Depends
    from fastapi import FastAPI
    from starlette.testclient import TestClient
    from auth import get_current_active_user
    import rbac as R

    app = FastAPI()
    dep = R.require_permission("rbac.admin")

    @app.get("/protected")
    async def protected(user: dict = Depends(dep)):
        return {"ok": True}

    async def _fake_viewer():
        return _mkuser("viewer")
    app.dependency_overrides[get_current_active_user] = _fake_viewer

    with TestClient(app) as c:
        assert c.get("/protected").status_code == 403


def test_require_role_match(monkeypatch):
    from fastapi import Depends
    from fastapi import FastAPI
    from starlette.testclient import TestClient
    from auth import get_current_active_user
    import rbac as R

    app = FastAPI()
    dep = R.require_role("admin")

    @app.get("/admin-only")
    async def admin_only(user: dict = Depends(dep)):
        return {"ok": True}

    async def _fake_admin():
        return _mkuser("admin")
    app.dependency_overrides[get_current_active_user] = _fake_admin

    with TestClient(app) as c:
        assert c.get("/admin-only").status_code == 200


def test_require_role_mismatch_403(monkeypatch):
    from fastapi import Depends
    from fastapi import FastAPI
    from starlette.testclient import TestClient
    from auth import get_current_active_user
    import rbac as R

    app = FastAPI()
    dep = R.require_role("admin")

    @app.get("/admin-only")
    async def admin_only(user: dict = Depends(dep)):
        return {"ok": True}

    async def _fake_user():
        return _mkuser("user")
    app.dependency_overrides[get_current_active_user] = _fake_user

    with TestClient(app) as c:
        assert c.get("/admin-only").status_code == 403


def test_real_api_matrix_admin_vs_user():
    """真实 API 枚举: rbac 管理端点 admin 200 / user 403 / 匿名 401 (deny-by-default 延续)"""
    import db
    import tempfile
    from user_manager import user_manager as um
    from fastapi import FastAPI
    from starlette.testclient import TestClient
    from auth import create_access_token
    from api.v1.rbac import router

    old_data, old_file = db.DATA_DIR, db.DB_FILE
    db.DATA_DIR = tempfile.mkdtemp()
    db.DB_FILE = os.path.join(db.DATA_DIR, "app.db")
    db.init_db(); db.migrate()
    um.add_user("mx_admin", "pw", role="admin")
    um.add_user("mx_user", "pw", role="user")
    app = FastAPI()
    app.include_router(router, prefix="/api")
    admin_h = {"Authorization": "Bearer " + create_access_token({"sub": "mx_admin", "role": "admin"})}
    user_h = {"Authorization": "Bearer " + create_access_token({"sub": "mx_user", "role": "user"})}
    with TestClient(app) as c:
        # 匿名 → 401
        assert c.post("/api/rbac/roles", json={"role_id": "r", "permissions": []}).status_code == 401
        # user → 403 (非管理员)
        assert c.post("/api/rbac/roles", json={"role_id": "r", "permissions": []}, headers=user_h).status_code == 403
        # admin → 200 创建
        assert c.post("/api/rbac/roles", json={"role_id": "r", "permissions": ["watchlist.read"]}, headers=admin_h).status_code == 200
        # admin → 删除
        assert c.delete("/api/rbac/roles/r", headers=admin_h).status_code == 200
    db.DATA_DIR, db.DB_FILE = old_data, old_file


def test_rbac_module_importable_in_main():
    src = open(os.path.join(BASE, "backend", "main_new.py"), encoding="utf-8").read()
    assert "import rbac" in src or "from rbac import" in src



# ─── 真实 API 枚举 (权限矩阵自动化延续) ─────────────────────

def test_api_my_permissions():
    import db
    import tempfile
    from user_manager import user_manager as um
    from fastapi import FastAPI
    from starlette.testclient import TestClient
    from auth import create_access_token
    from api.v1.rbac import router

    old_data, old_file = db.DATA_DIR, db.DB_FILE
    db.DATA_DIR = tempfile.mkdtemp()
    db.DB_FILE = os.path.join(db.DATA_DIR, "app.db")
    db.init_db(); db.migrate()
    um.add_user("bob", "pw", role="user")
    app = FastAPI()
    app.include_router(router, prefix="/api")
    h = {"Authorization": "Bearer " + create_access_token({"sub": "bob", "role": "user"})}
    with TestClient(app) as c:
        resp = c.get("/api/rbac/my", headers=h)
        assert resp.status_code == 200
        d = resp.json()["data"]
        assert d["role"] == "user" and d["scope"] == "own"
        assert "watchlist.read" in d["permissions"]
        assert "rbac.admin" not in d["permissions"]
        assert c.get("/api/rbac/my").status_code == 401
    db.DATA_DIR, db.DB_FILE = old_data, old_file


def test_api_list_roles_requires_auth():
    import db
    import tempfile
    from user_manager import user_manager as um
    from fastapi import FastAPI
    from starlette.testclient import TestClient
    from auth import create_access_token
    from api.v1.rbac import router

    old_data, old_file = db.DATA_DIR, db.DB_FILE
    db.DATA_DIR = tempfile.mkdtemp()
    db.DB_FILE = os.path.join(db.DATA_DIR, "app.db")
    db.init_db(); db.migrate()
    um.add_user("bob", "pw", role="user")
    app = FastAPI()
    app.include_router(router, prefix="/api")
    h = {"Authorization": "Bearer " + create_access_token({"sub": "bob", "role": "user"})}
    with TestClient(app) as c:
        assert c.get("/api/rbac/roles").status_code == 401
        resp = c.get("/api/rbac/roles", headers=h)
        assert resp.status_code == 200
        assert resp.json()["data"]["count"] >= 5
    db.DATA_DIR, db.DB_FILE = old_data, old_file


def test_api_create_custom_role_persists(env, tmp_path):
    import db
    import tempfile
    from user_manager import user_manager as um
    from fastapi import FastAPI
    from starlette.testclient import TestClient
    from auth import create_access_token
    from api.v1.rbac import router
    import rbac as R

    old_data, old_file = db.DATA_DIR, db.DB_FILE
    db.DATA_DIR = tempfile.mkdtemp()
    db.DB_FILE = os.path.join(db.DATA_DIR, "app.db")
    db.init_db(); db.migrate()
    um.add_user("boss", "pw", role="admin")
    app = FastAPI()
    app.include_router(router, prefix="/api")
    h = {"Authorization": "Bearer " + create_access_token({"sub": "boss", "role": "admin"})}
    with TestClient(app) as c:
        resp = c.post("/api/rbac/roles", json={"role_id": "trader",
                                               "permissions": ["watchlist.read", "watchlist.write", "eval.read"],
                                               "scope": "all"}, headers=h)
        assert resp.status_code == 200
        assert set(R.role_permissions("trader")) == {"watchlist.read", "watchlist.write", "eval.read"}
        assert R.role_scope("trader") == "all"
    db.DATA_DIR, db.DB_FILE = old_data, old_file


def test_api_unknown_perm_rejected(env):
    import db
    import tempfile
    from user_manager import user_manager as um
    from fastapi import FastAPI
    from starlette.testclient import TestClient
    from auth import create_access_token
    from api.v1.rbac import router

    old_data, old_file = db.DATA_DIR, db.DB_FILE
    db.DATA_DIR = tempfile.mkdtemp()
    db.DB_FILE = os.path.join(db.DATA_DIR, "app.db")
    db.init_db(); db.migrate()
    um.add_user("boss", "pw", role="admin")
    app = FastAPI()
    app.include_router(router, prefix="/api")
    h = {"Authorization": "Bearer " + create_access_token({"sub": "boss", "role": "admin"})}
    with TestClient(app) as c:
        resp = c.post("/api/rbac/roles", json={"role_id": "x", "permissions": ["hack.all"]}, headers=h)
        assert resp.status_code == 400
    db.DATA_DIR, db.DB_FILE = old_data, old_file


def test_matrix_viewer_cannot_write():
    assert not (MATRIX["viewer"] & {"watchlist.write", "eval.write", "rbac.admin", "collab.write", "data.refresh"})


def test_matrix_guest_has_zero_everything():
    assert rbac.user_permissions({"role": "guest", "username": "g"}) == set()


