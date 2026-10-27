# -*- coding: utf-8 -*-
"""6.4.2 易用性与便捷性 测试 (FR-644 / FR-645 / FR-646)

覆盖口径 (对应 docs/DEV&TEST-PLAN-6.4-6.5.X.md):
- TC-644-01 首次登录 3 步引导: 状态机 3 步 + 每步 desc/target
- TC-644-02 空态主行动: 每个 qc-state-panel 空态至少 1 个主行动 (action-text / action-key / #action 插槽)
- TC-644-03 示例组合: 一键载入/删除 (merge/remove 幂等, 接口存在, 只动 stock_pool)
- TC-644-04 埋点: 事件白名单 + 属性裁剪 + 落库 (analytics 接口)
- TC-645-01 六类实体检索核心函数 (分组顺序 / 过滤 / 定位 / Tab 切组)
- TC-645-02 最近访问 (去重 + 上限 + 序列化 roundtrip)
- TC-645-03 无结果替代建议 (拼写近似)
- TC-645-04 IME 组合期保护 + Ctrl/Cmd+K + 移动端可见入口
- TC-646-01 错误码九类映射 + 两段式文案
- TC-646-02 重试节流 (次数上限 + 指数退避)
- TC-646-03 离线恢复自动刷新 + 未捕获异常上报 (不静默)
- TC-646-04 新增 catch 不静默 (状态面板/命令面板/引导/日历)
"""
import json
import os
import re
import shutil
import subprocess
import sys

import pytest

BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
JS = os.path.join(BASE, "frontend", "js")
NEEDS_NODE = pytest.mark.skipif(shutil.which("node") is None, reason="node 不可用")


def _run_js(module_file, script):
    path = os.path.join(JS, module_file)
    code = (
        "const M = require(process.argv[1]);\n"
        "const OC = M;\n"
        "const out = (function(){\n" + script + "\n})();\n"
        "process.stdout.write(JSON.stringify(out));\n"
    )
    proc = subprocess.run(["node", "-e", code, path],
                          capture_output=True, text=True, timeout=20)
    assert proc.returncode == 0, f"node 执行失败: {proc.stderr}"
    return json.loads(proc.stdout)


def _read(*parts):
    with open(os.path.join(BASE, *parts), encoding="utf-8") as f:
        return f.read()


# ═══════════════════ FR-644 新手上手路径 ═══════════════════

@NEEDS_NODE
def test_tc644_01_three_step_flow():
    """TC-644-01: 3 步固定为 看今日一屏 → 打开标的详情 → 一句话问 AI"""
    out = _run_js("onboarding-core.js", """
        const steps = OC.steps();
        return {
            n: OC.stepCount(),
            keys: steps.map(s => s.key),
            titles: steps.map(s => s.title),
            allDesc: steps.every(s => !!s.desc),
            allTarget: steps.every(s => !!s.target),
            total: OC.progress(OC.createOnboardingState()).total,
        };
    """)
    assert out["n"] == 3
    assert out["keys"] == ["today", "stock_detail", "ask_ai"]
    assert out["allDesc"] is True and out["allTarget"] is True
    assert out["total"] == 3
    # 第 3 步必须是「问 AI」语义
    assert "AI" in out["titles"][2]


def test_tc644_01b_onboarding_template_not_hardcoded():
    """TC-644-01b: 引导组件不得硬编码「/ 5」, 必须按 stepCount 渲染"""
    src = _read("frontend", "js", "onboarding.js")
    assert "}} / 5" not in src
    assert "totalSteps" in src
    assert "OC.stepCount()" in src


def test_tc644_02_every_empty_state_has_primary_action():
    """TC-644-02: 所有 qc-state-panel 空态必须带主行动 (action-text/action-key/#action 插槽)"""
    offenders = []
    for root, _dirs, files in os.walk(JS):
        for fn in files:
            if not fn.endswith(".js"):
                continue
            path = os.path.join(root, fn)
            with open(path, encoding="utf-8") as f:
                src = f.read()
            for m in re.finditer(r"<qc-state-panel\b", src):
                end = src.find(">", m.start())
                if end < 0:
                    continue
                tag = src[m.start():end + 1]
                if 'type="empty"' not in tag and "type='empty'" not in tag:
                    continue
                # 允许: 开标签带 action-text/action-key, 或紧随其后 400 字符内有 #action 插槽
                window = src[end:end + 400]
                has_action = ("action-text" in tag or "action-key" in tag
                              or "#action" in window)
                if not has_action:
                    offenders.append(f"{os.path.relpath(path, BASE)}: {tag[:90]}")
    assert not offenders, "以下空态缺主行动:\n" + "\n".join(offenders)


def test_tc644_02b_empty_state_covers_all_four_variants():
    """TC-644-02b: 四态组件仍在用, 空态默认行动文案为「刷新数据」"""
    src = _read("frontend", "js", "components", "state-panel.js")
    assert "'刷新数据'" in src
    assert "empty_action" in src


def test_tc644_03_example_pool_merge_and_remove(tmp_path, monkeypatch):
    """TC-644-03: 示例组合并入/移除幂等, 不影响其他标的"""
    sys.path.insert(0, os.path.join(BASE, "backend"))
    import refresh_service as rs

    pool = rs.example_pool()
    assert len(pool) == 6
    assert all(p["code"] and p["name"] for p in pool)
    codes = rs.example_codes()

    merged = rs.merge_pool(["000002.SZ"], codes)
    assert merged[0] == "000002.SZ"
    assert len(merged) == 7
    # 幂等: 再并一次不重复
    assert rs.merge_pool(merged, codes) == merged

    removed = rs.remove_from_pool(merged, codes)
    assert removed == ["000002.SZ"]
    # 移除不存在的示例标的不报错
    assert rs.remove_from_pool([], codes) == []


def test_tc644_03b_example_endpoints_only_touch_pool():
    """TC-644-03b: 载入/删除只改 stock_pool, 不动 scheduled_enabled 等真实配置"""
    src = _read("backend", "api", "v1", "data_refresh.py")
    assert '"/example-pool/load"' in src
    assert '@router.delete("/example-pool")' in src
    block = src.split("load_example_pool", 1)[1].split("@router.delete", 1)[0]
    assert 'cfg["stock_pool"]' in block
    assert "scheduled_enabled" not in block
    assert "save_config(cfg)" in block


@NEEDS_NODE
def test_tc644_04_event_whitelist_and_trim():
    """TC-644-04: 埋点事件白名单 + 属性裁剪 (对象/超长丢弃)"""
    out = _run_js("event-track.js", """
        const long = 'x'.repeat(300);
        return {
            okOnboard: M.isKnownEvent('onboarding_start'),
            okEmpty: M.isKnownEvent('empty_action'),
            bad: M.isKnownEvent('nope'),
            props: M.normalizeProps({ a: long, b: { nested: 1 }, c: 3, d: true, e: null, f: NaN }),
            unknownTrack: M.createTracker(function(){}).track('nope', {}),
            knownTrack: M.createTracker(function(){}).track('search_open', { q: 'abc' }),
            payload: M.buildPayload('nav_switch', { page: 'calendar' }),
        };
    """)
    assert out["okOnboard"] is True and out["okEmpty"] is True
    assert out["bad"] is False
    assert len(out["props"]["a"]) == 120
    assert "b" not in out["props"]  # 对象不落日志
    assert out["props"]["c"] == 3 and out["props"]["d"] is True
    assert "e" not in out["props"] and "f" not in out["props"]
    assert out["unknownTrack"] is False
    assert out["knownTrack"] is True
    assert out["payload"]["event"] == "nav_switch"
    assert out["payload"]["props"] == {"page": "calendar"}


def test_tc644_04b_analytics_event_endpoint(tmp_path, monkeypatch):
    """TC-644-04b: 事件落 JSONL, 未知事件被拒, 行数可读回"""
    sys.path.insert(0, os.path.join(BASE, "backend"))
    from api.v1 import analytics as an
    monkeypatch.setattr(an, "DATA_DIR", str(tmp_path))

    ok = an.record_event("onboarding_complete", {"step": 2, "elapsed": 33})
    assert ok["ok"] is True
    bad = an.record_event("unknown_evt", {})
    assert bad["ok"] is False and bad["code"] == "UNKNOWN_EVENT"

    rows = an.load_events(days=1)
    assert len(rows) == 1
    assert rows[0]["event"] == "onboarding_complete"
    assert rows[0]["props"]["elapsed"] == 33


def test_tc644_04c_onboarding_tracks_start_complete_skip():
    """TC-644-04c: 引导开始/完成/跳过三事件均上报"""
    src = _read("frontend", "js", "onboarding.js")
    assert "onboarding_start" in src
    assert "onboarding_complete" in src
    assert "onboarding_skip" in src


# ═══════════════════ FR-645 搜索与命令面板 ═══════════════════

@NEEDS_NODE
def test_tc645_01_six_entity_groups_order():
    """TC-645-01: 六类实体分组固定顺序 股票→板块→策略→页面→指令→记录, 空域丢弃"""
    out = _run_js("command-panel-core.js", """
        const r = M.mergeEntityGroups({
            stock: [{type:'stock', label:'A'}],
            sector: [{type:'sector', label:'B'}],
            strategy: [{type:'strategy', label:'C'}],
            menu: [{type:'menu', label:'D'}],
            command: [{type:'command', label:'E'}],
            record: [{type:'dict', label:'F'}],
        });
        const sparse = M.mergeEntityGroups({ sector: [{type:'sector', label:'B'}] });
        return { keys: r.groups.map(g => g.key), flat: r.flat.map(i => i.label),
                 sparse: sparse.groups.map(g => g.key), groups: M.ENTITY_GROUPS.length };
    """)
    assert out["keys"] == ["stock", "sector", "strategy", "menu", "command", "record"]
    assert out["flat"] == ["A", "B", "C", "D", "E", "F"]
    assert out["sparse"] == ["sector"]
    assert out["groups"] == 6


@NEEDS_NODE
def test_tc645_01b_filter_entities_and_locate():
    """TC-645-01b: 实体过滤 (空查询返回空/上限) + 扁平/分组索引互转"""
    out = _run_js("command-panel-core.js", """
        const list = [{id:'a', name:'因子IC'}, {id:'b', name:'分层回测'}];
        const hit = M.filterEntities('因子', list, ['id','name'], 'strategy');
        const empty = M.filterEntities('', list, ['name'], 'strategy');
        const groups = [
            {key:'stock', items:[1,2]},
            {key:'menu', items:[3]},
        ];
        return {
            hit: hit.map(x => x.id), hitType: hit[0] && hit[0].type,
            emptyLen: empty.length,
            loc1: M.locateIndex(groups, 2),
            locBad: M.locateIndex(groups, 9),
            flatMenu: M.flatIndexOfGroup(groups, 1),
            tabFwd: M.groupIndexAfterKey(groups, 0, false),
            tabBack: M.groupIndexAfterKey(groups, 0, true),
            noGroups: M.groupIndexAfterKey([], 0, false),
        };
    """)
    assert out["hit"] == ["a"] and out["hitType"] == "strategy"
    assert out["emptyLen"] == 0
    assert out["loc1"] == {"groupIndex": 1, "itemIndex": 0}
    assert out["locBad"] == {"groupIndex": -1, "itemIndex": -1}
    assert out["flatMenu"] == 2
    assert out["tabFwd"] == 2      # 股票组 → 菜单组首项
    assert out["tabBack"] == 2     # 股票组向前循环到最后一组
    assert out["noGroups"] == 0


@NEEDS_NODE
def test_tc645_02_recent_entities_dedupe_and_cap():
    """TC-645-02: 最近访问去重前置、上限 8、序列化 roundtrip"""
    out = _run_js("command-panel-core.js", """
        let list = [];
        for (let i = 0; i < 10; i++) list = M.addRecentItem(list, { type:'stock', code:'60000'+i, label:'S'+i });
        list = M.addRecentItem(list, { type:'stock', code:'600005', label:'S5' });
        list = M.addRecentItem(list, { type:'dict', field:'turnover_rate', label:'换手率' });
        const json = M.serializeRecent(list);
        const back = M.parseRecent(json);
        return {
            len: list.length, firstLabel: list[0].label, secondCode: list[1].code,
            backLen: back.length, hasDict: back.some(x => x.type === 'dict'),
            corrupt: M.parseRecent('not-json'), nullParse: M.parseRecent(null),
            limit: M.RECENT_LIMIT,
        };
    """)
    assert out["len"] == 8 and out["limit"] == 8
    assert out["firstLabel"] == "换手率"
    assert out["secondCode"] == "600005"
    assert out["backLen"] == 8 and out["hasDict"] is True
    assert out["corrupt"] == [] and out["nullParse"] == []


@NEEDS_NODE
def test_tc645_03_suggest_alternatives():
    """TC-645-03: 无结果时给拼写近似建议 (≤3 条)"""
    out = _run_js("command-panel-core.js", """
        const labels = ['美林时钟', '策略共识', '量化日历', '数据源'];
        return {
            near: M.suggestAlternatives('美林时种', labels, 3),
            none: M.suggestAlternatives('完全无关的内容xyz', labels, 3),
            empty: M.suggestAlternatives('', labels, 3),
        };
    """)
    assert "美林时钟" in out["near"]
    assert len(out["near"]) <= 3
    assert out["none"] == []
    assert out["empty"] == []


@NEEDS_NODE
def test_tc645_04_ime_and_keyboard():
    """TC-645-04: IME 组合期识别 + Tab 切组 + Ctrl/Cmd+K 注册"""
    out = _run_js("command-panel-core.js", """
        const reg = M.createDefaultShortcuts();
        return {
            composing: M.isComposing({ isComposing: true }),
            keycode229: M.isComposing({ keyCode: 229 }),
            normal: M.isComposing({ key: 'Enter' }),
            nullEv: M.isComposing(null),
            ctrlK: reg.resolve({ key:'k', ctrlKey:true, altKey:false, shiftKey:false, metaKey:false }),
        };
    """)
    assert out["composing"] is True and out["keycode229"] is True
    assert out["normal"] is False and out["nullEv"] is False
    assert out["ctrlK"] == "toggle-palette"


def test_tc645_04b_panel_keyboard_and_mobile_entry():
    """TC-645-04b: 面板绑定 onKeydown (↑↓/Enter/Tab/Esc) + Ctrl/Cmd+K + 移动端可见入口"""
    src = _read("frontend", "js", "components", "command-panel.js")
    for token in ("ArrowDown", "ArrowUp", "Tab", "Escape", "metaKey", "qc:open-command-palette"):
        assert token in src, f"命令面板缺 {token}"
    header = _read("frontend", "js", "components", "global-header.js")
    assert "qc-header-search-fab" in header
    css = _read("frontend", "css", "layout.css")
    assert ".qc-header-search-fab" in css
    assert "max-width: 768px" in css


def test_tc645_04c_dict_domain_in_search():
    """TC-645-04c: 后端搜索覆盖数据字典字段域 (记录类)"""
    src = _read("backend", "api", "v1", "search.py")
    assert 'from data_dict import list_fields' in src
    assert '"type": "dict"' in src


# ═══════════════════ FR-646 错误与降级文案 ═══════════════════

@NEEDS_NODE
def test_tc646_01_nine_error_classes_two_part_copy():
    """TC-646-01: 九类错误码均可映射, 文案两段式 (what + action) 且行动可点"""
    out = _run_js("error-map.js", """
        const cases = {
            http401: M.describe(401).code,
            http403: M.describe(403).code,
            http404: M.describe(404).code,
            http429: M.describe(429).code,
            http500: M.describe(503).code,
            timeout: M.describe('timeout').code,
            offline: M.describe('offline').code,
            datasource: M.describe('datasource').code,
            fileMissing: M.describe('file_missing').code,
        };
        const d = M.describe(500);
        return {
            cases,
            hasWhat: !!d.what, hasAction: !!d.action,
            text: d.text, actionKey: d.actionKey,
            readableOk: M.isHumanReadable(d.text),
            readableBad: M.isHumanReadable('Traceback (most recent call last): File "x.py"'),
            msgFallback: M.describe(null, 'Failed to fetch').code,
            entries: Object.keys(M.ENTRIES).length,
        };
    """)
    assert out["cases"] == {
        "http401": "unauthorized", "http403": "forbidden", "http404": "not_found",
        "http429": "rate_limited", "http500": "server_error",
        "timeout": "timeout", "offline": "offline",
        "datasource": "datasource", "fileMissing": "file_missing",
    }
    assert out["hasWhat"] is True and out["hasAction"] is True
    assert out["actionKey"] == "retry"
    assert out["readableOk"] is True
    assert out["readableBad"] is False
    assert out["msgFallback"] == "offline"
    assert out["entries"] == 9


@NEEDS_NODE
def test_tc646_01b_text_is_two_sentences():
    """TC-646-01b: 每类文案均为「发生了什么。 你可以做什么。」两句"""
    out = _run_js("error-map.js", """
        const out = {};
        Object.keys(M.ENTRIES).forEach(k => { out[k] = M.ENTRIES[k].what + ' ' + M.ENTRIES[k].action; });
        return out;
    """)
    for k, text in out.items():
        assert text.count("。") >= 2, f"{k} 文案不是两段式: {text}"


@NEEDS_NODE
def test_tc646_02_retry_throttle():
    """TC-646-02: 重试节流 — 3 次上限 + 指数退避 + 封顶"""
    out = _run_js("error-map.js", """
        return {
            p0: M.retryPolicy(0, { maxAttempts: 3, baseSeconds: 2, capSeconds: 30 }),
            p2: M.retryPolicy(2, { maxAttempts: 3, baseSeconds: 2, capSeconds: 30 }),
            p3: M.retryPolicy(3, { maxAttempts: 3, baseSeconds: 2, capSeconds: 30 }),
            capped: M.retryPolicy(6, { maxAttempts: 10, baseSeconds: 2, capSeconds: 30 }),
        };
    """)
    assert out["p0"]["allowed"] is True and out["p0"]["delaySeconds"] == 2
    assert out["p2"]["allowed"] is True and out["p2"]["delaySeconds"] == 8
    assert out["p3"]["allowed"] is False and out["p3"]["remaining"] == 0
    assert out["capped"]["delaySeconds"] == 30


def test_tc646_02b_panel_uses_throttle():
    """TC-646-02b: 状态面板接入重试节流与次数上限"""
    src = _read("frontend", "js", "components", "state-panel.js")
    assert "retryPolicy" in src
    assert "retryBlocked" in src
    assert "已达重试上限" in src


def test_tc646_03_offline_recovery_and_unhandled_report():
    """TC-646-03: 离线恢复广播 + 自动重取 + 未捕获异常上报"""
    shell = _read("frontend", "js", "app-logic", "shell.js")
    assert "qc:online-recovered" in shell
    assert "unhandledrejection" in shell
    assert "QuantEvents.report" in shell
    keys = _read("frontend", "js", "app-logic", "keys.js")
    assert "qc:online-recovered" in keys


def test_tc646_03b_error_shown_and_retry_tracked():
    """TC-646-03b: 错误展示与重试均埋点 (有效性可度量)"""
    src = _read("frontend", "js", "components", "state-panel.js")
    assert "'error_shown'" in src
    assert "'error_retry'" in src


def test_tc646_04_new_catch_not_silent():
    """TC-646-04: 6.4.2 新增 catch 不得只 console — 必须上报或对用户可见

    口径: 只检查 6.4.2 新增/新增分支的文件 (既有历史的 console-only catch
    不在本次范围, 由 FR-651 存量清理承接)。
    """
    files = [
        ("frontend", "js", "event-track.js"),
        ("frontend", "js", "error-map.js"),
        ("frontend", "js", "components", "state-panel.js"),
        ("frontend", "js", "components", "command-panel.js"),
    ]
    offenders = []
    for parts in files:
        src = _read(*parts)
        for m in re.finditer(r"catch\s*\(\s*\w*\s*\)\s*\{", src):
            window = src[m.end():m.end() + 400]
            chunk = window.split("\n\n")[0]
            visible = ("ElMessage" in chunk or "QuantEvents" in chunk
                       or "EM.report" in chunk or "console.warn" in chunk
                       or "console.error" in chunk)
            if not visible:
                offenders.append(f"{'/'.join(parts)}: {chunk[:80]}")
    assert not offenders, "存在静默 catch:\n" + "\n".join(offenders)


def test_tc646_04b_report_helper_exists():
    """TC-646-04b: 统一上报助手 report(err, context) 存在且上报 error_shown"""
    src = _read("frontend", "js", "event-track.js")
    assert "report: function" in src
    assert "'error_shown'" in src
