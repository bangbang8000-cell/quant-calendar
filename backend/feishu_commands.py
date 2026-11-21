#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""飞书群指令安全版 (v7.12 / FR-7.7-5 安全口径: 签名 + 白名单 + 审计)

原 v7.7 只做了 outbound 推送 (feishu_push.py), 群内下发指令是零交付项。
本模块提供 inbound 指令回调的**安全核心**, 供 api/v1/feishu.py 的 /command 端点使用:

1. **签名验证** (fail-closed):
   飞书事件订阅 V2 的 X-Lark-Signature = base64(HmacSHA256(app_secret,
   timestamp + nonce + body_raw))。secret 未配置或签名不符 → 直接拒绝;
   timestamp 偏离本机 > REPLAY_WINDOW 秒 → 拒绝 (防重放, 同一请求重发无效)。
2. **指令白名单**:
   文本指令解析为 (cmd, args); 只有注册在 COMMANDS 里的指令会被执行,
   未注册指令返回 usage 提示 —— 不存在"任意文本透传给后端"的通路。
   指令处理器只读 (查询/状态), 不做写操作, 天然限制爆炸半径。
3. **审计落库**:
   每次回调 (无论通过与否) 都写 feishu_command_audit 一行:
   ts / chat_id / open_id / command / allowed / reason, 事后可追责。

配置来源 (与 feishu_config.json 同仓):
  command_secret  : 事件订阅的 Encrypt Key / 签名密钥 (不配置 → 指令功能整体关闭)
  command_enabled : 总开关 (默认 False, 显式打开才生效)
"""
import base64
import hashlib
import hmac
import json
import logging
import os
import sqlite3
import time
from typing import Callable, Dict, List, Optional, Tuple

from paths import DATA_DIR

logger = logging.getLogger(__name__)

REPLAY_WINDOW = 300          # timestamp 允许偏差 (秒), 飞书官方建议 ±5 分钟
AUDIT_DB = os.path.join(DATA_DIR, "feishu_command_audit.db")
AUDIT_LIMIT = 2000           # 审计表滚动上限 (超过删最旧)

_SCHEMA = """
CREATE TABLE IF NOT EXISTS feishu_command_audit (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    ts TEXT NOT NULL,
    chat_id TEXT DEFAULT '',
    open_id TEXT DEFAULT '',
    command TEXT DEFAULT '',
    allowed INTEGER NOT NULL,
    reason TEXT DEFAULT '',
    detail TEXT DEFAULT ''
);
CREATE INDEX IF NOT EXISTS idx_fca_ts ON feishu_command_audit(ts);
"""


def _ensure_table() -> None:
    conn = sqlite3.connect(AUDIT_DB)
    try:
        conn.executescript(_SCHEMA)
        conn.commit()
    finally:
        conn.close()


# ─── 签名 ────────────────────────────────────────────────────

def compute_signature(secret: str, timestamp: str, nonce: str, body: str) -> str:
    """飞书事件订阅 V2 签名: base64(HmacSHA256(secret, ts + nonce + body))"""
    msg = (str(timestamp) + str(nonce) + (body or "")).encode("utf-8")
    digest = hmac.new(str(secret or "").encode("utf-8"), msg, hashlib.sha256).digest()
    return base64.b64encode(digest).decode("ascii")


def verify_signature(secret, headers: Dict[str, str], body: str,
                     now: Optional[float] = None) -> Tuple[bool, str]:
    """校验 X-Lark-Signature 与时间窗。返回 (通过?, 原因)。

    fail-closed: secret 为空 / 头缺失 / 签名不符 / 超时窗 一律 False。
    """
    now = now if now is not None else time.time()
    if not secret:
        return False, "secret_not_configured"
    sig = headers.get("X-Lark-Signature") or headers.get("x-lark-signature") or ""
    ts = headers.get("X-Lark-Request-Timestamp") or headers.get("x-lark-request-timestamp") or ""
    nonce = headers.get("X-Lark-Request-Nonce") or headers.get("x-lark-request-nonce") or ""
    if not (sig and ts and nonce):
        return False, "missing_signature_headers"
    try:
        if abs(now - float(ts)) > REPLAY_WINDOW:
            return False, "stale_timestamp"
    except ValueError:
        return False, "bad_timestamp"
    want = compute_signature(secret, ts, nonce, body)
    if not hmac.compare_digest(want, sig):
        return False, "signature_mismatch"
    return True, "ok"


# ─── 指令白名单 ──────────────────────────────────────────────

COMMANDS: Dict[str, Dict] = {}


def command(name: str, help_text: str):
    """注册指令处理器 (handler(args: list[str]) -> str)。只许只读指令。"""
    def deco(fn: Callable[[List[str]], str]):
        COMMANDS[name] = {"help": help_text, "handler": fn}
        return fn
    return deco


def parse_command(text: str) -> Tuple[str, List[str]]:
    """『/cmd a b』或『cmd a b』→ (cmd, [args]); 空文本 → ('', [])"""
    parts = str(text or "").strip().split()
    if not parts:
        return "", []
    cmd = parts[0].lstrip("/")
    return cmd.lower(), parts[1:]


@command("help", "列出可用指令")
def _cmd_help(args: List[str]) -> str:
    lines = ["可用指令:"]
    for name, meta in sorted(COMMANDS.items()):
        lines.append("  /%s — %s" % (name, meta["help"]))
    return "\n".join(lines)


@command("ping", "连通性自检")
def _cmd_ping(args: List[str]) -> str:
    return "pong (%s)" % time.strftime("%Y-%m-%d %H:%M:%S")


@command("health", "数据源健康摘要")
def _cmd_health(args: List[str]) -> str:
    try:
        from data_sources import get_health_metrics
        items = get_health_metrics() or []
        parts = []
        for it in items[:6]:
            if isinstance(it, dict):
                parts.append("%s:ok=%.0f%%" % (it.get("name", it.get("source", "?")),
                                               float(it.get("success_rate", 0)) * 100))
            else:
                parts.append(str(it))
        return "数据源健康: %s" % (", ".join(parts) or "无数据")
    except Exception as exc:
        return "health 查询失败: %s" % exc


def dispatch(text: str) -> Tuple[bool, str]:
    """白名单分发。返回 (是否为已注册指令, 回复文本)。

    未注册指令 → (False, usage 提示) —— 调用方据此记审计 reason=not_whitelisted。
    处理器抛错时不外泄堆栈, 只回笼统错误 (指令来自外部不可信环境)。
    """
    cmd, args = parse_command(text)
    if not cmd:
        return False, "空指令。发送 /help 查看用法"
    meta = COMMANDS.get(cmd)
    if meta is None:
        return False, "未支持的指令 /%s。发送 /help 查看可用指令" % cmd
    try:
        return True, str(meta["handler"](args) or "(无输出)")
    except Exception as exc:
        logger.warning("飞书指令 /%s 执行失败: %s", cmd, exc)
        return True, "指令 /%s 执行失败, 请稍后重试" % cmd


# ─── 审计 ────────────────────────────────────────────────────

def audit(entry: Dict) -> None:
    """追加一条审计 (失败只告警不抛 —— 审计不该打断业务主流程)。"""
    try:
        _ensure_table()
        conn = sqlite3.connect(AUDIT_DB)
        try:
            conn.execute(
                "INSERT INTO feishu_command_audit (ts, chat_id, open_id, command,"
                " allowed, reason, detail) VALUES (?,?,?,?,?,?,?)",
                (time.strftime("%Y-%m-%d %H:%M:%S"),
                 str(entry.get("chat_id", "")), str(entry.get("open_id", "")),
                 str(entry.get("command", ""))[:64],
                 1 if entry.get("allowed") else 0,
                 str(entry.get("reason", ""))[:64],
                 str(entry.get("detail", ""))[:512]))
            conn.commit()
            _trim(conn)
        finally:
            conn.close()
    except Exception as exc:
        logger.warning("飞书指令审计写入失败: %s", exc)


def _trim(conn: sqlite3.Connection) -> None:
    """滚动裁剪: 只留最近 AUDIT_LIMIT 条 (可降级档: 失败记警告, 不影响主流程)"""
    try:
        conn.execute(
            "DELETE FROM feishu_command_audit WHERE id NOT IN "
            "(SELECT id FROM feishu_command_audit ORDER BY id DESC LIMIT ?)",
            (AUDIT_LIMIT,))
        conn.commit()
    except Exception as exc:
        logger.warning("审计表裁剪失败(不影响主流程): %s", exc)


def audit_rows(limit: int = 50) -> List[Dict]:
    """读审计 (倒序); 表不存在返回空。"""
    try:
        conn = sqlite3.connect(AUDIT_DB)
        conn.row_factory = sqlite3.Row
        try:
            rows = conn.execute(
                "SELECT * FROM feishu_command_audit ORDER BY id DESC LIMIT ?",
                (max(1, min(int(limit), 500)),)).fetchall()
            return [dict(r) for r in rows]
        finally:
            conn.close()
    except Exception:
        return []


# ─── 回调主入口 ──────────────────────────────────────────────

def handle_event(payload: Dict, headers: Dict[str, str], body_raw: str,
                 secret: str, enabled: bool) -> Tuple[int, Dict]:
    """飞书事件回调的统一入口。

    返回 (http_status, response_body)。流程:
      1) 总开关未开 / secret 未配置 → 403 (fail-closed, 连 challenge 也不放行)
      2) url_verification → 签名通过后原样回 challenge
      3) 文本指令 → 白名单分发 + 审计, 按飞书回包格式返回
    """
    chat_id = str((payload.get("event") or {}).get("chat_id", "")
                  or (payload.get("event") or {}).get("message", {}).get("chat_id", ""))
    open_id = str(((payload.get("event") or {}).get("sender") or {}).get("sender_id", {})
                  .get("open_id", ""))

    if not enabled:
        audit({"chat_id": chat_id, "open_id": open_id, "command": "",
               "allowed": False, "reason": "disabled"})
        return 403, {"code": 1901, "msg": "指令功能未启用"}

    ok, reason = verify_signature(secret, headers, body_raw)
    if not ok:
        audit({"chat_id": chat_id, "open_id": open_id, "command": "",
               "allowed": False, "reason": reason})
        return 403, {"code": 1901, "msg": "签名校验失败: %s" % reason}

    # 飞书回调 URL 校验 (签名通过才回 challenge)
    if payload.get("type") == "url_verification":
        return 200, {"challenge": payload.get("challenge", "")}

    # 事件 v2: 文本消息内容在 event.message.content (JSON 字符串 {"text": ...})
    event = payload.get("event") or {}
    msg = event.get("message") or {}
    text = ""
    try:
        content = json.loads(msg.get("content") or "{}")
        text = str(content.get("text", ""))
    except Exception:
        text = str(msg.get("content") or "")

    allowed, reply = dispatch(text)
    cmd, _ = parse_command(text)
    audit({"chat_id": chat_id, "open_id": open_id, "command": cmd,
           "allowed": allowed, "reason": "ok" if allowed else "not_whitelisted",
           "detail": text[:200]})
    return 200, {"code": 0, "msg": "success", "data": {"reply": reply}}
