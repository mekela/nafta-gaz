$(document).ready(function() {
	//fancybox
	$('.fancybox').fancybox({
		helpers: {
			overlay: {
				locked: false
			}
		}
	});
	
	//show menu
	$( ".menu_btn" ).click(function() {
	  $( this ).next().slideToggle( "slow");
	});

	//scroll anchor
    $('.menu li a').on('click',function(){
		$('html,body').animate({scrollTop:$($(this).attr('href')).offset().top+0},800);
		return false;
	});


	//bxslider
	$('.main_slider ul').bxSlider();
	$('.facts ul').bxSlider();

	//slick
	$('.manager_slider').slick({
	  dots: true,
	  infinite: true,
	  speed: 300,
	  slidesToShow: 5,
	  slidesToScroll: 2,
	  responsive: [
	    {
	      breakpoint: 1024,
	      settings: {
	        slidesToShow: 3,
	        slidesToScroll: 3,
	        infinite: true,
	        dots: true
	      }
	    },
	    {
	      breakpoint: 600,
	      settings: {
	        slidesToShow: 2,
	        slidesToScroll: 2
	      }
	    },
	    {
	      breakpoint: 480,
	      settings: {
	        slidesToShow: 1,
	        slidesToScroll: 1
	      }
	    }
	    // You can unslick at a given breakpoint now by adding:
	    // settings: "unslick"
	    // instead of a settings object
	  ]
	});
});