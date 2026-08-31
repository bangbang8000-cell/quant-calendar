#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""quant-calendar v3.17.14 浏览器冒烟 (FR-3.17.14 国际化 i18n)

对 dev:8001 跑 Playwright headless Chromium (--no-proxy-server)，token 注入登录（复用 smoke_v31710 方案），覆盖:
  SM-17.14.0 登录成功（token 注入）
  SM-17.14.1 默认中文界面（导航「量化日历」+ 日历页标题「策略共识度股票池」）
  SM-17.14.2 系统配置页语言下拉切换到 en
  SM-17.14.3 核心页英文可读（导航 Quant Calendar / 日历页 Consensus Stock Pool / 系统状态 System Status）
  SM-17.14.4 登录页英文（登出后 login.title = Quant Stock Calendar）
  SM-17.14.5 刷新后语言保持 en
  SM-17.14.6 切回 zh 恢复（导航回「量化日历」）
  SM-17.14.7 全程 0 pageerror

用法:
  python tests/e2e/smoke_v31717_i18n.py [--base-url http://localhost:8001]
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
    """经 /api/login 拿 token 注入 localStorage 恢复会话（绕开登录表单交互）。
    不用 add_init_script（每次导航都会重注入并清偏好），改为首次导航后手动注入 + reload：
    保证后续 reload（登出/重登）行为可控，语言偏好不被重复清除。"""
    req = urllib.request.Request(
        base_url.rstrip('/') + '/api/login',
        data=json.dumps({"username": "admin", "password": "admin"}).encode(),
        headers={'Content-Type': 'application/json'}, method='POST')
    with urllib.request.urlopen(req, timeout=10) as r:
        body = json.loads(r.read().decode())
    token = body['data']['access_token']
    user = body['user']
    page.goto(base_url, wait_until='domcontentloaded', timeout=25000)
    time.sleep(1.5)
    page.evaluate(
        f"localStorage.setItem('quant_token', {json.dumps(token)});"
        f"localStorage.setItem('quant_user', {json.dumps(json.dumps(user, ensure_ascii=False))});"
        f"localStorage.removeItem('quant_preferences');"
        f"localStorage.removeItem('quant_recent_viewed');"
    )
    page.reload(wait_until='domcontentloaded', timeout=25000)
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


def _nav_click(page, label):
    """点击侧边栏/底部导航中文本含 label 的导航项"""
    return page.evaluate("""(label) => {
        const navs = [...document.querySelectorAll('.nav-item, .mobile-nav-item')];
        const el = navs.find(n => n.textContent.replace(/\\s+/g, ' ').includes(label));
        if (el) { el.click(); return true; }
        return false;
    }""", label)


def _nav_labels(page):
    return page.evaluate("""() => {
        const navs = [...document.querySelectorAll('.nav-item, .mobile-nav-item')];
        return navs.map(n => n.textContent.replace(/\\s+/g, ' ').trim());
    }""")


def _body_text(page):
    return page.evaluate("() => document.body ? document.body.innerText : ''")


def _click_language(page, option_label):
    """打开系统配置页语言下拉并点击指定选项（Playwright 原生定位 + 真实鼠标事件）"""
    try:
        card = page.locator('.card', has_text=re.compile('语言|Language')).first
        sel = card.locator('.el-select').first
        sel.click(timeout=5000)
    except Exception as e:
        log(f'  [INFO] 语言下拉打开失败: {e}')
        return False
    time.sleep(1.0)
    try:
        opt = page.locator('.el-select-dropdown__item', has_text=option_label).first
        opt.click(timeout=5000)
        return True
    except Exception as e:
        log(f'  [INFO] 选项点击失败: {e}')
        return False


# ---------------------------------------------------------------- SM
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
            check('SM-17.14.0 登录成功', logged_in)
            if not logged_in:
                log('  [ABORT] 登录未成功, 中止冒烟')
                raise SystemExit(1)

            # SM-17.14.1 默认中文界面
            navs = _nav_labels(page)
            zh_nav = any('量化日历' in n for n in navs) and any('系统配置' in n for n in navs)
            check('SM-17.14.1 默认中文导航', zh_nav, str(navs))
            _nav_click(page, '量化日历')
            time.sleep(1.5)
            body = _body_text(page)
            check('SM-17.14.1 日历页标题中文', '策略共识度股票池' in body, 'body 含策略共识度股票池')

            # SM-17.14.2 系统配置页切到 en
            _nav_click(page, '系统配置')
            time.sleep(1.5)
            body = _body_text(page)
            check('SM-17.14.2 系统配置页中文（系统状态）', '系统状态' in body or '资源监控' in body)
            clicked = _click_language(page, 'English')
            check('SM-17.14.2 语言下拉切换到 English', clicked)
            time.sleep(1.5)

            # SM-17.14.3 核心页英文可读
            navs = _nav_labels(page)
            en_nav = any('Quant Calendar' in n for n in navs) and any('System Settings' in n for n in navs)
            check('SM-17.14.3 导航英文（Quant Calendar / System Settings）', en_nav, str(navs))
            body = _body_text(page)
            check('SM-17.14.3 系统状态英文（System Status）',
                  'System Status' in body or 'Resource Monitor' in body)
            _nav_click(page, 'Quant Calendar')
            time.sleep(1.5)
            body = _body_text(page)
            check('SM-17.14.3 日历页标题英文（Consensus Stock Pool）',
                  'Consensus Stock Pool' in body)
            _nav_click(page, 'Strategy Overview')
            time.sleep(1.5)
            body = _body_text(page)
            check('SM-17.14.3 策略总览英文（Strategy Overview）',
                  'Strategy Overview' in body or 'Today at a Glance' in body)

            # SM-17.14.4 登录页英文（登出模拟 → 刷新显示登录页）
            page.evaluate("""() => {
                localStorage.removeItem('quant_user');
                localStorage.removeItem('quant_token');
            }""")
            page.reload(wait_until='domcontentloaded', timeout=25000)
            time.sleep(2.5)
            _dismiss_overlays(page)
            time.sleep(1.0)
            body = _body_text(page)
            check('SM-17.14.4 登录页英文（Quant Stock Calendar / Log In）',
                  'Quant Stock Calendar' in body and 'Log In' in body)

            # 重新登录（language 偏好已持久化 en）
            page.evaluate("""async () => {
                const r = await fetch('/api/login', { method: 'POST',
                    headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify({username: 'admin', password: 'admin'}) });
                const d = await r.json();
                localStorage.setItem('quant_token', d.data.access_token);
                localStorage.setItem('quant_user', JSON.stringify(d.user));
            }""")
            time.sleep(1.0)
            page.reload(wait_until='domcontentloaded', timeout=25000)
            time.sleep(2.5)
            _dismiss_overlays(page)
            time.sleep(1.0)

            # SM-17.14.5 刷新后语言保持 en
            navs = _nav_labels(page)
            kept = any('Quant Calendar' in n for n in navs)
            check('SM-17.14.5 重登+刷新后语言保持 en', kept, str(navs))

            # SM-17.14.6 切回 zh 恢复
            _nav_click(page, 'System Settings')
            time.sleep(1.5)
            clicked = _click_language(page, '简体中文')
            check('SM-17.14.6 切回简体中文', clicked)
            time.sleep(1.5)
            navs = _nav_labels(page)
            restored = any('量化日历' in n for n in navs)
            check('SM-17.14.6 导航恢复中文（量化日历）', restored, str(navs))

            check('SM-17.14.7 全程 0 pageerror', len(page_errors) == 0,
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
