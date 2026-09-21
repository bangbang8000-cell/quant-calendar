# -*- coding: utf-8 -*-
"""6.1.2 (B3): 自选分组管理纯函数测试"""
from watch_groups import (
    DEFAULT_GROUP, COLORS, default_groups, normalize_groups,
    move_stock, rename_group, delete_group, set_color,
)


def test_default_groups_contains_default():
    g = default_groups()
    assert len(g) == 1 and g[0]["name"] == DEFAULT_GROUP


def test_normalize_adds_default_when_missing():
    g = normalize_groups([{"name": "科技", "color": "#2563eb"}])
    assert g[0]["name"] == DEFAULT_GROUP
    assert [x["name"] for x in g] == [DEFAULT_GROUP, "科技"]


def test_normalize_fills_fields_and_order():
    g = normalize_groups([{"name": "A"}, {"name": "B", "color": "#123456"}])
    # 默认分组占首位, 原分组顺延
    assert g[2]["name"] == "B" and g[2]["sort_order"] == 1
    assert g[2]["color"] == COLORS[1]  # 非法色回退
    assert g[1]["expanded"] is True


def test_normalize_skips_empty_name():
    g = normalize_groups([{"name": "  "}, {"name": "科技"}])
    assert all(x["name"] != "" for x in g)
    assert "科技" in [x["name"] for x in g]


def test_move_stock_to_group_and_default_fallback():
    groups = normalize_groups([{"name": "科技"}])
    m = move_stock({}, "600036", "科技", groups)
    assert m["600036"] == "科技"
    m2 = move_stock(m, "600036", "不存在的组", groups)
    assert m2["600036"] == DEFAULT_GROUP


def test_rename_group_ok_and_conflict():
    groups = normalize_groups([{"name": "科技"}])
    g2, new, err = rename_group(groups, "科技", "半导体")
    assert err is None and new == "半导体"
    assert g2[1]["name"] == "半导体"
    g3, _, err2 = rename_group(groups, "科技", DEFAULT_GROUP)
    assert err2 is not None


def test_delete_group_merges_to_default():
    groups = normalize_groups([{"name": "科技"}])
    m = move_stock({}, "600036", "科技", groups)
    g2, m2, ok = delete_group(groups, m, "科技")
    assert ok is True
    assert not any(g["name"] == "科技" for g in g2)
    assert m2["600036"] == DEFAULT_GROUP


def test_delete_default_group_forbidden():
    groups = default_groups()
    _, _, ok = delete_group(groups, {}, DEFAULT_GROUP)
    assert ok is False


def test_set_color_valid_and_invalid():
    groups = normalize_groups([{"name": "科技"}])
    g2, ok = set_color(groups, "科技", "#16a34a")
    assert ok is True and g2[1]["color"] == "#16a34a"
    g3, ok2 = set_color(groups, "科技", "#invalid")
    assert ok2 is False


def test_colors_whitelist_has_eight():
    assert len(COLORS) == 8
