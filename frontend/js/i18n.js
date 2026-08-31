// quant-calendar: i18n 国际化模块 (FR-3.17.3 / FR-3.17.14)
// 语言包分离在 js/locales/zh-CN.js 与 js/locales/en.js（零构建原生 JS 对象），
// 经 registerLocale(name, table) 装配进本模块；index.html 在 i18n.js 后按序加载。
// 核心界面文案经 t(key, params) 渲染；占位符 {name} 由 params 替换。
// 响应式：app-logic 注入 Vue ref（bindLocale），t() 读取 ref.value →
// 模板渲染 effect 自动收集依赖，locale 变化即整页重渲染（无需手动刷新）。
// 纯逻辑模块，UMD 导出：浏览器 window.__quantModules.i18n / Node require(...)。
(function (root, factory) {
  if (typeof module === 'object' && module.exports) {
    module.exports = factory();
  } else {
    root.QuantI18n = factory();
  }
})(typeof self !== 'undefined' ? self : this, function () {
  'use strict';

  const DEFAULT_LOCALE = 'zh-CN';
  const SUPPORTED_LOCALES = ['zh-CN', 'en', 'ja', 'ko', 'zh-TW'];

  // 语言包注册表：外部 locales/*.js 经 registerLocale 填充
  const messages = {};

  let _locale = DEFAULT_LOCALE;
  // 响应式 locale ref（由 app-logic 经 bindLocale 注入；t() 读取其 .value 以获得 Vue 依赖收集）
  let _localeRef = null;

  function _currentLocale() {
    if (_localeRef && typeof _localeRef === 'object' && 'value' in _localeRef) {
      return _localeRef.value || DEFAULT_LOCALE;
    }
    return _locale;
  }

  // 注册/覆盖某语言的语言包表
  function registerLocale(name, table) {
    if (SUPPORTED_LOCALES.indexOf(name) === -1) return false;
    messages[name] = table && typeof table === 'object' ? table : {};
    return true;
  }

  function setLocale(locale) {
    const l = SUPPORTED_LOCALES.indexOf(locale) !== -1 ? locale : DEFAULT_LOCALE;
    _locale = l;
    if (_localeRef && typeof _localeRef === 'object' && 'value' in _localeRef) {
      _localeRef.value = l;
    }
    if (typeof document !== 'undefined') {
      document.documentElement.setAttribute('lang', l);
    }
    return _locale;
  }

  function getLocale() {
    return _currentLocale();
  }

  // 绑定响应式 locale ref：locale 变化 → 依赖 t() 的模板自动重渲染
  function bindLocale(ref) {
    if (ref && typeof ref === 'object' && 'value' in ref) {
      _localeRef = ref;
      const v = SUPPORTED_LOCALES.indexOf(ref.value) !== -1 ? ref.value : DEFAULT_LOCALE;
      ref.value = v;
      _locale = v;
    }
    return _locale;
  }

  // t(key, params)：取当前语言包条目；缺失回落英文/键本身；支持 {name} 占位替换
  function t(key, params) {
    const l = _currentLocale();
    const table = messages[l] || {};
    let text = (key in table) ? table[key] : null;
    if (text == null && l !== 'en') {
      const en = messages['en'] || {};
      text = (key in en) ? en[key] : null;
    }
    if (text == null) text = String(key);
    if (params && typeof params === 'object') {
      Object.keys(params).forEach(function (k) {
        text = text.replace(new RegExp('\\{' + k + '\\}', 'g'), String(params[k]));
      });
    }
    return text;
  }

  const api = {
    DEFAULT_LOCALE: DEFAULT_LOCALE,
    SUPPORTED_LOCALES: SUPPORTED_LOCALES,
    messages: messages,
    registerLocale: registerLocale,
    setLocale: setLocale,
    getLocale: getLocale,
    bindLocale: bindLocale,
    t: t,
  };

  if (typeof window !== 'undefined') {
    if (!window.__quantModules) window.__quantModules = {};
    window.__quantModules.i18n = api;
  }

  return api;
});
