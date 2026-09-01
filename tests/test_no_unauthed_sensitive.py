# -*- coding: utf-8 -*-
"""
V4.1 (FR-4.1.1): 安全鉴权门禁 — 敏感端点 deny-by-default

枚举所有"写操作/高成本/私密数据"端点, 断言匿名(无 token)请求一律 401/403。
新增敏感端点必须加入本清单(或显式评估豁免), 防止"忘加 Depends"静默引入风险。

清单依据: docs/audits/audit_quant-calendar_security_2026-08-21.md P0/P1
"""
import sys
import os
sys.path.insert(0, os.path.join(os.path.dirname(__file__), "..", "backend"))
import pytest
from fastapi.testclient import TestClient

# (method, path, body_or_None) — 匿名请求必须被拒绝
SENSITIVE_ENDPOINTS = [
    # 初始化向导: 匿名改密=账户接管
    ("post", "/api/setup/complete", {}),
    ("post", "/api/setup/reset", None),
    # 数据刷新: 高成本重计算/改配置
    ("get", "/api/data-refresh/config", None),
    ("post", "/api/data-refresh/config", {}),
    ("post", "/api/data-refresh/reload", None),
    ("post", "/api/data-refresh/pull", {}),
    ("get", "/api/data-refresh/financial", None),
    # AI 模型/配置: 注入恶意 base_url / 保存定时付费任务 / 泄露厂商密钥
    ("post", "/api/ai/models", {}),
    ("post", "/api/ai/models/test", {}),
    ("post", "/api/ai/auto-config", {}),
    ("get", "/api/ai/config", None),
    ("get", "/api/ai/models", None),
    # 反馈列表: 私密(ip/UA/内容)
    ("get", "/api/feedback", None),
    # Prometheus 指标: 内部暴露面
    ("get", "/metrics", None),
    # V5.0 T-5.0.1: 可靠性/数据新鲜度 (运维信息, 需登录)
    ("get", "/api/reliability/freshness", None),
]


@pytest.fixture(scope="module")
def anon_client():
    """无 token 的测试客户端"""
    from main_new import app
    return TestClient(app)


@pytest.mark.parametrize("method,path,body", SENSITIVE_ENDPOINTS)
def test_sensitive_endpoint_rejects_anonymous(anon_client, method, path, body):
    """敏感端点匿名请求必须 401/403"""
    r = anon_client.request(method, path, json=body)
    assert r.status_code in (401, 403), (
        f"{method.upper()} {path} 匿名应被拒绝(401/403), 实际 {r.status_code}: {r.text[:120]}"
    )


def test_public_whitelist_still_anon(anon_client):
    """确需匿名的公开端点保持匿名可用(避免误伤)"""
    # 健康检查
    assert anon_client.get("/api/health").status_code == 200
    # 初始化状态(仅返回 needed, 不泄露密码细节)
    r = anon_client.get("/api/setup/status")
    assert r.status_code == 200
    body = r.json()
    assert "needed" in body
