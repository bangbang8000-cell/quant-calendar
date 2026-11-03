#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""同花顺 Fuyao 数据源客户端 (v6.7.0 / B1.1)

设计要点（见 PRD FR-6.7.1 / FR-6.7.4）:
- 单一 requests 会话 + ``X-api-key`` 鉴权；Key 只从环境变量读取，永不进 URL/日志
- 统一 ``ApiResponse`` 信封解析 (code/message/request_id/data)
- **错误码 → 语义**：2004「仅 AI 客户端」是"能力不可用"，**不计失败、不重试、后续跳过**
- 4001/HTTP 429 限流：指数退避重试，**不计入源失败率**
- 5xxx 上游错误：计失败并重试；1xxx 参数错：视为我方 bug，不重试
- 令牌桶限速（默认 5 QPS），避免触碰供应商动态限流
- ``transport`` / ``sleep`` / ``clock`` 可注入，便于单元测试不联网
"""

import json as _json
import logging
import os
import time
from collections import Counter

logger = logging.getLogger(__name__)

BASE_URL = 'https://fuyao.aicubes.cn'

#: 能力不可用（平台未对外开放，仅同花顺 AI 客户端）——**不是故障**
CAPABILITY_UNAVAILABLE = 'capability_unavailable'

#: 错误码 → 语义 reason
REASON_BY_CODE = {
    0: None,
    1001: 'invalid_param',
    1002: 'invalid_param',
    1003: 'invalid_param',
    1004: 'invalid_param',
    2001: 'auth',
    2003: 'no_permission',
    2004: CAPABILITY_UNAVAILABLE,
    3001: 'not_found',
    3002: 'no_data',
    3004: 'unsupported',
    4001: 'rate_limited',
    5001: 'upstream',
    5002: 'upstream',
    5003: 'upstream',
}

#: 可重试语义（限流/上游/网络）
RETRYABLE_REASONS = frozenset({'rate_limited', 'upstream', 'network'})

#: 视为"我方 bug"的语义（参数错），不计源失败但需要上报
BUG_REASONS = frozenset({'invalid_param'})

#: 密钥环境变量（D25：兼容官方名）
KEY_ENV_NAMES = ('FUYAO_API_KEY', 'HITHINK_FINANCE_API_KEY')


def resolve_api_key(environ=None):
    """按 D25 顺序解析 Key：FUYAO_API_KEY → HITHINK_FINANCE_API_KEY。"""
    env = environ if environ is not None else os.environ
    for name in KEY_ENV_NAMES:
        val = (env.get(name) or '').strip()
        if val:
            return val
    return ''


def _default_transport(url, headers, timeout):
    import requests  # noqa: PLC0415 — 延迟导入，便于无网测试注入 transport

    resp = requests.get(url, headers=headers, timeout=timeout)
    return resp.status_code, resp.text


class FuyaoClient:
    """Fuyao REST 客户端（薄封装：信封 + 语义 + 限速 + 重试）。"""

    def __init__(self, api_key=None, *, base_url=None, timeout=(5, 15), max_qps=5,
                 retries=2, transport=None, sleep=None, clock=None, environ=None):
        self._api_key = (api_key if api_key is not None else resolve_api_key(environ)) or ''
        self.base_url = (base_url or BASE_URL).rstrip('/')
        self.timeout = timeout
        self.max_qps = max(1, int(max_qps))
        self.default_retries = max(0, int(retries))
        self._transport = transport or _default_transport
        self._sleep = sleep or time.sleep
        self._clock = clock or time.monotonic

        self._tokens = float(self.max_qps)
        self._last = self._clock()

        self._stats = {
            'calls': 0,
            'ok': 0,
            'codes': Counter(),
            'failures': {},
            'by_capability': Counter(),
            'bugs': 0,
            'rate_limited': 0,
            'latency_ms_total': 0,
        }
        #: 已知「平台未开放」的能力，后续调用直接跳过，不再发请求
        self.unavailable_capabilities = set()

    # -- 只在内部使用，repr 不暴露 -------------------------------------------------
    @property
    def configured(self):
        return bool(self._api_key)

    @property
    def stats(self):
        return self._stats

    def __repr__(self):
        return '<FuyaoClient env=%s qps=%s configured=%s key=***>' % (
            self.base_url, self.max_qps, bool(self._api_key))

    __str__ = __repr__

    # -- 限速 ------------------------------------------------------------------
    def _acquire(self):
        now = self._clock()
        if now > self._last:
            self._tokens = min(float(self.max_qps),
                               self._tokens + (now - self._last) * self.max_qps)
            self._last = now
        if self._tokens >= 1.0:
            self._tokens -= 1.0
            return
        need = (1.0 - self._tokens) / float(self.max_qps)
        self._sleep(need)
        self._last = self._clock()
        self._tokens = 0.0

    # -- 请求 ------------------------------------------------------------------
    def get(self, capability, path, params=None, retries=None):
        """调用一个 Fuyao 能力。

        返回统一结果字典：``{ok, code, data, reason, detail, capability, retries, latency_ms}``；
        任何异常都不向上抛（上层可安全地按 reason 降级）。
        """
        retries = self.default_retries if retries is None else max(0, int(retries))
        result = {
            'ok': False, 'code': None, 'data': None, 'reason': None, 'detail': '',
            'capability': capability, 'retries': 0, 'latency_ms': 0,
        }

        if not capability:
            result['reason'] = 'invalid_param'
            result['detail'] = 'capability 不能为空'
            return result

        if not self._api_key:
            result['reason'] = 'not_configured'
            result['detail'] = '未配置 FUYAO_API_KEY / HITHINK_FINANCE_API_KEY'
            return result

        if capability in self.unavailable_capabilities:
            result['reason'] = CAPABILITY_UNAVAILABLE
            result['detail'] = '该能力平台未对外开放（同花顺 AI 客户端专用）'
            return result

        url = self.base_url + path
        if params:
            from urllib.parse import urlencode  # noqa: PLC0415
            url = url + '?' + urlencode(params)
        headers = {'X-api-key': self._api_key, 'Accept': 'application/json'}

        started = self._clock()
        reason = None
        detail = ''
        code = None
        data = None
        attempts = 0

        for attempt in range(retries + 1):
            attempts = attempt + 1
            self._acquire()
            try:
                status, text = self._transport(url, headers, self.timeout)
            except Exception as exc:  # noqa: BLE001 — 传输层异常统一按网络处理
                reason, detail = 'network', '%s: %s' % (type(exc).__name__, str(exc)[:120])
                code = None
            else:
                if status == 429:
                    reason, detail, code = 'rate_limited', 'HTTP 429 限流', 4001
                    self._stats['rate_limited'] += 1
                else:
                    payload = None
                    try:
                        payload = _json.loads(text)
                    except Exception:  # noqa: BLE001
                        payload = None
                    if not isinstance(payload, dict):
                        reason, detail, code = 'upstream', '响应非 JSON 或非对象', None
                    else:
                        code = payload.get('code')
                        detail = str(payload.get('message') or '')[:200]
                        reason = REASON_BY_CODE.get(code, 'unknown')
                        data = payload.get('data')
                        if code == 0:
                            reason = None

            if reason is None:
                break
            if reason not in RETRYABLE_REASONS or attempt >= retries:
                break
            backoff = min(4, 2 ** attempt)
            self._sleep(backoff)
            logger.info('[fuyao] %s 重试 %d/%d（%s）', capability, attempt + 1, retries, reason)

        result['code'] = code
        result['reason'] = reason
        result['detail'] = detail
        result['retries'] = max(0, attempts - 1)
        result['ok'] = reason is None
        if result['ok']:
            result['data'] = data

        latency_ms = int(max(0.0, (self._clock() - started)) * 1000)
        result['latency_ms'] = latency_ms
        self._record(capability, result)
        return result

    # -- 统计 ------------------------------------------------------------------
    def _record(self, capability, result):
        s = self._stats
        s['calls'] += 1
        s['by_capability'][capability] += 1
        s['latency_ms_total'] += result['latency_ms']
        if result['ok']:
            s['ok'] += 1
            return
        reason = result['reason']
        if result['code'] is not None:
            s['codes'][result['code']] += 1
        if reason == CAPABILITY_UNAVAILABLE:
            self.unavailable_capabilities.add(capability)
            return
        if reason == 'rate_limited':
            # 计数已在请求循环内按"命中次数"累加，这里只保证不误记源失败
            return
        if reason in BUG_REASONS:
            s['bugs'] += 1
            logger.error('[fuyao] %s 参数错误（我方 bug）: %s', capability, result['detail'])
            return
        if reason == 'not_configured':
            return
        s['failures'][capability] = s['failures'].get(capability, 0) + 1

    def snapshot(self):
        """可观测快照（供 /api/market/fuyao/status 使用）。"""
        s = self._stats
        return {
            'configured': self.configured,
            'base_url': self.base_url,
            'max_qps': self.max_qps,
            'calls': s['calls'],
            'ok': s['ok'],
            'codes': dict(s['codes']),
            'failures': dict(s['failures']),
            'by_capability': dict(s['by_capability']),
            'bugs': s['bugs'],
            'rate_limited': s['rate_limited'],
            'unavailable_capabilities': sorted(self.unavailable_capabilities),
            'avg_latency_ms': int(s['latency_ms_total'] / s['calls']) if s['calls'] else 0,
        }

    # -- 健康检查 --------------------------------------------------------------
    def ping(self):
        """最轻量验活：交易日历（T6.7.2 的 test_connection 复用）。"""
        return self.get('meta.calendar.trading-days', '/api/a-share/calendar/trading-days',
                        retries=0)
