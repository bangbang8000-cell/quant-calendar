#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""V5.7 (T-5.7.2): 异步任务队列 (jobs.py)

任务表 (持久化 data/jobs.json, 原子写) + 后台 worker 线程 + 进度/取消/结果/失败重试。

- create_task/get_task/list_tasks: 提交与查询 (pending → running → success/failed/cancelled)
- 注册制: register(task_type) 装饰器挂任务函数, worker 按类型分派
- 协作式取消: cancel_task 置 cancelled 标志, 任务函数经 ctx.check_cancelled() 检查
- 失败重试: max_retries, 重试次数递增; 重试耗尽 → failed
- 事件循环不阻塞: worker 为独立守护线程, 提交仅写表 + 唤醒 worker
- 零外部依赖; 损坏文件降级; 原子写复用 reliability.atomic

语义边界:
- 任务函数签名 fn(payload, ctx); ctx 提供 progress/message/check_cancelled/retries_done
- 取消仅协作式: 不杀线程; 任务需自行检查
"""
import json
import logging
import os
import threading
import time
import uuid

import paths
from reliability.atomic import atomic_write_json

logger = logging.getLogger(__name__)

JOBS_FILE = os.path.join(paths.DATA_DIR, 'jobs.json')
MAX_JOBS = 500
POLL_INTERVAL = 0.1

STATUS_PENDING = 'pending'
STATUS_RUNNING = 'running'
STATUS_SUCCESS = 'success'
STATUS_FAILED = 'failed'
STATUS_CANCELLED = 'cancelled'

_registry = {}
_lock = threading.RLock()
_worker = None
_worker_cond = threading.Condition(_lock)


class JobNotFoundError(Exception):
    pass


class JobCancelled(Exception):
    pass


def _now_iso():
    return time.strftime('%Y-%m-%d %H:%M:%S')


def _job_id():
    return 'J' + time.strftime('%Y%m%d%H%M%S') + '-' + uuid.uuid4().hex[:8]


def _read():
    try:
        with open(JOBS_FILE, encoding='utf-8') as f:
            data = json.load(f)
        return data if isinstance(data, dict) else {}
    except Exception:
        return {}


def _write(obj):
    try:
        dirn = os.path.dirname(JOBS_FILE)
        if dirn and not os.path.isdir(dirn):
            os.makedirs(dirn, exist_ok=True)
        atomic_write_json(JOBS_FILE, obj)
    except Exception as e:
        logger.warning('jobs 写入失败: %s', e)


def register(task_type):
    def deco(fn):
        _registry[task_type] = fn
        return fn
    return deco


_seq = 0


def _next_seq():
    global _seq
    with _lock:
        _seq += 1
        return _seq


def create_task(task_type, payload=None, max_retries=0):
    job = {
        'job_id': _job_id(),
        'seq': _next_seq(),
        'task_type': task_type,
        'payload': payload if payload is not None else {},
        'status': STATUS_PENDING,
        'progress': 0,
        'message': '',
        'result': None,
        'error': None,
        'retries': 0,
        'max_retries': max(0, int(max_retries)),
        'cancelled': False,
        'created_at': _now_iso(),
        'started_at': None,
        'finished_at': None,
    }
    with _lock:
        jobs = _read()
        if len(jobs) >= MAX_JOBS:
            for k in sorted(jobs, key=lambda x: jobs[x].get('seq', 0))[: len(jobs) - MAX_JOBS + 1]:
                jobs.pop(k, None)
        jobs[job['job_id']] = job
        _write(jobs)
        _wake_worker()
    return job['job_id']


def get_task(job_id):
    return _read().get(job_id)


def list_tasks(limit=50):
    jobs = _read()
    ordered = sorted(jobs.values(), key=lambda j: j.get('seq', 0), reverse=True)
    return ordered[:limit]


def update_progress(job_id, progress, message=None):
    with _lock:
        jobs = _read()
        j = jobs.get(job_id)
        if not j or j['status'] not in (STATUS_RUNNING, STATUS_PENDING):
            return
        j['progress'] = max(0, min(100, int(progress)))
        if message is not None:
            j['message'] = message
        _write(jobs)


def check_cancelled(job_id):
    return bool((_read().get(job_id) or {}).get('cancelled'))


def cancel_task(job_id):
    with _lock:
        jobs = _read()
        j = jobs.get(job_id)
        if not j:
            return
        j['cancelled'] = True
        if j['status'] == STATUS_PENDING:
            j['status'] = STATUS_CANCELLED
            j['finished_at'] = _now_iso()
            j['message'] = '已取消'
        _write(jobs)


def remove_task(job_id):
    with _lock:
        jobs = _read()
        if job_id in jobs:
            jobs.pop(job_id, None)
            _write(jobs)


def _update_store(job_id, mutator):
    """整表原子更新: 读全表 → 改单任务 → 写全表 (绝不写单对象到顶层)。"""
    with _lock:
        jobs = _read()
        j = jobs.get(job_id)
        if j is None:
            return False
        mutator(j)
        _write(jobs)
        return True


def _run_one(job):
    task_type = job['task_type']
    fn = _registry.get(task_type)
    if fn is None:
        def _missing(j):
            if j['status'] == STATUS_RUNNING:
                j['status'] = STATUS_FAILED
                j['error'] = '未注册的任务类型: ' + task_type
                j['finished_at'] = _now_iso()
        _update_store(job['job_id'], _missing)
        return
    ctx = _TaskCtx(job['job_id'])
    try:
        result = fn(job.get('payload') or {}, ctx)
        def _ok(j):
            if j['status'] == STATUS_RUNNING:
                j['status'] = STATUS_SUCCESS
                j['result'] = result
                j['progress'] = 100
                j['finished_at'] = _now_iso()
        _update_store(job['job_id'], _ok)
    except JobCancelled:
        def _cancel(j):
            if j['status'] == STATUS_RUNNING:
                j['status'] = STATUS_CANCELLED
                j['finished_at'] = _now_iso()
                j['message'] = '已取消'
        _update_store(job['job_id'], _cancel)
    except Exception as e:
        _err_name = type(e).__name__
        _err_text = str(e)
        def _err(j):
            if j['status'] != STATUS_RUNNING:
                return
            if j['cancelled']:
                j['status'] = STATUS_CANCELLED
            elif j['retries'] < j['max_retries']:
                j['retries'] += 1
                j['status'] = STATUS_PENDING
                j['progress'] = 0
                j['error'] = _err_name + ': ' + _err_text + ' (将重试 ' + str(j['retries']) + '/' + str(j['max_retries']) + ')'
            else:
                j['status'] = STATUS_FAILED
                j['error'] = _err_name + ': ' + _err_text
                j['finished_at'] = _now_iso()
        _update_store(job['job_id'], _err)


class _TaskCtx:
    def __init__(self, task_id):
        self._task_id = task_id
        self._retries_done = None

    @property
    def task_id(self):
        return self._task_id

    @property
    def retries_done(self):
        if self._retries_done is None:
            self._retries_done = (_read().get(self._task_id) or {}).get('retries', 0)
        return self._retries_done

    def progress(self, pct, message=None):
        update_progress(self._task_id, pct, message)

    def check_cancelled(self):
        return check_cancelled(self._task_id)


def _worker_loop():
    while True:
        with _lock:
            jobs = _read()
            job = None
            for j in jobs.values():
                if j['status'] == STATUS_PENDING and not j.get('cancelled'):
                    job = j
                    break
            if job is None:
                _worker_cond.wait(timeout=POLL_INTERVAL)
                continue
            job['status'] = STATUS_RUNNING
            job['started_at'] = _now_iso()
            job['error'] = None
            _write(jobs)
        try:
            _run_one(job)
        except Exception:
            logger.exception('worker 内部异常: %s', job.get('job_id'))


def _wake_worker():
    global _worker
    if _worker is None or not _worker.is_alive():
        _worker = threading.Thread(target=_worker_loop, daemon=True, name='qc-jobs-worker')
        _worker.start()
    _worker_cond.notify_all()


def reset_jobs():
    with _lock:
        _write({})


def clear_registry():
    _registry.clear()

