#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""v6.6 (T-6.6.15~T-6.6.20): 美林时钟数据订正与可追溯性 (PRD FR-6.6.4)

背景 (EVAL-v6.6 §3.1.2):
  旧版宏观指标抓取因 akshare 列名漂移, 把 PMI/CPI/PPI/GDP/M2 一律写成 0,
  再 update() 覆盖掉合理默认值 → 全期被误判为「衰退」。修复后阶段结论必然变化
  (真实值 CPI 0.1 / PPI -3.6 / GDP 5.0 / M2 7.2 → 复苏期)。

用户决策:
  D4  **零删除** —— 只归档 + 标记 legacy, 绝不删历史（可追溯性优先）
  D8  接受结论变化 + 前端显示「数据订正于 YYYY-MM-DD」角标

本模块只做「打标 / 归档 / 元信息」这类纯操作, 不做任何网络或计算,
便于单测与在多处复用（快照、转换记录、缓存）。
"""
import json
import os
from datetime import datetime

CORRECTION_LABEL_PREFIX = "数据订正于"


def _today_str():
    return datetime.now().strftime("%Y-%m-%d")


def mark_corrected(record, reason=None, at=None):
    """给单条历史记录打「已订正」标记。

    幂等: 已标记过的记录**保留首次**的 recomputed_at / recomputed_from ——
    订正时间必须反映「这条结论第一次被判定为旧口径」的时刻,
    否则反复执行 runbook 会让可追溯性失真。
    """
    if record is None:
        return None
    out = dict(record)
    if out.get("archived") and out.get("recomputed_at"):
        return out  # 已标记, 原样返回（幂等）
    out["archived"] = True
    out["legacy"] = True
    out["recomputed_at"] = at or _today_str()
    out["recomputed_from"] = reason or "数据订正"
    return out


def archive_snapshots(snapshots, reason=None, at=None, before=None):
    """批量归档: 只标记 `timestamp < before` 的记录, 保持条数不变（零删除）。

    Args:
        snapshots: 快照列表
        reason: 订正原因（写入 recomputed_from）
        at: 订正日期 YYYY-MM-DD
        before: 截止时间戳字符串; None 表示全部标记
    Returns:
        list: 与入参等长的新列表
    """
    snaps = list(snapshots or [])
    if before is None:
        return [mark_corrected(s, reason, at) for s in snaps]
    out = []
    for snap in snaps:
        ts = ""
        if isinstance(snap, dict):
            ts = str(snap.get("timestamp") or snap.get("date") or "")
        if ts and ts < str(before):
            out.append(mark_corrected(snap, reason, at))
        else:
            out.append(dict(snap) if isinstance(snap, dict) else snap)
    return out


def write_correction_meta(path, reason=None, at=None, affected=0, extra=None):
    """写入订正元信息（文件级「最后一次订正」+ 全部历史）。

    保留 history 数组而不是只写最后一次, 满足 D4 的可追溯要求。
    """
    at = at or _today_str()
    entry = {
        "as_of": at,
        "reason": reason or "数据订正",
        "affected": int(affected or 0),
        "recorded_at": datetime.now().isoformat(timespec="seconds"),
    }
    if extra:
        entry.update(extra)

    prev = read_correction_meta(path) or {}
    history = list(prev.get("history") or [])
    history.append(entry)

    meta = {
        "as_of": at,
        "reason": entry["reason"],
        "affected": entry["affected"],
        "label": f"{CORRECTION_LABEL_PREFIX} {at}",
        "history": history,
    }
    parent = os.path.dirname(os.path.abspath(path))
    if parent:
        os.makedirs(parent, exist_ok=True)
    with open(path, "w", encoding="utf-8") as f:
        json.dump(meta, f, ensure_ascii=False, indent=1)
    return meta


def read_correction_meta(path):
    """读取订正元信息; 文件不存在/损坏/为空 → None（调用方据此隐藏角标）。"""
    try:
        if not path or not os.path.isfile(path):
            return None
        with open(path, encoding="utf-8") as f:
            data = json.load(f)
        if not isinstance(data, dict) or not data.get("as_of"):
            return None
        return data
    except (OSError, ValueError):
        return None
