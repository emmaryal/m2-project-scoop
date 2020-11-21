var express = require("express");
var privRouter = express.Router();
const isLoggedIn = require("./../utils/isLoggedIn");
const User = require("./../models/User.model");
const Tips = require("../models/Tips.models");

// Your routes

// GET /tips - render tips page
privRouter.get("/mytips",/* isLoggedIn, */(req, res, next) =>{
res.render("MyTips")
});

// CREATE TIP render the form
privRouter.get("/createtip", /* isLoggedIn, */ (req, res, next) => { 
  res.render('CreateTip');
  });

//POST recieves the data from create tip form
privRouter.post("/createtip", (req, res, next )=> {
  const {title, description, content} = req.body;
  if (title === ''|| description === '' || content === ''){
    const props = {errorMessage: 'Please fill in all fields '}
    res.render('CreateTip', props);
    return;
  }
  //If all are provided - create new tip in the database
  Tip.create({title:title, description:description, content:content})
    .then((data) => {
      //when tip is created redirect to tip detail
      res.redirect('/TipDetail')
    })
    .catch((err) => console.log(err));
});
  

  // DELETE /tips - delete or update a tip
  privRouter.get("/update", /* isLoggedIn, */(req, res, next) => {   
    res.render("UpdateTip")  
  });

module.exports = privRouter;
