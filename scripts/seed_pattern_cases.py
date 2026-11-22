#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""v7.15 (FR-4): 形态匹配官方示例案例 seed 脚本。

用法(在目标实例项目根目录):
    python3 scripts/seed_pattern_cases.py            # dry-run
    python3 scripts/seed_pattern_cases.py --apply    # 真正入库

- 3 个官方示例案例, 全部走既有真实提特征管线
  (RealDataPortal → panel_to_desc_df → PatternFeatureExtractor), 不编造特征;
- case_id 固定为 official_<symbol> → INSERT OR REPLACE, 幂等可重跑;
- 真实行情不可得时如实跳过该案例(绝不写空特征案例, 与 v7.11 口径一致);
- 案例带 official 标签, 用户可在界面正常删除。
"""
import argparse
import json
import os
import sys

BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(BASE, "backend"))
os.chdir(BASE)

# 官方示例案例定义 (symbol, breakout_date, 名称, 描述, 标签)
OFFICIAL_CASES = [
    {
        "symbol": "600519.SH",
        "breakout_date": "2026-10-30",
        "name": "官方示例 · 贵州茅台 缩量回踩企稳",
        "description": "官方预置示例: 白马蓝筹缩量回踩后企稳反弹形态, 用于演示 DTW 四维匹配流程。可在界面删除。",
        "tags": ["official", "示例", "回踩企稳"],
        "lookback_days": 25,
    },
    {
        "symbol": "000001.SZ",
        "breakout_date": "2026-10-30",
        "name": "官方示例 · 平安银行 放量突破",
        "description": "官方预置示例: 权重股放量向上突破形态, 用于演示形态匹配。可在界面删除。",
        "tags": ["official", "示例", "放量突破"],
        "lookback_days": 25,
    },
    {
        "symbol": "600036.SH",
        "breakout_date": "2026-10-30",
        "name": "官方示例 · 招商银行 趋势加速",
        "description": "官方预置示例: 上升趋势末端加速形态, 用于演示形态匹配。可在界面删除。",
        "tags": ["official", "示例", "趋势加速"],
        "lookback_days": 25,
    },
]


def extract_one(spec: dict) -> dict:
    """复用 api/v1/pattern.py /cases/from-symbol 的后端提特征管线, 返回 save_case 入参"""
    import pandas as pd
    from pattern_match import PatternFeatureExtractor
    from strategy_sdk.builtin._pattern_utils import panel_to_desc_df
    from strategy_sdk.data_portal import RealDataPortal

    symbol = spec["symbol"]
    lookback = int(spec.get("lookback_days") or 25)
    breakout = str(spec.get("breakout_date") or "").strip()
    end = breakout
    start = (pd.Timestamp(end) - pd.Timedelta(days=max(150, lookback * 8))).date().isoformat()

    # 与 backend/api/v1/pattern.py 的 _FIELDS 保持一致 (五维原始字段)
    # 注: 不直接 import pattern.py, 避免拉起整个 api.v1 路由包
    _FIELDS = ("open", "high", "low", "close", "volume")
    panel = RealDataPortal().get_panel(list(_FIELDS), start, end, universe=[symbol])
    if panel is None or panel.empty:
        raise ValueError("%s 真实行情不可得" % symbol)
    frame = panel_to_desc_df(panel, symbol, _FIELDS)
    if len(frame) < 40:
        raise ValueError("%s K 线不足(%d 根)" % (symbol, len(frame)))
    features = PatternFeatureExtractor(lookback_days=lookback).extract(frame)
    if not any(features.values()):
        raise ValueError("%s 特征全空, 拒绝入库" % symbol)
    return {
        "case_id": "official_%s" % symbol.split(".")[0],
        "name": spec["name"],
        "symbol": symbol,
        "breakout_date": breakout,
        "lookback_days": lookback,
        "tags": spec["tags"],
        "description": spec["description"],
        "features": features,
    }


def main(argv=None):
    ap = argparse.ArgumentParser(description="形态匹配官方示例案例 seed")
    ap.add_argument("--apply", action="store_true", help="写库 (默认 dry-run)")
    ap.add_argument("--json", action="store_true", help="输出完整 JSON")
    args = ap.parse_args(argv)

    report = {"official": 0, "seeded": [], "skipped": [], "ok": True}
    for spec in OFFICIAL_CASES:
        try:
            item = extract_one(spec)
        except Exception as exc:
            report["ok"] = False
            report["skipped"].append({"symbol": spec["symbol"], "reason": str(exc)})
            continue
        if args.apply:
            from pattern_match.store import save_case
            save_case(item)
        report["seeded"].append({"symbol": spec["symbol"], "case_id": item["case_id"],
                                 "features": sorted([k for k, v in item["features"].items() if v])})
    report["official"] = len(report["seeded"])

    if args.json:
        print(json.dumps(report, ensure_ascii=False, indent=1))
    else:
        for s in report["seeded"]:
            print("  %s%s: %s 特征[%s]" % ("已入库" if args.apply else "[dry-run] 将入库",
                                          "" if args.apply else "", s["symbol"], ",".join(s["features"])))
        for s in report["skipped"]:
            print("  [跳过] %s: %s" % (s["symbol"], s["reason"]))
        print("合计: 官方案例 %d, 跳过 %d%s" % (
            report["official"], len(report["skipped"]),
            "" if args.apply else " (dry-run, 加 --apply 写库)"))
    return 0 if report["ok"] else 1


if __name__ == "__main__":
    sys.exit(main())
