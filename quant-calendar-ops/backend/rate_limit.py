#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
API 速率限制模块
防止恶意请求和 DDoS 攻击
"""
import time
from typing import Dict, Tuple
from fastapi import HTTPException, Request
from slowapi import Limiter, _rate_limit_exceeded_handler
from slowapi.util import get_remote_address
from slowapi.errors import RateLimitExceeded
import logging

logger = logging.getLogger(__name__)

# 内存存储的简单限流器（不依赖 Redis）
class SimpleLimiter:
    """简单内存限流器（无需 Redis）"""
    
    def __init__(self):
        self.requests: Dict[str, Tuple[int, float]] = {}  # ip -> (count, timestamp)
        self.limit_per_minute = 600  # 每分钟 600 次请求
    
    def check_rate_limit(self, client_ip: str) -> bool:
        """检查是否超过速率限制
        
        Args:
            client_ip: 客户端 IP 地址
            
        Returns:
            True: 允许请求, False: 超过限制
        """
        now = time.time()
        minute_ago = now - 60
        
        # 清理过期的记录
        expired_ips = [ip for ip, (_, ts) in self.requests.items() if ts < minute_ago]
        for ip in expired_ips:
            del self.requests[ip]
        
        # 检查当前 IP
        if client_ip in self.requests:
            count, timestamp = self.requests[client_ip]
            if timestamp >= minute_ago:
                # 在同一分钟内
                if count >= self.limit_per_minute:
                    return False
                self.requests[client_ip] = (count + 1, timestamp)
            else:
                # 新的一分钟
                self.requests[client_ip] = (1, now)
        else:
            self.requests[client_ip] = (1, now)
        
        return True
    
    def get_remaining(self, client_ip: str) -> int:
        """获取剩余请求次数"""
        if client_ip in self.requests:
            count, _ = self.requests[client_ip]
            return max(0, self.limit_per_minute - count)
        return self.limit_per_minute


# 全局限流器实例
simple_limiter = SimpleLimiter()


async def rate_limit_middleware(request: Request, call_next):
    """速率限制中间件
    
    限制每个 IP 每分钟最多 60 次请求
    """
    client_ip = get_remote_address(request)
    
    if not simple_limiter.check_rate_limit(client_ip):
        logger.warning(f"⚠️ 请求频率超限: {client_ip}")
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
    logger.info(f"✅ API 速率限制已启用 (每分钟600次请求/IP)")
    return app


# 特定接口更严格的限制（例如登录接口）
LOGIN_LIMIT_PER_MINUTE = 30  # 登录接口每分钟 30 次
login_attempts: Dict[str, Tuple[int, float]] = {}


def check_login_rate_limit(client_ip: str) -> bool:
    """登录接口更严格的速率限制"""
    now = time.time()
    minute_ago = now - 60
    
    if client_ip in login_attempts:
        count, timestamp = login_attempts[client_ip]
        if timestamp >= minute_ago:
            if count >= LOGIN_LIMIT_PER_MINUTE:
                logger.warning(f"⚠️ 登录尝试超限: {client_ip}")
                return False
            login_attempts[client_ip] = (count + 1, timestamp)
        else:
            login_attempts[client_ip] = (1, now)
    else:
        login_attempts[client_ip] = (1, now)
    
    return True
