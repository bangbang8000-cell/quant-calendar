#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""V5.2.2 (T-5.2.22): 复盘裁判 — JSON 骨架 + pydantic 校验 + markdown 渲染三件套

借鉴 vibe-astock duanxian/synthesizer.py (TomorrowFocus 风格):
- 汇总五份分析师报告 → 结构化结论(情绪档位/一句话/活跃方向+风险/验证条件)
- 重试降级链: JSON → 提取片段 → 安全占位(available=False, 不炸链)
"""
import json
import logging
import re

from pydantic import BaseModel, Field

logger = logging.getLogger(__name__)

_LEVELS = ('冰点', '修复', '发酵', '亢奋', '退潮')


class ReviewVerdict(BaseModel):
    """结构化盘面研判(裁判输出)"""
    emotion_level: str = Field('', description='情绪档位: 冰点/修复/发酵/亢奋/退潮')
    summary: str = Field('', description='一句话盘面研判')
    active_directions: list = Field(default_factory=list, description='活跃方向(题材+逻辑)')
    risks: list = Field(default_factory=list, description='风险提示')
    verify_conditions: list = Field(default_factory=list, description='明日验证条件')


VERDICT_SCHEMA = ReviewVerdict.model_json_schema()

JUDGE_PROMPT = """你是 A 股短线『复盘裁判』。汇总下列五份分析师报告, 收敛成一份可读的盘面研判。
必须输出严格 JSON(不要 markdown 代码块, 不要多余文字), 结构如下:
{schema}

分析师报告:
{reports}

要求: 情绪档位从 {levels} 中选一个; 不推荐个股、不给参与倾向; 数据不足如实说明。"""


def parse_verdict(text: str):
    """解析 JSON; 失败回退提取 {...} 片段; 再失败 → None(调用方安全占位)"""
    text = (text or '').strip()
    if not text:
        return None
    candidates = []
    try:
        candidates.append(json.loads(text))
    except Exception:  # noqa: BLE001
        pass
    if not candidates:
        m = re.search(r'\{.*\}', text, re.S)
        if m:
            try:
                candidates.append(json.loads(m.group(0)))
            except Exception:  # noqa: BLE001
                pass
    for obj in candidates:
        if not isinstance(obj, dict):
            continue
        try:
            return ReviewVerdict(**obj)
        except Exception as e:  # noqa: BLE001
            logger.warning('裁判 JSON 校验失败, 尝试兜底: %s', e)
    return None


def normalize_level(level: str) -> str:
    """档位归一化: 只认 5 档, 其他 → ''(界面显示未知)"""
    return level if level in _LEVELS else ''


def render_markdown(v: 'ReviewVerdict') -> str:
    """verdict → markdown"""
    level = normalize_level(v.emotion_level)
    lines = [f"# 盘面研判 ({level})" if level else "# 盘面研判", '',
             v.summary or '—', '']
    if v.active_directions:
        lines += ['## 活跃方向', *[f'- {d}' for d in v.active_directions], '']
    if v.risks:
        lines += ['## 风险提示', *[f'- {r}' for r in v.risks], '']
    if v.verify_conditions:
        lines += ['## 明日验证条件', *[f'- {c}' for c in v.verify_conditions], '']
    return '\n'.join(lines).rstrip() + '\n'


def judge_review(analyst_reports: dict, llm_invoke) -> dict:
    """汇总分析师报告 → 裁判输出。失败/非法 → 安全占位(available=False)。"""
    reports_text = '\n\n'.join(
        f'## {k}\n{v}' for k, v in (analyst_reports or {}).items())
    prompt = JUDGE_PROMPT.format(
        schema=json.dumps(VERDICT_SCHEMA, ensure_ascii=False),
        reports=reports_text, levels='、'.join(_LEVELS))
    try:
        text = llm_invoke(prompt)
    except Exception as e:  # noqa: BLE001
        return {'available': False,
                'reason': f'[⚠️ 裁判生成失败：{type(e).__name__}: {str(e)[:100]}]',
                'markdown': ''}
    verdict = parse_verdict(text)
    if verdict is None:
        return {'available': False,
                'reason': '[⚠️ 裁判输出无法解析为 JSON]', 'markdown': ''}
    verdict.emotion_level = normalize_level(verdict.emotion_level)
    return {'available': True, **verdict.model_dump(),
            'markdown': render_markdown(verdict)}
