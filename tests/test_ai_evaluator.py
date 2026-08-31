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


class TestKeyEncryption:
    """API key encryption roundtrip"""

    def test_encrypt_decrypt_roundtrip(self):
        """Encryption should be transparent to callers"""
        from crypto_utils import encrypt_value, decrypt_value
        original = "sk-test-key-12345"
        encrypted = encrypt_value(original)
        decrypted = decrypt_value(encrypted)
        assert decrypted == original

    def test_empty_key_passthrough(self):
        """Empty key should pass through unchanged"""
        from crypto_utils import encrypt_value, decrypt_value
        assert encrypt_value("") == ""
        assert decrypt_value("") == ""

    def test_plaintext_backward_compat(self):
        """Plaintext keys survive decryption attempt"""
        from crypto_utils import decrypt_value
        assert decrypt_value("plain-key") == "plain-key"


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
        result = evaluator.evaluate_stock('000001.SZ', '平安银行')
        assert 'result' in result
        assert 'total_score' in result['result']
