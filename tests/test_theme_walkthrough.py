"""v3.15 暗色主题全套走查回归 (TC-15.4) — 静态校验 CSS/JS 源

根因: .kline-chart 暗色下白底; Element Plus 组件暗色覆盖缺口(日期选择器/
select 下拉/cascader/drawer/notification/滚动条等); 主题切换已挂载 ECharts
不重绘; 图表硬编码色暗色下不随主题。
方案: 暗色覆盖补齐; 图表注册 refreshAllCharts 重绘注册表; 运行时代码
getCSSVar()||'#hex' 兜底并标注 qc-allow-hardcode。
"""
import os
import re

BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))


def _read(rel):
    p = os.path.join(BASE, rel)
    assert os.path.exists(p), f'missing {rel}'
    with open(p, encoding='utf-8') as f:
        return f.read()


THEMES_CSS = _read('frontend/css/themes.css')
ECHARTS_THEME = _read('frontend/js/echarts-theme.js')
APP_LOGIC = _read('frontend/js/app-logic.js')
CHARTS = _read('frontend/js/charts.js')
WATCHLIST = _read('frontend/js/watchlist.js')
THEMES_JS = _read('frontend/js/themes.js')


class TestKlineChartBackground:
    def test_kline_chart_bg_no_longer_white(self):
        """K线容器底色跟主题走 (var(--bg-card)), 暗色不再白块"""
        m = re.search(r'\.kline-chart\s*\{[^}]*\}', THEMES_CSS)
        assert m, 'kline-chart rule not found'
        block = m.group(0)
        assert 'background: var(--bg-card)' in block
        assert 'var(--white)' not in block


class TestDarkProComponentOverrides:
    def test_date_picker_covered(self):
        assert '[data-theme="dark-pro"] .el-picker-panel' in THEMES_CSS
        assert '[data-theme="dark-pro"] .el-date-picker' in THEMES_CSS
        assert '[data-theme="dark-pro"] .el-date-table td.today' in THEMES_CSS

    def test_select_dropdown_covered(self):
        assert '[data-theme="dark-pro"] .el-select-dropdown' in THEMES_CSS
        assert '[data-theme="dark-pro"] .el-select-dropdown__item.hover' in THEMES_CSS
        assert '[data-theme="dark-pro"] .el-select-dropdown__item.is-selected' in THEMES_CSS

    def test_cascader_covered(self):
        assert '[data-theme="dark-pro"] .el-cascader-panel' in THEMES_CSS
        assert '[data-theme="dark-pro"] .el-cascader-node' in THEMES_CSS

    def test_drawer_covered(self):
        assert '[data-theme="dark-pro"] .el-drawer' in THEMES_CSS
        assert '[data-theme="dark-pro"] .el-drawer__header' in THEMES_CSS

    def test_notification_message_covered(self):
        assert '[data-theme="dark-pro"] .el-notification' in THEMES_CSS
        assert '[data-theme="dark-pro"] .el-message ' in THEMES_CSS

    def test_form_label_and_input_number_covered(self):
        assert '[data-theme="dark-pro"] .el-form-item__label' in THEMES_CSS
        assert '[data-theme="dark-pro"] .el-input-number' in THEMES_CSS

    def test_radio_checkbox_covered(self):
        assert '[data-theme="dark-pro"] .el-radio__label' in THEMES_CSS
        assert '[data-theme="dark-pro"] .el-checkbox__inner' in THEMES_CSS

    def test_scrollbar_covered(self):
        assert '[data-theme="dark-pro"] ::-webkit-scrollbar' in THEMES_CSS
        assert '[data-theme="dark-pro"]::-webkit-scrollbar' in THEMES_CSS
        assert '[data-theme="dark-pro"] .el-scrollbar__thumb' in THEMES_CSS

    def test_textarea_covered(self):
        assert '[data-theme="dark-pro"] .el-textarea__inner' in THEMES_CSS


class TestChartThemeRerender:
    def test_echarts_theme_registry(self):
        """echarts-theme.js 提供 registerChart / refreshAllCharts"""
        assert 'function registerChart' in ECHARTS_THEME
        assert 'function refreshAllCharts' in ECHARTS_THEME
        assert 'registerChart,' in ECHARTS_THEME
        assert 'refreshAllCharts,' in ECHARTS_THEME

    def test_apply_theme_triggers_rerender(self):
        """applyTheme 设置 data-theme 后 nextTick 触发 refreshAllCharts"""
        seg = APP_LOGIC[APP_LOGIC.index('function applyTheme(theme)'):]
        seg = seg[:seg.index('function changeTheme(theme)')]
        assert 'refreshAllCharts()' in seg

    def test_kline_rerender_registered(self):
        """K线主题重绘注册 — 16.4 后实例/缓存下沉 charts.js，app-logic 仅委托 redrawKline"""
        assert '_backtestCurve' in APP_LOGIC
        assert 'registerChart(function ()' in APP_LOGIC
        # 16.4: 主题重绘委托 charts.js 实例注册表（缓存变量已下沉，不再出现于 app-logic）
        assert 'charts.redrawKline' in APP_LOGIC
        assert 'function redrawKline' in CHARTS
        assert '_klineRegistry' in CHARTS

    def test_trend_chart_registered(self):
        """评估历史趋势图随主题重绘注册"""
        assert '_trendChartData' in WATCHLIST
        assert '_refreshTrendCharts' in WATCHLIST
        assert 'echartsTheme.registerChart(_refreshTrendCharts)' in WATCHLIST


class TestHardcodedChartColors:
    def test_ma_lines_use_runtime_fallback(self):
        """charts.js MA 线改运行时令牌兜底 + qc-allow-hardcode 标注"""
        assert "getCSSVar('--color-accent')" in CHARTS
        assert "getCSSVar('--color-primary')" in CHARTS
        assert "getCSSVar('--color-warning')" in CHARTS
        assert "getCSSVar('--color-success')" in CHARTS
        assert 'qc-allow-hardcode' in CHARTS
        # MA 系列不再直接引用硬编码 hex
        assert "color: '#F59E0B'" not in CHARTS

    def test_trend_chart_theme_aware(self):
        """趋势图轴/文字/序列色随主题"""
        assert 'themeColors.primary' in WATCHLIST
        assert 'getCSSVar(--bg-card)' in WATCHLIST or "getCSSVar('--bg-card')" in WATCHLIST
        assert "getCSSVar('--color-success')" in WATCHLIST

    def test_score_distribution_uses_vars(self):
        """评分分布色改用主题变量 (暗色可用)"""
        assert "color: 'var(--color-success)'" in WATCHLIST
        assert 'var(--el-warning)' in WATCHLIST
        assert "color: 'var(--el-danger)'" in WATCHLIST


class TestThemesJsAligned:
    def test_vibrant_orange_color_aligned(self):
        """themes.js vibrant-orange 色值与后端 THEMES primary 对齐"""
        assert "'vibrant-orange'" in THEMES_JS
        assert '#D4A843' in THEMES_JS
