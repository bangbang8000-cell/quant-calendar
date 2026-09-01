# -*- coding: utf-8 -*-
"""V5.5 (T-5.5.5): 首页今日要点聚合测试 (TEST-PLAN 6.1/6.2)

今日要点与各模块 API 一致: 聚合端点按区块(周期/策略/异动/评估/风险)取数并规整为要点列表。
mock providers, 不触真实数据源。
"""
import os
import sys

import pytest

sys.path.insert(0, os.path.join(os.path.dirname(__file__), '..', 'backend'))

from report_center import collect_highlights, _HL_BUILDERS


def _providers():
    return {
        "period": lambda date: {"date": date, "trading_days": 5,
                                "strategies": 2, "stocks": 4},
        "strategy": lambda date: {"strategies": [
            {"name": "动量", "stocks": ["600519.SH", "000001.SZ"]},
            {"name": "反转", "stocks": ["300750.SZ"]}]},
        "anomaly": lambda date: {"anomalies": [
            {"code": "600519.SH", "pct": 6.5, "note": "放量突破"}]},
        "evaluate": lambda date: {"total": 10, "hits": 7},
        "risk": lambda date: {"volatility": 0.25, "max_drawdown": -0.08},
    }


class TestAggregation:
    def test_returns_structured_items(self):
        items = collect_highlights("2026-01-05", _providers())
        assert isinstance(items, list) and items
        first = items[0]
        for key in ("type", "title", "content", "level"):
            assert key in first, f"缺字段 {key}"

    def test_levels_valid(self):
        items = collect_highlights("2026-01-05", _providers())
        for it in items:
            assert it["level"] in ("up", "down", "neutral", "warn", "risk")

    def test_contains_strategy_points(self):
        items = collect_highlights("2026-01-05", _providers())
        joined = "\n".join(i["content"] for i in items)
        assert "600519.SH" in joined

    def test_contains_risk_point(self):
        items = collect_highlights("2026-01-05", _providers())
        assert any(i["type"] == "risk" for i in items)

    def test_contains_evaluate_point(self):
        items = collect_highlights("2026-01-05", _providers())
        assert any(i["type"] == "evaluate" for i in items)

    def test_order_period_first(self):
        items = collect_highlights("2026-01-05", _providers())
        assert items[0]["type"] == "period"

    def test_empty_provider_fallback(self):
        items = collect_highlights("2026-01-05", {})
        assert isinstance(items, list)

    def test_failed_provider_skipped(self):
        def boom(date):
            raise RuntimeError("数据源失败")
        items = collect_highlights("2026-01-05",
                                   {"period": boom, "strategy": boom})
        # 全部失败 → 不崩溃, 返回空列表
        assert isinstance(items, list)

    def test_builders_registered(self):
        for t in ("period", "strategy", "anomaly", "evaluate", "risk"):
            assert t in _HL_BUILDERS, f"缺少 {t} 要点构建器"
