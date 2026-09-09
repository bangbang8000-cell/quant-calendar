import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// V4.3 方案A + V6.0 (PRD-6.0 FR-6.0.7): 构建 SFC 化基线
// - 3 个 vendor script 原为 CDN (vue/element-plus/zh-cn), V6.0 起改为 npm 依赖由 main.js 打包
//   (PRD D1: 弃 CDN script, 挂 window.Vue/window.ElementPlus 兼容既有 .js 全局组件)
// - alias vue -> esm-bundler(带运行时编译器): index.html 的 #app in-DOM 模板仍需运行时编译
// - 5 个 CSS link (含 {{APP_VERSION}} 占位符) 原样保留
// - 业务 JS 经 /src/main.js 打包为 assets/index-<hash>.js (哈希缓存破坏)
// - {{NONCE}}/{{APP_VERSION}} 占位符由后端 main_new.py 注入
export default defineConfig({
  base: '/',
  plugins: [vue()],
  resolve: {
    alias: {
      // V6.0: 统一为带编译器的构建 — 现有 in-DOM 模板(#app)与字符串 template 组件需运行时编译
      'vue': 'vue/dist/vue.esm-bundler.js',
    },
  },
  server: {
    // V6.0: 本地调试 — 前端静态资源走 Vite dev, API/静态库代理到后端
    proxy: {
      '/api': 'http://127.0.0.1:8088',
      '/static': 'http://127.0.0.1:8088',
      '/manifest.json': 'http://127.0.0.1:8088',
      '/sw.js': 'http://127.0.0.1:8088',
      '/logo.svg': 'http://127.0.0.1:8088',
    },
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    emptyOutDir: true,
    rollupOptions: {
      output: {
        // V6.0 (FR-6.0.7): 首屏分包 — vue/lucide 独立 vendor chunk, 业务 chunk 体积可控
        manualChunks(id) {
          if (id.includes('node_modules/vue') || id.includes('node_modules/@vue')) return 'vendor-vue';
          if (id.includes('node_modules/element-plus') || id.includes('node_modules/@element-plus')) return 'vendor-ep';
          if (id.includes('node_modules/lucide')) return 'vendor-lucide';
        },
      },
    },
  },
})
