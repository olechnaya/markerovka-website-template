
$('#relatedStuff, #similarStuff').on('slide.bs.carousel', function(e) {
  var slideTo = $(e.relatedTarget).index(),
      indicators = $(this).prev().find('.carousel-indicators span');

    indicators.removeClass('active');
    $($(indicators)[slideTo]).addClass('active');
});

$('.product').tooltipster({
    contentCloning: true,
    arrow: false,
    interactive: true,
    functionBefore: function(instance, helper) {
      $(document).on('click', '.close', function(instance){
        $('.product').tooltipster('close')
      })
    },
    functionPosition: function(instance, helper, position){
     //position.coord.top += 100;
     //position.coord.left += 10;
      //  return position;
    }
});

$(document).on('click', '.miniature', function(e) {
    e.preventDefault();
    var imgSource = $(this).attr('href'),
        $targetImg = $(this).siblings( ".large" );

    $targetImg.attr('src', imgSource);
    $(this).addClass('active').siblings().removeClass('active');
});
