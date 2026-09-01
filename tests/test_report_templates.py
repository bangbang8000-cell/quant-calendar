"""V5.5 T-5.5.1: 报表模板化测试 (TEST-PLAN 6.1 test_report_templates.py)

区块编排/渲染快照 (数据源 mock); 快照对比内容变更即红 (TEST-PLAN 6.2)。
"""
import os
import sys
import tempfile

import pytest

sys.path.insert(0, os.path.join(os.path.dirname(__file__), '..', 'backend'))

from report_center import (BLOCK_TYPES, render_block, render_report,
                           render_report_snapshot, collect_block_data)


def _providers(overrides=None):
    """默认 mock 数据源: 每区块返回确定数据。"""
    p = {
        "period": lambda date: {"date": date, "trading_days": 5,
                                "strategies": 2, "stocks": 8},
        "strategy": lambda date: {"strategies": [
            {"name": "策略A", "stocks": ["600519.SH", "000001.SZ"]},
            {"name": "策略B", "stocks": ["300750.SZ"]}]},
        "anomaly": lambda date: {"items": [
            {"code": "600519.SH", "change_pct": 6.5, "volume_ratio": 3.2}]},
        "evaluate": lambda date: {"evaluations": 10, "hit": 7, "total": 10,
                                  "rate": "70.0%"},
        "risk": lambda date: {"volatility": 0.25, "max_drawdown": 0.12,
                              "sharpe": 1.3, "var": 0.02},
        "portfolio": lambda date: {"value": 120000, "day_profit": 1.5,
                                   "positions": 3},
    }
    if overrides:
        p.update(overrides)
    return p


class TestBlockTypes:
    def test_all_types_registered(self):
        assert set(BLOCK_TYPES) >= {"period", "strategy", "anomaly",
                                    "evaluate", "risk", "portfolio"}

    def test_unknown_block_renders_note(self):
        md = render_block("no_such", {"x": 1}, "2026-01-01")
        assert "no_such" in md

    def test_period_block(self):
        md = render_block("period", {"date": "2026-01-05", "trading_days": 5,
                                     "strategies": 2, "stocks": 8}, "2026-01-05")
        assert "2026-01-05" in md and "8" in md

    def test_strategy_block_lists_stocks(self):
        md = render_block("strategy", {"strategies": [
            {"name": "策略A", "stocks": ["600519.SH"]}]}, "2026-01-05")
        assert "策略A" in md and "600519.SH" in md

    def test_anomaly_block(self):
        md = render_block("anomaly", {"items": [
            {"code": "600519.SH", "change_pct": 6.5, "volume_ratio": 3.2}]},
            "2026-01-05")
        assert "600519.SH" in md and "6.5" in md

    def test_evaluate_block(self):
        md = render_block("evaluate", {"evaluations": 10, "hit": 7,
                                       "total": 10, "rate": "70.0%"},
                          "2026-01-05")
        assert "70.0%" in md

    def test_risk_block(self):
        md = render_block("risk", {"volatility": 0.25, "max_drawdown": 0.12,
                                   "sharpe": 1.3, "var": 0.02}, "2026-01-05")
        assert "0.25" in md and "1.3" in md

    def test_portfolio_block(self):
        md = render_block("portfolio", {"value": 120000, "day_profit": 1.5,
                                        "positions": 3}, "2026-01-05")
        assert "120000" in md and "1.5" in md

    def test_empty_data_degrades(self):
        md = render_block("strategy", {}, "2026-01-05")
        assert "暂无" in md or "无数据" in md or md.strip()


class TestCollectData:
    def test_provider_called_with_date(self):
        got = {}
        def prov(date):
            got["date"] = date
            return {"trading_days": 5}
        data = collect_block_data("period", "2026-01-05", {"period": prov})
        assert got["date"] == "2026-01-05"
        assert data["trading_days"] == 5

    def test_missing_provider_uses_default_fallback(self, monkeypatch):
        # 缺注入 provider → 回退默认 provider (此处 mock 成空返回, 不触真实数据)
        monkeypatch.setattr("report_center._default_provider",
                            lambda block_type: lambda date: {})
        assert collect_block_data("strategy", "2026-01-05", {}) == {}

    def test_provider_exception_degrades(self):
        def bad(date):
            raise RuntimeError("boom")
        assert collect_block_data("period", "2026-01-05", {"period": bad}) == {}


class TestRenderReport:
    def test_blocks_in_order(self):
        out = render_report("测试报表", ["period", "strategy", "portfolio"],
                            "2026-01-05", _providers())
        md = out["content"]
        assert md.index("测试报表") < md.index("一、周期概览")
        assert md.index("一、周期概览") < md.index("二、策略持仓")
        assert md.index("二、策略持仓") < md.index("六、组合表现")

    def test_header_has_date(self):
        out = render_report("测试报表", ["period"], "2026-01-05", _providers())
        assert "2026-01-05" in out["content"]

    def test_empty_blocks_header_only(self):
        out = render_report("测试报表", [], "2026-01-05", _providers())
        assert "测试报表" in out["content"]

    def test_stats_collected(self):
        out = render_report("测试报表", ["period"], "2026-01-05", _providers())
        assert out["stats"]["blocks"] == 1

    def test_missing_provider_block_still_renders(self):
        out = render_report("测试报表", ["strategy"], "2026-01-05", {})
        assert "策略持仓" in out["content"]


class TestSnapshot:
    def test_snapshot_deterministic(self):
        s1 = render_report_snapshot(["period", "strategy"], "2026-01-05", _providers())
        s2 = render_report_snapshot(["period", "strategy"], "2026-01-05", _providers())
        assert s1["content_hash"] == s2["content_hash"]

    def test_snapshot_change_detected(self):
        s1 = render_report_snapshot(["strategy"], "2026-01-05", _providers())
        s2 = render_report_snapshot(["strategy"], "2026-01-05",
                                    _providers({"strategy": lambda d: {
                                        "strategies": [{"name": "策略C",
                                                        "stocks": ["000002.SZ"]}]}}))
        assert s1["content_hash"] != s2["content_hash"]

    def test_snapshot_blocks_rendered(self):
        s = render_report_snapshot(["period", "portfolio"], "2026-01-05", _providers())
        assert set(s["rendered"]) == {"period", "portfolio"}
        assert all(v for v in s["rendered"].values())
