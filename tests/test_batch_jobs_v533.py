# -*- coding: utf-8 -*-
"""V5.3.0 (T-5.3.3.5 / FR-5.3.3.5): 批量任务队列前端可见可取消测试

- system-page 任务队列面板: 列出 /api/jobs 任务 + 进度 + 取消
- 批量评估走后端 jobs 队列 (batch_evaluate 任务已注册)
"""
import os

BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
FRONTEND = os.path.join(BASE, "frontend")


def _read(rel):
    with open(os.path.join(FRONTEND, rel), encoding="utf-8") as f:
        return f.read()


def test_jobs_api_endpoints_exist():
    """后端 /api/jobs 端点: 列表/详情/取消"""
    src = _read("../backend/api/v1/jobs.py")
    assert "/jobs" in src
    assert 'prefix="/jobs"' in src
    assert "/cancel" in src, "应支持取消任务"


def test_batch_evaluate_task_registered():
    """批量评估已注册为 jobs 任务 (batch_evaluate)"""
    src = _read("../backend/job_tasks.py")
    assert "register('batch_evaluate')" in src


def test_system_page_has_jobs_panel():
    """system-page 含任务队列面板 (加载 /api/jobs 列表)"""
    src = _read("js/components/system-page.js")
    assert "/api/jobs" in src, "system-page 应加载任务队列"


def test_system_page_jobs_progress_and_cancel():
    """任务面板含进度展示与取消按钮"""
    src = _read("js/components/system-page.js")
    assert "progress" in src, "应显示任务进度"
    assert "cancel" in src.lower() or "取消" in src, "应支持取消任务"


def test_research_has_batch_export_compare():
    """研究页批量导出/对比入口存在"""
    src = _read("js/components/research-page.js")
    assert "exportResearchHistory" in src, "研究页应有批量导出"
    assert "runResearchCompare" in src, "研究页应有批量对比"
