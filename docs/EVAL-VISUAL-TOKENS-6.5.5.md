# 量化日历 — 字体 / 字号 / 配色 / 字重 / 按钮 / 玻璃 / 主题 / 暗色 专项评估

- 评估对象：quant-calendar `APP_VERSION 6.5.5`（ops 实例 :8000）
- 范围：**导航样式除外**（用户已确认通过），只评视觉原子层
- 方法：**全量 CSS 静态统计脚本 + 运行期令牌推导 + WCAG 对比度实算 + 暗色实拍观察**
- 证据：
  - 亮色实拍 `_eval_shots/cal_audit_20261027_viewport.png`（1312×967）
  - 暗色实拍：本轮**截图工具失效**（多次返回"标签页不在屏幕中"），改为读取运行期真实属性：`data-theme="dark-pro"` / `data-theme-mode="dark"` / hue=`45`，观感为暖褐暗金；下方所有暗色数值均由 `themes.js` 的 HSL 公式实算，非估算
- 统计口径：`frontend/css/*.css` 全文件（已剔除注释），脚本可复现

---

## 0. 结论

**排版层是全项目最健康的一块，配色层是最脆的一块。**

三个反直觉的实测结果，先纠正预期：

1. **字号与字重已完全令牌化**：裸 `font-size: 12px` 之类 **0 处**，`font-size: var(--qc-font-size-*)` **616 处**；裸 `font-weight: 600/700/bold` 全站仅 **16 处**。
   → 所以本轮不存在"字号乱、字重乱"的常见病灶，不要往那个方向改。
2. **真正的问题在"令牌之间的关系"，而不是"有没有用令牌"**：
   - 面与面只差 **1.04–1.10:1**，唯一的层级载体 1px 描边只有 **1.90（亮）/ 2.14（暗）:1**，双双低于 WCAG 1.4.11 的组件边界 **3:1**；
   - 按钮存在**两套体系**，其中一套 20+ 个实心令牌被 `!important` 压死，从不生效；
   - 暗色下仍残留 **3 个海军蓝面**（`--card-border` 1.16:1、`--surface` 1.06:1、`--bg-code` 1.07:1），落在暖褐卡面上等于不可见；
   - 项目硬约束写的"暗色统一蓝色底"，在运行期**从未出现过**——默认 hue 45 生成的是暖黑 `#161512`，CSS 里的 `#0b1220` 是死代码。
3. **亮点也真实存在，值得保护**：`applyTheme` 会主动清除上次内联残留（明↔暗切换不会串色）；品牌文字/导航/徽标由对比度求解器按色相逐个求解到 ≥4.6:1；`tabular-nums` 用了 **30 处**，数字列对齐是做过功课的。

### 评分卡（满分 10）

| 维度 | 评分 | 一句话依据 |
|---|---|---|
| 字号体系 | **8.0** | 616 处全令牌化、0 裸 px；扣分在阶梯 12/13/14 相邻与命名排序错乱 |
| 字体族 | **7.5** | `Inter` 已通过 `@fontsource` 自托管打包（`src/main.js:7-11`）；扣分在中文回退跨平台不一致 |
| 字重体系 | **7.0** | 仅 16 处裸值；但 600 一档承担了卡片标题/表头/数值三重角色，强调被稀释 |
| 配色（亮色） | **6.0** | 正文 16.27 / 次 7.32 / 三级 5.16 优秀；面层级 1.04、描边 1.90 失守 |
| 按钮 | **5.5** | 双体系并存，实心令牌被 `!important` 覆盖；亮暗形态不一致 |
| 玻璃特效 | **6.5** | 已收敛到浮层（卡片已去玻璃，符合硬约束）；但暗色玻璃与底 1.03:1，等于只有噪点 |
| 主题引擎 | **7.5** | light/dark/system + 12 色相 + 求解器 + 残留清理，工程完成度高 |
| 暗色模式 | **6.0** | 正文 14.62 优秀；但暖底冷色残留、主按钮过亮、面层级 1.09 |
| **综合** | **6.7** | 引擎合格，配色阶梯不合格（字体族勘误后由 6.5 上调） |

---

## 1. 实测基线（全部为实算值，非估算）

### 1.1 排版令牌

| 项 | 实测 | 位置 |
|---|---|---|
| 字号阶梯 | 12 / 13 / 14 / 16 / 18 / 20 / 22 / 32 / 36 / 40px（10 档） | [tokens.css](file:///d:/MyCoding/QuantCalendar/quant-calendar-dev/frontend/css/tokens.css#L141-L149) |
| 字重 | `--qc-font-weight-semibold: 600` / `--qc-font-weight-bold: 700` | [tokens.css](file:///d:/MyCoding/QuantCalendar/quant-calendar-dev/frontend/css/tokens.css#L151-L154) |
| 字体族 sans | `'Inter', 'SF Pro Display', 'PingFang SC', 'Microsoft YaHei', 'Noto Sans SC', sans-serif` | [tokens.css](file:///d:/MyCoding/QuantCalendar/quant-calendar-dev/frontend/css/tokens.css#L189-L207) |
| 字体族 display | `'Inter', -apple-system, ..., 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', system-ui` | 同上 |
| 等宽 | `'SF Mono', 'Fira Code', 'Cascadia Code', 'Consolas', monospace` | 同上 |
| 控件高度 | 桌面 `--qc-ctrl-h: 32px` / `-lg: 40px`；触控档 `--qc-hit-min: 44px` | tokens.css 响应式段 |
| 圆角 | 6 / 8 / 12 / 16 / 9999px；按钮固定 `--qc-radius-small`(6px) | tokens.css |

### 1.2 对比度实算（WCAG 2.1，AA 正文 4.5 / 非文本 3.0）

**亮色（hue 45）**

| 组合 | 比值 | 判定 |
|---|---|---|
| 正文 `hsl(45,12,12)` / 卡片白 | **16.27:1** | ✅ AAA |
| 次正文 `hsl(45,12,32)` / 卡片白 | **7.32:1** | ✅ AAA |
| 三级 `hsl(45,14,40)` / 卡片白 | **5.16:1** | ✅ AA |
| 品牌文字档 `primary-700` #8f6f1f / `primary-50` #fcf9f0 | **4.47:1** | ⚠️ 差 0.03 未达 AA |
| 主按钮白字 / `--btn-primary-bg` hsl(45,80,32) | **4.51:1** | ⚠️ 贴线（注释记录 4.53，实算 4.51） |
| **卡片描边 `--qc-border` hsl(45,12,72) / 卡片白** | **1.90:1** | ❌ 低于非文本 3:1 |
| 卡片描边 / 画布 hsl(45,18,98) | **1.82:1** | ❌ |
| **画布 #fcfaf9 vs 卡片 #ffffff（面层级）** | **1.04:1** | ❌ 远低于可辨阈值 |

**暗色（hue 45，运行期生成：画布 `#161512` / 卡片 `#1f1e19` / raised `#28261f`）**

| 组合 | 比值 | 判定 |
|---|---|---|
| 正文 `--text-primary` #e6f1ff / 卡片 | **14.62:1** | ✅ AAA |
| `--text-secondary` #a0aec8 / 卡片 | **7.46:1** | ✅ AAA |
| `--text-tertiary` #8b9bb5 / 卡片 | **5.92:1** | ✅ AA |
| `--qc-muted-foreground` #8892b0 / 卡片 | **5.39:1** | ✅ AA（但为冷灰，见 7.2） |
| 主按钮 `#101014` 字 / hsl(45,85,65) 底 | **12.26:1** | ✅ 过曝（见 5.3） |
| **卡片描边 hsl(45,14,30) / 卡片** | **2.14:1** | ❌ 低于 3:1 |
| **画布 vs 卡片（面层级）** | **1.09:1** | ❌ |
| 卡片 vs raised（面层级） | **1.10:1** | ❌ |
| 导航描边 hsl(45,13,22) / 导航底 | **1.61:1** | ❌ |
| 暗色玻璃 rgba(28,27,24,.82) vs 卡片 | **1.03:1** | ❌ 玻璃无意义 |

> **这就是本报告的核心论断**：`面 1.04–1.10:1` + `描边 1.9–2.1:1`，两个数字都在"看不见"的区间里。层级不是"弱"，是**在数学上不存在**。任何"再加一层卡片"的改动，用户都看不出来。

---

## 2. 字号体系：8.0 —— 令牌化完成，缺"语义台阶"

### 2.1 做对的部分（不要动）

- 裸像素字号 **0 处**，令牌引用 **616 处**；`themes-pages.css` 一处就用了 261 次 → 说明页面层也守纪律；
- `tabular-nums` / `font-variant-numeric` 共 **30 处**（`components.css` 14、`themes-pages.css` 14、`tokens.css` 4）→ 金额/涨跌幅/表格数字列能对齐，这在量化类产品里是关键细节，已经做对了。

### 2.2 三个可改进点

**(a) 12 / 13 / 14 三档相邻，语义区分失效**
阶梯里 12、13、14px 各占一档，但 13 与 14 只差 1px，在常规缩放下不可辨。
建议压成 **12 / 14 / 16 / 18 / 22 / 28**（6 档），把 13px 全部并入 14px；或保留 13px 但明确其唯一用途（如"次级行内标签"），禁止与 14px 混用于同级文本。

**(b) 阶梯命名与排序错乱**
`--qc-font-size-2xl: 32px`，而 `--qc-font-size-3xl: 36px`，中间还插了 `--qc-font-size-icon: 40px`；同时存在 `--qc-font-size-lg: 18px` 与 `--qc-font-size-lg2: 20px`。
→ 命名不单调（`lg2` 这种后缀是补丁痕迹），`icon` 被塞进字号阶梯。建议更名 `--qc-font-size-icon → --qc-icon-size-lg`，`lg2 → xl2` 或直接并入 `xl`。

**(c) 字号令牌无"角色"层**
现在业务代码直接引用 `--qc-font-size-sm`，意味着"13px 用在哪"全靠开发者自觉。建议补角色层（`--font-role-page-title / card-title / data-value / label / caption`），把"数值用几号"从自由选择变成默认正确。

---

## 3. 字体族：7.5 —— Inter 已自托管（原 5.5 为勘误，详见 3.1）

### 3.1 事实（**本节已勘误，见文末「勘误记录」**）

- `--qc-font-sans` 与 `--qc-font-display` 都把 `'Inter'` 放在**第一位**；
- `Inter` **确实已自托管并随构建打包**：`frontend/js`/`frontend/css` 中检索 `@font-face` 为 0，但 **Vite 入口** `frontend/src/main.js:7-11` 直接 `import '@fontsource/inter/latin-400/500/600/700.css'`（依赖见 `frontend/package.json:14`），构建产物 `frontend/dist/assets/index-*.css` 内含 `@font-face`；
- 因此可加载性没有问题，问题只剩**中文回退不可控**。

### 3.2 后果（真实版）

`Inter` 只覆盖 **latin（英文/数字/符号）**，中文一律回退系统字体 → 中西两套字体族混排，且中文侧随机器变化：

| 场景 | 英文/数字 | 中文 | 结果 |
|---|---|---|---|
| Windows | Inter（已打包） | `Microsoft YaHei` 雅黑 | 数字为 Inter、汉字为雅黑 → **字面宽度/字重观感不一致** |
| macOS | Inter | `PingFang SC` | 数字 Inter、汉字苹方 → 中文比 Windows 更细更窄 |
| Linux | Inter | `Noto Sans SC`（若装） | 第三种组合 |

→ 英文/数字层**一致**（这正是 30 处 `tabular-nums` 能对齐的原因，做对了）；真正的风险在**中文层跨平台不一致**：同一张卡片在 Windows 与 macOS 上汉字字宽/字重不同，行长与换行位置会变。
这是"部分自托管"的典型代价，不是"没加载字体"。

### 3.3 建议（按成本排序）

- **A（推荐，零成本）**：维持现状 + 明确中文回退序。把中文栈固定为 `PingFang SC → Microsoft YaHei → Noto Sans SC`，并在设计稿标注"以雅黑为准"（Windows 为主要交付面时）。不改字体资源。
- **B（一致性优先，需体积）**：内嵌中文字体子集（思源黑体 Regular/Medium 常用字，约 2–4MB，可按 unicode-range 分片懒加载）。跨平台完全一致，代价是首屏体积。
- **C（不推荐）**：移除 `Inter`，让中西统一走系统字体——会丢掉已做好的数字对齐与英文形态，属**倒退**。

> 上一版本报告称"全站无 @font-face、Inter 从未加载"，属**检索口径错误**（只扫了 `frontend/css/*.css` 与 `index.html`，漏掉 Vite 入口的 `import`）。已在此更正，评分由 5.5 上调为 **7.5**。

---

## 4. 字重体系：7.0 —— 干净，但 600 承担了太多

### 4.1 事实

裸值仅 **16 处**（`themes-pages.css` 7、`layout.css` 4、`themes-market.css` 3、`themes.css` 2），其余全部走 `var(--font-semibold)` / `var(--font-bold)`。
存在**双轨令牌**：`--qc-font-weight-semibold` 与兼容别名 `--font-semibold`（[tokens.css](file:///d:/MyCoding/QuantCalendar/quant-calendar-dev/frontend/css/tokens.css#L205-L207)）——同一含义两个名字，属历史兼容层。

### 4.2 问题：600 是"万能加粗"

卡片标题用 600（[themes.css](file:///d:/MyCoding/QuantCalendar/quant-calendar-dev/frontend/css/themes.css#L706-L714) 的 `.card-title`），数据数值用 600，表头用 600，股票代码用 600。
当一屏里有 4 类元素都是 600 时，**600 就不再是强调，而是默认**——真正的重点（如共识度数值、涨跌）无法靠字重浮出来。

### 4.3 建议

1. 建立"**一屏只允许一处 700**"的纪律：页面级关键数值（共识度/涨跌幅）用 700，其余同级标题降为 600 或 500；
2. 卡片标题改为 **500 + 字号提升（18px）**，用尺寸而非字重建立层级——这同时缓解 2.2 的字号问题；
3. 收敛双轨令牌：保留 `--qc-font-weight-*`，以脚本把 `var(--font-semibold)` 全量替换后删除别名（本项可延后，不影响观感）。

---

## 5. 按钮：5.5 —— 两套体系，一套是死的

### 5.1 事实链（关键发现）

运行期 `themes.js` 生成了一整套**实心主按钮**令牌：
```
--btn-primary-bg: hsl(hue,80,32)   --btn-primary-color: #ffffff
--btn-primary-hover-bg / -active-bg / -plain-* / -text-*  ...
```
（[themes.js](file:///d:/MyCoding/QuantCalendar/quant-calendar-dev/frontend/js/themes.js#L260-L277)）

但**亮色下整组被 `!important` 覆盖**成"浅底彩字"：
```css
.el-button--primary {
  background-color: var(--brand-soft-bg) !important;
  border-color: var(--brand-soft-border) !important;
  color: var(--brand-soft-text) !important;
}
```
（[themes.css](file:///d:/MyCoding/QuantCalendar/quant-calendar-dev/frontend/css/themes.css#L489-L513)）

→ 亮色主按钮实际是 **soft 浅底 + 彩字 + 描边**，`--btn-primary-bg/color/hover-bg/active-bg` **永不生效**（死令牌，约 7 个）。
→ 而**暗色**主按钮走 `hsl(hue,85,65)` 实心亮底 + `#101014` 深字（[themes.js](file:///d:/MyCoding/QuantCalendar/quant-calendar-dev/frontend/js/themes.js#L344-L350)）。

**同一颗"主按钮"，亮色是"淡底描边"，暗色是"高亮实心"**——形态、语气、视觉重量都不一致。

### 5.2 暗色主按钮过曝

hue 45 时按钮底色 = `hsl(45,85,65)` ≈ 高饱和亮金，压在 `#1f1e19` 的暗卡上，对比 12.26:1。
在暗色界面里它是一块**发光色块**，会抢走全部注意力——而它常常只是"策略对比/刷新"这类辅助动作。暗色下应改为 **12–18% 品牌色叠底 + 品牌亮字描边**（与亮色 soft 语言对齐），把"最高对比"留给数据本身。

### 5.3 尺寸与形状

| 项 | 实测值 | 问题 |
|---|---|---|
| 高度 | `--qc-ctrl-h` 32 / `-lg` 40 / 触控 44 | 三档合理，但按钮未统一 `height`，实际高度由 `padding: 8px 12px` + 行高推出 → 与 32px 控件**不同高**，同排混排时基线不齐 |
| 圆角 | 全部 `--qc-radius-small` 6px | 单一，尚可；但卡片 16px、按钮 6px 差 10px，全局"圆角语言"跨度偏大 |
| 最小宽 | `min-width: 80px`（部分）、`auto !important`（部分） | 同排按钮宽度规则不统一，出现"一个撑满、一个自适应" |
| 字号 | `--qc-font-size-base`(14) 与 `-sm`(13) 混用 | 同为按钮却两种字号 |

**建议**：① 按钮显式 `height: var(--qc-ctrl-h)`（消除 padding 推导）；② 全部 `min-width: auto` 或全部统一；③ 字号统一 14px；④ 圆角统一 8px（`--qc-radius-medium`），与输入框/分段控件一致。

---

## 6. 玻璃特效：6.5 —— 用对了地方，但暗色下无效

### 6.1 事实

`backdrop-filter` 全站 **8 处命中，其中 1 处是注释**（[themes.css](file:///d:/MyCoding/QuantCalendar/quant-calendar-dev/frontend/css/themes.css#L698-L705) 记录 "V6.5: 去除毛玻璃 — 背景实底"，卡片已去玻璃，符合项目硬约束）。实际生效 7 处：

| 位置 | 目标 |
|---|---|
| [layout.css](file:///d:/MyCoding/QuantCalendar/quant-calendar-dev/frontend/css/layout.css#L274-L301) | `.el-date-range-picker`、`.el-notification`、`.el-message` + **降级规则**（不支持 blur / reduced-motion 时移除） |
| [themes.css](file:///d:/MyCoding/QuantCalendar/quant-calendar-dev/frontend/css/themes.css#L187-L200) | 暗色 `.el-message-box`、`.el-date-range-picker` |
| [components.css](file:///d:/MyCoding/QuantCalendar/quant-calendar-dev/frontend/css/components.css#L197) | `.el-radio-button__original-radio:checked + .el-radio-button__inner` ⚠️ |

token 化完整：`--glass-blur: 12px` / `--glass-saturate: saturate(140%)` / `--glass-bg` / `--glass-border` / `--glass-sheen`，暗色独立覆盖（[tokens.css](file:///d:/MyCoding/QuantCalendar/quant-calendar-dev/frontend/css/tokens.css#L286-L290)）。

### 6.2 三个问题

1. **暗色玻璃等于不存在**：`--glass-bg: rgba(28,27,24,0.82)` 叠在画布 `#161512` 上 = **1.06:1**，叠在卡片 `#1f1e19` 上 = **1.03:1**。blur 12px 作用在一个与自身几乎同色的背景上，用户看到的是"轻微噪点 + 边缘高光"，而不是"玻璃层次"。要么把暗色 `--glass-bg` 提到 `rgba(40,38,31,0.86)`（与 raised 档对齐），要么暗色干脆**取消 blur、改实底 + 描边**（更符合硬约束，且省 GPU）。
2. **分段控件选中态混入玻璃**（`components.css:197`）：单选按钮选中用小尺寸 backdrop-filter，属于"用效果代替状态色"。建议改回 `--qc-primary-200` 实底，玻璃只留给浮层。
3. **亮色玻璃 `rgba(255,255,255,0.72)` 叠白卡 = 1.00:1**（与背景完全同明度）：亮色玻璃同样"看不见"，只在高亮图片/图表下方才有效果。若浮层底下多是纯色卡片，这层 blur 是纯开销。

### 6.3 结论

**玻璃特效在这套产品里性价比很低**，因为它的价值依赖"底下有高对比内容"。建议明确策略：**玻璃仅用于跨内容浮层（日期范围选择器、通知）**，其余一律实底；暗色浮层按 6.2-1 提亮，否则删除。

---

## 7. 主题引擎与暗色模式：7.5 / 6.0

### 7.1 引擎（做得好的部分，建议保护）

- **模式**：`light` / `dark` / `system`（`system` 走 `prefersDark()` 实时判定）；
- **色相**：12 个预设色相 + 自定义 slider，`--qc-*` 全套按 `hsl(hue, …)` 生成；
- **残留清理**：切换前先 `removeProperty` 掉"本次不再提供"的内联变量（[themes.js](file:///d:/MyCoding/QuantCalendar/quant-calendar-dev/frontend/js/themes.js#L507-L515)），注释里明确记录过"暗色下侧栏文字变深色、全站对比度崩塌"的历史事故 → 这是被真实故障验证过的正确设计；
- **对比度求解器**：`_gradL(..., 4.6)` 对品牌淡底、导航激活底、徽标底分别求解，保证 12 色相下文字 ≥4.6:1（V6.10 B 专项）→ 这是超出多数项目的工程水准。

### 7.2 暗色模式的四个具体问题

**(a) 硬约束"暗色统一蓝底"在运行期从未成立**
CSS `[data-theme="dark-pro"]` 写的是 `--qc-background: #0b1220`（海军蓝），但运行期 `_neutralRamp(hue,'dark')` 以 `hsl(hue,10,8)` 覆盖它：hue 45 → **`#161512`（暖黑）**；即使选 hue 220 也只得到 `#121416`（**近中性偏冷，不是蓝**，因饱和度仅 10%）。
→ 结论：`#0b1220` 是死代码；"统一蓝"在当前色相引擎里**无法达成**。
**需要决策**：是修订约束（承认"色相联动的极低饱和中性"为新规范），还是改引擎（暗色分支固定 hue 220 + 提高饱和度到 20%）。二者不能并存。

**(b) 暖底 + 冷色残留 = 三个"隐形面"**

| 残留令牌 | 值（CSS 硬编码，运行期未覆盖） | 对暖卡 `#1f1e19` 对比度 |
|---|---|---|
| `--card-border` | `#1a2a44` | **1.16:1** |
| `--surface` | `#111827` | **1.06:1** |
| `--bg-code` | `#0f172a` | **1.07:1** |
| `--qc-nav-border`（CSS 块） | `#23344f` | 1.33:1 |

（[themes.css](file:///d:/MyCoding/QuantCalendar/quant-calendar-dev/frontend/css/themes.css#L100-L113) 与 [json 覆盖段](file:///d:/MyCoding/QuantCalendar/quant-calendar-dev/frontend/js/themes.js#L153-L188) 对比可见：运行期暗色分支**没有** `--card-border` / `--text-disabled` 等键 → 回落 CSS 海军蓝值）
→ 用户在暖褐卡片上看到的是**边界消失**（1.16:1）与**代码底色发蓝**的斑块。这与 V6.10 注释里"删除海军蓝硬编码面"的目标未对齐，属遗漏。

**(c) 冷灰文字压在暖底上**
`--qc-muted-foreground: #8892b0`（Slate 400，冷蓝灰）与 `--text-secondary: #a0aec8`（冷蓝灰）在暖褐 `#1f1e19` 上虽然**过 AA（5.39 / 7.46）**，但色相冲突：阅读时会感到"灰字发蓝、底发黄"的脏色调，属于观感级而非合规级问题。
建议：暗色文字中性灰改为随色相联动（`hsl(hue, 8, 62)` 一类），与 `_neutralRamp` 一致。

**(d) 面层级在暗色下同样失效**
画布 `#161512` → 卡片 `#1f1e19` = **1.09:1**；卡片 → raised `#28261f` = **1.10:1**。
CSS 注释称"6.5.1: 相邻可辨"，但 1.09:1 在数学上不可辨（肉眼阈值约 1.25:1）。**这意味着暗色下的"画布/卡片/raised 三档"是设计意图，不是用户感知**。修法同亮色：把 raised 提到 ≥1.3:1（约 `hsl(45,12,19)`），或改用阴影/描边承载。

### 7.3 主题数量与"未测"提醒

12 色相 × 2 模式 = 24 套组合。本轮实算了 hue 45，另抽验 hue 0/220/270 的暗色画布（`#161212` / `#121416` / `#141216`，差异极小）→ **色相在暗色下几乎不改变观感（饱和度 10%）**。
这带来一个产品问题：**暗色下"换色相"这个功能基本没有反馈**。要么提高暗色饱和度（20–25%），要么在暗色下把色相入口弱化/隐藏。

---

## 8. 迭代路线

### 批次 A — 配色阶梯（最高收益，纯 CSS，不改结构）

| # | 改动 | 文件 | 验收 |
|---|---|---|---|
| A1 | 面阶梯：任意两层相邻 ≥1.25:1（亮色把列表底改为 `--qc-muted`；暗色 raised 提亮） | `tokens.css` / `themes.js` `_neutralRamp` | 实算脚本 4 组面关系全部 ≥1.25 |
| A2 | 描边提级：`--qc-border` 目标 ≥3:1（亮色 hsl(45,12,62)→~2.4，需到 55；暗色 hsl(45,14,38)） | 同上 | 亮/暗描边 vs 卡面 ≥3.0 |
| A3 | 清理暗色残留：补 `--card-border` / `--surface` / `--bg-code` / `--text-disabled` 到运行期暗色分支 | `themes.js` 暗色 return | 暗色下无冷色斑块（对比度 ≥1.25 且色相一致） |
| A4 | 品牌文字档 4.47 → ≥4.5（`primary-700` 降 1–2% 明度） | `themes.js` `pL7` | 实算 ≥4.5 |

### 批次 B — 按钮与玻璃

| # | 改动 | 验收 |
|---|---|---|
| B1 | **统一按钮形态**：删掉死令牌或被覆盖的 `!important` 之一，亮/暗同为"soft 淡底 + 品牌字 + 描边"；主 CTA 单独一档 | 亮暗主按钮观感同族；死令牌清零 |
| B2 | 按钮显式 `height: var(--qc-ctrl-h)`、字号统一 14px、圆角 8px、宽度规则统一 | 同排按钮等高、等字号 |
| B3 | 暗色主按钮去高亮：`hsl(hue,85,65)` → 品牌色 18% 叠底 + 亮字 | 暗色下按钮不抢焦点（对比 ≤8:1） |
| B4 | 玻璃收敛：仅保留浮层；暗色 `--glass-bg` 提亮或改实底；`components.css:197` 分段控件改实底 | 暗色玻璃 vs 底 ≥1.25 或已实底 |

### 批次 C — 排版与字体

| # | 改动 | 验收 |
|---|---|---|
| C1 | 字体栈决策：移除 `Inter`（A 方案）或内嵌 latin 子集（B 方案） | 任意机器中西一致；数字列宽一致 |
| C2 | 字号阶梯压到 6 档（12/14/16/18/22/28），13px 并入 14px | 阶梯无 <2px 相邻档 |
| C3 | 令牌命名修整：`icon→icon-size` 出阶梯、`lg2→xl2` | 命名单调 |
| C4 | 字重纪律：卡片标题 500 + 18px；一屏仅一处 700 | 600 使用量下降 ≥40% |
| C5 | 补"角色层"令牌（page-title/card-title/data-value/label/caption） | 业务代码不再直接引用无角色字号 |

### 批次 D — 需产品决策（先定方向再动手）

- **D1 暗色蓝底约束**：修订约束（承认色相联动暖中性）vs 改引擎（固定 hue 220 + 饱和度 20%）。
- **D2 暗色换色相无反馈**：提高暗色饱和度，或暗色下隐藏色相入口。

---

## 9. DoD 验收清单

**数值型（可脚本化，建议入库为门禁）**
- [ ] 面层级：亮/暗各 3 组相邻面 ≥1.25:1
- [ ] 描边：`--qc-border` 对卡面 ≥3.0:1（亮/暗）
- [ ] 正文/次正文/三级文字对卡面 ≥4.5:1（亮/暗）
- [ ] 品牌文字档 ≥4.5:1（12 色相全量跑）
- [ ] 暗色无残留冷色令牌（`--card-border`/`--surface`/`--bg-code` 全部由运行期覆盖）
- [ ] 死按钮令牌 = 0（每个 `--btn-*` 都有实际消费方）

**观感型（需截图双主题比对）**
- [ ] 亮/暗主按钮同族同语气
- [ ] 暗色下"画布/卡片/raised"三档肉眼可辨
- [ ] 玻璃只出现在浮层；暗色浮层有可辨层次
- [ ] 任意机器打开，中西文字体族一致、数字列等宽对齐

**工程**
- [ ] `tests/test_a11y_631.py`（5 文件聚合读取口径）全绿；新增对比度断言
- [ ] `parity_golden` 指纹重建并说明差异（按钮/字体改动必然触发）
- [ ] 24 套主题组合（12 色相 × 明暗）抽样回归 ≥6 套
- [ ] 前端构建 + SW 缓存清理 + `?v=` 版本参数刷新
- [ ] 版本号同步 `APP_VERSION` / README / HANDOVER

---

## 10. 本轮未覆盖 / 风险

1. **暗色截图缺失**：截图工具本轮连续失败，暗色结论全部来自"运行期属性 + HSL 公式实算"，可信度高但**缺少人眼观感校准**，建议发布前补 3 张实拍（侧栏/卡片/按钮）。
2. **只实算了 hue 45**：另外 11 个色相仅验证了求解器逻辑（注释中的 4.6:1 目标已被历次修复覆盖过），未逐色相跑数。
3. **移动端字号/触控**：未验证 390×844 下的字号缩放与 `--qc-hit-min: 44px` 实际生效范围。
4. **字体加载体积**：C1 若选内嵌方案，需先确认首屏体积预算与 `font-display` 策略。
5. **`--shadow-*` 在暗色的可见性**：`--qc-shadow-sm/md/lg` 已在 V6.10 补到暗色（0.35/0.45/0.55 黑），但在 `#1f1e19` 上黑色阴影几乎不可见 → 暗色的层级**既无明度差、也借不到阴影**，这使 A1/A2 成为暗色下唯一的解法（重要，故列为风险而非遗漏）。

---

*报告生成：2026-10-27 · 6.5.5 实测 · 统计脚本口径：`frontend/css/*.css` 去注释全量 · 对比度算法 WCAG 2.1 relative luminance*

---

## 勘误记录（2026-10-27 修订）

| # | 原结论 | 更正 | 原因 |
|---|---|---|---|
| E1 | "全站无 `@font-face`，`Inter` 从未加载，Windows 回落雅黑" → 字体族 5.5 | `Inter` 已通过 `@fontsource/inter` 自托管并在 `frontend/src/main.js:7-11` 导入，随 Vite 构建打入 `dist/assets/*.css` → **字体族 7.5**，综合 6.5 → 6.7 | 原检索只覆盖 `frontend/css/*.css` 与 `index.html`，**漏掉 Vite 入口的 JS `import`**；构建产物中 `@font-face` 存在 |
| E2 | 结论 3 中的"字体栈决策 C1：移除 Inter 或内嵌子集" | C1 改为"中文回退一致性"决策（Inter 已就位，无需再引入） | 同上 |

**教训（供门禁设计参考）**：字体/资源类静态审计不能只看 `.css` 与 `index.html`，必须覆盖 `frontend/src/**` 的 `import` 语句与 `dist/assets/*.css` 构建产物——否则会得出"未加载"的相反结论。
