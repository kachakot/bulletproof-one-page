$(function () {
    new WOW().init();
    $(document).ready(function() {
	    var NavY = $('.sec--head').offset().top;
	     
	    var stickyNav = function(){
	    var ScrollY = $(window).scrollTop();
	          
	    if (ScrollY > NavY) { 
	        $('.sec--head').addClass('sticky');
		    } else {
		        $('.sec--head').removeClass('sticky'); 
		    }
	    };
	     
	    stickyNav();
	     
	    $(window).scroll(function() {
	        stickyNav();
	    });
    });
});


    
    