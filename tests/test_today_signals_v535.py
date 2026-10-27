# -*- coding: utf-8 -*-
"""V5.3.0 (T-5.3.5.2 / FR-5.3.5.2): 今日一屏信号化

- todaySignals computed: 机会/风险角标 纯计算 (不经过 AI)
- 信号来源: 美林阶段/池净变动/市场情绪/数据源健康
- 空/降级不冒充 (无数据不出信号)
"""
import os
import sys

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import page_source  # noqa: E402

BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))


# 6.5.1 (FR-657): themes.css 拆域 5 文件 — 聚合读取保持原单文件断言语义
_THEME_FILES = ("css/themes.css", "css/themes-market.css", "css/themes-features.css",
                "css/themes-components.css", "css/themes-pages.css")


def _themes_css():
    parts = []
    for rel in _THEME_FILES:
        with open(os.path.join(BASE, "frontend", rel.replace("/", os.sep)), encoding="utf-8") as f:
            parts.append(f.read())
    return "".join(parts)

def _read(rel):
    # 6.3.0 结构分治: 页面模板下沉子目录 — 可重建的走页源码重建
    _b = page_source.bundle(rel)
    if _b is not None:
        return _b
    with open(os.path.join(BASE, rel), encoding="utf-8") as f:
        return f.read()


def test_today_signals_pure_compute_present():
    """strategies-page 含 todaySignals 纯计算"""
    src = _read("frontend/js/components/strategies-page.js")
    assert "todaySignals" in src
    assert "opportunity" in src and "risk" in src


def test_signals_no_llm_dependency():
    """信号化不调用 AI/LLM (纯本地数据派生)"""
    src = _read("frontend/js/components/strategies-page.js")
    # todaySignals 定义段内不应出现 fetch /api/ai 调用
    i = src.index("todaySignals = computed")
    block = src[i:i + 2500]
    assert "/api/ai" not in block, "信号化不应触发 AI 请求"
    assert "fetch(" not in block, "信号化不应触发网络请求"


def test_signal_sources_covered():
    """信号来源覆盖美林/池变动/情绪/数据源"""
    src = _read("frontend/js/components/strategies-page.js")
    i = src.index("todaySignals = computed")
    block = src[i:i + 2500]
    for kw in ("merrill", "pool_changes", "market_sentiment", "degraded"):
        assert kw in block, f"信号源缺少 {kw}"


def test_signal_css_defined():
    """信号角标样式类存在 (themes.css, 非内联)"""
    css = _themes_css()
    assert ".today-signal-chip" in css
    assert ".sig-opp" in css and ".sig-risk" in css


def test_signal_bar_in_template():
    """today-grid 前有信号角标条模板"""
    src = _read("frontend/js/components/strategies-page.js")
    assert 'today-signals' in src, "信号角标条模板缺失"
