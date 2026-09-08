import { defineConfig } from 'vite'

// V4.3 方案A: 以 index.html 为入口构建
// - 3 个 vendor script (vue/element-plus/zh-cn) 为非 module 脚本, Vite 原样保留不打包
// - 5 个 CSS link (含 {{APP_VERSION}} 占位符) 原样保留
// - 业务 JS 经 /src/main.js 打包为 assets/index-<hash>.js (哈希缓存破坏)
// - {{NONCE}}/{{APP_VERSION}} 占位符由后端 main_new.py 注入
export default defineConfig({
  base: '/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    emptyOutDir: true,
  },
})
