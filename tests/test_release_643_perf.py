# -*- coding: utf-8 -*-
"""6.4.3 运行效率测试 (FR-647 / FR-648)

覆盖口径 (对应 docs/DEV&TEST-PLAN-6.4-6.5.X.md):
- TC-647-01 体积阈值口径 (总量 1800KB / 首屏业务 JS 400KB / Element Plus 600KB)
- TC-647-02 体积报告与门禁 (raw + gzip, 超阈值退出码 1, 输出超出 chunk)
- TC-647-03 基线脚本 measure_baseline.py 可运行并产出关键指标
- TC-647-04 CI 接入构建 + 体积门禁 (npm build → report_bundle_size.py --gate)
- TC-648-01 Top10 热点接口清单 + P95 ≤300ms 口径
- TC-648-01b 服务不可达时跳过采样且不失败
- TC-648-02 长列表虚拟滚动覆盖 (AI 历史 / 研究列表 / 短线日期 / 系统审计)
- TC-648-03 图表 >5,000 点降采样 (K 线阈值严于 PRD)
- TC-648-04 长任务观测核心逻辑 (阈值/聚合/分位/门禁)
- TC-648-04b 长任务事件接线 (main.js 引入 + 前后端事件白名单一致)
"""
import importlib.util
import json
import os
import shutil
import subprocess
import sys

import pytest

BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
JS = os.path.join(BASE, "frontend", "js")
SCRIPTS = os.path.join(BASE, "scripts")
NEEDS_NODE = pytest.mark.skipif(shutil.which("node") is None, reason="node 不可用")


def _load_script(name):
    path = os.path.join(SCRIPTS, name)
    spec = importlib.util.spec_from_file_location(name.replace(".py", ""), path)
    mod = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(mod)
    return mod


def _run_js(module_file, script):
    path = os.path.join(JS, module_file)
    code = (
        "const M = require(process.argv[1]);\n"
        "const P = M;\n"
        "const out = (function(){\n" + script + "\n})();\n"
        "process.stdout.write(JSON.stringify(out));\n"
    )
    proc = subprocess.run(["node", "-e", code, path],
                          capture_output=True, text=True, timeout=20)
    assert proc.returncode == 0, f"node 执行失败: {proc.stderr}"
    return json.loads(proc.stdout)


def _read(*parts):
    with open(os.path.join(BASE, *parts), encoding="utf-8") as f:
        return f.read()


# ═══════════════════ FR-647 首屏资源预算与分包 ═══════════════════

def test_tc647_01_bundle_thresholds():
    """TC-647-01: 阈值口径与 PRD G6 完全一致"""
    mod = _load_script("report_bundle_size.py")
    t = mod.DEFAULT_THRESHOLDS
    assert t["total_kb"] == 1800
    assert t["entry_kb"] == 400
    assert t["element_plus_kb"] == 600


def test_tc647_01b_classify_groups():
    """TC-647-01b: 产物归类 (vendor / entry / css) 不串档"""
    mod = _load_script("report_bundle_size.py")
    assert mod.classify("assets/vendor-ep-AbC.js") == "vendor-element-plus"
    assert mod.classify("assets/vendor-vue-XyZ.js") == "vendor-vue"
    assert mod.classify("assets/vendor-lucide-Q.js") == "vendor-lucide"
    assert mod.classify("assets/index-ClaVIH8c.js") == "entry"
    assert mod.classify("assets/index-Buo7wCeI.css") == "css"
    assert mod.classify("assets/logo.svg") == "other"


def test_tc647_02_report_detects_violations(tmp_path):
    """TC-647-02: 超阈值产出 violations，且 gzip 小于 raw"""
    mod = _load_script("report_bundle_size.py")
    dist = tmp_path / "dist"
    (dist / "assets").mkdir(parents=True)
    (dist / "assets" / "index-big.js").write_bytes(b"var a=1;\n" * 50000)      # ~450KB
    (dist / "assets" / "vendor-ep-huge.js").write_bytes(b"var b=2;\n" * 80000)  # ~720KB
    (dist / "assets" / "vendor-vue-small.js").write_bytes(b"var c=3;\n" * 200)
    (dist / "assets" / "index-small.css").write_bytes(b".a{color:red}\n" * 100)

    report = mod.build_report(str(dist))
    assert report["passed"] is False
    rules = {v["rule"] for v in report["violations"]}
    assert "首屏业务 JS" in rules and "Element Plus" in rules
    entry = next(v for v in report["violations"] if v["rule"] == "首屏业务 JS")
    assert entry["file"].endswith("index-big.js")
    assert entry["actual_kb"] > 400
    for f in report["files"]:
        assert f["gzip_kb"] < f["raw_kb"], f"{f['file']} gzip 不应大于 raw"
    text = mod.format_report(report)
    assert "修复建议" in text and "index-big.js" in text


def test_tc647_02b_gate_exit_code(tmp_path, capsys):
    """TC-647-02b: --gate 超阈值退出码 1；达标退出码 0"""
    mod = _load_script("report_bundle_size.py")
    bad = tmp_path / "bad"
    (bad / "assets").mkdir(parents=True)
    (bad / "assets" / "index-x.js").write_bytes(b"x" * (500 * 1024))
    assert mod.main(["--dist", str(bad), "--gate"]) == 1

    ok = tmp_path / "ok"
    (ok / "assets").mkdir(parents=True)
    (ok / "assets" / "index-x.js").write_bytes(b"x" * (100 * 1024))
    assert mod.main(["--dist", str(ok), "--gate"]) == 0
    assert "全部体积阈值通过" in capsys.readouterr().out


def test_tc647_02c_missing_dist_reports_hint(tmp_path):
    """TC-647-02c: dist 缺失给出可操作提示，不抛异常"""
    mod = _load_script("report_bundle_size.py")
    report = mod.build_report(str(tmp_path / "nope"))
    assert report["passed"] is False
    assert "npm --prefix frontend run build" in report["hint"]


def test_tc647_03_measure_baseline_runs(tmp_path):
    """TC-647-03: 基线脚本可运行并产出代码规模/设计债指标"""
    out = tmp_path / "baseline.json"
    proc = subprocess.run([sys.executable, os.path.join(SCRIPTS, "measure_baseline.py"),
                           "--all", "--json", str(out)],
                          capture_output=True, text=True, timeout=180, cwd=BASE)
    assert proc.returncode == 0, proc.stderr[-2000:]
    data = json.loads(out.read_text(encoding="utf-8"))
    for key in ("code",):
        assert key in data
    code = data["code"]
    assert code["backend_py_files"] > 100
    assert code["frontend_js_files"] > 50


def test_tc647_04_ci_bundle_gate():
    """TC-647-04: CI 接入 npm build + 体积门禁，并输出报告工件"""
    ci = _read(".github", "workflows", "ci.yml")
    assert "bundle-size-gate" in ci
    assert "npm --prefix frontend ci" in ci.replace("npm ci --prefix frontend", "npm --prefix frontend ci")
    assert "npm --prefix frontend run build" in ci
    assert "report_bundle_size.py --gate" in ci


# ═══════════════════ FR-648 接口与渲染性能门禁 ═══════════════════

def test_tc648_01_p95_endpoint_coverage():
    """TC-648-01: Top10 清单覆盖 health/行情/策略/日历/新鲜度等域, 阈值 300ms"""
    mod = _load_script("probe_api_p95.py")
    assert mod.P95_LIMIT_MS == 300
    eps = mod.TOP_ENDPOINTS
    assert len(eps) == 10
    paths = {e["path"] for e in eps}
    for need in ("/api/health", "/api/market/overview", "/api/calendar/dates",
                 "/api/strategies/execution/status", "/api/reliability/freshness"):
        assert need in paths, f"Top10 缺少 {need}"
    names = {e["name"] for e in eps}
    assert len(names) == len(eps), "接口名不可重复"
    assert sum(1 for e in eps if not e["auth"]) == 1, "仅 health 免鉴权"


def test_tc648_01b_p95_unreachable_skips(monkeypatch, capsys):
    """TC-648-01b: 服务未监听 → skipped 且退出码 0（不阻塞无服务环境）"""
    mod = _load_script("probe_api_p95.py")
    monkeypatch.setattr(mod, "_reachable", lambda *a, **k: False)
    assert mod.main(["--base-url", "http://127.0.0.1:9", "--gate"]) == 0
    out = capsys.readouterr().out
    assert "skipped" in out and "服务未监听" in out


def test_tc648_01c_p95_flags_slow_endpoint(monkeypatch):
    """TC-648-01c: 采样超阈值进 violations（用桩替换真实请求）"""
    mod = _load_script("probe_api_p95.py")
    calls = {"n": 0}

    def fake_request(url, token="", timeout=10.0):
        calls["n"] += 1
        return 200, 420.0 if calls["n"] % 2 else 120.0

    monkeypatch.setattr(mod, "_request", fake_request)
    report = mod.probe("http://127.0.0.1:8001", token="t", rounds=4,
                       endpoints=[{"name": "x", "path": "/api/x", "auth": True}])
    assert report["passed"] is False
    assert report["violations"][0]["name"] == "x"
    assert report["results"][0]["p95_ms"] > 300


def test_tc648_02_virtual_list_coverage():
    """TC-648-02: 长列表（AI 历史/研究/短线/系统）均使用虚拟滚动"""
    targets = [
        ("frontend", "js", "components", "ai", "view-part1.js"),
        ("frontend", "js", "components", "ai", "view-part2.js"),
        ("frontend", "js", "components", "research", "view-part2.js"),
        ("frontend", "js", "components", "shortterm", "view-part1.js"),
        ("frontend", "js", "components", "system", "view-part1.js"),
    ]
    for parts in targets:
        src = _read(*parts)
        assert "qc-virtual-list" in src, f"{'/'.join(parts)} 未使用虚拟滚动"
        assert "row-height" in src, f"{'/'.join(parts)} 未声明固定行高"


def test_tc648_03_chart_downsample_threshold():
    """TC-648-03: 图表降采样阈值严于 PRD 的 5,000 点"""
    mod = _load_script("report_bundle_size.py")  # 仅确保脚本可载入，非本用例依赖
    assert mod is not None
    core = _run_js("perf-core.js", "return { thr: P.CHART_DOWNSAMPLE_POINTS };")
    assert core["thr"] == 5000
    charts = _read("frontend", "js", "charts.js")
    assert "downsampleSeries" in charts
    marker = "const KLINE_MAX_RENDER_POINTS = "
    idx = charts.index(marker) + len(marker)
    value = int(charts[idx:charts.index(";", idx)].strip())
    assert 0 < value <= 5000, f"K 线降采样阈值 {value} 应 ≤5000"
    assert "downsampleSeries(data, KLINE_MAX_RENDER_POINTS)" in charts


@NEEDS_NODE
def test_tc648_04_long_task_core():
    """TC-648-04: 长任务阈值 200ms 边界 + 聚合 + 门禁"""
    out = _run_js("perf-core.js", """
        const cap = P.MAX_KEEP;
        const full = [];
        for (let i = 0; i < cap; i++) full.push({duration: 100 + i, name: 't', at: i});
        const added = P.record(full, {duration: 260.4, name: 'longtask', at: 1});
        const ignored = P.record([], null);
        return {
            thr: P.LONG_TASK_MS,
            b199: P.isLongTask(199),
            b200: P.isLongTask(200),
            b201: P.isLongTask(201),
            kept: added.entries.length,
            firstDur: added.entries[0].duration,
            lastDur: added.entries[added.entries.length - 1].duration,
            addedFlag: added.added,
            ignoredFlag: ignored.added,
            ignoredLen: ignored.entries.length,
            p95: P.percentile([120, 250, 30, 400, 90], 95),
            emptyP95: P.percentile([], 95),
            sum: P.summarize([{duration: 250}, {duration: 120}]),
            okGate: P.gate([], 0).ok,
            badGate: P.gate([{duration: 210}], 0),
            ds5000: P.needsDownsample(5000),
            ds5001: P.needsDownsample(5001),
        };
    """)
    assert out["thr"] == 200
    assert out["b199"] is False and out["b200"] is False and out["b201"] is True
    assert out["kept"] == 200, "记录上限应保持 MAX_KEEP"
    assert out["firstDur"] == 101, "溢出应淘汰最旧一条"
    assert out["lastDur"] == 260
    assert out["addedFlag"] is True and out["ignoredFlag"] is False
    assert out["ignoredLen"] == 0
    assert out["p95"] == 400
    assert out["emptyP95"] == 0
    assert out["sum"]["count"] == 2 and out["sum"]["max_ms"] == 250
    assert out["sum"]["p95_ms"] == 250 and out["sum"]["threshold_ms"] == 200
    assert out["okGate"] is True
    assert out["badGate"]["ok"] is False and out["badGate"]["count"] == 1
    assert out["ds5000"] is False and out["ds5001"] is True


def test_tc648_04b_long_task_event_wired():
    """TC-648-04b: main.js 引入观测器；前后端 perf_long_task 白名单一致"""
    main = _read("frontend", "src", "main.js")
    assert "perf-core.js" in main and "perf-observer.js" in main
    assert main.index("import '../js/perf-observer.js'") < main.index("import '../js/core.js'"), \
        "观测器须先于业务模块加载"

    obs = _read("frontend", "js", "perf-observer.js")
    assert "PerformanceObserver" in obs
    assert "perf_long_task" in obs
    assert "isLongTask" in obs

    track = _read("frontend", "js", "event-track.js")
    assert "perf_long_task" in track
    analytics = _read("backend", "api", "v1", "analytics.py")
    assert "perf_long_task" in analytics
