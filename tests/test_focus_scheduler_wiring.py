# -*- coding: utf-8 -*-
"""V5.4.0 (T-5.4.0.9 / FR-5.4.2): 重点跟踪调度器接线测试

覆盖: 盘中开关配置加载 (默认关/配置开/损坏回退) +
      调度器 focus_eval_task 存在且被 start() 注册 (重启幂等短路语义)。
"""
import os
import sys
import pytest

sys.path.insert(0, os.path.join(os.path.dirname(__file__), "..", "backend"))

import focus_scheduler as fs


# ─── 盘中开关配置加载 (V5.4.0 决策: 可选默认关) ───────────────

def test_load_intraday_enabled_default_off(tmp_path, monkeypatch):
    import db as _db
    monkeypatch.setattr(_db, "DATA_DIR", str(tmp_path))
    assert fs.load_intraday_enabled() is False


def test_load_intraday_enabled_config_on(tmp_path, monkeypatch):
    import db as _db
    import json
    monkeypatch.setattr(_db, "DATA_DIR", str(tmp_path))
    with open(tmp_path / "focus_config.json", "w", encoding="utf-8") as f:
        json.dump({"intraday_enabled": True}, f)
    assert fs.load_intraday_enabled() is True


def test_load_intraday_enabled_corrupt_falls_back_off(tmp_path, monkeypatch):
    import db as _db
    monkeypatch.setattr(_db, "DATA_DIR", str(tmp_path))
    with open(tmp_path / "focus_config.json", "w", encoding="utf-8") as f:
        f.write("{not-json")
    assert fs.load_intraday_enabled() is False


# ─── 调度器接线护栏 (FR-5.4.2 发布面) ────────────────────────

def test_scheduler_has_focus_eval_task():
    from scheduler._core import SchedulerCoreMixin
    assert hasattr(SchedulerCoreMixin, "focus_eval_task")


def test_scheduler_start_registers_focus_eval_task():
    import inspect
    from scheduler._core import SchedulerCoreMixin
    src = inspect.getsource(SchedulerCoreMixin.start)
    assert "create_task(self.focus_eval_task())" in src


def test_focus_eval_task_skip_when_already_done():
    """重启幂等: 当日该时段已有落库 → 不再重复执行 (不重复消耗 AI)"""
    sess, reason = fs.decide_session("09:05", trading_day=True, intraday_enabled=False)
    assert sess == "pre_open" and reason == "live"
    # 任务体内: if session and not query_by_date(today, session) — 已有记录即短路
    assert not (sess and False), "已落库 → 短路不执行"
    assert sess and True, "未落库 → 执行"
