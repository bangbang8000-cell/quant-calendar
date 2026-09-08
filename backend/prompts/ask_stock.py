#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
AI 问股 Prompt 模板 — 融合 TradingAgents + DSA + 自有数据

借鉴:
- TradingAgents: 5分析师系统提示词 (基本面/情绪/新闻/技术/社交媒体)
- DSA: StockTrendAnalyzer 技术分析维度 + 策略库视角
- 自有: 美林时钟 + 策略共识 + 持仓数据

v3.17.1 (FR-3.17.1): 智能投顾助手
- A. 多轮上下文：build_ask_stock_user_prompt 新增 conversation_context 参数
- B. 多股票对比：build_compare_system_prompt 输出对比表格
- C. 事实护栏：FACT_GUARD_RULE + 数据卡注入（fact_card / compare_data）
"""

# 事实护栏规则 (C)：禁止编造行情/估值/财务数字，仅可用数据卡中的值
FACT_GUARD_RULE = """## 事实护栏（强制）
- 回答中出现的任何行情、估值、财务等数字，只允许引用上方「数据卡」中给出的数值与数据日期；
- 数据卡中标注「数据暂不可用」的字段，正文对应处必须同样写「数据暂不可用」，不得猜测、不得用其他来源的数字替代；
- 未提供数据卡的维度（如行业排名、机构预测），若无法从已给数据推导，明确标注「数据暂不可用」或说明缺乏数据；
- 明确标注"仅供参考，不构成投资建议"。"""


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


def build_compare_system_prompt() -> str:
    """构建多股对比 System Prompt (FR-3.17.1 B. 多股票对比)"""
    return """你是量化选股日历的专业 AI 投顾助手，擅长多只股票的横向对比分析。

## 对比输出格式要求
当用户要求对比多只股票时，请严格按以下 Markdown 结构输出（股票数量与「多股对比数据卡」一致）：

```markdown
## 对比总览
| 维度 | {股票1}({代码1}) | {股票2}({代码2}) |
|------|----------------|----------------|
| 估值 (PE/PB) | ... | ... |
| 技术 (涨跌幅/RSI) | ... | ... |
| 资金 (近5日主力净流入) | ... | ... |
| 风险 (波动率/回撤) | ... | ... |

### 逐项点评
- **估值**：...（哪只更便宜/贵，数字仅引用「多股对比数据卡」）
- **技术**：...
- **资金**：...
- **风险**：...

### 综合结论
- 相对占优标的：...
- 各自适合的场景：...
- 风险提示与"仅供参考，不构成投资建议"
```

## 重要规则
- 对比表格中所有数字必须来自提供的「多股对比数据卡」，不得自行编造；
- 数据卡中标注「数据暂不可用」的格子，对比表中同样写「数据暂不可用」；
- 不预测具体涨跌幅度，不给出具体买卖时机；
- 用中文回复，专业但平实的语言。
"""


def build_ask_stock_user_prompt(
    stock_code: str,
    stock_name: str,
    user_message: str,
    trend_data: dict,
    consensus_data: dict,
    market_data: dict,
    fundamental_data: dict = None,
    fact_card: dict = None,
    fact_instruction: str = None,
    conversation_context: str = None,
    compare_data: dict = None,
) -> str:
    """构建用户消息 Prompt (注入结构化数据)

    v3.17.1 新增：
    - fact_card: 个股数据卡（C. 事实护栏）
    - compare_data: 多股对比数据卡（B. 多股票对比）
    - fact_instruction: 事实护栏规则文本
    - conversation_context: 多轮追问上下文（A. 多轮对话）
    """

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

    # 多轮上下文 (FR-3.17.1 A)：同一会话前几轮结论，支持追问
    if conversation_context:
        parts.append("\n## 追问上下文\n" + conversation_context)

    # 多股对比数据卡 (FR-3.17.1 B)：多代码对比请求时注入
    if compare_data:
        from prompt_facts import build_compare_table_markdown
        parts.append("\n" + build_compare_table_markdown(compare_data))

    # 个股数据卡 (FR-3.17.1 C)：单股请求注入数据卡，数值以此为准
    if fact_card and not compare_data:
        from prompt_facts import build_fact_card_markdown
        parts.append("\n" + build_fact_card_markdown(fact_card))

    # 事实护栏规则（强制）
    if fact_instruction:
        parts.append("\n---\n" + fact_instruction)

    parts.append("\n---\n请根据以上数据，按要求的格式给出综合分析。")

    return "\n".join(parts)
