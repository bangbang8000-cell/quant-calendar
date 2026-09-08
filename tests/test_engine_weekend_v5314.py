#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""V5.3.14 (T-SP.P2.5): 引擎周末运行防护守护测试

根因: 调度器每日(含周末)触发 run_strategy_once, 周末按 today(周六/日)建 data/holdings/{date}
目录 → 周末残留目录 + 内容日期错位(实测 9/5、9/6 目录). 守护: 非交易日(周末/节假日)
run_strategy_once 跳过, 不调用 gov.run_once; 交易日正常执行.
"""
import os
import sys
sys.path.insert(0, os.path.join(os.path.dirname(__file__), '..', 'backend'))
from unittest.mock import patch

import stock_calendar as sc


class TestEngineWeekendGuard:
    def test_skips_on_nontrade_day(self):
        """非交易日(周末): run_strategy_once 跳过, 不调用 run_once."""
        import strategy_governance as gov
        state = {"multi_factor": {"enabled": True, "schedule": "20:00"}}
        with patch.object(gov, "get_state", return_value=state):
            with patch.object(sc, "is_trade_date_str", return_value=False):
                with patch.object(gov, "run_once") as run:
                    from scheduler import run_strategy_once
                    ok, executed, errors = run_strategy_once()
        assert ok is True
        assert executed == []
        assert errors == []
        run.assert_not_called()

    def test_runs_on_trade_day(self):
        """交易日: 正常执行启用策略."""
        import strategy_governance as gov
        state = {"multi_factor": {"enabled": True, "schedule": "20:00"},
                 "capital_flow": {"enabled": False, "schedule": "20:00"}}
        with patch.object(gov, "get_state", return_value=state):
            with patch.object(sc, "is_trade_date_str", return_value=True):
                with patch.object(gov, "run_once") as run:
                    run.side_effect = lambda sid, as_of=None: {"sid": sid}
                    from scheduler import run_strategy_once
                    ok, executed, errors = run_strategy_once()
        assert executed == ["multi_factor"], executed
        assert ok is True

    def test_run_once_accepts_as_of(self):
        """run_once 支持 as_of 参数(不依赖 datetime.now() 写目录)."""
        src = open(os.path.join(os.path.dirname(__file__), '..', 'backend', 'strategy_governance.py'), encoding='utf-8').read()
        assert 'def run_once(sid: str, as_of: str = None)' in src
