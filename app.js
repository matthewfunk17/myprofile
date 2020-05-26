const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const app = express();

app.use(express.static("public"));

app.use(bodyParser.urlencoded({
  extended: true
}));

app.get("/", function(req, res) {
  res.render("index.ejs");
});

app.listen(3000, function(){
  console.log("Server is running on port 3000.");
});
