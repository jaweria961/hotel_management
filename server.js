const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const dbConfig = require("./db");

const roomsRoute = require("./routes/roomRoute");
const usersRoute = require("./routes/userRoute");
// console.log(roomsRoute);
// express.json is used to get the parameters from body, Like, get the id
// Middleware
app.use(bodyParser.json());
app.use("/api/rooms", roomsRoute); // Mount room routes
app.use("/api/users", usersRoute);
const port = process.env.PORT || 5000;

app.listen(port, () =>
  console.log(`server running on port ${port} using nodemon`)
);
