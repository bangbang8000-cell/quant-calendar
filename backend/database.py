#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
数据库模块
使用 SQLAlchemy ORM 替换 JSON 文件存储
"""
import json
import os
from typing import Optional, Dict, Any, List
from datetime import datetime
from sqlalchemy import create_engine, Column, Integer, String, Float, Boolean, DateTime, Text, JSON
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker, Session
from contextlib import contextmanager

from config import settings

# 创建数据库引擎
engine = create_engine(
    settings.DATABASE_URL,
    connect_args={"check_same_thread": False} if "sqlite" in settings.DATABASE_URL else {},
    echo=settings.DEBUG  # 开发模式显示 SQL
)

# 会话工厂
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

# 基础模型类
Base = declarative_base()


@contextmanager
def get_db():
    """获取数据库会话的上下文管理器"""
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


# ==================== 数据库模型 ====================

class User(Base):
    """用户表"""
    __tablename__ = "users"
    
    id = Column(Integer, primary_key=True, index=True)
    username = Column(String(50), unique=True, index=True, nullable=False)
    password_hash = Column(String(255), nullable=False)  # bcrypt 哈希
    role = Column(String(20), default="user")  # admin / user
    theme = Column(String(50), default="tech-blue")
    created_at = Column(DateTime, default=datetime.utcnow)
    last_login = Column(DateTime, nullable=True)
    is_active = Column(Boolean, default=True)
    
    def to_dict(self) -> Dict[str, Any]:
        """转换为字典（不含密码）"""
        return {
            "id": self.id,
            "username": self.username,
            "role": self.role,
            "theme": self.theme,
            "created_at": self.created_at.isoformat() if self.created_at else None,
            "last_login": self.last_login.isoformat() if self.last_login else None,
            "is_active": self.is_active
        }


class StockInfo(Base):
    """股票基础信息表"""
    __tablename__ = "stock_info"
    
    id = Column(Integer, primary_key=True, index=True)
    code = Column(String(20), unique=True, index=True, nullable=False)  # 股票代码
    name = Column(String(100))  # 股票名称
    market = Column(String(20))  # 市场: SH/SZ
    industry = Column(String(100))  # 行业
    list_date = Column(String(20))  # 上市日期
    full_data = Column(JSON)  # 完整数据 JSON
    
    created_at = Column(DateTime, default=datetime.utcnow)
    updated_at = Column(DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)


class StrategyHolding(Base):
    """策略持仓表"""
    __tablename__ = "strategy_holdings"
    
    id = Column(Integer, primary_key=True, index=True)
    date = Column(String(20), index=True, nullable=False)  # 日期: YYYY-MM-DD
    strategy_id = Column(String(50), index=True, nullable=False)  # 策略 ID
    stock_code = Column(String(20), index=True, nullable=False)  # 股票代码
    stock_name = Column(String(100))  # 股票名称
    position = Column(Float)  # 仓位
    entry_price = Column(Float)  # 入场价格
    exit_price = Column(Float)  # 出场价格
    holding_days = Column(Integer)  # 持仓天数
    profit_pct = Column(Float)  # 收益率
    full_data = Column(JSON)  # 完整数据 JSON
    
    created_at = Column(DateTime, default=datetime.utcnow)
    
    __table_args__ = (
        # 联合唯一索引：同一天同一策略同一股票只能有一条记录
        {"sqlite_autoincrement": True},
    )


class AIMarketConfig(Base):
    """AI 评测配置表"""
    __tablename__ = "ai_config"
    
    id = Column(Integer, primary_key=True, index=True)
    config_key = Column(String(100), unique=True, index=True)
    config_value = Column(JSON)
    description = Column(String(500))
    created_at = Column(DateTime, default=datetime.utcnow)
    updated_at = Column(DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)


class MerrillClockHistory(Base):
    """美林时钟历史记录表"""
    __tablename__ = "merrill_history"
    
    id = Column(Integer, primary_key=True, index=True)
    date = Column(String(20), index=True, unique=True)  # 日期
    stage = Column(String(50))  # 当前阶段: recovery/overheat/stagflation/recession
    indicators = Column(JSON)  # 经济指标数据
    confidence = Column(Float)  # 置信度
    created_at = Column(DateTime, default=datetime.utcnow)


class PushLog(Base):
    """推送日志表"""
    __tablename__ = "push_logs"
    
    id = Column(Integer, primary_key=True, index=True)
    push_type = Column(String(50), index=True)  # daily_report / ai_evaluation
    channel = Column(String(50))  # feishu / email
    status = Column(String(20))  # success / failed
    message = Column(String(500))  # 返回消息
    push_date = Column(String(20), index=True)  # 推送日期
    pushed_at = Column(DateTime, default=datetime.utcnow)


# ==================== 数据库操作函数 ====================

def init_db():
    """初始化数据库表"""
    Base.metadata.create_all(bind=engine)
    print("✅ 数据库表初始化完成")


def migrate_from_json():
    """从 JSON 文件迁移数据到数据库"""
    from user_manager import user_manager
    
    from paths import DATA_DIR
    data_dir = DATA_DIR
    
    with get_db() as db:
        # 1. 迁移用户数据
        print("📦 迁移用户数据...")
        if os.path.exists(os.path.join(data_dir, "users.json")):
            with open(os.path.join(data_dir, "users.json"), "r", encoding="utf-8") as f:
                users_data = json.load(f)
            
            migrated_count = 0
            for username, user_data in users_data.items():
                existing = db.query(User).filter(User.username == username).first()
                if not existing:
                    db_user = User(
                        username=username,
                        password_hash=user_data.get("password", ""),
                        role=user_data.get("role", "user"),
                        theme=user_data.get("theme", "tech-blue")
                    )
                    db.add(db_user)
                    migrated_count += 1
            db.commit()
            print(f"✅ 用户数据迁移完成: {migrated_count} 条")
        
        # 2. 迁移股票信息数据
        print("📦 迁移股票信息...")
        stock_info_path = os.path.join(data_dir, "stock_info.json")
        if os.path.exists(stock_info_path):
            with open(stock_info_path, "r", encoding="utf-8") as f:
                stocks_data = json.load(f)
            
            migrated_count = 0
            for code, stock_data in stocks_data.items():
                existing = db.query(StockInfo).filter(StockInfo.code == code).first()
                if not existing:
                    if isinstance(stock_data, dict):
                        db_stock = StockInfo(
                            code=code,
                            name=stock_data.get("name", ""),
                            market=stock_data.get("market", ""),
                            industry=stock_data.get("industry", ""),
                            full_data=stock_data
                        )
                        db.add(db_stock)
                        migrated_count += 1
            db.commit()
            print(f"✅ 股票信息迁移完成: {migrated_count} 条")
        
        print("✅ 所有数据迁移完成！")


if __name__ == "__main__":
    init_db()
    migrate_from_json()
