# -*- coding: utf-8 -*-
"""V6.5 (TEST-PLAN 6.5 TC-6.5.1.x): 概览容错 + 龙虎榜降级透出 — L1/L2 门禁"""
import os
import re
import sys

BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
FRONTEND = os.path.join(BASE, "frontend")
sys.path.insert(0, os.path.join(BASE, "backend"))


def _read_f(rel):
    p = os.path.join(FRONTEND, *rel.split("/"))
    with open(p, encoding="utf-8") as f:
        return f.read()


def test_spot_pct_map_degrades_without_akshare():
    """TC-6.5.1.1: 无 akshare 环境 _spot_pct_map 返回空映射, 不抛 ModuleNotFoundError"""
    from shortterm import emotion_metrics as em
    out = em._spot_pct_map()
    assert out == {}, "缺 akshare 时应返回空映射"


def test_overview_bundle_never_raises():
    """TC-6.5.1.2/5: _overview_bundle 恒返回 dict, 含核心 key, 不整体抛错"""
    from api.v1 import shortterm as st
    bundle = st._overview_bundle("2026-09-10")
    assert isinstance(bundle, dict)
    for k in ("money_effect", "promotion", "consec_premium", "sentiment_cycle",
              "seal_quality", "loss_effect", "feedback_matrix", "theme_structure", "ladder"):
        assert k in bundle, f"bundle 缺 key {k}"


def test_get_lhb_payload_fields():
    """TC-6.5.1.3/4: get_lhb 响应透出 available/reason 字段(降级时 reason 非空)"""
    from api.v1 import shortterm as st
    src = os.path.join(BASE, "backend", "api", "v1", "shortterm.py")
    with open(src, encoding="utf-8") as f:
        code = f.read()
    m = re.search(r'@router\.get\("/lhb"\)(.*?)\n\ndef ', code, re.S)
    assert m, "get_lhb 路由定义缺失"
    block = m.group(1)
    assert "'available'" in block, "get_lhb 未透出 available"
    assert "'reason'" in block, "get_lhb 未透出 reason"
    assert "store.load_pool(d, 'lhb')" in block, "get_lhb 应先查缓存"


def test_lhb_frontend_reason_state():
    """TC-6.5.2.x: shortterm-page.js 含 lhbReason 状态、loadLhb 读取 res.reason、导出"""
    src = _read_f("js/components/shortterm-page.js")
    assert "const lhbReason = ref(null)" in src, "lhbReason 状态缺失"
    assert "res.available === false" in src, "loadLhb 未按 available=false 读取降级原因"
    assert "lhbReason.value = res.available === false ? (res.reason || null) : null" in src, \
        "loadLhb 未透出 res.reason"
    # 导出
    m = re.search(r"return \{\n\s*currentPage", src, re.S)
    assert m, "组件导出对象缺失"
    export_region = src[m.start():m.start() + 1600]
    assert "lhbReason" in export_region, "lhbReason 未在组件导出"


def test_lhb_frontend_template_reason_bar():
    """TC-6.5.2.x: 龙虎榜模板含降级提示条渲染"""
    src = _read_f("js/components/shortterm-page.js")
    assert "v-if=\"lhbReason\"" in src, "模板缺 lhbReason 降级提示条"
    assert "lhbReason.slice(0, 120)" in src, "降级原因未做长度折叠"
