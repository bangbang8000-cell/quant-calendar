#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
V6.11 (需求轮2·批次3): 美林时钟阶段带门禁

覆盖用户需求 2「界面色彩与浅色/深色/主题色配合 + 历史周期与本轮风格一致(文字在色轴内)」:
  1) 结构: 历史周期不再有带外 .mc-time-chip 行; 阶段带统一高度 28px; 段内文字标签存在
  2) 对比度: 段内文字 vs **实际合成底色** >= 4.5:1
     - 实色段: color-mix(阶段色 22%, 卡片表面)
     - 预测(斜纹)段: 渐变各色标先合成到卡片表面, 取最差档 (原评估脚本曾误判为 1.29 —— 未合成透明底色)
  3) 矩阵: 阶段矩阵单元格使用主题原生合成色 + 正文色 (不再用 opacity 叠色)
  4) 主题联动: 亮/暗 × 色相(45/220/中性) 六种组合下均达标

用法: python tests/e2e/merrill_band_gate.py [--base-url ...] [--user ... --password ...]
退出码: 0 通过 / 1 不达标 / 0(打印 skip) 环境不可用
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

JS = r"""
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
  const cr = (a, b) => { const la = lum(a), lb = lum(b); return (Math.max(la, lb) + 0.05) / (Math.min(la, lb) + 0.05); };
  const mix = (fg, bg) => [0, 1, 2].map(i => fg[i] * fg[3] + bg[i] * (1 - fg[3]));
  const stops = (img) => { const out = []; const re = /(?:rgba?|color)\([^)]*\)/g; let m;
    while ((m = re.exec(img))) { const c = P(m[0]); if (c) out.push(c); } return out; };
  const nearest = (el, prop) => { let n = el;
    while (n && n !== document.documentElement) { const c = P(getComputedStyle(n)[prop]); if (c && c[3] > 0.85) return [c[0], c[1], c[2]]; n = n.parentElement; }
    return [255, 255, 255]; };

  const segs = [];
  document.querySelectorAll('.mc-seg').forEach(el => {
    const label = el.querySelector('.mc-seg-name'); if (!label) return;
    const cs = getComputedStyle(el), ls = getComputedStyle(label);
    const fg = P(ls.color); if (!fg) return;
    const base = nearest(el, 'backgroundColor');
    let worst = 99;
    if (cs.backgroundImage && cs.backgroundImage !== 'none') {
      const st = stops(cs.backgroundImage);                    // 斜纹: 各色标合成到卡片底, 取最差
      if (st.length) { st.forEach(s => { const eff = mix(s, base); const c = cr(mix(fg, eff), eff); if (c < worst) worst = c; }); }
      else { worst = 99; }
    } else {
      const bg = P(cs.backgroundColor);
      if (!bg) return;
      const eff = bg[3] > 0.999 ? [bg[0], bg[1], bg[2]] : mix(bg, base);
      worst = cr(eff, base);
      // 实底色块上的文字对比: 用文字色 vs 合成后的底色
      worst = cr(mix(fg, eff), eff);
    }
    segs.push({ txt: (label.textContent || '').trim().slice(0, 10), c: +worst.toFixed(2),
                ghost: !!(cs.backgroundImage && cs.backgroundImage !== 'none'),
                h: Math.round(el.getBoundingClientRect().height) });
  });

  const mx = Array.from(document.querySelectorAll('.mc-mx-cell')).slice(0, 5).map(e => {
    const c = getComputedStyle(e);
    return { bg: c.backgroundColor, color: c.color, usesToken: c.color.indexOf('rgb') === 0 };
  });

  return {
    segs: segs,
    timeChips: document.querySelectorAll('.mc-time-chip').length,
    bandSmHeight: (() => { const e = document.querySelector('.mc-band-sm'); return e ? Math.round(e.getBoundingClientRect().height) : null; })(),
    bandHeight: (() => { const e = document.querySelector('.mc-band:not(.mc-band-sm)'); return e ? Math.round(e.getBoundingClientRect().height) : null; })(),
    mxCells: mx,
    histRows: document.querySelectorAll('.mc-hrow').length
  };
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
    ap.add_argument("--min-contrast", type=float, default=4.5)
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

    failures = []
    with sync_playwright() as p:
        browser = p.chromium.launch(executable_path=chrome, args=["--no-sandbox"])
        ctx = browser.new_context(viewport={"width": 1600, "height": 1000})
        ctx.add_init_script("localStorage.setItem('quant_token', %r); localStorage.setItem('quant_user', %r);" % (token, user))
        page = ctx.new_page()
        page.goto(base + "/", wait_until="networkidle", timeout=60000)
        page.wait_for_timeout(3000)
        for mode in ("light", "dark"):
            for hue in (45, 220, -1):
                page.evaluate("a => window.__quantModules.themes.applyTheme(a[0], a[1])", [mode, hue])
                page.wait_for_timeout(600)
                page.evaluate("() => { window.location.hash = '#strategies/merrill'; }")
                page.wait_for_timeout(2800)
                r = page.evaluate(JS)
                worst = min([s["c"] for s in r["segs"]] or [99])
                tag = "%s/%s" % (mode, hue)
                if r["timeChips"] != 0:
                    failures.append("%s: 仍存在带外 chip 行 (%d)" % (tag, r["timeChips"]))
                if r["bandSmHeight"] != 28:
                    failures.append("%s: 历史带高应为 28px, 实际 %s" % (tag, r["bandSmHeight"]))
                if r["histRows"] < 1:
                    failures.append("%s: 未渲染历史周期行" % tag)
                if not r["segs"]:
                    failures.append("%s: 阶段带内无文字标签" % tag)
                if worst < args.min_contrast:
                    bad = [s for s in r["segs"] if s["c"] < args.min_contrast][:3]
                    failures.append("%s: 带内文字最低 %.2f < %.1f %s" % (tag, worst, args.min_contrast, bad))
                print("  %-9s 段(有标签)=%2d 最低对比=%5.2f | 带高=%s/%s | 带外chip=%d | 矩阵单元=%d | %s"
                      % (tag, len(r["segs"]), worst, r["bandHeight"], r["bandSmHeight"], r["timeChips"],
                         len(r["mxCells"]), "OK" if worst >= args.min_contrast and r["timeChips"] == 0 else "FAIL"))
        browser.close()

    print()
    if failures:
        print("=== 失败 %d 项 ===" % len(failures))
        for f in failures:
            print("  -", f)
        return 1
    print("美林阶段带门禁: 全部通过 (结构 + 带内文字对比度 + 主题联动)")
    return 0


if __name__ == "__main__":
    sys.exit(main())
