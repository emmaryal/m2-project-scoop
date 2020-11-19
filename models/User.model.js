// CREATE THE SCHEMA
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
    {
        name: {type: String, unique: true, required: true},
        password: {type: String, required: true}, // (validated bcrypt),
        tips: [{type: Schema.Types.ObjectId, ref: "Tips" }]
    },
    {
      timestamps: {
        createdAt: "created_at",
      },
    }
    );

 // CREATE THE MODEL
const User = mongoose.model("User", userSchema);

// EXPORT THE MODEL
module.exports = User;

