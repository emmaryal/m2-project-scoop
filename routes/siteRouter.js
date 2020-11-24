var express = require("express");
var siteRouter = express.Router();
var Tips = require("./../models/Tips.models");
const findTipById = require("../services/tip/findTipById");

// Your routes

/* GET home page. */
siteRouter.get("/", function (req, res, next) {
  res.render("Home", { title: "SCOOP" });
});

/* GET search results page */
siteRouter.get("/alltips", (req, res, next) => {
  //res.render('AllTips');

  Tips.find()

    .then((allTipsFromDB) => {
      const props = { tips: allTipsFromDB };
      res.render("AllTips", props);
      console.log(Tips)
    })
    .catch((err) => console.log(err));
});


module.exports = siteRouter;
