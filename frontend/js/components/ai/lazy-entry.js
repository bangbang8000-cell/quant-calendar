// v7.18 (FR-501): AI 域懒加载入口 — 一并带上仅本域使用的 focus-view / history-record。
// 内部顺序不可调换: 片段先于装配, 装配先于注册。
import './view-part1.js'
import './view-part2.js'
import './view.js'
import '../ai-page.js'
// 仅 ai 域消费的子组件 (grep 确认: qc-focus-view 只在 view-part2 出现,
// qc-history-record 只在 view-part1/part2 出现), 故随本域加载。
import '../focus-view.js'
import '../history-record.js'
