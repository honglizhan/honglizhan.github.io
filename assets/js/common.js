function toggleMoreAuthors(element, hideText, showText) {
  var $el = $(element);
  $el.attr('title', '');
  var targetText = $el.text() === hideText ? showText : hideText;
  var cursorPosition = 0;
  var textAdder = setInterval(function() {
    $el.text(targetText.substring(0, cursorPosition + 1));
    if (++cursorPosition === targetText.length) {
      clearInterval(textAdder);
    }
  }, 15);
}

function copyBibtex(button) {
  var bibtexBlock = $(button).closest('.col-sm-8').find('.bibtex.hidden');
  var text = bibtexBlock.find('pre').text().trim();
  navigator.clipboard.writeText(text).then(function() {
    var original = button.textContent;
    button.textContent = 'Copied!';
    setTimeout(function() { button.textContent = original; }, 1500);
  });
}

function initProfileCarousels() {
  document.querySelectorAll('[data-profile-carousel]').forEach(function(carousel) {
    var track = carousel.querySelector('.profile-carousel-track');
    var slides = carousel.querySelectorAll('.profile-carousel-image');
    var prev = carousel.querySelector('[data-carousel-prev]');
    var next = carousel.querySelector('[data-carousel-next]');
    var dots = carousel.querySelectorAll('[data-carousel-dot]');
    var scrollTimer = null;
    var currentIndex = 0;

    if (!track || slides.length < 2) {
      return;
    }

    function clampIndex(index) {
      return Math.max(0, Math.min(slides.length - 1, index));
    }

    function updateDots(index) {
      currentIndex = clampIndex(index);
      dots.forEach(function(dot, dotIndex) {
        var isActive = dotIndex === currentIndex;
        dot.classList.toggle('active', isActive);
        dot.setAttribute('aria-current', isActive ? 'true' : 'false');
      });
    }

    function goTo(index) {
      currentIndex = clampIndex(index);
      track.scrollTo({
        left: currentIndex * track.clientWidth,
        behavior: 'smooth'
      });
      updateDots(currentIndex);
    }

    prev.addEventListener('click', function() {
      goTo(currentIndex - 1);
    });

    next.addEventListener('click', function() {
      goTo(currentIndex + 1);
    });

    dots.forEach(function(dot) {
      dot.addEventListener('click', function() {
        goTo(parseInt(dot.getAttribute('data-carousel-dot'), 10));
      });
    });

    track.addEventListener('keydown', function(event) {
      if (event.key === 'ArrowLeft') {
        event.preventDefault();
        goTo(currentIndex - 1);
      }
      if (event.key === 'ArrowRight') {
        event.preventDefault();
        goTo(currentIndex + 1);
      }
    });

    track.addEventListener('scroll', function() {
      window.clearTimeout(scrollTimer);
      scrollTimer = window.setTimeout(function() {
        updateDots(Math.round(track.scrollLeft / track.clientWidth));
      }, 80);
    }, { passive: true });

    updateDots(0);
  });
}

$(document).ready(function() {
    $('a.abstract').click(function() {
        $(this).parent().parent().find(".abstract.hidden").toggleClass('open');
    });
    $('a.bibtex').click(function() {
        $(this).parent().parent().find(".bibtex.hidden").toggleClass('open');
    });
    $('.navbar-nav').find('a').removeClass('waves-effect waves-light');
    initProfileCarousels();
});
