#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
量化选股日历 - FastAPI 后端服务
重构版：模块化路由架构
"""
import sys
import os
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))

from paths import FRONTEND_DIR, INDEX_HTML_FILE, MANIFEST_JSON_FILE, SW_JS_FILE

from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
from fastapi.responses import HTMLResponse
from contextlib import asynccontextmanager
import logging

from config import settings
from rate_limit import setup_rate_limiter
from api.v1.router import api_router

# 配置日志 (v3.4.0-T6: 按日轮转 + 保留 30 天)
import os
from logging.handlers import TimedRotatingFileHandler

LOG_DIR = os.path.join(os.path.dirname(os.path.abspath(__file__)), "..", "logs")
os.makedirs(LOG_DIR, exist_ok=True)

logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s',
    handlers=[
        logging.StreamHandler(),
        TimedRotatingFileHandler(
            os.path.join(LOG_DIR, "app.log"),
            when="midnight",
            backupCount=30,
            encoding="utf-8",
        ),
    ]
)
logger = logging.getLogger(__name__)

# ===== 应用生命周期管理 (v1.10: lifespan 替代 on_event) =====
@asynccontextmanager
async def lifespan(app: FastAPI):
    """应用启动/关闭生命周期"""
    # v3.3.0-T9: 启动 schema 校验 (损坏自动告警而非静默)
    import db
    if not db.schema_ok():
        ok = db.init_db()
        if not ok:
            logger.critical("❌ 数据库初始化/校验失败, 数据可能损坏! 请检查 data/app.db")
        else:
            logger.info("✅ 数据库 schema 已重建")
    else:
        logger.info("✅ 数据库 schema 校验通过")
    from scheduler import scheduler
    await scheduler.start()
    logger.info("⏰ 定时任务调度器已启动")
    logger.info("🚀 量化选股日历服务启动完成")
    yield
    await scheduler.stop()
    logger.info("⏰ 定时任务调度器已停止")

# 创建 FastAPI 应用
app = FastAPI(
    title="量化选股日历 API v3.2.0",
    version="3.2.0",
    description="基于美林时钟的量化选股系统",
    docs_url="/docs",
    redoc_url="/redoc",
    lifespan=lifespan,
)

# v3.3.0-T13: 统一错误码体系
from api.v1.errors import register_error_handlers
register_error_handlers(app)

# CORS 安全配置
app.add_middleware(
    CORSMiddleware,
    allow_origins=settings.cors_origin_list,
    allow_credentials=True,
    allow_methods=["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allow_headers=["Authorization", "Content-Type"],
    max_age=600,
)
logger.info(f"✅ CORS 配置已加载，允许的源: {settings.cors_origin_list}")

# v1.10: 安全响应头中间件
@app.middleware("http")
async def security_headers(request: Request, call_next):
    # v3.4.0-T3: 结构化请求日志 (trace_id + 耗时)
    import time
    import uuid
    trace_id = request.headers.get("X-Trace-ID") or uuid.uuid4().hex[:12]
    start = time.time()
    response = await call_next(request)
    elapsed_ms = (time.time() - start) * 1000
    # v3.4.0-T4: 记录请求指标
    try:
        from api.v1.system import record_request
        record_request(response.status_code, elapsed_ms)
    except Exception:
        logging.getLogger(__name__).warning("操作异常 (v3.4.0-T8)")
        pass
    # 排除静态资源和健康检查噪音
    path = request.url.path
    if not path.startswith("/static/") and path != "/api/health":
        logger.info(
            f"[req] trace={trace_id} method={request.method} path={path} "
            f"status={response.status_code} time={elapsed_ms:.0f}ms ip={request.client.host if request.client else '-'}"
        )
    response.headers["X-Trace-ID"] = trace_id
    response.headers["X-Content-Type-Options"] = "nosniff"
    response.headers["X-Frame-Options"] = "DENY"
    response.headers["X-XSS-Protection"] = "1; mode=block"
    response.headers["Referrer-Policy"] = "strict-origin-when-cross-origin"
    response.headers["Strict-Transport-Security"] = "max-age=31536000; includeSubDomains"
    response.headers["Content-Security-Policy"] = (
        "default-src 'self'; "
        "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://cdn.jsdelivr.net; "
        "style-src 'self' 'unsafe-inline' https://cdn.jsdelivr.net; "
        "img-src 'self' data: https:; "
        "connect-src 'self' https:; "
        "font-src 'self' https://cdn.jsdelivr.net; "
        "frame-ancestors 'none'"
    )
    return response

# 启用速率限制
setup_rate_limiter(app)

# 挂载静态文件
app.mount("/static", StaticFiles(directory=FRONTEND_DIR), name="static")

# 注册 API v1 路由
app.include_router(api_router)


@app.get("/manifest.json")
async def get_manifest():
    """PWA manifest 配置文件"""
    from fastapi.responses import FileResponse
    return FileResponse(MANIFEST_JSON_FILE)


@app.get("/sw.js")
async def get_service_worker():
    """PWA Service Worker"""
    from fastapi.responses import FileResponse
    return FileResponse(SW_JS_FILE, media_type="application/javascript")


@app.get("/")
async def root():
    """首页"""
    with open(INDEX_HTML_FILE, "r", encoding="utf-8") as f:
        return HTMLResponse(content=f.read())


@app.get("/api/health")
async def health_check():
    """健康检查"""
    return {
        "status": "ok",
        "version": "3.2.0",
        "message": "量化选股日历服务运行中"
    }


if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host=settings.HOST, port=settings.PORT)
