#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""quant-calendar Playwright 视觉回归 (TC-11.14, FR-3.11.9)

按 SM-11.1~11.6 场景截图 → 与基线逐像素对比 → 产出 HTML diff 报告。
报告为"信息性检查"，默认不阻塞发布（有差异仅写报告，exit 0）；--strict 才 exit 1。

用法:
  python tests/e2e/visual_regression.py --capture            # 刷新基线 + 记录数据 fixture (首次入库)
  python tests/e2e/visual_regression.py --report             # 重放 fixture + 对比基线产出报告 (非阻塞)
  python tests/e2e/visual_regression.py --strict             # 有差异时 exit 1
  python tests/e2e/visual_regression.py --base-url http://host:port  --chromium /path

数据确定性: 策略总览 hero 显示实时值 (美林成熟度/市场情绪/健康卡), 若真实拉取,
capture 与 report 之间数据刷新会产生假 diff。故 route 拦截冻结 FROZEN_APIS 四个端点:
--capture 记录首包响应到 tests/e2e/fixtures/, --report 直接重放。fixtures 需随基线一起入库。

产物:
  tests/e2e/fixtures/             — 冻结的实时数据 fixture (建议提交入库)
  tests/e2e/screenshots/baseline/  — 基线 PNG (建议提交入库)
  tests/e2e/screenshots/current/   — 本次运行截图
  tests/e2e/reports/visual-diff.html — 逐场景 baseline|current|diff 对比报告
"""
import argparse
import base64
import json
import os
import shutil
import sys
import time
from datetime import datetime

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
SCREEN_DIR = os.path.join(BASE_DIR, 'screenshots')
BASELINE_DIR = os.path.join(SCREEN_DIR, 'baseline')
CURRENT_DIR = os.path.join(SCREEN_DIR, 'current')
REPORT_DIR = os.path.join(BASE_DIR, 'reports')
FIXTURE_DIR = os.path.join(BASE_DIR, 'fixtures')
DEFAULT_CHROMIUM = '/snap/bin/chromium'  # 本机开发环境; CI 用 Playwright 自带 chromium
DEFAULT_BASE_URL = 'http://localhost:8001/'
# 像素差异阈值: 单通道亮度 >20 视为差异像素; 差异占比 >0.5% 判为视觉变更
DIFF_THRESHOLD = 20
MAX_DIFF_RATIO = 0.005
BASE_URL = DEFAULT_BASE_URL

# 实时数据端点 —— 截图期间 route 拦截冻结, 保证基线/本次运行看到相同数据。
# 策略总览 hero 聚合了这些实时值 (美林成熟度/市场情绪/池变动/健康卡),
# 不冻结时 capture 与 report 之间数据刷新会产生确定性假 diff (见 _wait_pixels_stable 注)。
# --capture 记录首包响应存 tests/e2e/fixtures/; --report 直接重放。
FROZEN_APIS = [
    '/api/dashboard',
    '/api/market/overview',
    '/api/market/merrill-clock',
    '/api/system/metrics',
]


class DataFreezer:
    """route 拦截冻结实时数据端点: capture 记录, report 重放。"""

    def __init__(self, capture):
        self.capture = capture
        self.mem = {}  # key -> {'status': int, 'body': bytes}
        if not capture:
            self.mem = self._load()

    @staticmethod
    def _key_of(frag):
        return frag.strip('/').replace('/', '__')  # '/api/dashboard' -> 'api__dashboard'

    def _load(self):
        out = {}
        for frag in FROZEN_APIS:
            p = os.path.join(FIXTURE_DIR, self._key_of(frag) + '.json')
            if os.path.exists(p):
                with open(p, 'r', encoding='utf-8') as f:
                    rec = json.load(f)
                out[self._key_of(frag)] = {'status': rec['status'], 'body': base64.b64decode(rec['body_b64'])}
        return out

    def save(self):
        if not self.capture or not self.mem:
            return
        os.makedirs(FIXTURE_DIR, exist_ok=True)
        for key, rec in self.mem.items():
            with open(os.path.join(FIXTURE_DIR, key + '.json'), 'w', encoding='utf-8') as f:
                json.dump({'status': rec['status'], 'body_b64': base64.b64encode(rec['body']).decode('ascii')}, f)
        log(f'已记录 {len(self.mem)} 个数据 fixture 到 {FIXTURE_DIR}')

    def handler(self, route):
        url = route.request.url
        for frag in FROZEN_APIS:
            if frag in url:
                key = self._key_of(frag)
                if key in self.mem:
                    rec = self.mem[key]
                    route.fulfill(status=rec['status'], body=rec['body'])
                    return
                if self.capture:
                    resp = route.fetch()
                    self.mem[key] = {'status': resp.status, 'body': resp.body()}
                    route.fulfill(status=resp.status, body=self.mem[key]['body'])
                else:
                    route.continue_()  # 无 fixture 时放行 (首次 --capture 前的 --report)
                return
        route.continue_()


def log(msg):
    print('[e2e] ' + msg, flush=True)


# ---------------------------------------------------------------- 页面操作
def _goto_login(page):
    page.goto(BASE_URL, wait_until='domcontentloaded', timeout=20000)
    time.sleep(1.5)


def _login(page):
    _goto_login(page)
    if page.locator('.login-box').count() > 0:
        page.fill('.login-box input[placeholder="用户名"], .login-box input', 'admin')
        page.fill('.login-box input[placeholder="密码"], .login-box input[type=password]', 'admin')
        page.locator('.login-box button').first.click()
        time.sleep(2.5)
    # 关闭所有弹窗遮罩: 初始化向导 + 新手引导 tour 各有「跳过」, 需循环点完
    _dismiss_overlays(page)
    time.sleep(0.8)


def _click_nav(page, text):
    return page.evaluate(
        "(t) => { const el=[...document.querySelectorAll('.nav-item')].find(e=>e.textContent.includes(t)); if(el){el.click();return true;} return false; }",
        text,
    )


def _wait_sel(page, sel, timeout=15):
    for _ in range(int(timeout / 0.5)):
        if page.evaluate("(s => !!document.querySelector(s))", sel):
            return True
        time.sleep(0.5)
    return False


def _wait_settle(page, timeout=25):
    """等待数据加载沉淀: 骨架屏/v-loading 遮罩/可见弹窗遮罩全部消失后截图,
    避免视觉回归捕获到灰阶加载态 (内容区 85% 差异的根因)"""
    for _ in range(int(timeout / 0.5)):
        dirty = page.evaluate("""() => {
            if (document.querySelector('.el-loading-mask, .el-loading-spinner, .skeleton, .kline-loading, .dashboard-grid .card.skeleton')) return true;
            // 可见的 el-overlay (初始化向导/新手引导) 会让整屏被 rgba(0,0,0,.5) 压灰
            const vis = [...document.querySelectorAll('.el-overlay')]
                .filter(o => getComputedStyle(o).display !== 'none');
            return vis.length > 0;
        }""")
        if not dirty:
            return True
        time.sleep(0.5)
    return False


def _wait_pixels_stable(page, timeout=20, min_wait=3.0):
    """等待页面像素稳定 (两帧截图无变化) 再捕获。

    背景: 总览页 cache 命中后 ~2s 会有一次 backgroundRefresh 静默拉新数据
    (美林进度/市场情绪/健康卡为实时值), 若在刷新落地前截图, 基线(旧数据)
    与本次(新数据)会产生确定性小 diff。连续两帧中心区域无像素变化即视为
    数据已沉淀。CSS 动画已冻结, ECharts canvas 动画 ~1s 播完, 故能收敛。
    超时则继续 (不阻塞), 由 freeze+settle 兜底。"""
    import io
    from PIL import Image
    import numpy as np
    start = time.time()
    last = None
    while time.time() - start < timeout:
        shot = page.screenshot()
        img = np.asarray(Image.open(io.BytesIO(shot)).convert('L'))
        if last is not None and time.time() - start >= min_wait:
            h, w = img.shape
            cy, cx, sh, sw = h // 2, w // 2, h // 3, w // 3
            a, b = last[cy - sh:cy + sh, cx - sw:cx + sw], img[cy - sh:cy + sh, cx - sw:cx + sw]
            if a.shape == b.shape and int((np.abs(a.astype(int) - b.astype(int)) > 8).sum()) == 0:
                return True
        last = img
        time.sleep(0.6)
    return False


def _dismiss_overlays(page, max_tries=12):
    """关闭所有可见弹窗遮罩: 登录后的「系统初始化设置」向导 + 新手引导 tour 各有
    一个「跳过」按钮, 单独点一次只会关一个, 需循环点到无可见 .el-overlay 为止。
    否则 el-overlay 的 rgba(0,0,0,.5) 遮罩会让整屏内容被压成灰色 (白×0.5=灰度127),
    造成 19% 量级假 diff。"""
    for _ in range(max_tries):
        n = page.evaluate("""() => {
            const vis = [...document.querySelectorAll('.el-overlay')]
                .filter(o => getComputedStyle(o).display !== 'none');
            if (vis.length === 0) return 0;
            // 优先点弹窗内可见的「跳过」按钮 (向导/tour 都有)
            const skip = [...document.querySelectorAll('button')]
                .find(b => b.textContent.trim() === '跳过'
                       && b.offsetParent !== null
                       && b.closest('.el-dialog'));
            if (skip) { skip.click(); return vis.length; }
            // 兜底: 右上角 X 关闭按钮
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


# ---------------------------------------------------------------- 场景 (SM-11.x)
# 每项: (key, label, prepare(page)) — prepare 使页面进入目标截图状态
SCENARIOS = [
    ('login', '登录页', _goto_login),
    ('strategies_desktop', '策略总览(桌面 1280px)',
     lambda p: (_login(p), _click_nav(p, '策略'), _wait_sel(p, '.today-hero'))[-1]),
    ('calendar', '量化日历(日视图)',
     lambda p: (_click_nav(p, '日历'), _wait_sel(p, '.consensus-item'))[-1]),
    ('stock_detail', '股票详情弹窗(K线)',
     lambda p: p.evaluate("() => { const i=document.querySelector('.consensus-item'); if(i){i.click();return true;} return false; }")),
    ('command_panel', '命令面板(Ctrl+K)',
     lambda p: (p.keyboard.press('Control+k'), _wait_sel(p, '.command-palette'))[-1]),
    ('strategies_mobile', '策略总览(移动 375px)',
     lambda p: _click_nav(p, '策略')),
    ('dark_theme', '深色主题(暗色专业)',
     lambda p: p.evaluate("""() => { const w=document.querySelector('.user-menu-wrapper'); if(w) w.click(); return true; }""")),
]


def _prepare_and_settle(page, key):
    """执行 prepare + 场景内专用等待/收尾"""
    for key_def, _, prepare in SCENARIOS:
        if key_def == key:
            prepare(page)
            break
    if key == 'stock_detail':
        _wait_sel(page, '#stockKlineChart', timeout=20)
        time.sleep(0.8)
    elif key == 'command_panel':
        time.sleep(0.8)
    elif key == 'dark_theme':
        page.evaluate("""() => {
            const row = [...document.querySelectorAll('.theme-item-row')].find(r => r.textContent.includes('暗色专业'));
            if (row) { row.click(); return true; }
            return false;
        }""")
        time.sleep(1.2)
    # 兜底: 确保无弹窗遮罩 (登录后向导/tour 若残留, 整屏会被压灰)
    _dismiss_overlays(page)
    # 数据沉淀: 等待骨架屏/v-loading 遮罩消失 (策略/日历等动态页必须, 其余立即返回)
    _wait_settle(page)
    # 禁 CSS 动画/过渡 (骨架 shimmer、脉冲点、元素过渡), 使截图帧确定; ECharts canvas
    # 动画由 JS 驱动无法用 CSS 禁, 靠固定等待 (默认 animation ~1s) 让其播完
    page.evaluate("""() => {
        let st = document.getElementById('e2e-freeze-anim');
        if (!st) {
            st = document.createElement('style');
            st.id = 'e2e-freeze-anim';
            st.textContent = '*{animation:none !important;transition:none !important}';
            document.head.appendChild(st);
        }
    }""")
    time.sleep(1.2)
    # 等页面像素稳定: 覆盖 backgroundRefresh 落地 / ECharts canvas 动画播完
    _wait_pixels_stable(page)


def _close_overlays(page):
    """关闭可能残留的弹窗/命令面板 (Escape ×2)"""
    page.keyboard.press('Escape')
    time.sleep(0.4)
    page.keyboard.press('Escape')
    time.sleep(0.5)


# ---------------------------------------------------------------- 像素对比
def _diff_ratio(a_path, b_path, diff_out):
    from PIL import Image, ImageChops
    a = Image.open(a_path).convert('RGB')
    b = Image.open(b_path).convert('RGB')
    if a.size != b.size:
        b = b.resize(a.size)
    diff = ImageChops.difference(a, b)
    bw = diff.convert('L').point(lambda p: 255 if p > DIFF_THRESHOLD else 0)
    import numpy as np
    n_diff = int((np.asarray(bw) > 0).sum())
    total = a.size[0] * a.size[1]
    ratio = n_diff / total if total else 1.0
    # diff 高亮图: 变化像素染红 (叠加在 current 上)
    red = Image.new('RGB', a.size, (255, 0, 0))
    highlight = b.copy()
    highlight.paste(red, mask=bw)
    # 对比图: baseline | current | diff 并排
    panel_h = max(a.size[1], b.size[1], highlight.size[1])
    def _pad(img):
        if img.size[1] == panel_h:
            return img
        canvas = Image.new('RGB', (img.size[0], panel_h), (245, 245, 245))
        canvas.paste(img, (0, 0))
        return canvas
    pa, pb, ph = _pad(a), _pad(b), _pad(highlight)
    sep = Image.new('RGB', (4, panel_h), (220, 220, 220))
    panel = Image.new('RGB', (pa.size[0] + pb.size[0] + ph.size[0] + 8, panel_h), (245, 245, 245))
    panel.paste(pa, (0, 0))
    panel.paste(sep, (pa.size[0], 0))
    panel.paste(pb, (pa.size[0] + 4, 0))
    panel.paste(sep, (pa.size[0] + pb.size[0] + 4, 0))
    panel.paste(ph, (pa.size[0] + pb.size[0] + 8, 0))
    panel.save(diff_out)
    return ratio


# ---------------------------------------------------------------- 报告
def _build_report(results):
    os.makedirs(REPORT_DIR, exist_ok=True)
    report_path = os.path.join(REPORT_DIR, 'visual-diff.html')
    now = datetime.now().strftime('%Y-%m-%d %H:%M:%S')
    rows = []
    for r in results:
        status = r['status']
        badge = {'PASS': '✅', 'DIFF': '⚠️', 'NEW': '🆕'}.get(status, '❓')
        compare = os.path.join('..', 'screenshots', 'current', r['key'] + '.png')
        rows.append(f"""<tr>
          <td>{badge} {r['key']}</td>
          <td>{r['label']}</td>
          <td><span class="badge {status.lower()}">{status}</span></td>
          <td>{r.get('ratio', '-')}</td>
          <td><a href="{compare}" target="_blank">查看</a></td>
        </tr>""")
    html = f"""<!DOCTYPE html><html lang="zh"><head><meta charset="utf-8">
<title>视觉回归 diff 报告</title><style>
body{{font-family:-apple-system,'PingFang SC',sans-serif;margin:24px;color:#1f2937}}
h1{{font-size:20px}} .meta{{color:#6b7280;font-size:13px;margin-bottom:16px}}
table{{border-collapse:collapse;width:100%;font-size:14px}}
th,td{{border:1px solid #e5e7eb;padding:8px 12px;text-align:left}}
th{{background:#f9fafb}}
.badge{{padding:2px 10px;border-radius:12px;font-size:12px;font-weight:600}}
.pass{{background:#d1fae5;color:#047857}}.diff{{background:#fef3c7;color:#b45309}}
.new{{background:#dbeafe;color:#1d4ed8}}
.tip{{margin-top:16px;font-size:13px;color:#6b7280;line-height:1.7}}
</style></head><body>
<h1>🖼️ quant-calendar 视觉回归 diff 报告</h1>
<div class="meta">生成时间 {now} ｜ 场景 {len(results)} 个 ｜ 差异阈值 {DIFF_THRESHOLD} (0~255) ｜ 判变 >{MAX_DIFF_RATIO:.1%} ｜ 信息性检查 · 不阻塞发布</div>
<table><tr><th>场景</th><th>说明</th><th>状态</th><th>差异占比</th><th>对比图</th></tr>{''.join(rows)}</table>
<div class="tip">说明：<b>PASS</b> 与基线一致；<b>DIFF</b> 存在像素差异（点"查看"审阅 baseline|current|diff 并排图，确认是否为预期 UI 变更）；<b>NEW</b> 无基线（首次运行已生成基线，下次运行将对比）。</div>
</body></html>"""
    with open(report_path, 'w', encoding='utf-8') as f:
        f.write(html)
    return report_path


# ---------------------------------------------------------------- 主流程
def main():
    ap = argparse.ArgumentParser(description='Playwright 视觉回归')
    ap.add_argument('--base-url', default=DEFAULT_BASE_URL)
    ap.add_argument('--chromium', default=os.environ.get('PLAYWRIGHT_CHROMIUM', ''), help='chromium 可执行文件路径; 留空则用 Playwright 自带浏览器')
    ap.add_argument('--capture', action='store_true', help='刷新基线截图')
    ap.add_argument('--report', action='store_true', help='对比基线并产出报告 (默认行为, 显式声明便于 CI 可读)')
    ap.add_argument('--strict', action='store_true', help='存在差异时 exit 1 (默认非阻塞)')
    args = ap.parse_args()
    if args.report and args.capture:
        ap.error('--capture 与 --report 互斥')

    global BASE_URL
    BASE_URL = args.base_url

    from playwright.sync_api import sync_playwright

    if args.capture and os.path.exists(CURRENT_DIR):
        shutil.rmtree(CURRENT_DIR)
    os.makedirs(BASELINE_DIR, exist_ok=True)
    os.makedirs(CURRENT_DIR, exist_ok=True)
    os.makedirs(REPORT_DIR, exist_ok=True)

    results = []
    try:
        with sync_playwright() as p:
            # chromium 解析顺序: 显式 --chromium > 本机 /snap/bin/chromium (开发机) > Playwright 自带 (CI 已 install)
            chromium_path = args.chromium
            if chromium_path and not os.path.exists(chromium_path):
                log(f'--chromium 路径不存在: {chromium_path}, 回退到 Playwright 自带浏览器')
                chromium_path = ''
            if not chromium_path and os.path.exists('/snap/bin/chromium'):
                chromium_path = '/snap/bin/chromium'
            launch_kwargs = {'headless': True, 'args': ['--no-sandbox']}
            if chromium_path:
                launch_kwargs['executable_path'] = chromium_path
            browser = p.chromium.launch(**launch_kwargs)
            ctx = browser.new_context(viewport={'width': 1280, 'height': 900})
            page = ctx.new_page()
            errs = []
            page.on('pageerror', lambda e: errs.append(str(e)))
            # 冻结实时数据端点 (capture 记录 / report 重放) → 截图确定性
            freezer = DataFreezer(args.capture)
            page.route('**/*', freezer.handler)

            # 顺序: 登录页 → 桌面各场景 → 移动策略 → 深色主题(最后, 避免影响其它场景)
            for key, label, _ in SCENARIOS:
                if key == 'strategies_mobile':
                    page.set_viewport_size({'width': 375, 'height': 812})
                    time.sleep(0.5)
                elif key == 'dark_theme':
                    page.set_viewport_size({'width': 1280, 'height': 900})
                    time.sleep(0.5)
                log(f'capture: {key} ({label})')
                _prepare_and_settle(page, key)
                shot = os.path.join(CURRENT_DIR, key + '.png')
                page.screenshot(path=shot, full_page=False)
                results.append({'key': key, 'label': label, 'shot': shot})
                # 弹窗/面板场景后清理, 避免遮挡后续场景
                if key in ('stock_detail', 'command_panel'):
                    _close_overlays(page)
            browser.close()
            freezer.save()
            if errs:
                log(f'警告: {len(errs)} 个页面错误: {errs[:5]}')
    except Exception as e:
        import traceback
        log(f'视觉回归执行失败: {e}')
        traceback.print_exc()
        return 1

    # 对比 / 捕获基线
    any_diff = False
    final = []
    for r in results:
        key, label, shot = r['key'], r['label'], r['shot']
        base = os.path.join(BASELINE_DIR, key + '.png')
        if args.capture:
            shutil.copy(shot, base)
            final.append({'key': key, 'label': label, 'status': 'NEW', 'ratio': '-'})
            log(f'baseline 已更新: {key}')
        elif not os.path.exists(base):
            shutil.copy(shot, base)
            final.append({'key': key, 'label': label, 'status': 'NEW', 'ratio': '-'})
            log(f'无基线, 已生成: {key} (下次运行将对比)')
        else:
            diff_out = os.path.join(REPORT_DIR, f'diff_{key}.png')
            ratio = _diff_ratio(base, shot, diff_out)
            status = 'PASS' if ratio <= MAX_DIFF_RATIO else 'DIFF'
            if status == 'DIFF':
                any_diff = True
            final.append({'key': key, 'label': label, 'status': status, 'ratio': f'{ratio:.2%}'})
            log(f'{key}: {status} (diff {ratio:.2%})')

    report = _build_report(final)
    log(f'报告: {report}')

    if any_diff and args.strict:
        log('存在视觉差异 (--strict) → exit 1')
        return 1
    return 0


if __name__ == '__main__':
    sys.exit(main())
