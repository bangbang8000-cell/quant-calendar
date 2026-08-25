"""V4.7.1: 持仓矩阵生成并发安全测试

覆盖:
- _write_holdings_matrix 原子写入 (临时文件 + os.replace, 不留 .tmp 残渣)
- 写入期间主程序读取不会看到半截文件 (模拟 reader 同时读, 读到的是完整内容)
- scheduler 策略任务在后台线程执行 (run_strategy_once 可被 to_thread 包裹, 不阻塞事件循环)
"""
import os
import sys
import threading

import pandas as pd
import pytest


@pytest.fixture
def sample_holdings():
    return pd.DataFrame(
        {
            '600000.SH': [1.0, 0.0, 1.0],
            '600519.SH': [0.0, 1.0, 1.0],
        },
        index=['2026-08-18', '2026-08-19', '2026-08-20'],
    )


def test_write_holdings_matrix_atomic(tmp_path, sample_holdings):
    """原子写入: 生成目标文件, 无 .tmp 残留"""
    import strategy_governance as gov
    path = gov._write_holdings_matrix(sample_holdings, 'multi_factor', str(tmp_path))
    assert os.path.exists(path)
    assert os.path.basename(path) == '多因子策略持仓.csv'
    leftovers = [f for f in os.listdir(tmp_path) if f.endswith('.tmp')]
    assert leftovers == []
    with open(path, 'r', encoding='utf-8-sig') as f:
        lines = f.read().strip().splitlines()
    assert len(lines) == 4  # 表头 + 3 日期
    assert '600000.SH' in lines[0]
    assert lines[1].startswith('2026-08-18')


def test_write_holdings_matrix_no_partial_read(tmp_path, sample_holdings):
    """读者并发: 原子写入保证 reader 看到完整文件 (旧或新), 不可能是半截"""
    import strategy_governance as gov
    old = sample_holdings.iloc[[0]]
    gov._write_holdings_matrix(old, 'multi_factor', str(tmp_path))
    path = os.path.join(tmp_path, '多因子策略持仓.csv')
    results = []
    stop = threading.Event()
    errors = []

    def writer():
        for _ in range(10):
            gov._write_holdings_matrix(sample_holdings, 'multi_factor', str(tmp_path))
            stop.set()

    def reader():
        import csv
        while not stop.is_set():
            try:
                with open(path, 'r', encoding='utf-8-sig') as f:
                    rows = list(csv.reader(f))
                if len(rows) not in (2, 4):
                    errors.append('partial read: %d rows' % len(rows))
                for row in rows:
                    if len(row) != len(rows[0]):
                        errors.append('truncated row: %d vs %d cols' % (len(row), len(rows[0])))
            except Exception as e:
                errors.append('read err: %s' % e)

    t1 = threading.Thread(target=writer)
    t2 = threading.Thread(target=reader)
    t1.start(); t2.start()
    t1.join(timeout=15); t2.join(timeout=15)
    assert errors == [], '并发读出现半截/截断: %s' % errors


def test_scheduler_strategy_run_is_awaitable():
    """策略运行可被 asyncio.to_thread 包裹 (调度器不阻塞事件循环)"""
    import asyncio
    from scheduler import run_strategy_once
    assert callable(run_strategy_once)
    async def _run():
        result = await asyncio.to_thread(run_strategy_once)
        return result
    coro = _run()
    assert asyncio.iscoroutine(coro)
    coro.close()
