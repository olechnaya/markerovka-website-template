/************************************************
Template Name: Believe Boostrap Template
Author: BoostrapMart
Develop By: BoostrapMart
Developer URL: http://info@bootstrapmart.com
************************************************/

jQuery(document).ready(function($) {
  "use strict";


  /*------------------------------- brand carousel ---------------------------------------*/

  $(function() {

    const a_sliderSiema = new Siema({
      selector: '#a_slider .siema',
      duration: 200,
      easing: 'ease-out',
      perPage: 1,
      startIndex: 0,
      draggable: true,
      multipleDrag: true,
      threshold: 20,
      loop: true,
      rtl: false,
      onInit: () => {},
      onChange: () => {},
    });
    $('#a_slider').on('click', '.prev', () => a_sliderSiema.prev());
    $('#a_slider').on('click', '.next', () => a_sliderSiema.next());
    // // Add a function that generates pagination to prototype
    // Siema.prototype.addPagination = function() {
    //   for (let i = 0; i < this.innerElements.length; i++) {
    //     const btn = document.createElement('button');
    //     btn.textContent = i;
    //     btn.addEventListener('click', () => this.goTo(i));
    //     this.selector.appendChild(btn);
    //   }
    // }
    //
    // // Trigger pagination creator
    // a_sliderSiema.addPagination();


    const sae_sliderSiema = new Siema({
      selector: '#saeSiemaSlider .siema',
      duration: 200,
      easing: 'ease-out',
      perPage: 1,
      startIndex: 0,
      draggable: true,
      multipleDrag: true,
      threshold: 20,
      loop: true,
      rtl: false,
      onInit: () => {},
      onChange: () => {},
    });
    $('#saeSiemaSlider').on('click', '.prev', () => sae_sliderSiema.prev());
    $('#saeSiemaSlider').on('click', '.next', () => sae_sliderSiema.next());


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


    $(".owl-carousel").owlCarousel({
      loop: true,
      nav: true,
      items: 2,
      margin: 30,
      stagePadding: 30,
    });
		
    $("#brand-carousel").owlCarousel({
      autoPlay: 3000, //Set AutoPlay to 3 seconds
      items: 5,
      slideSpeed: 300,
      paginationSpeed: 400,
      pagination: false,
      navigation: false,
    });

    $("#brand-carousel-2").owlCarousel({
      autoPlay: 3000, //Set AutoPlay to 3 seconds
      singleItem: true,
      slideSpeed: 300,
      paginationSpeed: 400,
      pagination: false,
      navigation: false,
    });
  });

});
