# quant-calendar Python SDK (V5.8)

零外部依赖 (仅标准库 urllib), 对齐 API v3 契约。

## 安装

    PYTHONPATH=sdk python3 -m pip install .   # 或直接 import
    # 简单使用:
    PYTHONPATH=sdk python3 -c "from quant_calendar_client import QuantCalendarClient; ..."

## 快速开始

    from quant_calendar_client import QuantCalendarClient

    c = QuantCalendarClient("http://127.0.0.1:8000")
    c.login("alice", "pw")

    wl = c.get_watchlist(page=1, page_size=20, q="茅台")
    print(wl["total"], wl["items"])

    c.add_watchlist("600519.SH", "贵州茅台")
    evals = c.get_evaluations(page=1, page_size=10, level="强烈推荐")
    groups = c.list_groups()
    roles = c.get_roles()
    perms = c.get_my_permissions()

## 错误处理

    try:
        c.remove_watchlist("999999.SZ")
    except QuantCalendarError as e:
        print(e.code, e.status, e.message)   # NOT_FOUND 404 ...

## 契约

| 方法 | 路径 | 说明 |
|---|---|---|
| login | POST /api/login | JSON {username,password} → {access_token,...} |
| get_watchlist | GET /api/v3/watchlist | 分页 page/page_size + q 过滤 |
| add_watchlist | POST /api/v3/watchlist | {code,name} |
| remove_watchlist | DELETE /api/v3/watchlist/{code} | |
| get_evaluations | GET /api/v3/evaluations | 分页 + level/code 过滤 |
| list_groups | GET /api/v3/groups | 分页协作组 |
| get_roles | GET /api/rbac/roles | 角色列表 |
| get_my_permissions | GET /api/rbac/my | 我的权限 |
| health | GET /api/health | 健康检查 |