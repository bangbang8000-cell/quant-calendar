# TEST-PLAN v5.15：交互体验与信息呈现优化测试计划

> 版本：v1.0（待用户终审授权）
> 状态：待批准
> 创建日期：2026-09-14
> 需求来源：《PRD-v5.15.md》/《DEV-PLAN-v5.15.md》
> 前置：PRD-v5.15.md / DEV-PLAN-v5.15.md

---

## 1 测试策略

- **层级**：L1 契约门禁（pytest 源码断言）+ L2 接口/数据断言 + L3 浏览器实证（关键视觉与交互，Playwright + chrome-150，admin/Abcd@2026 或 guest）。
- **回归口径**：全量 `python3 -m pytest tests/ -q`（当前收集 3317），失败数 ≤ 现状基线（历史 CSS 门禁 5 项 + 数据源网络 1 项以 ops 基线对照），**无新增失败**；门禁项不倒退。
- **新增测试文件**（统一 test_v515x_*）：test_v515x_consensus.js（F1 若走 Node 测试）/ test_v515x_group_first_page.py（F2）/ test_v515x_ui_ux.py（F3/F4/F5/F8 源码断言）/ test_v515x_top_tabs.py（F6）/ test_v515x_shortterm.py（F7）。
- **浏览器实证环境**：ops :8000（admin），必要时 dev :8001（guest）；DOM 度量断言为主（本模型无法读图，不依赖截图目视）。

## 2 用例矩阵

### F1 移除「0% 共识」

| # | 用例 | 方法 | 断言 |
|---|------|------|------|
| T1 | StockList 条件渲染 | 代码断言 | StockList.vue 两处共识文本均带 hasConsensus(item) 条件（虚拟+非虚拟） |
| T2 | hasConsensus 工具 | 代码断言 | 定义 Number(item.consensus_level) > 0；0/undefined/null 返回 false |
| T3 | TOP5 无 0% 共识 | 浏览器实证（admin） | 策略总览 TOP5 行内无「0% 共识」文本；仍显示「N 策略」与策略标签 |
| T4 | 共识榜无 0% 共识 | 浏览器实证（admin） | 策略共识榜全部行无「0% 共识」 |
| T5 | 真实共识值显示 | mock 注入 | consensus_level=0.5 时显示「50% 共识」 |
| T6 | 行高稳定 | 浏览器实证 | 移除文本后行高/对齐无跳变 |

### F2 用户组首屏加载

| # | 用例 | 方法 | 断言 |
|---|------|------|------|
| T7 | 时序修复 | 代码断言 | lifecycle.js 中 loadGroupConfig 调用位于「恢复用户最后选择」块之前（行号顺序断言） |
| T8 | 重校验兜底 | 代码断言 | app-logic.js 含 ensureVisiblePage/watch(groupsConfig) 逻辑，currentPage 不在 menus 时重定向 |
| T9 | 隐藏页不加载 | 浏览器实证 | 构造用户组隐藏 research 菜单 → 该组成员登录刷新 → 首屏非 research 页、侧栏无策略研究 |
| T10 | 运行期隐藏跳转 | 浏览器实证 | 打开策略研究时组配置变更为隐藏 → 自动跳第一个可见菜单，无白屏 |
| T11 | 游客回归 | 浏览器实证（guest） | 游客首屏行为与改造前一致（策略总览） |

### F3 美林时钟时间轴

| # | 用例 | 方法 | 断言 |
|---|------|------|------|
| T12 | 高度压缩 | 浏览器实证（DOM 度量） | .merrill-timeline-block 高度较基线 963px 压缩 ≥25%（≤720px） |
| T13 | 层级令牌 | 代码断言 | 新样式无硬编码 #hex（test_tokens_no_hardcode 通过）；chip 字号 13px |
| T14 | 当前阶段强化 | 浏览器实证 | 当前 chip 含「当前」徽标且高亮 |
| T15 | 交互保留 | 浏览器实证 | hover 浮层出现、点击弹窗（tl-click-pop）正常 |
| T16 | 移动端 | 浏览器实证（375px） | 无横向溢出；chip 可滚动/堆叠正常；弹窗不超视口 |
| T17 | 双主题 | 浏览器实证 | 亮/暗主题下对比度达标、颜色一致（若新增门禁则 test_contrast 通过） |

### F4 股票详情弹窗

| # | 用例 | 方法 | 断言 |
|---|------|------|------|
| T18 | 头部无渐变 | 浏览器实证 + 代码断言 | .kline-dialog .el-dialog__header 计算背景非渐变（transparent/纯色）；themes.css 含覆盖规则 |
| T19 | X 按钮位置 | 浏览器实证（DOM 度量） | headerbtn 垂直居中（top≈头部中线）、right≈24px |
| T20 | X 按钮大小 | 浏览器实证 + 代码断言 | close 图标 18px；命中区 ≥40px |
| T21 | 其他弹窗回归 | 浏览器实证 | merrill-detail-dialog 等弹窗头部样式不变 |
| T22 | 移动端 | 浏览器实证（375px） | X 按钮不溢出、弹窗正常关闭 |

### F5 重点跟踪列表

| # | 用例 | 方法 | 断言 |
|---|------|------|------|
| T23 | 行结构 | 代码断言 | focus-view.js 行模板含独立列容器（档位/评分/方向/入池状态） |
| T24 | 关键信息分列 | 浏览器实证（admin，重点跟踪子页） | 行内档位/评分/方向/入池状态各自独立呈现，无换行堆叠 |
| T25 | 分组保留 | 浏览器实证 | 强烈推荐→观望分组头存在、计数正确 |
| T26 | 展开详情保留 | 浏览器实证 | 点击行展开评估来源/信号归因/入池历史 |
| T27 | 打开个股详情 | 浏览器实证 | 行内按钮打开股票详情弹窗 |
| T28 | 移动端 | 浏览器实证（375px） | 列收缩合理、可操作 |

### F6 顶部标签溢出

| # | 用例 | 方法 | 断言 |
|---|------|------|------|
| T29 | 溢出检测 | 代码断言 | TopTabs.vue 含 ResizeObserver/hasOverflow/hiddenTabs |
| T30 | 更多下拉 | 浏览器实证（1280px，ai 或 system 页） | 溢出时显示「更多 ▾」；下拉含隐藏标签；点击导航成功 |
| T31 | 左右按钮 | 浏览器实证 | ‹ › 出现、点击滚动、到边界禁用 |
| T32 | peek 可见 | 浏览器实证（DOM 度量） | 溢出时容器右缘可见下一标签 ≥10px |
| T33 | 键盘 | 浏览器实证 | 聚焦标签条时 ←/→ 滚动 |
| T34 | 无溢出隐藏 | 浏览器实证（1440px 策略页） | 无溢出时「更多」与按钮隐藏 |
| T35 | 回归 | 浏览器实证 | 非溢出页面标签点击/激活/高亮正常 |

### F7 短线复盘双栏

| # | 用例 | 方法 | 断言 |
|---|------|------|------|
| T36 | 双栏结构 | 代码断言 + 浏览器实证 | overview 子页含左列表容器与右看板容器；默认选中最近一天 |
| T37 | 默认最近一天 | 浏览器实证 | 进入 overview：左列表高亮最近交易日；右看板显示对应数据 |
| T38 | 切换日期 | 浏览器实证 | 点击列表其他日期 → 右看板刷新 |
| T39 | 摘要端点（P1） | 接口断言（若实现） | GET /api/shortterm/dates/summary 返回 [{date, emotion_level, money_effect_avg, zt_count}]，按日期倒序 |
| T40 | 无数据回退 | 浏览器实证/mock | dates 为空时显示日期选择器入口，不报错 |
| T41 | 响应式 | 浏览器实证（1024/768px） | <1024px 双栏堆叠；列表折叠为横向 chip/下拉 |
| T42 | 其他子页回归 | 浏览器实证 | ztpool/lhb/sector/intraday 布局与功能不变 |

### F8 「功能配置」更名

| # | 用例 | 方法 | 断言 |
|---|------|------|------|
| T43 | 无残留 | 代码断言（grep） | 非 dist 源码无「功能配置」字面量（注释/历史文档除外，按 PRD 范围） |
| T44 | 三语一致 | 代码断言 | zh-CN「基础配置」/zh-TW「基礎配置」/en「Basic」 |
| T45 | 界面呈现 | 浏览器实证（admin） | 侧栏/二级菜单/面包屑显示「基础配置」 |
| T46 | 既有断言更新 | pytest | test_v63_m4_config / test_v69x3_ui_opts / test_v69x4_ui_fixes 通过 |

### 收尾回归

| # | 用例 | 方法 | 断言 |
|---|------|------|------|
| T47 | 全量测试 | pytest | 失败数 ≤ 基线，无新增失败；门禁项不倒退 |
| T48 | 前端冒烟 | Playwright 冒烟 | 登录→策略总览→日历→AI→研究→短线→系统 0 pageerror |
| T49 | dist 生效 | HTTP 断言 | 页面加载的 JS/CSS 为重建后 hash；界面呈现新文案/新样式 |
| T50 | 双端同步 | curl | :8000 与 :8001 /api/health 版本一致（若 bump 则 5.6.0） |

## 3 测试数据与前置

- 用户组隐藏 research 配置：后端 users/groups 数据（dev 测试环境构造，避免污染 ops 生产组配置）。
- 短线复盘数据：依赖 qresult 共享目录与 /api/shortterm/dates 有抓取记录；无数据时以 mock 覆盖。
- 浏览器：.pwenv 虚拟环境 + /home/evergreen/.agent-browser/browsers/chrome-150.0.7871.46/chrome。

## 4 门禁与 CI 注意事项

- 新 CSS 必须满足 test_tokens_no_hardcode / test_contrast / test_spacing_grid 等门禁（F3/F5 改动重点）。
- 新测试文件命名 test_v515x_*；版本门禁若 bump 5.6.0 需同步 test_v69x3_ui_opts / test_v69x4_ui_fixes 中的版本断言。
- CI 触发：tag v* 或 workflow_dispatch；日常 push 不触发。
- docs 变更不触发 CI（仓库既有配置）。

## 5 通过标准

1. 全部用例（T1-T50）执行通过或标注已知环境例外（数据源网络项）。
2. 全量 pytest 无新增失败；门禁项不倒退。
3. 浏览器实证 0 pageerror；关键交互（F2 跳转、F6 更多下拉、F7 双栏切换）手动验证通过。
4. 双端同步且 /api/health 一致。
