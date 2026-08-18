#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
AI 每日市场复盘自动生成模块 (FR-3.17.2)
- 数据卡强约束: 所有数字均来自数据源 (data_source_manager / akshare), AI 仅做解读, 不编造
- 数据源不可达时优雅降级: 置空列表 / 标 unavailable / "数据不可达", 不抛错
- 报告持久化到 data/market_reviews/<date>.json
"""
import json
import logging
import os
from datetime import datetime

import paths
from data_sources import data_source_manager
from ai_evaluator import ai_evaluator

logger = logging.getLogger(__name__)

# 复盘覆盖的主要指数 (至少 3 个: 上证 / 深证 / 创业板, 另加沪深300)
REVIEW_INDEXES = [
    {"name": "上证指数", "code": "000001.SH"},
    {"name": "深证成指", "code": "399001.SZ"},
    {"name": "创业板指", "code": "399006.SZ"},
    {"name": "沪深300", "code": "000300.SH"},
]

REVIEWS_SUBDIR = "market_reviews"

# prompt 模板 (与 ai_evaluator 的 evaluate_stock.txt 同目录)
PROMPT_FILE = os.path.join(os.path.dirname(os.path.abspath(__file__)), "prompts", "review_daily.txt")

# 降级标记常量
UNAVAILABLE = "unavailable"
MONEYFLOW_UNAVAILABLE = "数据不可达"
AI_UNAVAILABLE = "AI解读暂不可用"

# FR-3.18.1: 产出判定 — 数据卡关键字段(indexes/sectors/moneyflow/sentiment) 全部不可达视为失败
_UNAVAILABLE_SOURCE_VALUES = (UNAVAILABLE, MONEYFLOW_UNAVAILABLE, "")


def is_review_degraded(report):
    """报告是否"降级产出"(本次产出失败): 数据卡 data_sources 四字段全部不可达 → True。

    FR-3.18.1 产出判定修正: 任一关键字段来自真实数据源 (tushare/akshare/sxsc 等)
    → 视为可接受产出; 全部 unavailable → 判定失败 (供调度器记失败 + 告警 + 16:30 重试)。
    """
    if not isinstance(report, dict):
        return True
    ds = report.get("data_sources", {})
    if not ds:
        return True
    return all(str(v) in _UNAVAILABLE_SOURCE_VALUES for v in ds.values())


# ==================== 工具函数 ====================

def _date_str(today=None):
    """日期字符串 YYYY-MM-DD (默认今天)"""
    if today:
        return str(today)[:10]
    return datetime.now().strftime("%Y-%m-%d")


def _trade_date(today=None):
    """tushare 交易日格式 YYYYMMDD"""
    return _date_str(today).replace("-", "")


def _safe_num(value, default=None):
    """安全转 float, NaN/无法转换返回 default"""
    try:
        if value is None or (isinstance(value, float) and value != value):
            return default
        return float(value)
    except (TypeError, ValueError):
        return default


def _reviews_dir():
    """复盘报告存储目录 (基于 paths.DATA_DIR 动态计算, 便于测试隔离)"""
    return os.path.join(paths.DATA_DIR, REVIEWS_SUBDIR)


# ==================== 数据卡采集 (数据源不可达即降级) ====================

def _fetch_indexes(today=None):
    """获取主要指数行情 — 数字全部来自数据源
    返回 (indexes 列表, 成功数据源名或 'unavailable')
    """
    indexes = []
    source = None
    for cfg in REVIEW_INDEXES:
        try:
            row = data_source_manager.get_index_daily(cfg["code"], _trade_date(today))
        except Exception as e:
            logger.warning(f"获取指数 {cfg['code']} 失败: {e}")
            row = None
        if not row:
            continue
        if source is None:
            source = row.get("data_source") or UNAVAILABLE
        indexes.append({
            "name": cfg["name"],
            "code": cfg["code"],
            "close": _safe_num(row.get("close")),
            "pct_chg": _safe_num(row.get("pct_chg")),
        })
    return indexes, (source or UNAVAILABLE)


def _parse_sector_rows(df):
    """从行业板块 DataFrame 解析领涨/领跌 Top3 (纯函数, 可测)
    df 需含列: 板块名称, 涨跌幅
    返回 (leader, laggard)
    """
    if df is None or len(df) == 0:
        return [], []
    try:
        rows = []
        for _, row in df.iterrows():
            name = str(row.get("板块名称", "")).strip()
            pct = _safe_num(row.get("涨跌幅"))
            if name and pct is not None:
                rows.append({"name": name, "pct_chg": round(pct, 2)})
        rows.sort(key=lambda x: x["pct_chg"], reverse=True)
        leader = rows[:3]
        leader_names = {r["name"] for r in leader}
        # 领跌取涨跌幅最低的 3 个, 剔除与领涨重叠的 (数据量不足 6 时避免同板块两边上榜)
        laggard = [r for r in rows[-3:] if r["name"] not in leader_names][::-1]
        return leader, laggard
    except Exception as e:
        logger.warning(f"解析行业板块数据失败: {e}")
        return [], []


def _fetch_sector_performance():
    """尝试获取行业板块领涨/领跌 (akshare 东方财富行业板块)
    返回 (leader, laggard); 数据不可达返回空列表
    """
    try:
        import akshare as ak
        df = ak.stock_board_industry_name_em()
        return _parse_sector_rows(df)
    except Exception as e:
        logger.warning(f"获取行业板块数据失败, 降级: {e}")
        return [], []


def _fetch_moneyflow_detail(today=None):
    """尝试获取大盘资金面简述; 不可达返回 '数据不可达'"""
    try:
        rows = data_source_manager.get_moneyflow("000001.SH", limit=1)
        if rows:
            latest = rows[-1]
            net = latest.get("net_mf_amount")
            if net is not None:
                return f"最新主力净流入 {float(net):.2f} 万元 (交易日 {latest.get('trade_date', '未知')})"
        return MONEYFLOW_UNAVAILABLE
    except Exception as e:
        logger.warning(f"获取资金面数据失败, 降级: {e}")
        return MONEYFLOW_UNAVAILABLE


def _build_sentiment(indexes):
    """基于真实指数数据构建情绪卡; 无数据返回 None
    涨跌家数暂无数据源, up_down 置 None, note 如实说明
    """
    if not indexes:
        return None
    pct_list = [i["pct_chg"] for i in indexes if i.get("pct_chg") is not None]
    if not pct_list:
        return {"up_down": None, "note": "暂无可用于判断情绪的涨跌幅数据"}
    avg = sum(pct_list) / len(pct_list)
    if avg > 1:
        label = "普涨行情, 情绪偏强"
    elif avg > 0:
        label = "震荡偏强, 情绪中性偏暖"
    elif avg > -1:
        label = "震荡偏弱, 情绪中性偏冷"
    else:
        label = "普跌行情, 情绪偏弱"
    return {"up_down": None, "note": f"主要指数平均涨跌幅 {avg:.2f}%, {label}; 涨跌家数统计暂缺。"}


def market_data_context(today=None):
    """拼装 AI prompt 用的市场数据卡 (站内展示同构)
    数据不可达字段标 'unavailable' / '数据不可达', 不抛错
    """
    indexes, idx_source = _fetch_indexes(today)
    leader, laggard = _fetch_sector_performance()
    moneyflow = _fetch_moneyflow_detail(today)
    sentiment = _build_sentiment(indexes)

    if leader or laggard:
        sectors = {"leader": leader, "laggard": laggard}
        sectors_source = "akshare"
    else:
        sectors = UNAVAILABLE
        sectors_source = UNAVAILABLE

    card = {
        "date": _date_str(today),
        "indexes": indexes if indexes else UNAVAILABLE,
        "sectors": sectors,
        "moneyflow": moneyflow,
        "sentiment": sentiment if sentiment else UNAVAILABLE,
        "data_sources": {
            "indexes": idx_source,
            "sectors": sectors_source,
            "moneyflow": UNAVAILABLE if moneyflow == MONEYFLOW_UNAVAILABLE else "tushare",
            "sentiment": idx_source,
        },
    }
    return card


# ==================== AI 解读 ====================

def _load_prompt_template():
    """加载复盘 prompt 模板"""
    with open(PROMPT_FILE, "r", encoding="utf-8") as f:
        return f.read()


def _fallback_summary(card):
    """AI 不可用时基于数据卡的摘要兜底 (不编造, 只陈述已有数据)"""
    parts = [AI_UNAVAILABLE + "。"]
    indexes = card.get("indexes")
    if isinstance(indexes, list) and indexes:
        desc = "、".join(
            f"{i['name']}收{i['close']}点"
            + (f"(涨跌{i['pct_chg']}%)" if i.get("pct_chg") is not None else "")
            for i in indexes
        )
        parts.append(f"数据卡摘要: {desc}。")
    else:
        parts.append("数据卡摘要: 指数数据不可达。")
    sectors = card.get("sectors")
    if isinstance(sectors, dict) and sectors.get("leader"):
        leaders = "、".join(f"{s['name']}(涨{s['pct_chg']}%)" for s in sectors["leader"])
        parts.append(f"领涨板块: {leaders}。")
    moneyflow = card.get("moneyflow")
    if moneyflow and moneyflow != MONEYFLOW_UNAVAILABLE:
        parts.append(f"资金面: {moneyflow}。")
    return "".join(parts)


def _generate_ai_summary(card):
    """调用 AI 模型生成市场解读; 失败返回数据卡兜底摘要, 不抛错"""
    try:
        prompt = _load_prompt_template().replace(
            "{data_card}", json.dumps(card, ensure_ascii=False, indent=2)
        )
        text = ai_evaluator.generate_review(prompt)
        if text and text.strip():
            return text.strip()
        logger.warning("AI 市场复盘返回空内容, 使用数据卡兜底")
        return _fallback_summary(card)
    except Exception as e:
        logger.warning(f"AI 市场复盘调用失败, 使用数据卡兜底: {e}")
        return _fallback_summary(card)


# ==================== 报告组装与持久化 ====================

def _save_review(report):
    """持久化报告到 data/market_reviews/<date>.json"""
    reviews_dir = _reviews_dir()
    os.makedirs(reviews_dir, exist_ok=True)
    path = os.path.join(reviews_dir, f"{report['date']}.json")
    with open(path, "w", encoding="utf-8") as f:
        json.dump(report, f, ensure_ascii=False, indent=2)
    return path


def _read_review_file(path):
    """读取单份报告, 损坏/缺失返回 None"""
    try:
        with open(path, "r", encoding="utf-8") as f:
            return json.load(f)
    except (OSError, ValueError) as e:
        logger.warning(f"读取复盘报告失败 {path}: {e}")
        return None


def _list_review_files(reviews_dir=None):
    """列出报告文件路径, 按日期升序 (文件名即日期)"""
    reviews_dir = reviews_dir or _reviews_dir()
    if not os.path.isdir(reviews_dir):
        return []
    names = [n for n in os.listdir(reviews_dir) if n.endswith(".json") and len(n) == 15]
    names.sort()
    return [os.path.join(reviews_dir, n) for n in names]


def generate_review(today=None):
    """生成一份《市场复盘》结构化报告并持久化到 data/market_reviews/<date>.json
    数据源不可达时优雅降级, 不抛错
    """
    date_str = _date_str(today)
    card = market_data_context(today)

    indexes = card.get("indexes") if isinstance(card.get("indexes"), list) else []
    sectors_raw = card.get("sectors")
    if isinstance(sectors_raw, dict):
        leader = sectors_raw.get("leader", [])
        laggard = sectors_raw.get("laggard", [])
    else:
        leader, laggard = [], []
    sentiment_raw = card.get("sentiment")
    if not isinstance(sentiment_raw, dict):
        sentiment_raw = {"up_down": None, "note": "情绪数据不可达"}

    report = {
        "date": date_str,
        "generated_at": datetime.now().isoformat(),
        "market": {"indexes": indexes},
        "sectors": {"leader": leader, "laggard": laggard},
        "moneyflow": {"detail": card.get("moneyflow", MONEYFLOW_UNAVAILABLE)},
        "sentiment": sentiment_raw,
        "ai_summary": _generate_ai_summary(card),
        "data_sources": card.get("data_sources", {}),
    }
    _save_review(report)
    return report


def get_review(date=None):
    """读取指定日期 (YYYY-MM-DD) 或最近一份复盘报告; 不存在返回 None"""
    if date:
        path = os.path.join(_reviews_dir(), f"{_date_str(date)}.json")
        return _read_review_file(path)
    files = _list_review_files()
    if not files:
        return None
    return _read_review_file(files[-1])


def list_reviews(limit=30):
    """按日期倒序列出报告元信息 (date/generated_at/data_sources)"""
    metas = []
    for path in reversed(_list_review_files()):  # 日期倒序
        review = _read_review_file(path)
        if not review:
            continue
        metas.append({
            "date": review.get("date"),
            "generated_at": review.get("generated_at"),
            "data_sources": review.get("data_sources", {}),
        })
        if len(metas) >= limit:
            break
    return metas
