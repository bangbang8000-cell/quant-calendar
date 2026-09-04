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
from auth import get_admin_user

from fastapi import FastAPI, Depends, Request, HTTPException as _HTTPException
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
from fastapi.responses import HTMLResponse, JSONResponse as _JSONResponse
from contextlib import asynccontextmanager
import logging
import secrets

from config import settings
from rate_limit import setup_rate_limiter
from api.v1.router import api_router
from api.v1.errors import register_error_handlers
import job_tasks  # noqa: F401  # V5.0.7 T-5.0.73: 批量任务注册到任务队列
import rbac  # noqa: F401  # V5.0.8 T-5.0.81: RBAC 2.0 权限引擎
import metrics  # noqa: F401  # V5.0.9 T-5.0.96: 观测性 (uptime/SLO)
import structured_log  # noqa: F401  # V5.0.9 T-5.0.96: 结构化日志

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
    # V5.0.9 (T-5.0.94): 版本化迁移 — 失败拒绝启动 (schema 不一致/迁移损坏不放行)
    try:
        db.apply_migrations()
        db.validate_migrations()
    except Exception as e:
        logger.critical(f"❌ 版本化迁移失败/校验不通过, 拒绝启动: {e}")
        import sys
        sys.exit(1)
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
    # V5.0.9 (T-5.0.96): 观测性 — uptime 基准 + 结构化启动事件 (ok=ok 重复块已删除, 防 UnboundLocalError)
    metrics.record_start()
    structured_log.log_event(logger, logging.INFO, "app_startup",
                             ok=db.schema_ok(), version=APP_VERSION)
    # V4.1 (FR-4.1.9): 启动自检 — 默认口令告警 (强烈建议立即轮换)
    try:
        from user_manager import user_manager as _um
        if _um.is_default_password("admin"):
            logger.warning("⚠️ 管理员密码仍为默认口令 (admin/admin123)! 请立即登录后在系统配置中修改密码。")
        if _um.is_default_password("guest"):
            logger.warning("⚠️ 访客账户仍为默认口令 (guest/guest)! 建议修改或保持禁用。")
    except Exception:
        pass
    from scheduler import scheduler
    await scheduler.start()
    logger.info("⏰ 定时任务调度器已启动")
    # V4.0 M4-4: 插件机制 — 启动时加载 backend/plugins/ (失败不阻塞)
    try:
        from plugins import load_plugins
        load_plugins({"app": app})
    except Exception as e:
        logger.warning("插件加载异常(不影响主程序): %s", e)
    # V5.0.3 T-5.0.35: 风险预警 provider 注册到事件总线 (V5.0.4 通知消费; 幂等)
    try:
        from risk_events import register_risk_provider
        register_risk_provider("default")
        logger.info("✅ 风险事件源已注册到事件总线")
    except Exception as e:
        logger.warning("风险事件源注册失败(不影响主程序): %s", e)
    logger.info("🚀 量化选股日历服务启动完成")
    # V5.0 T-5.0.3: 启动自检 (依赖/目录/DB/配置) → 持久化报告 + 摘要日志 (失败不阻塞启动)
    try:
        from reliability import checks
        _report = checks.run_checks(app_version=APP_VERSION)
        logger.info("%s: ok=%s warn=%s fail=%s",
                    "✅ 启动自检通过" if _report["healthy"] else "⚠️ 启动自检有告警/失败",
                    _report["ok_count"], _report["warn_count"], _report["fail_count"])
    except Exception as _e:
        logger.warning("启动自检执行失败: %s", _e)
    yield
    await scheduler.stop()
    logger.info("⏰ 定时任务调度器已停止")

# 应用版本单一来源（与发布版本保持一致，用于健康检查与 OpenAPI 元数据）
# v3.17 全版（3.17.0→3.17.3）交付后定版为 3.17.3; 3.17.4: 前端静态资源缓存爆破; 3.17.5: 数据源延迟趋势+数据健康度移入用量统计
# 3.17.6: K线tab切换修复 + 用量统计增强(结构修复/AI用量可视化/30s自动刷新/热度top10+天数切换/任务失败详情/立即备份)
# 3.17.7: K线tab切换彻底修复 — renderKlineTo 检测容器DOM变化重建实例(getDom) + loadStockKline 恢复先置loaded(容器v-if依赖)
APP_VERSION = "5.3.4"  # V5.3.4: 性能与容量 (体积预算门禁/虚拟滚动守护/缓存失效中心/热点索引/CI 性能门禁); 基线 5.3.3

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

# V4.1 (FR-4.1.11): 5xx 不回显内部 detail — 统一收敛, 防止内部异常路径泄露

@app.exception_handler(_HTTPException)
async def _converge_http_exception(request, exc: _HTTPException):
    """覆写 5xx HTTPException: 内部 detail 不回显; 其余(4xx)保持默认语义"""
    if exc.status_code >= 500:
        return _JSONResponse(status_code=exc.status_code, content={"detail": "服务器内部错误"})
    return _JSONResponse(status_code=exc.status_code, content={"detail": exc.detail},
                         headers=getattr(exc, "headers", None))

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

# v3.21 (P1-1): GZip 压缩 — 大 JSON API 响应/静态 JS 传输体积降 60%+ (min_size=1KB)
try:
    from fastapi.middleware.gzip import GZipMiddleware
    app.add_middleware(GZipMiddleware, minimum_size=1024)
    logger.info("✅ GZip 中间件已启用 (min_size=1024B)")
except Exception as e:
    logger.warning(f"⚠️ GZip 中间件启用失败: {e}")

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
# V4.3 (方案A): 构建产物 assets (dist/assets → /assets)
_DIST_ASSETS = os.path.join(FRONTEND_DIR, "dist", "assets")
if os.path.isdir(_DIST_ASSETS):
    app.mount("/assets", StaticFiles(directory=_DIST_ASSETS), name="assets")

# V5.0.10-dev(临时验证): 源码零构建入口路由 — /src/main.js (index.html 引用) + /js/* (import 相对路径)
_src_dir = os.path.join(FRONTEND_DIR, "src")
if os.path.isdir(_src_dir):
    app.mount("/src", StaticFiles(directory=_src_dir), name="src")
_js_dir = os.path.join(FRONTEND_DIR, "js")
if os.path.isdir(_js_dir):
    app.mount("/js", StaticFiles(directory=_js_dir), name="js")

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
async def prometheus_metrics(_: dict = Depends(get_admin_user)):
    """FR-3.17.12: Prometheus 指标导出 (text/plain, V4.1: 仅管理员)"""
    from fastapi.responses import PlainTextResponse
    from metrics import render_metrics
    return PlainTextResponse(render_metrics(), media_type="text/plain; version=0.0.4; charset=utf-8")


if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host=settings.HOST, port=settings.PORT)
