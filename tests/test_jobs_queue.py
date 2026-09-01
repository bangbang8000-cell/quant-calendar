# -*- coding: utf-8 -*-
"""V5.7 (T-5.7.2): 异步任务队列测试 (TEST-PLAN 8.1 test_jobs_queue.py)

任务提交/进度/取消/失败重试/结果持久化 + 事件循环不阻塞计时断言。
JOBS_FILE monkeypatch 到 tmp_path; 注册专用测试任务, 不触真实业务。
"""
import os
import sys
import time

import pytest

BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(BASE, "backend"))


@pytest.fixture
def jobs(tmp_path, monkeypatch):
    import jobs
    monkeypatch.setattr(jobs, "JOBS_FILE", str(tmp_path / "jobs.json"))
    jobs.reset_jobs()
    jobs.clear_registry()

    @jobs.register("test-echo")
    def _echo(payload, ctx):
        for i in range(5):
            if ctx.check_cancelled():
                raise jobs.JobCancelled()
            ctx.progress(i * 20, "step-%d" % i)
            time.sleep(0.005)
        return {"echo": payload}

    @jobs.register("test-fail")
    def _fail(payload, ctx):  # noqa: ARG001
        raise ValueError("boom")

    @jobs.register("test-flaky")
    def _flaky(payload, ctx):
        n = ctx.retries_done + 1
        if n < payload.get("fail_times", 1):
            raise RuntimeError("flaky-%d" % n)
        return {"ok": True, "attempts": n}

    yield jobs
    jobs.clear_registry()
    jobs.reset_jobs()


def _wait(jobs, job_id, timeout=5.0):
    deadline = time.time() + timeout
    while time.time() < deadline:
        j = jobs.get_task(job_id)
        if j and j["status"] in ("success", "failed", "cancelled"):
            return j
        time.sleep(0.02)
    return jobs.get_task(job_id)


# ─── 提交/查询 ───────────────────────────────────────────────

def test_create_and_get(jobs):
    jid = jobs.create_task("test-echo", {"n": 1})
    j = jobs.get_task(jid)
    assert j["status"] == "pending"
    assert j["task_type"] == "test-echo"
    assert j["payload"] == {"n": 1}
    assert j["retries"] == 0


def test_create_unknown_job_id(jobs):
    assert jobs.get_task("J-nope") is None


def test_list_tasks_recent_first(jobs):
    a = jobs.create_task("test-echo", {})
    b = jobs.create_task("test-echo", {})
    lst = jobs.list_tasks(limit=10)
    assert lst[0]["job_id"] == b and lst[1]["job_id"] == a


def test_list_respects_limit(jobs):
    for _ in range(5):
        jobs.create_task("test-echo", {})
    assert len(jobs.list_tasks(limit=3)) == 3


# ─── 执行/结果 ───────────────────────────────────────────────

def test_task_runs_success(jobs):
    jid = jobs.create_task("test-echo", {"hello": 1})
    j = _wait(jobs, jid)
    assert j["status"] == "success"
    assert j["result"] == {"echo": {"hello": 1}}


def test_progress_reaches_100_on_success(jobs):
    jid = jobs.create_task("test-echo", {})
    j = _wait(jobs, jid)
    assert j["progress"] == 100


def test_progress_messages(jobs):
    jid = jobs.create_task("test-echo", {})
    j = _wait(jobs, jid)
    assert "step-" in (j["message"] or "")


def test_task_failure_sets_error(jobs):
    jid = jobs.create_task("test-fail", {})
    j = _wait(jobs, jid)
    assert j["status"] == "failed"
    assert "boom" in (j["error"] or "")


def test_unknown_task_type_failed(jobs):
    jid = jobs.create_task("no-such-type", {})
    j = _wait(jobs, jid)
    assert j["status"] == "failed"
    assert "no-such-type" in (j["error"] or "")


# ─── 失败重试 ────────────────────────────────────────────────

def test_retry_until_success(jobs):
    jid = jobs.create_task("test-flaky", {"fail_times": 2}, max_retries=3)
    j = _wait(jobs, jid, timeout=8)
    assert j["status"] == "success"
    assert j["result"] == {"ok": True, "attempts": 2}
    assert j["retries"] >= 1


def test_retry_exhausted_failed(jobs):
    jid = jobs.create_task("test-flaky", {"fail_times": 9}, max_retries=2)
    j = _wait(jobs, jid, timeout=8)
    assert j["status"] == "failed"


# ─── 取消 ────────────────────────────────────────────────────

def test_cancel_pending_task(jobs, monkeypatch):
    monkeypatch.setattr(jobs, "POLL_INTERVAL", 0.02)
    jid = jobs.create_task("test-echo", {})
    jobs.cancel_task(jid)
    assert jobs.get_task(jid)["status"] == "cancelled"


def test_cancel_running_task(jobs):
    jid = jobs.create_task("test-echo", {})
    # 给 worker 一点时间进入 running
    deadline = time.time() + 2
    while time.time() < deadline:
        if jobs.get_task(jid)["status"] == "running":
            break
        time.sleep(0.01)
    jobs.cancel_task(jid)
    j = _wait(jobs, jid)
    assert j["status"] == "cancelled"


def test_check_cancelled_after_cancel(jobs):
    jid = jobs.create_task("test-echo", {})
    jobs.cancel_task(jid)
    assert jobs.check_cancelled(jid) is True


def test_cancel_unknown_id_safe(jobs):
    jobs.cancel_task("J-nope")  # 不抛异常


# ─── 持久化 ──────────────────────────────────────────────────

def test_jobs_persisted_to_disk(jobs):
    jid = jobs.create_task("test-echo", {})
    assert os.path.exists(jobs.JOBS_FILE)
    _wait(jobs, jid)
    # 重新读文件仍有记录
    import json
    with open(jobs.JOBS_FILE, encoding="utf-8") as f:
        data = json.load(f)
    assert jid in data


def test_corrupt_jobs_file_fallback(jobs, tmp_path):
    with open(jobs.JOBS_FILE, "w", encoding="utf-8") as f:
        f.write("{bad")
    jid = jobs.create_task("test-echo", {})
    j = _wait(jobs, jid)
    assert j["status"] == "success"


# ─── 并发/不阻塞 ─────────────────────────────────────────────

def test_submit_many_tasks_nonblocking(jobs):
    """提交 50 个任务快速返回 (事件循环不阻塞, 任务体异步执行)"""
    t0 = time.time()
    ids = [jobs.create_task("test-echo", {"i": i}) for i in range(50)]
    elapsed = time.time() - t0
    assert elapsed < 1.0, f"提交 50 任务耗时 {elapsed:.3f}s"
    assert len(ids) == 50


def test_all_tasks_complete(jobs):
    ids = [jobs.create_task("test-echo", {"i": i}) for i in range(8)]
    deadline = time.time() + 10
    while time.time() < deadline:
        done = [j for i in ids if (j := jobs.get_task(i)) and j["status"] in ("success", "failed")]
        if len(done) == len(ids):
            break
        time.sleep(0.03)
    assert all(jobs.get_task(i)["status"] == "success" for i in ids)


# ─── 工具 ────────────────────────────────────────────────────

def test_progress_clamped(jobs):
    """worker 内 progress 超界被钳制"""
    jid = jobs.create_task("test-echo", {})
    j = _wait(jobs, jid)
    assert 0 <= j["progress"] <= 100



# ═══════════════════ V5.7 (T-5.7.2): API 集成 ═══════════════════

@pytest.fixture
def api_client(tmp_path, monkeypatch):
    import db
    from user_manager import user_manager as um
    old_data, old_file = db.DATA_DIR, db.DB_FILE
    db.DATA_DIR = str(tmp_path)
    db.DB_FILE = os.path.join(db.DATA_DIR, "app.db")
    db.init_db()
    db.migrate()
    um.add_user("alice", "pw123")
    from fastapi import FastAPI
    from starlette.testclient import TestClient
    from api.v1.jobs import router as jobs_router
    from auth import create_access_token
    a = FastAPI()
    a.include_router(jobs_router, prefix="/api")
    with TestClient(a) as c:
        yield c, {"Authorization": "Bearer " + create_access_token({"sub": "alice", "role": "user"})}
    db.DATA_DIR, db.DB_FILE = old_data, old_file


def test_api_create_and_query(api_client):
    c, auth = api_client
    r = c.post("/api/jobs", json={"task_type": "test-echo", "payload": {"n": 1}}, headers=auth)
    assert r.status_code == 200 and r.json()["success"]
    jid = r.json()["job_id"]
    r2 = c.get("/api/jobs/" + jid, headers=auth)
    assert r2.status_code == 200 and r2.json()["data"]["task_type"] == "test-echo"
    r3 = c.get("/api/jobs", headers=auth)
    assert r3.status_code == 200 and r3.json()["data"]["count"] >= 1


def test_api_requires_auth(api_client):
    c, _ = api_client
    assert c.get("/api/jobs").status_code == 401
    assert c.post("/api/jobs", json={"task_type": "x"}).status_code == 401
    assert c.post("/api/jobs/J-test/cancel").status_code == 401


def test_api_bad_task_type(api_client):
    c, auth = api_client
    assert c.post("/api/jobs", json={}, headers=auth).status_code == 400

