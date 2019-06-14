jQuery(document).ready(function($) {
  "use strict";

  $(function() {
    $('.carousel').carousel();

    $('#addingsOf2017').on('slide.bs.carousel', function(e) {

      var slideTo = $(e.relatedTarget).index();

      $(this).parents('.annual-addings').find('.img-container').removeClass('active');
      $($(this).parents('.annual-addings').find('.img-container')[slideTo]).addClass('active');
    })


  });

});
