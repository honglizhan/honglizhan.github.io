// Scroll-triggered fade-in animations using Intersection Observer
(function () {
  var elements = document.querySelectorAll('.animate-on-scroll');
  if (!elements.length) return;

  if ('IntersectionObserver' in window) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });

    elements.forEach(function (el) {
      observer.observe(el);
    });
  } else {
    // Fallback: show everything immediately
    elements.forEach(function (el) {
      el.classList.add('is-visible');
    });
  }
})();
