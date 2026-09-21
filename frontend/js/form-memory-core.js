// quant-calendar: form-memory-core 6.1.1 (A4) — 表单参数记忆 (localStorage, 按用户+表单+版本隔离)
// 语义: 仅保存「用户主动提交/确认」后的参数; 表单结构变更时 bump schemaVersion 使旧记忆自动失效
(function (root, factory) {
  if (typeof module === 'object' && module.exports) {
    module.exports = factory();
  } else {
    root.QuantFormMemory = factory();
  }
})(typeof self !== 'undefined' ? self : this, function () {
  'use strict';

  function _key(user, form, ver) {
    return 'qc_fm_' + (user || 'guest') + '_' + form + '_v' + (ver || 1);
  }

  function _storage() {
    if (typeof localStorage !== 'undefined' && localStorage) return localStorage;
    return null;
  }

  function saveForm(form, values, user, ver) {
    var s = _storage();
    if (!s || !form || values === undefined || values === null) return false;
    try {
      s.setItem(_key(user, form, ver), JSON.stringify(values));
      return true;
    } catch (e) { return false; }
  }

  function loadForm(form, user, ver) {
    var s = _storage();
    if (!s || !form) return null;
    try {
      var raw = s.getItem(_key(user, form, ver));
      return raw ? JSON.parse(raw) : null;
    } catch (e) { return null; }
  }

  function clearForm(form, user, ver) {
    var s = _storage();
    if (!s || !form) return;
    try { s.removeItem(_key(user, form, ver)); } catch (e) { /* 忽略 */ }
  }

  return { saveForm: saveForm, loadForm: loadForm, clearForm: clearForm };
});
