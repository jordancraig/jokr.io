// Create user sign-in view
function UserSignIn(t, a) {
	this.a = a;
	this.t = t;

	this.create = function() {

		// Create EJS reference
		template = new EJS({url: 'jokr/templates/user-sign-in.ejs'}).render();

		// Render template
		$('body').html(template);


		// Listen for click events on login button
		$('#login').on("click", FireEvent);

		// When login button is clicked, fire off event to alert front-end logic.
		function FireEvent() {
			$.event.trigger({
				type: "loginSubmitted",
			});
		}
	}

	// Form Helpers
	// Check if password field is empty
	this.isPasswordEmpty = function () {
		if ($('#password').val().length == 0 ) { return true; } 
	}

	//Check if password length is less than 'X' value
	this.isLessThanX = function(x) {
		if ($('#password').val().length < x ) { return true; }
	}

}

// Create custom alert
function Alert(opts) {
	alert(opts);
}