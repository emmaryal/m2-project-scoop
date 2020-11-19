var express = require("express");
var siteRouter = express.Router();

// Your routes

/* GET home page. */
siteRouter.get('/', function(req, res, next) {
    res.render('Home', { title: 'SCOOP' });
  });

/* GET search results page */


module.exports = siteRouter;
