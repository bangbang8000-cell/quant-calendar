# -*- coding: utf-8 -*-
"""6.3.2 (T-6.3.2.1): 日志口径统一门禁 — 记录器命名 + 三路径结构化字段

口径:
- 记录器命名: backend 全部模块经 logging.getLogger(__name__) 取记录器 (禁用硬编码名)
- 三路径结构化字段: 数据源 / 任务队列 / AI 调用 每次关键事件输出单行 JSON 事件
  (structured_log.log_event), 含业务字段, 供日志检索与用量统计
"""
import ast
import io
import os

BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SCAN_ROOT = os.path.join(BASE, "backend")
SKIP_DIRS = {"__pycache__", ".git", ".venv", "venv", "node_modules"}

# 三路径的关键事件 (事件名 + 结构化字段子集)
STRUCTURED_PATHS = [
    {
        "file": "backend/data_sources/_health.py",
        "event": "data_source_call",
        "fields": ("source", "ok", "latency_ms"),
    },
    {
        "file": "backend/jobs.py",
        "event": "job_run",
        "fields": ("job_id", "task_type", "status"),
    },
    {
        "file": "backend/ai_eval/_eval_llm.py",
        "event": "ai_call",
        "fields": ("stock_code", "vendor", "model", "ok", "latency_ms"),
    },
]


def _read(rel):
    with io.open(os.path.join(BASE, rel), encoding="utf-8") as f:
        return f.read()


# 记录器名白名单: 审计日志用专用记录器名 (非按模块硬编码, 有专门 handler 配置)
ALLOWED_LOGGER_NAMES = {
    "audit": "审计日志独立记录器 (audit_log.py 专门配置轮转 handler)",
}


def test_loggers_use_name_dunder():
    """全部 backend 模块用 logging.getLogger(__name__) (禁止硬编码记录器名)"""
    violations = []
    for dirpath, dirnames, filenames in os.walk(SCAN_ROOT):
        dirnames[:] = [d for d in dirnames if d not in SKIP_DIRS]
        for fn in sorted(filenames):
            if not fn.endswith(".py"):
                continue
            p = os.path.join(dirpath, fn)
            rel = os.path.relpath(p, BASE).replace("\\", "/")
            try:
                src = io.open(p, encoding="utf-8").read()
            except (OSError, UnicodeDecodeError):
                continue
            for arg in _getlogger_args(src):
                if arg is not None and arg != "__name__" and arg not in ALLOWED_LOGGER_NAMES:
                    violations.append("%s: getLogger(%r)" % (rel, arg))
    assert not violations, "存在硬编码记录器名 (应统一 logging.getLogger(__name__)):\n  " + "\n  ".join(sorted(violations))


def _getlogger_args(src):
    """返回 getLogger(...) 的所有实参 (字符串字面量或标识符), 无则返回空列表"""
    out = []
    try:
        tree = ast.parse(src)
    except SyntaxError:
        return out
    for node in ast.walk(tree):
        if not isinstance(node, ast.Call):
            continue
        fn = node.func
        if isinstance(fn, ast.Attribute) and fn.attr == "getLogger":
            if node.args:
                arg = node.args[0]
                if isinstance(arg, ast.Constant) and isinstance(arg.value, str):
                    out.append(arg.value)
                elif isinstance(arg, ast.Name):
                    out.append(arg.id)
    return out


def test_three_paths_have_structured_fields():
    """数据源 / 任务队列 / AI 调用 三路径输出结构化事件且含业务字段"""
    for case in STRUCTURED_PATHS:
        src = _read(case["file"])
        assert 'log_event(' in src or 'log_event\n' in src or 'log_event(' in src.replace(' ', ''), (
            "%s: 未调用 structured_log.log_event" % case["file"])
        assert '"%s"' % case["event"] in src or "'%s'" % case["event"] in src, (
            "%s: 缺结构化事件 %s" % (case["file"], case["event"]))
        for f in case["fields"]:
            assert f in src, "%s: 结构化事件缺字段 %s" % (case["file"], f)


def test_no_print_based_logging():
    """backend 关键路径不得用 print 输出日志 (应走 logging)"""
    # 任务队列 / AI 调用 / 数据源路由三类路径
    for rel in ("backend/jobs.py", "backend/ai_eval/_eval_llm.py",
                "backend/data_sources/_health.py"):
        src = _read(rel)
        for lineno, line in enumerate(src.splitlines(), 1):
            stripped = line.strip()
            if stripped.startswith("print("):
                assert False, "%s:%d 使用 print 输出日志: %s" % (rel, lineno, stripped)