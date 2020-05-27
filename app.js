const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const app = express();
const fs = require('fs');

app.use(express.static("public"));

app.use(bodyParser.urlencoded({
  extended: true
}));

app.get("/", function(req, res) {
  res.render("index.ejs");
});

app.get("/travel", function(req, res) {
  fs.readdir('./public/images', (error, files) => {
    var imgFiles = [];
    files.forEach(file => {
      var imgpath = "images/" + file;
      imgFiles.push(imgpath);
    })
  res.render('travel.ejs', {imgFiles: imgFiles});
  })
});

app.listen(3000, function(){
  console.log("Server is running on port 3000.");
});
