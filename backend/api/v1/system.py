#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
系统监控面板 API (v3.4.0-T4 / FR-3.4.3)
- GET /api/system/monitor   CPU/内存/磁盘/进程信息
- GET /api/system/metrics   请求量/延迟/错误率统计 (基于请求日志)
"""
import logging
import os
import time
from collections import deque
from datetime import datetime

from fastapi import APIRouter, Depends

from auth import get_current_active_user

logger = logging.getLogger(__name__)

router = APIRouter(prefix="/system", tags=["系统监控"])

# 内存中的请求指标环形缓冲 (最近 N 个请求)
_request_times = deque(maxlen=1000)
_request_statuses = deque(maxlen=1000)


def record_request(status_code: int, elapsed_ms: float):
    """由请求日志中间件调用"""
    _request_times.append(elapsed_ms)
    _request_statuses.append(status_code)


def get_metrics() -> dict:
    """最近请求的延迟/错误率统计 + 数据源健康指标"""
    if not _request_times:
        result = {"requests": 0, "avg_ms": 0, "p95_ms": 0, "error_rate": 0}
    else:
        times = sorted(_request_times)
        n = len(times)
        p95 = times[int(n * 0.95) - 1] if n > 1 else times[0]
        errors = sum(1 for s in _request_statuses if s >= 500)
        result = {
            "requests": n,
            "avg_ms": round(sum(times) / n, 1),
            "p95_ms": round(p95, 1),
            "error_rate": round(errors / n * 100, 2),
        }
    # v3.10 (FR-3.10.3): 数据源健康指标（成功率/延迟/degraded 标记）
    try:
        from data_sources import get_health_metrics
        result["data_sources"] = get_health_metrics()
    except Exception:
        result["data_sources"] = []
    return result


def _get_cpu_mem() -> dict:
    """CPU/内存 (读取 /proc, 无 psutil 依赖)"""
    result = {"cpu_percent": None, "mem_percent": None, "mem_used_mb": None, "mem_total_mb": None}
    try:
        # 内存
        with open('/proc/meminfo') as f:
            mem = {}
            for line in f:
                k, v = line.split(':')[0], int(line.split(':')[1].strip().split()[0])
                mem[k] = v
        total_kb = mem.get('MemTotal', 0)
        avail_kb = mem.get('MemAvailable', mem.get('MemFree', 0))
        used_kb = total_kb - avail_kb
        result["mem_total_mb"] = round(total_kb / 1024)
        result["mem_used_mb"] = round(used_kb / 1024)
        result["mem_percent"] = round(used_kb / total_kb * 100, 1) if total_kb else None
        # CPU (两次采样)
        def _cpu_times():
            with open('/proc/stat') as f:
                parts = f.readline().split()[1:]
            total = sum(int(x) for x in parts)
            idle = int(parts[3])
            return total, idle
        t1, i1 = _cpu_times()
        time.sleep(0.2)
        t2, i2 = _cpu_times()
        dt = t2 - t1
        di = i2 - i1
        result["cpu_percent"] = round((1 - di / dt) * 100, 1) if dt > 0 else 0
    except Exception:
        logger.warning("[warn] 操作异常 (v3.4.0-T8)")
        pass
    return result


def _get_disk() -> dict:
    """磁盘使用 (data 目录所在分区)"""
    result = {"used_gb": None, "total_gb": None, "free_gb": None, "percent": None}
    try:
        from paths import DATA_DIR
        st = os.statvfs(DATA_DIR)
        total = st.f_blocks * st.f_frsize
        free = st.f_bavail * st.f_frsize
        used = total - free
        result["total_gb"] = round(total / (1024 ** 3), 1)
        result["used_gb"] = round(used / (1024 ** 3), 1)
        result["free_gb"] = round(free / (1024 ** 3), 1)
        result["percent"] = round(used / total * 100, 1) if total else None
    except Exception:
        logger.warning("[warn] 操作异常 (v3.4.0-T8)")
        pass
    return result


@router.get("/monitor")
async def system_monitor(user: dict = Depends(get_current_active_user)):
    """系统资源监控 (admin)"""
    if user.get("role") != "admin":
        return {"success": False, "message": "仅管理员可查看系统监控"}
    result = {
        "success": True,
        "time": datetime.now().strftime('%Y-%m-%d %H:%M:%S'),
        "uptime": None,
        "mem_percent": _get_cpu_mem()["mem_percent"],
        "mem_used_mb": _get_cpu_mem()["mem_used_mb"],
        "mem_total_mb": _get_cpu_mem()["mem_total_mb"],
        "cpu_percent": _get_cpu_mem()["cpu_percent"],
        **_get_disk(),
        "metrics": get_metrics(),
    }
    # 进程 uptime
    try:
        with open('/proc/self/stat') as f:
            parts = f.read().split()
        ticks = int(parts[21]) / 100  # 时钟周期
        result["uptime"] = round(ticks / 3600, 1)  # 小时
    except Exception:
        logger.warning("[warn] 操作异常 (v3.4.0-T8)")
        pass
    return result


@router.get("/metrics")
async def system_metrics(user: dict = Depends(get_current_active_user)):
    """请求指标统计"""
    return {"success": True, **get_metrics()}


@router.get("/health-detail")
async def system_health_detail(user: dict = Depends(get_current_active_user)):
    """FR-3.17.12: 健康面板详情 — 调度任务状态 / 数据源延迟 / 备份最近成功 / 磁盘剩余

    数据不可达时优雅降级 (对应字段置空), 不抛 500。
    """
    result = {"success": True}
    # 调度器任务状态
    try:
        from scheduler import scheduler
        result["scheduler_tasks"] = scheduler.get_task_status()
    except Exception:
        logger.warning("调度任务状态读取失败 (降级)", exc_info=True)
        result["scheduler_tasks"] = {}
    # 数据源健康 (成功率/延迟/连续失败 degraded)
    try:
        from data_sources import get_health_metrics
        result["data_sources"] = get_health_metrics()
    except Exception:
        logger.warning("数据源健康读取失败 (降级)", exc_info=True)
        result["data_sources"] = []
    # 备份最近成功时间
    try:
        from db import list_backups
        backups = list_backups()
        result["backup_last_success"] = backups[0]["time"] if backups else None
        result["backup_count"] = len(backups)
    except Exception:
        logger.warning("备份状态读取失败 (降级)", exc_info=True)
        result["backup_last_success"] = None
        result["backup_count"] = 0
    # 磁盘剩余空间
    result["disk"] = _get_disk()
    return result


@router.get("/alerts")
async def system_alerts(user: dict = Depends(get_current_active_user)):
    """v3.12 (FR-3.12.3): 拉取失败告警队列 (供 v3.13 通知通道消费)"""
    try:
        from data_sources import get_alerts
        return {"success": True, "alerts": get_alerts()}
    except Exception as e:
        return {"success": False, "error": str(e), "alerts": []}
