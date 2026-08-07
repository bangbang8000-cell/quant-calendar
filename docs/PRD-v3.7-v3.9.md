# 量化选股日历 v3.7 ~ v3.9 产品需求文档 (PRD)

> **文档版本**: v1.0 | **日期**: 2026-08-07 | **基线**: v3.6.0
> **配套文档**: 开发计划 → `DEV-PLAN-v3.7-v3.9.md` | 测试计划 → `TEST-PLAN-v3.7-v3.9.md`
> **更新规则**: 需求变更必须三文档同步；每版本完成后更新需求状态。

---

## 1. 文档控制

| 版本 | 日期 | 变更人 | 说明 |
|------|------|--------|------|
| v1.0 | 2026-08-07 | - | 基于 v3.6.0 代码审查（75 处问题）+ 六维度评估创建 |
| v1.1 | 2026-08-10 | - | v3.8.0 发布：v3.7(智能与性能)+v3.8(移动与体验) 28 项改进合入；v3.9 需求顺延 |

---

## 2. 战略背景

### 2.1 从"能用"到"好用"

v3.0 ~ v3.6 完成了核心功能的构建和前端组件化。v3.7 ~ v3.9 的目标是 **精细化**：修复代码审查发现的 75 处问题，同时增强智能分析能力、移动端体验和分析深度。

### 2.2 演进策略

采用 **"30% Bug 修复 + 70% 亮点功能"** 的混合策略，每版既有稳定性提升又有可见新功能：

| 版本 | 主题 | 定位 |
|------|------|------|
| v3.7 | 智能与性能 | 修致命 Bug + AI 分析深化 + 性能基线 |
| v3.8 | 移动与体验 | 修 UX Bug + 移动端重塑 + PWA |
| v3.9 | 深度与完善 | 修剩余 Bug + 分析工具 + 数据看板 |

### 2.3 六维度优先级对齐

| 维度 | v3.7 | v3.8 | v3.9 |
|------|:--:|:--:|:--:|
| 高效 (Efficiency) | ★★★★★ | ★★ | ★ |
| 智能 (Intelligence) | ★★★★ | ★ | ★★ |
| 美观 (Aesthetics) | ★ | ★★★★ | ★ |
| 便捷 (Convenience) | ★ | ★★★★★ | ★★ |
| 好用 (Usability) | ★ | ★★★ | ★★★★ |
| 实用 (Practicality) | ★★ | ★ | ★★★★★ |

---

## 3. v3.7 — 智能与性能

### 3.1 需求概述

修 5 个致命 Bug + 3 个高优 Bug，建立稳定的性能基线。同时增强 AI 评估的深度和可解释性。

### 3.2 功能需求 (Functional Requirements)

#### FR-3.7.1 — SQLite 性能索引
**现状**: `chat_history`、`watchlist` 表无索引，全表扫描。
**需求**: 创建 `(username, stock_code, id)` 和 `(username, added_at)` 复合索引，查询延迟降低 80%+。
**文件**: `backend/db.py`

#### FR-3.7.2 — 缓存 TTL 修复
**现状**: `market_data.py:183` 传入缓存时间而非当前时间，导致 TTL 计算错误。
**需求**: 传入 `datetime.now()` 参与 TTL 计算，缓存过期策略恢复正常。
**文件**: `backend/market_data.py`

#### FR-3.7.3 — DB 初始化熔断
**现状**: DB schema 初始化失败后服务仍启动，处于不可用状态。
**需求**: 初始化失败时记录错误后退出，拒绝启动。
**文件**: `backend/main_new.py`

#### FR-3.7.4 — 日历页 viewUnit 修复
**现状**: `calendar-page.js:17` 引用未定义变量，按钮显示 `{{ viewUnit }}` 字面量。
**需求**: 从 injected state 或 computed 属性获取正确的 viewUnit 值。
**文件**: `frontend/js/components/calendar-page.js`

#### FR-3.7.5 — 股票详情空值守卫
**现状**: `index.html:201` 未对 `daily_data` 空值做守卫，触发 `undefined.toFixed()` 崩溃。
**需求**: 所有数值展示添加可选链 + 默认值，空数据时显示 "—"。
**文件**: `frontend/index.html`

#### FR-3.7.6 — DB 读并发优化
**现状**: 全局 `RLock` 串行化所有操作，WAL 模式优势未发挥。
**需求**: 读操作（SELECT）不持锁，写操作持锁。
**文件**: `backend/db.py`

#### FR-3.7.7 — AI 模型配置内存缓存
**现状**: 每次 `get_enabled_models()` 都从磁盘 re-read `ai_models.json`。
**需求**: 使用已有的 `_models_cache` 字段，仅在 save 时刷新。
**文件**: `backend/ai_evaluator.py`

#### FR-3.7.8 — 静态资源缓存头
**现状**: 静态文件无 `Cache-Control`，每次页面请求都重新下载。
**需求**: 添加 `Cache-Control: public, max-age=3600` + `ETag`。
**文件**: `backend/main_new.py`

#### FR-3.7.9 — `index.html` 内存缓存
**现状**: 每次页面请求都从磁盘读取 `index.html`。
**需求**: 首次读取后缓存于内存，mtime 变化时刷新。
**文件**: `backend/main_new.py`

#### FR-3.7.10 — AI 评估策略归因
**现状**: AI 评股返回综合评价，不区分各因子贡献。
**需求**: 拆解为技术面/基本面/资金面三维度得分，标注关键驱动因子。
**验收**: 评估结果中显示三柱图 + 驱动因子标签。（无回归风险，纯新增）

#### FR-3.7.11 — AI 信号解读
**现状**: 股票入池/出池只有信号，无解读。
**需求**: 入池时自动生成一句话解读："XX 股因行业轮动信号触发 + 量价突破入池"。
**验收**: 入池股票旁显示 AI 生成的解读文字。（无回归风险，纯新增）

#### FR-3.7.12 — Prompt 模板化
**现状**: AI prompt 硬编码在 `_call_llm` 的单块 f-string 中。
**需求**: 提取为独立文件 (`backend/prompts/evaluate_stock.txt`)，支持占位符替换。
**验收**: prompt 内容可从文件加载，修改 prompt 无需改代码。（需验证评估结果一致性）

#### FR-3.7.13 — 美林时钟策略映射
**现状**: 美林时钟展示经济阶段，但不推荐策略。
**需求**: 当前阶段自动建议适用策略——复苏期→动量/质量，过热期→价值/防御，滞涨期→现金/低波，衰退期→债券/红利。
**验收**: 美林时钟详情面板显示策略建议卡片。（无回归风险，纯新增）

#### FR-3.7.14 — 评估历史趋势图
**现状**: 评估历史只有列表，无法看趋势。
**需求**: 单只股票历次评估得分折线图 (ECharts)，标注关键事件（入池/出池/大幅变化）。
**验收**: AI 页评估历史页显示趋势图。（无回归风险，纯新增）

---

## 4. v3.8 — 移动与体验

### 4.1 需求概述

修 1 个致命 Bug（字体 Token）+ 5 个高优 Bug（导航统一、异常处理、骨架屏合并等），同时重点重塑移动端体验，实现真正的手机可用。

### 4.2 功能需求

#### FR-3.8.1 — 移动端字体 Token 修复
**现状**: `responsive.css` 中引用 `--fs-*` / `--fw-*` 变量，但 tokens.css 中只有 `--font-*` 命名，移动端所有字体大小失效。
**需求**: 将所有 `--fs-{size}` → `--font-{size}`，`--fw-{weight}` → `--font-{weight}`。
**文件**: `frontend/css/responsive.css`, `frontend/css/animations.css`

#### FR-3.8.2 — 统一导航入口
**现状**: 移动端 nav、侧边栏、键盘快捷键、FAB 按钮 4 处各写各的导航逻辑。
**需求**: 创建 `navigateTo(page, subPage)` 函数，4 处全部调用统一入口。
**验收**: 所有导航行为一致，可通过调用栈追踪。
**文件**: `frontend/js/app-logic.js`, `index.html`, 各组件

#### FR-3.8.3 — 异常处理规范化
**现状**: 100+ catch 块使用 5 种不同模式，其中 20+ 为空 `catch(e){}` 完全吞错。
**需求**: 所有 catch 至少输出 `console.error`；面向用户的操作给出 `ElMessage.warning`；配置加载类静默失败加 fallback 日志。
**文件**: `frontend/js/app-logic.js`

#### FR-3.8.4 — 骨架屏系统合并
**现状**: `animations.css` 和 `themes.css` 各有独立的骨架屏 CSS 定义。
**需求**: 统一使用 `themes.css` 中的 `.skeleton-*` 系列，删除 `animations.css` 中的旧版。
**文件**: `frontend/css/animations.css`, `themes.css`

#### FR-3.8.5 — pulse 动画合并
**现状**: `@keyframes pulse` 三个不同定义（`animations.css` ×1, `themes.css` ×2），后者覆盖前者。
**需求**: 合并为单一定义，多场景通过不同 class 控制差异。
**文件**: `frontend/css/animations.css`, `themes.css`

#### FR-3.8.6 — 键盘焦点指示器
**现状**: 交互元素有 `:hover` 无 `:focus-visible`，键盘用户无视觉反馈。
**需求**: 为 `.nav-item`、`.status-tab`、`.theme-item` 等 10+ 类交互元素添加 `:focus-visible` 样式（2px 色环）。
**验收**: Tab 键遍历页面时每个可聚焦元素有视觉环。
**文件**: `frontend/css/themes.css`

#### FR-3.8.7 — 硬编码色值 Token 化
**现状**: `#667eea` 及 `rgba(102,126,234,...)` 出现 20+ 次，无 Token 对应。
**需求**: 全部替换为 `var(--primary-color)` 或新增 token。
**文件**: `frontend/css/themes.css`

#### FR-3.8.8 — CSS 死代码清理
**现状**: `layout.css` 有被 themes.css 覆盖的 `.stat-*` 规则、`themes.css` 有空 CSS 注释块。
**需求**: 删除确认无用的规则和空块。
**文件**: `frontend/css/layout.css`, `themes.css`

#### FR-3.8.9 — PWA 离线缓存
**现状**: Service Worker 存在但只实现 network-first。
**需求**: 升级为预缓存静态资源 + API 数据 stale-while-revalidate 策略，Lighthouse PWA 评分 ≥ 85。
**验收**: 断网后页面可打开，缓存的策略数据和 K 线可见。
**文件**: `frontend/sw.js`

#### FR-3.8.10 — 底部安全区适配
**现状**: 移动端底部导航无 `safe-area-inset-bottom` 适配，被全面屏手势栏遮挡。
**需求**: 底部 nav 增加 `padding-bottom: env(safe-area-inset-bottom)`，内容区对应留白。
**验收**: iPhone X/14 真机底部不被遮挡。
**文件**: `frontend/css/responsive.css`

#### FR-3.8.11 — 触觉反馈
**现状**: 移动端操作无触觉反馈。
**需求**: 页面切换、收藏股票、评股完成时调用 `navigator.vibrate([10])` 轻微震动。
**文件**: `frontend/js/app-logic.js`

#### FR-3.8.12 — 移动端导航重构
**现状**: 底部导航仅 4 个文字按钮。
**需求**: 改为图标 + 文字布局，当前页高亮 + 缩放动效，标签可选。
**文件**: `frontend/index.html`, `responsive.css`

#### FR-3.8.13 — 股票详情移动端优化
**现状**: 弹窗在手机上半屏遮罩，K 线无法缩放。
**需求**: 弹窗改全屏 Sheet 从底部滑入；K 线支持双指缩放和横屏查看；标签改为横向滑动切换。
**文件**: `frontend/index.html`, `responsive.css`

#### FR-3.8.14 — reduced-motion 适配
**现状**: 无 `prefers-reduced-motion` 支持。
**需求**: 添加 `@media (prefers-reduced-motion: reduce)` 块，暂停所有动画/过渡。
**验收**: 系统开启动效减弱后页面无动画。
**文件**: `frontend/css/animations.css`

---

## 5. v3.9 — 深度与完善

### 5.1 需求概述

修剩余高/中/低优 Bug，实现周报、异步化、持久化等缺陷修复。同时上线股票对比、策略归因看板、Dashboard 等深度分析工具。

### 5.2 功能需求

#### FR-3.9.1 — 周报任务实现
**现状**: `scheduler.py` 周报任务为空壳（log 后 sleep 60s），不生成实际报告。
**需求**: 接入 `report_generator.py.generate_weekly_report()`，定时生成 + 飞书推送。
**文件**: `backend/scheduler.py`

#### FR-3.9.2 — AI 评估异步化
**现状**: `batch_evaluate` 用同步 `ThreadPoolExecutor`，阻塞 async 事件循环。
**需求**: 改用 `asyncio.to_thread` 或 `aiohttp` 异步并发调用。
**文件**: `backend/ai_evaluator.py`

#### FR-3.9.3 — AKShare 请求超时
**现状**: 8 个串行 AKShare API 调用无超时设置。
**需求**: 每个调用设置 `timeout=15`，超时后用默认值 fallback。
**文件**: `backend/merrill_clock.py`

#### FR-3.9.4 — Mock 数据确定性
**现状**: Mock 数据每次返回不同随机值。
**需求**: 按日期固定种子，同一天返回相同 mock 值。
**文件**: `backend/market_data.py`

#### FR-3.9.5 — CSP unsafe-inline 移除
**现状**: CSP 允许 `unsafe-inline` + `unsafe-eval`，XSS 防护形同虚设。
**需求**: 内联脚本改为 nonce 方式，CDN 脚本使用 hash。
**文件**: `backend/main_new.py`, `frontend/index.html`

#### FR-3.9.6 — 页面状态持久化
**现状**: 刷新后回到默认页面，失去上下文。
**需求**: localStorage 记住 `lastPage`、`lastSubPage`、`lastDate`，刷新后恢复。
**文件**: `frontend/js/app-logic.js`

#### FR-3.9.7 — 空白 catch 消除
**现状**: 20+ 完全空白的 catch 块不输出任何信息。
**需求**: 逐个审查并添加至少 `console.error`，面向用户的操作添加 `ElMessage.warning`。
**文件**: `frontend/js/app-logic.js`

#### FR-3.9.8 — 股票对比
**现状**: 弹窗只能逐个查看，无法并排对比。
**需求**: 选择 2-4 只股票 → 对比视图：K 线叠加、评估雷达图、基本面表格。
**验收**: 选中多只股票后出现"对比"按钮，点击进入对比页面。
**文件**: `frontend/index.html`, `js/components/`

#### FR-3.9.9 — 自定义筛选器
**现状**: 只能按策略筛选，无法自定义条件。
**需求**: 用户创建筛选条件（市值范围、PE 范围、行业、涨跌幅），保存为预设，一键应用。
**文件**: `frontend/js/components/`, `backend/api/v1/`

#### FR-3.9.10 — 策略归因看板
**现状**: 策略选股结果只有列表，无绩效展示。
**需求**: 各策略历史收益曲线 + 最大回撤 + 夏普比率 + 月度收益热力图。
**验收**: 策略页新增"绩效"子页，数据从 CSV 历史回测。
**文件**: `frontend/js/components/strategies-page.js`, `backend/backtest.py`

#### FR-3.9.11 — 行业热力图
**现状**: 无行业维度分析。
**需求**: 按申万一级行业展示资金流向热度矩阵，支持日期回看，发现板块轮动。
**文件**: `frontend/js/components/`, `backend/api/v1/`

#### FR-3.9.12 — 数据看板 (Dashboard)
**现状**: 无首页概览。
**需求**: 首页 Dashboard：今日市场情绪（涨跌比）、在池股票异动（涨跌停/放量）、AI 今日评估摘要、美林时钟状态。
**验收**: 打开应用直接看到 Dashboard，各项数据有实时更新。
**文件**: `frontend/index.html`, `js/components/`

#### FR-3.9.13 — 导出增强
**现状**: 仅支持 CSV 导出。
**需求**: 支持 PDF 报告（含图表）和 Excel 多 sheet 数据表导出。
**文件**: `backend/api/v1/export.py`, `backend/report_generator.py`

---

## 6. 非功能性需求

### 6.1 性能

| 指标 | 当前 (v3.6.0) | v3.7 目标 | v3.8 目标 | v3.9 目标 |
|------|:--:|:--:|:--:|:--:|
| AI 评估首次（单股） | ~3s | ~2s | ~2s | ~2s |
| 页面首次加载 | ~2s | ~1s | < 1s (缓存) | < 1s |
| K 线加载（60 日） | ~800ms | ~500ms | ~300ms | ~300ms |
| Lighthouse PWA | — | — | ≥ 85 | ≥ 90 |

### 6.2 可靠性

| 指标 | 当前 | 目标 |
|------|:--:|:--:|
| 致命 Bug 数 | 5 | 0 |
| pytest 用例数 | 80 | ≥ 110 |
| 后端覆盖率 | ~50% | ≥ 70% |
| 错误吞没 | 20+ catch | 0 |

### 6.3 兼容性

| 平台 | 当前 | 目标 |
|------|:--:|:--:|
| Chrome 桌面 | ✓ | ✓ (+ 键盘导航) |
| Chrome Mobile | △ (布局溢出) | ✓ |
| Safari iOS | △ (安全区) | ✓ |
| Firefox | △ (未验证) | ✓ |

---

## 7. 验收标准

每个版本验收需满足：
1. **所有 FR 通过**（功能需求逐项验证）
2. **SPA 完整性检查通过**（template/div/dual 脚本）
3. **pytest 全量通过**（无 regression）
4. **浏览器冒烟**（SM-1 ~ SM-15 手动走查）
5. **GitHub Actions CI 通过**
6. **Lighthouse 评分**（v3.8 起 ≥ 85）
