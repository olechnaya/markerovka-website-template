$(function() {
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

    $('#itemTab a').on('click', function (e) {
      e.preventDefault()
      $(this).tab('show')
    })
});
