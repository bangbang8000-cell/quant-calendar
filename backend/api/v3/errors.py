#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""V5.0.8 (T-5.0.83): API v3 错误码契约 — 统一错误信封 {success:false, error:{code,message,status}}"""
from fastapi.responses import JSONResponse

ERROR_CODES = {
    400: "BAD_REQUEST",
    401: "UNAUTHORIZED",
    403: "FORBIDDEN",
    404: "NOT_FOUND",
    422: "VALIDATION",
    429: "RATE_LIMITED",
    500: "INTERNAL",
}


def error_response(status_code, message, code=None):
    return JSONResponse(status_code=status_code, content={
        "success": False,
        "error": {
            "code": code or ERROR_CODES.get(status_code, "ERROR"),
            "message": message,
            "status": status_code,
        },
    })


def bad_request(message):
    return error_response(400, message)


def not_found(message="资源不存在"):
    return error_response(404, message, code="NOT_FOUND")


def forbidden(message="权限不足"):
    return error_response(403, message, code="FORBIDDEN")


def unauthorized(message="未登录或登录已过期"):
    return error_response(401, message, code="UNAUTHORIZED")
