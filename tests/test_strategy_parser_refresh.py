# -*- coding: utf-8 -*-
"""
V4.8.2-fix (用户反馈): 策略持仓生成后软件读取不到 —
data_parser.parser 为模块级单例, 仅在服务启动时加载 data/holdings/;
scheduler 每晚 20:00 策略运行生成新持仓文件后未刷新 parser, 服务内存快照过期。
守护: strategy_run_task 策略成功后必须调用 parser.reload() 热刷新。
"""
import os
import re

BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))


def _scheduler_src():
    return open(os.path.join(BASE, "backend", "scheduler.py"), encoding="utf-8").read()


def _parser_src():
    return open(os.path.join(BASE, "backend", "data_parser.py"), encoding="utf-8").read()


def test_strategy_run_refreshes_parser_v482fix():
    """策略运行成功后热刷新 parser + views_aggregator, 软件无需重启即可读当日持仓
    V4.9.2: 刷新逻辑收束到 _refresh_after_strategy_run(parser→aggregator 顺序),
    并在记录 strategy_run 前校验日视图已可见(防假成功)."""
    s = _scheduler_src()
    p = _parser_src()
    # 1) parser 提供 reload 方法
    assert re.search(r"def reload\(self\)", p), "data_parser 缺 reload 方法"
    # 2) scheduler 提供 _refresh_after_strategy_run (含 parser.reload + views_aggregator.reload)
    assert "_dp_parser.reload()" in s, "_refresh_after_strategy_run 缺 parser.reload()"
    assert "views_aggregator.reload()" in s, "_refresh_after_strategy_run 缺 views_aggregator.reload()"
    # 3) 调用点: strategy_run_task 先 _refresh_after_strategy_run(today) 再 _record_task_run("strategy_run"
    idx_refresh = s.find("_refresh_after_strategy_run(today)")
    idx_record = s.find('_record_task_run("strategy_run"')
    assert idx_refresh >= 0 and idx_record >= 0, "策略任务缺 _refresh_after_strategy_run 或 _record_task_run"
    assert idx_refresh < idx_record, "_refresh_after_strategy_run 应发生在记录任务之前"