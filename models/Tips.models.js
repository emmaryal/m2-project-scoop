// CREATE THE SCHEMA
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const tipsSchema = new Schema(
    {
        _id: Schema.Types.ObjectId,
        title: {type: String,required: true},
        description: {type: String, maxlength: 120},
        text: {type: String, maxlength: 600},
        image: {type: String},
        userId: {type: Schema.Types.ObjectId, ref: "User" },
        createdAt: {type: Date, required: true, default: Date.now},
        updatedAt: {type: Date}
    }
    );

 // CREATE THE MODEL
const Tip = mongoose.model("Tip", userSchema);

// EXPORT THE MODEL
module.exports = Tips;



