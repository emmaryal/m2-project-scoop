const Tip = require("../../models/Tips.models")

const findTipById = async (id) => {
    return await Tip.findTipById(id)
}

module.exports = findTipById




