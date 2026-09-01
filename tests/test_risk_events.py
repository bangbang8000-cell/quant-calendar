"""V5.3 T-5.3.5: 风险预警接入事件总线测试 (TEST-PLAN 4.1 test_risk_events.py)

- risk_alerts_to_events: 触发规则 → 事件, 未触发排除
- RiskEventProvider: 空仓返回 [], 有持仓(假数据)触发事件, 事件字段完整
- register_risk_provider 幂等 (重复注册不重复)
"""
import os
import sys
import tempfile

import pytest

sys.path.insert(0, os.path.join(os.path.dirname(__file__), '..', 'backend'))

from risk_events import (RiskEventProvider, build_risk_alerts,
                         risk_alerts_to_events, register_risk_provider)


def _triggered():
    return [
        {"rule_id": "r1", "type": "concentration", "triggered": True,
         "severity": "high", "action": "reduce", "message": "集中度超限: A: 25.0%"},
        {"rule_id": "r2", "type": "stop_loss", "triggered": False,
         "severity": "info", "action": "", "message": ""},
    ]


class TestRiskAlertsToEvents:
    def test_only_triggered_become_events(self):
        events = risk_alerts_to_events(_triggered())
        assert len(events) == 1

    def test_event_type_risk(self):
        events = risk_alerts_to_events(_triggered())
        assert events[0]["type"] == "risk"

    def test_title_contains_message_and_type(self):
        events = risk_alerts_to_events(_triggered())
        assert "concentration" in events[0]["title"]
        assert "集中度超限" in events[0]["title"]

    def test_fields_complete(self):
        events = risk_alerts_to_events(_triggered())
        ev = events[0]
        assert ev.get("date") and ev.get("severity") == "high"
        assert ev.get("action") == "reduce" and ev.get("name")

    def test_empty_input(self):
        assert risk_alerts_to_events([]) == []


@pytest.fixture
def pf_db():
    import db
    old_data, old_file = db.DATA_DIR, db.DB_FILE
    db.DATA_DIR = tempfile.mkdtemp()
    db.DB_FILE = os.path.join(db.DATA_DIR, "app.db")
    db.init_db()
    yield db
    db.DATA_DIR, db.DB_FILE = old_data, old_file


@pytest.fixture
def fake_data(pf_db, monkeypatch):
    """注入假行情 (不触网, 快且确定)"""
    from data_sources import data_source_manager

    def _daily_basic(ts_code):
        return {'close': 9.5, 'pct_chg': 1.2}

    def _kline(ts_code, period='daily', limit=30):
        days = []
        for i in range(limit):
            days.append([f'2026-08-{i + 1:02d}', 10.0 - i * 0.05, 10.0 - i * 0.05])
        return {'data': days}

    monkeypatch.setattr(data_source_manager, 'get_daily_basic', _daily_basic)
    monkeypatch.setattr(data_source_manager, 'get_kline_data', _kline)
    return data_source_manager


class TestProvider:
    def test_empty_portfolio_returns_empty(self, pf_db):
        p = RiskEventProvider("risk_user")
        assert p.fetch_events() == []

    def test_with_position_returns_wellformed(self, pf_db, fake_data):
        import db
        db.portfolio_upsert_position("risk_user", "600000.SH", "浦发银行",
                                     10.0, 100.0)
        p = RiskEventProvider("risk_user")
        out = p.fetch_events()
        assert isinstance(out, list)
        for ev in out:
            assert ev["type"] == "risk"
            assert ev["title"] and ev["severity"] and ev["date"]
            assert ev["name"]

    def test_available_flag(self):
        p = RiskEventProvider("risk_user")
        assert p.available is True
        assert p.name == "risk"

    def test_register_idempotent(self, pf_db):
        register_risk_provider("risk_user")
        register_risk_provider("risk_user")
        from event_alert import EVENT_PROVIDERS
        n = sum(1 for p in EVENT_PROVIDERS
                if isinstance(p, RiskEventProvider))
        assert n == 1


class TestBuildRiskAlerts:
    def test_build_returns_events_and_count(self):
        out = build_risk_alerts(_triggered())
        assert out["events"] and out["count"] == 1

    def test_build_empty(self):
        out = build_risk_alerts([])
        assert out["events"] == [] and out["count"] == 0
