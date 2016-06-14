$(document).ready(function() {


$('#menu').click(function(){
  $('.about').toggle('slide', {direction : 'right'}, 500)
  $('.work').toggle('slide', {direction : 'right'}, 700)
  $('.contact').toggle('slide', {direction : 'right'}, 900)
  $('.resume').toggle('slide', {direction : 'right'}, 1100)
})


})
