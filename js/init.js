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

  $('header').on('click', '.smoothScroll', function (e) {
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
  /*	Fade In/Out Primary Navigation Home
------------------------------------------------------*/

  if (top.location.pathname === '/') {
    $(window).scroll(function () {
      var top_of_element = $('#home').offset().top;
      var bottom_of_element =
        $('#home').offset().top + $('#home').outerHeight();
      var bottom_of_screen = $(window).scrollTop() + $(window).innerHeight();
      var top_of_screen = $(window).scrollTop();

      if (
        bottom_of_screen > top_of_element &&
        top_of_screen < bottom_of_element
      ) {
        // the element is visible, do something
        $(function () {
          var nav = $('#nav-wrap');
          nav.removeClass('nav-filled');
          var scrollVal = $(window).scrollTop();
          var docHeight = $(window).height();
          var percentage = (scrollVal / docHeight) * 100;
          if (percentage > 0 && percentage < 100) {
            nav.removeClass('nav-transparent').addClass('nav-faded');
          } else if (percentage >= 100) {
            nav.removeClass('nav-faded').addClass('nav-filled');
          } else {
            nav.removeClass('nav-faded').addClass('nav-transparent');
          }
        });
      } else {
        // the element is not visible, do something else
        var nav = $('#nav-wrap');
        nav
          .removeClass('nav-transparent')
          .removeClass('nav-faded')
          .addClass('nav-filled');
      }
    });
  }

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
