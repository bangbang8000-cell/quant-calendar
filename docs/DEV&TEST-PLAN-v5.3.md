# 量化选股日历 5.3 开发 & 测试计划（DEV&TEST-PLAN 5.3.x）

- **文档版本**：v1.0（正式版，待审批）
- **日期**：2026-09-04
- **产品基线**：v5.2.11（HEAD `ab4fac4`，APP_VERSION 5.2.10）
- **配套**：PRD-v5.3.md（产品需求，独立文档）
- **开发纪律**：TDD 四步（先写失败测试 → 实现 → 跑绿 → commit）；Conventional Commits + `v5.3` 前缀；单任务改动 ≤3 文件/次；前端改动后 vite build + test_frontend_consistency（金标准 120 用例）

---

## 0. 基线事实（2026-09-04 实测）

| 项 | 值 |
|---|---|
| 全量测试 | **2776 collected**（-m "not e2e"；含 3 个 e2e 用例被 exclude） |
| 测试文件 | 206 个（tests/ + tests/e2e/） |
| CI 门禁 | 总覆盖 ≥40%；核心模块 60–80% 分档；锁文件防漂移；令牌/间距/无内联样式/对比度/版本纪律 |
| 前端一致性 | test_frontend_consistency 120 用例 |
| 双端运行 | dev(:8001) / ops(:8000) systemd 用户服务 |
| 已知技术债 | Pydantic V2 弃用告警 / themes.css 5058 行（**不拆分**，用户决策） / db.py 4 处 ad-hoc ALTER / 测试隔离坑 / jobs_queue 偶发失败 / audit.log 14 文件无轮转 / Docker v5.2.3+ 未推 |

---

## 1. 版本与任务分解（T-5.3.x.y）

> 每个版本独立可发布；任务编号规则 T-5.3.<版本>.<序号>。

### 1.1 v5.3.0 工程卫生与架构健康（3-4 天）

| 任务 | 内容 | 涉及文件 | 估时 |
|---|---|---|---|
| T-5.3.0.1 | Pydantic V2 迁移：`config.py` Settings 用 `SettingsConfigDict`（model_config + env_file/extra 官方写法），消除 `PydanticDeprecatedSince20` | backend/config.py、tests/test_config_v530.py | 0.5d |
| T-5.3.0.2 | 锁文件上界解除：评估移除 `pydantic<2.13.5`，uv pip compile 重生成 lock，CI 防漂移验证 | requirements.in、requirements.lock | 0.5d |
| T-5.3.0.3 | 测试隔离坑根治：`test_today_snapshot.py` 顶层 import → fixture 内 import + data_dir 重定向，新增隔离守卫 | tests/test_today_snapshot.py、tests/conftest.py | 1d |
| T-5.3.0.4 | jobs_queue 偶发失败定位修复（顺序敏感） | tests/test_jobs_queue.py、backend/jobs.py | 0.5d |
| T-5.3.0.5 | db.py 中 4 处 `ALTER TABLE` 收归 `_0005_xxx` 迁移（幂等，upgrade/downgrade/validate） | backend/migrations/_0005_*.py、backend/db.py、tests/test_migrations.py | 1d |
| T-5.3.0.6 | 审计日志轮转：按日归档 + 保留 N 天 + 启动清理 | backend/audit_log.py、tests/test_audit_rotation_v530.py | 0.5d |

**出口**：pytest 收集无 Pydantic 告警；全量 2776+ 绿；dev/ops 重启健康；commit + tag v5.3.0。

### 1.2 v5.3.1 更好用 · 体验统一（4-5 天）

| 任务 | 内容 | 涉及文件 | 估时 |
|---|---|---|---|
| T-5.3.1.1 | 页面头全站统一：research/ai/calendar/system 各子页 header 对齐 5.2.5 基线 | 各 page 组件、layout.css | 1.5d |
| T-5.3.1.2 | 空错态/加载态巡检收尾：各子页空态引导 + 错误态 reason/重试 | 各 page 组件、empty-error.js | 1d |
| T-5.3.1.3 | 短线复盘新手引导：首次进入 overview 3 步引导 | onboarding.js、shortterm-page.js、i18n 5 语 | 1d |
| T-5.3.1.4 | 无障碍收尾：aria-label / 焦点可见 / 弹窗键盘可达 | 各 page 组件 | 0.5d |
| T-5.3.1.5 | i18n 缺词守卫补齐 + 缺词守卫测试扩展 | 5 语 locale、tests/test_i18n_complete_v531.py | 0.5d |

**出口**：test_accessibility 系列绿；i18n 守卫绿；双端冒烟 0 pageerror；移动端 375px 回归守护绿；tag v5.3.1。

### 1.3 v5.3.2 更美观 · 视觉与设计系统（5-6 天）

| 任务 | 内容 | 涉及文件 | 估时 |
|---|---|---|---|
| T-5.3.2.1 | ~~themes.css 拆分~~ **不执行（用户决策）**：维持单一 themes.css，本版不拆 | — | — |
| T-5.3.2.2 | 语义配色令牌：机会/风险/中性/警示 + 涨跌强弱分档；DESIGN-SYSTEM.md 登记 | tokens.css、themes.css、DESIGN-SYSTEM.md | 1d |
| T-5.3.2.3 | ECharts 专业图表：组合净值+回撤双轴、因子 IC 分位区间带、情绪趋势带 | charts.js、portfolio.js、research-page.js | 1.5d |
| T-5.3.2.4 | 信息密度三档全站生效 + 偏好持久化 | preferences.js、layout.css、各 page | 1d |
| T-5.3.2.5 | 动效令牌统一 hover/点击/加载反馈 | animations.css、tokens.css | 0.5d |

**出口**：拆分对拍（构建产物视觉回归守护）绿；令牌/间距/无内联样式门禁绿；暗色/亮色对比度达标；tag v5.3.2。

### 1.4 v5.3.3 更便捷 · 导航与效率（4-5 天）

| 任务 | 内容 | 涉及文件 | 估时 |
|---|---|---|---|
| T-5.3.3.1 | 命令面板动作注册扩展（全部子页 + 高频动作）+ 键盘索引完善 | command-panel-core.js、command-panel.js | 1.5d |
| T-5.3.3.2 | 全局快捷键体系 + 帮助面板完善 | app-logic/keys.js、shortcut-help | 1d |
| T-5.3.3.3 | 全局搜索分组增强（股票/板块/策略/菜单） | search.js、app-logic | 1d |
| T-5.3.3.4 | 跨页跳转链路推广 + 评估→组合→导出一键化 | 各 page、portfolio.js、export.js | 1d |
| T-5.3.3.5 | 批量操作（多选批量评估 → 加入组合；批量导出对比）走 jobs 队列 | ai-page.js、research-page.js、jobs.py | 1d |

**出口**：命令面板三域检索测试绿；快捷键无冲突；批量任务进度/取消可达；tag v5.3.3。

### 1.5 v5.3.4 更高效 · 性能与容量（5-6 天）

| 任务 | 内容 | 涉及文件 | 估时 |
|---|---|---|---|
| T-5.3.4.1 | 主包 index（458KB）瘦身/再分包 + 大小预算门禁 | vite 配置、main.js、scripts/ | 1.5d |
| T-5.3.4.2 | 虚拟滚动推广到长表（龙虎榜/板块资金/回测历史/自选/评估历史） | virtual-list-core.js、各 page | 1.5d |
| T-5.3.4.3 | 缓存失效中心：统一 L1/L2 读写 + 数据刷新主动失效 | cache.py、data_refresh.py | 1d |
| T-5.3.4.4 | 后端热点优化：高频查询索引/预聚合 | db.py、data_parser.py、views_aggregator.py | 1d |
| T-5.3.4.5 | 性能基准收紧并入 CI 门禁（必跑、退化即红） | tests/test_performance.py、.github/workflows/ci.yml | 0.5d |

**出口**：dist 大小门禁绿；万行表虚拟滚动无卡顿；性能基准连续绿；tag v5.3.4。

### 1.6 v5.3.5 更智能 · 决策辅助（5-6 天）

| 任务 | 内容 | 涉及文件 | 估时 |
|---|---|---|---|
| T-5.3.5.1 | AI 评估归因：命中/未命中因子清单 + 模型一致性提示 | ai_evaluator.py、ai_eval/*、ai-page.js | 1.5d |
| T-5.3.5.2 | 今日一屏信号化：机会/风险角标（纯计算不经过 AI） | strategies-page.js、dashboard_api.py | 1d |
| T-5.3.5.3 | 评估分析深化：胜率趋势/分模型对比/样本量 | eval_track.py、ai-page.js、charts.js | 1d |
| T-5.3.5.4 | 短线复盘闭环前端：验证条件自设 + 盘中核验 + 追问历史 | shortterm-page.js、verification.py | 1.5d |
| T-5.3.5.5 | 报表模板化 + HTML 导出 + 图表嵌入 | report_center.py、report_export.py | 1d |

**出口**：归因字段结构化 + 诚实降级测试绿；复盘三态核验/记分板/追问链路可达；报表导出可打开；tag v5.3.5。

### 1.7 v5.3.6 更实用 · 运维与发布（3-4 天）

| 任务 | 内容 | 涉及文件 | 估时 |
|---|---|---|---|
| T-5.3.6.1 | Docker 镜像推送恢复：CI tag 触发 build + push ghcr.io（latest + 5.3.x） | .github/workflows/docker-publish.yml | 0.5d |
| T-5.3.6.2 | 健康面板集成数据新鲜度 + "数据旧了"告警 | system-page.js、reliability/freshness.py、metrics.py | 1d |
| T-5.3.6.3 | 公网隧道方案文档化（quick vs 固定域名） | DEPLOYMENT.md、docs/ | 0.5d |
| T-5.3.6.4 | 升级回滚演练记录 + SLO 归档 | scripts/upgrade.sh、docs/ops-* | 0.5d |
| T-5.3.6.5 | 收官发布：全量回归 + 双端部署 + GitHub Release + 群晖 + README/HANDOVER | 全仓 | 1d |

**出口**：镜像可拉取可运行；健康面板完整；发布清单全绿；tag v5.3.6（最终）。

---

## 2. 测试策略

### 2.1 分层测试（沿用既有体系 + 5.3 增量）

| 层 | 内容 | 5.3 增量 |
|---|---|---|
| 单元/功能 | 各模块 pytest（后端） | config 等价测试、迁移三路径、轮转测试、新鲜度告警测试 |
| 前端一致性 | test_frontend_consistency（120 用例金标准） | 页面头/命令面板/信息密度/信号化守护用例 |
| 视觉/令牌门禁 | 令牌/间距/无内联样式/对比度/主题 | 语义令牌登记守卫（无 CSS 拆分） |
| 性能 | test_performance.py | 收紧阈值、入 CI 必跑 |
| e2e（信息性） | Playwright 视觉回归（continue-on-error） | baseline 截图扩到核心页（可选，不阻塞） |
| 属性/契约/故障注入 | test_property_based / test_contract_openapi / test_reliability_faults | 契约测试扩展到 5.3 新增端点 |

### 2.2 每版本测试清单

| 版本 | 新增/强化测试 |
|---|---|
| 5.3.0 | test_config_v530（无弃用告警+行为等价）、test_migrations_0005（三路径）、test_audit_rotation_v530、隔离守卫、jobs_queue 稳定性 |
| 5.3.1 | test_header_uniform_v531、test_empty_error_sweep_v531、test_onboarding_shortterm_v531、test_i18n_complete_v531、test_accessibility 增量 |
| 5.3.2 | test_css_split_parity_v532（视觉对拍）、test_semantic_tokens_v532、test_density_modes_v532、对比度/令牌门禁增量 |
| 5.3.3 | test_command_panel_actions_v533、test_shortcut_no_conflict_v533、test_search_grouping_v533、test_batch_jobs_v533 |
| 5.3.4 | test_bundle_budget_v534、test_virtual_scroll_v534、test_cache_invalidation_v534、test_performance 收紧 |
| 5.3.5 | test_eval_attribution_v535（结构化+降级）、test_today_signals_v535（纯计算+不冒充）、test_report_html_export_v535 |
| 5.3.6 | test_freshness_alert_v536、test_dockerfile_smoke（CI）、发布冒烟 |

### 2.3 回归策略

- 每版本出口全量回归：`pytest -q -m "not e2e"`（cwd 必须 dev 根，避免误收 workspace 其他 tests）
- 前端改动：`npm run build`（vite）→ dist 入库 → test_frontend_consistency
- 双端冒烟：dev/ops systemd 重启 → /api/health 版本确认 → CDP/Playwright 0 pageerror
- CI：push 不触发，tag v5.3.x 触发全量 + Docker；workflow_dispatch 手动触发

---

## 3. 发布与同步流程（每版本）

1. bump APP_VERSION（backend/main_new.py 单一来源）→ 前端 ?v= 缓存号联动
2. vite build + 全量回归 + 门禁全绿
3. commit + tag v5.3.N → `git push origin master` + `git push origin v5.3.N` + `git push synology master --tags`
4. （授权后）`gh release create v5.3.N`
5. ops 双副本 ff-only 同步 + systemd 重启 + 双端 curl /api/health 冒烟
6. README 版本历史 / HANDOVER 更新

---

## 4. 里程碑

| 里程碑 | 内容 | 目标 |
|---|---|---|
| M0 | 基线冻结 + 规划批准 | 5.3.0 开工前 |
| M1 | 工程卫生交付（5.3.0） | 干净基线：0 弃用告警、隔离坑根治 |
| M2 | 体验/视觉/便捷交付（5.3.1~5.3.3） | 全站体验一致、设计系统深水区 |
| M3 | 性能/智能交付（5.3.4~5.3.5） | 高效 + 决策辅助增强 |
| M4 | 运维收官（5.3.6） | 镜像/面板/文档/演练 + 最终发布 |

---

## 5. 风险与缓解

| 风险 | 等级 | 缓解 |
|---|---|---|
| ~~themes.css 拆分回归~~ 已按用户决策排除 | 高→已排除 | 不拆分即无此风险；CSS 改动仍走门禁守护 |
| 性能优化改动热点路径 | 中 | 基准先行 + 无行为变化 + 全量回归 |
| 批量操作触 jobs 队列行为 | 中 | 复用既有 jobs/cache 抽象；专项测试 |
| Pydantic 迁移配置行为差异 | 中 | 等价测试先行；双端冒烟 |
| 打磨范围大版本多 | 低 | 每版独立可发布，任一版可单独交付 |
| e2e 覆盖窄（信息性） | 低 | 本轮以单测+门禁为主，e2e 仅扩 baseline 不阻塞 |
