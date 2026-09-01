# -*- coding: utf-8 -*-
"""V5.6 (T-5.6.1): 新手引导任务流测试 (TEST-PLAN 7.1 test_onboarding.py)

引导状态机 (onboarding-core.js, node 跑 UMD) + 进度持久化 + 跨设备同步
(后端 user_config preferences 存取)。
"""
import json
import os
import shutil
import subprocess
import sys
import tempfile

import pytest

BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
FRONTEND_JS = os.path.join(BASE, "frontend", "js", "onboarding-core.js")

NEEDS_NODE = pytest.mark.skipif(shutil.which("node") is None, reason="node 不可用")


def _run_js(script):
    code = ("const OC = require(process.argv[1]);\n"
            "const out = (function(){" + script + "})();\n"
            "process.stdout.write(JSON.stringify(out));\n")
    proc = subprocess.run(["node", "-e", code, FRONTEND_JS],
                          capture_output=True, text=True, timeout=15)
    assert proc.returncode == 0, f"node 执行失败: {proc.stderr}"
    return json.loads(proc.stdout)


# ─── 状态机 ─────────────────────────────────────────────────────

@NEEDS_NODE
def test_step_count_is_five():
    out = _run_js("return OC.stepCount();")
    assert out == 5


@NEEDS_NODE
def test_initial_state():
    out = _run_js("return OC.createOnboardingState();")
    assert out["stepIndex"] == 0
    assert out["completed"] is False
    assert out["dismissed"] is False


@NEEDS_NODE
def test_steps_have_keys_and_titles():
    out = _run_js("return OC.steps().map(s => s.key);")
    assert len(out) == 5
    assert all(isinstance(k, str) and k for k in out)


@NEEDS_NODE
def test_next_advances():
    out = _run_js(
        "const s = OC.createOnboardingState();"
        "const s2 = OC.next(s);"
        "return [s2.stepIndex, s.stepIndex];")
    assert out == [1, 0]


@NEEDS_NODE
def test_prev_goes_back():
    out = _run_js(
        "const s = { ...OC.createOnboardingState(), stepIndex: 2 };"
        "return OC.prev(s).stepIndex;")
    assert out == 1


@NEEDS_NODE
def test_prev_at_start_clamps():
    out = _run_js("return OC.prev(OC.createOnboardingState()).stepIndex;")
    assert out == 0


@NEEDS_NODE
def test_next_at_last_clamps():
    out = _run_js(
        "const s = { ...OC.createOnboardingState(), stepIndex: 4 };"
        "return OC.next(s).stepIndex;")
    assert out == 4


@NEEDS_NODE
def test_jump_to():
    out = _run_js("return OC.jumpTo(OC.createOnboardingState(), 3).stepIndex;")
    assert out == 3


@NEEDS_NODE
def test_jump_to_out_of_range_clamps():
    out = _run_js("return OC.jumpTo(OC.createOnboardingState(), 99).stepIndex;")
    assert out == 4


# ─── 完成/跳过 ─────────────────────────────────────────────────

@NEEDS_NODE
def test_complete_sets_flag():
    out = _run_js("return OC.complete(OC.createOnboardingState());")
    assert out["completed"] is True


@NEEDS_NODE
def test_dismiss_sets_flag():
    out = _run_js("return OC.dismiss(OC.createOnboardingState());")
    assert out["dismissed"] is True


@NEEDS_NODE
def test_is_complete():
    out = _run_js(
        "const s = OC.complete(OC.createOnboardingState());"
        "return [OC.isComplete(s), OC.isComplete(OC.createOnboardingState())];")
    assert out == [True, False]


# ─── 进度 ───────────────────────────────────────────────────────

@NEEDS_NODE
def test_progress_shape():
    out = _run_js("return OC.progress(OC.createOnboardingState());")
    assert out["done"] == 0 and out["total"] == 5
    assert 0 <= out["pct"] <= 100


@NEEDS_NODE
def test_progress_mid():
    out = _run_js(
        "const s = OC.jumpTo(OC.createOnboardingState(), 2);"
        "return OC.progress(s);")
    assert out["done"] == 2 and out["pct"] == 40


# ─── 持久化 ─────────────────────────────────────────────────────

@NEEDS_NODE
def test_persist_roundtrip():
    out = _run_js(
        "const s = OC.jumpTo(OC.createOnboardingState(), 3);"
        "const json = OC.persistState(s);"
        "const s2 = OC.parseState(json);"
        "return [s2.stepIndex, s2.completed];")
    assert out == [3, False]


@NEEDS_NODE
def test_parse_corrupt_returns_initial():
    out = _run_js("return OC.parseState('not-json');")
    assert out["stepIndex"] == 0


@NEEDS_NODE
def test_parse_null_returns_initial():
    out = _run_js("return OC.parseState(null);")
    assert out["stepIndex"] == 0


@NEEDS_NODE
def test_parse_completed_keeps_completed():
    out = _run_js(
        "const s = OC.complete(OC.createOnboardingState());"
        "return OC.parseState(OC.persistState(s)).completed;")
    assert out is True


# ─── 跨设备同步 (后端 preferences) ─────────────────────────────

@pytest.fixture
def backend_prefs(tmp_path, monkeypatch):
    sys.path.insert(0, os.path.join(BASE, "backend"))
    from api.v1 import user_config as uc
    old_dir = uc.BASE_USERS_DIR
    uc.BASE_USERS_DIR = str(tmp_path)
    yield uc
    uc.BASE_USERS_DIR = old_dir


def test_prefs_default_has_onboarding_key(backend_prefs):
    assert "onboarding_progress" in backend_prefs.PREFERENCE_DEFAULTS


def test_save_then_get_roundtrip(backend_prefs):
    uc = backend_prefs
    payload = json.dumps({"stepIndex": 2, "completed": False, "dismissed": False,
                          "updatedAt": 1})
    assert uc.save_user_preferences("alice", {"onboarding_progress": payload})
    got = uc.get_user_preferences("alice")
    assert got["onboarding_progress"] == payload


def test_prefs_per_user_isolated(backend_prefs):
    uc = backend_prefs
    uc.save_user_preferences("alice", {"onboarding_progress": "A"})
    assert uc.get_user_preferences("bob")["onboarding_progress"] == ""
