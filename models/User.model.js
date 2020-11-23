// CREATE THE SCHEMA
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
    { 
        email: {type: String, unique: true},
        name: {type: String},
        password: {type: String, required: true}, 
        
        createdAt: {type: Date, required: true, default: Date.now()}
    }
    );

// CREATE THE MODEL
const User = mongoose.model("User", userSchema);

// EXPORT THE MODEL
module.exports = User;
