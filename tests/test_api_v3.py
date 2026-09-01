# -*- coding: utf-8 -*-
"""V5.8 (T-5.8.3): API v3 契约测试 (TEST-PLAN 9.1 test_api_v3.py)

统一契约: 分页 {items,page,page_size,total,pages} + 过滤 + 错误码信封
{success:false, error:{code,message,status}} + v1/v2 兼容 (旧端点不变)。
数据全部隔离到 tmp_path。
"""
import json
import os
import sys

import pytest

BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(BASE, "backend"))


# ─── 分页纯函数 ─────────────────────────────────────────────

def test_paginate_basic():
    from api.v3.common import paginate
    d = paginate(list(range(100)), page=1, page_size=20)
    assert len(d["items"]) == 20
    assert d["total"] == 100 and d["pages"] == 5
    assert d["page"] == 1 and d["page_size"] == 20


def test_paginate_page2():
    from api.v3.common import paginate
    d = paginate(list(range(100)), page=2, page_size=20)
    assert d["items"] == list(range(20, 40))


def test_paginate_clamp_page_below_1():
    from api.v3.common import paginate
    d = paginate(list(range(10)), page=0, page_size=5)
    assert d["page"] == 1


def test_paginate_clamp_page_negative():
    from api.v3.common import paginate
    assert paginate(list(range(10)), page=-3, page_size=5)["page"] == 1


def test_paginate_clamp_page_size_over_max():
    from api.v3.common import paginate
    d = paginate(list(range(500)), page=1, page_size=9999)
    assert d["page_size"] == 200


def test_paginate_empty():
    from api.v3.common import paginate
    d = paginate([], page=1, page_size=20)
    assert d["items"] == [] and d["total"] == 0 and d["pages"] == 0


def test_paginate_last_partial_page():
    from api.v3.common import paginate
    d = paginate(list(range(25)), page=2, page_size=20)
    assert len(d["items"]) == 5


def test_paginate_out_of_range_page():
    from api.v3.common import paginate
    d = paginate(list(range(10)), page=99, page_size=5)
    assert d["items"] == [] and d["pages"] == 2


def test_paginate_keys_shape():
    from api.v3.common import paginate
    d = paginate([1, 2], page=1, page_size=2)
    assert set(d.keys()) == {"items", "page", "page_size", "total", "pages"}


# ─── 过滤纯函数 ─────────────────────────────────────────────

def test_filter_contains_basic():
    from api.v3.common import filter_contains
    items = [{"name": "贵州茅台"}, {"name": "平安银行"}]
    out = filter_contains(items, "name", "茅台")
    assert len(out) == 1 and out[0]["name"] == "贵州茅台"


def test_filter_contains_empty_q():
    from api.v3.common import filter_contains
    items = [{"name": "a"}, {"name": "b"}]
    assert filter_contains(items, "name", "") == items


def test_filter_contains_case_insensitive():
    from api.v3.common import filter_contains
    items = [{"name": "ABC"}, {"name": "xyz"}]
    assert len(filter_contains(items, "name", "abc")) == 1


# ─── 错误码契约 ─────────────────────────────────────────────

def test_error_envelope_bad_request():
    from api.v3.errors import bad_request
    r = bad_request("参数错误")
    assert r.status_code == 400
    body = json.loads(r.body)
    assert body["success"] is False
    assert body["error"]["code"] == "BAD_REQUEST"
    assert body["error"]["message"] == "参数错误"
    assert body["error"]["status"] == 400


def test_error_envelope_not_found():
    from api.v3.errors import not_found
    r = not_found("不存在")
    assert r.status_code == 404
    body = json.loads(r.body)
    assert body["error"]["code"] == "NOT_FOUND"


def test_error_envelope_forbidden():
    from api.v3.errors import forbidden
    r = forbidden("无权")
    assert r.status_code == 403
    assert json.loads(r.body)["error"]["code"] == "FORBIDDEN"


def test_error_envelope_unauthorized():
    from api.v3.errors import unauthorized
    r = unauthorized()
    assert r.status_code == 401
    assert json.loads(r.body)["error"]["code"] == "UNAUTHORIZED"


def test_error_codes_mapping():
    from api.v3.errors import ERROR_CODES
    assert ERROR_CODES[400] == "BAD_REQUEST"
    assert ERROR_CODES[401] == "UNAUTHORIZED"
    assert ERROR_CODES[403] == "FORBIDDEN"
    assert ERROR_CODES[404] == "NOT_FOUND"
    assert ERROR_CODES[500] == "INTERNAL"


# ─── 真实 API (v3) ──────────────────────────────────────────

@pytest.fixture
def v3_env(tmp_path, monkeypatch):
    """临时 db + 用户 + 自选 JSON (隔离到 tmp_path), 返回 (client, auth, user_dir)"""
    import db
    from user_manager import user_manager as um
    from fastapi import FastAPI
    from starlette.testclient import TestClient
    from auth import create_access_token
    from api.v3.router import router as v3_router
    from api.v1.watchlist import router as v1_wl
    import api.v1.watchlist as wlmod
    import api.v3.evaluations as evmod

    old_data, old_file = db.DATA_DIR, db.DB_FILE
    db.DATA_DIR = str(tmp_path)
    db.DB_FILE = os.path.join(tmp_path, "app.db")
    db.init_db(); db.migrate()
    um.add_user("alice", "pw", role="user")
    # 自选读写以 SQLite 为主 (tmp db); 评估历史读 JSON (evmod.DATA_DIR 隔离)
    monkeypatch.setattr(wlmod, "BASE_USERS_DIR", str(tmp_path / "users"))
    monkeypatch.setattr(evmod, "DATA_DIR", str(tmp_path))
    app = FastAPI()
    app.include_router(v3_router, prefix="/api")
    app.include_router(v1_wl, prefix="/api")
    user_dir = os.path.join(str(tmp_path), "users", "alice")
    os.makedirs(user_dir, exist_ok=True)
    ctx = {
        "c": TestClient(app),
        "h": {"Authorization": "Bearer " + create_access_token({"sub": "alice", "role": "user"})},
        "user_dir": user_dir,
        "_restore": lambda: (setattr(db, "DATA_DIR", old_data), setattr(db, "DB_FILE", old_file)),
    }
    yield ctx
    ctx["_restore"]()


def _seed_watchlist(ctx, stocks):
    import db
    for s in stocks:
        db.watchlist_set("alice", s["code"], s.get("name", s["code"]))


def test_v3_watchlist_paginated(v3_env):
    ctx = v3_env
    _seed_watchlist(ctx, [{"code": "6000%02d.SH" % i, "name": "股票%d" % i, "added_at": "t"} for i in range(25)])
    r = ctx["c"].get("/api/v3/watchlist?page=1&page_size=20", headers=ctx["h"])
    assert r.status_code == 200
    d = r.json()["data"]
    assert len(d["items"]) == 20 and d["total"] == 25 and d["pages"] == 2
    r2 = ctx["c"].get("/api/v3/watchlist?page=2&page_size=20", headers=ctx["h"])
    assert len(r2.json()["data"]["items"]) == 5


def test_v3_watchlist_filter_q(v3_env):
    ctx = v3_env
    _seed_watchlist(ctx, [{"code": "600000.SH", "name": "浦发银行", "added_at": "t"},
                          {"code": "000001.SZ", "name": "平安银行", "added_at": "t"}])
    r = ctx["c"].get("/api/v3/watchlist?q=平安", headers=ctx["h"])
    assert r.status_code == 200
    items = r.json()["data"]["items"]
    assert len(items) == 1 and items[0]["name"] == "平安银行"


def test_v3_watchlist_filter_code(v3_env):
    ctx = v3_env
    _seed_watchlist(ctx, [{"code": "600000.SH", "name": "a", "added_at": "t"},
                          {"code": "000001.SZ", "name": "b", "added_at": "t"}])
    r = ctx["c"].get("/api/v3/watchlist?q=600000", headers=ctx["h"])
    items = r.json()["data"]["items"]
    assert len(items) == 1 and items[0]["code"] == "600000.SH"


def test_v3_watchlist_add(v3_env):
    ctx = v3_env
    r = ctx["c"].post("/api/v3/watchlist", json={"code": "600519.SH", "name": "贵州茅台"}, headers=ctx["h"])
    assert r.status_code == 200
    # v1 同存储可见 (兼容)
    r1 = ctx["c"].get("/api/watchlist", headers=ctx["h"])
    codes = [s["code"] for s in r1.json().get("stocks", r1.json().get("data", []))]
    assert "600519.SH" in codes


def test_v3_watchlist_add_duplicate(v3_env):
    ctx = v3_env
    _seed_watchlist(ctx, [{"code": "600000.SH", "name": "a", "added_at": "t"}])
    r = ctx["c"].post("/api/v3/watchlist", json={"code": "600000.SH"}, headers=ctx["h"])
    assert r.status_code == 400
    assert r.json()["error"]["code"] == "BAD_REQUEST"


def test_v3_watchlist_add_missing_code(v3_env):
    ctx = v3_env
    r = ctx["c"].post("/api/v3/watchlist", json={}, headers=ctx["h"])
    assert r.status_code == 400


def test_v3_watchlist_delete(v3_env):
    ctx = v3_env
    _seed_watchlist(ctx, [{"code": "600000.SH", "name": "a", "added_at": "t"}])
    r = ctx["c"].delete("/api/v3/watchlist/600000.SH", headers=ctx["h"])
    assert r.status_code == 200
    r2 = ctx["c"].get("/api/v3/watchlist", headers=ctx["h"])
    assert r2.json()["data"]["total"] == 0


def test_v3_watchlist_delete_missing(v3_env):
    ctx = v3_env
    r = ctx["c"].delete("/api/v3/watchlist/999999.SZ", headers=ctx["h"])
    assert r.status_code == 404
    assert r.json()["error"]["code"] == "NOT_FOUND"


def test_v3_watchlist_unauth(v3_env):
    r = v3_env["c"].get("/api/v3/watchlist")
    assert r.status_code == 401


def test_v3_evaluations_paginate_and_filter(v3_env, tmp_path):
    ctx = v3_env
    recs = [{"stock_code": "600000.SH", "result": {"level": "强烈推荐"}, "model_used": "m", "created_at": "t%d" % i} for i in range(25)]
    with open(os.path.join(ctx["user_dir"], "ai_evaluation_history.json"), "w", encoding="utf-8") as f:
        json.dump(recs, f, ensure_ascii=False)
    r = ctx["c"].get("/api/v3/evaluations?page=1&page_size=10", headers=ctx["h"])
    d = r.json()["data"]
    assert len(d["items"]) == 10 and d["total"] == 25
    r2 = ctx["c"].get("/api/v3/evaluations?level=强烈推荐", headers=ctx["h"])
    assert r2.json()["data"]["total"] == 25


def test_v3_evaluations_filter_code(v3_env, tmp_path):
    ctx = v3_env
    recs = [{"stock_code": "600000.SH", "result": {"level": "推荐"}, "created_at": "a"},
            {"stock_code": "000001.SZ", "result": {"level": "回避"}, "created_at": "b"}]
    with open(os.path.join(ctx["user_dir"], "ai_evaluation_history.json"), "w", encoding="utf-8") as f:
        json.dump(recs, f, ensure_ascii=False)
    r = ctx["c"].get("/api/v3/evaluations?code=000001.SZ", headers=ctx["h"])
    items = r.json()["data"]["items"]
    assert len(items) == 1 and items[0]["level"] == "回避"


def test_v3_evaluations_unauth(v3_env):
    assert v3_env["c"].get("/api/v3/evaluations").status_code == 401


def test_v3_groups_requires_permission(v3_env):
    # alice 是 user 角色 (collab.read), groups 列表应可访问; 匿名 401
    assert v3_env["c"].get("/api/v3/groups").status_code == 401
    r = v3_env["c"].get("/api/v3/groups", headers=v3_env["h"])
    assert r.status_code == 200 and r.json()["data"]["total"] >= 0


# ─── v1/v2 兼容 ─────────────────────────────────────────────

def test_v1_watchlist_unchanged_shape(v3_env):
    """v1 端点响应结构与 v3 引入前一致 (兼容回归)"""
    ctx = v3_env
    _seed_watchlist(ctx, [{"code": "600000.SH", "name": "浦发银行", "added_at": "t"}])
    r = ctx["c"].get("/api/watchlist", headers=ctx["h"])
    assert r.status_code == 200
    body = r.json()
    # v1 仍是 {success, ...} 旧契约 (无 v3 错误信封混入)
    assert "success" in body
    assert "error" not in body


def test_v3_and_v1_share_storage(v3_env):
    ctx = v3_env
    ctx["c"].post("/api/v3/watchlist", json={"code": "600519.SH", "name": "茅台"}, headers=ctx["h"])
    r1 = ctx["c"].get("/api/watchlist", headers=ctx["h"])
    codes = [s["code"] for s in r1.json().get("stocks", r1.json().get("data", []))]
    assert "600519.SH" in codes


# ─── OpenAPI 摘要 ───────────────────────────────────────────

def test_v3_openapi_lists_paths():
    from api.v3.openapi import v3_openapi
    spec = v3_openapi()
    assert spec["version"] == "v3"
    paths = [p["path"] for p in spec["paths"]]
    assert "/api/v3/watchlist" in paths
    assert "/api/v3/evaluations" in paths
    assert "/api/v3/groups" in paths
    assert all("params" in p for p in spec["paths"])
