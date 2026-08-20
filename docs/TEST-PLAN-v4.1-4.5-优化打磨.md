# 量化选股日历 V4.1-V4.5 优化打磨 测试计划（TEST-PLAN）

> 状态：六维度审计完成 | 日期：2026-08-21 | 基线：28372e2（V4.0.9）
> 配套：PRD-v4.1-4.5-优化打磨.md | DEV-PLAN-v4.1-4.5-优化打磨.md

## 1. 测试策略总纲
- TDD 四步每任务（先写失败测试 → 实现 → 全绿）
- 前端冒烟 0 pageerror 为金标准（登录 admin/admin → 逐页走查 → console 无 error）
- 每版本：全量 pytest 全绿 + 门禁测试 + tag + 双端部署后浏览器复验
- **新增三类门禁守护测试**纳入 CI：安全鉴权覆盖 / 令牌完整性 / 三向注入一致性

## 2. V4.1 安全测试
| # | 测试 | 断言 | 文件 |
|---|---|---|---|
| T-1.1 | 敏感端点无鉴权 → 401 | 遍历匿名端点清单 POST/GET 均 401 | tests/test_no_unauthed_sensitive.py（新门禁） |
| T-1.2 | setup 加固 | 已初始化后匿名 complete 401；密码<8 拒绝 | tests/test_setup_wizard.py |
| T-1.3 | base_url 白名单 | 内网/非 https/未知域名拒绝；预置厂商放行 | tests/test_ai_ssrf.py |
| T-1.4 | data-refresh 鉴权 | 匿名 401；并发拉取互斥 | tests/test_data_refresh_auth.py |
| T-1.5 | guest 门禁 | guest 调付费 AI/备份/导出 → 403 | tests/test_guest_gate.py |
| T-1.6 | openapi IDOR | 普通 Key 指定他人 user → 403/脱敏 | tests/test_openapi_idor.py |
| T-1.7 | JWT 会话 | 降权/改密后旧 token 立即失效 | tests/test_jwt_session.py |
| T-1.8 | 口令策略 | 默认口令启动告警；KEY_VIEW_PASSWORD 未配置拒绝查看 | tests/test_password_policy.py |
| T-1.9 | 限流实化 | 代理链 IP 解析；账号级锁定退避 | tests/test_rate_limit_abuse.py |
| T-1.10 | 泄露收敛 | feedback/metrics/500/webhook secret/user config 脱敏断言 | tests/test_info_leak.py |
| T-1.11 | 审计补全 | 改密/用户管理/配置变更有审计记录 | tests/test_audit_coverage.py |

## 3. V4.2 逻辑测试
| # | 测试 | 断言 | 文件 |
|---|---|---|---|
| T-2.1 | 三向注入一致性 | 域导出 ⊆ qcState ⊇ 模板引用（集合断言，替换数量断言） | tests/test_frontend_consistency.py 升级 |
| T-2.2 | WS 握手 | 带 token 升级成功；匿名 401/403 | tests/test_market_ws.py |
| T-2.3 | 异步边界 | 慢源下 health/其他 API 不排队超时 | tests/test_async_blocks.py |
| T-2.4 | 竞态保护 | 连开两股返回正确匹配 | tests/test_stock_detail_race.py |
| T-2.5 | 空态健壮 | 缺字段不渲染 NaN%/不抛错 | tests/test_frontend_consistency.py 扩展 |
| T-2.6 | 凭证纪律 | 登出后无 token 残留 | tests/test_auth_logout.py |

## 4. V4.3 效率测试
| # | 测试 | 断言 | 文件 |
|---|---|---|---|
| T-3.1 | 年视图延迟 | /api/view/year 热/冷均 <100ms（超时断言） | tests/test_view_year_perf.py |
| T-3.2 | reload 异步 | reload 请求即时返回；数据双缓冲原子替换 | tests/test_reload_async.py |
| T-3.3 | 冷 merrill 预热 | 每日首访不阻塞（预热任务/异步） | tests/test_merrill_prewarm.py |
| T-3.4 | 请求去重 | 同会话 view/day 不重复；未登录少发业务请求 | tests/e2e/test_request_dedup.py |
| T-3.5 | 轮询可见性 | document.hidden 时暂停轮询 | tests/e2e/test_poll_visibility.py |
| T-3.6 | 静态体积 | 首屏脚本数 ≤12；CSS gzip 后 <100KB（基线对比） | tests/e2e/test_bundle_size.py |

## 5. V4.4 体验测试
| # | 测试 | 断言 | 文件 |
|---|---|---|---|
| T-4.1 | 令牌完整性门禁 | 全前端 var(--x) 引用均有定义 | tests/test_tokens_defined.py（新门禁） |
| T-4.2 | dark 令牌层 | dark-pro 无未定义令牌；!important 数下降 | tests/test_tokens_no_hardcode.py 扩展 |
| T-4.3 | 对比度 | 关键对 WCAG 达标（抽样断言） | tests/test_contrast_wcag.py |
| T-4.4 | 主题收敛 | 7 主题渲染无回归（逐主题冒烟） | tests/e2e/test_themes_smoke.py |
| T-4.5 | 空态崩溃 | research-page 未选策略不抛错；全页空态 | tests/test_frontend_consistency.py 扩展 |

## 6. V4.5 便捷与收尾测试
| # | 测试 | 断言 | 文件 |
|---|---|---|---|
| T-5.1 | 入口可达 | 美林时钟独立入口可达；配置就近 | tests/e2e/test_nav_flow.py |
| T-5.2 | 交互即时 | 慢接口弹窗立即响应（异步填充） | tests/e2e/test_interaction_feedback.py |
| T-5.3 | 按钮反馈 | 关键按钮点击均有响应 | tests/e2e/test_button_feedback.py |
| T-5.4 | 版本一致性 | tag 与 APP_VERSION 一致（CI gate） | tests/test_version_gate.py |
| T-5.5 | 文档同步 | 三文档状态列与实现一致 | tests/test_docs_consistency.py |

## 7. 每版本出口（E2E）
- 全量 pytest 全绿（含门禁）
- 前端冒烟 0 pageerror（双主题）
- CI success（tag 触发）
- 双端健康 + 浏览器复验（登录/时间轴/日历/系统页）
- 每版本发布后：安全 P0 端点实测 401（V4.1）；年视图 <100ms（V4.3）

## 8. 测试环境与限制
- 本机 python3（pytest）+ Playwright Chrome（executable_path=/home/evergreen/.agent-browser/browsers/chrome-150.0.7871.46/chrome）
- 视觉后端不可用期间：视觉断言用 computed-style/getBoundingClientRect/对比度计算替代；截图存档待补审
- ops:8000 复跑 #WS（V4.2）与 #注入（V4.2）核查
