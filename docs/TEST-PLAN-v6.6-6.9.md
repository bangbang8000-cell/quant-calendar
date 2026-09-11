# TEST-PLAN v6.6.X–v6.9.X：存量功能优化打磨阶段测试计划

> 版本：v1.0（整合版，待终审）
> 状态：待用户终审授权
> 创建日期：2026-09-11
> 需求来源：《PRD-v6.6-6.9.md》（含决策 D7 方案 A、D8 开放 API 暂不拆分）、《DEV-PLAN-v6.6-6.9.md》
> 前置：DEV-PLAN-v6.6-6.9.md（本计划独立可评审）

---

## 1 测试策略

| 层 | 手段 | 覆盖对象 |
|---|---|---|
| L1 门禁（静态/一致性） | pytest | emoji 扫描、token 引用计数、菜单契约、i18n 缺词、AppIcon 映射、暗色 token、SYSTEM_GROUPS 一致性 |
| L2 单元（纯函数） | pytest + node | 日历视图切换逻辑、hash 重定向、菜单过滤、策略管理状态归并、通知中心迁移、缓存键/TTL、限频调度 |
| L3 接口/集成 | pytest（mock 数据源） | 新增后端 API（导出/调用量/校准/检索/诊断）；既有模块不回归 |
| L4 性能 | pytest + e2e | 全市场执行时长、缓存命中率、首屏/滚动/体积预算 |
| L5 视觉回归 | 浏览器实测（桌面/移动/暗色截图 diff） | 关键页视觉一致性、菜单调整后布局、系统配置新结构、暗色可读性 |
| L6 回归 | 既有 V6.x 门禁 + 全量关键集 | 无新增失败 |

> 已知 pre-existing 失败：`test_transition_tokens.py::test_transition_uses_tokens_or_standard`（V6.0 有意设计冲突，不属于本阶段范围，回归记录注明即可）。

---

## 2 门禁清单（含新增）

| 门禁 | 阈值/要求 | 新增/既有 |
|---|---|---|
| 总覆盖率 | `--cov-fail-under=40` | 既有 |
| 分模块覆盖率（数据中台/回测/风险/RBAC/协作/迁移等） | ≥70% | 既有 |
| 性能门禁 | 执行时长/缓存命中率/体积预算（主逻辑 ≤80KB、JS ≤1.3MB）/虚拟滚动 | 既有 + 新增指标 |
| e2e 视觉门禁 | 关键页截图 diff ≤0.5%（6.8.X 起阻塞） | 新增（6.8.X） |
| i18n 缺词守卫 | 五语严格一一对应 | 既有 |
| PIT 防前视门禁 | end ≤ as_of 四路径 | 既有 |
| RBAC 矩阵门禁 | deny-by-default | 既有 |
| 版本纪律门禁 | tag v* 与 APP_VERSION 一致 | 既有 |
| **菜单契约门禁** | 菜单定义 ↔ 图标/i18n/页面分支/hash/组配置/SYSTEM_GROUPS 一致 | **新增（6.6.X）** |
| **缓存一致性门禁** | 缓存写入走 batch_id 血缘、lookahead_guard 校验、无旧数据污染 | **新增（6.8.X）** |
| **AI 护栏门禁** | 检索问答/校准/诊断覆盖事实校验路径 | **新增（6.9.X）** |

---

## 3 用例明细

### 3.1 6.6.X —— 美术收尾 + 信息架构重构 + 方案 A

#### 3.1.1 美术收尾回归（承接 PRD-v6.6）

| ID | 用例 | 预期 |
|---|---|---|
| TC-6.6.0.1 | 装饰性 emoji 残留扫描 | research/ai/calendar/focus/history/command/global-header + index.html 计数 = 0（语义白名单 ⭐☆✓✗● 保留） |
| TC-6.6.0.2 | AppIcon 非白名单 name | 渲染默认 `circle-dot`，模板无文本回退分支 |
| TC-6.6.0.3 | 暗色语义色/token | dark-pro 语义色对齐 `--el-*`；`--qc-muted-foreground` 提亮；弹窗/下拉实底 |
| TC-6.6.0.4 | 旧 token 引用下降 | themes.css 高频区块 `var(--font-`/`--sp-`/`--r-`/`--shadow-` 较基线下降 ≥60%；兼容层保留 |
| TC-6.6.0.5 | 视觉走查（桌面/移动/暗色） | 无 emoji 残留、图标统一、暗色可读、无布局回归 |

#### 3.1.2 菜单层重构（PRD F-6.6.7）

| ID | 用例 | 预期 |
|---|---|---|
| TC-6.6.1.1 | 组合持仓二级入口 | 智能评估菜单含「组合持仓」；`#ai/portfolio` 直达；刷新保持；guest 不可见（若组配置限制） |
| TC-6.6.1.2 | 日历视图合并 | 二级仅「量化日历」「股票池」；页内 4 视图切换正常；`#calendar/daily` 等旧深链重定向有效 |
| TC-6.6.1.3 | 执行看板归位 | 系统配置运行监控组含 execution；点击正常（strategies-page 挂载渲染） |
| TC-6.6.1.4 | 命名消歧 | 五语下「大盘行情」「每日复盘」显示正确；其他引用同步 |
| TC-6.6.1.5 | 策略管理合并 | 研究菜单含「策略管理」；页内可创建模板编辑/全新策略；`#research/strategy-write` 重定向；用户组配置不失效 |
| TC-6.6.1.6 | 菜单契约门禁 | 菜单定义/图标/i18n/页面分支/hash/组配置一致；缺漏即失败 |

#### 3.1.3 系统配置整改方案 A（PRD F-6.6.8）

| ID | 用例 | 预期 |
|---|---|---|
| TC-6.6.2.1 | 通知中心独立子页 | 平台设置组含「通知中心」；规则（增删改/启用）、投递历史、通道与静默三 Tab 功能完整；`#system/notification` 直达 |
| TC-6.6.2.2 | autoeval 收敛 | autoeval 显示「AI 服务」；仅含自动评估配置 + AI 模型管理 + 飞书推送；不再含通知中心块；`#system/autoeval` 深链可用 |
| TC-6.6.2.3 | usage 去重精简 | usage 无与 health/schedule/guard 重复整块；健康摘要条 4 项红黄绿点正确、跳转对应子页；资源监控/AI用量/页面热度保留 |
| TC-6.6.2.4 | 个性化归位 | 外观设置/语言/K线显示位于 feature「界面与个性化」；status 不再含三卡；Header 主题快捷入口正常 |
| TC-6.6.2.5 | 审计归位 + about 精简 | 操作审计位于 status（仅管理员可见）；about 无重复反馈入口；系统组件单行 |
| TC-6.6.2.6 | guard 归位 | 运行监控组含 guard；审计抽查功能完整 |
| TC-6.6.2.7 | 开放 API 保持 | 开放 API 仍在 user 子页；生成/吊销 Key 功能正常（决策 D8） |
| TC-6.6.2.8 | SYSTEM_GROUPS 一致性 | SYSTEM_GROUPS ↔ allMenuDefs system.subPages 一致（含 notification） |

#### 3.1.4 收尾

| ID | 用例 | 预期 |
|---|---|---|
| TC-6.6.3.1 | 三形态说明文案 | feature「界面与导航」三形态各有说明与示意；五语 |
| TC-6.6.3.2 | 回归 + 构建 | 既有 V6.x 门禁 + 关键集通过；`npm run build` 通过；`/api/health` version 6.6.1 |
| TC-6.6.3.3 | 视觉走查 | 桌面/移动/暗色下菜单调整各页 + 系统配置新结构无布局回归 |

### 3.2 6.7.X —— 易用性（TC-6.7x.Mx）

| ID | 用例 | 预期 |
|---|---|---|
| TC-6.7.1.1 | 导航形态双入口 | 配置页与 Header 均可切换三形态；默认 subnav 不变；切换持久化 |
| TC-6.7.1.2 | 全局搜索分组 | 输入「贵州」出股票组；「龙虎榜」出菜单组并可直达；「导出」出功能指令组 |
| TC-6.7.1.3 | 快捷键一致性 | 新增快捷键与帮助面板/命令面板注册一致（门禁守护） |
| TC-6.7.1.4 | 信息密度三档 | 紧凑/舒适/宽松联动 Sidebar/SubNav/卡片/表格行高；切换无回归 |
| TC-6.7.1.5 | 键盘导航 | ↑↓ 遍历一级+二级，Enter 进入；焦点可见 |
| TC-6.7.1.6 | 短线复盘分组 | 中栏视觉分组正确；移动端抽屉内短线复盘二级展开；key/顺序不变 |
| TC-6.7.1.7 | 引导增量 | 短线复盘/组合持仓引导 3 步可用；可跳过/重看 |
| TC-6.7.1.8 | 文案空态 | OBS-1 显示「下次自动更新」具体时间；OBS-4 toptab 无子页兜底；批量评估/导出空态区分失败/无数据 |

### 3.3 6.8.X —— 性能与实用性（TC-6.8x.Mx）

| ID | 用例 | 预期 |
|---|---|---|
| TC-6.8.1.1 | 全市场执行时长 | 实测 ≤3min（对比基线约 12min） |
| TC-6.8.1.2 | 缓存命中率 | ≥90%（计数器指标） |
| TC-6.8.1.3 | 缓存一致性 | 缓存写入含 batch_id；lookahead_guard 通过；停牌/复权/对齐规则生效；无旧数据污染 |
| TC-6.8.1.4 | 限频调度 | 配额受限时降速不雪崩；分片失败重试而非全量重跑 |
| TC-6.8.1.5 | 数据导出 XLSX | 中文表头/多表正确；CSV 不回归 |
| TC-6.8.1.6 | e2e 视觉门禁 | 关键页 diff ≤0.5%；豁免通道可用 |
| TC-6.8.1.7 | 调用量视图 | 展示积分消耗与预算；阈值告警触发 |
| TC-6.8.1.8 | akshare 决策闭环（D9：保持降级） | 无 `ModuleNotFoundError` 路径；降级说明可见；不引入 akshare 依赖 |

### 3.4 6.9.X —— 智能化与收尾（TC-6.9x.Mx）

| ID | 用例 | 预期 |
|---|---|---|
| TC-6.9.1.1 | 校准分析 | 校准曲线/分模型校准/过度自信诊断正确；样本 <50 提示「样本不足」；不改评估逻辑 |
| TC-6.9.1.2 | 检索问答护栏 | 检索+问答可用；事实护栏生效（无虚构引用、标注来源） |
| TC-6.9.1.3 | 持仓诊断 | 输出引用真实持仓与风险数据；建议可关闭 |
| TC-6.9.1.4 | 智能排序/提醒 | 排序/提醒可开关；不影响既有评估 |
| TC-6.9.1.5 | 无障碍门禁 | 全量评估无新增 A 级违规 |
| TC-6.9.1.6 | 全量回归 | 全绿；版本 6.9.0；文档同步 |

---

## 4 门禁运行命令

```bash
# 6.6.X 门禁（新增 + 既有）
.venv\Scripts\python.exe -m pytest tests/test_v66x_menu_contract.py tests/test_v66_m0_gates.py tests/test_v66_m2_tokens.py tests/test_v65_m2_icons.py -q

# 6.7.X 门禁（导航/搜索/密度/键盘）
.venv\Scripts\python.exe -m pytest tests/test_v67x_nav_usability.py tests/test_nav_mode_core.py tests/test_command_panel.py tests/test_i18n.py -q

# 6.8.X 门禁（性能/缓存/导出/视觉）
.venv\Scripts\python.exe -m pytest tests/test_v68x_cache.py tests/test_v68x_export.py tests/test_perf_gates.py tests/test_pit_no_lookahead.py tests/test_lookahead_guard.py tests/test_data_quality.py -q
.venv\Scripts\python.exe -m pytest tests/e2e/test_perf_e2e.py tests/e2e/visual_regression.py -q

# 6.9.X 门禁（智能化/护栏/无障碍）
.venv\Scripts\python.exe -m pytest tests/test_v69x_calibration.py tests/test_v69x_qa_guard.py tests/test_v69x_portfolio_diag.py tests/test_accessibility.py tests/test_accessibility2.py -q

# 回归集（每版本段末）
.venv\Scripts\python.exe -m pytest tests/test_v66x_menu_contract.py tests/test_v65_m0_gates.py tests/test_v63_m0_gates.py tests/test_v63_navmodes.py tests/test_v62_gates.py tests/test_tabs_core.py tests/test_frontend_focus.py tests/e2e/smoke_v542.py -q

# 全量（发布前）
.venv\Scripts\python.exe -m pytest -q -m "not e2e"

# 构建
cd frontend && npm run build
```

> 注：以上为拟新增测试文件命名，实际以各里程碑落地为准；命令基于 Windows PowerShell + `.venv` 环境（与既有文档一致）。

---

## 5 通过标准

| 层 | 标准 |
|---|---|
| 每里程碑 | 对应门禁通过；构建通过；无新增视觉回归 |
| 每版本段末 | 对应版本 AC（PRD §5.1–5.4）全过；既有门禁 + 关键集回归全绿（除已声明 pre-existing）；`APP_VERSION` bump 正确 |
| 6.6.X 末 | §3 菜单结论 + §4 方案 A 全部落地；AC-6.6.1–11 全过 |
| 6.8.X 末 | 性能数据达标：执行 ≤3min、缓存命中 ≥90%；视觉门禁阻塞生效 |
| 6.9.X 末（阶段终） | 全量回归全绿；AI 护栏门禁通过；无障碍无新增 A 级违规；6.9.0 发布；文档同步 |

---

## 6 风险与回滚

| # | 风险 | 缓解 |
|---|---|---|
| R1 | 菜单调整破坏深链/组配置 | hash 重定向层一次性迁移 + 菜单契约测试守护（TC-6.6.1.6）；先 dev 实测旧书签 |
| R2 | 策略管理合并状态回归 | 后端 API 不变；重点回归「策略编写→回测」链路（TC-6.6.1.5） |
| R3 | 通知中心迁移渲染回归 | 组件与状态整体迁移（逻辑不变）；规则/历史/通道三 Tab 专项回归（TC-6.6.2.1） |
| R4 | usage 去重误删独有信息 | 备份/磁盘块保留至「数据与备份」区或摘要条；逐块走查（TC-6.6.2.3） |
| R5 | 行情缓存引入前视/污染 | 缓存一致性门禁 + PIT 专测（TC-6.8.1.3）；TTL 与交易日历联动；异常失效回源 |
| R6 | 执行提速受数据源配额硬约束 | 3min 为软目标；限频感知调度 + 剩余时间提示；配额不足降级说明 |
| R7 | e2e 视觉抖动 | 时间 mock + 阈值 ≤0.5% + 人工豁免通道（TC-6.8.1.6） |
| R8 | 智能化产出不稳 | 护栏强制 + 样本门槛 + 功能开关（默认可关闭） |
| R9 | 升级破坏（6.8.X 后端改动） | 沿用一键升级/回滚脚本（备份→迁移→验证→自动回滚）+ DryRun；DB 迁移走版本化框架 |

---

*文档结束。待用户终审授权后，按《DEV-PLAN-v6.6-6.9.md》开发并同步执行本测试计划。*
