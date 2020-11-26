var express = require("express");
var siteRouter = express.Router();
var Tips = require("./../models/Tips.models");


/* GET home page. */
siteRouter.get("/", function (req, res, next) {
  res.render("Home", { title: "SCOOP" });});

/* GET search results page */
siteRouter.get("/alltips", (req, res, next) => {
  Tips.find()

    .then((allTipsFromDB) => {
      const props = { tips: allTipsFromDB };
      res.render("AllTips", props);
      console.log(Tips);
    })
    .catch((err) => console.log(err));
});

/* GET search details page */
siteRouter.get("/tipdetail", (req, res, next) => {
  const { tipid } = req.query;

  // Find the specific tip by `_id`
  Tips.findOne({ _id: tipid })
    .then((oneTip) => {
      const props = { oneTip: oneTip };
      res.render("TipDetail", props);
    })
    .catch((err) => console.log(err));
});

module.exports = siteRouter;
