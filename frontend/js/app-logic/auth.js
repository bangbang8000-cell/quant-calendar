// quant-calendar: App 逻辑层 — 登录/登出/修改密码/初始化向导域 (FR-3.17.11.1 拆分自 app-logic.js)
// 经 window.__quantAppLogic.auth.create(ctx) 装配, 由 app-logic.js 解构注入 qcState
// ctx 依赖: currentUser/loadUserConfig/loadDates/loadDashboardData/loadHealthMetrics
//           loadConsensusData/applyTheme/maybeShowTour
(function () {
  window.__quantAppLogic = window.__quantAppLogic || {};
  window.__quantAppLogic.auth = {
    create: function (ctx) {
      const { currentUser, loadUserConfig, loadDates, loadDashboardData, loadDashboardCached, loadHealthMetrics,
              loadConsensusData, applyTheme, maybeShowTour } = ctx;

      // ===== 登录状态 =====
      const loginForm = ref({ username: '', password: '' });
      const logining = ref(false);
      const guestLogining = ref(false);  // v1.8.0: 访客登录

      // ===== v1.5.0: 修改密码 =====
      const showChangePassword = ref(false);
      const changePasswordForm = ref({ oldPassword: '', newPassword: '', confirmPassword: '' });
      const changingPassword = ref(false);

      // ===== v2.2: 初始化向导 =====
      const showSetupWizard = ref(false);
      const setupForm = ref({ newPassword: '', aiKey: '', aiProvider: 'deepseek', aiModel: 'deepseek-chat', aiEndpoint: 'https://api.deepseek.com/v1', tushareToken: '' });
      const setupStep = ref(1);

      // ===== v2.2: 初始化向导 =====
      async function checkSetupWizard() {
        try {
          const res = await fetch('/api/setup/status');
          const data = await res.json();
          if (data.needed) {
            setupForm.value = { newPassword: '', aiKey: '', aiProvider: 'deepseek', aiModel: 'deepseek-chat', aiEndpoint: 'https://api.deepseek.com/v1', tushareToken: '' };
            setupStep.value = 1;
            showSetupWizard.value = true;
          }
        } catch (e) { console.warn('[checkSetupWizard] failed:', e); }
      }

      async function completeSetupWizard() {
        try {
          const body = {
            new_password: setupForm.value.newPassword,
            ai_key: setupForm.value.aiKey,
            ai_provider: setupForm.value.aiProvider,
            ai_model: setupForm.value.aiModel,
            ai_endpoint: setupForm.value.aiEndpoint,
            tushare_token: setupForm.value.tushareToken
          };
          const res = await fetch('/api/setup/complete', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body)
          });
          const data = await res.json();
          if (data.success) {
            showSetupWizard.value = false;
            ElementPlus.ElMessage.success('初始化完成');
            await loadUserConfig();
          } else {
            ElementPlus.ElMessage.error(data.message || '保存失败');
          }
        } catch (e) {
          ElementPlus.ElMessage.error('保存失败');
        }
      }

      async function resetSetupWizard() {
        try {
          const res = await fetch('/api/setup/reset', { method: 'POST' });
          const data = await res.json();
          if (data.success) {
            showSetupWizard.value = true;
          }
        } catch (e) {
          ElementPlus.ElMessage.error('重置失败');
        }
      }

      // ===== 登录登出 =====
      async function handleLogin() {
        if (!loginForm.value.username || !loginForm.value.password) {
          ElementPlus.ElMessage.warning('请输入用户名和密码');
          return;
        }
        logining.value = true;
        try {
          const res = await fetch('/api/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(loginForm.value)
          });
          const data = await res.json();
          if (data.success) {
            currentUser.value = data.user;
            localStorage.setItem('quant_user', JSON.stringify(data.user));
            localStorage.setItem('quant_token', data.data.access_token);
            applyTheme(data.user.theme || 'tech-blue');
            await loadUserConfig();
            await loadDates();
            // V4.5 (FR-4.5.2): 并行加载(即时反馈) + loadDashboardCached(缓存防重复)
            await Promise.all([
              loadDashboardCached(),
              loadConsensusData(),
              loadHealthMetrics().catch(() => {}),
            ]);
            ElementPlus.ElMessage.success('登录成功');
            // V4.1 (FR-4.1.9): 默认口令登录 → 强制改密提示
            if (data.data && data.data.must_change_password) {
              ElementPlus.ElMessage.warning('检测到默认口令，请立即在「系统」页修改管理员密码');
            }
            // v3.2.0-T22: 首次使用引导 (所有角色首次登录显示)
            maybeShowTour();
            // v2.2: 检查是否需要初始化向导
            if (data.user.role === 'admin') {
              setTimeout(checkSetupWizard, 500);
            }
          } else {
            ElementPlus.ElMessage.error(data.message || '登录失败');
          }
        } catch (e) {
          ElementPlus.ElMessage.error('登录失败');
        } finally {
          logining.value = false;
        }
      }

      // v1.8.0: 访客登录
      async function handleGuestLogin() {
        guestLogining.value = true;
        try {
          const res = await fetch('/api/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username: 'guest', password: 'guest' })
          });
          const data = await res.json();
          if (data.success) {
            currentUser.value = data.user;
            localStorage.setItem('quant_user', JSON.stringify(data.user));
            localStorage.setItem('quant_token', data.data.access_token);
            applyTheme(data.user.theme || 'tech-blue');
            await loadUserConfig();
            await loadDates();
            await loadDashboardData();
            // v3.11 (FR-3.11.7): 访客登录后同样刷新数据源健康卡
            loadHealthMetrics().catch(() => {});
            await loadConsensusData();
            ElementPlus.ElMessage.success('访客登录成功');
          } else {
            ElementPlus.ElMessage.error(data.message || '登录失败');
          }
        } catch (e) {
          ElementPlus.ElMessage.error('登录失败');
        } finally {
          guestLogining.value = false;
        }
      }

      function handleLogout() {
        ElementPlus.ElMessageBox.confirm('确定要退出登录吗？', '确认退出', {
          confirmButtonText: '退出',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          currentUser.value = null;
          // V4.2 (FR-4.2.7): 登出双清凭证 + 断开 WS
          localStorage.removeItem('quant_user');
          localStorage.removeItem('quant_token');
          try {
            if (window.__quantWs && window.__quantWs.close) window.__quantWs.close();
          } catch (e) {}
        }).catch(() => {});
      }

      // ===== v1.5.0: 修改密码 =====
      async function doChangePassword() {
        if (!changePasswordForm.value.oldPassword) {
          ElementPlus.ElMessage.warning('请输入当前密码');
          return;
        }
        if (!changePasswordForm.value.newPassword || changePasswordForm.value.newPassword.length < 6) {
          ElementPlus.ElMessage.warning('新密码至少6位');
          return;
        }
        if (changePasswordForm.value.newPassword !== changePasswordForm.value.confirmPassword) {
          ElementPlus.ElMessage.warning('两次输入的新密码不一致');
          return;
        }
        changingPassword.value = true;
        try {
          const res = await fetch('/api/auth/change-password', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              old_password: changePasswordForm.value.oldPassword,
              new_password: changePasswordForm.value.newPassword
            })
          });
          const data = await res.json();
          if (res.ok) {
            ElementPlus.ElMessage.success('密码修改成功，请重新登录');
            showChangePassword.value = false;
            changePasswordForm.value = { oldPassword: '', newPassword: '', confirmPassword: '' };
            handleLogout();
          } else {
            ElementPlus.ElMessage.error(data.detail || '修改失败');
          }
        } catch (e) {
          ElementPlus.ElMessage.error('修改失败，请检查网络连接');
        } finally {
          changingPassword.value = false;
        }
      }

      return {
        loginForm, logining, guestLogining,
        showChangePassword, changePasswordForm, changingPassword,
        showSetupWizard, setupForm, setupStep,
        checkSetupWizard, completeSetupWizard, resetSetupWizard,
        handleLogin, handleGuestLogin, handleLogout, doChangePassword,
      };
    },
  };
})();
