// CREATE THE SCHEMA
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const tipsSchema = new Schema(
    {
        title: {type: String,required: true},
        description: {type: String, maxlength: 120},
        text: {type: String, maxlength: 600},
        image: {type: String},
        user: [{type: Schema.Types.ObjectId, ref: "User" }]
    },
    {
      timestamps: {
        createdAt: "created_at",
        updatedAt: "updated_at"
      },
    }
    );

 // CREATE THE MODEL
const Tip = mongoose.model("Tip", userSchema);

// EXPORT THE MODEL
module.exports = Tips;


