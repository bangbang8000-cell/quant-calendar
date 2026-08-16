// quant-calendar: GlobalHeader 组件 (v3.6.0-T3 / FR-3.6.2)
// 含二级导航标签 + 全局搜索 + 日期选择 + 用户菜单 + 面包屑
(function () {
  const { ref, computed, inject } = Vue;

  window.__quantComponents = window.__quantComponents || {};

  window.__quantComponents.GlobalHeader = {
    name: 'qc-global-header',
    template: `
      <div>
        <div class="global-header">
          <div class="sub-nav-wrapper">
            <template v-for="menu in menus" :key="menu.key">
              <template v-if="currentPage === menu.key">
                <div v-for="sp in menu.subPages" :key="sp"
                     class="sub-nav-tab" :class="{active: currentSubPage === sp}"
                     @click="currentSubPage = sp" tabindex="0" role="tab"
                     :aria-selected="currentSubPage === sp"
                     @keydown.enter.prevent="currentSubPage = sp" @keydown.space.prevent="keyClick($event)">
                  {{ subPageNames[sp] || sp }}
                </div>
              </template>
            </template>
          </div>

          <div class="global-search-wrapper">
            <el-autocomplete class="w-200" v-model="searchQuery" :fetch-suggestions="searchStocks" placeholder="搜索股票..." :trigger-on-focus="false" clearable size="small" @select="onSearchSelect">
              <template #default="slotProps">
                <span>{{ slotProps?.item?.icon }} {{ slotProps?.item?.label || slotProps?.item?.name }}</span>
                <span class="text-sm-secondary-ml8" v-if="slotProps?.item?.subLabel">{{ slotProps?.item?.subLabel }}</span>
              </template>
            </el-autocomplete>
          </div>

          <div class="header-date-area" v-if="currentPage === 'calendar'">
            <el-date-picker v-if="currentSubPage === 'daily'"
                v-model="selectedDate" type="date" format="YYYY-MM-DD" value-format="YYYY-MM-DD"
                placeholder="选择日期" @change="onDateChange" :disabled-date="disabledDate" size="small"></el-date-picker>
            <el-date-picker v-else-if="currentSubPage === 'weekly'"
                v-model="selectedDate" type="week" format="YYYY 第w周" value-format="YYYY-MM-DD"
                placeholder="选择周" @change="onDateChange" :disabled-date="disabledDate" size="small"></el-date-picker>
            <el-date-picker v-else-if="currentSubPage === 'monthly'"
                v-model="selectedDate" type="month" format="YYYY-MM" value-format="YYYY-MM-DD"
                placeholder="选择月份" @change="onDateChange" :disabled-date="disabledDate" size="small"></el-date-picker>
            <el-date-picker v-else-if="currentSubPage === 'yearly'"
                v-model="selectedDate" type="year" format="YYYY" value-format="YYYY-MM-DD"
                placeholder="选择年份" @change="onDateChange" :disabled-date="disabledDate" size="small"></el-date-picker>
            <el-button class="ml-8px" size="small" @click="refreshCalendarData" :loading="loading" title="重新加载最新持仓数据">🔄 刷新</el-button>
            <el-button class="ml-4px" size="small" @click="exportCSV" title="导出为CSV">📥 导出</el-button>
            <span class="text-sm-tertiary-ml6-nowrap" v-if="lastLoadTime">{{ lastLoadTime }}</span>
          </div>

          <div class="user-menu-wrapper" @click="showUserMenu = !showUserMenu" tabindex="0" role="button"
               aria-haspopup="menu" :aria-expanded="showUserMenu" aria-label="用户菜单"
               @keydown.enter.prevent="keyClick($event)" @keydown.space.prevent="keyClick($event)"
               @keydown.esc.prevent="showUserMenu = false"
               v-click-outside="() => showUserMenu = false">
            <div class="user-menu-avatar">{{ currentUser?.username?.charAt(0)?.toUpperCase() }}</div>
            <span class="user-menu-name">{{ currentUser?.username }}</span>
            <span class="info-chip-xs" v-if="currentUser?.role === 'guest'">访客</span>
            <span class="text-xs-tertiary">▼</span>
            <div class="user-menu-dropdown" v-if="showUserMenu" @click.stop role="menu">
              <div class="user-menu-item" v-if="currentUser?.role === 'admin'" tabindex="0" role="menuitem" @click="showUserMenu = false; resetSetupWizard()" @keydown.enter.prevent="keyClick($event)" @keydown.space.prevent="keyClick($event)">⚙️ 重新运行初始化向导</div>
              <div class="user-menu-item" v-if="currentUser?.role !== 'guest'" tabindex="0" role="menuitem" @click="showUserMenu = false; showChangePassword = true" @keydown.enter.prevent="keyClick($event)" @keydown.space.prevent="keyClick($event)">🔑 修改密码</div>
              <div class="user-menu-divider"></div>
              <div class="user-menu-section-title">🎨 切换主题</div>
              <div v-for="(theme, key) in themes" :key="key" class="user-menu-item theme-item-row"
                   :class="{'theme-active': currentTheme === key}" tabindex="0"
                   role="menuitemradio" :aria-checked="currentTheme === key"
                   @click="changeTheme(key); showUserMenu = false"
                   @keydown.enter.prevent="keyClick($event)" @keydown.space.prevent="keyClick($event)">
                <span class="theme-dot" :style="{background: theme.gradient}"></span>
                <span>{{ theme.name }}</span>
                <span v-if="currentTheme === key" class="theme-check">✓</span>
              </div>
              <div class="user-menu-divider"></div>
              <div class="user-menu-item danger" tabindex="0" role="menuitem" @click="handleLogout" @keydown.enter.prevent="keyClick($event)" @keydown.space.prevent="keyClick($event)">🚪 退出登录</div>
            </div>
          </div>
        </div>

      </div>
    `,
    setup() {
      const state = inject('qcState');
      if (!state) return {};
      const showUserMenu = ref(false);

      return {
        menus: state.menus,
        currentPage: state.currentPage,
        currentSubPage: state.currentSubPage,
        currentUser: state.currentUser,
        currentPageName: state.currentPageName,
        searchQuery: state.searchQuery,
        searchStocks: state.searchStocks,
        onSearchSelect: state.onSearchSelect,
        selectedDate: state.selectedDate,
        onDateChange: state.onDateChange,
        disabledDate: state.disabledDate,
        refreshCalendarData: state.refreshCalendarData,
        exportCSV: state.exportCSV,
        loading: state.loading,
        lastLoadTime: state.lastLoadTime,
        showUserMenu,
        resetSetupWizard: state.resetSetupWizard,
        showChangePassword: state.showChangePassword,
        themes: state.themes,
        currentTheme: state.currentTheme,
        changeTheme: state.changeTheme,
        handleLogout: state.handleLogout,
        subPageNames: state.subPageNames,
        keyClick: state.keyClick,
      };
    },
  };
})();
