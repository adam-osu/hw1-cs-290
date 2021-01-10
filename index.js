var express = require("express");

var app = express();
var PORT = process.argv[2];

app.listen(function () {
  console.log("Server is listening on port " + PORT);
});
