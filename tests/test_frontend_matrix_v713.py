#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""v7.13 自选股择时矩阵 — 前端接线防回归

- TimingRadar 模板含矩阵表格 / 策略共识条 / 模拟数据警示
- setup 导出矩阵绑定 (防白屏) 并在 onMounted 自动加载 (真 fetch, 非占位)
- /api/timing/matrix 为真实调用; CSS 类已落 themes-pages.css
"""
import os

BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
RADAR = os.path.join(BASE, "frontend", "js", "components", "overlay-radar.js")
CSS = os.path.join(BASE, "frontend", "css", "themes-pages.css")


def _read(path):
    with open(path, encoding="utf-8") as f:
        return f.read()


def test_matrix_real_fetch_not_placeholder():
    src = _read(RADAR)
    assert "post('/api/timing/matrix'" in src, "矩阵必须走真实 API, 不允许写死假数据"
    assert "loadMatrix()" in src.split("onMounted")[1], "onMounted 必须自动加载矩阵"


def test_matrix_bindings_exported():
    """全部矩阵绑定在 return 中导出, 防模板引用 undefined 白屏"""
    import re
    src = _read(RADAR)
    ret = src.split("return {", 1)[1].split("};", 1)[0]
    for binding in ("matrix", "matrixLoading", "matrixError",
                    "simulatedWarn", "aggText", "loadMatrix"):
        assert re.search(r"\b%s\b" % re.escape(binding), ret), \
            f"return 缺少绑定: {binding}"


def test_matrix_template_elements():
    src = _read(RADAR)
    assert "自选股择时矩阵" in src
    assert "qc711-matrix-aggregate" in src, "策略共识条缺失"
    assert "qc711-matrix-table" in src, "矩阵表格缺失"
    for col in ("平均仓位", "标的"):
        assert col in src
    assert "simulatedWarn" in src, "模拟数据诚实警示缺失"
    assert "不产持仓、不进日历" in src, "Overlay 契约文案缺失"


def test_matrix_css_landed():
    css = _read(CSS)
    for cls in (".qc711-matrix-card", ".qc711-matrix-head", ".qc711-matrix-aggregate",
                ".qc711-agg-chip", ".qc711-matrix-table", ".qc711-matrix-err"):
        assert cls in css, f"CSS 缺少 {cls}"
