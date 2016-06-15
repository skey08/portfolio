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
    $('.fa-minus-square-o.menuicon').toggle();
    $('.fa-plus-square-o.menuicon').toggle();
  })

  $('.images img, .viewmore').click(function() {
    $('.overlay').show()
    $('.appx').show()
    $(this).siblings('.appinfo').show()
    $('.project').css('position', 'inherit')
    $('.viewmore').hide()
  })

  $('.overlay, .appx').click(function() {
    $(this).hide()
    $('.overlay').hide()
    $('.appinfo').hide()
    $('.project').css('position', 'relative')
    $('.viewmore').show()
  })


})
