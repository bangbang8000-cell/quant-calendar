#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""V5.3.15 (T-MR.1): 市场复盘 token 鉴权守护测试

根因: research-page.js 的 loadScan 用裸 fetch(无 Authorization 头)请求
/api/market/scan(需登录) → 401 → 前端显示无数据; loadMarketReviews 同为裸
fetch(防御); withAuth 用错 localStorage key 'token'(应为 'quant_token').
守护: 源码级断言 — loadMarketReviews / loadMarketReviewDetail 的 fetch 必须带
鉴权头, withAuth 必须用 quant_token.

6.3.1 (T-6.3.1.2): 域片段不再跨文件裸调注册文件的私有助手 ``_authHeaders``,
改由注册文件经 ctx 注入为 ``authHeaders`` (research-page.js: ``authHeaders: _authHeaders``),
故片段内断言名同步为 ``authHeaders()``; 注册文件私有助手仍名为 ``_authHeaders``.

V5.5.0 变更: 原 loadScan / loadEvents 两条守护已退役 —— 异动扫描前端与事件详情
前端随功能下线已从 research-page.js 移除(两个函数在仓库中已不存在), 后端
/api/market/scan 与 /api/market/events 端点仍保留给开放 API。守护一个不存在的
函数体没有意义, 故删除对应用例并在此记录原因。
"""
import os
import re
import sys

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import page_source  # noqa: E402

ROOT = os.path.join(os.path.dirname(__file__), '..')
FP = os.path.join(ROOT, 'frontend', 'js', 'components', 'research-page.js')


def _src():
    # 6.3.0 (T-6.3.0.6): 研究页结构分治 — 逻辑域下沉 components/research/, 读取走页源码重建
    # (注册文件模板引用还原 + 域片段前置, 正则与固定缩进断言保持有效)
    return page_source.read(FP)


def _func_body(name):
    src = _src()
    m = re.search(r'async function %s\([^)]*\) \{(.*?)\n      \}' % name, src, re.S)
    assert m, '%s 函数体未找到' % name
    return m.group(1)


class TestMarketScanAuth:
    def test_loadMarketReviews_uses_auth_headers(self):
        """市场复盘 fetch 带鉴权头(防御未来加鉴权)."""
        body = _func_body('loadMarketReviews')
        assert "fetch('/api/market/reviews" in body
        # 6.3.1 (T-6.3.1.2): 片段经 ctx 注入取 authHeaders(注册文件 _authHeaders), 不再跨文件裸调
        assert "authHeaders()" in body, "loadMarketReviews 必须带 authHeaders()"

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
        """复盘详情 fetch 带鉴权头(防御)."""
        body = _func_body('loadMarketReviewDetail')
        # 6.3.1 (T-6.3.1.2): 同上, 取 ctx 注入的 authHeaders
        assert "authHeaders()" in body, "loadMarketReviewDetail 必须带 authHeaders()"
