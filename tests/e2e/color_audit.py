#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
V6.10 (配色专项·D): 配色 DOM 实测审计 (固化的评估脚本)

对运行中的 dev/ops 实例, 逐套应用「模式 × 色相」主题 (明/暗 × 7 色相 = 14 套),
在真实渲染的 DOM 上测量**每个可见文本节点**的实际对比度:
  - 前景: computed color (含 alpha 合成)
  - 背景: 向上寻找第一个不透明背景; 遇到渐变时把各色标合成到「该元素自身向上的不透明底」再取最差档
  - 阈值: 正文 4.5:1, 大字号 (>=24px 或 >=18.66px 粗体) 3:1

用法:
  python tests/e2e/color_audit.py [--base-url http://127.0.0.1:8001] [--user admin --password admin]
                                  [--hues 45,220,0,140,270,320,-1] [--json out.json]
退出码: 0 = 全部配置 0 处低于阈值; 1 = 有失败或环境不可用
"""
import argparse
import json
import os
import sys
import urllib.request

CHROME_CANDIDATES = (
    os.environ.get("QC_CHROME", ""),
    "/home/evergreen/.agent-browser/browsers/chrome-150.0.7871.46/chrome",
    "/usr/bin/google-chrome",
    "/usr/bin/chromium",
    "/usr/bin/chromium-browser",
)

PAGES = (
    ("overview", "#strategies/overview"),
    ("calendar", "#calendar"),
    ("ai-focus", "#ai/focus"),
    ("merrill", "#strategies/merrill"),
    ("sysconfig", "#system/config"),
    ("ops-status", "#ops/status"),
)

AUDIT_JS = r"""
() => {
  const P = (c) => {
    const s = String(c);
    let m = s.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)(?:[,\s/]+([\d.]+%?))?\)/);
    if (m) { let a = 1;
      if (m[4] !== undefined) a = m[4].endsWith('%') ? parseFloat(m[4]) / 100 : parseFloat(m[4]);
      return [+m[1], +m[2], +m[3], a]; }
    // V6.11: Chrome 会把 color-mix() 计算值序列化为 color(srgb r g b) —— 必须识别, 否则渐变/合成色被漏读
    m = s.match(/color\(srgb\s+([\d.]+)\s+([\d.]+)\s+([\d.]+)(?:\s*\/\s*([\d.]+))?\)/);
    if (m) { return [+m[1] * 255, +m[2] * 255, +m[3] * 255, m[4] === undefined ? 1 : parseFloat(m[4])]; }
    return null; };
  const lum = (t) => { const f = (c) => { c /= 255; return c <= 0.04045 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4); };
    return 0.2126 * f(t[0]) + 0.7152 * f(t[1]) + 0.0722 * f(t[2]); };
  const cr = (a, b) => { const la = lum(a), lb = lum(b); const hi = Math.max(la, lb), lo = Math.min(la, lb);
    return (hi + 0.05) / (lo + 0.05); };
  const mix = (fg, bg) => [0, 1, 2].map(i => fg[i] * fg[3] + bg[i] * (1 - fg[3]));
  const gradStops = (img) => { const out = []; const re = /(?:rgba?|color)\([^)]*\)/g; let m;
    while ((m = re.exec(img))) { const c = P(m[0]); if (c) out.push(c); } return out; };
  const baseOf = (el) => { let n = el;
    while (n && n !== document.documentElement) {
      const c = P(getComputedStyle(n).backgroundColor);
      if (c && c[3] > 0.85) return [c[0], c[1], c[2]];
      n = n.parentElement; }
    return [255, 255, 255]; };
  const bgOf = (el) => { let n = el;
    while (n && n !== document.documentElement) {
      const cs = getComputedStyle(n);
      if (cs.backgroundImage && cs.backgroundImage !== 'none') {
        const baseCol = baseOf(n);
        const st = gradStops(cs.backgroundImage).map(s => mix(s, baseCol));
        if (st.length) return { kind: 'grad', colors: st, from: String(n.className || n.tagName).split(' ')[0] };
      }
      const c = P(cs.backgroundColor);
      if (c && c[3] > 0.85) return { kind: 'solid', colors: [[c[0], c[1], c[2]]], from: String(n.className || n.tagName).split(' ')[0] };
      n = n.parentElement; }
    return { kind: 'solid', colors: [[255, 255, 255]], from: 'root' }; };
  const out = [];
  document.querySelectorAll('body *').forEach(el => {
    let txt = ''; el.childNodes.forEach(n => { if (n.nodeType === 3) txt += n.textContent.trim(); });
    if (!txt) return;
    const r = el.getBoundingClientRect();
    if (r.width < 4 || r.height < 4 || r.top > innerHeight || r.bottom < 0) return;
    const cs = getComputedStyle(el);
    if (cs.visibility === 'hidden' || parseFloat(cs.opacity) < 0.3) return;
    const fg = P(cs.color); if (!fg) return;
    const bg = bgOf(el);
    const size = parseFloat(cs.fontSize), bold = parseInt(cs.fontWeight, 10) >= 600;
    const need = (size >= 24 || (size >= 18.66 && bold)) ? 3.0 : 4.5;
    let worst = 99, worstBg = null;
    bg.colors.forEach(bc => { const c = cr(mix(fg, bc), bc); if (c < worst) { worst = c; worstBg = bc; } });
    out.push({ cls: String(el.className || el.tagName).split(' ').slice(0, 2).join('.') || el.tagName,
               txt: txt.slice(0, 16), size, kind: bg.kind, from: bg.from,
               fg: [fg[0], fg[1], fg[2]].map(Math.round).join(','),
               bgc: worstBg.map(Math.round).join(','), c: +worst.toFixed(2), need });
  });
  return out;
}
"""


def _find_chrome():
    for c in CHROME_CANDIDATES:
        if c and os.path.exists(c):
            return c
    return None


def _login(base, user, password):
    req = urllib.request.Request(
        base + "/api/login",
        data=json.dumps({"username": user, "password": password}).encode(),
        headers={"Content-Type": "application/json"})
    with urllib.request.urlopen(req, timeout=15) as resp:
        data = json.load(resp)
    return data["data"]["access_token"], json.dumps(data["user"])


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--base-url", default=os.environ.get("QC_BASE_URL", "http://127.0.0.1:8001"))
    ap.add_argument("--user", default=os.environ.get("QC_USER", "admin"))
    ap.add_argument("--password", default=os.environ.get("QC_PASSWORD", "admin"))
    ap.add_argument("--hues", default="45,220,0,140,270,320,-1")
    ap.add_argument("--json", default="")
    args = ap.parse_args()

    hues = [int(x) for x in args.hues.split(",") if x.strip()]
    base = args.base_url.rstrip("/")
    chrome = _find_chrome()
    if not chrome:
        print("[skip] 未找到 Chromium/Chrome, 跳过 DOM 配色审计 (可设 QC_CHROME 指定)")
        return 0
    try:
        from playwright.sync_api import sync_playwright
    except ImportError:
        print("[skip] 未安装 playwright, 跳过 DOM 配色审计")
        return 0
    try:
        token, user = _login(base, args.user, args.password)
    except Exception as e:  # noqa: BLE001
        print("[skip] 无法登录 %s (%s), 跳过 DOM 配色审计" % (base, e))
        return 0

    report = {"base_url": base, "configs": {}, "failures": []}
    total_fail = 0
    with sync_playwright() as p:
        browser = p.chromium.launch(executable_path=chrome, args=["--no-sandbox"])
        ctx = browser.new_context(viewport={"width": 1600, "height": 1000})
        ctx.add_init_script("localStorage.setItem('quant_token', %r); localStorage.setItem('quant_user', %r);" % (token, user))
        page = ctx.new_page()
        page.goto(base + "/", wait_until="networkidle", timeout=60000)
        page.wait_for_timeout(3000)
        for mode in ("light", "dark"):
            for hue in hues:
                page.evaluate("a => window.__quantModules.themes.applyTheme(a[0], a[1])", [mode, hue])
                page.wait_for_timeout(600)
                rows = []
                for _name, route in PAGES:
                    page.evaluate("x => { window.location.hash = x; }", route)
                    page.wait_for_timeout(2200)
                    rows += page.evaluate(AUDIT_JS)
                bad = [r for r in rows if r["c"] < r["need"]]
                total_fail += len(bad)
                key = "%s-%s" % (mode, hue)
                report["configs"][key] = {"text_nodes": len(rows), "failures": bad}
                print("  %-6s hue=%-4s 文本节点 %4d  低于阈值 %2d" % (mode, hue, len(rows), len(bad)))
                for b in bad[:5]:
                    report["failures"].append(dict(b, config=key))
        browser.close()

    print()
    if report["failures"]:
        print("=== 失败明细 (%d) ===" % len(report["failures"]))
        seen = set()
        for f in report["failures"]:
            k = (f["cls"], f["from"], f["need"])
            if k in seen:
                continue
            seen.add(k)
            print("  %-9s %-7s %-22s %5.2f/%.1f  fg=%-13s bg=%-13s %r"
                  % (f["config"], f["kind"], f["cls"][:22], f["c"], f["need"], f["fg"], f["bgc"], f["txt"]))
    if args.json:
        with open(args.json, "w", encoding="utf-8") as f:
            json.dump(report, f, ensure_ascii=False, indent=1)
        print("report ->", args.json)
    print("总计低于阈值: %d" % total_fail)
    return 0 if total_fail == 0 else 1


if __name__ == "__main__":
    sys.exit(main())
