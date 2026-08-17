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
import secrets

from config import settings
from rate_limit import setup_rate_limiter
from api.v1.router import api_router
from api.v1.errors import register_error_handlers

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
    # v3.7.3: DB 初始化失败时拒绝启动，避免在损坏数据上运行
    import db
    # v3.14.2: 增量迁移 (watchlist 增加 name 列)
    try:
        db.migrate()
    except Exception as e:
        logger.warning(f"DB 增量迁移失败(可忽略): {e}")
    if not db.schema_ok():
        ok = db.init_db()
        if not ok:
            logger.critical("❌ 数据库初始化/校验失败, 数据可能损坏! 请检查 data/app.db")
            import sys
            sys.exit(1)
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

# 应用版本单一来源（与发布版本保持一致，用于健康检查与 OpenAPI 元数据）
# v3.17 全版（3.17.0→3.17.3）交付后定版为 3.17.3; 3.17.4: 前端静态资源缓存爆破 (功能配置页还原后浏览器仍持旧缓存)
APP_VERSION = "3.17.4"

# 创建 FastAPI 应用
# v3.17.15 (FR-3.17.15): Swagger 开关 — OPENAPI_ENABLED=false 时 /docs /redoc /openapi.json 一律 404
_docs_url = "/docs" if settings.OPENAPI_ENABLED else None
app = FastAPI(
    title=f"量化选股日历 API v{APP_VERSION}",
    version=APP_VERSION,
    description="基于美林时钟的量化选股系统",
    docs_url=_docs_url,
    redoc_url="/redoc" if settings.OPENAPI_ENABLED else None,
    openapi_url="/openapi.json" if settings.OPENAPI_ENABLED else None,
    lifespan=lifespan,
)

# v3.3.0-T13: 统一错误码体系
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
    # v3.9.5: 在路由处理前生成 CSP nonce (注入到 HTML)
    request.state.csp_nonce = secrets.token_hex(16)
    response = await call_next(request)
    elapsed_ms = (time.time() - start) * 1000
    # v3.4.0-T4: 记录请求指标
    try:
        from api.v1.system import record_request
        record_request(response.status_code, elapsed_ms)
    except Exception:
        logging.getLogger(__name__).warning("操作异常 (v3.4.0-T8)")
        pass
    # v3.17.12 (FR-3.17.12): Prometheus 指标埋点 (method/path/status/延迟)
    try:
        from metrics import record_request as record_prometheus_request
        record_prometheus_request(request.method, request.url.path, response.status_code, elapsed_ms)
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
    # v3.7.8: 静态资源缓存头 (CSS/JS 长期, 其他短期)
    if path.startswith("/static/"):
        ext = path.rsplit('.', 1)[-1] if '.' in path else ''
        if ext in ('css', 'js'):
            response.headers["Cache-Control"] = "public, max-age=31536000, immutable"
        elif ext in ('woff2', 'woff', 'ttf', 'svg', 'png', 'ico'):
            response.headers["Cache-Control"] = "public, max-age=604800"
        else:
            response.headers["Cache-Control"] = "no-cache"
    response.headers["X-Frame-Options"] = "DENY"
    response.headers["X-XSS-Protection"] = "1; mode=block"
    response.headers["Referrer-Policy"] = "strict-origin-when-cross-origin"
    response.headers["Strict-Transport-Security"] = "max-age=31536000; includeSubDomains"
    # v3.9.5: CSP nonce 改造 — 用 per-request nonce 替代 'unsafe-inline'
    nonce = request.state.csp_nonce
    response.headers["Content-Security-Policy"] = (
        "default-src 'self'; "
        f"script-src 'self' 'nonce-{nonce}' 'unsafe-eval' https://cdn.jsdelivr.net; "
        "style-src 'self' 'unsafe-inline' https://cdn.jsdelivr.net; "
        "img-src 'self' data: https:; "
        "connect-src 'self' https: ws: wss:; " \
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
    """PWA Service Worker

    v3.17.8 (FR-3.17.8): 注入 APP_VERSION（与 /api/health 版本同源），
    cacheName 含版本 → 发布新版本即缓存爆破。Cache-Control: no-cache
    保证 SW 每次更新时都取到最新版本脚本。"""
    from fastapi.responses import Response
    try:
        with open(SW_JS_FILE, "r", encoding="utf-8") as f:
            sw = f.read()
    except OSError:
        return Response(content="// sw.js not found", media_type="application/javascript")
    sw = sw.replace("__APP_VERSION__", APP_VERSION)
    return Response(
        content=sw,
        media_type="application/javascript",
        headers={"Cache-Control": "no-cache"},
    )


# v3.7.9: index.html 内存缓存 (避免每次请求读磁盘)
_index_html_cache: str = ""
_index_html_mtime: float = 0.0


@app.get("/")
async def root(request: Request):
    """首页 — v3.9.5: 注入 CSP nonce"""
    global _index_html_cache, _index_html_mtime
    try:
        mtime = os.path.getmtime(INDEX_HTML_FILE)
        if mtime != _index_html_mtime:
            with open(INDEX_HTML_FILE, "r", encoding="utf-8") as f:
                _index_html_cache = f.read()
            _index_html_mtime = mtime
    except OSError:
        pass
    # v3.10 (FR-3.10.5): 注入 APP_VERSION（前端资源缓存号联动）+ per-request CSP nonce
    nonce = getattr(request.state, 'csp_nonce', None)
    html = _index_html_cache
    if html:
        html = html.replace('{{APP_VERSION}}', APP_VERSION)
        if nonce:
            html = html.replace('{{NONCE}}', nonce)
    return HTMLResponse(content=html)


@app.get("/api/health")
async def health_check():
    """健康检查"""
    return {
        "status": "ok",
        "version": APP_VERSION,
        "message": "量化选股日历服务运行中"
    }


@app.get("/metrics")
async def prometheus_metrics():
    """FR-3.17.12: Prometheus 指标导出 (text/plain, 供 Prometheus 抓取, 无鉴权)"""
    from fastapi.responses import PlainTextResponse
    from metrics import render_metrics
    return PlainTextResponse(render_metrics(), media_type="text/plain; version=0.0.4; charset=utf-8")


if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host=settings.HOST, port=settings.PORT)



