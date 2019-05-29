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

  const annualadding1_sliderSiema = new Siema({
    selector: '#mainOfficeRouteSiemaSlider .siema',
    duration: 200,
    easing: 'ease-out',
    perPage: 1,
    startIndex: 0,
    draggable: true,
    multipleDrag: true,
    threshold: 20,
    loop: true,
    rtl: false//,
    //onChange: onChangeCallback,
  });
  Siema.prototype.addPagination = function(instance) {
    var test = document.createElement('div');
    //  debugger;
    test.setAttribute("id", $(instance).parent().attr('id') + "Nav");
    test.setAttribute("class", "navigation");
    this.selector.appendChild(test);

    for (let i = 0; i < this.innerElements.length; i++) {
      const btn = document.createElement('button');
      if (i == 0) btn.setAttribute("class", "active");
      btn.addEventListener('click', () => this.goTo(i));
      test.appendChild(btn);
    }
  }
});
