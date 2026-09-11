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

          // V6.6.1 (PRD F-6.6.7): 旧深链重定向 — 合并/更名子页的旧 hash 映射到新 key
          // 日历视图子页 → 主视图 key=calendar 并同步 currentView; 策略编写/全新策略 → strategy-manage 并记录模式
          function applyRedirect(hp, hs) {
            const calViewMap = { daily: 'day', weekly: 'week', monthly: 'month', yearly: 'year' };
            if (hp === 'calendar' && calViewMap[hs]) {
              currentPage.value = 'calendar';
              currentSubPage.value = 'calendar';
              if (calViewMap[hs]) currentView.value = calViewMap[hs];
              return true;
            }
            if (hp === 'research' && (hs === 'strategy-write' || hs === 'custom-write')) {
              currentPage.value = 'research';
              currentSubPage.value = 'strategy-manage';
              try { localStorage.setItem('quant_strategy_mode', hs === 'custom-write' ? 'custom' : 'template'); } catch (e) {}
              return true;
            }
            return false;
          }

          // V6.0 (P1-3): 浏览器前进/后退 — hash 路由回写当前页/子页
          window.addEventListener('hashchange', function () {
            const h = window.location.hash || '';
            if (!h || h === '#') return;
            const parts = h.replace(/^#\/?/, '').split('/');
            const hp = parts[0], hs = parts[1] || '';
            const menu = menus.value.find(function (m) { return m.key === hp; });
            if (!menu) return;
            if (applyRedirect(hp, hs)) return;
            if (!hs) { currentPage.value = hp; currentSubPage.value = menu.subPages[0] || ''; return; }
            if (menu.subPages.indexOf(hs) >= 0) {
              currentPage.value = hp;
              currentSubPage.value = hs;
            }
          });

          // 超时保护的 Promise 包装器（防阻塞渲染）
          const withTimeout = (promise, ms = 3000, label = '') => {
            const timer = new Promise((_, reject) =>
              setTimeout(() => reject(new Error('timeout')), ms));
            return Promise.race([promise, timer]).catch(e => {
              console.warn(`[init] ${label || 'task'} failed:`, e.message);
            });
          };

          // 恢复本地主题 (V6.1: 模式+色相; 旧 quant_theme 经 themes.js 迁移兜底)
          const savedTheme = localStorage.getItem('quant_theme');
          // v3.17.10 (FR-3.17.10): 无本地显式主题时应用偏好主题模式（仍经 applyTheme 权威实现）
          const __prefs = (window.__quantModules && window.__quantModules.preferences)
            ? window.__quantModules.preferences.getLocal() : {};
          if (window.__quantModules && window.__quantModules.themes) {
            const T = window.__quantModules.themes;
            let mode = __prefs.theme || 'system';
            let hue = (__prefs.theme_hue != null && __prefs.theme_hue !== '') ? __prefs.theme_hue : null;
            const legacy = (typeof T.migrateLegacyTheme === 'function') ? T.migrateLegacyTheme() : null;
            if (hue == null && legacy) { mode = legacy.mode; hue = legacy.hue; }
            if (hue == null) hue = 45;
            applyTheme(mode, hue);
          } else if (savedTheme) {
            applyTheme(savedTheme);
          }

          // v1.10: 恢复用户最后选择（无本地最后页面时回落偏好 default_view）
          // V6.0 (P1-3): URL hash 优先恢复 — 刷新定位到具体子页
          (function() {
            var h = window.location.hash || '';
            var fromHash = false;
            if (h && h !== '#') {
              var parts = h.replace(/^#\/?/, '').split('/');
              var hp = parts[0], hs = parts[1] || '';
              var menu = menus.value.find(function(m) { return m.key === hp; });
              if (menu) {
                if (applyRedirect(hp, hs)) { fromHash = true; }
                else {
                  currentPage.value = hp;
                  if (hs && menu.subPages.indexOf(hs) >= 0) currentSubPage.value = hs;
                  else if (!hs) currentSubPage.value = menu.subPages[0] || '';
                  fromHash = true;
                }
              }
            }
            if (!fromHash) {
              var p = localStorage.getItem('quant_last_page');
              if (p && menus.value.some(function(m) { return m.key === p; })) {
                currentPage.value = p;
              } else if (__prefs.default_view && menus.value.some(function(m) { return m.key === __prefs.default_view; })) {
                currentPage.value = __prefs.default_view;
              }
              var s = localStorage.getItem('quant_last_subpage');
              if (s) currentSubPage.value = s;
            }
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
            // V6.1 (PRD-6.1 F5): 主题收敛为明/暗两套 — 不再拉取后端 8 主题列表
            // (command-panel / 外观设置遍历 themes 用新模型两套)
            Promise.resolve().then(() => {
              themes.value = {
                light: { name: '浅色', color: '#f5f3ea' },
                dark: { name: '深色', color: '#0f0f23' },
              };
            }),
            withTimeout(fetchMarketData(), 3000, 'marketData'),
            withTimeout(fetchMerrillStages(), 2000, 'merrillStages'),
          ]).then(() => {
            // 阶段配置加载完成后，再加载时钟数据
            withTimeout(fetchMerrillClock(), 3000, 'merrillClock');
          });
          loadAiConfig();
          loadAiCatalog();
          // V4.6 修复: loadAiVendors 需登录后才加载(未登录 401 会污染 aiModelsError,
          // 导致进入「自动评估」子页时厂商卡不显示, 误以为配置丢失)
          if (hasSession && currentUser.value) {
            loadAiVendors();
          }

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
          // 2) 主题: 偏好(模式+色相)优先, 旧 quant_theme / 用户 theme 字段经 LEGACY_MAP 兜底
          if (currentUser.value) {
            const userTheme = currentUser.value.theme || '';
            const T = window.__quantModules && window.__quantModules.themes;
            let mode = __prefs.theme || 'system';
            let hue = (__prefs.theme_hue != null && __prefs.theme_hue !== '') ? __prefs.theme_hue : null;
            if (hue == null && T && typeof T.migrateLegacyTheme === 'function') {
              const legacy = T.migrateLegacyTheme();
              if (legacy) { mode = legacy.mode; hue = legacy.hue; }
              else if (userTheme && T.LEGACY_MAP && T.LEGACY_MAP[userTheme]) {
                const u = T.LEGACY_MAP[userTheme];
                mode = u[0]; hue = u[1];
              }
            }
            if (hue == null) hue = 45;
            applyTheme(mode, hue);
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
            if (loaded.theme) {
              applyTheme(loaded.theme, (loaded.theme_hue != null && loaded.theme_hue !== '') ? loaded.theme_hue : null);
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
