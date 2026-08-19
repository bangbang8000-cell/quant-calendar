# v3.22 界面体验优化 — 详细开发计划 (DETAILED) — 评审调整 v3

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

## I3: 策略创作两层模型 (P1, 前后端) — 评审调整 v3

### 3.0 通用基础
- [ ] T3.0.1 strategy_db: strategy_defs 加 code 列(TEXT) + type 支持 variant/custom
- [ ] T3.0.2 策略副本库: 复制内置策略 → strategy_defs type=variant(存母本+参数)
- [ ] T3.0.3 后端单测: code 存取/variant 复制/参数隔离

### 3.1 路径 A — 基于现有策略微调 (信号层 + AI 交易层)
- [ ] T3A.1 POST /api/strategies/{sid}/copy-variant (复制母本 → 新 variant sid)
- [ ] T3A.2 参数配置界面: 复用 schema 表单, 支持 variant 策略编辑参数
- [ ] T3A.3 生成新持仓矩阵: 复用 run-once, variant 用自身参数生成独立矩阵文件
- [ ] T3A.4 POST /api/strategies/{sid}/ai-trade-code: 输入持仓矩阵(抽样优选topN) → LLM 生成 PTrade 交易代码(get_history+order_target按矩阵调仓) + 风控(止损/止盈/最大回撤/仓位) → _ALLOWED_APIS 校验 → 返回代码
- [ ] T3A.5 后端单测: copy-variant/ai-trade-code 代码结构/风控片段/无key降级
- [ ] T3A.6 前端: 微调流程向导(复制 → 改参数 → 生成持仓 → AI交易码 → 导出/回测)

### 3.2 路径 B — 全新策略 (PTrade 兼容 + AI 代写)
- [ ] T3B.1 POST /api/strategies/custom (AI 代写: prompt → LLM 生成完整代码 → 校验 → 存 code)
- [ ] T3B.2 POST /api/strategies/{sid}/ai-optimize (LLM 分析代码+回测 → 改进代码建议; 无key降级)
- [ ] T3B.3 **PTrade 兼容回测执行层**: 解析自定义代码(initialize/handle_data/get_history/order_target) → 逐日执行 → 持仓矩阵; 不支持的 API 明确报错
- [ ] T3B.4 backtest_engine 识别 custom 策略(STRATEGY_CONFIG 扩展)
- [ ] T3B.5 后端单测: custom 保存/校验(非_ALLOWED_APIS拒绝)/ai-optimize/执行层回测/无key降级
- [ ] T3B.6 前端: 3 tab(AI 新建/复制微调/AI 优化) + 代码编辑区(语法高亮/校验提示)
- [ ] T3B.7 前端: 一键回测 + 一键导出 PTrade(复用现有导出) + AI 优化差异高亮 + 确认应用

### 验收
- [ ] 路径A: 复制 → 改参数 → 新持仓矩阵 → AI 交易码(含风控) → 导出 PTrade 可用
- [ ] 路径B: 描述思路 → AI 代写完整代码 → 本地回测 + 导出 PTrade 回测 → AI 迭代多轮

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
- [ ] T5.3 ops 同步 + 重启 + HTTP 冒烟(滚动/用量/策略创作路径A+B/美林)
- [ ] T5.4 pre-push 门禁 + push GitHub

### 验收
- [ ] 全量绿 + 冒烟绿 + GitHub 已 push

## 工程纪律

1. TDD: 先测试后实现, 测试为真(mock 不 mock 被测函数)
2. 前端零构建: 改 index.html/js 后重启后端 + 硬刷新
3. 新 class 必须写 CSS + 零硬编码色(getCSSVar 兜底标注 qc-allow-hardcode)
4. 术语统一: 评估/研究 不回落旧词
