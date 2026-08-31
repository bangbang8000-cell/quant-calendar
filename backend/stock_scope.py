#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Stock Scope — 从用户自然语言中解析股票代码和分析意图

借鉴 DSA stock_scope.py 的正则匹配模式
"""

import re
import logging
from typing import Optional

logger = logging.getLogger(__name__)

# 意图关键词
_INTENT_TREND = re.compile(r"趋势|均线|MACD|RSI|金叉|死叉|多头|空头|盘整|量能|支撑|压力|布林")
_INTENT_FUNDAMENTAL = re.compile(r"基本面|财务|估值|PE|PB|ROE|营收|利润|负债|资产|行业")
_INTENT_SENTIMENT = re.compile(r"情绪|新闻|舆情|消息|热度|资金流向")
_INTENT_COMPARE = re.compile(r"比较|对比|vs\b|和[^，。,.!?？！]{0,10}比|哪个|谁更|二选一")
_INTENT_SWITCH = re.compile(r"换成|换看|改看|切换")
_INTENT_COMPREHENSIVE = re.compile(r"综合评价|全面分析|怎么看|怎么样|行不行|能不能买|该不该卖")


def parse_stock_intent(message: str, current_stock: str = None) -> dict:
    """从用户消息中解析股票代码和分析意图

    Args:
        message: 用户输入的自然语言
        current_stock: 当前上下文中的股票代码 (如 600519.SH)

    Returns:
        {
            "stock_code": "600519.SH",   # 解析出的主股票代码
            "stock_name": "贵州茅台",     # 股票名称
            "intent": "trend",            # trend|fundamental|sentiment|compare|comprehensive
            "is_compare": False,          # 是否多股比较
            "compare_codes": [],          # 比较的其他股票
            "is_switch": False,           # 是否切换股票
            "confidence": "high"          # high|medium|low
        }
    """
    from stock_info import stock_manager

    result = {
        "stock_code": current_stock or "",
        "stock_name": "",
        "intent": "comprehensive",
        "is_compare": False,
        "compare_codes": [],
        "is_switch": False,
        "confidence": "medium",
    }

    if not message or not message.strip():
        result["confidence"] = "low"
        return result

    msg = message.strip()

    # 1. 解析股票代码 (6位数字)
    code_match = re.findall(r'\b(\d{6})\b', msg)
    if code_match:
        # 找到数字代码，推断后缀
        codes = []
        for c in code_match:
            if c.startswith(('0', '3')):
                codes.append(f"{c}.SZ")
            elif c.startswith('6'):
                codes.append(f"{c}.SH")
            elif c.startswith(('4', '8')):
                codes.append(f"{c}.BJ")
            else:
                codes.append(c)

        if codes:
            result["stock_code"] = codes[0]
            name = stock_manager.get_name(codes[0])
            if name != codes[0]:
                result["stock_name"] = name
                result["confidence"] = "high"

            # 多股比较
            if len(codes) >= 2:
                result["is_compare"] = True
                result["compare_codes"] = codes[1:3]  # 最多3只

    # 2. 解析股票中文名称
    if not result["stock_code"] or result["confidence"] != "high":
        # 尝试中文名匹配
        # 常见模式: "分析茅台" / "茅台怎么样" / "怎么看比亚迪"
        # 先去掉意图词，提取可能的中文名
        cleaned = re.sub(r'分析|看看|研究|诊断|怎么看|怎么样|好不好|能不能|趋势|基本面', '', msg)
        cleaned = cleaned.strip()

        if cleaned:
            # 用 stock_info 搜索
            matches = stock_manager.search(cleaned)
            if matches:
                # 选择最匹配的 (名字最长的优先，避免"平安"→"平安银行"歧义时选错)
                best = max(matches, key=lambda x: len(x["name"]))
                result["stock_code"] = best["code"]
                result["stock_name"] = best["name"]
                result["confidence"] = "high" if best["name"] in msg else "medium"

    # 3. 识别意图
    if _INTENT_COMPARE.search(msg) or _INTENT_SWITCH.search(msg):
        if _INTENT_COMPARE.search(msg):
            result["intent"] = "compare"
            result["is_compare"] = True
        if _INTENT_SWITCH.search(msg):
            result["is_switch"] = True

    if _INTENT_TREND.search(msg):
        result["intent"] = "trend" if result["intent"] == "comprehensive" else result["intent"]
    elif _INTENT_FUNDAMENTAL.search(msg):
        result["intent"] = "fundamental"
    elif _INTENT_SENTIMENT.search(msg):
        result["intent"] = "sentiment"
    elif _INTENT_COMPREHENSIVE.search(msg):
        result["intent"] = "comprehensive"

    # 4. 如果没有匹配到代码但有当前股票，维持当前
    if not result["stock_code"] and current_stock:
        result["stock_code"] = current_stock
        name = stock_manager.get_name(current_stock)
        if name != current_stock:
            result["stock_name"] = name
        result["confidence"] = "medium"

    return result


def parse_stock_name_or_code(text: str) -> Optional[str]:
    """纯股票名/代码解析 — 返回标准代码或 None"""
    if not text:
        return None

    from stock_info import stock_manager

    # 数字代码
    code_match = re.search(r'\b(\d{6})\b', text)
    if code_match:
        c = code_match.group(1)
        if c.startswith(('0', '3')):
            return f"{c}.SZ"
        elif c.startswith('6'):
            return f"{c}.SH"
        return c

    # 中文名搜索
    matches = stock_manager.search(text)
    if matches:
        best = max(matches, key=lambda x: len(x["name"]))
        return best["code"]

    return None
