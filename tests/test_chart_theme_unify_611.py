# -*- coding: utf-8 -*-
"""6.1.3 (C2): 图表体系收尾 — 统一主题门禁 (0 处散落配置 + 涨跌语义色)

断言:
  1. echarts-theme.js 导出 categoricalPalette / registerChart / getEChartsTheme / refreshAllCharts
  2. 图表创建统一走 getEChartsTheme (app-logic/backtest 不得散落自建主题)
  3. 涨跌标记用语义 token (themeColors.up/down), 非硬编码色
"""
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
JS = ROOT / "frontend" / "js"
ECHARTS_THEME = (JS / "echarts-theme.js").read_text(encoding="utf-8")
import page_source
APP_LOGIC = page_source.read(str(JS / "app-logic.js"))
BACKTEST = (JS / "backtest.js").read_text(encoding="utf-8")


def test_theme_module_exports_contract():
    for name in ("categoricalPalette", "registerChart", "getEChartsTheme", "refreshAllCharts"):
        assert name in ECHARTS_THEME, f"echarts-theme.js 缺导出/定义: {name}"


def test_chart_init_uses_unified_theme():
    # 图表创建必须 setOption(getEChartsTheme())
    assert "setOption(window.__quantModules.echartsTheme.getEChartsTheme())" in APP_LOGIC, \
        "app-logic 图表创建未走统一主题"


def test_charts_registered_for_refresh():
    assert "registerChart" in APP_LOGIC and "refreshAllCharts" in APP_LOGIC


def test_market_direction_uses_semantic_colors():
    # 涨跌标记 (回测/净值) 用 themeColors 语义色而非硬编码红绿
    assert "themeColors.down" in BACKTEST or "themeColors.up" in BACKTEST, "backtest 未用语义涨跌色"
    # 硬编码涨跌色 (A股红涨绿跌的旧 #ef232a/#14b143) 不得散落
    import re
    hardcoded = re.findall(r"#(?:ef232a|14b143|f5222d|52c41a)", BACKTEST, re.IGNORECASE)
    assert not hardcoded, f"backtest 存在硬编码涨跌色: {hardcoded}"
