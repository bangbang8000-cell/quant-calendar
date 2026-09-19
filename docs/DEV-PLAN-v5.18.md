# DEV-PLAN-v5.18: UI 基础体验硬化

> 配套: PRD-v5.18.md / TEST-PLAN-v5.18.md
> 目标: 非交易日全局提示条 + 语义色统一 + 空态/错误态组件统一 + 主色降噪; 不改动业务功能

---

## 0. 技术现状 (勘察结论)

- **主题系统**: `frontend/css/themes.css` 浅色/深色/dark-pro 三套; `tokens.css` 已有 `--qc-market-up/down/neutral`、`--qc-primary-*`、`--qc-state-*`; 主题选择器支持 6 色 + 浅色/深色/跟随。
- **语义色现状**: `layout.css` L681-682 已有 `.is-rise{color:var(--color-rise)}` / `.is-fall{color:var(--color-fall)}`; tokens.css L230-231 `--color-rise:var(--color-up)`。但指标卡/进度条/竖条散用硬编码。
- **空态组件**: `qc-state-panel` (type=loading/error/empty) 已存在, 在短线复盘/每日复盘/板块资金均有使用, 但文案与图标未统一收敛。
- **交易日判断**: 后端已有 `is_trading_day` 能力 (首页"非交易日"标签即基于此), 前端有 `latestTradeDate` 状态。
- **侧边栏/顶栏**: `frontend/css/layout.css` 顶部 + `frontend/js/components/sidebar.js`; 当前侧边栏底色=主色 tint。
- **中栏优化 (F5)**: 已在本地 dev 完成 — `layout.css` `.shortterm-date-item`/`.market-review-date-item` 重写 + `meta-val-up/down/flat` + `meta-emotion-hot/cold`; `shortterm-page.js`/`research-page.js` 模板绑定。

## 1. 任务分解 (A-E)

### A. 非交易日全局提示条 (F1)
- **A1**: 顶栏组件 (header) 下方新增 `.non-trading-banner`, 绑定全局 `isTradingDay` + `latestTradeDate`。
- **A2**: 非交易日显示文案: "今日非交易日 · 展示最近交易日 YYYY-MM-DD 数据"; 琥珀底 `--qc-warn-bg` + 警告图标。
- **A3**: 关闭按钮 → localStorage `hideNonTradingBanner=true` 记忆本次会话。
- **A4**: 顶栏右侧统一"数据时间"胶囊 (复用现有 `latestTradeDate`), 移除首页/每日复盘/系统状态三处重复提示。

### B. 语义色统一 (F2)
- **B1**: `tokens.css` 固化语义令牌:
  - `--qc-up: var(--qc-market-up)` / `--qc-down: var(--qc-market-down)` / `--qc-neutral: var(--qc-market-neutral)`
  - `--qc-success/error/warn/info` (引用现有 `--qc-state-*`)
- **B2**: `layout.css` 新增工具类: `.text-up/.text-down/.text-neutral/.bg-warn/.border-warn`。
- **B3**: 今日一屏 4 卡左侧竖条 → 有环比变化才用 up/down, 否则去竖条; 指标卡图标底色按语义映射。
- **B4**: `[data-theme="dark"]` 增量覆盖: up/down 降 15% 饱和度 (用 opacity 叠加或换更亮的色值)。
- **B5**: grep 硬编码 `#e63946`/`#2e7d32` 在非 tokens 文件中清零。

### C. 空态/错误态统一 (F3)
- **C1**: `qc-state-panel` 文案收敛:
  - empty: "暂无 {实体}" (如"暂无已抓取日期"/"暂无复盘日期" → 统一)
  - error: "加载失败, 请重试" + 重试按钮 + "复制错误信息"
- **C2**: 板块资金页错误态改用 `qc-state-panel type=error`。
- **C3**: 日期列表空态 ("暂无已抓取日期" / "暂无复盘日期") 样式对齐。

### D. 主色降噪 (F4)
- **D1**: 侧边栏底色: 浅色 `#faf8f3` / 深色 `#0f172a`; 去掉整片金色背景。
- **D2**: 顶栏底色同侧边栏色系; 主色只留在: 当前 tab 下划线、选中导航左边条、主按钮、关键数字。
- **D3**: 截图对比浅色/深色, 确认品牌感保留但不刺眼。

### E. 发布链
- **E1**: APP_VERSION → 5.8.0。
- **E2**: 前端一致性测试 + grep 硬编码色门禁 + 0 pageerror 冒烟。
- **E3**: commit + HANDOVER.md 更新。

## 2. 改动文件清单 (预估)

| 文件 | 改动 |
|---|---|
| `frontend/css/tokens.css` | 语义令牌固化 (B1) |
| `frontend/css/layout.css` | 工具类 + 侧边栏/顶栏底色 + 提示条样式 (B2/D1/D2/A2) |
| `frontend/css/themes.css` | 深色模式语义色覆盖 (B4) |
| `frontend/js/components/sidebar.js` | 侧边栏底色类 (D1) |
| `frontend/js/components/header.js` | 提示条 + 数据时间胶囊 (A1/A4) |
| `frontend/js/components/research-page.js` | 板块资金错误态统一 (C2) |
| `backend/main_new.py` | APP_VERSION 5.8.0 (E1) |
| `docs/HANDOVER.md` | 更新 (E3) |

## 3. 发布链
1. bump APP_VERSION 5.7.3 → 5.8.0
2. 浏览器冒烟 (非交易日提示/语义色/错误态/侧边栏)
3. 0 pageerror + 前端一致性测试通过
4. commit (本地 dev, 用户暂不要求 push)

## 4. 风险与对策
| 风险 | 对策 |
|---|---|
| 主色降噪误伤品牌区 | 只改容器底色, 按钮/选中态不动; 改完截图对比 |
| 语义色遗漏 | grep 硬编码色作为门禁 |
| 非交易日判断依赖 | 复用现有 is_trading_day |
