const siemas = document.querySelectorAll('.siema');

// this is fairly new way of looping through DOM Elements
// More about ithere: https://pawelgrzybek.com/loop-through-a-collection-of-dom-elements/
// For better compatibility I suggest using for loop
for (const siema of siemas) {
  var id = siema.id;
  const mySiema = new Siema({
    selector: siema,
    duration: 600,
    easing: 'cubic-bezier(.17,.67,.68,1.73)',
    perPage: 1,
    startIndex: 0,
    draggable: true,
    multipleDrag: true,
    threshold: 20,
    rtl: false
  });

  // Add a function that generates pagination to prototype
  Siema.prototype.addPagination = function() {

    var siemaInstance = this.selector.id;

    switch (siemaInstance) {
      case "relatedStuff":
        for (let i = 0; i < this.innerElements.length; i++) {
          const span = $('<span />').attr('data-slide', i).appendTo('#relatedSiemaNav');
          i == 0 ? span.addClass('active') : null;
          span.on('click', () => this.goTo(i,() => setActive(span)));
        }
        break;
      case "similarStuff":
        for (let i = 0; i < this.innerElements.length; i++) {
          const span = $('<span />').attr('data-slide', i).appendTo('#similarSiemaNav');
            i == 0 ? span.addClass('active') : null;
          span.on('click', () => this.goTo(i,() => setActive(span)));

        }
        break;
      default:
        console.log('no siema instances');
    }

  }

  // Trigger pagination creator
  mySiema.addPagination();
  function setActive(span) {
    span.siblings().removeClass('active');
    span.addClass('active');
  }
}

/////////////////////////////////////////////////////
// $('div[id^="cti_"]').each(function () {
//   var elementIndex = this.id,
//             target = '#preview_' + elementIndex;
// })


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
