#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
API Key 签发/吊销/校验 (FR-3.17.15 / 开放 API v2)
- 只存 key 的 sha256 哈希 (key_hash), 绝不落明文
- 明文 key 仅在 generate_api_key 一次性返回 (调用方负责一次性展示)
- verify_api_key 用常数时间哈希比较 (hmac.compare_digest)
- 审计落点: 审计日志只记录 prefix, 不记录明文 (见 api/v1/openapi.py)
"""
import hashlib
import hmac
import logging
import secrets
from datetime import datetime, timedelta

import db

logger = logging.getLogger(__name__)

# 明文 key 格式: qc_{secret}; secret 为 32 位 hex → 前缀取前 8 位
KEY_PREFIX = "qc"
KEY_SECRET_LEN = 32
DEFAULT_EXPIRE_DAYS = 365  # 默认有效期 (天); expire_days<=0 表示永不过期

# 幂等建表 (与 db.OPENAPI_SCHEMA 一致; 旧库/测试临时库场景兜底)
_API_KEYS_SCHEMA = """
CREATE TABLE IF NOT EXISTS api_keys (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    key_hash TEXT NOT NULL,
    prefix TEXT NOT NULL DEFAULT '',
    role TEXT NOT NULL DEFAULT 'read',
    enabled INTEGER NOT NULL DEFAULT 1,
    created_at TEXT NOT NULL,
    last_used_at TEXT,
    expires_at TEXT
);
CREATE INDEX IF NOT EXISTS idx_api_keys_prefix ON api_keys(prefix);
"""


def _ensure_table() -> None:
    """幂等建表 (生产由 db.migrate 建; 测试/旧库兜底)"""
    try:
        with db._db_lock:
            conn = db.get_conn()
            conn.executescript(_API_KEYS_SCHEMA)
            conn.commit()
            conn.close()
    except Exception as e:
        logger.warning("api_keys 建表失败: %s", e)


def hash_key(key: str) -> str:
    """明文 key → sha256 hex (只存哈希)"""
    return hashlib.sha256(str(key).encode("utf-8")).hexdigest()


def _constant_time_eq(a: str, b: str) -> bool:
    """常数时间字符串比较 (防时序侧信道)"""
    return hmac.compare_digest(str(a).encode("utf-8"), str(b).encode("utf-8"))


def generate_api_key(name: str = "", role: str = "read", expire_days: int = DEFAULT_EXPIRE_DAYS):
    """签发 API Key

    返回 (plain_key, record):
    - plain_key 明文仅此一次返回, 之后只存哈希
    - record 为元数据 dict (id/name/prefix/role/enabled/created_at/expires_at)
    """
    _ensure_table()
    secret = secrets.token_hex(KEY_SECRET_LEN)
    plain_key = f"{KEY_PREFIX}_{secret}"
    prefix = secret[:8]
    now = datetime.now()
    expires_at = None
    if expire_days and expire_days > 0:
        expires_at = (now + timedelta(days=expire_days)).strftime("%Y-%m-%d %H:%M:%S")
    key_hash = hash_key(plain_key)
    with db._db_lock:
        conn = db.get_conn()
        cur = conn.execute(
            "INSERT INTO api_keys (name, key_hash, prefix, role, enabled, created_at, last_used_at, expires_at) "
            "VALUES (?,?,?,?,1,?,NULL,?)",
            (name or "未命名", key_hash, prefix, role or "read",
             now.strftime("%Y-%m-%d %H:%M:%S"), expires_at)
        )
        conn.commit()
        new_id = cur.lastrowid
        conn.close()
    record = {
        "id": new_id,
        "name": name or "未命名",
        "prefix": prefix,
        "role": role or "read",
        "enabled": True,
        "created_at": now.strftime("%Y-%m-%d %H:%M:%S"),
        "last_used_at": None,
        "expires_at": expires_at,
    }
    logger.info("API Key 已签发 id=%s prefix=%s (明文仅展示一次)", new_id, prefix)
    return plain_key, record


def _to_record(row) -> dict:
    """sqlite 行 → 对外元数据 (enabled 归一化为 bool; 不含 key_hash/明文)"""
    rec = dict(row)
    rec["enabled"] = bool(rec.get("enabled"))
    return rec


def list_api_keys() -> list:
    """列出全部 Key 元数据 (不含 key_hash / 明文)"""
    _ensure_table()
    try:
        with db._db_lock:
            conn = db.get_conn()
            rows = conn.execute(
                "SELECT id, name, prefix, role, enabled, created_at, last_used_at, expires_at "
                "FROM api_keys ORDER BY id DESC"
            ).fetchall()
            conn.close()
        return [_to_record(r) for r in rows]
    except Exception as e:
        logger.warning("list_api_keys 失败: %s", e)
        return []


def get_api_key(key_id: int) -> dict | None:
    """按 id 取 Key 元数据 (不含 key_hash)"""
    _ensure_table()
    try:
        with db._db_lock:
            conn = db.get_conn()
            row = conn.execute(
                "SELECT id, name, prefix, role, enabled, created_at, last_used_at, expires_at "
                "FROM api_keys WHERE id=?", (key_id,)
            ).fetchone()
            conn.close()
        return _to_record(row) if row else None
    except Exception as e:
        logger.warning("get_api_key 失败: %s", e)
        return None


def revoke_api_key(key_id: int) -> bool:
    """吊销 Key: enabled=0 (软吊销, 保留元数据供审计追溯)"""
    _ensure_table()
    try:
        with db._db_lock:
            conn = db.get_conn()
            cur = conn.execute("UPDATE api_keys SET enabled=0 WHERE id=?", (key_id,))
            conn.commit()
            ok = cur.rowcount > 0
            conn.close()
        if ok:
            logger.info("API Key 已吊销 id=%s", key_id)
        return ok
    except Exception as e:
        logger.warning("revoke_api_key 失败: %s", e)
        return False


def verify_api_key(key: str) -> dict | None:
    """校验明文 key

    - 常数时间比较存储哈希与 key 的哈希
    - enabled=0 (吊销) → 拒绝
    - expires_at 过期 → 拒绝
    - 成功 → 更新 last_used_at 并返回元数据 dict
    """
    if not key:
        return None
    _ensure_table()
    key_hash = hash_key(key)
    try:
        with db._db_lock:
            conn = db.get_conn()
            rows = conn.execute("SELECT * FROM api_keys").fetchall()
            found = None
            for r in rows:
                if _constant_time_eq(r["key_hash"], key_hash):
                    found = dict(r)
                    break
            conn.close()
    except Exception as e:
        logger.warning("verify_api_key 失败: %s", e)
        return None
    if not found:
        return None
    if not found.get("enabled"):
        return None
    expires_at = found.get("expires_at")
    if expires_at:
        try:
            exp = datetime.strptime(expires_at, "%Y-%m-%d %H:%M:%S")
            if datetime.now() > exp:
                return None
        except (TypeError, ValueError):
            return None
    touch_last_used(found["id"])
    return _to_record(found)


def touch_last_used(key_id: int) -> None:
    """记录 Key 最近使用时间 (不影响校验结果; 失败仅告警)"""
    try:
        with db._db_lock:
            conn = db.get_conn()
            conn.execute(
                "UPDATE api_keys SET last_used_at=? WHERE id=?",
                (datetime.now().strftime("%Y-%m-%d %H:%M:%S"), key_id)
            )
            conn.commit()
            conn.close()
    except Exception as e:
        logger.warning("touch_last_used 失败: %s", e)
