#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
API 速率限制模块
防止恶意请求和 DDoS 攻击

v3.17.13 (FR-3.17.13): 限流后端接口抽象
- `RateLimiterBackend` 接口: check(key, limit, window) -> (allowed, remaining)
- 默认单机内存实现 `SimpleMemoryBackend`
- 预留 Redis 后端 (实现可选, 经配置 RATE_LIMIT_BACKEND / REDIS_URL 指定, 未实现时回退内存)
"""
import logging
import time
from typing import Dict, Optional, Tuple

from fastapi import HTTPException, Request

logger = logging.getLogger(__name__)


def get_client_ip(request) -> str:
    """V4.1 (FR-4.1.10): 解析客户端真实 IP

    部署经 cloudflared 反代, 请求经代理链到达; 优先取 X-Forwarded-For 首个地址,
    空则回退 socket 对端。避免所有用户被合并为代理 IP 导致限流失效。
    """
    xff = request.headers.get("x-forwarded-for", "") or ""
    if xff:
        first = xff.split(",")[0].strip()
        if first:
            return first
    return request.client.host if request.client else "unknown"


# ─── 限流后端接口 (可插拔) ────────────────────────────────────────

class RateLimiterBackend:
    """限流后端接口 — 实现必须支持 check(key, limit, window)

    check(key, limit, window) -> (allowed: bool, remaining: int)
      - key: 限流键 (如客户端 IP / 用户名)
      - limit: 窗口内最大请求数
      - window: 窗口长度 (秒); 窗口重置后 remaining 回到 limit
      - allowed=True 表示放行且已计入本次请求; remaining 为本次计数后的剩余额度
    """

    def check(self, key: str, limit: int, window: int) -> Tuple[bool, int]:
        """检查并计数一次请求"""
        raise NotImplementedError


class SimpleMemoryBackend(RateLimiterBackend):
    """单机内存实现 (默认; 无需 Redis) — key -> (count, window_start)"""

    def __init__(self):
        self._records: Dict[str, Tuple[int, float]] = {}

    def check(self, key: str, limit: int, window: int) -> Tuple[bool, int]:
        now = time.time()
        record = self._records.get(key)
        # 无记录或窗口已过期 → 新窗口, 首次计数
        if record is None or now - record[1] >= window:
            self._records[key] = (1, now)
            return (True, max(0, limit - 1))
        count, start = record
        if count >= limit:
            return (False, 0)
        self._records[key] = (count + 1, start)
        return (True, max(0, limit - count - 1))

    def get_remaining(self, key: str, limit: int, window: int) -> int:
        """只读剩余额度 (不计数, 供响应头展示)"""
        record = self._records.get(key)
        if record is None:
            return limit
        count, start = record
        if time.time() - start >= window:
            return limit
        return max(0, limit - count)

    def reset(self, key: str = None):
        """重置限流记录 (测试/运维用; key 为空则全清)"""
        if key is None:
            self._records.clear()
        else:
            self._records.pop(key, None)


class RedisBackend(RateLimiterBackend):
    """Redis 固定窗口限流后端 (V4.7.4, FR-3.18.13 补全)

    多进程/多实例部署时共享计数 (单机内存后端不共享)。使用 INCR + EXPIRE 原子计数:
      - 首次请求: INCR=1 + EXPIRE=window (新窗口)
      - 后续请求: INCR 累加, count > limit 拒绝
    redis-py 为可选依赖: 未安装或连接失败 → 由 get_limiter_backend 回退内存后端。
    """

    def __init__(self, url: str = "redis://localhost:6379/0"):
        import redis
        self._client = redis.from_url(url, decode_responses=True)
        self._ok = True

    def check(self, key: str, limit: int, window: int) -> Tuple[bool, int]:
        rk = f"rl:{key}"
        try:
            count = self._client.incr(rk)
            if count == 1:
                self._client.expire(rk, window)
            if count > limit:
                return (False, 0)
            return (True, max(0, limit - count))
        except Exception as e:
            # Redis 不可达: 限流失败开放 (fail-open), 避免全站 429
            logger.warning("[rate_limit] Redis 后端不可用, fail-open 放行: %s", e)
            return (True, limit)

    def get_remaining(self, key: str, limit: int, window: int) -> int:
        rk = f"rl:{key}"
        try:
            count = int(self._client.get(rk) or 0)
            return max(0, limit - count)
        except Exception:
            return limit

    def reset(self, key: str = None):
        try:
            if key is None:
                for k in self._client.keys("rl:*"):
                    self._client.delete(k)
            else:
                self._client.delete(f"rl:{key}")
        except Exception:
            pass


def get_limiter_backend() -> RateLimiterBackend:
    """按配置返回限流后端 (v3.17.13: 默认 memory; RATE_LIMIT_BACKEND 指定可扩展)

    - RATE_LIMIT_BACKEND=memory (默认) → SimpleMemoryBackend
    - RATE_LIMIT_BACKEND=redis → RedisBackend (V4.7.4 落地; redis-py 未安装或连接失败回退内存并告警)
    - REDIS_URL 指定 Redis 连接地址 (默认 redis://localhost:6379/0)
    """
    backend_type = "memory"
    redis_url = "redis://localhost:6379/0"
    try:
        from config import settings
        configured = (getattr(settings, "RATE_LIMIT_BACKEND", "") or "memory").strip().lower()
        if configured in ("redis", "redis://"):
            backend_type = "redis"
        redis_url = getattr(settings, "REDIS_URL", "") or redis_url
    except Exception:
        pass
    if backend_type == "redis":
        try:
            return RedisBackend(redis_url)
        except Exception as e:
            logger.warning("[rate_limit] Redis 后端初始化失败 (%s), 回退单机内存后端", e)
            return SimpleMemoryBackend()
    return SimpleMemoryBackend()


# 全局限流后端实例 (可被测试替换, 验证可插拔)
_rate_limiter_backend: Optional[RateLimiterBackend] = None


def _global_backend() -> RateLimiterBackend:
    """全局限流后端 (惰性创建, 供 SimpleLimiter 与登录限流共用)"""
    global _rate_limiter_backend
    if _rate_limiter_backend is None:
        _rate_limiter_backend = get_limiter_backend()
    return _rate_limiter_backend


# 内存存储的简单限流器（不依赖 Redis）— 基于 RateLimiterBackend 抽象
class SimpleLimiter:
    """简单限流器 (v3.17.13: 基于 RateLimiterBackend, 默认 SimpleMemoryBackend)
    保持向后兼容接口: check_rate_limit / get_remaining / limit_per_minute
    """

    def __init__(self, backend: RateLimiterBackend = None):
        self.backend: RateLimiterBackend = backend or _global_backend()
        self.limit_per_minute = 600  # 每分钟 600 次请求
        self.window_seconds = 60

    def check_rate_limit(self, client_ip: str) -> bool:
        """检查是否超过速率限制

        Args:
            client_ip: 客户端 IP 地址

        Returns:
            True: 允许请求, False: 超过限制
        """
        allowed, _ = self.backend.check(client_ip, self.limit_per_minute, self.window_seconds)
        return allowed

    def get_remaining(self, client_ip: str) -> int:
        """获取剩余请求次数"""
        if hasattr(self.backend, "get_remaining"):
            return self.backend.get_remaining(client_ip, self.limit_per_minute, self.window_seconds)
        _allowed, remaining = self.backend.check(client_ip, self.limit_per_minute, self.window_seconds)
        return remaining


# 全局限流器实例
simple_limiter = SimpleLimiter()


async def rate_limit_middleware(request: Request, call_next):
    """速率限制中间件

    限制每个 IP 每分钟最多 600 次请求 (V4.1: 经代理链解析真实 IP)
    """
    client_ip = get_client_ip(request)

    if not simple_limiter.check_rate_limit(client_ip):
        logger.warning(f"请求频率超限: {client_ip}")
        raise HTTPException(
            status_code=429,
            detail="请求过于频繁，请稍后再试（每分钟最多600次请求）"
        )

    response = await call_next(request)

    # 添加限流相关响应头
    response.headers["X-RateLimit-Limit"] = str(simple_limiter.limit_per_minute)
    response.headers["X-RateLimit-Remaining"] = str(simple_limiter.get_remaining(client_ip))

    return response


def setup_rate_limiter(app):
    """在 FastAPI 应用中配置速率限制"""
    # 添加中间件
    app.middleware("http")(rate_limit_middleware)
    logger.info("API 速率限制已启用 (每分钟600次请求/IP)")
    return app


# 特定接口更严格的限制（例如登录接口）— 独立后端实例, 避免与通用中间件(600/IP)共享计数
LOGIN_LIMIT_PER_MINUTE = 30  # 登录接口每分钟 30 次
_login_limiter = SimpleMemoryBackend()


def check_login_rate_limit(client_ip: str) -> bool:
    """登录接口更严格的速率限制 (独立计数, 30次/分/IP)"""
    allowed, _ = _login_limiter.check(client_ip, LOGIN_LIMIT_PER_MINUTE, 60)
    if not allowed:
        logger.warning(f"登录尝试超限: {client_ip}")
    return allowed


# V4.1 (FR-4.1.10): 账号级失败锁定 — 15 分钟内连续 5 次失败锁定
ACCOUNT_FAIL_LIMIT = 5
ACCOUNT_FAIL_WINDOW = 900  # 15 分钟
_account_fail = SimpleMemoryBackend()


def is_account_locked(username: str) -> bool:
    """账号是否因连续失败被临时锁定 (15 分钟窗口内失败次数达上限)"""
    if not username:
        return False
    remaining = _account_fail.get_remaining(username, ACCOUNT_FAIL_LIMIT, ACCOUNT_FAIL_WINDOW)
    return remaining <= 0


def record_login_fail(username: str):
    """记录一次登录失败 (计数一次)"""
    if username:
        _account_fail.check(username, ACCOUNT_FAIL_LIMIT, ACCOUNT_FAIL_WINDOW)


def reset_login_fail(username: str):
    """登录成功后清零失败计数"""
    if username:
        _account_fail.reset(username)
