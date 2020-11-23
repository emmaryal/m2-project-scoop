var express = require("express");
var privRouter = express.Router();
const isLoggedIn = require("./../utils/isLoggedIn");
const User = require("./../models/User.model");

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

// CREATE TIP 
privRouter.get("/create",isLoggedIn,(req, res, next) => {   
  const userid = req.session.currentUser._id;
  User.findById(userid)
  .then((user) => {
      const props = {user: user};
      res.render("CreateTip", props);
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
