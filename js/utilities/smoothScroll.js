$('.quick-links').on('click', '.smoothScroll', function (e) {
  e.preventDefault();

  var target = this.hash,
    $target = $(target);
  console.log($target);

  $('html, body')
    .stop()
    .animate(
      {
        scrollTop: $target.offset().top,
      },
      800,
      'swing',
      function () {
        window.location.hash = target;
      }
    );
});

$('.ol-links').on('click', '.smoothScroll', function (e) {
  e.preventDefault();

  var target = this.hash,
    $target = $(target);
  console.log($target);

  $('html, body')
    .stop()
    .animate(
      {
        scrollTop: $target.offset().top,
      },
      800,
      'swing',
      function () {
        window.location.hash = target;
      }
    );
});
