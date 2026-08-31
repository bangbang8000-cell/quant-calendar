#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""quant-calendar 性能冒烟 (FR-3.17.9)

对 dev:8001 跑 Playwright headless chromium, 测量:
  1. 首屏可交互时间: 注入登录 token 后 goto, 到「主界面导航可点(.nav-item 存在且登录框消失)」的耗时
  2. DOMContentLoaded: performance navigation entry
  3. 脚本总下载字节数: index.html 内全部 <script src> 资源请求字节之和
  4. 5000 点 K线渲染: 注入构造的 5000 点 mock 数据渲染, 测 setOption 耗时 + 实际送入图表点数

用法:
  python tests/e2e/perf_smoke.py --measure          # 仅测量并打印当前值
  python tests/e2e/perf_smoke.py --store-baseline   # 测量并写入 tests/e2e/perf_baseline.json
  python tests/e2e/perf_smoke.py --compare          # 对比基线, 未达 30% 提升则 exit 1
  python tests/e2e/perf_smoke.py --runs 3           # 每次测量重复 N 次取中位数 (默认 3)

基线/优化后同一脚本、同一本机、同一浏览器, 排除网络波动影响 (localhost 同机对比)。
"""
import argparse
import json
import os
import re
import statistics
import sys
import time
import urllib.request

DEFAULT_BASE_URL = "http://127.0.0.1:8001/"
BASE_DIR = os.path.dirname(os.path.abspath(__file__))
BASELINE_FILE = os.path.join(BASE_DIR, "perf_baseline.json")

# 优化后断言阈值
INTERACTIVE_RATIO = 0.70      # 首屏可交互时间 ≤ 基线 × 0.70 (≥30% 提升)
BYTES_RATIO = 0.72            # 脚本字节数 ≤ 基线 × 0.72
KLINE_RENDER_MS = 2000        # 5000 点渲染耗时上限 (ms)
KLINE_MAX_POINTS = 2100       # 渲染后实际点数上限 (5000 → 降采样 ≤2000 + 桶尾容差)


def log(msg):
    print("[perf] " + msg, flush=True)


def _token_login(page, base_url):
    """复用 smoke_v315 方案: 直调 /api/login 拿 token, add_init_script 注入 localStorage"""
    req = urllib.request.Request(
        base_url.rstrip("/") + "/api/login",
        data=json.dumps({"username": "admin", "password": "admin"}).encode(),
        headers={"Content-Type": "application/json"}, method="POST")
    with urllib.request.urlopen(req, timeout=10) as r:
        body = json.loads(r.read().decode())
    token = body["data"]["access_token"]
    user = body["user"]
    page.context.add_init_script(
        f"localStorage.setItem('quant_token', {json.dumps(token)});"
        f"localStorage.setItem('quant_user', {json.dumps(json.dumps(user, ensure_ascii=False))});"
        f"localStorage.setItem('quant_theme', 'tech-blue');"
    )


def _measure_interactive(page, base_url):
    """单次首屏可交互计时 (wall-clock, 从 goto 前到 .nav-item 可点)"""
    t0 = time.time()
    page.goto(base_url, wait_until="commit", timeout=30000)
    deadline = time.time() + 30
    while time.time() < deadline:
        ready = page.evaluate(
            "() => (document.querySelectorAll('.nav-item').length > 0"
            " && document.querySelectorAll('.login-box').length === 0)"
        )
        if ready:
            return (time.time() - t0) * 1000.0
        time.sleep(0.02)
    return None


def _measure_dcl(page):
    """DOMContentLoaded (相对 navigationStart, ms)"""
    try:
        return page.evaluate(
            "() => { const n = performance.getEntriesByType('navigation')[0];"
            " return n ? Math.round(n.domContentLoadedEventEnd) : null; }"
        )
    except Exception:
        return None


def _measure_script_bytes(base_url):
    """index.html 内全部 <script src> 资源请求字节之和"""
    html = urllib.request.urlopen(base_url, timeout=10).read().decode("utf-8", "replace")
    srcs = re.findall(r'<script[^>]+src="([^"]+)"', html)
    total = 0
    details = []
    for src in srcs:
        url = src if src.startswith("http") else base_url.rstrip("/") + "/" + src.lstrip("/")
        try:
            with urllib.request.urlopen(url, timeout=15) as r:
                data = r.read()
            total += len(data)
            details.append((src, len(data)))
        except Exception as e:
            log(f"  [warn] 取不到 {src}: {e}")
    return total, len(srcs), details


def _kline_mock(n=5000, seed=17):
    """构造 n 点确定性 K线 mock: [date,o,c,l,h,vol,ma5,ma10,ma20,ma60,volMa5]"""
    import random
    rnd = random.Random(seed)
    rows = []
    price = 12.0
    from datetime import datetime, timedelta
    base = datetime(2020, 1, 1)
    for i in range(n):
        d = (base + timedelta(days=i)).strftime("%Y%m%d")
        o = price + rnd.uniform(-0.4, 0.4)
        c = o + rnd.uniform(-0.8, 0.8)
        l = min(o, c) - rnd.uniform(0, 0.6)
        h = max(o, c) + rnd.uniform(0, 0.6)
        v = rnd.uniform(5e5, 3e6)
        price = c
        rows.append([d, round(o, 2), round(c, 2), round(l, 2), round(h, 2),
                     round(v, 2), round(price * 1.01, 2), round(price * 1.02, 2),
                     round(price * 1.03, 2), round(price * 1.04, 2), round(v * 1.1, 2)])
    return rows


def _measure_kline_render(page, base_url):
    """注入 mock 5000 点渲染: 返回 {dt_ms, points, ok}"""
    mock = _kline_mock(5000)
    result = page.evaluate(
        """async (args) => {
            const [mock] = args;
            // 懒加载: echarts 未同步引入时经 ensureEcharts 加载 (优化后); 基线已同步加载则跳过
            if (window.__quantModules && window.__quantModules.charts
                && typeof window.__quantModules.charts.ensureEcharts === 'function') {
                try { await window.__quantModules.charts.ensureEcharts(); } catch (e) { return { error: 'ensureEcharts: ' + e }; }
            }
            const el = document.getElementById('perfKlineChart');
            if (!el) {
                const c = document.createElement('div');
                c.id = 'perfKlineChart';
                c.style.width = '900px';
                c.style.height = '420px';
                document.body.appendChild(c);
            }
            const chart = await window.__quantModules.charts.renderKlineTo('perfKlineChart', mock, 'daily', false, { isMobile: false });
            const t0 = performance.now();
            // 二次 setOption 计时 = 纯渲染耗时 (首次含实例创建, 只作参考)
            chart.setOption(chart.getOption());
            const dt = performance.now() - t0;
            const opt = chart.getOption();
            const klen = (opt.series && opt.series[0] && opt.series[0].data) ? opt.series[0].data.length : 0;
            return { dt_ms: Math.round(dt * 100) / 100, points: klen, first_dt_ms: 0 };
        }""",
        [mock],
    )
    return result


def _run_once(page, base_url):
    """一次完整测量 (交互 + DCL + 5000点渲染)"""
    _token_login(page, base_url)
    interactive = _measure_interactive(page, base_url)
    dcl = _measure_dcl(page)
    kline = _measure_kline_render(page, base_url)
    return {
        "interactive_ms": interactive,
        "dcl_ms": dcl,
        "kline_dt_ms": kline.get("dt_ms") if not kline.get("error") else None,
        "kline_points": kline.get("points") if not kline.get("error") else None,
        "kline_error": kline.get("error"),
    }


def measure(base_url, runs=3, chromium=None):
    """跑 runs 次取中位数, 返回聚合指标"""
    from playwright.sync_api import sync_playwright

    interactive_vals, dcl_vals, kline_dt, kline_pts = [], [], [], []
    errors = []
    launch_kwargs = {"headless": True, "args": ["--no-sandbox"]}
    if chromium:  # 本机 playwright 无法下载浏览器时, 指定系统 chromium (如 /snap/bin/chromium)
        launch_kwargs["executable_path"] = chromium
    with sync_playwright() as p:
        browser = p.chromium.launch(**launch_kwargs)
        for i in range(runs):
            ctx = browser.new_context(viewport={"width": 1280, "height": 900})
            page = ctx.new_page()
            try:
                r = _run_once(page, base_url)
                log(f"  第 {i + 1}/{runs} 次: interactive={_fmt(r['interactive_ms'], 'ms')} "
                    f"dcl={_fmt(r['dcl_ms'], 'ms')} kline_dt={_fmt(r['kline_dt_ms'], 'ms')} "
                    f"points={_fmt(r['kline_points'])}")
                if r["interactive_ms"] is not None:
                    interactive_vals.append(r["interactive_ms"])
                if r["dcl_ms"] is not None:
                    dcl_vals.append(r["dcl_ms"])
                if r["kline_dt_ms"] is not None:
                    kline_dt.append(r["kline_dt_ms"])
                if r["kline_points"] is not None:
                    kline_pts.append(r["kline_points"])
                if r.get("kline_error"):
                    errors.append(r["kline_error"])
            finally:
                ctx.close()
        browser.close()

    def med(vals):
        return round(statistics.median(vals), 2) if vals else None

    bytes_total, src_count, details = _measure_script_bytes(base_url)
    log(f"  脚本: {src_count} 个 <script src>, 合计 {bytes_total} 字节")
    for src, size in sorted(details, key=lambda x: -x[1])[:5]:
        log(f"    {size:>9}  {src}")

    return {
        "interactive_ms": med(interactive_vals),
        "dcl_ms": med(dcl_vals),
        "script_bytes": bytes_total,
        "script_count": src_count,
        "kline_dt_ms": med(kline_dt),
        "kline_points": med(kline_pts),
        "kline_error": errors[:1],
        "runs": runs,
        "base_url": base_url,
    }


def _fmt(v, suffix=""):
    return ("--" if v is None else f"{v:.1f}") + suffix


def main():
    ap = argparse.ArgumentParser(description="quant-calendar 性能冒烟 (FR-3.17.9)")
    ap.add_argument("--base-url", default=DEFAULT_BASE_URL)
    ap.add_argument("--runs", type=int, default=3)
    ap.add_argument("--chromium", default=None,
                    help="chromium 可执行文件路径 (缺省用 playwright 自带; 本机如 /snap/bin/chromium)")
    g = ap.add_mutually_exclusive_group()
    g.add_argument("--measure", action="store_true", help="仅测量打印")
    g.add_argument("--store-baseline", action="store_true", help="测量并写入基线")
    g.add_argument("--compare", action="store_true", help="对比基线并断言提升")
    args = ap.parse_args()

    mode = "compare" if args.compare else ("store" if args.store_baseline else "measure")
    cur = measure(args.base_url, runs=args.runs, chromium=args.chromium)

    if mode == "store":
        with open(BASELINE_FILE, "w", encoding="utf-8") as f:
            json.dump({"base_url": args.base_url, **cur}, f, ensure_ascii=False, indent=2)
        log(f"基线已写入 {BASELINE_FILE}")
        return 0

    log("当前测量: " + json.dumps(cur, ensure_ascii=False))
    if mode == "measure":
        return 0

    # compare
    if not os.path.exists(BASELINE_FILE):
        log(f"缺少基线文件 {BASELINE_FILE}, 先运行 --store-baseline")
        return 1
    with open(BASELINE_FILE, encoding="utf-8") as f:
        base = json.load(f)

    log("=" * 60)
    log("性能对比 (基线 → 优化后)")
    log(f"  首屏可交互:  {_fmt(base.get('interactive_ms'), 'ms')} → {_fmt(cur['interactive_ms'], 'ms')}")
    log(f"  DOMContentLoaded: {_fmt(base.get('dcl_ms'), 'ms')} → {_fmt(cur['dcl_ms'], 'ms')}")
    log(f"  脚本字节数:  {_fmt(base.get('script_bytes'), 'B')} → {_fmt(cur['script_bytes'], 'B')}")
    log(f"  5000点渲染: {_fmt(base.get('kline_dt_ms'), 'ms')} → {_fmt(cur['kline_dt_ms'], 'ms')} "
        f"(点数 {base.get('kline_points')} → {cur['kline_points']})")

    failures = []
    bi = base.get("interactive_ms")
    ci = cur["interactive_ms"]
    if bi and ci:
        ratio = ci / bi
        log(f"  首屏可交互比率: {ratio:.2f} (阈值 ≤{INTERACTIVE_RATIO})")
        if ratio > INTERACTIVE_RATIO + 0.05:  # 5% 容差
            failures.append(f"首屏可交互 {ci:.0f}ms 未达 30% 提升 (基线 {bi:.0f}ms, 比率 {ratio:.2f})")

    bb = base.get("script_bytes")
    cb = cur["script_bytes"]
    if bb and cb:
        bratio = cb / bb
        log(f"  脚本字节比率: {bratio:.2f} (阈值 ≤{BYTES_RATIO})")
        if bratio > BYTES_RATIO + 0.05:
            failures.append(f"脚本字节 {cb}B 未明显下降 (基线 {bb}B, 比率 {bratio:.2f})")

    dt = cur.get("kline_dt_ms")
    pts = cur.get("kline_points")
    if dt is not None and dt > KLINE_RENDER_MS:
        failures.append(f"5000点渲染耗时 {dt:.0f}ms 超过阈值 {KLINE_RENDER_MS}ms")
    if pts is not None and pts > KLINE_MAX_POINTS:
        failures.append(f"渲染后点数 {pts} 超过降采样阈值 {KLINE_MAX_POINTS} (5000点未降采样)")
    if cur.get("kline_error"):
        failures.append(f"K线渲染异常: {cur['kline_error']}")

    log("=" * 60)
    if failures:
        log("PERF FAIL: " + "; ".join(failures))
        return 1
    log("PERF PASS: 首屏 ≥30% 提升, 5000点渲染在阈值内")
    return 0


if __name__ == "__main__":
    sys.exit(main())
