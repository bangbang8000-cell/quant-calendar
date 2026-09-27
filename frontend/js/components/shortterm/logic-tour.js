// quant-calendar: 短线复盘页逻辑域 — 3 步新手引导（首次进入 overview 触发/跳过/完成）
// 6.3.0 (T-6.3.0.9): 自 components/shortterm-page.js 的 setup body 逐字符搬出（保留原缩进）
// 经 window.__quantModules.shorttermPage.tour.create(ctx) 装配, 由 shortterm-page.js 解构返回
// ctx 依赖: ref / computed / currentSubPage(共享 state 子页引用)
(function () {
  window.__quantModules = window.__quantModules || {};
  window.__quantModules.shorttermPage = window.__quantModules.shorttermPage || {};
  window.__quantModules.shorttermPage.tour = {
    create: function (ctx) {
      const { ref, computed, currentSubPage } = ctx;
      // V5.3.0 (T-5.3.1.3): 短线复盘 3 步新手引导 (首次进入 overview 触发)
      const OC = window.QuantOnboarding;
      const shorttermTourVisible = ref(false);
      const shorttermTourState = ref(OC ? OC.createShorttermTourState() : { stepIndex: 0, completed: false, dismissed: false, updatedAt: 0 });
      const shorttermTourStep = computed(function () {
        return (OC && OC.shorttermTourSteps()[shorttermTourState.value.stepIndex]) || { key: '', title: '', desc: '' };
      });
      const shorttermTourProg = computed(function () {
        return OC ? OC.shorttermTourProgress(shorttermTourState.value) : { done: 0, total: 3, pct: 0 };
      });
      const shorttermTourIsLast = computed(function () {
        return shorttermTourState.value.stepIndex >= 2;
      });

      function _loadShorttermTourState() {
        if (!OC) return;
        var saved = null;
        try { saved = localStorage.getItem('qc_shortterm_tour'); } catch (e) { /* ignore */ }
        if (saved) {
          var parsed = OC.parseState(saved);
          if (parsed) shorttermTourState.value = parsed;
        }
      }

      function _saveShorttermTourState() {
        if (!OC) return;
        var payload = JSON.stringify(shorttermTourState.value);
        try { localStorage.setItem('qc_shortterm_tour', payload); } catch (e) { /* ignore */ }
        try {
          fetch('/api/user_config/preferences', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ preferences: { shortterm_tour: payload } }),
          }).catch(function () { /* 离线忽略 */ });
        } catch (e) { /* ignore */ }
      }

      function maybeShowShorttermTour() {
        // V5.4.2 (FR): 向导弹窗机制取消 — 短线复盘引导默认不再自动弹出 (全局开关可恢复)
        if (window.__quantGuideModalsEnabled !== true) return;
        if (!OC) return;
        if (currentSubPage.value !== 'overview') return;
        _loadShorttermTourState();
        if (OC.shorttermTourShouldShow(shorttermTourState.value)) {
          shorttermTourVisible.value = true;
        }
      }

      function shorttermTourNext() {
        shorttermTourState.value = OC.shorttermTourNext(shorttermTourState.value);
        _saveShorttermTourState();
      }

      function shorttermTourFinish() {
        shorttermTourState.value = OC.shorttermTourComplete(shorttermTourState.value);
        _saveShorttermTourState();
        shorttermTourVisible.value = false;
      }

      function shorttermTourSkip() {
        shorttermTourState.value = OC.shorttermTourDismiss(shorttermTourState.value);
        _saveShorttermTourState();
        shorttermTourVisible.value = false;
      }

      return {
        shorttermTourVisible, shorttermTourState, shorttermTourStep, shorttermTourProg, shorttermTourIsLast,
        maybeShowShorttermTour, shorttermTourNext, shorttermTourFinish, shorttermTourSkip,
      };
    },
  };
})();