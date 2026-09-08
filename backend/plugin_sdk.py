#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""V5.0.8 (T-5.0.85): 插件 SDK 2.0 — 事件钩子 + 策略插件注册 (plugin_sdk.py)

纯逻辑, 零依赖可单测:
- 事件钩子: register_hook(event_type, fn) / emit(event_type, payload)
  派发到全部钩子, 单个钩子异常隔离 (记录日志不中断其余/不抛给宿主)
- 策略插件: register_strategy(name, run_fn, meta) / list_strategies / run_strategy
  重名拒绝; 未知策略返回错误信封; 运行异常捕获返回 {error}
- 与 events.py 接线: make_event 构造事件后 emit 给钩子

语义边界:
- 钩子/策略注册是进程内注册表 (跨重启不持久 — 插件随启动重新注册)
- emit 同步派发; 钩子异常永不向调用方传播
- run_strategy 的 run_fn 返回任意 JSON 可序列化值
"""
import logging

logger = logging.getLogger(__name__)

_HOOKS = {}
_STRATEGIES = {}


# ─── 事件钩子 ──────────────────────────────────────────────
def register_hook(event_type, fn):
    """注册事件钩子 (同事件同函数不重复)。"""
    if not event_type or not callable(fn):
        return False, 'event_type/fn 无效'
    hooks = _HOOKS.setdefault(event_type, [])
    if fn not in hooks:
        hooks.append(fn)
    return True, 'ok'


def emit(event_type, payload=None):
    """派发事件到钩子; 返回 [fn_result,...]; 钩子异常隔离。"""
    results = []
    for fn in list(_HOOKS.get(event_type, [])):
        try:
            results.append(fn(payload))
        except Exception as e:
            logger.warning('插件钩子 %s 异常 (隔离): %s', event_type, e)
    return results


def hook_count(event_type=None):
    if event_type:
        return len(_HOOKS.get(event_type, []))
    return sum(len(v) for v in _HOOKS.values())


# ─── 策略插件 ──────────────────────────────────────────────
def register_strategy(name, run_fn=None, meta=None):
    """注册策略插件。返回 (ok, msg)。"""
    if not name or not str(name).strip():
        return False, '策略名必填'
    if name in _STRATEGIES:
        return False, '策略已注册: %s' % name
    _STRATEGIES[name] = {'meta': dict(meta or {}), 'run': run_fn or (lambda payload: {})}
    return True, 'ok'


def list_strategies():
    return [{'name': n, 'meta': s['meta']} for n, s in _STRATEGIES.items()]


def run_strategy(name, payload=None):
    """运行策略; 未知策略/运行异常返回 {error} 信封 (不抛)。"""
    s = _STRATEGIES.get(name)
    if not s:
        return {'error': 'unknown strategy: %s' % name}
    try:
        result = s['run'](payload)
        return result if isinstance(result, dict) else {'result': result}
    except Exception as e:
        logger.warning('策略插件 %s 运行异常 (隔离): %s', name, e)
        return {'error': str(e)}


def clear_hooks():
    _HOOKS.clear()


def clear_strategies():
    _STRATEGIES.clear()
