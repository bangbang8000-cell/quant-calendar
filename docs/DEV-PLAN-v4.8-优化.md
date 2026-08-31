# 量化选股日历 V4.8 优化 开发计划（DEV-PLAN）

- **文档版本**：v0.1（草案，待用户审阅批准）
- **日期**：2026-08-25
- **产品基线**：master 287fd36（V4.8.0）
- **状态**：✅ 用户已批准 · R1+R2 已实现（V4.8.0 发布中），R3 待开发（V4.8.1）
- **配套**：PRD-v4.8-优化.md | TEST-PLAN-v4.8-优化.md
- **开发纪律**：沿用 TDD 四步（失败测试→跑通→实现→commit）、每任务 ≤3 文件、前端零构建（改 JS 需 vite build + 重启后端）、版本纪律（tag v* ↔ APP_VERSION）

---

## 1. 任务分解

### V4.8.0：R1 时间轴弹窗 + R2 默认活力金

| # | 任务 | 类型 | 主要文件 | 验证 | 状态 |
|---|------|:--:|----------|------|:--:|
| 1.1 | **STAGE_BRIEFS 数据模型**：backend/merrill_history.py 新增每阶段独有信息（essence/trigger/key_indicators/highlight），覆盖 4 轮主要阶段 + 当前阶段 | 功能 | backend/merrill_history.py | test_merrill_timeline_briefs.py | ⏳ |
| 1.2 | **build_timeline 注入**：每阶段合并 essence/highlight/key_indicators（来源优先级 STAGE_BRIEFS > 转换 essence > 通用描述）；当前阶段 essence 补全 | 功能 | backend/merrill_history.py | 同上 | ⏳ |
| 1.3 | **时间轴点击弹窗组件**：strategies-page.js 新增点击内嵌紧凑详情弹窗（替代 showTimelineStage→showStageDetail 跳转），含头部/时长/essence/trigger/指标/亮点 | 功能 | frontend/js/components/strategies-page.js | 前端冒烟 0 pageerror + 时间轴点击回归 | ⏳ |
| 1.4 | **hover tooltip 增强**：tl-tip 补充 highlight（若存在）；当前阶段 essence 显示 | 功能 | 同上 | 同上 | ⏳ |
| 1.5 | **R2 默认值统一**：user_manager.py / user_config.py / auth.js / themes.js 四处 tech-blue→vibrant-orange | 修复 | 4 文件 | test_default_theme.py | ⏳ |
| 1.6 | **V4.8.0 发布**：APP_VERSION→4.8.0 + 全量测试 + CI + dist 重建 | 发布 | 版本文件 | CI SUCCESS | ⏳ |

### V4.8.1：R3-D1/D2/D5 暗色覆盖审计 + 对比度 + 时间轴适配

| # | 任务 | 类型 | 主要文件 | 验证 | 状态 |
|---|------|:--:|----------|------|:--:|
| 2.1 | **dark-pro 硬编码色值审计**：扫描 themes.css/layout.css 中 dark-pro 段未令牌化色值（脚本化扫描 + 人工复核） | 治理 | frontend/css/*.css | test_tokens_no_hardcode 覆盖新增 | ⏳ |
| 2.2 | **dark-pro 对比度补强**：次级文本/边框/占位符 WCAG AA 达标，扩展 test_contrast 覆盖 | 修复 | themes.css + tests/test_contrast.py | 对比度门禁全绿 | ⏳ |
| 2.3 | **时间轴 dark 适配**：tl-tip/chip/连接线在 dark-pro 下可读性审计与修正 | 修复 | themes.css/layout.css | 双主题冒烟 | ⏳ |
| 2.4 | **V4.8.1 发布** | 发布 | 版本文件 | CI SUCCESS | ⏳ |

### V4.8.2（可选）：R3-D3/D4 层级质感 + 图表适配

| # | 任务 | 类型 | 主要文件 | 验证 | 状态 |
|---|------|:--:|----------|------|:--:|
| 3.1 | **暗色阴影/玻璃层级**：--shadow-md/--glass-* 暗色变体，卡片>页面、弹窗>卡片 | 功能 | themes.css | 双主题截图 | ⏳ |
| 3.2 | **ECharts 暗色联动**：echarts-theme.js 网格线/标签/图例与 dark-pro 令牌联动 | 功能 | echarts-theme.js | 图表双主题截图 | ⏳ |
| 3.3 | **V4.8.2 发布** | 发布 | 版本文件 | CI SUCCESS | ⏳ |

---

## 2. 关键技术点

### R1 时间轴弹窗
- **数据结构**：STAGE_BRIEFS 以 (cycle_label, stage_key) 为键；build_timeline 输出合并（**不新增端点**，API 响应字段扩充）
- **前端**：点击不再调用 showStageDetail；新增内嵌紧凑弹窗（数据从 merrillTimeline.cycles 中当前 st 对象直接取，无需额外请求）
- **边界**：showStageDetail 保留（其他入口），仅时间轴点击改道

### R2 默认活力金
- 仅改**默认值**（未设置才生效），已设置用户不受影响（满足"除非修改后按修改后的来"）
- 唯一权威链收敛到 themes.js applyTheme

### R3 暗色审计
- 脚本化扫描：AST/正则匹配 dark-pro 段硬编码 #hex/rgba
- 对比度：复用 test_contrast.py 的 _contrast/_theme_tokens 工具扩展覆盖面

---

## 3. 工作量与排期

| 版本 | 任务数 | 估时 | 交付物 |
|------|:--:|:--:|--------|
| V4.8.0 | 6 | 2-3 天 | R1 弹窗 + R2 默认主题 |
| V4.8.1 | 4 | 2-3 天 | 暗色审计+对比度+时间轴适配 |
| V4.8.2 | 3 | 2 天 | 层级质感+图表 |

## 4. 风险与回退

- **时间轴回归**：R1 改动影响 V4.0.3-4.0.8 时间轴 → 前端冒烟 + 时间轴专项回归测试（见 TEST-PLAN）
- **主题默认改动**：仅默认值，回退成本低（git revert 单提交）
- **暗色审计范围**：D1 若发现大量硬编码，分批处理（先高可见区域）
