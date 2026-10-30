"""v6.6 M2: 美林时钟宏观指标抓取健壮性门禁 (T-6.6.8 ~ T-6.6.14)

现场 (EVAL-v6.6 §3.1.2): 「美林时钟的历史和现状需要重新评估 计算和更新」。
实测根因 (2026-10-30, akshare 真实返回):
  ① PMI  期望列「制造业」      实际「制造业-指数」        → KeyError/取 0
  ② CPI  期望列「全国」        实际「今值」              → 取 0
  ③ PPI  期望列「全国」        实际「今值」              → 取 0
  ④ GDP  期望列「国内生产总值同比增长」 实际「国内生产总值-同比增长」 → 取 0
  ⑤ GDP  数据是**降序**(2006 在前) → iloc[-1] 取到 2006 年
  ⑥ M2   期望「M2同比」       实际「货币和准货币(M2)-同比增长」 → 取 0
  ⑦ 致命: 取不到时写 0 并 update() 覆盖掉合理默认值 → 全场指标变 0 → 阶段判定失真

守护四条不变量:
  A. 列名必须走多候选回退链（akshare 列名会漂移）；
  B. 时间序列必须按时间升序后取最新（不能假设顺序）；
  C. 拿不到/NaN/0 一律**不得写入**（保留默认值或标注缺失）；
  D. 必须产出 quality/missing 元信息，让前端能诚实展示数据可信度。

对应文档: docs/PRD-v6.6.md FR-6.6.3 / AC-9, AC-10
          docs/DEV&TEST-PLAN-6.6.md TC-6.6.3.1~TC-6.6.3.9
"""
import os
import sys

import pytest

BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, BASE)
sys.path.insert(0, os.path.join(BASE, "backend"))

pd = pytest.importorskip("pandas")


# ── 被测纯函数（实现由 TDD 驱动，缺失即红） ──
def _load_helpers():
    from merrill_clock import _indicators as ind
    return ind


def test_helpers_exist():
    """列名回退/取最新值/有效性判定必须作为可单测的独立函数存在"""
    ind = _load_helpers()
    for fn in ("_pick_column", "_latest_numeric"):
        assert hasattr(ind, fn), f"缺少 {fn}（列名漂移修复的核心）"


# ── A. 列名多候选回退 ──
@pytest.mark.parametrize("candidates,columns,expected", [
    # PMI: 新旧两代列名
    (["制造业", "制造业-指数"], ["月份", "制造业-指数", "非制造业-指数"], "制造业-指数"),
    # CPI/PPI: 「全国」→「今值」
    (["全国", "今值"], ["商品", "日期", "今值", "预测值", "前值"], "今值"),
    # GDP: 有无连字符
    (["国内生产总值同比增长", "国内生产总值-同比增长"], ["季度", "国内生产总值-同比增长"], "国内生产总值-同比增长"),
    # M2
    (["M2同比", "货币和准货币(M2)-同比增长"], ["月份", "货币和准货币(M2)-同比增长"], "货币和准货币(M2)-同比增长"),
    # 首选存在时优先用首选
    (["全国", "今值"], ["全国", "今值"], "全国"),
    # 全不匹配 → None
    (["不存在"], ["a", "b"], None),
])
def test_pick_column_fallback(candidates, columns, expected):
    ind = _load_helpers()
    assert ind._pick_column(columns, candidates) == expected


def test_pick_column_handles_empty():
    ind = _load_helpers()
    assert ind._pick_column([], ["a"]) is None
    assert ind._pick_column(None, ["a"]) is None


# ── B. 时间序列取最新（不能假设升序） ──
def test_latest_numeric_descending_frame():
    """GDP 帧是降序（2006 在前），必须取到最新季度而不是 2006 年"""
    ind = _load_helpers()
    df = pd.DataFrame({
        "季度": ["2026年第1季度", "2025年第4季度", "2006年第1季度"],
        "国内生产总值-同比增长": [5.3, 5.2, 12.4],
    })
    val = ind._latest_numeric(df, ["国内生产总值同比增长", "国内生产总值-同比增长"])
    assert val == pytest.approx(5.3), f"应取最新季度 5.3，实际 {val}（降序未处理会取到 2006 年）"


def test_latest_numeric_ascending_frame():
    ind = _load_helpers()
    df = pd.DataFrame({"今值": [0.1, 0.5, 0.8]})
    assert ind._latest_numeric(df, ["全国", "今值"]) == pytest.approx(0.8)


def test_latest_numeric_skips_nan_tail():
    """akshare 最新一行常是 NaN（未公布），必须回退到最近的有效值"""
    ind = _load_helpers()
    df = pd.DataFrame({"今值": [0.1, 0.5, float("nan")]})
    assert ind._latest_numeric(df, ["全国", "今值"]) == pytest.approx(0.5)


def test_latest_numeric_rejects_zero_and_none():
    """0 与不可解析值都不算有效数据（0 会污染阶段判定）"""
    ind = _load_helpers()
    assert ind._latest_numeric(pd.DataFrame({"今值": [0.0]}), ["今值"]) is None
    assert ind._latest_numeric(pd.DataFrame({"今值": ["--"]}), ["今值"]) is None
    assert ind._latest_numeric(pd.DataFrame(), ["今值"]) is None
    assert ind._latest_numeric(None, ["今值"]) is None


# ── C. 绝不写入 0 / 缺失必须留痕 ──
def test_merge_rejects_zero_never_overwrites_defaults():
    """核心不变量: 真实数据里的 0 不得覆盖合理默认值"""
    ind = _load_helpers()
    defaults = {"pmi": 50.8, "cpi": 0.8}
    merged = ind._merge_macro(defaults, {"pmi": 0, "cpi": 0.0})
    assert merged["pmi"] == pytest.approx(50.8), "0 覆盖了默认 PMI"
    assert merged["cpi"] == pytest.approx(0.8), "0 覆盖了默认 CPI"


def test_merge_applies_real_values():
    ind = _load_helpers()
    merged = ind._merge_macro({"pmi": 50.8, "cpi": 0.8}, {"pmi": 49.8, "cpi": 0.2})
    assert merged["pmi"] == pytest.approx(49.8)
    assert merged["cpi"] == pytest.approx(0.2)


def test_merge_ignores_none_and_unknown_keys():
    ind = _load_helpers()
    merged = ind._merge_macro({"pmi": 50.8}, {"pmi": None, "不存在的字段": 1})
    assert merged["pmi"] == pytest.approx(50.8)


# ── D. 数据质量元信息 ──
def test_quality_metadata_present():
    ind = _load_helpers()
    out = ind._merge_macro(
        {"pmi": 50.8, "cpi": 0.8, "ppi": 0.3},
        {"pmi": 49.8},
        track_missing=True,
    )
    assert "_quality" in out, "缺少数据质量元信息"
    q = out["_quality"]
    assert "real" in q and "missing" in q, "质量元信息需区分 real / missing"
    assert "pmi" in q["real"], "pmi 来自真实数据应记为 real"
    assert "cpi" in q["missing"], "cpi 回退默认值应记为 missing"


def test_fetch_returns_none_when_akshare_unavailable(monkeypatch):
    """akshare 不可用 → 返回 None（走默认值+漂移），绝不返回全 0 字典"""
    ind = _load_helpers()
    import builtins
    real_import = builtins.__import__

    def _deny(name, *a, **kw):
        if name == "akshare":
            raise ImportError("blocked for test")
        return real_import(name, *a, **kw)

    monkeypatch.setattr(builtins, "__import__", _deny)
    # 真实类名是 ClockIndicatorsMixin（此前按 MacroIndicators/MerrillIndicators 查找,
    # 找不到就 skip —— 等于该护栏长期空转。改为直接实例化真实类。
    inst = ind.ClockIndicatorsMixin()
    assert inst._fetch_real_macro_data() is None, "akshare 不可用时应返回 None 而非抛错/返回脏数据"


# ── 现有 AR/阶段判定不得因缺失数据崩溃 ──
def test_defaults_survive_when_no_real_data(monkeypatch):
    """无真实数据时，指标必须仍是合理量级（不能是 0）"""
    # 用**组装完整**的 MerrillClock（ClockIndicatorsMixin 只是其中之一,
    # 单实例化会缺 _apply_indicator_drift/_save_cache）
    from merrill_clock import MerrillClock
    inst = MerrillClock()
    # 真实方法名是 get_economic_indicators（此前按 get_indicators/get_current_indicators 查找）
    monkeypatch.setattr(inst, "_fetch_real_macro_data", lambda: None, raising=False)
    # 避开磁盘缓存（否则读到别的用例写入的历史缓存, 测不到「无真实数据」路径）
    monkeypatch.setattr(type(inst), "cache", {}, raising=False)
    inst.cache = {}
    data = inst.get_economic_indicators()
    for key in ("pmi", "cpi", "ppi", "gdp_growth", "m2_growth", "lpr_1y", "lpr_5y"):
        assert key in data, f"缺少指标 {key}"
        assert data[key] > 0, f"{key} 退化为 0（会污染阶段判定）"


# ── T-6.6.41: 降级结果不得整天有效（一次网络抖动不能污染全天数据）──
def test_degraded_result_uses_short_ttl_not_one_day():
    """抓取失败退回默认值时, 缓存 TTL 必须远短于真实数据的 86400s。

    现场根因: 启动时 akshare 抖动一次, 「默认值+漂移」被当作真实数据缓存 86400s,
    前端整天看到 PMI 51.31 / LPR 3.1 这类与真实值无关的数字, 必须重启才自愈。
    """
    from merrill_clock import MerrillClock
    import merrill_clock._indicators as ind_mod
    assert hasattr(ind_mod, "DEGRADED_CACHE_TTL"), "缺少 DEGRADED_CACHE_TTL 常量"
    assert ind_mod.DEGRADED_CACHE_TTL < 86400, "降级 TTL 必须远短于一天"
    assert ind_mod.DEGRADED_CACHE_TTL <= 3600, \
        f"降级 TTL {ind_mod.DEGRADED_CACHE_TTL}s 过长, 自愈太慢（建议 ≤1h）"

    inst = MerrillClock()
    inst.cache = {}
    monkeypatch_target = inst
    # 强制走降级分支
    inst._fetch_real_macro_data = lambda: None
    data = inst.get_economic_indicators()
    assert data.get("_degraded") is True, "降级结果必须显式标记 _degraded"
    assert (data.get("_quality") or {}).get("degraded") is True
    assert monkeypatch_target is inst


# ── T-6.6.42: missing 清单不得混入元字段 ──
def test_missing_excludes_meta_fields():
    """date/update_time 等元字段不是宏观指标, 不得计入 missing。

    否则「缺失指标」清单虚高(实测多出 3 项), 掩盖真正的缺失项。
    """
    ind = _load_helpers()
    out = ind._merge_macro(
        {"date": "2026-10-30", "update_time": "x", "data_source": "y",
         "pmi": 50.8, "cpi": 0.5, "ppi": -1.0},
        {"pmi": 50.1},
        track_missing=True,
    )
    missing = out["_quality"]["missing"]
    assert out["_quality"]["real"] == ["pmi"]
    assert "date" not in missing, "date 是元字段, 不应计入 missing"
    assert "update_time" not in missing
    assert "data_source" not in missing
    assert set(missing) == {"cpi", "ppi"}, f"真实缺失项应为 cpi/ppi, 实际 {missing}"
