#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""T0-3 / FR-648: Top 接口 P95 采样。

对 Top N 热接口各采样 30 次，输出 P50/P95/P99 与失败率；默认 300ms 门禁。

用法:
    python scripts/probe_api_p95.py --base-url http://127.0.0.1:8001 --token <jwt>
    python scripts/probe_api_p95.py --gate        # P95 超阈值退出码 1
    python scripts/probe_api_p95.py --json data/api_p95.json

令牌优先级: --token > 环境变量 QUANT_TOKEN > 不带头 (仅 /api/health 可用)。
服务未监听时输出 skipped（非失败），便于 CI 在无服务环境跳过。
"""
from __future__ import annotations

import argparse
import json
import os
import statistics
import sys
import time
import urllib.error
import urllib.request
from datetime import datetime

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

# Top10 热接口 (按前端首屏与高频页面调用频率排序)
TOP_ENDPOINTS = [
    {"name": "health", "path": "/api/health", "auth": False},
    {"name": "market_overview", "path": "/api/market/overview", "auth": True},
    {"name": "merrill_clock", "path": "/api/market/merrill-clock", "auth": True},
    {"name": "dashboard_dates", "path": "/api/dashboard/dates", "auth": True},
    {"name": "dashboard_summary", "path": "/api/dashboard/dashboard", "auth": True},
    {"name": "calendar_dates", "path": "/api/calendar/dates", "auth": True},
    {"name": "industry_heatmap", "path": "/api/market/industry-heatmap", "auth": True},
    {"name": "execution_status", "path": "/api/strategies/execution/status", "auth": True},
    {"name": "reliability_freshness", "path": "/api/reliability/freshness", "auth": True},
    {"name": "meta_freshness", "path": "/api/meta/freshness", "auth": True},
]

P95_LIMIT_MS = 300


def _request(url: str, token: str = "", timeout: float = 10.0) -> tuple[int, float]:
    headers = {"Accept": "application/json"}
    if token:
        headers["Authorization"] = "Bearer " + token
    req = urllib.request.Request(url, headers=headers)
    start = time.perf_counter()
    try:
        with urllib.request.urlopen(req, timeout=timeout) as resp:
            resp.read()
            status = resp.status
    except urllib.error.HTTPError as e:
        e.read()
        status = e.code
    elapsed = (time.perf_counter() - start) * 1000
    return status, elapsed


def _reachable(base_url: str) -> bool:
    try:
        status, _ = _request(base_url.rstrip("/") + "/api/health", timeout=3)
        return status == 200
    except Exception:
        return False


def _pct(values: list[float], p: float) -> float:
    if not values:
        return 0.0
    ordered = sorted(values)
    idx = min(int(round((p / 100.0) * (len(ordered) - 1))), len(ordered) - 1)
    return round(ordered[idx], 1)


def probe(base_url: str, token: str = "", rounds: int = 30, endpoints=None) -> dict:
    base = base_url.rstrip("/")
    results = []
    for ep in (endpoints or TOP_ENDPOINTS):
        if ep["auth"] and not token:
            results.append({"name": ep["name"], "path": ep["path"], "skipped": "no_token"})
            continue
        samples: list[float] = []
        failures = 0
        last_status = None
        for _ in range(rounds):
            try:
                status, elapsed = _request(base + ep["path"], token if ep["auth"] else "")
                last_status = status
                if status >= 400:
                    failures += 1
                else:
                    samples.append(elapsed)
            except Exception:
                failures += 1
        if not samples:
            results.append({
                "name": ep["name"], "path": ep["path"], "status": last_status,
                "failure_rate": 1.0, "samples": 0,
            })
            continue
        results.append({
            "name": ep["name"],
            "path": ep["path"],
            "status": last_status,
            "samples": len(samples),
            "p50_ms": _pct(samples, 50),
            "p95_ms": _pct(samples, 95),
            "p99_ms": _pct(samples, 99),
            "avg_ms": round(statistics.fmean(samples), 1),
            "failure_rate": round(failures / rounds, 3),
        })
    violations = [
        {"name": r["name"], "p95_ms": r["p95_ms"]} for r in results
        if r.get("p95_ms") is not None and r["p95_ms"] > P95_LIMIT_MS
    ]
    return {
        "generated_at": datetime.now().isoformat(timespec="seconds"),
        "base_url": base,
        "rounds": rounds,
        "limit_ms": P95_LIMIT_MS,
        "results": results,
        "violations": violations,
        "passed": len(violations) == 0,
    }


def main(argv=None) -> int:
    parser = argparse.ArgumentParser(description="Top 接口 P95 采样")
    parser.add_argument("--base-url", default="http://127.0.0.1:8001")
    parser.add_argument("--token", default=os.environ.get("QUANT_TOKEN", ""))
    parser.add_argument("--rounds", type=int, default=30)
    parser.add_argument("--json", default="")
    parser.add_argument("--gate", action="store_true")
    args = parser.parse_args(argv)

    if not _reachable(args.base_url):
        report = {"skipped": True, "reason": "service_unreachable", "base_url": args.base_url}
        print(json.dumps(report, ensure_ascii=False, indent=2))
        print("[p95] 服务未监听，跳过采样（非失败）。请在 8001/8000 启动服务后重跑。")
        return 0

    report = probe(args.base_url, args.token, args.rounds)
    print(json.dumps(report, ensure_ascii=False, indent=2))
    if args.json:
        os.makedirs(os.path.dirname(args.json) or ".", exist_ok=True)
        with open(args.json, "w", encoding="utf-8") as f:
            json.dump(report, f, ensure_ascii=False, indent=2)
        print(f"[p95] 已写入 {args.json}")
    if args.gate and not report["passed"]:
        return 1
    return 0


if __name__ == "__main__":
    sys.exit(main())
