# -*- coding: utf-8 -*-
"""6.4.5 测试与工程质量测试 (FR-651 / FR-652)

覆盖口径 (对应 docs/DEV&TEST-PLAN-6.4-6.5.X.md):
- TC-651-01 network 标记已注册且默认门禁排除
- TC-651-02 联网类用例已打 network 标记或已 mock 化 (抽查改造文件)
- TC-652-01 门禁三层独立可见 (CI: layer1/layer2 独立 job, 下游挂第②层)
- TC-652-02 变更覆盖率: 阈值 60/70, 核心模块口径, 违规输出文件+行号+修复命令
- TC-652-02b parse_diff 行号解析与 evaluate 门禁判定 (含人为构造未覆盖分支)
- TC-652-03 门禁失败输出可操作修复命令 (bundle/p95/diff-cov)
- TC-652-04 CI 主门禁命令含 "not e2e and not network"
"""
import importlib.util
import json
import os

import pytest

BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))


def _load(name):
    path = os.path.join(BASE, name)
    spec = importlib.util.spec_from_file_location(name.replace("/", "_").replace(".py", ""), path)
    mod = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(mod)
    return mod


def _read(*parts):
    with open(os.path.join(BASE, *parts), encoding="utf-8") as f:
        return f.read()


def test_tc651_01_network_marker_registered():
    """TC-651-01: network 标记注册于 pyproject (与 e2e 同级)"""
    cfg = _read("pyproject.toml")
    assert '"network: 真实联网用例' in cfg or "'network: 真实联网用例" in cfg
    assert "not e2e and not network" in cfg


def test_tc651_02_network_cases_marked():
    """TC-651-02: 真实联网用例文件含 network 标记或 importorskip/skipif 处置"""
    # 抽查 6.4.5 改造的联网类测试文件 (autouse 封闭化夹具: 剔除需真实凭证的源)
    targets = ["tests/test_shortterm_data_source.py", "tests/test_shortterm_lhb.py",
               "tests/test_config_v530.py", "tests/test_kline_minute_v540.py"]
    for rel in targets:
        path = os.path.join(BASE, rel)
        assert os.path.isfile(path), f"{rel} 应存在"
        src = _read(*rel.split("/"))
        ok = ("pytest.mark.network" in src or "importorskip" in src
              or "skipif" in src or "monkeypatch" in src
              or "autouse" in src or "mock" in src.lower())
        assert ok, f"{rel} 未做联网/依赖处置"


def test_tc652_01_ci_layers_visible():
    """TC-652-01: CI 三层独立 job — layer1(lint/契约) → layer2(单测) → 下游"""
    ci = _read(".github", "workflows", "ci.yml")
    assert "layer1-lint-contract:" in ci
    assert "layer2-unit-tests:" in ci
    assert "needs: layer1-lint-contract" in ci
    # 下游 (拆分对拍/RBAC/PIT/性能/体积) 挂在第②层之后
    assert ci.count("needs: layer2-unit-tests") >= 5
    # 第③层 (e2e 视觉 + 体积) 仍为独立 job
    assert "e2e-visual:" in ci and "bundle-size-gate:" in ci


def test_tc652_02_diff_coverage_gate():
    """TC-652-02: 变更覆盖率口径 — 阈值/核心模块/违规定位"""
    mod = _load("scripts/check_diff_coverage.py")
    assert mod.DEFAULT_THRESHOLD == 60 and mod.CORE_THRESHOLD == 70
    assert mod.threshold_for("backend/freshness.py") == 70
    assert mod.threshold_for("backend/scheduler/jobs.py") == 70
    assert mod.threshold_for("backend/ai_eval/_eval_core.py") == 70
    assert mod.threshold_for("backend/api/v1/chat.py") == 60
    # evaluate: 人为构造未覆盖分支 → 违规含文件与行号
    changed = {"backend/demo.py": {1, 2, 3, 4}, "backend/freshness.py": {10, 11}}
    covered = {"backend/demo.py": {1, 2, 3}}
    report = mod.evaluate(changed, covered)
    assert report["passed"] is False
    v = report["violations"][0]
    assert v["file"] == "backend/freshness.py"
    assert v["pct"] == 0.0 and v["threshold"] == 70
    assert v["missed_lines"] == [10, 11]
    # 全覆盖 → 通过
    ok = mod.evaluate(changed, {"backend/demo.py": {1, 2, 3, 4},
                                "backend/freshness.py": {10, 11}})
    assert ok["passed"] is True and ok["overall_pct"] == 100.0


def test_tc652_02b_parse_diff():
    """TC-652-02b: 统一 diff 解析 — 新增行收集, 上下文推进, 删除不影响行号"""
    mod = _load("scripts/check_diff_coverage.py")
    diff = """--- a/backend/x.py
+++ b/backend/x.py
@@ -1,3 +1,5 @@
 context
+added1
+added2
 still context
-removed
+added3
"""
    out = mod.parse_diff(diff)
    assert out["backend/x.py"] == {2, 3, 5}
    # 非 py 文件可在上层过滤; 空差异 → {}
    assert mod.parse_diff("no diff here") == {}


def test_tc652_02c_cli_missing_cov_hint(capsys):
    """TC-652-02c: 覆盖率文件缺失 → 给出重新生成命令并退出码 1"""
    mod = _load("scripts/check_diff_coverage.py")
    rc = mod.main(["--cov", os.path.join(BASE, "nope", "coverage.json")])
    assert rc == 1
    out = capsys.readouterr().out
    assert "--cov-report=json:coverage.json" in out


def test_tc652_03_gate_failure_prints_fix_command(tmp_path, capsys):
    """TC-652-03: 三类门禁失败均输出可操作修复命令"""
    # 体积门禁
    bundle = _load("scripts/report_bundle_size.py")
    dist = tmp_path / "dist"
    (dist / "assets").mkdir(parents=True)
    (dist / "assets" / "index-x.js").write_bytes(b"x" * (500 * 1024))
    bundle.main(["--dist", str(dist)])
    assert "修复建议" in capsys.readouterr().out
    # 变更覆盖率门禁
    dcov = _load("scripts/check_diff_coverage.py")
    covfile = tmp_path / "coverage.json"
    covfile.write_text(json.dumps({
        "files": {os.path.join(BASE, "backend", "demo.py"):
                  {"executed_lines": [1]}}
    }), encoding="utf-8")
    difffile = tmp_path / "changes.diff"
    difffile.write_text(
        "--- a/backend/demo.py\n+++ b/backend/demo.py\n"
        "@@ -0,0 +1,2 @@\n+line1\n+line2\n", encoding="utf-8")
    rc = dcov.main(["--cov", str(covfile), "--diff-file", str(difffile), "--gate"])
    out = capsys.readouterr().out
    assert rc == 1
    assert "修复命令" in out and "backend/demo.py" in out


def test_tc652_04_ci_main_gate_excludes_network():
    """TC-652-04: CI 主门禁命令排除 e2e 与 network"""
    ci = _read(".github", "workflows", "ci.yml")
    assert '-m "not e2e and not network"' in ci
