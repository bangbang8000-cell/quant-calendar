// 诊断用临时配置（不参与正式构建）：复用正式配置的插件，只把 node_modules 拆细，
// 用来回答"vendor-ep 907KB 到底由什么构成"。
import base from './vite.config.mjs'

base.build = base.build || {}
base.build.outDir = 'dist-diag'
base.build.emptyOutDir = true
base.build.rollupOptions = base.build.rollupOptions || {}
base.build.rollupOptions.output = base.build.rollupOptions.output || {}
base.build.rollupOptions.output.manualChunks = (id) => {
  if (!id.includes('node_modules')) return
  if (id.includes('node_modules/dayjs')) return 'd-dayjs'
  if (id.includes('node_modules/lodash')) return 'd-lodash'
  if (id.includes('@floating-ui')) return 'd-floating'
  if (id.includes('@vueuse')) return 'd-vueuse'
  if (id.includes('node_modules/element-plus') || id.includes('@element-plus')) return 'd-ep'
  if (id.includes('node_modules/vue') || id.includes('@vue')) return 'd-vue'
  return 'd-other'
}

export default base
