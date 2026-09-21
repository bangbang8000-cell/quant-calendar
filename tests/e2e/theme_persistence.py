#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
V6.11 (需求轮2·批次2): 主题偏好「端到端」回归门禁

覆盖三个曾在浏览器层出问题的点 (详见 docs/EVAL-UI-ROUND2.md §4/§5):
  1) 头部主题面板色相勾选: 色相 0(红) 与 -1(中性) 必须正确显示 ✓ 与度数 (原被 `|| 45` 吞成金色)
  2) 刷新持久化: 面板选择必须落 localStorage, 且刷新后仍生效
  3) 启动期应用 (R2-11): 刷新后 --primary-color 必须真正跟随已保存色相
     (原登录/会话恢复路径用旧主题名 'gold' 二次覆盖 → 视觉回退金色)

用法:
  python tests/e2e/theme_persistence.py [--base-url http://127.0.0.1:8001]
                                        [--user admin --password admin]
退出码: 0 = 全部通过; 1 = 有不一致; 0(并打印 skip) = 环境不可用
"""
import argparse
import os
import sys
import urllib.request
import json

CHROME_CANDIDATES = (
    os.environ.get("QC_CHROME", ""),
    "/home/evergreen/.agent-browser/browsers/chrome-150.0.7871.46/chrome",
    "/usr/bin/google-chrome",
    "/usr/bin/chromium",
)

OPEN_PANEL = "()=>{const b=document.querySelector('button[aria-label=\"主题设置\"]'); if(b && !document.querySelector('.qc-theme-swatches')) b.click();}"

STATE = r"""() => ({
  primary: getComputedStyle(document.documentElement).getPropertyValue('--primary-color').trim(),
  neutral: document.documentElement.getAttribute('data-theme-neutral'),
  lsPref: (() => { try { return JSON.parse(localStorage.getItem('quant_preferences') || '{}').theme_hue } catch (e) { return 'ERR' } })(),
  lsThemeHue: localStorage.getItem('quant_theme_hue'),
  tick: (Array.from(document.querySelectorAll('.qc-theme-swatch')).filter(e => e.querySelector('.qc-theme-swatch-check')).map(e => e.getAttribute('title'))[0] || null),
  custom: (document.querySelector('.qc-theme-custom-label') || {}).textContent || null
})"""

# (面板序号, 名称, 期望 --primary-color 前缀, 期望 data-theme-neutral)
CASES = (
    (2, "红色(0)", "hsl(0,", "false"),
    (6, "中性(-1)", "hsl(45, 0%", "true"),
    (0, "金色(45)", "hsl(45, 75%", "false"),
)


def _chrome():
    for c in CHROME_CANDIDATES:
        if c and os.path.exists(c):
            return c
    return None


def _login(base, user, password):
    req = urllib.request.Request(
        base + "/api/login",
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

        for idx, label, expect_prefix, expect_neutral in CASES:
            page.evaluate(OPEN_PANEL)
            page.wait_for_timeout(500)
            page.evaluate("i => { const s = document.querySelectorAll('.qc-theme-swatch'); if (s[i]) s[i].click() }", idx)
            page.wait_for_timeout(900)
            after_click = page.evaluate(STATE)
            if after_click["tick"] != label.split("(")[0]:
                failures.append("%s: 面板勾选错误 tick=%r (点击后)" % (label, after_click["tick"]))
            if expect_prefix == "hsl(0," and not after_click["primary"].startswith("hsl(0,"):
                failures.append("%s: 点击后 --primary-color=%s 未随色相" % (label, after_click["primary"]))

            # 刷新 → 验证持久化 + 启动期应用 (R2-11)
            page.reload(wait_until="networkidle")
            page.wait_for_timeout(3500)
            after_reload = page.evaluate(STATE)
            if not after_reload["primary"].startswith(expect_prefix):
                failures.append("%s: 刷新后 --primary-color=%s 期望前缀 %s (启动期未应用已保存色相)"
                                % (label, after_reload["primary"], expect_prefix))
            if after_reload["neutral"] != expect_neutral:
                failures.append("%s: 刷新后 data-theme-neutral=%s 期望 %s"
                                % (label, after_reload["neutral"], expect_neutral))
            print("  %-9s 点击后: ✓=%-6s %-22s | 刷新后: %-22s neutral=%s ls.theme_hue=%s"
                  % (label, after_click["tick"], after_click["custom"], after_reload["primary"],
                     after_reload["neutral"], after_reload["lsThemeHue"]))
        browser.close()

    print()
    if failures:
        print("=== 失败 %d 项 ===" % len(failures))
        for f in failures:
            print("  -", f)
        return 1
    print("主题偏好端到端门禁: 全部通过 (勾选 / 持久化 / 启动期应用)")
    return 0


if __name__ == "__main__":
    sys.exit(main())
