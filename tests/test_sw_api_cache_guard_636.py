# -*- coding: utf-8 -*-
"""V6.3.6 (安全) Service Worker API 缓存加固门禁

背景（已在 ops 真实密钥上复现）:
    Cache API 的键只有 URL（响应头仅 Vary: Accept-Encoding），``caches.match()`` 不看
    ``Authorization``。原实现对全部 GET ``/api/*`` 写入同一缓存并在断网时无条件回放 →
    一个已缓存「管理员会话产出的明文密钥响应」的浏览器，断网时会把该响应回放给
    访客 / 无凭据 / 伪造凭据的请求（UI 上：访客离线点「编辑密钥」直接看到管理员完整 API Key）。

加固口径:
    ① 敏感端点（密钥/凭据/配置/用户…）不写缓存、不回放，只走网络；
    ② 其余 API 按请求身份（JWT sub）分区缓存，跨身份不可能命中；
    ③ 无命中返回 503 空态，绝不回放他人数据；登出清理 API 缓存；
    ④ 业务只读数据（日历视图/仪表盘/K线/新鲜度…）离线可读能力不得回归。

本文件守护 ①②③④ 的接线；判定逻辑本身由 tests/sw_api_cache_core.test.js 行为断言。
"""
import os
import re
import subprocess

BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
FRONTEND = os.path.join(BASE, "frontend")
API_CACHE_PREFIX = "quant-calendar-api-"


def _read(*parts):
    with open(os.path.join(*parts), encoding="utf-8") as f:
        return f.read()


def _sw():
    return _read(FRONTEND, "sw.js")


# ─── 0. 纯函数行为断言（Node） ────────────────────────────────

def test_sw_cache_core_behaviour():
    """敏感判定 / 身份分区的行为断言（Node 执行 tests/sw_api_cache_core.test.js）"""
    script = os.path.join(BASE, "tests", "sw_api_cache_core.test.js")
    res = subprocess.run(["node", script], capture_output=True, text=True, timeout=60)
    assert res.returncode == 0, "Node SW 缓存断言失败:\n" + res.stdout + res.stderr
    assert "all assertions passed" in res.stdout


def test_sw_cache_core_served_at_import_path():
    """sw.js 用 importScripts 加载的路径必须真实存在（/static → frontend/）"""
    core_path = os.path.join(FRONTEND, "js", "sw-cache-core.js")
    assert os.path.isfile(core_path), "frontend/js/sw-cache-core.js 不存在"
    sw = _sw()
    m = re.search(r"importScripts\(([^)]*)\)", sw)
    assert m, "sw.js 应 importScripts 加载分区核心"
    assert "/static/js/sw-cache-core.js" in m.group(1), "importScripts 路径应为 /static/js/sw-cache-core.js"
    assert "APP_VERSION" in m.group(1), "importScripts 应带版本查询串（避免 /static 长期缓存）"
    # importScripts 必须包在 try 中: 失败时降级为「不缓存 API」而非中断 SW 安装
    head = sw[:m.start()]
    assert re.search(r"try\s*\{\s*$", head.rstrip() + "\n") or "try {" in head[-120:], \
        "importScripts 必须包在 try 中（失败降级不得中断 SW 安装）"
    assert "SW_CORE = null;" in sw.split("importScripts")[-1][:400], "失败时应降级为禁用 API 缓存"


# ─── 1. 敏感端点不缓存 / 不回放 ───────────────────────────────

def test_sensitive_api_bypasses_cache():
    """fetch 处理器: 敏感端点直接 return（不 respondWith → 不缓存、不回放）"""
    sw = _sw()
    guard = "if (!SW_CORE || SW_CORE.isSensitiveApi(url)) return;"
    assert guard in sw, "API 分支应在写缓存前对敏感端点/核心缺失直接放行"
    api_at = sw.index("url.pathname.startsWith('/api/')")
    guard_at = sw.index(guard)
    respond_at = sw.index("event.respondWith(handleApiRequest(event.request))")
    assert api_at < guard_at < respond_at, "敏感判定必须位于「进入缓存分支」之前"
    assert "isSensitiveApi" in sw


def test_api_fallback_scoped_to_own_partition():
    """API 断网兜底只能查「本身份分区」，不得回到全缓存 match（跨身份重放的根因）"""
    sw = _sw()
    api_fn = sw.split("async function handleApiRequest")[1].split("\n// 核心壳预缓存清单")[0]
    assert "matchApiCache(cacheName, request)" in api_fn, "兜底应只查本身份分区"
    assert "caches.match(event.request)" not in api_fn, "API 兜底不得使用全局 caches.match（跨身份重放）"
    assert "await fetch(request)" in api_fn, "API 仍为网络优先"


def test_api_cache_partitioned_by_identity():
    """API 缓存名 = 前缀 + 版本 + 身份键（身份取自 Authorization）"""
    sw = _sw()
    assert "const API_CACHE_PREFIX = 'quant-calendar-api-';" in sw
    assert "API_CACHE_PREFIX + APP_VERSION + '-'" in sw, "分区前缀应含版本"
    assert "request.headers.get('Authorization')" in sw, "身份必须取自请求 Authorization"
    assert "SW_CORE.identityKey(" in sw, "身份键应经 identityKey 派生"


def test_api_offline_miss_returns_503_not_stale():
    """无缓存命中 → 503 空态（绝不回放他人/过期数据）"""
    sw = _sw()
    api_fn = sw.split("async function handleApiRequest")[1].split("\n// 核心壳预缓存清单")[0]
    assert "status: 503" in api_fn, "无命中应返回 503"
    assert "offline: true" in api_fn, "503 响应应带 offline 标记"


def test_cache_replay_is_marked():
    """回放缓存须打标 X-QC-Cache，避免被当成实时数据"""
    sw = _sw()
    assert "X-QC-Cache" in sw and "'hit'" in sw and "'miss'" in sw


# ─── 2. 清理与版本化 ─────────────────────────────────────────

def test_activate_clears_other_versions_but_keeps_current_partitions():
    """activate: 保留当前壳缓存 + 当前版本 API 分区，清理旧版本（含旧 API 缓存）"""
    sw = _sw()
    activate = sw.split("self.addEventListener('activate'")[1].split("self.addEventListener('fetch'")[0]
    assert "k !== CACHE_NAME" in activate
    assert "k.indexOf(apiPrefix) !== 0" in activate, "应保留当前版本的 API 分区缓存"
    assert "caches.delete(k)" in activate


def test_logout_clears_api_caches():
    """登出必须清理 API 分区缓存（避免业务数据/凭据响应残留磁盘）"""
    auth = _read(FRONTEND, "js", "app-logic", "auth.js")
    logout = auth.split("function handleLogout()")[1].split("// ===== v1.5.0")[0]
    assert "quant-calendar-api-" in logout, "登出应清理 API 分区缓存"
    assert "window.caches" in logout, "应经 window.caches 访问 CacheStorage（域模块依赖审计要求显式来源）"
    assert ".keys()" in logout and ".delete(" in logout
    assert "localStorage.removeItem('quant_token')" in logout, "原有双清凭证逻辑必须保留"


# ─── 3. 功能不回归（离线壳与业务数据仍可缓存） ────────────────

def test_offline_shell_capability_kept():
    """壳预缓存 + 离线导航回退 + 静态优先 三项离线能力不得被本次加固削弱"""
    sw = _sw()
    assert "const CACHE_NAME = 'quant-calendar-' + APP_VERSION" in sw
    assert "collectAssetUrls" in sw and "fetch('/index.html'" in sw
    assert "event.request.mode === 'navigate'" in sw and "caches.match('/')" in sw
    assert "url.pathname.startsWith('/static/')" in sw
    assert "caches.match(event.request).then(hit =>" in sw, "静态资源仍应缓存优先"


def test_business_api_paths_stay_cacheable_in_source():
    """业务只读端点不得出现在敏感清单里（否则离线可读能力被误伤）"""
    core = _read(FRONTEND, "js", "sw-cache-core.js")
    for path in ("/api/view", "/api/dashboard", "/api/dates", "/api/market/kline", "/api/meta/freshness"):
        assert path not in core, f"{path} 不应被登记为敏感端点（会误伤离线可读）"
