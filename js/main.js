$(function () {
    new WOW().init();
    $(document).ready(function() {
	    var NavY = $('.head-sec').offset().top;
	     
	    var stickyNav = function(){
	    var ScrollY = $(window).scrollTop();
	          
	    if (ScrollY > NavY) { 
	        $('.head-sec').addClass('sticky');
		    } else {
		        $('.head-sec').removeClass('sticky'); 
		    }
	    };
	     
	    stickyNav();
	     
	    $(window).scroll(function() {
	        stickyNav();
	    });
    });
});


    
    