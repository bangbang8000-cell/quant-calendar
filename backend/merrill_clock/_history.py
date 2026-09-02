#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""V5.9 (T-5.9.3): 美林时钟拆分 Mixin (_history)"""
import json
import os
import time
from datetime import datetime, timedelta
import numpy as np
import logging
from ._constants import *  # noqa: F401,F403
import merrill_clock as _mc_mod  # 调用期读包级文件常量 (patch("merrill_clock._mc_mod.CACHE_FILE") 生效)

logger = logging.getLogger(__name__)

class ClockHistoryMixin:
    """V5.9 (T-5.9.3): MerrillClock 拆分 Mixin (_history)"""
    def __init__(self):
        self.cache = self._load_file(_mc_mod.CACHE_FILE, {})
        self.history = self._load_file(_mc_mod.HISTORY_FILE, {
            'current_stage_start': None,
            'current_stage': None,
            'transitions': []
        })

        # v3.1: 载入结构化历史周期数据（如果transitions为空）
        if not self.history.get('transitions'):
            self.history['transitions'] = list(HISTORICAL_TRANSITIONS)
            self._save_history()
            logger.info(f"美林时钟: 已载入{len(HISTORICAL_TRANSITIONS)}条历史周期转换记录")

        # 如果首次运行（current_stage_start 为空），设置合理的默认值
        # 2024-09-24: 央行宣布降准降息政策组合拳，标志本轮复苏周期起点
        if not self.history.get('current_stage_start'):
            default_start = datetime(2024, 9, 24).isoformat()
            self.history['current_stage'] = 'recovery'
            self.history['current_stage_start'] = default_start
            self._save_history()
            logger.info(f"美林时钟初始化: 设置默认复苏起点 {default_start}")
    def _load_file(self, filepath, default):
        if os.path.exists(filepath):
            try:
                with open(filepath, 'r', encoding='utf-8') as f:
                    return json.load(f)
            except Exception as e:
                logger.warning(f"加载文件失败 {filepath}: {e}")
        return default
    def _save_cache(self):
        os.makedirs(os.path.dirname(_mc_mod.CACHE_FILE), exist_ok=True)
        with open(_mc_mod.CACHE_FILE, 'w', encoding='utf-8') as f:
            json.dump(self.cache, f, ensure_ascii=False, indent=2)
    def _save_history(self):
        os.makedirs(os.path.dirname(_mc_mod.HISTORY_FILE), exist_ok=True)
        with open(_mc_mod.HISTORY_FILE, 'w', encoding='utf-8') as f:
            json.dump(self.history, f, ensure_ascii=False, indent=2)
    def _save_snapshot(self, stage_info):
        """v1.8: 保存每次评估快照"""
        try:
            snapshots = []
            if os.path.exists(_mc_mod.SNAPSHOT_FILE):
                with open(_mc_mod.SNAPSHOT_FILE, 'r', encoding='utf-8') as f:
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
            os.makedirs(os.path.dirname(_mc_mod.SNAPSHOT_FILE), exist_ok=True)
            with open(_mc_mod.SNAPSHOT_FILE, 'w', encoding='utf-8') as f:
                json.dump(snapshots, f, ensure_ascii=False, indent=2)
        except Exception as e:
            logger.warning(f"保存快照失败: {e}")
    def set_stage_start(self, date_str: str, stage: str = None) -> dict:
        """手动设置当前阶段的开始日期

        Args:
            date_str: ISO日期字符串，如 '2024-09-24' 或 '2024-09-24T00:00:00'
            stage: 可选，同时设置当前阶段（recovery/overheat/stagflation/recession）
        """
        parsed = datetime.fromisoformat(date_str)

        if stage:
            if stage not in STAGES:
                return {'error': f'无效阶段: {stage}，可选: {list(STAGES.keys())}'}
            self.history['current_stage'] = stage

        self.history['current_stage_start'] = parsed.isoformat()
        self._save_history()

        logger.info(f"美林时钟阶段开始日期已更新: stage={self.history['current_stage']}, start={self.history['current_stage_start']}")
        return {
            'current_stage': self.history.get('current_stage'),
            'current_stage_start': self.history['current_stage_start']
        }
    def seed_history(self, transitions: list):
        """预置历史阶段转移记录

        Args:
            transitions: [{from_stage, to_stage, transition_date, from_name, to_name}, ...]
        """
        self.history['transitions'] = transitions
        if transitions:
            self.history['current_stage'] = transitions[0].get('to_stage')
        self._save_history()
        logger.info(f"美林时钟历史记录已预置: {len(transitions)}条转移记录")
