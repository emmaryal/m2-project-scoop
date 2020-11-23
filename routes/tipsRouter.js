var express = require("express");
var tipsRouter = express.Router();

const createTip = require("../services/tip/createTip");

/** 
 * Create a tip
 * Send tip detail

tipsRouter.post("/", async (req, res) => {
    const tipData =  req.body;
    const newTip = await createTip(tipData);
  
    res.render("TipDetail", newTip);
  })
 

  // POST	/private/createtips
tipsRouter.post("/createtip", (req, res, next) => {
    // Destructure the values coming from the POST form
    const { title, description, content} = req.body;
    Tips.create({ title, description, content})
      .then((tip) => {
        res.redirect("/tipslist");
      })
      .catch((err) => console.log(err));
  }); */