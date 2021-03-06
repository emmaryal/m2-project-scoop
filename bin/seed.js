require("dotenv").config();

const mongoose = require("mongoose");
const User = require("./../models/User.model");
const Tips = require("./../models/Tips.models");
const users = require("./users-mock-data");
const tips = require("./tips-mock-data");
//const DB_NAME = "DB_Scoop";
mongoose
 
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((x) => {
    const pr = x.connection.dropDatabase();
    return pr;
  })
  .then(() => {
    const pr = User.create(users);
    return pr;
  })
  .then((createdUsers) => {
    console.log(`Created ${createdUsers.length} users`);
    const pr = Tips.create(tips);
    return pr;
  })

  .then((createdTips) => {
    console.log(`Inserted ${createdTips.length} tips`);
    mongoose.connection.close();
  })
  .catch((err) => console.log(err));