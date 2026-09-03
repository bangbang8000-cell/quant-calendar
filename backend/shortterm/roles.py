#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""V5.2.2 (T-5.2.21): 短线分析师角色注册中心 (借鉴 vibe-astock duanxian/roles.py)

每个角色读数据包的一个面, 产出独立报告字段; 裁判汇总。
"""
from dataclasses import dataclass


@dataclass(frozen=True)
class Role:
    key: str          # 稳定 key(序列化/UI)
    report_field: str  # 写入结果包的字段名
    title: str         # 卡片标题
    tag: str           # UI 短标签


ROLES: tuple = (
    Role('sentiment', 'sentiment_report', '情绪面', '情绪面'),
    Role('capital', 'capital_report', '资金面', '资金面'),
    Role('theme', 'theme_report', '题材热点', '题材热点'),
    Role('dragon_tiger', 'dragon_tiger_report', '龙虎榜游资', '龙虎榜'),
    Role('leader', 'leader_report', '龙头跟踪', '龙头'),
)
