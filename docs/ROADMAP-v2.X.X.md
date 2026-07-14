# 量化选股日历 v2.X.X — 开发路线图

> **基线版本**: v2.0.0 | **编制日期**: 2026-07-14 | **编制依据**: 代码库全面审计

---

## 路线概览

```
              v2.0.0               v2.1.0                v2.2.0                v2.3.0                v2.4.0
              [当前]             [稳定加固]             [体验升级]            [智能化增强]          [协作+企业]
                │                    │                     │                     │                     │
           决策仪表盘          ✅ 安全加固            ✅ 组件化拆分         ✅ AI流式输出         ✅ 审计日志
           信号归因            ✅ 测试覆盖            ✅ 样式迁移           ✅ 策略融合           ✅ 备份恢复
           狙击点              ✅ 死代码清理          ✅ 移动端优化         ✅ 并行评估           ✅ 权限细化
           仓位建议            ✅ CI/CD                ✅ Toast降噪          ✅ 净值对比            ✅ 消息交互
           策略预设            ✅ print→logger         ✅ Login去emoji        ✅ 自定义推送          ✅ JSON→SQLite(可选)
           阶段感知            ✅ Key加密              ✅ 骨架屏               ✅ 智能调仓
           历史对比            ✅ 登录限流              ✅ 错误友好化           ✅ K线缓存
           操作检查清单        ✅ 功能核实
```

---

## Phase 1: v2.1.0 — 稳定加固

**时间**: ~2-3 周 | **优先级**: 🔴 最高 | **目标**: 地基加固，消除技术债务

### Sprint 1.1: 安全加固 (Week 1)

| # | 任务 | 文件 | 估时 | 验证方式 |
|---|------|------|------|----------|
| 1.1.1 | API Key Fernet 加密存储 | `ai_evaluator.py`, `data_sources.py`, `data/ai_models.json` | 4h | 读写加密配置往返验证 |
| 1.1.2 | SECRET_KEY 持久化到 .env | `config.py:69-73` | 1h | 重启后 token 不失效 |
| 1.1.3 | 登录接口接入限流器 | `api/v1/auth.py` | 1h | curl 快速连续请求触发 429 |
| 1.1.4 | CSP 从 Report-Only 切为 Enforce | `main_new.py:74` | 1h | 浏览器 DevTools 确认无 CSP 违规 |
| 1.1.5 | .env 权限 600 + .gitignore 确认 | 根目录 | 0.5h | `ls -la` + `git check-ignore` |

**Sprint 1.1 交付**: 安全扫描零高危 + 密钥不落地明文文件

### Sprint 1.2: 功能核实 (Week 1)

| # | 任务 | 文件 | 估时 | 验证方式 |
|---|------|------|------|----------|
| 1.2.1 | v2.0.0 新功能后端逐项核实 | 核实 dashboard, signal, sniper 等 | 3h | 每个功能 API 返回真实数据 |
| 1.2.2 | 修复发现的 gap | 依核实结果 | 4h | 功能列表 ↔ API 一一对应 |
| 1.2.3 | 统一 print → logger | `views_aggregator.py`, `feishu_push.py`, `ai_config_persist.py` | 1h | `grep -rn 'print(' backend/` 仅剩 test |
| 1.2.4 | 裸 except 全部加日志 | `ai_evaluator.py` (15处), `backtest.py`, `views_aggregator.py` | 2h | grep `except:` 无裸 except |
| 1.2.5 | 去重 `_is_index_code` | `market_data.py` + `data_sources.py` | 1h | 统一引用 data_sources 版本 |
| 1.2.6 | 移除死依赖 (apscheduler, sqlalchemy) | `requirements.txt`, `config.py:44` | 0.5h | `pip install` 无警告 |
| 1.2.7 | 清理前端 console.* | `index.html` 32处 | 1h | `grep -c 'console\\.' index.html` = 0 |
| 1.2.8 | dashboard 双模块合并 | `dashboard_api.py` → `api/v1/dashboard.py` | 2h | API 响应不变 |

**Sprint 1.2 交付**: v2.0.0 功能全部有后端支撑 + lint 零警告 + print 清零

### Sprint 1.3: 测试基础设施 — 第一阶段 (Week 2)

> 目标：核心模块测试覆盖率 > 40%，先覆盖关键路径。

| # | 任务 | 文件 | 估时 | 验证方式 |
|---|------|------|------|----------|
| 1.3.1 | conftest.py 补全 fixtures | `tests/conftest.py` | 1h | 提供 mock_settings, test_app |
| 1.3.2 | `test_data_parser.py` — CSV 解析测试 | 新建 | 3h | `pytest tests/test_data_parser.py -v` |
| 1.3.3 | `test_ai_evaluator.py` — 评估引擎 mock 测试 | 新建 | 4h | mock LLM API, 验证评分逻辑 |
| 1.3.4 | `test_backtest.py` — 回测计算测试 | 新建 | 3h | 验证 Sharpe/MaxDD 计算 |

**Sprint 1.3 交付**: 核心模块测试覆盖率 > 40%

### Sprint 1.4: 测试 — 第二阶段 + CI/CD (Week 2-3)

| # | 任务 | 文件 | 估时 | 验证方式 |
|---|------|------|------|----------|
| 1.4.1 | `test_scheduler.py` — 调度逻辑单元测试 | 新建 | 3h | mock asyncio.sleep |
| 1.4.2 | `test_data_sources.py` — fallback 逻辑测试 | 新建 | 3h | mock 各数据源 |
| 1.4.3 | GitHub Actions CI workflow | `.github/workflows/ci.yml` | 2h | PR 自动触发 lint+test |

**Sprint 1.4 交付**: 核心模块测试覆盖率 > 70%（按 DEV-STANDARDS 模块分级目标） + CI 绿灯

### v2.1.0 收尾: Staging 验证 (Week 3)

| # | 任务 | 估时 |
|---|------|------|
| V1 | rsync → staging 部署 | 0.5h |
| V2 | 全功能冒烟测试（登录、日历、AI 评估、回测、飞书推送） | 2h |
| V3 | 安全扫描确认（密钥不落地明文） | 0.5h |
| V4 | bug 修复 | 按需 |

**v2.1.0 发布条件**: 安全零高危 + CI 绿灯 + 核心测试 >70% + staging 冒烟通过

---

## Phase 2: v2.2.0 — 体验升级

**时间**: ~8-10 周 | **优先级**: 🟠 高 | **目标**: 消除 534 处内联样式 + 109 处 toast + 移动端优化 + Vue SFC 组件化

### Sprint 2.1: 样式迁移 (Week 1-2)

| # | 任务 | 估时 |
|---|------|------|
| 2.1.1 | 审计全部内联样式，分类（布局/颜色/字体/间距） | 2h |
| 2.1.2 | 新建对应 CSS class 到 themes.css | 4h |
| 2.1.3 | 批量替换内联 style → class | 8h |
| 2.1.4 | 回归测试（4 主题逐个切） | 2h |

**验证**: `grep -c 'style="' index.html` 降至 < 50（仅剩 Vue 动态绑定必须的）

### Sprint 2.2: Toast 降噪 (Week 1-2)

| # | 任务 | 估时 |
|---|------|------|
| 2.2.1 | 审计 109 处 toast 调用（分类读取/写入/错误） | 1h |
| 2.2.2 | 读取操作 toast → 移除 | 2h |
| 2.2.3 | 写入操作 toast → 内联结果展示 | 3h |
| 2.2.4 | 错误保留 ElMessage.error（必要） | 0.5h |

**验证**: `grep -c 'ElMessage.success\|ElMessage.info\|ElMessage.warning' index.html` 降至 < 15

### Sprint 2.3: 移动端 + UX 增强 (Week 2-3)

| # | 任务 | 估时 |
|---|------|------|
| 2.3.1 | 加载骨架屏（策略总览/日历/AI评估） | 4h |
| 2.3.2 | 移动端表格 → 响应式卡片 | 6h |
| 2.3.3 | 二级导航 tab localStorage 记忆 | 1h |
| 2.3.4 | 统一错误码（`ERROR_CODES` 常量） | 2h |
| 2.3.5 | 登录页去 emoji（保留功能图标） | 0.5h |

### Sprint 2.4: 前端组件化 (Week 3-6) — v2.2 重头戏

| # | 任务 | 估时 |
|---|------|------|
| 2.4.1 | 搭建 Vue SFC 构建环境 (Vite) | 4h |
| 2.4.2 | 拆分 LoginPage.vue | 2h |
| 2.4.3 | 拆分 Sidebar.vue + GlobalHeader.vue | 3h |
| 2.4.4 | 拆分 StrategyOverview.vue | 4h |
| 2.4.5 | 拆分 MerrillClock.vue | 3h |
| 2.4.6 | 拆分 Calendar (4 子页).vue | 6h |
| 2.4.7 | 拆分 AIEvaluation.vue | 4h |
| 2.4.8 | 拆分 BacktestPanel.vue | 3h |
| 2.4.9 | 拆分 SystemConfig.vue | 3h |
| 2.4.10 | 拆分 UserManagement / Watchlist / SearchBar | 3h |
| 2.4.11 | composables 抽取 (useAuth, useTheme, useApi, useCalendar) | 4h |
| 2.4.12 | 集成测试 + 主题回归 | 4h |

**Sprint 2.4 交付**: 每个组件 < 500 行，可独立开发/测试。过渡期 index.html 与 Vue SFC 并行可用。

### v2.2.0 收尾: Staging 验证 (Week 9-10)

| # | 任务 | 估时 |
|---|------|------|
| V1 | rsync → staging 部署 | 0.5h |
| V2 | 全功能冒烟 + 移动端实测 + 4 主题切换回归 | 3h |
| V3 | 验证: `grep -c 'style="' index.html` < 50 | 0.5h |
| V4 | 验证: `grep -c 'ElMessage.success' index.html` < 15 | 0.5h |
| V5 | bug 修复 | 按需 |

**v2.2.0 发布条件**: 内联样式 <50 + toast <15 + 移动端适配通过 + 组件化拆分完成

---

## Phase 3: v2.3.0 — 智能化增强

**时间**: ~4 周 | **优先级**: 🟡 中 | **目标**: AI 评估升级 + 策略引擎增强

| # | 任务 | 估时 |
|---|------|------|
| 3.1 | AI 评估 SSE 流式输出（前端打字机效果） | 6h |
| 3.2 | AI 多模型并行评估 + 结果融合策略 | 8h |
| 3.3 | v2.0.0 仪表盘决策卡片完善（信号归因可视化） | 8h |
| 3.4 | 多策略净值曲线叠加对比图 | 4h |
| 3.5 | 策略信号自定义推送配置页 | 4h |
| 3.6 | AI 智能调仓建议（基于回测最优 + AI 定性） | 8h |
| 3.7 | K 线数据按 ts_code + period 分层缓存 | 4h |
| 3.8 | 文件监听从 60s 轮询 → inotify | 2h |

### v2.3.0 收尾: Staging 验证 (最后 1 周)

| # | 任务 | 估时 |
|---|------|------|
| V1 | rsync → staging 部署 | 0.5h |
| V2 | AI 评估流式输出 + 并行评估功能测试 | 2h |
| V3 | 回测对比视图 + 自定义推送端到端测试 | 2h |
| V4 | bug 修复 | 按需 |

**v2.3.0 发布条件**: AI 流式 + 并行评估可用 + 回测对比正常 + staging 验证通过

---

## Phase 4: v2.4.0 — 协作与企业

**时间**: ~4 周 | **优先级**: 🟢 中低 | **目标**: 多用户场景增强

| # | 任务 | 估时 |
|---|------|------|
| 4.1 | 飞书消息卡片增加按钮交互（一键查看/刷新） | 4h |
| 4.2 | 完整数据备份/恢复功能（含 AI 历史） | 4h |
| 4.3 | 操作审计日志（谁/何时/做了什么） | 4h |
| 4.4 | 用户权限细化到列级别 | 6h |
| 4.5 | API 文档完善（描述、示例、错误码） | 2h |
| 4.6 | JSON 文件 → SQLite 迁移工具（可选） | 8h |

### v2.4.0 收尾: Staging 验证 (最后 1 周)

| # | 任务 | 估时 |
|---|------|------|
| V1 | rsync → staging 部署 | 0.5h |
| V2 | 多用户权限 + 审计日志端到端测试 | 2h |
| V3 | 数据备份/恢复往返测试 | 1h |
| V4 | bug 修复 | 按需 |

**v2.4.0 发布条件**: 权限细化可用 + 审计日志正常 + 备份恢复验证 + staging 通过

---

## 跨版本持续任务

以下任务不限于某一版本，持续进行：

| 任务 | 频率 | 负责人 |
|------|------|--------|
| 依赖安全扫描 (pip-audit) | 每次 PR | CI |
| ruff lint 零警告 | 每次 commit | pre-commit |
| 测试覆盖率不降 | 每次 PR | CI |
| API 文档同步更新 | 每次 API 变更 | 开发者 |
| 用户手册/README 同步 | 每个版本发布 | 发布者 |

---

## 里程碑定义

| 里程碑 | 完成标志 | 预计日期 |
|--------|----------|----------|
| **M1: 安全基线达标** | 零高危漏洞 + Key 加密 + CI 就绪 | v2.1.0 发布 |
| **M2: 代码质量基线** | 核心模块测试 >70% + lint 零警告 | v2.1.0 发布 |
| **M3: 体验现代化** | 内联样式 <50 + toast <15 + 移动端适配 | v2.2.0 发布 |
| **M4: 前端架构升级** | Vue SFC 组件化拆分完成 | v2.2.0 发布 |
| **M5: AI 升级** | 流式输出 + 并行评估 + 智能调仓 | v2.3.0 发布 |
| **M6: 企业级特性** | 审计日志 + 备份恢复 + 权限细化 | v2.4.0 发布 |

---

## 风险与依赖

| 风险 | 影响 | 缓解措施 |
|------|------|----------|
| 前端组件化时 SPA 蓝屏 | 阻塞 v2.2.0 | 分步迁移，每步保留可运行版本 |
| Tushare/sxsc API 变动 | 数据源异常 | 三源 fallback 已就位，akshare 兜底 |
| DeepSeek API 弃用模型 | AI 评估不可用 | 多模型配置，快速切换 |
| 用户配置 JSON 结构变更 | 升级后数据不兼容 | schema 版本号 + 自动迁移 |

---

*本路线图按优先级排列，v2.1.0（安全+测试）为强制先行版本，后续版本可按实际情况调整顺序和范围。*
