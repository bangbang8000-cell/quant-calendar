// quant-calendar: 用户个性化偏好模块 (v3.17.10 / FR-3.17.10)
// 偏好键：default_view(默认视图) / theme(亮/暗/跟随系统) / chart_period(图表周期) / language(界面语言)
// 存储策略：
//   - 登录用户: 后端 /api/user/preferences（重启保持）
//   - 游客/后端不可达: localStorage 降级（quant_preferences）
// 主题应用仍走 themes.js applyTheme 唯一权威（本模块仅决定解析后的具体主题名）。
// 纯逻辑模块，UMD 导出：浏览器 window.__quantModules.preferences / Node require(...)。
(function (root, factory) {
  if (typeof module === 'object' && module.exports) {
    module.exports = factory();
  } else {
    root.QuantPreferences = factory();
  }
})(typeof self !== 'undefined' ? self : this, function () {
  'use strict';

  const PREFERENCES_KEY = 'quant_preferences';

  const PREFERENCE_DEFAULTS = {
    default_view: 'strategies',
    theme: 'system',
    chart_period: 'daily',
    language: 'zh-CN',
    info_density: 'comfortable',
  };

  const PREFERENCE_KEYS = ['default_view', 'theme', 'chart_period', 'language', 'info_density'];

  const PREFERENCE_VALUES = {
    default_view: ['strategies', 'calendar', 'ai', 'research', 'system'],
    theme: ['light', 'dark', 'system'],
    chart_period: ['daily', 'weekly', 'monthly'],
    language: ['zh-CN', 'en', 'ja', 'ko', 'zh-TW'],
    info_density: ['comfortable', 'compact'],
  };

  // 主题模式 → 具体主题名（仍经 themes.applyTheme 应用，不另起实现）
  // system: 跟随系统 prefers-color-scheme
  const THEME_MODE_TO_THEME = {
    light: 'classic-white',
    dark: 'dark-pro',
  };

  function _readLocal() {
    if (typeof localStorage === 'undefined') return {};
    try {
      const raw = localStorage.getItem(PREFERENCES_KEY);
      if (!raw) return {};
      const parsed = JSON.parse(raw);
      return parsed && typeof parsed === 'object' ? parsed : {};
    } catch (e) {
      return {};
    }
  }

  function _writeLocal(prefs) {
    if (typeof localStorage === 'undefined') return;
    try {
      localStorage.setItem(PREFERENCES_KEY, JSON.stringify(prefs));
    } catch (e) { /* 存储不可用则静默降级 */ }
  }

  function _isLoggedIn() {
    if (typeof localStorage === 'undefined') return false;
    return !!localStorage.getItem('quant_token');
  }

  // 合并默认值 + 本地，得到完整偏好对象
  function getLocal() {
    const merged = Object.assign({}, PREFERENCE_DEFAULTS, _readLocal());
    const out = {};
    PREFERENCE_KEYS.forEach(function (k) {
      const v = merged[k];
      out[k] = (PREFERENCE_VALUES[k].indexOf(v) !== -1) ? v : PREFERENCE_DEFAULTS[k];
    });
    return out;
  }

  function getPreference(key) {
    if (PREFERENCE_KEYS.indexOf(key) === -1) return undefined;
    return getLocal()[key];
  }

  function isValidValue(key, value) {
    return PREFERENCE_KEYS.indexOf(key) !== -1
      && PREFERENCE_VALUES[key].indexOf(value) !== -1;
  }

  // 设置偏好（同步写 localStorage + 异步写后端（登录态））；非法键/值返回 false
  function setPreference(key, value) {
    if (!isValidValue(key, value)) return false;
    const local = _readLocal();
    local[key] = value;
    _writeLocal(local);
    if (_isLoggedIn()) {
      saveToBackend({ [key]: value });
    }
    return true;
  }

  function setPreferences(prefs) {
    if (!prefs || typeof prefs !== 'object') return false;
    const filtered = {};
    Object.keys(prefs).forEach(function (k) {
      if (isValidValue(k, prefs[k])) filtered[k] = prefs[k];
    });
    if (!Object.keys(filtered).length) return false;
    const local = Object.assign({}, _readLocal(), filtered);
    _writeLocal(local);
    if (_isLoggedIn()) {
      saveToBackend(filtered);
    }
    return true;
  }

  function saveToBackend(prefs) {
    if (typeof fetch === 'undefined') return;
    try {
      fetch('/api/user/preferences', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ preferences: prefs }),
      }).catch(function () { /* 后端不可达：localStorage 已兜底 */ });
    } catch (e) { /* 忽略 */ }
  }

  // 启动时读取：合并本地 + 后端（登录态）；返回完整偏好对象
  async function loadPreferences() {
    const merged = getLocal();
    if (!_isLoggedIn()) return merged;
    if (typeof fetch === 'undefined') return merged;
    try {
      const res = await fetch('/api/user/preferences');
      if (res.ok) {
        const data = await res.json();
        if (data.success && data.preferences) {
          const server = data.preferences;
          PREFERENCE_KEYS.forEach(function (k) {
            if (PREFERENCE_VALUES[k].indexOf(server[k]) !== -1) merged[k] = server[k];
          });
          _writeLocal(merged);
        }
      }
    } catch (e) { /* 后端不可达：用本地偏好 */ }
    return merged;
  }

  // V5.6 (T-5.6.4): 信息密度应用到根元素 (data-density 属性, CSS 令牌联动)
  function applyDensity(density) {
    const d = density || getPreference('info_density') || 'comfortable';
    const v = PREFERENCE_VALUES.info_density.indexOf(d) !== -1 ? d : 'comfortable';
    if (typeof document === 'undefined') return v;
    document.documentElement.setAttribute('data-density', v);
    return v;
  }

  // 主题模式 → 具体主题名（system 跟随系统；亮/暗映射到既有主题）
  function resolveTheme(mode) {
    const m = mode || getPreference('theme') || 'system';
    if (m === 'system') {
      let dark = false;
      if (typeof window !== 'undefined' && window.matchMedia) {
        dark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      }
      return dark ? THEME_MODE_TO_THEME.dark : THEME_MODE_TO_THEME.light;
    }
    return THEME_MODE_TO_THEME[m] || THEME_MODE_TO_THEME.light;
  }

  const api = {
    PREFERENCES_KEY: PREFERENCES_KEY,
    PREFERENCE_DEFAULTS: PREFERENCE_DEFAULTS,
    PREFERENCE_KEYS: PREFERENCE_KEYS,
    PREFERENCE_VALUES: PREFERENCE_VALUES,
    THEME_MODE_TO_THEME: THEME_MODE_TO_THEME,
    getLocal: getLocal,
    getPreference: getPreference,
    isValidValue: isValidValue,
    setPreference: setPreference,
    setPreferences: setPreferences,
    saveToBackend: saveToBackend,
    loadPreferences: loadPreferences,
    resolveTheme: resolveTheme,
    applyDensity: applyDensity,
  };

  if (typeof window !== 'undefined') {
    if (!window.__quantModules) window.__quantModules = {};
    window.__quantModules.preferences = api;
  }

  return api;
});
