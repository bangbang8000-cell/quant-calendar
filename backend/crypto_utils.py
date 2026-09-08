#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Fernet 对称加密工具 — 用于 API Key 安全存储

读取 FERNET_KEY 环境变量作为加密密钥。首次使用时自动生成并写入 .env。
密文格式：gAAAAA... (Fernet token 的 base64 编码)
"""

import os
import logging
from cryptography.fernet import Fernet

logger = logging.getLogger(__name__)

_FERNET: Fernet | None = None  # module-level singleton


def _get_fernet() -> Fernet:
    """获取 Fernet 实例（懒加载 + 自动初始化密钥）"""
    global _FERNET
    if _FERNET is not None:
        return _FERNET

    key = os.environ.get("FERNET_KEY")
    if key:
        try:
            _FERNET = Fernet(key.encode())
            return _FERNET
        except Exception:
            logger.warning("FERNET_KEY 无效，重新生成")

    # 生成新密钥并写入 .env
    new_key = Fernet.generate_key().decode()
    _FERNET = Fernet(new_key.encode())

    # 写入 .env
    env_path = _find_env_file()
    if env_path:
        try:
            with open(env_path, "r", encoding="utf-8") as f:
                lines = f.readlines()
            # 检查是否已有 FERNET_KEY 行
            has_key = any(line.startswith("FERNET_KEY=") for line in lines)
            if not has_key:
                with open(env_path, "a", encoding="utf-8") as f:
                    f.write(f"\nFERNET_KEY={new_key}\n")
                os.environ["FERNET_KEY"] = new_key
                logger.info("FERNET_KEY 已生成并写入 .env")
            else:
                # 有行但值无效，替换
                with open(env_path, "w", encoding="utf-8") as f:
                    for line in lines:
                        if line.startswith("FERNET_KEY="):
                            f.write(f"FERNET_KEY={new_key}\n")
                        else:
                            f.write(line)
                os.environ["FERNET_KEY"] = new_key
                logger.info("FERNET_KEY 已更新")
        except Exception as e:
            logger.error(f"写入 .env 失败: {e}")
    else:
        os.environ["FERNET_KEY"] = new_key
        logger.warning("未找到 .env 文件，FERNET_KEY 仅存在于当前进程")

    return _FERNET


def _find_env_file() -> str | None:
    """查找项目根目录的 .env 文件"""
    from paths import BASE_DIR
    candidates = [
        os.path.join(BASE_DIR, ".env"),
        os.path.join(os.path.dirname(__file__), "..", ".env"),
    ]
    for path in candidates:
        if os.path.exists(path):
            return os.path.abspath(path)
    return None


def encrypt_value(value: str) -> str:
    """加密字符串。空字符串原样返回。"""
    if not value:
        return value
    f = _get_fernet()
    return f.encrypt(value.encode()).decode()


def decrypt_value(value: str) -> str:
    """解密字符串。若非 Fernet 密文则原样返回（向后兼容明文 key）。"""
    if not value:
        return value
    try:
        f = _get_fernet()
        return f.decrypt(value.encode()).decode()
    except Exception:
        # 不是 Fernet 密文 → 明文兼容
        return value
