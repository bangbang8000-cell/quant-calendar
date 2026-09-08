# 量化选股日历 设计系统 (v3.2.0)

> 版本: v1.0 | 日期: 2026-08-07 | 来源: frontend/css/tokens.css (唯一权威)
> 原则: 所有 UI 必须使用本系统的 token, 禁止硬编码颜色/字号/间距

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

## 2. 颜色语义 (--color-*)

| Token | 语义 | 使用场景 |
|-------|------|----------|
| --color-up | 涨/正数 | 涨幅、收益为正 |
| --color-down | 跌/负数 | 跌幅、收益为负 |
| --color-danger | 危险 | 删除、错误 |
| --color-warning | 警告 | 需注意 |
| --color-success | 成功 | 成功提示 |
| --color-gold | 金色 | 收藏/特殊标记 |
| --color-neutral | 中性 | 无方向性数据 |
| --color-up-strong | 大涨/强机会 | 深红, 强正向幅度 |
| --color-up-weak | 小涨/弱机会 | 浅红, 弱正向幅度 |
| --color-down-strong | 大跌/强风险 | 深绿, 强负向幅度 |
| --color-down-weak | 小跌/弱风险 | 浅绿, 弱负向幅度 |
| --sem-opportunity | 机会 | 决策语义 → var(--color-up) |
| --sem-risk | 风险 | 决策语义 → var(--color-down) |
| --sem-neutral | 中性 | 无方向决策 |
| --sem-warning | 警示 | → var(--color-warning) |

> V5.3.2 (T-5.3.2.2): 语义令牌用于决策表达(机会/风险/警示), 强弱分档用于行情幅度分级。
> 一律引用令牌, 禁止硬编码色值。

## 3. 主题变量 (themes.css 定义, 7 套)

| 变量组 | 说明 |
|--------|------|
| --bg-primary / --bg-card / --bg-card-header / --bg-tertiary | 背景层级 |
| --text-primary / --text-secondary / --text-tertiary | 文本层级 (对比度 ≥ 4.5:1) |
| --primary-color | 品牌主色 (按钮/链接/高亮) |
| --border-light / --border-color | 边框 |
| --svg-fill | SVG 图标颜色 (随主题) |

7 套主题: 通过 `data-theme` 属性切换, 全部基于同一 token 结构。

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

## 7. 无障碍要求

- 所有文本对比度 ≥ 4.5:1 (7 主题)
- 交互元素键盘可达 (tabindex + keydown.enter)
- 禁止仅用颜色传达信息 (配合图标/文字)

---

## 使用检查

```bash
# 硬编码字号检查 (应只允许 64px 装饰图标 + 10px 极小标签)
grep -o 'font-size: *[0-9]*px' frontend/index.html | grep -v 'var(' | sort | uniq -c

# 主题完整性
grep -c 'data-theme="' frontend/index.html  # 应为 7
```

*设计与 tokens.css 保持同步, 修改 token 时须更新本文档。*
