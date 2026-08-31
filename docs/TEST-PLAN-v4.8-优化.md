# 量化选股日历 V4.8 优化 验证计划（TEST-PLAN）

- **文档版本**：v0.1（草案，待用户审阅批准）
- **日期**：2026-08-25
- **产品基线**：master 287fd36（V4.8.0）
- **状态**：✅ 用户已批准 · R1+R2 已实现（V4.8.0 发布中），R3 待开发（V4.8.1）
- **配套**：PRD-v4.8-优化.md | DEV-PLAN-v4.8-优化.md

---

## 1. 测试范围

| 版本 | 覆盖 | 测试类型 |
|------|------|---------|
| V4.8.0 | R1 时间轴弹窗 + R2 默认主题 | 单元 + 集成 + 前端冒烟 |
| V4.8.1 | R3 暗色审计 + 对比度 + 时间轴适配 | 单元（令牌/对比度）+ 双主题冒烟 |
| V4.8.2 | R3 层级 + 图表 | 截图对比 + 冒烟 |

## 2. 单元/集成测试用例

### R1 时间轴弹窗（TC-TL-*）

| # | 用例 | 步骤 | 预期 |
|---|------|------|------|
| TC-TL1 | STAGE_BRIEFS 完整性 | 遍历 4 轮主要阶段 + 当前阶段 | 每阶段有 essence（非空）；历史阶段有 trigger；当前阶段无空白 |
| TC-TL2 | build_timeline 注入 | 调用 build_timeline(transitions, current_stage) | 每阶段含 essence/highlight/key_indicators；来源优先级正确（STAGE_BRIEFS 覆盖转换 essence） |
| TC-TL3 | 数据降级 | 缺失 STAGE_BRIEFS 的阶段 | 回落 HISTORICAL_TRANSITIONS essence → 阶段通用描述，不抛错 |
| TC-TL4 | API 字段透传 | GET /api/market/merrill-clock/timeline | 响应每阶段含 essence/highlight/key_indicators；无新端点 |
| TC-TL5 | 当前阶段补全 | current_stage=recovery + 第4轮 | 当前阶段 essence 非空（第4轮 recovery 补全） |

### R2 默认主题（TC-TM-*）

| # | 用例 | 步骤 | 预期 |
|---|------|------|------|
| TC-TM1 | 后端默认 | user_manager.add_user / user_config 默认 | theme=vibrant-orange |
| TC-TM2 | 登录 fallback | auth.js 源码检查 | applyTheme fallback = vibrant-orange |
| TC-TM3 | 前端启动兜底 | themes.js 源码检查 | 无 saved 时显式 vibrant-orange |
| TC-TM4 | 修改持久化 | 用户改主题 PUT → 重登 | 保持修改后主题（登录用户后端、游客 localStorage） |
| TC-TM5 | 已设用户不受影响 | 用户已设 tech-blue | 刷新/重登仍 tech-blue（仅默认值变更） |

### R3 暗色主题（TC-TD-*）

| # | 用例 | 步骤 | 预期 |
|---|------|------|------|
| TC-TD1 | dark-pro 硬编码扫描 | 脚本扫描 dark-pro 段 #hex/rgba | 新增区域无硬编码（令牌纪律） |
| TC-TD2 | 对比度扩展 | test_contrast 扩展次级文本/边框/占位符 | dark-pro WCAG AA（4.5/3.0） |
| TC-TD3 | 时间轴 dark 适配 | dark-pro 下渲染时间轴 | tl-tip/chip/连接线可读（对比度达标） |
| TC-TD4 | 亮色无回归 | classic-white 对比度门禁 | 全绿 |

## 3. 前端冒烟与回归

- **V4.8.0**：登录 → 策略总览 → 美林时钟时间轴 → 点击各历史阶段 chip → 断言弹窗显示该阶段独有信息（essence/trigger/指标/亮点），**不出现大而全阶段分析**；hover tooltip 一致；0 pageerror
- **V4.8.0**：主题默认（清 localStorage → 活力金）、修改持久化（改暗色专业 → 刷新保持）、游客主题
- **V4.8.1**：dark-pro 双主题冒烟（时间轴/弹窗/图表）0 pageerror

## 4. 门禁与发布

- 全量 pytest（tests/ -m "not e2e"）+ ruff + 覆盖率门禁（核心模块 ≥70%）
- 前端冒烟 0 pageerror（双主题）
- 版本纪律：tag v4.8.0 ↔ APP_VERSION 4.8.0
- CI：lint-and-test + e2e-visual 双 job SUCCESS

## 5. 回归重点（V4.0.3-4.0.8 时间轴既有功能）

| 功能 | 回归断言 |
|------|---------|
| 时间轴布局（chip/连接线/甘特条/蛇形折行） | 渲染正常，无错位 |
| hover tooltip（V4.0.6/4.0.8） | 精简内容不变（除新增 highlight） |
| 完整阶段详情弹窗（showStageDetail） | 其他入口仍可用（未删除） |
| 当前阶段实时指标 tooltip | 不变 |
