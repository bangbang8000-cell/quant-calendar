"""V5.4 T-5.4.3: 自定义预警规则测试 (TEST-PLAN 5.1 test_alert_rules.py)

价格突破/跌破/涨跌幅/异动(量比)/入池 命中与未命中边界 (>= 命中)。
"""
import os
import sys
import tempfile

import pytest

sys.path.insert(0, os.path.join(os.path.dirname(__file__), '..', 'backend'))

from rules_alert import (ALERT_TYPES, check_rule, validate_rule, create_alert_rule,
                         list_alert_rules, update_alert_rule, delete_alert_rule,
                         evaluate_alerts, hit_to_event)


@pytest.fixture
def adb():
    import db
    old_data, old_file = db.DATA_DIR, db.DB_FILE
    db.DATA_DIR = tempfile.mkdtemp()
    db.DB_FILE = os.path.join(db.DATA_DIR, "app.db")
    db.init_db()
    db.migrate()
    yield db
    db.DATA_DIR, db.DB_FILE = old_data, old_file


def _quote(price=10.0, pct_chg=0.0, volume=1_000_000, avg_vol=1_000_000,
           in_pool=False):
    return {"price": price, "pct_chg": pct_chg, "volume": volume,
            "avg_volume_5d": avg_vol, "in_pool": in_pool}


class TestValidate:
    def test_valid_types(self):
        for t in ALERT_TYPES:
            assert validate_rule(t, 1.0) is None

    def test_unknown_type(self):
        assert validate_rule("no_such", 1.0) is not None

    def test_negative_threshold_for_pct(self):
        assert validate_rule("pct_change", -1.0) is None  # 允许下跌预警

    def test_non_numeric_threshold(self):
        assert validate_rule("price_above", "abc") is not None


class TestCheckPrice:
    def test_price_above_hit(self):
        assert check_rule({"rule_type": "price_above", "threshold": 10.0},
                          _quote(price=10.5)) is True

    def test_price_above_boundary(self):
        assert check_rule({"rule_type": "price_above", "threshold": 10.0},
                          _quote(price=10.0)) is True

    def test_price_above_miss(self):
        assert check_rule({"rule_type": "price_above", "threshold": 10.0},
                          _quote(price=9.5)) is False

    def test_price_below_hit(self):
        assert check_rule({"rule_type": "price_below", "threshold": 10.0},
                          _quote(price=9.5)) is True

    def test_price_below_boundary(self):
        assert check_rule({"rule_type": "price_below", "threshold": 10.0},
                          _quote(price=10.0)) is True

    def test_price_below_miss(self):
        assert check_rule({"rule_type": "price_below", "threshold": 10.0},
                          _quote(price=10.5)) is False


class TestCheckPctVolume:
    def test_pct_change_hit(self):
        assert check_rule({"rule_type": "pct_change", "threshold": 5.0},
                          _quote(pct_chg=7.0)) is True

    def test_pct_change_boundary(self):
        assert check_rule({"rule_type": "pct_change", "threshold": 5.0},
                          _quote(pct_chg=5.0)) is True

    def test_pct_change_miss(self):
        assert check_rule({"rule_type": "pct_change", "threshold": 5.0},
                          _quote(pct_chg=3.0)) is False

    def test_pct_negative_threshold(self):
        assert check_rule({"rule_type": "pct_change", "threshold": -5.0},
                          _quote(pct_chg=-7.0)) is True

    def test_volume_surge_hit(self):
        assert check_rule({"rule_type": "volume_surge", "threshold": 2.0},
                          _quote(volume=2_500_000, avg_vol=1_000_000)) is True

    def test_volume_surge_boundary(self):
        assert check_rule({"rule_type": "volume_surge", "threshold": 2.0},
                          _quote(volume=2_000_000, avg_vol=1_000_000)) is True

    def test_volume_surge_miss(self):
        assert check_rule({"rule_type": "volume_surge", "threshold": 2.0},
                          _quote(volume=1_500_000, avg_vol=1_000_000)) is False

    def test_new_pool_hit(self):
        assert check_rule({"rule_type": "new_pool", "threshold": None},
                          _quote(in_pool=True)) is True

    def test_new_pool_miss(self):
        assert check_rule({"rule_type": "new_pool", "threshold": None},
                          _quote(in_pool=False)) is False


class TestCrud:
    def test_create_list(self, adb):
        r = create_alert_rule("alice", "600519.SH", "price_above", 1500.0)
        assert r["id"] and r["user"] == "alice"
        rules = list_alert_rules("alice")
        assert any(x["id"] == r["id"] for x in rules)

    def test_user_isolation(self, adb):
        create_alert_rule("alice", "600519.SH", "price_above", 1500.0)
        assert list_alert_rules("bob") == []

    def test_update_threshold(self, adb):
        r = create_alert_rule("alice", "600519.SH", "price_above", 1500.0)
        up = update_alert_rule(r["id"], threshold=1600.0)
        assert up["threshold"] == 1600.0

    def test_disable(self, adb):
        r = create_alert_rule("alice", "600519.SH", "price_above", 1500.0)
        update_alert_rule(r["id"], enabled=False)
        assert list_alert_rules("alice")[0]["enabled"] is False

    def test_delete(self, adb):
        r = create_alert_rule("alice", "600519.SH", "price_above", 1500.0)
        assert delete_alert_rule(r["id"]) is True
        assert list_alert_rules("alice") == []


class TestEvaluate:
    def test_hit_returns_event(self, adb):
        create_alert_rule("alice", "600519.SH", "price_above", 1500.0)
        hits = evaluate_alerts("alice", {"600519.SH": _quote(price=1520.0)})
        assert len(hits) == 1 and hits[0]["stock_code"] == "600519.SH"
        assert hits[0]["triggered"] is True

    def test_disabled_rule_no_hit(self, adb):
        create_alert_rule("alice", "600519.SH", "price_above", 1500.0,
                          enabled=False)
        hits = evaluate_alerts("alice", {"600519.SH": _quote(price=1520.0)})
        assert hits == []

    def test_no_quote_data_no_hit(self, adb):
        create_alert_rule("alice", "600519.SH", "price_above", 1500.0)
        assert evaluate_alerts("alice", {}) == []

    def test_hit_to_event_shape(self):
        hit = {"stock_code": "600519.SH", "rule_type": "price_above",
               "threshold": 1500.0, "triggered": True}
        ev = hit_to_event(hit)
        assert ev["type"] == "alert"
        assert "600519.SH" in ev["title"] and ev["content"]
