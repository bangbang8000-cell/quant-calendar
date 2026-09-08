"""V5.0 T-5.0.5: 原子写工具 (reliability/atomic.py)

数据文件写入统一入口: 同目录 tmp + os.replace (原子) + 按路径进程内锁。
保证: 任意时刻读到完整文件; 崩溃/并发不产生半写、不丢记录。

用法:
    atomic_write_json(path, obj)          # 原子写 JSON (ensure_ascii=False, indent=2)
    atomic_write_text(path, text)         # 原子写文本
    with file_lock(path):                 # 读-改-写整段加锁 (RLock 可重入)
        data = load(path)                 # 业务自行读
        data[...] = ...
        atomic_write_json(path, data)     # 锁内写 (重入)
"""
import json
import logging
import os
import threading
from contextlib import contextmanager

logger = logging.getLogger(__name__)

# 按文件路径的进程内锁 (RLock 可重入: 读-改-写整段持有, 内部写再进入)
_FILE_LOCKS: dict = {}
_LOCKS_GUARD = threading.Lock()


def _file_lock(path: str) -> threading.RLock:
    with _LOCKS_GUARD:
        lock = _FILE_LOCKS.get(path)
        if lock is None:
            lock = _FILE_LOCKS.setdefault(path, threading.RLock())
        return lock


@contextmanager
def file_lock(path: str):
    """读-改-写整段加锁 (与 atomic_write_* 内部锁同源, 可重入)"""
    with _file_lock(path):
        yield


def atomic_write_text(path: str, text: str) -> None:
    """原子写文本: 同目录 tmp + os.replace"""
    d = os.path.dirname(path)
    if d and not os.path.isdir(d):
        os.makedirs(d, exist_ok=True)
    tmp = path + ".tmp"
    with _file_lock(path):
        with open(tmp, "w", encoding="utf-8") as f:
            f.write(text)
        os.replace(tmp, path)


def atomic_write_json(path: str, obj, **dump_kwargs) -> None:
    """原子写 JSON (默认 ensure_ascii=False + indent=2, 与既有文件风格一致)"""
    text = json.dumps(obj, ensure_ascii=False, indent=2, **dump_kwargs)
    atomic_write_text(path, text)
