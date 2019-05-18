/************************************************
Template Name: Believe Boostrap Template
Author: BoostrapMart
Develop By: BoostrapMart
Developer URL: http://info@bootstrapmart.com
************************************************/

jQuery(document).ready(function($) {
	"use strict";


    /*------------------------------- brand carousel ---------------------------------------*/

    $(function(){

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
			$('#a_slider').on('click','.prev', () => a_sliderSiema.prev());
			$('#a_slider').on('click','.next', () => a_sliderSiema.next());
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

			$(".slidedown-city-office-selection").click(function() {
            $(this).hasClass("active") ? ($(this).removeClass("active"),
            															$(".slidedown-city").removeClass("active"),
															            $("body").removeClass("overlay")) : ($(this).addClass("active"),
															            $(".slidedown-city").addClass("active"),
															            setTimeout(function() {
															                $("body").addClass("overlay")
															            }, 100))
        })


			$(".owl-carousel").owlCarousel({
				loop:true,
		    nav:true,items:2,
    margin:30,
    stagePadding:30,
			});


			// $("#a_slider").owlCarousel({
			// 		loop:true,
			// 		pagination: false,
			// 		nav:true
			// });

        $("#brand-carousel").owlCarousel({
            autoPlay: 3000, //Set AutoPlay to 3 seconds
            items : 5,
            slideSpeed : 300,
            paginationSpeed : 400,
            pagination: false,
            navigation: false,
        });

        $("#brand-carousel-2").owlCarousel({
            autoPlay: 3000, //Set AutoPlay to 3 seconds
            singleItem:true,
            slideSpeed : 300,
            paginationSpeed : 400,
            pagination: false,
            navigation: false,
        });
    });

    /*------------------------------- Price range slider ---------------------------------------*/

    $(function(){
        $(function() {
            $( "#range-slider" ).slider({
                range: true,
                min: 0,
                max: 500,
                values: [ 0, 85, ],
                slide: function( event, ui ) {
                    $( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
                }
            });
            $( "#amount" ).val( "$" + $( "#range-slider" ).slider( "values", 0 ) +
		  " - $" + $( "#range-slider" ).slider( "values", 1 ) );
        });
    });

      /*------------------------------- search form ---------------------------------------*/
    /*$(function() {
        $(".dropdown").hover(
        function() { $('.dropdown-menu', this).stop().fadeIn("fast");
        },
        function() { $('.dropdown-menu', this).stop().fadeOut("fast");
    });
    });*/
    $(function() {
		$("#open-srch-form").on('click', function() {
		  $('.srch-form').toggl$('fast', function() {
		  });
		});
	});

    /*------------------------------- category open ---------------------------------------*/
    $(function() {
		$("#to-open-cat").on('click', function() {
		  $('.this-cat').toggl$('fast', function() {
		  });
		});
	});

    /*------------------------------- Product preview ---------------------------------------*/


    $(function(){
        var sync1 = $("#detail-3");
          var sync2 = $("#detail-control-3");

          // sync1.owlCarousel({
          //   singleItem : true,
          //   slideSpeed : 1000,
          //   navigation: false,
          //   pagination:false,
          //   afterAction : syncPosition,
          //   responsiveRefreshRate : 200,
          // });
					//
          // sync2.owlCarousel({
          //   items : 3,
          //   pagination:false,
          //   navigation:false,
          //   responsive:false,
          //   responsiveRefreshRate : 100,
          //   afterInit : function(el){
          //     el.find(".owl-item").eq(0).addClass("synced");
          //   }
          // });

          function syncPosition(el){
            var current = this.currentItem;
            $("#detail-control-3")
              .find(".owl-item")
              .removeClass("synced")
              .eq(current)
              .addClass("synced")
            if($("#detail-control-3").data("owlCarousel") !== undefined){
              center(current)
            }
          }

          $("#detail-control-3").on("click", ".owl-item", function(e){
            e.preventDefault();
            var number = $(this).data("owlItem");
            sync1.trigger("owl.goTo",number);
          });

          function center(number){
            var sync2visible = sync2.data("owlCarousel").owl.visibleItems;
            var num = number;
            var found = false;
            for(var i in sync2visible){
              if(num === sync2visible[i]){
                var found = true;
              }
            }

            if(found===false){
              if(num>sync2visible[sync2visible.length-1]){
                sync2.trigger("owl.goTo", num - sync2visible.length+2)
              }else{
                if(num - 1 === -1){
                  num = 0;
                }
                sync2.trigger("owl.goTo", num);
              }
            } else if(num === sync2visible[sync2visible.length-1]){
              sync2.trigger("owl.goTo", sync2visible[1])
            } else if(num === sync2visible[0]){
              sync2.trigger("owl.goTo", num-1)
            }

          }
    });

});
