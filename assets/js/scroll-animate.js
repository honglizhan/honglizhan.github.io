// Scroll progress bar, back-to-top button, click-to-copy email
(function () {
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