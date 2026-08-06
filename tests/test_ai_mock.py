"""v3.5.0-T8: AI 测试 mock 化 — 无真实 API Key 可跑通 (FR-3.5.7)
覆盖: 成功/失败/超时 三条路径
"""
import json
from unittest.mock import MagicMock, patch

import pytest


class TestMockLLM:
    """mock LLM 调用路径"""

    def test_evaluate_success_path(self, tmp_path):
        """成功路径: mock requests.post 返回有效响应"""
        import paths
        paths.DATA_DIR = str(tmp_path)
        import ai_evaluator
        ai_evaluator.AIEvaluator._models_file = f"{tmp_path}/ai_models.json"

        e = ai_evaluator.AIEvaluator()
        # 只保留一个启用模型
        models = e.get_models()
        for m in models:
            m['enabled'] = (m['id'] == 'deepseek-v4-pro')
        e.update_models(models)

        mock_resp = MagicMock()
        mock_resp.status_code = 200
        mock_resp.json.return_value = {"choices": [{"message": {"content": json.dumps({
            "total_score": 80, "level": "推荐", "dimensions": {},
            "analysis": {"strengths": ["x"], "weaknesses": [], "suggestions": []},
            "detailed_report": "mock 成功"
        })}}]}
        sample_data = {
            'has_kline': True, 'latest': {'close': 12.8, 'pct_chg': 2.4},
            'rsi': 58, 'macd': {'dif': 0.1, 'dea': 0.05, 'hist': 0.05},
            'ma_alignment': '多头排列',
        }
        with patch('ai_evaluator.requests.post', return_value=mock_resp):
            result = e.evaluate_stock('000001.SZ', '平安银行', stock_data=sample_data)
        assert result['result']['total_score'] == 80
        assert result['result']['level'] == '推荐'

    def test_evaluate_failure_path(self, tmp_path):
        """失败路径: mock 抛出异常 → 应回退内置评估或返回失败"""
        import paths
        paths.DATA_DIR = str(tmp_path)
        import ai_evaluator
        e = ai_evaluator.AIEvaluator()
        sample_data = {'has_kline': False, 'latest': {}, 'rsi': None, 'macd': {}}
        with patch('ai_evaluator.requests.post', side_effect=Exception("connection refused")):
            result = e.evaluate_stock('000001.SZ', '平安银行', stock_data=sample_data)
        # 应返回结构化结果 (不抛异常)
        assert 'result' in result
        assert isinstance(result['result'], dict)

    def test_evaluate_timeout_path(self, tmp_path):
        """超时路径: requests.Timeout → 不应崩溃"""
        import paths
        paths.DATA_DIR = str(tmp_path)
        import ai_evaluator
        import requests
        e = ai_evaluator.AIEvaluator()
        sample_data = {'has_kline': False, 'latest': {}, 'rsi': None, 'macd': {}}
        with patch('ai_evaluator.requests.post', side_effect=requests.Timeout("timeout")):
            result = e.evaluate_stock('000001.SZ', '平安银行', stock_data=sample_data)
        assert 'result' in result


class TestCostControl:
    """v3.5.0-T6: 成本控制 (缓存/用量)"""

    def test_cache_hit(self, tmp_path):
        import paths
        paths.DATA_DIR = str(tmp_path)
        import ai_evaluator
        e = ai_evaluator.AIEvaluator()
        # 写入缓存
        e._set_cached('000001.SZ', 'default', {'total_score': 88, 'level': '推荐'})
        cached = e._get_cached('000001.SZ', 'default')
        assert cached['total_score'] == 88

    def test_cache_miss(self, tmp_path):
        import paths
        paths.DATA_DIR = str(tmp_path)
        import ai_evaluator
        e = ai_evaluator.AIEvaluator()
        assert e._get_cached('999999.SZ', 'default') is None

    def test_usage_record(self, tmp_path):
        import paths
        paths.DATA_DIR = str(tmp_path)
        import ai_evaluator
        e = ai_evaluator.AIEvaluator()
        e._record_usage('mock-model')
        e._record_usage('mock-model')
        stats = e.get_usage_stats()
        assert stats['total_calls'] == 2
        assert stats['by_model']['mock-model'] == 2


class TestStrategyRecommend:
    """v3.5.0-T5: 策略推荐"""

    def test_recommend_with_watchlist(self):
        import ai_evaluator
        e = ai_evaluator.AIEvaluator()
        r = e.recommend_strategies(watchlist=['600036.SH', '600519.SH', '000001.SZ'])
        assert r['success'] is True
        assert len(r['recommendations']) == 3
        assert r['watchlist_count'] == 3

    def test_recommend_empty(self):
        import ai_evaluator
        e = ai_evaluator.AIEvaluator()
        r = e.recommend_strategies(watchlist=[])
        assert r['success'] is False
