"""v6.6 M3: 市值单位与多周期涨跌幅门禁 (T-6.6.21 ~ T-6.6.28)

用户原话: 「指数和个股展示蜡烛图的界面 需要显示总市值过亿的按亿为单位
          当日（周 月 季 年）涨跌幅度，鼠标悬浮后信息也要展示 注意小数点最多2位」

现场 bug (EVAL-v6.6 §3.1.3):
  ① 指数成交额显示「71,562 亿」而真实约 7,156 亿 —— **差 10 倍**。
     tushare amount 单位是**千元**, 千元→亿元应除 1e5, 代码写成 1e4。
  ② 蜡烛图界面缺失总市值（tushare total_mv 单位**万元**, 过亿需 /1e4）。
  ③ 只有当日涨跌幅, 缺周/月/季/年多周期口径, 且悬浮提示无这些信息。
  ④ 小数位: 全站 ≤2 位（用户明确要求）。

守护:
  A. 单位换算正确（千元→亿 /1e5, 万元→亿 /1e4）;
  B. 多周期区间口径: 基准=上一周期最后一个交易日收盘（决策 D3）;
  C. 过亿按亿显示, 未过亿按万, 均 ≤2 位小数;
  D. 后端提供 quote-summary, 前端蜡烛图页与 tooltip 均消费。

对应文档: docs/PRD-v6.6.md FR-6.6.5 / AC-13, §5 数据契约
          docs/DEV&TEST-PLAN-6.6.md TC-6.6.4.x
"""
import os
import sys

import pytest

BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, BASE)
sys.path.insert(0, os.path.join(BASE, "backend"))


def _fmt():
    """格式化纯函数模块（实现由 TDD 驱动）"""
    from market_quote_fmt import (  # noqa: F401
        amount_kyuan_to_yi, mv_wan_to_yi, fmt_yi, fmt_pct, period_change_pct,
    )
    return {
        "amount_kyuan_to_yi": amount_kyuan_to_yi,
        "mv_wan_to_yi": mv_wan_to_yi,
        "fmt_yi": fmt_yi,
        "fmt_pct": fmt_pct,
        "period_change_pct": period_change_pct,
    }


def test_module_exists():
    from market_quote_fmt import amount_kyuan_to_yi  # noqa: F401


# ── A. 单位换算 ──
def test_amount_kyuan_to_yi():
    """tushare amount 千元 → 亿元（除 1e5）"""
    f = _fmt()
    # 7,156 亿元 = 7.156e11 元 = 7.156e8 千元
    assert f["amount_kyuan_to_yi"](7.156e8) == pytest.approx(7156.0)
    # 现场错误值对照: 旧代码 /1e4 会得到 71560（10 倍虚高）
    assert f["amount_kyuan_to_yi"](7.156e8) != pytest.approx(71560.0)


def test_mv_wan_to_yi():
    """tushare total_mv 单位万元 → 亿元（除 1e4）"""
    f = _fmt()
    # 贵州茅台总市值约 1.8 万亿元 = 1.8e12 元 = 1.8e8 万元
    assert f["mv_wan_to_yi"](1.8e8) == pytest.approx(18000.0)
    # 30 亿市值 = 3e5 万元
    assert f["mv_wan_to_yi"](3e5) == pytest.approx(30.0)


def test_unit_conversion_handles_none():
    f = _fmt()
    assert f["amount_kyuan_to_yi"](None) is None
    assert f["mv_wan_to_yi"](None) is None


# ── C. 格式化 ≤2 位 ──
def test_fmt_yi_over_100m():
    f = _fmt()
    assert f["fmt_yi"](18000.0) == "18000.00亿"
    assert f["fmt_yi"](7156.0) == "7156.00亿"
    assert f["fmt_yi"](1.234) == "1.23亿", "小数位必须 ≤2"


def test_fmt_yi_under_100m_uses_wan():
    """未过亿按「万」显示（用户: 过亿的按亿为单位）"""
    f = _fmt()
    assert f["fmt_yi"](0.85) == "8500.00万"   # 0.85 亿 = 8500 万
    assert f["fmt_yi"](0.0012) == "12.00万"


def test_fmt_yi_none_and_invalid():
    f = _fmt()
    assert f["fmt_yi"](None) == "—"
    assert f["fmt_yi"]("abc") == "—"


def test_fmt_pct_two_decimals():
    f = _fmt()
    assert f["fmt_pct"](2.8149) == "+2.81%"
    assert f["fmt_pct"](-3.1567) == "-3.16%"
    assert f["fmt_pct"](0) == "0.00%"
    assert f["fmt_pct"](None) == "—"


def test_fmt_pct_never_exceeds_two_decimals():
    f = _fmt()
    for v in (1.005, 12.3456, -0.004, 99.999):
        out = f["fmt_pct"](v)
        if out == "—":
            continue
        dec = out.rstrip("%").lstrip("+-").split(".")
        assert len(dec) == 2 and len(dec[1]) <= 2, f"{v} → {out} 小数位超 2"


# ── B. 多周期区间口径 (决策 D3) ──
def test_period_change_pct_basic():
    """Natural: 最新收盘 vs 基准收盘"""
    f = _fmt()
    rows = [
        {"trade_date": "20260102", "close": 100.0},
        {"trade_date": "20260103", "close": 110.0},
    ]
    # 给定基准 100 → (110-100)/100*100 = 10%
    assert f["period_change_pct"](rows, base_close=100.0) == pytest.approx(10.0)


def test_period_change_pct_from_series():
    """只给序列时, 取序列首行为基准（序列应按日期升序）"""
    f = _fmt()
    rows = [
        {"trade_date": "20260102", "close": 50.0},
        {"trade_date": "20260105", "close": 55.0},
    ]
    assert f["period_change_pct"](rows, base_close=None) == pytest.approx(10.0)


def test_period_change_pct_insufficient_data():
    f = _fmt()
    assert f["period_change_pct"]([], None) is None
    assert f["period_change_pct"]([{"trade_date": "20260102", "close": 10.0}], None) is None


def test_period_change_pct_zero_base():
    f = _fmt()
    rows = [{"trade_date": "20260102", "close": 0.0}, {"trade_date": "20260103", "close": 10.0}]
    assert f["period_change_pct"](rows, base_close=0.0) is None, "基准为 0 不得除零"


def test_period_change_pct_sorts_input():
    """乱序输入也必须按日期升序取首尾（不能用传入顺序）"""
    f = _fmt()
    rows = [
        {"trade_date": "20260105", "close": 110.0},
        {"trade_date": "20260102", "close": 100.0},
    ]
    assert f["period_change_pct"](rows, base_close=None) == pytest.approx(10.0)


# ── D. 后端接口契约 ──
def test_quote_summary_endpoint_registered():
    src = open(os.path.join(BASE, "backend", "api", "v1", "market.py"), encoding="utf-8").read()
    assert "/quote-summary/" in src, "缺少 GET /api/market/quote-summary/{code} 端点"
    assert "quote_summary" in src, "缺少 quote_summary 实现引用"


def test_quote_summary_contract_shape():
    """契约: total_mv_yi / circ_mv_yi / changes{day,week,month,quarter,year}"""
    import inspect
    import market_quote_summary as mod
    fn = getattr(mod, "build_quote_summary", None)
    assert fn is not None, "缺少 build_quote_summary"
    src = inspect.getsource(fn)
    for field in ("total_mv_yi", "circ_mv_yi", "changes"):
        assert field in src, f"契约缺少字段 {field}"
    for period in ("day", "week", "month", "quarter", "year"):
        assert period in src, f"契约缺少周期 {period}"


# ── 真实数据形态回归（踩坑） ──
def test_accepts_echarts_array_rows():
    """K线真实形态是数组 [date, open, close, low, high, vol, ...], 索引 2 = 收盘。
    只支持 dict 会让多周期涨跌幅全变 None（实际踩到过）。"""
    import market_quote_summary as qs
    rows = [
        ["20260102", 100.0, 100.0, 99.0, 101.0, 1000],
        ["20260103", 100.0, 110.0, 99.0, 111.0, 1200],
    ]
    out = qs.build_quote_summary("600519.SH", kline_rows=rows)
    assert out["changes"]["day"] == pytest.approx(10.0), f"未解析数组行: {out['changes']}"


def test_index_gets_not_applicable_market_cap():
    """D2: 指数无总市值概念 → 显示「指数不适用」"""
    import market_quote_summary as qs
    out = qs.build_quote_summary("000001.SH", daily_basic={"total_mv": 1e9})
    assert out["is_index"] is True
    assert out["total_mv_text"] == "指数不适用"
    assert out["total_mv_yi"] is None


def test_stock_market_cap_wan_to_yi():
    """个股 total_mv 单位万元 → 亿元（茅台 ~1.74 万亿）"""
    import market_quote_summary as qs
    out = qs.build_quote_summary("600519.SH", daily_basic={"total_mv": 1.74e8})
    assert out["total_mv_yi"] == pytest.approx(17400.0)
    assert out["total_mv_text"] == "17400.00亿"


# ── 前端接线护栏 ──
def test_index_amount_uses_1e5_divisor():
    """T-6.6.21 现场 bug: tushare amount 千元 → 亿元须 /1e5（旧代码 /1e4 = 10 倍虚高）"""
    src = open(os.path.join(BASE, "frontend", "js", "components", "dialogs",
                            "index-detail.js"), encoding="utf-8").read()
    import re as _re
    assert "/ 100000" in src, "指数成交额未使用 1e5 除数（仍会 10 倍虚高）"
    # 注意 "amount / 10000" 是 "amount / 100000" 的子串, 必须用词边界精确匹配
    bad = [l.strip() for l in src.splitlines()
           if _re.search(r"amount\s*/\s*10000(?!0)", l)]
    assert not bad, f"仍存在错误的 1e4 除数: {bad}"


def test_index_detail_shows_market_cap_and_periods():
    src = open(os.path.join(BASE, "frontend", "js", "components", "dialogs",
                            "index-detail.js"), encoding="utf-8").read()
    assert "indexQuoteSummary" in src, "指数详情未接入行情摘要"
    assert "total_mv_text" in src, "指数详情未显示总市值（指数应显示「指数不适用」）"
    for label in ("当日", "近一周", "近一月", "近一季", "近一年"):
        assert label in src, f"指数详情缺少 {label} 涨跌幅"


def test_stock_detail_shows_market_cap_and_periods():
    src = open(os.path.join(BASE, "frontend", "js", "components", "dialogs",
                            "stock-detail.js"), encoding="utf-8").read()
    assert "stockQuoteSummary" in src, "个股详情未接入行情摘要"
    assert "总市值" in src and "total_mv_text" in src, "个股详情未显示总市值"
    for label in ("当日", "近一周", "近一月", "近一季", "近一年"):
        assert label in src, f"个股详情缺少 {label} 涨跌幅"


def test_kline_tooltip_includes_summary():
    """用户要求「鼠标悬浮后信息也要展示」"""
    src = open(os.path.join(BASE, "frontend", "js", "charts.js"), encoding="utf-8").read()
    assert "summary" in src, "K线 tooltip 未接摘要"
    assert "总市值: " in src, "tooltip 未展示总市值"
    assert "涨跌幅: " in src, "tooltip 未展示多周期涨跌幅"


def test_quote_summary_wired_three_layers():
    """三层接线纪律: 域导出 → app-logic 域解构 → qcState"""
    md = open(os.path.join(BASE, "frontend", "js", "app-logic", "market.js"), encoding="utf-8").read()
    assert md.count("indexQuoteSummary") >= 3, "market.js 导出不完整"
    dt = open(os.path.join(BASE, "frontend", "js", "app-logic", "detail.js"), encoding="utf-8").read()
    assert dt.count("stockQuoteSummary") >= 3, "detail.js 导出不完整"
    al = open(os.path.join(BASE, "frontend", "js", "app-logic.js"), encoding="utf-8").read()
    assert al.count("indexQuoteSummary") >= 2, "app-logic 未逐层透传 indexQuoteSummary"
    assert al.count("stockQuoteSummary") >= 2, "app-logic 未逐层透传 stockQuoteSummary"
    assert "getIndexQuoteSummary" in al, "缺少 getIndexQuoteSummary getter"
