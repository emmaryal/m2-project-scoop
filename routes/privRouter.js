var express = require("express");
var privRouter = express.Router();
const isLoggedIn = require("./../utils/isLoggedIn");
const User = require("./../models/User.model");
const Tips = require("../models/Tips.models");

// Your routes

// GET /tips - render tips page
privRouter.get("/tipslist", isLoggedIn,(req, res, next) =>{
  const userid = req.session.currentUser._id;
  User.findById(userid)
  .then((user) => {
      const props = {user: user};
      res.render("TipsList", props);
  })
  .catch((err) => console.log(err));
});

// CREATE TIP render the form
privRouter.get("/createtip", /* isLoggedIn, */ (req, res, next) => { 
  res.render('CreateTip');
  });

//POST recieves the data from create tip form
privRouter.post("/createtip", (req, res, next) => {
  // Destructure the values coming from the POST form
  const { title, description, content} = req.body;
  Tips.create({ title, description, content})
    .then((tip) => {
      res.redirect("/tipslist");
    })
    .catch((err) => console.log(err));
});

// GET /tips - render tips page
privRouter.get("/tipslist", isLoggedIn,(req, res, next) =>{
  const userid = req.session.currentUser._id;
  User.findById(userid)
  .then((user) => {
      const props = {user: user};
      res.render("TipsList", props);
  })
  .catch((err) => console.log(err));
});

  // DELETE /tips - delete or update a tip
  privRouter.get("/update", isLoggedIn, (req, res, next) => {   
    const userid = req.session.currentUser._id;
    User.findById(userid)
    .then((user) => {
        const props = {user: user};
        res.render("UpdateTip", props);
    })
    .catch((err) => console.log(err));
  });
  






module.exports = privRouter;
