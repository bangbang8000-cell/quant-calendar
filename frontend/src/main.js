// V4.3 (方案A) 构建入口: 按 index.html 原始 script 顺序副作用导入全部业务 JS
// 由 gen_mainjs.py 生成, 顺序改动需同步 index.html 与本题
// V6.0 (PRD-6.0 FR-6.0.7): 首行引入 globals.js — 挂载 window.Vue/window.ElementPlus
//   (npm 依赖替代原 CDN script), 业务模块执行前全局就绪

import './globals.js'
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
import '../js/charts.js'
import '../js/ai.js'
import '../js/system.js'
import '../js/users.js'
import '../js/ai-chat.js'
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
// V6.1 (PRD-6.1 F8): 动态页签栏
import DynamicTabsV6 from './components/DynamicTabs.vue'
if (!window.__quantComponents) window.__quantComponents = {}
window.__quantComponents.Sidebar = SidebarV6
window.__quantComponents.Header = HeaderV6
window.__quantComponents.SubNav = SubNavV6
window.__quantComponents.MobileNav = MobileNavV6
window.__quantComponents.DynamicTabs = DynamicTabsV6
import '../js/components/global-header.js'
import '../js/components/calendar-page.js'
import '../js/components/strategies-page.js'
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

// V4.3-S3 (方案A): 页面组件懒加载 — 切换对应页面前由 __quantGoPage 动态 import
// 4 大页面组件(system/strategies/ai/research)合计 ~300KB raw, 延迟到进入页面时加载
window.__lazyLoaders = {
  system: () => import('../js/components/system-page.js'),
  ai: () => import('../js/components/ai-page.js'),
  research: () => import('../js/components/research-page.js'),
  shortterm: () => import('../js/components/shortterm-page.js'),
};
