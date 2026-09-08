"""T-5.1.22: 前视偏差守卫 (lookahead_guard) — 审计 t 日信号/t+1 成交, 检测同日 close 成交违规。

FR-5.1.2.2: 回测必须 t 日信号 → t+1 成交; 检测用 t 日收盘价同日成交的前视违规。
"""
import pytest
from lookahead_guard import (
    audit_execution_timing, detect_same_day_close_fill,
    lookahead_audit_report, sanitize_execution_delay,
)


class TestAuditTiming:
    def test_t_plus_one_compliant(self):
        # 信号 d1, 成交 d2 (t+1) → 合规
        signals = {'d1': ['A', 'B'], 'd2': ['C']}
        fills = {'d2': ['A', 'B']}  # C 信号在 d2, 若 d2 成交则违规; 这里仅 A/B 次日成交
        rep = audit_execution_timing(signals, fills)
        assert rep['violations'] == []
        assert rep['compliant'] is True

    def test_same_day_violation(self):
        # 信号 d1, 同日 d1 成交 → 违规
        signals = {'d1': ['A']}
        fills = {'d1': ['A']}
        rep = audit_execution_timing(signals, fills)
        assert len(rep['violations']) == 1
        assert rep['violations'][0]['date'] == 'd1'
        assert rep['compliant'] is False

    def test_no_fill_tomorrow(self):
        # 信号后次日无成交 → 不报违规 (可能下一日成交)
        signals = {'d1': ['A']}
        fills = {'d3': ['A']}  # 隔两日
        rep = audit_execution_timing(signals, fills)
        assert rep['violations'] == []
        assert rep['compliant'] is True

    def test_multiple_violations(self):
        signals = {'d1': ['A', 'B'], 'd2': ['C']}
        fills = {'d1': ['A'], 'd2': ['B', 'C']}
        rep = audit_execution_timing(signals, fills)
        assert len(rep['violations']) == 2  # A 同日, B 当日成交

    def test_empty(self):
        rep = audit_execution_timing({}, {})
        assert rep['violations'] == []
        assert rep['compliant'] is True


class TestSameDayCloseFill:
    def test_close_price_fill_detected(self):
        # 信号日 d1 用 d1 收盘价成交 → 违规
        signals = {'d1': {'A': 'close'}}  # A 用当日收盘成交
        fills = {'d1': {'A': 10.5}}        # A 在 d1 成交
        rep = detect_same_day_close_fill(signals, fills)
        assert len(rep['violations']) == 1
        assert rep['violations'][0]['symbol'] == 'A'

    def test_next_open_compliant(self):
        # 信号 d1, 次日 d2 开盘价成交 → 合规
        signals = {'d1': {'A': 'open'}}
        fills = {'d2': {'A': 10.2}}
        rep = detect_same_day_close_fill(signals, fills)
        assert rep['violations'] == []
        assert rep['compliant'] is True

    def test_mixed(self):
        signals = {'d1': {'A': 'close', 'B': 'open'}}
        fills = {'d1': {'A': 10.0}, 'd2': {'B': 11.0}}
        rep = detect_same_day_close_fill(signals, fills)
        assert len(rep['violations']) == 1
        assert rep['violations'][0]['symbol'] == 'A'


class TestSanitize:
    def test_delay_floor(self):
        # 延迟至少 1 天
        assert sanitize_execution_delay(0) == 1
        assert sanitize_execution_delay(-1) == 1

    def test_delay_kept(self):
        assert sanitize_execution_delay(2) == 2


class TestReport:
    def test_report_structure(self):
        signals = {'d1': ['A'], 'd2': ['B']}
        fills = {'d1': ['A'], 'd3': ['B']}
        rep = lookahead_audit_report(signals, fills)
        assert 'compliant' in rep
        assert 'violations' in rep
        assert 'total_signals' in rep
        assert 'total_fills' in rep
        assert rep['total_signals'] == 2

    def test_report_grade(self):
        # 有违规 → grade 含风险
        rep = lookahead_audit_report({'d1': ['A']}, {'d1': ['A']})
        assert rep['compliant'] is False
        assert '风险' in rep['note'] or '违规' in rep['note']
