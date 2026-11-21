#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""V5.0.7 (T-5.0.72): 任务队列 API (api.v1.jobs) — 提交/查询/取消/清理 (需登录)"""
from fastapi import APIRouter, Depends, HTTPException

from auth import get_current_active_user

router = APIRouter(prefix="/jobs", tags=["任务队列"])


@router.post("")
async def create_job(payload: dict, user: dict = Depends(get_current_active_user)):
    """提交后台任务: {task_type, payload?, max_retries?} → {job_id} (立即返回, worker 异步执行)"""
    from jobs import create_task
    task_type = (payload or {}).get("task_type")
    if not task_type or not isinstance(task_type, str):
        raise HTTPException(status_code=400, detail="task_type 必填")
    job_id = create_task(
        task_type,
        (payload or {}).get("payload"),
        max_retries=(payload or {}).get("max_retries", 0),
    )
    return {"success": True, "job_id": job_id}


@router.get("")
async def list_jobs(limit: int = 50, user: dict = Depends(get_current_active_user)):
    from jobs import list_tasks
    tasks = list_tasks(limit=min(limit, 200))
    return {"success": True, "data": {"count": len(tasks), "tasks": tasks}}


@router.get("/{job_id}")
async def job_detail(job_id: str, user: dict = Depends(get_current_active_user)):
    from jobs import get_task
    j = get_task(job_id)
    if j is None:
        raise HTTPException(status_code=404, detail="任务不存在")
    return {"success": True, "data": j}


@router.post("/{job_id}/cancel")
async def cancel_job(job_id: str, user: dict = Depends(get_current_active_user)):
    from jobs import cancel_task
    cancel_task(job_id)
    return {"success": True}


@router.post("/{job_id}/pause")
async def pause_job(job_id: str, user: dict = Depends(get_current_active_user)):
    """暂停任务 (v7.12 FR-7.7-2): pending 直接挂起; running 在任务检查点挂起"""
    from jobs import get_task, pause_task
    if get_task(job_id) is None:
        raise HTTPException(status_code=404, detail="任务不存在")
    ok = pause_task(job_id)
    if not ok:
        raise HTTPException(status_code=409, detail="任务已结束, 无法暂停")
    return {"success": True, "job_id": job_id, "status": "paused"}


@router.post("/{job_id}/resume")
async def resume_job(job_id: str, user: dict = Depends(get_current_active_user)):
    """恢复任务 (v7.12 FR-7.7-2)"""
    from jobs import get_task, resume_task
    if get_task(job_id) is None:
        raise HTTPException(status_code=404, detail="任务不存在")
    ok = resume_task(job_id)
    if not ok:
        raise HTTPException(status_code=409, detail="任务未处于暂停状态")
    return {"success": True, "job_id": job_id, "status": "resumed"}


@router.delete("/{job_id}")
async def remove_job(job_id: str, user: dict = Depends(get_current_active_user)):
    from jobs import remove_task
    remove_task(job_id)
    return {"success": True}
