# -*- coding: utf-8 -*-
"""
v3.22-I4: 美林时钟历史周期时间轴 API 测试
验证 GET /api/merrill-clock/timeline 返回 4 轮周期时间轴
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


def test_timeline_endpoint_ok(admin_client):
    """端点返回 success + cycles 结构"""
    r = admin_client.get("/api/market/merrill-clock/timeline")
    assert r.status_code == 200, r.text
    body = r.json()
    assert body.get("success") is True, body
    data = body.get("data") or {}
    assert "cycles" in data


def test_timeline_has_cycles(admin_client):
    """返回至少 1 轮(生产数据有 4 轮)"""
    r = admin_client.get("/api/market/merrill-clock/timeline")
    cycles = (r.json().get("data") or {}).get("cycles") or []
    assert len(cycles) >= 1
    assert len(cycles) <= 4, f"最近 4 轮上限, 实际 {len(cycles)}"


def test_cycle_has_stages(admin_client):
    """每轮含 stages 序列"""
    r = admin_client.get("/api/market/merrill-clock/timeline")
    cycles = (r.json().get("data") or {}).get("cycles") or []
    c0 = cycles[0]
    assert "label" in c0
    assert len(c0.get("stages") or []) >= 1
    s = c0["stages"][0]
    for key in ("stage", "name", "start", "end", "duration_months", "trigger"):
        assert key in s, f"缺少字段 {key}"
