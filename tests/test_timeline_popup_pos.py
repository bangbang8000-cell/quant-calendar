# -*- coding: utf-8 -*-
"""
V4.8.2-fix (用户反馈): 时间轴点击弹窗位置 — 锚定被点击阶段 chip 的右侧合适位置
(原 .tl-click-pop 为流式 relative 布局, 固定出现在时间轴下方, 与点击位置无关)
"""
import os
import re
import sys

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import page_source  # noqa: E402

BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))


def _strat():
    # 6.3.0 结构分治: 策略页模板下沉 components/strategies/ — 读取走页源码重建
    return page_source.read("frontend/js/components/strategies-page.js")


def _layout():
    return open(os.path.join(BASE, "frontend", "css", "layout.css"), encoding="utf-8").read()


def test_timeline_popup_anchored_to_click_v482fix():
    """V5.21 契约变更: 旧「点击 chip 弹出锚定浮层」已随蛇形时间轴整体退役。

    新「周期演进板」改为点击阶段块**直接打开阶段详情报告** (showStageDetail),
    不再需要锚点定位, 故原 4 条断言 (传 $event / tlClickPosStyle / 绝对定位) 失去对象。
    本用例改为守护新契约。
    """
    s = _strat()
    assert "showTimelineStage" in s, "阶段块应绑定 showTimelineStage (点击看阶段详情)"
    assert "mc-board" in s, "应为「周期演进板」实现"
    assert "mcHistView" in s, "应含 周期带/阶段矩阵 视图切换"
