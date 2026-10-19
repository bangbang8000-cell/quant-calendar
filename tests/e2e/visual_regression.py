#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""quant-calendar Playwright 视觉回归 (TC-11.14, FR-3.11.9 / FR-6.4.8)

按 SM-11.1~11.6 场景截图 → 与基线逐像素对比 → 产出 HTML diff 报告。
报告为"信息性检查"，默认不阻塞发布（有差异仅写报告，exit 0）；--strict 才 exit 1。

用法:
  python tests/e2e/visual_regression.py --capture            # 刷新基线 + 记录数据 fixture (首次入库)
  python tests/e2e/visual_regression.py --report             # 重放 fixture + 对比基线产出报告 (非阻塞)
  python tests/e2e/visual_regression.py --strict             # 有差异时 exit 1
  python tests/e2e/visual_regression.py --base-url http://host:port  --chromium /path

v6.4 (FR-6.4.8): 视觉回归可信化
  旧实现三处失效，导致 11 张"基线"其实是同一张页面（失败即静默产出错误基线）：
    1. 一级导航靠 `.nav-item` + textContent 模糊匹配 —— 该类名是已被 SFC 覆盖的死代码，
       真实导航是 `.qc-sidebar-link[href="#<key>"]`，点击永远返回 false，页面从未切换。
    2. 场景就绪条件用 `.consensus-item` 判定日历页 —— 该元素属于策略研究页，与日历无关。
    3. 深色主题靠 `.theme-item-row` + `.user-menu-wrapper` —— 已并入 Header 主题面板
       (`.qc-theme-panel .qc-theme-mode`)，点击无效，dark_theme.png 实为浅色。
  现改为「期望状态驱动」：每个场景声明 expect(page/tab/title/theme)，截图前断言；
  断言不通过 → 记 MISMATCH 且 **不写基线**，从根上杜绝错误基线入库。

数据确定性: 策略总览 hero 显示实时值 (美林成熟度/市场情绪/健康卡), 若真实拉取,
capture 与 report 之间数据刷新会产生假 diff。故 route 拦截冻结 FROZEN_APIS 四个端点:
--capture 记录首包响应到 tests/e2e/fixtures/, --report 直接重放。fixtures 需随基线一起入库。

产物:
  tests/e2e/fixtures/             — 冻结的实时数据 fixture (建议提交入库)
  tests/e2e/screenshots/baseline/  — 基线 PNG (建议提交入库)
  tests/e2e/screenshots/current/   — 本次运行截图
  tests/e2e/reports/visual-diff.html — 逐场景 baseline|current|diff 对比报告
  tests/e2e/screenshots/baseline-<旧版本>/ — 旧基线归档 (由 --capture 首次自动迁移)
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

# v6.4 (FR-6.4.8): 本次可信化前的错误基线归档目录名
LEGACY_BASELINE_DIR = os.path.join(SCREEN_DIR, 'baseline-v6.3.6')

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


class SceneError(RuntimeError):
    """场景未到达期望状态 —— 必须 fail，不允许产图。"""


class SceneSkip(SceneError):
    """场景在当前环境下不可达 (如菜单被分组配置隐藏) —— 跳过，不算失败。"""


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


def _read_state(page):
    """读取当前导航/页签/标题/主题的实际状态。

    v6.4 (FR-6.4.8): 全部改用真实存活的类名 ——
      一级导航 = Sidebar.vue 的 .qc-sidebar-link.is-active (href="#<pageKey>")
      二级页签 = TopTabs.vue 的 .qc-top-tab.is-active (data-tab-key)
    旧实现用的 .nav-item 是被 SFC 覆盖的 sidebar.js 死代码，DOM 中不存在。
    """
    return page.evaluate("""() => {
        const navEl = document.querySelector('.qc-sidebar-link.is-active')
                   || document.querySelector('.qc-sidebar-link[aria-current="page"]');
        const tabEl = document.querySelector('.qc-top-tab.is-active')
                   || document.querySelector('.qc-top-tab[aria-selected="true"]');
        const root = document.documentElement;
        let href = '';
        if (navEl) {
            href = (navEl.getAttribute('href') || '').replace(/^#/, '');
        }
        return {
            nav: href,
            navText: navEl ? (navEl.textContent || '').trim() : '',
            tab: tabEl ? (tabEl.getAttribute('data-tab-key') || '') : '',
            tabText: tabEl ? (tabEl.textContent || '').trim() : '',
            title: document.title || '',
            theme: root.getAttribute('data-theme') || '',
            themeMode: root.getAttribute('data-theme-mode') || '',
            kpi: (document.querySelector('.qc-top-tabs-bar') ? 'toptabs' : 'notabs'),
        };
    }""")


def _wait_state(page, expect, timeout=20):
    """轮询至期望状态成立，返回最后一次读到的状态 (可能仍不匹配)。"""
    st = _read_state(page)
    deadline = time.time() + timeout
    while time.time() < deadline:
        if _state_matches(st, expect, strict_tab=True):
            return st
        time.sleep(0.25)
        st = _read_state(page)
    return st


def _state_matches(st, expect, strict_tab=True):
    if not expect:
        return True
    page_key = expect.get('page')
    if page_key and st.get('nav') != page_key:
        return False
    tab_key = expect.get('tab')
    if strict_tab and tab_key and st.get('tab') != tab_key:
        return False
    title = expect.get('title')
    if title:
        # runtime.js 的 document.title 只在 currentPage 变化时更新:
        # 首屏直接落在该页时 title 仍是「量化日历」, 切换后才带「<一级名> - 」前缀。
        # 故: 末尾必须是产品名; 若已带前缀, 前缀必须与期望一致。
        t = st.get('title', '')
        if not t.endswith('量化日历'):
            return False
        if ' - ' in t and not t.startswith(title):
            return False
    theme = expect.get('theme')
    if theme and st.get('theme') != theme:
        return False
    return True


def _describe(expect):
    if not expect:
        return '(无期望)'
    parts = []
    if expect.get('page'):
        parts.append('page=' + expect['page'])
    if expect.get('tab'):
        parts.append('tab=' + expect['tab'])
    if expect.get('theme'):
        parts.append('theme=' + expect['theme'])
    if expect.get('title'):
        parts.append('title^=' + expect['title'])
    return ' '.join(parts)


def _assert_state(page, expect, phase='截图前'):
    """断言页面处于期望状态；不成立则抛 SceneError（调用方不产图）。"""
    st = _read_state(page)
    if _state_matches(st, expect):
        return st
    raise SceneError(
        '%s状态不符: 期望 %s | 实际 page=%r tab=%r theme=%r title=%r'
        % (phase, _describe(expect), st.get('nav'), st.get('tab'), st.get('theme'), st.get('title'))
    )


_SCENE_FLAG = {'optional': False, 'reason': ''}


def _click_nav(page, page_key):
    """按一级页 key 精确点击侧栏导航 (href="#<key>")。

    v6.4 (FR-6.4.8): 替代旧的 `.nav-item` + textContent.includes 模糊匹配。
    旧写法既命中不到真实 DOM（.nav-item 已死），又会把「策略」误配到「策略研究」。
    """
    sel = '.qc-sidebar-link[href="#%s"]' % page_key
    if page.locator(sel).count() == 0:
        if _SCENE_FLAG['optional']:
            raise SceneSkip('一级导航不存在: %s — %s' % (page_key, _SCENE_FLAG['reason']))
        raise SceneError('一级导航不存在: %s (选择器 %s)' % (page_key, sel))
    page.evaluate(
        "(s) => { const el = document.querySelector(s); if (el) { el.click(); return true; } return false; }",
        sel,
    )
    st = _wait_state(page, {'page': page_key}, timeout=20)
    if st.get('nav') != page_key:
        raise SceneError('点击一级导航 %s 后未激活 (实际 page=%r)' % (page_key, st.get('nav')))
    return True


def _click_tab(page, tab_key):
    sel = '.qc-top-tab[data-tab-key="%s"]' % tab_key
    if page.locator(sel).count() == 0:
        raise SceneError('二级页签不存在: %s' % tab_key)
    page.evaluate(
        "(s) => { const el = document.querySelector(s); if (el) { el.click(); return true; } return false; }",
        sel,
    )


def _open_page(page, page_key, tab_key=None):
    """一级导航 → 可选二级页签，且等待到位。"""
    _ensure_login(page)
    _click_nav(page, page_key)
    if tab_key:
        cur = _read_state(page).get('tab')
        if cur != tab_key:
            _click_tab(page, tab_key)
        st = _wait_state(page, {'page': page_key, 'tab': tab_key}, timeout=20)
        if st.get('tab') != tab_key:
            raise SceneError('二级页签未激活: 期望 %s, 实际 %r' % (tab_key, st.get('tab')))
    return True


def _apply_theme_mode(page, mode_label):
    """通过 Header 主题面板切换外观模式 (light/dark)，并校验 data-theme。

    v6.4 (FR-6.4.8): 旧实现点 `.user-menu-wrapper` + `.theme-item-row`，
    该结构已并入 Header 主题面板 (button[aria-label="主题设置"] → .qc-theme-mode)。
    """
    page.evaluate("""() => {
        const btn = document.querySelector('button[aria-label="主题设置"]');
        if (btn && btn.getAttribute('aria-expanded') !== 'true') btn.click();
        return true;
    }""")
    time.sleep(0.3)
    ok = page.evaluate(
        """(label) => {
            const btns = [...document.querySelectorAll('.qc-theme-panel .qc-theme-mode')];
            const t = btns.find(b => (b.textContent || '').trim() === label);
            if (!t) return false;
            t.click();
            return true;
        }""",
        mode_label,
    )
    if not ok:
        raise SceneError('主题面板找不到「%s」模式按钮' % mode_label)
    time.sleep(0.6)
    # 关闭面板，避免面板遮挡截图
    page.evaluate("""() => {
        const btn = document.querySelector('button[aria-label="主题设置"]');
        if (btn && btn.getAttribute('aria-expanded') === 'true') btn.click();
    }""")
    time.sleep(0.2)


def _login(page):
    """登录为 admin 并等待登录页消失。

    v6.4 (FR-6.4.8): 旧实现点 `.login-box button` 后只 sleep 2.5s —— 若点击发生在
    应用挂载完成前，登录根本没触发，后续所有导航静默失败却仍继续截图。
    现改为按 name 填表 + 点主登录按钮 + 显式等待登录页消失，失败即抛 SceneError。
    """
    _goto_login(page)
    if page.locator('.login-box').count() == 0:
        return False
    page.wait_for_selector('.login-box .login-btn', timeout=15000)
    page.fill('.login-box input[name="username"], .login-box input[type=text]', 'admin')
    page.fill('.login-box input[name="password"], .login-box input[type=password]', 'admin')
    page.locator('.login-box .login-btn:not(.login-guest-btn)').first.click()
    deadline = time.time() + 25
    while time.time() < deadline:
        if page.locator('.login-box').count() == 0:
            break
        time.sleep(0.3)
    else:
        raise SceneError('登录失败: 25s 内登录页未消失 (检查 admin 口令是否为默认 admin)')
    time.sleep(1.5)
    # 关闭所有弹窗遮罩: 初始化向导 + 新手引导 tour 各有「跳过」, 需循环点完
    _dismiss_overlays(page)
    # 强制浅色主题 — 保证浅色场景基线确定，并自愈 dark_theme 场景污染的暗色配置
    _apply_theme_mode(page, '浅色')
    st = _read_state(page)
    if st.get('theme') != 'gold':
        raise SceneError('主题归一失败: 期望 data-theme=gold, 实际 %r' % st.get('theme'))
    time.sleep(0.5)
    return True


_LOGGED_IN = {'v': False}


def _ensure_login(page):
    """v6.4 (FR-6.4.8): 首个需要登录的场景前登录一次 (login 场景本身要拍未登录页)。

    旧脚本把 _login 写进每个场景的 prepare 里 —— 每场景重登一次既慢又会在
    login 场景之后立刻把登录页替换掉，导致「登录页」基线其实不是登录页。
    """
    if _LOGGED_IN['v']:
        return True
    if page.locator('.login-box').count() > 0:
        _login(page)
    _LOGGED_IN['v'] = True
    return True


def _wait_sel(page, sel, timeout=15):
    for _ in range(int(timeout / 0.5)):
        if page.evaluate("(s => !!document.querySelector(s))", sel):
            return True
        time.sleep(0.5)
    return False


def _wait_visible(page, sel, timeout=20):
    """等待元素可见 (用于证明目标子页真的渲染出来了)。"""
    for _ in range(int(timeout / 0.5)):
        if page.evaluate(
            """(s) => {
                const el = document.querySelector(s);
                if (!el) return false;
                const r = el.getBoundingClientRect();
                return r.width > 0 && r.height > 0;
            }""",
            sel,
        ):
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
# 每项: key / label / prepare(page) / expect{page,tab,title,theme} / ready(选择器) / viewport
#   expect.page  = 一级页 key (对应 .qc-sidebar-link[href="#<key>"])
#   expect.tab   = 二级页签 key (对应 .qc-top-tab[data-tab-key])
#   expect.title = document.title 前缀 (runtime.js: "<一级名> - 量化日历")
#   ready        = 该子页独有的可见元素，证明内容真的渲染 (不只是页签高亮)
#   viewport     = 该场景截图尺寸；导航在桌面尺寸完成后再缩放，避免移动端无侧栏
SCENARIOS = [
    {
        'key': 'login', 'label': '登录页',
        'prepare': _goto_login, 'expect': {'title': '量化日历'}, 'ready': '.login-box',
    },
    {
        'key': 'strategies_desktop', 'label': '策略总览(桌面 1280px)',
        'prepare': lambda p: _open_page(p, 'strategies', 'overview'),
        'expect': {'page': 'strategies', 'tab': 'overview', 'title': '策略总览 - '},
        'ready': '.today-hero',
    },
    {
        'key': 'calendar', 'label': '量化日历(日视图)',
        'prepare': lambda p: _open_page(p, 'calendar', 'calendar'),
        'expect': {'page': 'calendar', 'tab': 'calendar', 'title': '量化日历 - '},
        'ready': '[data-cal-root]',
    },
    {
        'key': 'stock_detail', 'label': '股票详情弹窗(K线)',
        # 从日历股票池首行打开详情 (旧实现在日历页点 .consensus-item —— 那是策略研究页的元素)
        'prepare': lambda p: (_open_page(p, 'calendar', 'calendar'),
                              _wait_visible(p, '.qc-stock-row', 20),
                              p.evaluate("""() => {
                                  const row = document.querySelector('.qc-stock-row');
                                  if (!row) return false;
                                  row.click();
                                  return true;
                              }"""))[-1],
        'expect': {'page': 'calendar', 'tab': 'calendar', 'title': '量化日历 - '},
        'ready': '.kline-dialog',
    },
    {
        'key': 'command_panel', 'label': '命令面板(Ctrl+K)',
        'prepare': lambda p: (p.keyboard.press('Control+k'), _wait_sel(p, '.command-palette'))[-1],
        'expect': {'page': 'calendar', 'tab': 'calendar', 'title': '量化日历 - '},
        'ready': '.command-palette',
    },
    {
        'key': 'strategies_mobile', 'label': '策略总览(移动 375px)',
        'prepare': lambda p: _open_page(p, 'strategies', 'overview'),
        'expect': {'page': 'strategies', 'tab': 'overview', 'title': '策略总览 - '},
        'ready': '.today-hero',
        'viewport': (375, 812),
    },
    {
        'key': 'dark_theme', 'label': '深色主题(暗色专业)',
        'prepare': lambda p: (_open_page(p, 'strategies', 'overview'), _apply_theme_mode(p, '深色'))[-1],
        'expect': {'page': 'strategies', 'tab': 'overview', 'title': '策略总览 - ',
                   'theme': 'dark-pro'},
        'ready': '.today-hero',
    },
    # 6.1.0 (T-6.1.0.4): 视觉回归基线扩展 — 4 个一级导航页面
    {
        'key': 'ai_overview', 'label': '智能评估(评估概览)',
        'prepare': lambda p: _open_page(p, 'ai', 'overview'),
        'expect': {'page': 'ai', 'tab': 'overview', 'title': '智能评估 - '},
        'ready': '.card',
    },
    {
        'key': 'research', 'label': '策略研究(研究概览)',
        'prepare': lambda p: _open_page(p, 'research', 'research-overview'),
        'expect': {'page': 'research', 'tab': 'research-overview', 'title': '策略研究 - '},
        'ready': '.card',
        # 该环境的 groups.json 把 research 置为 false (管理组不可见) —— 菜单不存在时跳过而非失败,
        # 否则会把「环境配置」误报成「脚本/应用缺陷」。
        'optional': True,
        'skip_reason': '一级菜单「策略研究」被分组可见性配置 (data/groups.json: admin.visible_menus.research=false) 隐藏',
    },
    {
        'key': 'ops_status', 'label': '系统状态',
        'prepare': lambda p: _open_page(p, 'ops', 'status'),
        'expect': {'page': 'ops', 'tab': 'status', 'title': '系统状态 - '},
        'ready': '.card',
    },
    {
        'key': 'system_config', 'label': '系统配置',
        'prepare': lambda p: _open_page(p, 'system', 'config'),
        'expect': {'page': 'system', 'tab': 'config', 'title': '系统配置 - '},
        'ready': '.card',
    },
]


def _scene_of(key):
    for sc in SCENARIOS:
        if sc['key'] == key:
            return sc
    raise SceneError('未知场景: %s' % key)


def _prepare_and_settle(page, sc):
    """执行 prepare → 断言期望状态 → 数据沉淀 → 冻结动画 → 像素稳定"""
    key = sc['key']
    _SCENE_FLAG['optional'] = bool(sc.get('optional'))
    _SCENE_FLAG['reason'] = sc.get('skip_reason') or ''
    # v6.4 (FR-6.4.8): 外观模式逐场景显式归一 —— 否则 dark_theme 之后的场景会被暗色污染
    # (实测: system_config 基线拍成了暗色, 与「系统配置」浅色基线预期不符)。
    if key != 'login':
        want_dark = (sc.get('expect') or {}).get('theme') == 'dark-pro'
        cur = _read_state(page).get('theme')
        if want_dark and cur != 'dark-pro':
            _apply_theme_mode(page, '深色')
        elif not want_dark and cur != 'gold':
            _apply_theme_mode(page, '浅色')
    sc['prepare'](page)
    if key == 'stock_detail':
        _wait_sel(page, '#stockKlineChart', timeout=20)
        time.sleep(0.8)
    elif key == 'command_panel':
        time.sleep(0.8)
    elif key == 'dark_theme':
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
    # v6.4 (FR-6.4.8): 就绪元素必须可见 —— 否则页签虽高亮但内容仍是上一次的残留
    ready = sc.get('ready')
    if ready and not _wait_visible(page, ready, timeout=25):
        raise SceneError('就绪元素未出现: %s' % ready)


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
        badge = {'PASS': '✅', 'DIFF': '⚠️', 'NEW': '🆕', 'MISMATCH': '⛔',
                 'SKIPPED': '⏭'}.get(status, '❓')
        if status in ('MISMATCH', 'SKIPPED'):
            compare = '<span title="%s">未产图</span>' % (r.get('reason') or '').replace('"', '&quot;')
            ratio = '-'
        else:
            compare = '<a href="%s" target="_blank">查看</a>' % os.path.join(
                '..', 'screenshots', 'current', r['key'] + '.png')
            ratio = r.get('ratio', '-')
        reason = r.get('reason') or ''
        rows.append(f"""<tr>
          <td>{badge} {r['key']}</td>
          <td>{r['label']}</td>
          <td><span class="badge {status.lower()}">{status}</span></td>
          <td>{ratio}</td>
          <td>{compare}</td>
          <td class="reason">{reason}</td>
        </tr>""")
    html = f"""<!DOCTYPE html><html lang="zh"><head><meta charset="utf-8">
<title>视觉回归 diff 报告</title><style>
body{{font-family:-apple-system,'PingFang SC',sans-serif;margin:24px;color:#1f2937}}
h1{{font-size:20px}} .meta{{color:#6b7280;font-size:13px;margin-bottom:16px}}
table{{border-collapse:collapse;width:100%;font-size:14px}}
th,td{{border:1px solid #e5e7eb;padding:8px 12px;text-align:left;vertical-align:top}}
th{{background:#f9fafb}}
.badge{{padding:2px 10px;border-radius:12px;font-size:12px;font-weight:600}}
.pass{{background:#d1fae5;color:#047857}}.diff{{background:#fef3c7;color:#b45309}}
.new{{background:#dbeafe;color:#1d4ed8}}.mismatch{{background:#fee2e2;color:#b91c1c}}
.skipped{{background:#f3f4f6;color:#4b5563}}
.reason{{color:#9ca3af;font-size:12px;max-width:360px}}
.tip{{margin-top:16px;font-size:13px;color:#6b7280;line-height:1.7}}
</style></head><body>
<h1>🖼️ quant-calendar 视觉回归 diff 报告</h1>
<div class="meta">生成时间 {now} ｜ 场景 {len(results)} 个 ｜ 差异阈值 {DIFF_THRESHOLD} (0~255) ｜ 判变 >{MAX_DIFF_RATIO:.1%} ｜ 信息性检查 · 不阻塞发布</div>
<table><tr><th>场景</th><th>说明</th><th>状态</th><th>差异占比</th><th>对比图</th><th>失败原因</th></tr>{''.join(rows)}</table>
<div class="tip">说明：<b>PASS</b> 与基线一致；<b>DIFF</b> 存在像素差异（点"查看"审阅 baseline|current|diff 并排图，确认是否为预期 UI 变更）；<b>NEW</b> 无基线（首次运行已生成基线，下次运行将对比）；<b>MISMATCH</b> 场景未到达期望状态（导航/页签/主题断言失败），<b>已拒绝产图与写基线</b>，需先修脚本或应用。</div>
</body></html>"""
    with open(report_path, 'w', encoding='utf-8') as f:
        f.write(html)
    return report_path


def _archive_legacy_baseline():
    """v6.4 (FR-6.4.8): 首次 --capture 前，把可信化之前的错误基线整体归档。

    旧基线因导航失效而全部是同页截图（calendar 与策略总览同图、dark_theme 实为浅色），
    保留在原位会与"新基线"混为一谈；归档后可随时比对，也不阻碍新基线生成。
    """
    if not os.path.isdir(BASELINE_DIR):
        return
    pngs = [f for f in os.listdir(BASELINE_DIR) if f.lower().endswith('.png')]
    if not pngs:
        return
    if os.path.isdir(LEGACY_BASELINE_DIR) and os.listdir(LEGACY_BASELINE_DIR):
        log(f'旧基线已归档于 {LEGACY_BASELINE_DIR}，不再重复迁移')
        return
    os.makedirs(LEGACY_BASELINE_DIR, exist_ok=True)
    for f in pngs:
        shutil.move(os.path.join(BASELINE_DIR, f), os.path.join(LEGACY_BASELINE_DIR, f))
    readme = os.path.join(LEGACY_BASELINE_DIR, 'README.md')
    with open(readme, 'w', encoding='utf-8') as fh:
        fh.write(
            '# 旧视觉基线 (v6.3.6 及以前) — 已废弃\n\n'
            '归档原因 (v6.4 FR-6.4.8)：旧脚本用 `.nav-item` 点击一级导航，而该类名是被 SFC\n'
            '覆盖的 sidebar.js 死代码，DOM 中不存在 → 导航从未生效，11 张"基线"实为同一页面。\n\n'
            '实证：`calendar.png` 与 `strategies_desktop.png` 像素相同；`dark_theme.png` 为浅色。\n\n'
            '结论：**不可作为回归依据**。新基线见同级 `baseline/`，由期望状态驱动断言后重拍。\n'
        )
    log(f'旧基线已归档 {len(pngs)} 张 → {LEGACY_BASELINE_DIR}')


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

    if args.capture:
        _archive_legacy_baseline()
        if os.path.exists(CURRENT_DIR):
            shutil.rmtree(CURRENT_DIR)
    os.makedirs(BASELINE_DIR, exist_ok=True)
    os.makedirs(CURRENT_DIR, exist_ok=True)
    os.makedirs(REPORT_DIR, exist_ok=True)

    results = []
    mismatches = []
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
            for sc in SCENARIOS:
                key, label = sc['key'], sc['label']
                log(f'capture: {key} ({label})')
                if key == 'strategies_mobile':
                    page.set_viewport_size({'width': 1280, 'height': 900})
                    time.sleep(0.3)
                elif key == 'dark_theme':
                    page.set_viewport_size({'width': 1280, 'height': 900})
                    time.sleep(0.5)
                try:
                    _prepare_and_settle(page, sc)
                    # v6.4 (FR-6.4.8): 截图前最后一道断言 —— 状态不对就不许产图
                    _assert_state(page, sc.get('expect'), phase='截图前')
                except SceneSkip as e:
                    results.append({'key': key, 'label': label, 'shot': None,
                                    'status': 'SKIPPED', 'reason': str(e)})
                    log(f'⏭ {key} 跳过 (环境不可达): {e}')
                    continue
                except SceneError as e:
                    mismatches.append({'key': key, 'label': label, 'reason': str(e)})
                    results.append({'key': key, 'label': label, 'shot': None,
                                    'status': 'MISMATCH', 'reason': str(e)})
                    log(f'⛔ {key} 断言失败, 已跳过产图: {e}')
                    # 弹窗/面板场景失败后仍需清理，避免污染后续场景
                    if key in ('stock_detail', 'command_panel'):
                        _close_overlays(page)
                    continue
                if sc.get('viewport'):
                    w, h = sc['viewport']
                    page.set_viewport_size({'width': w, 'height': h})
                    time.sleep(0.6)
                    _wait_settle(page, timeout=10)
                    time.sleep(0.6)
                shot = os.path.join(CURRENT_DIR, key + '.png')
                page.screenshot(path=shot, full_page=False)
                # 出图后复核 (移动端侧栏隐藏, 只校验标题/页签/主题)
                st_after = _read_state(page)
                exp = sc.get('expect') or {}
                post_exp = {k: v for k, v in exp.items() if k != 'page'}
                # 移动端 (viewport 宽 < 768) 顶部二级页签条不渲染 → 出图后不校验 tab
                vp = sc.get('viewport')
                if vp and vp[0] < 768:
                    post_exp.pop('tab', None)
                if not _state_matches(st_after, post_exp):
                    # 出图后漂移: 该图不可信, 删除且不写基线 (而不是中断整轮)
                    try:
                        os.remove(shot)
                    except OSError:
                        pass
                    reason = ('出图后状态漂移: 期望 %s | 实际 tab=%r theme=%r title=%r'
                              % (_describe(post_exp), st_after.get('tab'),
                                 st_after.get('theme'), st_after.get('title')))
                    mismatches.append({'key': key, 'label': label, 'reason': reason})
                    results.append({'key': key, 'label': label, 'shot': None,
                                    'status': 'MISMATCH', 'reason': reason})
                    log(f'⛔ {key} 出图后漂移, 已丢弃: {reason}')
                    if key in ('stock_detail', 'command_panel'):
                        _close_overlays(page)
                    continue
                results.append({'key': key, 'label': label, 'shot': shot})
                # 弹窗/面板场景后清理, 避免遮挡后续场景
                if key in ('stock_detail', 'command_panel'):
                    _close_overlays(page)
            # 恢复浅色，避免污染后续 capture/report 的浅色基线
            try:
                _apply_theme_mode(page, '浅色')
            except Exception as e:
                log(f'警告: 恢复浅色主题失败: {e}')
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
        key, label, shot = r['key'], r['label'], r.get('shot')
        if r.get('status') in ('MISMATCH', 'SKIPPED') or not shot:
            # v6.4 (FR-6.4.8): 断言失败/环境跳过绝不写基线 —— 这是"错误基线入库"的根因
            final.append({'key': key, 'label': label, 'status': r.get('status') or 'MISMATCH',
                          'ratio': '-', 'reason': r.get('reason', '')})
            continue
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

    if mismatches:
        log(f'⛔ {len(mismatches)} 个场景断言失败 (未产图/未写基线): '
            + ', '.join(m['key'] for m in mismatches))
        # 断言失败是脚本/应用的确定性缺陷，不是"信息性差异"，一律 exit 1
        return 1
    if any_diff and args.strict:
        log('存在视觉差异 (--strict) → exit 1')
        return 1
    return 0


if __name__ == '__main__':
    sys.exit(main())
