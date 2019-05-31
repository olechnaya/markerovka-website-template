jQuery(document).ready(function($) {
  "use strict";

  $(function() {

    $('body').materialScrollTop({
      revealElement: '#header',
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
          $(".slidedown-city-office-selection").removeClass('active'))
    });
    $(document).keyup(function(e) {
      27 === e.keyCode &&
        (
          $('body').hasClass('overlay') &&
          ($('body').removeClass('overlay'),
            $('.slidedown-city.active').removeClass('active'),
            $('.slidedown-city-office-selection').removeClass('active')))
    });

    $('.call-back').tooltipster({
      interactive: true,
      trigger: 'click',
      functionBefore: function(i, h) {
        $('body').addClass('overlay');
        $('.slidedown-city').css('z-index', '0');
      },
      functionAfter: function(i, h) {
        $('body').removeClass('overlay');
        $('.slidedown-city').css('z-index', '10')
      }
    });

    $('.tooltip').tooltipster({
      theme: 'tooltipster-noir'
    });

    //$('.dropdown-toggle').dropdown()
    $('.dropdown-menu a.dropdown-toggle').on('click', function(e) {
      //debugger;
  	  if (!$(this).next().hasClass('show')) {
  		$(this).parents('.dropdown-menu').first().find('.show').removeClass("show");
  	  }
  	  var $subMenu = $(this).next(".dropdown-menu");
  	  $subMenu.toggleClass('show');

  	  $(this).parents('li.nav-item.dropdown.show').on('hidden.bs.dropdown', function(e) {
  		$('.dropdown-submenu .show').removeClass("show");
  	  });

  	  return false;
  	});
  });

});
