# -*- coding: utf-8 -*-
"""V5.8 (T-5.8.5): 插件 SDK 2.0 测试 (TEST-PLAN 9.1 test_plugins_v2.py)

事件钩子注册/派发/异常隔离 + 策略插件注册/运行/隔离 + events 接线。
"""
import os
import sys

import pytest

BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(BASE, "backend"))

import plugin_sdk as S  # noqa: E402


@pytest.fixture(autouse=True)
def clean():
    S.clear_hooks()
    S.clear_strategies()
    yield
    S.clear_hooks()
    S.clear_strategies()


# ─── 事件钩子 ───────────────────────────────────────────────

def test_register_hook_and_emit():
    calls = []

    def hook(payload):
        calls.append(payload)

    S.register_hook("strategy_run", hook)
    S.emit("strategy_run", {"sid": "s1"})
    assert calls == [{"sid": "s1"}]


def test_emit_no_hooks_noop():
    assert S.emit("nothing", {}) == []


def test_multiple_hooks_all_called():
    seen = []

    def a(p):
        seen.append("a")

    def b(p):
        seen.append("b")

    S.register_hook("e", a)
    S.register_hook("e", b)
    S.emit("e", {})
    assert sorted(seen) == ["a", "b"]


def test_duplicate_hook_registration_dedup():
    def h(p):
        pass

    S.register_hook("e", h)
    S.register_hook("e", h)
    assert S.hook_count("e") == 1


def test_hook_error_isolated():
    """钩子抛异常不中断其余钩子, 不向 emit 调用方传播"""
    seen = []

    def bad(p):
        raise ValueError("boom")

    def good(p):
        seen.append("ok")

    S.register_hook("e", bad)
    S.register_hook("e", good)
    results = S.emit("e", {})  # 不抛 (bad 被隔离, 仅 good 产出 None)
    assert "ok" in seen
    assert len(results) == 1


def test_hook_returns_collected():
    def h(p):
        return {"n": (p or {}).get("n", 0) + 1}

    S.register_hook("e", h)
    assert S.emit("e", {"n": 1}) == [{"n": 2}]


# ─── 策略插件 ───────────────────────────────────────────────

def test_register_strategy():
    ok, msg = S.register_strategy("momentum", lambda p: {"score": 1}, meta={"version": "1.0"})
    assert ok and msg == "ok"
    assert S.list_strategies()[0]["name"] == "momentum"
    assert S.list_strategies()[0]["meta"]["version"] == "1.0"


def test_register_duplicate_rejected():
    S.register_strategy("mom", lambda p: {})
    ok, msg = S.register_strategy("mom", lambda p: {})
    assert not ok and "已注册" in msg


def test_register_empty_name():
    ok, msg = S.register_strategy("", lambda p: {})
    assert not ok


def test_run_strategy():
    def run(p):
        return {"score": len((p or {}).get("codes", []))}

    S.register_strategy("factor", run)
    assert S.run_strategy("factor", {"codes": ["a", "b"]}) == {"score": 2}


def test_run_unknown_strategy():
    r = S.run_strategy("ghost")
    assert r["error"] and "unknown" in r["error"]


def test_run_strategy_error_isolated():
    def run(p):
        raise RuntimeError("x")

    S.register_strategy("bad", run)
    r = S.run_strategy("bad", {})
    assert "error" in r and "x" in r["error"]


def test_default_strategy_noop():
    S.register_strategy("empty")
    assert S.run_strategy("empty", {}) == {}


# ─── events 接线 ────────────────────────────────────────────

def test_make_event_emits_to_hooks():
    import events
    got = []

    def hook(ev):
        got.append(ev["type"])

    S.register_hook("strategy_run", hook)
    ev = events.make_event("strategy_run", "策略执行", "内容")
    assert ev["type"] == "strategy_run"
    assert got == ["strategy_run"]


def test_make_event_works_without_hooks():
    import events
    ev = events.make_event("plain", "t", "c", payload={"k": 1})
    assert ev["payload"]["k"] == 1
