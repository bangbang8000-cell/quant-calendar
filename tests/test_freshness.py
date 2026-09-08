"""V5.0 T-5.0.1: 数据资产注册与新鲜度模型

覆盖: 资产注册表 / 更新记录 / 过期判定(trading_day+age) / 状态汇总 / 期望最近交易日 / 持久化隔离 / API
"""
import json
import os
from datetime import date, datetime, timedelta

import pytest
from unittest.mock import patch


# ─── 资产注册表 ───

class TestRegistry:
    def test_registry_has_core_assets(self):
        from reliability.freshness import ASSET_REGISTRY
        for aid in ["strategy_holdings", "calendar_views", "market_daily", "backup", "market_review"]:
            assert aid in ASSET_REGISTRY, f"缺少资产 {aid}"

    def test_registry_ids_unique_and_fields_valid(self):
        from reliability.freshness import ASSET_REGISTRY
        ids = [s.id for s in ASSET_REGISTRY.values()]
        assert len(ids) == len(set(ids)), "资产 id 必须唯一"
        for s in ASSET_REGISTRY.values():
            assert s.name, f"{s.id} 缺 name"
            assert s.freshness_type in ("trading_day", "age"), f"{s.id} freshness_type 非法"
            assert s.stale_policy in ("alert", "heal"), f"{s.id} stale_policy 非法"
            if s.freshness_type == "trading_day":
                assert s.tolerance_days >= 0
            else:
                assert s.max_age_hours > 0


# ─── 更新记录与持久化 ───

class TestRecordUpdate:
    def test_unknown_asset_raises(self):
        from reliability.freshness import record_update
        with pytest.raises(ValueError):
            record_update("no_such_asset")

    def test_record_update_persists_to_disk(self):
        from reliability.freshness import record_update, get_record
        import paths
        record_update("strategy_holdings", latest_date="2026-08-28", count=42, detail="strategy_run ok")
        rec = get_record("strategy_holdings")
        assert rec["latest_date"] == "2026-08-28"
        assert rec["count"] == 42
        assert rec["last_update"]
        p = os.path.join(paths.DATA_DIR, "freshness.json")
        assert os.path.exists(p)
        with open(p, encoding="utf-8") as f:
            assert "strategy_holdings" in json.load(f)

    def test_record_update_overwrites_latest(self):
        from reliability.freshness import record_update, get_record
        record_update("market_daily", latest_date="2026-08-27", count=1)
        record_update("market_daily", latest_date="2026-08-28", count=2)
        rec = get_record("market_daily")
        assert rec["latest_date"] == "2026-08-28"
        assert rec["count"] == 2

    def test_writes_under_redirected_data_dir(self):
        """隔离: 必须写到 conftest 重定向的临时 DATA_DIR, 不碰真实 data/"""
        from reliability.freshness import record_update
        import paths
        record_update("backup", detail="t")
        assert os.path.exists(os.path.join(paths.DATA_DIR, "freshness.json"))


# ─── 过期判定 ───

class TestEvaluate:
    def test_missing_record_is_missing(self):
        from reliability.freshness import evaluate_asset, ASSET_REGISTRY
        spec = ASSET_REGISTRY["strategy_holdings"]
        assert evaluate_asset(spec, None, date(2026, 8, 31)) == "missing"

    def test_missing_latest_date_is_missing(self):
        from reliability.freshness import evaluate_asset, ASSET_REGISTRY
        spec = ASSET_REGISTRY["strategy_holdings"]
        assert evaluate_asset(spec, {"last_update": "2026-08-31T10:00:00"}, date(2026, 8, 31)) == "missing"

    def test_trading_day_within_tolerance_fresh(self):
        from reliability.freshness import evaluate_asset, ASSET_REGISTRY
        spec = ASSET_REGISTRY["strategy_holdings"]  # tolerance 3
        expected = date(2026, 8, 31)
        assert evaluate_asset(spec, {"latest_date": "2026-08-28"}, expected) == "fresh"  # 差 3 天
        assert evaluate_asset(spec, {"latest_date": "2026-08-31"}, expected) == "fresh"  # 差 0 天

    def test_trading_day_beyond_tolerance_stale(self):
        from reliability.freshness import evaluate_asset, ASSET_REGISTRY
        spec = ASSET_REGISTRY["strategy_holdings"]  # tolerance 3
        expected = date(2026, 8, 31)
        assert evaluate_asset(spec, {"latest_date": "2026-08-27"}, expected) == "stale"  # 差 4 天

    def test_age_type_fresh_and_stale(self):
        from reliability.freshness import evaluate_asset, ASSET_REGISTRY
        spec = ASSET_REGISTRY["backup"]  # max_age_hours 30
        now = datetime(2026, 8, 31, 12, 0, 0)
        fresh_rec = {"last_update": (now - timedelta(hours=10)).isoformat()}
        stale_rec = {"last_update": (now - timedelta(hours=48)).isoformat()}
        assert evaluate_asset(spec, fresh_rec, date(2026, 8, 31), now=now) == "fresh"
        assert evaluate_asset(spec, stale_rec, date(2026, 8, 31), now=now) == "stale"

    def test_corrupt_last_update_is_missing(self):
        from reliability.freshness import evaluate_asset, ASSET_REGISTRY
        spec = ASSET_REGISTRY["backup"]
        assert evaluate_asset(spec, {"last_update": "not-a-date"}, date(2026, 8, 31)) == "missing"


# ─── 状态汇总 ───

class TestStatusSummary:
    def test_all_missing_is_not_healthy(self):
        from reliability.freshness import status_summary
        s = status_summary(now=datetime(2026, 8, 31, 12), calendar=[date(2026, 8, 31)])
        assert s["healthy"] is False
        assert s["stale_count"] >= 1

    def test_all_fresh_is_healthy(self):
        from reliability.freshness import status_summary, record_update
        now = datetime(2026, 8, 31, 12)
        cal = [date(2026, 8, 31)]
        record_update("strategy_holdings", latest_date="2026-08-31", now=now)
        record_update("calendar_views", latest_date="2026-08-31", now=now)
        record_update("market_daily", latest_date="2026-08-31", now=now)
        record_update("market_review", latest_date="2026-08-31", now=now)
        record_update("daily_report", now=now)
        record_update("weekly_report", now=now)
        record_update("evaluation_history", now=now)
        record_update("backup", now=now)
        record_update("stock_info", now=now)
        s = status_summary(now=now, calendar=cal)
        assert s["healthy"] is True, s
        assert s["stale_count"] == 0

    def test_disabled_asset_skipped(self):
        from reliability.freshness import status_summary
        with patch("reliability.freshness.ASSET_REGISTRY") as reg:
            reg.values.return_value = []  # 全部禁用/空 → 健康
            s = status_summary(now=datetime(2026, 8, 31, 12), calendar=[date(2026, 8, 31)])
            assert s["healthy"] is True
            assert s["items"] == []

    def test_summary_includes_expected_latest_for_trading_day(self):
        from reliability.freshness import status_summary
        s = status_summary(now=datetime(2026, 8, 31, 12), calendar=[date(2026, 8, 31)])
        day_items = [i for i in s["items"] if i["freshness_type"] == "trading_day"]
        assert day_items and all(i["expected_latest"] == "2026-08-31" for i in day_items)


# ─── 期望最近交易日 ───

class TestExpectedLatest:
    def test_uses_injected_calendar_and_filters_future(self):
        from reliability.freshness import expected_latest_date
        cal = [date(2026, 8, 28), date(2026, 8, 31), date(2026, 9, 1)]
        assert expected_latest_date(datetime(2026, 8, 31, 10), calendar=cal) == date(2026, 8, 31)

    def test_weekday_fallback_when_parser_empty(self):
        """parser 无数据(故障场景)时回退到最近工作日, 不抛异常"""
        from reliability.freshness import expected_latest_date
        dt = datetime(2026, 8, 30, 10)
        with patch("reliability.freshness._default_trade_dates", return_value=[]):
            got = expected_latest_date(dt, calendar=None)
        assert got.weekday() < 5
        assert (dt.date() - got).days <= 3


# ─── API 端点 ───

class TestFreshnessApi:
    def test_anonymous_rejected(self):
        from main_new import app
        from fastapi.testclient import TestClient
        c = TestClient(app)
        assert c.get("/api/reliability/freshness").status_code in (401, 403)

    def test_admin_can_read_summary(self):
        from main_new import app
        from auth import create_access_token
        from fastapi.testclient import TestClient
        token = create_access_token({"sub": "admin", "role": "admin"})
        c = TestClient(app)
        c.headers.update({"Authorization": "Bearer " + token})
        r = c.get("/api/reliability/freshness")
        assert r.status_code == 200, r.text
        data = r.json()["data"]
        assert "healthy" in data and "items" in data
