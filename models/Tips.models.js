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
    },
    {   
        timestamps:{
        createdAt: "created_at",
        updatedAt: "upsated_at"
        }, 
    }
    );

 // CREATE THE MODEL
const Tips = mongoose.model("Tip", tipsSchema);

// EXPORT THE MODEL
module.exports = Tips;



