// quant-calendar: calendar module
// 此文件用于新功能开发。现有逻辑在 index.html 的 setup() 中。
// 添加新功能时写入此文件，通过 window.__quantModules 注册。
(function() {
  const { ref, computed, watch, onMounted, nextTick } = Vue;
  if (!window.__quantModules) window.__quantModules = {};
  window.__quantModules.calendar = {
    init() { return {}; }
  };
})();
