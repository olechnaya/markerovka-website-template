jQuery(document).ready(function($) {
  "use strict";

  $(function() {

    if( !!navigator.userAgent.match(/Trident.*rv\:11\./)) {
      document.getElementsByTagName('body')[0].classList.add('ie11');
    }

    $('body').materialScrollTop({
      revealElement: 'header',
      revealPosition: 'bottom',
      onScrollEnd: function() {
        console.log('Scrolling End');
      }
    });


    $('.slidedown-city-office-selection').click(function() {
      $(this).hasClass('active') ? ($(this).removeClass('active'),
        $(".slidedown-city").removeClass('active'),
        $('body').removeClass('overlay')) : ($(this).addClass('active'),
        $(".slidedown-city").addClass('active'),
        setTimeout(function() {
          $('body').addClass('overlay')
        }, 100))
    })

    $('.cities .other label').hover(
      function() {
        $(this).addClass('hovered')
      },
      function() {
        $(this).removeClass('hovered')
      }
    );

    $('body').add('.js-close-popup').on('click', function(e) {
      $('body').hasClass('overlay') && $('.slidedown-city').hasClass('active') &&
        (
          $('body').removeClass('overlay'),
          $('.slidedown-city.active').removeClass('active'),
          $(".slidedown-city-office-selection").removeClass('active'));

          if($('.dropdown-menu.show').length > 0) {
            $('.js-hamburger').removeClass('is-active');
            $('.click-activation.open').removeClass('open');
            $('.dropdown-menu a.dropdown-toggle').removeClass('active');
            $('.dropdown-menu').removeClass('show');
          }
    });
    $(document).keyup(function(e) {
      27 === e.keyCode &&
        (
          $('body').hasClass('overlay') &&
          ($('body').removeClass('overlay'),
            $('.slidedown-city.active').removeClass('active'),
            $('.slidedown-city-office-selection').removeClass('active')));

            if (27 === e.keyCode && $('.dropdown-menu.show').length > 0) {
              $('.js-hamburger').removeClass('is-active');
              $('.click-activation.open').removeClass('open');
              $('.dropdown-menu a.dropdown-toggle').removeClass('active');
              $('.dropdown-menu').removeClass('show');
            }
    });

    $('#hamburger-container a').on('click', function(e) {
      $(this).find('.hamburger').toggleClass('is-active');
      $('#catalogDropdown .dropdown.click-activation').removeClass('open');
      $('#catalogDropdown .dropdown-toggle').removeClass('active');
      $('#catalogDropdown .dropdown-menu').removeClass('show');
    });

    $('a.dropdown-toggle').on('click', function(e) {
      //debugger;
      $('.dropdown-menu a.dropdown-toggle').not($(this)).removeClass('active');
$(this).toggleClass('active');
      // if(!$(this).hasClass('active')){
      //   $(this).addClass('active');
      // }

      $(this).next().height($(this).parents('.dropdown-menu').height());

      if (!$(this).next().hasClass('show')) {
  	  	$(this).parents('.dropdown-menu').first().find('.show').removeClass("show");
  	  }
  	  var $subMenu = $(this).next(".dropdown-menu");
  	  $subMenu.toggleClass('show');
  	  return false;
  	});


  });

});
