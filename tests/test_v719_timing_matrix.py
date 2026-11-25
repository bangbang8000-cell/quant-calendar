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
    assert "min-width=\"68\"" in src, "策略列宽保持 68px（文字标签 + 强度档）"


def test_matrix_first_column_fixed_and_avoid_fab():
    """首列横向滚动固定 + 右侧 56px 避让悬浮球"""
    src = _read("js/components/overlay-radar.js")
    assert 'label="标的" width="140" fixed="left"' in src, "标的列应 fixed=left（右滚不丢标的）"
    css = _read("css/components.css")
    assert ".qc711-matrix-card { padding-right: 56px; }" in css, "矩阵卡右侧应留 56px 避让 AI 悬浮球"
    assert "@media (max-width: 1024px)" in css, "窄屏应收回避让（否则内容被挤）"


def test_matrix_cell_text_label():
    """v7.21: 单元格统一为后端下发的「动作·强度档」单标签

    旧版「色点 + 仓位条 + 百分比」把 buy/add/hold 都渲成 100%;
    v7.20 改成彩色标签 + 外置强中弱后仍不统一; 现由后端 display 字段一标签承载,
    并配同源图例。此断言锁定新契约, 防止回退。
    """
    src = _read("js/components/overlay-radar.js")
    assert "qc711-sig" in src and ".display" in src, "单元格应渲染统一 display 文案"
    assert "qc711-sig-band" not in src, "外置强/中/弱 span 应移除"
    assert "matrix.legend" in src, "图例须由后端同源下发"
    assert "cellTitle(" in src, "应有 tooltip 函数承载仓位系数/判定理由"
    assert "qc711-dot" not in src and "qc711-bar" not in src, "旧色点+仓位条渲染应移除"
    assert "cellBarWidth" not in src, "仓位条换算函数应移除"
    assert "<el-tag" not in src.split("qc711-matrix-tools")[1].split("平均仓位")[0], \
        "策略单元格仍不应使用 el-tag（用轻量 span 标签避免撑宽）"
    css = _read("css/components.css")
    assert ".qc711-sig.tone-up" in css and ".qc711-sig.tone-down" in css \
        and ".qc711-sig.tone-flat" in css, "文字标签需按 up/down/flat 三档分色"
    assert ".qc711-sig-band" not in css, "外置强度档样式应移除"


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
