#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""V5.9 (T-5.9.3): 美林时钟拆分 Mixin (_core)"""
import json
import os
import time
from datetime import datetime, timedelta
import numpy as np
import logging
from ._constants import *  # noqa: F401,F403

logger = logging.getLogger(__name__)

class ClockCoreMixin:
    """V5.9 (T-5.9.3): MerrillClock 拆分 Mixin (_core)"""
    def determine_stage(self, indicators=None):
        """判断当前经济周期阶段（v2.0 多维度版）"""
        if indicators is None:
            indicators = self.get_economic_indicators()

        today = datetime.now()

        # === 1. 多维度评分 ===
        dims = self._compute_dimension_scores(indicators)

        # === 2. 阶段判定 ===
        stage, distance, boundary_proximity = self._determine_stage_from_scores(dims)

        # === v2.1: 时间驱动阶段切换 ===
        # 当阶段已严重超期（progress ≥ 95%）且距离下一象限边界很近（< 0.3σ），
        # 自动过渡到预测的下一阶段，避免时钟永久卡在当前阶段。
        # 必须放在 stage_info 组装之前：否则 name/confidence/next_stage_prediction/
        # early_warnings 仍引用切换前阶段，与 transition/timing 的切换后阶段矛盾。
        switch_trigger = 'boundary'  # 本次切换的触发方式：默认边界/数据驱动
        if self.history.get('current_stage_start'):
            start_time = datetime.fromisoformat(self.history['current_stage_start'])
            duration_days = (today - start_time).days
            stats = STAGES[stage]['historical_stats']
            avg_days = stats['avg_duration_months'] * 30
            progress_pct = min(100, round(duration_days / avg_days * 100, 2))

            if progress_pct >= 95 and boundary_proximity < 0.3:
                forced_stage = stats['next_stage']
                if forced_stage in STAGES:
                    switch_trigger = 'time_driven'
                    logger.info(
                        f"⏰ 时间驱动切换: {stage} -> {forced_stage} "
                        f"(进度={progress_pct}%, 边界距离={boundary_proximity:.2f}, "
                        f"已历{duration_days}天/均值{avg_days}天)"
                    )
                    stage = forced_stage
                    # 进入新阶段后边界距离重置（刚进入，在象限内部）
                    boundary_proximity = 0.5

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
                'trigger': switch_trigger,
                'reason': '时间驱动切换（阶段严重超期且临近象限边界）' if switch_trigger == 'time_driven'
                          else '边界/数据驱动切换',
                'transition_time': today.isoformat(),
                'transition_date': today.strftime('%Y-%m-%d')
            }
            if previous_stage and self.history.get('current_stage_start'):
                start_time = datetime.fromisoformat(self.history['current_stage_start'])
                duration_days = (today - start_time).days
                transition['duration_days'] = duration_days
                transition['duration_months'] = round(duration_days / 30, 2)

            self.history['transitions'].insert(0, transition)
            if len(self.history['transitions']) > 20:
                self.history['transitions'] = self.history['transitions'][:20]

            self.history['current_stage'] = stage
            self.history['current_stage_start'] = today.isoformat()
            self._save_history()
            logger.info(f"美林时钟阶段切换: {previous_stage} -> {stage}")

        elif not self.history.get('current_stage_start'):
            # 如果初始化后 start 仍为空（极端情况），设置默认值
            default_start = datetime(2024, 9, 24).isoformat()
            self.history['current_stage'] = stage
            self.history['current_stage_start'] = default_start
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

            progress_percent = min(100, round(duration_days / predicted_duration_mid * 100, 2))

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
                'duration_months': round(duration_days / 30, 2),
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
        """获取指定阶段的详细信息，包含真实历史周期数据"""
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
            'recovery': [
                '2024年9月-2026年6月：政策大转向（降准降息组合拳），最强复苏周期（约21个月）',
                '2020年Q2-2021年Q2：疫后V型反弹复苏（约12个月）',
                '2019年：贸易战缓和，疫前温和复苏（约12个月）'
            ],
            'overheat': [
                '2021年Q3-Q4：全球大放水，PPI峰值13.5%，周期品暴涨（约6个月）',
                '2007年：经济全面过热，CPI曾达8.7%（约12个月）',
                '2010年：四万亿后物价飙升（约6个月）'
            ],
            'stagflation': [
                '2022年：美联储加息+俄乌战争+国内封控，典型滞胀环境（约12个月）',
                '2011-2012年：四万亿后遗症，高通胀+增速下滑（约12个月）'
            ],
            'recession': [
                '2022年初-2024年9月：地产深度调整+疫情封控+通缩压力（约33个月）',
                '2018年：去杠杆+中美贸易战双杀（约12个月）',
                '2020年Q1：新冠疫情冲击（约3个月）'
            ]
        }
        info['case_studies'] = case_studies.get(stage_name, [])

        # ─── ★ 从历史记录构建真实的上一个周期数据 ───
        transitions = self.history.get('transitions', [])
        current_stage = self.history.get('current_stage', '')

        # 判断是否当前活跃阶段
        info['_is_current'] = (stage_name == current_stage)

        if info['_is_current']:
            # 当前活跃阶段：计算实时 timing 数据
            now = datetime.now()
            if self.history.get('current_stage_start'):
                start = datetime.fromisoformat(self.history['current_stage_start'])
                days = (now - start).days
                months = round(days / 30.44, 2)
                info['_current_timing'] = {
                    'current_stage_start_date': start.strftime('%Y-%m-%d'),
                    'duration_days': days,
                    'duration_months': months,
                    'maturity': '早期' if months < 6 else ('中期' if months < 14 else '晚期'),
                    'avg_duration_months': info.get('historical_stats', {}).get('avg_duration_months', 18),
                    'progress_percent': round(min(100, months / info.get('historical_stats', {}).get('avg_duration_months', 18) * 100), 0),
                    'predicted_end': (start + timedelta(days=int(info.get('historical_stats', {}).get('avg_duration_months', 18) * 30.44))).strftime('%Y-%m-%d') if 'historical_stats' in info else None
                }
        else:
            # v3.1: 非活跃阶段 — 从历史记录构建该阶段的所有历史轮次
            history_list = []
            for t in transitions:
                if t.get('to_stage') == stage_name:
                    # 找到「进入该阶段」的转换 = 该轮次开始
                    end_t = None
                    for t2 in transitions:
                        if t2.get('from_stage') == stage_name and t2.get('transition_date') > t.get('transition_date'):
                            if not end_t or t2.get('transition_date') < end_t.get('transition_date'):
                                end_t = t2
                    history_list.append({
                        'start': t.get('transition_date', ''),
                        'end': end_t.get('transition_date', '') if end_t else '',
                        'duration_days': t.get('duration_days', 0),
                        'duration_months': t.get('duration_months', 0),
                        'duration': f"~{int(t.get('duration_months', 0))}个月" if t.get('duration_months') else '—',
                        'cycle_label': t.get('cycle_label', ''),
                        'trigger': t.get('trigger', ''),
                        'key_indicators': t.get('key_indicators', {}),
                        'note': t.get('from_name', '') + '→' + t.get('to_name', '')
                    })

            if history_list:
                info['_history'] = history_list
                # 最近一次 = _lastPeriod（兼容旧UI）
                info['_lastPeriod'] = history_list[0]
            else:
                info['_lastPeriod'] = {'start': '—', 'end': '—', 'duration': '—', 'note': '暂无历史记录'}

        return info
