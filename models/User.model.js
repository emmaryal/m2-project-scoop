// CREATE THE SCHEMA
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
    { 
        name: {type: String, unique: true,},
        password: {type: String, required: true}, // (validated bcrypt),
        createdAt: {type: Date, required: true, default: Date.now()}
    }
    );

// CREATE THE MODEL
const User = mongoose.model("User", userSchema);

// EXPORT THE MODEL
module.exports = User;
