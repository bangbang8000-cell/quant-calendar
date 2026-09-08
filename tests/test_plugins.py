# -*- coding: utf-8 -*-
"""Plugins tests (V4.7.4: production plugin market-brief)"""
import pytest


def test_market_brief_plugin_loads():
    """生产插件 market-brief 可加载且 meta 正确"""
    from plugins import load_plugins
    res = load_plugins()
    assert "market_brief_plugin" in res
    assert res["market_brief_plugin"]["ok"] is True
    meta = res["market_brief_plugin"]["meta"]
    assert meta["name"] == "market-brief"
    assert "简报" in meta["description"]


def test_market_brief_dispatch_uses_review_ready(monkeypatch):
    """_push_brief 使用 market_review_ready 事件调用 webhook.dispatch"""
    import asyncio
    from plugins import market_brief_plugin as mbp

    calls = []

    def _fake_dispatch(event, payload):
        calls.append((event, payload))
        return {"event": event, "total": 1, "ok": 1, "failed": 0, "delivered": ["http://x"]}

    import webhook
    monkeypatch.setattr(webhook, "dispatch", _fake_dispatch)
    monkeypatch.setattr(mbp, "_build_brief",
                        lambda: {"date": "2026-08-25", "summary": "s", "degraded": False})
    asyncio.run(mbp._push_brief())
    assert calls, "应调用 dispatch"
    event, payload = calls[0]
    assert event == "market_review_ready", "事件应复用 market_review_ready"
    assert payload["summary"] == "s"


def test_market_brief_install_wraps_start(monkeypatch):
    """_install_brief_task: 包装 scheduler.start 注入简报任务"""
    from plugins import market_brief_plugin as mbp

    started = []

    class _FakeScheduler:
        running = True

        async def start(self):
            started.append("original")

    sched = _FakeScheduler()
    mbp._install_brief_task(sched)
    assert sched.start.__name__ == "_patched_start", "start 应被包装"

    import asyncio
    asyncio.run(sched.start())
    assert started == ["original"], "原 start 应被调用"


def test_market_brief_build_brief_degrade():
    """_build_brief 降级: 数据不可达返回 degraded 简报 (不抛错)"""
    from plugins import market_brief_plugin as mbp
    brief = mbp._build_brief()
    assert isinstance(brief, dict)
    assert "date" in brief and "summary" in brief
