#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""quant-calendar: 样本外纪律 (backtest_oos) — T-5.1.23 / FR-5.1.2.3

70/30 样本外切分 + OOS「未触碰」标注:
  - OOS 段 (后 30%) 数据绝不参与参数选择/训练
  - 审计报告标注 OOS 隔离状态, 违规 (参数在 OOS 调过) → 警示/断言失败

纯函数可测。接入回测流程作为样本外纪律门。
"""
from typing import Dict, List, Optional

# 样本外比例: 后 30% (DEV-PLAN T-5.1.23 70/30)
OOS_RATIO = 0.3


class OutOfSampleViolation(Exception):
    """样本外被触碰 (参数在 OOS 段调整) 时抛出。"""
    pass


def split_train_test(daily_returns: List[float],
                     oos_ratio: float = OOS_RATIO):
    """按时间顺序 70/30 切分: 前 (1-oos_ratio) 训练, 后 oos_ratio 测试。"""
    rets = list(daily_returns)
    n = len(rets)
    if n == 0:
        return [], []
    cut = int(n * (1 - oos_ratio))
    cut = max(0, min(cut, n - 1))
    if cut == 0:
        return [], rets
    return rets[:cut], rets[cut:]


def oos_untouched_marker(n_train: int, n_test: int,
                         params_tuned_on: str = 'train') -> Dict:
    """OOS 未触碰标注: OOS 段数据是否参与参数选择。"""
    untouched = (params_tuned_on == 'train' or params_tuned_on == 'in_sample')
    note = ('✅ OOS 未触碰: 参数仅用训练段 (前 %d 日) 调整, 测试段 (后 %d 日) 保持隔离'
            % (n_train, n_test)) if untouched else         ('⚠️ OOS 被触碰: 参数在 OOS 段 (后 %d 日) 调整过, 样本外评价失真' % n_test)
    return {
        'oos_untouched': untouched,
        'params_tuned_on': params_tuned_on,
        'train_days': int(n_train),
        'test_days': int(n_test),
        'note': note,
    }


def oos_audit_report(daily_returns: List[float],
                     params_tuned_on: str = 'train',
                     oos_ratio: float = OOS_RATIO) -> Dict:
    """样本外纪律审计报告: 切分 + 未触碰标注。"""
    train, test = split_train_test(daily_returns, oos_ratio)
    marker = oos_untouched_marker(len(train), len(test), params_tuned_on)
    marker['train_days'] = len(train)
    marker['test_days'] = len(test)
    marker['total_days'] = len(train) + len(test)
    marker['oos_ratio'] = round(oos_ratio, 2)
    marker['violation'] = not marker['oos_untouched']
    return marker


def assert_oos_untouched(untouched: bool) -> None:
    """断言 OOS 未触碰; 违规抛 OutOfSampleViolation。"""
    if not untouched:
        raise OutOfSampleViolation(
            '样本外纪律违规: 参数在 OOS 段调整过, 样本外评价不能作为独立验证')
