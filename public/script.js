document.addEventListener('click', function (e) {
  var opener = e.target.closest('[data-overlay-open]');
  if (opener) {
    e.preventDefault();
    var overlay = document.getElementById(opener.getAttribute('data-overlay-open'));
    if (overlay) overlay.classList.add('open');
    return;
  }

  var closer = e.target.closest('[data-overlay-close]');
  if (closer) {
    e.preventDefault();
    closer.closest('.about-overlay').classList.remove('open');
    return;
  }

  if (e.target.classList.contains('about-overlay')) {
    e.target.classList.remove('open');
    return;
  }

  var navToggle = e.target.closest('[data-nav-toggle]');
  if (navToggle) {
    var panel = navToggle.parentElement.querySelector('[data-nav-panel]');
    var isOpen = navToggle.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
    if (panel) panel.classList.toggle('open', isOpen);
    return;
  }

  var mobileTrigger = e.target.closest('[data-nav-item-trigger]');
  if (mobileTrigger && window.matchMedia('(max-width: 900px)').matches) {
    e.preventDefault();
    var navItem = mobileTrigger.closest('.nav-item');
    var wasOpen = navItem.classList.contains('open');
    document.querySelectorAll('.nav-item.open').forEach(function (el) { el.classList.remove('open'); });
    if (!wasOpen) navItem.classList.add('open');
    return;
  }

  var navLink = e.target.closest('[data-nav-panel] a');
  if (navLink) {
    var openToggle = document.querySelector('[data-nav-toggle].open');
    if (openToggle) {
      openToggle.classList.remove('open');
      openToggle.setAttribute('aria-expanded', 'false');
      var openPanel = openToggle.parentElement.querySelector('[data-nav-panel]');
      if (openPanel) openPanel.classList.remove('open');
    }
  }
});

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') {
    document.querySelectorAll('.about-overlay.open').forEach(function (el) {
      el.classList.remove('open');
    });
    document.querySelectorAll('[data-nav-toggle].open').forEach(function (toggle) {
      toggle.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
      var panel = toggle.parentElement.querySelector('[data-nav-panel]');
      if (panel) panel.classList.remove('open');
    });
  }
});
