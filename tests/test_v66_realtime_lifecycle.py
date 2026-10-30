"""v6.6 P0-1a: 自选实时报价「登录后不连接」修复门禁 (T-6.6.5 / T-6.6.6 / T-6.6.7)

现场 (EVAL-v6.6 §3.1.1): 登录后自选列表价格长期显示 `--`。
根因: connectRealtimeQuotes() 只在应用启动时调用一次，而表单/访客登录发生在启动之后，
整页不刷新就永不连接，且没有任何文案暴露这一点。

守护三条不变量:
  ① 认证态变化必须驱动连接/断开（不依赖「启动瞬间是否已登录」）；
  ② 四态可读文案必须存在且被渲染（用户能看出没连上）；
  ③ 连接必须有看门狗与指数退避（不允许「连接中…」无限挂起）。

对应文档: docs/PRD-v6.6.md FR-6.6.2 / AC-6, AC-7, AC-8
          docs/DEV&TEST-PLAN-6.6.md TC-6.6.2.1~TC-6.6.2.6
"""
import os
import subprocess

import pytest

BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
TEST_JS = os.path.join(BASE, "tests", "realtime_lifecycle_core.test.js")
CORE_JS = os.path.join(BASE, "frontend", "js", "realtime-lifecycle-core.js")
REALTIME_JS = os.path.join(BASE, "frontend", "js", "watchlist", "realtime.js")
AUTH_JS = os.path.join(BASE, "frontend", "js", "app-logic", "auth.js")
APPLOGIC_JS = os.path.join(BASE, "frontend", "js", "app-logic.js")


def _read(p):
    with open(p, encoding="utf-8") as f:
        return f.read()


def test_lifecycle_core_exists():
    assert os.path.isfile(CORE_JS), f"缺少 {CORE_JS}"


def test_lifecycle_core_node_suite():
    """四态文案/退避/看门狗/订阅判定的 Node 行为测试"""
    proc = subprocess.run(["node", TEST_JS], capture_output=True, text=True, timeout=30, cwd=BASE)
    assert proc.returncode == 0, (
        "realtime_lifecycle_core.test.js 失败：\n"
        f"--- stdout ---\n{proc.stdout}\n--- stderr ---\n{proc.stderr}"
    )


def test_auth_change_event_is_dispatched():
    """① 登录/登出必须广播 qc:auth-changed（三条路径：登录/访客/登出）"""
    src = _read(AUTH_JS)
    assert "qc:auth-changed" in src, "auth.js 未广播认证态事件"
    assert src.count("_notifyAuthChanged(true") >= 2, "表单登录与访客登录都应广播登录态"
    assert src.count("_notifyAuthChanged(false") >= 1, "登出必须广播登出态"


def test_realtime_listens_auth_change():
    """① 订阅侧必须监听认证态事件（否则事件发了也没人接）"""
    src = _read(REALTIME_JS)
    assert "qc:auth-changed" in src, "realtime.js 未监听认证态事件"
    assert "_onAuthChanged" in src, "缺少认证态处理函数"
    # 跨标签页/其它标签登录也要能同步
    assert "'storage'" in src or '"storage"' in src, "缺少 storage 事件监听"


def test_realtime_connect_on_login_not_only_boot():
    """① 连接不能只发生在启动瞬间 —— 现场 bug 的直接成因"""
    src = _read(REALTIME_JS)
    assert "function _onAuthChanged" in src, "缺少 _onAuthChanged 定义"
    body = src.split("function _onAuthChanged")[1].split("\n}")[0]
    assert "connectRealtimeQuotes()" in body, "登录分支必须真正调用 connectRealtimeQuotes"
    assert "disconnectRealtimeQuotes()" in body, "登出分支必须真正断开连接"


def test_four_state_copy_exists_and_wired():
    """② 四态文案必须实现并进入 qcState（域解构 + qcState 各一处）"""
    assert "realtimeWsStateText" in _read(REALTIME_JS), "realtime.js 未提供四态文案"
    src = _read(APPLOGIC_JS)
    assert src.count("realtimeWsStateText") >= 2, \
        f"realtimeWsStateText 未同时接进域解构与 qcState（出现 {src.count('realtimeWsStateText')} 次）"


def test_watchdog_and_backoff_wired():
    """③ 看门狗与指数退避必须真正接线"""
    src = _read(REALTIME_JS)
    assert "_realtimeArmWatchdog" in src, "缺少看门狗接线"
    assert "_realtimeScheduleRetry" in src, "缺少退避重连接线"
    assert "_lcNextBackoff" in src, "退避未使用 core 的指数退避"
    assert "_realtimeClearWatchdog" in src, "连接成功/断开必须清理看门狗"


def test_watchdog_cleared_on_open():
    """③ 连接成功后必须清看门狗，否则会被误判卡死"""
    src = _read(REALTIME_JS)
    onopen = src.split("ws.onopen")[1].split("};")[0]
    assert "_realtimeClearWatchdog" in onopen, "onopen 未清理看门狗"


@pytest.mark.parametrize("state,expected", [
    ("open", "实时已连接"),
    ("connecting", "连接中…"),
    ("idle", "未连接"),
])
def test_state_text_matrix(state, expected):
    code = (
        "const c=require(process.argv[1]);"
        f"process.stdout.write(c.stateText({state!r}));"
    )
    proc = subprocess.run(["node", "-e", code, CORE_JS], capture_output=True, text=True, timeout=15)
    assert proc.returncode == 0, proc.stderr
    assert proc.stdout.strip() == expected


def test_four_state_copy_rendered_in_template():
    """② 模板必须渲染四态文案（不再一律显示「连接中...」）"""
    src = _read(os.path.join(BASE, "frontend", "js", "components", "ai", "view-part2.js"))
    assert "realtimeWsStateText()" in src, "模板未使用四态文案"
    # 剥除 HTML 注释与 JS 行注释后再检查渲染文案，避免把说明文字误判成写死文案
    import re as _re
    visible = _re.sub(r"<!--.*?-->", "", src, flags=_re.S)
    visible = "\n".join(
        line for line in visible.splitlines() if not line.strip().startswith("//")
    ).replace("连接中…", "")
    assert "连接中..." not in visible, "仍残留写死的「连接中...」渲染文案（idle 态会误导）"


def test_new_keys_fully_wired_through_all_layers():
    """回归护栏（真实踩坑）: 模板引用 realtimeWsStateText 但 watchlist.js 的域白名单
    与返回块都漏接 → Vue 渲染该子树抛 TypeError: xxx is not a function →
    「标题正常、列表整块消失、控制台无红色报错」。
    这既是本次引入的回归，也正是 P0-1b「共 N 只却零行」的同一故障形态。
    新键必须逐层透传: realtime 域 → watchlist create 白名单 + 返回 → app-logic 域解构 + qcState。"""
    wl = _read(os.path.join(BASE, "frontend", "js", "watchlist.js"))
    # watchlist.js 内至少两处（域解构 + return）
    assert wl.count("realtimeWsStateText") >= 2, \
        f"watchlist.js 未逐层透传 realtimeWsStateText（出现 {wl.count('realtimeWsStateText')} 次，需 ≥2）"
    # app-logic.js 内至少两处（域解构 + qcState）
    al = _read(APPLOGIC_JS)
    assert al.count("realtimeWsStateText") >= 2, \
        f"app-logic.js 未逐层透传 realtimeWsStateText（出现 {al.count('realtimeWsStateText')} 次，需 ≥2）"


def test_template_methods_exist_in_domain():
    """护栏: 模板调用的自选相关方法必须由 realtime 域真实提供（防止只在模板写而没实现）"""
    rt = _read(REALTIME_JS)
    tpl = _read(os.path.join(BASE, "frontend", "js", "components", "ai", "view-part2.js"))
    for fn in ("realtimeWsStateText", "exportPageDiagnostics", "reloadPage"):
        if fn + "()" in tpl:
            src = rt if fn == "realtimeWsStateText" else _read(
                os.path.join(BASE, "frontend", "js", "watchlist.js"))
            assert fn in src, f"模板调用了 {fn}() 但实现层未提供"
