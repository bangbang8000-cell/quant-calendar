"""V5.3 T-5.3.4: 组合风控规则端点 /api/portfolio/risk-rules (TDD)

- 空仓: 返回 rules=[] rebalance=None note=暂无持仓
- 有仓: 返回 count=1, rules 四类完整, 数据不可达优雅降级 (不抛错)
- 风险指标端点 /api/portfolio/risk 数据不足时返回 risk=None 而非报错
"""
import asyncio
import os
import sys
import tempfile

import pytest

sys.path.insert(0, os.path.join(os.path.dirname(__file__), '..', 'backend'))


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
def pfmod(pf_db):
    import api.v1.portfolio as m
    yield m


USER = {"username": "risk_tester"}


class TestRiskRulesEndpoint:
    def test_empty_portfolio(self, pfmod):
        r = asyncio.run(pfmod.get_portfolio_risk_rules(days=30, user=USER))
        assert r["success"] is True
        assert r["rules"] == [] and r["rebalance"] is None
        assert "暂无持仓" in r["note"]

    def test_with_position_degrades_gracefully(self, pfmod, pf_db):
        pf_db.portfolio_upsert_position("risk_tester", "600000.SH", "浦发银行",
                                        10.0, 100.0)
        r = asyncio.run(pfmod.get_portfolio_risk_rules(days=30, user=USER))
        assert r["success"] is True
        assert r["count"] == 1
        types = {x["type"] for x in r["rules"]}
        assert types == {"concentration", "stop_loss", "take_profit",
                         "drawdown_circuit"}
        for rule in r["rules"]:
            assert rule["rule_id"] and "triggered" in rule
            assert "severity" in rule and "action" in rule

    def test_risk_metrics_empty(self, pfmod):
        r = asyncio.run(pfmod.get_portfolio_risk(days=30, user=USER))
        assert r["success"] is True
        assert r["risk"] is None
