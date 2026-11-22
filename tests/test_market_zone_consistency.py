# -*- coding: utf-8 -*-
"""
指数/个股展示区配色一致性契约 (大盘行情页 "指数卡 + 指数详情统计格")

背景: 7.13 视觉改造把主程序面层收敛到 --qc-* 新 token, 但市场行情区
仍引用一批未随之更新的 v5 旧变量 (--border-light / --primary-text /
--color-up / rgba(var(--primary-rgb),0.08)), 造成同屏 "两套色":
  - 指数卡描边 1.26:1 (主程序 2.12:1) → 卡片边界几乎不可见
  - 详情统计格金色 8% 染色 → 偏黄块, 与主程序中性面层脱节
  - 涨跌幅 "涨" 用金色 --primary-text → 违反项目 "红涨绿跌" 契约
  - hover 投影用 --color-up (#e63946) → 与主程序 --color-rise (#c62828) 不一致

本门禁全部在旧实现上先跑红, 修复后跑绿。
"""
import os
import re

CSS = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), "frontend", "css")

_FEATURES = os.path.join(CSS, "themes-features.css")
_MARKET = os.path.join(CSS, "themes-market.css")
_LAYOUT = os.path.join(CSS, "layout.css")


def _read(p):
    with open(p, encoding="utf-8") as f:
        return f.read()


def _rule(src, selector):
    """取某选择器的单条规则体 (含选择器行到下一个 '}' )."""
    i = src.find(selector)
    assert i >= 0, "找不到选择器 %s" % selector
    j = src.find("}", i)
    return src[i:j + 1]


def test_m1_index_card_border_uses_main_token():
    """M1: 指数卡容器描边走主程序 --qc-border, 不再用偏浅的 --border-light。"""
    rule = _rule(_read(_FEATURES), ".market-card {")
    assert "border: 1px solid var(--qc-border)" in rule, \
        "指数卡描边应收敛到 --qc-border (2.12:1), 现状: %s" % rule.strip()


def test_m2_vertical_index_card_border_uses_main_token():
    """M2: 双栏竖排指数卡描边同样走 --qc-border。"""
    rule = _rule(_read(_LAYOUT), ".market-grid.is-vertical .market-card {")
    assert "var(--border-light)" not in rule, \
        "竖排指数卡仍用 --border-light: %s" % rule.strip()


def test_m3_stat_box_neutral_surface():
    """M3: 指数详情统计格用中性面层, 不再用 primary-rgb 染色导致的黄块。"""
    rule = _rule(_read(_MARKET), ".stat-box {")
    assert "rgba(var(--primary-rgb)" not in rule, \
        "统计格仍用品牌色染色 (偏黄): %s" % rule.strip()
    assert "var(--bg-card-header)" in rule, \
        "统计格应收敛到中性面层 --bg-card-header: %s" % rule.strip()


def test_m4_up_color_is_rise_not_gold():
    """M4: 指数卡 '涨' 用 --color-rise (红涨绿跌契约), '跌' 用 --color-fall。"""
    src = _read(_FEATURES)
    up = _rule(src, ".market-chg.up")
    down = _rule(src, ".market-chg.down")
    assert "--primary-text" not in up, "涨色仍用金色 --primary-text: %s" % up.strip()
    assert "var(--color-rise)" in up, "涨色应为 --color-rise: %s" % up.strip()
    assert "var(--color-fall)" in down, "跌色应为 --color-fall: %s" % down.strip()


def test_m5_index_card_hover_shadow_uses_rise():
    """M5: 指数卡 hover 投影走 --color-rise, 与涨跌语义色同源。"""
    rule = _rule(_read(_FEATURES), ".market-card:hover")
    assert "var(--color-rise)" in rule and "var(--color-up)" not in rule, \
        "hover 投影应走 --color-rise: %s" % rule.strip()


def test_m6_updown_color_bar_semantic():
    """M6: 指数卡涨跌左色条用 --color-rise/--color-fall 语义对。"""
    src = _read(_FEATURES)
    up = _rule(src, ".market-card.up")
    down = _rule(src, ".market-card.down")
    assert "var(--color-rise)" in up, "上涨左色条应为 --color-rise: %s" % up.strip()
    assert "var(--color-fall)" in down, "下跌左色条应为 --color-fall: %s" % down.strip()
