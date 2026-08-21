# 量化选股日历 V4.1-V4.5 优化打磨 开发计划（DEV-PLAN）

- **文档版本**：v1.0（完整版）
- **状态**：已评审（六维度审计完成）| 日期：2026-08-21
- **产品基线**：master 30168eb（V4.0.9）| **配套**：PRD-v4.1-4.5-优化打磨.md | TEST-PLAN-v4.1-4.5-优化打磨.md
- **更新规则**：每任务完成后更新状态列；需求变更三文档同步。

---

## 1. 目标与范围

在 V4.0 功能完备基础上，完成六维度（美观/适用/逻辑通畅/操作便捷/安全/效率）优化打磨：
- V4.1 安全加固 → V4.2 逻辑通畅 → V4.3 效率性能 → V4.4 体验筑基 → V4.5 便捷与收尾。
- 38 个开发任务，预估 10-14 天（AI 开发模式，单执行者）。

## 2. 版本总览与依赖

| 版本 | 主题 | 任务数 | 预估 | 状态 |
|---|---|:--:|:--:|---|
| V4.1 | 安全加固 | 12 | 2-3 天 | ✅ v4.1.0 已发布 |
| V4.2 | 逻辑通畅 | 9 | 2 天 | ✅ v4.2.0 已发布 |
| V4.3 | 效率性能(首屏分包方案A) | 6 | 2-3 天 | ✅ v4.3.0 已发布 |
| V4.4 | 体验筑基 | 8 | 2-3 天 | ✅ v4.4.0 已发布 |
| V4.5 | 便捷与收尾 | 8 | 2 天 | ✅ v4.5.0 已发布 |
| V4.6 | 美术打磨(UI 评估后追加) | 8 | 3-4 天 | ✅ v4.6.0 已发布 |
| **合计** | | **51** | **12-18 天** | **全部完成** |

> 注：V4.1-V4.5 按 PRD 38 FR 分解 43 任务；V4.6 依据 UI-ASSESSMENT-V4.6.md 追加 8 任务（间距/动效/排版/圆角/留白/配色/emoji/发布）。

## 3. 开发流程纪律（每任务）

1. **TDD 四步**：① 写失败测试 → ② 跑通失败 → ③ 实现 → ④ 全绿 + commit。
2. **提交规范**：Conventional Commits + 版本前缀，如 `fix(V4.1): 鉴权deny-by-default...`。
3. **改动纪律**：每任务改动文件 ≤3 个；修改后立即验证。
4. **前端冒烟金标准**：改前端后重启双端 + 浏览器冒烟 0 pageerror。
5. **令牌纪律**：禁止硬编码色值（var(--...)）；v-html 必须消毒。
6. **测试门禁**：每版本全量 pytest 全绿 + 门禁测试；新增安全/令牌/注入门禁入 CI。

## 4. 详细任务分解

### 4.1 V4.1 安全加固
| # | 任务 | FR | 主要文件 | 估时 | 验证方式 | 依赖 | 状态 |
|---|------|----|------|:--:|----------|------|:--:|
| 1.1 | 鉴权 deny-by-default 依赖注入 + 匿名白名单 | 4.1.1 | backend/auth.py, main_new.py, api/v1/* | 3h | test_no_unauthed_sensitive.py 全绿 | 无 | ✅ |
| 1.2 | setup 向导加固（鉴权+强度+status 脱敏） | 4.1.2 | backend/api/v1/setup_wizard.py | 1.5h | 匿名改密 401；弱密码拒绝 | 1.1 | ✅ |
| 1.3 | AI base_url 白名单/内网禁访 | 4.1.3 | backend/api/v1/ai.py, ai_evaluator.py | 2h | SSRF 用例拒绝/放行 | 1.1 | ✅ |
| 1.4 | data-refresh 鉴权+配额+并发锁 | 4.1.4 | backend/api/v1/data_refresh.py | 2h | 匿名 401；并发互斥 | 1.1 | ✅ |
| 1.5 | AI 模型/自动评估配置写鉴权 | 4.1.5 | backend/api/v1/ai.py | 1.5h | 匿名写 401 | 1.1 | ✅ |
| 1.6 | guest 门禁（高成本端点） | 4.1.6 | backend/auth.py, api/v1/{ai,backup,data,strategy_research}.py | 2h | guest 403 用例 | 1.1 | ✅ |
| 1.7 | openapi IDOR 修复 | 4.1.7 | backend/api/v1/openapi.py | 1.5h | 越权 403/脱敏 | 1.6 | ✅ |
| 1.8 | JWT 会话安全（回查 role/版本号/声明） | 4.1.8 | backend/auth.py, config.py | 2.5h | 降权/改密即失效 | 无 | ✅ |
| 1.9 | 口令策略 + 启动自检 + .env 600 | 4.1.9 | backend/user_manager.py, config.py | 2h | 默认口令拦截 | 无 | ✅ |
| 1.10 | 速率限制实化（代理链/账号锁定） | 4.1.10 | backend/rate_limit.py | 2.5h | 单点耗尽失败 | 无 | ✅ |
| 1.11 | 泄露面收敛（feedback/metrics/异常/secret 掩码） | 4.1.11 | api/v1/feedback.py, errors.py, views.py, webhook.py, user_config.py | 2h | 脱敏断言 | 1.1 | ✅ |
| 1.12 | 审计日志补全 | 4.1.12 | 各调用点 | 1.5h | 关键操作可追踪 | 1.1 | ✅ |
| 1.13 | **V4.1.0 发布**：tag/APP_VERSION/双端/密码轮换/P0 复测 | — | 版本文件 | 1h | health=4.1.0；P0 实测 401 | 全部 | ✅ |

### 4.2 V4.2 逻辑通畅
| # | 任务 | FR | 主要文件 | 估时 | 验证方式 | 依赖 | 状态 |
|---|------|----|------|:--:|----------|------|:--:|
| 2.1 | ops 域 6 键注入复活三功能 | 4.2.1 | app-logic.js, system-page.js, watch.js | 2h | 点击有网络请求/反馈 | 无 | ✅ |
| 2.2 | 三向注入护栏测试（集合断言） | 4.2.2 | tests/test_frontend_consistency.py | 2h | 集合断言全绿 | 2.1 | ✅ |
| 2.3 | WS 依赖补齐 + 握手冒烟 | 4.2.3 | requirements.in/lock, 重装, market_ws.py | 1.5h | WS 升级成功 | 无 | ✅ |
| 2.4 | 同步调用异步化 | 4.2.4 | backend/api/v1/{calendar,market}.py | 2h | 慢源不阻塞 health | 无 | ✅ |
| 2.5 | 详情弹窗竞态保护 | 4.2.5 | app-logic.js | 1.5h | 连开两股不串 | 无 | ✅ |
| 2.6 | K线失败体验（原因+重试） | 4.2.6 | app-logic.js, stock-detail.js | 1.5h | 失败可恢复 | 无 | ✅ |
| 2.7 | 登出清 token + 侧栏持久化 | 4.2.7 | auth.js, sidebar.js, app-logic.js | 1h | 登出无残留；刷新保留 | 无 | ✅ |
| 2.8 | 空态健壮性（NaN%/可选链） | 4.2.8 | merrill-detail.js, stock-detail.js | 1h | 缺字段不崩 | 无 | ✅ |
| 2.9 | **V4.2.0 发布**：tag/双端/功能复验 | — | 版本文件 | 1h | health=4.2.0；三功能恢复 | 全部 | ✅ |

### 4.3 V4.3 效率性能
| # | 任务 | FR | 主要文件 | 估时 | 验证方式 | 依赖 | 状态 |
|---|------|----|------|:--:|----------|------|:--:|
| 3.1 | 年视图倒排索引 + 状态入缓存 + to_thread | 4.3.1 | backend/views_aggregator.py, api/v1/views.py | 3h | 实测 <100ms；无阻塞 | 无 | ✅ |
| 3.2 | reload/冷拉取异步化 + 双缓冲 + 预热 | 4.3.2 | backend/data_parser.py, scheduler.py, merrill_clock.py, api/v1/market.py | 3h | 刷新异步；冷 merrill <1s | 无 | ✅ |
| 3.3 | 首屏按页分包 + HTTP/2（待定构建方式） | 4.3.3 | frontend/index.html, 组件加载, main_new.py | 3h | 脚本 ≤12；TTI 减半 | 用户决策 | ✅ |
| 3.4 | 请求调度统一（门控/缓存/轮询可见性） | 4.3.4 | frontend/js/app-logic/*.js | 2.5h | 首屏 -50%；系统页 -70% | 无 | ✅ |
| 3.5 | 后端降本（TTL/采样缓存/快照节流） | 4.3.5 | backend/dashboard_api.py, system.py, merrill_clock.py | 2h | 无效 CPU/写降 80% | 无 | ✅ |
| 3.6 | **V4.3.0 发布**：tag/双端/延迟基线复测 | — | 版本文件 | 1h | health=4.3.0；量化达标 | 全部 | ✅ |

### 4.4 V4.4 体验筑基
| # | 任务 | FR | 主要文件 | 估时 | 验证方式 | 依赖 | 状态 |
|---|------|----|------|:--:|----------|------|:--:|
| 4.1 | 令牌体系补全 + test_tokens_defined 门禁 | 4.4.1 | tokens.css, themes.css, 使用点 | 2.5h | 无未定义令牌 | 无 | ✅ |
| 4.2 | dark 令牌层抽象 | 4.4.2 | themes.css dark-pro 段 | 3h | 硬编码清零；去 !important | 4.1 | ✅ |
| 4.3 | 对比度达标（含 merrill.js 令牌化） | 4.4.3 | merrill.js, themes.css, layout.css | 2.5h | WCAG 达标断言 | 4.1 | ✅ |
| 4.4 | 主题收敛参数化 | 4.4.4 | themes.css, themes.js | 2h | 体量下降；无回归 | 4.2 | ✅ |
| 4.5 | 空态/崩溃防护（research-page） | 4.4.5 | research-page.js, strategies-page.js | 1h | 0 崩溃 | 无 | ✅ |
| 4.6 | 品牌/可访问性/访客入口 | 4.4.6 | index.html, login 区, manifest | 1.5h | WCAG 1.4.4；品牌一致 | 无 | ✅ |
| 4.7 | 页面体验视觉复核 | 4.4.7 | screenshots/, 各页面 | 2h | 复核记录 | 视觉可用 | ✅ |
| 4.8 | **V4.4.0 发布**：tag/双端/主题冒烟 | — | 版本文件 | 1h | health=4.4.0；双主题 0 pageerror | 全部 | ✅ |

### 4.5 V4.5 便捷与收尾
| # | 任务 | FR | 主要文件 | 估时 | 验证方式 | 依赖 | 状态 |
|---|------|----|------|:--:|----------|------|:--:|
| 5.1 | 美林时钟入口 + 配置归位 | 4.5.1 | global-header.js, system-page.js, merrill.js | 2h | 一二级可达；配置就近 | 无 | ✅ |
| 5.2 | 交互范式统一 + 登录加载改造 | 4.5.2 | watchlist.js, app-logic.js, auth.js | 2h | 即时反馈；无重复请求 | 无 | ✅ |
| 5.3 | 按钮反馈补齐 | 4.5.3 | 各组件 | 2h | 无"点了没反应" | 无 | ✅ |
| 5.4 | 巨型文件拆分起步 | 4.5.4 | system-page.js, research-page.js, ai_evaluator.py | 3h | 单文件 ≤800 行（阶段） | 无 | ✅ |
| 5.5 | 文档回写 + 版本纪律 CI gate + 流程脚本化 | 4.5.5 | docs/*, .github/workflows/ci.yml, scripts/ | 2h | 三文档同步；tag↔版本一致 | 无 | ✅ |
| 5.6 | i18n 全量 + P2/P3 小项 | 4.5.6 | i18n 资源, 各页面, export.py, restore | 2h | 视余量 | 无 | ✅ |
| 5.7 | **V4.5.0 发布**：tag/双端/总结 | — | 版本文件 | 1h | health=4.5.0 | 全部 | ✅ |

### 4.6 V4.6 美术打磨 (UI 全面评估后追加)
| # | 任务 | 主要文件 | 验证方式 | 状态 |
|---|------|----------|----------|:--:|
| 6.1 | 间距系统化: 358 处收敛 4px 网格 + 门禁 | layout.css/themes.css | test_spacing_grid 合规>=98% | ✅ |
| 6.2 | 动效统一: transition 全收敛 0.2s ease(-out) + 门禁 | 各 CSS | test_transition_tokens | ✅ |
| 6.3 | 排版精修: 字号令牌化 + tabular-nums + 门禁 | tokens.css/使用点 | test_typography | ✅ |
| 6.4 | 圆角/阴影收敛 + !important 清理 | tokens.css/themes.css | 令牌门禁 + !important-30% | ✅ |
| 6.5 | 组件留白: .card 阴影轻量化 | themes.css | 截图+冒烟 | ✅ |
| 6.6 | 配色主题优化: 主色对比度门禁 + classic bg 补齐 | themes.css | test_theme_contrast | ✅ |
| 6.7 | emoji 优化: 导航 SVG 化 + 变体清理 + 图标系统回归 | sidebar/icons | 冒烟三套图标切换 | ✅ |
| 6.8 | **V4.6.0 发布** + 关于页排版/README 配图 | 版本文件/文档 | 全量 1011 全绿 | ✅ |
## 5. 团队与角色
- 执行：AI 开发模式（TDD 四步 + 小步提交 + 浏览器实测），单执行者 + 用户验收。
- 协作：每版本发布前用户确认（沿用 V4.0 需求3 纪律）；安全发布后配合轮换 admin 密码。

## 6. 工作量与排期
- 总计 43 任务 / 约 38h / 10-14 天（含测试与发布）。
- 各版本可独立交付，降低单次风险。

## 7. 风险管理
| 风险 | 缓解 |
|---|---|
| V4.3.3 构建层决策阻塞 | 提前向用户确认；备选 import map |
| 安全重构回归 | TDD 先行 + 全量回归 + 每步冒烟 |
| 视觉后端不可用 | 源码/对比度/几何断言替代；截图存档 |
| 数据源波动影响实测 | 三源热备；降级验证 |
| 排期压力 | 按版本分批；每版本独立验收 |

## 8. 发布与部署流程（每版本）
1. 用户确认本版本功能 → 提交 commit → push master。
2. tag vX.0.0（APP_VERSION 同步）→ CI + Docker 触发。
3. ops：git fetch + reset --hard origin/master。
4. 双端重启（pkill -9 + setsid nohup）+ /api/health 验证。
5. 浏览器复验（登录/核心页面/0 pageerror）。
6. 回滚：ops reset --hard 上一版本 + 重启。

## 9. 完成定义（DoD）
- [ ] 对应 FR 测试全绿（TDD 反向验证）
- [ ] 全量 pytest 全绿（含门禁）
- [ ] 前端冒烟 0 pageerror（双主题）
- [ ] 三文档同步（PRD/DEV-PLAN/TEST-PLAN 状态列更新）
- [ ] tag + 双端部署 + 浏览器复验 + SKILL 快照更新
