// quant-calendar: App 逻辑层 — 生命周期初始化域 (FR-3.17.11.1 拆分自 app-logic.js)
// onMounted 处理器主体 (原 app-logic.js onMounted(async () => {...}))
// 经 window.__quantAppLogic.lifecycle.create(ctx) 装配, 由 app-logic.js onMounted(runOnMounted) 调用
// ctx 依赖: 各域 refs 与加载函数（setup 完成后调用, 直接引用）
(function () {
  window.__quantAppLogic = window.__quantAppLogic || {};
  window.__quantAppLogic.lifecycle = {
    create: function (ctx) {
      const { handleGlobalKeydown, applyTheme, menus,
              currentPage, currentSubPage, currentView,
              selectedDate, dates, loadDates, loadConsensusData, loadDashboardCached,
              appVersion, themes, fetchMarketData,
              fetchMerrillStages, fetchMerrillClock,
              loadAiConfig, loadAiVendors, loadAiCatalog, currentUser,
              loadUserConfig, loadAutoEvaluateConfig, loadGroupConfig,
              loadUsers, loadAllGroups, loadAiHistory } = ctx;

      return {
        // v3.2.0-T11: 注册全局快捷键 + 并行加载优化
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
          if (savedTheme) applyTheme(savedTheme);

          // v1.10: 恢复用户最后选择
          (function() {
            var p = localStorage.getItem('quant_last_page');
            if (p && menus.value.some(function(m) { return m.key === p; })) currentPage.value = p;
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

          // ===== 第1波: 不依赖用户身份的并行加载 =====
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

          // ===== 第2波: 恢复登录（需要第1波完成后的主题） =====
          await p1;
          const savedUser = localStorage.getItem('quant_user');
          const savedToken = localStorage.getItem('quant_token');
          if (savedUser && savedToken) {
            // 验证 token 是否仍然有效
            let tokenValid = false;
            try {
              const verifyRes = await fetch('/api/users/me');
              tokenValid = verifyRes.ok;
            } catch (e) {
              tokenValid = false;
            }
            if (!tokenValid) {
              // token 已过期，清除登录状态
              console.warn('[init] token expired, clearing session');
              localStorage.removeItem('quant_user');
              localStorage.removeItem('quant_token');
            } else {
              try {
                currentUser.value = JSON.parse(savedUser);
                // 优先用 localStorage 主题（用户主动选择的），其次用后端记录，最后默认
                applyTheme(savedTheme || currentUser.value.theme || 'tech-blue');
                await withTimeout(loadUserConfig(), 2000, 'userConfig');
                // auto_evaluate_config 必须在 loadUserConfig 之后加载
                // 否则会被 BASE_CONFIG_DEFAULTS 的 enabled:false 覆盖
                loadAutoEvaluateConfig().catch(() => {});
                // v1.9.2: 加载用户组菜单配置
                loadGroupConfig().catch(() => {});
                await withTimeout(loadDates(), 2000, 'dates');
                if (currentPage.value === 'strategies') {
                  await withTimeout(loadDashboardCached(), 2000, 'dashboard');
                } else {
                  await withTimeout(loadConsensusData(), 2000, 'consensus');
                }
                await withTimeout(loadUsers(), 2000, 'users');
                loadAllGroups().catch(() => {});
                await withTimeout(loadAiHistory(), 2000, 'aiHistory');
              } catch (e) {
                console.warn('[init] user data load failed:', e.message);
              }
            }
          }
        },
      };
    },
  };
})();
