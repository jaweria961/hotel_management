// Create mongo db connection

// initialize mongodb
const mongoose = require("mongoose");

var mongoURL =
  "mongodb+srv://jiamalik861:uettaxila786@cluster0.hr1ircw.mongodb.net/hotel-reservation";

mongoose.connect(mongoURL, { useUnifiedTopology: true, useNewUrlParser: true });

var connection = mongoose.connection;

connection.on("error", () => {
  console.log("Mongo DB Connection failed");
});

connection.on("connected", () => {
  console.log("Mongo DB connection successful");
});
module.exports = mongoose;
