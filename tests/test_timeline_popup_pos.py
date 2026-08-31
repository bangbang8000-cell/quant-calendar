# -*- coding: utf-8 -*-
"""
V4.8.2-fix (用户反馈): 时间轴点击弹窗位置 — 锚定被点击阶段 chip 的右侧合适位置
(原 .tl-click-pop 为流式 relative 布局, 固定出现在时间轴下方, 与点击位置无关)
"""
import os
import re

BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))


def _strat():
    return open(os.path.join(BASE, "frontend", "js", "components", "strategies-page.js"), encoding="utf-8").read()


def _layout():
    return open(os.path.join(BASE, "frontend", "css", "layout.css"), encoding="utf-8").read()


def test_timeline_popup_anchored_to_click_v482fix():
    """点击阶段 chip 后弹窗锚定该 chip (右侧合适位置), 而非固定时间轴下方"""
    s = _strat()
    # 1) click 传事件目标
    assert re.search(r'@click\.prevent="showTimelineStage\(st\.stage, \$event\)"', s), \
        "模板 click 未传 $event, 无法计算锚点位置"
    # 2) 弹窗绑定位置样式
    assert ':style="tlClickPosStyle"' in s, '弹窗未绑定 tlClickPosStyle'
    # 3) setup 暴露位置计算
    assert "tlClickPosStyle" in s, "setup 未暴露 tlClickPosStyle"
    # 4) CSS 绝对定位
    m = re.search(r"\.tl-click-pop \{[\s\S]*?\}", _layout())
    assert m and "position: absolute" in m.group(0), ".tl-click-pop 未改为绝对定位"
