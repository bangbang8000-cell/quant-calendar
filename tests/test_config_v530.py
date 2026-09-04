# -*- coding: utf-8 -*-
"""
V5.3.0 (T-5.3.0.1): Pydantic V2 迁移守卫测试

覆盖:
- 导入 config 时不得出现 PydanticDeprecatedSince20 告警（class-based Config 已弃用）
- 迁移后配置行为等价：默认值 / .env 覆盖 / case_sensitive / cors_origin_list 解析
"""
import importlib
import os
import sys
import warnings

import pytest

sys.path.insert(0, os.path.join(os.path.dirname(__file__), '..', 'backend'))

import config


def _fresh_import():
    """强制重新加载 config 模块，捕获导入期告警"""
    with warnings.catch_warnings(record=True) as caught:
        warnings.simplefilter("always")
        importlib.reload(config)
    return caught


class TestNoPydanticDeprecation:
    def test_no_pydantic_deprecated_warning(self):
        """class-based Config 迁移到 SettingsConfigDict 后不应再有弃用告警"""
        caught = _fresh_import()
        deprecations = [
            w for w in caught
            if 'PydanticDeprecatedSince20' in w.category.__name__
            or 'pydantic v2' in str(w.message).lower()
            or 'deprecated' in str(w.message).lower() and 'class' in str(w.message).lower()
        ]
        assert not deprecations, f"Pydantic V2 弃用告警仍在: {[str(w.message) for w in deprecations]}"

    def test_settings_uses_settings_config_dict(self):
        """Settings 应使用 model_config = SettingsConfigDict（v2 官方写法）"""
        model_config = getattr(config.Settings, 'model_config', None)
        assert model_config is not None, "Settings 缺少 model_config"
        assert 'env_file' in model_config, "model_config 应含 env_file"
        assert model_config.get('case_sensitive') is True, "model_config 应保持 case_sensitive=True"


class TestBehaviorEquivalent:
    def test_default_values_unchanged(self):
        """迁移后默认值不变（仅断言不随 .env 覆盖的字段，端口由 .env 控制）"""
        assert config.settings.HOST == "0.0.0.0"
        assert config.settings.DEBUG is True
        assert config.settings.ALGORITHM == "HS256"
        assert config.settings.RATE_LIMIT_BACKEND == "memory"
        assert config.settings.OPENAPI_ENABLED is True
        # CORS_ORIGINS 随 .env 覆盖（dev 含 8001），此处仅断言含基础源
        assert "http://localhost:8000" in config.settings.CORS_ORIGINS

    def test_env_override_still_works(self, monkeypatch):
        """.env / 环境变量覆盖仍然生效"""
        monkeypatch.setenv('PORT', '8123')
        caught = _fresh_import()
        assert config.settings.PORT == 8123

    def test_case_sensitive_preserved(self, monkeypatch):
        """case_sensitive=True 保持：小写变量名不覆盖大写字段"""
        monkeypatch.setenv('host', '1.2.3.4')
        caught = _fresh_import()
        assert config.settings.HOST == "0.0.0.0"

    def test_cors_origin_list_unchanged(self):
        """cors_origin_list 解析行为不变"""
        config.settings.CORS_ORIGINS = "http://a.com,http://b.com, ,http://c.com"
        assert config.settings.cors_origin_list == ["http://a.com", "http://b.com", "http://c.com"]
        config.settings.CORS_ORIGINS = "http://localhost:8000,http://127.0.0.1:8000"
