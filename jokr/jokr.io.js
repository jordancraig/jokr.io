function UserSignIn(a, t) {
	this.a = a;
	this.t = t;

	this.create = function() {

		var f = document.createElement("form")

		f.setAttribute('method', 'post');
		f.setAttribute('action', this.a);

		
		var h = document.createElement("h1");
		h.innerHTML = this.t;
		var hdiv = document.createElement("div");
		hdiv.appendChild(h);

		var i = document.createElement("input");
		i.type = "text";
		i.setAttribute('placeholder', 'Username');
		i.id = "username";
		var idiv = document.createElement("div");
		idiv.appendChild(i);

		var p = document.createElement("input");
		p.type = "password";
		p.setAttribute('placeholder', 'Password');
		p.id = "password";
		var pdiv = document.createElement("div");
		pdiv.appendChild(p);

		var s = document.createElement("input");
		s.type = "button";
		s.id = 'login';
		s.value = "Log in";

		var l = document.createElement("a");
		l.setAttribute('href', '#');
		l.innerHTML = "Lost your password?"

		var r = document.createElement("a");
		r.setAttribute('href', '#');
		r.innerHTML = "Register"

		var sdiv = document.createElement("div");
		sdiv.appendChild(s);
		sdiv.appendChild(l);
		sdiv.appendChild(r);

		f.appendChild(hdiv);
		f.appendChild(idiv);
		f.appendChild(pdiv);
		f.appendChild(sdiv);

		$('#content').append(f);

		$('#login').on("click", FireEvent);

		function FireEvent() {
			$.event.trigger({
				type: "loginSubmitted",
			});
		}
	}

	this.isPasswordEmpty = function () {
		if ($('#password').val().length == 0 ) { return true; } 
	}

	this.isLessThanX = function(x) {
		if ($('#password').val().length < x ) { return true; }
	}

}

function Alert(opts) {
	alert(opts);
}