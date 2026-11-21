#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""v7.12 (FR-7.7-2): 任务暂停/恢复测试

覆盖:
- pending 暂停 → paused, worker 不拾取; 恢复 → 回到 pending → 正常执行
- running 任务在检查点 ctx.check_paused() 协作式挂起, 恢复后继续到成功
- 暂停期间被取消 → check_paused 返回 False
- check_paused(timeout) 超时抛 TimeoutError
- 终态不可暂停 / 未暂停不可恢复 / 不存在的任务返回 False
- API: POST /jobs/{id}/pause 与 /resume (404/409/200)
"""
import os
import sys
import threading
import time

import pytest

BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(BASE, "backend"))

PAUSE_POLL = 0.2


@pytest.fixture
def jobs(tmp_path, monkeypatch):
    import jobs
    monkeypatch.setattr(jobs, "JOBS_FILE", str(tmp_path / "jobs.json"))
    jobs.reset_jobs()
    _saved_registry = dict(jobs._registry)
    jobs._registry.clear()

    @jobs.register("test-echo")
    def _echo(payload, ctx):
        ctx.progress(10, "start")
        return {"echo": payload}

    @jobs.register("test-fail")
    def _fail(payload, ctx):  # noqa: ARG001
        raise ValueError("boom")

    @jobs.register("pause-steps")
    def _steps(payload, ctx):
        """分步任务: 每步调用检查点, 供 running 暂停测试观察进度停滞"""
        for i in range(20):
            if not ctx.check_paused():
                raise jobs.JobCancelled()
            ctx.progress((i + 1) * 5, "step-%d" % i)
            time.sleep(0.02)
        return {"steps": 20}

    yield jobs
    jobs._registry.clear()
    jobs._registry.update(_saved_registry)
    jobs.reset_jobs()
    jobs.shutdown()


def _wait(jobs, job_id, timeout=8.0):
    deadline = time.time() + timeout
    while time.time() < deadline:
        j = jobs.get_task(job_id)
        if j and j["status"] in ("success", "failed", "cancelled"):
            return j
        time.sleep(0.02)
    return jobs.get_task(job_id)


def _wait_running(jobs, job_id, min_progress=1, timeout=8.0):
    deadline = time.time() + timeout
    while time.time() < deadline:
        j = jobs.get_task(job_id)
        if j and j["status"] == "running" and (j.get("progress") or 0) >= min_progress:
            return j
        time.sleep(0.02)
    return jobs.get_task(job_id)


# ─── 状态机: pending 暂停/恢复 ───────────────────────────────

def test_pause_pending_blocks_pickup(jobs, monkeypatch):
    monkeypatch.setattr(jobs, "_wake_worker", lambda: None, raising=False)
    jid = jobs.create_task("test-echo", {"n": 1})
    assert jobs.pause_task(jid) is True
    j = jobs.get_task(jid)
    assert j["status"] == "paused"
    assert jobs.is_paused(jid) is True
    # 等一拍, 确认不会被任何路径拾取执行
    time.sleep(0.4)
    assert jobs.get_task(jid)["status"] == "paused"


def test_resume_pending_then_runs(jobs):
    jid = jobs.create_task("test-echo", {"n": 1})
    assert jobs.pause_task(jid) is True
    assert jobs.resume_task(jid) is True
    j = jobs.get_task(jid)
    assert j["status"] == "pending"
    assert jobs.is_paused(jid) is False
    done = _wait(jobs, jid)
    assert done["status"] == "success"


def test_resume_without_pause_rejected(jobs):
    jid = jobs.create_task("test-echo", {})
    assert jobs.resume_task(jid) is False


def test_pause_terminal_rejected(jobs):
    jid = jobs.create_task("test-fail", {}, max_retries=0)
    done = _wait(jobs, jid)
    assert done["status"] == "failed"
    assert jobs.pause_task(jid) is False
    assert jobs.resume_task(jid) is False


def test_pause_unknown_job(jobs):
    assert jobs.pause_task("J19990101000000-nope") is False
    assert jobs.resume_task("J19990101000000-nope") is False


# ─── 检查点: running 协作式挂起 ──────────────────────────────

def test_pause_running_blocks_at_checkpoint_and_resumes(jobs):
    jid = jobs.create_task("pause-steps", {})
    j = _wait_running(jobs, jid, min_progress=10)
    assert j is not None and j["status"] == "running"
    assert jobs.pause_task(jid) is True

    # 暂停后任务在检查点挂起: 状态仍是 running, 但进度不再推进
    p = jobs.get_task(jid).get("progress")
    time.sleep(PAUSE_POLL * 4)
    j2 = jobs.get_task(jid)
    assert j2["status"] == "running"
    assert j2["progress"] <= p + 5  # 最多越过一个已完成的批次
    assert jobs.is_paused(jid) is True

    assert jobs.resume_task(jid) is True
    done = _wait(jobs, jid)
    assert done["status"] == "success"
    assert done["progress"] == 100


def test_running_pause_flag_rejects_new_pickup(jobs):
    """running 任务被暂停后, 即使 worker 把它标回 pending(重试路径)也不该被拾取"""
    jid = jobs.create_task("pause-steps", {})
    _wait_running(jobs, jid, min_progress=5)
    jobs.pause_task(jid)
    with jobs._lock:
        store = jobs._read()
        store[jid]["status"] = jobs.STATUS_PENDING  # 模拟调度器重排
        jobs._write(store)
    time.sleep(0.4)
    assert jobs.get_task(jid)["status"] == "pending"  # 未被拾取
    assert jobs.get_task(jid).get("paused") is True


# ─── ctx.check_paused 细分行为 ───────────────────────────────

def test_check_paused_timeout_raises(jobs, monkeypatch):
    # 这些用例直接驱动 ctx.check_paused, 与 worker 调度无关; 关掉拾取防竞态
    monkeypatch.setattr(jobs, "_wake_worker", lambda: None, raising=False)
    jid = jobs.create_task("test-echo", {})
    assert jobs.pause_task(jid) is True
    ctx = jobs._TaskCtx(jid)
    with pytest.raises(TimeoutError):
        ctx.check_paused(timeout=0.3)


def test_check_paused_returns_false_when_cancelled(jobs, monkeypatch):
    monkeypatch.setattr(jobs, "_wake_worker", lambda: None, raising=False)
    jid = jobs.create_task("test-echo", {})
    assert jobs.pause_task(jid) is True

    def _cancel_later():
        time.sleep(PAUSE_POLL * 1.5)
        jobs.cancel_task(jid)

    t = threading.Thread(target=_cancel_later)
    t.start()
    ctx = jobs._TaskCtx(jid)
    assert ctx.check_paused(timeout=3.0) is False
    t.join()


def test_check_paused_returns_true_after_resume(jobs, monkeypatch):
    monkeypatch.setattr(jobs, "_wake_worker", lambda: None, raising=False)
    jid = jobs.create_task("test-echo", {})
    assert jobs.pause_task(jid) is True

    def _resume_later():
        time.sleep(PAUSE_POLL * 1.5)
        jobs.resume_task(jid)

    t = threading.Thread(target=_resume_later)
    t.start()
    ctx = jobs._TaskCtx(jid)
    assert ctx.check_paused(timeout=3.0) is True
    t.join()


def test_check_paused_noop_when_not_paused(jobs):
    jid = jobs.create_task("test-echo", {})
    ctx = jobs._TaskCtx(jid)
    assert ctx.check_paused() is True


# ─── API 层 ─────────────────────────────────────────────────

@pytest.fixture
def client(jobs, monkeypatch):
    monkeypatch.setattr(jobs, "_wake_worker", lambda: None, raising=False)
    from fastapi import FastAPI
    from fastapi.testclient import TestClient

    import auth
    from api.v1 import jobs as jobs_api

    app = FastAPI()
    app.include_router(jobs_api.router)

    def _fake_user():
        return {"username": "tester"}

    app.dependency_overrides[auth.get_current_active_user] = _fake_user
    return TestClient(app)


def test_api_pause_resume_pending(client):
    from jobs import create_task, get_task
    jid = create_task("test-echo", {})
    r = client.post("/jobs/%s/pause" % jid)
    assert r.status_code == 200
    assert r.json()["status"] == "paused"
    assert get_task(jid)["status"] == "paused"
    r = client.post("/jobs/%s/resume" % jid)
    assert r.status_code == 200
    assert get_task(jid)["status"] == "pending"


def test_api_pause_unknown_404(client):
    assert client.post("/jobs/nope/pause").status_code == 404
    assert client.post("/jobs/nope/resume").status_code == 404


def test_api_pause_terminal_409(client):
    from jobs import _update_store, create_task, get_task
    jid = create_task("test-fail", {}, max_retries=0)

    def _mark_failed(j):
        j["status"] = "failed"
        j["error"] = "ValueError: boom"
        j["finished_at"] = "2026-01-01 00:00:00"
    _update_store(jid, _mark_failed)
    assert get_task(jid)["status"] == "failed"
    r = client.post("/jobs/%s/pause" % jid)
    assert r.status_code == 409
    r = client.post("/jobs/%s/resume" % jid)
    assert r.status_code == 409
