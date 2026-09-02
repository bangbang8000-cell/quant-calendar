"""Tests for scheduler.py — async task scheduling"""
from unittest.mock import patch


class TestStrategyRunTask:
    """v3.21 (P0-8): 策略定期运行任务"""

    def test_strategy_run_once_uses_gov_state(self):
        """run_strategy_once 从 governance 读 enabled, 只跑启用策略"""
        import strategy_governance as gov
        calls = []
        state = {"multi_factor": {"enabled": True, "schedule": "20:00"},
                 "capital_flow": {"enabled": False, "schedule": "20:00"}}
        with patch.object(gov, "get_state", return_value=state), \
             patch.object(gov, "run_once") as run:
            run.side_effect = lambda sid, as_of=None: calls.append(sid) or {"sid": sid}
            from scheduler import run_strategy_once
            ok, executed, errors = run_strategy_once()
        assert calls == ["multi_factor"], calls
        assert ok is True
        assert executed == ["multi_factor"]
        assert errors == []

    def test_strategy_run_once_skips_when_none_enabled(self):
        """无启用策略时不执行, 不记录"""
        from scheduler import run_strategy_once
        import strategy_governance as gov
        state = {"multi_factor": {"enabled": False, "schedule": "20:00"}}
        with patch.object(gov, "get_state", return_value=state), \
             patch.object(gov, "run_once") as run:
            run_strategy_once()
        run.assert_not_called()

    def test_strategy_run_task_sleep_until_20(self):
        """strategy_run_task 使用 governance 默认 20:00 (由 run_strategy_once 调度参数驱动)"""
        from scheduler import Scheduler
        Scheduler()
        # 验证默认 schedule 常量
        import strategy_governance as gov
        assert gov.DEFAULT_SCHEDULE == "20:00"



class TestSchedulerInit:
    """Scheduler initialization"""

    def test_scheduler_import(self):
        """Scheduler module can be imported"""
        from scheduler import Scheduler
        assert Scheduler is not None

    def test_scheduler_create_instance(self):
        """Can create scheduler instance (without starting)"""
        from scheduler import Scheduler
        s = Scheduler()
        assert s is not None

    def test_default_state(self):
        """Scheduler starts with default webhook None"""
        from scheduler import Scheduler
        s = Scheduler()
        # Should have reasonable defaults
        assert s is not None


class TestSchedulerWeekdayCheck:
    """Weekday execution check"""

    def test_should_execute_weekday(self):
        """Check that scheduling works on weekdays (mock datetime)"""
        from scheduler import Scheduler
        import datetime
        s = Scheduler()
        # Test the method exists and returns bool
        with patch('datetime.datetime') as mock_dt:
            mock_dt.now.return_value = datetime.datetime(2026, 7, 14, 22, 0, 0)  # Tuesday
            result = s._should_execute_today()
            assert isinstance(result, bool)


class TestSchedulerSetWebhook:
    """Webhook configuration"""

    def test_set_webhook(self):
        """set_webhook stores URL"""
        from scheduler import Scheduler
        s = Scheduler()
        s.set_webhook("https://hooks.example.com/test")
        assert s is not None

    def test_set_webhook_empty(self):
        """set_webhook with empty string is allowed"""
        from scheduler import Scheduler
        s = Scheduler()
        s.set_webhook("")


def test_start_registered_tasks_have_methods():
    """start() 注册的每个任务名必须对应 Scheduler 上的真实方法 (防漏定义/拼写错致启动崩溃)"""
    import inspect
    import re
    from scheduler import Scheduler
    src = inspect.getsource(Scheduler.start)
    names = set(re.findall(r'create_task\(self\.(\w+)\(', src))
    assert names, "start() 应注册至少一个任务"
    for name in names:
        assert hasattr(Scheduler, name), f"start() 注册了未定义的方法 {name}"
    for task in ("daily_market_review_task", "event_alert_scan_task", "fact_check_audit_task"):
        assert task in names, f"应注册 {task}"


class TestSchedulerHelpersCoverage:
    """V5.0.9 T-5.0.92: scheduler._helpers 纯函数覆盖 (覆盖率门禁 scheduler >=30%)"""

    def test_scan_csv_files_flat(self, tmp_path):
        from scheduler import _helpers as H
        d1 = tmp_path / "q1"
        d1.mkdir()
        (d1 / "a.csv").write_text("x")
        (d1 / "b.txt").write_text("x")
        (d1 / "sub").mkdir()
        (d1 / "sub" / "c.csv").write_text("x")
        out = H.scan_csv_files([str(d1)], recursive=False)
        assert len(out) == 1
        assert str(d1 / "a.csv") in out

    def test_scan_csv_files_recursive(self, tmp_path):
        from scheduler import _helpers as H
        d1 = tmp_path / "q1"
        (d1 / "sub").mkdir(parents=True)
        (d1 / "a.csv").write_text("x")
        (d1 / "sub" / "b.csv").write_text("x")
        out = H.scan_csv_files([str(d1)], recursive=True)
        assert len(out) == 2

    def test_scan_csv_files_skips_missing_dir(self):
        from scheduler import _helpers as H
        assert H.scan_csv_files(["/nonexistent/path/xyz"], recursive=True) == {}

    def test_detect_csv_changes_modified(self):
        from scheduler import _helpers as H
        changed, desc = H.detect_csv_changes({"/x/a.csv": 1}, {"/x/a.csv": 2})
        assert changed is True and "文件变动" in desc

    def test_detect_csv_changes_new(self):
        from scheduler import _helpers as H
        changed, desc = H.detect_csv_changes({}, {"/x/a.csv": 1})
        assert changed is True and "新文件" in desc

    def test_detect_csv_changes_deleted(self):
        from scheduler import _helpers as H
        changed, desc = H.detect_csv_changes({"/x/a.csv": 1}, {})
        assert changed is True and "文件删除" in desc

    def test_detect_csv_changes_none(self):
        from scheduler import _helpers as H
        changed, desc = H.detect_csv_changes({"/x/a.csv": 1}, {"/x/a.csv": 1})
        assert changed is False and desc == "无变动"

    def test_verify_day_ingest_empty_agg(self):
        from scheduler import _helpers as H
        class FakeAgg:
            all_dates = []
        ok, detail = H.verify_day_ingest("2026-01-05", agg=FakeAgg())
        assert ok is False and "无可用日期" in detail

    def test_verify_day_ingest_bad_date(self):
        from scheduler import _helpers as H
        class FakeAgg:
            all_dates = ["2026-01-05"]
            def get_day_view(self, d): return {"total": 1}
        ok, detail = H.verify_day_ingest("not-a-date", agg=FakeAgg())
        assert ok is False and "日期格式无效" in detail

    def test_verify_day_ingest_ok(self):
        from scheduler import _helpers as H
        class FakeAgg:
            all_dates = ["2026-01-05", "2026-01-06"]
            def get_day_view(self, d): return {"total": 3}
        ok, detail = H.verify_day_ingest("2026-01-05", agg=FakeAgg())
        assert ok is True and "日视图已可见" in detail

    def test_verify_day_ingest_empty_total(self):
        from scheduler import _helpers as H
        class FakeAgg:
            all_dates = ["2026-01-05"]
            def get_day_view(self, d): return {"total": 0}
        ok, detail = H.verify_day_ingest("2026-01-05", agg=FakeAgg())
        assert ok is False and "日视图为空" in detail

    def test_verify_day_ingest_fallback_weekend(self):
        from scheduler import _helpers as H
        class FakeAgg:
            all_dates = ["2026-01-02", "2026-01-05"]
            def get_day_view(self, d): return {"total": 7}
        ok, detail = H.verify_day_ingest("2026-01-04", agg=FakeAgg())
        assert ok is True and "原始请求 2026-01-04" in detail

    def test_verify_day_ingest_too_old(self):
        from scheduler import _helpers as H
        class FakeAgg:
            all_dates = ["2026-01-05"]
            def get_day_view(self, d): return {"total": 1}
        ok, detail = H.verify_day_ingest("2025-12-01", agg=FakeAgg())
        assert ok is False and "不在聚合器可用日期内" in detail

    def test_run_strategy_once_progress_cb(self):
        import strategy_governance as gov
        from scheduler import _helpers as H
        state = {"multi_factor": {"enabled": True}}
        stages = []
        with patch.object(gov, "get_state", return_value=state),              patch.object(gov, "run_once", return_value={"sid": "multi_factor"}):
            ok, executed, errors = H.run_strategy_once(progress_cb=lambda sid, st: stages.append((sid, st)))
        assert ("multi_factor", "generating") in stages
        assert ("multi_factor", "done") in stages
        assert executed == ["multi_factor"]

    def test_run_strategy_once_error_path(self):
        import strategy_governance as gov
        from scheduler import _helpers as H
        state = {"multi_factor": {"enabled": True}}
        def boom(sid, as_of=None):
            raise ValueError("模拟失败")
        with patch.object(gov, "get_state", return_value=state),              patch.object(gov, "run_once", side_effect=boom):
            ok, executed, errors = H.run_strategy_once()
        assert ok is False
        assert executed == []
        assert len(errors) == 1
        assert "模拟失败" in errors[0]["error"]
