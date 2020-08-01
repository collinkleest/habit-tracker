/* eslint-disable */

// imports
const cors = require("cors");
const express = require("express");
const helmet = require("helmet");
const morgan = require("morgan");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
require("dotenv").config();
const app = express();

// middleware
app.use(cors());
app.use(helmet.xssFilter());
app.use(helmet.frameguard());
app.use(morgan("combined"));
app.use(express.json());

// mongo
mongoose.connect(
  `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_SERVER}`,
  { useNewUrlParser: true, useUnifiedTopology: true }
);
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  console.log("successfully connected");
});

//user stuff
const userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  password: String,
});

const User = new mongoose.model("User", userSchema);

// check if user exists
app.get("/api/check-user", (req, res) => {
  console.log("Checking for email: " + req.query.email);
  User.exists({ email: req.query.email }).then((exists) => {
    if (exists) {
      res.send(true);
    } else {
      res.send(false);
    }
  });
});

app.post("/api/create-user", (req, res) => {
  const saltRounds = 10;
  let newUser = new User({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, saltRounds),
  });
  newUser.save((err, success) => {
    if (err) {
      return console.error(err);
    }
    res.send("User Created: " + success);
    console.log("User Created: " + success);
  });
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(3000, () => console.log(`Example app listening on port 3000!`));

process.on("SIGTERM", () => {
  app.close(() => {
    console.log("Process terminated");
    process.exit(1);
  });
});
