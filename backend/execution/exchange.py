#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""PTrade 文件交换运行器 (v7.8 FR-7.8-3, 受控模式)

上游对应: KHunter 的 output/input 目录文件交换 —— 直接读写任意路径, 无鉴权无审计。
这里把"文件交换"收敛成受控通道:
1. 路径白名单: 只允许 data/exchange/ 下的 .csv, 拒绝绝对路径、.. 穿越、软链逃逸;
2. 大小上限: 读写都有上限, 防止把大文件当搬运工;
3. 全程留痕: 写入/读取都落 audit_log, 文件名与 plan id 可追溯。

与既有 PTrade 代码导出(`strategy_sdk/base.py` 导出层)共存: 那边导出策略代码,
这边只搬运"人工确认过的执行计划"。
"""
import logging
import os
import re
from datetime import datetime
from typing import Dict, List, Optional

from paths import DATA_DIR

logger = logging.getLogger(__name__)

EXCHANGE_DIR = os.path.join(DATA_DIR, "exchange")
ALLOWED_SUFFIX = ".csv"
MAX_BYTES = 2 * 1024 * 1024
MAX_FILES = 200
_NAME_RE = re.compile(r"^[0-9A-Za-z_\-.]+$")


class ExchangeError(ValueError):
    """交换文件非法(路径越界/后缀不符/超限)"""


def ensure_dir() -> str:
    os.makedirs(EXCHANGE_DIR, exist_ok=True)
    return EXCHANGE_DIR


def safe_name(name: str) -> str:
    """文件名白名单: 仅字母数字下划线连字符点, 且必须以 .csv 结尾"""
    raw = str(name or "").strip()
    if not raw:
        raise ExchangeError("文件名不能为空")
    if raw != os.path.basename(raw):
        raise ExchangeError("文件名不得包含路径分隔符")
    if not _NAME_RE.match(raw):
        raise ExchangeError("文件名仅允许字母数字/下划线/连字符/点")
    if not raw.lower().endswith(ALLOWED_SUFFIX):
        raise ExchangeError(f"仅允许 {ALLOWED_SUFFIX} 文件")
    return raw


def resolve_path(name: str) -> str:
    """白名单解析: 结果必须落在 EXCHANGE_DIR 内(realpath 前缀校验, 防软链逃逸)"""
    filename = safe_name(name)
    base = os.path.realpath(ensure_dir())
    path = os.path.realpath(os.path.join(base, filename))
    if not path.startswith(base + os.sep):
        raise ExchangeError("路径越界, 仅允许交换目录内的文件")
    return path


def _audit(action: str, operator: str, detail: Dict):
    try:
        from audit_log import log
        log(action, operator, detail)
    except Exception as exc:
        logger.warning("exchange audit 失败(%s): %s", action, exc)


def write_plan(plan: Dict, operator: str, filename: Optional[str] = None) -> Dict:
    """把计划写成交换文件; 文件名默认 plan_<id>_<日期>.csv"""
    from .plans import export_csv
    name = filename or f"plan_{plan['id']}_{datetime.now():%Y%m%d_%H%M%S}.csv"
    path = resolve_path(name)
    text = export_csv(plan)
    if len(text.encode("utf-8")) > MAX_BYTES:
        raise ExchangeError("内容超过单文件上限")
    with open(path, "w", encoding="utf-8", newline="") as f:
        f.write(text)
    _audit("exec_exchange_write", operator,
           {"file": os.path.basename(path), "plan_id": plan.get("id"), "bytes": len(text)})
    return {"file": os.path.basename(path), "bytes": len(text.encode("utf-8")),
            "plan_id": plan.get("id")}


def list_files(limit: int = 50) -> List[Dict]:
    """交换目录文件清单(按修改时间倒序), 不存在的目录视为空"""
    base = ensure_dir()
    out = []
    for fn in os.listdir(base):
        if not fn.lower().endswith(ALLOWED_SUFFIX):
            continue
        path = os.path.join(base, fn)
        if not os.path.isfile(path):
            continue
        try:
            st = os.stat(path)
        except OSError:
            continue
        out.append({"file": fn, "bytes": st.st_size,
                    "modified_at": datetime.fromtimestamp(st.st_mtime).strftime("%Y-%m-%dT%H:%M:%S")})
    out.sort(key=lambda x: x["modified_at"], reverse=True)
    return out[:max(1, min(int(limit), MAX_FILES))]


def read_text(name: str, operator: str = "") -> str:
    """读取交换文件内容(限白名单 + 大小上限), 读取留痕"""
    path = resolve_path(name)
    if not os.path.isfile(path):
        raise ExchangeError("文件不存在")
    size = os.path.getsize(path)
    if size > MAX_BYTES:
        raise ExchangeError(f"文件超过 {MAX_BYTES // 1024}KB 上限")
    with open(path, encoding="utf-8-sig", errors="replace") as f:
        text = f.read()
    _audit("exec_exchange_read", operator, {"file": os.path.basename(path), "bytes": size})
    return text


def delete_file(name: str, operator: str = "") -> bool:
    """删除交换文件(仅白名单内), 删除留痕"""
    path = resolve_path(name)
    if not os.path.isfile(path):
        return False
    os.remove(path)
    _audit("exec_exchange_delete", operator, {"file": os.path.basename(path)})
    return True
