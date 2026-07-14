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
    SECRET_KEY: str = ""  # v1.8: 留空 → 自动生成，或从 .env 读取
    ALGORITHM: str = "HS256"
    ACCESS_TOKEN_EXPIRE_MINUTES: int = 1440  # 24小时
    
    # Tushare API 配置
    # Tushare 数据源配置
    TUSHARE_TOKEN: str = ""
    TUSHARE_ENDPOINT: str = "http://api.tushare.pro"
    TUSHARE_TIMEOUT: int = 30

    # 多数据源配置（v1.8.0）
    SXSC_TUSHARE_TOKEN: str = ""
    SXSC_TUSHARE_ENABLED: bool = True
    AKSHARE_ENABLED: bool = True
    
    # Redis 配置
    REDIS_URL: str = "redis://localhost:6379/0"
    
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

# v2.1: 安全 — 启动时检测密钥，缺失则自动生成并持久化到 .env
if not settings.SECRET_KEY:
    import secrets
    new_key = secrets.token_hex(32)
    settings.SECRET_KEY = new_key
    # 自动写入 .env
    env_path = os.path.join(os.path.dirname(__file__), '..', '.env')
    try:
        with open(env_path, 'r', encoding='utf-8') as f:
            lines = f.readlines()
        has_key = any(line.startswith('SECRET_KEY=') for line in lines)
        if not has_key:
            with open(env_path, 'a', encoding='utf-8') as f:
                f.write(f'\nSECRET_KEY={new_key}\n')
        else:
            with open(env_path, 'w', encoding='utf-8') as f:
                for line in lines:
                    if line.startswith('SECRET_KEY='):
                        f.write(f'SECRET_KEY={new_key}\n')
                    else:
                        f.write(line)
        os.environ['SECRET_KEY'] = new_key
    except Exception:
        import warnings
        warnings.warn("无法写入 .env，SECRET_KEY 仅对当前进程有效")
