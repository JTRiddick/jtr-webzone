$(document).ready(function(){

 $("#quincy-content").hide();
   // jQuery methods go here...
	 $('#quincy').click(function(){

	 	var $buttontext = $(this);
 	 	$buttontext.text($buttontext.text() == "I Would Like To Know Less" ? "I Would Like To Know More" : "I Would Like To Know Less");

	  	$("#quincy-content").toggle();



	 });



}); 