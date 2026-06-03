#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
美林时钟模块 v2.0
多维度经济周期判断 + 精确周期时间跟踪 + 动态重评估
"""
import json
import os
from datetime import datetime, timedelta
import numpy as np
import logging

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
            'avg_duration_months': 12,
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

from paths import MERRILL_CACHE_FILE as CACHE_FILE, MERRILL_HISTORY_FILE as HISTORY_FILE, MERRILL_SNAPSHOT_FILE as SNAPSHOT_FILE


def _normalize_score(raw, center, scale, invert=False):
    """将原始指标归一化到约[-2, 2]范围的Z-score
    
    Args:
        raw: 原始值
        center: 中性值/均值
        scale: 标准差/缩放因子
        invert: True则翻转方向（用于失业率等反向指标）
    """
    z = (raw - center) / scale
    return -z if invert else z


class MerrillClock:
    """美林时钟分析类 v2.0"""
    
    def __init__(self):
        self.cache = self._load_file(CACHE_FILE, {})
        self.history = self._load_file(HISTORY_FILE, {
            'current_stage_start': None,
            'current_stage': None,
            'transitions': []
        })
    
    def _load_file(self, filepath, default):
        if os.path.exists(filepath):
            try:
                with open(filepath, 'r', encoding='utf-8') as f:
                    return json.load(f)
            except Exception as e:
                logger.warning(f"加载文件失败 {filepath}: {e}")
        return default
    
    def _save_cache(self):
        os.makedirs(os.path.dirname(CACHE_FILE), exist_ok=True)
        with open(CACHE_FILE, 'w', encoding='utf-8') as f:
            json.dump(self.cache, f, ensure_ascii=False, indent=2)
    
    def _save_history(self):
        os.makedirs(os.path.dirname(HISTORY_FILE), exist_ok=True)
        with open(HISTORY_FILE, 'w', encoding='utf-8') as f:
            json.dump(self.history, f, ensure_ascii=False, indent=2)

    def _save_snapshot(self, stage_info):
        """v1.8: 保存每次评估快照"""
        try:
            snapshots = []
            if os.path.exists(SNAPSHOT_FILE):
                with open(SNAPSHOT_FILE, 'r', encoding='utf-8') as f:
                    snapshots = json.load(f)
            # 保留最近100条
            snapshots.insert(0, {
                'timestamp': datetime.now().isoformat(),
                'stage': stage_info.get('stage'),
                'stage_name': stage_info.get('name'),
                'confidence': stage_info.get('confidence'),
                'dimension_scores': stage_info.get('dimension_scores'),
                'timing': stage_info.get('timing')
            })
            if len(snapshots) > 100:
                snapshots = snapshots[:100]
            os.makedirs(os.path.dirname(SNAPSHOT_FILE), exist_ok=True)
            with open(SNAPSHOT_FILE, 'w', encoding='utf-8') as f:
                json.dump(snapshots, f, ensure_ascii=False, indent=2)
        except Exception as e:
            logger.warning(f"保存快照失败: {e}")
    
    def get_economic_indicators(self):
        """获取经济指标（多维度采集）"""
        today = datetime.now()
        
        cache_key = f"indicators_{today.strftime('%Y%m%d')}"
        if cache_key in self.cache:
            cache_time = datetime.fromisoformat(self.cache[cache_key]['fetch_time'])
            if (today - cache_time).total_seconds() < 86400:
                return self.cache[cache_key]['data']
        
        indicators = {
            'date': today.strftime('%Y-%m-%d'),
            'update_time': today.isoformat(),
            
            # === 增长维度 ===
            'pmi': 50.8,              # 官方制造业PMI
            'pmi_non_manufacturing': 51.2,  # 非制造业PMI
            'gdp_growth': 5.3,        # GDP同比增速(%)
            'industrial_added': 5.1,  # 工业增加值同比(%)
            'fixed_investment': 4.8,  # 固定资产投资同比(%)
            
            # === 通胀维度 ===
            'cpi': 0.8,               # CPI同比(%)
            'cpi_core': 0.6,          # 核心CPI同比(%)
            'ppi': 0.3,               # PPI同比(%)
            
            # === 流动性维度 ===
            'm2_growth': 9.8,         # M2同比(%)
            'social_financing': 10.2, # 社融存量同比(%)
            'lpr_1y': 3.10,           # 1年期LPR(%)
            'lpr_5y': 3.60,           # 5年期LPR(%)
            
            # === 就业维度 ===
            'surveyed_unemployment': 5.2,  # 城镇调查失业率(%)
            
            # === 外部环境维度 ===
            'exports_growth': 2.5,    # 出口同比(%)
            'imports_growth': 1.8,    # 进口同比(%)
            'usd_cny': 6.85,          # 美元/人民币汇率
            
            '_data_source': '国家统计局/央行公开数据（2026年Q1-Q2估计值）',
            '_data_note': '标注为估计值的数据为基于公开信息与模型推算，非官方精确值'
        }
        
        self.cache[cache_key] = {'fetch_time': today.isoformat(), 'data': indicators}
        self._save_cache()
        return indicators
    
    def _compute_dimension_scores(self, indicators):
        """多维度评分计算（返回各维度得分和综合判断）
        
        维度说明:
        - growth: 经济增长水平 (正值=高于趋势, 负值=低于趋势)
        - inflation: 通胀压力 (正值=通胀偏高, 负值=通胀偏低)
        - liquidity: 流动性充裕度 (正值=宽松, 负值=收紧)
        - employment: 就业健康度 (正值=良好, 负值=承压)
        - external: 外部环境 (正值=有利, 负值=不利)
        """
        dims = {}
        
        # === 增长维度 ===
        pmi_z = _normalize_score(indicators['pmi'], 50, 3)
        gdp_z = _normalize_score(indicators['gdp_growth'], 5.0, 1.5)
        ind_z = _normalize_score(indicators['industrial_added'], 5.5, 2)
        growth_raw = pmi_z * 0.4 + gdp_z * 0.35 + ind_z * 0.25
        dims['growth'] = {
            'score': round(growth_raw, 2),
            'level': '高位' if growth_raw > 0.5 else ('中位' if growth_raw > -0.5 else '低位'),
            'details': {
                'pmi': {'value': indicators['pmi'], 'z_score': round(pmi_z, 2)},
                'gdp_growth': {'value': indicators['gdp_growth'], 'z_score': round(gdp_z, 2)},
                'industrial': {'value': indicators['industrial_added'], 'z_score': round(ind_z, 2)}
            }
        }
        
        # === 通胀维度 ===
        cpi_z = _normalize_score(indicators['cpi'], 1.5, 1.0)
        ppi_z = _normalize_score(indicators['ppi'], 1.0, 2.0)
        inflation_raw = cpi_z * 0.6 + ppi_z * 0.4
        dims['inflation'] = {
            'score': round(inflation_raw, 2),
            'level': '偏高' if inflation_raw > 0.5 else ('适中' if inflation_raw > -0.5 else '偏低'),
            'details': {
                'cpi': {'value': indicators['cpi'], 'z_score': round(cpi_z, 2)},
                'ppi': {'value': indicators['ppi'], 'z_score': round(ppi_z, 2)}
            }
        }
        
        # === 流动性维度 ===
        m2_z = _normalize_score(indicators['m2_growth'], 8.5, 2)
        sf_z = _normalize_score(indicators['social_financing'], 10, 2)
        # 利率越低越宽松，取反
        lpr_z = _normalize_score(indicators['lpr_1y'], 3.5, 0.5, invert=True)
        liquidity_raw = m2_z * 0.35 + sf_z * 0.35 + lpr_z * 0.3
        dims['liquidity'] = {
            'score': round(liquidity_raw, 2),
            'level': '宽松' if liquidity_raw > 0.3 else ('中性' if liquidity_raw > -0.3 else '收紧'),
            'details': {
                'm2_growth': {'value': indicators['m2_growth'], 'z_score': round(m2_z, 2)},
                'social_financing': {'value': indicators['social_financing'], 'z_score': round(sf_z, 2)},
                'lpr_1y': {'value': indicators['lpr_1y'], 'z_score': round(lpr_z, 2)}
            }
        }
        
        # === 就业维度 ===
        unemp_z = _normalize_score(indicators['surveyed_unemployment'], 5.0, 1.0, invert=True)
        dims['employment'] = {
            'score': round(unemp_z, 2),
            'level': '良好' if unemp_z > 0.2 else ('中性' if unemp_z > -0.2 else '承压'),
            'details': {
                'surveyed_unemployment': {'value': indicators['surveyed_unemployment'], 'z_score': round(unemp_z, 2)}
            }
        }
        
        # === 外部环境维度 ===
        exp_z = _normalize_score(indicators['exports_growth'], 5, 5)
        imp_z = _normalize_score(indicators['imports_growth'], 3, 5)
        external_raw = exp_z * 0.5 + imp_z * 0.5
        dims['external'] = {
            'score': round(external_raw, 2),
            'level': '有利' if external_raw > 0.2 else ('中性' if external_raw > -0.2 else '不利'),
            'details': {
                'exports_growth': {'value': indicators['exports_growth'], 'z_score': round(exp_z, 2)},
                'imports_growth': {'value': indicators['imports_growth'], 'z_score': round(imp_z, 2)}
            }
        }
        
        return dims
    
    def _determine_stage_from_scores(self, dims):
        """从维度得分确定美林时钟阶段
        
        美林时钟核心逻辑:
        - 复苏: growth↑ + inflation↓
        - 过热: growth↑ + inflation↑
        - 滞胀: growth↓ + inflation↑
        - 衰退: growth↓ + inflation↓
        """
        g = dims['growth']['score']
        inf = dims['inflation']['score']
        
        # 阈值：0表示趋势中性线
        high_growth = g >= 0
        high_inflation = inf >= 0
        
        if high_growth and not high_inflation:
            stage = 'recovery'
        elif high_growth and high_inflation:
            stage = 'overheat'
        elif not high_growth and high_inflation:
            stage = 'stagflation'
        else:
            stage = 'recession'
        
        # 离象限中心的距离（信心度）
        distance = np.sqrt(g**2 + inf**2)
        
        # 边界接近度（距离最近的象限边界的距离）
        boundary_proximity = min(abs(g), abs(inf))
        
        return stage, distance, boundary_proximity
    
    def _compute_next_stage_prediction(self, dims, current_stage):
        """预测下一阶段及转移概率
        
        基于当前各维度得分距离边界的距离来估计转移概率
        """
        stats = STAGES[current_stage]['historical_stats']
        next_stage = stats['next_stage']
        transition_signals = stats['transition_signals']
        
        g = dims['growth']['score']
        inf = dims['inflation']['score']
        
        # 判断关键的转移方向
        # 复苏→过热: inflation上升穿过0线
        # 过热→滞胀: growth下降穿过0线  
        # 滞胀→衰退: inflation下降穿过0线
        # 衰退→复苏: growth上升穿过0线
        
        if current_stage == 'recovery':
            # 关键是通胀是否在上升
            boundary = inf  # inf>0则进入过热区, inf<0在复苏区
            # 转移概率随通胀上升而增大
            prob = max(0, min(1, (inf + 1.5) / 3.0))
        elif current_stage == 'overheat':
            boundary = -g  # -g>0则进入滞胀区（growth跌破0）
            prob = max(0, min(1, (-g + 1.5) / 3.0))
        elif current_stage == 'stagflation':
            boundary = -inf  # -inf>0则进入衰退区（inflation跌破0）
            prob = max(0, min(1, (-inf + 1.5) / 3.0))
        else:  # recession
            boundary = g  # g>0则进入复苏区
            prob = max(0, min(1, (g + 1.5) / 3.0))
        
        prob = round(prob, 2)
        
        return {
            'next_stage': next_stage,
            'next_stage_name': STAGES[next_stage]['name'],
            'transition_probability': prob,
            'transition_signals': transition_signals,
            'boundary_distance': round(boundary, 2)  # >0表示已穿过边界
        }
    
    def _compute_early_warnings(self, dims, current_stage, boundary_proximity):
        """计算早期预警信号"""
        warnings = []
        
        # 接近象限边界
        if boundary_proximity < 0.3:
            next_info = self._compute_next_stage_prediction(dims, current_stage)
            warnings.append({
                'type': 'boundary_proximity',
                'severity': 'info',
                'message': f'接近{STAGES[current_stage]["name"]}→{next_info["next_stage_name"]}边界（距离{boundary_proximity:.2f}）'
            })
        
        # 流动性收紧预警
        if dims['liquidity']['score'] < -1.0:
            warnings.append({
                'type': 'liquidity_tightening',
                'severity': 'warning',
                'message': '流动性显著收紧，可能加速经济下行'
            })
        
        # 通胀超预期预警
        if dims['inflation']['score'] > 1.5:
            warnings.append({
                'type': 'inflation_surge',
                'severity': 'danger',
                'message': '通胀压力显著上升，密切关注政策转向信号'
            })
        
        # 外部环境恶化
        if dims['external']['score'] < -1.0:
            warnings.append({
                'type': 'external_headwind',
                'severity': 'warning',
                'message': '外部环境恶化，出口和汇率承压'
            })
        
        return warnings
    
    def determine_stage(self, indicators=None):
        """判断当前经济周期阶段（v2.0 多维度版）"""
        if indicators is None:
            indicators = self.get_economic_indicators()
        
        today = datetime.now()
        
        # === 1. 多维度评分 ===
        dims = self._compute_dimension_scores(indicators)
        
        # === 2. 阶段判定 ===
        stage, distance, boundary_proximity = self._determine_stage_from_scores(dims)
        
        # === 3. 信心度 ===
        confidence_level = '高' if distance > 1.2 else ('中' if distance > 0.5 else '低')
        
        # === 4. 综合得分 ===
        weighted_score = sum(
            SCORING_WEIGHTS[k] * dims[k]['score'] 
            for k in SCORING_WEIGHTS
        )
        
        stage_info = STAGES[stage].copy()
        stage_info['stage'] = stage
        stage_info['indicators'] = indicators
        
        # 多维度评分详情
        stage_info['dimension_scores'] = dims
        stage_info['confidence'] = {
            'level': confidence_level,
            'distance_from_center': round(distance, 2),
            'boundary_proximity': round(boundary_proximity, 2),
            'weighted_score': round(weighted_score, 2)
        }
        
        # === 5. 下一阶段预测 ===
        stage_info['next_stage_prediction'] = self._compute_next_stage_prediction(dims, stage)
        
        # === 6. 早期预警 ===
        stage_info['early_warnings'] = self._compute_early_warnings(dims, stage, boundary_proximity)
        
        # === 7. 周期时间跟踪 ===
        previous_stage = self.history.get('current_stage')
        
        if previous_stage != stage:
            transition = {
                'from_stage': previous_stage,
                'to_stage': stage,
                'from_name': STAGES.get(previous_stage, {}).get('name') if previous_stage else None,
                'to_name': STAGES[stage]['name'],
                'transition_time': today.isoformat(),
                'transition_date': today.strftime('%Y-%m-%d')
            }
            if previous_stage and self.history.get('current_stage_start'):
                start_time = datetime.fromisoformat(self.history['current_stage_start'])
                duration_days = (today - start_time).days
                transition['duration_days'] = duration_days
                transition['duration_months'] = round(duration_days / 30, 1)
            
            self.history['transitions'].insert(0, transition)
            if len(self.history['transitions']) > 20:
                self.history['transitions'] = self.history['transitions'][:20]
            
            self.history['current_stage'] = stage
            self.history['current_stage_start'] = today.isoformat()
            self._save_history()
            logger.info(f"美林时钟阶段切换: {previous_stage} -> {stage}")
        
        elif not self.history.get('current_stage_start'):
            self.history['current_stage'] = stage
            self.history['current_stage_start'] = today.isoformat()
            self._save_history()
        
        # === 8. 精确时间信息 ===
        if self.history.get('current_stage_start'):
            start_time = datetime.fromisoformat(self.history['current_stage_start'])
            duration_days = (today - start_time).days
            stats = STAGES[stage]['historical_stats']
            
            avg_months = stats['avg_duration_months']
            std_months = stats.get('std_duration_months', avg_months * 0.3)
            
            # 预测结束日期（使用均值±标准差）
            predicted_duration_low = max(1, (avg_months - std_months) * 30)
            predicted_duration_mid = avg_months * 30
            predicted_duration_high = (avg_months + std_months) * 30
            
            progress_percent = min(100, round(duration_days / predicted_duration_mid * 100, 1))
            
            # 阶段成熟度
            if progress_percent < 33:
                maturity = '早期'
            elif progress_percent < 66:
                maturity = '中期'
            else:
                maturity = '后期'
            
            predicted_end_low = start_time + timedelta(days=predicted_duration_low)
            predicted_end_mid = start_time + timedelta(days=predicted_duration_mid)
            predicted_end_high = start_time + timedelta(days=predicted_duration_high)
            
            days_remaining = max(0, int(predicted_duration_mid - duration_days))
            
            stage_info['timing'] = {
                'current_stage_start': self.history['current_stage_start'],
                'current_stage_start_date': start_time.strftime('%Y-%m-%d'),
                'duration_days': duration_days,
                'duration_months': round(duration_days / 30, 1),
                'avg_duration_months': avg_months,
                'std_duration_months': std_months,
                'progress_percent': progress_percent,
                'maturity': maturity,
                'days_remaining': days_remaining,
                'predicted_end': {
                    'pessimistic': predicted_end_high.strftime('%Y-%m-%d'),  # 较晚
                    'base': predicted_end_mid.strftime('%Y-%m-%d'),
                    'optimistic': predicted_end_low.strftime('%Y-%m-%d')    # 较早
                }
            }
        
        stage_info['recent_transitions'] = self.history.get('transitions', [])[:5]
        
        # v1.8: 保存快照到历史记录
        self._save_snapshot(stage_info)
        
        return stage_info
    
    def reevaluate(self, force=False):
        """强制重评估（忽略缓存，直接重新计算）
        
        供定时任务和手动触发使用
        """
        if force:
            # 清除当日缓存
            today = datetime.now()
            cache_key = f"indicators_{today.strftime('%Y%m%d')}"
            if cache_key in self.cache:
                del self.cache[cache_key]
            self._save_cache()
        
        return self.determine_stage()
    
    def get_stage_detail(self, stage_name):
        """获取指定阶段的详细信息"""
        if stage_name not in STAGES:
            return None
        
        info = STAGES[stage_name].copy()
        
        stage_growth = 'high' if stage_name in ['recovery', 'overheat'] else 'low'
        stage_inflation = 'high' if stage_name in ['overheat', 'stagflation'] else 'low'
        info['criteria'] = {
            'growth': '经济增长' + ('上行' if stage_growth == 'high' else '下行'),
            'inflation': '通胀水平' + ('上行' if stage_inflation == 'high' else '下行')
        }
        
        case_studies = {
            'recovery': ['2008年底-2009年：四万亿刺激后经济V型反转', '2016年：供给侧改革推动复苏', '2020年Q2：疫后V型反弹'],
            'overheat': ['2007年：经济过热，CPI最高达8.7%', '2010年：四万亿后物价飙升', '2021年：全球供应链危机引发大通胀'],
            'stagflation': ['2011-2012年：四万亿后遗症，高通胀+增速下滑', '2022年：全球能源危机+中国地产下行'],
            'recession': ['2018年：去杠杆+贸易战冲击', '2020年Q1：新冠疫情冲击', '2023年：地产深度调整']
        }
        info['case_studies'] = case_studies.get(stage_name, [])
        
        return info


# 全局实例
merrill_clock = MerrillClock()


if __name__ == '__main__':
    stage_info = merrill_clock.determine_stage()
    print(json.dumps(stage_info, ensure_ascii=False, indent=2))