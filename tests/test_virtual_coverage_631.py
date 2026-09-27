# -*- coding: utf-8 -*-
"""6.3.1 (T-6.3.1.2): 长列表虚拟滚动覆盖门禁

行数随交易日/复盘日累积、可能超 200 行的列表必须走 ``qc-virtual-list``：

- 虚拟滚动只渲染可视区行，但**行高必须固定为常量**——动态行高会让
  ``translateY(index * rowHeight)`` 定位漂移，滚动到中段时行内容错位；
- 固定行高以 CSS 声明为准（列表项选择器块内的 ``height: Npx``），
  JS 侧 ``:row-height=N`` 必须等于「行高 + 行距」，两处不一致即视为回归；
- 有界列表（后端截断）与变高卡片列表不接入，逐条注明原因并以
  后端上限测试守住「有界」这一前提。
"""
import os
import re
import sys

import pytest

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))

BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
FRONTEND = os.path.join(BASE, "frontend")
CSS_DIR = os.path.join(FRONTEND, "css")

# 长列表清单：列表项选择器 = 用于在 CSS 中定位固定行高声明
LONG_LISTS = [
    {
        "file": "js/components/shortterm/view-part1.js",
        "label": "短线复盘日历 dateList",
        "array": "dateList",
        # 虚拟列表根元素类名（滚动容器）
        "vlist_class": "shortterm-date-items",
        # 列表项选择器关键字（CSS 中固定行高声明所在规则）
        "item_selector": "shortterm-date-item",
        # 行高（CSS 声明的列表项高度）与行距，二者之和 = :row-height
        "item_height": 66,
        "gap": 0,
        "row_height": 66,
    },
    {
        "file": "js/components/research/view-part2.js",
        "label": "每日复盘日期中栏 marketReviews",
        "array": "marketReviews",
        "vlist_class": "market-review-date-items",
        "item_selector": "market-review-date-item",
        "item_height": 66,
        "gap": 0,
        "row_height": 66,
    },
    {
        "file": "js/components/research/view-part2.js",
        "label": "每日复盘列表 marketReviews",
        "array": "marketReviews",
        "vlist_class": "market-review-list-vlist",
        "item_selector": "market-review-list-vlist",
        "item_height": 52,
        "gap": 8,
        "row_height": 60,
    },
]

# 不接入虚拟滚动的长表：有界或变高，排除理由必须成立
BOUNDED_LISTS = [
    {
        "label": "研究历史卡片 researchHistory",
        "file": "js/components/research/view-part2.js",
        "array": "researchHistory",
        "reason": "后端 limit=50 截断 + 卡片可展开详情属变高行",
    },
    {
        "label": "参数扫描结果 sweepResult",
        "file": "js/components/research/view-part1.js",
        "array": "sweepResult",
        "reason": "后端 max_combos 默认 50 截断 + 一行为自适应换行内容",
    },
]


def _read(rel):
    with open(os.path.join(FRONTEND, rel), encoding="utf-8") as f:
        return f.read()


def _css_fixed_heights(selector_token):
    """所有含 selector_token 的选择器块中声明的 ``height: Npx`` 集合"""
    heights = set()
    for fn in sorted(os.listdir(CSS_DIR)):
        if not fn.endswith(".css"):
            continue
        with open(os.path.join(CSS_DIR, fn), encoding="utf-8", errors="ignore") as f:
            text = f.read()
        text = re.sub(r"/\*.*?\*/", " ", text, flags=re.S)
        for block in text.split("}"):
            if "{" not in block:
                continue
            sel, _, body = block.partition("{")
            if selector_token not in sel:
                continue
            for m in re.finditer(r"(?<![-\w])height:\s*(\d+(?:\.\d+)?)px", body):
                heights.add(float(m.group(1)))
    return heights


def _vlist_tag(src, vlist_class):
    """返回带指定类名的 qc-virtual-list 开标签（无则 None）"""
    for tag in re.findall(r"<qc-virtual-list[^>]*>", src):
        m = re.search(r'class="([^"]*)"', tag)
        if m and vlist_class in m.group(1).split():
            return tag
    return None


def _ids(cases):
    return [c["label"] for c in cases]


@pytest.mark.parametrize("case", LONG_LISTS, ids=_ids(LONG_LISTS))
def test_long_list_uses_virtual_list(case):
    """长列表接入 qc-virtual-list，行高为数值常量并与 CSS 固定行高一致"""
    src = _read(case["file"])
    tag = _vlist_tag(src, case["vlist_class"])
    assert tag is not None, (
        "%s: 未找到 class 含 %s 的 qc-virtual-list —— 超 200 行的列表须虚拟滚动"
        % (case["label"], case["vlist_class"])
    )

    m = re.search(r':items="([^"]+)"', tag)
    assert m and m.group(1).strip() == case["array"], (
        "%s: 虚拟列表 :items 应为 %s，实际 %s"
        % (case["label"], case["array"], m.group(1) if m else "（缺失）")
    )

    m = re.search(r':row-height="([^"]+)"', tag)
    assert m, "%s: 虚拟列表缺少 :row-height" % case["label"]
    expr = m.group(1).strip()
    assert re.fullmatch(r"\d+", expr), (
        "%s: 行高必须固定为数值常量，实际 %s（动态行高会导致定位漂移）"
        % (case["label"], expr)
    )
    assert int(expr) == case["row_height"], (
        "%s: :row-height=%s 与约定常量 %s 不一致" % (case["label"], expr, case["row_height"])
    )

    heights = _css_fixed_heights(case["item_selector"])
    assert float(case["item_height"]) in heights, (
        "%s: CSS 未把行高固定为 %spx（%s 命中 %s）—— 需在列表项规则里声明 height"
        % (case["label"], case["item_height"], case["item_selector"], sorted(heights))
    )
    assert case["item_height"] + case["gap"] == case["row_height"], (
        "%s: 行高 %s + 行距 %s 应等于 :row-height %s"
        % (case["label"], case["item_height"], case["gap"], case["row_height"])
    )


@pytest.mark.parametrize("case", LONG_LISTS, ids=_ids(LONG_LISTS))
def test_no_raw_vfor_over_long_array(case):
    """长列表数据源不得残留全量渲染的 v-for（须改由虚拟列表插槽单行渲染）"""
    src = _read(case["file"])
    pattern = re.compile(r'v-for="[^"]*\bin\s+%s\b' % re.escape(case["array"]))
    hit = pattern.search(src)
    assert hit is None, (
        "%s: 仍存在全量渲染 %s 的 v-for（%s）" % (case["label"], case["array"], hit.group(0))
    )


def test_bounded_lists_stay_bounded():
    """排除清单的前提必须成立：后端对这两处结果有硬上限，否则须改为虚拟滚动"""
    backend = os.path.join(BASE, "backend", "api", "v1", "strategy_research.py")
    with open(backend, encoding="utf-8") as f:
        src = f.read()
    assert "limit: int = 50" in src, "研究历史不再按 limit=50 截断 —— 需接入虚拟滚动"
    assert "max_combos', 50)" in src, "参数扫描不再按 max_combos=50 截断 —— 需接入虚拟滚动"

    for case in BOUNDED_LISTS:
        assert case["reason"].strip(), "%s: 排除理由不得为空" % case["label"]
        assert all(case["array"] != c["array"] for c in LONG_LISTS), (
            "%s: 已接入虚拟滚动的列表不应同时出现在排除清单" % case["label"]
        )