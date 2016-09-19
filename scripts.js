$(document).ready(function() {

  $(function() {
    $('a[href*="#"]:not([href="#"])').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: target.offset().top
          }, 1000);
          return false;
        }
      }
    });
  });

  $('nav ul').hide()
  $('#menu').click(function(){
    $('ul').toggle('slide', {direction : 'up'}, 500);
  })

  $('.images img, .viewmore').click(function() {
    $('.viewmore').hide()
    $('.overlay, .appx').show()
    $(this).siblings('.appinfo').show()
    $('.project').css('position', 'inherit')
  })

  $('.overlay, .appx').click(function() {
    $('.viewmore').show()
    $(this).hide()
    $('.overlay, .appinfo').hide()
    $('.project').css('position', 'relative')
  })

  $('.images img').mouseenter(function () {
    $(this).siblings('.viewmore').css('font-size','1.5em')
  })

  $('.images img').mouseout(function () {
    $(this).siblings('.viewmore').css('font-size','1em')
  })

})
