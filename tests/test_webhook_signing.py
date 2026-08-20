# -*- coding: utf-8 -*-
"""V4.0 M4-1: Webhook HMAC 签名校验"""
import os
import sys

sys.path.insert(0, os.path.join(os.path.dirname(__file__), '..', 'backend'))

import hashlib
import hmac
import json


def test_sign_webhook_payload():
    """签名 = HMAC-SHA256(secret, body) → 'sha256=<hex>'"""
    from webhook import sign_webhook_payload
    body = b'{"event":"review_ready"}'
    sig = sign_webhook_payload("my-secret", body)
    expect = "sha256=" + hmac.new(b"my-secret", body, hashlib.sha256).hexdigest()
    assert sig == expect
    assert sign_webhook_payload("", body) == ""


def test_dispatch_sends_signature_header():
    """dispatch 投递时带 X-Signature(基于订阅 secret)"""
    import webhook
    captured = {}

    def _fake_poster(url, payload, secret=""):
        body = json.dumps(payload, ensure_ascii=False).encode("utf-8")
        captured["url"] = url
        captured["sig"] = webhook.sign_webhook_payload(secret, body)
        captured["secret"] = secret
        return True

    sub_id = webhook.add_subscription(
        "https://example.com/hook", ["review_ready"], secret="sub-secret-123")
    try:
        webhook.dispatch("review_ready", {"date": "2026-08-20"}, poster=_fake_poster)
        assert captured["url"] == "https://example.com/hook"
        assert captured["secret"] == "sub-secret-123"
        assert captured["sig"].startswith("sha256="), captured["sig"]
    finally:
        webhook.delete_subscription(sub_id)


def test_add_subscription_generates_secret():
    """未提供 secret 时自动生成"""
    import webhook
    sub_id = webhook.add_subscription("https://example.com/hook2", ["evaluate_done"])
    try:
        subs = {s["id"]: s for s in webhook.list_subscriptions()}
        assert subs[sub_id]["secret"], "应自动生成 secret"
    finally:
        webhook.delete_subscription(sub_id)
