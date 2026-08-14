"""
图表交互增强测试 (TC-11.11, FR-3.11.8)

覆盖:
- charts.js: 十字线读价 + MA 图例开关配置正确注入 ECharts option
  （cross 十字线跨双盘联动 / tooltip 尊重图例选中 / legend 可点选开关）
- app-logic.js: toggleKlineMa + klineMaVisible 图例↔按钮双向同步接线
- 弹窗组件: 均线开关按钮行 (stock-detail / index-detail)
- CSS: 均线开关样式使用设计令牌（无硬编码色值，TC-11.9 白名单约束延续）
"""
import os
import re

import pytest

BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

MA_NAMES = ['MA5', 'MA10', 'MA20', 'MA60']


def _read(rel):
    with open(os.path.join(BASE, rel), encoding='utf-8') as f:
        return f.read()


def test_chart_crosshair_read_price():
    """十字线读价：cross 十字线 + 双盘联动 + 悬停/点击跟读 + 轴标签气泡"""
    charts = _read('frontend/js/charts.js')
    # 十字线类型
    assert "type: 'cross'" in charts, 'tooltip 应配置 cross 十字线'
    # 跨价格/成交量双盘联动
    assert 'xAxisIndex: \'all\'' in charts or 'xAxisIndex: "all"' in charts, '十字线应 link 双盘 x 轴'
    assert 'link: [{ xAxisIndex' in charts, 'axisPointer.link 应存在'
    # 悬停实时跟读 + 点击锁定读价
    assert 'triggerOn: \'mousemove|click\'' in charts, '十字线应支持悬停跟读 + 点击锁定'
    # 十字线吸附数据点, 轴标签气泡读价
    assert 'snap: true' in charts, '十字线应吸附数据点'
    assert 'axisPointer' in charts and 'label: { backgroundColor' in charts, '十字线轴标签气泡应配置'


def test_chart_legend_ma_toggle_injected():
    """MA 图例开关：legend 可点选开关配置正确注入 ECharts option"""
    charts = _read('frontend/js/charts.js')
    # 图例包含 K线 + 全部均线
    legend_line = re.search(r'legend:\s*\{[^}]*data:\s*\[([^\]]*)\]', charts, re.S)
    assert legend_line, 'legend.data 应存在'
    legend_items = legend_line.group(1)
    for n in ['K线'] + MA_NAMES:
        assert n in legend_items, f'legend 缺少图例项 {n}'
    # 默认全开 + 多选开关 + scroll 样式
    assert 'selectedMode: \'multiple\'' in charts, '图例应支持多选开关'
    assert re.search(r"selected:\s*\{[^}]*'MA5':\s*true[^}]*'MA60':\s*true", charts), \
        'MA 图例默认应全开 (selected 默认 true)'
    assert 'type: \'scroll\'' in charts, '图例应配置 scroll 避免溢出'
    # tooltip 尊重图例选中：关闭的均线不再出现在提示中
    assert 'showMA' in charts and 'getOption' in charts, \
        'tooltip formatter 应读取图例选中态并过滤已关闭均线'


def test_toggle_wiring_app_logic():
    """app-logic 接线：均线开关函数 + 状态 + 图例↔按钮双向同步（16.4 监听下沉 charts.js）"""
    al = _read('frontend/js/app-logic.js')
    assert 'toggleKlineMa' in al, '应实现 toggleKlineMa'
    assert 'klineMaVisible' in al, '应维护 klineMaVisible 选中态'
    assert 'MA_LINES' in al and all(m in al for m in MA_NAMES), '应定义 MA_LINES'
    assert 'legendToggleSelect' in al, 'toggleKlineMa 应 dispatch legendToggleSelect'
    # 16.4: legendselectchanged 图例→按钮同步监听已下沉 charts.js（renderKlineTo），app-logic 经 onLegend 回调接线
    assert 'legendselectchanged' in _read('frontend/js/charts.js'), \
        'charts.js renderKlineTo 应监听 legendselectchanged 同步图例→按钮'
    assert 'onLegend' in al, 'app-logic 应通过 onLegend 回调接线图例→按钮同步'
    # 按当前对话框定位图表实例，避免误切隐藏图
    assert 'stockDetailVisible.value' in al and 'indexDetailVisible.value' in al, \
        'toggleKlineMa 应按当前打开的对话框定位图表实例'


def test_ma_toggle_ui_in_dialogs():
    """弹窗均线开关按钮行：stock-detail 与 index-detail 均渲染"""
    for rel in ['frontend/js/components/dialogs/stock-detail.js',
                'frontend/js/components/dialogs/index-detail.js']:
        c = _read(rel)
        assert 'ma-toggle-row' in c, f'{rel} 应含均线开关行'
        assert 'ma-toggle-btn' in c and 'klineMaVisible[m]' in c, f'{rel} 按钮应绑定选中态'
        assert 'toggleKlineMa(m)' in c, f'{rel} 按钮应调用 toggleKlineMa'
        assert 'MA_LINES' in c, f'{rel} 应遍历 MA_LINES'


def test_ma_toggle_css_uses_tokens():
    """均线开关 CSS 不得引入硬编码色值（TC-11.9 白名单约束延续）"""
    css = _read('frontend/css/themes.css')
    m = re.search(r'/\* =+ v3\.11 \(FR-3\.11\.8\) 均线开关.*?\*/', css)
    assert m, 'themes.css 应含均线开关标记区块'
    block = css[m.end():]
    # 区块到下一个标记或文件尾
    nxt = re.search(r'/\* =+', block)
    if nxt:
        block = block[:nxt.start()]
    assert '.ma-toggle-row' in block and '.ma-toggle-btn' in block
    for ln, line in enumerate(block.splitlines(), 1):
        s = line.strip()
        if re.match(r'^--', s):
            continue
        assert not re.search(r'#[0-9a-fA-F]{3,8}\b|rgba?\(\s*\d', s), \
            f'均线开关 CSS 第 {ln} 行含硬编码色值: {s}'
