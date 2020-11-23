const Tip = require("../../models/Tip.model");
const {findUserById, ensureUserExists} = require("../user/findUserById");

const createTip = async (tipData) =>  {
   return await findUserById(tipData.userId)
        .then(ensureUserExists)
        .then(async () => await Tip.saveTip(tipData))
        .catch(err => {throw err})
}

module.exports = createTip