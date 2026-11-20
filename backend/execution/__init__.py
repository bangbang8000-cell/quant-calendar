#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""执行与实盘联动 (v7.8): 狩猎场 / 执行计划 / VaR 风险预算

模块职责:
- support.py      支撑位 4 算法 + 买入区间(纯函数, 可单测)
- hunting.py      选股结果 → 支撑位比较 → 跟踪入库
- plans.py        执行计划状态机 + 成交回报 + CSV 交换
- exchange.py     受控文件交换(路径白名单 + 审计)
- risk_budget.py  三口径 VaR + 风险等级 + 连续降温守卫
"""
from . import exchange, hunting, plans, risk_budget, support

__all__ = ["exchange", "hunting", "plans", "risk_budget", "support"]
