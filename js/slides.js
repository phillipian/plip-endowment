$(function() {
  $('#slides').slidesjs({
    width: 940,
    height: 600,
    navigation: {
      active: false,
      effect: "slide"
    },
    pagination: {
      effect: "slide"
    },
    effect: {
      slide: {
        speed: 400
      }
    }
  });
});