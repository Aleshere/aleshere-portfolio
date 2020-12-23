/*-----------------------------------------------------------------------------------
/*
/* Init JS
/*
-----------------------------------------------------------------------------------*/

jQuery(document).ready(function ($) {
  /*----------------------------------------------------*/
  /* FitText Settings
------------------------------------------------------ */

  setTimeout(function () {
    $('h1.responsive-headline').fitText(1, {
      minFontSize: '20px',
      maxFontSize: '90px',
    });
  }, 100);

  /*----------------------------------------------------*/
  /* Smooth Scrolling
------------------------------------------------------ */

  $('header').on('click', 'a', function (e) {
    e.preventDefault();

    var target = this.hash,
      $target = $(target);

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

  /*----------------------------------------------------*/
  /* Highlight the current section in the navigation bar
------------------------------------------------------*/

  const sections = $('section');

  sections.waypoint({
    handler: function (event, direction) {
      let active_section;
      const navigation_links = $('#nav-wrap a');

      active_section = $(this);
      if (direction === 'up') active_section = active_section.prev();

      let active_link = $(
        '#nav-wrap a[href="#' + active_section.attr('id') + '"]'
      );

      navigation_links.parent().removeClass('current');
      active_link.parent().addClass('current');
    },
    offset: '35%',
  });

  /*----------------------------------------------------*/
  /*	Make sure that #header-background-image height is
/* equal to the browser height.
------------------------------------------------------ */

  $('header').css({ height: $(window).height() });
  $(window).on('resize', function () {
    $('header').css({ height: $(window).height() });
    $('body').css({ width: $(window).width() });
  });

  /*----------------------------------------------------*/
  /*	Fade In/Out Primary Navigation
------------------------------------------------------*/

  $(window).on('scroll', function () {
    var h = $('header').height();
    var y = $(window).scrollTop();
    var nav = $('#nav-wrap');

    if (y > h * 0.2 && y < h && $(window).outerWidth() > 768) {
      nav.fadeOut('fast');
    } else {
      if (y < h * 0.2) {
        nav.removeClass('opaque').fadeIn('fast');
      } else {
        nav.addClass('opaque').fadeIn('fast');
      }
    }
  });

  /*----------------------------------------------------*/
  /*	Modal Popup
------------------------------------------------------*/

  $('.item-wrap a').magnificPopup({
    type: 'inline',
    fixedContentPos: false,
    removalDelay: 200,
    showCloseBtn: false,
    mainClass: 'mfp-fade',
  });

  $(document).on('click', '.popup-modal-dismiss', function (e) {
    e.preventDefault();
    $.magnificPopup.close();
  });
});
