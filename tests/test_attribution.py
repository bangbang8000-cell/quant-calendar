"""V5.2 T-5.2.5: 绩效归因测试 (TEST-PLAN 3.1 test_attribution.py)

Brinson 行业归因 (配置/选择/交互) + 因子归因 + 瀑布图数据。
"""
import pandas as pd
import numpy as np
import pytest

from attribution import (industry_attribution, brinson_attribution,
                         factor_attribution, build_waterfall)


class TestIndustryAttribution:
    def _h(self):
        # 2 日 × 2 股 持仓权重
        return pd.DataFrame({"600001.SH": [0.6, 0.5], "600002.SH": [0.4, 0.5]},
                            index=["20260101", "20260102"])

    def _r(self):
        return pd.DataFrame({"600001.SH": [0.02, 0.01], "600002.SH": [0.0, 0.03]},
                            index=["20260101", "20260102"])

    def _sector(self):
        return {"600001.SH": "银行", "600002.SH": "科技"}

    def test_industry_contribution_math(self):
        h, r, sec = self._h(), self._r(), self._sector()
        out = industry_attribution(h, r, sec)
        rows = {x["industry"]: x for x in out["industries"]}
        # 银行: 600001 权重×收益 逐日: 0.6*0.02 + 0.5*0.01 = 0.017
        assert rows["银行"]["contribution"] == pytest.approx(0.017, abs=1e-9)
        # 科技: 0.4*0.0 + 0.5*0.03 = 0.015
        assert rows["科技"]["contribution"] == pytest.approx(0.015, abs=1e-9)
        assert out["total"] == pytest.approx(0.032, abs=1e-9)

    def test_industry_weights_sum(self):
        out = industry_attribution(self._h(), self._r(), self._sector())
        assert sum(x["weight"] for x in out["industries"]) == pytest.approx(1.0, abs=1e-9)

    def test_unknown_sector_grouped(self):
        h, r = self._h(), self._r()
        out = industry_attribution(h, r, {"600001.SH": "银行"})  # 600002 无行业
        assert len(out["industries"]) == 2  # 银行 + 未分类

    def test_empty_returns(self):
        out = industry_attribution(self._h(),
                                   pd.DataFrame(columns=self._h().columns), self._sector())
        assert out["total"] == 0.0


class TestBrinson:
    def _data(self):
        # 组合 60/40, 基准 50/50, 单日
        h = pd.DataFrame({"A": [0.6], "B": [0.4]}, index=["d1"])
        bh = pd.DataFrame({"A": [0.5], "B": [0.5]}, index=["d1"])
        r = pd.DataFrame({"A": [0.10], "B": [0.02]}, index=["d1"])
        br = pd.DataFrame({"A": [0.08], "B": [0.03]}, index=["d1"])
        return h, bh, r, br

    def test_allocation_selection_interaction(self):
        h, bh, r, br = self._data()
        out = brinson_attribution(h, bh, r, br)
        # 配置: Σ(wp-wb)×Rb = (0.1*0.08) + (-0.1*0.03) = 0.005
        assert out["allocation"] == pytest.approx(0.005, abs=1e-9)
        # 选择 (Brinson 标准, 用基准权重): Σ wb×(Rp-Rb) = 0.5*0.02 + 0.5*(-0.01) = 0.005
        assert out["selection"] == pytest.approx(0.005, abs=1e-9)
        # 交互: Σ (wp-wb)×(Rp-Rb) = 0.1*0.02 + (-0.1)*(-0.01) = 0.003
        assert out["interaction"] == pytest.approx(0.003, abs=1e-9)
        # 总超额 = 配置+选择+交互
        assert out["excess"] == pytest.approx(out["allocation"] + out["selection"] + out["interaction"], abs=1e-9)

    def test_excess_matches_portfolio_minus_benchmark(self):
        h, bh, r, br = self._data()
        out = brinson_attribution(h, bh, r, br)
        port = (h.values * r.values).sum()
        bench = (bh.values * br.values).sum()
        assert out["excess"] == pytest.approx(port - bench, abs=1e-9)


class TestFactorAttribution:
    def test_reconstructs_returns(self):
        rng = np.random.default_rng(0)
        dates = ["2026010%d" % i for i in range(1, 6)]
        factors = ["momentum", "value"]
        f_ret = pd.DataFrame(rng.normal(0, 0.01, (5, 2)), index=dates, columns=factors)
        expos = pd.DataFrame(rng.uniform(-1, 1, (5, 2)), index=dates, columns=factors)
        port = (expos * f_ret).sum(axis=1)  # 精确: 无残差
        out = factor_attribution(port, expos, f_ret)
        assert out["residual_total"] == pytest.approx(0.0, abs=1e-9)
        assert out["explained"] == pytest.approx(1.0, abs=1e-9)

    def test_factor_contribution_math(self):
        expos = pd.DataFrame({"momentum": [1.0], "value": [2.0]}, index=["d1"])
        f_ret = pd.DataFrame({"momentum": [0.05], "value": [0.01]}, index=["d1"])
        port = pd.Series([0.07], index=["d1"])
        out = factor_attribution(port, expos, f_ret)
        assert out["factor_contributions"]["momentum"] == pytest.approx(0.05)
        assert out["factor_contributions"]["value"] == pytest.approx(0.02)

    def test_total_equals_sum_plus_residual(self):
        rng = np.random.default_rng(1)
        dates = ["d%d" % i for i in range(10)]
        fs = ["a", "b", "c"]
        f_ret = pd.DataFrame(rng.normal(0, 0.01, (10, 3)), index=dates, columns=fs)
        expos = pd.DataFrame(rng.uniform(-1, 1, (10, 3)), index=dates, columns=fs)
        port = (expos * f_ret).sum(axis=1) + rng.normal(0, 0.001, 10)
        out = factor_attribution(port, expos, f_ret)
        total = sum(out["factor_contributions"].values()) + out["residual_total"]
        assert total == pytest.approx(float(port.sum()), abs=1e-9)


class TestBacktestIntegration:
    def test_sdk_backtest_attaches_industry_attribution(self):
        """backtest_holdings(industry_map=...) → 结果含 attribution(行业+瀑布)"""
        import pandas as pd
        from strategy_sdk.backtest import backtest_holdings
        from cost_model import CostConfig, CostModel
        dates = ["20260101", "20260102", "20260103"]
        h = pd.DataFrame({"A": [1.0, 1.0, 1.0], "B": [0.0, 0.0, 0.0]}, index=dates)
        r = pd.DataFrame({"A": [0.01, 0.01, 0.01], "B": [0.0, 0.0, 0.0]}, index=dates)
        zero = CostConfig(0, 0, 0, 0, 0)
        res = backtest_holdings(h, r, cost_model=CostModel(zero),
                                industry_map={"A": "银行", "B": "科技"})
        assert res["success"] is True
        assert "attribution" in res
        assert res["attribution"]["total"] > 0
        assert res["attribution"]["waterfall"][-1]["is_total"] is True
        # 行业贡献只含 A (银行)
        assert res["attribution"]["industries"][0]["industry"] == "银行"

    def test_no_industry_map_skips(self):
        import pandas as pd
        from strategy_sdk.backtest import backtest_holdings
        dates = ["20260101", "20260102", "20260103"]
        h = pd.DataFrame({"A": [1.0, 1.0, 1.0]}, index=dates)
        r = pd.DataFrame({"A": [0.01, 0.01, 0.01]}, index=dates)
        res = backtest_holdings(h, r)
        assert "attribution" not in res


class TestWaterfall:
    def test_offset_accumulates(self):
        items = [{"label": "基准", "value": 0.10},
                 {"label": "配置", "value": 0.005},
                 {"label": "选择", "value": 0.008},
                 {"label": "总收益", "value": 0.113, "is_total": True}]
        wf = build_waterfall(items)
        # 第二项 offset = 第一项 value
        assert wf[1]["offset"] == pytest.approx(0.10, abs=1e-9)
        assert wf[2]["offset"] == pytest.approx(0.105, abs=1e-9)

    def test_total_anchor(self):
        items = [{"label": "A", "value": 0.02}, {"label": "B", "value": 0.03},
                 {"label": "总", "value": 0.05, "is_total": True}]
        wf = build_waterfall(items)
        assert wf[-1]["is_total"] is True

    def test_empty(self):
        assert build_waterfall([]) == []
