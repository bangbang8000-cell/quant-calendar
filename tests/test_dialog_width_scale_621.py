# -*- coding: utf-8 -*-
"""6.2.1 (F4): 弹窗宽度标尺门禁 — 全部 el-dialog 收敛至 sm/md/lg/xl 四档

标尺: sm 440 / md 520 / lg 640 / xl 800 (tokens.css --qc-dialog-width-*)
既有 10+ 种零散宽度 (400-800/95%) 全部收敛; 门禁防新增零散值。
"""
import os
import re

BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
FRONTEND = os.path.join(BASE, "frontend")
SCALE = {"440px", "520px", "640px", "800px"}


def _walk_js():
    for dirpath, _dirs, files in os.walk(os.path.join(FRONTEND, "js")):
        for fn in files:
            if fn.endswith(".js"):
                yield os.path.join(dirpath, fn)


def _dialog_widths():
    """收集全部 el-dialog width 属性值"""
    widths = []
    for p in _walk_js():
        src = open(p, encoding="utf-8", errors="ignore").read()
        for m in re.finditer(r"<el-dialog\b[^>]*?\bwidth=\"([^\"]+)\"", src):
            widths.append((os.path.relpath(p, FRONTEND), m.group(1)))
    return widths


def test_scale_tokens_defined():
    """tokens 应定义弹窗宽度标尺 4 档"""
    tokens = open(os.path.join(FRONTEND, "css", "tokens.css"), encoding="utf-8").read()
    assert "--qc-dialog-width-sm: 440px" in tokens
    assert "--qc-dialog-width-md: 520px" in tokens
    assert "--qc-dialog-width-lg: 640px" in tokens
    assert "--qc-dialog-width-xl: 800px" in tokens


def test_all_dialog_widths_on_scale():
    """全部 el-dialog width 应在标尺集合内 (无 95%/400/420/480/500/580/600/760 等零散值)"""
    widths = _dialog_widths()
    assert widths, "应扫描到 el-dialog 宽度"
    off = [(f, w) for f, w in widths if w not in SCALE]
    assert not off, f"弹窗宽度偏离标尺 {len(off)} 处: {off[:10]}"
    assert all(w.endswith("px") for _, w in widths), "宽度应统一 px 单位"


def test_width_distribution_spread():
    """宽度应覆盖至少 3 档 (收敛有意义, 非全部同一值)"""
    widths = _dialog_widths()
    used = {w for _, w in widths}
    assert len(used) >= 3, f"应覆盖 ≥3 档标尺, 实际 {used}"
