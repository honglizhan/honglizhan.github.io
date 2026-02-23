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

  // Scroll progress bar + back-to-top button
  var progressBar = document.getElementById('scroll-progress');
  var backToTop = document.getElementById('back-to-top');
  if (progressBar || backToTop) {
    window.addEventListener('scroll', function () {
      var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      var docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      if (progressBar) {
        var progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
        progressBar.style.width = progress + '%';
      }
      if (backToTop) {
        if (scrollTop > 400) {
          backToTop.classList.add('visible');
        } else {
          backToTop.classList.remove('visible');
        }
      }
    }, { passive: true });
  }

  if (backToTop) {
    backToTop.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // Click-to-copy email
  var copyEmail = document.getElementById('copy-email');
  if (copyEmail) {
    copyEmail.addEventListener('click', function () {
      var email = copyEmail.getAttribute('data-email');
      navigator.clipboard.writeText(email).then(function () {
        copyEmail.classList.add('copied');
        setTimeout(function () { copyEmail.classList.remove('copied'); }, 1500);
      });
    });
  }
})();
