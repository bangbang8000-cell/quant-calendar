# -*- coding: utf-8 -*-
"""v6.4 (FR-6.4.2 / FR-6.4.7): WebSocket 依赖自检。

事故
----
`requirements.lock` 声明了 websockets / wsproto，但 ops 环境从未按 lock 安装，
uvicorn 静默降级 → 全站 `/api/market/ws/quotes` 返回 404。
与此同时 `/api/health`、启动自检、验收脚本全绿 —— 因为没有任何一处检查过它。
更隐蔽的是 `verify_chain.sh` 用 `PYTHONPATH=/home/evergreen/qc_ws_pkgs` 从外部注入
websockets，把"生产缺依赖"掩盖成"链上通过"。
"""
import builtins
import os
import sys

sys.path.insert(0, os.path.join(os.path.dirname(__file__), '..', 'backend'))

from reliability import checks  # noqa: E402


def test_ws_check_ok_in_current_env():
    """U-402: 依赖齐全 + 路由已注册 → ok。"""
    entry = checks._check_ws_dependency()
    assert entry['name'] == 'ws_dependency'
    assert entry['status'] == 'ok', entry['detail']
    assert 'websockets=' in entry['detail']
    assert '/api/market/ws/quotes' in entry['detail']


def test_ws_check_fails_when_dependency_missing(monkeypatch):
    """U-401: 缺 websockets → 自检 fail，且给出可执行修复命令。"""
    real_import = builtins.__import__

    def fake_import(name, *args, **kwargs):
        if name in ('websockets', 'wsproto'):
            raise ImportError('simulated: No module named %s' % name)
        return real_import(name, *args, **kwargs)

    monkeypatch.setattr(checks, '__import__', fake_import, raising=False)
    entry = checks._check_ws_dependency()
    assert entry['status'] == 'fail'
    assert 'websockets' in entry['detail']
    assert 'pip install -r requirements.lock' in entry['detail'], '必须给出修复命令'


def test_ws_check_fails_when_route_not_registered(monkeypatch):
    """依赖装好但路由未挂载 → 同样 fail（避免"能 import 就算通过"）。"""
    monkeypatch.setattr(checks, '_ws_route_registered', lambda: False)
    entry = checks._check_ws_dependency()
    assert entry['status'] == 'fail'
    assert 'WS 路由未注册' in entry['detail']


def test_checks_report_includes_new_items():
    """自检报告必须包含 ws_dependency 与 dep_lock（改前两者都不存在）。"""
    r = checks.run_checks(app_version='test')
    names = {c['name'] for c in r['checks']}
    assert 'ws_dependency' in names
    assert 'dep_lock' in names
    assert 'ok_count' in r and 'fail_count' in r


def test_dep_lock_detects_missing_package(monkeypatch):
    """dep_lock 必须能点名缺失包（只报 warn，不阻断启动）。"""
    import tempfile
    import paths

    fd, p = tempfile.mkstemp(suffix='.lock')
    os.close(fd)
    with open(p, 'w', encoding='utf-8') as f:
        f.write('websockets==13.1\n')
        f.write('definitely-not-installed-pkg==9.9.9\n')
    monkeypatch.setattr(paths, 'BASE_DIR', tempfile.gettempdir())
    monkeypatch.setattr(checks.os.path, 'join', lambda a, b: p if b == 'requirements.lock' else os.path.join(a, b))
    entry = checks._check_dep_lock()
    assert entry['status'] == 'warn'
    assert 'definitely-not-installed-pkg' in entry['detail']
    os.remove(p)


def test_degraded_payload_carries_reason():
    """v6.4 (FR-6.4.2): 降级帧必须带原因码，前端据此区分两种降级。"""
    from realtime_quotes import build_quote_payload, degrade_reason, trading_session_state

    p = build_quote_payload([{'code': '600519', 'name': '贵州茅台'}], {}, True,
                            reason='non_trading_hours')
    assert p['degraded'] is True
    assert p['data'] == []
    assert p['reason'] == 'non_trading_hours'

    # 默认值兜底
    p2 = build_quote_payload([], {}, True)
    assert p2['reason'] == 'upstream_unreachable'

    # 原因判定：交易时段内 → 上游不可达；周末 → 非交易时段
    assert degrade_reason('open') == 'upstream_unreachable'
    assert degrade_reason('closed') == 'non_trading_hours'
    assert degrade_reason('weekend') == 'non_trading_hours'
    assert trading_session_state() in ('open', 'closed', 'weekend')


def test_non_degraded_payload_has_no_reason():
    """正常帧不塞 reason，避免前端把正常数据当降级。"""
    from realtime_quotes import build_quote_payload

    p = build_quote_payload([{'code': '600519', 'name': '贵州茅台'}],
                            {'600519': {'price': 1500.0, 'change_pct': 1.0}}, False)
    assert p['degraded'] is False
    assert 'reason' not in p
