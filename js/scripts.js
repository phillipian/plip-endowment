var $win = $(window);

$(document).ready(function() {
  $('.navigation-row').attr('style', 'display: none;');
});

function slowScroll($elem) {
  var startOffset = 180;
  var scrollDistance = $('.header-video').height(); // or 1080 - $elem.height();
  
  scrollTimer = null;
  var scrollTop = $win.scrollTop();
  if (scrollTop < scrollDistance) {
    // keeps the percentage of distance traveled consistent
    var topOffset = scrollTop + ((scrollTop + startOffset) / scrollDistance) * (scrollDistance - scrollTop - startOffset);
    $elem.css('top', topOffset + 'px');
  }
  
  if (scrollTop < $('.header-video').height())
    $('.navigation-row').attr('style', 'display: none;');
  else
    $('.navigation-row').removeAttr('style');
};

var scrollTimer = null;
$(window).scroll(function() {
  if (scrollTimer) {
    clearTimeout(scrollTimer);   // clear any previous pending timer
  }
  scrollTimer = setTimeout(slowScroll($('#header-text')), 500);   // set new timer
});