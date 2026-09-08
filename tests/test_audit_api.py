# -*- coding: utf-8 -*-
"""
v3.21 (P0-5): 高危操作审计覆盖测试
验证: 清空自选 / 删除用户 / 恢复备份 三类高危操作写入审计日志
"""
import sys
import os
sys.path.insert(0, os.path.join(os.path.dirname(__file__), "..", "backend"))
import pytest
from fastapi.testclient import TestClient


@pytest.fixture(scope="module")
def admin_client():
    """注入 admin token 的测试客户端"""
    from main_new import app
    from auth import create_access_token
    token = create_access_token({"sub": "admin", "role": "admin"})
    client = TestClient(app)
    client.headers.update({"Authorization": "Bearer " + token})
    return client


def _last_audit_actions(client, n=5):
    """读取最近审计动作名列表"""
    r = client.get("/api/audit/logs?limit=" + str(n))
    assert r.status_code == 200, r.text
    return [rec.get("action") for rec in (r.json().get("logs") or [])]


def test_clear_watchlist_audited(admin_client):
    """清空自选产生 audit 记录"""
    admin_client.delete("/api/watchlist")
    actions = _last_audit_actions(admin_client)
    assert "clear_watchlist" in actions, actions


def test_delete_user_audited(admin_client):
    """删除用户产生 audit 记录 (非admin用户)"""
    from user_manager import user_manager
    uname = "audit_probe_user"
    if not user_manager.get_user(uname):
        user_manager.add_user(uname, "x", "viewer")
    r = admin_client.delete("/api/users/" + uname)
    assert r.status_code in (200, 404), r.text
    actions = _last_audit_actions(admin_client)
    assert "delete_user" in actions, actions


def test_restore_backup_audited(admin_client):
    """恢复备份产生 audit 记录"""
    from db import backup_db
    name = None
    try:
        name = backup_db()
    except Exception:
        pytest.skip("备份不可用")
    if name:
        r = admin_client.post("/api/backup/restore", json={"name": name})
        assert r.status_code in (200, 400), r.text
        actions = _last_audit_actions(admin_client)
        assert "restore_backup" in actions, actions
