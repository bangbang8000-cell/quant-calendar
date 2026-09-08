"""v3.15 批量评估 SSE 流式回归 (TC-15.2) — batch_evaluate_stream 事件序列/失败原因/并发上限

根因: 一次性 gather 响应 → 前端进度 0→N 瞬跳, 失败原因被丢弃。
"""
import asyncio
import pytest
from unittest.mock import patch

from ai_evaluator import AIEvaluator


@pytest.fixture
def isolated_data_dir(tmp_path):
    """隔离 DATA_DIR 到独立临时目录, 用完恢复"""
    import paths
    old = paths.DATA_DIR
    paths.DATA_DIR = str(tmp_path)
    yield
    paths.DATA_DIR = old


async def _collect(evaluator, codes, max_workers=2):
    events = []
    async for evt in evaluator.batch_evaluate_stream(codes, None, max_workers, 'default'):
        events.append(evt)
    return events


class TestBatchEvaluateStream:
    def _stub_fetch(self, evaluator):
        """stub 数据抓取 — 单测不依赖外部行情源 (get_kline_data 可能触发网络/超时)"""
        evaluator._fetch_stock_data = lambda code: {}

    def test_stream_event_sequence(self, isolated_data_dir):
        """start → item×n → done, 成功/失败项形状一致"""
        evaluator = AIEvaluator()
        self._stub_fetch(evaluator)
        evaluator._set_cached('000001.SZ', 'default', {'total_score': 88, 'level': '推荐'})
        evaluator._set_cached('000002.SZ', 'default', {'total_score': 0, 'level': '评估失败'})
        events = asyncio.run(_collect(evaluator, ['000001.SZ', '000002.SZ']))
        assert events[0]['type'] == 'start'
        assert events[0]['total'] == 2
        items = [e for e in events if e['type'] == 'item']
        assert len(items) == 2
        by_code = {e['stock_code']: e for e in items}
        assert by_code['000001.SZ']['success'] is True
        assert by_code['000001.SZ']['result']['total_score'] == 88
        assert by_code['000001.SZ']['from_cache'] is True
        assert by_code['000002.SZ']['success'] is False
        done = events[-1]
        assert done['type'] == 'done'
        assert done['success'] == 1
        assert done['fail'] == 1
        assert done['total'] == 2

    def test_stream_failure_carries_error(self, isolated_data_dir):
        """失败项携带 error 原因 (前端弹窗展示)"""
        evaluator = AIEvaluator()

        async def fake_evaluate(code, name, stock_data, username, strategy='default'):
            raise ValueError('模型超时 boom')

        with patch.object(AIEvaluator, 'evaluate_stock', side_effect=fake_evaluate):
            events = asyncio.run(_collect(evaluator, ['000001.SZ']))
        item = events[1]  # start, item
        assert item['type'] == 'item'
        assert item['success'] is False
        assert 'boom' in item['error']
        done = events[-1]
        assert done['fail'] == 1

    def test_stream_concurrency_bounded(self, isolated_data_dir):
        """并发上限 max_workers 生效 (Semaphore)"""
        evaluator = AIEvaluator()
        active = 0
        max_active = 0

        async def fake_evaluate(code, name, stock_data, username, strategy='default'):
            nonlocal active, max_active
            active += 1
            max_active = max(max_active, active)
            await asyncio.sleep(0.03)
            active -= 1
            return {"stock_code": code, "result": {"level": "推荐", "total_score": 88}}

        with patch.object(AIEvaluator, 'evaluate_stock', side_effect=fake_evaluate):
            events = asyncio.run(_collect(evaluator, ['a', 'b', 'c', 'd', 'e'], max_workers=2))
        assert max_active <= 2
        assert len([e for e in events if e['type'] == 'item']) == 5

    def test_stream_empty_input(self, isolated_data_dir):
        """空列表 → 直接 done, 无 item"""
        evaluator = AIEvaluator()
        events = asyncio.run(_collect(evaluator, []))
        assert events == [{'type': 'done', 'total': 0, 'success': 0, 'fail': 0}]

    def test_stream_item_carries_stock_name(self, isolated_data_dir):
        """item 事件带 stock_name (前端列表展示名称)"""
        evaluator = AIEvaluator()
        self._stub_fetch(evaluator)
        evaluator._set_cached('600085.SH', 'default', {'total_score': 88, 'level': '推荐'})
        events = asyncio.run(_collect(evaluator, ['600085.SH']))
        item = events[1]
        assert item['type'] == 'item'
        assert 'stock_name' in item
