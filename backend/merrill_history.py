#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
美林时钟历史周期数据 v3.0
基于中国经济实际运行数据构建（2008-至今）
"""

# ===== 历史阶段转移记录（共14条，覆盖4轮完整周期） =====
HISTORICAL_TRANSITIONS = [
    # ─── 第4轮：2024-09 至今 ───
    {
        "from_stage": "recession",
        "to_stage": "recovery",
        "transition_date": "2024-09-24",
        "from_name": "衰退期",
        "to_name": "复苏期",
        "duration_days": 612,
        "duration_months": 20.4,
        "cycle_label": "第4轮",
        "trigger": "央行降准降息组合拳 + 房地产救市政策 + 财政加力",
        "essence": "政策大转向 + 降准降息 + 财政加力，信心修复期",
        "key_indicators": {"gdp_growth": 4.7, "cpi": 0.3, "pmi": 49.1}
    },
    # ─── 第3轮：2023-01 → 2024-09 衰退（地产通缩）───
    {
        "from_stage": "stagflation",
        "to_stage": "recession",
        "transition_date": "2023-01-15",
        "from_name": "滞胀期",
        "to_name": "衰退期",
        "duration_days": 306,
        "duration_months": 10.2,
        "cycle_label": "第3轮",
        "trigger": "疫情封控解除后需求恢复不及预期 + 地产销售持续下滑",
        "essence": "地产销售下滑 + 需求疲弱，通缩隐忧",
        "key_indicators": {"gdp_growth": 3.0, "cpi": 1.8, "pmi": 48.0}
    },
    # 第3轮：2022-03 → 2023-01 滞胀
    {
        "from_stage": "overheat",
        "to_stage": "stagflation",
        "transition_date": "2022-03-15",
        "from_name": "过热期",
        "to_name": "滞胀期",
        "duration_days": 226,
        "duration_months": 7.5,
        "cycle_label": "第3轮",
        "trigger": "俄乌战争爆发 + 上海疫情封控 + 美联储加息周期",
        "essence": "俄乌推高成本 + 封控扰动经济",
        "key_indicators": {"gdp_growth": 4.8, "cpi": 1.5, "ppi": 8.8}
    },
    # 第3轮：2021-07 → 2022-03 过热
    {
        "from_stage": "recovery",
        "to_stage": "overheat",
        "transition_date": "2021-07-15",
        "from_name": "复苏期",
        "to_name": "过热期",
        "duration_days": 474,
        "duration_months": 15.8,
        "cycle_label": "第3轮",
        "trigger": "全球大放水滞后效应 + PPI飙升至13.5% + 大宗商品超级周期",
        "essence": "全球大放水 + PPI 13.5%，商品超级周期",
        "key_indicators": {"gdp_growth": 7.9, "cpi": 1.1, "ppi": 9.0}
    },
    # 第3轮：2020-03 → 2021-07 复苏
    {
        "from_stage": "recession",
        "to_stage": "recovery",
        "transition_date": "2020-03-15",
        "from_name": "衰退期",
        "to_name": "复苏期",
        "duration_days": 48,
        "duration_months": 1.6,
        "cycle_label": "第3轮",
        "trigger": "新冠疫情冲击（GDP单季-6.8%）→ 央行紧急降息+特别国债",
        "essence": "疫情冲击后 V 型修复，特别国债稳增长",
        "key_indicators": {"gdp_growth": -6.8, "cpi": 4.3, "pmi": 35.7}
    },
    # ─── 第2轮：2019-06 → 2020-01 复苏 ───
    {
        "from_stage": "recession",
        "to_stage": "recovery",
        "transition_date": "2019-06-15",
        "from_name": "衰退期",
        "to_name": "复苏期",
        "duration_days": 488,
        "duration_months": 16.3,
        "cycle_label": "第2轮",
        "trigger": "中美贸易战缓和 + LPR改革降息 + 逆周期调节加码",
        "essence": "贸易战缓和 + LPR 改革降息，逆周期加码",
        "key_indicators": {"gdp_growth": 6.2, "cpi": 2.7, "pmi": 49.4}
    },
    # 第2轮：2018-02 → 2019-06 衰退
    {
        "from_stage": "overheat",
        "to_stage": "recession",
        "transition_date": "2018-02-15",
        "from_name": "过热期",
        "to_name": "衰退期",
        "duration_days": 180,
        "duration_months": 6.0,
        "cycle_label": "第2轮",
        "trigger": "金融去杠杆 + 中美贸易战开打 + 民企违约潮",
        "essence": "金融去杠杆 + 贸易战开打，民企违约潮",
        "key_indicators": {"gdp_growth": 6.8, "cpi": 1.5, "ppi": 6.9}
    },
    # 第2轮：2016-08 → 2018-02 过热
    {
        "from_stage": "recovery",
        "to_stage": "overheat",
        "transition_date": "2016-08-15",
        "from_name": "复苏期",
        "to_name": "过热期",
        "duration_days": 1330,
        "duration_months": 44.3,
        "cycle_label": "第2轮",
        "trigger": "供给侧改革 + 房地产去库存 + PPI由负转正加速上行",
        "essence": "供给侧改革 + 去库存，PPI 由负转正",
        "key_indicators": {"gdp_growth": 6.7, "cpi": 1.3, "ppi": -0.8}
    },
    # 第2轮：2013-01 → 2016-08 复苏
    {
        "from_stage": "recession",
        "to_stage": "recovery",
        "transition_date": "2013-01-15",
        "from_name": "衰退期",
        "to_name": "复苏期",
        "duration_days": 164,
        "duration_months": 5.5,
        "cycle_label": "第2轮",
        "trigger": "十八大后稳增长政策 + 降息降准 + 棚改货币化启动",
        "essence": "稳增长 + 降息降准，棚改货币化启动",
        "key_indicators": {"gdp_growth": 7.7, "cpi": 2.0, "pmi": 50.4}
    },
    # ─── 第1轮：2012-08 → 2013-01 衰退 ───
    {
        "from_stage": "stagflation",
        "to_stage": "recession",
        "transition_date": "2012-08-15",
        "from_name": "滞胀期",
        "to_name": "衰退期",
        "duration_days": 377,
        "duration_months": 12.6,
        "cycle_label": "第1轮",
        "trigger": "欧债危机深化 + 国内产能过剩 + 出口大幅下滑",
        "essence": "欧债危机深化 + 产能过剩，出口下滑",
        "key_indicators": {"gdp_growth": 7.6, "cpi": 1.8, "pmi": 49.2}
    },
    # 第1轮：2011-07 → 2012-08 滞胀
    {
        "from_stage": "overheat",
        "to_stage": "stagflation",
        "transition_date": "2011-07-15",
        "from_name": "过热期",
        "to_name": "滞胀期",
        "duration_days": 167,
        "duration_months": 5.6,
        "cycle_label": "第1轮",
        "trigger": "四万亿后遗症显现 + CPI破6.5% + 央行密集加息",
        "essence": "四万亿后遗症 + CPI 破 6.5%，加息周期",
        "key_indicators": {"gdp_growth": 9.5, "cpi": 6.5, "pmi": 50.7}
    },
    # 第1轮：2010-02 → 2011-07 过热
    {
        "from_stage": "recovery",
        "to_stage": "overheat",
        "transition_date": "2010-02-15",
        "from_name": "复苏期",
        "to_name": "过热期",
        "duration_days": 379,
        "duration_months": 12.6,
        "cycle_label": "第1轮",
        "trigger": "四万亿全面生效 + GDP反弹至10.6% + 通胀快速攀升",
        "essence": "四万亿全面生效，GDP 破 10% 通胀起",
        "key_indicators": {"gdp_growth": 10.6, "cpi": 1.5, "pmi": 55.8}
    },
    # 第1轮：2009-01 → 2010-02 复苏
    {
        "from_stage": "recession",
        "to_stage": "recovery",
        "transition_date": "2009-01-15",
        "from_name": "衰退期",
        "to_name": "复苏期",
        "duration_days": 107,
        "duration_months": 3.6,
        "cycle_label": "第1轮",
        "trigger": "全球金融危机冲击（GDP跌至6.4%）→ 四万亿刺激 + 十大产业振兴",
        "essence": "四万亿 + 产业振兴，强力反弹",
        "key_indicators": {"gdp_growth": 6.4, "cpi": 1.0, "pmi": 45.3}
    },
]

# ===== 周期元信息 =====
CYCLE_META = [
    {
        "label": "第4轮",
        "start": "2024-09",
        "end": "至今",
        "lead_start": "2022-10",  # 起点阶段(衰退)开始: 地产危机
        "description": "政策大转向驱动的新一轮复苏周期，房地产救市+财政加力+货币宽松三管齐下",
        "dominant_stage": "recovery",
        "total_months": None,  # 进行中
    },
    {
        "label": "第3轮",
        "start": "2020-03",
        "end": "2024-09",
        "lead_start": "2020-01",  # 起点阶段(衰退)开始: 疫情冲击
        "description": "疫情冲击→强力刺激→俄乌战争→地产危机，经历完整四阶段转换",
        "dominant_stage": "recession",
        "total_months": 54,
    },
    {
        "label": "第2轮",
        "start": "2013-01",
        "end": "2020-01",
        "lead_start": "2012-08",  # 起点阶段(衰退)开始: 四万亿后遗症
        "description": "新常态下的慢复苏，供给侧改革推动结构转型，贸易战带来外部冲击",
        "dominant_stage": "recovery",
        "total_months": 84,
    },
    {
        "label": "第1轮",
        "start": "2009-01",
        "end": "2013-01",
        "lead_start": "2008-11",  # 起点阶段(衰退)开始: 全球金融危机
        "description": "全球金融危机后的强力反弹，四万亿刺激带来高增长但也埋下产能过剩隐患",
        "dominant_stage": "recovery",
        "total_months": 48,
    },
]

# ===== V4.8 (R1): 时间轴小阶段独有信息 — 每阶段一条, 用于时间轴弹窗 =====
# key: (cycle_label, stage_key) → 该阶段独有信息
# 字段:
#   essence:        本周期本阶段凝练要点 (弹窗主内容, 一段话)
#   trigger:        该阶段触发/转换原因 (当前阶段显示实时指标, 此字段可省)
#   key_indicators: 该阶段关键指标快照 {name: value}
#   highlight:      本阶段独特性亮点 (区别于其他阶段的事件/特征, 可选)
# 来源优先级: STAGE_BRIEFS > HISTORICAL_TRANSITIONS 自带 essence > 阶段通用描述
STAGE_BRIEFS = {
    # ─── 第4轮 (2024-09 至今) ───
    ("第4轮", "recovery"): {
        "essence": "政策大转向驱动的新一轮复苏：房地产救市+降准降息+财政加力三管齐下，信心修复期",
        "key_indicators": {"gdp_growth": 4.7, "cpi": 0.3, "pmi": 49.1},
        "highlight": "本轮复苏始于 2024-09 政策组合拳（降准降息+地产救市），是近年来力度最大的政策转向",
    },
    ("第4轮", "recession"): {
        "essence": "地产深度调整，资产负债表收缩期：销售/投资双降，经济承压",
        "key_indicators": {"gdp_growth": 5.0, "cpi": 0.2, "pmi": 48.5},
        "highlight": "本轮衰退由地产长周期调整引发，与以往货币/外部冲击型衰退不同",
    },
    # ─── 第3轮 (2020-01 ~ 2024-09) ───
    ("第3轮", "recovery"): {
        "essence": "疫情冲击后 V 型修复：紧急降息 + 特别国债 + 新基建，需求快速回补",
        "trigger": "新冠疫情冲击（GDP单季-6.8%）→ 央行紧急降息+特别国债",
        "key_indicators": {"gdp_growth": -6.8, "cpi": 4.3, "pmi": 35.7},
        "highlight": "本轮复苏仅持续约 1.6 个月即转向过热——政策急刺激+补库存，是史上最短复苏",
    },
    ("第3轮", "overheat"): {
        "essence": "全球大放水滞后效应显现：PPI 飙升至 13.5%，大宗商品超级周期",
        "trigger": "全球大放水滞后效应 + PPI飙升至13.5% + 大宗商品超级周期",
        "key_indicators": {"gdp_growth": 7.9, "cpi": 1.1, "ppi": 9.0},
        "highlight": "PPI 一度冲高至 13.5% 的历史高位，供给侧约束+全球需求共振",
    },
    ("第3轮", "stagflation"): {
        "essence": "俄乌战争推高成本 + 上海疫情封控扰动经济，滞胀风险显现",
        "trigger": "俄乌战争爆发 + 上海疫情封控 + 美联储加息周期",
        "key_indicators": {"gdp_growth": 4.8, "cpi": 1.5, "ppi": 8.8},
        "highlight": "外部供给冲击（俄乌）叠加内部封控，成本推升型通胀与增长放缓并存",
    },
    ("第3轮", "recession"): {
        "essence": "地产销售持续下滑 + 需求恢复不及预期，通缩隐忧显现",
        "trigger": "疫情封控解除后需求恢复不及预期 + 地产销售持续下滑",
        "key_indicators": {"gdp_growth": 3.0, "cpi": 1.8, "pmi": 48.0},
        "highlight": "本轮衰退由地产长周期下行主导，PPI 转负进入通缩区间",
    },
    # ─── 第2轮 (2012-08 ~ 2020-01) ───
    ("第2轮", "recovery"): {
        "essence": "第2轮两次复苏：前期棚改货币化稳增长（2013），后期贸易战缓和+LPR降息（2019），LPR 改革是亮点",
        "trigger": "十八大后稳增长 + 棚改货币化；2019 贸易战缓和 + LPR 改革降息",
        "key_indicators": {"gdp_growth": 7.7, "cpi": 2.0, "pmi": 50.4},
        "highlight": "第2轮出现两次复苏（2013/2019），LPR 利率并轨改革推动融资成本下行",
    },
    ("第2轮", "overheat"): {
        "essence": "供给侧改革 + 房地产去库存 + PPI 由负转正加速上行",
        "trigger": "供给侧改革 + 房地产去库存 + PPI由负转正加速上行",
        "key_indicators": {"gdp_growth": 6.7, "cpi": 1.3, "ppi": -0.8},
        "highlight": "供给侧去产能使 PPI 从 -5.9% 暴力修复，是历史上罕见的供给收缩型过热",
    },
    ("第2轮", "recession"): {
        "essence": "金融去杠杆 + 中美贸易战开打 + 民企违约潮，信用收缩",
        "trigger": "金融去杠杆 + 中美贸易战开打 + 民企违约潮",
        "key_indicators": {"gdp_growth": 6.8, "cpi": 1.5, "ppi": 6.9},
        "highlight": "资管新规+去杠杆引发信用收缩，民企债违约潮是本轮衰退的鲜明特征",
    },
    # ─── 第1轮 (2008-11 ~ 2013-01) ───
    ("第1轮", "recovery"): {
        "essence": "四万亿 + 十大产业振兴，全球金融危机后的强力反弹",
        "trigger": "全球金融危机冲击（GDP跌至6.4%）→ 四万亿刺激 + 十大产业振兴",
        "key_indicators": {"gdp_growth": 6.4, "cpi": 1.0, "pmi": 45.3},
        "highlight": "四万亿投资是史上最大规模刺激，基建/地产链条全面启动",
    },
    ("第1轮", "overheat"): {
        "essence": "四万亿全面生效：GDP 反弹至 10.6%，通胀快速攀升",
        "trigger": "四万亿全面生效 + GDP反弹至10.6% + 通胀快速攀升",
        "key_indicators": {"gdp_growth": 10.6, "cpi": 1.5, "pmi": 55.8},
        "highlight": "GDP 重回两位数增长，四万亿后遗症（产能/杠杆）在此埋下伏笔",
    },
    ("第1轮", "stagflation"): {
        "essence": "四万亿后遗症显现：CPI 破 6.5%，央行密集加息，滞胀特征",
        "trigger": "四万亿后遗症显现 + CPI破6.5% + 央行密集加息",
        "key_indicators": {"gdp_growth": 9.5, "cpi": 6.5, "pmi": 50.7},
        "highlight": "CPI 冲高至 6.5% 的历史高位，是 20 年来最强通胀阶段",
    },
    ("第1轮", "recession"): {
        "essence": "欧债危机深化 + 国内产能过剩 + 出口大幅下滑，经济减速",
        "trigger": "欧债危机深化 + 国内产能过剩 + 出口大幅下滑",
        "key_indicators": {"gdp_growth": 7.6, "cpi": 1.8, "pmi": 49.2},
        "highlight": "外部欧债+内部产能过剩双重压制，出口增速一度转负",
    },
    # ─── 起点阶段补全 (各轮 lead_start 起点) ───
    ("第3轮", "recession_start"): {
        "essence": "疫情冲击，全国停摆需求骤降，史上最快衰退",
        "key_indicators": {"gdp_growth": -6.8, "cpi": 4.3, "pmi": 35.7},
        "highlight": "2020-01 疫情停摆，单季 GDP 深度负增长，衰退一步到位",
    },
    ("第2轮", "recession_start"): {
        "essence": "四万亿后遗症 + 欧债深化，经济增速换挡下行",
        "key_indicators": {"gdp_growth": 7.4, "cpi": 2.5, "pmi": 50.1},
        "highlight": "增速换挡期开启，从高速增长转向中高速",
    },
    ("第1轮", "recession_start"): {
        "essence": "次贷危机引爆，出口断崖，外需冲击型衰退",
        "key_indicators": {"gdp_growth": 9.0, "cpi": 4.0, "pmi": 38.8},
        "highlight": "2008 全球金融危机，出口断崖式下跌，外需冲击型衰退",
    },
}

# ===== 每轮起点阶段的触发原因 (V4.0.7 补全 build_timeline 的起点 trigger 缺口; V4.0.8 精炼为本周期凝练要点) =====
START_STAGE_TRIGGERS = {
    "第4轮": "地产深度调整，资产负债表收缩期",
    "第3轮": "疫情冲击，全国停摆需求骤降",
    "第2轮": "四万亿后遗症 + 欧债深化",
    "第1轮": "次贷危机引爆，出口断崖",
}

# ===== v3.22-I4: 历史周期时间轴 =====

def _parse_date(s):
    """解析日期字符串为 (y, m) 元组, 失败返回 None"""
    import re
    m = re.match(r'(\d{4})[-/](\d{1,2})', str(s or ''))
    if not m:
        return None
    return (int(m.group(1)), int(m.group(2)))


def _merge_brief(stage: dict, label: str, stage_key: str) -> dict:
    """合并 STAGE_BRIEFS 独有信息到阶段 (V4.8 R1)

    来源优先级: STAGE_BRIEFS > 已有 essence/trigger (HISTORICAL_TRANSITIONS) > 阶段通用描述(前端兜底)
    仅补充缺失字段, 不覆盖转换自带的 essence/trigger (保留更精确的周期内信息)。
    """
    brief = STAGE_BRIEFS.get((label, stage_key)) or {}
    if brief:
        for k, v in brief.items():
            if k == 'key_indicators':
                # 仅当指标缺失或全空时注入 (保留转换记录更精确的周期内指标)
                existing = stage.get('key_indicators')
                if not existing or not any(existing.values()):
                    stage['key_indicators'] = dict(v)
            else:
                # 空值/缺失才注入 (保留转换记录自带 essence/trigger)
                if not stage.get(k):
                    stage[k] = v
    return stage


def build_timeline(transitions, current_stage='', current_stage_start='', max_cycles=4):
    """将阶段转换记录聚合为周期时间轴(最近 max_cycles 轮).

    Args:
        transitions: 转换记录列表(含 from_stage/to_stage/transition_date/cycle_label/
                     duration_months/trigger/from_name/to_name)
        current_stage: 当前阶段(英文 key, 如 recovery)
        current_stage_start: 当前阶段开始时间
        max_cycles: 返回的最大轮数, 默认 4

    Returns:
        {"cycles": [{"label": str, "stages": [
            {"stage": str, "name": str, "start": str, "end": str,
             "duration_months": float, "trigger": str, "is_current": bool,
             "from_stage": str, "to_stage": str}
        ]}]}
    """
    cycles = {}
    # 按轮分组 + 每条转换生成一个"到达阶段"
    for t in transitions:
        label = t.get('cycle_label') or '未知轮'
        start = t.get('transition_date') or ''
        stage = t.get('to_stage') or ''
        cycles.setdefault(label, []).append(_merge_brief({
            'stage': stage,
            'name': t.get('to_name') or '',
            'start': start,
            'duration_months': t.get('duration_months') or 0,
            'trigger': t.get('trigger') or '',
            'essence': t.get('essence') or '',  # V4.0.8: 本周期本阶段凝练要点
            'from_stage': t.get('from_stage') or '',
            'from_name': t.get('from_name') or '',
            'to_stage': t.get('to_stage') or '',
            'is_current': False,
        }, label, stage))

    # 当前阶段补全到最近一轮
    if current_stage:
        if cycles:
            first_label = sorted(cycles.keys(), reverse=True)[0]
        else:
            first_label = '当前'
        cur = _merge_brief({
            'stage': current_stage, 'name': '', 'start': str(current_stage_start or '')[:10],
            'end': '', 'duration_months': None, 'trigger': '',
            'from_stage': '', 'to_stage': current_stage, 'is_current': True,
        }, first_label, current_stage)
        cycles[first_label].append(cur)

    # 每轮 stages 按 start 日期升序 + 开头补起点阶段(第一条的 from_stage)
    for label in cycles:
        stages = cycles[label]
        stages.sort(key=lambda s: _parse_date(s['start']) or (0, 0))
        if stages and stages[0].get('from_stage'):
            first = stages[0]
            if first['stage'] != first['from_stage']:
                # V4.0.7 补全: 起点阶段不再空 start/trigger/时长 — 从 CYCLE_META.lead_start + START_STAGE_TRIGGERS 填充
                meta = next((m for m in CYCLE_META if m.get('label') == label), {})
                lead = meta.get('lead_start') or ''
                dur = None
                if lead and first['start']:
                    d1 = _parse_date(lead)
                    d2 = _parse_date(first['start'])
                    if d1 and d2:
                        dur = round((d2[0] * 12 + d2[1]) - (d1[0] * 12 + d1[1]), 1)
                stages.insert(0, _merge_brief({
                    'stage': first['from_stage'],
                    'name': first.get('from_name', ''),
                    'start': lead,
                    'end': first['start'][:10],
                    'duration_months': dur,
                    'trigger': START_STAGE_TRIGGERS.get(label, ''),
                    'essence': START_STAGE_TRIGGERS.get(label, ''),  # V4.0.8: 起点阶段本周期要点
                    'from_stage': '',
                    'from_name': '',
                    'to_stage': first['from_stage'],
                    'is_current': False,
                }, label, first['from_stage'] + '_start'))

    # 构造结果(轮次降序, 取最近 max_cycles 轮)
    ordered = sorted(cycles.keys(), key=lambda k: _parse_date(cycles[k][0]['start']) or (0, 0), reverse=True)
    result = []
    for label in ordered[:max_cycles]:
        stages = cycles[label]
        for i, s in enumerate(stages):
            if i + 1 < len(stages):
                s['end'] = stages[i + 1]['start'][:10]
            else:
                s['end'] = ''
        result.append({'label': label, 'stages': stages})
    return {'cycles': result}
