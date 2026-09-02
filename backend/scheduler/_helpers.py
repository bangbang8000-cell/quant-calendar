#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""V5.9 (T-5.9.2): scheduler 模块级函数 — 拆自原 scheduler.py 顶层
独立模块避免 __init__ 循环导入。"""
import asyncio
import json
import logging
import os
from datetime import datetime, timedelta
from data_parser import parser
from feishu_push import FeishuPusher
from ai_evaluator import ai_evaluator
from views_aggregator import views_aggregator
from paths import EXTERNAL_DATA_DIR, DATA_DIR
from db import backup_db
from report_generator import generate_weekly_report

logger = logging.getLogger(__name__)

import scheduler as _m  # 共享状态经包级解析 (测试 patch("scheduler.X") 有效)

PULL_ALERT_THRESHOLD = 3
HISTORY_FILE = os.path.join(_m.DATA_DIR, "scheduler_history.json")
_HISTORY_MAX = 5000

def run_strategy_once(progress_cb=None):
    """执行所有启用策略的 run-once (同步, 供调度任务与手工触发共用)
    返回 (ok, executed_sids, errors)
    progress_cb(sid, stage): V4.9.2 可选进度回调 (stage: generating/done), 供执行监控
    """
    import strategy_governance as gov
    state = gov.get_state()
    executed = []
    errors = []
    for sid, s in state.items():
        if not s.get("enabled"):
            continue
        try:
            if progress_cb:
                progress_cb(sid, "generating")
            gov.run_once(sid)
            executed.append(sid)
            if progress_cb:
                progress_cb(sid, "done")
        except Exception as e:
            logger.error("策略 %s 定期运行失败: %s", sid, e)
            errors.append({"sid": sid, "error": str(e)[:120]})
    return (not errors, executed, errors)

def verify_day_ingest(date, agg=None):
    """V4.9.2 (F1.2): 校验某日期持仓是否已进入日视图 (聚合器整体新鲜度金丝雀).

    四个视图(日/周/月/年)共享 _m.views_aggregator.daily_data; 日视图 total>0
    即代表聚合器包含该日期 → 四视图一致. 返回 (ok, detail).
    """
    from views_aggregator import views_aggregator as _default_agg
    agg = agg or _default_agg
    dates = list(getattr(agg, "all_dates", None) or [])
    if not dates:
        return False, "聚合器无可用日期"
    # V4.9.3: 自动回退到 <= date 的最近可用日期(周末/节假日运行 → 校验最近交易日),
    # 修复 8/29、8/30 等周末运行被误判失败的缺陷.
    probe = date
    try:
        import datetime as _dt
        _d = _dt.datetime.strptime(date, "%Y-%m-%d").date()
        _first = _dt.datetime.strptime(dates[0], "%Y-%m-%d").date()
    except Exception as _e:
        return False, f"{date} 日期格式无效: {str(_e)[:40]}"
    while probe not in dates:
        _d -= _dt.timedelta(days=1)
        if _d < _first:
            return False, f"{date} 不在聚合器可用日期内(共{len(dates)}天, 最早 {dates[0]})"
        probe = _d.strftime("%Y-%m-%d")
    try:
        total = int((agg.get_day_view(probe) or {}).get("total", 0))
    except Exception as e:
        return False, f"{probe} 日视图查询失败: {str(e)[:60]}"
    if total <= 0:
        return False, f"{probe} 日视图为空(total=0, 原始请求 {date})"
    return True, f"{probe} 日视图已可见(total={total}, 原始请求 {date})"

def scan_csv_files(dirs, recursive=False):
    """扫描多个目录下 .csv 的 mtime (V4.9.2 扩展: 含 data/holdings 递归目录).

    recursive=True 时遍历子目录(适配 holdings/{日期}/*.csv 结构).
    返回 {绝对路径: mtime}
    """
    import os as _os
    mtimes = {}
    for d in dirs:
        if not d or not _os.path.isdir(d):
            continue
        if recursive:
            for root, _subdirs, files in _os.walk(d):
                for fname in files:
                    if fname.endswith(".csv"):
                        fpath = _os.path.join(root, fname)
                        try:
                            mtimes[fpath] = _os.path.getmtime(fpath)
                        except OSError:
                            pass
        else:
            for fname in _os.listdir(d):
                if fname.endswith(".csv"):
                    fpath = _os.path.join(d, fname)
                    try:
                        mtimes[fpath] = _os.path.getmtime(fpath)
                    except OSError:
                        pass
    return mtimes

def detect_csv_changes(prev_mtimes: dict, current_mtimes: dict):
    """检测 CSV 文件变动 (FR-3.12.1 / task 12.3, 纯函数可测)

    返回 (changed, description); changed=True 表示有 变动/新增/删除。
    """
    for fpath, mtime in current_mtimes.items():
        if fpath in prev_mtimes and prev_mtimes[fpath] != mtime:
            return True, f"文件变动: {os.path.basename(fpath)}"
    for fpath in current_mtimes:
        if fpath not in prev_mtimes:
            return True, f"新文件: {os.path.basename(fpath)}"
    for fpath in prev_mtimes:
        if fpath not in current_mtimes:
            return True, f"文件删除: {os.path.basename(fpath)}"
    return False, "无变动"
