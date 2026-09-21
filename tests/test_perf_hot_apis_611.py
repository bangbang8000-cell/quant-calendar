# -*- coding: utf-8 -*-
"""6.1.5 (E3): 热点计算 P95 基准 — 退化即红 (CI 性能门禁)

对高频纯计算函数 (结构化解析 / 归因趋势 / 批量导入解析) 做 P95 延迟基准。
环境无关 (无数据源/网络), 稳定可复现。
"""
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
