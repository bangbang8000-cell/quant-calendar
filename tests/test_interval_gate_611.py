# -*- coding: utf-8 -*-
"""6.1.5 (E4): 前端运行开销 — 常驻定时器数量上限 + 清理纪律

口径:
  - setInterval 总出现次数 ≤ 上限 (当前 10, 多为页面级条件创建, 留余量)
  - 每个含 setInterval 的模块必须同时含 clearInterval (页面切换/卸载清理纪律)
"""
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
JS_DIR = ROOT / "frontend" / "js"

INTERVAL_LIMIT = 12


def _js_files():
    for p in JS_DIR.rglob("*.js"):
        yield p


def test_interval_count_within_limit():
    count = 0
    for p in _js_files():
        count += p.read_text(encoding="utf-8", errors="ignore").count("setInterval")
    assert count <= INTERVAL_LIMIT, f"setInterval 出现 {count} 次, 超上限 {INTERVAL_LIMIT}"


def test_every_interval_module_cleans_up():
    bad = []
    for p in _js_files():
        src = p.read_text(encoding="utf-8", errors="ignore")
        if "setInterval" in src and "clearInterval" not in src:
            bad.append(p.relative_to(ROOT).as_posix())
    assert not bad, f"含 setInterval 但无 clearInterval 的模块 (定时器无法清理): {bad}"
