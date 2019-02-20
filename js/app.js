$(document).foundation()

$('.button').on('click',function(){

	// check for username
	if( $('input[type=text]').val() ){
		// display the name that was input
		$('.username').text($('input[type=text]').val());
	} else {
		// display a default name
		$('.username').text('Captain Anonymous');
	}

	// check for email
	if( $('input[type=email]').val() ){
		// display the email address that was input
		$('.useremail').text($('input[type=email]').val());
	} else {
		// display default message
		$('.useremail').text('once you provide us with a working email');
	}
	
});
