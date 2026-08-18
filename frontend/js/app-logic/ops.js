// quant-calendar: App 逻辑层 — 运维与辅助功能域 (FR-3.17.11.1 拆分自 app-logic.js)
// 系统监控/备份/策略推荐/AI用量/反馈/首次引导/浮动AI按钮/飞书推送 配置
// 经 window.__quantAppLogic.ops.create(ctx) 装配, 由 app-logic.js 解构注入 qcState
// ctx 依赖: navigateTo/currentPage/currentSubPage
(function () {
  window.__quantAppLogic = window.__quantAppLogic || {};
  window.__quantAppLogic.ops = {
    create: function (ctx) {
      const { navigateTo, currentPage, currentSubPage } = ctx;

      // ===== 飞书配置数据 =====
      const feishuConfig = ref({
        webhook_url: '',
        notify_type: 'webhook',
        format: 'card',
        enabled: false,
        daily_push: false,
        view_change_push: false,
        ai_evaluate_push: false
      });
      const feishuTestStatus = ref('idle');
      const feishuTestMessage = ref('');

      // ===== 测试飞书Webhook =====
      async function testFeishuWebhook() {
        if (!feishuConfig.value.webhook_url) {
          feishuTestMessage.value = '请先输入Webhook地址';
          return;
        }
        feishuTestStatus.value = 'testing';
        feishuTestMessage.value = '';
        try {
          const res = await fetch('/api/feishu/test', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ webhook_url: feishuConfig.value.webhook_url })
          });
          const data = await res.json();
          if (data.success || data.status === 'ok') {
            feishuTestMessage.value = '测试消息已发送，请查看飞书';
            ElementPlus.ElMessage.success('测试消息已发送');
          } else {
            feishuTestMessage.value = (data.message || '测试失败');
            ElementPlus.ElMessage.error(feishuTestMessage.value);
          }
        } catch (e) {
          feishuTestMessage.value = '连接失败';
          ElementPlus.ElMessage.error('飞书连接失败');
        }
        feishuTestStatus.value = 'idle';
      }

      // ===== 保存飞书配置 =====
      async function saveFeishuConfig() {
        try {
          const res = await fetch('/api/feishu/config', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(feishuConfig.value)
          });
          const result = await res.json();
          // 保存结果在UI展示
        } catch (e) { ElementPlus.ElMessage.error('保存失败'); }
      }

      // v3.2.0-T13: 浮动 AI 按钮 → 跳转智能评估页并聚焦问股
      const aiFabHidden = ref(false);
      function openAiFab() {
        navigateTo('ai', 'chat_history');
        aiFabHidden.value = true;
        Vue.nextTick(() => {
          const input = document.querySelector('input[placeholder*="输入问题"]');
          if (input) input.focus();
        });
      }

      // v3.5.0-T5/T6: 策略推荐 + AI 用量
      const strategyRecommendations = ref([]);
      const aiUsage = ref({});
      async function loadStrategyRecommendations() {
        try {
          const res = await fetch('/api/ai/recommend-strategies');
          const data = await res.json();
          if (data.success) strategyRecommendations.value = data.recommendations || [];
        } catch (e) { console.warn('[loadStrategyRecommendations] failed:', e); }
      }
      async function loadAiUsage() {
        try {
          const res = await fetch('/api/ai/usage-stats');
          const data = await res.json();
          if (data.success) aiUsage.value = data;
        } catch (e) { console.warn('loadAiUsage failed:', e); }
      }

      // v3.4.0-T4/T7: 系统监控 + 页面热度
      const sysMonitor = ref({});
      const analyticsRank = ref([]);
      const analyticsDays = ref(7);
      async function loadSysMonitor() {
        try {
          const res = await fetch('/api/system/monitor');
          const data = await res.json();
          if (data.success) sysMonitor.value = data;
        } catch (e) { console.warn('loadSysMonitor failed:', e); }
      }
      // v3.17.12 (FR-3.17.12): 健康面板详情 — 调度任务/数据源延迟/备份最近成功/磁盘剩余
      const healthDetail = ref({});
      async function loadHealthDetail() {
        try {
          const res = await fetch('/api/system/health-detail');
          const data = await res.json();
          if (data.success) healthDetail.value = data;
        } catch (e) { console.warn('loadHealthDetail failed:', e); }
      }
      async function loadAnalytics() {
        try {
          const res = await fetch(`/api/analytics/rank?days=${analyticsDays.value}`);
          const data = await res.json();
          if (data.success) analyticsRank.value = data.rank || [];
        } catch (e) { console.warn('loadAnalytics failed:', e); }
      }
      // v3.18 (FR-3.18.9): AI 事实护栏审计 — 最近报告 + 立即抽查
      const factCheck = ref(null);
      const factCheckRunning = ref(false);
      async function loadFactCheck() {
        try {
          const res = await fetch('/api/ai/fact-check/latest');
          const data = await res.json();
          factCheck.value = data && data.success ? (data.data || null) : null;
        } catch (e) { console.warn('loadFactCheck failed:', e); }
      }
      async function triggerFactCheck() {
        if (factCheckRunning.value) return;
        factCheckRunning.value = true;
        try {
          const res = await fetch('/api/ai/fact-check/audit', { method: 'POST' });
          const data = await res.json();
          if (data && data.success) {
            ElementPlus.ElMessage.success(`事实护栏抽查完成: 通过率 ${data.data.pass_rate != null ? data.data.pass_rate + '%' : '--'} (${data.data.checked} 个数字)`);
            loadFactCheck();
          } else {
            ElementPlus.ElMessage.error((data && (data.detail || data.message)) || '事实护栏抽查失败');
          }
          return data;
        } catch (e) {
          ElementPlus.ElMessage.error('事实护栏抽查失败: ' + (e.message || ''));
        } finally {
          factCheckRunning.value = false;
        }
      }

      // v3.3.0-T8: 数据备份与恢复
      const backups = ref([]);
      const backupCreating = ref(false);
      async function loadBackups() {
        try {
          const res = await fetch('/api/backup/list');
          const data = await res.json();
          if (data.success) backups.value = data.backups || [];
        } catch (e) { console.error('加载备份列表失败', e); }
      }
      async function createBackup() {
        backupCreating.value = true;
        try {
          const res = await fetch('/api/backup/create', {
            method: 'POST'
          });
          const data = await res.json();
          if (data.success) {
            ElementPlus.ElMessage.success(data.message || '备份成功');
            loadBackups();
          } else {
            ElementPlus.ElMessage.error(data.message || '备份失败');
          }
        } catch (e) { ElementPlus.ElMessage.error('备份失败'); }
        finally { backupCreating.value = false; }
      }
      async function restoreBackup(name) {
        try {
          await ElementPlus.ElMessageBox.confirm(
            `确定要从备份 ${name} 恢复吗？当前数据将被覆盖。`,
            '⚠️ 恢复确认',
            { type: 'warning', confirmButtonText: '恢复', cancelButtonText: '取消' }
          );
        } catch (e) { console.warn('[restoreBackup] confirm cancelled:', e); return; }
        try {
          const res = await fetch('/api/backup/restore', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name })
          });
          const data = await res.json();
          if (data.success) {
            ElementPlus.ElMessage.success(data.message || '恢复成功');
            setTimeout(() => location.reload(), 1000);
          } else {
            ElementPlus.ElMessage.error(data.message || '恢复失败');
          }
        } catch (e) { ElementPlus.ElMessage.error('恢复失败'); }
      }

      // v3.2.0-T22: 首次使用引导
      const tourVisible = ref(false);
      const tourStep = ref(0);
      const tourSteps = [
        { icon: '🗓️', title: '认识量化日历', desc: '日历页展示每日策略选股结果，支持日/周/月/年视图切换。红色=新增入选，蓝色=当前持有，灰色=已出池。' },
        { icon: '🤖', title: 'AI 智能评估', desc: '在智能评估页可对股票发起多模型 AI 评估；点击右下角 🤖 按钮可随时快速问股。' },
        { icon: '📮', title: '设置推送与反馈', desc: '在系统配置页可设置飞书推送、数据源和 AI 模型；关于页可提交问题反馈。' },
      ];
      function maybeShowTour() {
        if (localStorage.getItem('quant_tour_done') === '1') return;
        setTimeout(() => { tourStep.value = 0; tourVisible.value = true; }, 800);
      }
      function skipTour() { tourVisible.value = false; localStorage.setItem('quant_tour_done', '1'); }
      function finishTour() { tourVisible.value = false; localStorage.setItem('quant_tour_done', '1'); }

      const feedbackText = ref('');
      const feedbackSubmitting = ref(false);
      async function submitFeedback() {
        if (!feedbackText.value || !feedbackText.value.trim()) {
          ElementPlus.ElMessage.warning('请输入反馈内容');
          return;
        }
        feedbackSubmitting.value = true;
        try {
          const res = await fetch('/api/feedback', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              content: feedbackText.value.trim(),
              page: currentPage.value + '/' + currentSubPage.value,
              user_agent: navigator.userAgent.slice(0, 200),
              app_version: 'v' + (window.__appVersion || '3.2.0'),
            }),
          });
          if (res.ok) {
            feedbackText.value = '';
            ElementPlus.ElMessage.success('反馈已提交，感谢你的支持！');
          } else {
            ElementPlus.ElMessage.error('提交失败，请稍后重试');
          }
        } catch (e) {
          ElementPlus.ElMessage.error('提交失败，请稍后重试');
        } finally {
          feedbackSubmitting.value = false;
        }
      }

      return {
        feishuConfig, feishuTestStatus, feishuTestMessage,
        testFeishuWebhook, saveFeishuConfig,
        aiFabHidden, openAiFab,
        strategyRecommendations, aiUsage, loadStrategyRecommendations, loadAiUsage,
        sysMonitor, analyticsRank, analyticsDays, loadSysMonitor, loadAnalytics,
        healthDetail, loadHealthDetail,
        reviewTriggering, triggerMarketReview,
        factCheck, factCheckRunning, loadFactCheck, triggerFactCheck,
        backups, backupCreating, loadBackups, createBackup, restoreBackup,
        tourVisible, tourStep, tourSteps, maybeShowTour, skipTour, finishTour,
        feedbackText, feedbackSubmitting, submitFeedback,
      };
    },
  };
})();
