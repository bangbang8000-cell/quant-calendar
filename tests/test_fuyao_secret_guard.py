#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Fuyao 密钥守卫测试 (v6.7.0 / B1.3, TC-FY-G-13)

守护目标：Key 只从环境变量读取，**永不落盘、永不进日志、接口只回掩码**。
"""
import json
import logging



def test_mask_secret_keeps_tail():
    from secret_utils import mask_secret

    raw = 'sk-fuyao-S8UriZwh9I4wX-M16Zu5MHUW3f8HDYB8'
    masked = mask_secret(raw)
    assert masked != raw
    assert '*' in masked
    assert masked.endswith(raw[-4:])


def test_config_endpoint_masks_fuyao(monkeypatch):
    monkeypatch.setenv('FUYAO_API_KEY', 'sk-fuyao-ABCDEFGHIJKLMNOPQRSTUVWXYZ012345')
    from api.v1.market import get_datasource_config

    cfg = _run(get_datasource_config())
    fuyao = cfg['config']['sources']['fuyao']
    assert 'token' in fuyao
    assert fuyao['token'] != 'sk-fuyao-ABCDEFGHIJKLMNOPQRSTUVWXYZ012345'
    assert '*' in fuyao['token']


def test_save_config_never_persists_fuyao_token(monkeypatch, tmp_path):
    """POST /datasource/config 里提交的 fuyao token 必须被丢弃（Key 只走 .env）"""
    import data_sources as ds

    cfg_file = tmp_path / 'datasource_config.json'
    monkeypatch.setattr(ds, 'DATASOURCE_CONFIG_FILE', str(cfg_file))

    from data_sources import data_source_manager
    old = json.loads(json.dumps(data_source_manager.config))
    try:
        payload = json.loads(json.dumps(old))
        payload.setdefault('sources', {}).setdefault('fuyao', {})
        payload['sources']['fuyao']['token'] = 'sk-fuyao-SHOULD-NOT-BE-SAVED'
        from api.v1.market import save_datasource_config
        res = _run(save_datasource_config(payload, _={}))
        assert res['success'] is True
        saved = json.loads(cfg_file.read_text(encoding='utf-8'))
        assert 'token' not in saved['sources']['fuyao']
        assert 'SHOULD-NOT-BE-SAVED' not in cfg_file.read_text(encoding='utf-8')
    finally:
        data_source_manager.config = old


def test_reveal_secret_fuyao_returns_real_key(monkeypatch):
    monkeypatch.setenv('FUYAO_API_KEY', 'sk-fuyao-REVEAL-ME-0123456789abcdef')
    monkeypatch.setattr('secret_utils.verify_key_view_password', lambda p: True)
    import api.v1.system as sysmod
    from secret_utils import verify_key_view_password  # noqa: F401
    import secret_utils
    monkeypatch.setattr(secret_utils, 'verify_key_view_password', lambda p: True)

    res = _run(sysmod.reveal_secret({'password': 'x', 'target': 'fuyao'}, _={}))
    assert res['success'] is True
    assert res['secret'] == 'sk-fuyao-REVEAL-ME-0123456789abcdef'


def test_reveal_secret_requires_password(monkeypatch):
    monkeypatch.setenv('FUYAO_API_KEY', 'sk-fuyao-REVEAL-ME-0123456789abcdef')
    import secret_utils
    monkeypatch.setattr(secret_utils, 'verify_key_view_password', lambda p: False)
    import api.v1.system as sysmod

    res = _run(sysmod.reveal_secret({'password': 'wrong', 'target': 'fuyao'}, _={}))
    assert res['success'] is False


def test_key_not_in_logs(caplog, monkeypatch):
    monkeypatch.setenv('FUYAO_API_KEY', 'sk-fuyao-LOG-CHECK-0123456789abcdef')
    from data_sources._fuyao import FuyaoClient

    c = FuyaoClient(transport=lambda *a, **k: (200, '{"code":2001,"message":"x","data":null}'))
    with caplog.at_level(logging.DEBUG):
        c.get('prices.snapshot', '/api/x', retries=0)
    assert 'sk-fuyao-LOG-CHECK' not in caplog.text
    assert 'sk-fuyao-LOG-CHECK' not in repr(c)


def _run(coro):
    """在不起服务的测试里执行 async 端点函数（py3.14 无隐式事件循环）"""
    import asyncio
    if not asyncio.iscoroutine(coro):
        return coro
    return asyncio.run(coro)
