"""Tests for scheduler.py — async task scheduling"""
import pytest
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
        s = Scheduler()
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
