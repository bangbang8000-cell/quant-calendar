# 量化选股日历 v3.X 开发计划 (DEV-PLAN)

> **文档版本**: v1.0 | **日期**: 2026-08-07 | **基线**: v3.1.0
> **配套文档**: 需求 → `PRD-v3.X.X.md` | 测试 → `TEST-PLAN-v3.X.X.md` | 路线图 → `ROADMAP-v3.X.X.md`
> **更新规则**: 每个任务完成后更新状态列; 需求变更必须三文档同步

---

## 1. 文档控制

| 版本 | 日期 | 变更人 | 说明 |
|------|------|--------|------|
| v1.0 | 2026-08-07 | Hermes | 基于 PRD v1.0 创建 |
| v1.1 | 2026-08-07 | Hermes | 八维评估修正: 任务 3.2-T21/22, 3.3-T11/12, 3.4-T7, REL-10, staging→dev 仓库 |
| v1.2 | 2026-08-07 | Hermes | 4-5星对齐: 任务 3.2-T23/24, 3.3-T13, 3.4-T8/9, 3.5-T7/8, 3.6-T10/11/12, 3.8-T5, 3.9-T5/6 |

---

## 2. 开发环境与工作流 (铁律)

| 项 | 规定 |
|----|------|
| 开发目录 | `quant-calendar-ops/` (含 .env 密钥, 不做 git 操作) |
| Git 目录 | `quant-calendar-github/` (staging, 所有 commit/push 在此) |
| 同步方式 | 开发后 rsync ops → github staging |
| 版本发布 | staging commit + tag + `gh release create` + tar.gz |
| 每任务验证 | 改动 ≤ 50 行/次, 前端改后 SPA 完整性 + 浏览器冒烟 |
| 数据保护 | 操作 data/ 前 `cp -r data/ data.backup/` |

---

## 3. 版本排期总览

| 版本 | 主题 | 预估工作量 | 依赖 | 状态 |
|------|------|-----------|------|------|
| v3.2.0 | UI 全面升级 | 4 阶段 × 3-5 天 | 规划稿已就绪 | ⏳ 未开始 |
| v3.3.0 | 数据可靠层 | 2-3 周 | 无 | ⏳ 未开始 |
| v3.4.0 | 可观测性 | 1-2 周 | v3.3.0 (SQLite) | ⏳ 未开始 |
| v3.5.0 | AI 深化 | 2-3 周 | v3.4.0 (告警通道) | ⏳ 未开始 |
| v3.6.0 | 前端组件化 | 3-4 周 (渐进) | 无 (独立) | ⏳ 未开始 |
| v3.7.0 | 通知矩阵 | 1-2 周 | v3.3.0 + v3.4.0 | ⏳ 未开始 |
| v3.8.0 | 移动端 & PWA | 1-2 周 | v3.2.0 (TabBar) | ⏳ 未开始 |
| v3.9.0 | 开放平台 | 1-2 周 | 无 | ⏳ 未开始 |

**建议执行顺序**: 3.2.0 → 3.3.0 → 3.4.0 → 3.5.0 → 3.6.0 → 3.7.0 → 3.8.0 → 3.9.0
**并行约束**: 同一时间只开发一个版本 (RULE-1), 但 3.6.0 与 3.4.0 可串行穿插。

---

## 4. v3.2.0 — UI 全面升级

> 对应 PRD §4.1, 详细规划稿: `docs/prompts/ui-overhaul-v3.2.0.md`

### 4.1 任务分解

| # | 任务 | 对应 PRD | 文件 | 估时 | 验证方式 | 状态 |
|---|------|---------|------|------|----------|------|
| 3.2-T1 | 侧边栏 SVG 图标迁移 | FR-3.2.1 | index.html | 3h | 7 主题截图对比✅ |
| 3.2-T2 | 面包屑导航 | FR-3.2.2 | index.html, layout.css | 2h | 三档宽度检查✅ |
| 3.2-T3 | 移动端底部 TabBar | FR-3.2.3 | index.html, responsive.css | 4h | 375px 无横向滚动✅ |
| 3.2-T4 | 最近访问快捷入口 | FR-3.2.4 | index.html | 2h | (已移除: 5导航项下冗余) | ➖ |
| 3.2-T5 | 页面切换过渡 | FR-3.2.5 | index.html, animations.css | 1h | 视觉检查✅ |
| 3.2-T6 | 统一 .card 卡片容器 | FR-3.2.6 | tokens.css, index.html | 3h | grep class="card" ≥ 6✅ |
| 3.2-T7 | 信息层级三件套 | FR-3.2.7 | tokens.css, index.html | 3h | 视觉检查✅ |
| 3.2-T8 | 间距规范化 | FR-3.2.8 | tokens.css | 2h | grep 硬编码字号 = 0✅ |
| 3.2-T9 | 空状态统一 | FR-3.2.9 | index.html | 2h | 全列表检查✅ |
| 3.2-T10 | 涨跌配色语义化 | FR-3.2.10 | tokens.css | 2h | 7 主题对比度✅ |
| 3.2-T11 | 全局快捷键 | FR-3.2.11 | index.html | 4h | 键盘实测✅ |
| 3.2-T12 | 拼音首字母搜索 | FR-3.2.12 | index.html, stock_info | 4h | zgsh→中国神华✅ |
| 3.2-T13 | 浮动 AI 按钮 | FR-3.2.13 | index.html, layout.css | 2h | 7 主题检查✅ |
| 3.2-T14 | 骨架屏 | FR-3.2.14 | index.html, tokens.css | 4h | Slow 3G 无白屏✅ |
| 3.2-T15 | 危险操作确认 | FR-3.2.15 | index.html | 2h | 倒计时实测✅ |
| 3.2-T16 | ECharts 主题联动 | FR-3.2.16 | js/echarts-theme.js | 4h | 切主题图表变色✅ |
| 3.2-T17 | 图表文件提取 | FR-3.2.17 | js/charts/*.js | 4h | 功能对比✅ |
| 3.2-T18 | 表格排序 + 冻结列 | FR-3.2.18 | index.html, layout.css | 3h | 3 态循环 + 375px✅ |
| 3.2-T19 | 美林时钟 SVG | FR-3.2.19 | index.html, merrill.js | 4h | 三档宽度✅ |
| 3.2-T20 | CSV 导出 | FR-3.2.20 | index.html | 2h | Excel 打开✅ |
| 3.2-T21 | 回测前端 UI (S2) | FR-3.2.21 | index.html + charts.js | 6h | 回测流程冒烟 (SM-15)✅ |
| 3.2-T22 | 首次引导教程 (S5) | FR-3.2.22 | index.html | 3h | 3 步可跳过✅ |
| 3.2-T23 | 设计系统文档 | FR-3.2.23 | docs/DESIGN-SYSTEM.md | 4h | 与 tokens.css 核对一致✅ |
| 3.2-T24 | 用户反馈渠道 | FR-3.2.24 | api/v1/feedback.py + index.html | 3h | 反馈写入 data/feedback.json✅ |

### 4.2 阶段门禁

每个阶段完成后:
1. SPA 完整性检查 (template=0, div≈-10, dual=0)
2. 三档宽度 (375/768/1440) 验证
3. 浏览器冒烟: 登录 → 策略总览 → 日历
4. staging commit (每阶段 1 次, 可回滚)

### 4.3 发布门禁 (v3.2.0)

- [ ] 全部 20 任务完成
- [ ] 52 存量测试全过
- [ ] 7 主题对比度 ≥ 4.5:1 (抽查 3 个关键主题)
- [ ] SPA 完整性检查通过
- [ ] 版本号 bump (main_new.py 3 处 + frontend 徽章)
- [ ] README/DEPLOYMENT 更新
- [ ] staging 提交 + tag + release + tar.gz

---

## 5. v3.3.0 — 数据可靠层

> 对应 PRD §4.2

| # | 任务 | 对应 PRD | 文件 | 估时 | 验证方式 | 状态 |
|---|------|---------|------|------|----------|------|
| 3.3-T1 | SQLite 接入层 (db.py) | FR-3.3.1 | backend/db.py 新建 | 6h | 单测 | ✅ |
| 3.3-T2 | users 迁移 | FR-3.3.1 | user_manager.py | 4h | 全量单测 | ✅ |
| 3.3-T3 | chat_history 迁移 | FR-3.3.1 | chat.py | 3h | 全量单测 | ✅ |
| 3.3-T4 | watchlist 迁移 | FR-3.3.1 | watchlist.py | 3h | 全量单测 | ✅ |
| 3.3-T5 | groups 迁移 | FR-3.3.1 | group_manager.py | 3h | 全量单测 | ✅ |
| 3.3-T6 | 迁移脚本 (JSON→SQLite, dry-run) | FR-3.3.1 | scripts/migrate.py | 4h | dry-run 演练 | ✅ |
| 3.3-T7 | 每日自动备份 | FR-3.3.2 | scheduler.py | 3h | 备份文件生成 | ✅ |
| 3.3-T8 | 一键恢复 (前端+后端) | FR-3.3.3 | api/v1/backup.py + index.html | 5h | 恢复演练 | ✅ |
| 3.3-T9 | 启动 schema 校验 | FR-3.3.4 | db.py | 2h | 损坏文件测试 | ✅ |
| 3.3-T10 | qresult 自动导入 | FR-3.3.5 | data_parser.py | 3h | CSV 变化测试 | ✅ |
| 3.3-T11 | 数据管线自动化 (S1) | FR-3.3.6 | data_pipeline.py 新建 | 8h | tushare 拉取→CSV 生成 | ✅ |
| 3.3-T12 | 数据导出/导入 (S4) | FR-3.3.7 | api/v1/export.py + index.html | 5h | 导出→导入一致 | ✅ |
| 3.3-T13 | 统一错误码体系 | FR-3.3.8 | api/v1/errors.py + 各路由 | 6h | 全部错误响应统一结构 | ✅ |

### 5.1 发布门禁 (v3.3.0)

- [ ] 迁移 dry-run 通过 + 生产数据双写对比
- [ ] kill -9 后数据一致性验证 (TC-3.3.3)
- [ ] 恢复演练 ≤ 15 分钟
- [ ] 52 存量 + 新增测试全过 (目标 +15 用例)
- [ ] 版本号 bump + 文档更新 + release

---

## 6. v3.4.0 — 可观测性

> 对应 PRD §4.3

| # | 任务 | 对应 PRD | 文件 | 估时 | 验证方式 | 状态 |
|---|------|---------|------|------|----------|------|
| 3.4-T1 | 审计日志模块 | FR-3.4.1 | backend/audit_log.py | 4h | 单测 | ✅ |
| 3.4-T2 | 审计可视化 (系统页) | FR-3.4.1 | api/v1/audit.py + index.html | 4h | 冒烟 | ✅ |
| 3.4-T3 | 结构化请求日志 | FR-3.4.2 | main_new.py 中间件 | 3h | 日志格式检查 | ✅ |
| 3.4-T4 | 系统监控面板 | FR-3.4.3 | api/v1/system.py + index.html | 6h | 指标显示 | ✅ |
| 3.4-T5 | 异常告警 → 飞书 | FR-3.4.4 | feishu_push.py + scheduler | 4h | 故意造错触发 | ✅ |
| 3.4-T6 | 日志轮转 | FR-3.4.5 | logging 配置 | 2h | 轮转验证 | ✅ |
| 3.4-T7 | 页面热度统计 (S3) | FR-3.4.6 | api/v1/analytics.py + index.html | 4h | 热度排行显示 | ✅ |
| 3.4-T8 | 异常处理规范化 | FR-3.4.7 | 全 backend 空 except + print | 6h | grep 空 except = 0, print → logger | ✅ |
| 3.4-T9 | 健康检查自动化 | FR-3.4.8 | scheduler.py + feishu_push.py | 3h | 连续失败触发告警 | ✅ |

### 6.1 发布门禁 (v3.4.0)

- [ ] 审计日志覆盖登录/配置/用户操作
- [ ] 监控面板显示全部 5 项指标
- [ ] 故意制造 500 触发飞书告警
- [ ] 测试全过 + 版本发布

---

## 7. v3.5.0 — AI 深化

> 对应 PRD §4.4

| # | 任务 | 对应 PRD | 文件 | 估时 | 验证方式 | 状态 |
|---|------|---------|------|------|----------|------|
| 3.5-T1 | 批量日报生成 | FR-3.5.1 | backend/report_generator.py | 6h | 日报产出检查 | ✅ |
| 3.5-T2 | 日报飞书定时推送 | FR-3.5.1 | scheduler.py | 2h | 推送成功 | ✅ |
| 3.5-T3 | AI 周报 | FR-3.5.2 | report_generator.py | 4h | 周报产出 | ✅ |
| 3.5-T4 | 问股 RAG 上下文 | FR-3.5.3 | chat.py, prompts/ | 5h | 多轮记忆测试 | ✅ |
| 3.5-T5 | 策略推荐 | FR-3.5.4 | ai_evaluator.py + 前端 | 4h | 推荐合理性 | ✅ |
| 3.5-T6 | 成本控制 (缓存+统计+限流) | FR-3.5.5 | ai_evaluator.py | 4h | 用量统计页 | ✅ |
| 3.5-T7 | ai_evaluator 模块拆分 | FR-3.5.6 | 拆分 4 模块 | 8h | 接口不变, 测试全过 | ✅ |
| 3.5-T8 | AI 测试 mock 化 | FR-3.5.7 | tests/test_ai_mock.py | 4h | 无 Key 可跑通 | ✅ |

### 7.1 发布门禁 (v3.5.0)

- [ ] 日报自动推送成功 (模拟交易日)
- [ ] 问股引用历史对话验证
- [ ] 用量统计可查
- [ ] 测试全过 + 版本发布

---

## 8. v3.6.0 — 前端渐进式组件化

> 对应 PRD §4.5。**注意: 全量 Vite SFC 方案已否决**, 保持 CDN + 零构建。
> 拆分顺序 = 耦合度从低到高, 每步独立验证 + commit。

| # | 任务 | 对应 PRD | 文件 | 估时 | 验证方式 | 状态 |
|---|------|---------|------|------|----------|------|
| 3.6-T1 | 组件边界盘点 + props/emit 契约 | FR-3.6.1 | docs/component-contract.md | 3h | 契约文档评审 | ⏳ |
| 3.6-T2 | 共享状态提取 composable | FR-3.6.1 | js/composables/ | 4h | 引用无遗漏 | ⏳ |
| 3.6-T3 | Sidebar/Header 组件化 | FR-3.6.2 | js/components/ + index.html | 4h | 功能对比 | ⏳ |
| 3.6-T4 | System 页组件化 | FR-3.6.3 | js/components/ | 5h | 功能对比 | ⏳ |
| 3.6-T5 | Strategies 页组件化 | FR-3.6.4 | js/components/ | 6h | 功能对比 | ⏳ |
| 3.6-T6 | Calendar 页组件化 | FR-3.6.5 | js/components/ | 8h | 功能对比 | ⏳ |
| 3.6-T7 | AI 页组件化 | FR-3.6.6 | js/components/ | 6h | 功能对比 | ⏳ |
| 3.6-T8 | 壳瘦身 | FR-3.6.7 | index.html | 3h | wc -l ≤ 1800 | ⏳ |
| 3.6-T9 | 全量冒烟对比 | FR-3.6.8 | — | 4h | 逐项对比清单 | ⏳ |
| 3.6-T10 | merrill_clock 模块拆分 | FR-3.6.9 | 拆分 3 模块 | 6h | 接口不变, 测试全过 | ⏳ |
| 3.6-T11 | 前端组件测试 (Vitest) | FR-3.6.10 | tests/frontend/ | 6h | 覆盖率 ≥ 40% | ⏳ |
| 3.6-T12 | ADR 决策记录 | FR-3.6.11 | docs/adr/ | 2h | ≥ 3 篇 ADR | ⏳ |

### 8.1 拆分策略 (每页)

1. 将该页 template 片段 + 相关 ref/function 提取为全局组件
2. 通过 props 传入数据, emit 传出事件
3. 共享状态从 composable 引用
4. SPA 完整性检查 + 该页功能逐项对比
5. staging commit (每页 1 次)

### 8.2 发布门禁 (v3.6.0)

- [ ] index.html ≤ 1800 行
- [ ] 5 页面功能逐项对比一致 (对照清单)
- [ ] 零新增 npm 依赖
- [ ] 52 存量测试全过
- [ ] 版本发布

---

## 9. v3.7.0 — 通知矩阵

> 对应 PRD §4.6

| # | 任务 | 对应 PRD | 文件 | 估时 | 验证方式 | 状态 |
|---|------|---------|------|------|----------|------|
| 3.7-T1 | 企微渠道适配器 | FR-3.7.1 | feishu_push.py → notify/ | 3h | 测试推送 | ⏳ |
| 3.7-T2 | 钉钉渠道适配器 | FR-3.7.1 | notify/ | 3h | 测试推送 | ⏳ |
| 3.7-T3 | 邮件渠道 (SMTP) | FR-3.7.1 | notify/ | 4h | 测试邮件 | ⏳ |
| 3.7-T4 | 通知模板配置 | FR-3.7.2 | notify/templates/ | 3h | 模板渲染 | ⏳ |
| 3.7-T5 | Webhook 开放接口 | FR-3.7.3 | api/v1/webhook.py | 4h | 签名验证 | ⏳ |
| 3.7-T6 | 推送历史 + 重试 | FR-3.7.4 | notify/ + index.html | 4h | 失败重试 | ⏳ |

### 9.1 发布门禁 (v3.7.0)

- [ ] 3 渠道各推送成功
- [ ] Webhook 签名鉴权通过 (非法签名拒绝)
- [ ] 测试全过 + 版本发布

---

## 10. v3.8.0 — 移动端 & PWA

> 对应 PRD §4.7

| # | 任务 | 对应 PRD | 文件 | 估时 | 验证方式 | 状态 |
|---|------|---------|------|------|----------|------|
| 3.8-T1 | 底部 TabBar 完善 | FR-3.8.1 | index.html, responsive.css | 4h | 真机冒烟 | ⏳ |
| 3.8-T2 | 核心页离线缓存 | FR-3.8.2 | sw.js | 4h | 离线测试 | ⏳ |
| 3.8-T3 | Web Push 通知 | FR-3.8.3 | sw.js + 后端 push 接口 | 5h | 浏览器推送 | ⏳ |
| 3.8-T4 | 移动端性能优化 | FR-3.8.4 | index.html, css | 3h | Lighthouse ≥ 85 | ⏳ |
| 3.8-T5 | 无障碍支持 | FR-3.8.5 | index.html, 组件 | 4h | 键盘可达 + aria 检查 | ⏳ |

### 10.1 发布门禁 (v3.8.0)

- [ ] iPhone/Android 真机冒烟
- [ ] 离线模式核心页可读
- [ ] Lighthouse ≥ 85
- [ ] 版本发布

---

## 11. v3.9.0 — 开放平台

> 对应 PRD §4.8

| # | 任务 | 对应 PRD | 文件 | 估时 | 验证方式 | 状态 |
|---|------|---------|------|------|----------|------|
| 3.9-T1 | OpenAPI 文档完善 | FR-3.9.1 | docs/API.md | 4h | 第三方可用文档接入 | ⏳ |
| 3.9-T2 | API Token 管理 | FR-3.9.2 | backend/api_token.py | 4h | Token 权限测试 | ⏳ |
| 3.9-T3 | 插件机制完善 | FR-3.9.3 | data_sources.py 抽象 | 4h | 自定义源接入 | ⏳ |
| 3.9-T4 | 数据导出/导入 | FR-3.9.4 | api/v1/export.py | 3h | 迁移演练 | ⏳ |
| 3.9-T5 | API 版本策略 | FR-3.9.5 | 版本迁移文档 | 3h | deprecation 流程文档化 | ⏳ |
| 3.9-T6 | 用户分层运营 | FR-3.9.6 | analytics.py + index.html | 4h | 三态识别 + 差异化提示 | ⏳ |

---

## 12. 跨版本通用任务 (每版本发布必做)

| # | 任务 | 说明 |
|---|------|------|
| REL-1 | 版本号 bump | main_new.py 3 处 + frontend 徽章, grep 确认一致 |
| REL-2 | 测试全过 | `python -m pytest tests/ -q` |
| REL-3 | SPA 完整性检查 | template=0, div≈-10, dual=0 |
| REL-4 | 文档更新 | README/DEPLOYMENT/PRD/DEV-PLAN/TEST-PLAN 同步 |
| REL-5 | 安全扫描 | staging 目录跑 secrets 扫描, 零命中 |
| REL-6 | rsync dev → staging | 含 qresult 数据同步 |
| REL-7 | commit + tag + push | dev 仓库 (GitHub + 群辉) |
| REL-8 | gh release create | 附 tar.gz 资产 |
| REL-9 | 本地归档 | ~/量化日历/quant-calendar-vX.Y.Z.tar.gz |
| REL-10 | ruff lint 检查 | `ruff check backend/` 零错误 (v3.3.0 起执行) |

---

## 13. 风险登记册

| 风险 | 概率 | 影响 | 缓解措施 |
|------|------|------|----------|
| 前端改动 SPA 蓝屏 | 中 | 高 | ≤50行/次 + SPA 完整性检查 + staging 可回滚 |
| SQLite 迁移丢数据 | 低 | 高 | 迁移前全量备份 + dry-run + 双写对比 |
| AI 成本失控 | 中 | 中 | 缓存 + 用量统计 + 按模型限流 (FR-3.5.5) |
| 组件拆分破坏功能 | 中 | 中 | 每页独立验证对比 + 零构建回滚简单 |
| 版本间回归 | 中 | 高 | 52 存量测试 + 冒烟清单门禁 |
| 第三方渠道 (企微/钉钉) 接口变动 | 低 | 低 | 适配器隔离, 单渠道失败不影响其他 |
| 数据管线依赖 tushare 限流/不稳定 | 中 | 中 | 失败重试 + 降级到手动导入 + 保留旧 CSV |

---

## 14. 变更记录

| 日期 | 变更 | 涉及 |
|------|------|------|
| 2026-08-07 | 初始版本创建 | 全部 |

*三文档 (PRD / DEV-PLAN / TEST-PLAN) 同步维护: 需求变更 → 三处更新; 任务完成 → 状态列更新; 发布 → 全部核对。*
