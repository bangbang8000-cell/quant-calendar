#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""v7.19 (T3.4 / FR-3): 择时信号矩阵重排

用户需求 ④：「择时雷达 择时信号矩阵需要重新考虑排版优化」。
8 个策略 × N 只自选股，旧版逐格渲染「动作标签 + 仓位百分比」：
列宽被文字撑开、8 列表头一起换行、右滚时标的列丢失、AI 悬浮球压住最后一列。
本文件把这些约束固化成断言。
"""
import os

HERE = os.path.dirname(os.path.abspath(__file__))
FE = os.path.join(os.path.dirname(HERE), "frontend")


def _read(rel):
    with open(os.path.join(FE, rel), "r", encoding="utf-8") as f:
        return f.read()


def test_matrix_header_short_name_with_tooltip():
    """表头横排简称 + title 全名（全称会让 8 列一起换行/撑爆）"""
    src = _read("js/components/overlay-radar.js")
    assert "shortStrategyName" in src, "应有策略简称函数"
    assert '<template #header>' in src, "表头应走 #header 插槽以支持简称"
    assert ':title="st.name"' in src, "简称必须带 hover 全名"
    assert "min-width=\"68\"" in src, "策略列宽应收到 68px（色点+仓位条 + 数字）"


def test_matrix_first_column_fixed_and_avoid_fab():
    """首列横向滚动固定 + 右侧 56px 避让悬浮球"""
    src = _read("js/components/overlay-radar.js")
    assert 'label="标的" width="140" fixed="left"' in src, "标的列应 fixed=left（右滚不丢标的）"
    css = _read("css/components.css")
    assert ".qc711-matrix-card { padding-right: 56px; }" in css, "矩阵卡右侧应留 56px 避让 AI 悬浮球"
    assert "@media (max-width: 1024px)" in css, "窄屏应收回避让（否则内容被挤）"


def test_matrix_cell_dot_and_bar():
    """单元格 = 色点（方向）+ 12px 仓位条（力度），不再用文字标签撑列宽"""
    src = _read("js/components/overlay-radar.js")
    assert "qc711-dot" in src and "qc711-bar" in src
    assert "cellBarWidth(" in src, "仓位条宽度需由 exposure 换算"
    assert "<el-tag" not in src.split("qc711-matrix-tools")[1].split("平均仓位")[0], \
        "策略单元格不应再用 el-tag（文字撑宽是重排要解决的问题本身）"
    css = _read("css/components.css")
    assert ".qc711-dot.is-buy" in css and ".qc711-dot.is-hold" in css, "色点需按动作分色"
    assert ".qc711-bar > i" in css, "仓位条内层填充缺失"


def test_matrix_sort_and_filter():
    """默认按平均仓位倒序 + 仅看有信号筛选"""
    src = _read("js/components/overlay-radar.js")
    assert "matrixSortMode" in src and "matrixOnlySignaled" in src
    assert "const matrixRows = computed" in src, "排序/筛选应产出 matrixRows，模板直接消费"
    assert ':data="matrixRows"' in src, "表格数据源应为排序后的行"
    seg = src[src.find("const matrixRows = computed"):]
    seg = seg[:1600]   # computed 体较长，切片要够覆盖排序分支
    assert "be - ae" in seg, "应按平均仓位倒序（仓位大的先看）"
    assert "exposure > 0" in seg, "「仅看有信号」应以 exposure>0 判定（持有=有仓位）"
