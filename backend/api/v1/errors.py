#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
统一错误码体系 (v3.3.0-T13 / FR-3.3.8)
错误响应统一结构: {"success": false, "code": "ERR_CODE", "message": "...", "detail": "..."}
错误码字典文档化, 前端可据此统一展示
"""
from fastapi import Request
from fastapi.responses import JSONResponse

# 错误码字典 (文档化)
ERROR_CODES = {
    # 通用
    "ERR_UNKNOWN": "未知错误",
    "ERR_VALIDATION": "参数校验失败",
    "ERR_NOT_FOUND": "资源不存在",
    "ERR_METHOD": "方法不允许",
    "ERR_TIMEOUT": "请求超时",
    # 认证授权
    "ERR_UNAUTHORIZED": "未登录或登录已过期",
    "ERR_FORBIDDEN": "权限不足",
    "ERR_TOKEN_EXPIRED": "令牌已过期",
    # 数据
    "ERR_DB": "数据库错误",
    "ERR_DATA_MISSING": "数据缺失",
    "ERR_DATA_CORRUPT": "数据损坏",
    "ERR_BACKUP_FAILED": "备份失败",
    "ERR_RESTORE_FAILED": "恢复失败",
    # AI
    "ERR_AI_NO_MODEL": "未配置可用AI模型",
    "ERR_AI_TIMEOUT": "AI评估超时",
    "ERR_AI_FAILED": "AI调用失败",
    # 外部
    "ERR_TUSHARE": "tushare数据源错误",
    "ERR_NETWORK": "网络错误",
}


def make_error(code: str, message: str = None, detail: str = None) -> dict:
    """构造统一错误响应体"""
    return {
        "success": False,
        "code": code,
        "message": message or ERROR_CODES.get(code, "未知错误"),
        "detail": detail or "",
    }


async def error_handler(request: Request, exc: Exception) -> JSONResponse:
    """FastAPI 全局异常处理器 — 统一错误结构"""
    from starlette.exceptions import HTTPException as StarletteHTTPException

    if isinstance(exc, StarletteHTTPException):
        status = exc.status_code
        if status == 401:
            code = "ERR_UNAUTHORIZED"
        elif status == 403:
            code = "ERR_FORBIDDEN"
        elif status == 404:
            code = "ERR_NOT_FOUND"
        elif status == 422:
            code = "ERR_VALIDATION"
        else:
            code = f"ERR_HTTP_{status}"
        return JSONResponse(
            status_code=status,
            content=make_error(code, str(exc.detail), None),
        )

    # 其他未捕获异常
    import logging
    logging.getLogger(__name__).exception(f"未捕获异常: {exc}")
    return JSONResponse(
        status_code=500,
        content=make_error("ERR_UNKNOWN", "服务器内部错误", str(exc)),
    )


def register_error_handlers(app):
    """注册全局异常处理器"""
    from starlette.exceptions import HTTPException as StarletteHTTPException
    app.add_exception_handler(StarletteHTTPException, error_handler)
    app.add_exception_handler(Exception, error_handler)
    return app
