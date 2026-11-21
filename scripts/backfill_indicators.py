#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""指标回填工具 (v7.12 / FR-7.7-3, 移植 KHunter tools/ 的 backfill 思路)

作用
----
把「某段区间内的 K 线 + 派生指标(MA/ATR/ADX)」重新算一遍并落快照, 解决三类常见问题:
  1. 数据源中途补数/改口径后, 本地派生指标没跟着重算;
  2. 交易日缺口(停牌/源端漏推)导致窗口指标被"跨缺口"计算;
  3. 复盘/审计需要一份"当天看到的指标长什么样"的可追溯快照。

默认只读(dry-run): 只统计缺口与指标可用性并打印报告, 不写任何文件。
`--apply` 才写 `data/indicator_snapshots/<symbol>.json`(每标的一次覆盖写)。

用法
----
    python3 scripts/backfill_indicators.py --symbols 600000.SH,000001.SZ --limit 120
    python3 scripts/backfill_indicators.py --symbols-file syms.txt --start 2026-01-01 --end 2026-06-30
    python3 scripts/backfill_indicators.py --symbols 600000.SH --apply      # 落快照
退出码: 0 = 无异常; 1 = 有标的取数失败或无数据(便于 cron/CI 判定)
"""
import argparse
import json
import os
import sys
import time

BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(BASE, "backend"))

import pandas as pd  # noqa: E402

from indicator_utils import indicator_frame, missing_dates  # noqa: E402

SNAPSHOT_DIR = os.path.join(BASE, "data", "indicator_snapshots")


def _rows_from_source(symbol: str, limit: int = 260):
    """从统一数据源取 K 线; 不可达时返回空列表(不抛错, 由调用方计入失败)"""
    try:
        from data_sources import data_source_manager
        res = data_source_manager.get_kline_data(symbol, period="daily", limit=int(limit))
    except Exception as exc:
        print("[warn] %s 取数失败: %s" % (symbol, exc), file=sys.stderr)
        return []
    rows = res.get("data") if isinstance(res, dict) else res
    return list(rows or [])


def _normalize(rows):
    """统一成 DataFrame(date, open, high, low, close, volume), 按日期升序去重"""
    if not rows:
        return pd.DataFrame(columns=["date", "open", "high", "low", "close", "volume"])
    df = pd.DataFrame(rows)
    rename = {"trade_date": "date", "vol": "volume", "trade_time": "date"}
    df = df.rename(columns={k: v for k, v in rename.items() if k in df.columns})
    need = ["date", "high", "low", "close"]
    for col in need:
        if col not in df.columns:
            return pd.DataFrame(columns=["date", "open", "high", "low", "close", "volume"])
    if "open" not in df.columns:
        df["open"] = df["close"]
    if "volume" not in df.columns:
        df["volume"] = 0.0
    df["date"] = df["date"].astype(str).str.slice(0, 10)
    for col in ("open", "high", "low", "close", "volume"):
        df[col] = pd.to_numeric(df[col], errors="coerce")
    df = df.dropna(subset=["high", "low", "close"])
    return (df.sort_values("date").drop_duplicates("date", keep="last")
              .reset_index(drop=True)[["date", "open", "high", "low", "close", "volume"]])


def _expected_dates(frames):
    """期望交易日 = 各标的实际日期并集(无交易日历时的保守代理, 只报"别人有它没有")"""
    all_dates = set()
    for df in frames.values():
        all_dates.update(df["date"].tolist())
    return sorted(all_dates)


def backfill(symbols, limit: int = 260, start=None, end=None, apply: bool = False,
             snap_dir: str = SNAPSHOT_DIR):
    """主流程: 取数 → 归一 → 计算指标 → 统计缺口 → (可选)落快照"""
    frames, failures = {}, []
    for sym in symbols:
        df = _normalize(_rows_from_source(sym, limit=limit))
        if df.empty:
            failures.append(sym)
            continue
        if start:
            df = df[df["date"] >= str(start)[:10]].reset_index(drop=True)
        if end:
            df = df[df["date"] <= str(end)[:10]].reset_index(drop=True)
        if df.empty:
            failures.append(sym)
            continue
        frames[sym] = df

    expected = _expected_dates(frames)
    report = {"generated_at": time.strftime("%Y-%m-%dT%H:%M:%S"), "apply": bool(apply),
              "symbols": {}, "failures": failures, "expected_trading_days": len(expected)}

    for sym, df in frames.items():
        ind = indicator_frame(df["high"], df["low"], df["close"], df["volume"],
                              windows=(5, 10, 20, 60))
        gaps = missing_dates(df["date"].tolist(), expected)
        # 指标可用性: 末行各列是否非空(窗口不足时会是 NaN, 属"数据不足"而非"回填失败")
        last = ind.iloc[-1]
        availability = {c: bool(pd.notna(last.get(c))) for c in ind.columns if c != "close"}
        entry = {
            "bars": int(len(df)),
            "first_date": str(df["date"].iloc[0]),
            "last_date": str(df["date"].iloc[-1]),
            "gaps": gaps,
            "gap_count": len(gaps),
            "adx14": ind.attrs.get("adx14"),
            "adx_tier": ind.attrs.get("adx_tier"),
            "indicator_ready": availability,
            "snapshot": None,
        }
        if apply:
            os.makedirs(snap_dir, exist_ok=True)
            payload = {
                "symbol": sym,
                "generated_at": report["generated_at"],
                "bars": entry["bars"],
                "adx14": entry["adx14"],
                "adx_tier": entry["adx_tier"],
                "rows": json.loads(
                    ind.assign(date=df["date"]).round(4).to_json(orient="records")
                ),
            }
            path = os.path.join(snap_dir, "%s.json" % sym.replace(".", "_"))
            with open(path, "w", encoding="utf-8") as f:
                json.dump(payload, f, ensure_ascii=False, indent=1)
            entry["snapshot"] = path
        report["symbols"][sym] = entry

    report["ok"] = not failures
    return report


def _parse_symbols(args):
    if args.symbols:
        return [s.strip() for s in args.symbols.split(",") if s.strip()]
    if args.symbols_file:
        with open(args.symbols_file, encoding="utf-8") as f:
            return [ln.strip() for ln in f if ln.strip() and not ln.startswith("#")]
    return []


def main(argv=None):
    ap = argparse.ArgumentParser(description="K 线与派生指标回填(默认 dry-run)")
    ap.add_argument("--symbols", help="逗号分隔标的, 如 600000.SH,000001.SZ")
    ap.add_argument("--symbols-file", help="每行一个标的的文件")
    ap.add_argument("--limit", type=int, default=260, help="每标的取多少根 K 线(默认 260)")
    ap.add_argument("--start", help="只回填该日期之后(YYYY-MM-DD)")
    ap.add_argument("--end", help="只回填该日期之前(YYYY-MM-DD)")
    ap.add_argument("--apply", action="store_true", help="写快照文件(默认只读)")
    args = ap.parse_args(argv)

    symbols = _parse_symbols(args)
    if not symbols:
        ap.error("必须给 --symbols 或 --symbols-file")
    report = backfill(symbols, limit=args.limit, start=args.start, end=args.end,
                      apply=args.apply)
    print(json.dumps(report, ensure_ascii=False, indent=1))
    return 0 if report["ok"] else 1


if __name__ == "__main__":
    sys.exit(main())
