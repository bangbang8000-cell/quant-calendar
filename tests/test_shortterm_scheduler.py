#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""V5.2.0 (T-5.2.10): 短线盘后抓取任务测试
- 已收盘日 → 三池/龙虎榜入库 + 记录
- 未收盘日 → 跳过(不抓盘中半成品)
- 部分数据源失败 → 不覆盖已有缓存, 不炸链"""
import asyncio
from unittest.mock import patch

from shortterm import fetchers, lhb, store


class TestShorttermCapture:
    def _run(self, s, date):
        asyncio.run(s._run_shortterm_capture(date))

    def test_capture_settled_saves_pools(self):
        from scheduler import Scheduler
        s = Scheduler()
        s._record_task_run = lambda *a, **k: None
        with patch('shortterm.trade_calendar.is_settled', return_value=True), \
             patch.object(fetchers, 'fetch_zt_pool',
                          return_value={'available': True, 'rows': [{'ts_code': '002909'}]}), \
             patch.object(fetchers, 'fetch_zb_pool',
                          return_value={'available': True, 'rows': []}), \
             patch.object(fetchers, 'fetch_dt_pool',
                          return_value={'available': True, 'rows': []}), \
             patch.object(lhb, 'fetch_lhb',
                          return_value={'available': True, 'rows': []}):
            self._run(s, '2026-09-02')
        rows = store.load_pool('2026-09-02', 'zt')
        assert rows[0]['ts_code'] == '002909'

    def test_capture_unsettled_skips(self):
        from scheduler import Scheduler
        s = Scheduler()
        s._record_task_run = lambda *a, **k: None
        with patch('shortterm.trade_calendar.is_settled', return_value=False), \
             patch.object(fetchers, 'fetch_zt_pool') as fzt:
            self._run(s, '2026-09-30')
        fzt.assert_not_called()          # 未收盘绝不抓
        assert store.load_pool('2026-09-30', 'zt') is None

    def test_capture_partial_failure_keeps_ok(self):
        from scheduler import Scheduler
        s = Scheduler()
        recorded = {}
        s._record_task_run = lambda name, ok, msg: recorded.update({name: (ok, msg)})
        with patch('shortterm.trade_calendar.is_settled', return_value=True), \
             patch.object(fetchers, 'fetch_zt_pool',
                          return_value={'available': True, 'rows': [{'ts_code': '002909'}]}), \
             patch.object(fetchers, 'fetch_zb_pool',
                          return_value={'available': False, 'reason': '[⚠️ boom]'}), \
             patch.object(fetchers, 'fetch_dt_pool',
                          return_value={'available': False, 'reason': '[⚠️ boom]'}), \
             patch.object(lhb, 'fetch_lhb',
                          return_value={'available': True, 'rows': []}):
            self._run(s, '2026-09-03')
        # 成功的两个入库
        assert store.load_pool('2026-09-03', 'zt')[0]['ts_code'] == '002909'
        assert store.load_pool('2026-09-03', 'zb') is None   # 失败不覆盖/不写
        # 记录: 2/4 成功 (ok>=2 → True)
        name, (ok, msg) = list(recorded.items())[0]
        assert ok is True
        assert '2/4' in msg


class TestShorttermRetryAndCatchup:
    """V5.2.0 (T-5.2.10): 降级重试 + 错过补偿"""

    def test_capture_returns_summary(self):
        from scheduler import Scheduler
        s = Scheduler()
        s._record_task_run = lambda *a, **k: None
        with patch('shortterm.trade_calendar.is_settled', return_value=True), \
             patch.object(fetchers, 'fetch_zt_pool', return_value={'available': True, 'rows': []}), \
             patch.object(fetchers, 'fetch_zb_pool', return_value={'available': True, 'rows': []}), \
             patch.object(fetchers, 'fetch_dt_pool', return_value={'available': True, 'rows': []}), \
             patch.object(lhb, 'fetch_lhb', return_value={'available': True, 'rows': []}):
            result = asyncio.run(s._run_shortterm_capture('2026-09-02'))
        assert result == {'ok': 4, 'total': 4, 'skipped': False}

    def test_partial_failure_retries_once(self):
        from scheduler import Scheduler
        s = Scheduler()
        s.running = True
        calls = []
        async def fake_run(date):
            calls.append(date)
            return {'ok': 1, 'total': 4, 'skipped': False}
        s._run_shortterm_capture = fake_run
        with patch('asyncio.sleep', return_value=None):
            asyncio.run(s._shortterm_capture_with_retry('2026-09-02'))
        assert len(calls) == 2          # 主跑 + 30 分钟后重试

    def test_full_success_no_retry(self):
        from scheduler import Scheduler
        s = Scheduler()
        s.running = True
        calls = []
        async def fake_run(date):
            calls.append(date)
            return {'ok': 4, 'total': 4, 'skipped': False}
        s._run_shortterm_capture = fake_run
        with patch('asyncio.sleep', return_value=None):
            asyncio.run(s._shortterm_capture_with_retry('2026-09-02'))
        assert len(calls) == 1

    def test_catchup_shortterm_when_missing(self):
        import datetime as _dt
        from scheduler import Scheduler
        s = Scheduler()
        s.running = True
        calls = []
        async def fake_run(date):
            calls.append(date)
            return {'ok': 4, 'total': 4, 'skipped': False}
        s._run_shortterm_capture = fake_run

        class _FakeDT:
            @classmethod
            def now(cls):
                return _dt.datetime(2026, 9, 3, 16, 30)

        with patch('scheduler._core.datetime', _FakeDT), \
             patch('shortterm.trade_calendar.is_settled', return_value=True), \
             patch.object(store, 'load_pool', return_value=None), \
             patch('asyncio.sleep', return_value=None):
            asyncio.run(s._catchup_shortterm())
        assert len(calls) == 1
        assert calls[0] == '2026-09-03'

    def test_catchup_shortterm_skips_when_already_captured(self):
        import datetime as _dt
        from scheduler import Scheduler
        s = Scheduler()
        s.running = True
        calls = []
        async def fake_run(date):
            calls.append(date)
        s._run_shortterm_capture = fake_run

        class _FakeDT:
            @classmethod
            def now(cls):
                return _dt.datetime(2026, 9, 3, 16, 30)

        with patch('scheduler._core.datetime', _FakeDT), \
             patch('shortterm.trade_calendar.is_settled', return_value=True), \
             patch.object(store, 'load_pool', return_value=[{'ts_code': '002909'}]):
            asyncio.run(s._catchup_shortterm())
        assert calls == []               # 当日已抓, 不补跑
