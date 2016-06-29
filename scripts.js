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

  $('#menu').click(function(){
    $('.home').toggle('slide', {direction : 'right'}, 300);
    $('.about').toggle('slide', {direction : 'right'}, 500);
    $('.work').toggle('slide', {direction : 'right'}, 700);
    $('.contact').toggle('slide', {direction : 'right'}, 900);
    $('.resume').toggle('slide', {direction : 'right'}, 1100);
    $('.fa-minus-square-o.menuicon, .fa-plus-square-o.menuicon').toggle();
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
