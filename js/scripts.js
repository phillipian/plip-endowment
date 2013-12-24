var $win = $(window);
var width = $win.width();
var $nav-row = $('#navigation-row');
var $head-text = $('#header-text');
var $head-row = $('#header-row');

// initial state of the window
$nav-row.attr('style', 'display: none;');
if (width > 680) {
  $head-text.css('top', '180px');
  $head-row.css('height', '1080px');
} else {
  $head-text.css('top', '60px');
  $head-row.css('height', $win.height() + 'px');
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
      scrollTimer = setTimeout(slowScroll($head-text), 500);   // set new timer
    }
    
    // regardless of width of screen, decide whether to display $('.navigation-row')
    if ($win.scrollTop() < $('.header-row').height())
      $nav-row.attr('style', 'display: none;');
    else
      $nav-row.removeAttr('style');
  });
});

function checkWidth() {
  width = $win.width();
  if (width > 680) {
    $head-text.css('top', '180px');
    $head-row.css('height', '1080px');
    return true;
  } else {
    $head-text.css('top', '60px');
    $head-row.css('height', $win.height() + 'px');
    return false;
  }
};

function slowScroll($elem) {
  var startOffset = 180;
  var scrollDistance = 1080;
  
  scrollTop = $win.scrollTop();
  scrollTimer = null;
  if ($win.scrollTop() < scrollDistance) {
    // keeps the percentage of distance traveled consistent
    var topOffset = scrollTop + ((scrollTop + startOffset) / scrollDistance) * (scrollDistance - scrollTop - startOffset);
    $elem.css('top', topOffset + 'px');
  }
};
