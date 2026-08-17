# -*- coding: utf-8 -*-
"""
v3.17.8 (FR-3.17.8 / 移动端一等公民): 移动端手势纯函数 + PWA 缓存版本化单测
- judgeSwipe: 左滑/右滑/距离阈值/方向误判（node 运行 mobile-gestures.js UMD 纯函数）
- judgePullToRefresh / judgeLongPress: 阈值判定
- sw.js: cacheName 版本化（含 APP_VERSION）、GET-only API、预缓存清单完整性
"""
import json
import os
import re
import shutil
import subprocess

import pytest

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
FRONTEND_ROOT = os.path.join(ROOT, "frontend")
GESTURES_JS = os.path.join(FRONTEND_ROOT, "js", "mobile-gestures.js")
SW_JS = os.path.join(FRONTEND_ROOT, "sw.js")
INDEX_HTML = os.path.join(FRONTEND_ROOT, "index.html")


def _node_run(body):
    """在 node 中 require mobile-gestures.js 并执行 body，返回 JSON 结果"""
    if shutil.which("node") is None:
        pytest.skip("node 不可用")
    code = (
        "const G = require(process.argv[1]);\n"
        + body +
        "\nprocess.stdout.write(JSON.stringify(out));\n"
    )
    proc = subprocess.run(
        ["node", "-e", code, GESTURES_JS], capture_output=True, text=True, timeout=15
    )
    assert proc.returncode == 0, f"node 执行失败: {proc.stderr}"
    return json.loads(proc.stdout)


def _read(rel: str) -> str:
    with open(os.path.join(FRONTEND_ROOT, rel.replace("/", os.sep)), encoding="utf-8") as f:
        return f.read()


# ─── 手势纯函数（node 运行 UMD 模块）──────────────────────────────

def test_judge_swipe_left():
    """左滑: 负向 dx 且超过阈值 → 'left'"""
    out = _node_run(
        "out = { r: G.judgeSwipe(100, 100, 20, 95) };"
    )
    assert out["r"] == "left"


def test_judge_swipe_right():
    """右滑: 正向 dx 且超过阈值 → 'right'"""
    out = _node_run(
        "out = { r: G.judgeSwipe(100, 100, 200, 105) };"
    )
    assert out["r"] == "right"


def test_judge_swipe_distance_threshold():
    """距离阈值: |dx| < threshold → 'none'（轻触不算滑动）"""
    out = _node_run(
        "out = { r: G.judgeSwipe(100, 100, 120, 100) };"
    )
    assert out["r"] == "none"


def test_judge_swipe_direction_misjudgment():
    """方向误判: 纵向主导（|dy| 大）时即使 |dx| 超阈值也不算横向滑"""
    out = _node_run(
        # dx=60(>40) 但 dy=80 → 60 < 80*1.2=96 → 判 none（纵向滚动不应翻页）
        "out = { r: G.judgeSwipe(100, 100, 160, 180) };"
    )
    assert out["r"] == "none"


def test_judge_swipe_custom_threshold():
    """自定义阈值: opts.threshold 可覆盖默认阈值"""
    out = _node_run(
        "out = { a: G.judgeSwipe(100, 100, 130, 100, {threshold: 50}),"
        "      b: G.judgeSwipe(160, 100, 100, 100, {threshold: 50}) };"
    )
    assert out["a"] == "none"  # dx=30 < 50
    assert out["b"] == "left"  # dx=-60 ≥ 50 且横向主导


def test_judge_pull_to_refresh_threshold():
    """下拉刷新阈值: 向下位移 ≥ threshold → True；上滑/不足 → False"""
    out = _node_run(
        "out = { up:    G.judgePullToRefresh(100, 80),"      # dy=-20 上滑
        "      down:  G.judgePullToRefresh(100, 170),"       # dy=+70 ≥60
        "      short: G.judgePullToRefresh(100, 130) }; "    # dy=+30 <60
    )
    assert out["up"] is False
    assert out["down"] is True
    assert out["short"] is False


def test_judge_pull_to_refresh_custom():
    """下拉刷新自定义阈值精确判定（避免上例歧义）"""
    out = _node_run(
        "out = { below: G.judgePullToRefresh(100, 90, {threshold: 20}),"
        "      over:  G.judgePullToRefresh(100, 125, {threshold: 20}) };"
    )
    assert out["below"] is False  # dy=-10 < 20
    assert out["over"] is True    # dy=25 ≥ 20


def test_judge_long_press_threshold():
    """长按时长阈值: ≥ 500ms → True；不足 → False；可自定义阈值"""
    out = _node_run(
        "out = { a: G.judgeLongPress(300),"
        "      b: G.judgeLongPress(600),"
        "      c: G.judgeLongPress(800, {threshold: 800}) };"
    )
    assert out["a"] is False
    assert out["b"] is True
    assert out["c"] is True


def test_gesture_module_exposes_constants():
    """手势模块导出阈值常量（供 CSS/判定对齐）"""
    out = _node_run(
        "out = { t: G.SWIPE_THRESHOLD, p: G.PULL_THRESHOLD, l: G.LONG_PRESS_MS, w: G.REVEAL_WIDTH };"
    )
    assert out["t"] == 40
    assert out["p"] == 60
    assert out["l"] == 500
    assert out["w"] == 88


# ─── PWA 缓存版本化与清单 ─────────────────────────────────────

def test_sw_cache_name_versioned():
    """cacheName 必须含版本: CACHE_NAME 引用 APP_VERSION（发布新版本即缓存爆破）"""
    sw = _read("sw.js")
    m = re.search(r"const APP_VERSION = '([^']*)'", sw)
    assert m, "sw.js 应定义 APP_VERSION"
    assert "const CACHE_NAME = 'quant-calendar-' + APP_VERSION" in sw, \
        "CACHE_NAME 应拼接 APP_VERSION（版本化缓存键）"
    assert "__APP_VERSION__" in sw, "APP_VERSION 应由后端注入（main_new.py /sw.js 替换）"


def test_sw_api_cache_get_only():
    """运行时缓存只缓存 GET: fetch 处理器对非 GET 方法直接放行（不复用响应）"""
    sw = _read("sw.js")
    assert "event.request.method !== 'GET'" in sw, "应拦截非 GET 请求放行"
    assert "if (event.request.method !== 'GET') return;" in sw


def test_sw_precache_url_list_complete():
    """预缓存清单完整性: 核心壳 index.html + 主 CSS + 关键 JS 均在 CACHED_URLS"""
    sw = _read("sw.js")
    m = re.search(r"const CACHED_URLS = \[([\s\S]*?)\];", sw)
    assert m, "CACHED_URLS 未找到"
    urls = re.findall(r"'([^']+)'", m.group(1))
    for required in (
        "/",
        "/index.html",
        "/manifest.json",
        "/static/css/tokens.css",
        "/static/css/themes.css",
        "/static/css/layout.css",
        "/static/css/responsive.css",
        "/static/js/core.js",
        "/static/js/mobile-gestures.js",
        "/static/js/app-logic.js",
        "/static/js/components/calendar-page.js",
        "/static/js/components/ai-page.js",
        "/static/js/components/research-page.js",
        "/static/lib/vue.global.prod.min.js",
        "/static/lib/echarts.min.js",
    ):
        assert required in urls, f"预缓存清单缺少 {required}"


def test_sw_collect_asset_urls_from_index():
    """install 时解析 index.html 的 /static/ 资源并追加预缓存（离线壳完整性机制）"""
    sw = _read("sw.js")
    assert "collectAssetUrls" in sw, "应提供 collectAssetUrls 解析 index.html 静态资源"
    assert "/index.html" in sw and "fetch('/index.html'" in sw, "install 应拉取 index.html 解析资源"
    assert "cache.add(u).catch" in sw, "逐个缓存单个失败不阻塞整体"


def test_sw_offline_navigate_fallback():
    """离线导航回退: navigate 请求失败时回退缓存 '/'（核心壳离线可读）"""
    sw = _read("sw.js")
    assert "event.request.mode === 'navigate'" in sw
    assert "caches.match('/')" in sw, "离线时应回退缓存 '/'"


# ─── index.html 注册与手势装配 ─────────────────────────────────

def test_index_sw_register_and_gesture_loaded():
    """index.html: 注册 service worker + 加载并初始化手势模块"""
    idx = _read("index.html")
    assert "navigator.serviceWorker.register('/sw.js')" in idx, "index.html 应注册 SW"
    assert "js/mobile-gestures.js" in idx, "index.html 应加载 mobile-gestures.js"
    assert "initGestures()" in idx, "index.html 应调用手势装配 initGestures()"
    assert 'rel="manifest"' in idx, "index.html 应引用 manifest"
    assert 'name="theme-color"' in idx, "index.html 应有 theme-color meta"
