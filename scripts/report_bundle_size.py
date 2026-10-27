#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""T0-2 / FR-647: 构建体积报告 (raw + gzip) 与阈值门禁。

用法:
    python scripts/report_bundle_size.py                 # 打印报告
    python scripts/report_bundle_size.py --json out.json # 另存 JSON
    python scripts/report_bundle_size.py --gate          # 超阈值以退出码 1 失败 (CI)

口径:
- 首屏业务 JS = dist/assets 中不由 node_modules (vendor-*) 产出的最大 index-*.js
- dist 总量 = dist/ 下全部文件之和 (raw)
- gzip 体积按 zlib.compress(level=9) 计算 (与 CDN/浏览器 gzip 传输近似)
"""
from __future__ import annotations

import argparse
import gzip
import io
import json
import os
import sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DIST = os.path.join(ROOT, "frontend", "dist")

# 6.4.3 验收阈值 (PRD G6 / FR-647)
DEFAULT_THRESHOLDS = {
    "total_kb": 1800,
    "entry_kb": 400,
    "element_plus_kb": 600,
}


def _gzip_size(data: bytes) -> int:
    buf = io.BytesIO()
    with gzip.GzipFile(fileobj=buf, mode="wb", compresslevel=9, mtime=0) as f:
        f.write(data)
    return len(buf.getvalue())


def _iter_dist(root: str = DIST):
    for dirpath, _dirnames, filenames in os.walk(root):
        for name in filenames:
            yield os.path.join(dirpath, name)


def classify(rel: str) -> str:
    """把产物归入 vendor-vue / vendor-element-plus / vendor-lucide / entry / css / other。"""
    base = os.path.basename(rel)
    low = base.lower()
    if low.endswith(".css"):
        return "css"
    if "element-plus" in low or "/vendor-ep" in rel.replace("\\", "/") or low.startswith("vendor-ep"):
        return "vendor-element-plus"
    if low.startswith("vendor-vue"):
        return "vendor-vue"
    if low.startswith("vendor-lucide"):
        return "vendor-lucide"
    if low.startswith("index-") and low.endswith(".js"):
        return "entry"
    return "other"


def build_report(dist: str = DIST, thresholds: dict | None = None) -> dict:
    thresholds = thresholds or DEFAULT_THRESHOLDS
    files = []
    total = 0
    total_gz = 0
    if not os.path.isdir(dist):
        return {"error": f"dist 不存在: {dist}", "hint": "先执行 npm --prefix frontend run build",
                "files": [], "total_kb": 0, "total_gzip_kb": 0, "groups": {},
                "violations": [], "passed": False}
    for path in _iter_dist(dist):
        with open(path, "rb") as f:
            data = f.read()
        rel = os.path.relpath(path, dist).replace("\\", "/")
        files.append({
            "file": rel,
            "kind": classify(rel),
            "raw_kb": round(len(data) / 1024, 1),
            "gzip_kb": round(_gzip_size(data) / 1024, 1),
        })
        total += len(data)
        total_gz += _gzip_size(data)

    groups: dict[str, dict] = {}
    for item in files:
        g = groups.setdefault(item["kind"], {"raw_kb": 0.0, "gzip_kb": 0.0, "count": 0})
        g["raw_kb"] = round(g["raw_kb"] + item["raw_kb"], 1)
        g["gzip_kb"] = round(g["gzip_kb"] + item["gzip_kb"], 1)
        g["count"] += 1

    entry = max((f for f in files if f["kind"] == "entry"), key=lambda f: f["raw_kb"], default=None)
    ep = groups.get("vendor-element-plus", {})

    violations = []
    if total / 1024 > thresholds["total_kb"]:
        violations.append({
            "rule": "dist 总量", "actual_kb": round(total / 1024, 1),
            "limit_kb": thresholds["total_kb"],
        })
    if entry and entry["raw_kb"] > thresholds["entry_kb"]:
        violations.append({
            "rule": "首屏业务 JS", "file": entry["file"],
            "actual_kb": entry["raw_kb"], "limit_kb": thresholds["entry_kb"],
        })
    if ep.get("raw_kb", 0) > thresholds["element_plus_kb"]:
        violations.append({
            "rule": "Element Plus", "actual_kb": ep.get("raw_kb"),
            "limit_kb": thresholds["element_plus_kb"],
        })

    return {
        "dist": dist,
        "total_kb": round(total / 1024, 1),
        "total_gzip_kb": round(total_gz / 1024, 1),
        "entry": entry,
        "groups": groups,
        "thresholds": thresholds,
        "violations": violations,
        "passed": len(violations) == 0,
        "files": sorted(files, key=lambda f: -f["raw_kb"]),
    }


def format_report(report: dict) -> str:
    if report.get("error"):
        return f"[bundle] {report['error']} — {report.get('hint', '')}"
    lines = [
        f"[bundle] dist={report['dist']}",
        f"[bundle] 总量 raw={report['total_kb']}KB gzip={report['total_gzip_kb']}KB",
    ]
    entry = report.get("entry")
    if entry:
        lines.append(f"[bundle] 首屏业务 JS {entry['file']} raw={entry['raw_kb']}KB gzip={entry['gzip_kb']}KB")
    for kind, agg in sorted(report["groups"].items()):
        lines.append(f"[bundle]   {kind}: {agg['count']} 个 / raw={agg['raw_kb']}KB / gzip={agg['gzip_kb']}KB")
    if report["violations"]:
        for v in report["violations"]:
            extra = f" ({v.get('file')})" if v.get("file") else ""
            lines.append(f"[bundle] ✗ {v['rule']}{extra}: {v['actual_kb']}KB > {v['limit_kb']}KB")
        lines.append("[bundle] 修复建议: 业务代码按一级页动态 import(); Element Plus 按需引入; 见 FR-647")
    else:
        lines.append("[bundle] ✓ 全部体积阈值通过")
    return "\n".join(lines)


def main(argv=None) -> int:
    parser = argparse.ArgumentParser(description="构建体积报告与阈值门禁")
    parser.add_argument("--dist", default=DIST)
    parser.add_argument("--json", default="")
    parser.add_argument("--gate", action="store_true", help="超阈值时退出码 1")
    args = parser.parse_args(argv)

    report = build_report(args.dist)
    print(format_report(report))
    if args.json:
        with open(args.json, "w", encoding="utf-8") as f:
            json.dump(report, f, ensure_ascii=False, indent=2)
        print(f"[bundle] JSON 已写入 {args.json}")
    if args.gate and not report.get("passed"):
        return 1
    return 0


if __name__ == "__main__":
    sys.exit(main())
