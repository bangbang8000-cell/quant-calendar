#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""6.1.6 (F1): AI 评估输出结构化 — JSON 骨架解析 (纯函数)

模型输出 JSON 骨架: {conclusion, evidence[], risk, score, signal(看多/看空/中性)}
解析失败 → structured=False 降级纯文本 (前端原文展示)
支持 ```json 围栏与裸 JSON。
"""
import json
import re

VALID_SIGNALS = ("看多", "看空", "中性", "观望")

_BLOCK_RE = re.compile(r"```(?:json)?\s*(\{.*?\})\s*```", re.DOTALL)


def extract_json_block(text: str):
    """从 AI 文本提取首个 JSON 对象 dict; 失败返回 None。"""
    if not text:
        return None
    t = text.strip()
    m = _BLOCK_RE.search(t)
    if m:
        t = m.group(1)
    else:
        start = t.find("{")
        end = t.rfind("}")
        if start != -1 and end > start:
            t = t[start:end + 1]
    try:
        d = json.loads(t)
        return d if isinstance(d, dict) else None
    except (ValueError, TypeError):
        return None


def parse_eval_structured(text: str):
    """解析评估/问股输出 → 结构化骨架; 失败降级并标注原因。

    返回 {"structured": bool, fallback_reason, conclusion, evidence[], risk, score, signal, text}
    - fallback_reason: 结构化失败时标注原因 (无输出文本 / 解析失败 / 骨架为空),
      前端据此展示「原文 + 降级说明」; 成功时为 ""。
    """
    if not text:
        return {"structured": False, "fallback_reason": "无输出文本",
                "conclusion": "", "evidence": [],
                "risk": "", "score": None, "signal": "", "text": text or ""}
    d = extract_json_block(text)
    if not d:
        return {"structured": False, "fallback_reason": "未能解析出 JSON 骨架",
                "conclusion": "", "evidence": [],
                "risk": "", "score": None, "signal": "", "text": text}
    evidence = d.get("evidence") or []
    if isinstance(evidence, str):
        evidence = [evidence]
    if not isinstance(evidence, list):
        evidence = []
    signal = str(d.get("signal") or "").strip()
    if signal not in VALID_SIGNALS:
        signal = ""
    out = {
        "structured": True,
        "fallback_reason": "",
        "conclusion": str(d.get("conclusion") or "").strip(),
        "evidence": [str(e).strip() for e in evidence if str(e).strip()],
        "risk": str(d.get("risk") or "").strip(),
        "score": d.get("score"),
        "signal": signal,
        "text": text,
    }
    # 骨架空(无结论且无评分) → 仍视为结构化失败, 走原文并标注
    if not out["conclusion"] and out["score"] is None:
        out["structured"] = False
        out["fallback_reason"] = "骨架为空 (无结论且无评分)"
    return out
