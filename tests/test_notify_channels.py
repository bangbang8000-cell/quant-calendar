"""V5.0.4 T-5.0.41: 通知通道抽象测试 (TEST-PLAN 5.1 test_notify_channels.py)

- 各通道适配器 (FakeChannel 验证 send 契约) + 失败重试/去重
- 一个事件多通道投递 + 单通道故障不影响其他通道 (TEST-PLAN 5.2)
"""
import pytest

import notify
from notify import (Channel, FakeChannel, FeishuChannel, WebhookChannel,
                    EmailChannel, get_channel, send_notification,
                    dispatch_to_all, NotifyError, build_channel)


class TestChannelContract:
    def test_base_channel_raises(self):
        with pytest.raises(NotImplementedError):
            Channel().send("u", "t", "c")

    def test_fake_channel_records_send(self):
        ch = FakeChannel()
        ok = ch.send("alice", "标题", "内容")
        assert ok is True
        assert ch.sent == [("alice", "标题", "内容")]

    def test_fake_channel_name(self):
        assert FakeChannel().name == "fake"

    def test_get_channel_fake(self):
        ch = get_channel("fake", {})
        assert isinstance(ch, FakeChannel)

    def test_get_channel_unknown_raises(self):
        with pytest.raises(ValueError):
            get_channel("no_such_channel", {})

    def test_build_channel_fake(self):
        assert isinstance(build_channel("fake", {}), FakeChannel)


class TestRetry:
    def test_ok_first_try(self):
        ch = FakeChannel()
        r = send_notification(ch, "a", "t", "c")
        assert r["ok"] is True and r["attempts"] == 1

    def test_retry_succeeds(self):
        ch = FakeChannel(fail_first=2)
        r = send_notification(ch, "a", "t", "c", retries=3, base_delay=0.0)
        assert r["ok"] is True and r["attempts"] == 3

    def test_retry_exhaustion(self):
        ch = FakeChannel(fail_first=99)
        r = send_notification(ch, "a", "t", "c", retries=3, base_delay=0.0)
        assert r["ok"] is False and r["attempts"] == 3
        assert r.get("error")

    def test_no_retry_option(self):
        ch = FakeChannel(fail_first=99)
        r = send_notification(ch, "a", "t", "c", retries=1, base_delay=0.0)
        assert r["attempts"] == 1

    def test_backoff_increases(self):
        ch = FakeChannel(fail_first=3)
        sleeps = []
        orig = notify.time.sleep
        notify.time.sleep = lambda s: sleeps.append(s)
        try:
            send_notification(ch, "a", "t", "c", retries=3, base_delay=0.5)
        finally:
            notify.time.sleep = orig
        # 1x, 2x base_delay
        assert sleeps and sleeps[0] == pytest.approx(0.5, abs=1e-6)


class TestDispatch:
    def test_multiple_channels(self):
        c1, c2 = FakeChannel(), FakeChannel()
        results = dispatch_to_all([c1, c2], ["alice"], "t", "c")
        assert len(results) == 2 and all(r["ok"] for r in results)
        assert len(c1.sent) == 1 and len(c2.sent) == 1

    def test_one_failure_does_not_stop_others(self):
        c1 = FakeChannel(fail_first=99)
        c2 = FakeChannel()
        results = dispatch_to_all([c1, c2], ["alice"], "t", "c", retries=2, base_delay=0.0)
        assert results[0]["ok"] is False  # c1 失败
        assert results[1]["ok"] is True   # c2 不受影响
        assert len(c2.sent) == 1

    def test_multiple_recipients(self):
        ch = FakeChannel()
        dispatch_to_all([ch], ["a", "b"], "t", "c")
        assert len(ch.sent) == 2

    def test_channel_name_in_result(self):
        ch = FakeChannel()
        r = send_notification(ch, "a", "t", "c")
        assert r["channel"] == "fake"


class TestWebhookChannel:
    def test_posts_json(self):
        posted = {}
        def _post(url, data, headers=None, timeout=None):
            posted["url"] = url
            posted["data"] = data
            return {"status": 200}
        ch = WebhookChannel("http://hook.test/x", http_post=_post)
        assert ch.send("alice", "标题", "内容") is True
        assert posted["url"] == "http://hook.test/x"
        import json
        body = json.loads(posted["data"])
        assert body["recipient"] == "alice" and body["title"] == "标题"

    def test_post_failure_raises(self):
        def _post(url, data, headers=None, timeout=None):
            raise RuntimeError("boom")
        ch = WebhookChannel("http://hook.test/x", http_post=_post)
        with pytest.raises(NotifyError):
            ch.send("a", "t", "c")

    def test_webhook_retry_via_send_notification(self):
        calls = {"n": 0}
        def _post(url, data, headers=None, timeout=None):
            calls["n"] += 1
            if calls["n"] < 3:
                raise RuntimeError("fail")
            return {"status": 200}
        ch = WebhookChannel("http://hook.test/x", http_post=_post)
        r = send_notification(ch, "a", "t", "c", retries=3, base_delay=0.0)
        assert r["ok"] is True and r["attempts"] == 3


class TestEmailChannel:
    def test_sends_via_injected_smtp(self):
        import email
        sent = {}
        def _smtp_send(server, from_addr, to_addr, msg):
            sent["from"] = from_addr; sent["to"] = to_addr; sent["msg"] = msg
            return True
        ch = EmailChannel("smtp.test", 587, "user", "pw", "sender@x.com",
                          smtp_send=_smtp_send)
        assert ch.send("alice@x.com", "标题", "内容") is True
        assert sent["to"] == "alice@x.com"
        parsed = email.message_from_string(sent["msg"])
        assert parsed["To"] == "alice@x.com"
        payload = parsed.get_payload(decode=True).decode("utf-8", "replace")
        assert "标题" in payload and "内容" in payload

    def test_email_failure_raises(self):
        def _smtp_send(*a, **k):
            raise OSError("smtp down")
        ch = EmailChannel("smtp.test", 587, "u", "p", "s@x.com", smtp_send=_smtp_send)
        with pytest.raises(NotifyError):
            ch.send("a@x.com", "t", "c")


class TestFeishuChannel:
    def test_sends_via_pusher(self):
        called = {}
        class _Pusher:
            def __init__(self, webhook): called["webhook"] = webhook
            def send_text(self, text):
                called["text"] = text
                return True
        import feishu_push
        orig = feishu_push.FeishuPusher
        feishu_push.FeishuPusher = _Pusher
        try:
            ch = FeishuChannel("http://feishu/hook")
            assert ch.send("", "标题", "内容") is True
            assert called["webhook"] == "http://feishu/hook"
            assert "标题" in called["text"] and "内容" in called["text"]
        finally:
            feishu_push.FeishuPusher = orig

    def test_feishu_failure_raises(self):
        import feishu_push
        class _Bad:
            def __init__(self, w): pass
            def send_text(self, text): return False
        orig = feishu_push.FeishuPusher
        feishu_push.FeishuPusher = _Bad
        try:
            ch = FeishuChannel("http://feishu/hook")
            with pytest.raises(NotifyError):
                ch.send("", "t", "c")
        finally:
            feishu_push.FeishuPusher = orig
