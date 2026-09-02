#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""V5.0 T-5.0.1: 数据资产注册与新鲜度模型 (reliability 可靠性模块)

- 资产注册表: 声明每个数据资产的名称/类型/过期策略
- 更新记录: 数据生产者 (调度任务/文件监听/手动) 调用 record_update() 记录最后更新时间与最近数据日期
- 过期判定: trading_day 资产按"期望最近交易日 ± 容忍天数", age 资产按"最后更新时间 + 最大年龄"
- 状态汇总: status_summary() 输出全部资产状态, 供健康面板/巡检使用

存储: DATA_DIR/freshness.json (原子写 tmp+rename), 与 scheduler_history.json 同目录。
隔离: 文件路径在调用时由 paths.DATA_DIR 解析 (配合 tests/conftest.py 的 patch_data_dir 重定向)。
"""
import json
import logging
import os
import threading
from dataclasses import dataclass
from datetime import date, datetime, timedelta

logger = logging.getLogger(__name__)

_WRITE_LOCK = threading.RLock()  # RLock: record_update 整段(读-改-写)持有, _save 内重入


@dataclass
class AssetSpec:
    """数据资产规格定义"""
    id: str
    name: str
    freshness_type: str = "trading_day"   # trading_day=按最近交易日 | age=按最后更新时间
    tolerance_days: int = 3               # trading_day: 距期望最近交易日允许的日历天数
    max_age_hours: float = 24.0           # age: 距 last_update 允许的小时数
    stale_policy: str = "alert"           # alert=告警 | heal=触发自愈 (T-5.0.2 消费)
    enabled: bool = True


# 资产注册表 (单一事实源; 新增资产在此登记, 测试 test_registry_ids_unique 守护)
ASSET_REGISTRY: dict = {
    "strategy_holdings": AssetSpec(
        id="strategy_holdings", name="策略持仓", freshness_type="trading_day",
        tolerance_days=3, stale_policy="heal",
    ),
    "calendar_views": AssetSpec(
        id="calendar_views", name="日历视图", freshness_type="trading_day",
        tolerance_days=3, stale_policy="heal",
    ),
    "market_daily": AssetSpec(
        id="market_daily", name="行情日线", freshness_type="trading_day",
        tolerance_days=3, stale_policy="alert",
    ),
    "market_review": AssetSpec(
        id="market_review", name="AI 每日复盘", freshness_type="trading_day",
        tolerance_days=2, stale_policy="alert",
    ),
    "daily_report": AssetSpec(
        id="daily_report", name="日报", freshness_type="age",
        max_age_hours=30, stale_policy="alert",
    ),
    "weekly_report": AssetSpec(
        id="weekly_report", name="周报", freshness_type="age",
        max_age_hours=180, stale_policy="alert",
    ),
    "evaluation_history": AssetSpec(
        id="evaluation_history", name="评估历史", freshness_type="age",
        max_age_hours=30, stale_policy="alert",
    ),
    "backup": AssetSpec(
        id="backup", name="每日备份", freshness_type="age",
        max_age_hours=30, stale_policy="alert",
    ),
    "stock_info": AssetSpec(
        id="stock_info", name="股票信息", freshness_type="age",
        max_age_hours=72, stale_policy="alert",
    ),
}


# ─── 存储 ───

def _file() -> str:
    """调用时解析 DATA_DIR, 保证测试隔离 (conftest patch_data_dir 重定向生效)"""
    import paths
    return os.path.join(paths.DATA_DIR, "freshness.json")


def _load() -> dict:
    p = _file()
    if not os.path.exists(p):
        return {}
    try:
        with open(p, "r", encoding="utf-8") as f:
            data = json.load(f)
        return data if isinstance(data, dict) else {}
    except Exception as e:  # pragma: no cover - 防御损坏文件
        logger.warning("freshness.json 读取失败, 按空处理: %s", e)
        return {}


def _save(store: dict) -> None:
    """原子写 (tmp + os.replace), 避免半写损坏"""
    p = _file()
    tmp = p + ".tmp"
    with _WRITE_LOCK:
        with open(tmp, "w", encoding="utf-8") as f:
            json.dump(store, f, ensure_ascii=False, indent=2)
        os.replace(tmp, p)


# ─── 更新记录 ───

def record_update(asset_id: str, latest_date: str = None, count: int = None,
                  detail: str = "", now: datetime = None) -> dict:
    """数据生产者更新资产新鲜度记录。

    - asset_id 必须存在于 ASSET_REGISTRY (未知 id 抛 ValueError, 拦截拼写错误)
    - latest_date: 交易日资产必填 (YYYY-MM-DD), age 资产可不填
    - 幂等可重入; 返回更新后的记录
    """
    if asset_id not in ASSET_REGISTRY:
        raise ValueError(f"未知数据资产: {asset_id}")
    now = now or datetime.now()
    with _WRITE_LOCK:  # T-5.0.4: 读-改-写整段加锁, 防并发丢记录
        store = _load()
        rec = store.get(asset_id) or {}
        rec["asset_id"] = asset_id
        rec["last_update"] = now.isoformat(timespec="seconds")
        if latest_date is not None:
            rec["latest_date"] = latest_date
        if count is not None:
            rec["count"] = count
        if detail:
            rec["detail"] = detail
        store[asset_id] = rec
        _save(store)
        return rec


def get_record(asset_id: str) -> dict:
    """读取单资产记录 (无则返回 {})"""
    return _load().get(asset_id, {})


# ─── 期望最近交易日 ───

def _default_trade_dates(today: date):
    """默认交易日历: 优先取 data_parser 的可用日期(真实交易日∪前向填充, 反映实际交易日历);
    失败返回空列表, 由 weekday 回退兜底。"""
    try:
        from data_parser import parser
        dates = parser.get_available_dates()
        out = []
        for d in dates:
            parsed = _parse_date(d)
            if parsed and parsed <= today:
                out.append(parsed)
        return sorted(out)
    except Exception as e:  # pragma: no cover - 故障场景兜底
        logger.warning("读取交易日历失败, 回退工作日: %s", e)
        return []


def _weekday_backfill(today: date, max_back: int = 14) -> date:
    d = today
    for _ in range(max_back):
        if d.weekday() < 5:
            return d
        d -= timedelta(days=1)
    return today


def expected_latest_date(now: datetime = None, calendar=None) -> date:
    """期望最近交易日: calendar 注入优先 (测试); 否则默认交易日历; 空则回退最近工作日。

    返回 date 对象, 不抛异常 (故障场景返回回退工作日)。
    """
    now = now or datetime.now()
    today = now.date()
    if calendar:
        dates = sorted(d for d in calendar if isinstance(d, date) and d <= today)
    else:
        dates = _default_trade_dates(today)
    if dates:
        return dates[-1]
    return _weekday_backfill(today)


def _parse_date(value) -> date | None:
    if isinstance(value, date):
        return value
    if not isinstance(value, str):
        return None
    v = value.strip()
    for fmt in ("%Y-%m-%d", "%Y%m%d", "%Y/%m/%d"):
        try:
            return datetime.strptime(v, fmt).date()
        except ValueError:
            continue
    return None


# ─── 过期判定 ───

def evaluate_asset(spec: AssetSpec, record: dict, expected_latest: date, now: datetime = None) -> str:
    """单资产过期判定: 'fresh' | 'stale' | 'missing' (不抛异常)"""
    now = now or datetime.now()
    if not record:
        return "missing"
    if spec.freshness_type == "trading_day":
        latest = record.get("latest_date")
        latest_d = _parse_date(latest)
        if latest_d is None:
            return "missing"
        diff = max((expected_latest - latest_d).days, 0)
        return "fresh" if diff <= spec.tolerance_days else "stale"
    # age 类型
    lu = record.get("last_update")
    try:
        last_dt = datetime.fromisoformat(lu) if lu else None
    except (ValueError, TypeError):
        last_dt = None
    if last_dt is None:
        return "missing"
    hours = (now - last_dt).total_seconds() / 3600
    return "fresh" if hours <= spec.max_age_hours else "stale"


# ─── 状态汇总 ───

def status_summary(now: datetime = None, calendar=None) -> dict:
    """全部资产新鲜度汇总。

    - healthy: 无 stale/missing
    - items: 每资产 {asset_id,name,freshness_type,stale_policy,status,expected_latest,last_update,latest_date,count,detail}
    - now/calendar 可注入 (测试确定性)
    """
    now = now or datetime.now()
    expected = expected_latest_date(now=now, calendar=calendar)
    store = _load()
    items = []
    for spec in ASSET_REGISTRY.values():
        if not spec.enabled:
            continue
        rec = store.get(spec.id)
        status = evaluate_asset(spec, rec, expected, now=now)
        item = {
            "asset_id": spec.id,
            "name": spec.name,
            "freshness_type": spec.freshness_type,
            "stale_policy": spec.stale_policy,
            "status": status,
            "expected_latest": expected.isoformat() if spec.freshness_type == "trading_day" else None,
            "last_update": (rec or {}).get("last_update"),
            "latest_date": (rec or {}).get("latest_date"),
            "count": (rec or {}).get("count"),
            "detail": (rec or {}).get("detail", ""),
        }
        items.append(item)
    stale = [i for i in items if i["status"] in ("stale", "missing")]
    return {
        "expected_latest": expected.isoformat(),
        "healthy": len(stale) == 0,
        "stale_count": len(stale),
        "items": items,
    }
