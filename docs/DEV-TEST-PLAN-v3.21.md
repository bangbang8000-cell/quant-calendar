# v3.21 测试计划 (DEV-TEST-PLAN-v3.21)

> 配套: DEV-ASSESSMENT-v3.21.md / DEV-PLAN-v3.21.md / DEV-PLAN-v3.21-DETAILED.md
> 基线: 881 测试全绿 (68 文件); 前端一致性 103 项; 覆盖率门禁 >= 40%

## 1. 测试策略总览

| 层 | 对象 | 工具 | 关键点 |
|---|---|---|---|
| 单元 | request.js / loader.js / profiles / audit / confirm | pytest(js 用 node 测试)+python | mock 边界, 不 mock 被测函数 |
| 集成 | 新增端点 (profiles/audit/test_connection) | FastAPI TestClient | 真实 SQLite/文件, 隔离数据 |
| 回归 | 既有 881 测试 + 前端一致性 | pytest -m 'not e2e' + node | 全绿不降级 |
| 冒烟 | ops :8000 HTTP | curl/python | 关键端点 200 + 数据可达 |
| 性能 | 首屏/压缩/并发 | curl + timing | 量化指标对比基线 |

## 2. 按需求的测试用例

### P0-1 统一请求层 request.js (test_request_js.js)
- [ ] 成功: 返回解包 data, loading 计数增减
- [ ] 401: 跳登录 + 清 token
- [ ] 5xx: 统一 ElMessage 错误提示
- [ ] 并发去重: 同 URL 同时 2 请求只发 1 次
- [ ] SWR 缓存: 5s 内重复 GET 走缓存; 过期重发

### P0-2 按需加载 loader.js (test_loader_js.js)
- [ ] 加载成功: 注入 script + 回调执行
- [ ] 加载失败: onerror 拒绝 + 不重复注入
- [ ] 缓存: 已加载页面不重复插 script
- [ ] 顺序: 串行加载保证注册顺序

### P0-3 策略参数方案 (test_strategy_profiles.py + 前端手动)
- [ ] 保存: 合法 name+params 200, 落盘 strategy_profiles.json
- [ ] 列出: per-sid 隔离, 返回全部方案
- [ ] 删除: 存在删除 200, 不存在 404
- [ ] 校验: 空 name/非 dict params 400
- [ ] 前端: 保存→下拉→自动填充→回测 (手动)
- [ ] 持久: 重启后方案仍在 (手动)

### P0-4 高危操作确认 (前端手动 + 组件测试)
- [ ] confirm-action 组件渲染 + 确认/取消分支
- [ ] 高危操作 (调仓/删自选/删用户/清数据) 触发确认且文案含对象名

### P0-5 操作审计 (test_audit.py)
- [ ] 上报: POST /api/audit/log 写入 (time/user/action/target)
- [ ] 查询: GET /api/audit/latest 返回最近 N 条倒序
- [ ] 关键操作触发: 跑策略/回测/改配置 自动记录 (后端拦截)

### P1-1 GZip 压缩 (性能验证)
- [ ] 大 JSON 端点 (扫描/回测) 响应头含 Content-Encoding: gzip
- [ ] 压缩后体积较基线降 >= 60%

### P1-2 数据源一键检测 (test_connection 复用)
- [ ] 后端 test_connection 对 3 源返回 {ok, latency} (已存在, 补 UI 验证)
- [ ] 前端点击按钮显示各源状态+延迟 (手动)

### P1-3 数据源全局并发闸 (test_source_gate.py)
- [ ] 并发 20 请求同源 → 实际并发 <= gate 上限, 无限流触发
- [ ] 多源隔离: sxsc 满不影响 tushare

### P1-4 关键参数持久化 (前端手动)
- [ ] 扫描范围/回测日期/资金 刷新后保留 (localStorage)

## 3. 门禁 (CI 必过)

| 检查 | 命令 | 通过标准 |
|---|---|---|
| ruff | ruff check --select=E,F,W --ignore=E501 | All checks passed |
| 单测 | pytest -m 'not e2e' | 全部 passed |
| 覆盖率 | --cov-fail-under=40 | >= 40% |
| 前端一致性 | node test (103 项) | 全绿 |
| JS 语法 | node --check 新增 js | 无语法错误 |
| 新增测试 | 每 P0/P1 需求有对应测试 | 可追溯 |

## 4. 回归与发布清单

- [ ] 全量 881+ 测试绿 (不降级)
- [ ] 前端一致性 103 项绿 (新 class 有 CSS)
- [ ] ops :8000 同步 + 重启 + HTTP 冒烟 (健康/登录/日历/策略/扫描)
- [ ] 浏览器硬刷新验证 (前端零构建, 需清缓存)
- [ ] 版本号 3.21.0 + CHANGELOG 记录
- [ ] 报告归档 (docs/ 新评估/计划/测试 3 件套入库)

## 5. 风险测试点

| 风险 | 测试对策 |
|---|---|
| loader 组件注册时序 | 自动化: 模拟切页脚本加载完成后再挂载 |
| request 迁移回归 | 保留旧 fetch fallback, 新组件用 request, 覆盖关键页冒烟 |
| 并发闸影响 scan 性能 | 基准对比: 并发闸下 scan 耗时 vs 无闸 |
| 审计高频写 | 限流: 只记关键操作, 压测写入耗时 |

## 6. 测试基础设施

- 前端 JS 单测: node 内建 test runner (无需 jest, 零构建约束)
- 后端单测: pytest + FastAPI TestClient + tmp_path 隔离
- 数据隔离: profiles/audit 文件写入 tmp 目录 (monkeypatch)
- 并发闸测试: threading 模拟并发, 计数 gate 实际放行数

---
*测试计划随开发迭代更新; 每迭代完成对应用例后标记完成*
