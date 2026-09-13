# PRD v6.9.3：存量优化整改（UI 信息密度 · 主题系统 · 运维修复）

> 版本：v1.0（待用户终审授权）
> 状态：待批准
> 创建日期：2026-09-12
> 需求来源：《EVAL-v6.9.3-ui-opts.md》评估报告 + 用户决策（数据刷新保留精简 / 铃铛方案 A）
> 前置：EVAL-v6.9.3-ui-opts.md

---

## 0 版本目标

基于 v6.9.2 存量迭代，围绕 **UI 信息密度与布局、主题系统统一、顶部栏交互、数据源与配置运维** 4 个维度，一次性修复 12 项需求并治理 8 项隐藏问题。目标版本 **6.9.3**。

## 1 功能需求

### F1 股票列表信息密度增强（需求 1 + H1）

**目标**：策略共识度股票池 / 策略总览 TOP5 / 策略共识榜 三处列表充分利用行宽。

**需求**
- F1.1 共识度可视化：每行展示 `strategy_count` 徽章（如「5 策略」）+ `consensus_level` 迷你进度条（0-100%）。
- F1.2 策略标签扩容：`slice(0,2)` → `slice(0,3)`，超过 3 个以「+N」折叠。
- F1.3 价格与涨跌幅：后端 `get_strategy_consensus` 结果 join 行情缓存补充 `price / change_pct`，行右侧以涨跌红绿着色展示（无行情时优雅降级隐藏）。
- F1.4 行结构统一：共识榜/日历股票池的「手写虚拟行」统一为 StockList 组件（保留虚拟列表能力），消除 H1 两套行结构。

**边界**：无行情数据（非交易日/停牌）不阻塞列表展示；TOP5 保持 5 条不变。

### F2 下拉按钮全局规范（需求 2 + H2）

**目标**：消除下拉按钮过宽、文字与箭头换行、不居中。

**需求**
- F2.1 全局 CSS：`.el-select__wrapper { flex-wrap: nowrap; }`、`.el-select__selected-item { overflow:hidden; text-overflow:ellipsis; white-space:nowrap; }`。
- F2.2 工具栏防拉伸：`.qc-page-tools` 及 `.flex-c-gap-*` 内 `.el-select/.el-date-editor { flex:0 0 auto; min-width:0; }`。
- F2.3 宽度类收敛：将模板中散落的 `w-90/w-110/w-120/w-180` 统一为语义类 `.w-select`（默认 140px）+ 少量显式覆盖。

### F3 顶部搜索框右移（需求 3）

**需求**：`.qc-header-center` 由居中改为右对齐（`justify-content:flex-end`），使搜索框贴近右侧铃铛；保留 Ctrl+K 快捷键、移动端隐藏逻辑。

### F4 通知铃铛面板（需求 4，方案 A 确认 + H4）

**需求**
- F4.1 铃铛按钮绑定 `@click`，打开右侧 popover 面板（复用 `.qc-user-dropdown` 观感）。
- F4.2 面板内容：拉取 `GET /api/alerts/history?limit=8` 展示最近投递事件（时间+标题+来源）；空态显示「暂无通知」。
- F4.3 面板底部：「前往通知中心」→ 跳转 系统配置-通知中心。
- F4.4 加载/失败态：`qc-state-panel` 复用；接口失败显示轻提示不阻塞。

**边界**：不新增「未读计数」模型（评估后不引入）；面板仅在桌面端展示（移动端铃铛隐藏或跳转）。

### F5 导航形态菜单面板样式（需求 5）

**需求**：补齐 `.qc-navmode-menu` 容器 CSS（`position:absolute; top:calc(100%+8px); right:0; background:var(--qc-popover); border:1px solid var(--qc-border); border-radius:var(--qc-radius-large); box-shadow:var(--qc-shadow-lg); padding; min-width`），与 `.qc-user-dropdown` 观感一致；条目间距与描述行对齐。

### F6 主题按钮升级（需求 6 + H3）

**需求**
- F6.1 Header 主题按钮（icon 改 `palette`）→ popover「主题面板」：外观模式（浅色/深色/跟随系统）+ 6 色板圆点 + 自定义 hue slider。
- F6.2 逻辑下沉共享：`themeHues` 常量、`hueColor/hueName` 工具迁至 app-logic 挂全局 state；Header 与 功能配置-界面与个性化 子页共同引用，消除重复实现（H3）。
- F6.3 保留亮/暗快捷切换语义：面板内模式选项即时生效（走既有 `state.changeThemeMode / changeThemeHue`）。

### F7 量化日历工具栏重排（需求 7）

**需求**：模板重排为三段：
```
[ 日|周|月|年 ]  [ 日期选择 刷新 导出 上次加载 ]  [ « 上一 | 下一 » 策略对比 ]
```
视图切换器置最左，上一/下一与策略对比置最右；逻辑（`switchViewLocal/navigateDate`）不动。

### F8 短线复盘加载提速（需求 8 + H6）

**需求**
- F8.1 前端：进入短线复盘页时并行预取 3 个高频子页（overview/pools/lhb）写入既有 TTL 缓存，切子页秒开；不阻塞首屏。
- F8.2 `_cache` 增加容量上限（50 条）与 LRU 淘汰（H6）。
- F8.3 后端：`/api/shortterm/overview` 聚合接口内部并行化（多数据源 fetch 合并）；store 读取加进程内缓存（TTL 60s）。

### F9 AI 服务清理 DeepSeek R1（需求 9 + H5）

**需求**
- F9.1 `ai_models.py` 加载目录时过滤 `vendor_key` 含 `r1` / `name` 含 `R1` 条目（预置与用户自定义模型一并过滤）。
- F9.2 校验/清理运行实例 `data/ai_models.json` 中的 R1 残留（启动迁移，无则跳过）。
- F9.3 `frontend/js/ai.js` 与 `app-logic/auth.js` 默认模型 `deepseek-chat` → `deepseek-v4-flash`（H5）。

### F10 sxsc-tushare 测试修复（需求 10 + H7）

**需求**
- F10.1 后端 `test_connection('sxsc_tushare')`：客户端缺失时按配置/.env token **即时重建再测**；测试用独立 `timeout=10s`（不依赖配置 5s）；错误分类提示（未初始化/网络超时/token 无效）。
- F10.2 前端 `testDatasource`：当该源处于解锁编辑态（`_editing=true`）时先保存再测试，保证测试即所输。

### F11 功能配置精简（需求 11，决策：保留精简）

**需求**
- F11.1 「策略数据刷新」卡片保留：手动刷新 + 定时刷新（开关/时间/频率）；**移除** 自选股票池拉取项（`stock_pool` 相关 UI 与提交字段）。
- F11.2 「策略研究菜单」开关删除：菜单恒显；`researchMenuEnabled` 状态与相关存储清理，默认视为开启。

**影响面**：功能配置模板、`saveDataRefreshConfig` 提交字段、`researchMenuEnabled` 引用点（菜单过滤逻辑）、相关测试。

### F12 系统配置二级菜单顺序（需求 12）

**需求**：`subPages` 目标顺序 `config → feature → autoeval → datasource → user → about → notification`；`guestSubPages`、`subPageNames` 同步；涉及菜单契约测试更新。

---

## 2 非功能需求

| 维度 | 要求 |
|------|------|
| 兼容 | 亮/暗主题、subnav/tree/toptab 三导航形态、桌面/移动端、5 语言 i18n 全量维护 |
| 性能 | 短线复盘预取不阻塞首屏；列表行渲染维持虚拟滚动；无新增明显体积 |
| 可访问性 | 新增面板按钮保留 `aria-label/aria-expanded`；色板圆点有文字标签 |
| 降级 | F1 无行情降级、F4 接口失败降级、F10 无法连接时明确报错原因 |

## 3 版本与发布

- 版本号：**6.9.3**（`main_new.py` APP_VERSION + dist 重建 + 契约测试同步）。
- 发布范围：全量 dist 重建，静态资源 `?v=` 缓存破坏生效。
