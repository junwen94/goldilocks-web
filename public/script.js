document.addEventListener('click', function (e) {
  var opener = e.target.closest('[data-about-open]');
  if (opener) {
    e.preventDefault();
    var overlay = document.getElementById('about-overlay');
    if (overlay) overlay.classList.add('open');
    return;
  }

  var closer = e.target.closest('[data-about-close]');
  if (closer) {
    e.preventDefault();
    closer.closest('.about-overlay').classList.remove('open');
    return;
  }

  if (e.target.classList.contains('about-overlay')) {
    e.target.classList.remove('open');
  }
});

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') {
    document.querySelectorAll('.about-overlay.open').forEach(function (el) {
      el.classList.remove('open');
    });
  }
});
