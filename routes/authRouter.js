var express = require("express");
var authRouter = express.Router();

const bcrypt = require("bcrypt");
const User = require("./../models/User.model");
const zxcvbn = require("zxcvbn");

const isLoggedIn = require("./../utils/isLoggedIn");
const saltRounds = 5;


// Your routes

// GET login - render login page
authRouter.get("/login", (req, res, next) => {
    res.render("Login");
  });

  // POST login

authRouter.post("/login", (req, res, next) => {
  const { username, password } = req.body;

  if (username === "" || password === "") {
    const props = { errorMessage: "Indicate username and password" };

    res.render("Login", props);
    return;
  }

  User.findOne({ username }).then((user) => {
    if (!user) {
      // If the user by the given `username` was not found, send error message
      const props = { errorMessage: "The username doesn't exist" };

      res.render("Login", props);
      return;
    }

    const passwordCorrect = bcrypt.compareSync(password, user.password);

    if (passwordCorrect) {
      // Create the session - which also triggers the creation of the cookie
      req.session.currentUser = user;

      res.redirect("/");
    } else {
      res.render("Login", { errorMessage: "Incorrect password" });
    }
  });
});










// GET signup - render signup page
authRouter.get("/signup", (req, res, next) => {
  res.render("Signup");
});

// POST signup
authRouter.post("/signup", (req, res, next) => {
  
});

module.exports = authRouter;
