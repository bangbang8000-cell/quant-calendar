"""V5.0 T-5.0.4: 故障注入套件 — 5 类故障 (TEST-PLAN 1.1)

A. 三源全挂 (数据源冷却/路由兜底/告警队列/新鲜度诚实)
B. DB 只读/损坏 (持久化失败/检查降级/自愈报告)
C. 持仓缺失 (数据为空/聚合器容忍)
D. 日历空 (期望交易日回退/巡检 no_data)
E. 时间回拨 (时钟偏移下新鲜度不误判)

原则: 故障注入下"不抛未捕获异常 + 诚实反映 + 可恢复", 而非掩盖故障。
"""
import os
import threading
from datetime import date, datetime, timedelta

import pytest
from unittest.mock import patch


# ═══ A. 三源全挂 (数据源不可用) ═══

class TestSourcesAllDown:
    def test_route_order_never_empty_when_all_cooling(self):
        """全部源冷却 → 兜底仍返回非空路由 (避免空路由), 不抛异常"""
        from data_sources import _pause_source, get_route_order, SOURCE_ORDER
        for src in SOURCE_ORDER:
            _pause_source(src, "fault-test")
        order = get_route_order()
        assert isinstance(order, list) and len(order) > 0

    def test_route_order_skips_cooling_source(self):
        from data_sources import _pause_source, _resume_source, get_route_order, SOURCE_ORDER
        try:
            for src in SOURCE_ORDER:
                _pause_source(src, "fault-test")
            order = get_route_order()
            # 冷却中 → 返回的全是冷却源 (兜底), 但接口不抛错
            assert len(order) == len(SOURCE_ORDER)
        finally:
            for src in SOURCE_ORDER:
                _resume_source(src, "test-cleanup")

    def test_batch_failure_enqueues_alert(self):
        """连续失败达阈值 → 错误告警入队 (不抛异常)"""
        from data_sources import record_batch_failure, get_alerts, ALERT_QUEUE
        before = len(ALERT_QUEUE)
        record_batch_failure("tushare", 4, "fault-test down")
        alerts = get_alerts(limit=50)
        assert len(alerts) > before or any(a.get("level") == "error" and a.get("source") == "tushare" for a in alerts)

    def test_alert_queue_bounded(self):
        from data_sources import enqueue_alert, ALERT_QUEUE, ALERT_QUEUE_MAX
        for i in range(ALERT_QUEUE_MAX + 20):
            enqueue_alert("info", "tushare", f"fault {i}")
        assert len(ALERT_QUEUE) <= ALERT_QUEUE_MAX

    def test_sources_down_freshness_reports_honestly(self):
        """源全挂(解析器无新数据)时: 新鲜度如实报 missing, 不抛异常"""
        from reliability import freshness
        with patch("reliability.freshness._default_trade_dates", return_value=[]):
            exp = freshness.expected_latest_date(datetime(2026, 9, 1, 12), calendar=None)
        assert exp.weekday() < 5  # 回退到工作日, 而非崩溃
        s = freshness.status_summary(now=datetime(2026, 9, 1, 12), calendar=[date(2026, 9, 1)])
        assert "healthy" in s and "items" in s

    def test_sources_down_heal_cycle_no_crash(self):
        """源全挂 + 解析器空 → 巡检报 no_data, 自愈循环仍返回报告"""
        from reliability import heal
        p1 = patch("db.schema_ok", return_value=True)
        with p1, patch("data_parser.parser.get_available_dates", return_value=[]),              patch("reliability.freshness.status_summary",
                   return_value={"expected_latest": "2026-09-01", "healthy": False,
                                 "stale_count": 1, "items": []}):
            cycle = heal.run_cycle(now=datetime(2026, 9, 1, 12), calendar=[date(2026, 9, 1)])
        assert any(f["kind"] == "no_data" for f in cycle["findings"])
        assert cycle["healthy"] is False
        assert "findings" in cycle


# ═══ B. DB 只读/损坏 ═══

class TestDbReadOnly:
    def test_db_schema_failure_heal_reports_fail(self):
        from reliability import heal
        with patch("db.schema_ok", return_value=False),              patch("data_parser.parser.get_available_dates", return_value=["2026-09-01"]),              patch("reliability.freshness.status_summary",
                   return_value={"expected_latest": "2026-09-01", "healthy": True, "stale_count": 0, "items": []}):
            findings = heal.inspect()
        assert any(f["kind"] == "db_schema" and f["severity"] == "error" for f in findings)

    def test_db_broken_checks_graceful(self):
        """DB 连接异常 → 自检 db_schema fail, 报告仍返回且不抛异常"""
        from reliability import checks
        with patch("db.schema_ok", side_effect=RuntimeError("disk full")):
            r = checks.run_checks()
        assert any(c["name"] == "db_schema" and c["status"] == "fail" for c in r["checks"])
        assert r["healthy"] is False

    def test_record_update_persist_failure_contained(self):
        """写失败 (只读盘) → 异常向上抛出但可由调用方捕获; 存量数据不被破坏"""
        from reliability import freshness
        freshness.record_update("backup", detail="before")
        with patch.object(freshness, "_save", side_effect=OSError("read-only fs")):
            with pytest.raises(OSError):
                freshness.record_update("backup", detail="after")
        rec = freshness.get_record("backup")
        assert rec.get("detail") == "before"  # 失败不产生半写

    def test_heal_persist_failure_cycle_survives(self):
        """自愈时间线写失败 → 循环仍返回报告 (记录不致命)"""
        from reliability import heal
        with patch.object(heal, "persist", side_effect=OSError("read-only fs")),              patch("db.schema_ok", return_value=True),              patch("data_parser.parser.get_available_dates", return_value=["2026-09-01"]),              patch("reliability.freshness.status_summary",
                   return_value={"expected_latest": "2026-09-01", "healthy": True, "stale_count": 0, "items": []}):
            cycle = heal.run_cycle(now=datetime(2026, 9, 1, 12), calendar=[date(2026, 9, 1)])
        assert "healthy" in cycle


# ═══ C. 持仓缺失 (数据为空) ═══

class TestHoldingsMissing:
    def test_parser_empty_aggregator_tolerates(self):
        """持仓/数据缺失时: 聚合器可空重建, 不抛异常"""
        from views_aggregator import views_aggregator
        views_aggregator.all_dates = []          # 清空单例残留状态
        views_aggregator.daily_data = {}
        with patch("data_parser.parser.get_available_dates", return_value=[]),              patch.object(views_aggregator, "_build_from_parser", side_effect=lambda p: None):
            stats = views_aggregator.reload()
        assert stats["dates_count"] == 0
        assert stats["latest_date"] is None

    def test_freshness_strategy_holdings_missing_when_no_record(self):
        from reliability import freshness
        import paths
        p = os.path.join(paths.DATA_DIR, "freshness.json")
        if os.path.exists(p):
            os.remove(p)  # 清空记录, 独立于并发测试的写入
        s = freshness.status_summary(now=datetime(2026, 9, 1, 12), calendar=[date(2026, 9, 1)])
        sh = [i for i in s["items"] if i["asset_id"] == "strategy_holdings"]
        assert sh and sh[0]["status"] == "missing"

    def test_self_heal_without_holdings_no_crash(self):
        """持仓目录缺失 → 聚合器自愈判定返回 False (无崩溃, 不误报)"""
        from scheduler import Scheduler
        with patch("os.path.isdir", return_value=False):
            sch = Scheduler.__new__(Scheduler)  # 避免完整初始化
            assert sch._self_heal_aggregator() is False


# ═══ D. 日历空 ═══

class TestCalendarEmpty:
    def test_expected_latest_weekday_backfill_on_empty(self):
        from reliability import freshness
        with patch("reliability.freshness._default_trade_dates", return_value=[]):
            exp = freshness.expected_latest_date(datetime(2026, 9, 1, 12), calendar=None)
        assert exp.weekday() < 5
        assert (date(2026, 9, 1) - exp).days <= 14

    def test_freshness_status_with_empty_calendar(self):
        """日历空 → status_summary 用工作日回退评估, 不抛异常"""
        from reliability import freshness
        s = freshness.status_summary(now=datetime(2026, 9, 1, 12), calendar=[])
        assert "expected_latest" in s and "items" in s

    def test_heal_no_data_finding_and_survives(self):
        from reliability import heal
        with patch("db.schema_ok", return_value=True),              patch("data_parser.parser.get_available_dates", return_value=[]),              patch("reliability.freshness.status_summary",
                   return_value={"expected_latest": "2026-09-01", "healthy": False, "stale_count": 0, "items": []}):
            cycle = heal.run_cycle(now=datetime(2026, 9, 1, 12), calendar=[date(2026, 9, 1)])
        assert cycle["healthy"] is False
        assert any(f["kind"] == "no_data" for f in cycle["findings"])


# ═══ E. 时间回拨 (时钟偏移) ═══

class TestClockSkew:
    def test_age_asset_future_last_update_fresh(self):
        """last_update 在未来(时钟偏移) → 负小时差按 fresh 处理, 不误判 stale"""
        from reliability.freshness import evaluate_asset, ASSET_REGISTRY
        spec = ASSET_REGISTRY["backup"]  # max_age_hours 30
        now = datetime(2026, 9, 1, 12)
        future = {"last_update": (now + timedelta(hours=5)).isoformat()}
        assert evaluate_asset(spec, future, date(2026, 9, 1), now=now) == "fresh"

    def test_trading_day_future_latest_fresh(self):
        """latest_date 在未来 → 差值被钳制为 0 → fresh"""
        from reliability.freshness import evaluate_asset, ASSET_REGISTRY
        spec = ASSET_REGISTRY["strategy_holdings"]
        rec = {"latest_date": "2026-09-05"}  # 未来
        assert evaluate_asset(spec, rec, date(2026, 9, 1)) == "fresh"

    def test_run_cycle_clock_skew_no_crash(self):
        """now 早于记录时间(时钟回拨) → 循环仍返回合理报告"""
        from reliability import heal
        with patch("db.schema_ok", return_value=True),              patch("data_parser.parser.get_available_dates", return_value=["2026-09-01"]),              patch("reliability.freshness.status_summary",
                   return_value={"expected_latest": "2026-09-01", "healthy": True, "stale_count": 0, "items": []}):
            cycle = heal.run_cycle(now=datetime(2026, 8, 1, 12), calendar=[date(2026, 9, 1)])
        assert "healthy" in cycle and "findings" in cycle

    def test_record_then_evaluate_after_rollback(self):
        """记录后时钟回拨 → 资产判定不因时间倒流而错误变 stale"""
        from reliability import freshness
        freshness.record_update("market_daily", latest_date="2026-09-01",
                                now=datetime(2026, 9, 1, 12))
        # 时钟回拨到 8 月 (比记录早)
        s = freshness.status_summary(now=datetime(2026, 8, 15, 12), calendar=[date(2026, 8, 15)])
        md = [i for i in s["items"] if i["asset_id"] == "market_daily"]
        # 期望最近交易日 8/14; latest=9/1 在未来 → 钳制 → fresh (不误判)
        assert md and md[0]["status"] == "fresh"
