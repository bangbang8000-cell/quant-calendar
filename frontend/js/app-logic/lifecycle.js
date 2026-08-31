// quant-calendar: App 逻辑层 — 生命周期初始化域 (FR-3.17.11.1 拆分自 app-logic.js)
// onMounted 处理器主体 (原 app-logic.js onMounted(async () => {...}))
// 经 window.__quantAppLogic.lifecycle.create(ctx) 装配, 由 app-logic.js onMounted(runOnMounted) 调用
// v3.17.9 (FR-3.17.9): 首屏请求并行化 —
//   有会话时「主界面先行」(立即恢复 currentUser, 骨架屏→主界面), 令牌校验/主题/交易日历/
//   页面数据/用户/评估历史均后台并行加载, 不再被 wave1(wave2 串行链) 阻塞首屏可交互时间。
// ctx 依赖: 各域 refs 与加载函数（setup 完成后调用, 直接引用）
(function () {
  window.__quantAppLogic = window.__quantAppLogic || {};
  window.__quantAppLogic.lifecycle = {
    create: function (ctx) {
      const { handleGlobalKeydown, applyTheme, menus,
              currentPage, currentSubPage, currentView, currentKlinePeriod,
              selectedDate, dates, loadDates, loadConsensusData, loadDashboardCached,
              appVersion, themes, fetchMarketData,
              fetchMerrillStages, fetchMerrillClock,
              loadAiConfig, loadAiVendors, loadAiCatalog, currentUser,
              loadUserConfig, loadAutoEvaluateConfig, loadGroupConfig,
              loadUsers, loadAllGroups, loadAiHistory } = ctx;

      return {
        // v3.2.0-T11: 注册全局快捷键 + 并行加载优化 (v3.17.9: 主界面先行 + 全后台并行)
        runOnMounted: async () => {
          window.addEventListener('keydown', handleGlobalKeydown);

          // 超时保护的 Promise 包装器（防阻塞渲染）
          const withTimeout = (promise, ms = 3000, label = '') => {
            const timer = new Promise((_, reject) =>
              setTimeout(() => reject(new Error('timeout')), ms));
            return Promise.race([promise, timer]).catch(e => {
              console.warn(`[init] ${label || 'task'} failed:`, e.message);
            });
          };

          // 恢复本地主题
          const savedTheme = localStorage.getItem('quant_theme');
          // v3.17.10 (FR-3.17.10): 无本地显式主题时应用偏好主题模式（仍经 applyTheme 权威实现）
          const __prefs = (window.__quantModules && window.__quantModules.preferences)
            ? window.__quantModules.preferences.getLocal() : {};
          if (!savedTheme && __prefs.theme && window.__quantModules && window.__quantModules.preferences) {
            applyTheme(window.__quantModules.preferences.resolveTheme(__prefs.theme));
          }
          if (savedTheme) applyTheme(savedTheme);

          // v1.10: 恢复用户最后选择（无本地最后页面时回落偏好 default_view）
          (function() {
            var p = localStorage.getItem('quant_last_page');
            if (p && menus.value.some(function(m) { return m.key === p; })) {
              currentPage.value = p;
            } else if (__prefs.default_view && menus.value.some(function(m) { return m.key === __prefs.default_view; })) {
              currentPage.value = __prefs.default_view;
            }
            var s = localStorage.getItem('quant_last_subpage');
            if (s) currentSubPage.value = s;
            var d = localStorage.getItem('quant_last_date');
            if (d) selectedDate.value = d;
            var v = localStorage.getItem('quant_last_view');
            if (v) currentView.value = v;
          })();

          // v1.12: 加载服务版本号
          fetch('/api/health').then(r => r.json()).then(d => {
            if (d.version) appVersion.value = d.version;
          }).catch(() => {});

          const savedUser = localStorage.getItem('quant_user');
          const savedToken = localStorage.getItem('quant_token');
          const hasSession = !!(savedUser && savedToken);

          // 注: currentUser 已在 app-logic setup 阶段先行恢复（主界面首帧即渲染）；
          // 此处仅校验令牌有效性, 无效则清除会话回登录页。

          // ===== 第1波: 不依赖用户身份的并行加载（后台, 不阻塞主界面渲染）=====
          const p1 = Promise.all([
            withTimeout(
              fetch('/api/themes').then(r => r.json()).then(d => { themes.value = d.themes || []; }),
              2000, 'themes'
            ),
            withTimeout(fetchMarketData(), 3000, 'marketData'),
            withTimeout(fetchMerrillStages(), 2000, 'merrillStages'),
          ]).then(() => {
            // 阶段配置加载完成后，再加载时钟数据
            withTimeout(fetchMerrillClock(), 3000, 'merrillClock');
          });
          loadAiConfig();
          loadAiVendors();
          loadAiCatalog();

          if (!hasSession || !currentUser.value) {
            // 无会话: 等 wave1 完成后即可（登录页已先行渲染）
            await p1;
            return;
          }

          // ===== 有会话: 后台校验令牌 + 并行加载业务数据 =====
          // 1) 令牌校验（失败则清除会话回登录页）
          let tokenValid = true;
          try {
            const verifyRes = await fetch('/api/users/me');
            tokenValid = verifyRes.ok;
          } catch (e) {
            tokenValid = false;
          }
          if (!tokenValid) {
            console.warn('[init] token expired, clearing session');
            localStorage.removeItem('quant_user');
            localStorage.removeItem('quant_token');
            currentUser.value = null;
            return;
          }
          // 2) 主题: 本地主题优先, 用户 theme / 偏好模式兜底
          if (currentUser.value) {
            const userTheme = currentUser.value.theme || '';
            const fallbackTheme = (__prefs.theme && window.__quantModules && window.__quantModules.preferences)
              ? window.__quantModules.preferences.resolveTheme(__prefs.theme) : 'tech-blue';
            applyTheme(savedTheme || userTheme || fallbackTheme);
          }
          // v3.17.10 (FR-3.17.10): 拉取后端偏好合并并应用（登录用户重启/换设备保持）
          if (window.__quantModules && window.__quantModules.preferences) {
            const P = window.__quantModules.preferences;
            const loaded = await P.loadPreferences();
            var lastPage = localStorage.getItem('quant_last_page');
            if (!lastPage && loaded.default_view
                && menus.value.some(function (m) { return m.key === loaded.default_view; })) {
              currentPage.value = loaded.default_view;
            }
            if (!savedTheme && loaded.theme) {
              applyTheme(P.resolveTheme(loaded.theme));
            }
            if (currentKlinePeriod
                && (loaded.chart_period === 'weekly' || loaded.chart_period === 'monthly')) {
              currentKlinePeriod.value = loaded.chart_period;
            }
          }
          // 3) 并行: 用户配置 + 交易日历（二者无依赖; loadDates 设置 selectedDate 供共识数据用）
          await Promise.all([
            withTimeout(loadUserConfig(), 2000, 'userConfig'),
            withTimeout(loadDates(), 2000, 'dates'),
          ]);
          // auto_evaluate_config 必须在 loadUserConfig 之后加载
          // 否则会被 BASE_CONFIG_DEFAULTS 的 enabled:false 覆盖
          loadAutoEvaluateConfig().catch(() => {});
          // v1.9.2: 加载用户组菜单配置
          loadGroupConfig().catch(() => {});
          // 4) 并行: 主页面数据 + 用户列表 + 评估历史（三者无依赖）
          const mainLoad = (currentPage.value === 'strategies')
            ? withTimeout(loadDashboardCached(), 2000, 'dashboard')
            : withTimeout(loadConsensusData(), 2000, 'consensus');
          await Promise.all([
            mainLoad,
            withTimeout(loadUsers(), 2000, 'users'),
            withTimeout(loadAiHistory(), 2000, 'aiHistory'),
          ]);
          loadAllGroups().catch(() => {});
        },
      };
    },
  };
})();
