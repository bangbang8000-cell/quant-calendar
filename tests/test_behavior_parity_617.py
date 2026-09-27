# -*- coding: utf-8 -*-
"""6.1.7 (T-6.1.7.2 / T-6.1.7.3): state 拆分行为对拍门禁 + jobs 队列治理测试

覆盖:
- 后端 jobs 队列治理: priority(优先级调度) + dedupe_key(幂等去重) + 旧签名兼容
- 前端 state 域注册表 (state-registry-core.js): 域声明/attach/快照恢复对拍/键唯一性
- 兼容入口静态门禁: app-logic.js 声明 theme/auth/prefs/ui/page 五域 + qcState.stateRegistry
"""
import os
import shutil
import sys

import pytest

from behavior_parity import node_run, parity_jobs as jobs, wait_terminal  # noqa: F401 — 6.3.0 起共用对拍基座

BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(BASE, "backend"))

FRONTEND = os.path.join(BASE, "frontend")
STATE_REGISTRY_JS = os.path.join(FRONTEND, "js", "state-registry-core.js")

NEEDS_NODE = pytest.mark.skipif(shutil.which("node") is None, reason="node 不可用")


def _wait(jobs_mod, job_id, timeout=5.0):
    return wait_terminal(jobs_mod, job_id, timeout=timeout)


# ─── 后端 jobs 治理 ───────────────────────────────────────────

def test_create_task_default_priority_zero(jobs):
    j, _ = jobs
    jid = j.create_task("test-order", {"tag": "a"})
    assert j.get_task(jid)["priority"] == 0


def test_create_task_accepts_priority(jobs):
    j, _ = jobs
    jid = j.create_task("test-order", {"tag": "a"}, priority=7)
    rec = j.get_task(jid)
    assert rec["priority"] == 7
    assert "dedupe_key" in rec and rec["dedupe_key"] is None


def test_worker_picks_highest_priority_first(jobs, monkeypatch):
    """优先级调度: 低 priority 值先执行 (即使后提交) — 行为对拍: 顺序确定"""
    j, order = jobs
    j.shutdown()  # 先停机, 确保无活跃 worker 抢先取任务
    _orig_wake = j._wake_worker  # 保存真实唤醒实现, 稍后手动启动
    monkeypatch.setattr(j, "_wake_worker", lambda: None)  # 阻止 create_task 内自动唤醒
    low = j.create_task("test-order", {"tag": "slow"}, priority=1)   # 先提交但低优先
    high = j.create_task("test-order", {"tag": "fast"}, priority=0)  # 后提交但高优先
    with j._lock:  # _wake_worker 内部 notify_all 需持有 _lock (与 create_task 内调用上下文一致)
        _orig_wake()  # 两任务均在 pending, 由 worker 按 (priority, seq) 调度
    assert _wait(j, low)["status"] == "success"
    assert _wait(j, high)["status"] == "success"
    assert order == ["fast", "slow"], f"高优先级应先执行: {order}"


def test_dedupe_key_reuses_pending(jobs, monkeypatch):
    """幂等: 同 dedupe_key 且 pending/running → 复用现有 job_id, 不重复入队"""
    j, _ = jobs
    monkeypatch.setattr(j, "_wake_worker", lambda: None)
    a = j.create_task("test-order", {"tag": "a"}, dedupe_key="K1")
    b = j.create_task("test-order", {"tag": "b"}, dedupe_key="K1")
    assert a == b, "同 dedupe_key 未完成时应复用任务"
    assert len(j.list_tasks(limit=50)) == 1


def test_dedupe_key_new_after_terminal(jobs, monkeypatch):
    """幂等边界: 原任务进入终态(cancelled)后, 同 dedupe_key 允许新任务"""
    j, _ = jobs
    monkeypatch.setattr(j, "_wake_worker", lambda: None)
    a = j.create_task("test-order", {"tag": "a"}, dedupe_key="K2")
    j.cancel_task(a)  # pending → cancelled (终态)
    assert j.get_task(a)["status"] == "cancelled"
    b = j.create_task("test-order", {"tag": "b"}, dedupe_key="K2")
    assert a != b, "原任务已终态, 应允许新任务"


def test_dedupe_ignored_when_key_none(jobs):
    """无 dedupe_key: 每次提交均新任务 (兼容旧行为)"""
    j, _ = jobs
    a = j.create_task("test-order", {"tag": "a"})
    b = j.create_task("test-order", {"tag": "b"})
    assert a != b


def test_priority_backward_compat_positional(jobs):
    """旧签名 create_task(type, payload, max_retries) 位置参数不受破坏"""
    j, _ = jobs
    jid = j.create_task("test-order", {"tag": "a"}, 2)
    rec = j.get_task(jid)
    assert rec["max_retries"] == 2 and rec["priority"] == 0


# ─── 前端 state 域注册表 (Node 行为对拍) ───────────────────────

def _run_js(script):
    """state-registry 模块对拍 — 6.3.0 起走通用基座 node_run"""
    return node_run(STATE_REGISTRY_JS, "const SR = M;\n" + script)


@NEEDS_NODE
def test_registry_define_attach_get():
    out = _run_js(
        "const r = SR.createStateRegistry();"
        "r.defineDomain('theme', ['hue', 'mode']);"
        "let hue = { value: 45 }, mode = { value: 'light' };"
        "r.attach('theme', 'hue', hue); r.attach('theme', 'mode', mode);"
        "return [r.has('theme','hue'), r.get('theme','mode'), r.domains(), r.attachedCount()];")
    assert out == [True, "light", ["theme"], 2]


@NEEDS_NODE
def test_registry_duplicate_domain_rejected():
    out = _run_js(
        "const r = SR.createStateRegistry();"
        "r.defineDomain('theme', ['hue']);"
        "let err = '';"
        "try { r.defineDomain('theme', ['x']); } catch (e) { err = e.message; }"
        "return err;")
    assert "theme" in out and "duplicate" in out.lower()


@NEEDS_NODE
def test_registry_cross_domain_duplicate_key_rejected():
    out = _run_js(
        "const r = SR.createStateRegistry();"
        "r.defineDomain('theme', ['hue']);"
        "let err = '';"
        "try { r.defineDomain('auth', ['hue']); } catch (e) { err = e.message; }"
        "return err;")
    assert "hue" in out, "跨域重复键应被拒绝: " + out


@NEEDS_NODE
def test_registry_attach_unknown_domain_rejected():
    out = _run_js(
        "const r = SR.createStateRegistry();"
        "let err = '';"
        "try { r.attach('nope', 'k', { value: 1 }); } catch (e) { err = e.message; }"
        "return err;")
    assert "nope" in out


@NEEDS_NODE
def test_registry_snapshot_restore_parity():
    """行为对拍: snapshot 捕获 → 修改 → restore 还原为原始值 (拆分不改变行为)"""
    out = _run_js(
        "const r = SR.createStateRegistry();"
        "r.defineDomain('page', ['loading', 'date']);"
        "let loading = { value: false }, date = { value: '2026-09-21' };"
        "r.attach('page', 'loading', loading); r.attach('page', 'date', date);"
        "const snap = r.snapshot('page');"
        "loading.value = true; date.value = '2026-09-22';"
        "r.restore('page', snap);"
        "return [loading.value, date.value, r.get('page', 'loading')];")
    assert out == [False, "2026-09-21", False]


@NEEDS_NODE
def test_registry_attach_undeclared_key_rejected():
    out = _run_js(
        "const r = SR.createStateRegistry();"
        "r.defineDomain('theme', ['hue']);"
        "let err = '';"
        "try { r.attach('theme', 'nope', { value: 1 }); } catch (e) { err = e.message; }"
        "return err;")
    assert "nope" in out


# ─── 兼容入口静态门禁 ──────────────────────────────────────────

def _read_frontend(rel):
    with open(os.path.join(FRONTEND, rel), encoding="utf-8") as f:
        return f.read()


def test_app_logic_declares_five_domains_and_entry():
    """app-logic.js: theme/auth/prefs/ui/page 五域声明 + qcState.stateRegistry 兼容入口"""
    src = _read_frontend("js/app-logic.js")
    assert "stateRegistry" in src, "应暴露 stateRegistry 兼容入口"
    assert "defineDomain('theme'" in src, "应声明 theme 域"
    assert "defineDomain('auth'" in src, "应声明 auth 域"
    assert "defineDomain('prefs'" in src, "应声明 prefs 域"
    assert "defineDomain('ui'" in src, "应声明 ui 域"
    assert "defineDomain('page'" in src, "应声明 page 域"
    assert "qcState.stateRegistry" in src, "兼容入口应挂到 qcState (扁平结构不破坏)"


def test_app_logic_attaches_realtime_refs():
    """app-logic.js: 五域 attach 真实运行期 ref (至少 8 个) — 拆分非空声明"""
    src = _read_frontend("js/app-logic.js")
    n = src.count(".attach(")
    assert n >= 8, f"attach 调用应 ≥8, 实际 {n}"


def test_main_js_imports_state_registry():
    """构建入口 main.js 应副作用导入 state-registry-core.js"""
    main = _read_frontend("src/main.js")
    assert "state-registry-core.js" in main, "main.js 应引入 state-registry-core.js"


def test_jobs_source_has_priority_and_dedupe():
    """jobs.py 源码应含 priority / dedupe_key 治理字段"""
    with open(os.path.join(BASE, "backend", "jobs.py"), encoding="utf-8") as f:
        src = f.read()
    assert "def create_task(task_type, payload=None, max_retries=0, priority=0, dedupe_key=None)" in src
    assert "'priority'" in src and "'dedupe_key'" in src
