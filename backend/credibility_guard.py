#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""quant-calendar: 回测可信度清单 (credibility_guard) — T-5.1.25 / FR-5.1.2.5

回测结果可信度检查:
  - 交易次数 < 20 → 样本太少, 统计不可靠
  - 样本期过短 (< 60 交易日) → 未跨完整周期
  - 无基准对比 → 无法判断相对表现
  - 成本过低 (< 0.1% 单边) → 收益被高估

纯函数可测。接入回测结果组装 (BacktestEngine 结果/API 响应)。
"""
from typing import Dict, List

MIN_TRADES = 20          # 最少交易次数
MIN_SAMPLE_DAYS = 60     # 最少样本交易日 (约 1 季度)
MIN_COST_RATE = 0.001    # 最少单边成本率 (0.1%)
BENCHMARK_LABEL = '沪深300'


def credibility_check(trades: int, sample_days: int, has_benchmark: bool,
                      cost_rate: float) -> List[str]:
    """逐项检查返回警示列表 (空 = 全部通过)。"""
    warnings = []
    if trades < MIN_TRADES:
        warnings.append('交易次数 %d < %d, 统计样本不足, 结论不可靠' % (trades, MIN_TRADES))
    if sample_days < MIN_SAMPLE_DAYS:
        warnings.append('样本期 %d 日 < %d 日, 未跨完整市场周期' % (sample_days, MIN_SAMPLE_DAYS))
    if not has_benchmark:
        warnings.append('未提供基准(%s)对比, 无法判断相对表现' % BENCHMARK_LABEL)
    if cost_rate < MIN_COST_RATE:
        warnings.append('成本率 %.4f < 0.1%% 单边, 收益可能被高估' % cost_rate)
    return warnings


def credibility_report(trades: int, sample_days: int, has_benchmark: bool,
                       cost_rate: float) -> Dict:
    """可信度报告: {warnings, healthy, score, grade, checks}。"""
    warnings = credibility_check(trades, sample_days, has_benchmark, cost_rate)
    checks = {
        'trades': {'ok': trades >= MIN_TRADES, 'value': trades, 'threshold': MIN_TRADES},
        'sample_days': {'ok': sample_days >= MIN_SAMPLE_DAYS, 'value': sample_days,
                        'threshold': MIN_SAMPLE_DAYS},
        'benchmark': {'ok': has_benchmark, 'value': has_benchmark, 'threshold': True},
        'cost_rate': {'ok': cost_rate >= MIN_COST_RATE, 'value': round(cost_rate, 4),
                      'threshold': MIN_COST_RATE},
    }
    passed = sum(1 for c in checks.values() if c['ok'])
    score = round(passed / len(checks) * 100, 1)
    if passed == len(checks):
        grade = '可信'
    elif passed >= len(checks) - 1:
        grade = '基本可信'
    else:
        grade = '存疑'
    return {
        'warnings': warnings,
        'healthy': len(warnings) == 0,
        'score': score,
        'grade': grade,
        'checks': checks,
    }


def evaluate_backtest_credibility(result: Dict) -> Dict:
    """v7.24 FR-3: 回测结论可信度门禁（不可信时阻断展示）。

    返回 {credible, blocking_reasons, checks, warnings}；任一硬条件不满足即 credible=False。
    """
    r = result or {}
    reasons = []
    checks = {
        'execution_mode': r.get('execution_mode') == 'T+1_open',
        'adjust_mode': r.get('adjust_mode') == 'qfq',
        'sample_sufficient': r.get('annual_return') is not None,
        'no_anomaly': not bool(r.get('annual_return_anomaly')),
        'has_days': int(r.get('total_days') or 0) >= 2,
    }
    # v7.24 FR-3: 未来函数检查未通过 → 阻断（未提供检查结果时不误判为失败）
    if r.get('lookahead_passed') is not None:
        checks['lookahead_passed'] = bool(r.get('lookahead_passed'))
    if not checks['execution_mode']:
        reasons.append('成交口径非 T+1 开盘（%s）' % (r.get('execution_mode') or '未声明'))
    if not checks['adjust_mode']:
        reasons.append('复权口径非前复权（%s）' % (r.get('adjust_mode') or '未声明'))
    if not checks['sample_sufficient']:
        reasons.append(r.get('annual_return_reason') or '样本不足（<18个月）')
    if not checks['no_anomaly']:
        reasons.append(r.get('annual_return_reason') or '年化异常（>1000%）')
    if not checks['has_days']:
        reasons.append('有效交易日不足')
    if checks.get('lookahead_passed') is False:
        reasons.append(r.get('lookahead_reason') or '未通过未来函数检查')
    return {'credible': not reasons, 'blocking_reasons': reasons, 'checks': checks,
            'warnings': list(r.get('warnings') or [])}
