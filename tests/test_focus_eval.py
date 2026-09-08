# -*- coding: utf-8 -*-
"""V5.4.0 (T-5.4.0.4 / FR-5.4.2): 重点跟踪评估执行测试

覆盖: AI 批量路径落库(method=ai) / 单只失败规则兜底(method=rule) /
      AI 整体失败全量规则快评(degraded) / 清单超限走规则(不耗尽AI配额) /
      rule_quick_eval 纯函数(多头/空头/数据不足) / 历史日拒绝 / 空清单。
"""
import asyncio
import os
import sys
import pytest

sys.path.insert(0, os.path.join(os.path.dirname(__file__), "..", "backend"))

import db
import focus_store
import focus_eval
from focus_eval import (evaluate_codes, run_session, rule_quick_eval,
                        score_to_level, MAX_AI_LIST)


@pytest.fixture(scope="module", autouse=True)
def _db_schema():
    db.init_db()
    yield


@pytest.fixture(autouse=True)
def _clean_focus_evals():
    focus_store.delete_by_date("2026-09-08")
    focus_store.delete_by_date("2026-09-07")
    yield
    focus_store.delete_by_date("2026-09-08")
    focus_store.delete_by_date("2026-09-07")


# ─── rule_quick_eval 纯函数 ─────────────────────────────────

def test_rule_bullish_alignment():
    closes = [10 + i * 0.3 for i in range(30)]  # 单调上行 → ma5>ma10>ma20
    kline = [{"close": c} for c in closes]
    r = rule_quick_eval("601985.SH", kline=kline)
    assert r["method"] == "rule"
    assert r["total_score"] >= 60
    assert r["level"] in ("推荐", "强烈推荐")
    assert r["direction"] in ("看多", "震荡")


def test_rule_bearish_alignment():
    closes = [30 - i * 0.3 for i in range(30)]  # 单调下行
    kline = [{"close": c} for c in closes]
    r = rule_quick_eval("601985.SH", kline=kline)
    assert r["total_score"] < 45
    assert r["level"] in ("中性", "观望")


def test_rule_insufficient_data_neutral():
    r = rule_quick_eval("601985.SH", kline=[{"close": 10}, {"close": 11}])
    assert r["total_score"] == 50
    assert r["level"] == "中性"
    assert r["direction"] == "震荡"


def test_rule_no_kline_neutral():
    r = rule_quick_eval("601985.SH", kline=None)
    assert r["total_score"] == 50 and r["level"] == "中性"


def test_score_to_level_buckets():
    assert score_to_level(85) == "强烈推荐"
    assert score_to_level(60) == "推荐"
    assert score_to_level(45) == "谨慎推荐"
    assert score_to_level(35) == "中性"
    assert score_to_level(20) == "观望"
    assert score_to_level(None) == "中性"


# ─── evaluate_codes: AI 路径 ────────────────────────────────

async def _fake_ai_ok(codes, info=None, workers=5, username="default"):
    return [{"stock_code": c, "success": True,
             "result": {"total_score": 70, "level": "推荐", "stock_name": "测试股"},
             "model_used": "mock-1", "model_provider": "mock-ai"} for c in codes]


async def _fake_ai_partial(codes, info=None, workers=5, username="default"):
    return [
        {"stock_code": codes[0], "success": True,
         "result": {"total_score": 70, "level": "推荐"}, "model_used": "m", "model_provider": "mock"},
        {"stock_code": codes[1], "success": False, "error": "boom"},
    ]


async def _fake_ai_raise(codes, info=None, workers=5, username="default"):
    raise RuntimeError("ai down")


def test_ai_path_stores_records(monkeypatch):
    import ai_evaluator
    monkeypatch.setattr(ai_evaluator.ai_evaluator, "batch_evaluate", _fake_ai_ok)
    out = asyncio.run(evaluate_codes("2026-09-08", "after_close",
                                     ["601985.SH", "000063.SZ"]))
    assert out["evaluated"] == 2 and out["ai_count"] == 2 and out["rule_count"] == 0
    assert out["degraded"] is False
    rows = focus_store.query_by_date("2026-09-08", session="after_close")
    assert len(rows) == 2
    providers = {r["model_provider"] for r in rows}
    assert providers == {"mock-ai"}
    assert all(r["total_score"] == 70 for r in rows)


def test_partial_failure_rule_fallback(monkeypatch):
    import ai_evaluator
    monkeypatch.setattr(ai_evaluator.ai_evaluator, "batch_evaluate", _fake_ai_partial)
    monkeypatch.setattr(focus_eval, "_load_kline", lambda code, limit=30: [])
    out = asyncio.run(evaluate_codes("2026-09-08", "after_close",
                                     ["601985.SH", "000063.SZ"]))
    assert out["ai_count"] == 1 and out["rule_count"] == 1
    rows = focus_store.query_by_date("2026-09-08", session="after_close")
    providers = {r["model_provider"] for r in rows}
    assert providers == {"mock", "rule"}   # 失败项如实降级 rule


def test_ai_unavailable_all_rule(monkeypatch):
    import ai_evaluator
    monkeypatch.setattr(ai_evaluator.ai_evaluator, "batch_evaluate", _fake_ai_raise)
    monkeypatch.setattr(focus_eval, "_load_kline", lambda code, limit=30: [])
    out = asyncio.run(evaluate_codes("2026-09-08", "after_close",
                                     ["601985.SH", "000063.SZ"]))
    assert out["ai_count"] == 0 and out["rule_count"] == 2
    assert out["degraded"] is True and out["reason"] == "rule_ai_error"
    rows = focus_store.query_by_date("2026-09-08", session="after_close")
    assert all(r["model_provider"] == "rule" for r in rows)


def test_oversize_list_uses_rule(monkeypatch):
    import ai_evaluator
    called = {}
    async def fake(codes, info=None, workers=5, username="default"):
        called["n"] = True
        return []
    monkeypatch.setattr(ai_evaluator.ai_evaluator, "batch_evaluate", fake)
    monkeypatch.setattr(focus_eval, "_load_kline", lambda code, limit=30: [])
    codes = ["%06d.SH" % i for i in range(MAX_AI_LIST + 1)]
    out = asyncio.run(evaluate_codes("2026-09-08", "after_close", codes))
    assert out["rule_count"] == len(codes) and out["ai_count"] == 0
    assert "n" not in called           # AI 完全未调用
    assert out["reason"] == "rule_oversize"


def test_empty_codes_noop():
    out = asyncio.run(evaluate_codes("2026-09-08", "after_close", []))
    assert out["evaluated"] == 0
    assert focus_store.count_by_date("2026-09-08") == 0


def test_no_ai_available_flag_uses_rule(monkeypatch):
    import ai_evaluator
    called = {}
    async def fake(codes, info=None, workers=5, username="default"):
        called["n"] = True
        return []
    monkeypatch.setattr(ai_evaluator.ai_evaluator, "batch_evaluate", fake)
    monkeypatch.setattr(focus_eval, "_load_kline", lambda code, limit=30: [])
    out = asyncio.run(evaluate_codes("2026-09-08", "after_close",
                                     ["601985.SH"], ai_available=False))
    assert out["rule_count"] == 1 and "n" not in called
    assert out["reason"] == "rule_no_ai"


# ─── run_session ────────────────────────────────────────────

def test_run_session_rejects_history_date():
    out = asyncio.run(run_session("2026-09-07", "after_close"))
    assert out["reason"] == "not_today" and out["degraded"] is True
    assert focus_store.count_by_date("2026-09-07") == 0


def test_run_session_empty_list_ok():
    out = asyncio.run(run_session("2026-09-08", "after_close"))
    assert out["evaluated"] == 0
