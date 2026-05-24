#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
量化日历 - FastAPI 后端服务
重构版：模块化路由架构
"""
import sys
import os
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))

from paths import FRONTEND_DIR, INDEX_HTML_FILE

from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
from fastapi.responses import HTMLResponse
import logging

from config import settings
from rate_limit import setup_rate_limiter
from api.v1.router import api_router

# 配置日志
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

# 创建 FastAPI 应用
app = FastAPI(
    title="量化日历 API",
    version="1.5.1",
    description="基于美林时钟经济周期理论的智能选股系统",
    docs_url="/docs",
    redoc_url="/redoc"
)

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

# 启用速率限制
setup_rate_limiter(app)

# 挂载静态文件
app.mount("/static", StaticFiles(directory=FRONTEND_DIR), name="static")

# 注册 API v1 路由
app.include_router(api_router)


@app.get("/")
async def root():
    """首页"""
    from fastapi.responses import HTMLResponse, Response
    with open(INDEX_HTML_FILE, "r", encoding="utf-8") as f:
        content = f.read()
    return Response(content=content, media_type="text/html",
                    headers={"Cache-Control": "no-cache, no-store, must-revalidate",
                             "Pragma": "no-cache",
                             "Expires": "0"})


@app.get("/api/health")
async def health_check():
    """健康检查"""
    return {
        "status": "ok",
        "version": "1.5.1",
        "message": "量化日历服务运行中"
    }


# ===== 应用启动事件 =====
@app.on_event("startup")
async def startup_event():
    """应用启动时执行"""
    from scheduler import scheduler
    await scheduler.start()
    logger.info("⏰ 定时任务调度器已启动")
    logger.info("🚀 量化日历服务启动完成")


@app.on_event("shutdown")
async def shutdown_event():
    """应用关闭时执行"""
    from scheduler import scheduler
    await scheduler.stop()
    logger.info("⏰ 定时任务调度器已停止")


@app.get("/api/system/rate-limit")
async def get_rate_limit():
    """获取限流配置"""
    from rate_limit import simple_limiter, LOGIN_LIMIT_PER_MINUTE
    return {
        "success": True,
        "data": {
            "api_limit": simple_limiter.limit_per_minute,
            "login_limit": LOGIN_LIMIT_PER_MINUTE
        }
    }

@app.post("/api/system/rate-limit")
async def update_rate_limit(req: dict):
    """更新限流配置"""
    from rate_limit import simple_limiter
    if "api_limit" in req:
        val = int(req["api_limit"])
        if 10 <= val <= 10000:
            simple_limiter.limit_per_minute = val
    return {"success": True, "message": "限流配置已更新"}


if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host=settings.HOST, port=settings.PORT)
