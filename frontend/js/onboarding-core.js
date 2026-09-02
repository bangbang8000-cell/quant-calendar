// quant-calendar: Onboarding core logic (V5.6 / T-5.6.1)
// 新手引导 5 步任务流: 纯逻辑状态机 + 进度持久化 (序列化/反序列化)。
// UMD 导出: 浏览器 window.QuantOnboarding / Node require(...) (供 pytest 跑 node 单测)。
// 不含 DOM/Vue 依赖; Vue 组件做薄壳渲染。
// V5.9.1-fix: UMD 双写 — Node require 走 module.exports; 浏览器无条件挂全局.
// 原 if/else 在 Vite/Rollup 构建后 module 被模拟为对象 → 只走 exports 分支,
// window.QuantOnboarding 未设置 → onboarding 组件 setup 抛 TypeError(createOnboardingState).
// 现无条件 root.QuantOnboarding = api, 构建/源码两模式均生效; factory 仅调用一次, 无副作用.
(function (root, factory) {
  var api = factory();
  if (typeof module === 'object' && module.exports) {
    module.exports = api;
  }
  root.QuantOnboarding = api;
})((typeof globalThis !== 'undefined' ? globalThis : (typeof window !== 'undefined' ? window : (typeof self !== 'undefined' ? self : this))), function () {
  'use strict';

  // ─── 5 步引导任务定义 ─────────────────────────────────
  // target: 步骤指向的页面/动作 (由组件用于跳转或高亮)
  var ONBOARDING_STEPS = [
    { key: 'welcome', title: '欢迎使用量化日历', target: '' },
    { key: 'pool', title: '认识今日股票池', target: 'strategies' },
    { key: 'calendar', title: '日历视图', target: 'calendar' },
    { key: 'ai', title: 'AI 评估', target: 'ai' },
    { key: 'finish', title: '完成', target: 'research' },
  ];
  var STEP_COUNT = ONBOARDING_STEPS.length;

  function createOnboardingState() {
    return { stepIndex: 0, completed: false, dismissed: false, updatedAt: 0 };
  }

  function steps() {
    return ONBOARDING_STEPS.slice();
  }

  function stepCount() {
    return STEP_COUNT;
  }

  function _clamp(idx) {
    if (idx < 0) return 0;
    if (idx >= STEP_COUNT) return STEP_COUNT - 1;
    return idx;
  }

  function _copy(s) {
    return { stepIndex: s.stepIndex, completed: !!s.completed,
             dismissed: !!s.dismissed, updatedAt: s.updatedAt || 0 };
  }

  // 不可变式: 返回新 state, 不改入参
  function next(state) {
    return _copy(Object.assign({}, state, {
      stepIndex: _clamp((state.stepIndex || 0) + 1),
      updatedAt: Date.now(),
    }));
  }

  function prev(state) {
    return _copy(Object.assign({}, state, {
      stepIndex: _clamp((state.stepIndex || 0) - 1),
      updatedAt: Date.now(),
    }));
  }

  function jumpTo(state, index) {
    return _copy(Object.assign({}, state, {
      stepIndex: _clamp(index),
      updatedAt: Date.now(),
    }));
  }

  function complete(state) {
    return _copy(Object.assign({}, state, { completed: true, updatedAt: Date.now() }));
  }

  function dismiss(state) {
    return _copy(Object.assign({}, state, { dismissed: true, updatedAt: Date.now() }));
  }

  function isComplete(state) {
    return !!(state && state.completed);
  }

  // 进度: 已完成步数 = stepIndex (0-based), 总 5 步
  function progress(state) {
    var done = Math.min((state && state.stepIndex) || 0, STEP_COUNT);
    return { done: done, total: STEP_COUNT, pct: Math.round(done / STEP_COUNT * 100) };
  }

  // ─── 持久化 (进度跨会话/跨设备) ──────────────────────
  function persistState(state) {
    var s = state || createOnboardingState();
    return JSON.stringify({
      stepIndex: s.stepIndex, completed: !!s.completed,
      dismissed: !!s.dismissed, updatedAt: s.updatedAt || 0,
    });
  }

  function parseState(json) {
    var initial = createOnboardingState();
    if (!json || typeof json !== 'string') return initial;
    try {
      var obj = JSON.parse(json);
      if (!obj || typeof obj !== 'object') return initial;
      var idx = parseInt(obj.stepIndex, 10);
      if (isNaN(idx)) return initial;
      return {
        stepIndex: _clamp(idx),
        completed: !!obj.completed,
        dismissed: !!obj.dismissed,
        updatedAt: obj.updatedAt || 0,
      };
    } catch (e) {
      return initial;
    }
  }

  return {
    ONBOARDING_STEPS: ONBOARDING_STEPS,
    steps: steps,
    stepCount: stepCount,
    createOnboardingState: createOnboardingState,
    next: next,
    prev: prev,
    jumpTo: jumpTo,
    complete: complete,
    dismiss: dismiss,
    isComplete: isComplete,
    progress: progress,
    persistState: persistState,
    parseState: parseState,
  };
});
