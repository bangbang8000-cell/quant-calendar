# UI 毛玻璃（Glassmorphism）特效 — 开发工作量评估

> 2026-08-20 · 评估人：AI 开发代理 · 依据 ui-visual-design 规范 + 项目现状

## 1. 结论速览

| 方案 | 工作量 | 风险 | 建议 |
|------|--------|------|------|
| A. 局部毛玻璃（顶栏/浮层/弹窗/侧栏） | **0.5~1 人日**（4~8h） | 低 | ✅ 推荐先做 |
| B. 全站毛玻璃（所有卡片/面板/数据块） | **2~3 人日** | 中（性能/可读性） | 谨慎，需灰度 |
| C. 主题级毛玻璃（浅色全开 / 深色全开） | **1~1.5 人日** | 中 | 结合 A 做 |

## 2. 项目现状（毛玻璃的落地基础）

- 前端零构建 Vue3 + Element Plus + ECharts，样式集中在 **frontend/css/**（tokens.css / themes.css / layout.css）。
- 已有完整 **CSS 变量体系**（--bg-card / --bg-card-header / --text-* / --border-*），深浅色主题通过切换变量实现——毛玻璃底色可直接引用现有 token，改造成本低。
- 目前卡片/面板全部为**纯色背景**（var(--bg-card) 等），无 backdrop-filter。

## 3. 毛玻璃实现要点

核心三件套（可做成 .glass 工具类）：
```css
.glass {
  background: rgba(255, 255, 255, 0.55);   /* 半透明底，浅色主题 */
  backdrop-filter: blur(12px) saturate(140%);
  -webkit-backdrop-filter: blur(12px) saturate(140%);
  border: 1px solid rgba(255, 255, 255, 0.4);  /* 顶部受光描边 */
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.06);
}
.dark .glass { background: rgba(20, 24, 34, 0.55); }  /* 深色主题独立 */
```

分层：
1. **tokens.css**：新增 --glass-bg / --glass-border / --glass-blur 变量（浅深各一套）
2. **layout.css**：.glass 工具类 + 应用到目标组件
3. **themes.css**：深色模式覆盖

## 4. 逐项工作量拆解（方案 A：局部）

| 项 | 内容 | 工时(h) |
|----|------|--------|
| tokens + .glass 工具类 | 浅深两套变量 + 通用类 + 兼容前缀 | 1.0 |
| 顶栏/导航 | 吸顶导航条毛玻璃（最典型，收益高） | 0.5 |
| 侧栏菜单 | 浮动侧栏半透明 | 0.5 |
| 弹窗/对话框 | el-dialog 全局覆盖（merrill-detail 等） | 1.0 |
| 悬浮层/tooltip | 时间轴 tooltip / 下拉面板 | 0.5 |
| 深色模式适配 | 深色 token 独立验证 | 0.5 |
| 浏览器兼容 + 性能回归 | Chrome/Firefox 冒烟 + 低端机滚动 | 1.0 |
| **小计** | | **~5.0（0.5~1 人日）** |

## 5. 主要风险与规避

1. **性能**：backdrop-filter 是大面积合成开销；大量 blur 元素在低端机滚动卡顿。
   - 规避：只对**吸顶/浮层/弹窗**用，卡片主体保持纯色；必要时用 `will-change` + 仅动画元素 blur。
2. **可读性**：blur 后的背景使文字对比度下降（正文需 ≥4.5:1）。
   - 规避：文字层用不透明色，或 .glass 内文字单独设更高对比 token；验证 WCAG。
3. **兼容性**：backdrop-filter 现代 Chrome/Firefox/Safari 均支持（需 -webkit- 前缀兜底 Safari）。
4. **叠加混乱**：全站都毛玻璃会"糊成一片"失去层次——按 ui-visual-design 规范，毛玻璃只用于**浮层类**，卡片保持实色形成前后景层次。
5. **深色模式**：不可用浅色降透明度糊弄，须独立深色 token（规范第 7 条）。

## 6. 落地建议

- **先做方案 A（局部）**：0.5~1 人日，收益/风险比最高，突出"顶层浮层透出底层内容"的质感。
- 顶栏 + 弹窗 + 时间轴 tooltip 三处试点，冒烟 0 pageerror + 深浅色各走查一遍后，再决定是否铺开。
- 若用户希望"一眼可见的毛玻璃"，可把**主内容卡片**也加轻 blur（12px→8px）做折中（接近方案 C 的成本）。
