$(document).ready(function(){

 $("#extended-content").hide();

  $('#extend-btn').click(function(){
 	  var $buttontext = $(this);
	 	$buttontext.text($buttontext.text() == "I Would Like To Know Less" ? "I Would Like To Know More" : "I Would Like To Know Less");

  	$("#extended-content").toggle();

  });

  // Hide Header on on scroll down
  var didScroll;
  var lastScrollTop = 0;
  var delta = 5;
  var navbarHeight = $('nav').outerHeight();
  var headerHeight = $('header').outerHeight();

  $(window).scroll(function(event){
      didScroll = true;
  });

  setInterval(function() {
      if (didScroll) {
          hasScrolled();
          didScroll = false;
      }
  }, 250);

  function hasScrolled() {
      var st = $(this).scrollTop();

      // Make sure they scroll more than delta
      if(Math.abs(lastScrollTop - st) <= delta)
          return;
      if (st > lastScrollTop && st > navbarHeight){
          // Scroll Down
          $('nav').removeClass('nav-down').addClass('nav-up');
          $('.superheader').removeClass('super-fill').addClass('super-collapse');
      } else {
          // Scroll Up
          if(st + $(window).height() < $(document).height()) {
              $('nav').removeClass('nav-up').addClass('nav-down');
              $('.superheader').removeClass('super-collapse').addClass('super-fill');
          }
      }

    lastScrollTop = st;
  }



});
