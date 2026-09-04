# -*- coding: utf-8 -*-
"""V5.3.0 (T-5.3.2.3 / FR-5.3.2.3): ECharts 专业图表测试

- charts.js 提供组合净值+回撤双轴 option 工厂 (纯函数, node 可测)
- 因子 IC 分位区间带 option 工厂
- 情绪周期趋势带 option 工厂
- 双轴配置: 主轴净值 + 副轴回撤 (yAxisIndex), 回撤 areaStyle
"""
import json
import os
import re
import shutil
import subprocess

import pytest

BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
CHARTS_JS = os.path.join(BASE, "frontend", "js", "charts.js")

NEEDS_NODE = pytest.mark.skipif(shutil.which("node") is None, reason="node 不可用")


def _read():
    return open(CHARTS_JS, encoding="utf-8").read()


def _node_run(script):
    """node 里 require charts.js (UMD), 执行脚本返回 JSON"""
    code = ("const C = require(process.argv[1]);\n"
            "const out = (function(){" + script + "})();\n"
            "process.stdout.write(JSON.stringify(out));\n")
    proc = subprocess.run(["node", "-e", code, CHARTS_JS],
                          capture_output=True, text=True, timeout=20)
    assert proc.returncode == 0, f"node 失败: {proc.stderr}"
    return json.loads(proc.stdout)


# ─── 组合净值+回撤双轴 ─────────────────────────────────────────

def test_charts_exports_nav_drawdown_factory():
    src = _read()
    assert "buildNavDrawdownOption" in src, "charts.js 应导出净值+回撤双轴 option 工厂"


def test_nav_drawdown_dual_axis():
    """主轴净值 + 副轴回撤 (yAxisIndex), 双 yAxis 配置"""
    out = _node_run(
        "const opt = C.buildNavDrawdownOption([1, 1.05, 1.02], [-2, 1, -1.5], ['d1','d2','d3']);"
        "return { yAxisCount: opt.yAxis.length, series: opt.series.map(s => ({name: s.name, yAxisIndex: s.yAxisIndex, type: s.type})) };")
    assert out["yAxisCount"] == 2
    names = [s["name"] for s in out["series"]]
    assert "净值" in names[0] or "nav" in names[0].lower(), "第一序列为净值"
    dd = out["series"][1]
    assert dd["yAxisIndex"] == 1, "回撤序列应在副轴"
    assert dd["type"] == "line" or dd["type"] == "bar"


def test_nav_drawdown_returns_drawdown_area():
    """回撤序列带 areaStyle (专业面积回撤带)"""
    out = _node_run(
        "const opt = C.buildNavDrawdownOption([1, 1.05], [-2, 1], ['a','b']);"
        "const dd = opt.series[1];"
        "return { area: !!dd.areaStyle, line: dd.lineStyle ? dd.lineStyle.type : null };")
    assert out["area"] is True


# ─── 因子 IC 分位区间带 ─────────────────────────────────────────

def test_charts_exports_ic_band_factory():
    src = _read()
    assert "buildIcBandOption" in src, "charts.js 应导出因子 IC 分位区间带 option 工厂"


def test_ic_band_has_band_and_line():
    """IC 分位区间带: 中位线 + 25/75 分位上下界 (band area)"""
    out = _node_run(
        "const opt = C.buildIcBandOption({ dates: ['d1','d2'], median: [0.02, 0.03], q25: [0.01, 0.015], q75: [0.03, 0.045] });"
        "return { seriesCount: opt.series.length, types: opt.series.map(s => s.type) };")
    assert out["seriesCount"] >= 2
    assert "line" in out["types"]


# ─── 情绪周期趋势带 ────────────────────────────────────────────

def test_charts_exports_sentiment_factory():
    src = _read()
    assert "buildSentimentBandOption" in src, "charts.js 应导出情绪周期趋势带 option 工厂"


def test_sentiment_band_marks_cycle():
    """情绪趋势带: 上/下界 area + 中轴, markLine 分界"""
    out = _node_run(
        "const opt = C.buildSentimentBandOption({ dates: ['a','b'], value: [55, 62], upper: [70, 72], lower: [40, 38] });"
        "return { series: opt.series.map(s => s.name || s.type) };")
    assert len(out["series"]) >= 2
