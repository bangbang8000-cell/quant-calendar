// v7.18 (FR-501): 研究域懒加载入口 — 带上 pattern-lab / marketplace / param-lock 三个面板
// (grep 确认三者只被 research 的 view-part1/2 引用)。
// 内部顺序不可调换: logic-* 与片段先于装配, 装配先于注册。
import './logic-market-review.js'
import './logic-factor.js'
import './logic-history.js'
// v7.19 (T3.2): 策略工作台列表（研究域独享）
import './strategy-board.js'
import './view-part1.js'
import './view-part2.js'
import './view.js'
import '../research-page.js'
// 仅本域消费的面板
import '../pattern-lab.js'
import '../marketplace-panel.js'
import '../param-lock-panel.js'
