#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""T0-1: v6.4.0 基线度量 — 代码规模 / 构建体积 / 设计债计数。

用法:
    python scripts/measure_baseline.py --all           # 全量度量 → data/baseline.json
    python scripts/measure_baseline.py --all --json x  # 指定输出
    python scripts/measure_baseline.py --code          # 仅代码规模

T0 出口要求: 与 PRD 附录 A 数值对齐 (±5%)，否则在输出中标注偏差。
"""
from __future__ import annotations

import argparse
import json
import os
import re
import sys
from datetime import datetime

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(ROOT, "scripts"))

BACKEND = os.path.join(ROOT, "backend")
FRONTEND = os.path.join(ROOT, "frontend")
TESTS = os.path.join(ROOT, "tests")

# PRD 附录 A / §2 记分卡基线 (用于偏差提示)
PRD_BASELINE = {
    "backend_py_files": 238,
    "backend_lines": 37196,
    "api_endpoints": 298,
    "frontend_js_files": 99,
    "frontend_js_lines": 22659,
    "frontend_sfc_files": 9,
    "frontend_sfc_lines": 1565,
    "test_files": 377,
    "test_lines": 42732,
    "inline_style": 114,
    "old_responsive_classes": 27,
}


def _iter_files(root: str, exts: tuple[str, ...], skip_dirs: tuple[str, ...] = ()):
    for dirpath, dirnames, filenames in os.walk(root):
        dirnames[:] = [d for d in dirnames if d not in skip_dirs]
        for name in filenames:
            if name.endswith(exts):
                yield os.path.join(dirpath, name)


def _count_lines(path: str) -> int:
    try:
        with open(path, "r", encoding="utf-8", errors="ignore") as f:
            return sum(1 for _ in f)
    except OSError:
        return 0


def measure_code() -> dict:
    be = list(_iter_files(BACKEND, (".py",), ("__pycache__",)))
    js = list(_iter_files(os.path.join(FRONTEND, "js"), (".js",)))
    sfc = list(_iter_files(os.path.join(FRONTEND, "src"), (".vue",)))
    css = list(_iter_files(os.path.join(FRONTEND, "css"), (".css",)))
    tests = list(_iter_files(TESTS, (".py",), ("__pycache__",)))
    endpoints = 0
    tables = set()
    for path in be:
        with open(path, "r", encoding="utf-8", errors="ignore") as f:
            text = f.read()
        endpoints += len(re.findall(r"@(?:router|app)\.(?:get|post|put|delete|patch)\(['\"]", text))
        tables.update(re.findall(r"CREATE TABLE IF NOT EXISTS\s+([a-zA-Z_][a-zA-Z0-9_]*)", text, re.I))
    return {
        "backend_py_files": len(be),
        "backend_lines": sum(_count_lines(p) for p in be),
        "api_endpoints": endpoints,
        "db_tables": len(tables),
        "frontend_js_files": len(js),
        "frontend_js_lines": sum(_count_lines(p) for p in js),
        "frontend_sfc_files": len(sfc),
        "frontend_sfc_lines": sum(_count_lines(p) for p in sfc),
        "frontend_css_files": len(css),
        "frontend_css_lines": sum(_count_lines(p) for p in css),
        "test_files": len(tests),
        "test_lines": sum(_count_lines(p) for p in tests),
    }


def measure_design_debt() -> dict:
    inline = 0
    font_face = 0
    old_classes = 0
    dialog_widths: dict[str, int] = {}
    h1_pages = 0
    for path in _iter_files(os.path.join(FRONTEND, "js"), (".js",)):
        with open(path, "r", encoding="utf-8", errors="ignore") as f:
            text = f.read()
        inline += len(re.findall(r"style=\"[^\"]+\"", text))
        for m in re.findall(r"(?:width|min-width)\s*:\s*['\"]?(\d{3,4})px", text):
            dialog_widths[m] = dialog_widths.get(m, 0) + 1
    for path in _iter_files(os.path.join(FRONTEND, "src"), (".vue",)):
        with open(path, "r", encoding="utf-8", errors="ignore") as f:
            text = f.read()
        inline += len(re.findall(r"style=\"[^\"]+\"", text))
        h1_pages += 1 if "<h1" in text else 0
    for path in _iter_files(os.path.join(FRONTEND, "css"), (".css",)):
        with open(path, "r", encoding="utf-8", errors="ignore") as f:
            text = f.read()
        inline += len(re.findall(r"style=\"[^\"]+\"", text))
        font_face += text.count("@font-face")
    resp = os.path.join(FRONTEND, "css", "responsive.css")
    old_class_names = set()
    if os.path.exists(resp):
        with open(resp, "r", encoding="utf-8", errors="ignore") as f:
            text = f.read()
        # 旧类口径: responsive.css 中非 qc- / el- 前缀的自定义类名（去重）
        for name in re.findall(r"\.([a-zA-Z][a-zA-Z0-9_-]*)", text):
            if name.startswith(("qc-", "el-", "is-", "has-")):
                continue
            old_class_names.add(name)
    old_classes = len(old_class_names)
    index_html = os.path.join(FRONTEND, "index.html")
    has_h1_index = False
    if os.path.exists(index_html):
        with open(index_html, "r", encoding="utf-8", errors="ignore") as f:
            has_h1_index = "<h1" in f.read()
    return {
        "inline_style": inline,
        "old_responsive_classes": old_classes,
        "font_face_count": font_face,
        "h1_vue_pages": h1_pages,
        "index_has_h1": has_h1_index,
        "dialog_width_values": len(dialog_widths),
        "dialog_widths": dialog_widths,
    }


def measure_bundle() -> dict:
    from report_bundle_size import build_report
    return build_report()


def measure_data() -> dict:
    data_dir = os.path.join(ROOT, "data")
    out = {}
    for name in ("freshness.json", "data_refresh_config.json", "scheduler_history.json"):
        path = os.path.join(data_dir, name)
        if not os.path.exists(path):
            out[name] = {"exists": False}
            continue
        try:
            with open(path, "r", encoding="utf-8") as f:
                payload = json.load(f)
        except (OSError, ValueError):
            out[name] = {"exists": True, "readable": False}
            continue
        info = {"exists": True, "readable": True}
        if name == "scheduler_history.json" and isinstance(payload, list):
            counter: dict[str, int] = {}
            for rec in payload:
                job = (rec or {}).get("task") or (rec or {}).get("job") or "?"
                counter[job] = counter.get(job, 0) + 1
            info["count"] = len(payload)
            info["by_task"] = dict(sorted(counter.items(), key=lambda kv: -kv[1]))
        elif isinstance(payload, dict):
            info["keys"] = sorted(payload.keys())[:20]
            info["last_refresh"] = payload.get("last_refresh")
            info["scheduled_enabled"] = payload.get("scheduled_enabled")
            info["pull_enabled"] = payload.get("pull_enabled")
            info["stock_pool_size"] = len(payload.get("stock_pool") or [])
        out[name] = info
    return out


def deviation_report(result: dict) -> list[dict]:
    out = []
    for key, expected in PRD_BASELINE.items():
        actual = result.get(key)
        if actual is None:
            continue
        if expected == 0:
            continue
        delta = (actual - expected) / expected * 100
        if abs(delta) > 5:
            out.append({"metric": key, "baseline": expected, "actual": actual,
                        "delta_pct": round(delta, 1)})
    return out


def main(argv=None) -> int:
    parser = argparse.ArgumentParser(description="v6.4.0 基线度量")
    parser.add_argument("--all", action="store_true")
    parser.add_argument("--code", action="store_true")
    parser.add_argument("--json", default=os.path.join(ROOT, "data", "baseline.json"))
    args = parser.parse_args(argv)

    result = {
        "generated_at": datetime.now().isoformat(timespec="seconds"),
        "commit": _git_commit(),
        "code": measure_code(),
    }
    flat = dict(result["code"])
    if args.all or not args.code:
        result["design_debt"] = measure_design_debt()
        flat.update(result["design_debt"])
        result["bundle"] = measure_bundle()
        result["data"] = measure_data()
    result["prd_baseline_deviation"] = deviation_report(flat)

    print(json.dumps(result, ensure_ascii=False, indent=2))
    if args.json:
        os.makedirs(os.path.dirname(args.json), exist_ok=True)
        with open(args.json, "w", encoding="utf-8") as f:
            json.dump(result, f, ensure_ascii=False, indent=2)
        print(f"[baseline] 已写入 {args.json}")
    return 0


def _git_commit() -> str:
    try:
        import subprocess
        return subprocess.check_output(
            ["git", "rev-parse", "--short", "HEAD"], cwd=ROOT, text=True).strip()
    except Exception:  # pragma: no cover - 无 git 环境
        return "unknown"


if __name__ == "__main__":
    sys.exit(main())
