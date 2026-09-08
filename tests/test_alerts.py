"""V5.0 T-5.0.7: 告警分级与飞书送达 (reliability/alerts.py)

- grade_health_cycle: 健康巡检/自愈 cycle → 分级告警列表 (critical/warning/info)
- send_alert: 分级告警 → 飞书 (复用 feishu_push), 防抖去重, best-effort 永不抛
"""
from datetime import datetime, timedelta
from unittest.mock import patch

import pytest


def _cycle(db_schema_error=False, stale=False, no_data=False, still=None,
           heal_applied=False, healthy=True):
    findings = []
    if db_schema_error:
        findings.append({"kind": "db_schema", "severity": "error", "detail": "schema 校验失败"})
    if stale:
        findings.append({"kind": "stale_asset", "severity": "warning",
                         "asset_id": "strategy_holdings", "detail": "过期 5 天"})
    if no_data:
        findings.append({"kind": "no_data", "severity": "warning", "detail": "无可用交易日"})
    return {"healthy": healthy, "findings": findings,
            "still_affected": still or [],
            "heal_applied": heal_applied, "applied": ["rebuild_views"] if heal_applied else []}


class TestGrading:
    def test_db_schema_error_is_critical(self):
        from reliability import alerts
        a = alerts.grade_health_cycle(_cycle(db_schema_error=True))
        assert any(x["level"] == "critical" and "数据库" in x["title"] for x in a)

    def test_stale_asset_is_warning(self):
        from reliability import alerts
        a = alerts.grade_health_cycle(_cycle(stale=True))
        assert any(x["level"] == "warning" for x in a)

    def test_no_data_is_warning(self):
        from reliability import alerts
        a = alerts.grade_health_cycle(_cycle(no_data=True))
        assert any(x["level"] == "warning" for x in a)

    def test_still_affected_unresolved_is_warning(self):
        from reliability import alerts
        a = alerts.grade_health_cycle(_cycle(still=["strategy_holdings"]))
        assert any("自愈" in x["title"] and x["level"] == "warning" for x in a)

    def test_healthy_cycle_yields_no_alert(self):
        from reliability import alerts
        a = alerts.grade_health_cycle(_cycle())
        assert a == []

    def test_heal_applied_success_is_info(self):
        from reliability import alerts
        a = alerts.grade_health_cycle(_cycle(heal_applied=True, healthy=True))
        assert any(x["level"] == "info" and "自愈" in x["title"] for x in a)

    def test_level_rank_ordering(self):
        from reliability import alerts
        assert alerts.level_rank("info") < alerts.level_rank("warning") < alerts.level_rank("critical")


class TestSendAlert:
    def test_no_webhook_returns_false_no_exception(self):
        from reliability import alerts
        with patch.object(alerts, "_load_webhook", return_value=""):
            assert alerts.send_alert("warning", "health", "t", "m") is False

    def test_send_via_feishu_pusher(self):
        from reliability import alerts
        sent = []
        class FakePusher:
            def __init__(self, webhook): self.webhook = webhook
            def send_text(self, text):
                sent.append(text)
                return True
        with patch.object(alerts, "_load_webhook", return_value="https://hook"), \
             patch("feishu_push.FeishuPusher", FakePusher), \
             patch.object(alerts, "_recently_sent", return_value=False):
            ok = alerts.send_alert("critical", "health", "数据库异常", "schema 校验失败")
        assert ok is True
        assert len(sent) == 1
        assert "数据库异常" in sent[0] and "CRITICAL" in sent[0]

    def test_dedupe_within_cooldown(self):
        """同一 (source,title) 在冷却期内只发送一次"""
        from reliability import alerts
        calls = []
        class FakePusher:
            def __init__(self, webhook): self.webhook = webhook
            def send_text(self, text):
                calls.append(text)
                return True
        with patch.object(alerts, "_load_webhook", return_value="https://hook"), \
             patch("feishu_push.FeishuPusher", FakePusher):
            alerts.send_alert("warning", "health", "磁盘不足", "m1")
            alerts.send_alert("warning", "health", "磁盘不足", "m2")
        assert len(calls) == 1

    def test_send_failure_never_raises(self):
        from reliability import alerts
        class BoomPusher:
            def __init__(self, webhook): self.webhook = webhook
            def send_text(self, text): raise RuntimeError("webhook timeout")
        with patch.object(alerts, "_load_webhook", return_value="https://hook"), \
             patch("feishu_push.FeishuPusher", BoomPusher), \
             patch.object(alerts, "_recently_sent", return_value=False):
            assert alerts.send_alert("warning", "health", "t", "m") is False

    def test_different_keys_not_deduped(self):
        from reliability import alerts
        calls = []
        class FakePusher:
            def __init__(self, webhook): self.webhook = webhook
            def send_text(self, text):
                calls.append(text)
                return True
        with patch.object(alerts, "_load_webhook", return_value="https://hook"), \
             patch("feishu_push.FeishuPusher", FakePusher):
            alerts.send_alert("warning", "health", "标题A", "m1")
            alerts.send_alert("warning", "health", "标题B", "m2")
        assert len(calls) == 2
