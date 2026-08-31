# UI 全面审计报告 v2.2.0

审计日期：2026-07-17
审计范围：frontend/index.html (6500+ 行) + frontend/css/themes.css (4279 行)

---

## 一、致命问题（上线前必须修复）

### 1.1 斑斓黑主题完全失效（P0）

**现状**：`themes.css` 第 472-484 行，斑斓黑的全部 Element Plus 组件覆盖和自定义组件覆盖被清空，只剩下空注释占位符：
```css
/* ===== 斑斓黑 - Element Plus 组件暗黑覆盖 ===== */
/* Dialog */
/* Input */
/* Select */
/* Table */
/* Dropdown */
/* Pagination */
/* Message box / Notification */
/* Cascader */
/* Tag */
/* Drawer */
/* Radio / Checkbox label */
/* Card (Element Plus) */
```
17+ 个组件覆盖全部缺失。斑斓黑主题下，所有 Element Plus 组件（弹窗、下拉、表格、输入框）使用默认浅色样式，在深色背景上完全不可读。

**修复**：重建斑斓黑主题块，包含：
- 17 个 Element Plus 组件暗黑覆盖（el-dialog/el-input/el-select/el-table/el-dropdown/el-pagination/el-message-box/el-cascader/el-tag/el-drawer/el-radio/el-checkbox/el-card/el-form-item/el-loading）
- Element Plus 内部 CSS 变量覆盖（--el-text-color-primary/regular/secondary/placeholder，--el-border-color，--el-fill-color，--el-bg-color）
- 11 个自定义组件覆盖（market-card/merrill-clock-card/kline-chart/sidebar/notification-settings/stock-group-card 等）
- 硬编码白色背景 → CSS 变量替换

### 1.2 移动端零适配（P0）

**现状**：`@media` 查询数量 = 0。整个 SPA 无任何响应式规则。

关键溢出问题：
| 元素 | 当前宽度 | 移动端(375px)效果 |
|------|---------|------------------|
| kline-dialog | width=850px | 严重溢出 |
| merrill-detail-dialog | width=800px | 严重溢出 |
| batch-evaluate dialog | width=600px | 溢出 |
| showAutoEvaluateSettings | width=520px | 溢出 |
| grid: repeat(4,1fr) | 2处（美林时钟详情） | 每列~85px，内容挤压 |
| 6个顶部导航tab | ~100px/tab | 水平溢出 |

**修复**：添加 `@media (max-width: 768px)` 规则块，覆盖：
- 弹窗宽度 → 95vw
- repeat(4,1fr) → repeat(2,1fr)
- 导航tab横向滚动
- 表单 label-width 自动缩减

---

## 二、高风险问题（影响多主题体验）

### 2.1 硬编码 #D4A843 金色 9 处（P1）

所有位置出现在 `index.html` 内联样式中：
- `color: #D4A843` / `color: var(--color-gold, #D4A843)` 共 7 处（自选股星标）
- `border-left: 3px solid #D4A843` 1 处
- `background: rgba(212,168,67,0.12); color: #D4A843` 1 处

`var(--color-gold, #D4A843)` 有 fallback 但 `--color-gold` 可能未定义。部分位置直接硬编码 `#D4A843` 无变量。

### 2.2 用户头像 class 映射不完整（P1）

第 1384 行：
```javascript
:class="'avatar-' + (user.theme === 'rose-red' ? 'rose' : user.theme === 'vibrant-orange' ? 'orange' : 'blue')"
```
只处理了 tech-blue/rose-red/vibrant-orange 三种主题。classic-white/classic-red/classic-gold 以及任何新增主题都回退到蓝色头像，与用户选择的主题不匹配。

### 2.3 themes.css 中 15 处硬编码白色背景（P1）

`.market-card`、`.notification-settings` 等组件使用硬编码浅色渐变：
```css
.market-card { background: linear-gradient(135deg, #fff5f5 0%, #fff 100%); }
.notification-settings { background: linear-gradient(135deg, #f5f7fa 0%, #fff 100%); }
```
斑斓黑/深色主题下不适用。

---

## 三、中等风险问题（视觉打磨）

### 3.1 图标语义混乱（P2）

最高频 icon 统计：
| 图标 | 次数 | 用途 | 问题 |
|------|------|------|------|
| ⭐ ☆ | 20+ | 自选股收藏切换 | 合理 |
| 🤖 | 15+ | AI评估标记 | 合理 |
| 📈 | 12+ | 策略总览/统计/K线 | 过载——同时表示"策略"和"图表"和"K线已加载" |
| 📋 | 5x | 数据概览/分布/评估历史 | 过载——同时表示"数据""分布""记录" |
| 📊 | 3x | 多维度评分/评分分布/多维度评分 | 可接受 |
| 💎 | 3x | 股票池标题/策略股票分布/股票池 | 合理 |
| 🏆 | 2x | 共识度TOP5/共识度排行 | 合理 |
| ✨ | 4x | 新入池/批量评估 | 不一致：有时是状态标签，有时是按钮装饰 |
| ⚙️ | 3x | 自动评股/初始化向导/系统配置 | 合理 |
| 🕐 | 3x | 交易中/最近评估/评估时间 | 过载——时间表示有更合适的🕒或⏰ |

具体问题：
1. 📈 同时用于策略总览标题、统计数字、K线已加载标记——语义混淆
2. 📋 在"数据概览""各策略股票分布""评估历史记录"三处含义不同
3. ⚡ 在快捷操作卡片标题用⚡，在自动评股开关用⚡/⏸️——暗示和快捷操作无关

### 3.2 美林时钟详情弹窗 icon 硬编码（P2）

第 2480-2483 行四个阶段 icon 硬编码在 JS 数据中：
```javascript
{key: 'recovery', icon: '🌱', ...}
{key: 'overheat', icon: '🔥', ...}
{key: 'stagflation', icon: '⚠️', ...}
{key: 'recession', icon: '❄️', ...}
```
前后各有一份重复定义（第 2466 行和第 2530 行区间）。

### 3.3 配色不一致（P2）

- 飞书测试成功用 `✅` 但 Tushare 连接成功也用 `✅`——语义合理但缺少区分度
- 多处 `❌ 失败` 和 `⚠️ 警告` 混用——部分场景用❌实则应该是⚠️
- 快捷评股按钮 `🤖 快速评股` 与批量评估 `✨ 批量评估` 装饰风格不统一

---

## 四、低风险问题（可延后）

### 4.1 主题列表前后端同步（P3）

`user_manager.py` 定义了 7 套主题的 THEMES dict，但 themes.css 仅定义了 6 个 `data-theme` 块（tech-blue/rose-red/vibrant-orange/classic-white/classic-red/classic-gold）。斑斓黑缺少 CSS 变量定义块。

### 4.2 15 处内联 style 硬编码颜色（P3）

```html
style="color:#43e97b"  <!-- 数字颜色，应抽为CSS -->
style="background: linear-gradient(135deg, #fbbf24, #f59e0b)"
style="background: linear-gradient(135deg, #f5f0eb, #e8e0d5)"
```
这些小范围样式可以接受，但建议后续迁移到 CSS 变量。

### 4.3 dialog 宽度不一致（P3）

| Dialog | 宽度 |
|--------|------|
| kline-dialog | 850px |
| merrill-detail | 800px |
| batch-evaluate | 600px |
| auto-evaluate-settings | 520px |
| setup-wizard | 500px |
| change-password | 420px |

数量 OK，但建议统一为 500/600/800 三档。

---

## 五、开发规划

### Sprint 1：致命修复（预计 2-3 小时）

| 任务 | 优先级 | 文件 | 行数估计 |
|------|--------|------|---------|
| 1.1 重建斑斓黑主题 CSS | P0 | themes.css | +250行 |
| 1.2 斑斓黑 CSS 变量定义块 | P0 | themes.css | +30行 |
| 1.3 移动端 @media 规则 | P0 | index.html | +60行 |
| 1.4 弹窗移动端宽度覆盖 | P0 | index.html | +15行 |
| 1.5 美林时钟 grid 移动端适配 | P0 | index.html | +8行 |

### Sprint 2：高风险修复（预计 1-2 小时）

| 任务 | 优先级 | 文件 | 行数估计 |
|------|--------|------|---------|
| 2.1 硬编码 #D4A843 换 CSS 变量 | P1 | index.html | 9处修改 |
| 2.2 用户头像 class 映射补全 | P1 | index.html | 1处修改 |
| 2.3 硬编码白色背景换变量 | P1 | themes.css | 4处修改 |

### Sprint 3：视觉打磨（预计 1 小时）

| 任务 | 优先级 | 文件 | 行数估计 |
|------|--------|------|---------|
| 3.1 图标语义整理 | P2 | index.html | 15处修改 |
| 3.2 美林时钟 icon 去重 | P2 | index.html | 删除重复定义 |
| 3.3 dialog 宽度统一 | P2 | index.html | 5处修改 |

**总计**：约 4-6 小时，~400 行代码变更。
