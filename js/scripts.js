var $win = $(window);
var width = $win.width();

// initial state of the window
$('.navigation-row').attr('style', 'display: none;');
if (width > 680) {
  $('#header-text').css('top', '180px');
  $('.header-row').css('height', '1080px');
} else {
  $('#header-text').css('top', '60px');
  $('.header-row').css('height', $win.height() + 'px');
}

$(document).ready(function() {
  var resizeTimer = null;
  $win.resize(function() {
    if (resizeTimer) {
      clearTimeout(resizeTimer);   // clear any previous pending timer
    }
    resizeTimer = setTimeout(checkWidth(), 500);   // set new timer
  });
  
  var scrollTimer = null;
  $win.scroll(function() {
    if (scrollTimer) {
      clearTimeout(scrollTimer);   // clear any previous pending timer
    }
    if (checkWidth()) {
      scrollTimer = setTimeout(slowScroll($('#header-text')), 500);   // set new timer
    }
  });
});

function checkWidth() {
  width = $win.width();
  if (width > 680) {
    $('#header-text').css('top', '180px');
    $('.header-row').css('height', '1080px');
    return true;
  } else {
    $('#header-text').css('top', '60px');
    $('.header-row').css('height', $win.height() + 'px');
    return false;
  }
};

function slowScroll($elem) {
  var startOffset = 180;
  var scrollDistance = 1080;

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
