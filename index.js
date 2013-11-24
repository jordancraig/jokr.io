var fs = require("fs");
var host = "127.0.0.1";
var port = 1337;
var express = require("express");

var app = express();
app.use(app.router); //use both root and other routes below
app.use(express.static(__dirname)); //use static files in ROOT/public folder
app.set('views', __dirname);
app.engine('html', require('ejs').renderFile);

app.get("/", function(req, res){ //root dir
    res.render('index.ejs');
});

app.listen(port, host);