// V4.3 (方案A) 构建入口: 按 index.html 原始 script 顺序副作用导入全部业务 JS
// 由 gen_mainjs.py 生成, 顺序改动需同步 index.html 与本题
// V6.0 (PRD-6.0 FR-6.0.7): 首行引入 globals.js — 挂载 window.Vue/window.ElementPlus
//   (npm 依赖替代原 CDN script), 业务模块执行前全局就绪

import './globals.js'
// 6.2.0 (F1): 字体系统落地 — Inter 自托管 (latin 400/500/600/700, 中文回退系统字体), 随构建打包进 dist
import '@fontsource/inter/latin-400.css'
import '@fontsource/inter/latin-500.css'
import '@fontsource/inter/latin-600.css'
import '@fontsource/inter/latin-700.css'
import '../js/themes.js'
import '../js/i18n.js'
import '../js/locales/zh-CN.js'
import '../js/locales/en.js'
import '../js/locales/ja.js'
import '../js/locales/ko.js'
import '../js/locales/zh-TW.js'
import '../js/pinyin.js'
import '../js/preferences.js'
import '../js/recent.js'
import '../js/core.js'
// V6.1 (PRD-6.1 F8): 动态页签状态机纯函数 (挂载 __quantModules.tabsCore)
import '../js/tabs-core.js'
// V6.3 (PRD-6.3 F3/F4): 导航形态/页签开关状态机纯函数 (挂载 __quantModules.navModeCore)
import '../js/nav-mode-core.js'
import '../js/charts.js'
import '../js/ai.js'
import '../js/system.js'
import '../js/users.js'
import '../js/ai-chat.js'
// 6.1.1 (A3): 可撤销操作注册栈 (破坏性操作 → 5s 撤销)
import '../js/undo-core.js'
// 6.1.1 (A4): 表单参数记忆 (按用户+表单+版本隔离)
import '../js/form-memory-core.js'
// 6.1.4 (D5): 会话恢复 (sessionStorage)
import '../js/session-restore-core.js'
// 6.1.3 (C4): PWA 安装引导条
import '../js/install-prompt.js'
// 6.1.4 (D3): 批量加入自选 (纯逻辑: import 文本构建 + 结果汇总)
import '../js/batch-add-core.js'
// 6.1.4 (D4): 右键菜单 (核心 + 全局组件)
import '../js/context-menu-core.js'
import '../js/components/context-menu.js'
// 6.1.5 (E5): 请求竞态治理 (stale guard / dedupe / abort)
import '../js/request-core.js'
// 6.1.7 (G5): 前端 state 域注册表 (theme/auth/prefs/ui/page 域化 + 快照对拍)
import '../js/state-registry-core.js'
import '../js/stock-pool.js'
import '../js/watchlist.js'
import '../js/portfolio.js'
import '../js/backtest-core.js'
import '../js/backtest.js'
import '../js/merrill.js'
import '../js/echarts-theme.js'
import '../js/components/sidebar.js'
// V6.0 (PRD-6.0): 导航组件 SFC 化 — 接管 qc-sidebar(覆盖旧组件) / qc-header / qc-subnav / qc-mobile-nav
// 注册: SFC 默认导出为对象字面量(plugin-vue 可靠合并 template render), import 后写入 __quantComponents
import SidebarV6 from './components/Sidebar.vue'
import HeaderV6 from './components/Header.vue'
import SubNavV6 from './components/SubNav.vue'
import MobileNavV6 from './components/MobileNav.vue'
// V6.2 (PRD-6.2 F5): 通用股票列表组件
import StockListV6 from './components/common/StockList.vue'
// V5.19 (F1): 通用双栏壳组件 (中栏列表 + 右栏详情工作区)
import DetailSplitV6 from './components/common/DetailSplit.vue'
// V6.3 (PRD-6.3 F4): toptab 形态 — Header 顶部二级横向标签
import TopTabsV6 from './components/TopTabs.vue'
// V6.5 (PRD-6.5 F5): AppIcon 全局注册 — JS 模板(弹窗/页面组件)可直接用 <qc-icon>
import AppIconV6 from './components/common/AppIcon.vue'
AppIconV6.name = 'qc-icon'
if (!window.__quantComponents) window.__quantComponents = {}
window.__quantComponents.Sidebar = SidebarV6
window.__quantComponents.Header = HeaderV6
window.__quantComponents.SubNav = SubNavV6
window.__quantComponents.MobileNav = MobileNavV6
window.__quantComponents.StockList = StockListV6
window.__quantComponents.DetailSplit = DetailSplitV6
window.__quantComponents.TopTabs = TopTabsV6
window.__quantComponents.AppIcon = AppIconV6
import '../js/components/global-header.js'
import '../js/components/calendar-page.js'
import '../js/components/strategies-page.js'
// V6.9.4 (FIX): 页面组件静态预加载 — 与 calendar/strategies 一致, 消除懒加载注册时序导致
// 刷新/启动停留在懒加载页时组件未注册 → <component :is> 渲染为自定义元素 → 工作区空白
// 6.3.0 (T-6.3.0.5): 系统页模板分治 — 片段与装配须先于注册文件 (注册对象创建时即取 template 值)
import '../js/components/system/view-part1.js'
import '../js/components/system/view-part2.js'
import '../js/components/system/view.js'
import '../js/components/system-page.js'
import '../js/components/ai-page.js'
import '../js/components/research-page.js'
import '../js/components/shortterm-page.js'
import '../js/virtual-list-core.js'
import '../js/components/virtual-list.js'
import '../js/mobile-gestures.js'
import '../js/state-panel-core.js'
import '../js/components/state-panel.js'
import '../js/command-panel-core.js'
import '../js/onboarding-core.js'
import '../js/onboarding.js'
import '../js/empty-error.js'
import '../js/components/command-panel.js'
import '../js/components/dialogs/change-password.js'
import '../js/components/dialogs/shortcut-help.js'
import '../js/components/dialogs/tour.js'
import '../js/components/dialogs/menu-config.js'
import '../js/components/dialogs/add-group.js'
import '../js/components/dialogs/add-user.js'
import '../js/components/dialogs/batch-evaluate.js'
import '../js/components/dialogs/auto-evaluate.js'
// 6.1.2 (B3): 自选分组管理弹窗
import '../js/components/dialogs/watch-groups.js'
import '../js/components/dialogs/index-detail.js'
import '../js/components/dialogs/setup-wizard.js'
import '../js/components/dialogs/merrill-detail.js'
import '../js/components/dialogs/stock-detail.js'
import '../js/components/history-record.js'
import '../js/components/focus-view.js'
import '../js/components/focus-view.js'
import '../js/app-logic/data.js'
import '../js/app-logic/market.js'
import '../js/app-logic/ops.js'
import '../js/app-logic/nav.js'
import '../js/app-logic/keys.js'
import '../js/app-logic/auth.js'
import '../js/app-logic/watch.js'
import '../js/app-logic/lifecycle.js'
import '../js/app-logic.js'

// V4.3-S3 (方案A): 页面组件懒加载 — V6.9.4 起改为顶部静态 import (与 calendar/strategies 一致, 消除注册时序空白)
// __lazyLoaders 保留接口兼容 (__quantGoPage / watch.js 调用), 模块已静态加载, 返回已解析 Promise
window.__lazyLoaders = {
  system: () => Promise.resolve(),
  ops: () => Promise.resolve(),   // V6.9.1-fix: 系统状态一级菜单复用 system-page 渲染
  ai: () => Promise.resolve(),
  research: () => Promise.resolve(),
  shortterm: () => Promise.resolve(),
};
