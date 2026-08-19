# v3.22 界面体验优化 — 详细开发计划 (DETAILED)

> 前置: PRD docs/DEV-PLAN-v3.22.md | 版本 3.22.0 | 门禁: ruff(E/F/W ignore E501) + pytest(cov>=40) + 前端一致性(新增class须有CSS/零硬编码色) + Conventional Commits 中文

## I1: 滚动条统一 (P0, 纯CSS)

### 任务拆解
- [ ] T1.1 实测基线: CDP 检测当前滚动(已做: document 852>757 + stock-list 507>500 + sub-nav 386>349), 记录为基线
- [ ] T1.2 layout.css: body height:100vh + overflow:hidden; .main-content height:calc(100vh - header) + overflow-y:auto
- [ ] T1.3 responsive.css: 移动端(<768px) body 保留滚动(无固定header)
- [ ] T1.4 前端一致性测试: 新增/改动 class 必须写 CSS + 零硬编码色
- [ ] T1.5 三端回归: 桌面/平板/移动 各页滚动条数 ≤1 垂直

### 验收
- [ ] CDP 实测: 量化日历/用量统计/研究页 桌面端仅 1 垂直滚动条(在 main-content 最右)
- [ ] 移动端 body 滚动正常

## I2: 用量统计卡片化 (P1, 纯前端)

### 任务拆解
- [ ] T2.1 system-page.js usage 子页重构为 4 卡片网格(资源监控/数据源健康/AI用量/运维状态)
- [ ] T2.2 layout.css 新增卡片类(usage-card-grid/usage-stat-card), 全部 var(--) token
- [ ] T2.3 数据源不变, 聚合展示(资源: CPU/内存/磁盘/运行/延迟/错误率; 数据源: 各源成功率/延迟; AI: 今日/模型Top/峰值; 运维: 护栏/调度/备份)
- [ ] T2.4 无数据优雅降级(-- 占位)

### 验收
- [ ] 用量统计 4 卡片, 无裸露指标, 移动端 1 列

## I3: 策略编写页增强 (P1, 前后端)

### 任务拆解
- [ ] T3.1 后端 strategy_db: 扩展 save_def 支持 type=custom + list 过滤 custom
- [ ] T3.2 后端 POST /api/strategies/custom (保存自定义策略定义)
- [ ] T3.3 后端 POST /api/strategies/{sid}/copy (复制 → 新 sid, 前缀-副本)
- [ ] T3.4 后端 POST /api/strategies/{sid}/ai-optimize (LLM 参数建议, 复用 ai_evaluator._call_llm; 无key降级)
- [ ] T3.5 后端单测: custom 保存/copy 隔离/ai-optimize 建议结构/无key降级
- [ ] T3.6 前端 strategy-write 子页 3 tab(新建/复制微调/AI优化)
- [ ] T3.7 前端: 保存后刷新策略列表; AI 建议可一键应用(写回 param_values)
- [ ] T3.8 前端一致性: 新 class 写 CSS + 零硬编码色

### 验收
- [ ] 新建策略保存后出现在策略列表可运行
- [ ] 复制微调生成"<原名>-副本"独立可调
- [ ] AI 优化返回参数建议, 一键应用生效

## I4: 美林时钟历史周期视图 (P0, 前后端)

### 任务拆解
- [ ] T4.1 后端 GET /api/merrill-clock/timeline (聚合 HISTORICAL_TRANSITIONS → {cycles:[{label, stages:[{stage,from,to,duration,trigger,indicators}]}]}, 取最近4轮)
- [ ] T4.2 后端单测: timeline 结构/4轮/阶段序列/空数据降级
- [ ] T4.3 前端 merrill.js: 新增周期时间轴(横向, 按轮次着色, 阶段标记)
- [ ] T4.4 前端: 每阶段点击 → 详情弹窗(时长/触发/关键指标)
- [ ] T4.5 前端一致性: 新 class 写 CSS + 零硬编码色

### 验收
- [ ] 美林时钟页展示最近 4 轮时间轴, 阶段点击看详情

## I5: 收尾发布

### 任务拆解
- [ ] T5.1 全量测试 + 覆盖率 + ruff + 前端一致性全绿
- [ ] T5.2 版本号 3.21.0 → 3.22.0 (main_new.py)
- [ ] T5.3 ops 同步 + 重启 + HTTP 冒烟(滚动/用量/策略编写/美林)
- [ ] T5.4 pre-push 门禁 + push GitHub

### 验收
- [ ] 全量绿 + 冒烟绿 + GitHub 已 push

## 工程纪律

1. TDD: 先测试后实现, 测试为真(mock 不 mock 被测函数)
2. 前端零构建: 改 index.html/js 后重启后端 + 硬刷新
3. 新 class 必须写 CSS + 零硬编码色(getCSSVar 兜底标注 qc-allow-hardcode)
4. 术语统一: 评估/研究 不回落旧词

