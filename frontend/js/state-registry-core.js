// quant-calendar: state-registry-core 6.1.7 (T-6.1.7.2) — 前端 state 域注册表 (纯逻辑, node 可测)
// 目的: qcState 扁平对象(437键护栏)按域声明(theme/auth/prefs/ui/page), 提供域化访问与快照对拍,
//       同时保持 qcState 扁平兼容入口不变 (state 拆分不改变既有组件行为)
// API: createStateRegistry() → { defineDomain, attach, has, get, snapshot, restore, domains, keys, attachedCount }
// 约束: 域名唯一; 键跨域唯一(防偶发覆盖); attach 须在 defineDomain 后; ref 为 { value } 响应式壳(Vue ref 兼容)
(function (root, factory) {
  if (typeof module === 'object' && module.exports) {
    module.exports = factory();
  } else {
    root.QuantStateRegistry = factory();
  }
})(typeof self !== 'undefined' ? self : this, function () {
  'use strict';

  function createStateRegistry() {
    var domains = Object.create(null);   // name -> { keys: [], refs: {} }
    var keyOwner = Object.create(null);  // key -> domain (跨域唯一校验)

    function defineDomain(name, keys) {
      if (!name || typeof name !== 'string') throw new Error('domain name required');
      if (domains[name]) throw new Error('duplicate domain: ' + name);
      var list = Array.isArray(keys) ? keys : [];
      for (var i = 0; i < list.length; i++) {
        var k = list[i];
        if (keyOwner[k] && keyOwner[k] !== name) {
          throw new Error('duplicate key across domains: ' + k);
        }
        keyOwner[k] = name;
      }
      domains[name] = { keys: list.slice(), refs: Object.create(null) };
      return true;
    }

    function attach(domain, key, ref) {
      var d = domains[domain];
      if (!d) throw new Error('unknown domain: ' + domain);
      if (d.keys.indexOf(key) === -1) throw new Error('key not declared in domain: ' + domain + '.' + key);
      d.refs[key] = ref;
      return true;
    }

    function has(domain, key) {
      var d = domains[domain];
      return !!d && key in d.refs;
    }

    function get(domain, key) {
      var d = domains[domain];
      if (!d) return undefined;
      var ref = d.refs[key];
      return (ref && typeof ref === 'object' && 'value' in ref) ? ref.value : ref;
    }

    function snapshot(domain) {
      var d = domains[domain];
      if (!d) return null;
      var out = {};
      for (var i = 0; i < d.keys.length; i++) {
        var k = d.keys[i];
        var ref = d.refs[k];
        out[k] = (ref && typeof ref === 'object' && 'value' in ref) ? ref.value : ref;
      }
      return out;
    }

    function restore(domain, snap) {
      var d = domains[domain];
      if (!d || !snap) return false;
      for (var i = 0; i < d.keys.length; i++) {
        var k = d.keys[i];
        if (!(k in snap)) continue;
        var ref = d.refs[k];
        if (ref && typeof ref === 'object' && 'value' in ref) ref.value = snap[k];
      }
      return true;
    }

    function domainsList() {
      return Object.keys(domains);
    }

    function keysOf(domain) {
      var d = domains[domain];
      return d ? d.keys.slice() : [];
    }

    function attachedCount() {
      var n = 0;
      var names = Object.keys(domains);
      for (var i = 0; i < names.length; i++) n += Object.keys(domains[names[i]].refs).length;
      return n;
    }

    return {
      defineDomain: defineDomain,
      attach: attach,
      has: has,
      get: get,
      snapshot: snapshot,
      restore: restore,
      domains: domainsList,
      keys: keysOf,
      attachedCount: attachedCount,
    };
  }

  return { createStateRegistry: createStateRegistry };
});
