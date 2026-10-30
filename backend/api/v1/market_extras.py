#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""6.6 新增的行情扩展路由（从 market.py 拆出，保持单文件 ≤700 行）。

拆分原因: market.py 原 648 行, 6.6 新增「美林订正」与「行情摘要」两组端点后
达 750 行, 触及项目模块体积上限 (tests/test_module_size_630.py LIMIT=700)。
按「视图 / 状态 / 取数」三段纪律, 把这两个**新增**读接口独立成模块,
market.py 保持原有职责不改。

包含:
  GET  /api/market/merrill-clock/correction   订正元信息（前端角标）
  POST /api/market/merrill-clock/correction   执行订正归档（仅 admin, 零删除）
  GET  /api/market/quote-summary/{code}       总市值 + 日/周/月/季/年涨跌幅
"""
import asyncio
import datetime as _dt
import json
import logging
import os
from typing import Dict

from fastapi import APIRouter, Depends

from auth import get_admin_user

logger = logging.getLogger(__name__)

# 与 market.py 同前缀, 合并后路径不变（/api/market/...）
router = APIRouter(prefix="/market", tags=["市场行情"])


# ────────────────────────── 美林数据订正 ──────────────────────────
@router.get("/merrill-clock/correction")
async def get_merrill_correction():
    """6.6 (T-6.6.19, PRD FR-6.6.4): 数据订正元信息。

    返回 {as_of, reason, affected, label, history} —— 前端据此显示
    「数据订正于 YYYY-MM-DD」角标, 让用户知道阶段结论为何变化（D8）。
    无订正记录时返回 {success: true, data: null}（前端隐藏角标）。
    """
    import paths
    from merrill_clock._correction import read_correction_meta
    try:
        meta = read_correction_meta(getattr(paths, 'MERRILL_CORRECTION_FILE', None))
        return {"success": True, "data": meta}
    except Exception as exc:
        logger.error("读取美林订正元信息失败: %s", exc)
        return {"success": False, "message": str(exc), "data": None}


@router.post("/merrill-clock/correction")
async def apply_merrill_correction(_: Dict = Depends(get_admin_user)):
    """6.6 (T-6.6.18, 决策 D4/D5): 执行数据订正归档 —— **仅 admin, 零删除**。

    把本次订正之前的历史快照标记为 archived/legacy 并记录订正元信息。
    不删除任何记录; 重复调用幂等（保留首次订正时间）。
    """
    import paths
    from merrill_clock._correction import archive_snapshots, write_correction_meta
    try:
        snap_path = getattr(paths, 'MERRILL_SNAPSHOT_FILE', None)
        snaps = []
        if snap_path and os.path.isfile(snap_path):
            with open(snap_path, encoding='utf-8') as f:
                snaps = json.load(f) or []
        at = _dt.datetime.now().strftime('%Y-%m-%d')
        reason = '宏观指标抓取修复(列名漂移/降序取错/写0覆盖)'
        archived = archive_snapshots(snaps, reason=reason, at=at, before=at)
        affected = sum(1 for x in archived if isinstance(x, dict) and x.get('archived'))
        if snap_path:
            tmp = snap_path + '.tmp'
            with open(tmp, 'w', encoding='utf-8') as f:
                json.dump(archived, f, ensure_ascii=False, indent=1)
            os.replace(tmp, snap_path)
        meta = write_correction_meta(
            getattr(paths, 'MERRILL_CORRECTION_FILE', None),
            reason=reason, at=at, affected=affected,
        )
        logger.info("美林时钟数据订正完成: 归档 %d 条快照 (零删除)", affected)
        return {"success": True, "message": f"订正完成, 归档 {affected} 条历史快照（零删除）",
                "data": meta, "total": len(archived)}
    except Exception as exc:
        logger.error("美林时钟数据订正失败: %s", exc)
        return {"success": False, "message": f"订正失败: {exc}"}


# ────────────────────────── 行情摘要 ──────────────────────────
@router.get("/quote-summary/{code}")
async def get_quote_summary(code: str):
    """6.6 (T-6.6.26, PRD FR-6.6.5): 指数/个股行情摘要 —— 总市值 + 多周期涨跌幅。

    用户需求: 蜡烛图界面显示「总市值过亿的按亿为单位」与「当日/周/月/季/年涨跌幅」,
    悬浮提示同样展示, 小数位 ≤2。指数无总市值概念 → 返回「指数不适用」(决策 D2)。

    单位口径（易错点, 见 EVAL §3.1.3）:
      tushare amount     单位 **千元** → 亿元须 /1e5（旧代码 /1e4 导致 10 倍虚高）
      tushare total_mv   单位 **万元** → 亿元须 /1e4
    """
    from market_quote_summary import build_quote_summary

    def _build():
        db = {}
        rows = []
        try:
            from data_sources import data_source_manager
            db = data_source_manager.get_daily_basic(code) or {}
        except Exception as exc:  # 市值不可得不应拖垮整张卡
            logger.warning("quote-summary daily_basic 失败 %s: %s", code, exc)
        try:
            from market_data import get_kline_data
            kl = get_kline_data(code, period="daily", limit=420)
            if isinstance(kl, dict):
                rows = kl.get("data") or kl.get("klines") or []
            elif isinstance(kl, list):
                rows = kl
        except Exception as exc:
            logger.warning("quote-summary kline 失败 %s: %s", code, exc)
        return build_quote_summary(code, name=db.get('name'), daily_basic=db, kline_rows=rows)

    try:
        return await asyncio.to_thread(_build)
    except Exception as exc:
        logger.error("quote-summary 失败 %s: %s", code, exc)
        return {"success": False, "code": code, "message": str(exc)}
