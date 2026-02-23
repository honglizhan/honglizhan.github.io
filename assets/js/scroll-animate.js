// Scroll-triggered fade-in animations using Intersection Observer
(function () {
  // Animate-on-scroll elements (research cards, education, etc.)
  var elements = document.querySelectorAll('.animate-on-scroll');
  if (elements.length) {
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
      elements.forEach(function (el) {
        el.classList.add('is-visible');
      });
    }
  }

  // Staggered publication entry fade-ins
  var pubEntries = document.querySelectorAll('.publications ol.bibliography li');
  if (pubEntries.length) {
    if ('IntersectionObserver' in window) {
      var pubObserver = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            pubObserver.unobserve(entry.target);
          }
        });
      }, { threshold: 0.1 });

      pubEntries.forEach(function (el, i) {
        el.style.transitionDelay = (i * 0.08) + 's';
        pubObserver.observe(el);
      });
    } else {
      pubEntries.forEach(function (el) {
        el.classList.add('is-visible');
      });
    }
  }

  // Scroll progress bar
  var progressBar = document.getElementById('scroll-progress');
  if (progressBar) {
    window.addEventListener('scroll', function () {
      var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      var docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      var progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      progressBar.style.width = progress + '%';
    }, { passive: true });
  }
})();
