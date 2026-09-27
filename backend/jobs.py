#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""V5.0.7 (T-5.0.72): 异步任务队列 (jobs.py)

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
from reliability.atomic import atomic_write_json, file_lock

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
_worker_stop = threading.Event()  # V5.3.0 (T-5.3.0.4): worker 停机事件 (测试隔离)
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
    # 6.1.7 (收尾): 读取端与写入端同源文件锁互斥 — 消除 Windows 下读句柄与 os.replace 竞争
    # (历史偶发 WinError 5 拒绝访问: 读 open 未关闭时 replace 目标被占用, 任务状态丢失)
    try:
        with file_lock(JOBS_FILE):
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


def create_task(task_type, payload=None, max_retries=0, priority=0, dedupe_key=None):
    # 6.1.7 (T-6.1.7.2): jobs 队列治理 — priority(数值越小越优先) + dedupe_key(幂等去重)
    # - priority: worker 按 (priority, seq) 排序取任务; 兼容旧调用(位置/关键字均不受影响)
    # - dedupe_key: 同 key 且任务未进入终态(pending/running)时复用现有 job_id, 不重复入队
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
        'priority': max(0, int(priority)),
        'dedupe_key': dedupe_key,
        'cancelled': False,
        'created_at': _now_iso(),
        'started_at': None,
        'finished_at': None,
    }
    with _lock:
        jobs = _read()
        if dedupe_key is not None:
            for _j in jobs.values():
                if _j.get('dedupe_key') == dedupe_key and _j['status'] in (STATUS_PENDING, STATUS_RUNNING):
                    return _j['job_id']
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


def _log_job_event(job, status):
    """6.3.2 (T-6.3.2.1): 任务队列路径结构化字段 — 每任务终态输出单行 JSON 事件

    structured_log.log_event 输出 ts/level/logger/event 固定字段 + 业务字段
    (job_id/task_type/status/retries), 供日志检索与用量统计消费。
    """
    try:
        import logging as _lg
        import structured_log
        structured_log.log_event(logger, _lg.INFO, "job_run",
                                 job_id=job.get("job_id"),
                                 task_type=job.get("task_type"),
                                 status=status,
                                 retries=job.get("retries", 0))
    except Exception as e:
        logger.warning("任务结构化事件写入失败 (忽略): %s", e)


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
    while not _worker_stop.is_set():
        with _lock:
            # 停机事件置位后不再取新任务
            if _worker_stop.is_set():
                break
            jobs = _read()
            job = None
            # 6.1.7 (T-6.1.7.2): 按 (priority, seq) 取最早 pending — 优先级调度, 同优先按提交序
            _pending = [j for j in jobs.values()
                        if j['status'] == STATUS_PENDING and not j.get('cancelled')]
            if _pending:
                job = min(_pending, key=lambda j: (j.get('priority', 0), j.get('seq', 0)))
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
        finally:
            # 6.3.2 (T-6.3.2.1): 终态结构化事件 (成功/失败/取消/重试回 pending)
            _st = (_read().get(job.get('job_id')) or {}).get('status', 'unknown')
            _log_job_event(job, _st)


def _wake_worker():
    global _worker
    if _worker is None or not _worker.is_alive():
        _worker_stop.clear()
        _worker = threading.Thread(target=_worker_loop, daemon=True, name='qc-jobs-worker')
        _worker.start()
    _worker_cond.notify_all()


def _stop_worker(timeout: float = 2.0) -> None:
    """V5.3.0 (T-5.3.0.4): 停机 worker 线程 (测试隔离/优雅退出)

    - 设置停机事件并唤醒, 等 worker 收敛退出 (最长 timeout 秒)
    - 幂等: 无 worker / 已停均安全
    - 生产路径不受影响 (仅测试与显式调用触发)
    """
    global _worker
    w = _worker
    if w is None or not w.is_alive():
        return
    _worker_stop.set()
    with _lock:
        _worker_cond.notify_all()
    w.join(timeout=timeout)
    if not w.is_alive():
        _worker = None


def reset_jobs():
    with _lock:
        _write({})


def shutdown():
    """V5.3.0 (T-5.3.0.4): 应用/测试收尾 — 停止 worker 线程并复位"""

    _stop_worker()


def clear_registry():
    _registry.clear()

