var express = require("express");
var bodyParser = require("body-parser");
var cors = require("cors");
var app = express();

var middleware = require("./controllers/middleware");
var mainCtrl = require("./controllers/mainCtrl");


app.use(bodyParser.json(), cors(), middleware.addHeaders);

app.get("/name", mainCtrl.getName);
app.get("/location", mainCtrl.getLocation);
app.get("/occupations", mainCtrl.getOccupations);
app.get("/occupations/latest", mainCtrl.getLatestOcc);
app.get("/hobbies", mainCtrl.getHobbies);
app.get("/hobbies/:type", mainCtrl.getTypeHobby);



var port = 9009;
app.listen(port, function(){
	console.log("listening on port: ", port);
});