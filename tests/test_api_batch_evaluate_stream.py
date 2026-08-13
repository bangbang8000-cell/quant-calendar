"""v3.15: /api/ai/batch-evaluate/stream SSE 路由测试 (TC-15.2)

- 鉴权: 未带 token → 401
- 鉴权通过: SSE 流式事件 (start/item/done) 可解析
"""
import asyncio
import json
import os
import sys

import pytest

sys.path.insert(0, os.path.join(os.path.dirname(__file__), '..', 'backend'))

import paths
import api.v1.ai as ai_router
from auth import get_current_active_user
from fastapi import FastAPI
from fastapi.testclient import TestClient


@pytest.fixture
def isolated_evaluator(tmp_path):
    """独立 AIEvaluator 指向 tmp_path, 替换路由模块绑定的单例 (用完恢复)"""
    import ai_evaluator
    old_data_dir = paths.DATA_DIR
    old_router_evaluator = ai_router.ai_evaluator
    paths.DATA_DIR = str(tmp_path)
    e = ai_evaluator.AIEvaluator()
    ai_router.ai_evaluator = e
    yield e
    ai_router.ai_evaluator = old_router_evaluator
    paths.DATA_DIR = old_data_dir


@pytest.fixture
def app():
    """每个测试一个独立 FastAPI app (APIRouter 单例只能挂一次)"""
    app = FastAPI()
    app.include_router(ai_router.router)
    return app


def _stub_fetch(evaluator):
    """stub 数据抓取 — 单测不依赖外部行情源 (get_kline_data 可能触发网络/超时)"""
    evaluator._fetch_stock_data = lambda code: {}


class TestBatchEvaluateStreamRoute:
    def test_stream_requires_auth(self, app, isolated_evaluator):
        """未带 token → 401/403"""
        client = TestClient(app)
        r = client.post('/ai/batch-evaluate/stream', json={"stock_codes": ["000001.SZ"]})
        assert r.status_code in (401, 403)

    def test_stream_emits_sse_events(self, app, isolated_evaluator):
        """鉴权通过 → SSE start/item/done 事件"""
        _stub_fetch(isolated_evaluator)
        # 缓存键 = (stock_code, strategy='default'); evaluate_stock 默认 strategy='default'
        isolated_evaluator._set_cached('000001.SZ', 'default', {'total_score': 88, 'level': '推荐'})
        app.dependency_overrides[get_current_active_user] = lambda: {"username": "admin"}
        client = TestClient(app)
        r = client.post('/ai/batch-evaluate/stream', json={"stock_codes": ["000001.SZ"]})
        assert r.status_code == 200
        assert 'text/event-stream' in r.headers.get('content-type', '')
        events = []
        for line in r.text.splitlines():
            if line.startswith('data: '):
                events.append(json.loads(line[6:]))
        assert events[0]['type'] == 'start'
        assert events[0]['total'] == 1
        items = [e for e in events if e['type'] == 'item']
        assert len(items) == 1
        assert items[0]['success'] is True
        assert items[0]['result']['total_score'] == 88
        assert events[-1]['type'] == 'done'
        assert events[-1]['success'] == 1
        assert events[-1]['fail'] == 0

    def test_stream_direct_handler_call(self, isolated_evaluator):
        """直接调用 handler (传 user dict) → StreamingResponse 迭代 SSE 行"""
        _stub_fetch(isolated_evaluator)
        isolated_evaluator._set_cached('000002.SZ', 'default', {'total_score': 0, 'level': '评估失败'})
        resp = asyncio.run(ai_router.ai_batch_evaluate_stream(
            {"stock_codes": ["000002.SZ"]}, {"username": "admin"}))
        assert resp.media_type == 'text/event-stream'

        async def _read_all():
            parts = []
            async for chunk in resp.body_iterator:
                parts.append(chunk if isinstance(chunk, str) else chunk.decode('utf-8'))
            return ''.join(parts)

        text = asyncio.run(_read_all())
        events = [json.loads(l[6:]) for l in text.splitlines() if l.startswith('data: ')]
        assert events[-1]['type'] == 'done'
        assert events[-1]['fail'] == 1
        assert events[1]['success'] is False
