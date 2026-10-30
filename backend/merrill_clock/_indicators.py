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

def _call_with_timeout(fn, timeout=15):
    """在独立线程中调用 fn，超时则返回 None

    T-6.3.4: 修复超时挂起 — 原实现 `with ThreadPoolExecutor` 在退出时
    shutdown(wait=True) 会等待挂起线程结束: future.result(timeout=15) 虽在
    15s 超时返回 None, 但线程仍阻塞在 akshare 网络调用(无外网时 OS TCP 超时
    可达 130s+), 9 个宏观指标串行叠加 → /merrill-clock 实测阻塞事件循环 163s。
    改为超时后 shutdown(wait=False): 放弃等待挂起线程, 调用方立即返回。
    """
    import concurrent.futures
    executor = concurrent.futures.ThreadPoolExecutor(max_workers=1)
    future = executor.submit(fn)
    try:
        return future.result(timeout=timeout)
    except concurrent.futures.TimeoutError:
        executor.shutdown(wait=False)  # 不等待挂起线程, 立即返回 None
        return None
    except Exception:
        executor.shutdown(wait=False)
        return None



def _pick_column(columns, candidates):
    """按候选链挑选真实存在的列名（akshare 列名会随版本漂移）。

    实测漂移 (2026-10-30):
      制造业 → 制造业-指数;  全国 → 今值;  国内生产总值同比增长 → 国内生产总值-同比增长;
      M2同比 → 货币和准货币(M2)-同比增长
    任一层命中即用，全不匹配返回 None（调用方据此判定「本项缺失」，而不是写 0）。
    """
    if columns is None or len(columns) == 0:
        return None
    cols = list(columns)
    for cand in (candidates or []):
        if cand in cols:
            return cand
    return None


def _latest_numeric(df, candidates):
    """取时间序列中「最新的有效数值」。

    三条硬要求（现场数据全部踩中）:
      1. **不能假设顺序**: macro_china_gdp 是降序(2006 在前), iloc[-1] 会取到 2006 年;
         故先按时间列升序排序（能识别 月份/季度/日期/TRADE_DATE 列）。
      2. **跳过 NaN 尾部**: akshare 最新一行常为未公布(NaN), 必须回退到最近有效值。
      3. **0 不算有效数据**: 0 会把「通胀偏低」误判成「通缩」, 一律视为缺失。
    解析失败/无可用列/空帧 → None。
    """
    # 不显式 import pandas: 只需 duck-typing 判定（有 columns 且可索引）,
    # 避免未使用导入, 也让本函数在无 pandas 环境下安全返回 None。
    if df is None or not hasattr(df, "columns") or len(df) == 0:
        return None
    col = _pick_column(df.columns, candidates)
    if col is None:
        return None
    frame = df
    # 1) 尽力按时间列升序（识别不到时间列就保持原序，最后仍会从尾部回溯）
    time_col = _pick_column(df.columns, ["月份", "季度", "日期", "TRADE_DATE", "date", "统计时间"])
    if time_col is not None:
        try:
            frame = df.sort_values(by=time_col, kind="stable")
        except Exception:
            frame = df
    # 2) 从尾部向前找第一个有效值
    for raw in reversed(list(frame[col].values)):
        try:
            if raw is None:
                continue
            if isinstance(raw, str):
                txt = raw.strip().replace("%", "").replace(",", "")
                if txt in ("", "--", "-", "nan", "None"):
                    continue
                val = float(txt)
            else:
                val = float(raw)
        except (TypeError, ValueError):
            continue
        if val != val:  # NaN
            continue
        if val == 0:    # 0 视为缺失（见 docstring）
            continue
        return val
    return None


def _merge_macro(defaults, real, track_missing=False):
    """把真实抓取值合并进默认值字典 —— **只接受有效值**。

    现场致命 bug: 旧实现 `indicators.update(real_data)` 会把抓取失败得到的 0
    直接覆盖掉合理默认值, 导致 PMI/CPI/PPI/GDP/M2 全变 0, 阶段判定彻底失真。
    本函数:
      - 只合并 defaults 中已存在的键（不引入野字段）;
      - 只接受非 None / 有限 / 非 0 的数值;
      - track_missing=True 时附 _quality: {real: [...], missing: [...]} 供前端诚实展示。
    """
    merged = dict(defaults or {})
    real = real or {}
    real_keys = []
    for key, val in real.items():
        if key not in merged:
            continue
        if _is_valid_macro_value(val):
            merged[key] = float(val)
            real_keys.append(key)
    if track_missing:
        merged["_quality"] = {
            "real": sorted(real_keys),
            "missing": sorted([k for k in merged if not str(k).startswith("_") and k not in real_keys]),
        }
    return merged


def _is_valid_macro_value(val):
    """有效宏观数值判定: 非 None、可转 float、有限、非 0。"""
    if val is None or isinstance(val, bool):
        return False
    try:
        num = float(val)
    except (TypeError, ValueError):
        return False
    if num != num:  # NaN
        return False
    if num in (float("inf"), float("-inf")):
        return False
    return num != 0

class ClockIndicatorsMixin:
    """V5.0.9 (T-5.0.93): MerrillClock 拆分 Mixin (_indicators)"""
    def _fetch_real_macro_data(self):
        """v3.0/v6.6: 从 AKShare 获取真实宏观数据，失败返回 None。

        6.6 (T-6.6.8~T-6.6.11, PRD FR-6.6.3) 健壮性重写 —— 现场实测 4 类根因:
          ① 列名漂移: 制造业→制造业-指数, 全国→今值, 国内生产总值同比增长→国内生产总值-同比增长,
             M2同比→货币和准货币(M2)-同比增长  → 统一走 _pick_column 候选链;
          ② 顺序假设: macro_china_gdp 是降序(2006 在前), iloc[-1] 取到 2006 年
             → 统一走 _latest_numeric(内部排序 + 跳 NaN 尾 + 拒 0);
          ③ 写 0 污染: 抓取失败写 0 并 update() 覆盖默认值 → 改由 _merge_macro 只收有效值;
          ④ 补抓 LPR(1Y/5Y): 此前从未抓取, 却是流动性维度关键量。
        返回值只含**确认为有效**的项；一项都没拿到则返回 None（走默认值路径）。
        """
        try:
            import akshare as ak

            result = {}
            missing = []

            def _grab(label, fn_name, field, candidates, transform=None):
                """统一抓取外壳: 超时/异常/缺列/无效值 全部只记 missing, 绝不写 0。

                注意: fn_name 用**字符串**而非直接传 `ak.xxx` —— akshare 各版本函数名会变
                (实测 macro_china_industrial_production 在 2026-10 版已不存在),
                直接属性访问会在**传参时**抛 AttributeError, 连累整批指标一起报废。
                """
                try:
                    fn = getattr(ak, fn_name, None)
                    if fn is None:
                        missing.append(field)
                        logger.warning("AKShare %s: 当前版本无 %s 函数", label, fn_name)
                        return
                    df = _call_with_timeout(fn, timeout=15)
                    val = _latest_numeric(df, candidates)
                    if val is None:
                        missing.append(field)
                        logger.warning("AKShare %s: 未取到有效值(列=%s)", label, candidates)
                        return
                    result[field] = round(float(transform(val)), 2) if transform else val
                except Exception as e:
                    missing.append(field)
                    logger.warning("AKShare %s 获取失败: %s", label, e)

            # === 增长维度 ===
            # PMI: 制造业指数（列名两代并存: 制造业 / 制造业-指数）
            _grab("制造业PMI", "macro_china_pmi", "pmi", ["制造业-指数", "制造业"])
            _grab("非制造业PMI", "macro_china_pmi", "pmi_non_manufacturing",
                  ["非制造业-指数", "非制造业"])
            # GDP: 必须处理降序帧 + 连字符列名
            _grab("GDP", "macro_china_gdp", "gdp_growth",
                  ["国内生产总值-同比增长", "国内生产总值同比增长", "GDP同比增长"])
            _grab("工业增加值", "macro_china_industrial_production_yoy", "industrial_added",
                  ["工业增加值同比增长", "工业增加值-同比增长", "今值"])

            # === 通胀维度（akshare 财经日历口径: 今值/预测值/前值）===
            _grab("CPI", "macro_china_cpi_yearly", "cpi", ["全国", "今值"])
            _grab("PPI", "macro_china_ppi_yearly", "ppi", ["全国", "今值"])

            # === 流动性维度 ===
            _grab("M2", "macro_china_money_supply", "m2_growth",
                  ["货币和准货币(M2)-同比增长", "M2同比", "M2"])
            # 社融: akshare 只有「增量」无「存量同比」→ 由增量同比近似(见下), 直接抓取会失败
            _grab("社融(增量口径)", "macro_china_shrzgm", "social_financing_amount",
                  ["社会融资规模增量"], transform=lambda v: v / 10000.0)  # 亿元→万亿元
            # LPR: 6.6 新增抓取（此前完全缺失，靠硬编码 3.10/3.60）
            _grab("LPR1Y", "macro_china_lpr", "lpr_1y", ["LPR1Y", "LPR1年期"])
            _grab("LPR5Y", "macro_china_lpr", "lpr_5y", ["LPR5Y", "LPR5年期"])

            # === 就业维度 ===
            _grab("城镇调查失业率", "macro_china_urban_unemployment", "surveyed_unemployment",
                  ["城镇调查失业率", "全国城镇调查失业率", "失业率"])

            # === 外部环境维度（贸易差额: 出口/进口同比按相邻月推算）===
            try:
                _tb_fn = getattr(ak, "macro_china_trade_balance", None)
                trade_df = _call_with_timeout(_tb_fn, timeout=15) if _tb_fn else None
                exp_col = _pick_column(trade_df.columns, ["出口", "出口金额", "出口额"]) if trade_df is not None else None
                imp_col = _pick_column(trade_df.columns, ["进口", "进口金额", "进口额"]) if trade_df is not None else None
                if trade_df is not None and exp_col and len(trade_df) >= 2:
                    series = trade_df[exp_col].astype(float)
                    prev_v, last_v = series.iloc[-2], series.iloc[-1]
                    if prev_v > 0 and last_v > 0:
                        result["exports_growth"] = round((last_v - prev_v) / prev_v * 100, 2)
                if trade_df is not None and imp_col and len(trade_df) >= 2:
                    series = trade_df[imp_col].astype(float)
                    prev_v, last_v = series.iloc[-2], series.iloc[-1]
                    if prev_v > 0 and last_v > 0:
                        result["imports_growth"] = round((last_v - prev_v) / prev_v * 100, 2)
            except Exception as e:
                logger.warning("AKShare 贸易数据 获取失败: %s", e)

            if result:
                result["_data_source"] = "AKShare实时数据"
                result["_data_note"] = "数据来源于国家统计局/央行公开数据，通过AKShare获取"
                # 6.6 (T-6.6.14): 缺失项留痕 —— 前端据此诚实展示「本节指标为估算」
                result["_missing"] = sorted(set(missing))
                logger.info("✅ AKShare 宏观数据获取成功: %d项指标, 缺失%d项",
                            len([k for k in result if not k.startswith("_")]), len(missing))
                return result

            logger.warning("AKShare 未获取到任何有效数据，回退默认值")
            return None

        except ImportError:
            logger.warning("AKShare 未安装，使用默认数据")
            return None
        except Exception as e:
            logger.error("AKShare 宏观数据获取异常: %s", e)
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
            # 6.6 (T-6.6.12, PRD FR-6.6.3): 只合并**有效**真实值, 绝不写 0 覆盖默认值。
            # 旧实现 indicators.update(real_data) 会把抓取失败的 0 直接覆盖掉合理默认值,
            # 导致 PMI/CPI/PPI/GDP/M2 全变 0 → 阶段判定彻底失真（现场根因）。
            _meta = {k: v for k, v in real_data.items() if str(k).startswith('_')}
            _vals = {k: v for k, v in real_data.items() if not str(k).startswith('_')}
            indicators = _merge_macro(indicators, _vals, track_missing=True)
            indicators.update(_meta)
            logger.info(
                "美林时钟: 已使用 AKShare 真实宏观数据 (real=%d, missing=%d)",
                len(indicators.get('_quality', {}).get('real', [])),
                len(indicators.get('_quality', {}).get('missing', [])),
            )
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
