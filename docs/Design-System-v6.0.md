# 量化日历 V6 全站设计系统规格（Design System 6.0）

- **文档版本**：v1.0（设计定稿，评审通过后按里程碑开发）
- **日期**：2026-09-09
- **基调**：**克制专业 + 金色点缀**（白/暖灰底 + 克制金色，借鉴 QuantDinger 信息层级 + 既有金色品牌）
- **范围**：全站 token 补全 + 组件视觉规范 + 6 大模块页面编排 + 动效/响应式/无障碍
- **配套**：PRD-v6.0.md（导航已落地）| tokens.css（--qc-* 体系已建）
- **开发**：refactor/ui-v6 分支，不 push 主线

---

## 0. 设计原则

| 原则 | 落地 |
|---|---|
| **克制用色** | 金色仅用于：选中态 / 主按钮 / 关键链接 / 品牌 / 图表主序列 / 关键数值强调；背景与大面积色用中性 |
| **数据优先** | 核心指标一眼可扫：KPI 大卡 28-36px / 700，辅助信息 12px / 降级 |
| **层级清晰** | 4 级文字（primary/secondary/tertiary/disabled）+ 边框分隔 + 留白 |
| **一致性** | 全部走 token；卡片/表格/按钮/表单统一圆角 12/8、间距 4px 网格 |
| **可访问** | 正文对比 ≥4.5:1；焦点环可见；键盘可达 |

---

## 1. 色彩系统（克制专业 + 金色点缀）

### 1.1 中性底（大面积）
| token | 值 | 用途 |
|---|---|---|
| `--qc-background` | `#fdfaf3`（暖白） | 页面背景 |
| `--qc-card` | `#ffffff` | 卡片/表格/弹窗 |
| `--qc-muted` | `#f7f4ee` | 搜索框底/次级卡底 |
| `--qc-border` | `#efe9df` | 卡片/表格分隔线 |
| `--qc-foreground` | `#1f1d1a` | 主文字 |
| `--qc-muted-foreground` | `#8f8679` | 三级文字 |

文字层级映射（4 级）：
- 主 `--qc-foreground` #1f1d1a（正文/标题）
- 次 `--qc-nav-item-default` #6b6358（次要说明）
- 三级 `--qc-muted-foreground` #8f8679（辅助/占位）→ **修正当前 2.19:1 对比度问题**
- 禁用 `--text-disabled` #9ca3af

### 1.2 金色点缀（克制）
| token | 值 | 用途 |
|---|---|---|
| `--qc-primary` | `#b8922a` | 主按钮底 / 选中 / 关键强调 |
| `--qc-primary-600` | `#b8922a` | 主色基准 |
| `--qc-primary-700` | `#8f6f1f` | 选中文字 / 图表深金 |
| `--qc-primary-500` | `#c49b2e` | 选中底边 / 图表 |
| `--qc-primary-100` | `#f8f0d8` | 徽标底 / 轻强调底 |
| `--qc-primary-50` | `#fcf9f0` | 选中项背景 |

**克制规则**：同一屏金色面积占比 <10%；不使用金色渐变做大面积背景；金色渐变仅限 Logo/品牌元素。

### 1.3 语义色（固定，不随主题）
| 语义 | token | 值 | 用途 |
|---|---|---|---|
| 涨/机会 | `--color-up` | #E63946 | 红涨 |
| 跌/风险 | `--color-down` | #2E7D32 | 绿跌 |
| 成功 | `--color-success` | #16a34a | 完成/健康 |
| 警告 | `--color-warning` | #f59e0b | 待办/降级 |
| 危险 | `--color-danger` | #dc2626 | 错误/删除 |
| 信息 | `--color-info` | #2563eb | 运行中/提示 |
| AI | `--color-ai` | #6366f1 | AI 相关徽标 |

---

## 2. 组件视觉规范

### 2.1 卡片
```css
/* 静态卡：边框优先，不用阴影 */
.qc-card {
  background: var(--qc-card);
  border: 1px solid var(--qc-border);
  border-radius: var(--qc-radius-large);   /* 12px */
  padding: var(--qc-space-4);              /* 16px */
}
```
- **数据卡/KPI 卡**：标题 12px/secondary + 数值 28-36px/700/tabular-nums + 趋势 12px（涨红跌绿标签）
- hover：仅 `box-shadow: var(--qc-shadow-sm)`，不上浮（克制）

### 2.2 表格（Element Plus 覆盖）
- 表头：12px/500/secondary，底 `--qc-muted`
- 行高 44-48px，hover `--qc-nav-item-hover-bg`（#f7f4ee）
- 分隔线 `--qc-border`；无斑马纹（克制）或极浅斑马 `#fdfaf3`
- **状态点列**（借鉴 QuantDinger）：`● running` 用 8px 圆点 + 语义色 + 文字
- 数字列 `font-variant-numeric: tabular-nums`

### 2.3 按钮
| 类型 | 底/边框 | 文字 | 场景 |
|---|---|---|---|
| 主按钮 | `--qc-primary` #b8922a | #fff | 关键操作 |
| 次按钮 | 白底 / `--qc-primary-500` 边框 | `--qc-primary-700` | 次要操作 |
| 文本按钮 | 透明 | `--qc-primary-700` | 链接式 |
| 危险 | `--color-danger` | #fff | 删除/登出 |
- hover：主按钮加深（#9a7a1e）；active scale 0.98；loading 转圈

### 2.4 表单（Element Plus 覆盖）
- 输入框：白底、`--qc-border` 边框、focus `--qc-ring`（#d4b352）2px 环
- label：13px/secondary；错误：`--color-danger`
- 开关/选择器：激活态 `--qc-primary`

### 2.5 弹窗 / 抽屉 / 下拉
- 弹窗：白底、圆角 16、`--qc-shadow-lg`、遮罩 `--qc-overlay`
- 抽屉：右侧滑入 300ms，宽 360-480px
- 下拉/气泡：`--qc-shadow-md`，圆角 12

### 2.6 图表（ECharts 主题）
- 主序列色板（金色系）：`#b8922a → #c49b2e → #8f6f1f → #d4b352`，辅助灰 `#b8ae9f`
- 涨跌：`--color-up/--color-down`；AI 系列 `--color-ai`
- 网格线 `--chart-split`、轴线 `--chart-axis`、画布 `--chart-bg`（已 token 化）
- tooltip：白底 + `--qc-shadow-md` + 圆角 8

### 2.7 状态 / 徽标 / chip
- 状态点：8px 实心圆点 + 语义色（success/warning/danger/info）
- 徽标 pill：`--qc-nav-badge-bg` + `--qc-nav-badge-text`（金色系）
- chip：12px、圆角 full、语义底+深字（沿用 `--badge-*` 体系）

### 2.8 空态 / 错误态 / 加载
- 空态：居中图标（AppIcon `inbox`）+ 标题 14px + 描述 12px/tertiary + 引导按钮
- 错误态：`alert-triangle` + 重试按钮
- 骨架：卡片/表格占位 + pulse（沿用现有骨架类，统一色 `--qc-muted`）

### 2.9 导航（V6.0 已落地，补两处修正）
- `.qc-subnav-tab` 补 `background: transparent; border: none`（修 A1 灰底）
- 补 `.qc-page-title`：`18px/600/--qc-foreground`（修 A2 32px）
- 分组标签改 `--qc-neutral-500`（修 B1 对比度）
- 选中项背景改 `#fdfaf3`、文字 `--qc-primary-800`（修 B2）

---

## 3. 六大模块页面编排规范

统一骨架：`qc-header`（面包屑/搜索/工具区）+ `qc-subnav`（二级导航）+ 内容区。内容区编排按模块：

### 3.1 策略总览（Dashboard 化，借鉴 QuantDinger）
```
[KPI 大卡区] 今日信号数 | 共识强度 | 市场温度 | 运行策略数   ← 4 卡, 28px 数值
[图表区]     市场共识趋势 (金色主序列折线) | 行业轮动热力
[列表区]     今日重点关注 (表格: 代码/名称/信号/强度色块/状态点)
            美林时钟当前阶段卡 (阶段 + 实时指标)
```

### 3.2 量化日历
```
[顶部操作区] 日期选择/刷新/导出 (SubNav 已迁)
[二级 Tab]   日/周/月/年/股票池
[内容]       日历网格 (信号强度色块, 金色系深浅) + 右侧详情面板
```

### 3.3 智能评估
```
[输入区]     股票代码 + 模型选择 + 评估按钮
[结果区]     总分环形图(金色) + 维度雷达 + AI 结论卡
[历史区]     时间线列表 + 命中率统计卡
[子 Tab]     概览/重点跟踪/自选/历史/命中率/对话
```

### 3.4 策略研究（左侧子导航）
```
[左子导航]   研究概览/量化研究/策略编写/自定义/回测/回测历史
[内容]       因子研究面板 + 策略代码区(mono) + 回测净值曲线(金色)
```

### 3.5 短线复盘
```
[二级 Tab]   市场复盘/涨停池/龙虎榜/板块/盘中核验/异动扫描
[内容]       数据卡 + 表格 (涨跌红绿语义, 状态点)
```

### 3.6 系统配置（左侧子导航 4 组）
```
[左子导航]   运行监控/智能服务/平台设置/组织管理
[内容]       资源监控卡 + 实时折线(金色) + 数据源健康列表 + 用量统计
```

---

## 4. 动效规范（复用现有 token）

| 场景 | 效果 | token |
|---|---|---|
| 页面切换 | fade + translateY(8px) 200ms | `--duration-fast` + `--easing-enter` |
| 子页切换 | fade 150ms | `--duration-fast` |
| 弹窗 | scale 0.96→1 + fade 250ms | `--duration-base` |
| 侧边栏折叠 | width 250ms | `--duration-base` |
| 主题切换 | color/bg/border 300ms | `--theme-transition` |
| 按钮点击 | scale 0.98 | 100ms |
| 尊重 `prefers-reduced-motion` | 关闭非必要动画 | — |

---

## 5. 响应式规范

| 断点 | 侧边栏 | 二级导航 | 底部 TabBar |
|---|---|---|---|
| ≥1280 | 展开 220px | 正常 | 隐藏 |
| 768-1279 | 折叠 64px | 可折叠 | 隐藏 |
| <768 | 隐藏(抽屉) | 分段/下拉 | 显示 60px |

内容区 `max-width: 1440px` 居中；表格移动端横向滚动 + 右侧渐变指示器。

---

## 6. 无障碍

- 正文对比 ≥4.5:1（重点：分组标签、三级文字、金色选中项）
- 焦点环 `--qc-ring` 可见；键盘完整走通
- 语义色不单独传达信息（附文字/图标）
- `aria-current` / `aria-expanded` / 抽屉焦点管理（导航已落地）

---

## 7. 分阶段开发里程碑

| 里程碑 | 内容 | 出口 |
|---|---|---|
| **D0 设计地基** | tokens.css 补全中性/语义映射 + themes.css 统一 + ECharts 色板金化 | 全站 token 单一来源，对比度达标 |
| **D1 基础组件** | 卡片/按钮/表格/表单/状态点/空态/骨架 统一视觉（Element Plus 覆盖收敛） | 4 大高频页组件样式统一 |
| **D2 页面编排** | 策略总览 Dashboard 化 + 日历/智能评估/系统配置 页面布局落地 | 4 大高频页完成 |
| **D3 收尾** | 策略研究/短线复盘 + 动效/响应式/无障碍收尾 + 回归 + 6.0.1 出口 | 全站视觉统一，测试全绿 |

**每里程碑**：构建通过 + 门禁（令牌/一致性）全绿 + 冒烟 0 pageerror + 本地提交（不 push）。

---

## 8. 待办清单（含上轮 V6.0 遗留修复）

- [x] A1 `.qc-subnav-tab` 补透明底（灰底缺陷）✅ D0
- [x] A2 补 `.qc-page-title` 18px/600 ✅ D0
- [x] B1 分组标签 `--qc-neutral-500` ✅ D0
- [x] B2 选中项背景 #fdfaf3 + 文字 800 ✅ D0
- [x] C1 `.qc-subnav-body` padding-top 16px ✅ D0
- [x] C3 折叠 Tooltip 延迟 ✅ D0
- [x] D0 设计地基：tokens 补全 + themes 统一 + ECharts 色板金化 ✅ 提交 a459de35
- [x] D1 基础组件：components.css 组件层 + EP 覆盖收敛 + 状态点/空态/骨架 + 门禁 ✅
- [x] D2 页面编排：策略总览 KPI Dashboard 化 + 日历/智能评估/系统配置布局落地 ✅
- [ ] D3 收尾：策略研究/短线复盘 + 动效/响应式/无障碍 + 回归 + 6.0.1 出口
