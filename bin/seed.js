const mongoose = require("mongoose");
const User = require("./../models/User.model");
const Tips = require("./../models/Tips.models");

const users = require("./users-mock-data");
const tips = require("./tips-mock-data");

const DB_NAME = "scoopdb";

mongoose
  .connect(`mongodb://localhost:27017/${DB_NAME}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then((x) =>{
      const pr = x.connection.dropDatabase();
      return pr;
  })
  .then(() =>{
      const pr = User.create(users);
      return pr;
  })
  .then((createdUsers) => {
      console.log(`Created ${createdUsers.length} users`);

      const updatedTips = tips.map((tipsObj, i) =>{
          const user = createdUsers[i];
          tipsObj.user = user._id;

          return userObj;
      });
      
      const pr = Tips.create(updatedTips);
      return pr;
  })
  .then((createdTips) =>{
      console.log(`Inserted ${createdTips.length} tips`);
      mongoose.connection.close();
  })
  .catch((err) => console.log(err));