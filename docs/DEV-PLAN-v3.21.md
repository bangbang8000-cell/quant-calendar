# 量化选股日历 v3.21 开发计划 (PRD)

> 基线: 3.20.0 → 目标: 3.21.0
> 主题: 体验修复 + 效率增强 (基于 DEV-ASSESSMENT-v3.21 评估, 聚焦 P0/P1)

## 1. 版本目标

本版本不做新功能堆砌, 聚焦让现有功能'好用':

1. 统一请求层与错误反馈 — 消除'点了没反应/失败无提示'的体验割裂 (评估 B2/D5)
2. 前端首屏提速 — 按需加载 + 关键路径瘦身 (评估 D1/B1)
3. 策略参数方案化 — 调参可保存/加载/对比 (评估 E1)
4. 高危操作安全化 — 关键操作二次确认 + 操作审计 (评估 C1/C3)
5. 数据源可运维化 — 一键检测 + 全局并发闸 (评估 E2/D3)

## 2. 需求范围与优先级

### 2.1 P0 — 必做 (v3.21 核心)

| ID | 需求 | 验收标准 | 关联评估 |
|---|---|---|---|
| P0-1 | 统一前端请求层 request.js: 封装 fetch, 统一 loading/错误 toast/401 跳转/请求去重/SWR 缓存 | 所有页面 fetch 收敛到 request.js; 网络失败统一 toast; 重复请求只发一次 | B2/D5 |
| P0-2 | 页面组件按需加载: 非首屏页面改动态 import, 首屏只载日历核心 | 首屏 script 数从 63 → <20; 首屏可交互时间明显下降 | D1/B1 |
| P0-3 | 策略参数方案管理: 保存当前参数为方案/加载方案/命名, 服务端持久化 | 可保存≥3 方案; 切换方案参数联动; 重启不丢 | E1 |
| P0-4 | 高危操作确认: 调仓/删自选/清空/覆盖配置/删用户 统一 confirm | 高危操作 100% 有确认; 文案含操作对象名 | C1 |
| P0-5 | 关键操作审计日志: 跑策略/回测/改配置/删数据写入 audit, 系统页可查 | 审计面板展示最近 N 条; 含时间/用户/操作/对象 | C3 |

### 2.2 P1 — 应做 (体验增强)

| ID | 需求 | 验收标准 | 关联评估 |
|---|---|---|---|
| P1-1 | 后端 GZip 压缩: 大响应(面板/评估/异动) gzip | 大 JSON 响应 Content-Encoding: gzip, 体积降>60% | D2 |
| P1-2 | 数据源一键检测: 系统页数据源状态加'测试连接/测速'按钮 | 点击后显示各源连通状态+延迟 | E2 |
| P1-3 | 数据源全局并发闸: scan/回测/评估共享源级 Semaphore | 高并发下 sxsc 不再触发 20 次/秒限流 | D3 |
| P1-4 | 关键参数持久化: 扫描范围/回测日期/资金 localStorage 记忆 | 刷新后上次选择保留 | E4 |

### 2.3 P2 — 打磨 (视进度)

| ID | 需求 | 说明 |
|---|---|---|
| P2-1 | 主题收敛 7→4 (科技蓝/经典白/暗色专业/玫瑰红) | 下线 3 个低质量主题, 补全按钮令牌 |
| P2-2 | JS 硬编码色清理 (~40 处 hex → token) | 映射表统一 |
| P2-3 | ECharts 主题随 UI 主题联动 | 暗色主题深色图表 |
| P2-4 | 通用 Skeleton/Empty 组件覆盖缺失区 | 空态/加载统一 |

## 3. 需求详情

### 3.1 P0-1 统一请求层 request.js

目标: 所有前端 API 调用收敛到一个封装层。

前端文件: frontend/js/request.js (新建)
  request(method, url, {data, params, retry=0, cache=true, showError=true})
  - 统一 header (Authorization, Content-Type)
  - loading 计数器 (全局 top progress)
  - 401 → 跳登录; 403/5xx → 统一 ElMessage
  - 同 URL+params 并发去重 (Promise 共享)
  - GET SWR 缓存 (5s TTL, 可配置)
  - 返回解包 data; 错误抛 RequestError

迁移策略: 新代码一律用 request.js; 旧组件逐步迁移 (P0-2 按需加载时顺带迁移关键页)。

### 3.2 P0-2 页面按需加载

方案: 保持零构建约束 (无 webpack/vite), 用动态 script 注入 + Promise 实现按需:

前端文件: frontend/js/loader.js (新建)
  loadPage(name) → Promise (动态插入 script src=/static/js/components/{name}.js?v=APP_VERSION)
  - 首屏: calendar-page + core + request + themes 同步
  - 其余: 进入页面时按需加载 (loading 骨架)
  - script 加载缓存 (已加载不重复插)

index.html 瘦身: 非核心 script 从 HTML 移除, 改 loader 注入。注意: Vue 组件需注册时机 (确保 script 加载完再挂载当前页)。

### 3.3 P0-3 策略参数方案

后端 (strategy_research.py 新增 3 端点):
  POST /api/strategies/{sid}/profiles   保存方案 {name, params}
  GET  /api/strategies/{sid}/profiles   列出方案
  DELETE /api/strategies/{sid}/profiles/{id}
存储: data/strategy_profiles.json (gitignore)

前端: 研究页参数面板加'保存方案/方案下拉/删除', 选中方案自动填充表单。

### 3.4 P0-4 高危操作确认

统一组件: confirm-action 封装 ElMessageBox.confirm, 含操作对象名参数。
覆盖清单: 组合调仓、清空自选、删除自选、删除用户、清空数据、覆盖数据源配置、恢复备份。

### 3.5 P0-5 操作审计

后端: audit 表 (fact_check 扩展) 或 audit.log 追加写。
  POST /api/audit/log  (前端上报, 或后端拦截关键端点)
  GET  /api/audit/latest?limit=50
字段: {time, user, action, target, detail}

前端: 系统页新增'操作审计'区块展示。

## 4. 非目标 (Non-Goals)

- 不重构为 React/Vite (保持零构建 SPA 约束)
- 不新增策略类型 (4 策略已够, 参数方案化优先)
- 不做多账户/多租户
- 不重做后端 (仅增端点/中间件)

## 5. 风险与对策

| 风险 | 对策 |
|---|---|
| 按需加载破坏组件注册顺序 | loader 用 Promise 串行化 + 注册完成再切页; 测试覆盖首屏/切页 |
| request.js 迁移范围大可能引入回归 | 增量迁移 + 前端一致性测试守护; 旧代码保留 fallback |
| GZip 对已压缩前端资源无收益 | 只对 JSON API 响应开启 (GZipMiddleware min_size) |
| 审计日志写入影响性能 | 异步追加写 + 只记关键操作 (不记高频读) |

---
*开发与测试节奏见下; PRD 评审通过后按 P0→P1→P2 迭代*
