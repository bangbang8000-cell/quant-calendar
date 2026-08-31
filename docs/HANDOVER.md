# 量化选股日历 — 交接文档 (HANDOVER)

> 最后更新: 2026-08-25 (V4.7.1)
> 当前状态: **v4.7.1 已发布**, 三端一致(GitHub=群辉=ops), 全量测试 1028 用例全绿

---

## 1. 项目概况

面向 A 股的量化决策辅助工具：**美林时钟(宏观周期) × 多策略选股(4 内置策略) × AI 评估(多模型串行)**，结果集中在日历界面。

- 技术栈: FastAPI + SQLite(WAL) + Python 3.14 / Vue 3 SPA(Vite 构建) / Element Plus / ECharts
- 数据源: sxsc-tushare → tushare → akshare 三源热备
- 部署: 双环境(dev/ops) + GitHub + 群辉 NAS Git + Docker(ghcr.io)

## 2. 版本里程碑 (V4.0-V4.7 全部完成)

| 版本 | 主题 | 关键成果 | tag |
|---|---|---|---|
| v4.0.x | 完全体平台 | 策略平台/完全体闭环/开放平台/时间轴重设计 | v4.0.0 |
| v4.1.0 | 安全加固 | 敏感端点 deny-by-default / SSRF / JWT 会话 / 口令策略 / 限流实化 | v4.1.0 |
| v4.2.0 | 逻辑通畅 | ops 注入复活 / WS 依赖 / 竞态保护 / 登出双清 / 侧栏持久化 | v4.2.0 |
| v4.3.0 | 首屏分包 | Vite 构建层 / 页面懒加载(577→367KB) / dist 入库 | v4.3.0 |
| v4.4.0 | 体验筑基 | 令牌体系门禁 / dark 令牌层 / WCAG 对比度 / 主题收敛 / 可访问性 | v4.4.0 |
| v4.5.0 | 便捷收尾 | 美林快捷入口 / 登录并行 / 按钮反馈 / ai_models 拆分 / CI gate / 流程脚本 | v4.5.0 |
| v4.6.0 | 美术打磨 | 间距 4px 网格 / 动效统一 / 排版令牌化 / 配色门禁 / 图标系统回归 | v4.6.0 |
| v4.7.0 | 数据真实化 | 选股池修复(引擎全市场批量取数, 08-18~24 从 8 只→83~88 只) / 年视图性能 32 倍提速(8.7s→0.27s) | v4.7.0 |

当前 master: **aad4f0c** (v4.7.0)

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

## 4.1 V4.7 增量能力 (2026-08-25)

| 模块 | 变更 | 收益 |
|---|---|---|
| data_sources | 按交易日全市场批量接口 daily/daily_basic/moneyflow (1 次调用 5500+ 只) | 引擎全市场取数 逐股 5500 次 → 每交易日 3 次 |
| data_portal | universe>500 走批量面板; net_mf_amount→main_net_inflow 映射; 日期归一 YYYYMMDD→YYYY-MM-DD | 全市场面板 600 只×6 天 15s |
| strategy_governance | 默认 universe=default→all (全市场 5530); 引擎持仓矩阵 8 列→5557 列 | 选股池真实轮动 |
| views_aggregator | 周期集合缓存 _period_set (calculate_status O(N×D)→O(N)); 年视图 out 限 200 只 | 年视图 8.7s/310KB → 0.27s/78KB (32 倍) |
| tests | +12 (test_batch_fetch / test_views_aggregator_v47) | 1023 用例全绿 |

**效果验证** (双端 ops/dev):
- 日视图选股池: 08-18/19/20/24 从固定 8 只 → 83/88/84/84 只 (每日不同, 真实轮动: 潍柴动力/广晟有色/中国宝安/平安银行等)
- 年视图: 8.7s → 0.27s, 310KB → 78KB, 400 只上限
- 数据: holdings 08-25 目录 4 策略 5557 列 × 42 天 (2026-06-26 ~ 08-24); qresult 同步至 09-07
- 08-25 日视图为 0 属正常: 最新行情到 08-24 (tushare 数据源)

### 4.2 V4.7.1 并发安全 (2026-08-25)

| 模块 | 变更 | 收益 |
|---|---|---|
| scheduler.strategy_run_task | run_strategy_once → asyncio.to_thread | 引擎全市场 4-8min 不再阻塞事件循环 (HTTP/WS/其他任务不受影响) |
| strategy_research.run-once API | gov.run_once → asyncio.to_thread | 手动触发同样不阻塞 |
| _write_holdings_matrix | 临时文件 + os.replace 原子重命名 | data_parser/file_watch 不会读到半截 CSV; .tmp 被 .csv 过滤天然排除 |
| save_state | 部分更新缺失 sid 合并现有 json | PUT 单策略不再把其余 universe 重置回 default |
| tests | +5 (原子写/并发读无半截/to_thread/部分更新) | 1028 用例全绿 |

**验证**: run-once 期间 health 2.7ms 响应 (不阻塞); 原子写并发读 10 轮无截断。

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
