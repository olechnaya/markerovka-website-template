jQuery(document).ready(function($) {
  "use strict";

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
      rtl: false
    });
    $('#a_slider').on('click', '.prev', () => a_sliderSiema.prev());
    $('#a_slider').on('click', '.next', () => a_sliderSiema.next());

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
      rtl: false
    });
    $('#saeSiemaSlider').on('click', '.prev', () => sae_sliderSiema.prev());
    $('#saeSiemaSlider').on('click', '.next', () => sae_sliderSiema.next());
  });

  // govnocode is starting
  const annualadding1_sliderSiema = new Siema({
    selector: '#addingsOf2018 .siema',
    duration: 200,
    easing: 'ease-out',
    perPage: 1,
    startIndex: 0,
    draggable: true,
    multipleDrag: true,
    threshold: 20,
    loop: false,
    rtl: false,
    onChange: onChangeCallback
  });
  Siema.prototype.addPagination = function(instance) {
    var navDiv = document.createElement('div');

    navDiv.setAttribute("id", $(instance).parents('.btn-sticker').attr('id') + "Nav");
    navDiv.setAttribute("class", "navigation");

    $(instance).parents('.btn-sticker').append(navDiv);

    for (let i = 0; i < this.innerElements.length; i++) {
      const btn = document.createElement('button');
      if (i == 0) btn.setAttribute("class", "active");
      btn.addEventListener('click', () => this.goTo(i));
      navDiv.appendChild(btn);
    }
  }

  annualadding1_sliderSiema.addPagination(annualadding1_sliderSiema.selector);

// govnocode is continuing
  const annualadding2_sliderSiema = new Siema({
    selector: '#addingsOf2017 .siema',
    duration: 200,
    easing: 'ease-out',
    perPage: 1,
    startIndex: 0,
    draggable: true,
    multipleDrag: true,
    threshold: 20,
    loop: false,
    rtl: false,
    onChange: onChangeCallback
  });

  annualadding2_sliderSiema.addPagination(annualadding2_sliderSiema.selector);

  // govnocode is continuing
    const annualadding3_sliderSiema = new Siema({
      selector: '#addingsOf2016 .siema',
      duration: 200,
      easing: 'ease-out',
      perPage: 1,
      startIndex: 0,
      draggable: true,
      multipleDrag: true,
      threshold: 20,
      loop: false,
      rtl: false,
      onChange: onChangeCallback
    });

    annualadding3_sliderSiema.addPagination(annualadding3_sliderSiema.selector);

    // govnocode is continuing
      const annualadding4_sliderSiema = new Siema({
        selector: '#addingsOf2015 .siema',
        duration: 200,
        easing: 'ease-out',
        perPage: 1,
        startIndex: 0,
        draggable: true,
        multipleDrag: true,
        threshold: 20,
        loop: false,
        rtl: false,
        onChange: onChangeCallback
      });

      annualadding4_sliderSiema.addPagination(annualadding4_sliderSiema.selector);

      //TODO:
      // declare siema object for
      // array ['addingsOf2015','addingsOf2016','addingsOf2017', 'addingsOf2018','addingsOf2019']

});

function onChangeCallback() {

  // styling navigation buttons depending on selected slide
  $(this.selector).parents('.btn-sticker')
                  .find('.navigation button')
                  .removeClass('active');

  $($(this.selector).parents('.btn-sticker')
                    .find('.navigation button')[this.currentSlide])
                    .addClass('active');

  // showing image depending on selected slide
  $(this.selector).parents('.annual-addings')
                  .find('.img-container')
                  .removeClass('active');

  $($(this.selector).parents('.annual-addings')
                    .find('.img-container')[this.currentSlide])
                    .addClass('active');
}
