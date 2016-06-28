/**
 * Created by WWCD on 28/6/16.
 */

//load express
var express = require("express");

var app = express();

var dValue = "/Users/WWCD/WebstormProjects/fullstack/day02" + "/public";

//set our port
app.use(function(req, res, next){
    console.info("incoming request: %s", req.originalUrl);
    next();
})

app.use(express.static(dValue));
app.use(express.static("/Users/WWCD/WebstormProjects/fullstack/day02" + "/bower_components"));

//Middleware is a function that handles/ process request
app.use(function(req, res){
    console.info("into redirect");
    var originalURL = req.originalUrl;
    console.info(originalURL);
    console.info("File not found in public folder!");
    res.redirect("/error.html");
});

app.set("port", process.argv[2] || 3000);

app.listen(app.get("port"), function(){
    console.info("application started on port %d", app.get("port"));
})