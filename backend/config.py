#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
系统配置模块
统一管理所有环境变量和配置项
"""
import os
from typing import List
from dotenv import load_dotenv
from pydantic_settings import BaseSettings

# 加载环境变量
load_dotenv(os.path.join(os.path.dirname(__file__), '..', '.env'))


class Settings(BaseSettings):
    """系统配置类"""
    
    # 服务器配置
    HOST: str = "0.0.0.0"
    PORT: int = 8000
    DEBUG: bool = True
    
    # JWT 认证配置
    SECRET_KEY: str = "quant-calendar-secret-key-change-in-production-2026"
    ALGORITHM: str = "HS256"
    ACCESS_TOKEN_EXPIRE_MINUTES: int = 1440  # 24小时
    
    # Tushare API 配置
    # Tushare 数据源配置
    TUSHARE_TOKEN: str = ""
    TUSHARE_ENDPOINT: str = "http://api.tushare.pro"
    TUSHARE_TIMEOUT: int = 30
    
    # Redis 配置
    REDIS_URL: str = "redis://localhost:6379/0"
    
    # 数据库配置
    DATABASE_URL: str = "sqlite:///./data/quant_calendar.db"
    
    # CORS 配置
    CORS_ORIGINS: str = "http://localhost:8000,http://127.0.0.1:8000"
    
    # 飞书 Webhook 配置 (可选)
    FEISHU_WEBHOOK_URL: str = ""
    
    # 策略数据目录配置
    QUANT_DATA_DIR: str = "../qresult"
    
    @property
    def cors_origin_list(self) -> List[str]:
        """解析 CORS 源列表"""
        return [origin.strip() for origin in self.CORS_ORIGINS.split(",") if origin.strip()]
    
    class Config:
        env_file = ".env"
        case_sensitive = True


# 全局配置实例
settings = Settings()

# 安全检查：如果是生产环境且使用默认密钥，发出警告
if not settings.DEBUG and settings.SECRET_KEY == "quant-calendar-secret-key-change-in-production-2026":
    import warnings
    warnings.warn("⚠️ 生产环境请修改默认 SECRET_KEY！")
