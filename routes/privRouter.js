var express = require("express");
var privRouter = express.Router();
const isLoggedIn = require("./../utils/isLoggedIn");
const User = require("./../models/User.model");
const Tips = require("./../models/Tips.models");

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

//GET  /update tip -render update tip form
privRouter.get("/tips/edit", (req, res, next) => {
  // Get the tipid passed via the link.
  // Example:    <a href="/tips/edit?tipid=123">
  const {tipid} = req.query;

// Find the specific tip by `_id`
  Tips.findOne({ _id: tipid })
    .then((oneTip) => {
      const props = {oneTip: oneTip};
      res.render("UpdateTip", props);
    })
    .catch((err) => console.log(err));
});

  // POST  /tips/update
privRouter.post("/update", (req, res, next) => {
  const { tipid } = req.query;
  const { title, description, content } = req.body;

  Tips.findByIdAndUpdate(
    tipkid,
    { title, description, content },
    { new: true }
    //{new : true} is used to get the updated document version returned after the update
  )
    .then((updatedTip) => {
      console.log("tip document after the update", updatedTip);
      res.redirect("/tiplist");
    })
    .catch((error) => console.error(error));
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
