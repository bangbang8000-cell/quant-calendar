#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""V5.0 T-5.0.7: 告警分级与飞书送达 (reliability/alerts.py)

统一告警模型: 分级 (info/warning/critical) + 送达入口 (飞书, 复用 feishu_push) + 防抖去重。
- grade_health_cycle(cycle): 健康巡检/自愈 cycle → 分级告警列表 (空 = 无需告警)
- send_alert(...): 分级告警 → 飞书, 冷却期去重, best-effort 永不抛异常
- dispatch_health_cycle(cycle, detail): 一键: 巡检 → 分级 → 送达 (调度器 health_check 用)

设计原则: 告警宁可少发不轰炸; 送达失败不阻断业务链路。
"""
import logging
import os
import threading
from datetime import datetime

logger = logging.getLogger(__name__)

ALERT_LEVELS = ("info", "warning", "critical")
_LEVEL_RANK = {"info": 0, "warning": 1, "critical": 2}
_LEVEL_ICON = {"info": "ℹ️", "warning": "⚠️", "critical": "🚨"}

# 防抖: (source,title) -> 上次发送时间戳 (epoch 秒)
_last_sent = {}
_last_sent_lock = threading.Lock()
DEFAULT_COOLDOWN_SECONDS = 3600  # 同源同标题 1 小时内不重复告警


def level_rank(level: str) -> int:
    return _LEVEL_RANK.get(level, 1)


def _load_webhook() -> str:
    """读取飞书 webhook (feishu_config.json.webhook_url), 无则返回空串。"""
    try:
        from paths import DATA_DIR
        cfg_path = os.path.join(DATA_DIR, "feishu_config.json")
        if os.path.exists(cfg_path):
            import json
            with open(cfg_path, "r", encoding="utf-8") as f:
                return (json.load(f).get("webhook_url") or "").strip()
    except Exception as e:
        logger.warning("读取飞书配置失败: %s", e)
    return ""


def make_alert(level: str, source: str, title: str, message: str = "") -> dict:
    """构造一条规范化告警记录。"""
    return {
        "level": level if level in ALERT_LEVELS else "warning",
        "source": source,
        "title": title,
        "message": message or "",
        "ts": datetime.now().strftime("%Y-%m-%d %H:%M:%S"),
    }


def grade_health_cycle(cycle: dict) -> list:
    """把一次健康巡检/自愈 cycle 转成分级告警列表 (空列表 = 无需告警)。

    - db_schema / inspection_error 级别 error → critical
    - stale_asset / no_data → warning
    - still_affected (自愈未解决) → warning
    - 有自愈动作成功执行 → info (低噪音, 告知已自动恢复)
    """
    out = []
    cycle = cycle or {}
    for f in cycle.get("findings") or []:
        kind = f.get("kind")
        sev = f.get("severity")
        detail = f.get("detail") or ""
        asset = f.get("asset_id") or ""
        if sev == "error" and kind in ("db_schema", "inspection_error"):
            out.append(make_alert("critical", "health", "数据库/巡检异常",
                                  f"{detail} (kind={kind})"))
        elif kind == "stale_asset":
            out.append(make_alert("warning", "health", f"数据资产过期 {asset}".strip(),
                                  detail))
        elif kind == "no_data":
            out.append(make_alert("warning", "health", "数据为空", detail))
    still = cycle.get("still_affected") or []
    if still:
        out.append(make_alert("warning", "health", "自愈未解决资产",
                              ", ".join(still)))
    if (cycle.get("heal_applied") or cycle.get("applied")):
        applied = cycle.get("applied") or []
        out.append(make_alert("info", "health", "自愈已执行",
                              ", ".join(applied) if applied else "自动修复动作已执行"))
    return out


def _recently_sent(key: str, cooldown_seconds: int) -> bool:
    """判断 key 是否在冷却期内 (线程安全)。"""
    now = datetime.now().timestamp()
    with _last_sent_lock:
        last = _last_sent.get(key)
        if last is not None and (now - last) < cooldown_seconds:
            return True
        _last_sent[key] = now
        return False


def send_alert(level: str, source: str, title: str, message: str = "",
               webhook: str = None, cooldown_seconds: int = DEFAULT_COOLDOWN_SECONDS) -> bool:
    """分级告警 → 飞书 (复用 feishu_push.FeishuPusher)。best-effort 永不抛异常。

    返回 True = 已发送; False = 跳过 (未配置 webhook / 冷却期内去重 / 发送失败)。
    """
    try:
        if webhook is None:
            webhook = _load_webhook()
        if not webhook:
            return False
        key = f"{source}|{title}"
        if _recently_sent(key, cooldown_seconds):
            return False
        icon = _LEVEL_ICON.get(level, "⚠️")
        text = (
            f"{icon} 量化选股日历告警 [{level.upper()}]\n"
            f"来源: {source}\n标题: {title}\n"
            f"{message}\n时间: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}"
        ).strip()
        from feishu_push import FeishuPusher
        ok = FeishuPusher(webhook).send_text(text)
        if not ok:
            logger.warning("[alerts] 飞书发送返回失败: %s | %s", source, title)
        return bool(ok)
    except Exception as e:
        logger.error("告警发送失败 [%s/%s]: %s", source, title, e)
        return False


def dispatch_health_cycle(cycle: dict, detail: str = "") -> int:
    """调度器健康检查入口: 巡检 → 分级 → 送达。返回已发送条数 (0 = 无需/失败)。"""
    alerts = grade_health_cycle(cycle)
    if not alerts:
        return 0
    sent = 0
    for a in alerts:
        if send_alert(a["level"], a["source"], a["title"], a["message"]):
            sent += 1
    if alerts:
        logger.info("[alerts] 健康巡检告警: 分级 %d 条, 送达 %d 条 (%s)",
                    len(alerts), sent, detail)
    return sent
