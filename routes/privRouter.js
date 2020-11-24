var express = require("express");
var privRouter = express.Router();
const isLoggedIn = require("./../utils/isLoggedIn");
const User = require("./../models/User.model");
const Tips = require("./../models/Tips.models");

// Your routes

// GET /tips - render tips page
privRouter.get("/myprofile", isLoggedIn, (req, res, next) => {
  const userid = req.session.currentUser._id;
  console.log("userid = ", userid);
  User.findById(userid)
  .populate("tips")
    .then((user) => {
      const props = { user: user };
      console.log("props user object: ", user);
      res.render("MyProfile", props);
    })
    .catch((err) => console.log(err));
});

// CREATE TIP render the form
privRouter.get(
  "/createtip",
  /* isLoggedIn, */ (req, res, next) => {
    res.render("CreateTip");
  }
);

//POST recieves the data from create tip form
privRouter.post("/createtip", (req, res, next) => {
  // Destructure the values coming from the POST form
  const { title, description, text } = req.body;
  const userId = req.session.currentUser._id;

  Tips.create({ title, description, text, userId: userId })
    .then((tip) => {
      //      res.redirect("./../private/mytipslist");
      //      //res.redirect("/alltips");
      //    })
      //    .catch((err) => console.log(err));
      //});
      //all this below is from authorsrouter
      const pr = User.findByIdAndUpdate(
        userId,
        { $push: { createdtips: tip._id } },
        { new: true }
      );
      return pr;
    })
    .then((updatedUser) => {
      res.redirect(`/private/myprofile/`);
    })
    .catch((error) => console.log(error));
});



privRouter.get(`/mytipslist`, isLoggedIn, (req, res, next) => {
  const { userid } = req.query;
  User.findById(userid)
  .populate("tips") // this is the new line to populate
  .then((oneUser) => {
  const props = { oneUser: oneUser };
  
  console.log("props my tips list", props)
 res.render("MyTipsList", props);
 })
 .catch((err) => console.log(err));
});


//GET  /update tip -render update tip form
//res.redirect(`/private/mytipslist/${updatedUser._id}`);
privRouter.get("/tips/edit/:tipid", (req, res, next) => {
  // Get the tipid passed via the link.
  // Example:    <a href="/tips/edit?tipid=123">
  const { tipid } = req.query;

  // Find the specific tip by `_id`
  Tips.findOne({ _id: tipid })
    .then((oneTip) => {
      const props = { oneTip: oneTip };
      res.render("UpdateTip", props);
    })
    .catch((err) => console.log(err));
});

// POST  /tips/update
privRouter.post("/update", (req, res, next) => {
  const { tipid } = req.query;
  const { title, description, text } = req.body;

  Tips.findByIdAndUpdate(
    tipid,
    { title, description, text},
    { new: true }
    //{new : true} is used to get the updated document version returned after the update
  )
    .then((updatedTip) => {
      console.log("tip document after the update", updatedTip);
      res.redirect("./../private/mytiplist");
    })
    .catch((error) => console.error(error));
});

// DELETE /tips - delete or update a tip
privRouter.get("/update", isLoggedIn, (req, res, next) => {
  const userid = req.session.currentUser._id;
  User.findById(userid)
    .then((user) => {
      const props = { user: user };
      res.render("UpdateTip", props);
    })
    .catch((err) => console.log(err));
});

module.exports = privRouter;
