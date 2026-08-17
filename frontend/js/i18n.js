// quant-calendar: i18n 国际化骨架 (v3.17.10 / FR-3.17.10, 供 FR-3.17.3 使用)
// 本任务仅保证模块存在与可切换接口（t(key) + 语言包占位 zh-CN/en，默认 zh-CN），
// 不抽取现有文案。后续国际化改造时向 messages 语言包补充条目并替换硬编码文案。
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
  const SUPPORTED_LOCALES = ['zh-CN', 'en'];

  // 语言包占位：3.17.10 不抽文案，保持空包；3.17.3 起逐条填充
  const messages = {
    'zh-CN': {},
    'en': {},
  };

  let _locale = DEFAULT_LOCALE;

  function setLocale(locale) {
    const l = SUPPORTED_LOCALES.indexOf(locale) !== -1 ? locale : DEFAULT_LOCALE;
    _locale = l;
    if (typeof document !== 'undefined') {
      document.documentElement.setAttribute('lang', l);
    }
    return _locale;
  }

  function getLocale() {
    return _locale;
  }

  // t(key, params)：取当前语言包条目；缺失回落英文/键本身；支持 {name} 占位替换
  function t(key, params) {
    const table = messages[_locale] || {};
    let text = (key in table) ? table[key] : null;
    if (text == null && _locale !== 'en') {
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
    setLocale: setLocale,
    getLocale: getLocale,
    t: t,
  };

  if (typeof window !== 'undefined') {
    if (!window.__quantModules) window.__quantModules = {};
    window.__quantModules.i18n = api;
  }

  return api;
});
