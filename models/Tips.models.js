// CREATE THE SCHEMA
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const tipsSchema = new Schema(
    {
        title: {type: String,required: true},
        description: {type: String, maxlength: 120},
        text: {type: String, maxlength: 600},
        image: {type: String},
        userId: {type: Schema.Types.ObjectId, ref: "User" },
        createdAt: {type: Date, required: true, default: Date.now()},
        updatedAt: {type: Date}
    }
    );

 // CREATE THE MODEL
const Tips = mongoose.model("Tip", tipsSchema);

Tips.findTipById = (id) => {
    return Tips.findById(id)
        .exec()
        .then((data) => {
            return data;
        })
}

// EXPORT THE MODEL
module.exports = Tips;
