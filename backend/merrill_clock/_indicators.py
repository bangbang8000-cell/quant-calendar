#!/usr/bin/env python3
# ruff: noqa: F405
# -*- coding: utf-8 -*-
"""V5.0.9 (T-5.0.93): 美林时钟拆分 Mixin (_indicators)"""
import time
from datetime import datetime
import numpy as np
import logging
from ._constants import *  # noqa: F401,F403

logger = logging.getLogger(__name__)


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

class ClockIndicatorsMixin:
    """V5.0.9 (T-5.0.93): MerrillClock 拆分 Mixin (_indicators)"""
    def _fetch_real_macro_data(self):
        """v3.0: 从 AKShare 获取真实宏观数据，失败返回 None"""
        import concurrent.futures

        def _call_with_timeout(fn, timeout=15):
            """在独立线程中调用，超时则返回 None"""
            with concurrent.futures.ThreadPoolExecutor(max_workers=1) as executor:
                future = executor.submit(fn)
                try:
                    return future.result(timeout=timeout)
                except (concurrent.futures.TimeoutError, Exception):
                    return None

        try:
            import akshare as ak

            result = {}

            # === PMI（制造业采购经理指数） ===
            try:
                pmi_df = _call_with_timeout(ak.macro_china_pmi, timeout=15)
                if pmi_df is not None and len(pmi_df) > 0:
                    latest = pmi_df.iloc[-1]
                    pmi_val = float(latest.get('制造业', 0))
                    non_pmi_val = float(latest.get('非制造业', 0)) if '非制造业' in latest.index else 0
                    if pmi_val > 0:
                        result['pmi'] = pmi_val
                    if non_pmi_val > 0:
                        result['pmi_non_manufacturing'] = non_pmi_val
            except Exception as e:
                logger.warning(f"AKShare PMI 获取失败: {e}")

            # === CPI ===
            try:
                cpi_df = _call_with_timeout(ak.macro_china_cpi_yearly, timeout=15)
                if cpi_df is not None and len(cpi_df) > 0:
                    latest = cpi_df.iloc[-1]
                    result['cpi'] = float(latest.get('全国', 0))
            except Exception as e:
                logger.warning(f"AKShare CPI 获取失败: {e}")

            # === PPI ===
            try:
                ppi_df = _call_with_timeout(ak.macro_china_ppi_yearly, timeout=15)
                if ppi_df is not None and len(ppi_df) > 0:
                    latest = ppi_df.iloc[-1]
                    result['ppi'] = float(latest.get('全国', 0))
            except Exception as e:
                logger.warning(f"AKShare PPI 获取失败: {e}")

            # === M2 货币供应量 ===
            try:
                m2_df = _call_with_timeout(ak.macro_china_money_supply, timeout=15)
                if m2_df is not None and len(m2_df) > 0:
                    latest = m2_df.iloc[-1]
                    m2_yoy = float(latest.get('M2同比', latest.get('M2', 0)))
                    if m2_yoy > 0:
                        result['m2_growth'] = m2_yoy
            except Exception as e:
                logger.warning(f"AKShare M2 获取失败: {e}")

            # === GDP ===
            try:
                gdp_df = _call_with_timeout(ak.macro_china_gdp, timeout=15)
                if gdp_df is not None and len(gdp_df) > 0:
                    latest = gdp_df.iloc[-1]
                    result['gdp_growth'] = float(latest.get('国内生产总值同比增长', 0))
            except Exception as e:
                logger.warning(f"AKShare GDP 获取失败: {e}")

            # === 工业增加值 ===
            try:
                ind_df = _call_with_timeout(ak.macro_china_industrial_production, timeout=15)
                if ind_df is not None and len(ind_df) > 0:
                    latest = ind_df.iloc[-1]
                    result['industrial_added'] = float(latest.get('工业增加值同比增长', 0))
            except Exception as e:
                logger.warning(f"AKShare 工业增加值 获取失败: {e}")

            # === 贸易差额（出口/进口） ===
            try:
                trade_df = _call_with_timeout(ak.macro_china_trade_balance, timeout=15)
                if trade_df is not None and len(trade_df) > 0:
                    latest = trade_df.iloc[-1]
                    exports = float(latest.get('出口', latest.get('出口金额', 0)))
                    imports = float(latest.get('进口', latest.get('进口金额', 0)))
                    if exports > 0:
                        # 尝试计算同比增长（需要前一月数据）
                        if len(trade_df) >= 2:
                            prev = trade_df.iloc[-2]
                            prev_exports = float(prev.get('出口', prev.get('出口金额', 0)))
                            prev_imports = float(prev.get('进口', prev.get('进口金额', 0)))
                            if prev_exports > 0:
                                result['exports_growth'] = round((exports - prev_exports) / prev_exports * 100, 1)
                            if prev_imports > 0:
                                result['imports_growth'] = round((imports - prev_imports) / prev_imports * 100, 1)
            except Exception as e:
                logger.warning(f"AKShare 贸易数据 获取失败: {e}")

            # === 社会融资规模 ===
            try:
                sf_df = _call_with_timeout(ak.macro_china_shrzgm, timeout=15)
                if sf_df is not None and len(sf_df) > 0:
                    latest = sf_df.iloc[-1]
                    result['social_financing'] = float(latest.get('社会融资规模存量同比增长', 0))
            except Exception as e:
                logger.warning(f"AKShare 社融 获取失败: {e}")

            # === 城镇调查失业率 ===
            try:
                unemp_df = _call_with_timeout(ak.macro_china_urban_unemployment, timeout=15)
                if unemp_df is not None and len(unemp_df) > 0:
                    latest = unemp_df.iloc[-1]
                    result['surveyed_unemployment'] = float(latest.get('城镇调查失业率', 0))
            except Exception as e:
                logger.warning(f"AKShare 失业率 获取失败: {e}")

            if result:
                result['_data_source'] = 'AKShare实时数据'
                result['_data_note'] = '数据来源于国家统计局/央行公开数据，通过AKShare获取'
                logger.info(f"✅ AKShare 宏观数据获取成功: {len(result)}项指标")
                return result
            else:
                logger.warning("AKShare 未获取到任何有效数据")
                return None

        except ImportError:
            logger.warning("AKShare 未安装，使用默认数据")
            return None
        except Exception as e:
            logger.error(f"AKShare 宏观数据获取异常: {e}")
            return None
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

        # === v3.0: 优先从 AKShare 获取真实数据 ===
        _t0 = time.monotonic()
        real_data = self._fetch_real_macro_data()
        # v3.10 (FR-3.10.3): 记录 akshare 健康指标（成功=返回非空数据，失败=空/异常降级）
        from data_sources import record_call
        record_call('akshare', bool(real_data), (time.monotonic() - _t0) * 1000)
        if real_data:
            # 合并真实数据（保留默认值中 AKShare 未覆盖的字段）
            indicators.update(real_data)
            logger.info("美林时钟: 已使用 AKShare 真实宏观数据")
        else:
            # === v2.1: 应用指标时间漂移（模拟真实经济数据缓慢变化） ===
            indicators = self._apply_indicator_drift(indicators)
            logger.info("美林时钟: 使用默认数据+时间漂移")

        self.cache[cache_key] = {'fetch_time': today.isoformat(), 'data': indicators}
        self._save_cache()
        return indicators
    def _apply_indicator_drift(self, indicators):
        """v2.1: 对硬编码指标施加时间漂移，模拟真实经济数据的缓慢变化

        复苏期典型特征：CPI 缓慢回升（从通缩走向温和通胀），
        PPI 回升较快（上游先回暖），PMI 在扩张区间波动。
        漂移基准日：2024-09-24（本轮复苏起点）
        """
        today = datetime.now()
        base_date = datetime(2024, 9, 24)
        months_elapsed = max(0, (today - base_date).days / 30.0)

        # 复苏→过热方向漂移率（每月变化量）
        drift = {
            'cpi':          0.05,   # CPI 每月微升 0.05pp
            'cpi_core':     0.03,   # 核心 CPI 更温和
            'ppi':          0.08,   # PPI 回升较快（上游先回暖）
            'pmi':          0.02,   # PMI 缓慢改善
            'gdp_growth':   0.01,   # GDP 微幅上行
            'industrial_added': 0.03,
            'm2_growth':    -0.03,  # M2 增速逐步回落（宽松退坡）
            'social_financing': -0.02,
        }

        for key, rate in drift.items():
            if key in indicators:
                original = indicators[key]
                indicators[key] = round(original + rate * months_elapsed, 2)

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
