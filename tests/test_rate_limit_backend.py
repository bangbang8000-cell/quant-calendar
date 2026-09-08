# -*- coding: utf-8 -*-
"""Rate limit backend tests (V4.7.4: Redis backend + fallback)"""
import sys

import rate_limit as rl


# ==================== V4.7.4: Redis 限流后端 ====================


def _install_fake_redis(monkeypatch):
    """向 sys.modules 注入 fake redis 模块 (redis 未安装时可测)"""
    import types

    class _FakeRedisClient:
        def __init__(self, *a, **k):
            self.data = {}

        def incr(self, key):
            self.data[key] = self.data.get(key, 0) + 1
            return self.data[key]

        def expire(self, key, ttl):
            return True

        def get(self, key):
            return str(self.data.get(key, 0))

        def delete(self, key):
            self.data.pop(key, None)
            return 1

        def keys(self, pattern):
            return [k for k in self.data if pattern.rstrip("*") in k]

    fake = types.ModuleType("redis")
    fake.Redis = _FakeRedisClient
    fake.from_url = lambda url, **k: _FakeRedisClient(url)
    monkeypatch.setitem(sys.modules, "redis", fake)
    return _FakeRedisClient


def test_redis_backend_check(monkeypatch):
    """RedisBackend: INCR/EXPIRE 固定窗口计数 (fake redis)"""
    _install_fake_redis(monkeypatch)
    # 清模块缓存确保 import 到 fake
    import rate_limit as rl
    backend = rl.RedisBackend("redis://localhost:6379/0")
    allowed, remaining = backend.check("1.2.3.4", 5, 60)
    assert allowed is True
    assert remaining == 4
    for _ in range(4):
        backend.check("1.2.3.4", 5, 60)
    allowed, remaining = backend.check("1.2.3.4", 5, 60)
    assert allowed is False
    assert remaining == 0
    # 其他 key 独立计数
    allowed, _ = backend.check("9.9.9.9", 5, 60)
    assert allowed is True


def test_redis_backend_reset(monkeypatch):
    """RedisBackend.reset 清理计数"""
    _install_fake_redis(monkeypatch)
    import rate_limit as rl
    backend = rl.RedisBackend("redis://localhost:6379/0")
    backend.check("1.2.3.4", 5, 60)
    backend.reset("1.2.3.4")
    allowed, remaining = backend.check("1.2.3.4", 5, 60)
    assert allowed is True
    assert remaining == 4


def test_get_limiter_backend_memory_default():
    """默认配置 (memory) → SimpleMemoryBackend"""
    import rate_limit as rl
    backend = rl.get_limiter_backend()
    assert isinstance(backend, rl.SimpleMemoryBackend)


def test_get_limiter_backend_redis_fallback(monkeypatch):
    """RATE_LIMIT_BACKEND=redis 但 redis 不可用 → 回退内存 (不抛错)"""
    import builtins
    import rate_limit as rl

    real_import = builtins.__import__

    def _fake_import(name, *args, **kwargs):
        if name == "redis" or name.startswith("redis."):
            raise ImportError("No module named 'redis'")
        return real_import(name, *args, **kwargs)

    monkeypatch.setattr(builtins, "__import__", _fake_import)
    monkeypatch.setattr(rl, "_rate_limiter_backend", None)
    monkeypatch.setattr("config.settings.RATE_LIMIT_BACKEND", "redis")
    backend = rl.get_limiter_backend()
    assert isinstance(backend, rl.SimpleMemoryBackend), "redis 不可用应回退内存"
