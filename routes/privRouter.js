var express = require("express");
var privRouter = express.Router();
const isLoggedIn = require("./../utils/isLoggedIn");
const User = require("./../models/User.model");

// Your routes

// GET /tips - render tips page
privRouter.get("/mytips",/* isLoggedIn, */(req, res, next) =>{
res.render("MyTips")
});

// CREATE TIP 
privRouter.get("/create",/* isLoggedIn, */(req, res, next) => {   
res.render("CreateTip")  
});
  

  // DELETE /tips - delete or update a tip
  privRouter.get("/update", /* isLoggedIn, */(req, res, next) => {   
    res.render("UpdateTip")  
  });

module.exports = privRouter;
