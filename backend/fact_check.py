#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
AI 事实护栏抽查 (FR-3.18.9 / T9) — 抽样断言 AI 回复数值来自数据源

- extract_numbers / find_card_numbers / check_consistency: 纯函数可单测
- run_daily_audit: 抽查历史 AI 回复 → 通过率统计 + 失败明细; 无数据卡 → 未验证
- 报告持久化: data/fact_check_audits/<date>.json
"""
import json
import logging
import os
import re
from datetime import datetime
from typing import Dict, List, Optional

import paths

logger = logging.getLogger(__name__)

AUDIT_SUBDIR = "fact_check_audits"

# 数值一致性容忍度
TOLERANCE_REL = 0.01    # 相对误差 1%
TOLERANCE_ABS = 0.01    # 绝对误差


def set_audit_dir(dirpath: str) -> None:
    """重定向审计报告目录（测试隔离用）"""
    global _AUDIT_DIR_OVERRIDE
    _AUDIT_DIR_OVERRIDE = dirpath


_AUDIT_DIR_OVERRIDE: Optional[str] = None


def _audit_dir() -> str:
    if _AUDIT_DIR_OVERRIDE:
        return _AUDIT_DIR_OVERRIDE
    return os.path.join(paths.DATA_DIR, AUDIT_SUBDIR)


# ==================== 数值抽取 (纯函数) ====================

_NUM_RE = re.compile(r'-?\d+(?:\.\d+)?')


def _is_id_like(num: float, raw: str) -> bool:
    """排除年份/股票代码等 ID 型数字 (避免误判为事实断言)"""
    if abs(num) >= 1900 and abs(num) <= 2100 and int(abs(num)) == abs(num):
        return True  # 年份
    digits = re.sub(r'[.\-]', '', raw)
    if len(digits) >= 5 and int(abs(num)) == abs(num) and '.' not in raw:
        return True  # 5+ 位整数 (股票代码等)
    return False


def extract_numbers(text: str) -> List[float]:
    """从 AI 回复抽取数值 (排除年份/代码等 ID 型)"""
    if not text:
        return []
    out = []
    for m in _NUM_RE.finditer(str(text)):
        raw = m.group()
        try:
            num = float(raw)
        except ValueError:
            continue
        if _is_id_like(num, raw):
            continue
        out.append(num)
    return out


def find_card_numbers(card: Dict) -> List[float]:
    """从数据卡递归收集所有数值 (供一致性比对); 含字符串内嵌数字"""
    if card is None:
        return []
    out: List[float] = []
    def _walk(v):
        if isinstance(v, (int, float)) and not isinstance(v, bool):
            if v == v:  # 非 NaN
                out.append(float(v))
        elif isinstance(v, str):
            out.extend(extract_numbers(v))
        elif isinstance(v, dict):
            for x in v.values():
                _walk(x)
        elif isinstance(v, (list, tuple)):
            for x in v:
                _walk(x)
    _walk(card)
    return out


# ==================== 一致性断言 (纯函数) ====================

def _matches(number: float, card_numbers: List[float]) -> bool:
    for cn in card_numbers:
        if abs(number - cn) <= max(TOLERANCE_ABS, TOLERANCE_REL * abs(cn)):
            return True
    return False


def check_consistency(ai_text: str, data_card: Optional[Dict]) -> Dict:
    """对单条 AI 回复做事实一致性断言。

    返回 {checked, passed, failed, failures: [{number}]}
    - 无数据卡 → checked=0 (未验证, 不计入通过率)
    """
    if not data_card:
        return {"checked": 0, "passed": 0, "failed": 0, "failures": []}
    card_nums = find_card_numbers(data_card)
    if not card_nums:
        return {"checked": 0, "passed": 0, "failed": 0, "failures": []}
    numbers = extract_numbers(ai_text)
    failures = []
    passed = 0
    for n in numbers:
        if _matches(n, card_nums):
            passed += 1
        else:
            failures.append({"number": n})
    return {
        "checked": len(numbers),
        "passed": passed,
        "failed": len(failures),
        "failures": failures,
    }


# ==================== 每日抽查 ====================

def _extract_ai_text(record: Dict) -> str:
    result = record.get("result") or {}
    return str(result.get("ai_summary") or result.get("analysis") or result.get("content") or "")


def run_daily_audit(history: Optional[List[Dict]] = None, limit: int = 20) -> Dict:
    """抽查历史 AI 回复: 数值与本地数据卡一致性 → 审计报告 (FR-3.18.9)

    - history 可注入 (测试用); 默认从 ai_evaluator 取最近评估记录
    - 无数据卡的回复 → unverified (未验证, 不计入通过率)
    """
    if history is None:
        try:
            from ai_evaluator import ai_evaluator
            history = ai_evaluator.get_history("default", limit=limit)
        except Exception as e:
            logger.warning("获取评估历史失败 (降级): %s", e)
            history = []
    history = list(history or [])[:limit]
    total_checked = 0
    total_passed = 0
    unverified = 0
    failures: List[Dict] = []
    for rec in history:
        result = rec.get("result") or {}
        data_card = result.get("data_card")
        ai_text = _extract_ai_text(rec)
        if not data_card or not ai_text:
            unverified += 1
            continue
        r = check_consistency(ai_text, data_card)
        total_checked += r["checked"]
        total_passed += r["passed"]
        for f in r["failures"]:
            failures.append({
                "stock_code": rec.get("stock_code"),
                "stock_name": rec.get("stock_name"),
                "date": (rec.get("evaluate_time") or "")[:10],
                "number": f["number"],
            })
    return {
        "date": datetime.now().strftime("%Y-%m-%d"),
        "generated_at": datetime.now().isoformat(),
        "sampled": len(history),
        "checked": total_checked,
        "passed": total_passed,
        "failed": total_checked - total_passed,
        "unverified": unverified,
        "pass_rate": round(total_passed / total_checked * 100, 1) if total_checked else None,
        "failures": failures[:50],
    }


# ==================== 报告持久化 ====================

def save_audit_report(report: Dict, date: Optional[str] = None) -> str:
    date = date or report.get("date") or datetime.now().strftime("%Y-%m-%d")
    # v3.21: 报告内容 date 与文件名日期保持一致(避免 get_latest_audit 读内容日期≠文件名)
    report = dict(report)
    report["date"] = date
    d = _audit_dir()
    os.makedirs(d, exist_ok=True)
    path = os.path.join(d, f"{date}.json")
    with open(path, "w", encoding="utf-8") as f:
        json.dump(report, f, ensure_ascii=False, indent=2)
    return path


def _read_audit_file(path: str) -> Optional[Dict]:
    try:
        with open(path, "r", encoding="utf-8") as f:
            return json.load(f)
    except (OSError, ValueError):
        return None


def get_audit_report(date: str) -> Optional[Dict]:
    return _read_audit_file(os.path.join(_audit_dir(), f"{date}.json"))


def get_latest_audit() -> Optional[Dict]:
    d = _audit_dir()
    if not os.path.isdir(d):
        return None
    names = sorted(n for n in os.listdir(d) if n.endswith(".json"))
    if not names:
        return None
    return _read_audit_file(os.path.join(d, names[-1]))
