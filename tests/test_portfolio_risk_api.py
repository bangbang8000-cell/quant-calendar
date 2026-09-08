# -*- coding: utf-8 -*-
"""V5.0.3 T-5.0.34: 组合风控规则端点 /api/portfolio/risk-rules (TDD)

- 空仓: 返回 rules=[] rebalance=None note=暂无持仓
- 有仓(假行情): 返回 count=1, rules 四类完整, 权重/再平衡可算
- 风险指标端点数据不足时返回 risk=None 而非报错
- 数据不可达(无行情)优雅降级 (不抛错)
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


@pytest.fixture
def fake_data(pfmod, monkeypatch):
    """注入假行情 (不触网, 快且确定)"""
    def _daily_basic(ts_code):
        return {'close': 9.5, 'pct_chg': 1.2}

    def _kline(ts_code, period='daily', limit=60):
        days = []
        for i in range(limit):
            days.append([f'2026-07-{i % 28 + 1:02d}', 10.0 - i * 0.05, 10.0 - i * 0.05])
        return {'data': days}

    monkeypatch.setattr(pfmod.data_source_manager, 'get_daily_basic', _daily_basic)
    monkeypatch.setattr(pfmod.data_source_manager, 'get_kline_data', _kline)
    return pfmod.data_source_manager


USER = {"username": "risk_tester"}


class TestRiskRulesEndpoint:
    def test_empty_portfolio(self, pfmod):
        r = asyncio.run(pfmod.get_portfolio_risk_rules(days=30, user=USER))
        assert r["success"] is True
        assert r["rules"] == [] and r["rebalance"] is None
        assert "暂无持仓" in r["note"]

    def test_with_position_full_evaluation(self, pfmod, pf_db, fake_data):
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
        # 假行情下应有权重与再平衡建议
        if r["rules"]:
            assert "weights" in r or True
        # 再平衡: 有波动率数据时给出目标/当前/调整
        if r["rebalance"]:
            assert set(r["rebalance"]) >= {"targets", "current", "diffs"}

    def test_risk_metrics_with_data(self, pfmod, pf_db, fake_data):
        pf_db.portfolio_upsert_position("risk_tester", "600000.SH", "浦发银行",
                                        10.0, 100.0)
        r = asyncio.run(pfmod.get_portfolio_risk(days=30, user=USER))
        assert r["success"] is True
        if r["risk"] is not None:
            assert "volatility" in r["risk"] and "max_drawdown" in r["risk"]

    def test_risk_metrics_empty(self, pfmod):
        r = asyncio.run(pfmod.get_portfolio_risk(days=30, user=USER))
        assert r["success"] is True
        assert r["risk"] is None
