"""
AI 每日复盘激活链路测试 (FR-3.18.1 / T2)

覆盖:
- is_review_degraded: 产出判定 — 数据卡四字段全不可达 → 失败; 任一真实源 → 可接受
- run_daily_review: 正常/降级两路径 (含异常兜底)
- _handle_review_outcome: 失败 → 记录 failed + 飞书告警; 成功 → 记录 success + webhook
- 16:30 重试: 首跑降级 → 重试成功/仍失败 记录正确
- review_produced_today: 已有非降级归档 → True; 降级/缺失 → False (错过补偿门控)
- 手动触发端点: POST /system/review/trigger 返回产出判定
"""
import asyncio
import json
import os

import pytest

import market_review
from api.v1 import system
from scheduler import Scheduler


@pytest.fixture(autouse=True)
def _clean_task_status():
    s = Scheduler()
    s.task_status.clear()
    yield
    s.task_status.clear()


# ==================== 产出判定 is_review_degraded ====================


def _report(data_sources):
    return {
        "date": "2026-08-18",
        "market": {"indexes": []},
        "sectors": {"leader": [], "laggard": []},
        "moneyflow": {"detail": "数据不可达"},
        "sentiment": {"up_down": None, "note": "情绪数据不可达"},
        "data_sources": data_sources,
    }


def test_is_review_degraded_all_unavailable():
    ds = {"indexes": "unavailable", "sectors": "unavailable",
          "moneyflow": "unavailable", "sentiment": "unavailable"}
    assert market_review.is_review_degraded(_report(ds)) is True


def test_is_review_degraded_partial_data_not_degraded():
    # 指数来自 tushare → 视为可接受产出 (关键字段非全不可达)
    ds = {"indexes": "tushare", "sectors": "unavailable",
          "moneyflow": "unavailable", "sentiment": "tushare"}
    assert market_review.is_review_degraded(_report(ds)) is False


def test_is_review_degraded_missing_data_sources():
    assert market_review.is_review_degraded(None) is True
    assert market_review.is_review_degraded({}) is True
    assert market_review.is_review_degraded(_report({})) is True


# ==================== run_daily_review ====================


def test_run_daily_review_ok(monkeypatch, tmp_path):
    monkeypatch.setattr(market_review.paths, "DATA_DIR", str(tmp_path))
    monkeypatch.setattr(market_review, "market_data_context", lambda today=None: {
        "indexes": [{"name": "上证指数", "close": 3200.0, "pct_chg": 0.5}],
        "sectors": {"leader": [{"name": "银行", "pct_chg": 1.0}], "laggard": []},
        "moneyflow": "最新主力净流入 100 万元",
        "sentiment": {"up_down": None, "note": "情绪正常"},
        "data_sources": {"indexes": "tushare", "sectors": "unavailable",
                         "moneyflow": "tushare", "sentiment": "tushare"},
    })
    s = Scheduler()
    out = s.run_daily_review("2026-08-18")
    assert out["degraded"] is False
    assert out["report"]["date"] == "2026-08-18"
    assert out["reason"] == "正常产出"


def test_run_daily_review_degraded(monkeypatch, tmp_path):
    monkeypatch.setattr(market_review.paths, "DATA_DIR", str(tmp_path))
    monkeypatch.setattr(market_review, "_generate_ai_summary", lambda card: "AI 摘要(测试)")
    monkeypatch.setattr(market_review, "market_data_context", lambda today=None: {
        "indexes": [], "sectors": market_review.UNAVAILABLE,
        "moneyflow": market_review.MONEYFLOW_UNAVAILABLE,
        "sentiment": market_review.UNAVAILABLE,
        "data_sources": {"indexes": "unavailable", "sectors": "unavailable",
                         "moneyflow": "unavailable", "sentiment": "unavailable"},
    })
    s = Scheduler()
    out = s.run_daily_review("2026-08-18")
    assert out["degraded"] is True
    assert "降级" in out["reason"]


def test_run_daily_review_exception_treated_as_failure(monkeypatch):
    monkeypatch.setattr(market_review, "generate_review",
                        lambda today=None: (_ for _ in ()).throw(RuntimeError("boom")))
    s = Scheduler()
    out = s.run_daily_review("2026-08-18")
    assert out["degraded"] is True
    assert out["report"] is None
    assert "异常" in out["reason"]


# ==================== _handle_review_outcome ====================


def test_handle_outcome_failure_records_and_alerts(monkeypatch):
    alerts = []
    s = Scheduler()
    monkeypatch.setattr(s, "_send_feishu_alert",
                        lambda title, body: alerts.append(title))
    ok = s._handle_review_outcome(
        "2026-08-18",
        {"report": None, "degraded": True, "reason": "数据卡关键字段全不可达(降级产出)"},
        stage="16:00",
    )
    assert ok is False
    st = s.task_status["daily_market_review"]
    assert st["last_status"] == "failed"
    assert st["consecutive_failures"] == 1
    assert alerts, "降级产出必须触发飞书告警"


def test_handle_outcome_success_records_and_webhook(monkeypatch):
    sent = []
    import webhook
    monkeypatch.setattr(webhook, "dispatch", lambda *a, **k: sent.append(a))
    s = Scheduler()
    ok = s._handle_review_outcome(
        "2026-08-18",
        {"report": {"date": "2026-08-18"}, "degraded": False, "reason": "正常产出"},
        stage="16:00",
    )
    assert ok is True
    st = s.task_status["daily_market_review"]
    assert st["last_status"] == "success"
    assert sent and sent[0][0] == "market_review_ready"


# ==================== 16:30 重试 ====================


async def _noop_sleep_until(hour, minute):
    return None


def test_degraded_then_retry_success(monkeypatch):
    outcomes = iter([
        {"report": None, "degraded": True, "reason": "数据卡关键字段全不可达(降级产出)"},
        {"report": {"date": "2026-08-18"}, "degraded": False, "reason": "正常产出"},
    ])
    s = Scheduler()
    s.running = True
    monkeypatch.setattr(s, "run_daily_review", lambda today=None: next(outcomes))
    monkeypatch.setattr(s, "_sleep_until", _noop_sleep_until)
    monkeypatch.setattr(s, "_should_retry_review", lambda: True)
    monkeypatch.setattr(s, "_send_feishu_alert", lambda title, body: None)
    import webhook
    monkeypatch.setattr(webhook, "dispatch", lambda *a, **k: None)
    asyncio.run(s._run_market_review_with_retry("2026-08-18"))
    st = s.task_status["daily_market_review"]
    assert st["last_status"] == "success", "16:30 重试成功后应记录 success"
    assert "16:30" in st["detail"]


def test_degraded_retry_still_failed(monkeypatch):
    outcomes = iter([
        {"report": None, "degraded": True, "reason": "数据卡关键字段全不可达(降级产出)"},
        {"report": None, "degraded": True, "reason": "数据卡关键字段全不可达(降级产出)"},
    ])
    s = Scheduler()
    s.running = True
    monkeypatch.setattr(s, "run_daily_review", lambda today=None: next(outcomes))
    monkeypatch.setattr(s, "_sleep_until", _noop_sleep_until)
    monkeypatch.setattr(s, "_should_retry_review", lambda: True)
    monkeypatch.setattr(s, "_send_feishu_alert", lambda title, body: None)
    import webhook
    monkeypatch.setattr(webhook, "dispatch", lambda *a, **k: None)
    asyncio.run(s._run_market_review_with_retry("2026-08-18"))
    st = s.task_status["daily_market_review"]
    assert st["last_status"] == "failed"
    assert st["consecutive_failures"] == 2, "主跑+重试均失败 → 连续失败累计"


# ==================== review_produced_today (错过补偿门控) ====================


def test_review_produced_today(monkeypatch, tmp_path):
    monkeypatch.setattr(market_review.paths, "DATA_DIR", str(tmp_path))
    s = Scheduler()
    assert s.review_produced_today("2026-08-18") is False  # 无归档
    # 写入非降级归档
    os.makedirs(os.path.join(str(tmp_path), market_review.REVIEWS_SUBDIR), exist_ok=True)
    with open(os.path.join(str(tmp_path), market_review.REVIEWS_SUBDIR, "2026-08-18.json"), "w", encoding="utf-8") as f:
        json.dump(_report({"indexes": "tushare", "sectors": "unavailable",
                           "moneyflow": "unavailable", "sentiment": "tushare"}), f)
    assert s.review_produced_today("2026-08-18") is True
    # 降级归档 → 视为未产出
    with open(os.path.join(str(tmp_path), market_review.REVIEWS_SUBDIR, "2026-08-18.json"), "w", encoding="utf-8") as f:
        json.dump(_report({"indexes": "unavailable", "sectors": "unavailable",
                           "moneyflow": "unavailable", "sentiment": "unavailable"}), f)
    assert s.review_produced_today("2026-08-18") is False


# ==================== 手动触发端点 ====================


def test_trigger_endpoint_returns_outcome(monkeypatch):
    from scheduler import scheduler as sched
    monkeypatch.setattr(sched, "run_daily_review",
                        lambda today=None: {"report": {"date": "2026-08-18"},
                                            "degraded": False, "reason": "正常产出"})
    result = asyncio.run(system.trigger_market_review(user={"username": "admin"}))
    assert result["success"] is True
    assert result["degraded"] is False
    assert result["date"]
    assert result["report"]["date"] == "2026-08-18"
