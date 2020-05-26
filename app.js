const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(express.static("public"));

app.use(bodyParser.urlencoded({
  extended: true
}));

app.get("/index.html", function(req, res) {
  res.sendFile(__dirname + "/views/index.html");
});

app.listen(3000, function(){
  console.log("Server is running on port 3000.");
});
