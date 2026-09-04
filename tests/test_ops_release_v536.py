# -*- coding: utf-8 -*-
"""V5.3.0 (T-5.3.6.x / FR-5.3.6.x): 运维与发布守护

- T-5.3.6.1: Docker 镜像推送 (tag 触发, latest+semver)
- T-5.3.6.2: 健康面板数据新鲜度 + 数据旧了告警
- T-5.3.6.3: 公网隧道方案文档化
- T-5.3.6.4: 升级回滚演练 + SLO 归档
"""
import os

BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))


def _read(rel):
    with open(os.path.join(BASE, rel), encoding="utf-8") as f:
        return f.read()


def test_docker_publish_has_latest_and_semver():
    """Docker 推送 tag 触发, latest + semver 标签"""
    src = _read(".github/workflows/docker-publish.yml")
    assert "tags:" in src and "push:" in src
    assert "value=latest" in src, "应推送 latest 标签"
    assert "type=semver" in src, "应推送 semver 版本标签"
    assert "type=ref,event=tag" in src


def test_health_freshness_display():
    """系统页展示数据新鲜度"""
    src = _read("frontend/js/components/system-page.js")
    assert "数据新鲜度" in src
    assert "freshnessData" in src


def test_stale_banner_present():
    """数据旧了 告警条 (stale/missing 资产提示)"""
    src = _read("frontend/js/components/system-page.js")
    assert "staleAssetCount" in src
    assert "数据已过期" in src
    assert "health-stale-banner" in src


def test_stale_banner_css():
    """告警条样式在 themes.css (非内联)"""
    css = _read("frontend/css/themes.css")
    assert ".health-stale-banner" in css


def test_tunnel_docs_present():
    """DEPLOYMENT.md 含公网隧道方案 (quick + 固定域名)"""
    dep = _read("DEPLOYMENT.md")
    assert "公网隧道方案" in dep
    assert "cloudflared" in dep
    assert "frp" in dep or "固定域名" in dep


def test_rollback_docs_present():
    """DEPLOYMENT.md 含升级回滚演练 + SLO"""
    dep = _read("DEPLOYMENT.md")
    assert "升级与回滚演练" in dep
    assert "rollback" in dep
    assert "SLO" in dep
