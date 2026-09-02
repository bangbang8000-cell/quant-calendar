#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""V5.9 (T-5.9.3): 数据源健康/路由/告警 (拆自 data_sources.py)"""
from ._constants import *  # noqa: F401,F403
from ._constants import (_health_lock, _health, _alert_lock, ALERT_QUEUE,
                  _route_lock, _route_state)


def _health_slot(source):
    if source not in _health:
        _health[source] = {
            'name': source,
            'calls': 0,
            'successes': 0,
            'failures': 0,
            'total_latency_ms': 0.0,
            'success_rate': None,
            'avg_latency_ms': None,
            'last_success': None,
            'last_failure': None,
            'consecutive_failures': 0,
            'degraded': False,
        }
    return _health[source]

def record_call(source, success, elapsed_ms, rate_limited=False):
    """记录一次数据源调用结果（线程安全）。

    v3.18 (FR-3.18.4): 联动健康自动路由
    - rate_limited=True (限流/429): 不计入连续失败 → 不判死源
    - 连续失败达 ROUTE_FAIL_THRESHOLD → 自动暂停该源参与路由(冷却)
    - 成功 → 清除暂停并记录回切
    """
    with _health_lock:
        s = _health_slot(source)
        s['calls'] += 1
        s['total_latency_ms'] += elapsed_ms
        if success:
            s['successes'] += 1
            s['last_success'] = datetime.now().isoformat()
            s['consecutive_failures'] = 0
        else:
            s['failures'] += 1
            s['last_failure'] = datetime.now().isoformat()
            if not rate_limited:
                s['consecutive_failures'] += 1
        s['success_rate'] = round(s['successes'] / s['calls'] * 100, 2)
        s['avg_latency_ms'] = round(s['total_latency_ms'] / s['calls'], 2)
        s['degraded'] = s['consecutive_failures'] >= DEGRADE_THRESHOLD
    # 路由联动 (独立锁, 避免与健康锁重入)
    if success:
        _resume_source(source)
    elif not rate_limited and s['consecutive_failures'] >= ROUTE_FAIL_THRESHOLD:
        _pause_source(source, f"连续 {s['consecutive_failures']} 次失败")
    return s

def _age_hours(iso_ts, now=None):
    """ISO 时间戳 → 距今小时数; 为空/无法解析 → None (v3.12/FR-3.12.2 新鲜度)"""
    if not iso_ts:
        return None
    try:
        dt = datetime.fromisoformat(iso_ts)
    except (TypeError, ValueError):
        return None
    now = now or datetime.now()
    return round((now - dt).total_seconds() / 3600.0, 1)

def get_health_metrics(now=None):
    """返回各数据源健康指标快照（供 /api/system/metrics 输出）。

    v3.12 (FR-3.12.2): 附加新鲜度字段
    - data_age_hours: 距 last_success 小时数 (从未成功 → None)
    - stale: 从未成功 或 data_age_hours > FRESHNESS_STALE_HOURS → True
    - last_fetch: 最近成功拉取时间 (与 last_success 一致)
    """
    now = now or datetime.now()
    now_ts = time.time()
    with _health_lock:
        out = []
        for v in _health.values():
            slot = dict(v)
            # v3.18 (FR-3.18.4): 路由状态 (active/cooling) + 最近切换记录
            rs = _route_slot(slot['name'])
            with _route_lock:
                cooling = bool(rs['paused_until']) and now_ts < rs['paused_until']
            slot['routing_status'] = 'cooling' if cooling else 'active'
            slot['last_switch_at'] = rs['last_switch_at']
            slot['switch_reason'] = rs['switch_reason']
            age = _age_hours(slot.get('last_success'), now)
            slot['data_age_hours'] = age
            slot['stale'] = age is None or age > FRESHNESS_STALE_HOURS
            slot['last_fetch'] = slot.get('last_success')
            out.append(slot)
        return out

def reset_health():
    """清空健康记录与路由状态（测试用）"""
    with _health_lock:
        _health.clear()
    with _route_lock:
        _route_state.clear()

def _route_slot(source):
    if source not in _route_state:
        _route_state[source] = {
            'paused_until': 0.0,
            'paused_reason': None,
            'last_switch_at': None,
            'switch_reason': None,
        }
    return _route_state[source]

def _pause_source(source, reason):
    """暂停源参与路由 (冷却开始), 记录切换 + 审计告警"""
    with _route_lock:
        s = _route_slot(source)
        s['paused_until'] = time.time() + ROUTE_COOLDOWN_SECONDS
        s['paused_reason'] = reason
        s['last_switch_at'] = datetime.now().isoformat()
        s['switch_reason'] = reason
    enqueue_alert('info', source, f"数据源 {source} 暂停路由: {reason} (冷却 {ROUTE_COOLDOWN_SECONDS}s)")
    logger.warning("[路由] 数据源 %s 暂停: %s", source, reason)

def _resume_source(source, reason='恢复正常'):
    """恢复源参与路由 (回切), 记录切换"""
    with _route_lock:
        s = _route_slot(source)
        if s['paused_until']:
            s['last_switch_at'] = datetime.now().isoformat()
            s['switch_reason'] = reason
        s['paused_until'] = 0.0
        s['paused_reason'] = None

def get_route_order(now=None):
    """按健康状态返回参与路由的源顺序 (FR-3.18.4)。

    - 冷却中的源被跳过 → 请求直达健康备用源 (主源故障服务无感切换)
    - 全部冷却 → 兜底仍返回全量, 避免空路由
    """
    now_f = now if now is not None else time.time()
    active, cooling = [], []
    with _route_lock:
        for src in SOURCE_ORDER:
            s = _route_slot(src)
            if s['paused_until'] and now_f < s['paused_until']:
                cooling.append(src)
            else:
                active.append(src)
    return active if active else cooling

def _is_rate_limited(exc):
    """限流(429/频率限制)与网络故障区分: 限流不判死源 (FR-3.18.4)"""
    msg = str(exc)
    return any(k in msg for k in ('429', '频率', 'frequen', 'RateLimit', 'limit reached', '访问太频繁', '接口权限'))

def enqueue_alert(level, source, message):
    """写入告警队列 (供 v3.13 通知通道消费)"""
    with _alert_lock:
        ALERT_QUEUE.append({
            'level': level, 'source': source, 'message': message,
            'created_at': datetime.now().isoformat(),
        })
        if len(ALERT_QUEUE) > ALERT_QUEUE_MAX:
            del ALERT_QUEUE[:len(ALERT_QUEUE) - ALERT_QUEUE_MAX]
    return ALERT_QUEUE[-1]

def get_alerts(limit=100):
    """读取最近告警 (新→旧)"""
    with _alert_lock:
        return list(ALERT_QUEUE)[-limit:][::-1]

def clear_alerts():
    """清空告警队列（测试用）"""
    with _alert_lock:
        ALERT_QUEUE.clear()

def retry_with_backoff(fn, *, attempts=MAX_RETRIES, base_delay=BACKOFF_BASE_SECONDS,
                       sleep_fn=time.sleep, ok_check=None):
    """指数退避重试: 最多 attempts 次 (含首次), 第 n 次失败后等待 base*2^(n-1) 秒。

    - ok_check(result) 可判定“软失败” (如返回 None/空): 不满足则视为失败重试
    - 返回 (result, None) 或 (None, last_error)
    - sleep_fn 可注入 (测试用), 默认 time.sleep
    """
    last = None
    for i in range(attempts):
        try:
            result = fn()
            if ok_check is None or ok_check(result):
                return result, None
            last = result
        except Exception as e:
            last = e
        if i < attempts - 1:
            sleep_fn(base_delay * (2 ** i))
    return None, last

def record_batch_failure(source, consecutive_failures, message='', threshold=PULL_FAILURE_ALERT_THRESHOLD):
    """批次连续失败达阈值 → 告警入队; 返回是否触发告警 (v3.12/FR-3.12.3)"""
    if consecutive_failures >= threshold:
        enqueue_alert('error', source, message or f"{source} 连续 {consecutive_failures} 次拉取失败")
        return True
    return False

def timed_record(source, fn, *args, **kwargs):
    """带健康记录的调用封装：记录耗时与成功/失败，异常原样抛出"""
    t0 = time.monotonic()
    try:
        result = fn(*args, **kwargs)
        record_call(source, True, (time.monotonic() - t0) * 1000)
        return result
    except Exception:
        record_call(source, False, (time.monotonic() - t0) * 1000)
        raise
