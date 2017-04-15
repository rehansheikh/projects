//include express in your app.
var express = require('express');

//Create your express app variable.
var app = express();

//Create your path for router file.
var routers = require("./routes/routers.js");

//Set the base endpoint for your api/project.
app.use("/projects", routers);

//Set your server point.
app.listen(1804);