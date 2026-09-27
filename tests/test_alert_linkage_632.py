# -*- coding: utf-8 -*-
"""6.3.2 (T-6.3.2.3): 健康与新鲜度联动告警门禁

- 数据资产过期/缺失 → 面板告警记录 (data_sources._health 告警队列)
- 调度任务连续失败达阈值 → 面板告警记录
- 告警经 /api/system/alerts 可见; 同源每日节流防轰炸
"""
import io
import os

import pytest

BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))


def _read(rel):
    with io.open(os.path.join(BASE, rel), encoding="utf-8") as f:
        return f.read()


def test_freshness_alert_task_exists_and_wired():
    """调度器存在 freshness_alert_task 且在 start() 中启动"""
    src = _read("backend/scheduler/_core_health.py")
    assert "async def freshness_alert_task" in src, "缺 freshness_alert_task 任务"
    assert "def _scan_freshness_alerts" in src, "缺数据过期扫描"
    assert "def _scan_task_failure_alerts" in src, "缺任务连续失败扫描"
    core = _read("backend/scheduler/_core.py")
    assert "self.freshness_alert_task()" in core, "start() 未启动新鲜度告警任务"


def test_stale_asset_enqueues_alert(monkeypatch):
    """过期/缺失资产 → enqueue_alert 入面板告警队列 (同资产每日节流)"""
    import importlib
    dh = importlib.import_module("data_sources._health")  # 包级 _health 是 dict, 须取模块对象
    from scheduler import Scheduler
    s = Scheduler()
    queued = []
    monkeypatch.setattr(dh, "enqueue_alert",
                        lambda level, source, message: queued.append((level, source, message)))
    monkeypatch.setattr(
        "reliability.freshness.status_summary",
        lambda *a, **k: {"items": [
            {"asset_id": "market_daily", "name": "行情日线", "status": "stale",
             "expected_latest": "2026-09-25", "latest_date": "2026-09-20",
             "last_update": "2026-09-20T15:00:00"},
            {"asset_id": "backup", "name": "每日备份", "status": "missing",
             "expected_latest": None, "latest_date": None, "last_update": None},
        ]},
    )
    s._scan_freshness_alerts("2026-09-27")
    assert len(queued) == 2, "应入队 2 条告警 (stale + missing)"
    assert queued[0][0] == "warning" and queued[0][1] == "freshness"
    assert queued[1][0] == "error" and queued[1][1] == "freshness"
    # 同资产每日节流: 再次扫描不重复入队
    s._scan_freshness_alerts("2026-09-27")
    assert len(queued) == 2, "同资产同日不应重复告警"
    # 次日解除节流
    s._scan_freshness_alerts("2026-09-28")
    assert len(queued) == 4, "次日应重新告警"


def test_task_consecutive_failure_alerts(monkeypatch):
    """任务连续失败达阈值 → 面板告警 (同任务每日节流)"""
    import importlib
    dh = importlib.import_module("data_sources._health")  # 包级 _health 是 dict, 须取模块对象
    from scheduler import Scheduler
    s = Scheduler()
    queued = []
    monkeypatch.setattr(dh, "enqueue_alert",
                        lambda level, source, message: queued.append((level, source, message)))
    s._record_task_run("daily_backup", False)
    s._record_task_run("daily_backup", False)
    s._record_task_run("daily_backup", False)  # 连续 3 次 = 达阈值
    s._scan_task_failure_alerts("2026-09-27")
    assert len(queued) == 1, "应入队 1 条任务告警"
    assert queued[0][0] == "error" and queued[0][1] == "scheduler"
    s._scan_task_failure_alerts("2026-09-27")
    assert len(queued) == 1, "同任务同日不应重复告警"


def test_alerts_visible_via_system_alerts_endpoint():
    """面板可见告警记录 — /api/system/alerts 返回 data_sources 告警队列"""
    src = _read("backend/api/v1/system.py")
    assert 'get_alerts()' in src, "system.py 未暴露告警队列"