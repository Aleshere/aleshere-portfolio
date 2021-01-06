$(document).ready(function () {
  $('#quick-links ul li a').on('click', function () {
    var a = $(this).parent().parent().find('a').removeClass('active');
    var b = $(this).addClass('active');
  });

  $(window).on('scroll', function () {
    $('.target').each(function () {
      if (
        $(window).scrollTop() >=
        $(this).offset().top - $('header').height()
      ) {
        var id = $(this).attr('id');
        $('#quick-links ul li a').removeClass('active');
        $('#quick-links ul li a[href=#' + id + ']').addClass('active');
      }
    });
  });
});
