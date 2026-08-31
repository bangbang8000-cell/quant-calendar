#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""quant-calendar v3.17.15 浏览器冒烟 (FR-3.17.15 开放 API v2)

对 dev:8001 跑 Playwright headless Chromium (--no-proxy-server)，覆盖:
  SM-17.15.1 管理员在系统页「开放 API」卡片生成 Key → 界面一次性显示明文
  SM-17.15.2 用该 Key 调 GET /api/openapi/quotes → 200 结构化响应 (success/data/degraded)
  SM-17.15.3 用该 Key 调 GET /api/openapi/health → 200 (仅含 db_ok 等, 不泄露明文)
  SM-17.15.4 吊销该 Key 后同 Key 调 /api/openapi/quotes → 401
  SM-17.15.5 全程 0 pageerror

用法:
  python tests/e2e/smoke_v31715.py [--base-url http://localhost:8001]
退出码: 0 全过 / 1 有失败
"""
import argparse
import json
import sys
import time

import urllib.request
import urllib.error

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


def _click_sidebar(page, name):
    """点击侧边栏导航 (文本匹配)"""
    return page.evaluate("""(name) => {
        const el = [...document.querySelectorAll('.nav-item')]
            .find(e => e.textContent.replace(/\\s+/g, ' ').includes(name) && e.offsetParent !== null);
        if (el) { el.click(); return true; }
        return false;
    }""", name)


def _click_subtab(page, name):
    """点击二级导航 tab (文本匹配)"""
    return page.evaluate("""(name) => {
        const el = [...document.querySelectorAll('.sub-nav-tab')]
            .find(e => e.textContent.replace(/\\s+/g, ' ').includes(name));
        if (el) { el.click(); return true; }
        return false;
    }""", name)


def _http_json(base_url, path, headers=None, timeout=8):
    """GET JSON, 返回 (status_code, body_dict|None)"""
    req = urllib.request.Request(base_url.rstrip('/') + path, headers=headers or {})
    try:
        with urllib.request.urlopen(req, timeout=timeout) as r:
            return r.status, json.loads(r.read().decode())
    except urllib.error.HTTPError as e:
        return e.code, None
    except Exception:
        return None, None


def _wait_visible(page, selector, timeout=8.0):
    t0 = time.time()
    while time.time() - t0 < timeout:
        if page.locator(selector).count() > 0:
            return True
        time.sleep(0.4)
    return False


# ---------------------------------------------------------------- SM-17.15.1
def smoke_generate_key(page, base_url):
    log('SM-17.15.1 系统页「开放 API」生成 Key → 一次性显示明文')
    # 进入系统配置 → 用户与权限
    ok = _click_sidebar(page, '系统配置')
    check('SM-17.15.1 进入系统配置', ok)
    time.sleep(1.0)
    ok = _click_subtab(page, '用户与权限')
    check('SM-17.15.1 进入用户与权限', ok)
    time.sleep(1.2)
    # 定位「开放 API」卡片
    card_visible = _wait_visible(page, '.card-title:has-text("开放 API")')
    check('SM-17.15.1 开放 API 卡片出现', card_visible)
    if not card_visible:
        return None
    # 点击「生成 Key」
    clicked = page.evaluate("""() => {
        const btns = [...document.querySelectorAll('button')];
        const b = btns.find(x => x.textContent.trim() === '生成 Key' && x.offsetParent !== null);
        if (b) { b.click(); return true; }
        return false;
    }""")
    check('SM-17.15.1 点击生成 Key', clicked)
    # 等待明文展示
    shown = _wait_visible(page, '.openapi-key-code', timeout=8.0)
    plain = page.locator('.openapi-key-code').text_content().strip() if shown else ''
    check('SM-17.15.1 明文一次性展示', shown and plain.startswith('qc_') and len(plain) > 20,
          f"plain_len={len(plain)}")
    return plain


# ---------------------------------------------------------------- SM-17.15.2/3
def smoke_call_openapi(page, base_url, plain):
    log('SM-17.15.2/3 用 Key 调开放 API 只读端点')
    if not plain:
        check('SM-17.15.2 跳过 (无 Key)', False, '未生成 Key')
        return
    headers = {'X-API-Key': plain}
    # /quotes
    status, body = _http_json(base_url, '/api/openapi/quotes?code=000001.SZ', headers)
    structured = bool(body) and body.get('success') is True \
        and 'data' in body and 'degraded' in body
    check('SM-17.15.2 /api/openapi/quotes 200 结构化',
          status == 200 and structured, f"status={status} body_keys={list((body or {}).keys())}")
    # /health
    status2, body2 = _http_json(base_url, '/api/openapi/health', headers)
    ok2 = bool(body2) and body2.get('success') is True and body2.get('data', {}).get('status') == 'ok'
    check('SM-17.15.3 /api/openapi/health 200', status2 == 200 and ok2,
          f"status={status2} data={body2.get('data') if body2 else None}")


# ---------------------------------------------------------------- SM-17.15.4
def smoke_revoke_key(page, base_url, plain):
    log('SM-17.15.4 吊销 Key → 同 Key 401')
    if not plain:
        check('SM-17.15.4 跳过 (无 Key)', False, '未生成 Key')
        return
    prefix = plain.split('_', 1)[1][:8]
    # 找到包含该前缀的 Key 行并点击吊销
    revoked = page.evaluate("""(prefix) => {
        const rows = [...document.querySelectorAll('.openapi-key-row')];
        const row = rows.find(r => r.textContent.includes(prefix));
        if (!row) return false;
        const b = [...row.querySelectorAll('button')].find(x => x.textContent.trim() === '吊销');
        if (b) { b.click(); return true; }
        return false;
    }""", prefix)
    check('SM-17.15.4 点击吊销', revoked)
    time.sleep(1.5)
    # 吊销后同 Key 调 /quotes → 401
    status, _body = _http_json(base_url, '/api/openapi/quotes?code=000001.SZ',
                               {'X-API-Key': plain})
    check('SM-17.15.4 吊销后同 Key 401', status == 401, f"status={status}")
    # 界面 Key 行应标记「已吊销」或按钮消失
    marked = page.evaluate("""(prefix) => {
        const rows = [...document.querySelectorAll('.openapi-key-row')];
        const row = rows.find(r => r.textContent.includes(prefix));
        return row ? row.textContent.includes('已吊销') || !row.textContent.includes('吊销') : false;
    }""", prefix)
    check('SM-17.15.4 界面标记已吊销', marked)


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
            check('SM-17.15.0 登录成功', logged_in)
            if not logged_in:
                log('  [ABORT] 登录未成功, 中止冒烟')
                raise SystemExit(1)
            plain = smoke_generate_key(page, BASE_URL)
            smoke_call_openapi(page, BASE_URL, plain)
            smoke_revoke_key(page, BASE_URL, plain)
            check('SM-17.15.5 全程 0 pageerror', len(page_errors) == 0,
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
