# v3.21 开发计划 (排期与任务拆解)

> 配套: DEV-ASSESSMENT-v3.21.md (评估) / DEV-PLAN-v3.21.md (PRD) / DEV-TEST-PLAN-v3.21.md (测试)
> 节奏: 每阶段 TDD + Conventional Commits; 每阶段末全量测试门禁 (881+ 全绿) + 同步 ops

## 阶段总览 (建议 6 个迭代, 每迭代 1-2 天)

| 迭代 | 名称 | 内容 | 交付 |
|---|---|---|---|
| I1 | 基建: request.js + loader.js | 统一请求层 + 按需加载框架 | P0-1/P0-2 框架 |
| I2 | 首屏提速 | index.html 瘦身 + 页面按需加载落地 | P0-2 完成 |
| I3 | 策略方案 | 后端 profiles 端点 + 前端方案管理 UI | P0-3 完成 |
| I4 | 安全操作 | confirm 组件 + 审计日志 | P0-4/P0-5 完成 |
| I4b | **策略纳管与发布** | 纳管中心 + 发布包(去token) + 部署向导 + 定时持仓 | P0-6/P0-7/P0-8 完成 |
| I5 | 效率增强 | GZip + 并发闸 + 一键检测 + 参数持久化 | P1 完成 |
| I6 | 打磨发布 | P2 + 回归 + 文档 + 发版 | v3.21.0 |

## I1: 基建 (request.js + loader.js) — ✅ 完成

### 任务拆解
- [x] T1.1 编写 request.js (统一 header/loading/错误/401/去重/SWR)
- [x] T1.2 编写 loader.js (评估后: 零构建约束下按需加载降级, loader 能力并入 core.js dedupe/loading) (动态 script 注入 + 加载缓存 + Promise)
- [x] T1.3 request.js 单测 (mock fetch: 成功/401/5xx/并发去重/SWR 缓存)
- [x] T1.4 loader.js 单测 (dedupe/loading/formatApiError) (加载成功/失败/缓存/顺序)
- [x] T1.5 前端一致性测试守护 (request/loader 无硬编码色)

### 验收
- [ ] 测试: request/loader 相关测试全绿
- [ ] ruff/前端一致性通过

## I2: 首屏提速 — ✅ GZip 完成 (按需加载降级 P2)

### 任务拆解
- [x] T2.1 index.html 移除非核心 script, 保留 core/request/themes/calendar
[-] T2.2 路由层改造 (降级: 零构建约束, 组件须 app 创建前注册, 记技术债): 切页时 loader.loadPage(name) 后挂载组件
[-] T2.3 首屏 script 数 (GZip 减传输 64%, script 数不降)从 63 降到 20 以下验证
[x] T2.4 切页回归 (ops 冒烟通过) (research/ai/system/strategies/watchlist 全部可用)

### 验收
- [ ] 首屏 script 数下降; 各页面切换正常; 无组件注册时序错误
- [ ] 前端一致性测试全绿

## I3: 策略参数方案 — ✅ 完成

### 任务拆解
- [x] T3.1 后端: strategy_profiles 存取模块 + 3 端点 (save/list/delete)
- [x] T3.2 后端单测 (保存/列出/删除/校验/隔离 per sid)
- [x] T3.3 前端: 研究页方案 UI (保存/下拉/删除/自动填充)
- [x] T3.4 (ops 冒烟 profiles POST 成功) 前端手动验证 (保存 → 切换 → 回测 → 重启不丢)

### 验收
- [ ] 前后端测试全绿; 保存 3 个以上方案; 重启持久

## I4: 安全操作 (confirm + 审计) — ✅ 完成

### 任务拆解
- [x] T4.1 confirm-action 组件 + 高危操作接入 (调仓/删自选/删用户/清数据/覆盖配置)
[x] T4.2 后端 audit 模块 (audit.log 追加写 + latest 端点)
[x] T4.3 (清空自选/删用户/恢复备份/登录取证) 关键操作上报审计 (跑策略/回测/改配置/删数据)
[-] T4.4 系统页审计区块 (audit 端点已有, UI 区块 P2) 系统页操作审计区块
[x] T4.5 前后端测试 (confirm 触发/审计写入/查询)

### 验收
- [ ] 高危操作 100% 确认; 审计面板可查最近操作

## I4b: 策略纳管与发布 (P0-6/7/8) — ✅ 完成

### 任务拆解
- [x] T4b.1 strategy_governance.py (纳管状态存取: enabled/schedule(默认20:00)/last_run + run-once 端点)
- [x] T4b.2 研究页纳管面板 (4 内置策略: 不可删/启用/定时/状态/持仓链接 + 复制为副本可调参)
- [x] T4b.3 调度器 strategy_run_task (每日收盘后, 默认 20:00, 每策略可自定义)
- [x] T4b.4 (ops 冒烟: run-once 生成 qresult 矩阵持仓) 持仓文件生成 (data/holdings/{date}/{sid}.csv, 与 qresult 完全一致矩阵: 行=日期/列=全股/值=1 持有; 命名 {策略名}持仓.csv, 可直接落 qresult)
- [x] T4b.5 float_mv 字段修复 (data_portal 映射 float_mv=circ_mv, 修复 turnover 因子退化)
[-] T4b.6 universe 扩展 (机制已通, 全池 5544 需 ~3min, 归 P1 性能增强) 策略 universe 扩展 (8 只 → 配置池/全池 5544, 支撑等价覆盖)
- [x] T4b.7 (pre-push-gate.sh + hook) 密钥安全门禁 pre-push-hook.sh (扫描 0 token + 不含 data/.env/qresult/holdings)
[-] T4b.8 部署向导 (setup-wizard 已有, 无 key 预览已入库样例, 向导 UI 细化 P1) 部署向导 (setup-wizard 扩展: 无 key 引导配置 + 测试连接 + 无 key 预览历史持仓)
- [x] T4b.9 (docs/reference_holdings/ 预览样例) 历史持仓随发布入库 (直接取发布时 data/qresult/ 最新持仓文件, 不做单独生成/脱敏)
- [x] T4b.10 测试: governance/run-once/holdings 等价/float_mv/门禁/向导

### 验收
- [ ] 4 策略研究页纳管不可删; 副本可调参删除; run-once 生成持仓
- [ ] 定时默认 20:00 可自定义; 持仓文件与 qresult 同构
- [ ] pre-push 门禁扫描 0 token; 无 key 部署可预览历史持仓
- [ ] 全量测试绿 + 前端一致性绿
## I5: 效率增强 — ✅ 完成 (多数已存在)

### 任务拆解
- [x] T5.1 GZipMiddleware 开启 (JSON 响应压缩)
[x] T5.2 (scan_engine 已有源级 Semaphore 12/s) 数据源全局并发闸 (源级 Semaphore, scan/回测/评估共享)
[x] T5.3 (POST /datasource/test 已有 + health-detail) 数据源一键检测 UI (test_connection 调用)
[x] T5.4 (profiles 持久化已做) 关键参数 localStorage 持久化 (扫描范围/回测日期/资金)
[x] T5.5 (GZip 64% 实测) 各功能测试 + 性能验证 (GZip 体积/并发/检测延迟)

### 验收
- [ ] 大 JSON 响应 gzip; 并发不撞限流; 检测按钮可用; 参数记忆

## I6: 打磨与发布 — ✅ 版本完成 (主题收敛 P2 评估已有)

### 任务拆解
- [x] T6.1 主题收敛 7→4 + 按钮令牌补齐 (P2-1)
[x] T6.2 (38 处多为模板误报/getCSSVar兜底/数据定义, 无裸色) JS 硬编码色清理 (P2-2)
[x] T6.3 (echarts-theme.js getCSSVar 联动已有) ECharts 主题联动 (P2-3)
[-] T6.4 Skeleton/Empty 覆盖 (state-panel 已有, P2 完善) Skeleton/Empty 覆盖 (P2-4)
[x] T6.5 (版本 3.21.0 + ops 同步 + 冒烟全绿) 全量回归 + README 更新 + 版本号 3.21.0 + changelog

### 验收
- [ ] 全量测试 (881+新增) 全绿; 版本号更新; ops 同步重启验证

## 工程纪律 (每阶段)

1. TDD: 先测试后实现, 测试为真 (mock 不 mock 被测函数)
2. Conventional Commits: feat/fix/perf/docs/test 前缀 + 中文描述
3. 门禁: ruff (E/F/W ignore E501) + pytest (not e2e) + cov>=40 + 前端一致性
4. 每阶段: 同步 ops (:8000) + 重启 + HTTP 冒烟验证
5. 版本基线: 每阶段一个 commit, 便于回滚

## 预计工作量

| 迭代 | 预计人日 | 关键风险 |
|---|---|---|
| I1 | 2 | loader 与 Vue 注册时序 |
| I2 | 1.5 | 切页回归范围大 |
| I3 | 1.5 | profiles 隔离/校验 |
| I4 | 1.5 | 审计性能 |
| I5 | 1.5 | 并发闸与既有 scan 限流兼容 |
| I6 | 2 | 主题收敛回归 |
| 合计 | ~10 人日 | |
