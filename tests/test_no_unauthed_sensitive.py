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
    ("get", "/api/reliability/startup-report", None),
    ("get", "/api/reliability/heal-history", None),
    ("get", "/api/reliability/source-health", None),
    ("get", "/api/quality/score?symbol=000001.SZ", None),
    ("get", "/api/data-dict", None),
    ("get", "/api/lineage", None),
    # V5.0.2 T-5.0.22/T-5.0.26: 回测基准/报告导出 (策略与数据敏感)
    ("get", "/api/backtest/benchmarks", None),
    ("post", "/api/backtest/export", {"fmt": "csv", "result": {"strategy_id": "s1"}}),
    # V5.0.3 T-5.0.31/T-5.0.34: 组合风险指标/规则评估 (持仓私密数据)
    ("get", "/api/portfolio/risk", None),
    ("get", "/api/portfolio/risk-rules", None),
    # V5.0.4 T-5.0.43: 预警规则 CRUD/评估 (用户自定义规则 + 触发通知)
    ("get", "/api/alerts/rules", None),
    ("post", "/api/alerts/rules", {"stock_code": "600519.SH", "rule_type": "price_above", "threshold": 1500.0}),
    ("put", "/api/alerts/rules/1", {"threshold": 1600.0}),
    ("delete", "/api/alerts/rules/1", None),
    ("post", "/api/alerts/evaluate", {}),
    # V5.0.4 T-5.0.45: 通知中心 — 投递历史/通道状态/静默
    ("get", "/api/alerts/history", None),
    ("get", "/api/alerts/channels", None),
    ("get", "/api/alerts/silence", None),
    ("post", "/api/alerts/silence", {"minutes": 60}),
    # V5.0.5 T-5.0.52/5.5.3: 报表中心 — 订阅/生成/导出
    ("get", "/api/reports/subscriptions", None),
    ("post", "/api/reports/subscriptions", {"schedule": "daily"}),
    ("delete", "/api/reports/subscriptions/1", None),
    ("post", "/api/reports/subscriptions/1/run", {}),
    ("get", "/api/reports/generate", None),
    ("get", "/api/reports/export", None),
    ("get", "/api/reports/today-highlights", None),
    # V5.0.7 T-5.0.72: 任务队列 — 提交/查询/取消/清理 (后台任务资源 + 结果数据)
    ("post", "/api/jobs", {"task_type": "batch_evaluate", "payload": {}}),
    ("get", "/api/jobs", None),
    ("get", "/api/jobs/J-test", None),
    ("post", "/api/jobs/J-test/cancel", {}),
    ("delete", "/api/jobs/J-test", None),
    # V5.0.8 T-5.0.81: RBAC 2.0 — 角色/权限管理 (权限体系敏感)
    ("get", "/api/rbac/roles", None),
    ("post", "/api/rbac/roles", {"role_id": "x", "permissions": []}),
    ("put", "/api/rbac/roles/x", {"permissions": []}),
    ("delete", "/api/rbac/roles/x", None),
    # V5.0.8 T-5.0.82: 协作 — 共享组/成员/股票/备注/组合可见性 (私密与共享数据)
    ("get", "/api/collab/groups/my", None),
    ("post", "/api/collab/groups", {"name": "g"}),
    ("post", "/api/collab/groups/G1/members", {"username": "bob"}),
    ("delete", "/api/collab/groups/G1/members/bob", None),
    ("post", "/api/collab/groups/G1/stocks", {"code": "600000.SH"}),
    ("post", "/api/collab/notes/600000.SH", {"note": "x"}),
    ("get", "/api/collab/notes/600000.SH", None),
    ("get", "/api/collab/portfolio-visibility", None),
    ("put", "/api/collab/portfolio-visibility", {"visible_to": "all"}),
    # V5.0.8 T-5.0.83: API v3 — 分页/过滤/写操作 (用户数据)
    ("get", "/api/v3/watchlist", None),
    ("post", "/api/v3/watchlist", {"code": "600000.SH"}),
    ("delete", "/api/v3/watchlist/600000.SH", None),
    ("get", "/api/v3/evaluations", None),
    ("get", "/api/v3/groups", None),
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
