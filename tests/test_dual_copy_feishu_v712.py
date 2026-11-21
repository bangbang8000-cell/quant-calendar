#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""v7.12 (FR-7.7-5/6): 双副本 commit 门禁 + 飞书群指令安全版 测试

覆盖:
- check_dual_copy.classify: aligned / ops_behind / dev_behind / diverged / skip 纯函数判定
- check_dual_copy.run: ops 缺失 → skip; 真实双副本对齐
- feishu_commands: 签名计算/验证 (fail-closed)、防重放、指令白名单分发、审计落库、
  回调主入口 (403 分支 / url_verification / 正常指令), API 端点 /feishu/command
"""
import base64
import hashlib
import hmac
import importlib.util
import json
import os
import sys
import time

import pytest

BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(BASE, "backend"))
sys.path.insert(0, os.path.join(BASE, "scripts"))


def _load_script(name):
    path = os.path.join(BASE, "scripts", name)
    spec = importlib.util.spec_from_file_location(name[:-3], path)
    mod = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(mod)
    return mod


# ─── check_dual_copy ─────────────────────────────────────────

def _anc_map(pairs):
    """构造 is_ancestor(a,b) 判定函数: pairs 里出现 (a,b) 即 True"""
    known = set(pairs)
    return lambda a, b: (a, b) in known


def test_classify_aligned():
    dc = _load_script("check_dual_copy.py")
    assert dc.classify("h1", "h1", _anc_map([])) == "aligned"


def test_classify_ops_behind():
    dc = _load_script("check_dual_copy.py")
    # ops(h1) 是 dev(h2) 的祖先 → ops 落后, 可 ff-only 追上
    assert dc.classify("h2", "h1", _anc_map([("h1", "h2")])) == "ops_behind"


def test_classify_dev_behind():
    dc = _load_script("check_dual_copy.py")
    assert dc.classify("h1", "h2", _anc_map([("h1", "h2")])) == "dev_behind"


def test_classify_diverged():
    dc = _load_script("check_dual_copy.py")
    # 各自有对方没有的提交 (h0 → h1 与 h0 → h2)
    anc = _anc_map([("h0", "h1"), ("h0", "h2")])
    assert dc.classify("h1", "h2", anc) == "diverged"


def test_classify_skip_when_head_missing():
    dc = _load_script("check_dual_copy.py")
    assert dc.classify(None, "h1", _anc_map([])) == "skip"
    assert dc.classify("h1", None, _anc_map([])) == "skip"


def test_run_skips_when_ops_missing(tmp_path):
    dc = _load_script("check_dual_copy.py")
    dev = tmp_path / "dev"
    dev.mkdir()
    import subprocess
    subprocess.run(["git", "init", "-q", str(dev)], check=True)
    subprocess.run(["git", "-C", str(dev), "commit", "-q", "--allow-empty",
                    "-m", "init"], env={**os.environ, "GIT_AUTHOR_NAME": "t",
                                        "GIT_AUTHOR_EMAIL": "t@t",
                                        "GIT_COMMITTER_NAME": "t",
                                        "GIT_COMMITTER_EMAIL": "t@t"}, check=True)
    report, code = dc.run(dev=str(dev), ops=str(tmp_path / "nope"))
    assert code == 0 and report["verdict"] == "skip"


def test_run_real_dual_copy(tmp_path):
    """真实 git 场景: ops 落后一提交 → 非严格 warn(exit 0), 严格 fail(exit 2)"""
    dc = _load_script("check_dual_copy.py")
    import subprocess
    env = {**os.environ, "GIT_AUTHOR_NAME": "t", "GIT_AUTHOR_EMAIL": "t@t",
           "GIT_COMMITTER_NAME": "t", "GIT_COMMITTER_EMAIL": "t@t"}
    dev, ops = tmp_path / "dev", tmp_path / "ops"
    for p in (dev, ops):
        subprocess.run(["git", "init", "-q", str(p)], check=True)

    def commit(p, msg):
        subprocess.run(["git", "-C", str(p), "commit", "-q", "--allow-empty",
                        "-m", msg], env=env, check=True)

    commit(dev, "c1")
    branch = subprocess.run(["git", "-C", str(dev), "rev-parse", "--abbrev-ref", "HEAD"],
                            capture_output=True, text=True).stdout.strip()
    subprocess.run(["git", "-C", str(ops), "remote", "add", "origin", str(dev)], check=True)
    subprocess.run(["git", "-C", str(ops), "fetch", "-q", "origin"], check=True)
    subprocess.run(["git", "-C", str(ops), "reset", "-q", "--hard",
                    "origin/%s" % branch], check=True)
    commit(dev, "c2")  # dev 领先一提交 → ops_behind

    report, code = dc.run(dev=str(dev), ops=str(ops), strict=False)
    assert report["relation"] == "ops_behind" and code == 0 and report["verdict"] == "warn"
    report, code = dc.run(dev=str(dev), ops=str(ops), strict=True)
    assert code == 2 and report["verdict"] == "fail"


def test_run_real_dual_copy_diverged(tmp_path):
    """dev 与 ops 各自领先一提交 → 分叉, 一律 fail(exit 1)"""
    dc = _load_script("check_dual_copy.py")
    import subprocess
    env = {**os.environ, "GIT_AUTHOR_NAME": "t", "GIT_AUTHOR_EMAIL": "t@t",
           "GIT_COMMITTER_NAME": "t", "GIT_COMMITTER_EMAIL": "t@t"}
    dev, ops = tmp_path / "dev", tmp_path / "ops"
    for p in (dev, ops):
        subprocess.run(["git", "init", "-q", str(p)], check=True)

    def commit(p, msg):
        subprocess.run(["git", "-C", str(p), "commit", "-q", "--allow-empty",
                        "-m", msg], env=env, check=True)

    commit(dev, "c0")
    branch = subprocess.run(["git", "-C", str(dev), "rev-parse", "--abbrev-ref", "HEAD"],
                            capture_output=True, text=True).stdout.strip()
    subprocess.run(["git", "-C", str(ops), "remote", "add", "origin", str(dev)], check=True)
    subprocess.run(["git", "-C", str(ops), "fetch", "-q", "origin"], check=True)
    subprocess.run(["git", "-C", str(ops), "reset", "-q", "--hard",
                    "origin/%s" % branch], check=True)
    commit(dev, "dev-only")
    commit(ops, "ops-only")
    report, code = dc.run(dev=str(dev), ops=str(ops))
    assert report["relation"] == "diverged" and code == 1 and report["verdict"] == "fail"


# ─── feishu_commands ─────────────────────────────────────────

SECRET = "test-secret-key"


def _sig_headers(body, ts=None, nonce="n1", secret=SECRET):
    ts = str(int(ts if ts is not None else time.time()))
    msg = (ts + nonce + body).encode("utf-8")
    sig = base64.b64encode(hmac.new(secret.encode(), msg, hashlib.sha256).digest()).decode()
    return {"X-Lark-Signature": sig, "X-Lark-Request-Timestamp": ts,
            "X-Lark-Request-Nonce": nonce}


def _msg_payload(text, chat="oc_x", open_id="ou_1"):
    return {"type": "event_callback",
            "event": {"chat_id": chat,
                      "message": {"chat_id": chat, "content": json.dumps({"text": text})},
                      "sender": {"sender_id": {"open_id": open_id}}}}


@pytest.fixture
def fc(tmp_path, monkeypatch):
    import feishu_commands as mod
    monkeypatch.setattr(mod, "AUDIT_DB", str(tmp_path / "audit.db"))
    return mod


def test_signature_roundtrip(fc):
    body = json.dumps({"a": 1})
    headers = _sig_headers(body)
    ok, reason = fc.verify_signature(SECRET, headers, body)
    assert ok and reason == "ok"


def test_signature_rejects_missing_secret(fc):
    ok, reason = fc.verify_signature("", _sig_headers("x"), "x")
    assert not ok and reason == "secret_not_configured"


def test_signature_rejects_missing_headers(fc):
    ok, reason = fc.verify_signature(SECRET, {}, "x")
    assert not ok and reason == "missing_signature_headers"


def test_signature_rejects_mismatch(fc):
    body = json.dumps({"a": 1})
    ok, reason = fc.verify_signature(SECRET, _sig_headers(body, secret="other"), body)
    assert not ok and reason == "signature_mismatch"


def test_signature_rejects_stale_timestamp(fc):
    body = "x"
    old = time.time() - 3600  # 超出 ±300s 重放窗
    ok, reason = fc.verify_signature(SECRET, _sig_headers(body, ts=old), body)
    assert not ok and reason == "stale_timestamp"


def test_signature_rejects_bad_timestamp(fc):
    ok, reason = fc.verify_signature(
        SECRET, {"X-Lark-Signature": "AAA", "X-Lark-Request-Timestamp": "not-a-number",
                 "X-Lark-Request-Nonce": "n"}, "x")
    assert not ok and reason == "bad_timestamp"


def test_parse_command_variants(fc):
    assert fc.parse_command("/help a b") == ("help", ["a", "b"])
    assert fc.parse_command("HELP") == ("help", [])
    assert fc.parse_command("  ") == ("", [])
    assert fc.parse_command("/ stock 600000") == ("", ["stock", "600000"])  # 裸"/"=空指令


def test_dispatch_whitelist_only(fc):
    ok, reply = fc.dispatch("/help")
    assert ok is True and "可用指令" in reply
    ok, reply = fc.dispatch("ping")
    assert ok is True and reply.startswith("pong")
    ok, reply = fc.dispatch("rm -rf /")
    assert ok is False and "未支持" in reply
    ok, reply = fc.dispatch("")
    assert ok is False


def test_handler_exception_does_not_leak(fc, monkeypatch):
    def _boom(args):
        raise RuntimeError("internal secret detail")
    fc.COMMANDS["boom"] = {"help": "t", "handler": _boom}
    try:
        ok, reply = fc.dispatch("/boom x")
        assert ok is True and "internal secret detail" not in reply
    finally:
        fc.COMMANDS.pop("boom", None)


def test_audit_written_and_readable(fc):
    fc.audit({"chat_id": "c1", "open_id": "u1", "command": "ping",
              "allowed": True, "reason": "ok"})
    fc.audit({"chat_id": "c2", "open_id": "u2", "command": "rm",
              "allowed": False, "reason": "not_whitelisted"})
    rows = fc.audit_rows()
    assert len(rows) == 2
    assert {r["command"] for r in rows} == {"ping", "rm"}
    assert all(r["allowed"] in (0, 1) for r in rows)


def test_handle_event_disabled_is_403(fc):
    status, resp = fc.handle_event(_msg_payload("/ping"), {}, "", secret=SECRET,
                                   enabled=False)
    assert status == 403
    status, resp = fc.handle_event(_msg_payload("/ping"), {}, "", secret="",
                                   enabled=True)
    assert status == 403


def test_handle_event_bad_signature_403(fc):
    body = json.dumps(_msg_payload("/ping"))
    status, resp = fc.handle_event(_msg_payload("/ping"), {"X-Lark-Signature": "bad"},
                                   body, secret=SECRET, enabled=True)
    assert status == 403


def test_handle_event_url_verification(fc):
    payload = {"type": "url_verification", "challenge": "chk-123"}
    body = json.dumps(payload)
    status, resp = fc.handle_event(payload, _sig_headers(body), body,
                                   secret=SECRET, enabled=True)
    assert status == 200 and resp["challenge"] == "chk-123"


def test_handle_event_whitelisted_command(fc):
    payload = _msg_payload("/ping")
    body = json.dumps(payload)
    status, resp = fc.handle_event(payload, _sig_headers(body), body,
                                   secret=SECRET, enabled=True)
    assert status == 200
    assert resp["data"]["reply"].startswith("pong")
    rows = fc.audit_rows()
    assert rows and rows[0]["command"] == "ping" and rows[0]["allowed"] == 1


def test_handle_event_unknown_command_audited(fc):
    payload = _msg_payload("/hack --steal")
    body = json.dumps(payload)
    status, resp = fc.handle_event(payload, _sig_headers(body), body,
                                   secret=SECRET, enabled=True)
    assert status == 200
    assert "未支持" in resp["data"]["reply"]
    rows = fc.audit_rows()
    assert rows[0]["allowed"] == 0 and rows[0]["reason"] == "not_whitelisted"


def test_api_command_endpoint(fc, monkeypatch):
    """API 层: /feishu/command 挂真实回调逻辑, 未启用时 403"""
    from fastapi import FastAPI
    from fastapi.testclient import TestClient

    from api.v1 import feishu as feishu_api

    feishu_api.feishu_config["command_secret"] = ""
    feishu_api.feishu_config["command_enabled"] = False
    app = FastAPI()
    app.include_router(feishu_api.router)
    client = TestClient(app)
    body = json.dumps(_msg_payload("/ping"))
    r = client.post("/feishu/command", content=body.encode(),
                    headers={"Content-Type": "application/json"})
    assert r.status_code == 403
