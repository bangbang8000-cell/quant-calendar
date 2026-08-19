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
| P0-6 | **策略纳管中心**: 4 策略统一面板(启用/停用/状态/最近运行/持仓文件/定时开关), 策略从研究页升级为程序管理的运行单元 | 4 策略可启用停用; 状态/持仓可视化; 与注册表/run/回测打通 | 补充需求 |
| P0-7 | **策略发布(去 token)**: 发布包生成(策略代码+模板+README, 排除 data/.env/datasource_config); 密钥安全审计; 部署向导(首次启动检测无 key 引导配置) | 发布包不含任何 token; git 审计 0 token; 部署后向导配置 key 可用 | 补充需求 |
| P0-8 | **策略定期运行 + 持仓文件**: 调度器新增 strategy_run_task 定时跑启用策略 → 生成持仓文件(data/holdings/{date}/{sid}.csv) + 系统页展示 | 每日定时生成持仓文件; 含权重/日期/生成时间; 面板可查可下载 | 补充需求 |

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

### 3.6 P0-6 策略纳管中心 (评审定稿: 纳管为主, 放研究页, 不可删可复制)

目标: 让 4 个策略成为程序可直接'接管'的运行单元, **研究页为纳管主场**。

新增后端模块 strategy_governance.py:
  - 纳管状态存储: data/strategy_governance.json (gitignore)
    { sid: { enabled: bool, schedule: '20:00'|null, last_run: str, last_holdings: str } }
  - 端点: GET/PUT /api/strategies/governance (状态) | POST /api/strategies/{sid}/run-once (立即运行)
  - run-once: 复用现有 run_strategy 流程, 额外生成持仓文件并记录 last_run

前端研究页 (评审决定):
  - 4 内置策略: **默认纳管(不可删除)**, 卡片含 启用开关/定时时间/运行状态/最近运行/持仓文件链接
  - 提供'复制为副本' → 副本可自由调参/删除/导出 (原策略只读纳管)
  - 纳管状态与副本均持久化 (strategy_governance.json + profiles)

### 3.7 P0-7 策略发布(去 token) + 部署导入 key (评审定稿: 直接 push GitHub, 不含运行数据)

目标: 程序可安全发布到 GitHub(含策略与模板), **绝不含运行过程产生的数据文件与 token**; 部署方通过配置导入自己的 key。

发布方式 (评审决定): **直接 push GitHub master** (bangbang8000-cell/quant-calendar), 不是 zip 包。
  - 发布前密钥安全门禁 (pre-push-hook.sh): 扫描待提交文件, 断言:
    - 无 token 模式 (46a2.../ab2e.../token=xxx / sxsc token)
    - 不含 data/ .env datasource_config.json *.db *.log (已在 .gitignore, 双保险)
    - 不含 data/qresult/ (运行态持仓) data/holdings/
  - 已确认: data/ .env 均已 gitignore; git 已跟踪文件 0 token
  - 历史持仓(预览用): 提交一份样例/脱敏历史持仓到仓库 (docs/reference_holdings/), 供无 key 部署方预览程序功能

tushare pro 支撑度评估 (评审结论, 写入 DEPLOYMENT.md):
  - daily / daily_basic / moneyflow / index_daily 四接口标准版 pro 实测可用 (当前 token 验证通过)
  - 四大策略所需字段 (close/pe/pb/moneyflow/volume) 全可由 tushare pro 提供
  - 注意: moneyflow 属积分接口, 免费/低积分 token 可能无权访问 → 程序自动降级 (该因子为空, 回退量能), 文档注明
  - 每日调用量受积分/频率限制 → 持仓生成默认全池约 3 分钟(并发), 建议交易日收盘后(默认 20:00)执行

部署向导 (setup-wizard 扩展, 已有组件):
  - 首次启动检测 data/datasource_config.json 无 token → 弹向导: ① 填 tushare token ② 填 sxsc token ③ 测试连接 ④ 完成
  - 无 key 预览模式: 未配 key 时可用内置历史持仓样例预览程序功能(策略列表/持仓查看), 数据实时功能提示需配置 key
  - 文档 DEPLOYMENT.md 增加'密钥配置'与'tushare pro 支持度'章节

### 3.8 P0-8 策略定期运行 + 持仓文件 (评审定稿: 默认 20:00, 可自定义; 与 qresult 等价)

目标: 程序定时运行启用策略, 生成与既有 qresult 持仓等价的持仓文件(程序自接管, 替代外部生成)。

调度器 scheduler.py 新增 strategy_run_task:
  - 每日收盘后执行一次, 默认 20:00, 可自定义(strategy_governance.json 每策略 schedule 可配)
  - 对 enabled 策略: asyncio.to_thread(run_strategy) → 生成持仓文件
  - 文件与 qresult 等价: data/holdings/{YYYY-MM-DD}/{sid}.csv
    - 格式: 矩阵(行=信号日期, 列=股票代码, 值=权重) — 与 qresult 同构
    - 或: 明细列 symbol/weight/close/signal_date (二选一, 与 qresult 对齐后定)
  - 持仓文件: data/holdings/{YYYY-MM-DD}/{sid}.csv
    列: symbol, weight, close, signal_date (T 日收盘信号, T+1 生效, 防前视)
  - 记录 _record_task_run('strategy_run', ok, detail) → 系统页 scheduler_tasks 可见

前端系统页: 纳管面板展示今日持仓文件(可下载), 调度任务状态。

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
