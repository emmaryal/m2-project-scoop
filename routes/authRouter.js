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
  const { email, password } = req.body;
  if (email === "" || password === "") {
    const props = { errorMessage: "Indicate username and password" };
    res.render("Login", props);
    return;
  }
  User.findOne({ email }).then((email) => {
    if (!email) {
      // If the user by the given `username` was not found, send error message
      const props = { errorMessage: "The username doesn't exist" };
      res.render("Login", props);
      return;
    }
    const passwordCorrect = bcrypt.compareSync(password, email.password);
    if (passwordCorrect) {
      // Create the session - which also triggers the creation of the cookie
      req.session.currentUser = email;
      console.log("current user email", { email: email });

      res.redirect("./../private/createtip");
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
  const { email, password, repeatpassword } = req.body;
  if (email === "" || password === "") {
    const props = { errorMessage: "Enter email and password" };
    res.render("Signup", props);
    return;
  } else if (password !== repeatpassword) {
    const props = { errorMessage: "Passwords don't match" };
    res.render("Signup", props);
    return;
  }
  User.findOne({ email: email })
    .then((user) => {
      if (user) {
        const props = { errorMessage: "The username already exists" };
        res.render("Signup", props);
        return;
      }

      if (zxcvbn(password).score < 3) {
        const suggestions = zxcvbn(password).feedback.suggestions;
        console.log("suggestions", suggestions);
        const props = { errorMessage: suggestions[0] };
        res.render("Signup", props);
        return;
      }

      const salt = bcrypt.genSaltSync(saltRounds);
      const hashedPassword = bcrypt.hashSync(password, salt);
      User.create({ email: email, password: hashedPassword })
        .then((createdUser) => {
          console.log("created user :", createdUser);
          req.session.currentUser = email;

          res.redirect("./../private/createtip");
        })
        .catch((err) => console.log(err));
    })
    .catch((err) => console.log(err));
});

authRouter.get("/logout", isLoggedIn, (req, res, next) => {
  req.session.destroy((err) => {
    if (err) {
      res.render("Error");
    } else {
      res.redirect("/auth/login");
    }
  });
});

module.exports = authRouter;
