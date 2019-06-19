$(function() {
  $('#citiesTab a').on('click', function(e) {
    e.preventDefault()
    $(this).tab('show')
  })

  $('.expandable').on('click', function(e) {
    $(this).toggleClass("collapsed")
  })


  $('.switches a').on('click', function(e) {
    e.preventDefault();
    var targetDiv = $(this).attr('href'),
        container = $(this).parents('.office-route'),
        switches = $(this).parents('.switches').find(' a');
    if ($(this).hasClass('active')) return;

    switches.removeClass('active');
    container.children('.route-item').removeClass('active');

    $(targetDiv).addClass('active')
    $(this).addClass('active');
  })

});
