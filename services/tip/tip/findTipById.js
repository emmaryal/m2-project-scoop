const Tip = require("../../models/Tip.model")

const findTipById = async (id) => {
    return await Tip.findTipById(id)
}

module.exports = findTipById




