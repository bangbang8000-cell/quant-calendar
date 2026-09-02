#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""V5.9 (T-5.9.3): merrill_clock 常量与阶段定义 (拆自头部)"""
#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
美林时钟模块 v3.0
多维度经济周期判断 + 精确周期时间跟踪 + 动态重评估 + AKShare真实数据
"""
import json  # noqa: E402,F401
import os  # noqa: E402,F401
import time  # noqa: E402,F401
from datetime import datetime, timedelta  # noqa: E402,F401
import numpy as np  # noqa: E402,F401
import logging  # noqa: E402,F401
from paths import MERRILL_CACHE_FILE as CACHE_FILE, MERRILL_HISTORY_FILE as HISTORY_FILE, MERRILL_SNAPSHOT_FILE as SNAPSHOT_FILE  # noqa: E402,F401
from merrill_history import HISTORICAL_TRANSITIONS  # noqa: E402,F401

logger = logging.getLogger(__name__)

# ===== 四阶段定义 =====
STAGES = {
    'recovery': {
        'name': '复苏期',
        'stage_cn': '复苏',
        'description': '经济增长加速，通胀仍在低位，企业盈利改善，是股票投资的黄金时期',
        'color': '#81C784',
        'bg_color': '#E8F5E9',
        'icon': '🌱',
        'strategy_mapping': {
            'primary': ['动量策略', '质量策略', '成长股策略'],
            'secondary': ['趋势跟踪', '行业轮动'],
            'rationale': '经济复苏期企业盈利改善，动量因子和质量因子表现优异，成长股受益于估值扩张'
        },
        'characteristics': {
            'gdp': 'GDP增速回升，环比改善',
            'corporate': '企业盈利触底回升，利润率改善',
            'inventory': '库存去化完成，开始补库存',
            'employment': '就业市场回暖，失业率下降',
            'policy': '货币政策仍偏宽松，财政政策积极'
        },
        'allocation': {
            'stock': {'rank': 1, 'advice': '超配，首选成长股和消费股', 'expected_return': '高'},
            'bond': {'rank': 2, 'advice': '标配，关注可转债和信用债', 'expected_return': '中'},
            'commodity': {'rank': 4, 'advice': '低配或观望，工业金属可关注', 'expected_return': '低'},
            'cash': {'rank': 3, 'advice': '保持适度流动性', 'expected_return': '低'}
        },
        'sector_advice': [
            '优先配置：消费、TMT、医药生物',
            '其次关注：新能源、高端制造',
            '谨慎配置：周期品、金融地产'
        ],
        'risks': [
            '政策转向风险：通胀超预期回升可能导致货币政策收紧',
            '复苏不及预期：需求恢复力度弱于预期',
            '海外市场波动风险'
        ],
        'historical_stats': {
            'avg_duration_months': 18,
            'std_duration_months': 4,
            'stock_avg_return': 0.15,
            'bond_avg_return': 0.05,
            'best_sector': 'TMT/消费',
            'next_stage': 'overheat',
            'transition_signals': ['CPI连续3月>2%', 'PPI同比>4%', '央行开始加息或上调准备金率']
        }
    },
    'overheat': {
        'name': '过热期',
        'stage_cn': '过热',
        'description': '经济增长放缓但仍处高位，通胀上升，大宗商品表现最佳',
        'color': '#FFB74D',
        'bg_color': '#FFF3E0',
        'icon': '🔥',
        'strategy_mapping': {
            'primary': ['价值策略', '防御策略', '周期股策略'],
            'secondary': ['红利策略', '商品CTA'],
            'rationale': '过热期通胀上行侵蚀成长股估值，价值股和周期股更具防御性，大宗商品表现最佳'
        },
        'characteristics': {
            'gdp': 'GDP增速仍处高位但边际放缓',
            'corporate': '企业盈利峰值，增速开始回落',
            'inventory': '主动加库存，产销两旺',
            'employment': '充分就业，工资上涨压力显现',
            'policy': '货币政策开始收紧，加息周期启动'
        },
        'allocation': {
            'stock': {'rank': 2, 'advice': '标配，转向周期股和价值股', 'expected_return': '中高'},
            'bond': {'rank': 4, 'advice': '低配，缩短久期', 'expected_return': '低'},
            'commodity': {'rank': 1, 'advice': '超配，首选工业金属和能源', 'expected_return': '高'},
            'cash': {'rank': 3, 'advice': '保持流动性以备机会', 'expected_return': '中'}
        },
        'sector_advice': [
            '优先配置：有色金属、煤炭、石油石化',
            '其次关注：银行、地产、建筑建材',
            '谨慎配置：成长股、高估值板块'
        ],
        'risks': [
            '通胀超预期：上游价格上涨挤压中下游利润',
            '政策收紧过快：引发经济硬着陆风险',
            '企业盈利拐点确认后的估值下杀'
        ],
        'historical_stats': {
            'avg_duration_months': 9,
            'std_duration_months': 3,
            'stock_avg_return': 0.08,
            'bond_avg_return': 0.02,
            'best_sector': '周期/资源品',
            'next_stage': 'stagflation',
            'transition_signals': ['PMI连续3月<50', 'GDP增速<4%', 'CPI仍>3%']
        }
    },
    'stagflation': {
        'name': '滞胀期',
        'stage_cn': '滞胀',
        'description': '经济增长放缓，通胀高企，现金为王，防御型资产表现较好',
        'color': '#F48FB1',
        'bg_color': '#FCE4EC',
        'icon': '⚠️',
        'strategy_mapping': {
            'primary': ['现金为王', '低波动策略', '必选消费'],
            'secondary': ['贵金属', '短久期债券', '对冲策略'],
            'rationale': '滞胀期现金为王，低波动策略抗跌性强，必选消费和贵金属具有防御价值'
        },
        'characteristics': {
            'gdp': 'GDP增速明显回落，下行压力加大',
            'corporate': '企业盈利增速大幅下滑，甚至负增长',
            'inventory': '被动加库存，去库存压力显现',
            'employment': '就业市场开始恶化',
            'policy': '政策两难：控通胀还是稳增长'
        },
        'allocation': {
            'stock': {'rank': 4, 'advice': '低配，仅配置必选消费等高防御板块', 'expected_return': '低/负'},
            'bond': {'rank': 2, 'advice': '标配，票息策略为主', 'expected_return': '中'},
            'commodity': {'rank': 2, 'advice': '标配，农业品和贵金属', 'expected_return': '中'},
            'cash': {'rank': 1, 'advice': '超配，现金为王，等待机会', 'expected_return': '高（相对）'}
        },
        'sector_advice': [
            '优先配置：必选消费、医药、公用事业',
            '其次关注：黄金、农林牧渔',
            '谨慎配置：周期成长、高弹性板块'
        ],
        'risks': [
            '滞胀深化风险：经济下行+通胀高企的双重压力',
            '企业信用风险：盈利下滑+融资成本上升',
            '政策失误风险：紧缩过度或宽松不及预期'
        ],
        'historical_stats': {
            'avg_duration_months': 6,
            'std_duration_months': 2,
            'stock_avg_return': -0.05,
            'bond_avg_return': 0.03,
            'best_sector': '必选消费/防御',
            'next_stage': 'recession',
            'transition_signals': ['CPI开始回落<2%', '央行降息或降准', '财政刺激加码']
        }
    },
    'recession': {
        'name': '衰退期',
        'stage_cn': '衰退',
        'description': '经济增长停滞甚至负增长，通胀见顶回落，债券是最佳选择',
        'color': '#64B5F6',
        'bg_color': '#E3F2FD',
        'icon': '❄️',
        'strategy_mapping': {
            'primary': ['债券策略', '红利策略', '逆周期布局'],
            'secondary': ['高股息', '利率债', '政策受益板块'],
            'rationale': '衰退期债券为王，红利策略提供稳定现金流，左侧布局优质资产等待复苏'
        },
        'characteristics': {
            'gdp': 'GDP增速创阶段新低，甚至负增长',
            'corporate': '企业亏损面扩大，盈利底部徘徊',
            'inventory': '主动去库存，价格战激烈',
            'employment': '失业率明显上升，就业压力大',
            'policy': '货币政策转向宽松，强力刺激政策出台'
        },
        'allocation': {
            'stock': {'rank': 3, 'advice': '标配，关注早周期和政策受益板块', 'expected_return': '中'},
            'bond': {'rank': 1, 'advice': '超配，利率债+高等级信用债', 'expected_return': '高'},
            'commodity': {'rank': 4, 'advice': '低配，仅黄金有避险价值', 'expected_return': '低'},
            'cash': {'rank': 2, 'advice': '保持流动性，左侧布局', 'expected_return': '中'}
        },
        'sector_advice': [
            '优先配置：债券（利率债为主）、银行',
            '其次关注：地产、基建等政策受益板块',
            '谨慎配置：大宗商品、强周期板块'
        ],
        'risks': [
            '衰退超预期：经济下滑幅度大于市场预期',
            '政策传导不畅：宽货币到宽信用的时滞拉长',
            '尾部风险暴露：信用违约事件频发'
        ],
        'historical_stats': {
            'avg_duration_months': 8,
            'std_duration_months': 3,
            'stock_avg_return': 0.02,
            'bond_avg_return': 0.08,
            'best_sector': '金融/债券',
            'next_stage': 'recovery',
            'transition_signals': ['PMI连续3月>50', '工业增加值同比>6%', '信贷脉冲由负转正']
        }
    }
}

# ===== 多维度评分权重 =====
SCORING_WEIGHTS = {
    'growth': 0.40,      # 经济增长维度
    'inflation': 0.30,   # 通胀维度
    'liquidity': 0.20,   # 流动性/信用维度
    'employment': 0.05,  # 就业/劳动维度
    'external': 0.05     # 外部环境维度
}
