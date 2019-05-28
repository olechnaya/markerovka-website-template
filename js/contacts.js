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
        switches = $(this).parents('.office-route').find('.switches a');

    if ($(this).hasClass('active')) return;

    switches.removeClass('active');

    container.children('div').removeClass('active');

    $(targetDiv).addClass('active')
    $(this).addClass('active');
  })

  function onChangeCallback() {
    $(this.selector).parent().find('.navigation button').removeClass('active')
    $($(this.selector).parent().find('.navigation button')[this.currentSlide]).addClass('active')
  }

  const sae_sliderSiema = new Siema({
    selector: '#mainOfficeRouteSiemaSlider .siema',
    duration: 200,
    easing: 'ease-out',
    perPage: 1,
    startIndex: 0,
    draggable: true,
    multipleDrag: true,
    threshold: 20,
    loop: true,
    rtl: false,
    onChange: onChangeCallback,
  });
  $('#mainOfficeRouteSiemaSlider').on('click', '.prev', () => sae_sliderSiema.prev());
  $('#mainOfficeRouteSiemaSlider').on('click', '.next', () => sae_sliderSiema.next());

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

  // Trigger pagination creator
  sae_sliderSiema.addPagination(sae_sliderSiema.selector);

  //  Second instance of carousel
  const sae2_sliderSiema = new Siema({
    selector: '#nagornayaOfficeRouteSiemaSlider .siema',
    duration: 200,
    easing: 'ease-out',
    perPage: 1,
    startIndex: 0,
    draggable: true,
    multipleDrag: true,
    threshold: 20,
    loop: true,
    rtl: false,
    onChange: onChangeCallback,
  });
  $('#nagornayaOfficeRouteSiemaSlider').on('click', '.prev', () => sae2_sliderSiema.prev());
  $('#nagornayaOfficeRouteSiemaSlider').on('click', '.next', () => sae2_sliderSiema.next());

  // Trigger pagination creator
  sae2_sliderSiema.addPagination(sae2_sliderSiema.selector);
});
