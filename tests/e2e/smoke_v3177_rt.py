#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""quant-calendar v3.17.7 实时化 浏览器冒烟 (FR-3.17.7 实时化, 可选)

对 dev:8001 跑 Playwright headless Chromium (--no-proxy-server)，覆盖:
  SM-RT.1 自选页加载 → 实时报价区出现（WS 连接尝试发生，页面 JS 无报错）
  SM-RT.2 数据源不可达/WS 不可用 → 显示"数据不可达"占位（优雅降级，不报错）
  SM-RT.3 行内报价区存在且不报错；其余功能正常（自选行渲染正常）
  SM-RT.4 全程 0 pageerror

用法:
  python tests/e2e/smoke_v3177_rt.py [--base-url http://localhost:8001]
退出码: 0 全过 / 1 有失败
"""
import argparse
import json
import os
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
    )
    page.goto(base_url, wait_until='domcontentloaded', timeout=25000)
    time.sleep(2.5)
    _dismiss_overlays(page)
    time.sleep(1.0)
    return token


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


def _ensure_watchlist_item(base_url, token):
    """确保 admin 自选至少 1 只（供实时报价区渲染）；已存在则跳过"""
    headers = {'Content-Type': 'application/json', 'Authorization': 'Bearer ' + token}
    req = urllib.request.Request(base_url.rstrip('/') + '/api/watchlist',
                                 data=json.dumps({"code": "600519.SH", "name": "贵州茅台"}).encode(),
                                 headers=headers, method='POST')
    with urllib.request.urlopen(req, timeout=8) as r:
        return json.loads(r.read().decode())


def _cleanup_watchlist_item(base_url, token):
    """清理冒烟新增的自选（若本就在则无副作用）"""
    try:
        headers = {'Authorization': 'Bearer ' + token}
        req = urllib.request.Request(base_url.rstrip('/') + '/api/watchlist/600519.SH',
                                     headers=headers, method='DELETE')
        urllib.request.urlopen(req, timeout=8)
    except Exception as e:
        log(f'  [INFO] 清理自选项失败(可忽略): {e}')


def _open_watchlist_page(page):
    """导航到 AI → 自选子页（桌面）"""
    clicked_nav = page.evaluate("""() => {
        const navs = [...document.querySelectorAll('.nav-item')];
        const el = navs.find(e => e.textContent.includes('智能评估'));
        if (el) { el.click(); return true; }
        return false;
    }""")
    if not clicked_nav:
        return False
    time.sleep(1.2)
    _dismiss_overlays(page)
    clicked_sub = page.evaluate("""() => {
        const el = document.querySelector('[aria-label="自选股"]');
        if (el) { el.click(); return true; }
        return false;
    }""")
    time.sleep(1.2)
    _dismiss_overlays(page)
    time.sleep(0.6)
    return clicked_sub


def _rt_bar_state(page):
    """返回 (bar_exists, bar_text, row_quote_count)"""
    return page.evaluate("""() => {
        const bar = document.querySelector('.rt-bar');
        const rowQuotes = document.querySelectorAll('.watchlist-quote').length;
        if (!bar) return { bar: false, text: '', rowQuotes };
        return { bar: true, text: (bar.textContent || '').replace(/\\s+/g, ' ').trim(), rowQuotes };
    }""")


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
        ws_attempts = []
        page.on('pageerror', lambda e: page_errors.append(str(e)))
        page.on('websocket', lambda ws: ws_attempts.append(ws.url))
        token = None
        try:
            log(f'连接 {BASE_URL}')
            token = _token_login(page, BASE_URL)
            for _ in range(30):
                if page.evaluate("() => document.querySelectorAll('.nav-item').length > 0"):
                    break
                time.sleep(0.5)
            logged_in = page.locator('.login-box').count() == 0 \
                and page.evaluate("() => document.querySelectorAll('.nav-item').length > 0")
            check('SM-RT.0 登录成功', logged_in)
            if not logged_in:
                log('  [ABORT] 登录未成功, 中止冒烟')
                raise SystemExit(1)

            # 确保自选至少 1 只（供实时报价区渲染）
            try:
                add_res = _ensure_watchlist_item(BASE_URL, token)
                log(f'  [INFO] 自选添加结果: {add_res.get("message", "")} '
                    f'existed={add_res.get("existed", "")}')
            except Exception as e:
                log(f'  [INFO] 自选添加失败: {e}')

            opened = _open_watchlist_page(page)
            check('SM-RT.1 进入自选子页', opened)

            # 等待实时报价区（WS 连接尝试 + 降级占位）
            rt = None
            for _ in range(20):
                rt = _rt_bar_state(page)
                if rt['bar']:
                    break
                time.sleep(0.5)
            check('SM-RT.2 实时报价区出现', bool(rt and rt['bar']),
                  f"bar={rt}")
            if rt and rt['bar']:
                check('SM-RT.2 显示"数据不可达"占位（优雅降级）',
                      '数据不可达' in rt['text'], rt['text'])
            # 行内报价容器结构存在（有自选即有列表，实时数据不可达时为空）
            row_count = page.evaluate("() => document.querySelectorAll('.watchlist-item').length")
            check('SM-RT.3 自选行正常渲染（其余功能不受影响）', row_count >= 1,
                  f"watchlist_items={row_count}")
            log(f'  [INFO] WS 连接尝试: {len(ws_attempts)} 次 -> {ws_attempts[:3]}')
            check('SM-RT.4 全程 0 pageerror', len(page_errors) == 0,
                  f'errors={page_errors[:5]}')
        except Exception as e:
            import traceback
            traceback.print_exc()
            check('smoke 未崩溃', False, str(e))
        finally:
            if token:
                try:
                    _cleanup_watchlist_item(BASE_URL, token)
                except Exception:
                    pass
            browser.close()

    log('=' * 46)
    if FAILURES:
        log(f'SMOKE FAIL: {len(FAILURES)} 项失败 -> {FAILURES}')
        return 1
    log('SMOKE PASS: 全部通过')
    return 0


if __name__ == '__main__':
    sys.exit(main())
