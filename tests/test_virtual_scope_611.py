# -*- coding: utf-8 -*-
"""6.1.5 (E2): 长列表虚拟滚动推广 — 覆盖度门禁

qc-virtual-list 已被长列表广泛使用 (评估历史/问股历史/自选等 ≥5 处, 多文件);
门禁守住覆盖度, 防止新长列表回退到全量渲染。
"""
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
COMPONENTS = ROOT / "frontend" / "js" / "components"

MIN_USES = 5


def test_virtual_list_usage_count():
    count = 0
    for p in COMPONENTS.rglob("*.js"):
        count += p.read_text(encoding="utf-8", errors="ignore").count("qc-virtual-list")
    assert count >= MIN_USES, f"qc-virtual-list 使用 {count} 处 < {MIN_USES}"


def test_virtual_list_spread_across_files():
    files = []
    for p in COMPONENTS.rglob("*.js"):
        if "qc-virtual-list" in p.read_text(encoding="utf-8", errors="ignore"):
            files.append(p.relative_to(COMPONENTS).as_posix())
    # 6.3.0 (T-6.3.0.9): AI 页模板分治至 components/ai/view-part*.js —— 按目录归属判定
    assert any(f == "ai-page.js" or f.startswith("ai/") for f in files), "评估历史/自选应使用虚拟列表"
    assert len(files) >= 2, f"虚拟列表应覆盖多个页面文件, 实际: {files}"


def test_virtual_list_core_exists():
    core = (ROOT / "frontend" / "js" / "virtual-list-core.js")
    comp = (ROOT / "frontend" / "js" / "components" / "virtual-list.js")
    assert core.exists() and comp.exists()
