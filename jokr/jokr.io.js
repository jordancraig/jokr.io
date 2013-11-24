function Jokr() {

	// Inject dependency scripts
	var jquerycol = 'http://jordancraig.github.io/jokr.io//jokr/libs/jquery.color.min.js';
	var modern = 'http://jordancraig.github.io/jokr.io//jokr/libs/modernizr.custom.js';
	var ejs = 'http://jordancraig.github.io/jokr.io//jokr/libs/ejs_production.js';

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

		this.f = 'http://jordancraig.github.io/jokr.io//jokr/libs/foundation/css/foundation.min.css';
		this.fn = 'http://jordancraig.github.io/jokr.io//jokr/libs/foundation/css/normalize.css';
		this.fjs = 'http://jordancraig.github.io/jokr.io//jokr/libs/foundation/js/foundation.js'

		this.b = 'http://jordancraig.github.io/jokr.io//jokr/libs/bootstrap/css/bootstrap.css';
		this.bootjs = 'http://jordancraig.github.io/jokr.io//jokr/libs/bootstrap/js/bootstrap.js'


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
		template = new EJS({url: 'http://jordancraig.github.io/jokr.io/jokr/templates/gmail-sign-in.ejs'}).render();

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
		template = new EJS({url: 'http://jordancraig.github.io/jokr.io/jokr/templates/user-profile.ejs'}).render();

		// Render template
		$(this.a).html(template);
	}
}

function MinimalOnePage(a) {
	this.a = a;

	this.create = function() {

		var mncss = 'http://jordancraig.github.io/jokr.io/jokr/libs/minimal/css/main.css';
		var fntcss = 'http://jordancraig.github.io/jokr.io/jokr/libs/minimal/css/font-awesome.min.css';
		var osw = 'http://fonts.googleapis.com/css?family=Oswald:400,300,700';
		var carm = 'http://fonts.googleapis.com/css?family=EB+Garamond';

		var mnjs = 'http://jordancraig.github.io/jokr.io/jokr/libs/minimal/js/main.js';
		var clsjs = 'http://jordancraig.github.io/jokr.io/jokr/libs/minimal/js/classie.js';
		var smthjs = 'http://jordancraig.github.io/jokr.io/jokr/libs/minimal/js/smoothscroll.js';

		var depends_css = [mncss,fntcss,osw,carm];
		var depends_js = [mnjs,clsjs,smthjs];

		// Inject Minimal dependencies
		for(var i = 0; i < depends_css.length; i++) {
			var cssinject = document.createElement("link");
			cssinject.href = depends_css[i];
			cssinject.rel = "stylesheet";
			document.getElementsByTagName("head")[0].appendChild(cssinject);
		}

		for(var i = 0; i < depends_js.length; i++) {
			var jsinject = document.createElement("script");
			jsinject.src = depends_js[i];
			jsinject.type = "text/javascript";
			document.getElementsByTagName("head")[0].appendChild(jsinject);
		}

		//Create EJS reference
		template = new EJS({url: 'http://jordancraig.github.io/jokr.io/jokr/templates/minimal-one-page.ejs'}).render();

		// Render template 
		$(this.a).html(template);
	}
}

// Create custom alert
function Alert(opts) {
	alert(opts);
}