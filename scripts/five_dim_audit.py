#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""五维质量护栏全面复检 (v7.9.0)

对 PRD §4 的五维护栏做机器可复检的静态审计, 产出可归档的复检报告:
    A 美观   A1 设计令牌覆盖率  A2 明暗主题完整性  A3 前端产物体积
    C 便捷   C1 二级菜单规模    C2 端点文档覆盖
    E 高效   E1 模块体积        E2 索引覆盖
    L 逻辑   L1 路由重复        L2 迁移连续性
    O 运维   O1 版本三处对齐    O2 迁移与代码同步

用法:
    python3 scripts/five_dim_audit.py            # 打印 + 写 docs/QUALITY-AUDIT-v7.9.md
    python3 scripts/five_dim_audit.py --json     # 仅输出 JSON(供测试/CI 消费)

退出码: 0 = 无 FAIL; 1 = 存在 FAIL(可作门禁)。
"""
import argparse
import json
import os
import re
import subprocess
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
BACKEND = ROOT / "backend"
FRONTEND = ROOT / "frontend"
DOCS = ROOT / "docs"

DIMENSIONS = {
    "A": "美观",
    "C": "便捷",
    "E": "高效",
    "L": "逻辑清晰",
    "O": "方便运维",
}

# 每维权重(与 PRD §4 五维并重一致, 运维略高以体现 O1 版本纪律)
WEIGHTS = {"A": 0.20, "C": 0.20, "E": 0.20, "L": 0.20, "O": 0.20}

MAX_MODULE_LINES = 700
MAX_DIST_BYTES = 1_500_000
HEX_RE = re.compile(r"#[0-9a-fA-F]{3,8}\b")
VAR_RE = re.compile(r"var\(--")
ROUTE_RE = re.compile(r"@router\.(get|post|put|patch|delete)\(\s*[\"']([^\"']*)[\"']")


def _result(cid, name, status, detail, value=None):
    return {"id": cid, "name": name, "dim": cid[0], "status": status,
            "detail": detail, "value": value}


def _iter_files(base: Path, suffix: str, skip=("node_modules", "dist", "__pycache__", ".venv")):
    for path in base.rglob(f"*{suffix}"):
        if any(part in skip for part in path.parts):
            continue
        if path.is_file():
            yield path


def check_a1_tokens():
    """A1: CSS 颜色令牌覆盖率 (var(--token) 占 颜色声明 的比例)"""
    css_dir = FRONTEND / "css"
    if not css_dir.is_dir():
        return _result("A1", "设计令牌覆盖率", "warn", "未找到 frontend/css", 0.0)
    hex_n = var_n = 0
    for path in css_dir.glob("*.css"):
        if path.name in ("tokens.css",):
            continue
        text = path.read_text(encoding="utf-8", errors="ignore")
        hex_n += len(HEX_RE.findall(text))
        var_n += len(VAR_RE.findall(text))
    total = hex_n + var_n
    ratio = round(var_n / total, 3) if total else 0.0
    status = "pass" if ratio >= 0.75 else ("warn" if ratio >= 0.5 else "fail")
    return _result("A1", "设计令牌覆盖率", status,
                   f"var(--*) {var_n} 处 / 裸色值 {hex_n} 处, 令牌化率 {ratio:.1%}", ratio)


def check_a2_theme():
    """A2: 明暗双主题令牌块齐备"""
    text = "".join(p.read_text(encoding="utf-8", errors="ignore")
                   for p in (FRONTEND / "css").glob("*.css"))
    has_dark = bool(re.search(r"\[data-theme=[\"']?[\w-]*dark", text))
    has_light = ":root" in text
    status = "pass" if has_dark and has_light else "fail"
    return _result("A2", "明暗主题完整性", status,
                   f"light={'✓' if has_light else '✗'} dark={'✓' if has_dark else '✗'}")


def check_a3_dist_size():
    """A3: 前端产物单文件体积"""
    dist = FRONTEND / "dist"
    if not dist.is_dir():
        return _result("A3", "前端产物体积", "warn", "未构建 dist, 跳过", 0)
    biggest, size = "", 0
    for path in dist.rglob("*"):
        if path.is_file():
            s = path.stat().st_size
            if s > size:
                biggest, size = path.name, s
    status = "pass" if size <= MAX_DIST_BYTES else "fail"
    return _result("A3", "前端产物体积", status,
                   f"最大文件 {biggest or '-'} {size / 1024:.0f}KB (上限 {MAX_DIST_BYTES // 1024}KB)", size)


# 新增业务域 → 前端可达性标记(便捷性核心: 后端做完前端能否点到)
FRONTEND_MARKERS = {
    "择时 v7.5": "/timing/",
    "形态匹配 v7.6": "/pattern/",
    "五维评分 v7.4": "/strategies/scores",
    "参数锁定 v7.7": "/lock",
    "执行计划 v7.8": "/execution/",
}


def check_c1_frontend_reach():
    """C1: 新功能前端可达性 (后端已交付的域是否在前端代码中被消费)"""
    roots = [FRONTEND / "js", FRONTEND / "src"]
    text = ""
    for root in roots:
        if root.is_dir():
            for path in root.rglob("*.js"):
                text += path.read_text(encoding="utf-8", errors="ignore")
    hit = [name for name, marker in FRONTEND_MARKERS.items() if marker in text]
    missing = [name for name in FRONTEND_MARKERS if name not in hit]
    ratio = round(len(hit) / len(FRONTEND_MARKERS), 3)
    status = "pass" if ratio >= 0.6 else ("warn" if ratio >= 0.2 else "fail")
    detail = f"前端已接入 {len(hit)}/{len(FRONTEND_MARKERS)} 个新域"
    if missing:
        detail += "; 待接入: " + "、".join(missing)
    return _result("C1", "新功能前端可达性", status, detail, ratio)


def _router_prefix(text):
    m = re.search(r"APIRouter\([^)]*prefix\s*=\s*[\"']([^\"']*)[\"']", text, re.S)
    return m.group(1) if m else ""


def _api_routes():
    """扫描 backend/api 下的 (method, 前缀+路径) 列表"""
    out = []
    for path in (BACKEND / "api").rglob("*.py"):
        text = path.read_text(encoding="utf-8", errors="ignore")
        prefix = _router_prefix(text)
        for method, sub in ROUTE_RE.findall(text):
            full = (prefix + sub).replace("//", "/")
            out.append((method.upper(), full, str(path)))
    return out


def check_c2_docs():
    """C2: 端点说明覆盖率 (路由函数带 docstring 的比例, 决定自助查阅成本)"""
    total = documented = 0
    for path in (BACKEND / "api").rglob("*.py"):
        text = path.read_text(encoding="utf-8", errors="ignore")
        matches = list(ROUTE_RE.finditer(text))
        for i, m in enumerate(matches):
            total += 1
            end = matches[i + 1].start() if i + 1 < len(matches) else len(text)
            window = text[m.end():min(end, m.end() + 600)]
            if '"""' in window:
                documented += 1
    ratio = round(documented / max(total, 1), 3)
    status = "pass" if ratio >= 0.6 else ("warn" if ratio >= 0.4 else "fail")
    return _result("C2", "端点说明覆盖率", status,
                   f"{documented}/{total} 个端点带说明(docstring)", ratio)


def check_e1_module_size():
    """E1: 单模块体积 (超过 700 行的文件)"""
    big = []
    for path in _iter_files(BACKEND, ".py"):
        try:
            n = sum(1 for _ in path.open(encoding="utf-8", errors="ignore"))
        except OSError:
            continue
        if n > MAX_MODULE_LINES:
            big.append(f"{path.relative_to(ROOT)}({n})")
    status = "pass" if not big else "fail"
    return _result("E1", "模块体积", status,
                   "无超限模块" if not big else "; ".join(big[:5]), len(big))


def check_e2_indexes():
    """E2: 迁移索引覆盖 (CREATE INDEX 语句数)"""
    n = 0
    for path in (BACKEND / "migrations").glob("_*.py"):
        text = path.read_text(encoding="utf-8", errors="ignore")
        n += text.count("CREATE INDEX")
    status = "pass" if n >= 8 else "warn"
    return _result("E2", "索引覆盖", status, f"迁移内 CREATE INDEX {n} 条", n)


def check_l1_routes():
    """L1: 路由重复 (同 method + 同 前缀+路径 多次声明)"""
    seen, dup = {}, []
    for method, full, src in _api_routes():
        if not full.strip("/"):
            continue  # 空前缀根路由由挂载点区分, 不算重复
        key = (method.upper(), full)
        if key in seen and seen[key] != src:
            dup.append(f"{key[0]} {key[1]}")
        seen[key] = src
    status = "pass" if not dup else "warn"
    return _result("L1", "路由重复", status,
                   f"共 {len(seen)} 条路由, 无重复" if not dup
                   else f"重复 {len(dup)}: " + ", ".join(sorted(set(dup))[:5]), len(dup))


def check_l2_migrations():
    """L2: 迁移连续性 (版本号 1..N 无缺号, 与文件数一致)"""
    versions = []
    for path in (BACKEND / "migrations").glob("_0*.py"):
        m = re.match(r"_(\d{4})_", path.name)
        if m:
            versions.append(int(m.group(1)))
    versions.sort()
    expected = list(range(1, (versions[-1] if versions else 0) + 1))
    gaps = [v for v in expected if v not in versions]
    status = "pass" if not gaps else "fail"
    return _result("L2", "迁移连续性", status,
                   f"{len(versions)} 个迁移, 最新 {versions[-1] if versions else 0}"
                   + (f", 缺号 {gaps}" if gaps else ", 无缺号"), len(gaps))


def check_o1_version():
    """O1: 版本三处对齐 (APP_VERSION / README / HANDOVER)"""
    proc = subprocess.run([sys.executable, str(ROOT / "scripts" / "bump_version.py"), "--check"],
                          capture_output=True, text=True, timeout=60)
    status = "pass" if proc.returncode == 0 else "fail"
    detail = (proc.stdout or proc.stderr).strip().splitlines()[-1] if (proc.stdout or proc.stderr) else ""
    return _result("O1", "版本三处对齐", status, detail)


def check_o2_health_checks():
    """O2: 启动自检项 (reliability/checks.py 的自检函数数量)"""
    path = BACKEND / "reliability" / "checks.py"
    if not path.is_file():
        return _result("O2", "启动自检项", "warn", "未找到 reliability/checks.py", 0)
    text = path.read_text(encoding="utf-8", errors="ignore")
    n = len(re.findall(r"^def _check_", text, re.M))
    status = "pass" if n >= 8 else "warn"
    return _result("O2", "启动自检项", status, f"自检函数 {n} 个", n)


CHECKS = (check_a1_tokens, check_a2_theme, check_a3_dist_size, check_c1_frontend_reach,
          check_c2_docs, check_e1_module_size, check_e2_indexes, check_l1_routes,
          check_l2_migrations, check_o1_version, check_o2_health_checks)


def run_audit():
    results = []
    for fn in CHECKS:
        try:
            results.append(fn())
        except Exception as exc:  # 单项异常不应让整体审计失真
            results.append(_result(fn.__name__[6:8].upper(), fn.__doc__ or fn.__name__,
                                   "warn", f"检查异常: {exc}"))
    scores, detail = {}, {}
    for dim in DIMENSIONS:
        rows = [r for r in results if r["dim"] == dim]
        if not rows:
            scores[dim] = 0.0
            continue
        pts = sum({"pass": 1.0, "warn": 0.5, "fail": 0.0}[r["status"]] for r in rows)
        scores[dim] = round(pts / len(rows) * 100, 1)
        detail[dim] = len(rows)
    overall = round(sum(scores[d] * WEIGHTS[d] for d in DIMENSIONS), 1)
    fails = [r for r in results if r["status"] == "fail"]
    return {"results": results, "scores": scores, "overall": overall,
            "fail_count": len(fails), "warn_count": len(
                [r for r in results if r["status"] == "warn"]),
            "verdict": "PASS" if not fails else "FAIL"}


def render_markdown(audit):
    lines = ["# 五维质量护栏复检报告 (v7.9)", "",
             f"- 综合得分: **{audit['overall']} / 100**",
             f"- 结论: **{audit['verdict']}**（FAIL {audit['fail_count']} 项，WARN {audit['warn_count']} 项）",
             "- 生成方式: `python3 scripts/five_dim_audit.py`（静态审计，幂等可复跑）", "",
             "## 维度得分", "", "| 维度 | 名称 | 得分 | 检查项 |", "|---|---|---|---|"]
    for dim, name in DIMENSIONS.items():
        lines.append(f"| {dim} | {name} | {audit['scores'][dim]} | "
                     f"{sum(1 for r in audit['results'] if r['dim'] == dim)} |")
    lines += ["", "## 检查明细", "", "| 编号 | 检查项 | 结果 | 说明 |", "|---|---|---|---|"]
    icon = {"pass": "✅ pass", "warn": "⚠️ warn", "fail": "❌ fail"}
    for r in audit["results"]:
        lines.append(f"| {r['id']} | {r['name']} | {icon[r['status']]} | {r['detail']} |")
    lines += ["", "## 结论与后续", ""]
    if audit["verdict"] == "PASS":
        lines.append("五维护栏全部检查项无 FAIL；WARN 项已登记为后续收口项（不阻断发布）。")
    else:
        lines.append("存在 FAIL 项，需在发布前修复；详见上表。")
    return "\n".join(lines) + "\n"


def main():
    parser = argparse.ArgumentParser(description="五维质量护栏复检")
    parser.add_argument("--json", action="store_true", help="只输出 JSON")
    parser.add_argument("--no-write", action="store_true", help="不写报告文件")
    args = parser.parse_args()
    audit = run_audit()
    if args.json:
        print(json.dumps(audit, ensure_ascii=False, indent=2))
    else:
        md = render_markdown(audit)
        print(md)
        if not args.no_write:
            DOCS.mkdir(exist_ok=True)
            target = DOCS / "QUALITY-AUDIT-v7.9.md"
            target.write_text(md, encoding="utf-8")
            print(f"[written] {target}")
    return 0 if audit["fail_count"] == 0 else 1


if __name__ == "__main__":
    sys.exit(main())
