// quant-calendar: icons module v3.0
(function() {
  const { ref } = Vue;

  const ICON_MAPS = {
    emoji:  { strategies:'📈', calendar:'🗓️', ai:'🤖', research:'🔬', system:'⚙️' },
    ink:    { strategies:'策', calendar:'历', ai:'智', research:'研', system:'设' },
    edge:   {
      strategies:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="4" y1="20" x2="4" y2="12"/><line x1="10" y1="20" x2="10" y2="7"/><line x1="16" y1="20" x2="16" y2="3"/></svg>',
      calendar: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>',
      ai:       '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>',
      research: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12,2 20,7 20,17 12,22 4,17 4,7"/><line x1="12" y1="12" x2="12" y2="22"/><line x1="8" y1="14" x2="16" y2="14"/></svg>',
      system:   '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="3"/><line x1="12" y1="1" x2="12" y2="4"/><line x1="12" y1="20" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="6.34" y2="6.34"/><line x1="17.66" y1="17.66" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="4" y2="12"/><line x1="20" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="6.34" y2="17.66"/><line x1="17.66" y1="6.34" x2="19.78" y2="4.22"/></svg>',
    },
    crystal: {
      strategies:'<svg viewBox="0 0 24 24"><rect x="2" y="4" width="8" height="16" rx="1" fill="currentColor" opacity=".3"/><rect x="10" y="8" width="8" height="12" rx="1" fill="currentColor" opacity=".6"/><rect x="14" y="2" width="8" height="18" rx="1" fill="currentColor"/></svg>',
      calendar: '<svg viewBox="0 0 24 24"><rect x="2" y="3" width="20" height="19" rx="3" fill="currentColor" opacity=".15"/><rect x="2" y="3" width="20" height="7" rx="3" fill="currentColor"/><rect x="6" y="13" width="4" height="4" rx="1" fill="currentColor" opacity=".5"/><rect x="14" y="13" width="4" height="4" rx="1" fill="currentColor" opacity=".5"/></svg>',
      ai:       '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="11" fill="currentColor" opacity=".12"/><circle cx="12" cy="12" r="4" fill="currentColor"/><line x1="12" y1="2" x2="12" y2="7" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><line x1="12" y1="17" x2="12" y2="22" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><line x1="2" y1="12" x2="7" y2="12" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><line x1="17" y1="12" x2="22" y2="12" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>',
      research: '<svg viewBox="0 0 24 24"><polygon points="12,1 21,7 21,17 12,23 3,17 3,7" fill="currentColor" opacity=".15" stroke="currentColor" stroke-width="1.5"/><circle cx="12" cy="12" r="5" fill="currentColor"/></svg>',
      system:   '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" fill="currentColor" opacity=".1"/><circle cx="12" cy="12" r="4" fill="currentColor" opacity=".1" stroke="currentColor" stroke-width="2"/><circle cx="12" cy="12" r="1.5" fill="currentColor"/></svg>',
    },
  };

  const iconSystem = ref(localStorage.getItem('icon_system') || 'emoji');
  function switchIconSystem(name) {
    iconSystem.value = name;
    localStorage.setItem('icon_system', name);
  }

  if (!window.__quantModules) window.__quantModules = {};
  window.__quantModules.icons = {
    ICON_MAPS,
    iconSystem,
    switchIconSystem,
    init() {
      return { ICON_MAPS, iconSystem, switchIconSystem };
    }
  };
})();