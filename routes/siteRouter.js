var express = require("express");
var siteRouter = express.Router();

// Your routes

/* GET home page. */
siteRouter.get("/", function (req, res, next) {
  res.render("Home", { title: "SCOOP" });
});

/* GET search results page */

// GET ERROR PAGES
siteRouter.get("/err404", (req, res, next) => {
  res.sendFile(__dirname + "./../public/static/error404.html");
});

module.exports = siteRouter;
