#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
V6.11 (用户反馈「类似的深底一起优化」): 深底色块门禁

背景: 亮色下「品牌色深实底 + 白字」是同一类问题的反复来源 (按钮 → 策略池标签 → 各类徽标/头像):
WCAG AA 要求白字 4.5:1, 于是品牌色必须压到 L<=42%, 大面积使用观感过重。
V6.11 已将承载文字/图标的品牌色块统一改为「浅底彩字」(--brand-soft-*), 仅危险操作保留深实底。

本门禁: 亮色模式下扫描关键页面, 断言**承载文字的元素**不存在「深底」(相对亮度 L < 0.30),
       并列出违规元素; 纯装饰填充 (进度条/时间条) 与危险按钮不在范围内。

用法: python tests/e2e/deep_fill_gate.py [--base-url ...] [--user ... --password ...] [--max-lum 0.30]
退出码: 0 通过 / 1 有深底文字元素 / 0(打印 skip) 环境不可用
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
)

# 允许保留深底的例外 (破坏性操作 = 唯一按决策保留的深实底)
ALLOW_DEEP = ("el-button--danger",)

PAGES = (
    ("calendar", "#calendar"),
    ("strategies-overview", "#strategies/overview"),
    ("consensus", "#strategies/consensus"),
    ("ai-focus", "#ai/focus"),
    ("merrill", "#strategies/merrill"),
    ("research-backtest", "#research/backtest"),
    ("shortterm", "#shortterm/market-review"),
    ("system-user", "#system/user"),
    ("watchlist", "#watchlist"),
)

JS = r"""
(maxLum) => {
  const P = (c) => { const m = String(c).match(/rgba?\((\d+),\s*(\d+),\s*(\d+)(?:[,\s/]+([\d.]+%?))?\)/);
    if (!m) return null; let a = 1;
    if (m[4] !== undefined) a = m[4].endsWith('%') ? parseFloat(m[4]) / 100 : parseFloat(m[4]);
    return [+m[1], +m[2], +m[3], a]; };
  // color(srgb r g b [/ a]) —— 注意必须解析可选 alpha, 否则 color-mix(X 12%, transparent)
  // 会被当成不透明深色 (实测 today-pool-val / pool-change-val 曾因此误报)
  const colorFn = (c) => { const m = String(c).match(/color\(srgb\s+([\d.]+)\s+([\d.]+)\s+([\d.]+)(?:\s*\/\s*([\d.]+))?/);
    return m ? [+m[1] * 255, +m[2] * 255, +m[3] * 255, m[4] === undefined ? 1 : parseFloat(m[4])] : null; };
  const any = (c) => P(c) || colorFn(c);
  const lum = (t) => { const f = (c) => { c /= 255; return c <= 0.04045 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4); };
    return 0.2126 * f(t[0]) + 0.7152 * f(t[1]) + 0.0722 * f(t[2]); };
  const out = [];
  document.querySelectorAll('body *').forEach(el => {
    const r = el.getBoundingClientRect();
    if (r.width < 16 || r.height < 12 || r.top > innerHeight || r.bottom < 0) return;
    // 只关心「承载文字」的元素
    let txt = ''; el.childNodes.forEach(n => { if (n.nodeType === 3) txt += n.textContent.trim(); });
    if (!txt) return;
    const cs = getComputedStyle(el);
    let fill = null, kind = null;
    if (cs.backgroundImage && cs.backgroundImage.indexOf('gradient') >= 0) {
      const m = String(cs.backgroundImage).match(/(?:rgba?|color)\([^)]*\)/);
      const c = m ? any(m[0]) : null;
      if (c) { fill = c; kind = 'gradient'; }
    }
    if (!fill) {
      const c = any(cs.backgroundColor);
      if (c && c[3] > 0.02) {
        if (c[3] > 0.9) { fill = c; kind = 'solid'; }
        else {
          // 半透明浅底 (如 color-mix(X 12%, transparent)) 必须合成到祖先不透明底再判断深浅,
          // 否则会把「浅底彩字」误判为深底 (实测 pool-change-val 曾被误报)。
          let n = el, base = [255, 255, 255];
          while (n && n !== document.documentElement) {
            const b = any(getComputedStyle(n).backgroundColor);
            if (b && b[3] > 0.9) { base = [b[0], b[1], b[2]]; break; }
            n = n.parentElement;
          }
          fill = [0, 1, 2].map(i => c[i] * c[3] + base[i] * (1 - c[3])).concat([1]);
          kind = 'tint';
        }
      }
    }
    if (!fill) return;
    const L = lum([fill[0], fill[1], fill[2]]);
    if (L >= maxLum) return;
    out.push({ cls: String(el.className || el.tagName).split(' ').slice(0, 2).join('.'), kind: kind,
               bg: fill.slice(0, 3).map(Math.round).join(','), L: +L.toFixed(3), txt: txt.slice(0, 14) });
  });
  const agg = {};
  out.forEach(o => { const k = o.cls + '|' + o.bg; if (!agg[k]) agg[k] = Object.assign({ n: 0 }, o); agg[k].n++; });
  return Object.values(agg);
}
"""


def _chrome():
    for c in CHROME_CANDIDATES:
        if c and os.path.exists(c):
            return c
    return None


def _login(base, user, password):
    req = urllib.request.Request(base + "/api/login",
                                data=json.dumps({"username": user, "password": password}).encode(),
                                headers={"Content-Type": "application/json"})
    with urllib.request.urlopen(req, timeout=15) as r:
        d = json.load(r)
    return d["data"]["access_token"], json.dumps(d["user"])


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--base-url", default=os.environ.get("QC_BASE_URL", "http://127.0.0.1:8001"))
    ap.add_argument("--user", default=os.environ.get("QC_USER", "admin"))
    ap.add_argument("--password", default=os.environ.get("QC_PASSWORD", "admin"))
    ap.add_argument("--max-lum", type=float, default=0.30)
    args = ap.parse_args()
    base = args.base_url.rstrip("/")
    chrome = _chrome()
    if not chrome:
        print("[skip] 未找到 Chromium/Chrome (可设 QC_CHROME)")
        return 0
    try:
        from playwright.sync_api import sync_playwright
    except ImportError:
        print("[skip] 未安装 playwright")
        return 0
    try:
        token, user = _login(base, args.user, args.password)
    except Exception as e:  # noqa: BLE001
        print("[skip] 无法登录 %s (%s)" % (base, e))
        return 0

    violations = []
    with sync_playwright() as p:
        browser = p.chromium.launch(executable_path=chrome, args=["--no-sandbox"])
        ctx = browser.new_context(viewport={"width": 1600, "height": 1000})
        ctx.add_init_script("localStorage.setItem('quant_token', %r); localStorage.setItem('quant_user', %r);" % (token, user))
        page = ctx.new_page()
        page.goto(base + "/", wait_until="networkidle", timeout=60000)
        page.wait_for_timeout(3000)
        page.evaluate("() => window.__quantModules.themes.applyTheme('light', 45)")
        page.wait_for_timeout(700)
        for name, route in PAGES:
            page.evaluate("x => { window.location.hash = x; }", route)
            page.wait_for_timeout(2500)
            rows = [r for r in page.evaluate(JS, args.max_lum)
                    if not any(a in r["cls"] for a in ALLOW_DEEP)]
            print("  %-20s 深底文字元素 %d" % (name, len(rows)))
            for r in rows[:4]:
                print("        %-34s %-8s bg=%-12s L=%.3f %r" % (r["cls"][:34], r["kind"], r["bg"], r["L"], r["txt"]))
            violations += [dict(r, page=name) for r in rows]
        browser.close()

    print()
    if violations:
        print("=== 存在深底文字元素 %d 处 (亮色, L < %.2f) ===" % (len(violations), args.max_lum))
        for v in violations[:12]:
            print("  %-18s %-30s bg=%s L=%.3f %r" % (v["page"], v["cls"][:30], v["bg"], v["L"], v["txt"]))
        return 1
    print("深底色块门禁: 通过 (亮色下无深底文字元素; 仅危险操作允许保留深实底)")
    return 0


if __name__ == "__main__":
    sys.exit(main())
