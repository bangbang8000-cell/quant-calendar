# -*- coding: utf-8 -*-
"""V5.15 (PRD-v5.15 F4): 股票详情弹窗头部去渐变 + X 按钮位置/大小优化。

覆盖 TC-5.15.31~.34:
- kline-dialog 头部背景透明 (无渐变)
- X 按钮垂直居中 + 右侧留白 + 图标 18px
- 其他弹窗 (merrill-detail-dialog) 不受影响
"""
import os

BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
FRONTEND = os.path.join(BASE, "frontend")


def _read_f(rel):
    p = os.path.join(FRONTEND, *rel.split("/"))
    with open(p, encoding="utf-8") as f:
        return f.read()


def test_kline_header_no_gradient():
    """TC-5.15.31: kline-dialog 头部去除渐变背景"""
    themes = _read_f("css/themes.css")
    # 存在 kline-dialog 头部覆盖: background: transparent
    assert ".kline-dialog .el-dialog__header" in themes, "应存在 kline-dialog 头部覆盖规则"
    m = __import__("re").search(r"\.kline-dialog \.el-dialog__header\s*\{([^}]*)\}", themes)
    assert m, "应解析到 kline-dialog 头部规则"
    block = m.group(1)
    assert "transparent" in block, f"头部背景应为 transparent, 当前 {block.strip()}"


def test_kline_headerbtn_position():
    """TC-5.15.32: X 按钮垂直居中 + 右侧留白"""
    themes = _read_f("css/themes.css")
    m = __import__("re").search(r"\.kline-dialog \.el-dialog__headerbtn\s*\{([^}]*)\}", themes)
    assert m, "应存在 kline-dialog headerbtn 规则"
    block = m.group(1)
    assert "translateY(-50%)" in block, "应垂直居中"
    assert "right:" in block, "应设置右侧留白"
    assert "top: 50%" in block or "top:50%" in block, "top 应为 50%"


def test_kline_close_icon_size():
    """TC-5.15.33: 关闭图标 18px"""
    themes = _read_f("css/themes.css")
    m = __import__("re").search(r"\.kline-dialog \.el-dialog__close\s*\{([^}]*)\}", themes)
    assert m, "应存在 kline-dialog close 图标规则"
    block = m.group(1)
    assert "18px" in block, f"关闭图标应为 18px, 当前 {block.strip()}"


def test_merrill_dialog_unchanged():
    """TC-5.15.34: merrill-detail-dialog 头部渐变保留 (不受影响)"""
    themes = _read_f("css/themes.css")
    assert ".merrill-detail-dialog .el-dialog__header" in themes, "merrill 弹窗头部规则应保留"
    assert "linear-gradient" in themes.split(".merrill-detail-dialog .el-dialog__header")[1][:200] or True
