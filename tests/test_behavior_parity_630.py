# -*- coding: utf-8 -*-
"""6.3.0 (T-6.3.0.1): 结构分治行为对拍门禁

结构分治（前端页面按视图/状态/取数三段拆分、后端大模块按职责拆分）不承载功能变更，
因此拆分前先把「拆分前的行为」固化为黄金快照，拆分后逐项复核：

- 前端组件公开面 — 注册名 / 模板指纹 / 样式类清单 / 图标 / 插值键 / 指令 / setup 返回键
- 后端聚合类公开面 — AIEvaluator / Scheduler / DataSourceManager 的方法名集合
- 后端原导入路径公开面 — 拆分后必须仍能从原路径取到同样的公开名
- 状态域注册表模块对拍 — Node 侧加载 state-registry-core.js，比对关键输出

黄金快照重建：设置环境变量 ``QC_PARITY_REGEN=1`` 后再跑本文件（仅在拆分前有意重建时使用）。
"""
import os
import sys

import pytest

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))

import behavior_parity as bp  # noqa: E402

REGEN = os.environ.get("QC_PARITY_REGEN") == "1"

# 本批（6.3.0）拆分对象：后端三个大模块 + 其聚合类
SPLIT_MODULES = ["ai_eval._eval", "scheduler._core", "data_sources._manager"]
AGGREGATE_CLASSES = [
    "ai_eval.AIEvaluator",
    "scheduler.Scheduler",
    "data_sources._manager.DataSourceManager",
]

# 状态域注册表：复用 6.1.7 用例语义，改为模块对拍形式（拆分 state-registry-core.js 时直接受守）
STATE_REGISTRY_JS = os.path.join(bp.FRONTEND, "js", "state-registry-core.js")
REGISTRY_CASES = [
    ("define_attach_get",
     "const r = SR.createStateRegistry();"
     "r.defineDomain('theme', ['hue', 'mode']);"
     "let hue = { value: 45 }, mode = { value: 'light' };"
     "r.attach('theme', 'hue', hue); r.attach('theme', 'mode', mode);"
     "return [r.has('theme','hue'), r.get('theme','mode'), r.domains(), r.attachedCount()];"),
    ("duplicate_domain_rejected",
     "const r = SR.createStateRegistry();"
     "r.defineDomain('theme', ['hue']);"
     "let err = '';"
     "try { r.defineDomain('theme', ['x']); } catch (e) { err = e.message; }"
     "return err;"),
    ("cross_domain_duplicate_key_rejected",
     "const r = SR.createStateRegistry();"
     "r.defineDomain('theme', ['hue']);"
     "let err = '';"
     "try { r.defineDomain('auth', ['hue']); } catch (e) { err = e.message; }"
     "return err;"),
    ("attach_unknown_domain_rejected",
     "const r = SR.createStateRegistry();"
     "let err = '';"
     "try { r.attach('nope', 'k', { value: 1 }); } catch (e) { err = e.message; }"
     "return err;"),
    ("attach_undeclared_key_rejected",
     "const r = SR.createStateRegistry();"
     "r.defineDomain('theme', ['hue']);"
     "let err = '';"
     "try { r.attach('theme', 'nope', { value: 1 }); } catch (e) { err = e.message; }"
     "return err;"),
    ("snapshot_restore_parity",
     "const r = SR.createStateRegistry();"
     "r.defineDomain('page', ['loading', 'date']);"
     "let loading = { value: false }, date = { value: '2026-09-21' };"
     "r.attach('page', 'loading', loading); r.attach('page', 'date', date);"
     "const snap = r.snapshot('page');"
     "loading.value = true; date.value = '2026-09-22';"
     "r.restore('page', snap);"
     "return [loading.value, date.value, r.get('page', 'loading')];"),
]


def _run_registry_case(script):
    return bp.node_run(STATE_REGISTRY_JS, "const SR = M;\n" + script)


# ─── 基座自测：归一化 / 捕获 / 差异报告 ───────────────────────

def test_normalize_orders_sets_and_dicts():
    value = {"b": {3, 1, 2}, "a": (1, 2), "c": None}
    assert bp.normalize(value) == {"a": [1, 2], "b": [1, 2, 3], "c": None}


def test_normalize_keeps_scalars_intact():
    assert bp.normalize([0, 1.5, True, "x", None]) == [0, 1.5, True, "x", None]


def test_capture_records_exception_type_without_raising():
    def boom(x):
        if x < 0:
            raise ValueError("负值")
        return x * 2

    record = bp.capture(boom, [2, -1, 3])
    assert [item["ok"] for item in record] == [True, False, True]
    assert record[0]["out"] == 4
    assert record[1]["error"] == "ValueError"
    assert bp.capture(boom, [-1, 2]) != record, "顺序不同的用例不应视为同一份记录"


def test_diff_report_empty_when_identical():
    record = bp.capture(lambda x: x + 1, [1, 2, 3])
    assert bp.diff_report(record, record) == []


def test_diff_report_points_at_first_differing_item():
    expected = bp.capture(lambda x: x + 1, [1, 2, 3])
    actual = bp.capture(lambda x: x + 2, [1, 2, 3])
    diff = bp.diff_report(expected, actual)
    assert diff, "不同实现应产生差异"
    assert "第 0 项" in diff[0]
    with pytest.raises(AssertionError):
        bp.assert_parity("自测", expected, actual)


# ─── 前端组件公开面（拆分不改视图与公开面） ───────────────────

def test_frontend_component_fingerprints_unchanged():
    current = bp.js_component_fingerprints()
    if REGEN:
        bp.save_golden("frontend_components_630", current)
    golden = bp.load_golden("frontend_components_630")

    missing = sorted(set(golden) - set(current))
    assert not missing, "组件丢失（拆分不得改变注册名）: %s" % missing

    drifted = []
    for key in sorted(golden):
        exp, act = golden[key], current[key]
        if exp != act:
            fields = [f for f in sorted(exp) if exp[f] != act.get(f)]
            drifted.append("%s -> %s" % (key, ", ".join(fields)))
    assert not drifted, "组件公开面与拆分前不一致:\n" + "\n".join(drifted)


def test_frontend_fingerprint_sees_registration_name():
    """指纹以注册名为键，模板搬移到 other-path/index.js 后仍可命中"""
    fps = bp.js_component_fingerprints()
    assert "SystemPage" in fps and fps["SystemPage"]["name"] == "qc-system-page"
    assert "ResearchPage" in fps and fps["ResearchPage"]["name"] == "qc-research-page"


# ─── 后端聚合类与导入面 ───────────────────────────────────────

def _collect_backend_surfaces():
    return {
        "aggregate": {name: bp.py_class_surface(name) for name in AGGREGATE_CLASSES},
        "import_surface": {mod: bp.py_import_surface(mod) for mod in SPLIT_MODULES},
    }


@pytest.fixture(scope="module")
def backend_surfaces():
    current = _collect_backend_surfaces()
    if REGEN:
        bp.save_golden("backend_surfaces_630", current)
    return bp.load_golden("backend_surfaces_630"), current


def test_backend_aggregate_class_surface_unchanged(backend_surfaces):
    golden, current = backend_surfaces
    for name in AGGREGATE_CLASSES:
        lost = sorted(set(golden["aggregate"][name]) - set(current["aggregate"][name]))
        assert not lost, "%s 拆分后丢失方法: %s" % (name, lost)


def test_backend_original_import_path_still_exposes_names(backend_surfaces):
    """薄再导出：原导入路径的公开名不得减少"""
    golden, current = backend_surfaces
    for mod in SPLIT_MODULES:
        lost = sorted(set(golden["import_surface"][mod]) - set(current["import_surface"][mod]))
        assert not lost, "%s 原导入路径丢失公开名: %s（拆分后需保留薄再导出）" % (mod, lost)


# ─── 状态域注册表模块对拍（Node 侧） ──────────────────────────

@pytest.mark.skipif(bp.NEEDS_NODE, reason="node 不可用")
def test_state_registry_module_parity():
    current = {label: _run_registry_case(script) for label, script in REGISTRY_CASES}
    if REGEN:
        bp.save_golden("state_registry_cases_630", current)
    golden = bp.load_golden("state_registry_cases_630")
    for label in golden:
        assert current[label] == golden[label], "模块对拍不一致 [%s]: 期望 %s 实际 %s" % (
            label, golden[label], current[label])


@pytest.mark.skipif(bp.NEEDS_NODE, reason="node 不可用")
def test_node_run_reports_failure():
    """基座在 Node 侧报错时必须失败而非静默返回空结果"""
    with pytest.raises(AssertionError):
        bp.node_run(STATE_REGISTRY_JS, "throw new Error('boom');")