# -*- coding: utf-8 -*-
"""
FR-3.17.12: Prometheus 指标导出 测试 (TC-17.12)

- render_metrics 文本格式 (# HELP/# TYPE/counter/gauge, snake_case 指标名)
- 计数器累计正确 / gauge 取值 / 标签转义
- /metrics 端点返回 200 且含指标 (TestClient)
- 调度器任务状态聚合 (scheduler.get_task_status)
- 数据源健康接入 (data_sources.get_health_metrics → quant_datasource_*)
"""
import re
import time

import pytest


@pytest.fixture(autouse=True)
def clean_metrics():
    """每个用例前清空 metrics 模块状态, 避免跨用例污染"""
    import metrics
    metrics.reset()
    yield
    metrics.reset()


# ─── 文本格式 ─────────────────────────────────────────────

def test_render_contains_help_and_type():
    """render_metrics 应为每个指标族输出 # HELP 与 # TYPE"""
    import metrics
    metrics.record_request("GET", "/api/health", 200, 10.0)
    metrics.record_scheduler_run("daily_report", True)
    out = metrics.render_metrics()
    assert "# HELP quant_requests_total" in out, "缺少 # HELP"
    assert "# TYPE quant_requests_total counter" in out, "缺少 # TYPE counter"
    assert "# TYPE quant_scheduler_last_run_seconds gauge" in out, "缺少 gauge TYPE"


def test_metric_names_snake_case():
    """指标名均为 snake_case (小写字母/数字/下划线), 不出现非法字符"""
    import metrics
    metrics.record_request("GET", "/x", 200, 1.0)
    metrics.record_scheduler_run("daily_report", True)
    metrics.record_backup(True)
    out = metrics.render_metrics()
    for line in out.splitlines():
        if not line or line.startswith("#"):
            continue
        name = line.split("{")[0].split(" ")[0]
        assert re.fullmatch(r"[a-z_][a-z0-9_]*", name), f"非法指标名: {name}"
        assert name.startswith("quant_"), f"指标应带 quant_ 前缀: {name}"


def test_label_escaping():
    """标签值中的反斜杠/双引号/换行必须转义 (Prometheus 文本格式)"""
    import metrics
    path = 'a"b\\c\nd'
    metrics.record_request("GET", path, 200, 1.0)
    out = metrics.render_metrics()
    escaped = path.replace("\\", "\\\\").replace('"', '\\"').replace("\n", "\\n")
    assert f'path="{escaped}"' in out, "标签值未正确转义"


# ─── 计数器累计 ─────────────────────────────────────────────

def test_requests_counter_accumulates():
    """同 method/path 多次请求应累计计数"""
    import metrics
    for _ in range(3):
        metrics.record_request("GET", "/api/health", 200, 10.0)
    metrics.record_request("POST", "/api/backup/create", 201, 20.0)
    out = metrics.render_metrics()
    assert 'quant_requests_total{method="GET",path="/api/health"} 3' in out, "GET 计数错误"
    assert 'quant_requests_total{method="POST",path="/api/backup/create"} 1' in out, "POST 计数错误"


def test_status_codes_counter():
    """状态码独立计数"""
    import metrics
    metrics.record_request("GET", "/a", 200, 1.0)
    metrics.record_request("GET", "/b", 200, 1.0)
    metrics.record_request("GET", "/c", 500, 1.0)
    out = metrics.render_metrics()
    assert 'quant_status_codes_total{status="200"} 2' in out, "200 计数错误"
    assert 'quant_status_codes_total{status="500"} 1' in out, "500 计数错误"


def test_error_rate_gauge():
    """错误率 = 5xx 请求占比 (%)"""
    import metrics
    metrics.record_request("GET", "/a", 200, 1.0)
    metrics.record_request("GET", "/b", 200, 1.0)
    metrics.record_request("GET", "/c", 500, 1.0)
    out = metrics.render_metrics()
    assert re.search(r"quant_error_rate 33\.3", out), f"错误率应约 33.3, 实际:\n{out}"


def test_duration_avg_gauge():
    """请求平均延迟 (秒) gauge 取值"""
    import metrics
    metrics.record_request("GET", "/a", 200, 100.0)
    metrics.record_request("GET", "/b", 200, 200.0)
    metrics.record_request("GET", "/c", 200, 300.0)
    out = metrics.render_metrics()
    assert "quant_request_duration_seconds 0.2" in out, f"平均延迟应为 0.2s:\n{out}"
    assert re.search(r"quant_request_duration_p95_seconds 0\.2", out), "p95 延迟错误"


# ─── 调度器任务聚合 ─────────────────────────────────────────

def test_scheduler_run_metrics():
    """调度任务最近运行/成功时间 + 成功失败计数"""
    import metrics
    before = round(time.time(), 3)
    metrics.record_scheduler_run("daily_report", True)
    metrics.record_scheduler_run("health_check", False)
    out = metrics.render_metrics()
    assert 'quant_scheduler_success_total{task="daily_report"} 1' in out, "成功计数错误"
    assert 'quant_scheduler_failure_total{task="health_check"} 1' in out, "失败计数错误"
    m = re.search(r'quant_scheduler_last_run_seconds\{task="daily_report"\} ([\d.]+)', out)
    # 容忍亚毫秒舍入竞态：记录时间不得早于调用前 1 秒
    assert m and float(m.group(1)) >= before - 1, "最近运行时间应为 unix 秒"
    m2 = re.search(r'quant_scheduler_last_success_seconds\{task="daily_report"\} ([\d.]+)', out)
    assert m2, "缺少 last_success"


def test_scheduler_status_aggregation():
    """scheduler._record_task_run + get_task_status 聚合成功/失败/连续失败"""
    from scheduler import Scheduler
    s = Scheduler()
    s._record_task_run("daily_report", True)
    s._record_task_run("daily_report", False)
    s._record_task_run("daily_report", False)
    status = s.get_task_status()
    assert "daily_report" in status, "缺少任务状态"
    row = status["daily_report"]
    assert row["success_count"] == 1, "成功计数错误"
    assert row["failure_count"] == 2, "失败计数错误"
    assert row["consecutive_failures"] == 2, "连续失败计数错误"
    assert row["last_status"] == "failed", "最近状态应为 failed"
    assert row["last_run"], "应有最近运行时间"
    assert row["last_success"], "应有最近成功时间"


# ─── 备份指标 ─────────────────────────────────────────────

def test_backup_metrics():
    """备份成功/失败计数 + 最近成功时间"""
    import metrics
    metrics.record_backup(True)
    metrics.record_backup(False)
    out = metrics.render_metrics()
    assert "quant_backup_success_total 1" in out, "备份成功计数错误"
    assert "quant_backup_failure_total 1" in out, "备份失败计数错误"
    assert re.search(r"quant_backup_last_success_seconds [\d.]+", out), "缺少最近成功时间"


# ─── 数据源健康接入 ─────────────────────────────────────────

def test_datasource_health_metrics():
    """data_sources 健康指标应接入 render_metrics (成功率/延迟/degraded)"""
    import metrics
    import data_sources
    data_sources.reset_health()
    data_sources.record_call("tushare", True, 120.0)
    data_sources.record_call("tushare", True, 80.0)
    out = metrics.render_metrics()
    assert 'quant_datasource_success_rate{source="tushare"} 100' in out, "成功率错误"
    assert re.search(r'quant_datasource_latency_seconds\{source="tushare"\} 0\.1', out), \
        "平均延迟应为 0.1s"
    assert 'quant_datasource_degraded{source="tushare"} 0' in out, "degraded 应为 0"


# ─── 磁盘指标 ─────────────────────────────────────────────

def test_disk_metrics_override():
    """set_disk 覆盖磁盘指标 (Windows 无 os.statvfs 时的兜底)"""
    import metrics
    metrics.set_disk(1024, 2048)
    out = metrics.render_metrics()
    assert "quant_disk_free_bytes 1024" in out, "磁盘剩余错误"
    assert "quant_disk_total_bytes 2048" in out, "磁盘总量错误"


# ─── 重置 ─────────────────────────────────────────────

def test_reset_clears_state():
    """reset() 后计数器归零, 未记录任务不再出现采样行"""
    import metrics
    metrics.record_request("GET", "/a", 200, 1.0)
    metrics.record_scheduler_run("daily_report", True)
    metrics.reset()
    out = metrics.render_metrics()
    assert not re.search(r'quant_requests_total\{method="GET"', out), "reset 后请求计数未清空"
    assert not re.search(r'quant_scheduler_success_total\{task="daily_report"\} [1-9]', out), \
        "reset 后调度计数未清空"


# ─── /metrics 端点 ─────────────────────────────────────────

def test_metrics_endpoint_returns_200():
    """GET /metrics 返回 200, text/plain, 且含指标"""
    from fastapi.testclient import TestClient
    from main_new import app
    client = TestClient(app)
    r = client.get("/metrics")
    assert r.status_code == 200, f"/metrics 状态码异常: {r.status_code}"
    assert "text/plain" in r.headers.get("content-type", ""), "应为 text/plain"
    assert "quant_requests_total" in r.text, "响应应含指标文本"
