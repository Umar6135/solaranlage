$(document).ready(function() {
$('.navbar-nav>li>a').on('click', function(){
    $('.navbar-collapse').collapse('hide');
});

    $('.workgallery__div .workgallery__div_all').magnificPopup({

      delegate: 'a',

      type: 'image',

      tLoading: 'Loading image #%curr%...',

      mainClass: 'mfp-img-mobile',

      gallery: {

        enabled: true,

        navigateByImgClick: true,

        preload: [0,1] // Will preload 0 - before current, and 1 after the current image

      },

      image: {

        tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'

      }

    });

});


jQuery(document).ready(function($){
	var $timeline_block = $('.cd-timeline-block');

	//hide timeline blocks which are outside the viewport
	$timeline_block.each(function(){
		if($(this).offset().top > $(window).scrollTop()+$(window).height()*0.75) {
			$(this).find('.cd-timeline-img, .cd-timeline-content').addClass('is-hidden');
		}
	});

	//on scolling, show/animate timeline blocks when enter the viewport
	$(window).on('scroll', function(){
		$timeline_block.each(function(){
			if( $(this).offset().top <= $(window).scrollTop()+$(window).height()*0.75 && $(this).find('.cd-timeline-img').hasClass('is-hidden') ) {
				$(this).find('.cd-timeline-img, .cd-timeline-content').removeClass('is-hidden').addClass('bounce-in');
			}
		});
	});
});


$(function () {

    $("img[data-original]").lazyload({

        effect: "fadeIn"

    });



    $('.testimonials_list ul').slick({

        dots: true,

        arrows: false,

        swipeToSlide: true,

        slidesToShow: 3,

        slidesToScroll: 1,

        autoplay: true,

        autoplaySpeed: 5000,

        responsive: [

            {

                breakpoint: 1200,

                settings: {

                    slidesToShow: 2,

                    slidesToScroll: 1,

                }

            },

            {

                breakpoint: 768,

                settings: {

                    slidesToShow: 1,

                    slidesToScroll: 1,

                    arrows: true,

                    autoplay: true,

                    autoplaySpeed: 3000,

                }

            },

            {

                breakpoint: 480,

                settings: {

                    slidesToShow: 1,

                    slidesToScroll: 1,

                    arrows: true,

                    autoplay: true,

                    autoplaySpeed: 3000,

                }

            }

            // You can unslick at a given breakpoint now by adding:

            // settings: "unslick"

            // instead of a settings object

        ]

    });



    $('.featureSlider').slick({

        dots: false,

        arrows: false,

        swipeToSlide: true,

        slidesToShow: 4,

        slidesToScroll: 1,

        autoplay: true,

        autoplaySpeed: 5000,

        responsive: [

            {

                breakpoint: 1200,

                settings: {

                    slidesToShow: 3,

                    slidesToScroll: 1,

		     dots: true,

                    autoplay: true,

                    autoplaySpeed: 3000,



                }

            },

            {

                breakpoint: 991,

                settings: {

                    slidesToShow: 2,

                    slidesToScroll: 1,

                    dots: true,

                    autoplay: true,

                    autoplaySpeed: 3000,

                }

            },

            {

                breakpoint: 576,

                settings: {

                    slidesToShow: 1,

                    slidesToScroll: 1,

                    dots: true,

                    autoplay: true,

                    autoplaySpeed: 3000,

                }

            }

            // You can unslick at a given breakpoint now by adding:

            // settings: "unslick"

            // instead of a settings object

        ]

    });
  $('.gallery__slider').slick({
    dots: false,
    arrows: true,
    swipeToSlide: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    infinite: false,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  });

let samt = 0;
  window.addEventListener('scroll', function () {

    samt <= 10 ? samt++ : AOS.refresh();

  });



  AOS.init({

    animatedClassName: 'aos-animate',

    disable: function () {

      var maxWidth = 769;

      return window.innerWidth < maxWidth;

    }

  });    window.onscroll = function () { scrollFunction() };

    var menutop = document.getElementById("header-lower");

    function scrollFunction() {

        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {

            document.getElementById("navbartops").style.top = "0";

            menutop.classList.add("menufixcustom");

        } else {

            document.getElementById("navbartops").style.top = "-75.72px";

            menutop.classList.remove("menufixcustom");

        }

    }





})






//jQuery time
var current_fs, next_fs, previous_fs; //fieldsets
var left, opacity, scale; //fieldset properties which we will animate
var animating; //flag to prevent quick multi-click glitches

$(".next").click(function(){
	if(animating) return false;
	animating = true;
	
	current_fs = $(this).parent();
	next_fs = $(this).parent().next();
	
	//activate next step on progressbar using the index of next_fs
	$("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");
	
	//show the next fieldset
	next_fs.show(); 
	//hide the current fieldset with style
	current_fs.animate({opacity: 0}, {
		step: function(now, mx) {

			scale = 1 - (1 - now) * 0.2;
			left = (now * 50)+"%";
			opacity = 1 - now;
			current_fs.css({'transform': 'scale('+scale+')'});
			next_fs.css({'left': left, 'opacity': opacity});
      
      $(".step1").removeClass("active");
      $(".step2").addClass("active");

      $(".service-section").addClass("d-none");
      $(".sEnergy-bills").addClass("d-none");
      $(".workgallery").addClass("d-none");
      $(".wInvest-solar").addClass("d-none");
      $(".wUGei").addClass("d-none");
      $(".about-Sec").addClass("d-none");
      $(".benefit").addClass("d-none");
      $(".footer-cta").addClass("d-none");
      $(".video-Sec").addClass("d-none");
      $("#projectFacts").addClass("d-none");


      $(".review-Sec").addClass("review-Sec-gap");
		}, 
		duration: 500, 
		complete: function(){
			current_fs.hide();
			animating = false;
		}, 
		//this comes from the custom easing plugin
		easing: 'easeOutQuint'
	});
});

$(".previous").click(function(){
	if(animating) return false;
	animating = true;
	
	current_fs = $(this).parent();
	previous_fs = $(this).parent().prev();
	
	//de-activate current step on progressbar
	$("#progressbar li").eq($("fieldset").index(current_fs)).removeClass("active");
	
	//show the previous fieldset
	previous_fs.show(); 
	//hide the current fieldset with style
	current_fs.animate({opacity: 0}, {
		step: function(now, mx) {
			//as the opacity of current_fs reduces to 0 - stored in "now"
			//1. scale previous_fs from 80% to 100%
			scale = 0.8 + (1 - now) * 0.2;
			//2. take current_fs to the right(50%) - from 0%
			left = ((1-now) * 50)+"%";
			//3. increase opacity of previous_fs to 1 as it moves in
			opacity = 1 - now;
			current_fs.css({'left': left});
			previous_fs.css({'transform': 'scale('+scale+')', 'opacity': opacity});
      $(".step2").removeClass("active");
      $(".step1").addClass("active");
      
      $(".workgallery").removeClass("d-none");
      $(".wInvest-solar").removeClass("d-none");
      $(".wUGei").removeClass("d-none");
      $(".about-Sec").removeClass("d-none");
      $(".benefit").removeClass("d-none");
      $(".footer-cta").removeClass("d-none");
		}, 
		duration: 500, 
		complete: function(){
			current_fs.hide();
			animating = false;
		}, 
		//this comes from the custom easing plugin
		easing: 'easeOutQuint'
	});
});

$(".submit").click(function(){
	return false;
})





  $(document).ready(function () {














  
var video1 = document.querySelector(".desktopvideos");
var mobilevideo1 = document.querySelector(".mobileVide");
video1.currentTime = 0;



$(window).on("resize", function (e) {
  checkscreenBanner();
});

checkscreenBanner();

function checkscreenBanner() {
  var newWindowWidth = $(window).width();
  if (newWindowWidth < 1024) {
    mobileVideo();
  } else {
    desktopVideo();
  }
}


function mobileVideo() {
  video1.pause();
  $(document).on('click', '.desktopThumbnail', function () {
    $(this).hide();
    mobilevideo1.play();
    console.log('video clicked!!!');
  });
  // Ended function
  mobilevideo1.addEventListener('ended', function () {
    $('.desktopThumbnail').show();
    mobilevideo1.pause();
    mobilevideo1.currentTime = 0;
  }, false);
}


function desktopVideo() {
  mobilevideo1.pause();
  $(".play-bt").hide();
  $(".pause-bt").show();
  if ($(".stop-bt").hasClass("active")) {
    video1.currentTime = 0;
  }
  $(".tv_video").prop('muted', true);
  $(".mute-bt").addClass("stop");
  video1.play();


  // Ended function
  video1.addEventListener('ended', function () {
     mobilevideo1.pause();
  $(".play-bt").hide();
  $(".pause-bt").show();
  if ($(".stop-bt").hasClass("active")) {
    video1.currentTime = 0;
  }
  $(".tv_video").prop('muted', true);
  $(".mute-bt").addClass("stop");
  video1.play();
  }, false);



  // Play video
  $(".play-bt").click(function () {
    $(".play-bt").hide();
    $(".pause-bt").show();
    var ban_video = document.querySelector(".tv_video");
    if ($(".stop-bt").hasClass("active")) {
      ban_video.currentTime = 0;
    }
    ban_video.play();
  });


}



// Volume video
$(".mute-bt").click(function (event) {
  console.log('mute clicked');
  // event.preventDefault();
  if ($(this).hasClass("stop")) {
    $(".tv_video").prop('muted', false);
    $(this).removeClass("stop");
  } else {
    $(".tv_video").prop('muted', true);
    $(this).addClass("stop");
  }
});
// Pause video
$(".pause-bt").click(function () {
  $(".play-bt").show();
  $(".pause-bt").hide();
  $(".pause-bt").addClass("active");
  $(".stop-bt").removeClass("active");
  var ban_video = document.querySelector(".tv_video");
  ban_video.pause();
});





});




	$.fn.jQuerySimpleCounter = function( options ) {
	    var settings = $.extend({
	        start:  0,
	        end:    100,
	        easing: 'swing',
	        duration: 400,
	        complete: ''
	    }, options );

	    var thisElement = $(this);

	    $({count: settings.start}).animate({count: settings.end}, {
			duration: settings.duration,
			easing: settings.easing,
			step: function() {
				var mathCount = Math.ceil(this.count);
				thisElement.text(mathCount);
			},
			complete: settings.complete
		});
	};


$('#number1').jQuerySimpleCounter({end: 12000,duration: 3000});
$('#number2').jQuerySimpleCounter({end: 11959,duration: 3000});
$('#number3').jQuerySimpleCounter({end: 7823,duration: 2000});
$('#number4').jQuerySimpleCounter({end: 9879,duration: 2500});



  	/* AUTHOR LINK */
     $('.about-me-img').hover(function(){
            $('.authorWindowWrapper').stop().fadeIn('fast').find('p').addClass('trans');
        }, function(){
            $('.authorWindowWrapper').stop().fadeOut('fast').find('p').removeClass('trans');
        });
  

$(document).ready(function(){
            $('.cm-btn.cm-btn-success').click(function(){
                $('.klaro').addClass('p-relative');
            });
            $('.cm-btn.cm-btn-danger.cn-decline').click(function(){
                $('.klaro').addClass('p-relative');
            });

 if (!$('.klaro').find('.cookie-notice').length) {
        $('.klaro').addClass('p-relative');
    }
        });
$(document).ready(function() {
    $(document).on('click', 'button.cm-btn.cm-btn-success.cm-btn-info.cm-btn-accept', function(){
        $('.klaro').addClass('p-relative');
    });
$(document).on('click', 'button.cm-btn.cm-btn-success.cm-btn-accept-all', function(){
        $('.klaro').addClass('p-relative');
    });
$(document).on('click', 'button.cm-btn.cm-btn-decline.cm-btn-danger.cn-decline', function(){
        $('.klaro').addClass('p-relative');
    });


});

$(document).ready(function(){
  $(".review-Sec-desktop .review-Sec-box").slice(0,4).show();
  $("#seeMore").click(function(e){
    e.preventDefault();
    $(".review-Sec-desktop .review-Sec-box:hidden").slice(0,4).fadeIn("slow");
          $("#seeMore").addClass("d-none");

    if($("review-Sec-desktop .review-Sec-box:hidden").length == 0){
      $("#seeMore").addClass("d-none");

      }
  });
  $(".gallery_desktop .col-md-6").slice(0,24).show();
  $("#seeMoreimg").click(function(e){
    e.preventDefault();
    $(".gallery_desktop .col-md-6:hidden").slice(0,6).fadeIn("slow");
    if($(".gallery_desktop .col-md-6:hidden").length == 0){
      $("#seeMoreimg").addClass("d-none");

      }
  });

})




