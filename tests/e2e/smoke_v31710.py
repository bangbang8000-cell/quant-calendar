#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""quant-calendar v3.17.10 浏览器冒烟 (FR-3.17.10 个性化与搜索)

对 dev:8001 跑 Playwright headless Chromium (--no-proxy-server)，覆盖:
  SM-17.10.1 设置主题 → 刷新 → 保持（主题持久化）
  SM-17.10.2 命令面板搜索 'gzmt' / 代码 命中股票（拼音/首字母检索）
  SM-17.10.3 最近查看记录出现直达（命令面板空查询直达入口）
  SM-17.10.4 全程 0 pageerror

用法:
  python tests/e2e/smoke_v31710.py [--base-url http://localhost:8001]
退出码: 0 全过 / 1 有失败
"""
import argparse
import json
import os
import re
import sys
import time

import urllib.request

DEFAULT_BASE_URL = 'http://localhost:8001/'
FAILURES = []


def log(msg):
    print('[smoke] ' + msg, flush=True)


def check(name, cond, detail=''):
    status = 'PASS' if cond else 'FAIL'
    if not cond:
        FAILURES.append(name)
    log(f'  [{status}] {name}' + (f' — {detail}' if detail else ''))
    return cond


def _token_login(page, base_url):
    """经 /api/login 拿 token 注入 localStorage 恢复会话（绕开登录表单交互）"""
    req = urllib.request.Request(
        base_url.rstrip('/') + '/api/login',
        data=json.dumps({"username": "admin", "password": "admin"}).encode(),
        headers={'Content-Type': 'application/json'}, method='POST')
    with urllib.request.urlopen(req, timeout=10) as r:
        body = json.loads(r.read().decode())
    token = body['data']['access_token']
    user = body['user']
    page.context.add_init_script(
        f"localStorage.setItem('quant_token', {json.dumps(token)});"
        f"localStorage.setItem('quant_user', {json.dumps(json.dumps(user, ensure_ascii=False))});"
        f"localStorage.removeItem('quant_preferences');"
        f"localStorage.removeItem('quant_recent_viewed');"
    )
    page.goto(base_url, wait_until='domcontentloaded', timeout=25000)
    time.sleep(2.5)
    _dismiss_overlays(page)
    time.sleep(1.0)


def _dismiss_overlays(page, max_tries=8):
    for _ in range(max_tries):
        n = page.evaluate("""() => {
            const vis = [...document.querySelectorAll('.el-overlay')]
                .filter(o => getComputedStyle(o).display !== 'none');
            if (vis.length === 0) return 0;
            const skip = [...document.querySelectorAll('button')]
                .find(b => b.textContent.trim() === '跳过' && b.offsetParent !== null && b.closest('.el-dialog'));
            if (skip) { skip.click(); return vis.length; }
            for (const o of vis) {
                const hb = o.querySelector('.el-dialog__headerbtn');
                if (hb) { hb.click(); return vis.length; }
            }
            return vis.length;
        }""")
        if n == 0:
            return True
        time.sleep(0.5)
    return False


def _theme_of(page):
    return page.evaluate("() => document.documentElement.getAttribute('data-theme')")


def _open_palette(page):
    page.keyboard.press('Control+k')
    time.sleep(0.8)


def _close_palette(page):
    page.keyboard.press('Escape')
    time.sleep(0.5)


def _type_in_palette(page, text):
    """在命令面板输入框输入（headless 合成输入）"""
    ok = page.evaluate("""(t) => {
        const inp = document.querySelector('.command-palette input');
        if (!inp) return false;
        inp.focus();
        const setter = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, 'value').set;
        setter.call(inp, t);
        inp.dispatchEvent(new Event('input', { bubbles: true }));
        return true;
    }""", text)
    return ok


def _wait_palette_hit(page, predicate, timeout=6.0):
    """轮询等待命令面板出现满足谓词的命中项"""
    t0 = time.time()
    while time.time() - t0 < timeout:
        items = _palette_items(page)
        if any(predicate(it) for it in items):
            return True, items
        time.sleep(0.4)
    return False, items


def _palette_items(page):
    return page.evaluate("""() => {
        const els = [...document.querySelectorAll('.command-palette .command-item')];
        return els.map(e => e.textContent.replace(/\\s+/g, ' ').trim());
    }""")


# ---------------------------------------------------------------- SM-17.10.1
def smoke_theme_persist(page):
    log('SM-17.10.1 设置主题 → 刷新 → 保持')
    # 经权威实现 applyTheme 切换（等同用户选择主题，写 quant_theme）
    switched = page.evaluate("""() => {
        if (window.__quantModules && window.__quantModules.themes
            && typeof window.__quantModules.themes.applyTheme === 'function') {
            window.__quantModules.themes.applyTheme('dark-pro');
            return true;
        }
        return false;
    }""")
    check('SM-17.10.1 设置主题 dark-pro', switched and _theme_of(page) == 'dark-pro',
          f"data-theme={_theme_of(page)}")
    time.sleep(0.6)
    page.reload(wait_until='domcontentloaded', timeout=25000)
    time.sleep(2.5)
    _dismiss_overlays(page)
    time.sleep(1.0)
    kept = _theme_of(page) == 'dark-pro'
    check('SM-17.10.1 刷新后主题保持 dark-pro', kept, f"data-theme={_theme_of(page)}")
    # 恢复默认主题
    page.evaluate("""() => {
        if (window.__quantModules && window.__quantModules.themes.applyTheme) {
            window.__quantModules.themes.applyTheme('tech-blue');
        }
    }""")
    time.sleep(0.5)


# ---------------------------------------------------------------- SM-17.10.2
def smoke_search_pinyin(page):
    log('SM-17.10.2 命令面板拼音/首字母检索')
    _open_palette(page)
    ok = _type_in_palette(page, 'gzmt')
    check('SM-17.10.2 输入 gzmt', ok)
    hit, items = _wait_palette_hit(page, lambda it: '贵州茅台' in it or '600519' in it)
    log(f'  [INFO] 命中项: {items[:8]}')
    check('SM-17.10.2 gzmt 命中 贵州茅台', hit, str(items[:8]))
    # 代码命中
    _type_in_palette(page, '600519')
    hit_code, items2 = _wait_palette_hit(page, lambda it: '600519' in it or '贵州茅台' in it)
    check('SM-17.10.2 代码 600519 命中', hit_code, str(items2[:8]))
    _close_palette(page)
    time.sleep(0.4)


# ---------------------------------------------------------------- SM-17.10.3
def smoke_recent_viewed(page):
    log('SM-17.10.3 最近查看记录出现直达')
    # 通过命令面板选中 贵州茅台 打开详情 → 记录最近查看
    _open_palette(page)
    _type_in_palette(page, 'gzmt')
    found, _items = _wait_palette_hit(page, lambda it: '贵州茅台' in it)
    check('SM-17.10.3 搜索到 贵州茅台', found, str(_items[:8]))
    clicked = page.evaluate("""() => {
        const els = [...document.querySelectorAll('.command-palette .command-item')];
        const el = els.find(e => e.textContent.includes('贵州茅台'));
        if (el) { el.click(); return true; }
        return false;
    }""")
    check('SM-17.10.3 点击直达 贵州茅台', clicked)
    time.sleep(2.0)
    _dismiss_overlays(page)
    # 打开详情后 stockDetail 弹窗可能出现；关闭弹窗再打开命令面板验证直达
    page.keyboard.press('Escape')
    time.sleep(0.6)
    _dismiss_overlays(page)
    recent = page.evaluate("""() => {
        if (!window.__quantModules || !window.__quantModules.recent) return [];
        return window.__quantModules.recent.getRecentViewed();
    }""")
    log(f'  [INFO] 最近查看记录: {recent}')
    recorded = any(r.get('code') == '600519.SH' for r in recent)
    check('SM-17.10.3 最近查看已记录 600519.SH', recorded, str(recent))
    # 空查询打开命令面板 → 直达入口出现
    _open_palette(page)
    items = _palette_items(page)
    log(f'  [INFO] 空查询直达项: {items[:10]}')
    quick = any('最近查看' in it and '600519' in it for it in items)
    check('SM-17.10.3 命令面板最近查看直达', quick, str(items[:10]))
    _close_palette(page)
    time.sleep(0.4)


# ---------------------------------------------------------------- SM-17.10.5
def smoke_preferences_persist(page, base_url):
    log('SM-17.10.5 偏好后端持久化（登录态写后端 + 刷新读回）')
    ok = page.evaluate("""() => {
        if (!window.__quantModules || !window.__quantModules.preferences) return false;
        return window.__quantModules.preferences.setPreference('default_view', 'calendar');
    }""")
    check('SM-17.10.5 设置偏好 default_view=calendar', ok)
    time.sleep(1.2)  # 等待后端写请求完成
    # 直接经后端读回（登录态，带 token）
    try:
        token = page.evaluate("() => localStorage.getItem('quant_token') || ''")
        req = urllib.request.Request(base_url.rstrip('/') + '/api/user/preferences',
                                     headers={'Authorization': 'Bearer ' + token})
        with urllib.request.urlopen(req, timeout=8) as r:
            body = json.loads(r.read().decode())
        server_val = body.get('preferences', {}).get('default_view')
    except Exception as e:
        server_val = None
        log(f'  [INFO] 后端读偏好失败: {e}')
    check('SM-17.10.5 后端读回 default_view=calendar', server_val == 'calendar',
          f"server={server_val}")
    # 刷新后前端仍能读到（localStorage 与后端一致）
    page.reload(wait_until='domcontentloaded', timeout=25000)
    time.sleep(2.5)
    _dismiss_overlays(page)
    time.sleep(1.0)
    front_val = page.evaluate("""async () => {
        if (!window.__quantModules || !window.__quantModules.preferences) return null;
        const p = await window.__quantModules.preferences.loadPreferences();
        return p.default_view;
    }""")
    check('SM-17.10.5 刷新后偏好保持 calendar', front_val == 'calendar',
          f"front={front_val}")
    # 清理恢复默认（避免污染后续）
    page.evaluate("""() => {
        if (window.__quantModules && window.__quantModules.preferences) {
            window.__quantModules.preferences.setPreference('default_view', 'strategies');
        }
    }""")
    time.sleep(0.6)


def main():
    global BASE_URL
    ap = argparse.ArgumentParser()
    ap.add_argument('--base-url', default=DEFAULT_BASE_URL)
    args = ap.parse_args()
    BASE_URL = args.base_url

    from playwright.sync_api import sync_playwright

    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True, args=['--no-proxy-server'])
        ctx = browser.new_context(viewport={'width': 1280, 'height': 900})
        page = ctx.new_page()
        page_errors = []
        page.on('pageerror', lambda e: page_errors.append(str(e)))
        try:
            log(f'连接 {BASE_URL}')
            _token_login(page, BASE_URL)
            for _ in range(30):
                if page.evaluate("() => document.querySelectorAll('.nav-item').length > 0"):
                    break
                time.sleep(0.5)
            logged_in = page.locator('.login-box').count() == 0 \
                and page.evaluate("() => document.querySelectorAll('.nav-item').length > 0")
            check('SM-17.10.0 登录成功', logged_in)
            if not logged_in:
                log('  [ABORT] 登录未成功, 中止冒烟')
                raise SystemExit(1)
            smoke_theme_persist(page)
            smoke_search_pinyin(page)
            smoke_recent_viewed(page)
            smoke_preferences_persist(page, BASE_URL)
            check('SM-17.10.4 全程 0 pageerror', len(page_errors) == 0,
                  f'errors={page_errors[:5]}')
        except Exception as e:
            import traceback
            traceback.print_exc()
            check('smoke 未崩溃', False, str(e))
        finally:
            browser.close()

    log('=' * 46)
    if FAILURES:
        log(f'SMOKE FAIL: {len(FAILURES)} 项失败 -> {FAILURES}')
        return 1
    log('SMOKE PASS: 全部通过')
    return 0


if __name__ == '__main__':
    sys.exit(main())
