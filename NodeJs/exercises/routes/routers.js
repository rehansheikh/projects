var express = require("express");

var routers = express.Router();

routers.use("/fibonacci", require("./fibo/index"));

routers.use("/bubble", require("./bubble/index"));

module.exports = routers;