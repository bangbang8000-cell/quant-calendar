#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Fuyao 客户端单元测试 (v6.7.0 / B1.1)

覆盖（TEST-PLAN TC-FY-6.7-01~05 + TC-FY-G-01~07）:
- 成功信封解析
- 错误码 → reason 语义映射（2001/2003/2004/4001/5xxx/1xxx）
- 2004「仅 AI 客户端」：不计失败、不重试、后续跳过
- 4001/429 限流：退避重试且不计失败率
- 5xxx 上游错误：计失败并重试
- 1xxx 参数错：视为我方 bug，不重试，入 bugs 计数
- 超时：network 语义
- 令牌桶限速
- capability 记录
- 密钥不进入 repr / 日志
"""

import pytest

from data_sources._fuyao import (
    CAPABILITY_UNAVAILABLE,
    FuyaoClient,
    REASON_BY_CODE,
)


def _envelope(code=0, message='success', data=None, request_id='req-1'):
    return '{"code":%d,"message":"%s","request_id":"%s","data":%s}' % (
        code, message, request_id, 'null' if data is None else __import__('json').dumps(data))


def make_client(responses, **kw):
    """responses: list of (status_code, body) 或 Exception；按调用顺序消费"""
    calls = {'n': 0, 'urls': [], 'headers': []}

    def transport(url, headers, timeout):
        calls['urls'].append(url)
        calls['headers'].append(headers)
        i = calls['n']
        calls['n'] += 1
        item = responses[i] if i < len(responses) else responses[-1]
        if isinstance(item, Exception):
            raise item
        return item

    opts = {'sleep': lambda s: None}
    opts.update(kw)
    client = FuyaoClient(api_key='sk-fuyao-test-abcd1234wxyz', transport=transport, **opts)
    return client, calls


def test_ok_envelope_parsed():
    client, calls = make_client([(200, _envelope(0, 'success', {'item': [{'a': 1}]}))])
    r = client.get('prices.snapshot', '/api/a-share/prices/snapshot', {'thscodes': '600519.SH'})
    assert r['ok'] is True and r['reason'] is None
    assert r['data'] == {'item': [{'a': 1}]}
    assert r['capability'] == 'prices.snapshot'
    assert 'thscodes=600519.SH' in calls['urls'][0]
    assert calls['headers'][0]['X-api-key'].startswith('sk-fuyao-test')


@pytest.mark.parametrize('code,reason', [
    (2001, 'auth'), (2003, 'no_permission'), (2004, 'capability_unavailable'),
    (4001, 'rate_limited'), (5003, 'upstream'), (1001, 'invalid_param'),
    (3001, 'not_found'), (3002, 'no_data'),
])
def test_reason_mapping(code, reason):
    assert REASON_BY_CODE[code] == reason


def test_2004_is_not_a_failure_and_skips_later():
    """能力不可用：不计失败、不重试、后续同能力直接跳过"""
    client, calls = make_client([
        (200, _envelope(2004, '该数据为同花顺AI客户端专用')),
        (500, 'should-not-be-called'),
    ])
    r1 = client.get('capital_flow.snapshot', '/api/a-share/capital-flow/snapshot')
    assert r1['ok'] is False
    assert r1['reason'] == CAPABILITY_UNAVAILABLE
    assert calls['n'] == 1, '2004 不应重试'
    assert client.stats['failures'] == {}, '2004 不得计入失败'
    assert 'capital_flow.snapshot' in client.unavailable_capabilities

    # 第二次调用同能力 → 不发请求，直接返回
    r2 = client.get('capital_flow.snapshot', '/api/a-share/capital-flow/snapshot')
    assert r2['reason'] == CAPABILITY_UNAVAILABLE
    assert calls['n'] == 1, '已知不可用能力不得再发请求'


def test_2001_auth_counts_failure_without_retry():
    client, calls = make_client([(200, _envelope(2001, 'unauthorized'))])
    r = client.get('prices.snapshot', '/api/a-share/prices/snapshot')
    assert r['reason'] == 'auth' and r['ok'] is False
    assert calls['n'] == 1, 'auth 不重试'
    assert client.stats['failures'].get('prices.snapshot') == 1


def test_5003_upstream_retries_then_gives_up():
    body = _envelope(5003, 'Data source unavailable')
    client, calls = make_client([(200, body), (200, body), (200, body)])
    r = client.get('special.hot', '/api/x', retries=2)
    assert r['reason'] == 'upstream'
    assert calls['n'] == 3, '首次 + 2 次重试'
    assert client.stats['failures'].get('special.hot') == 1


def test_429_rate_limited_retries_but_not_counted_as_source_failure():
    client, calls = make_client([
        (429, 'too many'), (429, 'too many'), (200, _envelope(0, 'success', {'item': []})),
    ])
    r = client.get('prices.snapshot', '/api/a-share/prices/snapshot', retries=2)
    assert r['ok'] is True
    assert calls['n'] == 3
    assert client.stats['failures'] == {}, '429 不计源失败率'
    assert client.stats['rate_limited'] >= 2


def test_invalid_param_is_client_bug_not_retried():
    client, calls = make_client([(200, _envelope(1001, 'Missing required parameter: period'))])
    r = client.get('financials.income', '/api/x')
    assert r['reason'] == 'invalid_param'
    assert calls['n'] == 1
    assert client.stats['bugs'] == 1
    assert client.stats['failures'] == {}, '参数错归 bug，不计源失败'


def test_timeout_maps_to_network_and_retries():
    import requests
    client, calls = make_client([
        requests.exceptions.Timeout('boom'),
        requests.exceptions.Timeout('boom'),
        (200, _envelope(0, 'success', {'item': []})),
    ])
    r = client.get('prices.snapshot', '/api/x', retries=2)
    assert r['ok'] is True
    assert calls['n'] == 3
    assert client.stats['failures'] == {}


def test_malformed_json_is_upstream():
    client, _ = make_client([(200, '<html>oops</html>')])
    r = client.get('prices.snapshot', '/api/x', retries=0)
    assert r['ok'] is False and r['reason'] == 'upstream'


def test_token_bucket_limits_rate():
    """qps=5 时，连续 11 次调用至少需要 ~2s（用假时钟验证，不真等）"""
    fake_now = {'t': 0.0}

    def clock():
        return fake_now['t']

    def sleep(s):
        fake_now['t'] += s

    client, calls = make_client(
        [(200, _envelope(0, 'success', {'item': []}))] * 20,
        max_qps=5, clock=clock, sleep=sleep,
    )
    for _ in range(11):
        client.get('prices.snapshot', '/api/x')
    # 容量 5 的令牌桶：11 次调用中前 5 次走突发，其余 6 次各等 1/5 秒 → ≥1.2s
    assert fake_now['t'] >= (11 - 5) / 5 - 1e-6, '5 QPS 令牌桶未生效'
    assert calls['n'] == 11


def test_stats_counts_by_capability():
    client, _ = make_client([(200, _envelope(0, 'success', {'item': []}))] * 3)
    client.get('special.limit-up-pool', '/api/a')
    client.get('special.limit-up-pool', '/api/a')
    client.get('prices.snapshot', '/api/b')
    assert client.stats['calls'] == 3
    assert client.stats['ok'] == 3
    assert client.stats['by_capability']['special.limit-up-pool'] == 2


def test_api_key_never_leaks_in_repr_or_logs(caplog):
    client, _ = make_client([(500, 'oops')])
    import logging
    with caplog.at_level(logging.DEBUG):
        client.get('prices.snapshot', '/api/x', retries=0)
    assert 'sk-fuyao-test-abcd1234wxyz' not in repr(client)
    assert 'sk-fuyao-test-abcd1234wxyz' not in caplog.text


def test_missing_key_marks_not_configured():
    client = FuyaoClient(api_key='', transport=lambda *a, **k: (200, _envelope(0, 'success', {})))
    r = client.get('prices.snapshot', '/api/x')
    assert r['ok'] is False and r['reason'] == 'not_configured'


def test_settings_declares_both_env_names():
    """D25: pydantic-settings 默认 extra=forbid，.env 新增的 Fuyao Key 必须在 Settings 里声明，
    否则整个应用启动即失败（本轮实测踩到）。"""
    from config import Settings

    fields = Settings.model_fields
    assert 'FUYAO_API_KEY' in fields
    assert 'HITHINK_FINANCE_API_KEY' in fields
    s = Settings(FUYAO_API_KEY='k1')
    assert s.FUYAO_API_KEY == 'k1'


def test_resolve_api_key_prefers_ours(monkeypatch):
    from data_sources._fuyao import resolve_api_key

    assert resolve_api_key({'FUYAO_API_KEY': 'a', 'HITHINK_FINANCE_API_KEY': 'b'}) == 'a'
    assert resolve_api_key({'HITHINK_FINANCE_API_KEY': 'b'}) == 'b'
    assert resolve_api_key({}) == ''
