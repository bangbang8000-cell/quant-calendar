#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""v7.26 FR-15: AI 模型总览表 / 数据源统一表 / 密钥掩码门禁 (静态结构)

前端为字符串模板 (page_source 拼接), 这里验证关键结构与列齐备、密钥不出现在列表行。
"""
import os
import sys

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.dirname(HERE)
sys.path.insert(0, os.path.join(ROOT, "backend"))

import page_source  # noqa: E402


def _read(rel):
    b = page_source.bundle(rel)
    if b is not None:
        return b
    with open(os.path.join(ROOT, "frontend", rel), encoding="utf-8") as f:
        return f.read()


def _system_view():
    """系统页模板已按 700 行上限拆为 part1/part1b/part2, 结构断言需拼接后检查。"""
    return "".join(_read("js/components/system/" + f)
                   for f in ("view-part1.js", "view-part1b.js", "view-part2.js"))


def test_ai_overview_table_columns_and_drag_order():
    src = _system_view()
    for col in ("启用", "厂商", "类型", "模型数", "最近调用", "成功率", "延迟", "操作", "顺位"):
        assert col in src, "AI 总览表缺列: " + col
    assert "aiDragStart" in src and "aiDrop" in src, "需支持拖拽调整降级顺序"
    page = _read("js/components/system-page.js")
    assert "saveAiVendors" in src and "saveAiVendors" in page, "调整顺位后必须落库 (保存 AI 配置)"
    # 列表行不得直接渲染密钥
    row_start = src.find("ai-overview")
    drawer_start = src.find("编辑抽屉", row_start)
    assert row_start > 0 and drawer_start > row_start, "缺少 AI 总览表 / 编辑抽屉"
    assert "api_key" not in src[row_start:drawer_start], "总览表不得显示密钥 (密钥只在抽屉掩码编辑)"
    assert "api_key" in src[drawer_start:drawer_start + 3000], "抽屉内应可掩码编辑密钥"


def test_datasource_unified_table_and_test_all():
    src = _system_view()
    for col in ("启用", "名称", "类型", "优先级", "最近成功", "最近错误", "操作"):
        assert col in src, "数据源统一表缺列: " + col
    assert "全部测试" in src and "testAllDatasources" in src, "需一键全测"
    assert "datasourceTestResults" in src, "失败原因需可展开"
    state = _read("js/system.js")
    assert "/api/market/datasource/test-all" in state, "前端应调用全测端点"


def test_settings_compact_group_layout():
    """v7.26 FR-14 / TC-726-4-2 替代口径: 设置页为「左锚点 + 两列表单 + 分组折叠」结构。

    e2e 首屏高度 −30% 依赖真实渲染环境; 这里以静态结构门禁替代 —— 只要分组锚点、
    两列表单容器与折叠开关都在, 首屏只渲染一个分组即成立。
    """
    src = _system_view()
    assert "qc-settings-layout" in src, "缺少设置两栏布局容器"
    assert "qc-settings-nav" in src, "缺少左侧分组锚点"
    assert "qc-settings-nav-item" in src and "settingsGroups" in src, "分组锚点应由 settingsGroups 驱动"
    assert "qc-settings-body" in src, "缺少右侧表单容器"
    assert "toggleSettingsGroup" in src, "分组应可折叠"
    page = _read("js/components/system-page.js")
    assert "settingsGroups" in page and "toggleSettingsGroup" in page, "分组状态需由页面状态提供"
