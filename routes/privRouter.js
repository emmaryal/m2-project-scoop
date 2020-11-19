var express = require("express");
var privRouter = express.Router();
const isLoggedIn = require("./../utils/isLoggedIn");
const User = require("./../models/User.model");

// Your routes

// GET /tips - render tips page
privRouter.get("searchTips", isLoggedIn, (req, res, next) =>{
})

// CREATE TIP 
privRouter.get("/create", isLoggedIn, (req, res, next) => {   
  });
  

  // DELETE /tips - delete or update a tip
  privRouter.get("/update", isLoggedIn, (req, res, next) => {   
  });

module.exports = privRouter;
