var express = require("express");
var authRouter = express.Router();

const bcrypt = require("bcrypt");
const User = require("./../models/User.model");
//const zxcvbn = require("zxcvbn");

const isLoggedIn = require("./../utils/isLoggedIn");
const saltRounds = 5;


// Your routes

// GET login - render login page
authRouter.get("/login", (req, res, next) => {
    res.render("Login");
  });

  // POST login
authRouter.post("/login", (req, res, next) => {
})

// GET signup - render signup page
authRouter.get("/signup", (req, res, next) => {
  res.render("Signup");
});

// POST signup
authRouter.post("/signup", (req, res, next) => {
  
});

module.exports = authRouter;
