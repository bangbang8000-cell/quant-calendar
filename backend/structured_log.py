# -*- coding: utf-8 -*-
"""
V5.9 (T-5.9.6): 结构化日志 (JSON lines) 支持
- log_event(logger, level, event, **fields): 以 JSON 单行输出结构化事件
- JsonFormatter(logging.Formatter): 把标准 LogRecord 渲染为 JSON 单行
- install_json_handler(log_dir): 追加 JSON 文件 handler (app.json.log, 按日轮转)
所有 JSON 行含 ts/level/logger/event 四个固定字段 + 业务字段。
纯函数, 可单测。
"""
import json
import logging
import os
import time
from logging.handlers import TimedRotatingFileHandler

# 事件字段内禁止再嵌套 dict/list 之外的复杂对象 → 序列化时降级为 str
def _safe(value):
    try:
        json.dumps(value)
        return value
    except (TypeError, ValueError):
        return str(value)


def log_event(logger: logging.Logger, level: int, event: str, **fields) -> None:
    """输出结构化事件日志 (单行 JSON)。level 不达标自动丢弃 (交由 logger 判断)。"""
    record = {
        "ts": time.strftime("%Y-%m-%dT%H:%M:%S", time.localtime()),
        "level": logging.getLevelName(level),
        "logger": logger.name,
        "event": event,
    }
    for k, v in fields.items():
        record[k] = _safe(v)
    logger.log(level, "EVENT " + json.dumps(record, ensure_ascii=False, default=str))


class JsonFormatter(logging.Formatter):
    """把 LogRecord 渲染为单行 JSON (标准字段 + 可选 extra 字段)"""

    def format(self, record: logging.LogRecord) -> str:
        payload = {
            "ts": self.formatTime(record, "%Y-%m-%dT%H:%M:%S"),
            "level": record.levelname,
            "logger": record.name,
            "message": record.getMessage(),
        }
        for key, val in record.__dict__.items():
            if key.startswith("_") or key in ("message", "args", "msg", "exc_text",
                                              "exc_info", "stack_info", "levelname", "name"):
                continue
            payload[key] = _safe(val)
        if record.exc_info:
            payload["exc_info"] = self.formatException(record.exc_info)
        return json.dumps(payload, ensure_ascii=False, default=str)


def install_json_handler(log_dir: str, level=logging.INFO,
                         logger: logging.Logger = None) -> logging.Handler:
    """追加 JSON 文件 handler → <log_dir>/app.json.log (按日轮转, 保留 30 份)。
    返回 handler; 重复调用同文件会追加到同一 logger, 调用方负责去重。"""
    os.makedirs(log_dir, exist_ok=True)
    handler = TimedRotatingFileHandler(
        os.path.join(log_dir, "app.json.log"),
        when="midnight", backupCount=30, encoding="utf-8")
    handler.setLevel(level)
    handler.setFormatter(JsonFormatter())
    target = logger if logger is not None else logging.getLogger()
    target.addHandler(handler)
    return handler
