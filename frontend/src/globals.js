// V6.0 (PRD-6.0 FR-6.0.7 / D1): 全局运行时注入 — npm 依赖挂载为全局
// 必须作为 main.js 的第一个 import 执行：
//   ES module 按 import 声明顺序深度优先执行, globals.js 先于后续业务模块执行,
//   使 window.Vue/window.ElementPlus 在既有 .js 全局组件(IIFE 顶层解构)执行前就绪。
import * as Vue from 'vue'
import ElementPlus from 'element-plus'
import zhCn from 'element-plus/es/locale/lang/zh-cn'

window.Vue = Vue
window.ElementPlus = ElementPlus
window.ElementPlusLocaleZhCn = { default: zhCn }

export default Vue
