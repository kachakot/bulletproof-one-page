$(function () {
    new WOW().init();
    $(document).ready(function() {
	    var NavY = $('.sec__box-sticky').offset().top;
	     
	    var stickyNav = function(){
	    var ScrollY = $(window).scrollTop();
	          
	    if (ScrollY > NavY) { 
	        $('.sec__box-sticky').addClass('sticky');
	    } else {
	        $('.sec__box-sticky').removeClass('sticky'); 
	    }
	    };
	     
	    stickyNav();
	     
	    $(window).scroll(function() {
	        stickyNav();
	    });
    });
});


    
    