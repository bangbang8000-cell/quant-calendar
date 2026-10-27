#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""6.4.5 (FR-652 第 2/3 条): 变更覆盖率门禁 — 新增/修改行 ≥60%, 核心模块 ≥70%。

用法:
    python scripts/check_diff_coverage.py                          # 本地: 对比 git HEAD (未提交变更)
    python scripts/check_diff_coverage.py --base origin/master     # CI: 对比目标分支
    python scripts/check_diff_coverage.py --cov coverage.json --diff-file changes.diff

输入:
- coverage.json: `pytest --cov=backend --cov-report=json:coverage.json` 产出
- diff: `git diff -U0 --no-color <base>` 输出 (统一 diff); 或 --diff-file 读取

核心模块 (阈值 70%): freshness / scheduler / views_aggregator / ai_eval* / ai_evaluator
其余新增/修改行 (阈值 60%)。失败时打印文件:行号与修复命令。
"""
from __future__ import annotations

import argparse
import json
import os
import re
import subprocess
import sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

DEFAULT_THRESHOLD = 60
CORE_THRESHOLD = 70
# 核心模块前缀 (import 路径, 相对 backend/)
CORE_MODULES = ("freshness", "scheduler", "views_aggregator", "ai_eval", "ai_evaluator")

_HUNK_RE = re.compile(r"^@@ -(\d+)(?:,(\d+))? \+(\d+)(?:,(\d+))? @@")
_FILE_RE = re.compile(r"^\+\+\+ b/(.+)$")


def threshold_for(path: str) -> int:
    """按模块路径给阈值 (core → 70, 其余 60)。"""
    norm = path.replace("\\", "/").replace("/", ".")
    stem = os.path.splitext(os.path.basename(path))[0]
    for prefix in CORE_MODULES:
        if norm.startswith(prefix + ".") or norm.startswith("backend." + prefix + ".") \
                or stem == prefix or stem.startswith(prefix + "_") or stem.startswith(prefix + "."):
            return CORE_THRESHOLD
    return DEFAULT_THRESHOLD


def parse_diff(diff_text: str) -> dict[str, set[int]]:
    """统一 diff → {file: {新增/修改行号}} (只看 b 侧 + 行)。"""
    changed: dict[str, set[int]] = {}
    cur_file = None
    new_line = 0
    for line in diff_text.splitlines():
        m = _FILE_RE.match(line)
        if m:
            cur_file = m.group(1)
            changed.setdefault(cur_file, set())
            continue
        m = _HUNK_RE.match(line)
        if m and cur_file:
            new_line = int(m.group(3))
            continue
        if cur_file is None or new_line is None:
            continue
        if line.startswith("+") and not line.startswith("+++"):
            changed[cur_file].add(new_line)
            new_line += 1
        elif line.startswith("-") and not line.startswith("---"):
            pass  # b 侧行号不受删除影响
        elif line.startswith("\\"):
            pass  # "\ No newline at end of file"
        else:
            new_line += 1
    return {f: lines for f, lines in changed.items() if lines}


def load_covered_lines(coverage_json: str) -> dict[str, set[int]]:
    """coverage.py JSON (v5+) → {file: {已覆盖行号}} (路径归一为仓库相对)。"""
    with open(coverage_json, encoding="utf-8") as f:
        data = json.load(f)
    out: dict[str, set[int]] = {}
    for path, info in data.get("files", {}).items():
        rel = os.path.relpath(path, ROOT).replace("\\", "/") \
            if not os.path.isabs(path) else path.replace("\\", "/")
        out[rel] = set(info.get("executed_lines") or [])
    return out


def evaluate(changed: dict[str, set[int]], covered: dict[str, set[int]],
             thresholds: dict[str, int] | None = None) -> dict:
    """核心评估 (纯函数, 可单测): 逐文件计算变更行覆盖率并判阈。"""
    files = []
    for path, lines in sorted(changed.items()):
        cov = covered.get(path) or covered.get(path.replace("/", os.sep)) or set()
        hit = sum(1 for ln in lines if ln in cov)
        pct = round(hit / len(lines) * 100, 1) if lines else 100.0
        limit = (thresholds or {}).get(path, threshold_for(path))
        files.append({
            "file": path, "changed": len(lines), "covered": hit,
            "pct": pct, "threshold": limit, "passed": pct >= limit,
            "missed_lines": sorted(ln for ln in lines if ln not in cov)[:50],
        })
    overall_changed = sum(f["changed"] for f in files)
    overall_covered = sum(f["covered"] for f in files)
    return {
        "files": files,
        "overall_pct": round(overall_covered / overall_changed * 100, 1) if overall_changed else 100.0,
        "overall_changed": overall_changed,
        "violations": [f for f in files if not f["passed"]],
        "passed": all(f["passed"] for f in files),
    }


def _git_diff(base: str) -> str:
    cmd = ["git", "diff", "-U0", "--no-color", base] if base else \
          ["git", "diff", "-U0", "--no-color", "HEAD"]
    proc = subprocess.run(cmd, cwd=ROOT, capture_output=True, text=True,
                          encoding="utf-8", errors="replace")
    if proc.returncode != 0:
        raise RuntimeError("git diff 失败: " + proc.stderr[-300:])
    return proc.stdout


def format_report(report: dict) -> str:
    lines = [f"[diff-cov] 变更行覆盖率 {report['overall_pct']}% "
             f"({report['overall_changed']} 行, 阈值: 通用 ≥{DEFAULT_THRESHOLD}% / 核心 ≥{CORE_THRESHOLD}%)"]
    for f in report["files"]:
        mark = "✓" if f["passed"] else "✗"
        lines.append(f"[diff-cov]   {mark} {f['file']}: {f['pct']}% "
                     f"({f['covered']}/{f['changed']}, ≥{f['threshold']}%)")
    if report["violations"]:
        lines.append("[diff-cov] 修复命令:")
        lines.append("  1) pytest tests -m \"not e2e and not network\" --cov=backend "
                     "--cov-report=json:coverage.json  # 重新生成覆盖率")
        lines.append("  2) 为下方文件补测试后重跑 python scripts/check_diff_coverage.py")
        for f in report["violations"]:
            miss = ",".join(str(n) for n in f["missed_lines"][:20])
            lines.append(f"  - {f['file']} 未覆盖行: {miss}")
    else:
        lines.append("[diff-cov] ✓ 变更覆盖率达标")
    return "\n".join(lines)


def main(argv=None) -> int:
    parser = argparse.ArgumentParser(description="变更覆盖率门禁 (FR-652)")
    parser.add_argument("--cov", default=os.path.join(ROOT, "coverage.json"))
    parser.add_argument("--base", default="", help="git 对比基线 (默认 HEAD=未提交变更)")
    parser.add_argument("--diff-file", default="", help="直接读取 diff 文件 (跳过 git)")
    parser.add_argument("--json", default="")
    parser.add_argument("--gate", action="store_true", help="不达标退出码 1")
    args = parser.parse_args(argv)

    if not os.path.isfile(args.cov):
        print(f"[diff-cov] 覆盖率文件不存在: {args.cov}")
        print("[diff-cov] 修复命令: pytest tests -m \"not e2e and not network\" "
              "--cov=backend --cov-report=json:coverage.json")
        return 1
    diff_text = open(args.diff_file, encoding="utf-8", errors="replace").read() \
        if args.diff_file else _git_diff(args.base)
    changed = parse_diff(diff_text)
    # 只看 Python 源码文件 (frontend js 由 node 单测覆盖, 不在本口径)
    changed = {f: lines for f, lines in changed.items() if f.endswith(".py")}
    if not changed:
        print("[diff-cov] 无 Python 变更行, 门禁通过")
        return 0
    covered = load_covered_lines(args.cov)
    report = evaluate(changed, covered)
    print(format_report(report))
    if args.json:
        with open(args.json, "w", encoding="utf-8") as f:
            json.dump(report, f, ensure_ascii=False, indent=2)
    if args.gate and not report["passed"]:
        return 1
    return 0


if __name__ == "__main__":
    sys.exit(main())
