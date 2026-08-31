"""Tests for ai_evaluator.py — AI evaluation engine (mock LLM)"""
import pytest
import json
from unittest.mock import patch, MagicMock
from ai_evaluator import AIEvaluator, ModelProvider


class TestModelProvider:
    """ModelProvider dataclass tests"""

    def test_from_dict_basic(self):
        """Basic from_dict works"""
        d = {"id": "test", "provider": "Test", "model": "gpt-4", "base_url": "https://api.test.com", "api_key": "sk-test"}
        m = ModelProvider.from_dict(d)
        assert m.id == "test"
        assert m.provider == "Test"
        assert m.api_key == "sk-test"
        assert m.enabled is True

    def test_from_dict_defaults(self):
        """Missing fields get defaults"""
        m = ModelProvider.from_dict({"id": "minimal"})
        assert m.enabled is True
        assert m.priority == 0
        assert m.timeout == 60
        assert m.max_tokens == 4096
        assert m.locked is False

    def test_to_dict_roundtrip(self):
        """to_dict → from_dict roundtrip"""
        m = ModelProvider(id="test", provider="P", model="M", base_url="https://x.com", api_key="k")
        d = m.to_dict()
        m2 = ModelProvider.from_dict(d)
        assert m2.id == m.id
        assert m2.api_key == m.api_key
        assert m2.enabled == m.enabled

    def test_disabled_model(self):
        """Disabled model flag preserved"""
        m = ModelProvider.from_dict({"id": "x", "enabled": False})
        assert m.enabled is False


class TestAIEvaluatorInit:
    """AIEvaluator initialization"""

    def test_init_creates_default_models(self):
        """First init writes default models"""
        evaluator = AIEvaluator()
        models = evaluator.get_models()
        assert len(models) > 0
        assert any(m['id'] == 'deepseek-v4-pro' for m in models)

    def test_get_enabled_models(self):
        """get_enabled_models filters disabled"""
        evaluator = AIEvaluator()
        enabled = evaluator.get_enabled_models()
        for m in enabled:
            assert m.enabled is True


class TestKeyStorage:
    """API Key 明文存储 (v3.6.0 取消加密, 兼容历史 Fernet 密文迁移)"""

    def test_plaintext_stored_as_is(self):
        """明文 key 原样保存并读回 (取消加密后)"""
        from crypto_utils import encrypt_value, decrypt_value
        # crypto_utils 仍保留(兼容迁移), 但模型存储不再调用
        original = "«redacted:sk-…»"
        encrypted = encrypt_value(original)
        decrypted = decrypt_value(encrypted)
        assert decrypted == original

    def test_empty_key_passthrough(self):
        """空 key 原样透传"""
        from crypto_utils import encrypt_value, decrypt_value
        assert encrypt_value("") == ""
        assert decrypt_value("") == ""

    def test_plaintext_backward_compat(self):
        """明文 key 经 decrypt_value 原样返回 (向后兼容)"""
        from crypto_utils import decrypt_value
        assert decrypt_value("plain-key") == "plain-key"

    def test_save_load_plaintext_roundtrip(self):
        """_save_models/_load_models 明文 roundtrip (取消加密后)"""
        evaluator = AIEvaluator()
        models = evaluator.get_models()
        if not models:
            return
        # 设置明文 key 保存
        m = models[0]
        m['api_key'] = 'test-plain-key-123'
        evaluator.update_models(models)
        loaded = evaluator.get_models()
        assert loaded[0]['api_key'] == 'test-plain-key-123'


class TestAIModelManagement:
    """Model CRUD operations"""

    def test_update_models(self):
        """update_models preserves locked state"""
        evaluator = AIEvaluator()
        models = evaluator.get_models()
        # Find a locked model
        locked_model = next((m for m in models if m.get('locked')), None)
        models_data = [dict(m) for m in models]
        updated = evaluator.update_models(models_data)
        if locked_model:
            still_locked = next((m for m in updated if m['id'] == locked_model['id']), None)
            assert still_locked is not None

    def test_test_model_missing_key(self):
        """Test connection without API key returns error"""
        evaluator = AIEvaluator()
        result = evaluator.test_model_connection('deepseek-v4-pro')
        assert result['success'] is False


class TestAIEvaluation:
    """AI evaluation with mocked LLM"""

    def test_evaluate_no_models(self):
        """Evaluation with no enabled models"""
        evaluator = AIEvaluator()
        # Disable all models
        models = evaluator.get_models()
        models_data = [{**m, 'enabled': False} for m in models]
        evaluator.update_models(models_data)
        result = evaluator.evaluate_stock('000001.SZ', 'test')
        assert result['result']['level'] == '无可用模型'

    @patch('ai_evaluator.requests.post')
    def test_evaluate_with_mock_llm(self, mock_post, sample_stock_data):
        """Full evaluation with mocked LLM response"""
        # Mock successful LLM response
        mock_response = MagicMock()
        mock_response.status_code = 200
        mock_response.json.return_value = {
            "choices": [{"message": {"content": json.dumps({
                "total_score": 85.2,
                "level": "推荐",
                "level_color": "#67c23a",
                "dimensions": {"趋势强度": 90, "均线排列": 85},
                "analysis": {
                    "strengths": ["量价配合好"],
                    "weaknesses": ["RSI偏高"],
                    "suggestions": ["回踩5日线介入"],
                    "sniper_points": {"ideal_buy": "32.50", "stop_loss": "30.80", "take_profit": "36.00"},
                    "position_advice": {"no_position": "建仓3成", "has_position": "持有"},
                },
                "signal_attribution": {
                    "technical": 60, "fundamentals": 25, "market_sentiment": 15,
                    "strongest_bullish": "均线多头排列", "strongest_bearish": "成交量萎缩"
                },
                "data_quality_note": "实时数据",
                "detailed_report": "测试评估结果"
            })}}]
        }
        mock_post.return_value = mock_response

        evaluator = AIEvaluator()
        # v3.2.0 fix: 传 stock_data 绕过真实行情获取 (_fetch_stock_data 会阻塞等待数据源)
        sample_data = {
            'code': '000001.SZ', 'name': '平安银行',
            'has_kline': True, 'has_fundamentals': True,
            'latest': {'date': '2026-07-14', 'close': 12.8, 'open': 12.5, 'high': 12.9, 'low': 12.3, 'pct_chg': 2.4},
            'rsi': 58.5, 'macd': {'dif': 0.15, 'dea': 0.10, 'hist': 0.05},
            'ma_alignment': '多头排列', 'pct_5d': 3.2, 'pct_20d': 5.1,
            'price_range': {'high': 13.2, 'low': 11.8},
            'volume_analysis': {'trend': '温和放量', 'detail': '近5日量能递增'},
            'fundamentals': {'pe': 6.5, 'pb': 0.85, 'total_mv': 250000000000, 'data_source': 'mock'},
        }
        result = evaluator.evaluate_stock('000001.SZ', '平安银行', stock_data=sample_data)
        assert 'result' in result
        assert 'total_score' in result['result']
