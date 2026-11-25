// v7.18 (FR-501): 短线复盘域懒加载入口。
// 内部顺序不可调换: logic-* 与片段先于装配, 装配先于注册。
// 注意: 子页 market-review 复用 research 页组件 (见 workspace.js pageComp 映射),
//       该交叉依赖由 runtime.js __quantGoPage 补齐, 不在此处并联加载。
import './logic-tour.js'
import './logic-sentiment.js'
import './logic-cache.js'
import './view-part1.js'
import './view-part2.js'
import './view.js'
import '../shortterm-page.js'
