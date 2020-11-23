var express = require("express");
var tipsRouter = express.Router();

const createTip = require("../services/tip/createTip");

/** 
 * Create a tip
 * Send tip detail
*/
tipsRouter.post("/", async (req, res) => {
    const tipData =  req.body;
    const newTip = await createTip(tipData);
  
    res.render("TipDetail", newTip);
  })