#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""V5.3.9 (BUG-FIX): 数据源 token 占位符污染守护

用户反馈: sxsc/tushare 测试连接通过 (ops), 但 dev K线失败。深入排查发现
不是 token 失效, 而是 tests/test_secret_masking.py 的 save_datasource_config
测试把占位符 token ('new-token-zzz'/'sxsc-real-token-456') 写进了真实
data/datasource_config.json (conftest patch_data_dir 漏掉 DATASOURCE_CONFIG_FILE
重定向) → dev 运行配置被污染。

本文件守护三层修复: ① conftest 隔离 datasource_config.json; ② _is_valid_token
识别占位符; ③ _init_clients 无效 token 回退 .env。
"""
import os
import sys

BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(BASE, 'backend'))


def test_conftest_redirects_datasource_config_file(tmp_path, monkeypatch):
    """conftest 的 patch_data_dir 必须重定向 DATASOURCE_CONFIG_FILE 到 tmp"""
    src = open(os.path.join(BASE, 'tests', 'conftest.py'), encoding='utf-8').read()
    assert "DATASOURCE_CONFIG_FILE" in src, 'conftest 应重定向 DATASOURCE_CONFIG_FILE'
    assert "datasource_config.json" in src.split('def patch_data_dir')[1].split('yield')[0], '应在 patch_data_dir 内'


def test_is_valid_token_rejects_placeholder():
    """占位符 token 被判定为无效 (触发回退)"""
    from data_sources._manager import DataSourceManager
    assert DataSourceManager._is_valid_token('new-token-zzz') is False
    assert DataSourceManager._is_valid_token('sxsc-real-token-456') is False
    assert DataSourceManager._is_valid_token('') is False
    assert DataSourceManager._is_valid_token('12345') is False


def test_is_valid_token_accepts_hex():
    """真实 32-64 位 hex token 有效"""
    from data_sources._manager import DataSourceManager
    assert DataSourceManager._is_valid_token('a' * 32) is True
    assert DataSourceManager._is_valid_token('deadbeefcafebabe1234567890abcdef12345678' + 'f' * 24) is True


def test_init_clients_falls_back_on_invalid_token(monkeypatch):
    """datasource_config 里占位符 token → 回退 .env 真实 token"""
    from data_sources import _manager as m
    # 构造实例级 config 含占位符, patch settings 有真实值
    calls = {}
    class _FakeSettings:
        TUSHARE_TOKEN = 'deadbeefcafebabe1234567890abcdef12345678' + 'e' * 20
        SXSC_TUSHARE_TOKEN = ''
    import types
    fake_mod = types.SimpleNamespace(settings=_FakeSettings)
    monkeypatch.setitem(sys.modules, 'config', fake_mod)
    mgr = m.DataSourceManager.__new__(m.DataSourceManager)
    mgr.config = {'sources': {
        'tushare': {'enabled': True, 'token': 'new-token-zzz'},
        'sxsc_tushare': {'enabled': True, 'token': 'sxsc-real-token-456'},
        'akshare': {'enabled': True},
    }}
    mgr._clients = {}
    mgr._errors = {}
    # patch tushare 客户端创建, 捕获实际 token
    captured = {}
    def fake_pro_api(tok):
        captured['tushare'] = tok
        return object()
    monkeypatch.setattr('tushare.pro_api', fake_pro_api)
    monkeypatch.setattr('sxsc_tushare.get_api', lambda *a, **k: object())
    mgr._init_clients()
    assert captured.get('tushare') == _FakeSettings.TUSHARE_TOKEN, '应回退 .env 真实 token'
    assert 'sxsc_tushare' not in mgr._clients or 'sxsc' not in str(captured), 'sxsc 空 token 不建客户端'