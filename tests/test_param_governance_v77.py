#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""v7.7 参数锁定/追踪测试 (FR-7.7-1)"""
import os, sys
sys.path.insert(0, os.path.join(os.path.dirname(__file__), '..', 'backend'))

import pytest
from fastapi import FastAPI
from fastapi.testclient import TestClient

from param_governance import (compute_params_hash, get_lock, list_audit,
                              lock_params, unlock_params, verify_params)


def _client(admin=False):
    from api.v1.param_governance import router
    from auth import get_admin_user, get_non_guest_user
    app = FastAPI()
    app.include_router(router, prefix="/api")
    app.dependency_overrides[get_non_guest_user] = lambda: {"username": "tester"}
    if admin:
        app.dependency_overrides[get_admin_user] = lambda: {"username": "admin", "role": "admin"}
    return TestClient(app)


def test_hash_deterministic_and_order_insensitive():
    """参数哈希: 键序无关、确定性, 支撑回测可复现"""
    a = compute_params_hash({"window": 20, "threshold": 0.05})
    b = compute_params_hash({"threshold": 0.05, "window": 20})
    assert a == b and len(a) == 64
    assert a != compute_params_hash({"window": 21, "threshold": 0.05})


def test_lock_verify_unlock_flow():
    sid = "test_v77_flow"
    params = {"window": 20, "threshold": 0.05}
    lock_params(sid, params, "tester", "baseline")
    lock = get_lock(sid)
    assert lock["locked"] is True
    assert lock["params_hash"] == compute_params_hash(params)
    assert verify_params(sid, params, record=False)["verdict"] == "match"
    mismatch = verify_params(sid, {"window": 30}, record=False)
    assert mismatch["verdict"] == "mismatch" and mismatch["matches"] is False
    assert unlock_params(sid, "admin", "done") is True
    assert get_lock(sid)["locked"] is False
    assert unlock_params(sid, "admin") is False  # 重复解锁不产生无意义事件


def test_audit_log_records_all_events():
    sid = "test_v77_audit"
    lock_params(sid, {"x": 1}, "u", "r")
    verify_params(sid, {"x": 1}, record=True)
    unlock_params(sid, "u", "cleanup")
    events = [x["event_type"] for x in list_audit(sid)]
    assert "lock" in events and "verify" in events and "unlock" in events
    assert any(x["operator"] == "u" for x in list_audit(sid))


def test_api_lock_verify_audit():
    sid = "test_v77_api"
    c = _client()
    r = c.post(f"/api/strategies/{sid}/lock",
               json={"params": {"p": 1}, "reason": "api"})
    assert r.status_code == 200
    assert r.json()["locked"] is True
    assert c.get(f"/api/strategies/{sid}/lock").json()["locked"] is True
    v = c.post(f"/api/strategies/{sid}/lock/verify", json={"params": {"p": 1}})
    assert v.json()["verdict"] == "match"
    a = c.get(f"/api/strategies/{sid}/lock/audit")
    assert a.json()["count"] >= 2


def test_api_unlock_requires_admin():
    sid = "test_v77_admin"
    _client().post(f"/api/strategies/{sid}/lock", json={"params": {"p": 2}})
    normal = _client().delete(f"/api/strategies/{sid}/lock")
    assert normal.status_code in (401, 403)
    admin = _client(admin=True).delete(
        f"/api/strategies/{sid}/lock?reason=approved")
    assert admin.status_code == 200
    assert get_lock(sid)["locked"] is False


def test_verify_rejects_bad_payload():
    r = _client().post("/api/strategies/any/lock/verify", json={"params": []})
    assert r.status_code == 400
