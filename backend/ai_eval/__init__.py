#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""V5.9 (T-5.9.1): AI 评估子包 — AIEvaluator 拆分自 ai_evaluator.py"""
from ._base import AIEvalBase
from ._models import AIModelsMixin
from ._eval import AIEvalMixin
from ._history import AIHistoryMixin
from typing import Optional
from dataclasses import dataclass

@dataclass(init=False)
class AIEvaluator(AIHistoryMixin, AIEvalMixin, AIModelsMixin, AIEvalBase):
    """AI 股票评估模块 (拆分后聚合 Mixin, 行为与拆分前一致)"""
    pass
