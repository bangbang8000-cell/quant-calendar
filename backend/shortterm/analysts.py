#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""V5.2.2 (T-5.2.21): 多分析师编排 — 情绪面/资金面/题材热点/龙虎榜游资/龙头跟踪

借鉴 vibe-astock duanxian/analysts.py:
- 每个角色读数据包一个面, 产出独立报告字段
- **任一分析师失败降级不炸链**: 报告字段为 [⚠️ ...] 信封
- llm_invoke: 可注入(测试用 mock; 生产接 ai_eval.generate_review)
- 数据诚实性: 指标不可用如实说明, 不脑补数字; 不推荐个股/不给买卖倾向
"""
import logging

from .roles import ROLES

logger = logging.getLogger(__name__)

_STYLE = "客观陈述事实, 不推荐个股、不给参与倾向、不给买卖点位。"
_LEN = "控制在 300 字内。"


def _g(d, *keys):
    """安全取嵌套字段"""
    for k in keys:
        d = (d or {}).get(k) if isinstance(d, dict) else None
        if d is None:
            return None
    return d


def build_analyst_prompt(role, bundle) -> str:
    """按角色从数据包切片组 prompt"""
    if role.key == 'sentiment':
        return _sentiment_prompt(bundle)
    if role.key == 'capital':
        return _capital_prompt(bundle)
    if role.key == 'theme':
        return _theme_prompt(bundle)
    if role.key == 'dragon_tiger':
        return _dragon_tiger_prompt(bundle)
    if role.key == 'leader':
        return _leader_prompt(bundle)
    return f"你是 A 股短线「{role.title}分析师」。基于今日数据产出复盘。{_STYLE} {_LEN}"


def _sentiment_prompt(bundle):
    me = bundle.get('money_effect') or {}
    prom = bundle.get('promotion') or {}
    cycle = bundle.get('sentiment_cycle') or {}
    sq = bundle.get('seal_quality') or {}
    return (f"你是 A 股短线『情绪面分析师』。基于下列今日数据产出情绪面复盘。\n"
            f"赚钱效应: avg={me.get('avg')} median={me.get('median')} "
            f"翻红率={me.get('positive_rate')} 再涨停={me.get('limit_up_again_rate')} "
            f"(source={me.get('source')})\n"
            f"晋级率: 整体={_g(prom, 'overall', 'rate')} "
            f"1进2={_g(prom, 'tiers', '1进2', 'rate')} 2进3={_g(prom, 'tiers', '2进3', 'rate')}\n"
            f"情绪周期: trend={cycle.get('trend')} 当前分={cycle.get('current_score')} "
            f"距低谷={cycle.get('day_n')}天 低谷日={cycle.get('trough_date')}\n"
            f"封板质量: 炸板率={sq.get('broken_rate')} 早盘封板={sq.get('early_seal_rate')}\n"
            f"请解读: 赚钱效应强弱(均值与中位数背离时以中位数为准)、晋级率周期位置、"
            f"连板梯队断层与否、综合给情绪档位(冰点/修复/发酵/亢奋/退潮择一)并说明支撑读数。\n"
            f"指标显示不可用请如实说明, 不脑补数字。{_STYLE} {_LEN}")


def _capital_prompt(bundle):
    sf = bundle.get('sector_flow') or {}
    rows = _g(sf, 'rows') or []
    top = rows[:8]
    top_txt = '\n'.join(f"- {r.get('name')} 涨跌{r.get('pct_chg')}% "
                        f"主力净流入{r.get('main_net_inflow')}" for r in top) or '(不可用)'
    return (f"你是 A 股短线『资金面分析师』。板块资金流 top:\n{top_txt}\n"
            f"请解读资金主线、流入集中度与是否延续。若板块资金流不可用请如实说明。{_STYLE} {_LEN}")


def _theme_prompt(bundle):
    th = bundle.get('theme_structure') or {}
    top = th.get('top') or []
    top_txt = '\n'.join(f"- {t.get('industry')} {t.get('count')}家" for t in top) or '(不可用)'
    note = th.get('note', '行业口径近似题材')
    return (f"你是 A 股短线『题材热点分析师』。今日题材结构(top, {note}):\n{top_txt}\n"
            f"请解读题材集中度、发酵节奏(早盘集中=主动发酵/午后=被动轮动)。"
            f"数据不可用请如实说明。{_STYLE} {_LEN}")


def _dragon_tiger_prompt(bundle):
    lhb = bundle.get('lhb_rows') or []
    top = lhb[:8]
    top_txt = '\n'.join(f"- {r.get('name')} 涨跌{r.get('pct_chg')}% 净买{r.get('net_buy')} "
                        f"性质{r.get('tags')} 原因{r.get('reason')}" for r in top) or '(不可用)'
    return (f"你是 A 股短线『龙虎榜游资分析师』。龙虎榜 top:\n{top_txt}\n"
            f"请解读游资/机构动向与风格(客观归类, 非推荐)。数据不可用请如实说明。{_STYLE} {_LEN}")


def _leader_prompt(bundle):
    weekly = bundle.get('weekly') or {}
    leaders = weekly.get('leaders') or []
    lead_txt = '\n'.join(f"- {l.get('industry')}: {l.get('name')} {l.get('boards')}板"
                         for l in leaders[:8]) or '(不可用)'
    return (f"你是 A 股短线『龙头跟踪分析师』。近5日各行业龙头谱系:\n{lead_txt}\n"
            f"请解读龙头高度、是否断板、有无接力。客观陈述非推荐。{_STYLE} {_LEN}")


def run_analyst(role, bundle, llm_invoke) -> dict:
    """单个分析师: 失败降级信封([⚠️] 不炸链)"""
    try:
        prompt = build_analyst_prompt(role, bundle)
        text = llm_invoke(prompt)
        return {role.report_field: (text or '').strip()}
    except Exception as e:  # noqa: BLE001
        logger.warning('分析师 %s 失败: %s', role.key, e)
        return {role.report_field:
                f"[⚠️ {role.title} 分析生成失败已跳过：{type(e).__name__}: {str(e)[:100]}]"}


def run_analysts(bundle, llm_invoke, roles=None) -> dict:
    """串行跑全部角色; 任一失败不炸链。返回 {report_field: 报告文本, ...}"""
    out = {}
    for role in (roles or ROLES):
        out.update(run_analyst(role, bundle, llm_invoke))
    return out
