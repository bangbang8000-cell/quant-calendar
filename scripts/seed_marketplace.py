#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""策略市场内容池 seed (v7.12 / L11, v7.10 遗留: 机制有、内容空)

把 KHunter 归档的禁用策略 (`reference/KHunter/strategy/disabled/`, 8 个 .py)
以「只含能力快照」的方式发布进策略市场 (`marketplace` 表), 作为可检索/可导入
的内容池初始内容:

- ref_id = `khunter_<文件名>` (与内置策略 sid 空间隔离)
- payload = {type, params(默认参数), name, description, source_path}
  参数经 **AST 解析** `__init__` 里的 `default_params` 字面量取得 —— 不 import
  KHunter 代码 (它 import `strategy.base_strategy`, 本仓库没有), 也不执行任何外部逻辑
- title/summary 取模块 docstring, 没有就用文件名

默认 dry-run: 只打印将要发布的内容; `--apply` 才写库 (同 key 覆盖, 幂等可重跑)。

用法
----
    python3 scripts/seed_marketplace.py                 # dry-run
    python3 scripts/seed_marketplace.py --apply         # 真正发布
    python3 scripts/seed_marketplace.py --dir <其他目录> --apply
退出码: 0 = 无异常; 1 = 有文件解析失败或写库失败
"""
import argparse
import ast
import json
import os
import sys
import time

BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(BASE, "backend"))

DEFAULT_DIR = os.path.join(os.path.dirname(BASE), "reference",
                           "KHunter", "strategy", "disabled")


def extract_strategy(path: str) -> dict:
    """AST 静态提取: 类名 / 默认参数 / docstring。解析失败抛 ValueError。"""
    with open(path, encoding="utf-8") as f:
        src = f.read()
    tree = ast.parse(src)
    doc = ast.get_docstring(tree) or ""
    cls_name, params = "", {}
    for node in ast.walk(tree):
        if isinstance(node, ast.ClassDef) and not cls_name:
            cls_name = node.name
        if (isinstance(node, ast.FunctionDef) and node.name == "__init__"
                and not params):
            for stmt in ast.walk(node):
                if (isinstance(stmt, ast.Assign) and len(stmt.targets) == 1
                        and isinstance(stmt.targets[0], ast.Name)
                        and stmt.targets[0].id == "default_params"):
                    params = ast.literal_eval(stmt.value)
    if not cls_name:
        raise ValueError("未找到策略类")
    return {"class_name": cls_name, "params": params, "doc": doc.strip()}


def _display(stem: str, doc: str) -> str:
    """显示名: docstring 首行 (如 `W底策略（WBottomStrategy）`) 截断; 兜底文件名"""
    first = doc.splitlines()[0].strip() if doc else ""
    return (first[:40] or stem)


def build_item(path: str) -> dict:
    """单文件 → marketplace 发布入参"""
    stem = os.path.splitext(os.path.basename(path))[0]
    info = extract_strategy(path)
    name = _display(stem, info["doc"])
    summary = info["doc"].splitlines()[1].strip() if len(info["doc"].splitlines()) > 1 else info["doc"][:120]
    return {
        "kind": "strategy",
        "ref_id": "khunter_%s" % stem,
        "title": name,
        "summary": summary[:200],
        "version": "1.0.0",
        "payload": {
            "type": "khunter_%s" % stem,
            "params": info["params"],
            "name": name,
            "description": info["doc"][:500],
            "source_path": os.path.relpath(path, os.path.dirname(BASE)),
            "archived": True,
        },
    }


def run(source_dir: str = DEFAULT_DIR, apply: bool = False) -> dict:
    """扫描 → 解析 → (可选)发布。返回报告"""
    report = {"generated_at": time.strftime("%Y-%m-%dT%H:%M:%S"),
              "source_dir": source_dir, "apply": bool(apply),
              "seeded": [], "failed": [], "ok": True}
    if not os.path.isdir(source_dir):
        report["ok"] = False
        report["failed"].append({"file": source_dir, "error": "目录不存在"})
        return report

    files = sorted(fn for fn in os.listdir(source_dir) if fn.endswith(".py")
                   and not fn.startswith("_"))
    for fn in files:
        path = os.path.join(source_dir, fn)
        try:
            item = build_item(path)
        except Exception as exc:
            report["ok"] = False
            report["failed"].append({"file": fn, "error": str(exc)})
            continue
        if apply:
            try:
                import marketplace
                saved = marketplace.publish_item(
                    kind=item["kind"], ref_id=item["ref_id"], actor="seed",
                    title=item["title"], summary=item["summary"],
                    version=item["version"], payload=item["payload"])
                item["item_id"] = saved.get("id")
            except Exception as exc:
                report["ok"] = False
                report["failed"].append({"file": fn, "error": "发布失败: %s" % exc})
                continue
        report["seeded"].append(item)
    return report


def main(argv=None):
    ap = argparse.ArgumentParser(description="KHunter 归档策略 → 策略市场内容池 seed")
    ap.add_argument("--dir", default=DEFAULT_DIR, help="归档策略目录")
    ap.add_argument("--apply", action="store_true", help="写库发布 (默认 dry-run)")
    ap.add_argument("--json", action="store_true", help="输出完整 JSON")
    args = ap.parse_args(argv)

    report = run(source_dir=args.dir, apply=args.apply)
    if args.json:
        print(json.dumps(report, ensure_ascii=False, indent=1, default=str))
    else:
        mode = "已发布" if args.apply else "[dry-run] 将发布"
        for it in report["seeded"]:
            print("  %s: %s → %s (params=%d 项)" % (
                mode, os.path.basename(it["payload"]["source_path"]),
                it["ref_id"], len(it["payload"]["params"])))
        for f in report["failed"]:
            print("  [失败] %s: %s" % (f["file"], f["error"]))
        if not args.apply and report["seeded"]:
            print("提示: 加 --apply 才会真正写库")
        print("合计: 可发布 %d, 失败 %d" % (len(report["seeded"]), len(report["failed"])))
    return 0 if report["ok"] else 1


if __name__ == "__main__":
    sys.exit(main())
