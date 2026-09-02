"""V5.0.3 T-5.0.33: 风控规则引擎测试 (TEST-PLAN 4.1 test_risk_rules.py)

集中度/止损止盈/回撤熔断触发与动作; 边界 (刚好触线/未触线/已禁用) 逐一覆盖。
"""
import pytest

from rules import (make_rule, evaluate_rules, check_concentration,
                   check_stop_loss, check_take_profit, check_drawdown_circuit)


def _state(weights=None, sectors=None, day_return=0.0, equity=None, losses=None):
    return {"weights": weights or {}, "sector_weights": sectors or {},
            "day_return": day_return, "equity": equity or [1.0],
            "losses": losses or {}}


class TestConcentration:
    def test_stock_over_limit_triggers(self):
        state = _state(weights={"A": 0.25})
        r = check_concentration(state["weights"], state["sector_weights"], 0.2, 0.3)
        assert r["triggered"] is True
        assert r["action"] == "reduce"

    def test_stock_exactly_at_limit(self):
        state = _state(weights={"A": 0.2})
        r = check_concentration(state["weights"], state["sector_weights"], 0.2, 0.3)
        assert r["triggered"] is True

    def test_stock_below_limit_ok(self):
        state = _state(weights={"A": 0.15})
        r = check_concentration(state["weights"], state["sector_weights"], 0.2, 0.3)
        assert r["triggered"] is False

    def test_sector_over_limit_triggers(self):
        state = _state(weights={"A": 0.1, "B": 0.1}, sectors={"银行": 0.32})
        r = check_concentration(state["weights"], state["sector_weights"], 0.2, 0.3)
        assert r["triggered"] is True

    def test_sector_below_ok(self):
        state = _state(sectors={"银行": 0.28})
        r = check_concentration(state["weights"], state["sector_weights"], 0.2, 0.3)
        assert r["triggered"] is False

    def test_empty_ok(self):
        r = check_concentration({}, {}, 0.2, 0.3)
        assert r["triggered"] is False


class TestStopLoss:
    def test_day_loss_over_triggers(self):
        state = _state(day_return=-0.04)
        r = check_stop_loss(state["day_return"], state["losses"], 0.03, 0.08)
        assert r["triggered"] is True
        assert r["action"] == "stop"

    def test_day_loss_exactly_at_threshold(self):
        r = check_stop_loss(-0.03, {}, 0.03, 0.08)
        assert r["triggered"] is True

    def test_day_loss_below_ok(self):
        r = check_stop_loss(-0.02, {}, 0.03, 0.08)
        assert r["triggered"] is False

    def test_single_position_loss_triggers(self):
        r = check_stop_loss(0.0, {"A": -0.10}, 0.03, 0.08)
        assert r["triggered"] is True
        assert r["action"] == "stop"

    def test_single_loss_below_ok(self):
        r = check_stop_loss(0.0, {"A": -0.05}, 0.03, 0.08)
        assert r["triggered"] is False

    def test_gain_day_ok(self):
        r = check_stop_loss(0.02, {}, 0.03, 0.08)
        assert r["triggered"] is False


class TestTakeProfit:
    def test_profit_over_triggers(self):
        r = check_take_profit(0.06, 0.05)
        assert r["triggered"] is True
        assert r["action"] == "take_profit"

    def test_profit_exactly_at_threshold(self):
        r = check_take_profit(0.05, 0.05)
        assert r["triggered"] is True

    def test_profit_below_ok(self):
        r = check_take_profit(0.03, 0.05)
        assert r["triggered"] is False

    def test_loss_day_ok(self):
        r = check_take_profit(-0.01, 0.05)
        assert r["triggered"] is False


class TestDrawdownCircuit:
    def test_dd_over_triggers_reduce(self):
        r = check_drawdown_circuit([1.0, 1.1, 0.9, 0.85], 0.1, "reduce")
        assert r["triggered"] is True
        assert r["action"] == "reduce"

    def test_dd_severe_triggers_stop(self):
        r = check_drawdown_circuit([1.0, 0.8], 0.1, "stop")
        assert r["triggered"] is True
        assert r["action"] == "stop"

    def test_dd_below_ok(self):
        r = check_drawdown_circuit([1.0, 1.05, 0.97], 0.1, "reduce")
        assert r["triggered"] is False

    def test_dd_exactly_at_trigger(self):
        r = check_drawdown_circuit([1.0, 0.9], 0.1, "reduce")
        assert r["triggered"] is True

    def test_rising_equity_ok(self):
        r = check_drawdown_circuit([1.0, 1.02, 1.05], 0.1, "reduce")
        assert r["triggered"] is False


class TestEngine:
    def _rules(self):
        return [
            make_rule("r1", "concentration", max_stock_weight=0.2, max_sector_weight=0.3),
            make_rule("r2", "stop_loss", single_loss_threshold=0.08, day_loss_threshold=0.03),
            make_rule("r3", "take_profit", day_profit_threshold=0.05),
            make_rule("r4", "drawdown_circuit", trigger=0.1, action="reduce"),
        ]

    def test_all_clean_no_trigger(self):
        state = _state(weights={"A": 0.1}, day_return=0.01, equity=[1.0, 1.02])
        out = evaluate_rules(state, self._rules())
        assert [r["triggered"] for r in out] == [False] * 4

    def test_rule_ids_present(self):
        state = _state(weights={"A": 0.5}, day_return=-0.05, equity=[1.0, 0.7])
        out = evaluate_rules(state, self._rules())
        ids = {r["rule_id"] for r in out}
        assert ids == {"r1", "r2", "r3", "r4"}

    def test_disabled_rule_skipped(self):
        rules = [make_rule("r1", "concentration", enabled=False, max_stock_weight=0.2)]
        state = _state(weights={"A": 0.9})
        out = evaluate_rules(state, rules)
        assert out[0]["triggered"] is False

    def test_severity_high_for_circuit(self):
        state = _state(weights={"A": 0.1}, day_return=0.0, equity=[1.0, 0.7])
        out = evaluate_rules(state, self._rules())
        dd = next(r for r in out if r["type"] == "drawdown_circuit")
        assert dd["severity"] == "high"

    def test_multiple_triggers(self):
        state = _state(weights={"A": 0.9}, day_return=-0.05, equity=[1.0, 0.6])
        out = evaluate_rules(state, self._rules())
        assert sum(1 for r in out if r["triggered"]) >= 3

    def test_unknown_rule_type_skipped(self):
        rules = [make_rule("x1", "no_such_type")]
        out = evaluate_rules(_state(), rules)
        assert out == []

    def test_message_nonempty_when_triggered(self):
        state = _state(weights={"A": 0.9})
        out = evaluate_rules(state, self._rules())
        tr = [r for r in out if r["triggered"]]
        assert tr and all(r.get("message") for r in tr)
