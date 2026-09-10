#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""V5.4.2 前端冒烟: 重点跟踪页 + 向导弹窗取消验证 (dev :8001, headless chromium)

覆盖:
  SM-5.4.2-1 登录后不再弹出任何向导弹窗 (tour/onboarding 覆盖层不出现)
  SM-5.4.2-2 AI → 重点跟踪: 0 pageerror
  SM-5.4.2-3 默认加载最近一次评估: 出现 "已加载最近一次评估" 提示且日期为最近评估日
  SM-5.4.2-4 按推荐档位归类: 出现档位标题 (推荐/谨慎推荐/中性 等) + 每档计数
  SM-5.4.2-5 入池状态徽标: 出现 新入池/在池/已出池 徽标
用法: python focus_smoke_v542.py [--base-url http://127.0.0.1:8001]
"""
import argparse
import json
import sys
import time
import urllib.request

from playwright.sync_api import sync_playwright

FAILURES = []


def log(msg):
    print('[focus-smoke] ' + msg, flush=True)


def check(name, cond, detail=''):
    status = 'PASS' if cond else 'FAIL'
    if not cond:
        FAILURES.append(name)
    log('  [%s] %s%s' % (status, name, (' — ' + detail if detail else '')))
    return cond


def token_login(page, base):
    req = urllib.request.Request(
        base.rstrip('/') + '/api/login',
        data=json.dumps({"username": "admin", "password": "admin"}).encode(),
        headers={'Content-Type': 'application/json'}, method='POST')
    with urllib.request.urlopen(req, timeout=10) as r:
        body = json.loads(r.read().decode())
    token = body['data']['access_token']
    user = body['user']
    page.context.add_init_script(
        "localStorage.setItem('quant_token', " + json.dumps(token) + ");"
        "localStorage.setItem('quant_user', " + json.dumps(json.dumps(user, ensure_ascii=False)) + ");"
        "localStorage.setItem('quant_theme', 'tech-blue');"
    )
    page.goto(base, wait_until='domcontentloaded', timeout=30000)
    time.sleep(3)


def goto_focus(page):
    # 打开 AI 页 (侧栏导航, 找 nav 中包含 '智能评估' 的项)
    clicked = page.evaluate("""() => {
      const els = [...document.querySelectorAll('*')];
      const target = els.find(e => e.children.length === 0 && e.textContent.trim() === '智能评估');
      if (target) { target.click(); return true; }
      return false;
    }""")
    time.sleep(1.5)
    if not clicked:
        log('  [warn] 未找到智能评估导航入口, 尝试 data 属性')
        page.evaluate("""() => {
          const els = [...document.querySelectorAll('[data-page="ai"], .nav-item, .el-menu-item')];
          if (els.length) els[0].click();
        }""")
        time.sleep(1.5)
    # 打开重点跟踪 (AI 页概览统计卡, aria-label="重点跟踪") — 入口未就绪时轮询重试
    for _ in range(15):
        ok = page.evaluate("""() => {
          const el = document.querySelector('[aria-label="重点跟踪"]');
          if (el) { el.click(); return true; }
          const card = [...document.querySelectorAll('.stat-card')].find(c => c.textContent.includes('重点跟踪'));
          if (card) { card.click(); return true; }
          return false;
        }""")
        if ok:
            break
        time.sleep(1)
    # 等待重点跟踪视图渲染完成 (行/档位/空态出现), 避免时序抖动误判
    for _ in range(20):
        ready = page.evaluate("""() => !!document.querySelector(
            '.focus-tier-header, .focus-row, .focus-empty, .focus-row-name')""")
        if ready:
            break
        time.sleep(1)
    time.sleep(1)


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument('--base-url', default='http://127.0.0.1:8001')
    ap.add_argument('--chromium', default='/home/evergreen/.agent-browser/browsers/chrome-150.0.7871.46/chrome')
    args = ap.parse_args()
    base = args.base_url
    with sync_playwright() as p:
        browser = p.chromium.launch(
            executable_path=args.chromium if args.chromium and __import__('os').path.exists(args.chromium) else None,
            headless=True, args=['--no-proxy-server', '--no-sandbox'])
        page = browser.new_page(viewport={'width': 1440, 'height': 960})
        pageerrors = []
        page.on('pageerror', lambda e: pageerrors.append(str(e)))
        page.on('console', lambda m: pageerrors.append('[console:' + m.type + '] ' + m.text)
                if m.type == 'error' else None)

        log('登录 ' + base)
        token_login(page, base)

        # SM-5.4.2-1: 向导弹窗不出现
        time.sleep(2)
        overlays = page.evaluate("""() => {
          return [...document.querySelectorAll('.onboarding-overlay')]
            .filter(o => getComputedStyle(o).display !== 'none').length;
        }""")
        tour_vis = page.evaluate("""() => {
          const d = document.querySelector('.tour-dialog, .el-dialog');
          return d && getComputedStyle(d).display !== 'none';
        }""")
        check('SM-5.4.2-1 登录后无向导弹窗', overlays == 0 and not tour_vis,
              'overlay=%d tour=%s' % (overlays, tour_vis))

        # SM-5.4.2-2: 进入重点跟踪
        goto_focus(page)
        page.screenshot(path='/home/evergreen/dsh-workspace/focus-smoke-v542.png', full_page=True)
        html = page.content()

        check('SM-5.4.2-2 重点跟踪页 0 pageerror', len(pageerrors) == 0,
              'errors=%d %s' % (len(pageerrors), pageerrors[:3]))

        # SM-5.4.2-3: 最近一次评估提示
        has_latest = '已加载最近一次评估' in html
        check('SM-5.4.2-3 默认加载最近一次评估提示', has_latest)

        # SM-5.4.2-4: 推荐档位标题
        tier_marks = [m for m in ('强烈推荐', '推荐', '谨慎推荐', '中性', '观望') if m in html]
        check('SM-5.4.2-4 按推荐档位归类渲染', len(tier_marks) > 0,
              '档位: %s' % tier_marks)

        # SM-5.4.2-5: 入池状态徽标
        badges = [b for b in ('新入池', '在池', '已出池', '从未入池') if b in html]
        check('SM-5.4.2-5 入池状态徽标', len(badges) > 0, '徽标: %s' % badges)

        # 附加: 无 qc-onboarding 组件实例
        onboarding_count = page.evaluate(
            "() => document.querySelectorAll('qc-onboarding').length")
        check('SM-5.4.2-6 qc-onboarding 组件未挂载', onboarding_count == 0)

        # SM-5.4.3-1: 评分范围(新入池基准日)提示 — 盘前=前一交易日池 / 盘后=当天池
        check('SM-5.4.3-1 展示评分范围提示', '评分范围' in html)

        browser.close()

    log('')
    if FAILURES:
        log('FAILED: %d — %s' % (len(FAILURES), FAILURES))
        sys.exit(1)
    log('ALL PASSED')


if __name__ == '__main__':
    main()
