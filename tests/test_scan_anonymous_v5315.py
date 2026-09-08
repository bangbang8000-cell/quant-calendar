#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""V5.3.15 (T-MR.2): 异动扫描/事件提醒匿名可访问守护测试

根因(第二轮): 用户换浏览器(未登录/token 缺失)后 scan 仍 401 — 端点强制
get_current_active_user, 游客无法查看市场级异动扫描(与市场复盘无需登录不一致).
守护: /api/market/scan 与 /api/market/events 端点必须是可选鉴权
(get_current_user), 未登录可访问; 已登录才识别用户自选.
"""
import re

import pytest


def _src():
    return open('backend/api/v1/market.py', encoding='utf-8').read()


class TestScanAnonymous:
    def test_scan_uses_optional_user(self):
        """scan 端点必须是可选鉴权 (get_current_user, 匿名可访问)."""
        src = _src()
        m = re.search(r'@router\.get\("/scan"\)(.*?)@router\.get\("/events"\)', src, re.S)
        assert m, 'scan 端点段未找到'
        seg = m.group(1)
        assert "Depends(get_current_user)" in seg, 'scan 必须用 get_current_user(可选鉴权)'
        assert "get_current_active_user" not in seg, 'scan 不得强制登录'

    def test_events_uses_optional_user(self):
        """events 端点必须是可选鉴权."""
        src = _src()
        m = re.search(r'@router\.get\("/events"\)(.*)$', src, re.S)
        assert m, 'events 端点段未找到'
        seg = m.group(1)
        assert "Depends(get_current_user)" in seg, 'events 必须用 get_current_user'

    @pytest.mark.e2e  # 需本地运行 dev server (:8001); CI 默认排除
    def test_scan_anonymous_returns_200(self):
        """匿名请求 /api/market/scan 必须 200(非 401)."""
        import json
        import urllib.request
        try:
            r = urllib.request.urlopen('http://localhost:8001/api/market/scan?pool=strategies', timeout=30)
            body = json.loads(r.read())
            assert r.status == 200 and body.get('success'), '匿名 scan 应 200 success'
        except urllib.error.HTTPError as e:
            assert e.code != 401, '匿名 scan 不得 401'
            raise
