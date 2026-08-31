"""V4.7.2: 数据源 Token 掩码防护测试

覆盖:
- is_masked_form 长度校验: 改过的掩码(长度不等)不视为掩码形式
- 数据源配置保存 API 拒绝含 * 的非掩码 token
- mask_secret 幂等性
"""
import pytest

# 测试占位 token (任意 56 位十六进制形似值, 非真实密钥 — 掩码逻辑测试不依赖其有效性)
TOKEN = 'a1b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0c1d2e3f4a5b6c7d8e9f0a1b2'


def test_mask_secret_rules():
    from secret_utils import mask_secret
    assert mask_secret('') == ''
    assert mask_secret('abc') == 'a**'
    assert mask_secret('abcdefg') == 'ab***fg'  # n=7: head=2, 中间 7-2-2=3 星
    assert mask_secret(TOKEN) == TOKEN[:4] + '*' * (len(TOKEN) - 8) + TOKEN[-4:]
    assert len(mask_secret(TOKEN)) == len(TOKEN)


def test_is_masked_form_full_mask():
    from secret_utils import is_masked_form, mask_secret
    m = mask_secret(TOKEN)
    assert is_masked_form(m, TOKEN) is True


def test_is_masked_form_edited_mask_rejected():
    from secret_utils import is_masked_form
    assert is_masked_form('ab2e***4241', TOKEN) is False
    assert is_masked_form(TOKEN, TOKEN) is False
    assert is_masked_form('', TOKEN) is False


def test_is_masked_form_empty_stored():
    from secret_utils import is_masked_form
    assert is_masked_form('', '') is True
    assert is_masked_form('abc***', '') is False


def test_is_masked_form_idempotent_on_masked_stored():
    from secret_utils import is_masked_form, mask_secret
    m = mask_secret(TOKEN)
    assert is_masked_form(m, m) is True


def test_save_datasource_rejects_star_token(monkeypatch):
    """保存 API 拒绝含 * 的非掩码 token(直接返回失败, 不写入配置)"""
    import data_sources
    import api.v1.market as market_mod

    class _Mgr:
        def __init__(self):
            self.config = {'sources': {
                'sxsc_tushare': {'token': 'sxsc-real-token-456', 'enabled': True},
                'tushare': {'token': TOKEN, 'enabled': True},
                'akshare': {'enabled': True},
            }}
            self.saved = None
        def save_config(self, new_config):
            self.saved = new_config

    fake = _Mgr()
    monkeypatch.setattr(data_sources, 'data_source_manager', fake)

    async def _call():
        return await market_mod.save_datasource_config({'sources': {
            'sxsc_tushare': {'token': 'sxsc-real-token-456', 'enabled': True},
            'tushare': {'token': 'ab2e***4241', 'enabled': True},
            'akshare': {'enabled': True},
        }}, None)

    import asyncio
    result = asyncio.run(_call())
    assert result['success'] is False
    assert '掩码' in result['message']
    assert fake.saved is None
