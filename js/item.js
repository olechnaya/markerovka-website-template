$(function() {
  var ifIE = false;

  if( !!navigator.userAgent.match(/Trident.*rv\:11\./)) {
    ifIE =  true;
  };

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
      $targetElem = $('#photoDecor').find('#' + $(this).attr("data-id-link"));

    $('#photoDecor').find('.large').css("zIndex", '')
    $targetElem.css('zIndex', 2);
    $(this).addClass('active').siblings().removeClass('active');
  });

  var heights = new Array();

  setTimeout(function() {
    setTabsHeights();
  }, 650);

  function setTabsHeights() {
    $('.tab-content .tab-pane').each(function() {
      heights.push($(this).height())
    });
    $('.tab-content .tab-pane').css('height', Math.min.apply(null, heights))
  }

  $('#itemTab a').on('shown.bs.tab', function(e) {

    var activeTab = $(e.target),
      previousTab = $(e.relatedTarget),
      activeTabPane = $(activeTab.attr('href')),
      previousTabPane = $(previousTab.attr('href')),
      minHeight = Math.min.apply(null, heights);

    activeTab.css({
      'top': 0,
      'background-color': '#fffffe',
      'opacity': 1
    });

    previousTab.removeAttr('style');

    activeTabPane.css({
      'height': 'auto',
      'zIndex': 7,
      'background-color': '#fffffe',
      'top': ifIE ? -1 : 0,
      'width': '100%'
    });
    previousTabPane.removeAttr('style');
    previousTabPane.css('height', minHeight);
  });
});
