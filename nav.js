/* The phone menu: below 768px the section links sit behind one button. */
(function () {
  var btn = document.getElementById('nav-menu-btn');
  var menu = document.getElementById('nav-menu');
  if (!btn || !menu) return;
  btn.addEventListener('click', function () {
    var open = menu.classList.toggle('open');
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
  menu.addEventListener('click', function (e) {
    if (e.target.closest('a')) {
      menu.classList.remove('open');
      btn.setAttribute('aria-expanded', 'false');
    }
  });
})();

/* A backstop for the scroll fade-ins: at the bottom of the page, show whatever
   has not been revealed yet (a short last section can sit below the trigger). */
(function () {
  function revealAll() {
    document.querySelectorAll('.scroll-animate:not(.reveal), .feature-card:not(.reveal)').forEach(function (el) {
      el.classList.add('reveal');
    });
  }
  window.addEventListener('scroll', function () {
    if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 80) revealAll();
  }, { passive: true });
  // No IntersectionObserver at all (very old browsers): show everything.
  if (!('IntersectionObserver' in window)) revealAll();
})();
