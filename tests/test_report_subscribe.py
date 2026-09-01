"""V5.5 T-5.5.3: 报表订阅测试 (TEST-PLAN 6.1 test_report_subscribe.py)

定时生成 + 通知中心投递闭环 (mock providers/channels)。
"""
import os
import sys
import tempfile

import pytest

sys.path.insert(0, os.path.join(os.path.dirname(__file__), '..', 'backend'))

from report_subscribe import (create_report_subscription,
                              list_report_subscriptions,
                              delete_report_subscription,
                              set_subscription_enabled,
                              generate_and_dispatch, run_due_subscriptions,
                              is_due, DEFAULT_BLOCKS)


@pytest.fixture
def sdb():
    import db
    old_data, old_file = db.DATA_DIR, db.DB_FILE
    db.DATA_DIR = tempfile.mkdtemp()
    db.DB_FILE = os.path.join(db.DATA_DIR, "app.db")
    db.init_db()
    db.migrate()
    yield db
    db.DATA_DIR, db.DB_FILE = old_data, old_file


class _FakeCh:
    def __init__(self):
        self.sent = []

    def send(self, recipient, title, content):
        self.sent.append((recipient, title, content))
        return True


def _providers():
    return {"period": lambda date: {"date": date, "trading_days": 5,
                                    "strategies": 1, "stocks": 2},
            "strategy": lambda date: {"strategies": [
                {"name": "A", "stocks": ["600519.SH"]}]}}


class TestCrud:
    def test_create_list(self, sdb):
        s = create_report_subscription("alice", "daily", ["period"],
                                       ["fake"], ["alice"])
        assert s["id"] and s["user"] == "alice"
        subs = list_report_subscriptions("alice")
        assert any(x["id"] == s["id"] for x in subs)

    def test_user_isolation(self, sdb):
        create_report_subscription("alice", "daily", ["period"], ["fake"], ["alice"])
        assert list_report_subscriptions("bob") == []

    def test_default_blocks(self, sdb):
        s = create_report_subscription("alice", "daily", None, ["fake"], ["alice"])
        assert s["blocks"] == list(DEFAULT_BLOCKS)

    def test_delete(self, sdb):
        s = create_report_subscription("alice", "daily", ["period"], ["fake"], ["alice"])
        assert delete_report_subscription(s["id"]) is True
        assert list_report_subscriptions("alice") == []

    def test_set_enabled(self, sdb):
        s = create_report_subscription("alice", "daily", ["period"], ["fake"], ["alice"])
        set_subscription_enabled(s["id"], False)
        assert list_report_subscriptions("alice")[0]["enabled"] is False

    def test_invalid_schedule(self, sdb):
        with pytest.raises(ValueError):
            create_report_subscription("alice", "hourly", ["period"], ["fake"], ["alice"])


class TestDue:
    def test_daily_due_every_day(self):
        assert is_due("daily", "2026-01-05") is True
        assert is_due("daily", "2026-01-06") is True

    def test_weekly_due_on_monday(self):
        # 2026-01-05 是周一
        assert is_due("weekly", "2026-01-05") is True
        # 2026-01-06 是周二 → 不应期
        assert is_due("weekly", "2026-01-06") is False

    def test_unknown_schedule_false(self):
        assert is_due("hourly", "2026-01-05") is False


class TestDispatch:
    def test_generate_and_dispatch(self, sdb):
        s = create_report_subscription("alice", "daily", ["period", "strategy"],
                                       ["fake"], ["alice"])
        ch = _FakeCh()
        r = generate_and_dispatch(s, date="2026-01-05", providers=_providers(),
                                  channel_factory=lambda name: ch)
        assert r["dispatched"] == 1
        assert ch.sent and ch.sent[0][0] == "alice"
        assert "600519.SH" in ch.sent[0][2]

    def test_disabled_sub_skipped(self, sdb):
        s = create_report_subscription("alice", "daily", ["period"],
                                       ["fake"], ["alice"], enabled=False)
        r = generate_and_dispatch(s, date="2026-01-05", providers=_providers(),
                                  channel_factory=lambda name: _FakeCh())
        assert r["dispatched"] == 0

    def test_idempotent_same_day(self, sdb):
        s = create_report_subscription("alice", "daily", ["period"],
                                       ["fake"], ["alice"])
        ch = _FakeCh()
        generate_and_dispatch(s, date="2026-01-05", providers=_providers(),
                              channel_factory=lambda name: ch)
        # 同一天二次调用 → 不重复投递
        r2 = generate_and_dispatch(s, date="2026-01-05", providers=_providers(),
                                   channel_factory=lambda name: ch)
        assert r2["dispatched"] == 0
        assert len(ch.sent) == 1


class TestRunDue:
    def test_run_due_dispatches_daily(self, sdb):
        create_report_subscription("alice", "daily", ["period"],
                                   ["fake"], ["alice"])
        ch = _FakeCh()
        r = run_due_subscriptions("2026-01-05", providers=_providers(),
                                  channel_factory=lambda name: ch)
        assert r["dispatched"] >= 1

    def test_run_due_skips_not_due_weekly(self, sdb):
        create_report_subscription("alice", "weekly", ["period"],
                                   ["fake"], ["alice"])
        r = run_due_subscriptions("2026-01-06", providers=_providers(),
                                  channel_factory=lambda name: _FakeCh())
        assert r["dispatched"] == 0

    def test_run_due_respects_last_run(self, sdb):
        create_report_subscription("alice", "daily", ["period"],
                                   ["fake"], ["alice"])
        ch = _FakeCh()
        run_due_subscriptions("2026-01-05", providers=_providers(),
                              channel_factory=lambda name: ch)
        r2 = run_due_subscriptions("2026-01-05", providers=_providers(),
                                   channel_factory=lambda name: ch)
        assert r2["dispatched"] == 0
