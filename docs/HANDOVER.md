# 量化选股日历 — 交接文档 (HANDOVER)

> 最后更新: 2026-08-21 (V4.6.0)
> 当前状态: **v4.6.0 已发布**, 三端一致(GitHub=群辉=ops), 全量测试 1011 用例全绿

---

## 1. 项目概况

面向 A 股的量化决策辅助工具：**美林时钟(宏观周期) × 多策略选股(4 内置策略) × AI 评估(多模型串行)**，结果集中在日历界面。

- 技术栈: FastAPI + SQLite(WAL) + Python 3.14 / Vue 3 SPA(Vite 构建) / Element Plus / ECharts
- 数据源: sxsc-tushare → tushare → akshare 三源热备
- 部署: 双环境(dev/ops) + GitHub + 群辉 NAS Git + Docker(ghcr.io)

## 2. 版本里程碑 (V4.0-V4.6 全部完成)

| 版本 | 主题 | 关键成果 | tag |
|---|---|---|---|
| v4.0.x | 完全体平台 | 策略平台/完全体闭环/开放平台/时间轴重设计 | v4.0.0 |
| v4.1.0 | 安全加固 | 敏感端点 deny-by-default / SSRF / JWT 会话 / 口令策略 / 限流实化 | v4.1.0 |
| v4.2.0 | 逻辑通畅 | ops 注入复活 / WS 依赖 / 竞态保护 / 登出双清 / 侧栏持久化 | v4.2.0 |
| v4.3.0 | 首屏分包 | Vite 构建层 / 页面懒加载(577→367KB) / dist 入库 | v4.3.0 |
| v4.4.0 | 体验筑基 | 令牌体系门禁 / dark 令牌层 / WCAG 对比度 / 主题收敛 / 可访问性 | v4.4.0 |
| v4.5.0 | 便捷收尾 | 美林快捷入口 / 登录并行 / 按钮反馈 / ai_models 拆分 / CI gate / 流程脚本 | v4.5.0 |
| v4.6.0 | 美术打磨 | 间距 4px 网格 / 动效统一 / 排版令牌化 / 配色门禁 / 图标系统回归 | v4.6.0 |

当前 master: **c5a7e2c** (v4.6.0)

## 3. 环境拓扑与同步

| 环境 | 路径 | 说明 |
|---|---|---|
| dev | /home/evergreen/dsh-workspace/quant-calendar-dev | 唯一 git 操作点 (:8001) |
| ops | /home/evergreen/dsh-workspace/quant-calendar-ops | 生产 (:8000), fetch+reset 同步 |
| GitHub | origin: bangbang8000-cell/quant-calendar | 代理绕过: git -c http.proxy= -c https.proxy= push |
| 群辉 | synology: ssh://evergreenzhou@192.168.1.2/.../quant-calendar.git | 局域网 ssh (GIT_SSH_COMMAND 绕 config) |

同步链: push GitHub → ops reset → push 群辉 (git push synology master --tags)

## 4. 文档索引 (docs/ 当前 7 份 + archive)

| 文档 | 说明 |
|---|---|
| PRD-v4.1-4.5-优化打磨.md | 产品需求(含 V4.1-V4.6 增量能力清单) |
| DEV-PLAN-v4.1-4.5-优化打磨.md | 开发计划(51 任务全部完成 + V4.6 段) |
| TEST-PLAN-v4.1-4.5-优化打磨.md | 测试计划 |
| UI-ASSESSMENT-V4.6.md | UI 全面评估报告 + 优化计划 |
| HANDOVER.md | 本交接文档 |
| DESIGN-SYSTEM.md | 设计系统 |
| component-contract.md | 组件契约 |

> docs/archive/ 存 35 份旧版本文档(本地保留, gitignore 不同步 GitHub)

## 5. 关键技术要点

### 5.1 开发流程 (TDD 纪律)
1. 先写门禁测试 → 跑红 → 改源码 → 跑绿
2. 前端改动: cd frontend && npx vite build (npm_config_cache 指向 workspace)
3. 重启双端: bash /home/evergreen/dsh-workspace/restart_ws2.sh (PYTHONPATH 前缀 qc_ws_pkgs)
4. 浏览器强刷(Ctrl+Shift+R) + 冒烟 0 pageerror
5. 全量回归: pytest -q -m 'not e2e' (1011 用例)

### 5.2 发布流程
1. bump APP_VERSION (backend/main_new.py)
2. vite build + 全量回归
3. commit + tag vX.Y.Z + push origin (代理绕过) + push synology
4. ops: fetch + reset --hard origin/master
5. 重启双端 + 双主题冒烟

### 5.3 已知事项
- 沙箱: ~/.local 只读 → WS 依赖 qc_ws_pkgs(workspace) + UV_CACHE_DIR 重定向
- urllib 沙箱内 502(环境问题), 验证用 curl
- write 工具反斜杠引号和反斜杠 n 转义会破坏 python 字符串 → 用 chr(34)/chr(10) 或 heredoc
- run_code 的 bash 模板字符串禁美元花括号插值 → 反斜杠美元花括号转义
- 前端源码改动必须 vite build(后端 serve dist/), 勿直接改 dist
- admin 默认口令 admin/admin123(私域部署, 未轮换; 启动自检告警为提示)

## 6. 测试体系 (1011 用例)

- 门禁测试: test_tokens_defined / test_contrast / test_accessibility / test_spacing_grid / test_transition_tokens / test_typography / test_theme_contrast / test_tokens_no_hardcode / test_no_unauthed_sensitive
- 功能测试: 策略/日历/AI/美林/开放平台/回测/数据源 全覆盖
- 前端一致性: test_frontend_consistency(令牌/类定义/注入/i18n)

## 7. 下一步 / 待办

- [ ] 后续维护按需(用户新需求时)
- [ ] 观察引擎 20:00 持续产持仓(日历 overlay 数据)
- [ ] 如启用公网: 轮换 admin 密码 + 密钥加固
- [ ] 新版本发布后: push 群辉 + SKILL §7 快照更新
