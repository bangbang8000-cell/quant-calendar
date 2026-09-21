# -*- coding: utf-8 -*-
"""6.1.2 (B4): 预警规则增强 — 区间规则 / 模板库 / 15 分钟合并推送"""
import pytest

from rules_alert import check_rule, validate_rule, get_alert_templates, ALERT_TYPES
from api.v1.alerts import _merge_publishable


@pytest.fixture(autouse=True)
def _clean_merge_window():
    """合并窗口为模块级状态, 每测试清空防串扰"""
    from api.v1 import alerts as alerts_mod
    alerts_mod._dedupe_merge.clear()
    yield
    alerts_mod._dedupe_merge.clear()


# ─── 区间规则 (price_range) ──────────────────

def test_price_range_hit_below_low():
    r = check_rule({"rule_type": "price_range", "threshold": "10,20"}, {"price": 9.5})
    assert r is True


def test_price_range_hit_above_high():
    r = check_rule({"rule_type": "price_range", "threshold": "10,20"}, {"price": 21})
    assert r is True


def test_price_range_no_hit_inside():
    r = check_rule({"rule_type": "price_range", "threshold": "10,20"}, {"price": 15})
    assert r is False


def test_price_range_zero_bounds_skip():
    r = check_rule({"rule_type": "price_range", "threshold": "0,0"}, {"price": 5})
    assert r is False


def test_price_range_bad_threshold():
    r = check_rule({"rule_type": "price_range", "threshold": "abc"}, {"price": 5})
    assert r is False


def test_price_range_validate():
    assert validate_rule("price_range", "10,20") is None
    assert validate_rule("price_range", "10") is not None
    assert validate_rule("price_range", "a,b") is not None


def test_price_range_in_alert_types():
    assert "price_range" in ALERT_TYPES


# ─── 模板库 ─────────────────────────────────

def test_templates_have_six_and_fields():
    ts = get_alert_templates()
    assert len(ts) == 6
    for t in ts:
        assert t["key"] and t["label"] and t["rule_type"] and t["description"]


def test_templates_cover_common_scenarios():
    ts = get_alert_templates()
    keys = {t["key"] for t in ts}
    assert {"new_high_break", "volume_surge_up", "sharp_drop", "pool_in", "position_stop", "ladder_open"} <= keys


def test_templates_are_copies():
    ts = get_alert_templates()
    ts[0]["label"] = "hacked"
    assert get_alert_templates()[0]["label"] != "hacked"


# ─── 合并推送 (15min 窗口) ──────────────────

def test_merge_same_code_within_window():
    assert _merge_publishable("u1", "600036") is True
    assert _merge_publishable("u1", "600036") is False  # 15min 内再次命中 → 合并


def test_merge_different_code_ok():
    assert _merge_publishable("u1", "600036") is True
    assert _merge_publishable("u1", "000001") is True


def test_merge_different_user_ok():
    assert _merge_publishable("u1", "600036") is True
    assert _merge_publishable("u2", "600036") is True
