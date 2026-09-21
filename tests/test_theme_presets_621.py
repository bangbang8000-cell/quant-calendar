# -*- coding: utf-8 -*-
"""6.2.1 (F11): 主题色扩展门禁 — 新增 青(180)/橙(25)/靛(250) 预设

方案: 色相机制任意 0-359, 求解器自动保证对比度; 仅需同步 app-logic themeHues/
themeHueNames 两数组 + themes.js HUES (一致性), 面板 swatch 由 hueColor 自动渲染。
"""
import os
import re

BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
FRONTEND = os.path.join(BASE, "frontend")


def _read(rel):
    with open(os.path.join(FRONTEND, rel), encoding="utf-8") as f:
        return f.read()


def _theme_hues():
    src = _read("js/app-logic.js")
    m = re.search(r"const themeHues\s*=\s*\[([^\]]*)\]", src)
    assert m, "app-logic.js 应定义 themeHues"
    return [int(x.strip()) for x in m.group(1).split(",") if x.strip()]


def test_new_hues_present_in_palette():
    """themeHues 应含新预设 180/25/250"""
    hues = _theme_hues()
    for h in (180, 25, 250):
        assert h in hues, f"themeHues 应含 {h} (青/橙/靛)"


def test_new_hues_have_names():
    """themeHueNames 应为新预设提供中文名称映射"""
    src = _read("js/app-logic.js")
    assert re.search(r"(?:['\"]?180['\"]?)\s*:\s*'青色'", src), "180 应映射为 青色"
    assert re.search(r"(?:['\"]?25['\"]?)\s*:\s*'橙色'", src), "25 应映射为 橙色"
    assert re.search(r"(?:['\"]?250['\"]?)\s*:\s*'靛蓝'", src), "250 应映射为 靛蓝"


def test_every_hue_has_name():
    """每个非中性预设均有名称映射 (面板不出现「自定义」空档)"""
    src = _read("js/app-logic.js")
    m = re.search(r"const themeHueNames\s*=\s*\{([^}]*)\}", src)
    assert m, "应定义 themeHueNames"
    names_block = m.group(1)
    for h in _theme_hues():
        if h == -1:
            continue
        assert re.search(r"(?:['\"]?" + str(h) + r"['\"]?)\s*:", names_block), f"色相 {h} 缺名称映射"


def test_themes_js_hues_synced():
    """themes.js HUES 预设应含新色 (与面板一致)"""
    src = _read("js/themes.js")
    m = re.search(r"const HUES\s*=\s*\[([^\]]*)\]", src)
    assert m, "themes.js 应定义 HUES"
    hues = [int(x.strip()) for x in m.group(1).split(",") if x.strip()]
    for h in (180, 25, 250):
        assert h in hues, f"themes.js HUES 应含 {h}"


def test_market_semantics_unchanged():
    """主题色扩展不触碰市场语义 (红涨绿跌固定) — tokens 中 --market-* 仍存在"""
    tokens = _read("css/tokens.css")
    assert "--market-up-fill" in tokens and "--market-down-fill" in tokens
