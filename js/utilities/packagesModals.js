var html = $('html'),
  demo = $('.demo'),
  modal = $('.modal'),
  modalShow = $('.modal-show'),
  modalHide = $('.modal-hide'),
  modalWrapper = $('.modal-wrapper');

// Modal Show
modalShow.on('click', function (e) {
  e.preventDefault();
  html.addClass('no-scroll');
  modal.addClass('is-visible');
  $('#modalDescription').html($(this).data('description'));
  $('#modalTitle').html($(this).data('title'));
  $('#modalContent').html($(this).data('content'));
  demo.attr('aria-hidden', 'true');
  modal.attr({
    'aria-hidden': 'false',
    open: 'true',
    tabindex: '0',
  });
});

// Modal Hide
modalHide.on('click', function (e) {
  e.preventDefault();
  html.removeClass('no-scroll');
  modal.removeClass('is-visible');
  $('#modalDescription').html('');
  $('#modalTitle').html('');
  $('#modalContent').html('');
  demo.attr('aria-hidden', 'false');
  modal.attr('aria-hidden', 'true');
  modal.removeAttr('open tabindex');
});

modalWrapper.on('click', function (e) {
  e.stopPropagation();
});
