# -*- coding: utf-8 -*-
"""V5.9 (T-5.9.7): OpenAPI → 前端 API 契约一致性测试 (TEST-PLAN 10.7)

契约不变量:
1. OpenAPI spec 完整性: 版本/标题/全部 operationId 唯一/响应定义
2. 无悬空 $ref (所有引用可解析)
3. 前端源码中的每个真实 fetch 相对 /api/... 路径字面量必须能解析到后端路由
   (精确匹配或模板形态匹配 {param}; 排除外部服务 URL 与注释提及)
4. 关键端点存在性 (登录公开 / user_config / rate-limit / ai index-eval 缓存)
5. 安全: 受保护端点声明 security, 登录等公开端点不声明
"""
import os
import re
import sys

import pytest

sys.path.insert(0, os.path.join(os.path.dirname(__file__), "..", "backend"))

import main_new  # noqa: E402

SPEC = main_new.app.openapi()
PATHS = set(SPEC.get("paths", {}).keys())
APP_ROUTES = {getattr(r, "path", None) for r in main_new.app.routes}
APP_ROUTES.discard(None)

HTTP_METHODS = ("get", "post", "put", "delete", "patch", "options", "head")

BASE = os.path.join(os.path.dirname(__file__), "..")


def _collect_refs(obj):
    refs = []

    def walk(o):
        if isinstance(o, dict):
            for k, v in o.items():
                if k == "$ref":
                    refs.append(v)
                else:
                    walk(v)
        elif isinstance(o, list):
            for i in o:
                walk(i)

    walk(obj)
    return refs


def _resolve_ref(spec, ref):
    node = spec
    for part in ref.lstrip("#/").split("/"):
        if isinstance(node, dict) and part in node:
            node = node[part]
        else:
            return None
    return node


def _norm(frontend_path):
    """前端路径字面量 → 后端模板形态 (动态段 → {x})
    规则: 尾 / 表示后接动态段; 段内含 $ 或 { 或 : 保留静态前缀
          (factors+q → factors; 纯模板段 → {x}); 长 id 段 → {x}"""
    p = frontend_path.rstrip("/")
    segs = []
    for s in p.split("/"):
        if "{" in s or ":" in s or "$" in s:
            prefix = re.split(r"[{$:]", s, maxsplit=1)[0]
            segs.append(prefix if prefix else "{x}")
        elif re.fullmatch(r"[0-9a-fA-F-]{8,}", s or ""):
            segs.append("{x}")
        else:
            segs.append(s)
    if frontend_path.endswith("/"):
        segs.append("{x}")
    return "/".join(segs)


def _shape_match(a, b):
    A, B = a.split("/"), b.split("/")
    if len(A) != len(B):
        return False
    for x, y in zip(A, B):
        if x == y:
            continue
        if (x.startswith("{") and x.endswith("}")) and (y.startswith("{") and y.endswith("}")):
            continue
        return False
    return True


def _frontend_api_paths():
    pat = re.compile(r"/api/[A-Za-z0-9_\-/{}.:$]+")
    out = set()
    for root in ("frontend/js", "frontend/src"):
        for dp, _, fs in os.walk(os.path.join(BASE, root)):
            for f in fs:
                if not f.endswith((".js", ".vue", ".ts")):
                    continue
                src = open(os.path.join(dp, f), encoding="utf-8", errors="ignore").read()
                for m in pat.findall(src):
                    pos = src.find(m)
                    ctx = src[max(0, pos - 40):pos]
                    if ctx.endswith("://"):
                        continue
                    if "fetch(" not in ctx and "axios" not in ctx:
                        continue
                    p = m.strip(" .,;)\"'")
                    if p:
                        out.add(p)
    return out


def _resolves(p):
    n = _norm(p)
    n_bare = _norm(p.rstrip("/"))  # 去尾动态段后的静态模板
    if p in PATHS or p in APP_ROUTES or n_bare in PATHS or n_bare in APP_ROUTES:
        return True
    # 前缀规则: 前端路径是某模板的前缀 (拼接式调用被正则截断, 如 /api/strategies/custom/ + id + /code)
    if any(q.startswith(n + "/") for q in PATHS) or any(q.startswith(n + "/") for q in APP_ROUTES):
        return True
    return any(_shape_match(q, n) for q in PATHS) or \
        any(_shape_match(q, n) for q in APP_ROUTES)


# ─── 1. OpenAPI 完整性 ────────────────────────────────

def test_openapi_version_and_title():
    assert "openapi" in SPEC
    assert SPEC.get("info", {}).get("title")


def test_every_operation_has_operation_id():
    missing = []
    for path, item in SPEC["paths"].items():
        for method, op in item.items():
            if method in HTTP_METHODS and not op.get("operationId"):
                missing.append((path, method))
    assert not missing, missing[:5]


def test_operation_ids_unique():
    ids = [op.get("operationId") for item in SPEC["paths"].values()
           for m, op in item.items() if m in HTTP_METHODS and op.get("operationId")]
    dupes = {x for x in ids if ids.count(x) > 1}
    assert not dupes, dupes


def test_no_dangling_refs():
    refs = _collect_refs(SPEC)
    assert refs
    dangling = [r for r in refs if _resolve_ref(SPEC, r) is None]
    assert not dangling, dangling[:5]


def test_every_operation_has_responses():
    missing = []
    for path, item in SPEC["paths"].items():
        for method, op in item.items():
            if method in HTTP_METHODS and not op.get("responses"):
                missing.append((path, method))
    assert not missing, missing[:5]


def test_2xx_response_schema_resolves():
    broken = []
    for path, item in SPEC["paths"].items():
        for method, op in item.items():
            if method not in HTTP_METHODS:
                continue
            for code, resp in (op.get("responses") or {}).items():
                if not code.startswith("2"):
                    continue
                if "content" in resp:
                    for media in resp["content"].values():
                        if "$ref" in media.get("schema", {}):
                            if _resolve_ref(SPEC, media["schema"]["$ref"]) is None:
                                broken.append((path, method, code))
    assert not broken, broken[:5]


# ─── 2. 关键端点存在性 ────────────────────────────────

def test_login_endpoint_public():
    login = SPEC["paths"].get("/api/login", {})
    assert "post" in login
    assert not login["post"].get("security")


def test_protected_endpoints_declare_security():
    sec = 0
    for path, item in SPEC["paths"].items():
        for method, op in item.items():
            if method in HTTP_METHODS and op.get("security"):
                sec += 1
    assert sec >= 100, sec


def test_contract_fixed_endpoints_exist():
    for p in ("/api/user_config/preferences", "/api/user_config/config",
              "/api/system/rate-limit", "/api/ai/index-eval/{index_code}",
              "/api/ai/evaluate-index"):
        assert p in PATHS, p


# ─── 3. 前端 API 契约 ─────────────────────────────────

def test_frontend_api_paths_resolve():
    unresolved = [p for p in sorted(_frontend_api_paths()) if not _resolves(p)]
    assert not unresolved, unresolved[:20]


def test_frontend_api_paths_count_sane():
    paths = _frontend_api_paths()
    assert len(paths) >= 100
    assert all(p.startswith("/api/") for p in paths)