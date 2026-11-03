#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""零 Fuyao 演练 (v7.3.0 / B7.7, PRD 出口项 / TEST-PLAN TC-FY-G-19)

把 Fuyao 整体关掉后，逐项验证「产品仍然可用」：
- 核心行情（T1）不受影响（本来就不允许走 Fuyao）
- 周边能力（三池/龙虎榜/热榜/异动/竞价/财务/研究）→ **available=False + reason**，不 500、不伪造数据
- DWH 研究层（本地 DuckDB）不受影响（不依赖网络源）

用法：
    python3 scripts/drill_zero_fuyao.py --base http://127.0.0.1:8001 --token <jwt>
    python3 scripts/drill_zero_fuyao.py --base http://127.0.0.1:8001 --token <jwt> --restore
"""
import argparse
import json
import sys
import urllib.error
import urllib.request

ENDPOINTS = [
    ('GET', '/api/health', 'core'),
    ('GET', '/api/market/kline?code=600519.SH&period=daily&limit=5', 'core'),
    ('GET', '/api/market/calendar', 'core'),
    ('GET', '/api/shortterm/pools', 'peripheral'),
    ('GET', '/api/shortterm/lhb', 'peripheral'),
    ('GET', '/api/shortterm/auction', 'peripheral'),
    ('GET', '/api/shortterm/hot-list?period=day&limit=5', 'peripheral'),
    ('GET', '/api/shortterm/anomaly?page=1&size=3', 'peripheral'),
    ('GET', '/api/events/flash?limit=3', 'peripheral'),
    ('GET', '/api/research/industry-strength', 'peripheral'),
    ('GET', '/api/research/sentiment-pulse', 'peripheral'),
    ('GET', '/api/research/fin-quality?codes=600519.SH', 'peripheral'),
    ('GET', '/api/research/pit-audit', 'peripheral'),
    ('GET', '/api/dwh/status', 'local'),
]


def call(base, method, path, token=None, body=None, timeout=90):
    url = base.rstrip('/') + path
    data = json.dumps(body).encode() if body is not None else None
    req = urllib.request.Request(url, data=data, method=method)
    if data:
        req.add_header('Content-Type', 'application/json')
    if token:
        req.add_header('Authorization', 'Bearer ' + token)
    try:
        with urllib.request.urlopen(req, timeout=timeout) as r:
            raw = r.read()
            return r.status, raw
    except urllib.error.HTTPError as e:
        return e.code, e.read()
    except Exception as e:  # noqa: BLE001
        return 0, str(e).encode()


def set_fuyao(base, token, enabled):
    status, raw = call(base, 'GET', '/api/market/datasource/config', token)
    if status != 200:
        return False, '读取配置失败: %s' % status
    cfg = json.loads(raw).get('config') or {}
    cfg.setdefault('sources', {}).setdefault('fuyao', {})
    cfg['sources']['fuyao']['enabled'] = bool(enabled)
    body = {'sources': cfg.get('sources') or {}, 'source_order': cfg.get('source_order') or []}
    status2, raw2 = call(base, 'POST', '/api/market/datasource/config', token, body)
    return status2 == 200, raw2[:200]


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument('--base', default='http://127.0.0.1:8001')
    ap.add_argument('--token', required=True)
    ap.add_argument('--restore', action='store_true', help='只恢复 Fuyao 开关')
    args = ap.parse_args()

    if args.restore:
        ok, msg = set_fuyao(args.base, args.token, True)
        print(('恢复 Fuyao 开关: %s' % ('成功' if ok else '失败 %s' % msg)))
        return 0 if ok else 1

    print('=== 1) 关闭 Fuyao ===')
    ok, msg = set_fuyao(args.base, args.token, False)
    if not ok:
        print('关闭失败，演练中止:', msg)
        return 1

    print('=== 2) 逐项验证（核心必须可用；周边必须诚实降级；本地层不受影响）===')
    failures = []
    for method, path, kind in ENDPOINTS:
        status, raw = call(args.base, method, path, args.token)
        body = {}
        try:
            body = json.loads(raw) if raw[:1] in (b'{', b'[') else {}
        except Exception:  # noqa: BLE001
            body = {}
        available = body.get('available')
        if status != 200:
            failures.append('%s %s -> HTTP %s（不应非 200）' % (method, path, status))
            verdict = '✗ HTTP %s' % status
        elif kind == 'core':
            ok_core = body.get('status') == 'ok' or body.get('success') is not False
            if not ok_core:
                failures.append('核心端点不可用: %s' % path)
            verdict = '✓ 核心可用' if ok_core else '✗ 核心不可用'
        elif kind == 'local':
            verdict = '✓ 本地层可用(available=%s)' % available
        else:
            honest = (available is False and body.get('reason')) or available is True
            if not honest:
                failures.append('降级但不诚实(缺 reason): %s' % path)
            verdict = '✓ 诚实降级(reason=%s)' % str(body.get('reason'))[:40] if available is False else '✓ 仍可用(本地兜底)'
        print('  %-58s %s' % (path, verdict))

    print('=== 3) 恢复 Fuyao ===')
    ok2, msg2 = set_fuyao(args.base, args.token, True)
    print('  恢复: %s' % ('成功' if ok2 else '失败 %s' % msg2))

    print('=== 结论 ===')
    if failures:
        print('演练未通过（%d 项）:' % len(failures))
        for f in failures:
            print('  -', f)
        return 1
    print('零 Fuyao 演练通过：核心链路不受影响，周边能力全部诚实降级（带 reason），本地 DWH 层正常。')
    return 0


if __name__ == '__main__':
    sys.exit(main())
