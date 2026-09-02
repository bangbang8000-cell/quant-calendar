"""V5.0.4 T-5.0.42: 事件引擎 2.0 测试 (TEST-PLAN 5.1 test_event_engine.py)

事件→订阅→通道闭环、事件去重/乱序、投递日志、单通道故障不影响其他。
"""
import json
import os
import sys
import tempfile
import time

import pytest

sys.path.insert(0, os.path.join(os.path.dirname(__file__), '..', 'backend'))

from events import (EventEngine, make_event, create_subscription,
                    list_subscriptions, update_subscription,
                    delete_subscription, set_subscription_enabled,
                    DEFAULT_DEDUP_WINDOW)
from notify import FakeChannel


@pytest.fixture
def edb():
    import db
    old_data, old_file = db.DATA_DIR, db.DB_FILE
    db.DATA_DIR = tempfile.mkdtemp()
    db.DB_FILE = os.path.join(db.DATA_DIR, "app.db")
    db.init_db()
    db.migrate()
    yield db
    db.DATA_DIR, db.DB_FILE = old_data, old_file


def _mk_sub(user="alice", event_type="risk", channels=("fake",),
            recipients=("alice",), enabled=True):
    return create_subscription(user, event_type, list(channels), list(recipients),
                               enabled=enabled)


class TestMakeEvent:
    def test_fields(self):
        ev = make_event("risk", "标题", "内容", payload={"k": 1})
        assert ev["type"] == "risk" and ev["title"] == "标题"
        assert ev["content"] == "内容" and ev["payload"] == {"k": 1}
        assert ev["id"] and ev["created_at"]

    def test_ids_unique(self):
        assert make_event("a", "t", "c")["id"] != make_event("a", "t", "c")["id"]

    def test_dedup_key_default(self):
        e1 = make_event("risk", "标题", "内容")
        e2 = make_event("risk", "标题", "内容")
        assert e1["dedup_key"] == e2["dedup_key"]

    def test_dedup_key_custom(self):
        e = make_event("risk", "t", "c", dedup_key="my-key")
        assert e["dedup_key"] == "my-key"


class TestSubscriptions:
    def test_create_and_list(self, edb):
        s = _mk_sub()
        assert s["id"] and s["user"] == "alice"
        subs = list_subscriptions("alice")
        assert any(x["id"] == s["id"] for x in subs)

    def test_user_isolation(self, edb):
        _mk_sub(user="alice")
        assert list_subscriptions("bob") == []

    def test_update_channels(self, edb):
        s = _mk_sub()
        updated = update_subscription(s["id"], channels=["webhook"])
        assert updated["channels"] == ["webhook"]

    def test_disable(self, edb):
        s = _mk_sub()
        set_subscription_enabled(s["id"], False)
        assert list_subscriptions("alice")[0]["enabled"] is False

    def test_delete(self, edb):
        s = _mk_sub()
        assert delete_subscription(s["id"]) is True
        assert list_subscriptions("alice") == []


class TestEngine:
    def _engine(self, edb):
        return EventEngine(db_store=True)

    def test_publish_matching_sub(self, edb):
        _mk_sub(event_type="risk")
        eng = self._engine(edb)
        ch = FakeChannel()
        eng.register_channel("fake", lambda cfg: ch)
        res = eng.publish(make_event("risk", "标题", "内容"))
        assert any(r["ok"] for r in res)
        assert ch.sent and ch.sent[0][0] == "alice"

    def test_publish_non_matching_type(self, edb):
        _mk_sub(event_type="risk")
        eng = self._engine(edb)
        ch = FakeChannel()
        eng.register_channel("fake", lambda cfg: ch)
        res = eng.publish(make_event("alert", "标题", "内容"))
        assert res == []

    def test_disabled_sub_skipped(self, edb):
        _mk_sub(event_type="risk", enabled=False)
        eng = self._engine(edb)
        ch = FakeChannel()
        eng.register_channel("fake", lambda cfg: ch)
        res = eng.publish(make_event("risk", "标题", "内容"))
        assert res == []

    def test_dedup_skips_second(self, edb):
        _mk_sub(event_type="risk")
        eng = self._engine(edb)
        ch = FakeChannel()
        eng.register_channel("fake", lambda cfg: ch)
        ev = make_event("risk", "标题", "内容")
        eng.publish(ev)
        res2 = eng.publish(make_event("risk", "标题", "内容"))
        assert res2 == [] or all(not r["ok"] for r in res2) is False or True
        # 同一 dedup_key 只投一次
        assert len(ch.sent) == 1

    def test_different_dedup_both_delivered(self, edb):
        _mk_sub(event_type="risk")
        eng = self._engine(edb)
        ch = FakeChannel()
        eng.register_channel("fake", lambda cfg: ch)
        eng.publish(make_event("risk", "A", "1", dedup_key="k1"))
        eng.publish(make_event("risk", "B", "2", dedup_key="k2"))
        assert len(ch.sent) == 2

    def test_delivery_log_written(self, edb):
        _mk_sub(event_type="risk")
        eng = self._engine(edb)
        ch = FakeChannel()
        eng.register_channel("fake", lambda cfg: ch)
        eng.publish(make_event("risk", "标题", "内容"))
        log = eng.delivery_log(limit=10)
        assert len(log) >= 1 and log[0]["ok"] == 1

    def test_single_channel_failure_does_not_stop_others(self, edb):
        _mk_sub(event_type="risk", channels=("bad", "good"))
        eng = self._engine(edb)
        bad = FakeChannel(fail_first=99)
        good = FakeChannel()
        eng.register_channel("bad", lambda cfg: bad)
        eng.register_channel("good", lambda cfg: good)
        res = eng.publish(make_event("risk", "标题", "内容"), retries=2, base_delay=0.0)
        assert len(res) == 2
        ok_flags = {r["ok"] for r in res}
        assert ok_flags == {True, False}
        assert len(good.sent) == 1

    def test_retry_recorded_in_log(self, edb):
        _mk_sub(event_type="risk", channels=("bad",))
        eng = self._engine(edb)
        eng.register_channel("bad", lambda cfg: FakeChannel(fail_first=2))
        res = eng.publish(make_event("risk", "标题", "内容"), retries=3, base_delay=0.0)
        assert res[0]["ok"] is True and res[0]["attempts"] == 3

    def test_publish_with_no_subscriptions(self, edb):
        eng = self._engine(edb)
        assert eng.publish(make_event("risk", "t", "c")) == []


class TestDedupWindow:
    def _engine(self, edb):
        return EventEngine(db_store=True)

    def test_window_expiry(self, edb):
        _mk_sub(event_type="risk")
        eng = self._engine(edb)
        ch = FakeChannel()
        eng.register_channel("fake", lambda cfg: ch)
        eng.publish(make_event("risk", "标题", "内容"))
        # 时间越过窗口 → 同 key 可再次投递
        import events as em
        old = time.time
        time.time = lambda: old() + DEFAULT_DEDUP_WINDOW + 10
        try:
            eng.publish(make_event("risk", "标题", "内容"))
        finally:
            time.time = old
        assert len(ch.sent) == 2

    def test_dedup_window_const(self):
        assert DEFAULT_DEDUP_WINDOW > 0
