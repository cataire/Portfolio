const express = require("express");
const path = require('path');
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const db = require("./models/message.js");


const port = process.env.PORT || 3000;
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/portfoliodb";

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
// Use express.static to serve the public folder as a static directory
app.use(express.static("public"));

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname + '/portfolio.html'));
})

app.get("/contact", function(req, res) {
  res.sendFile(path.join(__dirname + '/contact.html'));
})

app.post("/message", function (req, res) {
  db.create(req.body)
    .then(function(dbMessage) {
      console.log(dbMessage);
      res.json(dbMessage);

    })
    .catch(function(err){
      res.json(err);
    })

})

mongoose.Promise = Promise;
mongoose.connect(MONGODB_URI).then(() => {
  console.log('Mongo Connected');
  app.listen(port, function() {
    console.log("App running on port " + port);
  });
}, (err) => {
  if(err) {
    console.log(err);
  }
});
