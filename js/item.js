$(function() {
  $(document).ready(function() {
      $('body').fadeIn(1000);
  });

  jcf.setOptions('Select', {
    wrapNative: false,
    fakeDropInBody: false,
	  useCustomScroll: true
});
    jcf.replaceAll();

    $('[data-fancybox="gallery"]').fancybox({
toolbar: false
});

    $('.miniature').on('click', function(e) {
        e.preventDefault();
        var imgSource = $(this).attr('href'),
            $targetElem = $('#photoDecor').find('#'+ $(this).attr("data-id-link"));

        $('#photoDecor').find('.large').css("zIndex", '')
        $targetElem.css('zIndex', 2);
        $(this).addClass('active').siblings().removeClass('active');
    });

    // $('#itemTab a').on('click', function (e) {
    //   e.preventDefault()
    //   $(this).tab('show')
    // })
    $('#itemTab a').on('shown.bs.tab', function(e){
    e.preventDefault()
      var activeTab = $(e.target),
          previousTab = $(e.relatedTarget),
          activeTabPane = $(activeTab.attr('href')),
          previousTabPane = $(previousTab.attr('href'));

          activeTab.css({
            'top':0
          });
          previousTab.removeAttr( 'style' );

          activeTabPane.css({
            'zIndex': 7,
            'background-color': '#fffffe',
            'top':0,
            'width':'100%'
          });
          previousTabPane.removeAttr( 'style' );
  });
});
