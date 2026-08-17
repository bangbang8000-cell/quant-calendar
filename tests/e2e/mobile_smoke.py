#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""quant-calendar v3.17.8 移动端冒烟 (FR-3.17.8 / 移动端一等公民)

对 dev:8001 跑 Playwright headless chromium，移动视口 375x667（is_mobile+has_touch），
覆盖:
  M-01 登录 + 375px 无横向溢出（scrollWidth <= 377）+ 0 pageerror
  M-02 链路1: 日历池 → 个股详情(多因子体检) → AI 智能评估
  M-03 链路2: 研究页 → 市场复盘（列表/空态可达）
  M-04 弹窗: 375px 高度封顶内部滚动 + 可关闭
  M-05 手势-下拉刷新: 触发数据刷新（/api/data-refresh/reload 或 /api/view/ 请求）
  M-06 手势-左滑露出操作按钮: 自选列表左滑 → .swipe-open + 删除按钮可点
  M-07 PWA: ServiceWorker 注册成功 + （可选）离线后核心页标题可读
  M-08 导航: 底部 mobile-nav 5 项可达（各主页面切换无溢出）

用法:
  python tests/e2e/mobile_smoke.py [--base-url http://127.0.0.1:8001/]
退出码: 0 全过 / 1 有失败（--no-proxy-server 绕过沙箱代理）
"""
import argparse
import json
import os
import sys
import time
import urllib.request

DEFAULT_BASE_URL = 'http://127.0.0.1:8001/'
FAILURES = []
PAGE_ERRORS = []
_BASE = DEFAULT_BASE_URL


def log(msg):
    print('[mobile-smoke] ' + msg, flush=True)


def check(name, cond, detail=''):
    status = 'PASS' if cond else 'FAIL'
    if not cond:
        FAILURES.append(name)
    log(f'  [{status}] {name}' + (f' — {detail}' if detail else ''))
    return cond


# ---------------------------------------------------------------- 工具
def token_login(page):
    import json as _json
    import urllib.request as _url
    req = _url.Request(
        _BASE.rstrip('/') + '/api/login',
        data=_json.dumps({"username": "admin", "password": "admin"}).encode(),
        headers={'Content-Type': 'application/json'}, method='POST')
    with _url.urlopen(req, timeout=10) as r:
        body = _json.loads(r.read().decode())
    token = body['data']['access_token']
    user = body['user']
    page.context.add_init_script(
        f"localStorage.setItem('quant_token', {_json.dumps(token)});"
        f"localStorage.setItem('quant_user', {_json.dumps(_json.dumps(user, ensure_ascii=False))});"
        f"localStorage.setItem('quant_theme', 'tech-blue');"
    )
    page.goto(_BASE, wait_until='domcontentloaded', timeout=25000)
    time.sleep(3)
    _dismiss_overlays(page)
    time.sleep(1)


def _api(method, path, body=None, token=None, timeout=30):
    headers = {'Content-Type': 'application/json'}
    if token:
        headers['Authorization'] = 'Bearer ' + token
    req = urllib.request.Request(
        _BASE.rstrip('/') + path,
        data=json.dumps(body).encode() if body is not None else None,
        headers=headers, method=method)
    with urllib.request.urlopen(req, timeout=timeout) as r:
        return json.loads(r.read().decode())


def _api_retry(method, path, body=None, token=None, tries=3):
    """带重试的 API 调用（沙箱偶发事件循环阻塞，重试可自愈）"""
    last = None
    for i in range(tries):
        try:
            return _api(method, path, body, token)
        except Exception as e:
            last = e
            time.sleep(2)
    raise last


def _dismiss_overlays(page, max_tries=12):
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


def _click_nav(page, text):
    return page.evaluate(
        "(t) => { const el=[...document.querySelectorAll('.mobile-nav-item')].find(e=>e.textContent.includes(t)); if(el){el.click();return true;} return false; }",
        text,
    )


def _click_sub(page, text):
    return page.evaluate(
        "(t) => { const el=[...document.querySelectorAll('.sub-nav-tab')].find(e=>e.textContent.trim().includes(t)); if(el){el.click();return true;} return false; }",
        text,
    )


def _js_click(page, sel):
    return page.evaluate("(s) => { const el=document.querySelector(s); if(el){el.click();return true;} return false; }", sel)


def _wait_sel(page, sel, timeout=15):
    for _ in range(int(timeout / 0.3)):
        if page.evaluate("(s => !!document.querySelector(s))", sel):
            return True
        time.sleep(0.3)
    return False


def _wait_dialog_tab(page, text, timeout=40):
    """轮询等待弹窗内出现指定文本的按钮（沙箱年度视图计算可阻塞事件循环数十秒）"""
    for _ in range(int(timeout / 0.5)):
        found = page.evaluate("""(t) => {
            const d = document.querySelector('.el-dialog');
            if (!d) return false;
            return [...d.querySelectorAll('.el-button')].some(b => b.textContent.includes(t));
        }""", text)
        if found:
            return True
        time.sleep(0.5)
    return False


def _overflow_ok(page, tolerance=2):
    info = page.evaluate("""() => ({
        scrollW: document.documentElement.scrollWidth,
        clientW: document.documentElement.clientWidth,
        bodyScrollW: document.body.scrollWidth,
    })""")
    return info['scrollW'] <= info['clientW'] + tolerance, info


def _dispatch_touch(page, sel, points):
    """points: [(x,y),...] → touchstart(0) / touchmove(中间点) / touchend(-1)"""
    return page.evaluate("""(args) => {
        const el = document.querySelector(args.sel);
        if (!el) return false;
        const mk = (p, id) => new Touch({ identifier: id, target: el, clientX: p[0], clientY: p[1] });
        const pts = args.points;
        const start = mk(pts[0], 1);
        el.dispatchEvent(new TouchEvent('touchstart', { bubbles: true, cancelable: true, touches: [start], changedTouches: [start] }));
        for (let i = 1; i < pts.length - 1; i++) {
            const mv = mk(pts[i], 1);
            el.dispatchEvent(new TouchEvent('touchmove', { bubbles: true, cancelable: true, touches: [mv], changedTouches: [mv] }));
        }
        const end = mk(pts[pts.length - 1], 1);
        el.dispatchEvent(new TouchEvent('touchend', { bubbles: true, cancelable: true, touches: [], changedTouches: [end] }));
        return true;
    }""", {"sel": sel, "points": points})


# ---------------------------------------------------------------- M-01
def smoke_layout_nav(page):
    log('M-01 375px 布局 + 底部导航可达')
    ok, info = _overflow_ok(page)
    check('M-01 策略总览无横向溢出', ok, str(info))
    nav = page.evaluate("() => ({ items: document.querySelectorAll('.mobile-nav-item').length, display: getComputedStyle(document.querySelector('.mobile-nav')).display, sidebar: getComputedStyle(document.querySelector('.sidebar')).display })")
    check('M-01 底部导航可见(5项) + 侧边栏隐藏',
          nav['items'] >= 5 and nav['display'] != 'none' and nav['sidebar'] == 'none',
          str(nav))
    check('M-01 初始无 pageerror', len(PAGE_ERRORS) == 0, str(PAGE_ERRORS[:3]))
    # 三大高频任务页 + 系统配置页：切换均无横向溢出
    # （系统配置会触发 4 视图年度预计算，沙箱下可达数十秒 —— 放到最后并容忍）
    for pageName in ('量化日历', '智能评估', '策略研究'):
        _click_nav(page, pageName)
        time.sleep(1.2)
        _dismiss_overlays(page)
        ok, info = _overflow_ok(page)
        check(f'M-01 页面[{pageName}]无横向溢出', ok, str(info))
    _click_nav(page, '系统配置')
    time.sleep(1.2)
    _dismiss_overlays(page)
    ok, info = _overflow_ok(page)
    check('M-01 页面[系统配置]无横向溢出', ok, str(info))
    _click_nav(page, '量化日历')
    time.sleep(1.2)


# ---------------------------------------------------------------- M-02
def smoke_chain_calendar_detail_ai(page):
    log('M-02 链路1: 日历池 → 个股详情(体检) → AI评估')
    ok = _wait_sel(page, '.consensus-item', timeout=15)
    check('M-02 日历池有股票可操作', ok)
    if not ok:
        return
    ok, info = _overflow_ok(page)
    check('M-02 日历池无横向溢出', ok, str(info))
    _js_click(page, '.consensus-item')
    time.sleep(1.5)
    ok = _wait_sel(page, '.el-dialog', timeout=10)
    check('M-02 个股详情弹窗打开', ok)
    # 等待弹窗内容渲染（含 Tab 按钮）
    tab_ready = _wait_dialog_tab(page, '多因子体检')
    tab = page.evaluate("""() => {
        const btns=[...document.querySelectorAll('.el-dialog .el-button')];
        const b=btns.find(x=>x.textContent.includes('多因子体检'));
        if(b){b.click();return true;} return false;
    }""")
    time.sleep(1.2)
    body = page.evaluate("() => document.querySelector('.el-dialog') ? document.querySelector('.el-dialog').innerText : ''")
    check('M-02 多因子体检面板渲染(可空态)', tab_ready and tab and ('暂无可用因子数据' in body or '因子' in body),
          f'tab={tab}')
    ok, info = _overflow_ok(page)
    check('M-02 详情弹窗打开时无横向溢出', ok, str(info))
    # 切回 K线 tab → 智能评估
    page.evaluate("""() => {
        const btns=[...document.querySelectorAll('.el-dialog .el-button')];
        const b=btns.find(x=>x.textContent.includes('K线图表'));
        if(b){b.click();return true;} return false;
    }""")
    time.sleep(0.5)
    ev = page.evaluate("""() => {
        const btns=[...document.querySelectorAll('.el-dialog .el-button')];
        const b=btns.find(x=>x.textContent.includes('智能评估'));
        if(b){b.click();return true;} return false;
    }""")
    time.sleep(1.2)
    # 智能评估触发判定: 阶段指示/进度条（慢路径）或结果面板（缓存命中即时返回）或错误态
    state = page.evaluate("""() => ({
        stage: !!document.querySelector('.ai-stage-indicator'),
        prog: !!document.querySelector('.ai-progress-bar'),
        err: !!document.querySelector('.ai-eval-error'),
        result: !!document.querySelector('.ai-result-meta') || !!document.querySelector('[class*="ai-result"]') ||
                [...document.querySelectorAll('.el-dialog .el-button')].some(b => b.textContent.includes('重新评估')),
    })""")
    check('M-02 AI 智能评估触发(阶段指示/结果面板/错误态)', ev and (state['stage'] or state['prog'] or state['err'] or state['result']),
          f'ev={ev} {state}')
    check('M-02 链路1无 pageerror', len(PAGE_ERRORS) == 0, str(PAGE_ERRORS[:3]))
    # 关闭弹窗，避免遮挡后续页面
    page.keyboard.press('Escape')
    time.sleep(0.5)
    _dismiss_overlays(page)


# ---------------------------------------------------------------- M-03
def smoke_chain_research_review(page):
    log('M-03 链路2: 研究页 → 市场复盘')
    _click_nav(page, '策略研究')
    time.sleep(1.2)
    sub = _click_sub(page, '市场复盘')
    # 轮询等待复盘子页内容（列表行或空态/错误态，数据源不可达算正常）
    content_ready = False
    for _ in range(int(20 / 0.5)):
        txt = page.evaluate("() => document.body.innerText")
        rows = page.evaluate("() => document.querySelectorAll('.market-review-row').length")
        if rows > 0 or '暂无市场复盘' in txt or '复盘列表加载失败' in txt or '尚未生成任何市场复盘报告' in txt:
            content_ready = True
            break
        time.sleep(0.5)
    ok, info = _overflow_ok(page)
    check('M-03 市场复盘子页无横向溢出', sub and ok, str(info))
    check('M-03 市场复盘列表/空态可达', sub and content_ready, '')
    check('M-03 链路2无 pageerror', len(PAGE_ERRORS) == 0, str(PAGE_ERRORS[:3]))


# ---------------------------------------------------------------- M-04
def smoke_dialog_scroll_close(page):
    log('M-04 弹窗 375px 内部滚动 + 可关闭')
    _click_nav(page, '量化日历')
    time.sleep(1.2)
    if not _wait_sel(page, '.consensus-item', timeout=10):
        check('M-04 有股票可开弹窗', False)
        return
    _js_click(page, '.consensus-item')
    time.sleep(1.5)
    # 等待弹窗内容渲染后再量高度
    _wait_dialog_tab(page, 'K线图表')
    dlg = page.evaluate("""() => {
        const d = document.querySelector('.el-dialog');
        if (!d) return null;
        const body = d.querySelector('.el-dialog__body');
        const cs = getComputedStyle(d);
        const r = d.getBoundingClientRect();
        return {
            maxH: cs.maxHeight, rectH: Math.round(r.height), vpH: window.innerHeight,
            bodyOverflowY: body ? getComputedStyle(body).overflowY : 'n/a',
        };
    }""")
    scrolled = bool(dlg) and dlg['maxH'] != 'none' and dlg['rectH'] <= dlg['vpH']
    check('M-04 弹窗高度封顶于视口', scrolled, str(dlg))
    # 关闭: 点右上 X
    closed = page.evaluate("""() => {
        const hb = document.querySelector('.el-dialog__headerbtn');
        if (hb) { hb.click(); return true; }
        return false;
    }""")
    time.sleep(0.8)
    # 弹窗关闭判定: 以 .el-overlay 可见性为准（el-dialog 元素关闭后仍 display:block，由外层 overlay 隐藏）
    gone = page.evaluate("""() => {
        const visOverlay = [...document.querySelectorAll('.el-overlay')]
            .some(o => getComputedStyle(o).display !== 'none');
        return !visOverlay;
    }""")
    check('M-04 弹窗可关闭', closed and gone, f'closed={closed}')
    _dismiss_overlays(page)


# ---------------------------------------------------------------- M-05
def smoke_pull_refresh(page):
    log('M-05 手势-下拉刷新')
    _click_nav(page, '量化日历')
    time.sleep(1.5)
    fired = {'reload': False, 'view': False}

    def on_req(req):
        try:
            u = req.url
            if '/api/data-refresh/reload' in u:
                fired['reload'] = True
            if '/api/view/' in u:
                fired['view'] = True
        except Exception:
            pass
    page.on('request', on_req)
    sent = _dispatch_touch(page, '[data-cal-root]', [(187, 90), (187, 120), (187, 260)])
    check('M-05 触摸事件已派发', sent)
    # 轮询: 指示器可见 或 触发了刷新请求
    shown = False
    for _ in range(20):
        shown = page.evaluate("() => { const el=document.querySelector('.pull-refresh-indicator'); return !!el && getComputedStyle(el).display !== 'none'; }")
        if shown or fired['reload'] or fired['view']:
            break
        time.sleep(0.3)
    check('M-05 下拉刷新触发(指示器可见或刷新请求)', shown or fired['reload'] or fired['view'],
          f'indicator={shown} reload={fired["reload"]} view={fired["view"]}')
    time.sleep(0.8)
    check('M-05 下拉刷新后无 pageerror', len(PAGE_ERRORS) == 0, str(PAGE_ERRORS[:3]))
    page.remove_listener('request', on_req)


# ---------------------------------------------------------------- M-06
def smoke_swipe_reveal(page, token):
    log('M-06 手势-左滑露出操作按钮（自选列表）')
    # 准备: 通过 API 加入一只自选（幂等，带重试容忍偶发事件循环阻塞）
    _api_retry('POST', '/api/watchlist', {'code': '600519.SH', 'name': '贵州茅台'}, token)
    time.sleep(0.5)
    _click_nav(page, '智能评估')
    time.sleep(1.2)
    _click_sub(page, '我的自选')
    time.sleep(2.0)
    if not _wait_sel(page, '.watchlist-item', timeout=10):
        check('M-06 自选列表有行可滑', False, 'watchlist 为空或未加载')
        return
    # 左滑: x 200 → 40（dx=-160）
    sent = _dispatch_touch(page, '.watchlist-item', [(220, 300), (120, 300), (40, 300)])
    time.sleep(0.6)
    state = page.evaluate("""() => {
        const row = document.querySelector('.watchlist-item');
        if (!row) return null;
        const acts = row.querySelector('.swipe-reveal-actions');
        const btn = acts ? acts.querySelector('button') : null;
        const r = acts ? acts.getBoundingClientRect() : null;
        return {
            open: row.classList.contains('swipe-open'),
            actsDisplay: acts ? getComputedStyle(acts).display : 'n/a',
            actsLeft: r ? Math.round(r.left) : null,
            rowRight: Math.round(row.getBoundingClientRect().right),
            btnVisible: btn ? btn.offsetParent !== null : false,
        };
    }""")
    check('M-06 左滑露出操作面板(.swipe-open + 按钮可见)', sent and state and state['open'] and state['actsDisplay'] != 'none' and state['btnVisible'],
          str(state))
    # 点击删除按钮 → 自选移除
    before = page.evaluate("() => document.querySelectorAll('.watchlist-item').length")
    clicked = page.evaluate("""() => {
        const row = document.querySelector('.watchlist-item');
        const acts = row ? row.querySelector('.swipe-reveal-actions') : null;
        const btn = acts ? acts.querySelector('button') : null;
        if (btn) { btn.click(); return true; }
        return false;
    }""")
    time.sleep(1.5)
    after = page.evaluate("() => document.querySelectorAll('.watchlist-item').length")
    check('M-06 删除按钮可点(自选减少)', clicked and after < before, f'{before}→{after}')
    check('M-06 手势后无 pageerror', len(PAGE_ERRORS) == 0, str(PAGE_ERRORS[:3]))
    # 恢复自选（幂等），不污染开发库状态
    try:
        _api_retry('POST', '/api/watchlist', {'code': '600519.SH', 'name': '贵州茅台'}, token)
    except Exception as e:
        log(f'  [INFO] 恢复自选失败: {e}')


def smoke_longpress_copy(page):
    log('M-06b 手势-长按复制代码（日历池行）')
    _click_nav(page, '量化日历')
    time.sleep(1.5)
    if not _wait_sel(page, '.consensus-item', timeout=10):
        check('M-06b 有行可长按', False)
        return
    # 长按: touchstart 后停留 ≥500ms 再 touchend（两段式模拟按压时长）
    page.evaluate("""() => {
        const el = document.querySelector('.consensus-item');
        if (!el) return false;
        const mk = (p, id) => new Touch({ identifier: id, target: el, clientX: p[0], clientY: p[1] });
        el.dispatchEvent(new TouchEvent('touchstart', { bubbles: true, cancelable: true, touches: [mk([180,300],1)], changedTouches: [mk([180,300],1)] }));
        return true;
    }""")
    time.sleep(0.8)
    page.evaluate("""() => {
        const el = document.querySelector('.consensus-item');
        if (!el) return false;
        const mk = (p, id) => new Touch({ identifier: id, target: el, clientX: p[0], clientY: p[1] });
        el.dispatchEvent(new TouchEvent('touchend', { bubbles: true, cancelable: true, touches: [], changedTouches: [mk([180,300],1)] }));
        return true;
    }""")
    time.sleep(0.5)
    st = page.evaluate("""() => {
        const visOverlay = [...document.querySelectorAll('.el-overlay')]
            .some(o => getComputedStyle(o).display !== 'none');
        return {
            toast: [...document.querySelectorAll('.el-message')].map(m => m.textContent.trim()).filter(t => t.includes('已复制代码')),
            dialogOpen: visOverlay,  // 以可见 overlay 判定弹窗是否真的打开
        };
    }""")
    check('M-06b 长按复制代码 toast + 不误开详情', bool(st['toast']) and not st['dialogOpen'],
          str(st))
    check('M-06b 长按后无 pageerror', len(PAGE_ERRORS) == 0, str(PAGE_ERRORS[:3]))
    _dismiss_overlays(page)


# ---------------------------------------------------------------- M-07
def smoke_pwa_offline(page):
    log('M-07 PWA: ServiceWorker 注册 + 离线壳可读(可选)')
    reg_ok = False
    try:
        reg_ok = page.evaluate("""async () => {
            if (!('serviceWorker' in navigator)) return false;
            const reg = await navigator.serviceWorker.ready;
            return !!(reg && reg.active);
        }""")
    except Exception as e:
        log(f'  [INFO] SW ready 超时: {e}')
    check('M-07 ServiceWorker 注册成功(active)', reg_ok)
    # 可选: 离线后核心页标题可读
    offline_ok = True
    offline_msg = ''
    try:
        ctx = page.context
        ctx.set_offline(True)
        page.goto(_BASE, wait_until='domcontentloaded', timeout=12000)
        time.sleep(1.5)
        title = page.title()
        has_shell = page.evaluate("() => !!document.querySelector('#app')")
        offline_ok = bool(title) and has_shell
        offline_msg = f'title={title} shell={has_shell}'
    except Exception as e:
        offline_ok = False
        offline_msg = f'exc={e}'
    finally:
        try:
            ctx.set_offline(False)
        except Exception:
            pass
    if offline_ok:
        check('M-07 离线后核心页标题/壳可读(可选)', True, offline_msg)
    else:
        log(f'  [INFO] 离线壳检查跳过/失败（可选）: {offline_msg}')


# ---------------------------------------------------------------- 主流程
def main():
    global _BASE
    ap = argparse.ArgumentParser()
    ap.add_argument('--base-url', default=DEFAULT_BASE_URL)
    ap.add_argument('--chromium', default='', help='chromium 可执行文件路径; 留空用 Playwright 自带')
    args = ap.parse_args()
    _BASE = args.base_url

    from playwright.sync_api import sync_playwright
    with sync_playwright() as p:
        launch_kwargs = {'headless': True, 'args': ['--no-sandbox', '--no-proxy-server']}
        if args.chromium and os.path.exists(args.chromium):
            launch_kwargs['executable_path'] = args.chromium
        browser = p.chromium.launch(**launch_kwargs)
        ctx = browser.new_context(viewport={'width': 375, 'height': 667}, is_mobile=True, has_touch=True)
        page = ctx.new_page()
        PAGE_ERRORS.clear()
        page.on('pageerror', lambda e: PAGE_ERRORS.append(str(e)))
        try:
            log(f'连接 {_BASE} (375x667, mobile+has_touch)')
            token_login(page)
            # 取 token 供 API 准备自选
            import urllib.request as _url
            req = _url.Request(
                _BASE.rstrip('/') + '/api/login',
                data=json.dumps({"username": "admin", "password": "admin"}).encode(),
                headers={'Content-Type': 'application/json'}, method='POST')
            with _url.urlopen(req, timeout=10) as r:
                token = json.loads(r.read().decode())['data']['access_token']
            smoke_layout_nav(page)
            smoke_chain_calendar_detail_ai(page)
            smoke_chain_research_review(page)
            smoke_dialog_scroll_close(page)
            smoke_pull_refresh(page)
            smoke_swipe_reveal(page, token)
            smoke_longpress_copy(page)
            smoke_pwa_offline(page)
        except Exception as e:
            import traceback
            traceback.print_exc()
            check('mobile smoke 未崩溃', False, str(e))
        finally:
            browser.close()

    log('=' * 46)
    if FAILURES:
        log(f'MOBILE SMOKE FAIL: {len(FAILURES)} 项失败 -> {FAILURES}')
        return 1
    log('MOBILE SMOKE PASS: 全部通过')
    return 0


if __name__ == '__main__':
    sys.exit(main())
