var express = require("express");
var siteRouter = express.Router();
var Tips = require("./../models/Tips.models");
//const findTipById = require("../services/tip/findTipById");

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
      console.log(Tips);
    })
    .catch((err) => console.log(err));
});




// GET ERROR PAGES
//siteRouter.get("/err404", (req, res, next) => {
//  res.sendFile(__dirname + "./../public/static/error404.html");
//});
/*Finds a tip by id and renders tip detail
  example: /tip/5fbad7569d1dde1fdffab6bc

siteRouter.get("/:id", async (req, res) => {
  const tipId = req.params.id;
  const tip = await findTipById(tipId);

  res.render("TipDetail", tip);
}); */

module.exports = siteRouter;
