# 量化选股日历 6.1.X 开发 & 测试计划（DEV&TEST-PLAN 6.1.x）

- **文档版本**：v1.1（决策锁定版，2026-09-21 向导问卷 5 项确认）
- **日期**：2026-09-21
- **产品基线**：master `a0b995a5`（V6.11.4，APP_VERSION 5.12.2）
- **配套**：PRD-6.1.X.md（产品需求，独立文档）
- **决策锁定**：批次划分认可 / 目标值全部认可 / B3·C5·F5 三项纳入 / 全新 v6.1.0 tag 线 / 晨晚报站内+飞书双通道
- **开发纪律**：TDD 四步（先写失败测试 → 实现 → 跑绿 → commit）；Conventional Commits + `6.1.N` 前缀；前端改动后 `vite build` + `test_frontend_consistency`；每版本独立可发布
- **版本门禁**：6.1.0 起统一版本单一来源（APP_VERSION / tag / README / HANDOVER / 提交前缀）

---

## 0. 基线事实（2026-09-21 实测口径）

| 项 | 值 |
|---|---|
| 全量测试 | **3361 passed / 0 failed**（-m "not e2e"，V6.11.4 基线） |
| 运行期配色门禁 | `tests/color_probe.js` + `color_gate.py`：14 套 × 36 项契约 + DOM 审计（`e2e/color_audit.py`） |
| 专项门禁 | 偏好链路（`preferences_probe.js` + `theme_persistence.py`）、美林阶段带（`merrill_band_gate.py`）、token（悬空引用 0/死 token 4 白名单） |
| 双端运行 | dev(:8001) / ops(:8000) systemd 用户服务；ops 经 fetch+ff-only 同步 |
| 前端构建 | Vite 构建，dist 入库；业务 JS 全打进 `dist/assets/index-<hash>.js`，改动必须重建 |
| 已知技术债 | 版本编号三处不一致（见 PRD §1.3）；死 token 4；残留 `!important` 与硬编码色（口径内清零）；`themes.css` 约 5000 行（**不拆分**，沿用既有决策）；jobs_queue 偶发顺序敏感失败 |

---

## 1. 版本与任务分解（T-6.1.x.y）

> 任务编号规则 `T-6.1.<版本>.<序号>`；估时为规划估计（人日），评审可调整。

### 1.1 v6.1.0 治理基座（G1/G2/G3 基础，约 5-6 人日）

| 任务 | 内容 | 涉及文件（规划期估计） | 估时 |
|---|---|---|---|
| T-6.1.0.1 | **版本治理统一**：APP_VERSION → 6.1.0；`bump_version` 脚本（改 APP_VERSION + 校验 README/HANDOVER 同步）；CI 版本门禁（APP_VERSION 与最近 tag 对应） | backend/main_new.py、README.md、docs/HANDOVER.md、scripts/、.github/workflows/ci.yml、tests/test_version_governance_610.py | 1.5d |
| T-6.1.0.2 | **死 token 清零**：4 个白名单死 token 转活或删除；全量死代码扫描（无引用 CSS 规则 / 无消费点 JS 导出） | frontend/css/tokens.css、frontend/js/*、tests/test_color_tokens.py | 1d |
| T-6.1.0.3 | **`!important` 与双源收敛**：残留 `!important` 直写规则收敛为变量驱动；CSS/JS 双源合并；硬编码色漏网补齐 | frontend/css/components.css、themes.css、tests/test_tokens_no_hardcode.py | 1d |
| T-6.1.0.4 | **视觉回归基线**：≥ 8 页 × 明暗 2 套截图基线入库 + diff 门禁（沿用 e2e_screenshot_diff 扩展） | tests/e2e/screenshot_diff.py、tests/、.github/workflows/ci.yml | 1d |
| T-6.1.0.5 | 孤儿定时器/导出清理（`timeSinceRefresh` 类无消费点项） | frontend/js/stock-pool.js、app-logic.js | 0.5d |

**出口**：全仓版本来源 5 处一致 = 6.1.0；死 token 0 / 悬空引用 0；视觉对拍绿；全量测试绿；tag v6.1.0 双端推送。

### 1.2 v6.1.1 易用性（A1-A5，约 7-8 人日）

| 任务 | 内容 | 涉及文件 | 估时 |
|---|---|---|---|
| T-6.1.1.1 | **术语体系**：后端词条接口 `/api/meta/glossary`（5 语 i18n）+ 前端问号图标组件 + 浮层 + 系统页术语表子页；i18n 缺词守卫扩展 | backend/api/v1/meta.py、frontend/js/glossary.js、components/、system-page.js、locales/* | 2d |
| T-6.1.1.2 | **引导二期**：onboarding 状态机扩展为 5 步 + 目标元素兜底 + 完成态持久化 + 帮助菜单重看 | frontend/js/onboarding*.js、app-logic.js | 1.5d |
| T-6.1.1.3 | **撤销体系**：软删标记 + 5s 撤销窗口 + toast 撤销按钮；覆盖 4 类批量删除 + 清空筛选 + 重置评估；确认弹窗补全 | backend/api/v1/（watchlist/eval/history）、frontend/js/components/、common/ | 2d |
| T-6.1.1.4 | **表单记忆**：评估/回测/研究三类表单参数记忆（成功提交后持久化，按用户隔离 + 版本失效标记） | frontend/js/ai-page.js、research-page.js、preferences.js | 1d |
| T-6.1.1.5 | **空错态巡检**：全子页巡检补全 + 巡检清单入库门禁 | 各 page 组件、empty-error.js、tests/ | 1d |

**出口**：词条 ≥ 60 × 5 语；引导 5 步走通 0 pageerror；撤销 6 类单测绿；表单记忆多用户隔离测试绿；tag v6.1.1。

### 1.3 v6.1.2 实用性（B1-B5，约 7-8 人日）

| 任务 | 内容 | 涉及文件 | 估时 |
|---|---|---|---|
| T-6.1.2.1 | **Excel 导出**：零依赖 .xlsx 最小实现 + 口径 sheet + 中文表头 + 日期戳文件名 + 异步导出（>10s 走 jobs 队列） | backend/report_export.py、api/v1/export.py、frontend/js/export*.js | 2d |
| T-6.1.2.2 | **批量导入导出**：代码列表四格式解析 + 逐行校验 + 失败行反馈 + 自选/持仓导入导出 | backend/api/v1/watchlist.py、frontend/js/watchlist.js、components/ | 1.5d |
| T-6.1.2.3 | **自选分组增强**：拖拽排序/重命名/跨组移动/颜色标记/展开记忆 | frontend/js/watchlist.js、components/、css | 1d |
| T-6.1.2.4 | **预警规则增强**：条件组合（AND/OR ≤3）+ 区间规则 + 6 类模板库 + 盘中合并推送 | backend/alert_rules.py、notify/、frontend/js/alerts*.js | 2d |
| T-6.1.2.5 | **数据新鲜度可视化**：数据源页每表五指标 + 过期标红 + 数据字典联动 | backend/api/v1/datasource.py、frontend/js/system-page.js | 1d |

**出口**：≥ 8 模块导出 .xlsx 可打开；四格式导入全通过 + 全量失败拒写；预警组合/模板/合并推送 e2e 绿；tag v6.1.2。

### 1.4 v6.1.3 界面美观（C1-C5，约 8-10 人日）

| 任务 | 内容 | 涉及文件 | 估时 |
|---|---|---|---|
| T-6.1.3.1 | **深色独立设计**：暗色专属 token 层 + EP 暗色变量全量接通 + 暗色阴影/浮层 + 暗色图表底色；契约先行（test_theme_contrast 扩展暗色契约） | frontend/css/tokens.css、themes.css、components.css、js/themes.js、tests/test_theme_contrast.py | 3d |
| T-6.1.3.2 | **图表体系收尾**：跨色相色板覆盖全量图表 + 涨跌填充随明暗 + tooltip 主题化 + 空值/异常标注 | frontend/js/echarts-theme.js、charts.js、各 page | 2d |
| T-6.1.3.3 | **动效打磨**：页面切换/列表入场/KPI 数字滚动 + `prefers-reduced-motion` 全站降级 | frontend/css/animations.css、components.css、app-logic.js | 1d |
| T-6.1.3.4 | **移动端 PWA 补强**：安装引导条 + 离线缓存策略 + 命中区 44px 巡检修复 | frontend/manifest.json、sw.js、responsive.css、mobile 门禁测试 | 1.5d |
| T-6.1.3.5 | 登录页/向导视觉升级（C5，已确认纳入） | frontend/css/login.css、src/、onboarding | 1d |

**出口**：暗色契约全绿（非文本 ≥3:1 / 文本 ≥4.5:1）；图表统一主题 0 处散落配置；减动效模式无动画残留；390px 命中区 0 处 <44px；tag v6.1.3。

### 1.5 v6.1.4 操作便捷（D1-D5，约 7-8 人日）

| 任务 | 内容 | 涉及文件 | 估时 |
|---|---|---|---|
| T-6.1.4.1 | **命令面板扩展**：命令注册表扩至 40+（全子页导航/高频动作/自选直达）+ 模糊匹配 + 历史 8 条 + 冲突检测 | frontend/js/command-panel*.js、app-logic/ | 2d |
| T-6.1.4.2 | **全局搜索跨实体**：6 类实体分组检索 + Top5 + 回车直达 + 超时降级 | frontend/js/search*.js、app-logic.js | 1.5d |
| T-6.1.4.3 | **批量操作补齐**：批量加入自选/批量删除（带撤销）/批量导出，统一 jobs 队列 | frontend/js/ai-page.js、watchlist.js、export.js、backend/jobs.py | 1.5d |
| T-6.1.4.4 | **右键菜单**：4 个高频列表行右键 + Shift+F10 + 移动端长按 + 边缘翻转 | frontend/js/components/context-menu.js、各 page | 1d |
| T-6.1.4.5 | **会话恢复**：页面/子页/筛选/滚动位置恢复（白名单 5 页，session+local 双层） | frontend/js/preferences.js、app-logic.js、各 page | 1d |

**出口**：命令 ≥ 40 且冲突 0；搜索 6 类实体 e2e 绿；右键菜单键盘可达；刷新恢复 5 页 0 pageerror；tag v6.1.4。

### 1.6 v6.1.5 运行效率（E1-E5，约 6-7 人日）

| 任务 | 内容 | 涉及文件 | 估时 |
|---|---|---|---|
| T-6.1.5.1 | **首屏性能**：关键路由预加载 + 懒加载细化 + 首屏内联关键样式 + LCP/体积双门禁入 CI | frontend/src/main.js、vite.config、index.html、tests/test_perf_gates.py | 1.5d |
| T-6.1.5.2 | **虚拟滚动推广**：5 个长列表接入既有 virtual-list + 帧率冒烟 | frontend/js/virtual-list*.js、各 page | 1d |
| T-6.1.5.3 | **后端热点优化**：慢查询审计 + 5 类热点接口索引/缓存/预聚合 + P95 基准入 CI | backend/db.py、api/v1/、tests/test_performance_api_v5310.py | 2d |
| T-6.1.5.4 | **前端开销收敛**：常驻定时器 ≤3 + 监听器泄漏审计 + 长会话 heap 冒烟 | frontend/js/*、tests/ | 1d |
| T-6.1.5.5 | **请求竞态治理**：stale guard + dedupe + abort 统一（搜索/筛选/图表/双栏） | frontend/js/request*.js、app-logic.js | 1d |

**出口**：dev 实测 LCP ≤ 2.5s（P95）；5 类接口 P95 ≤ 300ms；竞态冒烟 0 处旧响应覆盖；tag v6.1.5。

### 1.7 v6.1.6 智能化（F1-F5，约 7-8 人日）

| 任务 | 内容 | 涉及文件 | 估时 |
|---|---|---|---|
| T-6.1.6.1 | **评估结构化**：评估/问股 JSON 骨架（结论/依据/风险/评分/信号）+ 前端结构化渲染 + 原文切换 + 降级 | backend/ai_evaluator.py、ai_eval/*、frontend/js/ai-page.js、watchlist.js | 2d |
| T-6.1.6.2 | **胜率闭环**：提示词/模型版本维度命中率 + 推荐组合规则（纯函数）+ 每周趋势 | backend/eval_track.py、frontend/js/ai-page.js、charts.js | 1.5d |
| T-6.1.6.3 | **智能晨晚报**：scheduler 08:30/16:30 生成 + 数据源降级 + 失败重试 + 站内/飞书推送 | backend/market_review.py、scheduler.py、notify/、frontend/js/notifications*.js | 2d |
| T-6.1.6.4 | **问股上下文**：持仓/自选上下文 + 历史会话检索 + 数据时效标注 | backend/ai_evaluator.py、api/v1/chat*.py、frontend/js/ai-chat.js | 1d |
| T-6.1.6.5 | 入池/出池归因趋势（F5，已确认纳入） | backend/attribution*.py、frontend/js/strategies-page.js | 1d |

**出口**：JSON 骨架解析率 ≥ 95%（mock 测试）；推荐规则单测绿；晨晚报调度测试 + 手动触发验证 + 推送可达；tag v6.1.6。

### 1.8 v6.1.7 工程与运维收尾（G4/G5 + 全系列回归，约 5-6 人日）

| 任务 | 内容 | 涉及文件 | 估时 |
|---|---|---|---|
| T-6.1.7.1 | **运维增强**：备份自动验证 + 演练脚本化 + 健康面板三块状态 + 日志轮转巡检 | backend/reliability.py、backup*.py、metrics.py、scripts/ | 1.5d |
| T-6.1.7.2 | **架构优化**：前端 state 按域拆分（theme/auth/prefs/ui/page，兼容入口）+ jobs 队列治理（幂等/优先级/取消） | frontend/js/app-logic/*、backend/jobs.py、tests/ | 2d |
| T-6.1.7.3 | 行为对拍门禁（state 拆分不改变行为） | tests/test_behavior_parity_617.py | 0.5d |
| T-6.1.7.4 | **全系列回归**：6.1.0-6.1.6 门禁全量复跑 + 双端冒烟 + 发布链演练 | tests/、scripts/ | 1d |

**出口**：运维四项能力可用且有测试；state 拆分全量绿 + 行为对拍绿；全系列门禁绿；tag v6.1.7。

---

## 2. 技术方案要点

### 2.1 版本治理（G1）
单一来源 `APP_VERSION`；`bump_version` 脚本扫描 5 类来源（main_new.py / 最近 tag / README 版本行 / HANDOVER 里程碑表 / 提交前缀）并同步；CI 在 push 时校验「最近 tag = APP_VERSION 对应 6.1.N」；pre-push 门禁追加版本一致性检查（沿用既有 prepush gate 模式）。

### 2.2 撤销体系（A3）
数据模型加 `deleted_at`（软删）+ 删除接口二阶段（软删 → 5s 后硬删，撤销取消硬删）。影响表：watchlist 条目、评估记录、分组。前端统一 `useUndoable(action)` 封装（确认 → 执行 → toast 撤销 → 回滚）。

### 2.3 深色独立设计（C1）
暗色专属语义 token 层 `--qc-dark-*` 在 `themes.js applyTheme` 内联注入（沿用运行期单一权威）；EP 暗色变量桥补齐清单以扫描门禁驱动（枚举 EP 组件默认值在暗色未覆盖 = 0）。契约先行：`test_theme_contrast` 扩展暗色 36 项。

### 2.4 零依赖 .xlsx（B1）
最小 OOXML 实现（`[Content_Types].xml` + `xl/workbook.xml` + `xl/worksheets/sheetN.xml` + sharedStrings 可选），UTF-8 + 中文表头；超过 10 万行分片；生成任务 > 10s 走 jobs 队列。

### 2.5 晨晚报（F3）
复用 `market_review` 的复盘结构化能力 + `scheduler` 定时 + `event_bus` 事件；模板兜底（AI 失败时用规则拼接摘要）；推送走既有通知引擎（站内 + 飞书通道）。

### 2.6 请求竞态（E5）
前端统一请求层封装：`stale guard`（响应带 reqId，过期丢弃）+ `dedupe`（相同 key 合并）+ `AbortController` 取消；接入全局搜索/列表筛选/图表/双栏切换。

---

## 3. 测试计划

### 3.1 回归基线（每个版本必过）
- `pytest -m "not e2e"` 全量 0 failed（新增用例计入规模 ≥ 3600）
- 运行期配色门禁：14 套 × 36 项契约 + DOM 审计 0 处
- 令牌/间距/排版/动效/阴影/无内联样式/版本纪律门禁全绿
- `test_frontend_consistency` 金标准绿
- 双端（dev/ops）冒烟：T48 导航 0 pageerror + 关键路径 17/17

### 3.2 新增门禁（按版本落点）

| 门禁 | 覆盖 | 版本 |
|---|---|---|
| `test_version_governance_610.py` | 版本来源一致性 5 处 + bump 脚本 | 6.1.0 |
| `test_glossary_i18n.py` | 词条 ≥ 60 × 5 语缺词守卫 | 6.1.1 |
| `test_undo_flow.py` | 4 类删除 + 清空筛选 + 重置评估的撤销窗口/回滚 | 6.1.1 |
| `test_form_memory.py` | 三类表单记忆 + 多用户隔离 + 版本失效 | 6.1.1 |
| `test_excel_export.py` | .xlsx 结构/中文表头/口径 sheet/分片 | 6.1.2 |
| `test_import_parse.py` | 四格式解析 + 失败行 + 全量失败拒写 | 6.1.2 |
| `test_alert_combo.py` | 条件组合/区间规则/模板套用/合并推送 | 6.1.2 |
| `test_group_manage.py` | 分组拖拽/重命名/跨组移动/颜色/删除并入默认组 | 6.1.2 |
| `test_theme_contrast.py`（扩展） | 暗色契约（非文本 ≥3:1 / 文本 ≥4.5:1 / EP 桥扫描 0 漏网） | 6.1.3 |
| `test_chart_theme_unify.py` | 全量图表统一主题 + 明暗正确 | 6.1.3 |
| `test_command_panel_610.py` | 命令 ≥ 40 / 模糊匹配 / 历史 / 冲突 0 | 6.1.4 |
| `test_search_entities.py` | 6 类实体检索 + 降级路径 | 6.1.4 |
| `test_session_restore.py` | 5 页刷新恢复 + 无重复请求 | 6.1.4 |
| `test_perf_gates.py`（扩展） | LCP ≤ 2.5s / 接口 P95 ≤ 300ms / 体积预算 | 6.1.5 |
| `test_race_guard.py` | 竞态冒烟 0 处旧响应覆盖 | 6.1.5 |
| `test_eval_structured.py` | JSON 骨架解析率 ≥ 95% + 降级 | 6.1.6 |
| `test_winrate_recommend.py` | 推荐组合纯函数 + 样本不足标注 | 6.1.6 |
| `test_daily_brief.py` | 晨晚报调度 + 降级 + 重试 + 推送（站内+飞书） | 6.1.6 |
| `test_attribution_trend.py` | 批次归因趋势 + 一致性提示 | 6.1.6 |
| `test_behavior_parity_617.py` | state 拆分行为对拍 | 6.1.7 |

### 3.3 e2e 与视觉
- 视觉回归：≥ 8 页 × 明暗 2 套基线入库（6.1.0），每版本 diff 守护
- 功能 e2e：导出导入 / 命令面板 / 会话恢复 / 晨晚报触发（对应版本）
- 移动端：390px 命中区巡检 + 三任务链路回归（既有测试扩展）

### 3.4 性能基准
- 首屏：dev 实测 LCP（P95）预算 2.5s
- 接口：5 类热点 P95 ≤ 300ms（缓存命中口径）
- 列表：万行虚拟滚动帧率 ≥ 50fps 冒烟
- 长会话：30 分钟操作 heap 无持续增长

---

## 4. 发布与运维计划

### 4.1 版本流程（沿用既有发布链 + 6.1.X 治理）
1. `bump_version 6.1.N`（脚本：APP_VERSION + README 版本行 + HANDOVER 里程碑表）
2. 前端改动后 `vite build` + 全量回归 + 全部门禁
3. commit（前缀 `6.1.N`）+ tag `v6.1.N` + `git push origin master` + `git push origin v6.1.N` + `git push synology master --tags`
4. ops 双副本 ff-only 同步 + 重启 + 双端 curl /api/health 冒烟（版本 = 6.1.N）
5. （可选，用户授权后）`gh release create v6.1.N`

### 4.2 运维增强落点（6.1.7）
- 备份自动验证：备份后校验可打开 + 行数抽查，失败告警
- 演练脚本化：升级回滚演练一键执行 + 结果入库
- 健康面板：数据源/调度/告警通道三块状态 + 近 24h 告警汇总
- 日志轮转巡检纳入健康检查

### 4.3 风险预案
- 每版本独立可发布：任何 6.1.N 可单独回滚
- 债清理/深色改造：契约门禁先行 + 视觉对拍 + 每批独立提交
- 晨晚报/评估结构化：AI 依赖项全部带降级与重试

---

## 5. 风险与应对

| 风险 | 等级 | 应对 |
|---|---|---|
| 6.1.0 债清理视觉回归 | 中 | 视觉对拍 + 全量门禁 + 独立提交可回滚 |
| C1 深色改造面大（EP 变量桥） | 中 | 扫描门禁驱动清单 + 分批落地 + 每批实测 |
| B1 xlsx 零依赖兼容性 | 中 | 最小实现先行验证 Excel/WPS 再扩展 |
| F3 晨晚报依赖 AI/数据源 | 中 | 模板兜底 + 降级 + 重试 1 次 |
| G5 state 拆分回归 | 中 | 行为对拍门禁 + 兼容入口 |
| jobs_queue 历史偶发失败 | 低 | 全量顺序敏感已知，单独跑绿不阻塞 |

---

## 6. 里程碑时间线

| 版本 | 主题 | 依赖 | 出口判据（摘要） |
|---|---|---|---|
| 6.1.0 | 治理基座 | — | 版本统一 6.1.0；债清理；视觉基线 |
| 6.1.1 | 易用性 | 6.1.0 | 术语 60×5；引导 5 步；撤销 6 类 |
| 6.1.2 | 实用性 | 6.1.1 | xlsx 8 模块；四格式导入；预警组合 |
| 6.1.3 | 界面美观 | 6.1.2 | 暗色契约全绿；图表统一；命中区 44px |
| 6.1.4 | 操作便捷 | 6.1.3 | 命令 40+；搜索 6 类；会话恢复 |
| 6.1.5 | 运行效率 | 6.1.4 | LCP/接口 P95 达标；竞态 0 |
| 6.1.6 | 智能化 | 6.1.5 | 结构化 ≥95%；晨晚报；模型推荐 |
| 6.1.7 | 工程收尾 | 全部 | 运维四项；state 拆分对拍；全系列回归 |

---

*本计划仅为规划，未修改任何代码；待 PRD 评审批准后按 T-6.1.x.y 逐项启动 TDD 开发。*
