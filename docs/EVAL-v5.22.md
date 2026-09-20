# V5.22 需求评估与修复报告

> 版本: 5.10.0 → **5.10.1** ｜ 范围: 顶栏空间分配 / 内嵌详情信息密度 / 中栏字号 / 周期演进板衔接 / 移除圆形评分徽标
> 结论: 5 项需求全部修复并实测验证; 过程中另发现并修复 1 处**数据层 bug**（历史周期阶段时长错位）。

## 一、需求评估（先评估，后动手）

| # | 用户反馈 | 定位与量化证据 | 判定 | 处理 |
|---|---------|--------------|------|------|
| 1 | 个股/指数详情右栏「表头太高 + 表头上面有大片空白」，信息密度低 | 1440px 实测: 右栏 pane.top=322 → 表头 top=**363**（41px 死区 = EP 容器 padding 16px + border 1px + body padding-top 24px）；表头高 **110px**（padding 20+20 + 70px 圆形徽标） | 成立 | 见 §2.1 |
| 2 | 二级菜单过早折叠成「更多」，最后一个菜单到搜索框还有很大空间 | 实测 <code>.qc-header</code> w=1180: <code>.qc-header-left</code>=460 与 <code>.qc-header-center</code>=460 **平分**剩余宽度（<code>flex:1</code> ×2），而 center 的 <code>max-width:640px</code> 从未触达 → 标签区被无谓压缩 | 成立（CSS 空间分配问题，非 TopTabs 逻辑问题） | 见 §2.2 |
| 3 | 概览 / 每日复盘 中栏字号偏小 | <code>.shortterm-date-item-date</code> = <code>--qc-font-size-sm</code>(13px)，<code>.market-review-date-item-date</code> 同；副信息 <code>xs</code>(12px) | 成立 | 见 §2.3 |
| 4 | 美林时钟历史周期：每个阶段缺时间信息；阶段之间不衔接 | <code>_mcBand()</code> 按**真实日期绝对值**定位色块 → 数据里阶段间存在空档，空档处空白；且仅当宽度 &gt;12% 才显示阶段名，时间信息完全缺失 | 成立 | 见 §2.4（含数据 bug） |
| 5 | 圆形评分徽标不想要了（与大模型分数口径不一致） | <code>.score-badge</code> 展示 <code>score_data.score</code>（**规则选股评分**），70px 圆形 + 大号数字，视觉分量等同「AI 评分」，易误读 | 成立 | 见 §2.5 |

## 二、修复方案

### 2.1 内嵌详情右栏：消死区 + 压表头（-82px 顶部占用）
- <code>.qc-embedded-dialog { padding: 0 !important }</code>：EP <code>.el-dialog</code> 自带 16px 内边距，在内嵌模式下形成表头上方死区。
- <code>.el-overlay-dialog / .el-modal-dialog</code> 包裹层 <code>padding/margin: 0 !important</code>。
- <code>.qc-embedded-dialog .el-dialog__body</code> 顶内边距归零（**必须 !important**，因 themes.css 有 <code>.el-dialog__body{padding:24px!important}</code>）。
- 表头压缩：padding 20px → <code>12px 16px</code>，<code>h3</code> 降一档，<code>.detail-content</code> padding 20px → 12/16px，内嵌模式表头圆角置 0。
- **实测**: 表头 top 363 → **323**，表头高 110 → **68**，正文起点 473 → **391**（同屏多出 82px 内容）。

### 2.2 顶栏空间分配：二级标签优先
<code>.qc-header-center</code> 由 <code>flex: 1</code> 改为 <code>flex: 0 1 360px; min-width: 180px; max-width: 640px</code>，左侧 <code>.qc-header-left</code>（<code>flex:1</code>）独占剩余宽度。
**实测**: left 460 → **560**（+100px 给二级标签），center 460 → **360**（搜索框自然宽度，未变小）；窄屏仍可收缩到 180px。标签区更宽 → 「更多」只在真正放不下时出现。

### 2.3 中栏字号
- 日期主行 <code>sm</code>(13px) → <code>md</code>(**16px**)，副信息 <code>xs</code>(12px) → <code>sm</code>(**13px**)，<code>margin-top</code> 3px → 4px（对齐 4px 网格）。
- 复盘看板（<code>.shortterm-date-item-*</code>）与每日复盘（<code>.market-review-date-item-*</code>）**同步**修改，保证两处一致。

### 2.4 周期演进板：阶段衔接 + 每阶段时间信息
1. **衔接**: <code>_mcBand()</code> 改为「首尾相接」布局 —— 各阶段按持续时长累计铺满整条轴（left = 累计/total），不再按真实日期绝对值留空档；「今天」标记落在实色/斜纹分界处；轴标签由累计时长反推。
2. **时间信息**: 每个阶段段携带 start(真实起始年-月)/end/months；历史周期行在色带下新增**逐段时间清单**（<code>.mc-times</code> / <code>.mc-time-chip</code>）：<code>阶段 · 2020-03 → 2021-07 · 16 月</code>，点击可直接查看阶段详情。
3. 悬停 tooltip 同步给出「起始 2020-03 → 2021-07 · 约 16 个月」。
4. 说明文案更新为「宽度∝持续时长 · 阶段首尾相接」。
- **实测**: 3 轮历史周期色块连续性 gaps 全为 0；色带高度 24px（修复了纵向 flex 下 <code>.mc-hrow .mc-band{flex:1}</code> 把色带压成 0 高的问题）；时间清单无溢出换行。

#### 2.4.1 附带发现并修复的数据层 bug（阶段时长整体错位一格）
<code>backend/merrill_history.py::build_timeline()</code> 把每条转换记录的 <code>duration_months</code> 挂到了**在该时点开始的阶段**（<code>to_stage</code>），而数据语义是**在该时点结束的阶段**（<code>from_stage</code>）的持续时长。
后果：每轮各阶段时长整体错位一格 —— 例如第2轮 复苏期显示 **6 个月**（实际 43 个月）、过热期显示 44 个月（实际 18 个月）。
修复：
- 阶段时长以 <code>start→end</code> 实际跨度为准（与相邻阶段首尾相接，周期带无缝隙）；
- 每轮末尾阶段缺 <code>end</code> 时，用**时间上的下一轮起点**补齐（跨轮也衔接）；
- 补不到时回退到「该阶段结束后第一条转换记录」的时长；当前阶段保持 <code>None</code>（由实时进度计算）。
**修复后**: 第2轮 = 5/43/18/16/7 月，第3轮 = 2/16/8/10/20 月（2023-01 → 2024-09），均与可见起止月份一致。

### 2.5 移除圆形评分徽标
- 删除 <code>.score-badge</code> 圆形徽标（70px 圆形 / 大号数字 / label），改为行内分值并**标注来源**：<code>选股评分 79 偏强</code>（<code>.detail-score-inline</code>），保留评分变化的 pulse 动画与 +N/-N 浮标（<code>.score-delta</code> 复用）。
- 信息不丢失，但视觉分量与「AI 评估分」明确区分；<code>score_data</code> 缺失时整块不渲染。
- 新增 i18n 键 <code>detail.ruleScore</code> / <code>detail.notEvaluated</code>（zh-CN / zh-TW / en / ja / ko 五包齐全，**每键单独一行** —— tests/test_i18n.py 按行提取键名）。

## 三、验证

| 项 | 方法 | 结果 |
|---|------|------|
| 1 | Playwright 量测右栏 pane/表头/正文几何 | 表头 363→323、110→68；正文 473→391；<code>.score-badge</code> 不存在，<code>.detail-score-inline</code> = 「选股评分79偏强」 |
| 2 | Playwright 量测 header 三区宽度（1440px） | left 560 / center 360 / 二级标签正常渲染 |
| 3 | 计算样式读取 | date 16px、meta 13px（复盘看板 15 条日期卡片） |
| 4 | 读取色块 left/width 与时间清单文本 | gaps 全 0；清单含「阶段 + 起止月 + 时长」 |
| 5 | 截图 + DOM 断言 | 圆形徽标消失，行内分值正常 |
| 回归 | pytest -m "not e2e" | **9 failed / 3339 passed / 2 skipped** —— 与修改前基线一致（9 项均为既有失败：bundle 预算、既有对比度/硬编码色/token 类） |
| 数据 | merrill 相关 4 个测试文件 | 79 passed |
| 契约 | test_v69x3_ui_opts / test_v69x4_ui_fixes（版本号） | 28 passed（APP_VERSION 5.10.1） |

## 四、影响面与后续建议
- 影响页面：全部使用内嵌详情双栏的页面（策略总览 / 量化日历 / 智能评估-自选·评估历史 / 重点跟踪 等）、所有带二级标签的页面、短线复盘·每日复盘中栏、策略研究-美林时钟。
- 未改动：<code>.score-badge-small</code>（评估历史/问股历史的小徽标，语义不同，保留）。
- 待办（未在本批实施）：详情双栏次级候选 5 处（组合持仓 / 涨停复盘 / 龙虎榜 / 用户与权限 / 研究历史）；回测记录双栏 + 权益/交易明细持久化；strategies-page.js 旧时间轴死代码清理（buildTlPaths / collapsedCycles / .tl-* CSS）。
- 数据侧建议：HISTORICAL_TRANSITIONS 中 duration_days/months 与 transition_date 仍存在 1~3 个月的口径差（如第3轮 衰退期 1.6 vs 实际 2.5 月），现由 start→end 跨度兜底；若后续以该数据做统计（均值/标准差），建议先做口径统一。
