# -*- coding: utf-8 -*-
"""6.1.5 (E3): 热点计算 P95 基准 — 退化即红 (CI 性能门禁)

对高频纯计算函数 (结构化解析 / 归因趋势 / 批量导入解析) 做 P95 延迟基准。
环境无关 (无数据源/网络), 稳定可复现。
"""
import re
import time
import statistics

from eval_struct import parse_eval_structured
from attribution_trend import build_trend
from api.v1.watchlist import parse_stock_lines

# 阈值 (ms): 本机基准留 ~3 倍余量
P95_LIMIT_MS = 800

_SAMPLE = '{"conclusion": "看多", "evidence": ["a", "b"], "risk": "r", "score": 82, "signal": "看多"}'
_TREND_RECORDS = [{"direction": "in" if i % 2 == 0 else "out",
                   "factors": ["动量", "质量" if i % 3 else "估值"], "strategy": "多因子"} for i in range(5000)]
_IMPORT_TEXT = "\n".join("60003%d %s" % (i % 10, "股票%d" % i) for i in range(2000))


def _p95_ms(fn, times=200):
    laps = []
    for _ in range(times):
        t0 = time.perf_counter()
        fn()
        laps.append((time.perf_counter() - t0) * 1000)
    return statistics.quantiles(laps, n=20)[18]


def test_eval_struct_p95():
    p95 = _p95_ms(lambda: parse_eval_structured(_SAMPLE))
    assert p95 < P95_LIMIT_MS, f"eval_struct P95={p95:.1f}ms 超限 {P95_LIMIT_MS}ms"


def test_attribution_trend_p95():
    p95 = _p95_ms(lambda: build_trend(_TREND_RECORDS), times=50)
    assert p95 < P95_LIMIT_MS, f"attribution_trend P95={p95:.1f}ms 超限 {P95_LIMIT_MS}ms"


def test_import_parse_p95():
    p95 = _p95_ms(lambda: parse_stock_lines(_IMPORT_TEXT), times=50)
    assert p95 < P95_LIMIT_MS, f"import_parse P95={p95:.1f}ms 超限 {P95_LIMIT_MS}ms"


# ─── 6.3.2 (T-6.3.2.5): 拆分后新模块纳入热点门禁 ─────────────

_LADDER_ROWS = [{"boards": (i % 7) + 1} for i in range(5000)]


def test_shortterm_ladder_p95():
    """短线复盘连板梯队/断层检测 (拆分后新模块) — 全市场涨停池规模"""
    from shortterm.ladder import tier_counts, ladder_gap
    p95_tier = _p95_ms(lambda: tier_counts(_LADDER_ROWS), times=50)
    p95_gap = _p95_ms(lambda: ladder_gap(_LADDER_ROWS), times=50)
    assert p95_tier < P95_LIMIT_MS, f"ladder.tier_counts P95={p95_tier:.1f}ms 超限"
    assert p95_gap < P95_LIMIT_MS, f"ladder.ladder_gap P95={p95_gap:.1f}ms 超限"


def test_datasource_column_mapping_p95():
    """数据源列名映射 (拆分后新模块) — 2000 行 DataFrame 全列映射"""
    try:
        import pandas as pd
    except ImportError:
        return  # 环境缺 pandas 时跳过 (CI 已装)
    from data_sources._mapping import _map_akshare_columns
    df = pd.DataFrame({
        "代码": ["60000%d" % (i % 10) for i in range(2000)],
        "名称": ["股票%d" % i for i in range(2000)],
        "涨跌幅": [1.23 * (i % 5) for i in range(2000)],
        "最新价": [10.0 + i for i in range(2000)],
    })
    col_map = {"代码": "ts_code", "名称": "name", "涨跌幅": "pct_chg", "最新价": "price"}
    p95 = _p95_ms(lambda: _map_akshare_columns(df.copy(), col_map), times=50)
    assert p95 < P95_LIMIT_MS, f"mapping._map_akshare_columns P95={p95:.1f}ms 超限"


def test_ai_builtin_eval_p95():
    """AI 内置评分引擎 (LLM 失败回退路径, 拆分后新模块)"""
    from ai_eval._eval_builtin import AIEvalBuiltinMixin
    eng = AIEvalBuiltinMixin()
    md = {"has_kline": True,
          "latest": {"close": 12.8, "pct_chg": 2.4, "rsi": 58, "macd": {"dif": 0.1}},
          "ma_alignment": "多头排列", "pct_5d": 5.0, "pct_20d": 8.0}
    p95 = _p95_ms(lambda: eng._builtin_evaluate("000001.SZ", "平安银行", md), times=50)
    assert p95 < P95_LIMIT_MS, f"ai_eval._builtin_evaluate P95={p95:.1f}ms 超限"


# ─── 6.3.2 (T-6.3.2.5): 慢查询索引命中复核 ────────────────

_INDEXED_TABLES = {
    "chat_history": "idx_chat_history_username_stock",
    "watchlist": "idx_watchlist_username_added",
    "portfolio_positions": "idx_portfolio_positions_user",
    "portfolio_trades": "idx_portfolio_trades_user_time",
    "api_keys": "idx_api_keys_prefix",
    "webhook_subscriptions": "idx_webhook_subscriptions_enabled",
    "event_delivery_log": "idx_event_delivery_log_event",
    "alert_rules": "idx_alert_rules_user",
}


def test_key_tables_have_indexes():
    """高频查询表须建索引 (慢查询复核): db.py 定义的表都有配套索引"""
    src = open(_db_schema_path(), encoding="utf-8").read()
    missing = []
    for table, index in _INDEXED_TABLES.items():
        assert re.search(r"CREATE TABLE IF NOT EXISTS %s" % table, src), \
            "db.py 缺失表 %s" % table
        if not re.search(r"CREATE(?: UNIQUE)? INDEX IF NOT EXISTS %s" % index, src):
            missing.append("%s(%s)" % (table, index))
    assert not missing, "以下高频查询表缺索引 (慢查询风险): " + ", ".join(missing)


def _db_schema_path():
    import os
    base = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    return os.path.join(base, "backend", "db.py")
