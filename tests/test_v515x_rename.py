# -*- coding: utf-8 -*-
"""V5.15 (PRD-v5.15 F8): 「功能配置」→「基础配置」更名契约测试。

覆盖 TC-5.15.41~.43:
- 三语文案 (zh-CN/zh-TW/en) 同步
- 导航标签/子页名映射更新
- 非 dist 源码无「功能配置」残留
"""
import os

BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
FRONTEND = os.path.join(BASE, "frontend")


def _read_f(rel):
    p = os.path.join(FRONTEND, *rel.split("/"))
    with open(p, encoding="utf-8") as f:
        return f.read()


def test_zh_cn_renamed():
    """TC-5.15.41a: zh-CN sub.feature = 基础配置"""
    src = _read_f("js/locales/zh-CN.js")
    assert "'sub.feature': '基础配置'" in src, "zh-CN 应更名为基础配置"


def test_zh_tw_renamed():
    """TC-5.15.41b: zh-TW sub.feature = 基礎配置"""
    src = _read_f("js/locales/zh-TW.js")
    assert "'sub.feature': '基礎配置'" in src, "zh-TW 应更名為基礎配置"


def test_en_renamed():
    """TC-5.15.41c: en sub.feature = Basic"""
    src = _read_f("js/locales/en.js")
    assert "'sub.feature': 'Basic'" in src, "en 应更名 Basic"


def test_subpage_names_map():
    """TC-5.15.42: app-logic subPageNames 映射 feature → 基础配置"""
    src = _read_f("js/app-logic.js")
    assert "'feature': '基础配置'" in src, "subPageNames 映射应为基础配置"


def test_subnav_label():
    """TC-5.15.43: SubNav label = 基础配置"""
    src = _read_f("src/components/SubNav.vue")
    assert "label: '基础配置'" in src, "SubNav 二级菜单标签应为基础配置"


def test_no_feature_config_leftover():
    """TC-5.15.44: 非 dist 前端源码无「功能配置」残留"""
    targets = [
        "js/locales/zh-CN.js",
        "js/locales/zh-TW.js",
        "js/app-logic.js",
        "src/components/SubNav.vue",
    ]
    for rel in targets:
        src = _read_f(rel)
        assert "功能配置" not in src, f"{rel} 不应残留「功能配置」"
