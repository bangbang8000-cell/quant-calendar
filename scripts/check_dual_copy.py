#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""双副本 commit 一致性门禁 (v7.12 / FR-7.7-6, 原 PRD 推迟到 v7.7.2 的 y.2 项)

背景
----
本仓库有两套工作副本:
  - quant-calendar-dev : 开发目录
  - quant-calendar-ops : 运行目录 (惯用 `git pull --ff-only` 同步)
两副本一旦 **分叉**(各自有对方没有的提交), ff-only 就会失败、行为也对不上;
若 ops 长期落后, 线上跑的其实是旧代码, 验收结论会失真。本脚本把「commit 对齐」
变成一条可跑的门禁, 供 local-ci-gate.sh 与发版前手动执行。

判定 (对 dev 与 ops 两个 HEAD 的拓扑关系):
  aligned     两副本 HEAD 完全相同                                    → 通过
  ops_behind  ops 是 dev 的祖先 (ops 可 ff-only 追上)                 → 提示同步; --strict 下算失败
  dev_behind  dev 是 ops 的祖先 (ops 上有 dev 没有的提交)             → 提示回拉; --strict 下算失败
  diverged    互不为祖先 (真分叉, ff-only 必失败)                     → 一律失败
  skip        ops 副本不存在/不是 git 仓库 (单检出环境, 如远程 CI)    → 通过但标注 skip

另外输出两副本的未提交改动数 (dirty), 只作参考不参与判定。

用法
----
    python3 scripts/check_dual_copy.py                 # 默认: dev=仓库根, ops=同级目录
    python3 scripts/check_dual_copy.py --ops /path/to/quant-calendar-ops
    python3 scripts/check_dual_copy.py --strict        # 落后也算失败 (发版前用)

退出码: 0 = 对齐或 skip; 1 = 分叉; 2 = 落后(--strict); 3 = 环境异常
"""
import argparse
import json
import os
import subprocess
import sys
import time

BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))


def git(args, cwd, timeout=15):
    """跑一条 git 命令; 失败/无输出返回 None (由调用方归类, 不在这里抛)"""
    try:
        out = subprocess.run(["git"] + list(args), cwd=cwd, timeout=timeout,
                             capture_output=True, text=True)
        if out.returncode != 0:
            return None
        return out.stdout.strip()
    except (OSError, subprocess.TimeoutExpired):
        return None


def is_repo(path):
    """是否为可用 git 仓库 (能解析出 HEAD)"""
    if not os.path.isdir(path):
        return False
    return git(["rev-parse", "--is-inside-work-tree"], path) == "true"


def head_of(path):
    """HEAD commit + 分支名 (分离头时 branch 为 '(detached)')"""
    commit = git(["rev-parse", "HEAD"], path)
    if not commit:
        return None, None
    branch = git(["rev-parse", "--abbrev-ref", "HEAD"], path) or "(unknown)"
    return commit, branch


def dirty_count(path):
    """未提交改动条目数 (含未跟踪); 解析失败返回 None"""
    out = git(["status", "--porcelain"], path)
    if out is None:
        return None
    return len([ln for ln in out.splitlines() if ln.strip()])


def is_ancestor(a, b, cwd):
    """a 是否为 b 的祖先 (git merge-base --is-ancestor, 退出码 0 = 是)"""
    try:
        out = subprocess.run(["git", "merge-base", "--is-ancestor", a, b],
                             cwd=cwd, timeout=15, capture_output=True, text=True)
        return out.returncode == 0
    except (OSError, subprocess.TimeoutExpired):
        return False


def classify(dev_head, ops_head, anc):
    """纯函数: 由两 HEAD 与祖先判定函数给出拓扑关系 (供测试直接构造场景)"""
    if not dev_head or not ops_head:
        return "skip"
    if dev_head == ops_head:
        return "aligned"
    dev_in_ops = anc(dev_head, ops_head)
    ops_in_dev = anc(ops_head, dev_head)
    if dev_in_ops and not ops_in_dev:
        return "dev_behind"    # ops 领先, dev 缺提交
    if ops_in_dev and not dev_in_ops:
        return "ops_behind"    # ops 落后, 可 ff-only 追上
    return "diverged"


def run(dev=None, ops=None, strict=False):
    """主流程: 探测两副本 → 分类 → 出报告。返回 (report, exit_code)"""
    dev = dev or BASE
    ops = ops or os.path.join(os.path.dirname(BASE), "quant-calendar-ops")
    report = {"generated_at": time.strftime("%Y-%m-%dT%H:%M:%S"),
              "dev": dev, "ops": ops, "strict": bool(strict),
              "dev_repo": is_repo(dev), "ops_repo": is_repo(ops)}

    if not report["dev_repo"]:
        report.update(verdict="error", relation="skip",
                      detail="dev 目录不是 git 仓库: %s" % dev)
        return report, 3
    if not report["ops_repo"]:
        report.update(verdict="skip", relation="skip",
                      detail="ops 副本不存在或不是 git 仓库 (单检出环境, 门禁跳过)")
        return report, 0

    dev_head, dev_branch = head_of(dev)
    ops_head, ops_branch = head_of(ops)
    relation = classify(dev_head, ops_head, lambda a, b: is_ancestor(a, b, dev))
    report.update({
        "dev_head": dev_head, "dev_branch": dev_branch, "dev_dirty": dirty_count(dev),
        "ops_head": ops_head, "ops_branch": ops_branch, "ops_dirty": dirty_count(ops),
        "relation": relation,
    })

    if relation == "aligned":
        report.update(verdict="pass", detail="两副本 HEAD 一致 (%s)" % dev_head[:10])
        code = 0
    elif relation == "skip":
        report.update(verdict="skip", detail="无法解析 HEAD")
        code = 0
    elif relation == "diverged":
        report.update(verdict="fail",
                      detail="双副本分叉: dev=%s ops=%s; ff-only 将失败, 需手工 rebase 对齐"
                             % (dev_head[:10], ops_head[:10]))
        code = 1
    else:  # ops_behind / dev_behind
        hint = ("ops 落后于 dev, 在 ops 目录执行 git pull --ff-only 即可追上"
                if relation == "ops_behind"
                else "ops 上有 dev 缺少的提交, 请回拉或在 dev 侧合并")
        report.update(verdict="fail" if strict else "warn", detail=hint)
        code = 2 if strict else 0
    return report, code


def main(argv=None):
    ap = argparse.ArgumentParser(description="双副本 commit 一致性门禁 (FR-7.7-6)")
    ap.add_argument("--dev", help="dev 副本路径 (默认脚本所在仓库根)")
    ap.add_argument("--ops", help="ops 副本路径 (默认同级 quant-calendar-ops)")
    ap.add_argument("--strict", action="store_true", help="落后(可 ff)也算失败")
    ap.add_argument("--json", action="store_true", help="输出完整 JSON")
    args = ap.parse_args(argv)

    report, code = run(dev=args.dev, ops=args.ops, strict=args.strict)
    if args.json:
        print(json.dumps(report, ensure_ascii=False, indent=1))
    else:
        print("[check_dual_copy] %s (%s) — %s"
              % (report.get("verdict", "?"), report.get("relation", "?"),
                 report.get("detail", "")))
        for side in ("dev", "ops"):
            if report.get("%s_repo" % side):
                print("  %s: %s @ %s dirty=%s"
                      % (side, report.get("%s_branch" % side),
                         str(report.get("%s_head" % side))[:10],
                         report.get("%s_dirty" % side)))
    return code


if __name__ == "__main__":
    sys.exit(main())
