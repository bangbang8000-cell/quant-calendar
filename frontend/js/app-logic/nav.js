// quant-calendar: App 逻辑层 — 视图/日期导航域 (FR-3.17.11.1 拆分自 app-logic.js)
// 经 window.__quantAppLogic.nav.create(ctx) 装配, 由 app-logic.js 解构注入 qcState
// ctx 依赖: currentView/selectedDate/dates/loadConsensusData/hapticFeedback
(function () {
  window.__quantAppLogic = window.__quantAppLogic || {};
  window.__quantAppLogic.nav = {
    create: function (ctx) {
      const { computed } = Vue;
      const { currentView, selectedDate, dates, loadConsensusData, hapticFeedback } = ctx;

      // ===== 视图切换 =====
      const viewUnit = computed(() => {
        const map = { day: '天', week: '周', month: '月', year: '年' };
        return map[currentView.value] || '天';
      });

      const datePickerType = computed(() => {
        const map = { day: 'date', week: 'week', month: 'month', year: 'year' };
        return map[currentView.value] || 'date';
      });

      const dateFormat = computed(() => {
        const map = { day: 'YYYY-MM-DD', week: 'YYYY 第w周', month: 'YYYY-MM', year: 'YYYY' };
        return map[currentView.value] || 'YYYY-MM-DD';
      });

      const canNavPrev = computed(() => {
        if (!selectedDate.value || !dates.value || dates.value.length === 0) return false;
        return selectedDate.value > dates.value[0];
      });

      const canNavNext = computed(() => {
        if (!selectedDate.value || !dates.value || dates.value.length === 0) return false;
        return selectedDate.value < dates.value[dates.value.length - 1];
      });

      function switchView(view) {
        hapticFeedback('light');
        currentView.value = view;
        // 确保日期为同期首个交易日（而非 -01/-01-01 硬编码）
        let currentDate = selectedDate.value || dates.value[dates.value.length - 1];
        if (view === 'year') {
          const yearPrefix = currentDate.substring(0, 4);
          const firstDate = dates.value.find(d => d.startsWith(yearPrefix));
          selectedDate.value = firstDate || currentDate;
        } else if (view === 'month') {
          const monthPrefix = currentDate.substring(0, 7);
          const firstDate = dates.value.find(d => d.startsWith(monthPrefix));
          selectedDate.value = firstDate || currentDate;
        }
        setTimeout(loadConsensusData, 50);
      }

      function navigateDate(direction) {
        hapticFeedback('light');
        const current = selectedDate.value;
        const allDates = dates.value;
        const idx = allDates.indexOf(current);

        if (idx < 0) return;

        // 统一按交易日步长移动
        let step = 1;  // 日视图
        if (currentView.value === 'week') step = 5;   // 一周约5个交易日
        if (currentView.value === 'month') step = 22; // 一月约22个交易日
        if (currentView.value === 'year') step = 250; // 一年约250个交易日

        const newIdx = idx + direction * step;
        if (newIdx >= 0 && newIdx < allDates.length) {
          const newDate = allDates[newIdx];
          // 月/年视图需要对齐到同月/年首个交易日（而非 -01/-01-01 硬编码）
          if (currentView.value === 'month') {
            const monthPrefix = newDate.substring(0, 7);
            const firstDate = allDates.find(d => d.startsWith(monthPrefix));
            selectedDate.value = firstDate || newDate;
          } else if (currentView.value === 'year') {
            const yearPrefix = newDate.substring(0, 4);
            const firstDate = allDates.find(d => d.startsWith(yearPrefix));
            selectedDate.value = firstDate || newDate;
          } else {
            selectedDate.value = newDate;
          }
          loadConsensusData();
        }
      }

      function disabledDate(time) {
        // 禁用非交易日
        if (!dates.value || dates.value.length === 0) return false;
        const year = time.getFullYear();
        const month = String(time.getMonth() + 1).padStart(2, '0');
        const day = String(time.getDate()).padStart(2, '0');
        const dateStr = `${year}-${month}-${day}`;
        return !dates.value.includes(dateStr);
      }

      function onDateChange(val) {
        // 周/月/年选择器可能返回特殊格式，确保是YYYY-MM-DD
        if (val && val.length > 10) {
          // 周选择器可能返回额外信息
          selectedDate.value = val.substring(0, 10);
        }
        loadConsensusData();
      }

      return {
        viewUnit, datePickerType, dateFormat, canNavPrev, canNavNext,
        switchView, navigateDate, disabledDate, onDateChange,
      };
    },
  };
})();
