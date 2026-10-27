# 开发计划 — 视觉原子层治理（字体/配色/按钮/玻璃/主题/暗色）

- 依据：[EVAL-VISUAL-TOKENS-6.5.5.md](file:///d:/MyCoding/QuantCalendar/quant-calendar-dev/docs/EVAL-VISUAL-TOKENS-6.5.5.md)、[EVAL-CALENDAR-UI-6.5.5.md](file:///d:/MyCoding/QuantCalendar/quant-calendar-dev/docs/EVAL-CALENDAR-UI-6.5.5.md)
- 版本基线：`6.5.5`（`backend/main_new.py:141`）
- 目标版本：`6.5.6` → `6.5.7` → `6.5.8`（一批一版，可独立回滚）
- 测试配套：[TEST-PLAN-VISUAL-6.5.6.md](file:///d:/MyCoding/QuantCalendar/quant-calendar-dev/docs/TEST-PLAN-VISUAL-6.5.6.md)

---

## 0. 总览与前置决策

| 批次 | 版本 | 主题 | 改动面 | 风险 | 可回滚粒度 |
|---|---|---|---|---|---|
| **Gate 0** | — | 两项决策（D1 暗色基调 / D2 暗色色相反馈） | 决策文档 | — | — |
| **A** | 6.5.6 | 配色阶梯：面层级 + 描边 + 暗色残留 + 品牌文字档 | `tokens.css` / `themes.js` / `themes.css` | 低（纯令牌） | 单文件回滚 |
| **B** | 6.5.7 | 按钮统一 + 玻璃收敛 + 控件尺寸 | `themes.css` / `themes-components.css` / `tokens.css` | 中（`!important` 涉及全局按钮） | 按批次回滚 |
| **C** | 6.5.8 | 字体栈 + 字号阶梯 + 角色层 + 字重纪律 | `tokens.css` + 全站 `var(--qc-font-size-*)` 调用点 | 中（涉及 616 处引用，但多为别名映射） | 按批次回滚 |

**Gate 0 — 必须先定的两件事（阻塞 A 批次的暗色部分）**

- **D1 暗色基调**：当前 `[data-theme="dark-pro"]` 里的 `--qc-background: #0b1220`（海军蓝）在运行期被 `_neutralRamp(hue,'dark')` 覆盖成 `hsl(hue,10,8)`（hue45 → 暖黑 `#161512`），即**硬约束"暗色统一蓝底"从未在运行期成立**。二选一：
  - **D1-a（推荐）** 修订约束为"暗色 = 色相联动的极低饱和中性（S≤12%）"，删掉 CSS 里的死值 `#0b1220/#101a2e/#16233b` 一族；
  - **D1-b** 改引擎：暗色分支固定 `hue 220` 且饱和度提到 20%，代价是 12 色相在暗色下全部同质（等于暗色取消换色）。
- **D2 暗色换色相无反馈**：暗色 S=10% 使 12 色相几乎无法区分（hue 0/45/220/270 的画布 `#161212/#161512/#121416/#141216`）。D2 决定"提高暗色饱和度"还是"暗色下弱化色相入口"。

> 建议顺序：Gate 0 定稿 → A → B → C。若 D1-a，A 批次夜间即可并行；若 D1-b，A 的暗色数值需按 hue 220 重算一次（约多 0.5 人日）。

---

## 1. 批次 A（6.5.6）— 配色阶梯

**目标**：把"看不见的层级"变成可辨层级。所有验收均为**数值型**，可由门禁自动判定。

### A1 面层级阶梯（核心）

现状：亮色 画布/卡片 = **1.04:1**；暗色 画布/卡片 **1.09:1**、卡片/raised **1.10:1**；肉眼阈值约 1.25:1。

改动点：

| 文件 | 位置 | 改动 |
|---|---|---|
| `frontend/js/themes.js` | `_neutralRamp` 亮色分支 L96-152 | `--qc-background/--surface-canvas` 由 `hsl(hue,18,98)` 下调到 `hsl(hue,16,96)`（≈`#f7f3ec`），保持卡片 `#ffffff`；`--qc-muted` 同步到 `hsl(hue,16,94)` |
| `frontend/js/themes.js` | `_neutralRamp` 暗色分支 L153-188 | `--surface-raised` 由 `hsl(hue,12,14)` 提到 `hsl(hue,12,18)`；`--qc-muted` 同档；`--surface-sunken` 保持 9 |
| `frontend/css/themes.css` | `[data-theme="dark-pro"]` L73-140 | 同步更新同名 CSS 兜底值（避免"未覆盖时回落死值"再次发生） |

> 注意：卡片必须保持"实底"，因此**只能拉低画布**，不能把卡片做半透明（违反硬约束）。

### A2 描边提级

现状：`--qc-border` 亮 1.90:1 / 暗 2.14:1，是唯一层级载体，低于 WCAG 1.4.11 的 3:1。

| 文件 | 改动 |
|---|---|
| `frontend/js/themes.js` `_neutralRamp` 亮色 L110 | `--qc-border` `hsl(hue,12,72)` → `hsl(hue,13,58)`（≈2.9–3.1:1 对白卡） |
| 同上 暗色 L159 | `hsl(hue,14,30)` → `hsl(hue,14,36)`（≈2.8:1，需实算微调到 ≥3.0） |
| `frontend/css/tokens.css` L50 附近 | `--qc-border: var(--qc-neutral-300)` 的静态兜底同步到新档 |

⚠️ 描边变深会影响所有"浅描边"观感（卡片/输入框/分隔线）。**必须同时检查不出现"重描边"廉价感**：建议 `--qc-border` 只用于容器边界，行内分隔线继续走 `--border-light`。

### A3 暗色冷色残留清理

现状（CSS 硬编码、运行期暗色分支未提供 → 回落海军蓝）：

| 令牌 | 残留值 | 对暖卡对比度 | 处理 |
|---|---|---|---|
| `--card-border` | `#1a2a44` | 1.16:1 | 在 `generateDarkTokens` 补 `hsl(hue,14,30)`（= `--qc-border` 同档） |
| `--surface` | `#111827` | 1.06:1 | 补 `hsl(hue,11,11)`（= `--surface-card`） |
| `--bg-code` | `#0f172a` | 1.07:1 | 补 `hsl(hue,12,9)`（= `--surface-sunken`） |
| `--text-disabled` | `#64748b` | 3.51:1 | 补随色相灰，保持 ≥3:1 |

改动点：`frontend/js/themes.js` `generateDarkTokens` return 块 L324 起；同时删除 `themes.css` 中对应的海军蓝死值并加注释说明"由运行期生成，CSS 仅兜底"。

### A4 品牌文字档微调

`--primary-text` 对 `--surface-card` 实算 **4.47:1**（差 0.03）。改 `themes.js` L276 `pL7` 求解目标从 4.5 提到 4.6（与 `GRAD_TARGET` 一致），自动覆盖 12 色相。

### A 批次验收（全部脚本可判）

```
面层级（亮/暗各 3 组）      >= 1.25
--qc-border / surface-card  >= 3.00   (亮/暗)
--primary-text / surface-card >= 4.5   (14 套配置)
暗色残留令牌                全部由运行期提供（无 CSS 死值回落）
```

**A 批次不做**：不动按钮、不动字体、不动玻璃、不改任何 `.vue`/模板结构。

---

## 2. 批次 B（6.5.7）— 按钮与玻璃

### B1 按钮体系归一（关键决策点）

现状：`themes.js` 生成整套实心令牌（`--btn-primary-bg/color/hover-bg/active-bg` + plain/text 组），但 `themes.css:489-513` 用 `!important` 把 `.el-button--primary` 覆盖为"品牌 soft 浅底 + 彩字 + 描边" → **实心组 7 个令牌是死令牌**；暗色又走实心亮底 + `#101014` 深字（过曝，12.26:1）。

方案（推荐 **B1-a**）：

- **B1-a 统一为 soft 语言**：亮/暗都使用 `--brand-soft-*`；删除 `--btn-primary-bg/color/hover-bg/active-bg` 及其 CSS 消费方，`--btn-primary-plain-*` / `-text-*` 保留（仍有消费）。主 CTA 另开一档 `--brand-solid-*`（暗色用 18% 品牌色叠底 + 亮字），只给"页面级唯一主操作"用。改动集中在 `themes.js` 两个分支 + `themes.css:486-513` + `tokens.css` 的 `--btn-*` 定义段。
- **B1-b 统一为实心语言**：反向删除 soft 覆盖，但会让亮色主按钮变成 `hsl(45,80,32)` 深金实底（4.51:1 贴线），观感偏重——**不推荐**。

### B2 按钮尺寸归一

| 项 | 现状 | 目标 |
|---|---|---|
| 高度 | 未显式设 height，靠 `padding: 8px 12px` 推导 | `.el-button { height: var(--qc-ctrl-h) }` |
| 字号 | 14px 与 13px 混用 | 统一 `--qc-font-size-base`(14) |
| 圆角 | 固定 `--qc-radius-small`(6px) | 统一 `--qc-radius-medium`(8px)，与输入框一致 |
| 最小宽 | 部分 `80px`、部分 `auto !important` | 统一 `auto`（图标按钮单独一档） |

改动点：`frontend/css/themes-components.css:451-455`、`themes.css` 中 `.el-button` 相关段。

### B3 暗色主按钮去高亮

`themes.js` L344-350 的 `hsl(hue,85,65)` → `hsl(hue,40,18)` 底 + `hsl(hue,85,78)` 字（保持 ≥4.5:1，同时把对比压到 ≤8:1，让数据本身成为最亮元素）。

### B4 玻璃收敛

| 文件 | 改动 |
|---|---|
| `frontend/css/layout.css:274-301` | 保留（浮层已正确 + 已有降级规则），不改 |
| `frontend/css/themes.css:187-200` | 暗色 `--glass-bg: rgba(28,27,24,.82)` → `rgba(40,38,31,.88)`（对齐 raised 档，与底 ≥1.25:1）；或按 D1-a 结论改实底 |
| `frontend/css/components.css:197` | `.el-radio-button__original-radio:checked + .el-radio-button__inner` 的 `backdrop-filter` 删除，改 `--qc-primary-200` 实底 |

### B 批次验收

```
死令牌 --btn-*                     = 0（每个都有 CSS 消费方）
亮/暗主按钮                         同族（soft 语言），对比 <= 8:1
同排按钮                            高度/字号/圆角一致
暗色玻璃 / 底                       >= 1.25 或已改实底
backdrop-filter 生效规则数           = 6（仅浮层）
```

---

## 3. 批次 C（6.5.8）— 排版

### C1 中文回退一致性（原"字体栈决策"，已勘误）

**勘误前提**：`Inter` **已自托管并随构建打包**（`frontend/src/main.js:7-11` 导入 `@fontsource/inter/latin-400/500/600/700.css`，`dist/assets/*.css` 内含 `@font-face`）。所以**不需要再引入 Inter**，原"移除 or 内嵌"的二选一作废。

真实问题只剩**中文回退跨平台不一致**：Inter 仅覆盖 latin，汉字回落 `PingFang SC`(macOS) / `Microsoft YaHei`(Windows) / `Noto Sans SC`(Linux) → 同一卡片汉字字宽与换行位置在 Windows 与 macOS 不同。

- **C1-a（推荐，零成本）** 固定中文回退序并写入注释：`'Inter', 'PingFang SC', 'Microsoft YaHei', 'Noto Sans SC', sans-serif`；设计稿标注"以雅黑为准"。改动仅 `tokens.css:189-207` 的顺序整理 + 注释。
- **C1-b（跨平台一致，需体积）** 内嵌中文字体子集（思源黑体 Regular/Medium 常用字，约 2–4MB，按 `unicode-range` 分片懒加载）。仅当产品要求像素级跨平台一致时采用。

### C2 字号阶梯压缩

现状 10 档：12/13/14/16/18/20/22/32/36/40，其中 12↔13↔14 相邻不可辨、命名 `2xl(32) < 3xl(36) < icon(40)` 错乱、`lg2` 为补丁名。

目标 6 档：**12 / 14 / 16 / 18 / 22 / 28**。

实施方式（避免全站 616 处硬改）：
1. `tokens.css` 保留旧变量名作为**别名**指向新档（`--qc-font-size-sm: 14px`、`--qc-font-size-md: 16px`、`--qc-font-size-lg: 18px`、`--qc-font-size-xl: 22px`、`--qc-font-size-2xl: 28px`）；
2. 删除 `--qc-font-size-lg2`、把 `--qc-font-size-icon` 改名 `--qc-icon-size`（脱离字号阶梯）；
3. 逐步替换业务引用（可选后续批次）。

> 这样 C2 是"改 6 行令牌"，不是"改 616 处引用"，风险极低。

### C3 角色层令牌

新增（`tokens.css`）：
```
--font-role-page-title: var(--qc-font-size-xl);    /* 22 */
--font-role-card-title: var(--qc-font-size-lg);    /* 18 */
--font-role-data-value: 22px;                      /* 数据主值 */
--font-role-label:      var(--qc-font-size-sm);    /* 14 */
--font-role-caption:    var(--qc-font-size-xs);    /* 12 */
```
页面层新代码只引用角色层；老代码不动（渐进迁移）。

### C4 字重纪律

- `.card-title`（`themes.css:706-714`）由 600 降为 **500 + 18px**（用尺寸建层级，而非字重）；
- 全站约定"一屏一处 700"：700 仅给页面级关键数值（共识度/涨跌幅）；
- 双轨令牌收敛：`var(--font-semibold)` → `var(--qc-font-weight-semibold)`（脚本批量替换后删别名，可延后到 6.5.9）。

### C 批次验收

```
字体栈                            不含不可加载字体（或已提供 @font-face）
字号档位                          6 档，相邻差 >= 2px
--qc-font-size-lg2                = 0（已删除）
字重裸值 600/700                  不再新增（现值 16 处不增长）
卡片标题                          18px/500
```

---

## 4. 改动面与耦合风险清单

| 风险 | 说明 | 处置 |
|---|---|---|
| `parity_golden` 指纹必然失效 | 组件模板/CSS 指纹含 `--qc-*` 与按钮样式 | 每批发布前重建指纹并**人工确认差异清单** |
| `test_theme_contrast.py` 现有 38 条断言 | A2 加深描边可能让 `--border-control` 与新 `--qc-border` 冲突 | 先跑红基线，再改；`--border-control` 独立于 `--qc-border` 不动 |
| 暗色 `themes.css` 与 `themes.js` 双写 | A1/A3 若只改 JS，CSS 兜底值会变陈旧 | 约定"CSS 仅兜底且必须与 JS 同档"，A3 顺带清理死值 |
| `.el-button` 全局 `!important` | B1 改动影响全站按钮 | 分批：先删死令牌→跑全量→再改形态；准备单文件回滚 |
| 字号别名重映射 | 12→? 若把 13 并入 14，某些紧凑表格会溢 | 仅改令牌不改引用；溢出问题在后续批次按页修 |
| 缓存污染 | 视觉改动极易被 SW/浏览器缓存掩盖 | 每批发布执行 SW 清理 + `?v=6.5.x` 参数 |

---

## 5. 发版与验收流程（每批相同）

1. **红基线**：新增门禁先在当前代码上运行，确认 **失败**（证明门禁有效）；
2. 实施改动 → 单文件粒度提交；
3. 跑 `pytest tests/test_theme_contrast.py tests/test_contrast.py tests/test_surface_ladder.py ...`（快检，秒级）；
4. 重建 `parity_golden` 指纹，人工比对差异；
5. 全量回归（`.venv/Scripts/python.exe -m pytest`，约 3878 用例 / 11 分钟）；
6. 亮/暗双主题截图 6 张（侧栏/卡片/按钮/表单/玻璃浮层/数据列表）；
7. 版本号三处同步：`backend/main_new.py` 的 `APP_VERSION`、`README.md`、`HANDOVER.md`；
8. 前端构建 → 停 8000 端口 → `robocopy` 同步 dev→ops → 启动 → 验证 `/api/version` 与 `/api/system/health`；
9. 访问验证 + 硬刷新（`?v=swclear`）。

---

## 6. 工作量与排期（相对量，不含等待决策时间）

| 批次 | 改动文件 | 新增门禁 | 相对工作量 |
|---|---|---|---|
| Gate 0 | 决策文档 | — | XS |
| A | 3 个 | 2 个 | S |
| B | 3 个 | 2 个 | M |
| C | 2–3 个（+可选字体资源） | 1 个 | S（C1-a）/ M（C1-b） |

> 不建议合并批次：A/B 都动 `themes.css`，合并会导致"对比度门禁变红时无法判断是哪一批引起"。

---

## 7. 明确不做（避免范围蔓延）

- 不改导航形态与菜单结构（用户已确认通过）；
- 不改 `.vue` 组件结构与页面布局（属上一份日历报告的范围）；
- 不重设计图标体系；
- 不引入 CSS 框架/预处理器；
- 不做"深浅自动跟随系统"之外的第三种模式；
- 不动 `--qc-*` 之外的历史别名（`--bg-*` / `--text-*` / `--border-*`）——它们是 EP 桥接层，B 批次后单独评估。
