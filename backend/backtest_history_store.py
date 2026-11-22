#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""v7.15 (FR-6 双轨统一 / E1 模块拆分): 回测历史存取 — experiments 单源。

save_backtest_result: 委托 research_store(experiments 单源), 旧 backtest_history.json
写路径废弃; get_backtest_history: experiments 优先, 为空回退旧 json(只读, 标 legacy)。
自 backend/backtest.py 拆出以守住 700 行门禁; api/v1/backtest.py standalone 端点
经 backtest.save_backtest_result 转发调用, 签名不变。
"""
import json
import logging
import os
from datetime import datetime, timedelta

logger = logging.getLogger(__name__)

BACKTEST_HISTORY_FILE = None  # 延迟初始化


def _get_history_file():
    global BACKTEST_HISTORY_FILE
    if BACKTEST_HISTORY_FILE is None:
        from paths import DATA_DIR
        BACKTEST_HISTORY_FILE = os.path.join(DATA_DIR, "backtest_history.json")
    return BACKTEST_HISTORY_FILE


_HISTORY_MAX_BT = 1000  # 最多保留 1000 条


def save_backtest_result(sid: str, summary: dict, params: dict = None):
    """v7.15 (FR-6 双轨统一): experiments 单源 — 委托 research_store.save_experiment。

    旧 backtest_history.json 写路径废弃; 函数签名保留以兼容既有调用方
    (api/v1/backtest.py standalone 回测端点)。strategy_research.py 策略回测端点
    已自带 _record_experiment 写入, 不再调用本函数(避免双记录)。"""
    try:
        from research_store import save_experiment
        try:
            from backend_info import APP_VERSION as _ver
        except Exception:
            _ver = ''
        save_experiment({
            'type': 'backtest',
            'subject': sid,
            'params': {'source': 'save_backtest_result', **(params or {})},
            'date_range': [],
            'app_version': _ver,
            'summary': summary or {},
            'result': {},
        })
        return True
    except Exception as e:
        logger.warning("回测历史保存失败: %s", e)
        return False


def get_backtest_history(days: int = 30, sid: str = '', limit: int = 100) -> list:
    """v7.15 (FR-6 双轨统一): 优先读 research_experiments(单源);
    experiments 无 backtest 记录时回退读旧 backtest_history.json(只读兼容, 标 legacy)。"""
    cutoff = ''
    if days > 0:
        cutoff = (datetime.now().replace(hour=0, minute=0, second=0, microsecond=0) - timedelta(days=days)).strftime('%Y-%m-%d')
    out = []
    try:
        from research_store import list_experiments
        exps = list_experiments(type='backtest', limit=500) or []
    except Exception as e:
        logger.warning("回测历史读取 experiments 失败: %s", e)
        exps = []
    for e in exps:
        d = str(e.get('created_at') or '')[:10]
        if cutoff and d and d < cutoff:
            continue
        if sid and str(e.get('subject') or '') != sid:
            continue
        p = e.get('params')
        out.append({
            'sid': e.get('subject') or '',
            'ts': str(e.get('created_at') or ''),
            'summary': e.get('summary') or {},
            'params': p.get('params') if isinstance(p, dict) and isinstance(p.get('params'), dict) else (p or {}),
        })
    if out:
        return out[:limit]
    # ── legacy 只读回退: 旧 json 文件 ──
    try:
        fpath = _get_history_file()
        if not os.path.exists(fpath):
            return []
        with open(fpath, 'r', encoding='utf-8') as f:
            history = json.load(f)
    except (json.JSONDecodeError, OSError):
        return []
    if not isinstance(history, list):
        return []
    # 按时间倒序（最新在前）；同秒记录按写入顺序倒序（后写在前）
    history = list(enumerate(history))
    history.sort(key=lambda i_r: (i_r[1].get('ts', ''), i_r[0]), reverse=True)
    history = [dict(r, legacy=True) for _, r in history]
    if cutoff:
        history = [r for r in history if r.get('ts', '')[:10] >= cutoff]
    if sid:
        history = [r for r in history if r.get('sid', '') == sid]
    return history[:limit]
