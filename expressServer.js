const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

//set up express app
const app = express();

app.use(express.static("./build"));

//connect to mongodb
mongoose.connect(
  "mongodb://localhost:27017/blogpostdb",
  { useNewUrlParser: true }
);
mongoose.Promise = Promise;

app.use(bodyParser.json());

//initialize routes


app.use("/api", require("./routes/api"));

//error handling middleware

app.use(function(err, req, res, next) {
  console.log(err);
  res.status(422).send({ error: err.message });
});

app.listen(4000, function() {
  console.log("server started at 4000");
});
