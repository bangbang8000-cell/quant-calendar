# 旧视觉基线 (v6.3.6 及以前) — 已废弃

归档原因 (v6.4 FR-6.4.8)：旧脚本用 `.nav-item` 点一级导航，而该类名是被 SFC
（`frontend/src/components/Sidebar.vue`）覆盖掉的 `sidebar.js` 死代码，DOM 中根本没有
`.nav-item` 元素 → 点击恒返回 false、页面从未切换，脚本却照常截图并写基线。

## 实证（sha256 去重后可见重复）

| 旧基线文件 | sha256 前 8 位 |
|---|---|
| `calendar.png` | `b64575d6` |
| `stock_detail.png` | `b64575d6` ← 与 calendar 同一张 |
| `ai_overview.png` | `ede34292` |
| `ops_status.png` | `ede34292` ← 同上 |
| `research.png` | `ede34292` ← 同上 |
| `system_config.png` | `ede34292` ← 同上 |

即 11 个"场景"只有 5 张不同像素，其中 **4 个一级页面共用同一张图**、
日历与股票详情共用另一张；`dark_theme.png` 也并非暗色（主题切换点的是已并入
Header 主题面板的旧选择器 `.theme-item-row`）。

## 结论

**不可作为回归依据。** 新基线见同级 `baseline/`（10 张，哈希两两不同），
由「期望状态驱动断言」重拍：导航按 `href="#<pageKey>"` 精确定位，截图前校验
一级导航激活态 + 二级页签 `data-tab-key` + 就绪元素可见，任一不成立则拒绝产图与写基线。
`research` 场景因本环境 `data/groups.json` 把 `admin.visible_menus.research` 置为
`false`（菜单不可达）而跳过，不产图。
