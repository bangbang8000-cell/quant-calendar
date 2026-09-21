# 界面配色与视觉分量评估（需求轮 3）

> 版本：V6.12（APP_VERSION 6.2.3）｜日期：2026-09-21｜范围：概览·今日一屏 / 美林时钟 / 大盘行情 / 全局细长条 / 重色块
> 方法：**静态代码审计 + 运行期 DOM 实测**（Chrome + Playwright 读取真实 computed style 与几何，不依赖截图识别）

---

## 1. 用户反馈的四个问题与结论

| # | 反馈 | 实测根因 | 处理 |
|---|---|---|---|
| 1 | 概览·今日一屏「美林时钟—衰退期」色彩太浓、粗体取消；美林时钟页同样问题 | 徽标直接把**后端阶段实色（Material 饱和色）当背景** + 白/深字 + `font-weight:600`；美林页为 `.strategy-tag-pill`（同源内联），阶段卡名 `.merrill-stage-name`、当前阶段名 `.mc-now-name` 均为 600 | 三处统一改「**浅色阶段底 + 压深文字 + 中等字重**」（阶段色 14% 混卡片底作底、48% 混前景作字，与美林阶段卡 active 态同源） |
| 2 | 大盘行情「普涨行情」这一行不要（信息密度太低），判断文字与上一行合并 | 该行是**独立整条品牌渐变横幅**（`.market-sentiment`，`linear-gradient(135deg, primary, secondary)` + 白字），一行只承载 4 个字 | 删除该行，判断文字 **并入 `.market-status` 状态行**，并补上「均值涨跌」数值（信息密度提升）；无底色块、仅细分隔线 + 语义色数值 |
| 3 | 所有细长条（进度条/占比条）颜色太深 | 条填充普遍用**饱和实底或品牌渐变**：`--gradient`（金主题 34%→50% 明度）、`--color-primary`、`--state-*-solid`，甚至**把「文字色」令牌当填充**（评分分布条） | 新增 `--bar-*` 令牌族（语义实底 **62% + 卡片底** 混色），21 处条填充全部改走该族 |
| 4 | 请评估和改善 | 审计出 12 处「>20px 深实底色块」（toast / 侧栏激活行 / 计数徽标 / 版本徽标 / 会话气泡 / 资产排名 pill …） | 其中**在线的 9 处**改「浅底彩字」（复用 V6.11.4 已验证令牌），3 处为遗留死 CSS 仅同步清理 |

---

## 2. 关键度量（改造前 → 改造后，亮色 · 金色主题）

| 元素 | 改造前 | 改造后 | 判定 |
|---|---|---|---|
| `.today-merrill-badge`（衰退期） | 后端实色作底、白/深字、600 字重 | 底 `rgb(233,245,254)`、字重 **500**、对比度 **5.35:1** | AA ✔ / 视觉分量显著下降 |
| `.strategy-tag-pill`（美林页） | 同上 | 同上（暗色：底 lum 0.031、对比度 **8.32:1**） | 双模式 ✔ |
| 8px 策略进度条 / 时间覆盖条 | 渐变起点 `rgb(102,79,11)`（lum ≈ 0.09） | 实色 **lum 0.394**（4.4×） | 明显变柔 ✔ |
| 8px 阶段进度条 `.mc-prog-fill` | 阶段实色 | lum **0.599**（经 `--bar-mix` 混色） | ✔ |
| 10px 维度条 `.stat-fill-5` | `--state-*-solid`（如 #2E7D32，lum ≈ 0.19） | lum **0.273** | ✔ |
| `toast-info`（默认提示，界面最重的一块） | 蓝实底 + 白字，约 48px 高 | 浅蓝底 `rgb(239,246,255)` + 蓝字，对比度 **6.16:1** | AA ✔ |
| `toast-success / warning / danger` | 绿/橙/红实底 + 白字 | 浅底彩字，对比度 **6.81 / 4.84 / 5.91:1** | 全部 ≥4.5 ✔ |
| `.cal-count-badge` | 品牌实底 + 白字 | 浅底彩字，对比度 **5.11:1** | ✔ |
| 大盘行情状态行 | 状态行 + 独立渐变横幅（2 行） | **1 行**：`● 交易日 · 已收盘 · 普涨行情 +1.79%` + 日期 | 信息密度提升 ✔ |

---

## 3. 新增/变更的令牌与机制

- **`--bar-mix: 62%`**：条填充柔度的**单一来源**，内联动态色（阶段色/评分色）复用它，避免各处散落魔数。
- **`--bar-fill / -ok / -warn / -info / -bad`**：`color-mix(in srgb, <语义实底> var(--bar-mix), var(--surface-card))`。
  因两个被引用令牌本身是**主题作用域**的，故该族**无需暗色覆盖**即可自适应（实测暗色 lum 0.152、与暗底对比 ≈2.9:1，可辨）。
- **删除死 token `--gradient`**：其全部用点（进度条/时间条/登录品牌条/侧栏激活行）已被替换，按仓库死 token 纪律从 `themes.css`(3 处) 与 `themes.js`(4 处) 移除（`--gradient-brand` 仍在线使用，保留）。
- **`.el-progress` 变量桥**：`--el-color-primary/success/danger` → `--bar-fill*`，使 Element Plus 进度条（执行看板任务）跟随柔和档。

---

## 4. 覆盖清单（21 处条填充）

`themes.css`：`.time-bar-fill`、`.progress-bar`（含 `.status-ok/-warn/-bad`）、`.meter-fill`、`.rank-bar-fill`、`.mini-bar`、`.usage-ai-model-fill`、`.usage-ai-bar`、`.usage-ai-bar-today`、`.onboarding-progress-fill`、`.ai-stage-line.done`、`.login-brand-bar`、`.gold-gradient-bar`、`.ai-progress-fill`（微光降饱和）、暗色覆盖块
`layout.css`：`.focus-action-买入/持有/观望/减仓/卖出`（12px 五段情绪条）
内联动态：`merrill.js` 维度条 `barColor`、`watchlist.js` 评分分布 5 档、`strategies-page.js` `mcProgStyle`、`batch-evaluate.js`、`stock-detail.js` 评分条
组件：`components.css` `.el-progress` 变量桥

---

## 5. 评估后**明确不改**的部分（含理由）

| 对象 | 理由 |
|---|---|
| 8px 状态圆点（`.qc-status-dot`、`.focus-action-dot`）、3px 竖直装饰条 | 不是「细长条进度条/占比条」；小面积色点用实色反而更清晰 |
| `.market-card.up` 左边框、K 线涨跌色、涨跌文字 | 语义色必须保持高辨识（红涨绿跌），柔化会削弱可读性 |
| 「危险操作」深实底按钮 | 沿用需求轮 2 的用户决策：仅危险操作保留深实底 |
| 遗留死 CSS（`.nav-item.active`、`.theme-current-badge`、`.ai-tag`、`.merrill-stage-badge`、`.merrill-progress-bar` 等） | 当前渲染由 Vue 组件（`nav.qc-sidebar` 等）承担，这些规则 0 引用；本轮只对已改动的同类做符号一致性处理，**不扩大清理范围**（另立技术债任务） |

---

## 6. 验收证据

- **运行期 DOM 实测**（guest 登录 dev :8001，亮/暗双模式 × 概览/美林/大盘/日历/系统/系统状态）：`pageerror = 0`；徽标、条填充、toast、计数徽标的 computed 颜色/字重/对比度均达标（见 §2 表）。
- **既有配色门禁**：`tests/e2e/color_audit.py`（亮/暗 × 3 色相、6 页面）**0 处低于阈值**；`tests/e2e/deep_fill_gate.py` 9 页面 **0 处深底文字元素**；`tests/test_color_tokens.py`（含死 token 门禁）、`tests/test_theme_contrast.py`、`tests/test_frontend_consistency.py`、`tests/test_typography.py` 全绿。
- **新增门禁** `tests/test_bar_fill_softness.py`（5 项）：令牌族柔度区间 45%~80%、登记选择器不得回退深色填充、全局「条选择器 + 深色背景」扫描为 0、EP 进度条变量桥、内联动态条填充必须混色。

---

## 7. 后续建议（未本轮实施）

1. **遗留死 CSS 清理**：`.nav-item.active`、`.count-badge*`（若确认无引用）、`.theme-current-badge`、`.ai-tag`、`.merrill-stage-badge`、`.merrill-progress-bar/-track`、`.progress-fill-4/8` 等，建议单独一轮「死 CSS 审计 + 删除」，并让既有类定义门禁覆盖。
2. **条填充对比度契约**：当前以「柔度（混色比例）+ 不得用深色令牌」守护；如后续需要 WCAG 1.4.11（非文本 3:1）级别的条/轨道对比契约，需同步加深轨道色 `--bar-track`，属产品视觉取舍。
3. **toast 停留时长/图标**：改浅底后白色图标若对比不足，建议补语义色图标（本轮未涉及）。
