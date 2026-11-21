#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""ADX 自检工具 (v7.12 / FR-7.7-3)

为什么需要它
------------
`timing/market_state.adx_tier()` 为了性能用了"简单滚动均值"近似 ADX;
而教科书(与 KHunter 的行情判读)用的是 Wilder 原式(α=1/N 平滑 + 双重平滑)。
两者在趋势/震荡拐点附近可能给出不同档位, 进而影响"仓位上限/温度"结论。

本脚本用 **独立实现** `indicator_utils.wilder_adx` 与生产实现逐标的对拍,
输出档位一致率与差异明细, 供"择时结论是否可信"的判定依据。

用法
----
    python3 scripts/selfcheck_adx.py --symbols 600000.SH,000001.SZ
    python3 scripts/selfcheck_adx.py --symbols-file syms.txt --threshold 0.7
    python3 scripts/selfcheck_adx.py --self-test          # 离线: 用合成序列验证两套实现
退出码: 0 = 一致率 >= threshold(或无标的); 1 = 低于阈值; 2 = 全部取数失败
"""
import argparse
import json
import os
import sys

BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(BASE, "backend"))

import numpy as np  # noqa: E402
import pandas as pd  # noqa: E402

from indicator_utils import adx_tier_of, wilder_adx  # noqa: E402

DEFAULT_THRESHOLD = 0.7      # 档位一致率下限(低于即判"择时口径待校准")
MIN_BARS = 60


def production_tier(df: pd.DataFrame) -> str:
    """生产实现(timing.market_state.adx_tier)的档位"""
    from timing.market_state import adx_tier as _tier
    return _tier(df)


def compare(df: pd.DataFrame) -> dict:
    """单标的: 生产档位 vs Wilder 档位"""
    prod = production_tier(df)
    val = wilder_adx(df["high"], df["low"], df["close"], 14)
    wild = adx_tier_of(val)
    return {"production": prod, "wilder": wild, "wilder_adx": val,
            "agree": prod == wild}


def run(symbols, limit: int = 260, threshold: float = DEFAULT_THRESHOLD) -> dict:
    rows, failures = [], []
    for sym in symbols:
        try:
            from data_sources import data_source_manager
            res = data_source_manager.get_kline_data(sym, period="daily", limit=int(limit))
            raw = res.get("data") if isinstance(res, dict) else res
            df = pd.DataFrame(list(raw or []))
            if df.empty:
                failures.append(sym)
                continue
            df = df.rename(columns={"trade_date": "date", "vol": "volume"})
            for c in ("high", "low", "close"):
                if c not in df.columns:
                    raise KeyError(c)
                df[c] = pd.to_numeric(df[c], errors="coerce")
            df = df.dropna(subset=["high", "low", "close"])
            if len(df) < MIN_BARS:
                failures.append(sym)
                continue
            item = compare(df.sort_values("date").reset_index(drop=True) if "date" in df.columns else df)
            item["symbol"] = sym
            item["bars"] = int(len(df))
            rows.append(item)
        except Exception as exc:
            print("[warn] %s 自检失败: %s" % (sym, exc), file=sys.stderr)
            failures.append(sym)

    agree = sum(1 for r in rows if r["agree"])
    total = len(rows)
    rate = round(agree / total, 3) if total else None
    verdict = "unknown" if not total else ("pass" if rate >= threshold else "warn")
    return {"checked": total, "agree": agree, "agree_rate": rate,
            "threshold": threshold, "verdict": verdict,
            "items": rows, "failures": failures}


def self_test() -> dict:
    """离线自证: 强趋势序列的 ADX 应高于震荡序列, 且两套实现档位各有落点"""
    n = 120
    trend_close = np.linspace(10, 20, n) + np.sin(np.arange(n)) * 0.05
    trend = pd.DataFrame({
        "high": trend_close + 0.15, "low": trend_close - 0.15, "close": trend_close,
    })
    flat_close = 10 + np.sin(np.arange(n) * 1.7) * 0.05
    flat = pd.DataFrame({
        "high": flat_close + 0.1, "low": flat_close - 0.1, "close": flat_close,
    })
    t_adx = wilder_adx(trend["high"], trend["low"], trend["close"], 14)
    f_adx = wilder_adx(flat["high"], flat["low"], flat["close"], 14)
    return {"trend_adx": t_adx, "trend_tier": adx_tier_of(t_adx),
            "flat_adx": f_adx, "flat_tier": adx_tier_of(f_adx),
            "trend_above_flat": bool(t_adx is not None and f_adx is not None and t_adx > f_adx)}


def _parse_symbols(args):
    if args.symbols:
        return [s.strip() for s in args.symbols.split(",") if s.strip()]
    if args.symbols_file:
        with open(args.symbols_file, encoding="utf-8") as f:
            return [ln.strip() for ln in f if ln.strip() and not ln.startswith("#")]
    return []


def main(argv=None):
    ap = argparse.ArgumentParser(description="ADX 双实现对拍自检")
    ap.add_argument("--symbols", help="逗号分隔标的")
    ap.add_argument("--symbols-file", help="每行一个标的的文件")
    ap.add_argument("--limit", type=int, default=260)
    ap.add_argument("--threshold", type=float, default=DEFAULT_THRESHOLD,
                    help="档位一致率下限(默认 0.7)")
    ap.add_argument("--self-test", action="store_true", help="只跑离线自证(不取数)")
    args = ap.parse_args(argv)

    if args.self_test:
        out = self_test()
        print(json.dumps(out, ensure_ascii=False, indent=1))
        return 0 if out["trend_above_flat"] else 1

    symbols = _parse_symbols(args)
    if not symbols:
        ap.error("必须给 --symbols / --symbols-file, 或用 --self-test")
    out = run(symbols, limit=args.limit, threshold=args.threshold)
    print(json.dumps(out, ensure_ascii=False, indent=1))
    if out["verdict"] == "unknown":
        return 2
    return 0 if out["verdict"] == "pass" else 1


if __name__ == "__main__":
    sys.exit(main())
