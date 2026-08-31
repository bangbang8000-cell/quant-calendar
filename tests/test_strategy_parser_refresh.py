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
    """策略运行成功后热刷新 parser, 软件无需重启即可读当日持仓"""
    s = _scheduler_src()
    p = _parser_src()
    # 1) parser 提供 reload 方法
    assert re.search(r"def reload\(self\)", p), "data_parser 缺 reload 方法"
    # 2) scheduler 策略任务成功路径调用 parser.reload()
    assert "parser.reload()" in s, "strategy_run_task 成功路径未调用 parser.reload()"
    # 3) reload 在 _record_task_run 之前 (刷新完成才记录成功)
    idx_reload = s.find("parser.reload()")
    idx_record = s.find("_record_task_run(\"strategy_run\", True")
    assert idx_reload >= 0 and idx_record >= 0, "策略任务缺 reload 或 record"
    assert idx_reload < idx_record, "reload() 应发生在记录任务成功之前"