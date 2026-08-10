// quant-calendar: 状态面板核心元数据 (v3.11 / FR-3.11.5)
// 统一四态（空/加载/错误/离线）的图标、标题、说明、能力标记。
// 纯数据 + 纯函数，node 可 require 单测（tests/test_state_panel.py TC-11.8）。
// 浏览器: window.QuantStatePanel   /   Node: module.exports
(function () {
  const VARIANTS = {
    empty: {
      icon: '📭',
      title: '暂无数据',
      desc: '当前没有可展示的内容',
      tone: 'neutral',
      retry: false,
      skeleton: false,
    },
    loading: {
      icon: '',
      title: '加载中',
      desc: '',
      tone: 'neutral',
      retry: false,
      skeleton: true,
    },
    error: {
      icon: '⚠️',
      title: '加载失败',
      desc: '数据获取出错，请稍后重试',
      tone: 'danger',
      retry: true,
      skeleton: false,
    },
    offline: {
      icon: '📡',
      title: '网络不可用',
      desc: '请检查网络连接后重试',
      tone: 'danger',
      retry: true,
      skeleton: false,
    },
  };
  const KEYS = Object.keys(VARIANTS);

  // 按类型取元数据；未知类型回退 empty，保证四态一致不裸奔
  function resolve(type) {
    return VARIANTS[type] || VARIANTS.empty;
  }

  // 校验：四态齐全且各自关键字段非空（供单测 TC-11.8 断言）
  function validate() {
    const errors = [];
    for (const key of KEYS) {
      const v = VARIANTS[key];
      if (!v.title) errors.push(key + '.title');
      if (key !== 'loading' && !v.icon) errors.push(key + '.icon');
      if (typeof v.retry !== 'boolean') errors.push(key + '.retry');
      if (typeof v.skeleton !== 'boolean') errors.push(key + '.skeleton');
    }
    return { ok: errors.length === 0, errors };
  }

  const api = { VARIANTS, KEYS, resolve, validate };
  if (typeof window !== 'undefined') window.QuantStatePanel = api;
  if (typeof module !== 'undefined' && module.exports) module.exports = api;
})();
