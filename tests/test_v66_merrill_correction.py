"""v6.6 M2: 美林时钟数据订正与可追溯性门禁 (T-6.6.15 ~ T-6.6.20)

背景 (EVAL-v6.6 §3.1.2 / PRD FR-6.6.4, 决策 D4/D8):
  修复宏观指标抓取后, 阶段结论**必然变化**（旧数据 CPI/PPI/GDP/M2 被写入 0,
  导致全期误判为「衰退」; 真实值 CPI 0.1 / PPI -3.6 / GDP 5.0 / M2 7.2 → 复苏)。
  用户已确认 D4: **零删除**, 只归档 + 标记; D8: 接受结论变化 + 前端显示订正角标。

守护:
  A. 订正必须留痕: 被重算的记录带 archived / recomputed_at / recomputed_from;
  B. 历史条数不得减少（零删除）；
  C. API 必须暴露 as_of 与订正信息, 前端可显示「数据订正于 YYYY-MM-DD」;
  D. 重复执行订正必须幂等（不得重复叠加或无限增长）。

对应文档: docs/PRD-v6.6.md FR-6.6.4 / AC-11, AC-12
          docs/DEV&TEST-PLAN-6.6.md §7 数据订正 runbook
"""
import json
import os
import sys
from datetime import datetime

import pytest

BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, BASE)
sys.path.insert(0, os.path.join(BASE, "backend"))


def _corr():
    """订正归档模块（实现由 TDD 驱动）"""
    from merrill_clock import _correction as mod
    return mod


def test_correction_module_exists():
    from merrill_clock import _correction  # noqa: F401


# ── A. 标记结构 ──
def test_mark_snapshot_adds_provenance():
    m = _corr()
    snap = {"timestamp": "2026-09-28T17:49:15", "stage": "recession", "stage_name": "衰退期"}
    out = m.mark_corrected(snap, reason="宏观指标抓取修复", at="2026-10-30")
    assert out["archived"] is True
    assert out["recomputed_at"] == "2026-10-30"
    assert out["recomputed_from"] == "宏观指标抓取修复"
    assert out["legacy"] is True, "旧结论应标记 legacy 以示非当前口径"


def test_mark_is_idempotent():
    """重复标记不得覆盖首次订正时间（保证可追溯）"""
    m = _corr()
    snap = {"timestamp": "2026-09-28T17:49:15", "stage": "recession"}
    once = m.mark_corrected(snap, reason="修复A", at="2026-10-30")
    twice = m.mark_corrected(once, reason="修复B", at="2026-11-15")
    assert twice["recomputed_at"] == "2026-10-30", "首次订正时间被覆盖"
    assert twice["recomputed_from"] == "修复A", "首次订正原因被覆盖"


# ── B. 零删除 ──
def test_archive_never_drops_records():
    m = _corr()
    snaps = [{"timestamp": f"2026-09-{d:02d}T10:00:00", "stage": "recession"} for d in range(1, 6)]
    out = m.archive_snapshots(snaps, reason="修复", at="2026-10-30", before="2026-10-30")
    assert len(out) == len(snaps), "归档不得删除任何记录"
    assert all(x.get("archived") for x in out)


def test_archive_only_marks_records_before_cutoff():
    m = _corr()
    snaps = [
        {"timestamp": "2026-09-01T10:00:00", "stage": "recession"},
        {"timestamp": "2026-10-30T10:00:00", "stage": "recovery"},
    ]
    out = m.archive_snapshots(snaps, reason="修复", at="2026-10-30", before="2026-10-30")
    assert out[0]["archived"] is True
    assert not out[1].get("archived"), "订正之后的记录不该被标记为归档"


# ── C. API 元信息 ──
def test_correction_meta_exposes_as_of(tmp_path):
    m = _corr()
    path = tmp_path / "meta.json"
    m.write_correction_meta(
        str(path), reason="宏观指标抓取修复", at="2026-10-30", affected=42,
    )
    meta = json.loads(path.read_text(encoding="utf-8"))
    assert meta["as_of"] == "2026-10-30"
    assert meta["affected"] == 42
    assert "数据订正于" in meta["label"]
    assert "2026-10-30" in meta["label"]


def test_correction_meta_read_back(tmp_path):
    m = _corr()
    path = tmp_path / "meta.json"
    assert m.read_correction_meta(str(path)) is None, "不存在时应返回 None"
    m.write_correction_meta(str(path), reason="r", at="2026-10-30", affected=1)
    got = m.read_correction_meta(str(path))
    assert got["as_of"] == "2026-10-30"


def test_correction_meta_keeps_history(tmp_path):
    """多次订正应保留历史, 不只留最后一次（D4 可追溯）"""
    m = _corr()
    path = tmp_path / "meta.json"
    m.write_correction_meta(str(path), reason="修复A", at="2026-10-30", affected=10)
    m.write_correction_meta(str(path), reason="修复B", at="2026-11-20", affected=3)
    meta = json.loads(path.read_text(encoding="utf-8"))
    assert meta["as_of"] == "2026-11-20", "as_of 应是最新一次"
    assert len(meta["history"]) == 2, "订正历史必须保留两次记录"


# ── D. 幂等 ──
def test_repeated_archive_idempotent():
    m = _corr()
    snaps = [{"timestamp": "2026-09-01T10:00:00", "stage": "recession"}]
    once = m.archive_snapshots(snaps, reason="修复", at="2026-10-30", before="2026-10-30")
    twice = m.archive_snapshots(once, reason="修复", at="2026-10-31", before="2026-10-30")
    assert len(twice) == 1
    assert twice[0]["recomputed_at"] == "2026-10-30", "重复归档改写了订正时间"


# ── API 接线护栏 ──
def _market_api_source():
    """聚合 api/v1 下所有行情相关路由源码。

    6.6 拆分了 market.py（新增端点独立为 market_extras.py 以满足 ≤700 行),
    因此按**包**搜索而不是钉死单个文件 —— 否则一次合理拆分会误判端点丢失。
    """
    d = os.path.join(BASE, "backend", "api", "v1")
    out = []
    for fn in ("market.py", "market_extras.py", "market_ws.py", "router.py"):
        path = os.path.join(d, fn)
        if os.path.isfile(path):
            out.append(open(path, encoding="utf-8").read())
    return "\n".join(out)


def test_correction_endpoints_registered():
    """API 必须提供读/写订正元信息端点（前端角标与 runbook 依赖它）"""
    src = _market_api_source()
    assert '"/merrill-clock/correction"' in src, "缺少订正元信息 GET 端点"
    assert "apply_merrill_correction" in src, "缺少订正执行端点"


def test_correction_endpoint_admin_only():
    """D5: 订正执行必须仅限 admin（写历史是高危操作）"""
    src = _market_api_source()
    # 取函数定义到下一个顶层装饰器/结束
    body = src.split("async def apply_merrill_correction", 1)[1]
    sig = body.split("\n", 2)[0] + body.split("\n", 2)[1]
    assert "get_admin_user" in sig, f"订正端点未限制 admin（签名: {sig!r}）"


def test_paths_has_correction_file():
    src = open(os.path.join(BASE, "backend", "paths.py"), encoding="utf-8").read()
    assert "MERRILL_CORRECTION_FILE" in src


def test_correction_never_deletes_on_disk(tmp_path):
    """end-to-end: 归档后文件条数不变（零删除）"""
    m = _corr()
    p = tmp_path / "snaps.json"
    snaps = [{"timestamp": f"2026-09-{d:02d}T10:00:00", "stage": "recession"} for d in range(1, 4)]
    p.write_text(json.dumps(snaps), encoding="utf-8")
    before = len(json.loads(p.read_text(encoding="utf-8")))
    data = archive = m.archive_snapshots(json.loads(p.read_text(encoding="utf-8")),
                                        reason="修复", at="2026-10-30", before="2026-10-30")
    p.write_text(json.dumps(archive), encoding="utf-8")
    after = len(json.loads(p.read_text(encoding="utf-8")))
    assert before == after == 3, f"记录数变化 {before}->{after}（违反零删除）"
    assert data[0]["archived"] is True


# ── 前端角标接线护栏 ──
def test_frontend_correction_badge_wired():
    """AC-12: 阶段旁必须显示「数据订正于 YYYY-MM-DD」角标, 并解释原因"""
    tpl = open(os.path.join(BASE, "frontend", "js", "components", "strategies",
                            "view-part1.js"), encoding="utf-8").read()
    assert "merrillCorrection" in tpl, "模板未引用订正元信息"
    assert "merrill-correction-badge" in tpl, "缺少订正角标样式类"
    assert "merrillCorrection.label" in tpl, "角标未显示订正日期标签"
    assert "merrillCorrection.reason" in tpl, "角标未解释订正原因"


def test_frontend_correction_three_layer_wiring():
    """三层接线: merrill 域导出 → app-logic 域解构 → qcState（漏一层即整块不渲染）"""
    merrill = open(os.path.join(BASE, "frontend", "js", "merrill.js"), encoding="utf-8").read()
    assert merrill.count("merrillCorrection") >= 2, "merrill.js 未导出订正状态"
    al = open(os.path.join(BASE, "frontend", "js", "app-logic.js"), encoding="utf-8").read()
    assert al.count("merrillCorrection") >= 2, "app-logic 未逐层透传 merrillCorrection"


def test_correction_badge_css_tokenized():
    """令牌纪律: 角标样式禁止硬编码颜色"""
    css = open(os.path.join(BASE, "frontend", "css", "themes-pages.css"), encoding="utf-8").read()
    assert ".merrill-correction-badge" in css
    block = css.split(".merrill-correction-badge {")[1].split("}")[0]
    import re as _re
    hard = _re.findall(r"#[0-9a-fA-F]{3,8}\b", block)
    assert not hard, f"角标样式含硬编码色值: {hard}"
