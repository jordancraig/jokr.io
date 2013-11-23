function Jokr() {

	// Inject dependency scripts
	var jquerycol = '/jokr/libs/jquery.color.min.js';
	var modern = '/jokr/libs/modernizr.custom.js';
	var ejs = '/jokr/libs/ejs_production.js';

	var dependencies = [jquerycol,modern];

	for (var i = 0; i < dependencies.length; i++) {
		var js = document.createElement("script");
		js.src = dependencies[i];
		js.type = 'text/javascript';
		document.getElementsByTagName("head")[0].appendChild(js);
	}

	var js = document.createElement("script");
	js.src = ejs;
	js.type = 'text/javascript';
	$("head").prepend(js);

	// Inject chosen framework CSS.
	this.play = function(sw) {

		this.f = '/jokr/libs/foundation/css/foundation.min.css';
		this.fn = '/jokr/libs/foundation/css/normalize.css';
		this.fjs = '/jokr/libs/foundation/js/foundation.js'

		this.b = '/jokr/libs/bootstrap/css/bootstrap.css';
		this.bootjs = '/jokr/libs/bootstrap/js/bootstrap.js'


		if(sw == 'foundation') {

			// Use Foundation
			var cssinject = document.createElement("link");
			cssinject.href = this.f;
			cssinject.rel = "stylesheet";
			document.getElementsByTagName("head")[0].appendChild(cssinject);

			var jsinject = document.createElement("script");
			jsinject.src = this.fjs;
			jsinject.type = "text/javascript";
			document.getElementsByTagName("head")[0].appendChild(jsinject);

		} else if (sw == 'bootstrap') {

			//Use Bootstrap
			var cssinject = document.createElement("link");
			cssinject.href = this.b;
			cssinject.rel = "stylesheet";
			document.getElementsByTagName("head")[0].appendChild(cssinject);

			
			var jsinject = document.createElement("script");
			jsinject.src = this.bootjs;
			jsinject.type = "text/javascript";
			document.getElementsByTagName("head")[0].appendChild(jsinject);

		}
	}

}


// Create user sign-in view
function GmailSignIn(a) {
	this.a = a;

	this.create = function() {

		// Create EJS reference
		template = new EJS({url: 'jokr/templates/gmail-sign-in.ejs'}).render();

		// Render template
		$(this.a).html(template);


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

// Create user sign-in view
function UserProfile(a) {
	this.a = a;

	this.create = function() {

		// Create EJS reference
		template = new EJS({url: 'jokr/templates/user-profile.ejs'}).render();

		// Render template
		$(this.a).html(template);
	}
}

// Create custom alert
function Alert(opts) {
	alert(opts);
}