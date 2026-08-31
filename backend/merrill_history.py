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
        "key_indicators": {"gdp_growth": 6.4, "cpi": 1.0, "pmi": 45.3}
    },
]

# ===== 周期元信息 =====
CYCLE_META = [
    {
        "label": "第4轮",
        "start": "2024-09",
        "end": "至今",
        "description": "政策大转向驱动的新一轮复苏周期，房地产救市+财政加力+货币宽松三管齐下",
        "dominant_stage": "recovery",
        "total_months": None,  # 进行中
    },
    {
        "label": "第3轮",
        "start": "2020-03",
        "end": "2024-09",
        "description": "疫情冲击→强力刺激→俄乌战争→地产危机，经历完整四阶段转换",
        "dominant_stage": "recession",
        "total_months": 54,
    },
    {
        "label": "第2轮",
        "start": "2013-01",
        "end": "2020-01",
        "description": "新常态下的慢复苏，供给侧改革推动结构转型，贸易战带来外部冲击",
        "dominant_stage": "recovery",
        "total_months": 84,
    },
    {
        "label": "第1轮",
        "start": "2009-01",
        "end": "2013-01",
        "description": "全球金融危机后的强力反弹，四万亿刺激带来高增长但也埋下产能过剩隐患",
        "dominant_stage": "recovery",
        "total_months": 48,
    },
]
