# -*- coding: utf-8 -*-
"""v7.26 (FR-14) 主题色收敛门禁 — 由 6.2.1 的 9 色扩展收敛回 6 档

主题色只剩 金45/蓝220/红0/绿140/紫270/青180; 粉320/橙25/靛蓝250/中性-1 不再作为可选项,
但 themes.js 的 LEGACY_MAP / legacyThemes 仍保留旧主题只读迁移映射 (不做可选面板)。
"""
import os
import re

BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
FRONTEND = os.path.join(BASE, "frontend")

import page_source


def _read(rel):
    _b = page_source.bundle(rel)
    if _b is not None:
        return _b
    with open(os.path.join(FRONTEND, rel), encoding="utf-8") as f:
        return f.read()


def _theme_hues():
    src = _read("js/app-logic.js")
    m = re.search(r"const themeHues\s*=\s*\[([^\]]*)\]", src)
    assert m, "app-logic.js 应定义 themeHues"
    return [int(x.strip()) for x in m.group(1).split(",") if x.strip()]


def test_palette_is_exactly_six_presets():
    """主题色收敛为 6 档: 金/蓝/红/绿/紫/青"""
    assert _theme_hues() == [45, 220, 0, 140, 270, 180]


def test_removed_hues_absent():
    """粉色/橙色/靛蓝/中性不得再出现在预设与名称映射中"""
    hues = _theme_hues()
    for h in (320, 25, 250, -1):
        assert h not in hues, f"色相 {h} 应已移除"
    src = _read("js/app-logic.js")
    m = re.search(r"const themeHueNames\s*=\s*\{([^}]*)\}", src)
    assert m, "应定义 themeHueNames"
    for name in ("粉色", "橙色", "靛蓝", "中性"):
        assert name not in m.group(1), f"名称映射不应再含 {name}"


def test_every_hue_has_name():
    """6 档预设均有名称映射 (面板不出现「自定义」空档)"""
    src = _read("js/app-logic.js")
    m = re.search(r"const themeHueNames\s*=\s*\{([^}]*)\}", src)
    assert m, "应定义 themeHueNames"
    names_block = m.group(1)
    for h in _theme_hues():
        assert re.search(r"(?:['\"]?" + str(h) + r"['\"]?)\s*:", names_block), f"色相 {h} 缺名称映射"


def test_themes_js_hues_synced():
    """themes.js HUES 与面板预设一致 (6 档)"""
    src = _read("js/themes.js")
    m = re.search(r"const HUES\s*=\s*\[([^\]]*)\]", src)
    assert m, "themes.js 应定义 HUES"
    hues = [int(x.strip()) for x in m.group(1).split(",") if x.strip()]
    assert hues == [45, 220, 0, 140, 270, 180]


def test_market_semantics_unchanged():
    """主题色收敛不触碰市场语义 (红涨绿跌固定) — tokens 中 --market-* 仍存在"""
    tokens = _read("css/tokens.css")
    assert "--market-up-fill" in tokens and "--market-down-fill" in tokens
