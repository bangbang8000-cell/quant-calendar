"""V5.0.1 T-5.0.12: 数据质量规则引擎测试 (TEST-PLAN 2.1 test_data_quality.py)

规则: 缺数 / 异常值 / 复权一致 / 停牌 / 交易日对齐; 质量分 0-100 + 等级 A-D。
专项: 注入缺数/异常值 → 质量分下降 (与 5.0 告警联动)。
"""
import pytest

from data_quality import (DataQualityError, check_series, score_series, grade_of)


def _rows(n=20, start="2026-08-03", close=10.0, vol=1000):
    """生成仅含工作日的行情序列; close 逐行微涨避免误触横盘规则"""
    from datetime import date, timedelta
    out = []
    d = date.fromisoformat(start)
    i = 0
    while len(out) < n:
        if d.weekday() < 5:
            c = close + i * 0.05
            out.append({"trade_date": d.isoformat(), "open": c, "high": c + 0.2,
                        "low": c - 0.2, "close": c, "volume": vol, "amount": vol * c})
            i += 1
        d += timedelta(days=1)
    return out


def _weekdays(n=20, start="2026-08-01"):
    from datetime import date, timedelta
    out = []
    d = date.fromisoformat(start)
    while len(out) < n:
        if d.weekday() < 5:
            out.append(d.isoformat())
        d += timedelta(days=1)
    return out


# ═══ 缺数规则 ═══

class TestRuleMissing:
    def test_no_gap_clean(self):
        rows = _rows(10)
        exp = [r["trade_date"] for r in rows]
        assert check_series(rows, expected_trade_dates=exp) == []

    def test_missing_day_flagged(self):
        rows = _rows(10)
        exp = list(rows)  # copy
        rows = rows[:5] + rows[6:]  # 缺第 6 天
        exp_dates = [r["trade_date"] for r in exp]
        issues = check_series(rows, expected_trade_dates=exp_dates)
        assert any(i["rule"] == "missing" for i in issues)

    def test_no_expected_skips_rule(self):
        assert check_series(_rows(10), expected_trade_dates=None) == []

    def test_missing_ratio_affects_severity(self):
        rows = _rows(20)
        exp_dates = [r["trade_date"] for r in rows]
        half = rows[:10]  # 缺一半
        issues = check_series(half, expected_trade_dates=exp_dates)
        miss = [i for i in issues if i["rule"] == "missing"]
        assert miss and miss[0]["severity"] in ("medium", "high")

    def test_single_gap_low_severity(self):
        rows = _rows(20)
        exp_dates = [r["trade_date"] for r in rows]
        rows = rows[:9] + rows[10:]  # 缺 1 天
        issues = check_series(rows, expected_trade_dates=exp_dates)
        miss = [i for i in issues if i["rule"] == "missing"]
        assert miss and miss[0]["severity"] == "low"


# ═══ 异常值规则 ═══

class TestRuleAnomaly:
    def test_normal_clean(self):
        assert check_series(_rows(10)) == []

    def test_high_below_low(self):
        rows = _rows(5)
        rows[2]["high"] = 9.0
        rows[2]["low"] = 10.5
        issues = check_series(rows)
        assert any(i["rule"] == "anomaly" and "high" in i["detail"] for i in issues)

    def test_close_outside_range(self):
        rows = _rows(5)
        rows[3]["close"] = 25.0  # 远超 high
        issues = check_series(rows)
        assert any(i["rule"] == "anomaly" for i in issues)

    def test_negative_price(self):
        rows = _rows(5)
        rows[1]["close"] = -5.0
        issues = check_series(rows)
        assert any(i["rule"] == "anomaly" for i in issues)

    def test_zero_close(self):
        rows = _rows(5)
        rows[4]["close"] = 0.0
        issues = check_series(rows)
        assert any(i["rule"] == "anomaly" for i in issues)

    def test_extreme_return_flagged(self):
        rows = _rows(10)
        rows[5]["close"] = rows[4]["close"] * 1.5  # 单日 +50%
        issues = check_series(rows)
        assert any(i["rule"] == "anomaly" and "回报" in i["detail"] for i in issues)


# ═══ 复权一致规则 ═══

class TestRuleAdjustment:
    def test_consistent_adj_clean(self):
        rows = _rows(5)
        for i, r in enumerate(rows):
            r["adj_factor"] = 1.0 + i * 0.01
        assert check_series(rows) == []

    def test_adj_factor_jump_flagged(self):
        rows = _rows(5)
        for i, r in enumerate(rows):
            r["adj_factor"] = 1.0
        rows[3]["adj_factor"] = 1.5  # 无公告式跳变
        issues = check_series(rows)
        assert any(i["rule"] == "adjustment" for i in issues)

    def test_no_adj_field_skips(self):
        assert check_series(_rows(5)) == []

    def test_small_adj_change_ok(self):
        rows = _rows(5)
        for i, r in enumerate(rows):
            r["adj_factor"] = 1.0 + i * 0.001  # 微幅变化
        assert check_series(rows) == []


# ═══ 停牌规则 ═══

class TestRuleSuspension:
    def test_normal_clean(self):
        assert check_series(_rows(10)) == []

    def test_long_flat_flagged(self):
        rows = _rows(15)
        for r in rows[5:]:
            r["close"] = rows[4]["close"]
            r["volume"] = 0
        issues = check_series(rows)
        assert any(i["rule"] == "suspension" for i in issues)

    def test_zero_volume_stretch(self):
        rows = _rows(10)
        for r in rows[3:8]:
            r["volume"] = 0
        issues = check_series(rows)
        assert any(i["rule"] == "suspension" for i in issues)

    def test_short_flat_clean(self):
        rows = _rows(10)
        rows[4]["close"] = rows[3]["close"]
        rows[4]["volume"] = 0  # 单日停牌不判
        assert check_series(rows) == []


# ═══ 交易日对齐规则 ═══

class TestRuleAlignment:
    def test_aligned_clean(self):
        """交易日对齐: 真实行情序列(仅工作日) + 预期工作日 → 无对齐问题"""
        from datetime import date, timedelta
        aligned_dates = []
        d = date(2026, 8, 3)
        while len(aligned_dates) < 10:
            if d.weekday() < 5:
                aligned_dates.append(d.isoformat())
            d += timedelta(days=1)
        rows = [{"trade_date": dt, "open": 10.0 + i * 0.05, "high": 10.2 + i * 0.05,
                 "low": 9.8 + i * 0.05, "close": 10.0 + i * 0.05, "volume": 1000,
                 "amount": 10000.0 + i * 50}
                for i, dt in enumerate(aligned_dates)]
        assert check_series(rows, expected_trade_dates=aligned_dates) == []

    def test_non_trading_date_flagged(self):
        rows = _rows(10)
        rows[3]["trade_date"] = "2026-08-08"  # 周六
        issues = check_series(rows)
        assert any(i["rule"] == "alignment" for i in issues)


# ═══ 质量分 / 等级 ═══

class TestScore:
    def test_perfect_score(self):
        s = score_series(_rows(20))
        assert s["score"] == 100 and s["grade"] == "A" and s["issues"] == []

    def test_issues_lower_score(self):
        rows = _rows(20)
        rows[2]["high"] = 9.0
        rows[2]["low"] = 10.5  # 异常
        s = score_series(rows)
        assert s["score"] < 100

    def test_injected_missing_and_anomaly_drops(self):
        """专项: 注入缺数+异常值 → 质量分显著下降"""
        rows = _rows(20)
        good = score_series(rows)["score"]
        rows2 = rows[:8] + rows[10:]  # 缺 2 天
        rows2[5]["close"] = -1.0  # 负价格
        bad = score_series(rows2)["score"]
        assert bad < good

    def test_grade_boundaries(self):
        assert grade_of(100) == "A" and grade_of(90) == "A"
        assert grade_of(89) == "B" and grade_of(75) == "B"
        assert grade_of(74) == "C" and grade_of(60) == "C"
        assert grade_of(59) == "D"

    def test_empty_rows_zero(self):
        s = score_series([])
        assert s["score"] == 0 and s["grade"] == "D"

    def test_score_bounded_below_zero(self):
        rows = _rows(20)
        for r in rows:
            r["high"] = 0.0
            r["low"] = 100.0  # 每行都异常
        s = score_series(rows)
        assert s["score"] >= 0


# ═══ API ═══

class TestQualityApi:
    def test_anonymous_rejected(self):
        from main_new import app
        from fastapi.testclient import TestClient
        c = TestClient(app)
        assert c.get("/api/quality/score?symbol=000001.SZ").status_code in (401, 403)

    def test_admin_can_read_score(self):
        from main_new import app
        from auth import create_access_token
        from fastapi.testclient import TestClient
        token = create_access_token({"sub": "admin", "role": "admin"})
        c = TestClient(app)
        c.headers.update({"Authorization": "Bearer " + token})
        r = c.get("/api/quality/score?symbol=000001.SZ")
        assert r.status_code == 200, r.text
        data = r.json()["data"]
        assert "score" in data and "grade" in data and "issues" in data

    def test_report_contains_rules(self):
        from data_quality import _RULES
        names = {r["name"] for r in _RULES}
        assert {"missing", "anomaly", "adjustment", "suspension", "alignment"} <= names

    def test_missing_symbol_422(self):
        from main_new import app
        from auth import create_access_token
        from fastapi.testclient import TestClient
        token = create_access_token({"sub": "admin", "role": "admin"})
        c = TestClient(app)
        c.headers.update({"Authorization": "Bearer " + token})
        assert c.get("/api/quality/score").status_code == 422
