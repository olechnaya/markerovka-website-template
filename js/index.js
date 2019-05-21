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
      rtl: false,
      onInit: () => {},
      onChange: () => {},
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
      rtl: false,
      onInit: () => {},
      onChange: () => {},
    });
    $('#saeSiemaSlider').on('click', '.prev', () => sae_sliderSiema.prev());
    $('#saeSiemaSlider').on('click', '.next', () => sae_sliderSiema.next());
  });
})
