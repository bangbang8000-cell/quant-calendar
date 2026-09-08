#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""V5.3.15 (T-MR.3): 短线复盘只读端点匿名可访问守护测试

根因(第三轮): 用户换浏览器(未登录)后短线复盘整页空 — /api/shortterm/*
全部强制 get_current_active_user, 但 pools(涨停池)/lhb(龙虎榜)/emotion/
market-facts/overview 等均为纯市场数据, 不依赖 user, 游客应可查看.
守护: 这些只读 GET 端点必须用 get_current_user(可选); POST/capture/verify 保持强制.
"""
import re

SRC = open('backend/api/v1/shortterm.py', encoding='utf-8').read()

READ_ONLY = ['latest-session', 'pools', 'lhb', 'sector-flow', 'dates', 'emotion',
             'market-facts', 'verification', 'weekly', 'overview', 'review',
             'review/dates', 'reflection', 'intraday']


class TestShorttermReadAnonymous:
    def test_read_endpoints_optional_auth(self):
        """只读市场端点必须用 get_current_user(可选)."""
        bad = []
        for ep in READ_ONLY:
            m = re.search(r'@router\.get\("/%s"\)(.*?)(?=@router\.|\Z)' % re.escape(ep), SRC, re.S)
            assert m, '端点 %s 未找到' % ep
            seg = m.group(1)
            if 'get_current_active_user' in seg:
                bad.append(ep)
        assert not bad, '只读端点仍强制登录: %s' % bad

    def test_capture_still_requires_auth(self):
        """capture(POST 写操作)保持强制登录."""
        m = re.search(r'@router\.post\("/capture"\)(.*?)(?=@router\.|\Z)', SRC, re.S)
        assert m and 'get_current_active_user' in m.group(1), 'capture 必须强制登录'
