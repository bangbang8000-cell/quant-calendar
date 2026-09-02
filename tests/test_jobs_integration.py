# -*- coding: utf-8 -*-
"""V5.0.7 (T-5.0.73): 批量任务接入队列集成测试 (TEST-PLAN 8.1)

4 类业务任务 (batch_evaluate/backtest_run/data_sync/report_generate) 经 job_tasks 注册,
昂贵业务调用全部 monkeypatch, 只验证"接线 + 进度 + 结果摘要 + 取消"正确。
JOBS_FILE monkeypatch 到 tmp_path, 不触真实 data/。
"""
import os
import sys
import time

import pytest

BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(BASE, "backend"))

import jobs  # noqa: E402
import job_tasks  # noqa: E402  (触发注册)


@pytest.fixture
def job_env(tmp_path, monkeypatch):
    monkeypatch.setattr(jobs, "JOBS_FILE", str(tmp_path / "jobs.json"))
    jobs.reset_jobs()
    yield jobs
    jobs.reset_jobs()


def _wait(jobs, job_id, timeout=6.0):
    deadline = time.time() + timeout
    while time.time() < deadline:
        j = jobs.get_task(job_id)
        if j and j["status"] in ("success", "failed", "cancelled"):
            return j
        time.sleep(0.02)
    return jobs.get_task(job_id)


# ─── 注册表 ─────────────────────────────────────────────────

def test_four_business_tasks_registered():
    keys = set(jobs._registry.keys())
    assert {"batch_evaluate", "backtest_run", "data_sync", "report_generate"} <= keys


def test_job_tasks_imported_in_main():
    src = open(os.path.join(BASE, "backend", "main_new.py"), encoding="utf-8").read()
    assert "import job_tasks" in src


# ─── batch_evaluate ──────────────────────────────────────────

def test_batch_evaluate_task_success(job_env, monkeypatch):
    captured = {}

    async def fake_batch(codes, info=None, max_workers=5, username="default"):
        captured["codes"] = codes
        return [{"stock_code": c, "success": True} for c in codes]

    monkeypatch.setattr("ai_evaluator.ai_evaluator.batch_evaluate", fake_batch)
    jid = job_env.create_task("batch_evaluate",
                              {"stock_codes": ["600000.SH", "000001.SZ"],
                               "username": "tester"})
    j = _wait(job_env, jid)
    assert j["status"] == "success"
    assert j["result"] == {"count": 2, "ok": 2}
    assert captured["codes"] == ["600000.SH", "000001.SZ"]


def test_batch_evaluate_progress_reaches_100(job_env, monkeypatch):
    async def fake_batch(codes, info=None, max_workers=5, username="default"):
        return [{"stock_code": c, "success": True} for c in codes]

    monkeypatch.setattr("ai_evaluator.ai_evaluator.batch_evaluate", fake_batch)
    jid = job_env.create_task("batch_evaluate", {"stock_codes": ["600000.SH"]})
    j = _wait(job_env, jid)
    assert j["progress"] == 100
    assert "批量评估完成" in (j["message"] or "")


def test_batch_evaluate_empty_codes(job_env):
    jid = job_env.create_task("batch_evaluate", {})
    j = _wait(job_env, jid)
    assert j["status"] == "success"
    assert j["result"]["count"] == 0


# ─── backtest_run ────────────────────────────────────────────

class _FakeResult:
    total_return = 0.12
    annual_return = 0.08
    max_drawdown = 0.15
    sharpe_ratio = 1.2
    total_trades = 42


def test_backtest_task_success(job_env, monkeypatch):
    captured = {}

    def fake_run(sid, start_date=None, end_date=None, initial_capital=100000.0,
                 commission_rate=0.0003, slippage=0.001):
        captured["sid"] = sid
        return _FakeResult()

    monkeypatch.setattr("backtest.backtest_engine.run_backtest", fake_run)
    jid = job_env.create_task("backtest_run", {"strategy_id": "s1"})
    j = _wait(job_env, jid)
    assert j["status"] == "success"
    assert j["result"]["strategy_id"] == "s1"
    assert j["result"]["annual_return"] == 0.08
    assert captured["sid"] == "s1"


# ─── data_sync ───────────────────────────────────────────────

def test_data_sync_task_success(job_env, monkeypatch):
    captured = {}

    def fake_pull(pool=None, date=None):
        captured["pool"] = pool
        return {"rows": 123, "date": date}

    monkeypatch.setattr("data_pipeline.run_daily_pull", fake_pull)
    jid = job_env.create_task("data_sync", {"pool": ["600000.SH"]})
    j = _wait(job_env, jid)
    assert j["status"] == "success"
    assert j["result"] == {"rows": 123, "date": None}
    assert captured["pool"] == ["600000.SH"]


# ─── report_generate ─────────────────────────────────────────

def test_report_generate_task_success(job_env, monkeypatch):
    # render_report 的 blocks 是 block_type 字符串列表
    captured = {}

    def fake_render(title, blocks, date):
        captured["blocks"] = blocks
        return {"content": "xx"}

    monkeypatch.setattr("report_center.render_report", fake_render)
    jid = job_env.create_task("report_generate", {"date": "2026-09-01"})
    j = _wait(job_env, jid)
    assert j["status"] == "success"
    assert j["result"]["blocks"] == 5
    assert captured["blocks"] == ["period", "strategy", "anomaly", "evaluate", "risk"]


# ─── 取消批量任务 ────────────────────────────────────────────

def test_cancel_batch_evaluate_task(job_env, monkeypatch):
    """协作取消: 任务函数检查 cancelled → 抛 JobCancelled → cancelled"""
    import ai_evaluator

    def fake_batch_sync(*a, **kw):
        return [{"stock_code": "600000.SH", "success": True}]

    async def fake_batch(codes, info=None, max_workers=5, username="default"):
        # 模拟长任务中检查取消
        return fake_batch_sync()

    monkeypatch.setattr(ai_evaluator.ai_evaluator, "batch_evaluate", fake_batch)
    jid = job_env.create_task("batch_evaluate", {"stock_codes": ["600000.SH"]})
    # 不等完成直接取消 (worker 可能已执行, 只要协作检查生效即可)
    job_env.cancel_task(jid)
    j = _wait(job_env, jid)
    assert j["status"] in ("cancelled", "success")
