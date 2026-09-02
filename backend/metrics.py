#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Prometheus 指标导出 (FR-3.17.12)

模块级计数器/累计量 + render_metrics() 输出 Prometheus 文本格式, 纯函数可单测。

指标命名: snake_case, 统一 quant_ 前缀:
- quant_requests_total{method,path}              请求量 (counter)
- quant_status_codes_total{status}               状态码 (counter)
- quant_request_duration_seconds                 平均延迟 (gauge, 秒)
- quant_request_duration_p95_seconds             p95 延迟 (gauge, 秒)
- quant_error_rate                               错误率百分比 (gauge)
- quant_datasource_success_rate{source}          数据源成功率 (gauge)
- quant_datasource_latency_seconds{source}       数据源平均延迟 (gauge, 秒)
- quant_datasource_degraded{source}              数据源连续失败降级 (gauge 0/1)
- quant_scheduler_last_run_seconds{task}         任务最近运行时间 (gauge, unix 秒)
- quant_scheduler_last_success_seconds{task}     任务最近成功时间 (gauge, unix 秒)
- quant_scheduler_success_total{task}            任务成功次数 (counter)
- quant_scheduler_failure_total{task}            任务失败次数 (counter)
- quant_backup_success_total                     备份成功次数 (counter)
- quant_backup_failure_total                     备份失败次数 (counter)
- quant_backup_last_success_seconds              备份最近成功时间 (gauge, unix 秒)
- quant_disk_free_bytes                          磁盘剩余 (gauge, 可被 set_disk 覆盖)
- quant_disk_total_bytes                         磁盘总量 (gauge)
"""
import logging
import os
import threading
import time
from collections import deque

logger = logging.getLogger(__name__)

# 请求延迟滚动窗口 (秒), 用于 avg/p95
_WINDOW = 1000

_lock = threading.Lock()
_requests = {}          # (method, path) -> count
_statuses = {}          # status -> count
_request_times = deque(maxlen=_WINDOW)  # 最近 N 次请求延迟 (秒)

_scheduler = {}         # task -> {last_run, last_success, success, failure}
_backup = {"success": 0, "failure": 0, "last_success": None}

# 磁盘指标: 默认为 None, render 时尝试 os.statvfs 计算; set_disk 可注入 (Windows 无 statvfs)
_disk_free_bytes = None
_disk_total_bytes = None

# V5.9 (T-5.9.6): 进程启动时间 (uptime) 与 SLO 计算
_start_ts = None


def reset():
    """清空全部指标状态 (测试用)"""
    global _disk_free_bytes, _disk_total_bytes, _start_ts
    with _lock:
        _requests.clear()
        _statuses.clear()
        _request_times.clear()
        _scheduler.clear()
        _backup.clear()
        _backup["success"] = 0
        _backup["failure"] = 0
        _backup["last_success"] = None
        _disk_free_bytes = None
        _disk_total_bytes = None
        _start_ts = None


# ==================== 埋点接口 ====================

def record_start() -> None:
    """记录进程启动时间 (uptime 基准), 幂等 (重复调用以首次为准)"""
    global _start_ts
    with _lock:
        if _start_ts is None:
            _start_ts = time.time()


def uptime_seconds() -> float:
    """进程已运行秒数; 未 record_start 返回 0"""
    with _lock:
        return (time.time() - _start_ts) if _start_ts else 0.0


def slo_report() -> dict:
    """V5.9 (T-5.9.6): SLO 计算 — 纯函数, 供导出与断言
    返回: total_requests/availability(非5xx占比)/success_rate(2xx占比)/
          error_rate(5xx占比)/avg_latency/p95_latency (秒)"""
    with _lock:
        statuses = dict(_statuses)
        times = list(_request_times)
    total = sum(statuses.values())
    if total == 0:
        return {"total_requests": 0, "availability": 1.0, "success_rate": 1.0,
                "error_rate": 0.0, "avg_latency": 0.0, "p95_latency": 0.0}
    five_xx = sum(v for k, v in statuses.items() if k >= 500)
    two_xx = sum(v for k, v in statuses.items() if 200 <= k < 300)
    avg = (sum(times) / len(times)) if times else 0.0
    p95 = _p95(times) if times else 0.0
    return {
        "total_requests": total,
        "availability": round((total - five_xx) / total, 4),
        "success_rate": round(two_xx / total, 4),
        "error_rate": round(five_xx / total, 4),
        "avg_latency": round(avg, 6),
        "p95_latency": round(p95, 6),
    }


def _p95(times: list) -> float:
    """p95 延迟: 排序后取 95 分位"""
    if not times:
        return 0.0
    s = sorted(times)
    idx = max(0, int(0.95 * len(s)) - 1)
    return s[idx]


def record_request(method: str, path: str, status_code: int, elapsed_ms: float) -> None:
    """记录一次 HTTP 请求 (由中间件调用)"""
    key = (str(method), str(path))
    with _lock:
        _requests[key] = _requests.get(key, 0) + 1
        _statuses[status_code] = _statuses.get(status_code, 0) + 1
        _request_times.append(max(elapsed_ms, 0.0) / 1000.0)


def record_scheduler_run(task: str, success: bool) -> None:
    """记录一次调度任务运行 (成功/失败)"""
    now = time.time()
    with _lock:
        slot = _scheduler.setdefault(task, {
            "last_run": None, "last_success": None, "success": 0, "failure": 0,
        })
        slot["last_run"] = now
        if success:
            slot["success"] += 1
            slot["last_success"] = now
        else:
            slot["failure"] += 1


def record_backup(success: bool) -> None:
    """记录一次数据库备份结果"""
    with _lock:
        if success:
            _backup["success"] += 1
            _backup["last_success"] = time.time()
        else:
            _backup["failure"] += 1


def set_disk(free_bytes=None, total_bytes=None) -> None:
    """注入磁盘剩余/总量 (测试或 Windows 环境兜底)"""
    global _disk_free_bytes, _disk_total_bytes
    with _lock:
        _disk_free_bytes = free_bytes
        _disk_total_bytes = total_bytes


# ==================== 内部工具 ====================

def _escape_label(value) -> str:
    """Prometheus 标签值转义: \\ → \\\\, " → \\", 换行 → \\n"""
    return str(value).replace("\\", "\\\\").replace('"', '\\"').replace("\n", "\\n")


def _fmt(value) -> str:
    """数值 → Prometheus 文本 (整数直接输出, 浮点去除多余尾零; 避免大数科学计数法)"""
    v = float(value)
    if v.is_integer():
        return str(int(v))
    return repr(v)


def _avg_p95() -> tuple:
    """最近窗口内平均/ p95 延迟 (秒); 空窗口返回 (0.0, 0.0)"""
    with _lock:
        times = sorted(_request_times)
    if not times:
        return 0.0, 0.0
    n = len(times)
    p95 = times[int(n * 0.95) - 1] if n > 1 else times[0]
    return round(sum(times) / n, 6), round(p95, 6)


def _error_rate() -> float:
    """5xx 请求占比 (%)"""
    with _lock:
        total = sum(_statuses.values())
        errors = sum(c for s, c in _statuses.items() if int(s) >= 500)
    if not total:
        return 0.0
    return round(errors / total * 100, 2)


def _request_metrics() -> str:
    """请求量 / 状态码 / 延迟 / 错误率 指标文本"""
    with _lock:
        requests = dict(_requests)
        statuses = dict(_statuses)
    lines = [
        "# HELP quant_requests_total HTTP 请求量 (按 method/path 分组)",
        "# TYPE quant_requests_total counter",
    ]
    for (method, path), count in sorted(requests.items()):
        lines.append(
            f'quant_requests_total{{method="{_escape_label(method)}",'
            f'path="{_escape_label(path)}"}} {count}'
        )
    lines.append("# HELP quant_status_codes_total HTTP 状态码计数")
    lines.append("# TYPE quant_status_codes_total counter")
    for status, count in sorted(statuses.items()):
        lines.append(f'quant_status_codes_total{{status="{status}"}} {count}')

    avg, p95 = _avg_p95()
    lines.append("# HELP quant_request_duration_seconds HTTP 请求平均延迟 (秒)")
    lines.append("# TYPE quant_request_duration_seconds gauge")
    lines.append(f"quant_request_duration_seconds {_fmt(avg)}")
    lines.append("# HELP quant_request_duration_p95_seconds HTTP 请求 p95 延迟 (秒)")
    lines.append("# TYPE quant_request_duration_p95_seconds gauge")
    lines.append(f"quant_request_duration_p95_seconds {_fmt(p95)}")

    lines.append("# HELP quant_error_rate HTTP 5xx 错误率 (%)")
    lines.append("# TYPE quant_error_rate gauge")
    lines.append(f"quant_error_rate {_fmt(_error_rate())}")
    return "\n".join(lines)


def _datasource_metrics() -> str:
    """数据源健康指标 (消费 data_sources.get_health_metrics)"""
    try:
        from data_sources import get_health_metrics
        sources = get_health_metrics()
    except Exception:
        logger.warning("数据源健康指标读取失败 (降级忽略)", exc_info=True)
        sources = []
    if not sources:
        return ""
    lines = [
        "# HELP quant_datasource_success_rate 数据源成功率 (%)",
        "# TYPE quant_datasource_success_rate gauge",
        "# HELP quant_datasource_latency_seconds 数据源平均延迟 (秒)",
        "# TYPE quant_datasource_latency_seconds gauge",
        "# HELP quant_datasource_degraded 数据源连续失败降级标记 (0/1)",
        "# TYPE quant_datasource_degraded gauge",
    ]
    for s in sources:
        source = s.get("name", "unknown")
        sr = s.get("success_rate")
        lat = s.get("avg_latency_ms")
        if sr is not None:
            lines.append(f'quant_datasource_success_rate{{source="{_escape_label(source)}"}} {_fmt(sr)}')
        if lat is not None:
            lines.append(f'quant_datasource_latency_seconds{{source="{_escape_label(source)}"}} {_fmt(round(lat / 1000.0, 6))}')
        lines.append(f'quant_datasource_degraded{{source="{_escape_label(source)}"}} {1 if s.get("degraded") else 0}')
    return "\n".join(lines)


def _scheduler_metrics() -> str:
    """调度任务运行状态指标"""
    with _lock:
        scheduler = dict(_scheduler)
    if not scheduler:
        return ""
    lines = [
        "# HELP quant_scheduler_last_run_seconds 调度任务最近运行时间 (unix 秒)",
        "# TYPE quant_scheduler_last_run_seconds gauge",
        "# HELP quant_scheduler_last_success_seconds 调度任务最近成功时间 (unix 秒)",
        "# TYPE quant_scheduler_last_success_seconds gauge",
        "# HELP quant_scheduler_success_total 调度任务成功次数",
        "# TYPE quant_scheduler_success_total counter",
        "# HELP quant_scheduler_failure_total 调度任务失败次数",
        "# TYPE quant_scheduler_failure_total counter",
    ]
    for task, slot in sorted(scheduler.items()):
        t = _escape_label(task)
        if slot.get("last_run"):
            lines.append(f'quant_scheduler_last_run_seconds{{task="{t}"}} {_fmt(round(slot["last_run"], 3))}')
        if slot.get("last_success"):
            lines.append(f'quant_scheduler_last_success_seconds{{task="{t}"}} {_fmt(round(slot["last_success"], 3))}')
        lines.append(f'quant_scheduler_success_total{{task="{t}"}} {slot.get("success", 0)}')
        lines.append(f'quant_scheduler_failure_total{{task="{t}"}} {slot.get("failure", 0)}')
    return "\n".join(lines)


def _backup_metrics() -> str:
    """备份状态指标"""
    with _lock:
        backup = dict(_backup)
    lines = [
        "# HELP quant_backup_success_total 数据库备份成功次数",
        "# TYPE quant_backup_success_total counter",
        "# HELP quant_backup_failure_total 数据库备份失败次数",
        "# TYPE quant_backup_failure_total counter",
        "# HELP quant_backup_last_success_seconds 数据库备份最近成功时间 (unix 秒)",
        "# TYPE quant_backup_last_success_seconds gauge",
    ]
    lines.append(f"quant_backup_success_total {backup.get('success', 0)}")
    lines.append(f"quant_backup_failure_total {backup.get('failure', 0)}")
    if backup.get("last_success"):
        lines.append(f"quant_backup_last_success_seconds {_fmt(round(backup['last_success'], 3))}")
    return "\n".join(lines)


def _disk_metrics() -> str:
    """磁盘指标: 优先 set_disk 注入, 否则 os.statvfs (仅 Linux 可用)"""
    global _disk_free_bytes, _disk_total_bytes
    with _lock:
        free, total = _disk_free_bytes, _disk_total_bytes
    if free is None or total is None:
        try:
            from paths import DATA_DIR
            st = os.statvfs(DATA_DIR)
            free = st.f_bavail * st.f_frsize
            total = st.f_blocks * st.f_frsize
        except (AttributeError, OSError):
            logger.debug("磁盘指标不可用 (平台不支持 os.statvfs), 降级忽略")
            return ""
    lines = [
        "# HELP quant_disk_free_bytes 数据目录所在分区剩余字节",
        "# TYPE quant_disk_free_bytes gauge",
        "# HELP quant_disk_total_bytes 数据目录所在分区总字节",
        "# TYPE quant_disk_total_bytes gauge",
    ]
    lines.append(f"quant_disk_free_bytes {free}")
    lines.append(f"quant_disk_total_bytes {total}")
    return "\n".join(lines)


def _slo_metrics() -> str:
    """V5.9 (T-5.9.6): SLO 指标块 (可用性/成功率/错误率/延迟/uptime)"""
    s = slo_report()
    lines = [
        "# HELP quant_slo_availability_ratio SLO 可用性: 非5xx请求占比 (gauge 0..1)",
        "# TYPE quant_slo_availability_ratio gauge",
        "# HELP quant_slo_success_rate SLO 成功率: 2xx请求占比 (gauge 0..1)",
        "# TYPE quant_slo_success_rate gauge",
        "# HELP quant_slo_error_rate SLO 错误率: 5xx请求占比 (gauge 0..1)",
        "# TYPE quant_slo_error_rate gauge",
        "# HELP quant_slo_avg_latency_seconds SLO 平均延迟 (秒)",
        "# TYPE quant_slo_avg_latency_seconds gauge",
        "# HELP quant_slo_p95_latency_seconds SLO p95 延迟 (秒)",
        "# TYPE quant_slo_p95_latency_seconds gauge",
        "# HELP quant_slo_total_requests SLO 统计窗口内总请求数",
        "# TYPE quant_slo_total_requests gauge",
        "# HELP quant_process_uptime_seconds 进程运行秒数",
        "# TYPE quant_process_uptime_seconds gauge",
    ]
    lines.append("quant_slo_availability_ratio %s" % s["availability"])
    lines.append("quant_slo_success_rate %s" % s["success_rate"])
    lines.append("quant_slo_error_rate %s" % s["error_rate"])
    lines.append("quant_slo_avg_latency_seconds %s" % s["avg_latency"])
    lines.append("quant_slo_p95_latency_seconds %s" % s["p95_latency"])
    lines.append("quant_slo_total_requests %d" % s["total_requests"])
    lines.append("quant_process_uptime_seconds %s" % _fmt(round(uptime_seconds(), 3)))
    return "\n".join(lines)


# ==================== 导出 ====================

def render_metrics() -> str:
    """渲染完整 Prometheus 文本 (text/plain; version=0.0.4)"""
    blocks = [
        _request_metrics(),
        _datasource_metrics(),
        _scheduler_metrics(),
        _backup_metrics(),
        _disk_metrics(),
        _slo_metrics(),
    ]
    return "\n".join(b for b in blocks if b)
