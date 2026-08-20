# 量化选股日历 V4.1-V4.5 优化打磨 开发计划（DEV-PLAN）

> 状态：六维度审计完成 | 日期：2026-08-21 | 基线：28372e2（V4.0.9）
> 配套：PRD-v4.1-4.5-优化打磨.md | TEST-PLAN-v4.1-4.5-优化打磨.md
> **更新规则**：每任务完成后更新状态列；需求变更三文档同步。
> **Git 策略**：每任务独立 commit（Conventional Commits + 版本前缀）；每版本 tag v4.x.0；push 后 ops fetch+reset 同步 + 双端重启。

## 1. 版本总览
| 版本 | 主题 | 任务数 | 预估耗时 |
|---|---|:--:|:--:|
| V4.1 | 安全加固 | 11 | 2-3 天 |
| V4.2 | 逻辑通畅 | 8 | 2 天 |
| V4.3 | 效率性能 | 5 | 2-3 天 |
| V4.4 | 体验筑基 | 7 | 2-3 天 |
| V4.5 | 便捷与收尾 | 7 | 2 天 |
| **合计** | | **38** | **10-14 天** |

## 2. V4.1 安全加固
| # | 任务 | FR | 文件 | 估时 | 验证方式 | 状态 |
|---|------|----|------|:--:|----------|:--:|
| 1.1 | 鉴权 deny-by-default 依赖注入 + 匿名白名单 | 4.1.1 | backend/auth.py, backend/main_new.py | 3h | test_no_unauthed_sensitive.py 全绿 | ⬜ |
| 1.2 | setup 向导加固 | 4.1.2 | backend/api/v1/setup_wizard.py | 1.5h | 匿名改密 401；密码强度校验 | ⬜ |
| 1.3 | AI base_url 白名单/内网禁访 | 4.1.3 | backend/api/v1/ai.py, backend/ai_evaluator.py | 2h | SSRF 用例拒绝/放行 | ⬜ |
| 1.4 | data-refresh 鉴权+配额+锁 | 4.1.4 | backend/api/v1/data_refresh.py | 2h | 匿名 401；并发互斥 | ⬜ |
| 1.5 | guest 门禁 | 4.1.5 | backend/auth.py, 高成本端点 | 2h | guest 403 用例 | ⬜ |
| 1.6 | openapi IDOR 修复 | 4.1.6 | backend/api/v1/openapi.py | 1.5h | 越权 403/脱敏 | ⬜ |
| 1.7 | JWT 会话安全（回查 role/版本号/声明） | 4.1.7 | backend/auth.py, backend/config.py | 2.5h | 降权/改密即失效 | ⬜ |
| 1.8 | 口令策略 + 启动自检 | 4.1.8 | backend/user_manager.py, backend/config.py | 2h | 默认口令拦截；.env 600 | ⬜ |
| 1.9 | 速率限制实化（代理链/账号级锁定） | 4.1.9 | backend/rate_limit.py | 2.5h | 单点耗尽失败 | ⬜ |
| 1.10 | 泄露面收敛 | 4.1.10 | backend/api/v1/feedback.py, errors.py, webhook.py, user_config.py | 2h | 脱敏断言 | ⬜ |
| 1.11 | 审计日志补全 | 4.1.11 | backend/audit.py 调用点 | 1.5h | 关键操作可追踪 | ⬜ |
| 1.12 | 发布：V4.1.0 tag + 双端 + 密码轮换 | — | 版本文件 | 1h | health=4.1.0；P0 实测 401 | ⬜ |

## 3. V4.2 逻辑通畅
| # | 任务 | FR | 文件 | 估时 | 验证方式 | 状态 |
|---|------|----|------|:--:|----------|:--:|
| 2.1 | ops 域 6 键注入复活三功能 | 4.2.1 | app-logic.js, system-page.js | 2h | 点击有网络请求/反馈 | ⬜ |
| 2.2 | 三向注入护栏测试 | 4.2.2 | tests/test_frontend_consistency.py, tests 新 | 2h | 集合断言全绿 | ⬜ |
| 2.3 | WS 依赖补齐 + 握手冒烟 | 4.2.3 | requirements.in/lock, 重装, market_ws.py | 1.5h | WS 升级成功 | ⬜ |
| 2.4 | 同步调用异步化 | 4.2.4 | backend/api/v1/calendar.py, market.py | 2h | 慢源不阻塞 health | ⬜ |
| 2.5 | 详情弹窗竞态保护 | 4.2.5 | app-logic.js | 1.5h | 连开两股不串 | ⬜ |
| 2.6 | K线失败体验 | 4.2.6 | app-logic.js, stock-detail.js | 1.5h | 失败有原因+重试 | ⬜ |
| 2.7 | 登出清 token + 侧栏持久化 | 4.2.7 | auth.js, sidebar.js, app-logic.js | 1h | 登出无残留；刷新保留 | ⬜ |
| 2.8 | 空态健壮性（NaN%/可选链） | 4.2.8 | merrill-detail.js, stock-detail.js | 1h | 缺字段不崩 | ⬜ |
| 2.9 | 发布：V4.2.0 tag + 双端 | — | 版本文件 | 1h | health=4.2.0 | ⬜ |

## 4. V4.3 效率性能
| # | 任务 | FR | 文件 | 估时 | 验证方式 | 状态 |
|---|------|----|------|:--:|----------|:--:|
| 3.1 | 年视图倒排索引 + 状态缓存 + to_thread | 4.3.1 | backend/views_aggregator.py, api/v1/views.py | 3h | 实测 <100ms；无阻塞 | ⬜ |
| 3.2 | reload/冷拉取异步化 + 双缓冲 + 预热 | 4.3.2 | backend/data_parser.py, scheduler.py, merrill_clock.py | 3h | 刷新异步；冷 merrill <1s | ⬜ |
| 3.3 | 首屏按页分包 + HTTP/2 | 4.3.3 | frontend/index.html, 组件加载, uvicorn 配置 | 3h | 脚本 ≤12；TTI 减半 | ⬜ |
| 3.4 | 请求调度统一（未登录门控/缓存/轮询可见性） | 4.3.4 | frontend/js/app-logic/*.js | 2.5h | 首屏 -50%；系统页 -70% | ⬜ |
| 3.5 | 后端降本（TTL/CPU 采样/快照节流） | 4.3.5 | backend/dashboard_api.py, system.py, merrill_clock.py | 2h | 无效 CPU/写降 80% | ⬜ |
| 3.6 | 发布：V4.3.0 tag + 双端 + 延迟基线复测 | — | 版本文件 | 1h | health=4.3.0；量化达标 | ⬜ |

## 5. V4.4 体验筑基
| # | 任务 | FR | 文件 | 估时 | 验证方式 | 状态 |
|---|------|----|------|:--:|----------|:--:|
| 4.1 | 令牌体系补全 + test_tokens_defined 门禁 | 4.4.1 | tokens.css, themes.css, 使用点 | 2.5h | 无未定义令牌 | ⬜ |
| 4.2 | dark 令牌层抽象 | 4.4.2 | themes.css dark-pro 段 | 3h | 硬编码清零；去 !important | ⬜ |
| 4.3 | 对比度达标（含 merrill.js 令牌化） | 4.4.3 | merrill.js, themes.css, layout.css | 2.5h | WCAG 达标断言 | ⬜ |
| 4.4 | 主题收敛参数化 | 4.4.4 | themes.css, themes.js | 2h | 体量下降；无回归 | ⬜ |
| 4.5 | 空态/崩溃防护 | 4.4.5 | research-page.js 等 | 1h | 0 崩溃 | ⬜ |
| 4.6 | 品牌/可访问性/访客入口 | 4.4.6 | index.html, login 区, manifest | 1.5h | WCAG 1.4.4；品牌一致 | ⬜ |
| 4.7 | 视觉复核（基于已存截图） | 4.4.7 | — | 2h | 复核记录 | ⬜ |
| 4.8 | 发布：V4.4.0 tag + 双端 | — | 版本文件 | 1h | health=4.4.0 | ⬜ |

## 6. V4.5 便捷与收尾
| # | 任务 | FR | 文件 | 估时 | 验证方式 | 状态 |
|---|------|----|------|:--:|----------|:--:|
| 5.1 | 美林时钟入口 + 配置归位 | 4.5.1 | global-header.js, system-page.js, merrill.js | 2h | 一二级可达；配置就近 | ⬜ |
| 5.2 | 交互范式统一 + 登录加载改造 | 4.5.2 | watchlist.js, app-logic.js, auth.js | 2h | 即时反馈；无重复请求 | ⬜ |
| 5.3 | 按钮反馈补齐 | 4.5.3 | 各组件 | 2h | 无"点了没反应" | ⬜ |
| 5.4 | 巨型文件拆分起步 | 4.5.4 | system-page.js, research-page.js, ai_evaluator.py | 3h | 单文件 ≤800 行（阶段） | ⬜ |
| 5.5 | 文档回写 + 版本纪律 CI gate + 流程脚本化 | 4.5.5 | docs/*, .github/workflows/ci.yml, scripts/ | 2h | 三文档同步；tag↔版本一致 | ⬜ |
| 5.6 | i18n 全量 + P2/P3 小项 | 4.5.6 | i18n 资源, 各页面 | 2h | 视余量 | ⬜ |
| 5.7 | 发布：V4.5.0 tag + 双端 + 总结 | — | 版本文件 | 1h | health=4.5.0 | ⬜ |

## 7. 风险与依赖
- V4.3.3 引入构建层（esbuild/Vite）与"零构建"约束冲突 → 需用户确认是否接受；备选：import map + 动态 import（保零构建）
- 安全修复涉及鉴权重构 → 全量回归 + 浏览器冒烟每步验证
- 视觉后端不可用 → 美观验收以源码/对比度/几何断言为准，截图待补审
- V4.1 发布后需轮换 admin 密码（用户配合）
- 每版本发布需用户确认后 push/tag（沿用 V4.0 需求3 纪律）
