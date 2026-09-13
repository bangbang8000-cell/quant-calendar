#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""V5.3.15 (T-MR.1): 市场复盘 token 鉴权守护测试

根因: research-page.js 的 loadScan 用裸 fetch(无 Authorization 头)请求
/api/market/scan(需登录) → 401 → 前端显示无数据; loadMarketReviews 同为裸
fetch(防御); withAuth 用错 localStorage key 'token'(应为 'quant_token').
守护: 源码级断言 — loadMarketReviews 的 fetch 必须带 _authHeaders(),
withAuth 必须用 quant_token.

V5.5.0 变更: 原 loadScan / loadEvents 两条守护已退役 —— 异动扫描前端与事件详情
前端随功能下线已从 research-page.js 移除(两个函数在仓库中已不存在), 后端
/api/market/scan 与 /api/market/events 端点仍保留给开放 API。守护一个不存在的
函数体没有意义, 故删除对应用例并在此记录原因。
"""
import os
import re
import sys

ROOT = os.path.join(os.path.dirname(__file__), '..')
FP = os.path.join(ROOT, 'frontend', 'js', 'components', 'research-page.js')


def _src():
    return open(FP, encoding='utf-8').read()


def _func_body(name):
    src = _src()
    m = re.search(r'async function %s\([^)]*\) \{(.*?)\n      \}' % name, src, re.S)
    assert m, '%s 函数体未找到' % name
    return m.group(1)


class TestMarketScanAuth:
    def test_loadMarketReviews_uses_auth_headers(self):
        """市场复盘 fetch 带 _authHeaders()(防御未来加鉴权)."""
        body = _func_body('loadMarketReviews')
        assert "fetch('/api/market/reviews" in body
        assert "_authHeaders()" in body, "loadMarketReviews 必须带 _authHeaders()"

    def test_withAuth_uses_quant_token_key(self):
        """withAuth 必须用 quant_token(登录实际存储 key)."""
        src = _src()
        m = re.search(r'async function withAuth\(url, opts\) \{(.*?)\n      \}', src, re.S)
        assert m, 'withAuth 未找到'
        body = m.group(1)
        assert "getItem('quant_token')" in body, "withAuth 必须用 quant_token(不是 token)"
        assert "getItem('token')" not in body

    def test_auth_headers_helper_exists(self):
        """_authHeaders 辅助函数存在且用 quant_token."""
        src = _src()
        assert "function _authHeaders()" in src
        m = re.search(r'function _authHeaders\(\) \{(.*?)\n      \}', src, re.S)
        assert m and "quant_token" in m.group(1)


class TestEventsDetailAuth:
    def test_loadMarketReviewDetail_uses_auth_headers(self):
        """复盘详情 fetch 带 _authHeaders()(防御)."""
        body = _func_body('loadMarketReviewDetail')
        assert "_authHeaders()" in body, "loadMarketReviewDetail 必须带 _authHeaders()"
