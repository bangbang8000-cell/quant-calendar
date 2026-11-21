#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""支撑位计算与买入区间 (v7.8 FR-7.8-1)

移植 KHunter `KHunterSupportCalculator` 的 4 种支撑位算法:
- ma20:        近 20 个交易日收盘均价
- key_close:   关键日收盘价
- key_close_5: 关键日收盘价下 5%
- key_open:    关键日开盘价

对上上游缺陷的修正(见《KHunter 代码级评估》§6.3):
1. 上游 `calculate_support_level` 抛异常直穿 API, 单股失败拖垮整批 → 这里用 SupportError
   携带可读原因, 由 hunting 逐股降级, 不伪造数值。
2. 上游 key_open 允许"最接近日期"却未把实际使用日期返回给调用方, 计划价与依据脱节 →
   这里返回值含 ref_date / fallback, 让"用哪根 K 线算的"可追溯。
3. 上游 ma20 在 K 线不足 20 根时静默用更少样本求均值 → 这里显式报错, 避免弱支撑被当成强支撑。
"""
from typing import Dict, Optional

import pandas as pd

SUPPORT_METHODS = ("ma20", "key_close_5", "key_open", "key_close")
DEFAULT_SUPPORT_METHOD = "ma20"
MA_WINDOW = 20
KEY_CLOSE_BUFFER = 0.05
KEY_DATE_TOLERANCE_DAYS = 1

# 策略 → 支撑位方法: 对齐 KHunter config/support_methods.yaml 的语义映射
# (突破/低吸类用近端收盘缓冲, 打板类用关键日开盘, 反转类用均线)
STRATEGY_SUPPORT_METHODS = {
    "golden_triangle": "ma20",
    "oversold_rebound": "ma20",
    "main_uptrend_dip_buy": "key_close_5",
    "leader": "key_open",
    "multi_factor": "ma20",
    "sector_rotation": "ma20",
    "index_enhance": "ma20",
    "capital_flow": "key_close_5",
    # v7.12 补齐的 8 个形态策略
    "limit_up_pullback": "key_close",     # 打板回踩: 涨停日收盘即支撑
    "morning_star": "ma20",              # 底部反转: 均线支撑
    "multi_golden_cross": "ma20",        # 多指标共振: 均线支撑
    "multi_party_cannon": "key_close_5",  # 两阳夹一阴: 形态收盘下方缓冲
    "resistance_breakout": "key_close",   # 平台突破: 突破日收盘转支撑
    "immortal_guidance": "key_open",      # 仙人指路: 关键日开盘即支撑(与 KHunter 一致)
    "new_stock_drawdown": "ma20",        # 超跌次新: 均线支撑
    "strategy_2560": "ma20",             # 2560: 25日线体系, 取 ma20 近似
}

# 距支撑位分类阈值 (相对支撑位的偏离比例)
NEAR_BAND = 0.03     # |d| <= 3% → 贴近支撑
FAIR_BAND = 0.10     # 3% < d <= 10% → 合理区间
BROKEN_BAND = -0.01  # d < -1% → 已破位


class SupportError(ValueError):
    """支撑位不可计算 (K 线不足 / 关键日缺失), 调用方应降级而非补数"""


def normalize_method(method: Optional[str]) -> str:
    """方法名归一; 空值取默认, 未知方法显式报错(不静默回退)"""
    m = str(method or "").strip().lower()
    if not m:
        return DEFAULT_SUPPORT_METHOD
    if m not in SUPPORT_METHODS:
        raise SupportError(f"未知支撑位方法: {method} (可选 {', '.join(SUPPORT_METHODS)})")
    return m


def method_for_strategy(sid: Optional[str]) -> str:
    """策略默认支撑位方法; 未登记策略用默认 ma20"""
    return STRATEGY_SUPPORT_METHODS.get(str(sid or "").strip(), DEFAULT_SUPPORT_METHOD)


def normalize_date(value) -> str:
    """日期归一为 YYYY-MM-DD; 兼容 20261118 / 2026-11-18 / datetime"""
    if value is None:
        return ""
    if hasattr(value, "strftime"):
        return value.strftime("%Y-%m-%d")
    digits = "".join(ch for ch in str(value) if ch.isdigit())
    if len(digits) >= 8:
        return f"{digits[0:4]}-{digits[4:6]}-{digits[6:8]}"
    return str(value)[:10]


def _desc_frame(df: pd.DataFrame) -> pd.DataFrame:
    """统一成"日期降序, iloc[0] 为最新"的口径(与 KHunter 一致)"""
    if df is None or len(df) == 0:
        raise SupportError("无 K 线数据")
    out = df.copy()
    if "date" in out.columns:
        out["date"] = out["date"].map(normalize_date)
        out = out.sort_values("date", ascending=False)
    elif isinstance(out.index, pd.DatetimeIndex):
        out = out.sort_index(ascending=False).reset_index()
        out["date"] = out["date"].map(normalize_date)
    return out.reset_index(drop=True)


def _find_key_row(frame: pd.DataFrame, key_date: str) -> Dict:
    """关键日在 K 线中的位置: 先精确匹配, 再容差 1 天(标注 fallback)"""
    target = normalize_date(key_date)
    if not target:
        raise SupportError("关键日期为空")
    exact = frame.index[frame["date"] == target].tolist()
    if exact:
        return {"idx": int(exact[0]), "ref_date": target, "fallback": False}
    try:
        target_ts = pd.Timestamp(target)
        diffs = (pd.to_datetime(frame["date"]) - target_ts).abs()
    except (ValueError, TypeError) as exc:
        raise SupportError(f"关键日期解析失败: {key_date}") from exc
    if diffs.empty:
        raise SupportError("无 K 线数据")
    idx = int(diffs.idxmin())
    gap = int(diffs.loc[idx].days)
    if gap > KEY_DATE_TOLERANCE_DAYS:
        raise SupportError(
            f"关键日期 {target} 不在 K 线中(最近相差 {gap} 天, 容差 {KEY_DATE_TOLERANCE_DAYS} 天)")
    return {"idx": idx, "ref_date": str(frame.loc[idx, "date"]), "fallback": True}


def calc_support(df: pd.DataFrame, method: Optional[str] = None,
                 key_date: Optional[str] = None) -> Dict:
    """计算支撑位。

    Args:
        df: 单股 K 线(含 date/open/high/low/close), 顺序不限
        method: ma20 / key_close / key_close_5 / key_open
        key_date: 关键日(仅 key_* 方法需要), 通常是信号日/狩猎日

    Returns:
        {"level": float, "method": str, "ref_date": str, "fallback": bool}

    Raises:
        SupportError: K 线不足或关键日缺失(不返回猜测值)
    """
    m = normalize_method(method)
    frame = _desc_frame(df)
    if m == "ma20":
        if len(frame) < MA_WINDOW:
            raise SupportError(f"K 线不足 {MA_WINDOW} 根(实得 {len(frame)}), 无法计算 ma20")
        closes = pd.to_numeric(frame["close"].head(MA_WINDOW), errors="coerce").dropna()
        if closes.empty:
            raise SupportError("收盘价为空, 无法计算 ma20")
        return {"level": round(float(closes.mean()), 2), "method": m,
                "ref_date": str(frame.loc[0, "date"]), "fallback": False}

    if not key_date:
        raise SupportError(f"方法 {m} 需要关键日期")
    found = _find_key_row(frame, key_date)
    row = frame.loc[found["idx"]]
    if m == "key_open":
        value = row.get("open")
    else:
        value = row.get("close")
    price = pd.to_numeric(pd.Series([value]), errors="coerce").iloc[0]
    if pd.isna(price):
        raise SupportError(f"关键日 {found['ref_date']} 的{'开盘' if m == 'key_open' else '收盘'}价为空")
    level = float(price) * (1.0 - KEY_CLOSE_BUFFER) if m == "key_close_5" else float(price)
    return {"level": round(level, 2), "method": m,
            "ref_date": found["ref_date"], "fallback": found["fallback"]}


def distance_to_support(close: float, support: float) -> Optional[float]:
    """现价相对支撑位偏离比例; 支撑位非正时返回 None(不编造)"""
    try:
        c, s = float(close), float(support)
    except (TypeError, ValueError):
        return None
    if s <= 0:
        return None
    return round((c - s) / s, 4)


def classify_distance(distance: Optional[float]) -> str:
    """偏离比例 → 位置语义: broken(破位) / near(贴近) / fair(合理) / far(远离) / unknown"""
    if distance is None:
        return "unknown"
    if distance < BROKEN_BAND:
        return "broken"
    if abs(distance) <= NEAR_BAND:
        return "near"
    if distance <= FAIR_BAND:
        return "fair"
    return "far"


POSITION_LABELS = {
    "broken": "已破位",
    "near": "贴近支撑",
    "fair": "合理区间",
    "far": "远离支撑",
    "unknown": "未知",
}


def build_buy_plan(close: float, support: float, band_pct: float = 0.02,
                   stop_buffer: float = 0.05, take_profit_pct: float = 0.20) -> Dict:
    """按支撑位给出买入区间/止损/止盈。

    与上游差异: 上游买入区间取"现价 ±1%"(不管支撑位在哪), 止损止盈都挂支撑位。
    这里买入区间锚定支撑位(低吸语义), 止盈锚定买入上沿, 使区间与风险收益自洽。
    """
    s = float(support)
    c = float(close) if close else s
    buy_low = round(s, 2)
    buy_high = round(s * (1.0 + max(band_pct, 0.0)), 2)
    return {
        "buy_low": buy_low,
        "buy_high": buy_high,
        "stop_loss": round(s * (1.0 - max(stop_buffer, 0.0)), 2),
        "take_profit": round(buy_high * (1.0 + max(take_profit_pct, 0.0)), 2),
        "risk_reward": round(
            ((buy_high * (1.0 + take_profit_pct)) - buy_high)
            / max(buy_high - s * (1.0 - stop_buffer), 1e-9), 2) if s > 0 else None,
        "close": round(c, 2),
    }
