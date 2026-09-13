// V6.0 (PRD-6.0 FR-6.0.7 / D1): 全局运行时注入 — npm 依赖挂载为全局
// 必须作为 main.js 的第一个 import 执行：
//   ES module 按 import 声明顺序深度优先执行, globals.js 先于后续业务模块执行,
//   使 window.Vue/window.ElementPlus 在既有 .js 全局组件(IIFE 顶层解构)执行前就绪。
import * as Vue from 'vue'
import ElementPlus, { ElMessage, ElMessageBox, ElNotification, ElLoading } from 'element-plus'
import zhCn from 'element-plus/es/locale/lang/zh-cn'

window.Vue = Vue
// V6.9.5 (FIX): EP 2.14.5 默认导出仅含 version/install, 不含消息服务 —
// 显式挂载 ElMessage/ElMessageBox/ElNotification/ElLoading,
// 否则业务代码 ElementPlus.ElMessageBox.confirm 等调用全部抛 TypeError (点击无反应)
const _EP = ElementPlus || {}
window.ElementPlus = _EP
_EP.ElMessage = _EP.ElMessage || ElMessage
_EP.ElMessageBox = _EP.ElMessageBox || ElMessageBox
_EP.ElNotification = _EP.ElNotification || ElNotification
_EP.ElLoading = _EP.ElLoading || ElLoading
window.ElementPlusLocaleZhCn = { default: zhCn }

export default Vue
