"""v7.24 FR-3: 回测结论可信度门禁（不可信阻断展示）。"""
from credibility_guard import evaluate_backtest_credibility


def _ok(**kw):
    base = {'execution_mode': 'T+1_open', 'adjust_mode': 'qfq',
            'annual_return': 12.0, 'annual_return_anomaly': False,
            'total_days': 400, 'warnings': []}
    base.update(kw)
    return base


def test_credible_result_passes():
    r = evaluate_backtest_credibility(_ok())
    assert r['credible'] is True
    assert r['blocking_reasons'] == []


def test_insufficient_sample_blocks():
    r = evaluate_backtest_credibility(_ok(annual_return=None,
                                          annual_return_reason='样本不足（<18个月）'))
    assert r['credible'] is False
    assert '样本不足' in r['blocking_reasons'][0]


def test_close_approx_and_non_qfq_block():
    r = evaluate_backtest_credibility(_ok(execution_mode='close_approx', adjust_mode=None))
    assert r['credible'] is False
    assert len(r['blocking_reasons']) >= 2


def test_anomaly_blocks():
    r = evaluate_backtest_credibility(_ok(annual_return_anomaly=True,
                                          annual_return_reason='年化超过 1000%'))
    assert r['credible'] is False
    assert '1000%' in r['blocking_reasons'][0]


def test_lookahead_failure_blocks():
    r = evaluate_backtest_credibility(_ok(lookahead_passed=False,
                                          lookahead_reason='扰动后此前信号变化 3 处'))
    assert r['credible'] is False
    assert any('未来函数' in x or '扰动后' in x for x in r['blocking_reasons'])


def test_lookahead_unknown_does_not_block():
    r = evaluate_backtest_credibility(_ok())
    assert r['credible'] is True
    assert 'lookahead_passed' not in r['checks']
