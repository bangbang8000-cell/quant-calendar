# 量化选股日历 设计系统

> 版本: v6.10 | 日期: 2026-09-21 | 来源: frontend/css/tokens.css + frontend/js/themes.js (运行期唯一权威)
> 原则: 所有 UI 必须使用本系统的 token, 禁止硬编码颜色/字号/间距
> 配色专项评估报告: `docs/EVAL-UI-COLOR-SYSTEM.md` (含实测数据与冻结决策)

---

## 1. 字号体系 (--font-*)

| Token | 值 | 用途 |
|-------|-----|------|
| --font-xs | 11px | 辅助标签/极小标注 |
| --font-sm | 12px | 次级文本/表格单元格 |
| --font-base | 14px | 正文/默认 |
| --font-md | 16px | 强调文本/卡片标题 |
| --font-lg | 18px | 区块标题 |
| --font-xl | 22px | 页面标题/大数值 |
| --font-2xl | 26px | 关键指标数值 |
| --font-3xl | 36px | 装饰大图标 |

**字重**: --font-normal (400) / --font-medium (500) / --font-semibold (600) / --font-bold (700)

## 2. 颜色语义 (V6.10 契约)

**唯一语义槽位**: 4 个状态 × 4 个变体 + 2 个行情 × (填充/文字)。组件层只允许引用这些令牌。

| Token | 语义 | 使用场景 |
|-------|------|----------|
| `--state-{success,warning,danger,info}-text` | 语义文字色 | 提示文本、状态标签文字 (对卡片/淡底 ≥4.5:1) |
| `--state-*-tint` | 语义浅底 | 徽标/横幅背景 |
| `--state-*-solid` | 语义实底 | 状态点、语义按钮底色 |
| `--state-*-on-solid` | 实底上的文字 | 语义按钮文字 (明色白字 / 暗色页面底) |
| `--market-up-fill` / `--market-down-fill` | 涨跌填充档 | K 线、色块 (对卡片 ≥3:1) |
| `--market-up-text` / `--market-down-text` | 涨跌文字档 | 涨跌幅文本 (≥4.5:1) |
| `--sem-opportunity` / `--sem-risk` | 机会/风险 | 决策语义别名 → 行情涨跌 |

约定: **红涨绿跌** (A 股惯例), 全站一致; 涨跌幅除颜色外同时渲染 `+/-` 符号 (非颜色通道)。
`--color-up/--color-down` 为涨跌填充档的历史别名; `--qc-state-*` 已下线 (不再允许字面量定义)。

## 3. 主题模型与表面角色 (V6.10)

主题 = **模式(light / dark / system) × 色相(hue)**, 由 `frontend/js/themes.js` 的 `applyTheme()` 在运行期生成
(CSS 只保留 `[data-theme="gold"]` / `[data-theme="dark-pro"]` 两套基底 + 静态兜底)。色相共 6 档
(金 45 / 蓝 220 / 红 0 / 绿 140 / 紫 270 / 粉 320) + **中性无色相 (-1)**。

### 表面角色 (明暗同名契约, 禁止出现模式专属硬编码面)

| Token | 浅色 | 深色 | 用途 |
|-------|------|------|------|
| `--surface-canvas` | hsl(h,18%,98%) | hsl(h,10%,8%) | 页面底 |
| `--surface-card` | #ffffff | hsl(h,11%,11%) | 卡片 / 图表画布 |
| `--surface-raised` | #ffffff | hsl(h,12%,14%) | 浮层 / 下拉 / 菜单 |
| `--surface-sunken` | hsl(h,16%,96%) | hsl(h,12%,9%) | 代码块 / 凹槽 |
| `--surface-input` | #ffffff | hsl(h,12%,9%) | 输入框 / 选择器 |
| `--surface-hover` | hsl(h,26%,94%) | hsl(h,12%,15%) | 悬浮态 |
| `--border-control` | 求解 ≥3:1 | 求解 ≥3:1 | 输入/选择器可见边框 (WCAG 1.4.11) |
| `--qc-ring` | 求解 ≥3:1 | hsl(h,85%,65%) | 焦点环 |

### Element Plus 集成

本仓库 `frontend/lib/element-plus.css` 为**仅亮色**构建 (不含 EP 官方暗色变量集), 因此 EP 的语义色/文本/边框/
填充/表面/遮罩/阴影变量由 `tokens.css` 的「EP 变量桥」在**明暗两侧全量桥接**, 组件级变量自动继承 ——
禁止再逐组件打补丁, 禁止使用 `--el-success` 这类 EP 不识别的名字 (正确名称为 `--el-color-success`)。

## 4. 间距与圆角

| Token | 值 | 用途 |
|-------|-----|------|
| --sp-1 ~ --sp-6 | 4/8/12/16/20/24px | 间距阶梯 |
| --card-padding | 16px | 卡片内边距 |
| --card-radius | 12px | 卡片圆角 |
| --dialog-radius | 12px | 弹窗圆角 |
| --header-height | 56px | 顶栏高度 |

## 5. 组件规范

### 卡片 (.card)
```css
.card {
  background: var(--bg-card);
  border-radius: var(--card-radius);
  padding: var(--card-padding);
  margin-bottom: 20px;
  box-shadow: 0 8px 32px rgba(0,0,0,0.1);
}
```
- 标题: .card-title → var(--font-md) + var(--font-semibold)
- 数值: .stat-value → var(--font-xl) + var(--font-bold)
- 辅助: .stat-label → var(--font-sm) + var(--text-secondary)

### 图标
- 4 套图标系统: emoji / ink / edge / crystal
- 通过 icon-system-* 类切换, 由 js/icons.js 的 ICON_MAPS 驱动
- SVG 图标使用 currentColor, 自动继承 --svg-fill

### 空状态
- 统一 .empty-state: 居中 + var(--text-tertiary)
- 文案 + 淡色图标, 不裸显示"暂无数据"

## 6. 响应式断点

| 断点 | 行为 |
|------|------|
| ≥1024px | 完整侧边栏 (200px) |
| 768-1024px | 侧边栏折叠图标条 |
| ≤768px | 隐藏侧边栏, 显示底部 TabBar |
| ≤480px | 小屏精简布局 |

## 7. 无障碍要求 (对比度契约)

| 对象 | 阈值 |
|------|------|
| 正文 primary/secondary/tertiary on canvas/card | ≥ 4.5:1 |
| 禁用文字 | ≥ 3.0:1 |
| 链接 / 品牌文字 / 语义文字 / 涨跌文字 | ≥ 4.5:1 |
| 主按钮与语义按钮文字 (含 hover/active 三态) | ≥ 4.5:1 |
| 导航激活项 / 徽标文字 | ≥ 4.5:1 |
| 焦点环 / 控件边界 | ≥ 3.0:1 |
| 图表分类色板 / 涨跌填充 on 图表画布 | ≥ 3.0:1 |

覆盖范围: **明 × 暗 × 7 色相 = 14 套配置全部断言** (由 `tests/test_theme_contrast.py` 驱动运行期令牌)。

其他: 交互元素键盘可达; 禁止仅用颜色传达信息 (涨跌同时给出 `+/-` 符号)。

---

## 使用检查

```bash
# 配色门禁 (运行期 14 套配置: 对比度契约 + 图表画布 + EP 桥 + 中性档)
python3 -m pytest tests/test_theme_contrast.py tests/test_contrast.py tests/test_color_tokens.py -q

# DOM 实测审计 (需运行中的 dev/ops + Playwright): 14 套 × 6 页面逐文本节点测量
python3 tests/e2e/color_audit.py --base-url http://127.0.0.1:8001

# token 治理 (悬空引用 / 死 token / 明暗对称 / 双源 / 散落硬编码)
python3 -m pytest tests/test_color_tokens.py -q
```

*设计与 tokens.css + themes.js 保持同步, 修改 token 时须更新本文档; 新增双源/白名单须同步 tests/test_color_tokens.py。*
