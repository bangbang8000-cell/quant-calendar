#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""v7.19 (FR-2): 虚拟列表行距 —— step = 行高 + 行距 的三处一致性

根因：绝对定位分支里 `CSS gap` 完全不生效（行用 translateY 定位，不参与文档流），
旧实现只按 rowHeight 算窗口与位移 ⇒ 列表一超一屏就「行贴着行」。
用户实机感受「行间距过小、一个挨着一个」正是此处。

本文件锁三件事：
  1. `stepOf` / `computeVisibleRange` / `computeTotalHeight` / `sliceVisible` 用同一个 step；
  2. 总高不含末行后的行距（否则滚到底有一截空白，且末行会被判为「未到底」）；
  3. 不传 itemGap 的旧调用点语义不变（5 参与 6 参结果一致），避免历史页面回归。
"""
import json
import os
import shutil
import subprocess

import pytest

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
FE = os.path.join(ROOT, "frontend")
CORE = os.path.join(FE, "js", "virtual-list-core.js")

NEEDS_NODE = pytest.mark.skipif(shutil.which("node") is None, reason="node 不可用")


def _read(rel):
    with open(os.path.join(FE, rel), "r", encoding="utf-8") as f:
        return f.read()


def _run_js(script):
    code = (
        "const VL = require(process.argv[1]);\n"
        "const out = (function(){\n" + script + "\n})();\n"
        "process.stdout.write(JSON.stringify(out));\n"
    )
    proc = subprocess.run(
        ["node", "-e", code, CORE],
        capture_output=True, text=True, timeout=15,
    )
    assert proc.returncode == 0, "node 执行失败: %s" % proc.stderr
    return json.loads(proc.stdout)


# ─── step 语义 ─────────────────────────────────────

@NEEDS_NODE
def test_v719_step_of():
    """step = 行高 + 行距；行距缺省/0/负数不得影响行高"""
    out = _run_js("""
        return {
            withGap: VL.stepOf(88, 8),
            noGapArg: VL.stepOf(88),
            zeroGap: VL.stepOf(88, 0),
            negGap: VL.stepOf(88, -5),
            zeroRow: VL.stepOf(0, 8),
        };
    """)
    assert out["withGap"] == 96, "88+8 应为 96"
    assert out["noGapArg"] == 88, "缺省行距应等于行高 (旧调用点语义不变)"
    assert out["zeroGap"] == 88
    assert out["negGap"] == 88, "负行距应按 0 处理 (不得吃掉行高)"
    assert out["zeroRow"] == 9, "行高非法时仍须返回可用的正数 (避免除零)"


@NEEDS_NODE
def test_v719_total_height_excludes_trailing_gap():
    """总高 = n × step − 行距；末行后不留空隙"""
    out = _run_js("""
        return {
            h10: VL.computeTotalHeight(10, 88, 8),
            h10NoGap: VL.computeTotalHeight(10, 88),
            h1: VL.computeTotalHeight(1, 88, 8),
            h0: VL.computeTotalHeight(0, 88, 8),
        };
    """)
    assert out["h10"] == 952, "10 行 × step96 − 行距8 = 952"
    assert out["h10NoGap"] == 10 * 88, "无行距时应退化为 n × 行高 (历史行为)"
    assert out["h1"] == 88, "单行总高应恰为行高 (不能多出一个行距)"
    assert out["h0"] == 0


@NEEDS_NODE
def test_v719_last_row_aligns_with_total_height():
    """末行 bottom == totalHeight：滚到底时末行必须完整可见（不悬空、不被裁）"""
    out = _run_js("""
        const n = 320, rh = 88, gap = 8;
        const step = VL.stepOf(rh, gap);
        const total = VL.computeTotalHeight(n, rh, gap);
        const lastTop = (n - 1) * step;
        return { step, total, lastTop, lastBottom: lastTop + rh };
    """)
    assert out["lastBottom"] == out["total"], (
        "末行 bottom(%s) 应等于总高(%s)；不等则说明总高混入了末行后的行距，"
        "会让「滚到底」判定永远差一截" % (out["lastBottom"], out["total"])
    )
    assert out["total"] < out["step"] * 320, "总高必须小于 n × step (扣掉末尾行距)"


@NEEDS_NODE
def test_v719_visible_range_uses_step():
    """窗口按 step 切分：视口 400 / 行高 88 / 行距 8 → 4.16 行 ⇒ ceil=5，加缓冲 8 = 13 行"""
    out = _run_js("""
        const withGap = VL.computeVisibleRange(0, 400, 88, 320, 8, 8);
        const noGap = VL.computeVisibleRange(0, 400, 88, 320, 8);
        const mid = VL.computeVisibleRange(960, 400, 88, 320, 8, 8);
        return { wStart: withGap.startIndex, wEnd: withGap.endIndex,
                 nStart: noGap.startIndex, nEnd: noGap.endIndex,
                 mStart: mid.startIndex, mEnd: mid.endIndex };
    """)
    assert out["wEnd"] == 13, "按 step 96 切分应渲染 13 行, 实际 %d (若为 13 之外说明仍在用行高切分)" % out["wEnd"]
    assert out["nEnd"] == 13, "无行距时 ceil(400/88)=5 + 8 = 13（数值巧合，但语义须走 step 分支）"
    assert out["mStart"] == 2, "scrollTop=960 ⇒ 起始行 floor(960/96)=10 − 8 = 2"
    assert out["mEnd"] == 23, "可视底 = ceil((960+400)/96)=15，+8 缓冲 = 23"


@NEEDS_NODE
def test_v719_slice_visible_offsets_consistent():
    """sliceVisible 的 offsetY 与 totalHeight 必须同源 step（两处不同源 = 滚动位置漂移）"""
    out = _run_js("""
        const items = [];
        for (let i = 0; i < 200; i++) items.push({ code: 'S' + i });
        const r = VL.sliceVisible(items, 960, 400, 88, 8, 8);
        const step = VL.stepOf(88, 8);
        return { start: r.startIndex, end: r.endIndex, offsetY: r.offsetY,
                 totalHeight: r.totalHeight, step, rendered: r.visible.length,
                 expectOffset: r.startIndex * step };
    """)
    assert out["offsetY"] == out["expectOffset"], "offsetY 必须 = startIndex × step"
    assert out["rendered"] == out["end"] - out["start"], "渲染切片长度应与窗口一致"
    assert out["totalHeight"] == 200 * out["step"] - 8


@NEEDS_NODE
def test_v719_backward_compat_5_args():
    """旧调用点只传 5 参（无 itemGap）结果必须与显式传 0 完全一致"""
    out = _run_js("""
        const a = VL.computeVisibleRange(1200, 500, 56, 800, 8);
        const b = VL.computeVisibleRange(1200, 500, 56, 800, 8, 0);
        return {
            same: a.startIndex === b.startIndex && a.endIndex === b.endIndex,
            total: VL.computeTotalHeight(800, 56),
            expectTotal: 800 * 56,
        };
    """)
    assert out["same"] is True
    assert out["total"] == out["expectTotal"]


# ─── 组件接线（源码结构断言） ─────────────────────────

def test_v719_virtual_list_component_wires_gap():
    """qc-virtual-list：itemGap prop → step → translateY / totalHeight / plain flex gap"""
    src = _read("js/components/virtual-list.js")
    assert "itemGap: { type: Number, default: 0 }" in src, "应声明 itemGap prop (缺省 0 = 兼容历史调用点)"
    assert "translateY(' + ((startIndex + i) * step) + 'px)" in src, \
        "绝对定位位移必须用 step（用 rowHeight 会让行距被吃掉）"
    assert "gap: itemGap + 'px'" in src, "非虚拟(plain)分支应用同一行距做 flex gap（两分支视觉一致）"
    assert "n * step.value - Math.max(0, props.itemGap || 0)" in src, \
        "组件内 totalHeight 必须与 computeTotalHeight 同式（末尾不附加行距）"
    assert "props.buffer, props.itemGap)" in src, "窗口计算必须把行距透传给 pure-core"


def test_v719_stocklist_reads_tokens():
    """StockList.vue：行高/行距/图标尺寸从 CSS 令牌读，不再写死数字"""
    src = _read("src/components/common/StockList.vue")
    for tok in ("--qc-row-h", "--qc-row-gap", "--qc-stock-icon"):
        assert tok in src, "StockList 应用 getComputedStyle 读 " + tok
    assert ":row-height=\"rowH\"" in src, "应把令牌解析出的行高传给虚拟列表"
    assert ":item-gap=\"rowGapPx\"" in src, "应把令牌解析出的行距传给虚拟列表"
    assert 'data-density' in src, "密度切换须被监听 (MutationObserver)，否则换档后滚动错位"
    # 旧双写残留：模板层面不应再出现写死的 78 / 84
    assert ':row-height="78"' not in src, ":row-height=\"78\" 双写必须清除"
    for rel in ("js/components/calendar-page.js", "js/components/strategies/view-part2.js"):
        assert ':row-height="78"' not in _read(rel), rel + " 仍写死 :row-height=\"78\""
