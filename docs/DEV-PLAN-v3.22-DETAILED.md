# v3.22 界面体验优化 — 详细开发计划 (DETAILED) — 评审调整 v2

> 前置: PRD docs/DEV-PLAN-v3.22.md | 版本 3.22.0 | 门禁: ruff(E/F/W ignore E501) + pytest(cov>=40) + 前端一致性(新增class须有CSS/零硬编码色) + Conventional Commits 中文

## I1: 滚动条统一 (P0, 纯CSS)

### 任务拆解
- [ ] T1.1 实测基线: CDP 检测当前滚动(已做: document 852>757 + stock-list 507>500 + sub-nav 386>349)
- [ ] T1.2 layout.css: body height:100vh + overflow:hidden; .main-content height:calc(100vh-header) + overflow-y:auto
- [ ] T1.3 responsive.css: 移动端(<768px) body 保留滚动
- [ ] T1.4 前端一致性测试: 新增/改动 class 写 CSS + 零硬编码色
- [ ] T1.5 三端回归: 桌面/平板/移动 各页滚动条数 <=1 垂直

### 验收
- [ ] CDP 实测: 量化日历/用量统计/研究页 桌面仅 1 垂直滚动条(内容区最右)

## I2: 用量统计卡片化 (P1, 纯前端)

### 任务拆解
- [ ] T2.1 system-page.js usage 子页重构为 4 卡片网格(资源监控/数据源健康/AI用量/运维状态)
- [ ] T2.2 layout.css 新增卡片类(usage-card-grid/usage-stat-card), 全 var(--) token
- [ ] T2.3 聚合展示(资源: CPU/内存/磁盘/运行/延迟/错误率; 数据源: 各源成功率/延迟; AI: 今日/模型Top/峰值; 运维: 护栏/调度/备份)
- [ ] T2.4 无数据优雅降级(-- 占位)

### 验收
- [ ] 用量统计 4 卡片, 无裸露指标, 移动端 1 列

## I3: 策略编写页增强 — PTrade 代码策略 + AI 代写迭代 (P1, 前后端) [评审调整]

### 后端任务
- [ ] T3.1 strategy_db: strategy_defs 加 code 列(TEXT), save_def/list_defs 支持 code
- [ ] T3.2 backtest_engine: 识别 custom 策略(strategy_defs 加载 code → PTrade 兼容执行层 → 生成持仓矩阵); STRATEGY_CONFIG 校验扩展
- [ ] T3.3 PTrade 兼容执行层: 解析自定义代码的 initialize/handle_data + get_history/order 等 API → 逐日执行 → 持仓(复用 ptrade.py _ALLOWED_APIS 静态校验 + 新执行引擎)
- [ ] T3.4 POST /api/strategies/custom (AI 代写: prompt → LLM 生成代码 → _ALLOWED_APIS 校验 → 保存 code)
- [ ] T3.5 POST /api/strategies/{sid}/copy (复制内置/自定义 → 新 sid)
- [ ] T3.6 POST /api/strategies/{sid}/ai-optimize (LLM 分析代码+回测 → 改进代码建议; 无key降级)
- [ ] T3.7 后端单测: code 存取/custom 保存校验/copy 隔离/ai-optimize 结构/PTrade 执行层回测/无key降级

### 前端任务
- [ ] T3.8 strategy-write 子页 3 tab(AI 新建/复制微调/AI 优化)
- [ ] T3.9 AI 新建: 思路输入 → 调 /custom → 展示生成代码(语法高亮) → 保存
- [ ] T3.10 复制微调: 选策略 → 复制 → 代码/参数编辑 → 保存副本
- [ ] T3.11 AI 优化: 选自定义 → 调 /ai-optimize → 展示建议(差异高亮) → 确认覆盖/另存 → 一键回测 → 多轮迭代
- [ ] T3.12 一键导出 PTrade 代码(复用现有导出) + 一键回测
- [ ] T3.13 前端一致性: 新 class 写 CSS + 零硬编码色

### 验收
- [ ] AI 代写: 输入思路 → PTrade 代码生成 → 校验通过 → 保存 → 系统回测 → 导出可用
- [ ] 复制微调/AI 优化迭代多轮收敛
- [ ] 自定义策略出现在策略列表可纳管/运行

## I4: 美林时钟历史周期视图 (P0, 前后端)

### 任务拆解
- [ ] T4.1 后端 GET /api/merrill-clock/timeline (聚合 HISTORICAL_TRANSITIONS → {cycles:[{label,stages:[...]}], 最近4轮)
- [ ] T4.2 后端单测: timeline 结构/4轮/阶段序列/空降级
- [ ] T4.3 前端 merrill.js: 周期时间轴(横向, 按轮次着色, 阶段标记)
- [ ] T4.4 前端: 每阶段点击 → 详情弹窗(时长/触发/关键指标)
- [ ] T4.5 前端一致性: 新 class 写 CSS + 零硬编码色

### 验收
- [ ] 美林时钟页展示最近 4 轮时间轴, 阶段点击看详情

## I5: 收尾发布

### 任务拆解
- [ ] T5.1 全量测试 + 覆盖率 + ruff + 前端一致性全绿
- [ ] T5.2 版本号 3.21.0 → 3.22.0 (main_new.py)
- [ ] T5.3 ops 同步 + 重启 + HTTP 冒烟(滚动/用量/策略编写/AI代写/美林)
- [ ] T5.4 pre-push 门禁 + push GitHub

### 验收
- [ ] 全量绿 + 冒烟绿 + GitHub 已 push

## 工程纪律

1. TDD: 先测试后实现, 测试为真(mock 不 mock 被测函数)
2. 前端零构建: 改 index.html/js 后重启后端 + 硬刷新
3. 新 class 必须写 CSS + 零硬编码色(getCSSVar 兜底标注 qc-allow-hardcode)
4. 术语统一: 评估/研究 不回落旧词
