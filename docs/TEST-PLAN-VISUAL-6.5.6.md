# 测试计划 — 视觉原子层治理（6.5.6 / 6.5.7 / 6.5.8）

- 配套开发计划：[DEV-PLAN-VISUAL-6.5.6.md](file:///d:/MyCoding/QuantCalendar/quant-calendar-dev/docs/DEV-PLAN-VISUAL-6.5.6.md)
- 评估依据：[EVAL-VISUAL-TOKENS-6.5.5.md](file:///d:/MyCoding/QuantCalendar/quant-calendar-dev/docs/EVAL-VISUAL-TOKENS-6.5.5.md)
- 解释器（强制）：`d:\MyCoding\QuantCalendar\quant-calendar-dev\.venv\Scripts\python.exe`（全局 python 会误报环境类失败）
- 测试基数：`tests/` 下 **364** 个测试文件，全量约 **3878** 用例 / 约 **11 分钟**

---

## 0. 结论先行：不新建体系，扩展现有门禁

盘点结果（重要）：项目**已有**运行期对比度门禁体系，无需从零搭建——

| 组成 | 文件 | 作用 |
|---|---|---|
| 探针 | `tests/color_probe.js` | 用 **Node 执行 `themes.js`**（运行期唯一权威）收集令牌，覆盖 **明/暗 × 7 色相（含中性）= 14 套** |
| 解析器 | `tests/color_gate.py` | 提供 `CONFIGS / HUES / MODES / runtime_tokens() / resolved() / pair() / color()`，支持"叠加底"级联 |
| 契约表 | `tests/test_theme_contrast.py` | 38 条断言（正文/品牌/导航/语义/行情/非文本边界），阈值 4.5 / 3.0 |
| 文字层级 | `tests/test_contrast.py` | 四级文字色阶 + 阶内去重 + 占位符 4.5:1 |
| 其它 | `test_color_tokens.py` `test_tokens_defined.py` `test_tokens_no_hardcode.py` `test_glass_tokens_622.py` `test_theme_shadows_v482.py` `test_a11y_631.py` | 令牌存在性/禁硬编码/玻璃/阴影/可达性 |

**已定位到两个真实覆盖盲区**（正是本轮要补的）：

1. `test_light_and_dark_surface_contract`（[test_theme_contrast.py:103-112](file:///d:/MyCoding/QuantCalendar/quant-calendar-dev/tests/test_theme_contrast.py#L103-L112)）对卡片与画布只断言 `card != canvas`——**只要差 1 个色阶就算通过**，这正是"1.04:1 也算有层级"的漏洞；
2. `CHECKS` 表里有 `--border-control` 却没有 **`--qc-border`**（卡片/容器描边），于是 1.90/2.14:1 无人拦截。

---

## 1. 测试分层（L0–L4）

| 层 | 类型 | 触发时机 | 耗时 | 判定 |
|---|---|---|---|---|
| **L0** | 令牌契约（`color_gate` 驱动，14 套配置） | 每次改 `themes.js`/`tokens.css` | 秒级 | 硬门禁，红即阻断 |
| **L1** | 结构/静态（CSS 消费方、死令牌、字体栈一致性、字号档位） | 每次改 CSS | 秒级 | 硬门禁 |
| **L2** | 组件指纹（`parity_golden`） | 改动模板/样式后重建 | 秒级 | 需**人工确认差异清单** |
| **L3** | 全量回归 3878+ | 每批发布前 | ~11 分钟 | 零 fail；已知 skip 白名单外不得新增 skip |
| **L4** | 视觉抽样（亮/暗双主题截图 + 人眼核对） | 每批发布前 | 手工 | 清单逐项打勾 |

设计原则：**L0/L1 必须先在旧代码上跑出"红"**，再让实现变绿。否则门禁与实现同源，等于自证。

---

## 2. 新增门禁（4 个文件）

### 2.1 `tests/test_surface_ladder.py` — 面层级阶梯（补 0.1 盲区）

```python
# 阈值: 相邻表面 >= 1.25:1 (低于此值人眼不可辨, 评估报告实测当前为 1.04~1.10)
LADDER = [
    ("画布/卡片",   "--surface-canvas", "--surface-card"),
    ("卡片/凸起",   "--surface-card",   "--surface-raised"),
    ("卡片/凹陷",   "--surface-card",   "--surface-sunken"),
    ("卡片/输入",   "--surface-card",   "--surface-input"),
]
MIN = 1.25
```

断言项：

| # | 断言 | 覆盖 |
|---|---|---|
| S1 | 14 套配置下 4 组相邻面比值 ≥ **1.25** | 明暗 × 7 色相 |
| S2 | `--surface-card` 与 `--surface-canvas` **不同色**（保留旧断言，防回退） | 同上 |
| S3 | 暗色下 `--chart-bg == --surface-card`（已有断言迁移至此或保留在原处） | 暗色一致性 |
| S4 | 表面角色令牌 5 个全部存在 | 同上 |

> 若 D1-b（暗色固定 hue 220）被执行，S1 阈值不变，仅数值重算。

### 2.2 `tests/test_button_tokens.py` — 按钮单一体系与死令牌

| # | 断言 | 依据 |
|---|---|---|
| B1 | 每个 `--btn-primary-*` 令牌在 `frontend/css/**` 中**至少 1 处消费** | 现状 `--btn-primary-bg/color/hover-bg/active-bg` 被 `!important` 压制 = 死令牌 |
| B2 | `--brand-soft-bg` / `--brand-soft-text` 组合 ≥4.5:1（沿用已有 CHECKS 项，此处不重复） | 已有 |
| B3 | `.el-button` 必须显式声明 `height: var(--qc-ctrl-h*)` | 修复"padding 推导高度" |
| B4 | `.el-button` 字号**只允许** `--qc-font-size-base` | 现状 14/13 混用 |
| B5 | 圆角**只允许** `--qc-radius-medium` | 现状 6px 单一但与输入框不一致 |
| B6 | 全局 `.el-button--primary` 的 `!important` 出现次数 ≤ **3**（bg/border/color），不得再有第四组覆盖 | 防止再次双写 |
| B7 | 暗色主按钮文字对比在 **[4.5, 8.0]** 区间 | 上界防"过曝"（现状 12.26:1） |

实现要点：B1 用"令牌名 → CSS 文本正则出现次数"统计，忽略 `tokens.css` 中的定义行；B7 用 `color_gate.pair("dark", hue, "--brand-soft-text", "--brand-soft-bg")`。

### 2.3 `tests/test_font_stack.py` — 字体栈可加载性

| # | 断言 | 依据 |
|---|---|---|
| F1 | `--qc-font-sans` / `--qc-font-display` 中出现的**每个具体字族**，要么存在 `@font-face`（含构建产物 `dist/assets/*.css` 与 `frontend/src/**` 的 `import '@fontsource/...'`），要么在本机字体白名单（`-apple-system / PingFang SC / Microsoft YaHei / Noto Sans SC / system-ui / sans-serif`）内 | **勘误后**：`Inter` 经 `@fontsource` 自托管，F1 对现状应为**绿**；本断言用于防止"新增了未加载字体" |
| F2 | `Inter` 必须存在 `@font-face` **且** `font-display: swap`（fontsource 默认提供） | 防"声明了没加载"（已满足） |
| F3 | `index.html` 中若引入外部字体，必须有 `rel="preconnect"` 或本地资源 | 首屏性能（当前无外部字体链接） |
| F4 | 中文回退序必须包含 `PingFang SC` 与 `Microsoft YaHei`（Windows/macOS 双覆盖） | 防止 C1-a 回退序被误删 |

> **勘误说明**：原计划把 F1 设计为"必红门禁"（假设 `Inter` 无 `@font-face`）。实测 `Inter` 已由 `@fontsource/inter` 自托管并在 `frontend/src/main.js:7-11` 导入、构建产物含 `@font-face` → F1 对现状为绿，改为**防回退门禁**。审计脚本必须同时扫描 `frontend/src/**` 的 `import` 与 `dist/assets/*.css`。

### 2.4 `tests/test_type_scale.py` — 字号阶梯与角色层

| # | 断言 |
|---|---|
| T1 | 字号档位数为 **6**，且相邻差 ≥ **2px** |
| T2 | `--qc-font-size-lg2` **不存在** |
| T3 | `--qc-font-size-icon` **不存在**（已改名 `--qc-icon-size`，不得留在字号阶梯） |
| T4 | 角色层 5 个令牌全部存在且可解析为具体 px |
| T5 | 裸 `font-size: <数字>px` 出现次数 **= 0**（保留现有成果，防回退；现状 0） |
| T6 | `.card-title` 为 `18px / 500`（正则同时校验字号与字重） |

### 2.5 `tests/test_dark_residue.py` — 暗色死值回落检测

| # | 断言 | 依据 |
|---|---|---|
| R1 | 暗色分支必须提供 `--card-border` / `--surface` / `--bg-code` / `--text-disabled`（不得依赖 `themes.css` 回落） | 现状 4 个令牌回落到海军蓝，1.06–1.16:1 |
| R2 | 上述令牌在暗色 7 色相下，其 **HSL 色相角与 `hue` 偏差 ≤ 25°**（防冷色压在暖底上） | 现状 `#8892b0`/`#1a2a44` 明显偏蓝 |
| R3 | `--qc-border/--surface-card` ≥ **3.0**（描边提级，A2） | WCAG 1.4.11 |
| R4 | 暗色不存在 `#0b1220` / `#101a2e` / `#16233b` / `#111827` / `#0f172a` 等海军蓝字面值（或已被注释标记为兜底） | 治理死值 |

---

## 3. 既有测试的修改点（3 处）

| 文件 | 位置 | 修改 | 原因 |
|---|---|---|---|
| `test_theme_contrast.py` | `CHECKS` 表 L25-75 | **新增 2 条**：`("容器描边/卡片","--qc-border","--surface-card",None,3.0)`、`("容器描边/页底","--qc-border","--surface-canvas",None,3.0)` | 补描边盲区 |
| `test_theme_contrast.py` | `test_light_and_dark_surface_contract` L103-112 | 把 `card != canvas` 升级为 **`pair(...) >= 1.25`**（保留 `!=` 断言作第二道） | 补"有形无感"漏洞 |
| `test_a11y_631.py` | 读样式处 | 若 A1/A3 的改动写入新 CSS 文段，需按**5 文件聚合 join 口径**同步读取点 | 拆文件会导致扫描分母塌缩、比率门禁虚高 |

**不得修改**的测试（防止把门禁改松）：
- `test_contrast.py` 的文字四级阈值（4.5/3.0）；
- `test_tokens_no_hardcode.py`（新增令牌必须走令牌，不得写裸色值）；
- `test_frontend_consistency.py` 中与按钮/模板结构相关的既有断言（若 B 批次触发，走"重建指纹"而非改断言）。

---

## 4. 执行顺序与命令

### 4.1 单批次快检（每次提交，约 10–20 秒）

```powershell
cd d:\MyCoding\QuantCalendar\quant-calendar-dev
.venv\Scripts\python.exe -m pytest tests/test_theme_contrast.py tests/test_contrast.py `
  tests/test_surface_ladder.py tests/test_button_tokens.py tests/test_font_stack.py `
  tests/test_type_scale.py tests/test_dark_residue.py tests/test_glass_tokens_622.py -q
```

### 4.2 指纹重建（A/B/C 各一次）

```powershell
.venv\Scripts\python.exe -m pytest tests/test_behavior_parity_630.py -q
.venv\Scripts\python.exe -m pytest tests/test_behavior_parity_630.py --regen  # 按项目实际重建开关
```
> 重建后必须 `git diff tests/parity_golden/frontend_components_630.json` **逐条人工确认**：只允许出现"预期内的样式/模板指纹变化"。

### 4.3 全量回归（发布闸门，约 11 分钟）

```powershell
.venv\Scripts\python.exe -m pytest -q
```
判定：
- 新增 fail **= 0**；
- 新增 skip **= 0**（性能/IO 类环境自校准 skip 需在报告里逐条列出并说明）；
- 既有已知 fail（如预期内的指纹差异）必须在重建后消失。

### 4.4 环境前置

| 依赖 | 要求 | 缺失时处置 |
|---|---|---|
| Node（`color_probe.js`） | 需可执行 `node` | 该层门禁 **skip 并显式告警**，不得静默通过；L4 手工补 |
| 8000 端口服务 | 用于 L4 截图 | 未启动则 L4 阻塞，不影响 L0–L3 |
| 浏览器截图工具 | 本轮实测**曾失效**（暗色截图连续失败） | 准备降级方案：读取 DOM 运行期属性 + 手算比值（本轮评估即如此完成） |

---

## 5. 验收矩阵（批次 × 门禁）

| 门禁 | 基线 6.5.5 | A(6.5.6) | B(6.5.7) | C(6.5.8) |
|---|---|---|---|---|
| S1 面阶梯 ≥1.25 | ❌ 红 | ✅ 必须绿 | ✅ | ✅ |
| S2 卡片≠画布 | ✅ | ✅ | ✅ | ✅ |
| R3 描边 ≥3.0 | ❌ 红 | ✅ 必须绿 | ✅ | ✅ |
| R1/R2 暗色残留 | ❌ 红 | ✅ 必须绿 | ✅ | ✅ |
| R4 海军蓝死值 | ❌ 红 | ✅ 必须绿 | ✅ | ✅ |
| B1 死令牌=0 | ❌ 红 | — | ✅ 必须绿 | ✅ |
| B3/B4/B5 尺寸字号圆角 | ❌ 红 | — | ✅ 必须绿 | ✅ |
| B7 暗色按钮 [4.5,8.0] | ❌ 红(12.26) | — | ✅ 必须绿 | ✅ |
| F1 字体可加载 | ❌ 红 | — | — | ✅ 必须绿 |
| T1/T2/T3 字号档位 | ❌ 红 | — | — | ✅ 必须绿 |
| T5 裸 px 字号=0 | ✅ | ✅ | ✅ | ✅ 不得回退 |
| L3 全量回归 | ✅ | ✅ 零新增 fail | ✅ | ✅ |
| L4 双主题截图 | 手工 | 6 张 | 6 张 | 6 张 |

> 表格设计为"**基线全红、逐批变绿**"，这样每批都能证明自己解决了什么，而不是打包发布后无法归因。

---

## 6. L4 视觉抽样清单（每批 6 张，亮/暗各 3）

| 场景 | 检查项 |
|---|---|
| 侧栏 + 顶部导航 | 描边可辨、激活项对比不过曝 |
| 销售/列表卡片区 | 画布↔卡片↔行卡三档肉眼可分；行间不粘连 |
| 表单（输入 + 按钮 + 分段控件） | 按钮同高同字号；输入边界 3:1 |
| 浮层（日期范围/通知） | 玻璃层次可辨；暗色不"发灰无质感" |
| 数据详情（涨跌/数值） | 涨跌文字 4.5:1；数字列等宽对齐（跨字体） |
| 空/错/加载三态 | 三态文案与视觉不混淆（承接日历报告 A4） |

**跨机核验（C 批次必做）**：在"未安装 Inter 的 Windows"与"已安装 Inter 的机器"各截一张数据列表，比对数字列宽与基线——这是 F1 门禁的人工补充（门禁只能查声明，查不了渲染）。

---

## 7. 缺陷分级与出口准则

| 级别 | 定义 | 处置 |
|---|---|---|
| **Blocker** | L0/L1 红；或 L3 新增 fail | 阻断发布 |
| **Critical** | L4 出现"层级不可辨/文字不可读/按钮过曝" | 阻断发布 |
| **Major** | 跨机字体不一致、色相在暗色下无反馈 | 记录并排入下一批 |
| **Minor** | 命名不规范（`lg2`）、注释陈旧 | 随手修，不阻断 |

**出口准则（每批）**：L0/L1 全绿 + L3 零新增 fail + L4 清单全勾 + 版本号三处同步 + ops 部署后 `/api/version` 与 `/api/system/health` 通过。

---

## 8. 风险与缓解

| 风险 | 影响 | 缓解 |
|---|---|---|
| **门禁与实现同源**（同一人既改令牌又改断言） | 门禁形同虚设 | 强制"先红后绿"：门禁 PR 与实现 PR 分开提交 |
| Node 缺失导致 `color_probe` 不可用 | L0 静默跳过 → 对比度回归无人拦 | 缺 Node 时**输出显式 WARN 且 CI 记为不完整**，并在 L4 人工补 |
| `themes.css` 与 `themes.js` 双写漂移 | 令牌值不一致，回落死值复现 | R1/R4 专治；每批同步更新两侧 |
| `parity_golden` 掩盖真实回归 | 指纹重建把 bug 一起"合法化" | 重建必须 diff 审阅，禁止无审阅 `--regen` |
| 描边加深引发"廉价感" | 观感降级但门禁全绿 | 属 L4 人眼项，列入 Critical |
| 暗色截图工具不可用 | L4 证据缺失 | 降级：DOM 属性 + `color_gate` 实算 + 人工描述，并在验收记录中标注"证据等级 B" |
| 24 套主题组合无法全测 | 局部色相遗漏 | L0 已覆盖 14 套（7 色相 × 明暗）；L4 只抽 hue 45 与 220 两套 |

---

## 9. 交付物

| 交付物 | 路径 |
|---|---|
| 新增门禁 ×5 | `tests/test_surface_ladder.py`、`test_button_tokens.py`、`test_font_stack.py`、`test_type_scale.py`、`test_dark_residue.py` |
| 修改门禁 ×2 | `tests/test_theme_contrast.py`、`tests/test_a11y_631.py`（读取口径） |
| 指纹重建记录 | `tests/parity_golden/frontend_components_630.json` + 差异说明 |
| 回归报告 | 每批一份 `docs/REPORT-REGRESSION-6.5.x.md`（新增 fail / skip 清单） |
| 视觉证据 | `_eval_shots/` 下亮/暗各 3 张 + 跨机 2 张 |
| 版本同步 | `backend/main_new.py`(APP_VERSION) / `README.md` / `HANDOVER.md` |

---

*编制：2026-10-27 · 基线 6.5.5 · 门禁口径：WCAG 2.1（文字 4.5 / 非文本 3.0）+ 面层级 1.25（本项目新增）*
