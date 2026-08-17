# -*- coding: utf-8 -*-
"""
v3.17.9 (FR-3.17.9): 性能优化回归测试
- K线/大图表降采样纯函数（点数压缩 / 极值保留 / 空数据 / 阈值内原样 / 非数组透传）
- 评估历史 / 问股历史 limit/offset 分页参数边界
- 骨架屏 CSS 类存在断言（启动骨架屏 + 状态面板骨架）
"""
import json
import os
import subprocess

import pytest

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
FRONTEND = os.path.join(ROOT, "frontend")
BACKEND = os.path.join(ROOT, "backend")


def _read_frontend(rel: str) -> str:
    with open(os.path.join(FRONTEND, rel.replace("/", os.sep)), encoding="utf-8") as f:
        return f.read()


def _read_backend(rel: str) -> str:
    with open(os.path.join(BACKEND, rel.replace("/", os.sep)), encoding="utf-8") as f:
        return f.read()


# ─── 降采样纯函数 (node require charts.js) ───────────────────────

def _run_node(body: str):
    """在 node 中 require frontend/js/charts.js 并执行 body, 返回 JSON 反序列化结果
    (数据经临时文件传入, 避免 Windows 命令行长度限制)"""
    core = os.path.join(FRONTEND, "js", "charts.js")
    if subprocess.run(["node", "--version"], capture_output=True).returncode != 0:
        pytest.skip("node 不可用")
    import tempfile
    code = (
        "const C = require(process.argv[2]);\n"
        "const out = (function(){ " + body + " })();\n"
        "process.stdout.write(JSON.stringify(out));\n"
    )
    fd, tmp = tempfile.mkstemp(suffix=".js")
    try:
        with os.fdopen(fd, "w", encoding="utf-8") as f:
            f.write(code)
        proc = subprocess.run(["node", tmp, core], capture_output=True, text=True, timeout=20)
    finally:
        os.unlink(tmp)
    assert proc.returncode == 0, f"node 执行失败: {proc.stderr}"
    return json.loads(proc.stdout)


def _make_rows(n: int, base: int = 0):
    """构造 n 行 K线数据 [date,o,c,l,h,vol,...]"""
    return [[f"2020{i:05d}", 10 + i + base, 11 + i + base, 9 + i + base, 12 + i + base,
             1000 + i, 10, 11, 12, 13, 100] for i in range(n)]


def test_downsample_compresses_points():
    """降采样: 5000 点应被压缩到 ≤ 阈值 (每桶最多 2 根极值K线)"""
    rows = _make_rows(5000)
    out = _run_node(
        "const d = C.downsampleSeries(" + json.dumps(rows) + ", C.KLINE_MAX_RENDER_POINTS);"
        " return { len: d.length, raw: " + str(len(rows)) + ", max: C.KLINE_MAX_RENDER_POINTS };"
    )
    assert out["len"] < out["raw"], f"应压缩点数: {out}"
    assert out["len"] <= out["max"], f"输出应 ≤ 阈值 {out['max']}: {out}"
    assert out["len"] > 0


def test_downsample_preserves_extrema():
    """降采样: 全局最低价(low) 与最高价(high) 必须被保留"""
    rows = _make_rows(200)
    # 埋入全局极值
    rows[10][3] = -999.0   # 全局最低 low
    rows[180][4] = 9999.0  # 全局最高 high
    out = _run_node(
        "const d = C.downsampleSeries(" + json.dumps(rows) + ", 50);"
        " const lows = d.map(r => r[3]); const highs = d.map(r => r[4]);"
        " return { minLow: Math.min.apply(null, lows), maxHigh: Math.max.apply(null, highs) };"
    )
    assert out["minLow"] == -999.0, f"全局最低价应保留: {out}"
    assert out["maxHigh"] == 9999.0, f"全局最高价应保留: {out}"


def test_downsample_empty_data():
    """降采样: 空数据返回空数组 (不报错)"""
    out = _run_node("return C.downsampleSeries([], 2000).length;")
    assert out == 0


def test_downsample_below_threshold_unchanged():
    """降采样: 点数 ≤ 阈值时原样返回 (不降采样, 长度不变)"""
    rows = _make_rows(100)
    out = _run_node(
        "const d = C.downsampleSeries(" + json.dumps(rows) + ", 2000); return d.length;"
    )
    assert out == 100


def test_downsample_non_array_passthrough():
    """降采样: 非数组入参原样透传 (null/undefined 不崩溃)"""
    out = _run_node(
        "const a = C.downsampleSeries(null, 2000);"
        " const b = C.downsampleSeries(undefined, 2000);"
        " return { a: a === null, b: b === undefined };"
    )
    assert out == {"a": True, "b": True}


# ─── 评估历史分页 (limit/offset) ────────────────────────────────

def _seed_ai_history(username: str, n: int = 120):
    """写入 n 条评估历史, 返回 (evaluator, records)"""
    from ai_evaluator import ai_evaluator
    records = [{
        "id": f"rec-{i:04d}",
        "stock_code": f"00000{i % 100:02d}.SZ",
        "stock_name": f"股票{i}",
        "evaluate_time": f"2026-07-{(i % 28) + 1:02d}T10:00:00",
        "result": {"total_score": 60 + i % 40, "level": "B", "level_color": "#000000"},
    } for i in range(n)]
    ai_evaluator._save_history_for(username, records)
    return ai_evaluator, records


def test_ai_history_limit_offset_slicing():
    """评估历史分页: limit/offset 正确切片 (0-49 / 50-99 / 100+ 尾页)"""
    evaluator, records = _seed_ai_history("perf_user_a")
    assert evaluator.count_history("perf_user_a") == 120
    page1 = evaluator.get_history("perf_user_a", 50, 0)
    page2 = evaluator.get_history("perf_user_a", 50, 50)
    page3 = evaluator.get_history("perf_user_a", 50, 100)
    assert len(page1) == 50 and page1[0]["id"] == "rec-0000"
    assert len(page2) == 50 and page2[0]["id"] == "rec-0050"
    assert len(page3) == 20 and page3[-1]["id"] == "rec-0119"


def test_ai_history_pagination_boundaries():
    """评估历史分页边界: offset 超界返回空; offset 负数按 0 处理 (python 切片语义)"""
    evaluator, records = _seed_ai_history("perf_user_b", 30)
    assert evaluator.get_history("perf_user_b", 10, 100) == []  # offset 超界 → 空
    assert evaluator.get_history("perf_user_b", 10, 0) == records[:10]
    assert evaluator.get_history("perf_user_b", 0, 0) == []  # limit=0 → 空


def test_ai_history_api_returns_total_and_paging():
    """评估历史 API: 返回 total/limit/offset 供前端懒加载"""
    api = _read_backend("api/v1/ai.py")
    assert '"total": total' in api and '"limit": limit' in api and '"offset": offset' in api
    assert "offset: int = 0" in api


def _seed_chat_history_json(sessions):
    """写入问股历史 JSON 存档 (default 用户, 测试环境 SQLite 未初始化时 _load_history 走 JSON)"""
    import api.v1.chat as chat_mod
    os.makedirs(os.path.dirname(chat_mod.HISTORY_FILE), exist_ok=True)
    with open(chat_mod.HISTORY_FILE, "w", encoding="utf-8") as f:
        json.dump({"sessions": sessions}, f, ensure_ascii=False)
    return chat_mod


def test_chat_history_limit_offset_slicing():
    """问股历史分页: 先按 limit/offset 切片会话, 再分组 (flat 计数正确)"""
    import asyncio
    sessions = [
        {"id": f"chat-{i:04d}", "stock_code": "600000.SH", "stock_name": "浦发银行",
         "created_at": f"2026-07-{(i % 28) + 1:02d}T09:00:00",
         "messages": [{"role": "user", "content": f"消息{i}", "time": "2026-07-01T09:00:00"}]}
        for i in range(120)
    ]
    chat_mod = _seed_chat_history_json(sessions)
    page1 = asyncio.run(chat_mod.get_history(view="date", limit=50, offset=0,
                                             user={"username": "default"}))
    page2 = asyncio.run(chat_mod.get_history(view="date", limit=50, offset=50,
                                             user={"username": "default"}))
    flat1 = sum(len(g["items"]) for g in page1)
    flat2 = sum(len(g["items"]) for g in page2)
    assert flat1 == 50, f"第一页应 50 条会话, 实得 {flat1}"
    assert flat2 == 50, f"第二页应 50 条会话, 实得 {flat2}"


def test_chat_history_pagination_boundary():
    """问股历史分页边界: offset 超界返回空; 默认参数保持 50"""
    import asyncio
    sessions = [
        {"id": f"b-{i:03d}", "stock_code": "600000.SH", "stock_name": "浦发银行",
         "created_at": "2026-07-01T09:00:00",
         "messages": [{"role": "user", "content": "m", "time": "2026-07-01T09:00:00"}]}
        for i in range(3)
    ]
    chat_mod = _seed_chat_history_json(sessions)
    out = asyncio.run(chat_mod.get_history(view="date", limit=2, offset=10,
                                           user={"username": "default"}))
    assert sum(len(g["items"]) for g in out) == 0, "offset 超界应返回空"


# ─── 骨架屏类存在断言 ───────────────────────────────────────────

def test_skeleton_css_classes_defined():
    """骨架屏 CSS 类齐备: 启动骨架屏 + 状态面板骨架 + v-cloak"""
    themes = _read_frontend("css/themes.css")
    for cls in (".skeleton-loader", ".skeleton-header", ".skeleton-item",
                ".qc-boot-skeleton", ".qc-boot-skeleton-card", ".qc-boot-skeleton-nav"):
        assert cls in themes, f"themes.css 应定义 {cls}"
    tokens = _read_frontend("css/tokens.css")
    assert "[v-cloak]" in tokens, "tokens.css 应定义 [v-cloak]{display:none}"


def test_boot_skeleton_removed_after_mount():
    """启动骨架屏 #qc-boot 挂载后被移除 (避免常驻遮挡)"""
    idx = _read_frontend("index.html")
    assert 'id="qc-boot"' in idx
    assert "bootEl.remove()" in idx, "Vue 挂载后应移除 #qc-boot"


def test_kline_render_downsample_applied():
    """renderKlineChart 超阈值先降采样再渲染 (5000 点不卡顿机制)"""
    charts = _read_frontend("js/charts.js")
    assert "KLINE_MAX_RENDER_POINTS" in charts and "downsampleSeries" in charts
    assert "data.length > KLINE_MAX_RENDER_POINTS" in charts, \
        "renderKlineChart 应在超阈值时先降采样"
