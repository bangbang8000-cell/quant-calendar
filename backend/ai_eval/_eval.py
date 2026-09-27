#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
AI股票评估模块
v1.7.0: 纯大模型体系，支持多 provider fallback
- 移除内置引擎，所有评估通过 LLM API
- 多模型管理：启用/禁用/优先级/探测
- 评估历史增强：原始数据 + 原始 LLM 响应

6.3.0 (T-6.3.0.4): 按「取数 / LLM 调用与提示词 / 内置评分 / 评估主流程」二次拆分，
本文件保留原导入路径与 AIEvalMixin 注册名（薄聚合壳），对外行为不变。
"""
import logging
from typing import Dict, List  # noqa: F401  # 原导入路径公开名，保持兼容
from datetime import datetime  # noqa: F401  # 原导入路径公开名，保持兼容
from ai_models import ModelProvider  # noqa: F401  # 原导入路径公开名，保持兼容

from ._eval_retry import _post_with_retry  # noqa: F401  # 兼容原模块级引用
from ._eval_fetch import AIEvalFetchMixin as _AIEvalFetchMixin
from ._eval_llm import AIEvalLLMMixin as _AIEvalLLMMixin
from ._eval_builtin import AIEvalBuiltinMixin as _AIEvalBuiltinMixin
from ._eval_core import AIEvalCoreMixin as _AIEvalCoreMixin

logger = logging.getLogger(__name__)


class AIEvalMixin(_AIEvalCoreMixin, _AIEvalBuiltinMixin, _AIEvalLLMMixin, _AIEvalFetchMixin):
    """V5.0.9 (T-5.0.91): AIEvaluator 拆分 Mixin (_eval) — 6.3.0 二次拆分后聚合"""
    pass
