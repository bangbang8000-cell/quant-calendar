// V6.0 (PRD-6.0 FR-6.0.7 / D1): 全局运行时注入 — npm 依赖挂载为全局
// 必须作为 main.js 的第一个 import 执行：
//   ES module 按 import 声明顺序深度优先执行, globals.js 先于后续业务模块执行,
//   使 window.Vue/window.ElementPlus 在既有 .js 全局组件(IIFE 顶层解构)执行前就绪。
//
// v7.18 (FR-802): Element Plus 由「全量安装」改为「按需注册」
//   旧实现 `import ElementPlus` + `app.use(ElementPlus)` 使 vendor-ep 达 907.4KB，
//   占首屏 JS 39.1%，其中绝大多数组件从未出现在任何模板里。
//   现改为：注册表由 scripts/gen_el_registry.py 从源码枚举生成（32 组件 + v-loading 指令），
//   locale 经 provideGlobalConfig 注入（与原 app.use(ElementPlus,{locale}) 等效）。
//
//   ⚠ 新增页面若用到新的 el-* 组件，必须重新运行：
//       python3 scripts/gen_el_registry.py
//     否则该组件不会注册，运行期渲染为空元素（不报错，只在 console 留 warn）。
import * as Vue from 'vue'
import { ElMessage, ElMessageBox, ElNotification, ElLoading } from 'element-plus'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import { installEl, EL_REGISTRY_META } from './el-registry.js'

window.Vue = Vue

// V6.9.5 (FIX): EP 2.14.5 默认导出仅含 version/install, 不含消息服务 —
// 显式挂载 ElMessage/ElMessageBox/ElNotification/ElLoading,
// 否则业务代码 ElementPlus.ElMessageBox.confirm 等调用全部抛 TypeError (点击无反应)
// v7.18: 不再有默认导出，window.ElementPlus 退化为「服务容器」。
//   业务代码实际只用到 ElMessage(272 处) 与 ElMessageBox(20 处)，其余保留以兼容历史调用。
window.ElementPlus = {
    ElMessage,
    ElMessageBox,
    ElNotification,
    ElLoading,
}
window.ElementPlusLocaleZhCn = { default: zhCn }

// 安装入口：index.html 内联脚本调用 window.QuantEl.install(app, locale)
window.QuantEl = {
    install(app, locale) {
        installEl(app, locale)
        // 便于 CI/巡检断言注册表规模：__qcElMeta.components
        window.__qcElMeta = EL_REGISTRY_META
    },
}

export default Vue
