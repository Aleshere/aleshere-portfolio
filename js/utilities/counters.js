$('.counters-container').waypoint(
  function () {
    $('.circle').each(function () {
      var $this = $(this),
        countTo = $this.attr('data-count');

      $({ countNum: $this.text() }).animate(
        {
          countNum: countTo,
        },

        {
          duration: 1000,
          easing: 'linear',
          step: function () {
            $this.text(Math.floor(this.countNum));
          },
          complete: function () {
            $this.text(this.countNum + '%');
          },
        }
      );
    });
  },
  {
    triggerOnce: true,
    offset: '40%',
  }
);
