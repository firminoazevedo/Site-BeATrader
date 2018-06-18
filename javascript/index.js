

	function stickyNav (){
		$(window).scroll(function() {
  			if ($(document).scrollTop() > 100) {
    			$('nav').addClass('white');
  			} else {
    			$('nav').removeClass('white');
  		}
	});
	}
		