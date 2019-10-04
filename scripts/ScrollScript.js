var options = {
    offset: 400
  }
var header = new Headhesive('.HeaderText', options);

$('.HeaderNavMenu a').bind("click", function(e) {
  var anchor = $(this);
  $('html, body').stop().animate({
    scrollTop: $(anchor.attr('href')).offset().top - 68
  }, 1000);
  e.preventDefault();
});