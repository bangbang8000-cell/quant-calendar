#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
AI 评估胜率追踪（决策复盘闭环） FR-3.17.6
- 对每条 AI 评估记录，对照评估日后 N 日（5/10/20 交易日）实际涨跌与评级方向，统计命中率
- 命中率统计：总体 / 分模型(provider) / 分评级(level)
- 纯函数（parse_level_direction / compute_hit / compute_stats）与数据获取分离，便于单测
- 数据不可达优雅降级：不可达样本 mark unavailable，不计入命中率分母并在 note 中说明
"""
import logging
from typing import Callable, Dict, List, Optional

from ai_evaluator import ai_evaluator

logger = logging.getLogger(__name__)

# 追踪窗口（交易日）
TRACK_WINDOWS = ("n5", "n10", "n20")
WINDOW_DAYS = {"n5": 5, "n10": 10, "n20": 20}

# 实际涨跌幅绝对值 <= 该阈值视为「横盘/中性」，不参与命中判定
PCT_NEUTRAL_EPS = 1e-9

# 免责声明（note 必含「历史命中率不代表未来收益」）
DISCLAIMER = "历史命中率不代表未来收益，仅供决策复盘参考，不构成任何投资建议。"

# 评级方向关键词（先查「看空」系，避免「不推荐」等被看多词误判）
_BULLISH_KEYWORDS = ("看多", "看涨", "买入", "增持", "推荐", "强势", "加仓")
_BEARISH_KEYWORDS = ("看空", "看跌", "卖出", "减持", "回避", "弱势", "减仓")
# 否定前缀：命中关键词前紧邻「不/非/不建议」等 → 不构成方向信号（如「不推荐」按中性处理）
_NEGATION_PREFIXES = ("不", "非", "无")

# 评估失败态不参与追踪
_SKIP_LEVELS = ("评估失败", "无可用模型")

# 拉取评估日后行情所需的 K 线长度（覆盖约半年交易日，更早记录优雅降级为不可达）
KLINE_LIMIT = 120


# ─── 纯函数（可单测） ───────────────────────────────────────────

def parse_level_direction(level) -> int:
    """评级方向映射为看多/看空/中性。

    项目实际 level 值：强烈推荐/推荐/谨慎推荐/中性/观望（prompt 模板 + 内置引擎），
    以及 LLM 可能输出的「看多/看空/买入/卖出」等。
    - 含「看多/买入/增持/推荐/强势/加仓/看涨」→ +1（看多）
    - 含「看空/卖出/减持/回避/弱势/减仓/看跌」→ -1（看空）
    - 其余（中性/观望/空值）→ 0
    """
    if not level:
        return 0
    s = str(level)

    def _negated(kw):
        """关键词前紧邻否定前缀 → 该关键词不构成方向信号"""
        idx = s.find(kw)
        if idx < 0:
            return False
        return any(neg in s[max(0, idx - 2):idx] for neg in _NEGATION_PREFIXES)

    for kw in _BEARISH_KEYWORDS:
        if kw in s and not _negated(kw):
            return -1
    for kw in _BULLISH_KEYWORDS:
        if kw in s and not _negated(kw):
            return 1
    return 0


def compute_hit(actual_pct, direction) -> Optional[bool]:
    """判断实际涨跌幅是否命中评级方向。

    - direction>0 且 pct>0 → True（看多命中）
    - direction<0 且 pct<0 → True（看空命中）
    - direction=0 或 pct≈0（|pct|<=PCT_NEUTRAL_EPS）→ None（中性，不计入命中分母）
    - 其余（含 pct 非法/为 None）→ False（方向错误/不可判定）
    """
    if direction is None or direction == 0:
        return None
    if actual_pct is None:
        return None
    try:
        pct = float(actual_pct)
    except (TypeError, ValueError):
        return None
    if abs(pct) <= PCT_NEUTRAL_EPS:
        return None
    if direction > 0:
        return pct > 0
    if direction < 0:
        return pct < 0
    return None


def _window_agg(hits: List[Optional[bool]]) -> Dict:
    """单窗口聚合：None（中性/不可达）不计入分母。
    返回 {"hit": int, "total": int, "rate": float|None}
    """
    total = 0
    hit = 0
    for h in hits:
        if h is None:
            continue
        total += 1
        if h:
            hit += 1
    rate = round(hit / total * 100, 2) if total else None
    return {"hit": hit, "total": total, "rate": rate}


def _group_stats(records: List[Dict], key_fn: Callable) -> Dict:
    """按 key_fn 分组聚合各窗口命中率。"""
    groups: Dict[str, List[Dict]] = {}
    for r in records:
        groups.setdefault(key_fn(r), []).append(r)
    return {
        key: {w: _window_agg([r.get("hit_" + w) for r in group]) for w in TRACK_WINDOWS}
        for key, group in groups.items()
    }


def compute_stats(records: List[Dict]) -> Dict:
    """由含 {direction, hit_n5, hit_n10, hit_n20, provider?, level?} 的样本计算命中率。

    返回 {"overall": {n5:{hit,total,rate},...},
          "by_model": {<provider>: {...}},
          "by_level": {<level>: {...}}}
    """
    overall = {w: _window_agg([r.get("hit_" + w) for r in records]) for w in TRACK_WINDOWS}
    by_model = _group_stats(records, lambda r: str(r.get("provider") or "未知"))
    by_level = _group_stats(records, lambda r: str(r.get("level") or "未知"))
    return {"overall": overall, "by_model": by_model, "by_level": by_level}


# ─── 数据获取 ───────────────────────────────────────────────────

def _normalize_date(s) -> str:
    """K 线日期归一化为 YYYY-MM-DD（兼容 tushare 20260714 与 akshare 2026-07-14）。"""
    s = str(s or "").strip()
    if len(s) == 8 and s.isdigit():
        return f"{s[:4]}-{s[4:6]}-{s[6:8]}"
    return s[:10]


def _find_baseline_index(dates: List[str], baseline: str) -> Optional[int]:
    """在升序日期列表中找到评估日对应下标：
    1. 精确匹配评估日；2. 否则取最近一个 <= 评估日的交易日（周末/节假日评估以最近收盘日为基线）；
    评估日早于行情窗口起点（无 <= 它的日期）→ 返回 None，标记不可达而非用后续日期误算。
    """
    for i, d in enumerate(dates):
        if d == baseline:
            return i
    for i in range(len(dates) - 1, -1, -1):
        if dates[i] <= baseline:
            return i
    return None


def _compute_windows_pct(kline_response, baseline_date: str) -> Optional[Dict]:
    """从 data_source_manager.get_kline_data 返回结构中，计算评估日后 5/10/20 交易日累计涨跌幅。

    - kline_response: {"data": [[trade_date, open, close, ...], ...(升序)], ...} 或 None
    - 返回 {"n5": pct, "n10": pct, "n20": pct}（某窗口数据不足则省略）；
    - 数据不可达/评估日无匹配行情 → 返回 None
    """
    if not kline_response:
        return None
    data = kline_response.get("data") if isinstance(kline_response, dict) else kline_response
    if not data:
        return None
    dates: List[str] = []
    closes: List[float] = []
    for row in data:
        try:
            dates.append(_normalize_date(row[0]))
            closes.append(float(row[2]))
        except (TypeError, ValueError, IndexError):
            continue
    if not dates or len(dates) != len(closes):
        return None
    base = _find_baseline_index(dates, baseline_date)
    if base is None:
        return None
    base_close = closes[base]
    if not base_close or base_close != base_close:  # 0 或 NaN
        return None
    out: Dict[str, float] = {}
    for w, days in WINDOW_DAYS.items():
        idx = base + days
        if idx < len(closes):
            close_n = closes[idx]
            if close_n and close_n == close_n:
                out[w] = round((close_n - base_close) / base_close * 100, 4)
    return out


def track_evaluations(username: str = 'default', kline_getter: Optional[Callable] = None) -> List[Dict]:
    """读取用户评估历史，对照评估日后 N 日实际涨跌构建追踪样本。

    - 复用 ai_evaluator 的历史读取（data/users/<name>/ai_evaluation_history.json，用户名隔离）
    - kline_getter: callable(ts_code) -> get_kline_data 返回结构；默认走 data_source_manager（测试可注入 fake 不触网）
    - 返回样本列表；不可达/失败态样本带 available=False + unavailable_reason，不计入命中分母
    """
    history = ai_evaluator.get_history(username, limit=500)
    if not history:
        return []
    if kline_getter is None:
        from data_sources import data_source_manager

        def _default_kline_getter(code):
            return data_source_manager.get_kline_data(code, period='daily', limit=KLINE_LIMIT)
        kline_getter = _default_kline_getter

    # 按股票缓存 K 线，同股多次评估不重复拉取
    kline_cache: Dict[str, Optional[Dict]] = {}

    def _get_kline(code: str):
        if code not in kline_cache:
            try:
                kline_cache[code] = kline_getter(code)
            except Exception as e:
                logger.warning("获取 K 线失败 %s: %s", code, e)
                kline_cache[code] = None
        return kline_cache[code]

    samples = []
    for rec in history:
        result = rec.get("result") or {}
        level = str(result.get("level") or "")
        if level in _SKIP_LEVELS:
            continue  # 评估失败/无可用模型不参与追踪
        baseline = (rec.get("evaluate_time") or "")[:10]
        if not baseline:
            continue
        stock_code = rec.get("stock_code") or ""
        sample = {
            "id": rec.get("id") or "",
            "stock_code": stock_code,
            "stock_name": rec.get("stock_name") or stock_code,
            "evaluate_date": baseline,
            "level": level,
            "provider": str(result.get("provider") or rec.get("model_provider") or ""),
            "direction": parse_level_direction(level),
            "available": False,
            "unavailable_reason": "",
            "pct_n5": None, "pct_n10": None, "pct_n20": None,
            "hit_n5": None, "hit_n10": None, "hit_n20": None,
        }
        if not stock_code:
            sample["unavailable_reason"] = "缺少股票代码"
            samples.append(sample)
            continue
        windows = _compute_windows_pct(_get_kline(stock_code), baseline)
        if windows is None:
            sample["unavailable_reason"] = "行情数据不可达或评估日无匹配行情"
            samples.append(sample)
            continue
        if not windows:
            sample["unavailable_reason"] = "评估日期距今不足 5 个交易日"
            samples.append(sample)
            continue
        sample["available"] = True
        direction = sample["direction"]
        for w in TRACK_WINDOWS:
            pct = windows.get(w)
            sample["pct_" + w] = pct
            if pct is not None:
                sample["hit_" + w] = compute_hit(pct, direction)
        samples.append(sample)
    return samples


# ─── 汇总 ───────────────────────────────────────────────────────

def _normalize_window(window) -> Optional[str]:
    """window 归一化为标准窗口键 'n5'/'n10'/'n20'；支持 5/10/20、'5'、'n5'；非法返回 None。"""
    if window is None:
        return None
    try:
        w = str(window).lower()
        if w in WINDOW_DAYS:
            return w
        if w.isdigit() and int(w) in WINDOW_DAYS.values():
            return "n" + str(int(w))
    except (TypeError, ValueError):
        pass
    return None


def _filter_stats_window(stats: Dict, wkey: str) -> Dict:
    """将汇总结果裁剪为仅含指定窗口。"""
    return {
        "overall": {wkey: stats["overall"].get(wkey)},
        "by_model": {m: {wkey: st.get(wkey)} for m, st in stats["by_model"].items()},
        "by_level": {lv: {wkey: st.get(wkey)} for lv, st in stats["by_level"].items()},
    }


def group_samples_by_date(samples: List[Dict]) -> Dict[str, List[Dict]]:
    """按评估日期分组样本 (FR-3.18.6 决策复盘页日历式浏览)"""
    out: Dict[str, List[Dict]] = {}
    for s in samples:
        d = s.get("evaluate_date") or "未知"
        out.setdefault(d, []).append(s)
    return out


def get_track_summary(username: str = 'default', window=None, kline_getter: Optional[Callable] = None) -> Dict:
    """计算评估命中率汇总。

    返回 {"overall", "by_model", "by_level", "samples", "note"}；
    note 含「历史命中率不代表未来收益」免责 + 不可达样本说明。
    window 可选（5/10/20 或 'n5' 等），指定时仅返回该窗口统计。
    """
    samples = track_evaluations(username, kline_getter=kline_getter)
    stats = compute_stats(samples)
    wkey = _normalize_window(window)
    if wkey is not None:
        stats = _filter_stats_window(stats, wkey)
    unavailable = [s for s in samples if not s.get("available")]
    if not samples:
        note = "暂无足够评估样本。" + DISCLAIMER
    elif unavailable:
        note = f"另有 {len(unavailable)} 条评估因行情数据不可达或时间不足未计入命中率统计。" + DISCLAIMER
    else:
        note = DISCLAIMER
    return {
        "overall": stats["overall"],
        "by_model": stats["by_model"],
        "by_level": stats["by_level"],
        "by_date": group_samples_by_date(samples),
        "samples": samples,
        "note": note,
    }
