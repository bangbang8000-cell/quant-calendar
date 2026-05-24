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
    title="量化选股日历 API",
    version="1.5.2",
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
        "version": "1.5.2",
        "message": "量化选股日历服务运行中"
    }


# ===== 应用启动事件 =====
@app.on_event("startup")
async def startup_event():
    """应用启动时执行"""
    from scheduler import scheduler
    await scheduler.start()
    logger.info("⏰ 定时任务调度器已启动")
    logger.info("🚀 量化选股日历服务启动完成")


@app.on_event("shutdown")
async def shutdown_event():
    """应用关闭时执行"""
    from scheduler import scheduler
    await scheduler.stop()
    logger.info("⏰ 定时任务调度器已停止")


if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host=settings.HOST, port=settings.PORT)
