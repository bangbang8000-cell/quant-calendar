#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""回测指标回填 (v7.12 / FR-7.7-3 第三项)

背景
----
`research_experiments` 里的回测实验 (`type='backtest'`, 以及 v7.4 起的
`type='pattern_strategy'`) 在写入时把关键指标抄进 `summary`。历史上有两类漂移:

  1. **口径升级未回灌**: v7.10 修了「T-1 持仓 × t 日收益」防前视口径与成本逐日配对,
     修完只影响"新跑的回测", 老记录的 summary 还是旧口径的数字;
  2. **字段缺失**: 早期记录只有 5 个指标, 缺 volatility / total_days。

本脚本以「已落库的净值曲线 `equity_curve`」为唯一事实来源, 反推日收益序列,
再调用**生产同一套**绩效函数 `backtest.compute_period_metrics` 重算, 与存量值逐字段比对。
净值曲线可完整还原日收益 (equity_i / equity_{i-1} - 1), 因此重算是可复现的, 不是估的。

默认只读 (dry-run): 只打印漂移报告, 不改库。
`--apply` 才把重算结果写回 `summary` 与 `result` 的指标字段, 并打 `backfilled_at` 标记。

用法
----
    python3 scripts/backfill_backtest_metrics.py                    # 全量 dry-run
    python3 scripts/backfill_backtest_metrics.py --limit 200        # 只扫最近 200 条
    python3 scripts/backfill_backtest_metrics.py --id exp_2026...   # 单条定位
    python3 scripts/backfill_backtest_metrics.py --apply            # 真写回
    python3 scripts/backfill_backtest_metrics.py --apply --strict    # 仍有漂移则退出码 1

退出码: 0 = 无异常 (dry-run 有漂移也算正常, 除非加 --strict); 1 = 有失败/写回失败/严格模式下有漂移
"""
import argparse
import json
import os
import sys
import time

BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(BASE, "backend"))

import db  # noqa: E402
import research_store  # noqa: E402
from backtest import compute_period_metrics  # noqa: E402

# 需回填的指标 (summary 与 result 双写) 与比对容差
METRIC_KEYS = ("total_return", "annual_return", "max_drawdown",
               "volatility", "sharpe_ratio", "win_rate")
TOLERANCE = {"total_return": 0.05, "annual_return": 0.05, "max_drawdown": 0.05,
             "volatility": 0.05, "sharpe_ratio": 0.02, "win_rate": 0.05}
DEFAULT_TYPES = ("backtest", "pattern_strategy")


# ─── 取记录 ───

def _load_records(eid=None, types=DEFAULT_TYPES, limit=500):
    """读实验记录 (只读)。表不存在/库不可达时返回 ([], 错误信息)。"""
    try:
        research_store._ensure_table()
    except Exception as exc:  # 库不可用时不该让脚本崩, 交给调用方判定
        return [], "建表失败: %s" % exc
    placeholders = ",".join("?" for _ in types)
    conn = db.get_conn()
    try:
        if eid:
            rows = conn.execute(
                "SELECT id, type, created_at, data FROM research_experiments WHERE id = ?",
                (eid,)).fetchall()
        else:
            rows = conn.execute(
                "SELECT id, type, created_at, data FROM research_experiments "
                "WHERE type IN (%s) ORDER BY created_at DESC, id DESC LIMIT ?" % placeholders,
                tuple(types) + (int(limit),)).fetchall()
    finally:
        conn.close()
    out = []
    for r in rows:
        try:
            out.append((r["id"], r["type"], r["created_at"], json.loads(r["data"])))
        except Exception:
            out.append((r["id"], r["type"], r["created_at"], None))
    return out, None


# ─── 定位净值曲线 / 重算 ───

def _result_of(exp):
    """从实验 dict 里取出真正的回测结果 dict。

    存量结构不统一: `strategy_research` 写的是 {'result': {...}}, 早期/其它入口
    可能直接把结果摊在 `result` 层。按嵌套优先、平坦兜底的顺序取。
    """
    if not isinstance(exp, dict):
        return {}
    inner = exp.get("result")
    if isinstance(inner, dict):
        if isinstance(inner.get("result"), dict) and inner.get("result"):
            return inner["result"]
        if inner:
            return inner
    return {}


def _equity_of(result):
    """取净值曲线 (list[float])。缺失/非法返回 []。"""
    for key in ("equity_curve", "equity", "nav_curve"):
        curve = result.get(key)
        if isinstance(curve, (list, tuple)) and len(curve) >= 2:
            try:
                return [float(x) for x in curve]
            except (TypeError, ValueError):
                return []
    return []


def returns_from_equity(equity):
    """净值曲线 → 日收益序列 (equity_i / equity_{i-1} - 1)。

    生产净值曲线的构造是 acc=1.0 起逐日累乘 (1+r) 再 append, 即 equity[0] = 1 + r0,
    所以反推的基准 prev 必须从 1.0 起算 —— 从 None 起会丢掉首日收益并整体错位。
    前置净值 <=0 (脏数据) 的相邻点直接跳过, 避免除零/符号翻转放大噪声。
    """
    rets, prev = [], 1.0
    for e in equity:
        if prev > 0:
            rets.append(e / prev - 1.0)
        prev = e
    return rets


def recompute(result):
    """由净值曲线重算指标, 返回 {指标: 值} 或 {} (不足以重算)。"""
    equity = _equity_of(result)
    if len(equity) < 3:
        return {}
    rets = returns_from_equity(equity)
    if len(rets) < 2:
        return {}
    m = compute_period_metrics(rets)
    m["total_days"] = len(rets)
    return m


def _num(v):
    """把任意值转成可比较的 float; 不可转返回 None。"""
    try:
        if v is None or v == "":
            return None
        return float(v)
    except (TypeError, ValueError):
        return None


def diff_metrics(stored, fresh):
    """逐字段比对。返回 [{'key','stored','fresh','delta','why'}], 一致则为空列表。

    why: missing=存量缺失; drift=数值超出容差
    """
    diffs = []
    for key in METRIC_KEYS:
        old, new = _num(stored.get(key)), _num(fresh.get(key))
        if new is None:
            continue
        if old is None:
            diffs.append({"key": key, "stored": None, "fresh": round(new, 4),
                          "delta": None, "why": "missing"})
            continue
        delta = new - old
        if abs(delta) > TOLERANCE.get(key, 0.05):
            diffs.append({"key": key, "stored": round(old, 4), "fresh": round(new, 4),
                          "delta": round(delta, 4), "why": "drift"})
    return diffs


# ─── 写回 ───

def apply_backfill(exp, fresh, meta):
    """把重算指标写回 summary 与 result, 落库。返回是否成功。

    只覆盖 METRIC_KEYS + total_days, 其余字段原样保留 (避免误伤 hypothesis/tags 等)。
    """
    patched = json.loads(json.dumps(exp))
    summary = patched.get("summary")
    if not isinstance(summary, dict):
        summary = {}
    for key in METRIC_KEYS + ("total_days",):
        if fresh.get(key) is not None:
            summary[key] = round(float(fresh[key]), 4)
    patched["summary"] = summary
    result = _result_of(patched)
    if isinstance(result, dict):
        for key in METRIC_KEYS + ("total_days",):
            if fresh.get(key) is not None:
                result[key] = round(float(fresh[key]), 4)
        patched["result"] = patched.get("result") if isinstance(patched.get("result"), dict) else result
    patched["backfilled_at"] = meta["generated_at"]
    patched["backfill_source"] = "equity_curve@v7.12"
    try:
        research_store.save_experiment(patched)
        return True
    except Exception as exc:
        meta["errors"].append("%s 写回失败: %s" % (patched.get("id"), exc))
        return False


# ─── 主流程 ───

def run(eid=None, types=DEFAULT_TYPES, limit=500, apply=False):
    """扫描 → 重算 → 比对 → (可选)写回。返回报告 dict。"""
    report = {"generated_at": time.strftime("%Y-%m-%dT%H:%M:%S"), "apply": bool(apply),
              "types": list(types), "scanned": 0, "clean": 0, "drifted": 0,
              "skipped": 0, "applied": 0, "errors": [], "items": []}

    records, err = _load_records(eid=eid, types=types, limit=limit)
    if err:
        report["errors"].append(err)
        report["ok"] = False
        return report
    report["scanned"] = len(records)

    for rid, rtype, created_at, exp in records:
        if exp is None:
            report["skipped"] += 1
            report["items"].append({"id": rid, "type": rtype, "status": "bad_json"})
            continue
        result = _result_of(exp)
        fresh = recompute(result)
        if not fresh:
            report["skipped"] += 1
            report["items"].append({"id": rid, "type": rtype, "created_at": created_at,
                                    "status": "no_equity_curve",
                                    "equity_len": len(_equity_of(result))})
            continue
        summary = exp.get("summary") if isinstance(exp.get("summary"), dict) else {}
        diffs = diff_metrics(summary, fresh)
        item = {"id": rid, "type": rtype, "created_at": created_at,
                "subject": exp.get("subject", ""), "days": fresh.get("total_days"),
                "status": "clean" if not diffs else "drift", "diffs": diffs}
        if not diffs:
            report["clean"] += 1
            report["items"].append(item)
            continue
        report["drifted"] += 1
        if apply and apply_backfill(exp, fresh, report):
            report["applied"] += 1
            item["status"] = "applied"
        report["items"].append(item)

    report["ok"] = not report["errors"]
    return report


def _parse_types(raw):
    vals = tuple(t.strip() for t in str(raw or "").split(",") if t.strip())
    bad = [t for t in vals if t not in research_store.VALID_TYPES]
    if bad:
        raise SystemExit("未知实验类型: %s (合法: %s)" % (", ".join(bad),
                                                     ", ".join(research_store.VALID_TYPES)))
    return vals or DEFAULT_TYPES


def main(argv=None):
    ap = argparse.ArgumentParser(description="回测指标回填 (以净值曲线为准重算, 默认 dry-run)")
    ap.add_argument("--id", help="只处理指定实验 id")
    ap.add_argument("--types", default=",".join(DEFAULT_TYPES),
                    help="逗号分隔实验类型 (默认 backtest,pattern_strategy)")
    ap.add_argument("--limit", type=int, default=500, help="最多扫描多少条 (默认 500)")
    ap.add_argument("--apply", action="store_true", help="写回数据库 (默认只读)")
    ap.add_argument("--strict", action="store_true", help="dry-run 下仍有漂移则退出码 1")
    ap.add_argument("--json", action="store_true", help="输出完整 JSON 报告")
    args = ap.parse_args(argv)

    report = run(eid=args.id, types=_parse_types(args.types),
                 limit=args.limit, apply=args.apply)
    if args.json:
        print(json.dumps(report, ensure_ascii=False, indent=1))
    else:
        print("[backfill_backtest_metrics] 扫描 %d 条 干净 %d 漂移 %d 跳过 %d 写回 %d"
              % (report["scanned"], report["clean"], report["drifted"],
                 report["skipped"], report["applied"]))
        for it in report["items"]:
            if it["status"] == "applied":
                keys = ",".join(d["key"] for d in it["diffs"])
                print("  [写回] %s %s 修正: %s" % (it["id"], it.get("subject", ""), keys))
            elif it["status"] == "drift":
                bits = []
                for d in it["diffs"]:
                    if d["why"] == "missing":
                        bits.append("%s=缺失→%s" % (d["key"], d["fresh"]))
                    else:
                        bits.append("%s %s→%s(%+.2f)" % (d["key"], d["stored"],
                                                         d["fresh"], d["delta"]))
                print("  [漂移] %s %s: %s" % (it["id"], it.get("subject", ""), "; ".join(bits)))
        for e in report["errors"]:
            print("  [错误] %s" % e)
        if report["drifted"] and not args.apply:
            print("提示: 加 --apply 才会真正写回")

    if not report["ok"]:
        return 1
    if args.strict and report["drifted"] and not args.apply:
        return 1
    return 0


if __name__ == "__main__":
    sys.exit(main())
