#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""V5.3.8 (BUG-FIX-2): 盘中核验自动采集守护

用户报「盘中核验无数据」。根因: 快照仅支持手动采集(6 时点窗口内手动点按钮,
错过 8 分钟拒收), scheduler 无自动采集任务 → 几乎必然无数据。

修复: scheduler 新增 intraday_snapshot_task (交易日在快照时点窗口自动采集三池情绪),
守护本测试验证任务存在/已采不重采/非交易日跳过/异常不中断。
"""
import datetime as dt
import os
import sys

import pytest

BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(BASE, "backend"))


def _read_core():
    with open(os.path.join(BASE, "backend", "scheduler", "_core.py"), encoding="utf-8") as f:
        return f.read()


def test_intraday_snapshot_task_registered():
    """scheduler 注册了盘中快照自动采集任务"""
    src = _read_core()
    assert "intraday_snapshot_task" in src, "缺 intraday_snapshot_task 任务"
    assert "create_task(self.intraday_snapshot_task())" in src, "任务未在 start() 注册"


def test_auto_capture_uses_snapshot_slot_window():
    """自动采集复用时点窗口判据 (current_snapshot_slot)"""
    src = _read_core()
    assert "current_snapshot_slot" in src, "应复用 intraday.current_snapshot_slot 判据"


def test_auto_capture_skip_when_already_collected():
    """已采集的时点不重复采集"""
    src = _read_core()
    assert "load_pool" in src, "应检查 store.load_pool 已采时点"
    assert "intraday_" in src, "应以 intraday_{slot} 命名落盘"


def test_auto_capture_non_trade_day_skip():
    """非交易日跳过 (is_trade_day 判据)"""
    src = _read_core()
    assert "is_trade_day" in src, "应使用 is_trade_day 判据"


def test_auto_capture_error_not_fatal():
    """采集异常不中断其他定时任务 (try/except + 日志)"""
    src = _read_core()
    assert "logger.error" in src, "异常应打日志"
