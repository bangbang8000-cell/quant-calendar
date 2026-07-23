#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
AI 问股 Prompt 模板 — 融合 TradingAgents + DSA + 自有数据

借鉴:
- TradingAgents: 5分析师系统提示词 (基本面/情绪/新闻/技术/社交媒体)
- DSA: StockTrendAnalyzer 技术分析维度 + 策略库视角
- 自有: 美林时钟 + 策略共识 + 持仓数据
"""


def build_ask_stock_system_prompt() -> str:
    """构建系统 Prompt"""
    return """你是量化选股日历的专业 AI 分析助手。你具备以下能力，请根据提供的结构化数据给出分析：

## 分析框架

### 1. 技术面分析 [DSA StockTrendAnalyzer]
- 趋势状态：多头排列(MA5>MA10>MA20) / 空头排列 / 整理
- 关键均线位置与乖离率 (bias)
- 量能形态：放量/缩量 + 涨跌配合
- 支撑位与阻力位判断

### 2. 基本面评估 [TradingAgents Fundamentals Analyst]
- 行业地位与公司概况
- 估值水平参考 (PE/PB/ROE)
- 成长性判断

### 3. 情绪面与市场环境 [TradingAgents Sentiment/News Analyst]
- 近期新闻事件影响
- 资金流向与市场情绪
- 大盘环境 (美林时钟阶段 + 市场行情)

### 4. 策略面视角 [DSA Strategy Library]
- 缠论 / 波浪理论 / 趋势跟踪 / 龙头战法等策略如何看待此股
- 多策略共识度 (被多少策略同时选中)

## 输出格式要求

请严格按照以下 Markdown 格式输出：

```markdown
## 📊 {股票名称}({代码}) 综合分析

### 多维评分
| 维度 | 评分(1-10) | 说明 |
|------|-----------|------|
| 技术面 | X | 简要理由 |
| 基本面 | X | 简要理由 |
| 情绪面 | X | 简要理由 |
| 策略面 | X | 简要理由 |
| **综合** | **X** | 综合判断 |

### 趋势判断
- 趋势方向: 多头/空头/整理
- 关键价位: 支撑 X / 阻力 X

### ⚠️ 风险提示
1. ...
2. ...
3. ...

### 💡 操作参考
- 建议: BUY / HOLD / SELL (仅供参考)
- 理由: ...
```

## 重要规则
- 如果某项数据缺失，在对应维度标注"数据不足"
- 不预测具体涨跌幅度
- 不给出具体买卖时机建议
- 明确标注"仅供参考，不构成投资建议"
- 用中文回复，专业但平实的语言
"""


def build_ask_stock_user_prompt(
    stock_code: str,
    stock_name: str,
    user_message: str,
    trend_data: dict,
    consensus_data: dict,
    market_data: dict,
    fundamental_data: dict = None,
) -> str:
    """构建用户消息 Prompt (注入结构化数据)"""

    parts = []

    # 用户问题
    parts.append(f"## 用户提问\n{user_message}")

    # 股票信息
    parts.append(f"\n## 目标股票\n{stock_name} ({stock_code})")

    # 技术面数据
    if trend_data and "error" not in trend_data:
        parts.append("\n## 技术面数据")
        parts.append(f"- 日期: {trend_data.get('date', 'N/A')}")
        if "close" in trend_data:
            parts.append(f"- 收盘价: {trend_data.get('close')} (昨收: {trend_data.get('pre_close')})")
        parts.append(f"- 涨跌幅: {trend_data.get('pct_chg', 'N/A')}%")
        parts.append(f"- 趋势: {trend_data.get('trend', 'N/A')}")
        if trend_data.get('ma5'):
            parts.append(f"- MA5: {trend_data.get('ma5')} | MA20: {trend_data.get('ma20')}")
        if trend_data.get('bias_ma5') is not None:
            parts.append(f"- 乖离率(MA5): {trend_data.get('bias_ma5')}%")
        if trend_data.get('volume_ratio'):
            parts.append(f"- 量比: {trend_data.get('volume_ratio')}x | 状态: {trend_data.get('volume_status', 'N/A')}")
        if trend_data.get('turnover_rate'):
            parts.append(f"- 换手率: {trend_data.get('turnover_rate')}%")

    # 策略共识
    if consensus_data and "error" not in consensus_data:
        parts.append("\n## 策略共识")
        parts.append(f"- 共识等级: {consensus_data.get('consensus_level', 'N/A')}")
        strategies = consensus_data.get('strategies', [])
        if strategies:
            parts.append(f"- 选中策略: {', '.join(strategies)}")

    # 大盘环境
    if market_data and "error" not in market_data:
        parts.append("\n## 大盘环境")
        parts.append(f"- 美林时钟阶段: {market_data.get('merrill_name', 'N/A')}")
        if market_data.get('merrill_description'):
            parts.append(f"- 阶段特征: {market_data.get('merrill_description')}")
        allocation = market_data.get('allocation', {})
        if allocation:
            parts.append(f"- 推荐资产: {allocation}")

    # 基本面 (可选)
    if fundamental_data and "error" not in fundamental_data:
        parts.append(f"\n## 基本面\n- 行业: {fundamental_data.get('industry', 'N/A')}")

    parts.append("\n---\n请根据以上数据，按要求的格式给出综合分析。")

    return "\n".join(parts)
