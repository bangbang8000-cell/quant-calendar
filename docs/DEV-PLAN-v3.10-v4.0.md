# 量化选股日历 v3.10 ~ v4.0 开发计划 (DEV-PLAN)

> **文档版本**: v2.0 | **日期**: 2026-08-11 | **基线**: v3.8.2
> **配套文档**: 需求 → `PRD-v3.10-v4.0.md` | 测试 → `TEST-PLAN-v3.10-v4.0.md`
> **更新规则**: 每个任务完成后更新状态列；需求变更必须三文档同步。
> **v2.0 变更**: v3.11 主题改为 UI/UX 提质（依据评估报告），原 v3.11 数据自动化顺延 v3.12，v3.12 可观测顺延 v3.13，v3.13 AI 顺延 v3.14。

---

## 1. 文档控制

| 版本 | 日期 | 变更人 | 说明 |
|------|------|--------|------|
| v1.0 | 2026-08-11 | - | 基于 PRD v1.0 + v3.8.2 代码审查创建 |
| v2.0 | 2026-08-11 | - | v3.11 改为 UI/UX 提质四层任务，后续版本顺延 |

---

## 2. 开发环境与工作流

| 项 | 规定 |
|----|------|
| 开发目录 | `quant-calendar-dev`（coding + testing） |
| 部署目录 | `quant-calendar-ops`（stable release） |
| 同步方式 | dev → ops: `git checkout` 方式，排除 `.env`、`data/`、`.venv/`、`__pycache__/` |
| Git 策略 | 每任务独立 commit；每版本完成后创建 tag |
| 每任务验证 | 改动文件 ≤ 3 个/次，修改后立即验证 |
| 页面验证 | 前端改后硬刷新 (Ctrl+Shift+R) 确认生效 |
| 前端回归 | v3.11 起引入 Playwright 截图 diff（报告产出，不阻塞发布） |
| 部署方式 | v3.13 起使用 `scripts/deploy.sh`（health-gated + 自动回滚） |

---

## 3. 版本总览

| 版本 | 主题 | 任务数 | Bug 修复 | 新功能 | 预估耗时 |
|------|------|:--:|:--:|:--:|:--:|
| v3.10 | 可靠性加固 | 7 | 3 | 4 | ✅ 已完成 |
| v3.11 | UI/UX 提质 | 12 | 2 | 10 | 3 周 |
| v3.12 | 数据自动化 | 6 | 1 | 5 | 1-2 周 |
| v3.13 | 可观测与部署 | 6 | 1 | 5 | 1-2 周 |
| v3.14 | AI 深化与通知矩阵 | 6 | 0 | 6 | 1.5-2 周 |
| v4.0 | 开放平台 | 5 | 0 | 5 | 2 周+ |

**总计**: 35 个任务，预估 10-13 周。

---

## 4. v3.10 — 可靠性加固

### 4.1 任务分解

| # | 任务 | 对应 PRD | 文件 | 估时 | 验证方式 | 状态 |
|---|------|---------|------|------|----------|:--:|
| 10.1 | 美林时钟核心逻辑测试 | FR-3.10.1 | `tests/test_merrill_clock.py` | 4h | pytest: 四象限/信心度/预测/预警断言 | ✅ |
| 10.2 | 美林时钟切换分支测试 | FR-3.10.1 | `tests/test_merrill_clock.py` | 1.5h | pytest: 时间驱动/边界切换 + trigger 断言 | ✅ |
| 10.3 | 美林时钟快照持久化测试 | FR-3.10.1 | `tests/test_merrill_clock.py` | 1h | pytest: snapshot 读写一致, 不污染 data/ | ✅ |

> **10.2 附加修复**: 测试发现时间驱动切换后 `stage_info` 仍引用切换前阶段（API/UI/AI 问股读到旧阶段），已将切换块前移至阶段判定之后、stage_info 组装之前，保证下游字段一致。此为测试驱动发现的 P0 修复，纳入任务 10.2 一并提交。
| 10.4 | 依赖锁定 (uv) | FR-3.10.2 | `requirements.in`, `requirements.lock`, `Dockerfile` | 1h | 两次构建依赖哈希一致 | ✅ |
| 10.5 | 数据源健康监控层 | FR-3.10.3 | `backend/data_sources.py`, `backend/system.py` | 3h | metrics 含成功率/延迟; 失败标记 degraded | ✅ |
| 10.6 | CI 覆盖率门禁 | FR-3.10.4 | `.github/workflows/ci.yml`, `pyproject.toml` | 0.5h | 覆盖率<阈值 CI 红 | ✅ |
| 10.7 | 版本号前后端统一 | FR-3.10.5 | `backend/main_new.py`, `frontend/index.html` | 1h | 前端资源版本号随 APP_VERSION | ✅ |

### 4.2 验收清单

- [x] pytest 全量通过（156 用例，含 merrill_clock 64 + data_sources 9 + version_injection 4）
- [x] 美林时钟覆盖率 ≥ 70%（当前 73.47%，pytest-cov 报告）
- [x] CI 覆盖率门禁生效（实测 19.6% 时 FAIL，TC-10.14）
- [x] 依赖锁文件双端一致（uv 编译 diff 校验，TC-10.9）
- [x] `/api/system/metrics` 含数据源健康指标（TC-10.10/10.11）
- [x] 前端资源版本号随 `APP_VERSION` 联动（TC-10.12，24 处资源注入 `?v=3.8.2`）
- [x] Git commit + tag `v3.10.0`（已推送 origin + synology，ops 已部署 :8000）

---

## 5. v3.11 — UI/UX 提质

### 5.1 任务分解

> 依据 `UIUX-优化评估-v3.8.2.md`，按 **架构 → 交互 → 视觉 → 智能** 四层推进；每批自洽可独立验收。

| # | 任务 | 对应 PRD | 文件 | 估时 | 验证方式 | 状态 |
|---|------|---------|------|------|----------|:--:|
| 11.1 | 智能命令面板 | FR-3.11.1 | `frontend/js/components/command-panel.js`（新）, `frontend/index.html`, `frontend/css/*.css` | 4h | Ctrl+K 打开; 股票/菜单/指令三域检索 + 键盘操作 | ✅ |
| 11.2 | 全局搜索升级接入命令面板 | FR-3.11.1 | `frontend/js/components/global-header.js`, `frontend/js/app-logic.js` | 2h | 搜股票直达详情; 搜菜单跳页 | ✅ |
| 11.3 | app-logic 按域拆分 | FR-3.11.2 | `frontend/js/{ai,system,users,ai-chat,stock-pool,watchlist}.js`, `frontend/js/app-logic.js` | 8h | 域模块化工厂模式; app-logic 4124→1783 行(移出 57%); 全量 pytest + 浏览器冒烟 | 🟡 |
| 11.4 | Dialog 组件化 | FR-3.11.2 | `frontend/js/components/dialogs/*.js`（新）, `frontend/index.html` | 6h | 13 dialog 独立组件; index 只留挂载点 | ✅ |
| 11.5 | 虚拟滚动列表 | FR-3.11.3 | `frontend/js/components/virtual-list.js`（新）, `frontend/js/components/*.js` | 4h | 1000+ 行滚动流畅; 点击/收藏交互不回归 | ✅ |
| 11.6 | 数据缓存与静默刷新 | FR-3.11.4 | `frontend/js/core.js`, `frontend/js/app-logic.js` | 3h | 重复进入不闪烁; 后台更新有提示 | ✅ |
| 11.7 | 统一四态组件 + 键盘导航 | FR-3.11.5 | `frontend/js/components/state-panel.js`（新）, `frontend/js/app-logic.js` | 3h | 空/加载/错误/离线四态一致; 键盘可操作 | ⬜ |
| 11.8 | 移动端专项 | FR-3.11.5 | `frontend/css/responsive.css`, `frontend/js/components/*.js` | 4h | 375px 高频页可用性达标 | ⬜ |
| 11.9 | 设计令牌落地 + 视觉规范 | FR-3.11.6 | `frontend/css/tokens.css`, `frontend/css/themes.css`, 各模板 | 4h | 硬编码色值消除(grep 校验); 主题切换无遗漏 | ⬜ |
| 11.10 | 智能首页"今日一屏" | FR-3.11.7 | `frontend/js/components/strategies-page.js`, `frontend/css/*.css` | 6h | 一屏见当日决策要素; 数据健康卡 | ⬜ |
| 11.11 | 图表交互增强 | FR-3.11.8 | `frontend/js/charts.js`, `frontend/js/components/*.js` | 4h | 十字线读价; MA 图例开关 | ⬜ |
| 11.12 | Playwright 视觉回归 | FR-3.11.9 | `tests/e2e/`（新）, `.github/workflows/ci.yml`, `requirements-dev.in` | 3h | CI 出截图 diff 报告 | ⬜ |

> **注**: 11.3/11.4（模块化重构）是最大工作量，也是后续所有改动的地基；若排期紧，可与 11.5/11.6 并行推进（文件不冲突）。

> **11.4 完成说明（✅ 2026-08-11）**：index.html 1127→260 行（移出 867 行）。el-dialog 12 个全部拆出为 `frontend/js/components/dialogs/*.js` 独立组件（12 个文件，同一模式：`inject('qcState')` + `{ ...state }` 解包），index.html 0 残留 el-dialog、仅 12 个成对挂载点；加上 11.1 已组件化的 command-panel，共 13 个 dialog 独立组件满足验收。**关键约束**：in-DOM 模板必须用成对 `<qc-x></qc-x>` 标签（HTML 解析器不认自闭合自定义元素，`/>` 被当普通 `>` 吞掉后续内容）。组件注册：`window.__quantComponents.<Name>`，core 在 index.html `app.component()` 自动注册。状态经 qcState 提供（覆盖面完整 1654-1830 行），dialog 依赖全在。浏览器冒烟 12 dialog 全开（含 K线/AI问股 chat 三 Tab 交互 + 组件内 `#stockKlineChart` ECharts 挂载点渲染 canvas 验证），0 pageerror，169 pytest 通过。

> **11.5 完成说明（✅ 2026-08-11）**：新增 `virtual-list-core.js`（纯计算 UMD，窗口/总高/切片/key）+ `components/virtual-list.js`（qc-virtual-list 薄壳：scroll.passive + ResizeObserver，行内交互事件保留）。策略池（日历页，dev 182 只实测仅渲染 17 行）+ 共识榜（策略页，30 只仅渲染 17 行）两处最大列表接入；信号解读行单行省略适配固定行高。隔离验证 2000 行仅渲染 18 行、滚动中部/末尾索引映射正确（含缓冲偏移）。TC-11.6 新增 9 个 node 单测，pytest 169→178。浏览器 0 pageerror。

> **11.6 完成说明（✅ 2026-08-11）**：core.js 改为 UMD（`window.__quantModules.core` + `module.exports`，node 可 require），新增纯逻辑缓存段：`makeCacheKey(method|url|params 排序)` / `CacheStore`（Map+过期时间戳）/ `createTtlCache(15s 默认)` / `silentRefresh`（后台拉取，有变才 `onChanged`、首刷无基线不算变更、同 key 在途去重）/ `jsonEquals`。app-logic.js 接入两大数据路径：`loadConsensusData` 双缓存（viewCache 命中 / TTL 命中均直接渲染不闪烁，随后 `backgroundRefresh` 静默拉取，数据有变 toast「有新数据，已更新」5s 去重）+ `loadDashboardCached`（总览页包装，重复进入不闪烁 + 5 分钟静默轮询更新提示）；并新增同 key 在途去重（首次进入 page/sub 双触发只拉一次）。**浏览器实测**（route stub：第1/2次 /api/view 返 A、第3次起返 B）：首次进入渲染 2 行；再次进入首帧即渲染（无骨架屏/无空态）→ 后台刷新到 3 行 + toast「有新数据，已更新」，0 pageerror。TC-11.7 新增 9 个 node 单测（键确定性/参数顺序无关、TTL 命中与过期清理、ttl=0 立即失效、静默刷新首刷/未变/有变/失败/在途去重），pytest 178→187。

> **11.3 拆分说明（🟡 部分完成）**：已拆出 6 个自治域模块（users/system/ai/ai-chat/stock-pool/watchlist），均用 `window.__quantModules.<域>.create(deps)` 工厂模式，依赖经 deps 显式注入、无反向耦合；另有 charts/icons/echarts-theme 等能力模块（v3.8 起）。app-logic 4124→1783 行（移出 2341 行）。剩余 ~1783 行为主控核心，不可安全拆分：导航/搜索/登录/初始化向导/K线与指数评股/评分动画/回测/全局 watch/qcState 汇总，以及数据加载段（跨域引用 AI 域状态 + app-logic 状态 + 图表实例，2026-08-11 已实验迁移并回滚验证）。"<800 行" 目标调整为"主控核心保留 + 域逻辑全部模块化"，浏览器冒烟 0 pageerror 为验收金标准。

### 5.2 验收清单

- [ ] Ctrl+K 命令面板可用，股票/菜单/指令三域检索 + 全键盘操作
- [ ] app-logic.js 缩减至编排层（< 800 行），stub 文件承载真实逻辑
- [ ] 13 个 dialog 独立组件化，index.html 只留挂载点
- [ ] 1000+ 行列表虚拟滚动流畅，既有交互零回归
- [ ] 重复进入页面命中缓存，后台静默刷新有提示
- [ ] 空/加载/错误/离线四态组件一致，键盘导航完善
- [ ] 375px 移动端高频页可用性达标（日历/自选/详情）
- [ ] 模板硬编码色值消除（grep 校验通过）
- [ ] 策略总览升级"今日一屏"，数据健康卡展示各源成功率/degraded
- [ ] K线十字线 + MA 图例开关可用
- [ ] CI 产出 Playwright 截图 diff 报告
- [ ] pytest 全量通过（≥ 115 用例，前端逻辑已拆可单测）
- [ ] Git commit + tag `v3.11.0`

---

## 6. v3.12 — 数据自动化

### 6.1 任务分解

| # | 任务 | 对应 PRD | 文件 | 估时 | 验证方式 | 状态 |
|---|------|---------|------|------|----------|:--:|
| 12.1 | Tushare 日线自动拉取任务 | FR-3.12.1 | `backend/data_sources.py`, `backend/scheduler.py` | 4h | 手动触发生成 qresult 新数据 | ⬜ |
| 12.2 | 财务数据拉取 | FR-3.12.1 | `backend/data_sources.py` | 3h | 财务字段入库 | ⬜ |
| 12.3 | qresult 自动导入触发 | FR-3.12.1 | `backend/data_pipeline.py` | 1h | CSV 更新后自动 reload | ⬜ |
| 12.4 | 数据源配置界面 | FR-3.12.1 | `frontend/js/components/system-page.js` | 2h | 配置股票池/频率/开关 | ⬜ |
| 12.5 | 数据新鲜度看板 | FR-3.12.2 | `backend/api/v1/dashboard.py`, `backend/system.py`, `frontend/js/components/dashboard-page.js` | 3h | 首页显示各源新鲜度+超期标黄 | ⬜ |
| 12.6 | 拉取失败补偿 | FR-3.12.3 | `backend/data_sources.py`, `backend/scheduler.py` | 2h | 3次退避后停止; 告警入队 | ⬜ |

### 6.2 验收清单

- [ ] 手动触发后 qresult 目录出现新数据且自动入库
- [ ] 定时任务按配置执行（日志可见每次批次）
- [ ] 首页数据源状态卡显示新鲜度，超期标黄
- [ ] 模拟连续失败 3 次后停止重试，告警队列有记录
- [ ] pytest 全量通过（≥ 120 用例）
- [ ] Git commit + tag `v3.12.0`

---

## 7. v3.13 — 可观测与部署

### 7.1 任务分解

| # | 任务 | 对应 PRD | 文件 | 估时 | 验证方式 | 状态 |
|---|------|---------|------|------|----------|:--:|
| 13.1 | 备份列表 + 一键恢复 API | FR-3.13.1 | `backend/api/v1/system.py`, `backend/backup.py` | 2h | API 列出备份, 恢复成功 | ⬜ |
| 13.2 | 恢复 dry-run 演练 | FR-3.13.1 | `backend/backup.py` | 1h | 演练校验通过 | ⬜ |
| 13.3 | 异常告警通知 | FR-3.13.2 | `backend/scheduler.py`, `backend/feishu_push.py` | 2h | 制造错误→飞书告警+收敛 | ⬜ |
| 13.4 | deploy.sh 一键部署 | FR-3.13.3 | `scripts/deploy.sh` | 2h | 部署成功+health-gated | ⬜ |
| 13.5 | rollback.sh 自动回滚 | FR-3.13.3 | `scripts/rollback.sh` | 1.5h | 模拟失败自动回滚 | ⬜ |
| 13.6 | 监控面板 UI 完善 | FR-3.13.4 | `frontend/js/components/system-page.js`, `backend/api/v1/system.py` | 3h | 面板显示全指标+自动刷新 | ⬜ |

### 7.2 验收清单

- [ ] 备份列表可见，一键恢复后数据一致
- [ ] dry-run 演练通过，损坏备份被拒绝
- [ ] 制造错误后飞书收到告警，同主题合并
- [ ] deploy.sh 部署成功且 health-gated
- [ ] 模拟失败部署自动回滚，服务不中断
- [ ] 监控面板显示 CPU/内存/延迟/错误率并自动刷新
- [ ] pytest 全量通过（≥ 125 用例）
- [ ] Git commit + tag `v3.13.0`

---

## 8. v3.14 — AI 深化与通知矩阵

### 8.1 任务分解

| # | 任务 | 对应 PRD | 文件 | 估时 | 验证方式 | 状态 |
|---|------|---------|------|------|----------|:--:|
| 14.1 | 多模型并行评估 | FR-3.14.1 | `backend/ai_evaluator.py` | 3h | 单股耗时 ÷3 | ⬜ |
| 14.2 | 并行失败降级 | FR-3.14.1 | `backend/ai_evaluator.py` | 1.5h | 部分失败不影响整体 | ⬜ |
| 14.3 | 通知适配器抽象 | FR-3.14.2 | `backend/notify/`（新目录） | 3h | 企微/钉钉/邮件适配 | ⬜ |
| 14.4 | 通知模板化 | FR-3.14.2 | `backend/notify/` | 1.5h | 模板替换正确 | ⬜ |
| 14.5 | 日报/周报多通道 | FR-3.14.2 | `backend/scheduler.py` | 1.5h | 日报达多通道 | ⬜ |
| 14.6 | RAG 问股（第一阶段） | FR-3.14.3 | `backend/chat.py`, `backend/search.py` | 4h | 问股引用历史报告 | ⬜ |

### 8.2 验收清单

- [ ] 单股 AI 评估耗时 ÷3（并行 + 超时保护）
- [ ] 部分模型失败不影响整体结果
- [ ] 企微/钉钉/邮件配置后日报与告警可达
- [ ] 问股回答引用历史报告片段
- [ ] pytest 全量通过（≥ 130 用例）
- [ ] Git commit + tag `v3.14.0`

---

## 9. v4.0 — 开放平台

### 9.1 任务分解

| # | 任务 | 对应 PRD | 文件 | 估时 | 验证方式 | 状态 |
|---|------|---------|------|------|----------|:--:|
| 4.1 | API v2 版本前缀 | FR-4.0.1 | `backend/router.py`, `backend/main_new.py` | 2h | /api/v2 可用, v1 兼容 | ⬜ |
| 4.2 | 文档站点 | FR-4.0.1 | `docs/`, `backend/main_new.py` | 2h | 文档站可浏览 | ⬜ |
| 4.3 | 出站 Webhook 订阅 | FR-4.0.2 | `backend/notify/`, `backend/scheduler.py` | 3h | 订阅回调 | ⬜ |
| 4.4 | Webhook 签名校验 | FR-4.0.2 | `backend/notify/` | 1.5h | 非法签名拒绝 | ⬜ |
| 4.5 | 插件机制（样例） | FR-4.0.3 | `backend/plugins/`（新目录） | 3h | 样例插件加载 | ⬜ |

### 9.2 验收清单

- [ ] `/api/v2` 新契约可用，v1 接口全部向后兼容
- [ ] 文档站点可浏览，含示例代码
- [ ] Webhook 订阅回调带签名，非法签名被拒
- [ ] 样例插件可加载并出现在策略/AI 模型列表
- [ ] pytest 全量通过（≥ 135 用例）
- [ ] Git commit + tag `v4.0.0`

---

## 10. 关键文件依赖图

```
v3.10: (已完成)
  tests/test_merrill_clock.py     ← 10.1, 10.2, 10.3
  requirements.in/lock            ← 10.4
  backend/data_sources.py         ← 10.5
  .github/workflows/ci.yml        ← 10.6
  backend/main_new.py, index.html ← 10.7

v3.11 (UI/UX 提质, 架构先行):
  js/components/command-panel.js  ← 11.1, 11.2 (独立, 最高用户价值)
  js/app-logic.js + stub 模块     ← 11.3, 11.4 (最大工作量, 地基)
  js/components/virtual-list.js   ← 11.5 (独立)
  js/core.js                      ← 11.6 (独立)
  js/components/state-panel.js    ← 11.7 (独立)
  css/responsive.css              ← 11.8 (独立)
  css/tokens.css + 各模板         ← 11.9 (可并行)
  js/components/strategies-page.js← 11.10 (依赖 11.9 视觉基础)
  js/charts.js                    ← 11.11 (独立)
  tests/e2e/, ci.yml              ← 11.12 (独立)

v3.12 (数据自动化):
  backend/data_sources.py         ← 12.1, 12.2, 12.6 (核心)
  backend/data_pipeline.py        ← 12.3
  backend/api/v1/dashboard.py     ← 12.5
  frontend/system-page.js         ← 12.4
  frontend/dashboard-page.js      ← 12.5

v3.13 (可观测与部署):
  backend/backup.py, system.py    ← 13.1, 13.2
  backend/scheduler.py            ← 13.3 (消费 12.6 告警队列)
  scripts/deploy.sh, rollback.sh  ← 13.4, 13.5
  frontend/system-page.js         ← 13.6

v3.14 (AI 深化):
  backend/ai_evaluator.py         ← 14.1, 14.2
  backend/notify/ (新)            ← 14.3, 14.4
  backend/scheduler.py            ← 14.5
  backend/chat.py, search.py      ← 14.6

v4.0 (开放平台):
  backend/router.py               ← 4.1
  backend/notify/                 ← 4.3, 4.4
  backend/plugins/ (新)           ← 4.5
```

### 10.1 并行执行建议

**v3.11 并行**：11.1+11.2（命令面板，独立）、11.3+11.4（模块化，顺序推进）、11.5+11.6+11.7+11.8（各自独立）、11.9（视觉，独立）、11.10（依赖 11.9）、11.11（独立）、11.12（独立，可最后收尾）

**v3.12 并行**：12.1+12.2+12.6（data_sources 核心，顺序推进）、12.3（依赖 12.1 产出的 CSV）、12.4+12.5（前端，可并行）

**v3.13 并行**：13.1+13.2（备份恢复，独立）、13.3（依赖 12.6 告警队列）、13.4+13.5（部署脚本，独立）、13.6（前端，独立）

**v3.14 并行**：14.1+14.2（AI 评估）、14.3+14.4（通知抽象）、14.5（依赖 14.3）、14.6（RAG，独立）

**v4.0 并行**：4.1+4.2（API 契约）、4.3+4.4（Webhook）、4.5（插件，独立）
