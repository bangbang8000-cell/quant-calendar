#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
开放 API v2 (FR-3.17.15)
- 公开只读端点: /api/openapi/quotes|calendar|watchlist|evaluations|health
  鉴权: X-API-Key header (backend/api_keys.py, 只存哈希)
  统一响应: {"success": bool, "data": ..., "degraded": bool}
  (行情数据源不可达时 degraded=true + 空 data, 不抛错)
- 管理端点 (JWT admin): Key 签发/吊销/列表 + Webhook 订阅管理
- Key 维度限流 (复用 rate_limit.SimpleMemoryBackend, 独立于 IP 级中间件)
- 安全: Key 明文仅在签发响应一次性返回; 审计只记 prefix 不落明文
"""
import logging
from typing import List, Optional

from fastapi import APIRouter, Depends, HTTPException, Request
from pydantic import BaseModel

from auth import get_admin_user
import api_keys
import webhook as webhook_module
from rate_limit import SimpleMemoryBackend

logger = logging.getLogger(__name__)

router = APIRouter(prefix="/openapi", tags=["开放 API"])

# Key 维度限流: 每 Key 每分钟 N 次 (独立后端实例, 不与 IP 级 600/分 共享计数)
OPENAPI_LIMIT_PER_MINUTE = 120
OPENAPI_LIMIT_WINDOW = 60
_openapi_limiter = SimpleMemoryBackend()

# 公开只读端点的统一说明 (Swagger 可浏览)
OPENAPI_DESCRIPTION = (
    "开放 API v2 — 只读数据端点。通过 X-API-Key 请求头鉴权"
    "（管理员在「系统配置 → 开放 API」签发 Key）。"
    "数据源不可达时返回 degraded=true 与空 data 占位，不抛错。"
)

# 只读端点支持的查询字段白名单之外一律拒绝 (只读约束)
ALLOWED_ROLES = ("read", "read_admin")


# ─── API Key 鉴权依赖 (X-API-Key) ────────────────────────────────

def _require_api_key(request: Request) -> dict:
    """开放 API 鉴权: 校验 X-API-Key + Key 维度限流

    - 无 Key / 坏 Key / 吊销 / 过期 → 401
    - Key 请求超限 → 429
    """
    key = request.headers.get("X-API-Key")
    if not key:
        raise HTTPException(status_code=401, detail="缺少 API Key (请携带 X-API-Key 请求头)")
    record = api_keys.verify_api_key(key)
    if record is None:
        raise HTTPException(status_code=401, detail="API Key 无效、已吊销或已过期")
    allowed, _remaining = _openapi_limiter.check(
        f"apikey:{record['id']}", OPENAPI_LIMIT_PER_MINUTE, OPENAPI_LIMIT_WINDOW
    )
    if not allowed:
        raise HTTPException(
            status_code=429,
            detail=f"请求过于频繁，请稍后再试（每 Key 每分钟最多 {OPENAPI_LIMIT_PER_MINUTE} 次）"
        )
    request.state.api_key = record
    return record


def _degraded(data, **extra):
    """统一响应格式: {"success": True, "data": ..., "degraded": bool}"""
    body = {"success": True, "data": data, "degraded": not data}
    body.update(extra)
    return body


# ─── 公开只读端点 ─────────────────────────────────────────────

@router.get("/quotes", tags=["开放 API"],
            summary="行情快照", description="按代码获取最新行情快照（数据源不可达时 degraded=true）。")
async def openapi_quotes(code: str, _key: dict = Depends(_require_api_key)):
    """行情快照: GET /api/openapi/quotes?code=000001.SZ"""
    try:
        from market_data import get_kline_data
        rows = get_kline_data(code, period="daily", limit=5)
        if not rows:
            return _degraded([], code=code)
        latest = rows[-1]
        return _degraded({"code": code, "latest": latest, "bars": len(rows)}, code=code)
    except Exception as e:
        logger.warning("openapi /quotes 失败 %s: %s", code, e)
        return _degraded([], code=code)


@router.get("/calendar", tags=["开放 API"],
            summary="策略日历", description="可用交易日历与最新一期各策略持仓（数据不可达时 degraded=true）。")
async def openapi_calendar(_key: dict = Depends(_require_api_key)):
    """策略日历: 可用日期 + 最新持仓"""
    try:
        from data_parser import parser
        dates = parser.get_available_dates()
        if not dates:
            return _degraded([])
        latest = dates[-1]
        holdings = parser.get_holdings_by_date(latest)
        return _degraded({"dates": dates, "latest": latest, "holdings": holdings})
    except Exception as e:
        logger.warning("openapi /calendar 失败: %s", e)
        return _degraded([])


@router.get("/watchlist", tags=["开放 API"],
            summary="自选股", description="全部用户的自选股汇总列表（只读）。")
async def openapi_watchlist(_key: dict = Depends(_require_api_key)):
    """自选股: 全量自选 (只读汇总)"""
    try:
        import db as dbm
        rows = dbm.watchlist_all()
        return _degraded(rows)
    except Exception as e:
        logger.warning("openapi /watchlist 失败: %s", e)
        return _degraded([])


@router.get("/evaluations", tags=["开放 API"],
            summary="评估记录", description="最近 N 条 AI 评估记录（默认 admin 用户，可用 user 参数切换）。")
async def openapi_evaluations(limit: int = 10, user: str = "admin",
                              _key: dict = Depends(_require_api_key)):
    """评估记录: ?limit=N&user=xxx, 最近 N 条"""
    limit = max(1, min(int(limit or 10), 100))
    try:
        from ai_evaluator import ai_evaluator
        history = ai_evaluator.get_history(user or "admin", limit=limit)
        return _degraded(history, limit=limit, user=user or "admin")
    except Exception as e:
        logger.warning("openapi /evaluations 失败: %s", e)
        return _degraded([], limit=limit, user=user or "admin")


@router.get("/health", tags=["开放 API"],
            summary="系统健康", description="服务/数据库/数据日期健康状态（数据不可达时 degraded=true）。")
async def openapi_health(_key: dict = Depends(_require_api_key)):
    """系统健康: 版本 / db / 数据日期数"""
    import db as dbm
    version = "unknown"
    try:
        from main_new import APP_VERSION  # 请求期导入, 无循环
        version = APP_VERSION
    except Exception:
        pass
    db_ok = False
    try:
        db_ok = dbm.schema_ok()
    except Exception:
        pass
    dates = []
    try:
        from data_parser import parser
        dates = parser.get_available_dates()
    except Exception:
        pass
    data = {
        "status": "ok",
        "version": version,
        "db_ok": db_ok,
        "dates_count": len(dates),
        "latest_date": dates[-1] if dates else None,
    }
    return _degraded(data)


# ─── 管理端点: API Key (JWT admin) ──────────────────────────────

class ApiKeyCreate(BaseModel):
    """签发 API Key 请求体"""
    name: str = ""
    role: str = "read"
    expire_days: int = 365


@router.post("/keys", tags=["开放 API 管理"],
             summary="签发 API Key",
             description="管理员签发只读 API Key。明文 key 仅在本次响应一次性返回，请立即保存。")
async def create_api_key(req: ApiKeyCreate, user: dict = Depends(get_admin_user)):
    """签发 Key: 明文只在本次响应返回一次, 库中只存哈希"""
    role = (req.role or "read").strip().lower()
    if role not in ALLOWED_ROLES:
        raise HTTPException(status_code=400, detail="role 仅支持 read / read_admin")
    try:
        plain_key, record = api_keys.generate_api_key(req.name, role, req.expire_days)
    except Exception as e:
        logger.error("签发 API Key 失败: %s", e)
        raise HTTPException(status_code=500, detail="签发失败")
    # 审计 (只记 prefix, 不落明文)
    try:
        from audit_log import log
        log("api_key_generated", user.get("username"),
            {"id": record["id"], "prefix": record["prefix"], "name": record["name"], "role": role})
    except Exception:
        logger.warning("审计记录失败 (忽略)")
    return {"success": True, "data": record, "api_key": plain_key,
            "message": "明文 Key 仅展示一次，请立即复制保存"}


@router.get("/keys", tags=["开放 API 管理"],
            summary="列出 API Key", description="列出全部 Key 元数据（仅前缀，不含明文/哈希）。")
async def list_api_keys(user: dict = Depends(get_admin_user)):
    """列出 Key (不含明文/哈希)"""
    return {"success": True, "data": api_keys.list_api_keys()}


@router.delete("/keys/{key_id}", tags=["开放 API 管理"],
               summary="吊销 API Key", description="吊销后该 Key 立即失效（软吊销，保留审计追溯）。")
async def revoke_api_key(key_id: int, user: dict = Depends(get_admin_user)):
    """吊销 Key: 吊销后 verify 返回 None → 401"""
    ok = api_keys.revoke_api_key(key_id)
    if not ok:
        raise HTTPException(status_code=404, detail="Key 不存在")
    try:
        from audit_log import log
        log("api_key_revoked", user.get("username"), {"id": key_id})
    except Exception:
        logger.warning("审计记录失败 (忽略)")
    return {"success": True, "message": "Key 已吊销"}


# ─── 管理端点: Webhook 订阅 (JWT admin) ──────────────────────────

class WebhookCreate(BaseModel):
    """订阅 Webhook 请求体 (V4.0 M4: secret 为 HMAC 签名密钥, 留空自动生成)"""
    url: str
    events: List[str] = []
    enabled: bool = True
    secret: Optional[str] = None


@router.post("/webhooks", tags=["开放 API 管理"],
             summary="订阅 Webhook 事件",
             description=f"管理员订阅事件投递。支持事件: {list(webhook_module.WEBHOOK_EVENTS)}")
async def create_webhook(req: WebhookCreate, user: dict = Depends(get_admin_user)):
    """订阅 Webhook (事件名校验)"""
    url = (req.url or "").strip()
    if not url.startswith(("http://", "https://")):
        raise HTTPException(status_code=400, detail="url 必须以 http:// 或 https:// 开头")
    invalid = [e for e in (req.events or []) if e not in webhook_module.WEBHOOK_EVENTS]
    if invalid:
        raise HTTPException(status_code=400, detail=f"不支持的事件: {invalid}")
    sub_id = webhook_module.add_subscription(url, req.events or [], req.enabled,
                                              secret=req.secret)
    subs = {s["id"]: s for s in webhook_module.list_subscriptions()}
    sub = subs.get(sub_id) or {}
    return {"success": True, "data": {"id": sub_id, "url": url,
                                      "events": [e for e in (req.events or []) if e in webhook_module.WEBHOOK_EVENTS],
                                      "enabled": req.enabled,
                                      "secret": sub.get("secret", "")}}


@router.get("/webhooks", tags=["开放 API 管理"],
            summary="列出 Webhook 订阅", description="列出全部 Webhook 订阅。")
async def list_webhooks(user: dict = Depends(get_admin_user)):
    """列出订阅"""
    return {"success": True, "data": webhook_module.list_subscriptions()}


@router.delete("/webhooks/{sub_id}", tags=["开放 API 管理"],
               summary="删除 Webhook 订阅", description="删除指定订阅。")
async def delete_webhook(sub_id: int, user: dict = Depends(get_admin_user)):
    """删除订阅"""
    ok = webhook_module.delete_subscription(sub_id)
    if not ok:
        raise HTTPException(status_code=404, detail="订阅不存在")
    return {"success": True, "message": "订阅已删除"}
