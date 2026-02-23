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

$(document).ready(function() {
    $('a.abstract').click(function() {
        $(this).parent().parent().find(".abstract.hidden").toggleClass('open');
    });
    $('a.bibtex').click(function() {
        $(this).parent().parent().find(".bibtex.hidden").toggleClass('open');
    });
    $('.navbar-nav').find('a').removeClass('waves-effect waves-light');
});
