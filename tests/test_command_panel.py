"""
智能命令面板核心逻辑测试 (v3.11 / FR-3.11.1, TC-11.1/11.2/11.3)

核心逻辑为纯函数模块 frontend/js/command-panel-core.js（UMD 导出），
测试通过 subprocess 调 node require 该模块并断言 JSON 输出。
覆盖：
- TC-11.1 开关 state 行为
- TC-11.2 股票/菜单/指令三域检索命中与排序
- TC-11.3 键盘上下移动索引
"""
import json
import os
import shutil
import subprocess

import pytest

FRONTEND_JS = os.path.join(
    os.path.dirname(os.path.dirname(os.path.abspath(__file__))),
    'frontend', 'js', 'command-panel-core.js',
)

NEEDS_NODE = pytest.mark.skipif(shutil.which('node') is None, reason='node 不可用')


def _run_js(script: str):
    """在 node 中 require core 模块并执行脚本，返回 JSON 结果"""
    code = (
        "const QCP = require(process.argv[1]);\n"
        "const out = (function(){\n" + script + "\n})();\n"
        "process.stdout.write(JSON.stringify(out));\n"
    )
    proc = subprocess.run(
        ['node', '-e', code, FRONTEND_JS],
        capture_output=True, text=True, timeout=15,
    )
    assert proc.returncode == 0, f'node 执行失败: {proc.stderr}'
    return json.loads(proc.stdout)


# ─── TC-11.1 开关 state ─────────────────────────────

@NEEDS_NODE
def test_palette_state_initial():
    """createPaletteState 初始态：visible=False, query='', activeIndex=0"""
    out = _run_js("return QCP.createPaletteState();")
    assert out == {'visible': False, 'query': '', 'activeIndex': 0}


@NEEDS_NODE
def test_palette_toggle_open_resets():
    """toggleVisible(true) 打开并重置 query/activeIndex"""
    out = _run_js("""
        const st = QCP.createPaletteState();
        st.query = 'abc'; st.activeIndex = 3;
        const opened = QCP.toggleVisible(st, true);
        return { opened, visible: st.visible, query: st.query, activeIndex: st.activeIndex };
    """)
    assert out['opened'] is True
    assert out['visible'] is True
    assert out['query'] == ''
    assert out['activeIndex'] == 0


@NEEDS_NODE
def test_palette_toggle_flip_and_force_close():
    """toggleVisible() 缺省取反；toggleVisible(st, false) 强制关闭"""
    out = _run_js("""
        const st = QCP.createPaletteState();
        const a = QCP.toggleVisible(st);      // false → true
        const b = QCP.toggleVisible(st);      // true → false
        const c = QCP.toggleVisible(st, false); // false 保持
        return { a, b, c };
    """)
    assert out == {'a': True, 'b': False, 'c': False}


# ─── TC-11.2 三域检索 ───────────────────────────────

MENU_DEFS = [
    {'key': 'strategies', 'name': '策略总览', 'icon': '📈', 'subPages': ['overview', 'merrill', 'market', 'consensus']},
    {'key': 'calendar', 'name': '量化日历', 'icon': '🗓️', 'subPages': ['daily', 'weekly', 'monthly', 'yearly', 'pool']},
    {'key': 'ai', 'name': '智能评估', 'icon': '🤖', 'subPages': ['overview', 'watchlist', 'history', 'chat_history']},
    {'key': 'system', 'name': '系统配置', 'icon': '⚙️', 'subPages': ['status', 'autoeval', 'datasource', 'feature', 'user', 'about']},
]
SUB_PAGE_NAMES = {
    'overview': '概览', 'merrill': '美林时钟', 'market': '市场行情', 'consensus': '策略共识榜',
    'daily': '日视图', 'weekly': '周视图', 'monthly': '月视图', 'yearly': '年视图', 'pool': '股票池',
    'watchlist': '我的自选', 'history': '评估历史', 'chat_history': '问股历史',
    'status': '系统状态', 'autoeval': '自动评估', 'datasource': '数据源', 'feature': '功能配置', 'user': '用户与权限', 'about': '关于',
}


@NEEDS_NODE
def test_menu_search_hits_page_and_subpage():
    """菜单检索：命中页面名与子页中文名"""
    out = _run_js(f"""
        const menus = {json.dumps(MENU_DEFS)};
        const sp = {json.dumps(SUB_PAGE_NAMES)};
        const page = QCP.searchMenus('日历', menus, sp);   // 页面命中
        const sub = QCP.searchMenus('美林', menus, sp);    // 子页命中
        const both = QCP.searchMenus('', menus, sp);       // 空查询返回全部
        return {{
            pageKeys: page.map(x => x.menuKey),
            subIs: sub.map(x => ({{ k: x.menuKey, sp: x.subPage, label: x.label }})),
            bothCount: both.length,
            capped: both.length <= 8,
        }};
    """)
    assert out['pageKeys'] == ['calendar']
    assert {'k': 'strategies', 'sp': 'merrill', 'label': '美林时钟'} in out['subIs']
    assert out['bothCount'] > 0 and out['bothCount'] <= 8
    assert out['capped'] is True


@NEEDS_NODE
def test_command_search_matches_label_and_keywords():
    """指令检索：label/key/keywords 均命中，空查询返回全部"""
    defs = [
        {'key': 'refresh', 'label': '刷新当前页数据', 'icon': '🔄', 'keywords': 'reload 刷新'},
        {'key': 'export', 'label': '导出当前 CSV', 'icon': '📥', 'keywords': 'csv 导出'},
    ]
    out = _run_js(f"""
        const defs = {json.dumps(defs)};
        const byLabel = QCP.searchCommands('刷新', defs);
        const byKey = QCP.searchCommands('export', defs);
        const byKw = QCP.searchCommands('reload', defs);
        const all = QCP.searchCommands('', defs);
        const none = QCP.searchCommands('不存在', defs);
        return {{
            byLabel: byLabel.map(x => x.key),
            byKey: byKey.map(x => x.key),
            byKw: byKw.map(x => x.key),
            allKeys: all.map(x => x.key),
            noneLen: none.length,
        }};
    """)
    assert out['byLabel'] == ['refresh']
    assert out['byKey'] == ['export']
    assert out['byKw'] == ['refresh']
    assert out['allKeys'] == ['refresh', 'export']
    assert out['noneLen'] == 0


@NEEDS_NODE
def test_stock_filter_requires_query():
    """股票本地过滤：空 query 返回空；按 code/name 命中"""
    stocks = [{'code': '600000.SH', 'name': '浦发银行'}, {'code': '000001.SZ', 'name': '平安银行'}]
    out = _run_js(f"""
        const stocks = {json.dumps(stocks)};
        const empty = QCP.filterStocksLocal('', stocks);
        const byCode = QCP.filterStocksLocal('600000', stocks);
        const byName = QCP.filterStocksLocal('平安', stocks);
        return {{
            emptyLen: empty.length,
            byCode: byCode.map(x => x.code),
            byName: byName.map(x => x.code),
        }};
    """)
    assert out['emptyLen'] == 0
    assert out['byCode'] == ['600000.SH']
    assert out['byName'] == ['000001.SZ']


@NEEDS_NODE
def test_merge_results_order_and_flat():
    """合并三域：分组顺序 股票→菜单→指令，flat 与 groups 一致"""
    out = _run_js("""
        const stocks = [{type:'stock', code:'600000.SH', name:'浦发银行'}];
        const menus = [{type:'menu', menuKey:'calendar', subPage:'daily', label:'日视图'}];
        const cmds = [{type:'command', key:'refresh', label:'刷新'}];
        const r = QCP.mergeResults(menus, cmds, stocks);
        return {
            groupKeys: r.groups.map(g => g.key),
            flatTypes: r.flat.map(i => i.type),
            flatLen: r.flat.length,
        };
    """)
    assert out['groupKeys'] == ['stock', 'menu', 'command']
    assert out['flatTypes'] == ['stock', 'menu', 'command']
    assert out['flatLen'] == 3


# ─── TC-11.4 全局搜索升级 ───────────────────────────

@NEEDS_NODE
def test_global_search_build_suggestions_menu_and_command():
    """buildSearchSuggestions：菜单/指令命中并转建议形状；空查询不返回菜单/指令噪音之外的项"""
    cmd_defs = [
        {'key': 'refresh', 'label': '刷新当前页数据', 'icon': '🔄', 'keywords': 'reload'},
        {'key': 'export', 'label': '导出当前 CSV', 'icon': '📥', 'keywords': 'csv'},
    ]
    out = _run_js(f"""
        const menus = {json.dumps(MENU_DEFS)};
        const sp = {json.dumps(SUB_PAGE_NAMES)};
        const cmds = {json.dumps(cmd_defs)};
        const menuHit = QCP.buildSearchSuggestions('美林', menus, sp, cmds);
        const cmdHit = QCP.buildSearchSuggestions('刷新', menus, sp, cmds);
        const cmdByKw = QCP.buildSearchSuggestions('csv', menus, sp, cmds);
        return {{
            menuTypes: menuHit.map(x => x.type),
            menuHasLabel: menuHit.some(x => x.label === '美林时钟'),
            cmdTypes: cmdHit.map(x => x.type),
            cmdKey: cmdHit[0] && cmdHit[0].key,
            byKwKey: cmdByKw[0] && cmdByKw[0].key,
            menuValue: menuHit[0] && menuHit[0].value.includes('美林时钟'),
            cmdValue: cmdHit[0] && cmdHit[0].value.includes('刷新当前页数据'),
        }};
    """)
    assert out['menuTypes'] == ['menu']
    assert out['menuHasLabel'] is True
    assert out['cmdTypes'] == ['command']
    assert out['cmdKey'] == 'refresh'
    assert out['byKwKey'] == 'export'
    assert out['menuValue'] is True
    assert out['cmdValue'] is True


@NEEDS_NODE
def test_global_search_dispatch_stock_menu_command():
    """dispatchSearchSelection：股票直达详情 / 菜单跳页 / 指令动作分派正确"""
    out = _run_js("""
        const stock = QCP.dispatchSearchSelection({ type:'stock', code:'600000.SH', name:'浦发银行' });
        const menu = QCP.dispatchSearchSelection({ type:'menu', menuKey:'calendar', subPage:'daily' });
        const cmd = QCP.dispatchSearchSelection({ type:'command', key:'refresh' });
        const legacyStock = QCP.dispatchSearchSelection({ code:'000001.SZ', name:'平安银行' });
        const nil = QCP.dispatchSearchSelection(null);
        const unknown = QCP.dispatchSearchSelection({ type:'other', foo:1 });
        return { stock, menu, cmd, legacyStock, nil, unknown };
    """)
    assert out['stock'] == {'action': 'stock', 'code': '600000.SH', 'name': '浦发银行'}
    assert out['menu'] == {'action': 'menu', 'menuKey': 'calendar', 'subPage': 'daily'}
    assert out['cmd'] == {'action': 'command', 'key': 'refresh'}
    # 兼容旧结构（仅有 code/name，无 type 标记）
    assert out['legacyStock'] == {'action': 'stock', 'code': '000001.SZ', 'name': '平安银行'}
    assert out['nil'] is None
    assert out['unknown'] is None


@NEEDS_NODE
def test_global_search_default_commands_schema():
    """DEFAULT_COMMANDS 共享常量结构完整（key/label/icon/keywords）"""
    out = _run_js("""
        const cmds = QCP.DEFAULT_COMMANDS;
        return {
            count: cmds.length,
            keys: cmds.map(c => c.key),
            allHave: cmds.every(c => c.key && c.label && c.icon),
            allHaveKeywords: cmds.every(c => typeof c.keywords === 'string'),
        };
    """)
    assert out['count'] >= 5
    assert 'refresh' in out['keys'] and 'sidebar' in out['keys']
    assert out['allHave'] is True
    assert out['allHaveKeywords'] is True


# ─── TC-11.3 键盘导航 ───────────────────────────────

@NEEDS_NODE
def test_move_index_down_wraps():
    """向下移动到头循环回 0"""
    out = _run_js("""
        const r1 = QCP.moveIndex(2, 3, 1);   // 2 → 0 (wrap)
        const r2 = QCP.moveIndex(0, 3, 1);   // 0 → 1
        return { r1, r2 };
    """)
    assert out == {'r1': 0, 'r2': 1}


@NEEDS_NODE
def test_move_index_up_wraps():
    """向上移动到 0 再上循环回尾"""
    out = _run_js("""
        const r1 = QCP.moveIndex(0, 3, -1);  // 0 → 2 (wrap)
        const r2 = QCP.moveIndex(2, 3, -1);  // 2 → 1
        return { r1, r2 };
    """)
    assert out == {'r1': 2, 'r2': 1}


@NEEDS_NODE
def test_move_index_empty_list():
    """空列表或边界值安全返回 0"""
    out = _run_js("""
        const e = QCP.moveIndex(5, 0, 1);
        const n = QCP.moveIndex(null, 4, -1);
        return { e, n };
    """)
    assert out == {'e': 0, 'n': 3}
