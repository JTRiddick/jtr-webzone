$(document).ready(function(){

 $("#extended-content").hide();

  $('#extend-btn').click(function(){
 	  var $buttontext = $(this);
	 	$buttontext.text($buttontext.text() == "I Would Like To Know Less" ? "I Would Like To Know More" : "I Would Like To Know Less");

  	$("#extended-content").toggle();

  });



});
